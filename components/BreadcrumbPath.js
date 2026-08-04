export function renderBreadcrumbPath(container, items, onSelect) {
  if (!container) return;

  container.innerHTML = `
    <div class="path-pills">
      ${items
        .map((item, index) => {
          const active = index === items.length - 1 ? 'active' : '';
          return `
            <button class="path-pill ${active}" data-path="${item.id}">
              <span>${item.label}</span>
            </button>
          `;
        })
        .join('')}
    </div>
  `;

  container.querySelectorAll('[data-path]').forEach((button) => {
    button.addEventListener('click', () => onSelect(button.dataset.path));
  });
}
