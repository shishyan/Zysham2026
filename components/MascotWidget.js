export function renderMascotWidget(container, state, onEdit, onConfirm) {
  if (!container) return;

  const shouldShow = state.streamChoice === 'science' && ['jee', 'neet'].includes(state.examGoal || 'none');
  if (!shouldShow) {
    container.innerHTML = '';
    container.classList.remove('show');
    return;
  }

  container.classList.add('show');
  container.innerHTML = `
    <div class="mascot-shell ${state.mascotOpen ? 'expanded' : ''}">
      <button class="mascot-toggle" data-mascot-toggle="toggle">Reality Check</button>
      <div class="mascot-body">
        <div class="speech-bubble">
          <p>Hold on! Science + ${state.examGoal?.toUpperCase() || 'JEE'} is intense. NCERT Physics will not make sense right away, and missing a couple of weeks of Organic Chemistry creates a scary backlog.</p>
          <p>Why do you want to pursue this path?</p>
          <input id="mascotAnswer" placeholder="Tell me why this matters to you" />
          <div class="mascot-actions">
            <button data-mascot-action="confirm">Yes, I'm Ready!</button>
            <button data-mascot-action="edit">Edit Stream</button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelector('[data-mascot-toggle]').addEventListener('click', () => {
    state.mascotOpen = !state.mascotOpen;
    renderMascotWidget(container, state, onEdit, onConfirm);
  });

  container.querySelector('[data-mascot-action="confirm"]').addEventListener('click', () => {
    const value = container.querySelector('#mascotAnswer').value.trim();
    state.mascotMessage = value || 'I am ready to work for it.';
    onConfirm(value || 'I am ready to work for it.');
  });

  container.querySelector('[data-mascot-action="edit"]').addEventListener('click', () => {
    onEdit();
  });
}
