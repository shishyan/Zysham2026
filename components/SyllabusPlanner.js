const plannerMap = {
  science: [
    { title: 'Kinematics', difficulty: 'High', weightage: 'Very high', note: 'Strengthen algebra and graphs first.' },
    { title: 'Rotational Motion', difficulty: 'Very high', weightage: 'High', note: 'Revision gaps here create long-term confusion.' },
    { title: 'Organic Chemistry', difficulty: 'High', weightage: 'High', note: 'Miss two weeks and the backlog compounds fast.' },
  ],
  commerce: [
    { title: 'Basic Accounting', difficulty: 'Medium', weightage: 'High', note: 'Consistency matters more than intensity.' },
    { title: 'Economics Principles', difficulty: 'Medium', weightage: 'High', note: 'Use short case examples to make theory sticky.' },
    { title: 'Business Studies', difficulty: 'Medium', weightage: 'Medium', note: 'A weekly review keeps the concepts fresh.' },
  ],
  humanities: [
    { title: 'History Analysis', difficulty: 'Medium', weightage: 'High', note: 'Map timelines and core themes weekly.' },
    { title: 'Psychology Basics', difficulty: 'Medium', weightage: 'High', note: 'Build a short note system for interpretation.' },
    { title: 'Essay Writing', difficulty: 'Medium', weightage: 'Medium', note: 'Daily practice makes your writing clearer.' },
  ],
};

export function renderSyllabusPlanner(container, state) {
  if (!container) return;

  const stream = state.streamChoice || 'science';
  const entries = plannerMap[stream] || plannerMap.science;

  container.innerHTML = `
    <div class="planner-grid">
      <div class="planner-sidebar-card">
        <h4>${stream.charAt(0).toUpperCase() + stream.slice(1)} planner</h4>
        <ul>
          ${entries
            .map(
              (entry) => `
                <li>
                  <strong>${entry.title}</strong>
                  <span>${entry.note}</span>
                </li>
              `,
            )
            .join('')}
        </ul>
      </div>
      <div class="planner-main-card">
        <h4>Weekly rhythm</h4>
        <div class="planner-row">
          <div>
            <b>Focus</b>
            <p>Spend 45 mins on one hard chapter and 20 mins on quick revision.</p>
          </div>
          <div>
            <b>Today</b>
            <p>Pick one chapter, add one task, and make the next step visible.</p>
          </div>
        </div>
        <div class="planner-row">
          <div>
            <b>Calendar</b>
            <p>Mon: theory, Tue: practice, Wed: review, Thu: testing, Fri: catch-up.</p>
          </div>
          <div>
            <b>Task</b>
            <p>Use the quick-add panel to keep one tiny action visible each day.</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
