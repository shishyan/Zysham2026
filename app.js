import { renderOnboardingForm } from './components/OnboardingForm.js';
import { renderBreadcrumbPath } from './components/BreadcrumbPath.js';
import { renderStreamCards } from './components/StreamHoverCard.js';
import { renderMascotWidget } from './components/MascotWidget.js';
import { renderSyllabusPlanner } from './components/SyllabusPlanner.js';

const $ = (s) => document.querySelector(s);
const views = [...document.querySelectorAll('.view')];
const state = {
  mentor: 'cat',
  name: '',
  email: '',
  grade: '10',
  gender: '',
  selections: new Set(),
  intent: '',
  streamChoice: '',
  streamConfirmed: false,
  previewStream: 'science',
  examGoal: 'none',
  mascotOpen: false,
  mascotMessage: '',
  realityStepIndex: 0,
  realityAnswers: [],
  realityOutcome: '',
  realityQuestionCount: 4,
  currentView: 'signup',
};

const mentorCopy = {
  cat: 'Pick a path with your eyes open. The hard bits are manageable once they are visible.',
  dog: 'We can make a plan for this. One small, honest step at a time is enough to start.',
};

const labels = {
  dashboard: 'Home',
  onboarding: 'Home / Onboarding',
  signup: 'Home / Profile',
  companion: 'Home / Profile / Companion',
  stream: 'Home / Stream selection',
  workspace: 'Home / Mid-11th bewilderment',
  career: 'Home / Career selection',
};

function getBreadcrumbItems() {
  const items = [{ id: 'home', label: 'Home' }];
  if (state.currentView === 'stream' || state.streamChoice || state.streamConfirmed || state.examGoal !== 'none') {
    items.push({ id: 'post10', label: 'Post-10th' });
  }
  if (state.streamChoice) {
    items.push({ id: 'streamChoice', label: `${state.streamChoice.charAt(0).toUpperCase()}${state.streamChoice.slice(1)} Stream` });
  }
  if (state.examGoal && state.examGoal !== 'none') {
    const goalLabel = state.examGoal === 'jee' ? 'JEE Prep' : state.examGoal === 'neet' ? 'NEET Prep' : 'Board planning';
    items.push({ id: 'examGoal', label: goalLabel });
  }
  return items;
}

function renderBreadcrumb() {
  renderBreadcrumbPath($('#breadcrumbBar'), getBreadcrumbItems(), (pathId) => {
    if (pathId === 'home') {
      state.intent = '';
      state.streamChoice = '';
      state.streamConfirmed = false;
      state.examGoal = 'none';
      state.mascotOpen = false;
      go('dashboard');
      return;
    }
    if (pathId === 'post10') {
      state.streamConfirmed = false;
      state.examGoal = 'none';
      go('stream');
      return;
    }
    if (pathId === 'streamChoice') {
      state.examGoal = 'none';
      go('stream');
      return;
    }
  });
}

function go(id) {
  views.forEach((view) => view.classList.toggle('active', view.id === id));
  state.currentView = id;
  $('#crumbs').textContent = labels[id] || getBreadcrumbItems().map((item) => item.label).join(' / ');
  $('#mentorPop').classList.toggle('show', ['stream', 'workspace'].includes(id));
  if (['stream', 'workspace'].includes(id)) showMentor();

  if (id !== 'stream') {
    $('#stream').classList.remove('stream-quiz-mode');
    const streamHeading = $('#stream .section-head');
    if (streamHeading) streamHeading.style.display = '';
  }

  if (id === 'dashboard') {
    renderOnboardingForm($('#guidanceCards'), state, handleGuidanceSelect);
  }

  if (id === 'stream') {
    renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
  }

  if (id === 'workspace') {
    renderSyllabusPlanner($('#plannerShell'), state);
    renderPlannerSidebar($('#plannerSidebar'), state);
  }

  renderBreadcrumb();
  if (id === 'stream') {
    $('#mascotWidget').innerHTML = '';
    $('#mascotWidget').classList.remove('show');
  } else {
    renderMascotWidget($('#mascotWidget'), state, editStream, confirmMascot);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleGuidanceSelect(id) {
  state.intent = id;
  if (id === 'stream') {
    state.streamChoice = '';
    state.examGoal = 'none';
    go('stream');
    return;
  }
  if (id === 'workspace') {
    if (!state.streamChoice) state.streamChoice = 'science';
    go('workspace');
    return;
  }
  if (id === 'career') {
    go('career');
  }
}

function selectStream(stream, preview = false) {
  state.previewStream = stream;
  state.streamChoice = stream;
  if (preview) {
    renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
    return;
  }
  renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
}

function selectExam(exam) {
  state.examGoal = exam;
  renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
}

function confirmStreamSelection() {
  if (!state.streamChoice) return;
  state.streamConfirmed = true;
  state.realityOutcome = '';
  state.realityAnswers = [];
  state.realityStepIndex = 0;
  state.realityQuestionCount = state.streamChoice === 'science' ? 4 : state.streamChoice === 'commerce' ? 4 : 4;
  renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
}

function answerRealityQuestion(answer) {
  state.realityAnswers.push(answer);
  if (state.realityAnswers.length < state.realityQuestionCount) {
    state.realityStepIndex += 1;
    renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
    return;
  }

  const positiveCount = state.realityAnswers.filter((item) => item === 'yes').length;
  state.realityOutcome = positiveCount >= Math.ceil(state.realityQuestionCount / 2) ? 'positive' : 'negative';
  renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
}

function backToStreamSelection() {
  state.streamConfirmed = false;
  state.realityOutcome = '';
  state.realityAnswers = [];
  state.realityStepIndex = 0;
  state.previewStream = state.streamChoice || 'science';
  go('stream');
}

function proceedToTracker() {
  state.intent = 'workspace';
  go('workspace');
}

function editStream() {
  state.streamConfirmed = false;
  state.examGoal = 'none';
  state.realityOutcome = '';
  state.realityAnswers = [];
  state.realityStepIndex = 0;
  state.mascotOpen = false;
  state.previewStream = state.streamChoice || 'science';
  go('stream');
}

function confirmMascot(message) {
  state.mascotMessage = message;
  state.mascotOpen = true;
  renderMascotWidget($('#mascotWidget'), state, editStream, confirmMascot);
}

document.querySelectorAll('[data-go]').forEach((button) => {
  button.addEventListener('click', () => go(button.dataset.go));
});

let dragging = false;
let startY = 0;
const zipper = $('#zipper');

function unzip() {
  $('#zipperScreen').classList.add('open');
  setTimeout(() => {
    $('#zipperScreen').style.display = 'none';
  }, 1000);
}

zipper.addEventListener('dblclick', unzip);
zipper.addEventListener('pointerdown', (event) => {
  dragging = true;
  startY = event.clientY;
  zipper.setPointerCapture(event.pointerId);
});
zipper.addEventListener('pointermove', (event) => {
  if (!dragging) return;
  const distance = Math.max(0, event.clientY - startY);
  zipper.style.transform = `translateX(-50%) translateY(${Math.min(distance, 120)}px)`;
  if (distance > 100) unzip();
});
zipper.addEventListener('pointerup', () => {
  dragging = false;
  zipper.style.transform = 'translateX(-50%)';
});

$('#signupForm').addEventListener('submit', (event) => {
  event.preventDefault();
  state.email = $('#signupForm input[type="email"]').value.trim();
  state.name = $('#displayName').value.trim();
  state.grade = $('#grade').value;
  state.gender = $('#gender').value;
  go('companion');
});

document.querySelectorAll('.companion-card').forEach((card) => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.companion-card').forEach((item) => item.classList.remove('selected'));
    card.classList.add('selected');
    state.mentor = card.dataset.mentor;
    updateOnboardingDisplay();
  });
});

