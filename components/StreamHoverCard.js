const streamProfiles = [
  {
    id: 'science',
    title: 'Science',
    headline: 'Heavy, high-stakes, and deeply rewarding.',
    blurb: 'Expect concept-heavy work, strong fundamentals, and a lot of consistency. This path is great if you enjoy problem-solving and long-term discipline.',
    expectations: 'Physics, Chemistry, Maths/Biology, and a strong habit of revising every week.',
    caution: 'Backlogs can compound quickly if you skip basics or wait too long to revise.',
  },
  {
    id: 'commerce',
    title: 'Commerce',
    headline: 'Practical, analytical, and business-facing.',
    blurb: 'You are likely to enjoy structured problem solving, finance, and decision-making. It opens doors to business, economics, and management.',
    expectations: 'Economics, Accountancy / Business Studies, and comfort with numbers and casework.',
    caution: 'It may feel less obvious at first if you want a traditional exam-heavy route.',
  },
  {
    id: 'humanities',
    title: 'Humanities',
    headline: 'Ideas, writing, depth, and perspective.',
    blurb: 'This path rewards curiosity, reading, writing, and the ability to connect ideas. It is often powerful for law, public policy, and social sciences.',
    expectations: 'History, Psychology, Economics, and the willingness to build strong written communication.',
    caution: 'The outcomes can feel less obvious at the start unless you build clarity around your interests.',
  },
];

const allSubjects = [
  'Physics',
  'Chemistry',
  'Maths',
  'Biology',
  'Economics',
  'Accountancy',
  'Business Studies',
  'History',
  'Psychology',
];

const subjectMap = {
  science: ['Physics', 'Chemistry', 'Maths', 'Biology'],
  commerce: ['Economics', 'Business Studies', 'Accountancy'],
  humanities: ['History', 'Psychology'],
};

const realityQuestionsByStream = {
  science: [
    {
      id: 'science-1',
      prompt: 'Science demands around 4-5 hours of dedicated self-study daily alongside school/coaching. Are you ready for this level of consistency?',
      yesLabel: 'Yes, I can handle this!',
      noLabel: 'No, that sounds overwhelming',
    },
    {
      id: 'science-2',
      prompt: 'Topics build directly on each other, and missing 2 weeks of fundamentals creates painful backlogs. Can you commit to weekly revisions?',
      yesLabel: 'Yes, I can stay consistent.',
      noLabel: 'Not yet, I need more flexibility.',
    },
    {
      id: 'science-3',
      prompt: 'The pressure gets intense at times. Are you willing to push through the hard stretches instead of avoiding them?',
      yesLabel: 'Yes, I can keep going.',
      noLabel: 'I might need a softer path.',
    },
    {
      id: 'science-4',
      prompt: 'Would you still choose this path if your score or ranking does not look impressive at first?',
      yesLabel: 'Yes, I would stay grounded.',
      noLabel: 'Probably not, that would feel discouraging.',
    },
  ],
  commerce: [
    {
      id: 'commerce-1',
      prompt: 'Commerce rewards organised thinking and steady work over a long stretch. Can you stay consistent with case-based practice?',
      yesLabel: 'Yes, I can handle that.',
      noLabel: 'No, that sounds tiring.',
    },
    {
      id: 'commerce-2',
      prompt: 'Business topics often connect to real-world choices and numbers. Are you comfortable with practical decision-making?',
      yesLabel: 'Yes, I like that challenge.',
      noLabel: 'Not really, I prefer clearer structure.',
    },
    {
      id: 'commerce-3',
      prompt: 'The path can feel less obvious at the start, so you will need patience while the fit becomes clearer. Can you stay curious?',
      yesLabel: 'Yes, I can stay patient.',
      noLabel: 'I might need a clearer signal first.',
    },
    {
      id: 'commerce-4',
      prompt: 'Would you be willing to build skills in accounts, economics, and business communication even if the outcome is not immediate?',
      yesLabel: 'Yes, I can grow into it.',
      noLabel: 'I would rather avoid that uncertainty.',
    },
  ],
  humanities: [
    {
      id: 'humanities-1',
      prompt: 'Humanities rewards reading, writing, and reflection more than memorising quick facts. Can you work with that style?',
      yesLabel: 'Yes, that sounds right for me.',
      noLabel: 'No, I prefer a more concrete path.',
    },
    {
      id: 'humanities-2',
      prompt: 'You will need to connect ideas and explain them clearly over time. Are you ready to build that muscle?',
      yesLabel: 'Yes, I can do that.',
      noLabel: 'Not yet, I need more clarity.',
    },
    {
      id: 'humanities-3',
      prompt: 'The path can feel less obvious to others, so you will need confidence in your own interests. Can you trust your own direction?',
      yesLabel: 'Yes, I can trust it.',
      noLabel: 'I would rather avoid that uncertainty.',
    },
    {
      id: 'humanities-4',
      prompt: 'Would you be willing to keep building your voice and perspective even if the payoff is not immediate?',
      yesLabel: 'Yes, I can stay patient.',
      noLabel: 'I need a more concrete outcome.',
    },
  ],
};

