try {
  const saved = JSON.parse(localStorage.getItem('zysham2026-state-v2'));
  if (['aurora', 'teal', 'violet'].includes(saved?.theme)) document.body.dataset.theme = saved.theme;
} catch {
  document.body.dataset.theme = 'aurora';
}