function updateOnboardingDisplay() {
  if ($('#onboardingMentorName')) {
    $('#onboardingMentorName').textContent = state.mentor === 'cat' ? 'Milo the Cat' : 'Ollie the Dog';
    $('#onboardingMentorQuote').textContent = mentorCopy[state.mentor];
  }
}

function showMentor() {
  const name = state.name ? `${state.name}, ` : '';
  $('#mentorName').textContent = state.mentor === 'cat' ? 'MISO / STRAIGHT TALK' : 'OLLIE / WITH YOU';
  $('#mentorText').textContent = name + mentorCopy[state.mentor];
}

$('#closeMentor').onclick = () => $('#mentorPop').classList.remove('show');
$('#reset').onclick = () => go('dashboard');

function toggleSubject(subject) {
  if (state.selections.has(subject)) {
    state.selections.delete(subject);
  } else {
    state.selections.add(subject);
  }
  renderStreamCards($('#streamWorkflow'), state, selectStream, selectExam, confirmStreamSelection, editStream, toggleSubject, answerRealityQuestion, backToStreamSelection, proceedToTracker);
}

function updateStreams() {
  const selectedSubjects = [...state.selections];
  const science = selectedSubjects.filter((subject) => ['Physics', 'Chemistry', 'Maths', 'Biology'].includes(subject)).length;
  const commerce = selectedSubjects.filter((subject) => ['Economics', 'Business studies', 'Maths'].includes(subject)).length;
  const humanities = selectedSubjects.filter((subject) => ['History', 'Psychology', 'Economics'].includes(subject)).length;

  if (!selectedSubjects.length) {
    $('#streamResult').innerHTML = '<p class="eyebrow">YOUR STARTING POINT</p><h3>Choose a few subjects to see a path.</h3>';
    return;
  }

  const cards = [
    ['Science', science, 'Deep concepts, lab work, and entrance paths.'],
    ['Commerce', commerce, 'Systems, markets, business, and numbers.'],
    ['Humanities', humanities, 'People, ideas, culture, and society.'],
  ].sort((a, b) => b[1] - a[1]);

  $('#streamResult').innerHTML = `
    <p class="eyebrow">YOUR STARTING POINT</p>
    <h3>${state.streamChoice ? `${state.streamChoice.charAt(0).toUpperCase()}${state.streamChoice.slice(1)} is a strong fit right now.` : 'These paths are worth exploring.'}</h3>
    <div class="stream-cards">
      ${cards.map((card) => `<article><h4>${card[0]}</h4><p>${card[2]} ${card[1] ? `You selected ${card[1]} related subjects.` : 'Explore it beyond your current favourites.'}</p></article>`).join('')}
    </div>
  `;
}

function renderPlannerSidebar(container, state) {
  if (!container) return;
  const stream = state.streamChoice || 'science';
  container.innerHTML = `
    <div class="planner-sidebar-card">
      <h4>${stream.charAt(0).toUpperCase()}${stream.slice(1)} route</h4>
      <p>${state.examGoal && state.examGoal !== 'none' ? `Focused on ${state.examGoal.toUpperCase()} prep` : 'Flexible planning mode'}</p>
      <button class="planner-pill">Quick add</button>
      <button class="planner-pill">Review plan</button>
    </div>
  `;
}

$('#stickyToggle').onclick = () => $('#stickyPanel').classList.add('show');
$('#closeSticky').onclick = () => $('#stickyPanel').classList.remove('show');
$('#taskForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $('#taskInput').value.trim();
  if (!value) return;
  const item = document.createElement('li');
  item.innerHTML = `<label><input type="checkbox"> ${value}</label>`;
  $('#taskList').prepend(item);
  $('#taskInput').value = '';
});

go('signup');
