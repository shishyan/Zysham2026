const guidanceChoices = [
  {
    id: 'stream',
    badge: '01 / STREAM',
    title: 'Post-10th Stream Selection',
    copy: 'Which stream should I choose? Explore Science, Commerce, and Humanities before you commit.',
  },
  {
    id: 'workspace',
    badge: '02 / CHECK-IN',
    title: 'Mid-11th Check-In',
    copy: 'Feeling behind? Get a reality check, a planner, and a clearer next step.',
  },
  {
    id: 'career',
    badge: '03 / COLLEGE',
    title: '12th / Post-12th Guidance',
    copy: 'Plan your degree, college goals, and the admissions path that fits your energy.',
  },
];

export function renderOnboardingForm(container, state, onSelect) {
  container.innerHTML = guidanceChoices
    .map((choice) => {
      const selected = state.intent === choice.id ? 'selected' : '';
      return `
        <button class="guidance-card ${selected}" data-guidance="${choice.id}">
          <span class="guidance-badge">${choice.badge}</span>
          <strong>${choice.title}</strong>
          <p>${choice.copy}</p>
        </button>
      `;
    })
    .join('');

  container.querySelectorAll('[data-guidance]').forEach((button) => {
    button.addEventListener('click', () => onSelect(button.dataset.guidance));
  });
}