function getRecommendation(selectedSubjects) {
  const fitScores = Object.fromEntries(
    Object.entries(subjectMap).map(([stream, subjects]) => [stream, subjects.filter((subject) => selectedSubjects.includes(subject)).length]),
  );
  const bestStream = Object.entries(fitScores).sort((a, b) => b[1] - a[1])[0];
  return bestStream && bestStream[1] > 0 ? bestStream[0] : 'science';
}

function makeConfetti(container) {
  const layer = container.querySelector('.confetti-layer');
  if (!layer) return;
  layer.innerHTML = '';
  Array.from({ length: 24 }).forEach(() => {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = ['#b46b3b', '#6f4b2b', '#f0c27b', '#d67d4b'][Math.floor(Math.random() * 4)];
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    layer.appendChild(piece);
  });
}

export function renderStreamCards(container, state, onStreamSelect, onExamSelect, onConfirm, onEdit, onSubjectToggle, onRealityAnswer, onBackToPicker, onProceed) {
  if (!container) return;

  const selectedStream = state.streamChoice || state.previewStream || 'science';
  const preview = streamProfiles.find((profile) => profile.id === selectedStream) || streamProfiles[0];
  const selectedSubjects = [...state.selections];
  const recommendation = getRecommendation(selectedSubjects);
  const recommendationLabel = recommendation.charAt(0).toUpperCase() + recommendation.slice(1);
  const streamSection = container.closest('.view');
  const sectionHeading = streamSection?.querySelector('.section-head');
  const isRealityStep = state.streamConfirmed && !state.realityOutcome;
  const isResultStep = Boolean(state.realityOutcome);

  if (sectionHeading) {
    sectionHeading.style.display = isRealityStep || isResultStep ? 'none' : '';
  }
  if (streamSection) {
    streamSection.classList.toggle('stream-quiz-mode', isRealityStep || isResultStep);
  }

  if (!state.streamConfirmed && !state.realityOutcome) {
    container.innerHTML = `
      <div class="stream-step stream-step-1">
        <div class="stream-question">
          <h3>What subjects, as a group, is your school offering you?</h3>
          <p>Select the subjects available to you, then choose the stream that fits your group.</p>
        </div>
        <div class="recommendation-bar">
          <span class="eyebrow">Strong fit right now</span>
          <strong>${recommendationLabel} is a strong fit right now.</strong>
        </div>
        <div class="stream-stage">
          <div class="subject-grid">
            ${allSubjects
              .map(
                (subject) => `
                  <label class="subject-pill ${state.selections.has(subject) ? 'selected' : ''}">
                    <input type="checkbox" value="${subject}" ${state.selections.has(subject) ? 'checked' : ''} />
                    ${subject}
                  </label>
                `,
              )
              .join('')}
          </div>
          <div class="stream-grid">
            <div class="stream-card-grid">
              ${streamProfiles
                .map((profile) => {
                  const active = profile.id === state.streamChoice ? 'active' : '';
                  const highlight = profile.id === recommendation ? 'recommended' : '';
                  return `
                    <button class="stream-card ${active} ${highlight}" data-stream="${profile.id}">
                      <strong>${profile.title}</strong>
                      <span>${profile.headline}</span>
                      <em>${profile.id === recommendation ? 'Strong fit' : 'Preview'}</em>
                    </button>
                  `;
                })
                .join('')}
            </div>
            <div class="stream-preview-panel">
              <span class="eyebrow">Hover preview</span>
              <h4>${preview.title}</h4>
              <p>${preview.blurb}</p>
              <p class="preview-strong">${preview.title === recommendationLabel ? 'This is the strongest match from your selected subjects.' : 'This is a useful preview of what the path looks like.'}</p>
              <div class="stream-preview-meta">
                <div><b>Expectations</b><p>${preview.expectations}</p></div>
                <div><b>What to watch for</b><p>${preview.caution}</p></div>
              </div>
              <p class="preview-hint">Click a card to choose a stream, then lock it in.</p>
              <button class="primary stream-select-button" data-action="confirm-stream" ${!state.streamChoice ? 'disabled' : ''}>Select Stream</button>
            </div>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.subject-pill input').forEach((input) => {
      input.addEventListener('change', () => onSubjectToggle(input.value));
    });

    container.querySelectorAll('[data-stream]').forEach((button) => {
      button.addEventListener('mouseenter', () => onStreamSelect(button.dataset.stream, true));
      button.addEventListener('click', () => onStreamSelect(button.dataset.stream));
    });

    container.querySelectorAll('[data-action="confirm-stream"]').forEach((button) => {
      button.addEventListener('click', () => onConfirm());
    });

    return;
  }

  if (isRealityStep) {
    const questions = realityQuestionsByStream[selectedStream] || realityQuestionsByStream.science;
    const currentQuestion = questions[state.realityStepIndex || 0];

    container.innerHTML = `
      <div class="reality-shell">
        <div class="reality-card">
          <div class="reality-bubble">${currentQuestion.prompt}</div>
          <div class="reality-avatar">
            <div class="avatar-face">${state.mentor === 'cat' ? '🐱' : '🐶'}</div>
          </div>
          <div class="reality-options">
            <button class="reality-option yes" data-answer="yes">${currentQuestion.yesLabel}</button>
            <button class="reality-option no" data-answer="no">${currentQuestion.noLabel}</button>
          </div>
          <p class="reality-progress">${(state.realityStepIndex || 0) + 1} / ${questions.length}</p>
        </div>
      </div>
    `;

    container.querySelectorAll('[data-answer]').forEach((button) => {
      button.addEventListener('click', () => onRealityAnswer(button.dataset.answer));
    });

    return;
  }

  const questions = realityQuestionsByStream[selectedStream] || realityQuestionsByStream.science;
  const positiveAnswers = state.realityAnswers.filter((answer) => answer === 'yes').length;
  const isPositive = positiveAnswers >= Math.ceil(questions.length / 2);

  if (isPositive) {
    container.innerHTML = `
      <div class="reality-shell">
        <div class="reality-card result-card success-card">
          <div class="confetti-layer"></div>
          <div class="reality-bubble success-bubble">Congrats! You have selected ${preview.title}!</div>
          <div class="reality-avatar">
            <div class="avatar-face">${state.mentor === 'cat' ? '🐱' : '🐶'}</div>
          </div>
          <p class="result-copy">Your answers point to a strong, grounded fit for this stream. You can head into the syllabus tracker now.</p>
          <button class="primary" data-action="proceed">Proceed to Dashboard / Syllabus Tracker</button>
        </div>
      </div>
    `;
    makeConfetti(container);
    container.querySelector('[data-action="proceed"]').addEventListener('click', () => onProceed());
    return;
  }

  container.innerHTML = `
    <div class="reality-shell">
      <div class="reality-card result-card">
        <div class="reality-bubble neutral-bubble">It looks like this stream might feel overwhelming based on your current preferences. Let's revisit your choices!</div>
        <div class="reality-avatar">
          <div class="avatar-face">${state.mentor === 'cat' ? '🐱' : '🐶'}</div>
        </div>
        <button class="primary" data-action="back">Back to Stream Selection</button>
      </div>
    </div>
  `;

  container.querySelector('[data-action="back"]').addEventListener('click', () => onBackToPicker());
}
