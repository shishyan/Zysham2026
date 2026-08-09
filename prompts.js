try {
  const saved = JSON.parse(localStorage.getItem('zysham2026-state-v2'));
  if (['aurora', 'teal', 'violet'].includes(saved?.theme)) document.body.dataset.theme = saved.theme;
} catch {
  document.body.dataset.theme = 'aurora';
}

const journalEntries = Array.isArray(window.PROMPT_JOURNAL_ENTRIES)
  ? window.PROMPT_JOURNAL_ENTRIES
  : [];

if (journalEntries.length) {
  const list = document.querySelector('.prompt-list');
  const count = document.querySelector('#journal-count');
  const fragment = document.createDocumentFragment();

  journalEntries.forEach((entry, index) => {
    const article = document.createElement('article');
    article.className = `prompt-entry${index === journalEntries.length - 1 ? ' current' : ''}`;

    const meta = document.createElement('div');
    meta.className = 'prompt-meta';

    const number = document.createElement('span');
    number.textContent = String(index + 1).padStart(3, '0');

    const timestamp = document.createElement('span');
    const instant = new Date(entry.timestamp);
    timestamp.textContent = Number.isNaN(instant.valueOf())
      ? 'CHAT PROMPT'
      : instant.toLocaleString([], {
          dateStyle: 'medium',
          timeStyle: 'short',
        });

    const quote = document.createElement('blockquote');
    quote.textContent = entry.message;

    meta.append(number, timestamp);
    article.append(meta, quote);
    fragment.append(article);
  });

  list.replaceChildren(fragment);
  count.textContent = `${journalEntries.length} prompts documented`;
}

const optimizedEntries = Array.isArray(window.OPTIMIZED_REBUILD_PROMPTS)
  ? window.OPTIMIZED_REBUILD_PROMPTS
  : [];

const optimizedContainer = document.querySelector('.optimized-prompt-items');
if (optimizedContainer && optimizedEntries.length) {
  const fragment = document.createDocumentFragment();

  optimizedEntries.forEach((entry) => {
    const article = document.createElement('article');
    article.className = 'optimized-prompt-card';

    const meta = document.createElement('div');
    meta.className = 'optimized-prompt-meta';
    const title = document.createElement('h3');
    title.textContent = entry.title;
    const purpose = document.createElement('p');
    purpose.textContent = entry.purpose;
    meta.append(title, purpose);

    const body = document.createElement('div');
    body.className = 'optimized-prompt-body';
    const quote = document.createElement('blockquote');
    quote.textContent = entry.prompt;
    const copy = document.createElement('button');
    copy.className = 'copy-prompt';
    copy.type = 'button';
    copy.textContent = 'Copy prompt';
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(entry.prompt);
        copy.textContent = 'Copied';
      } catch {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(quote);
        selection.removeAllRanges();
        selection.addRange(range);
        copy.textContent = 'Selected—copy now';
      }
      window.setTimeout(() => { copy.textContent = 'Copy prompt'; }, 1800);
    });
    body.append(quote, copy);
    article.append(meta, body);
    fragment.append(article);
  });

  optimizedContainer.append(fragment);
}

const journalTabs = [...document.querySelectorAll('[data-journal-view]')];
const journalPanels = {
  raw: document.querySelector('#raw-prompts-panel'),
  optimized: document.querySelector('#optimized-prompts-panel')
};

function showJournalView(view, updateHash = true) {
  const selectedView = view === 'optimized' ? 'optimized' : 'raw';
  journalTabs.forEach((tab) => {
    const active = tab.dataset.journalView === selectedView;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  Object.entries(journalPanels).forEach(([name, panel]) => {
    if (panel) panel.hidden = name !== selectedView;
  });
  if (updateHash) history.replaceState(null, '', selectedView === 'optimized' ? '#optimized' : '#original');
}

journalTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showJournalView(tab.dataset.journalView));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1;
    const next = journalTabs[(index + direction + journalTabs.length) % journalTabs.length];
    showJournalView(next.dataset.journalView);
    next.focus();
  });
});

showJournalView(location.hash === '#optimized' ? 'optimized' : 'raw', false);
