param(
  [ValidateRange(1, 720)]
  [int]$Hours = 24
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$outputPath = Join-Path $repoRoot 'prompt-journal-data.js'
$sessionRoots = @(
  (Join-Path $env:USERPROFILE '.codex\sessions'),
  (Join-Path $env:USERPROFILE '.codex\archived_sessions')
) | Where-Object { Test-Path -LiteralPath $_ }

if (-not $sessionRoots) {
  throw 'No Codex session directories were found.'
}

if (-not (Get-Command rg -ErrorAction SilentlyContinue)) {
  throw 'Prompt Journal sync requires ripgrep (rg), which is not available on PATH.'
}

function Protect-PublicPrompt([string]$text) {
  # The journal is deployed publicly. Preserve the prompt, but never publish credential values.
  $protected = [regex]::Replace(
    $text,
    '(?i)(\bpassword\s+is\s+)([^\s,.;]+)',
    { param($match) $match.Groups[1].Value + '[REDACTED]' }
  )
  $protected = [regex]::Replace(
    $protected,
    '(?i)(\bkeep\s+it\s+)([^\s,.;]+)(\s+as\s+the\s+password)',
    { param($match) $match.Groups[1].Value + '[REDACTED]' + $match.Groups[3].Value }
  )
  return $protected
}

$cutoffUtc = (Get-Date).ToUniversalTime().AddHours(-$Hours)
$captured = @()

& rg --no-heading --no-filename 'user_message' $sessionRoots | ForEach-Object {
  try {
    $record = $_ | ConvertFrom-Json
    if ($record.type -ne 'event_msg' -or $record.payload.type -ne 'user_message') { return }

    $timestampUtc = [datetime]::Parse($record.timestamp).ToUniversalTime()
    if ($timestampUtc -lt $cutoffUtc) { return }

    $clientId = [string]$record.payload.client_id
    if ([string]::IsNullOrWhiteSpace($clientId)) {
      $bytes = [Text.Encoding]::UTF8.GetBytes("$($record.timestamp)`n$($record.payload.message)")
      $clientId = 'legacy-' + [Convert]::ToHexString(
        [Security.Cryptography.SHA256]::HashData($bytes)
      ).ToLowerInvariant()
    }

    $captured += [pscustomobject]@{
      id = $clientId
      timestamp = $timestampUtc.ToString('o')
      message = Protect-PublicPrompt(([string]$record.payload.message).TrimEnd())
    }
  } catch {
    # Ignore unrelated or partially written JSONL records while a chat is active.
  }
}

$existing = @()
if (Test-Path -LiteralPath $outputPath) {
  $source = Get-Content -Raw -LiteralPath $outputPath
  $match = [regex]::Match($source, '(?s)^window\.PROMPT_JOURNAL_ENTRIES\s*=\s*(\[.*\]);\s*$')
  if ($match.Success) {
    $parsed = $match.Groups[1].Value | ConvertFrom-Json
    $existing = @($parsed | ForEach-Object { $_ })
  }
}

$byId = @{}
foreach ($entry in @($existing) + @($captured)) {
  if (-not $entry.id) { continue }
  if (-not $byId.ContainsKey([string]$entry.id)) {
    $byId[[string]$entry.id] = $entry
    continue
  }

  if ([datetime]::Parse($entry.timestamp) -lt [datetime]::Parse($byId[[string]$entry.id].timestamp)) {
    $byId[[string]$entry.id] = $entry
  }
}

$ordered = @($byId.Values | Sort-Object { [datetime]::Parse($_.timestamp) }, id)
$json = ConvertTo-Json -InputObject $ordered -Depth 5
$javascript = "window.PROMPT_JOURNAL_ENTRIES = $json;`n"
[IO.File]::WriteAllText($outputPath, $javascript, [Text.UTF8Encoding]::new($false))

Write-Output "Prompt Journal now contains $($ordered.Count) distinct prompts."
