import { experienceStories, experienceCorpusMetadata } from './data/experiences.js';
import { discussionTopics, discussionCorpusMetadata } from './data/discussions.js';
import { demoStudents, demoStudentMetadata } from './data/demo-students.js';

const STORAGE_KEY = 'zysham2026-state-v2';

const signalGroups = [
  {
    key: 'interests',
    title: 'What pulls you in?',
    copy: 'Choose the activities you return to without being pushed.',
    choices: ['Solving complex problems', 'Understanding people', 'Making and designing', 'Organising money', 'Debating ideas', 'Helping communities'],
  },
  {
    key: 'strengths',
    title: 'What do others notice?',
    copy: 'Strength is evidence you can build on—not a fixed label.',
    choices: ['Pattern spotting', 'Clear writing', 'Empathy', 'Visual thinking', 'Numerical reasoning', 'Leading a group'],
  },
  {
    key: 'subjectAvoidance',
    title: 'Which subjects do you have no interest in reading or practising?',
    copy: 'Select only genuine aversions. A difficult teacher or one poor mark is not automatically a subject NO-NO.',
    choices: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Economics', 'Accountancy', 'Psychology', 'History'],
  },
  {
    key: 'values',
    title: 'What should work give you?',
    copy: 'Pick what matters even when nobody is watching.',
    choices: ['Visible impact', 'Financial stability', 'Creative freedom', 'Deep expertise', 'Independence', 'Public service'],
  },
  {
    key: 'workStyle',
    title: 'How do you prefer to work?',
    copy: 'Think about energy, environment, and the kind of problems you enjoy.',
    choices: ['With a close team', 'Focused alone', 'Hands-on and active', 'Structured and predictable', 'Changing every day', 'Research and reflection'],
  },
];

const workRealityQuestions = [
  { id: 'computerTolerance', short: 'Screen-heavy days', question: 'Could you spend 8–12 hours in front of a computer on most working days?', low: 'Definitely not', high: 'Comfortable with it' },
  { id: 'scheduleStructure', short: 'Fixed schedule', question: 'How comfortable are you with a regular 9-to-5 structure?', low: 'Need flexible hours', high: 'Prefer fixed hours' },
  { id: 'uncertaintyComfort', short: 'Uncertainty', question: 'How comfortable are you when next month’s work or income is uncertain?', low: 'Need strong assurance', high: 'Can absorb uncertainty' },
  { id: 'familyPriority', short: 'Family priority', question: 'Would you protect family time even if it meant declining a promotion?', low: 'Career usually wins', high: 'Family time comes first' },
  { id: 'meaningOverMoney', short: 'Meaning vs money', question: 'Where are you between earning well in work you dislike and needing to care deeply about the work?', low: 'Income can outweigh enjoyment', high: 'I must value the work' },
  { id: 'promotionDrive', short: 'Promotion drive', question: 'How important are title, promotion, and visible career growth?', low: 'Content with mastery', high: 'Strongly want advancement' },
  { id: 'travelEnergy', short: 'Travel', question: 'How much travel, relocation, or changing locations would energise you?', low: 'Prefer one home base', high: 'Want frequent movement' },
  { id: 'peopleIntensity', short: 'People contact', question: 'How much of your working day would you want to spend talking, persuading, teaching, or caring?', low: 'Mostly independent focus', high: 'People most of the day' },
  { id: 'physicalActivity', short: 'Physical activity', question: 'How strongly do you need hands-on or physically active work?', low: 'Desk work is fine', high: 'Need to move and make' },
  { id: 'competitionComfort', short: 'Competition', question: 'How comfortable are you with targets, ranking, public evaluation, and competition?', low: 'Prefer low-pressure progress', high: 'Competition energises me' },
  { id: 'deepFocus', short: 'Deep focus', question: 'How much do you enjoy long, quiet stretches on one difficult problem?', low: 'Need variety and exchange', high: 'Love sustained depth' },
  { id: 'serviceDrive', short: 'Service', question: 'How important is directly improving another person’s or community’s life?', low: 'Not essential to my work', high: 'Central to my work' },
  { id: 'clinicalTolerance', short: 'Clinical exposure', question: 'How comfortable are you with blood, illness, medical procedures, and close clinical care?', low: 'A definite NO-NO', high: 'Comfortable and willing' },
  { id: 'legacyImportance', short: 'Family legacy', question: 'How important is continuing a family profession, business, craft, reputation, or community legacy?', low: 'Need my own route', high: 'Legacy strongly matters' },
];

const workArchetypes = [
  { id: 'steady-anchor', name: 'Steady Anchor', line: 'Predictability, family continuity, and sustainable progress', ideal: [6, 9, 2, 9, 5, 3, 2, 5, 4, 3, 6, 6, 5, 7] },
  { id: 'quiet-builder', name: 'Quiet Builder', line: 'Deep craft, autonomy, and satisfaction without title-chasing', ideal: [9, 6, 4, 7, 7, 2, 2, 2, 3, 2, 10, 4, 3, 3] },
  { id: 'ambitious-climber', name: 'Ambitious Climber', line: 'Visible growth, competition, leadership, and reward', ideal: [7, 7, 7, 3, 4, 10, 6, 8, 4, 10, 6, 4, 5, 6] },
  { id: 'purpose-advocate', name: 'Purpose Advocate', line: 'Meaning, people, and measurable social contribution', ideal: [4, 5, 5, 7, 10, 5, 5, 9, 5, 5, 5, 10, 7, 5] },
  { id: 'mobile-explorer', name: 'Mobile Explorer', line: 'Movement, novelty, field exposure, and changing contexts', ideal: [3, 2, 9, 4, 7, 5, 10, 7, 9, 6, 3, 7, 6, 3] },
  { id: 'independent-creator', name: 'Independent Creator', line: 'Freedom, original work, and self-directed risk', ideal: [7, 2, 9, 5, 9, 3, 6, 3, 5, 4, 8, 5, 3, 2] },
  { id: 'people-catalyst', name: 'People Catalyst', line: 'Conversation, influence, momentum, and visible outcomes', ideal: [4, 5, 7, 4, 6, 8, 7, 10, 6, 8, 2, 7, 6, 6] },
  { id: 'hands-on-maker', name: 'Hands-on Maker', line: 'Tangible results, tools, movement, and practical mastery', ideal: [2, 6, 4, 7, 7, 3, 5, 4, 10, 4, 6, 6, 6, 7] },
  { id: 'systems-specialist', name: 'Systems Specialist', line: 'Order, accuracy, expertise, and reliable standards', ideal: [8, 9, 2, 7, 6, 4, 2, 3, 3, 4, 9, 5, 4, 6] },
  { id: 'family-first-flexer', name: 'Family-first Flexer', line: 'Control over time, dependable income, and room for care', ideal: [6, 3, 2, 10, 6, 2, 2, 4, 4, 2, 6, 7, 5, 8] },
  { id: 'mission-leader', name: 'Mission Leader', line: 'Responsibility, advancement, people, and consequential impact', ideal: [6, 6, 7, 5, 9, 9, 6, 9, 5, 8, 6, 10, 8, 7] },
  { id: 'portfolio-navigator', name: 'Portfolio Navigator', line: 'Variety, multiple skills, experimentation, and optionality', ideal: [6, 3, 8, 5, 7, 5, 7, 6, 6, 5, 4, 6, 5, 3] },
];

const careerWorkProfiles = {
  'product-designer': [9, 5, 6, 5, 8, 6, 4, 7, 3, 5, 7, 7, 2, 3],
  'data-scientist': [10, 7, 5, 6, 6, 5, 3, 3, 2, 5, 10, 5, 2, 3],
  psychologist: [5, 6, 4, 6, 10, 5, 3, 10, 3, 3, 7, 10, 6, 4],
  'biomedical-engineer': [7, 7, 5, 6, 8, 5, 4, 6, 8, 5, 8, 9, 7, 5],
  'chartered-accountant': [9, 9, 3, 5, 5, 8, 3, 6, 2, 8, 9, 5, 2, 8],
  'public-policy': [8, 6, 6, 5, 9, 7, 6, 8, 3, 6, 9, 10, 3, 6],
  'sustainability-analyst': [7, 5, 6, 5, 9, 6, 8, 7, 7, 5, 8, 10, 4, 4],
  lawyer: [9, 7, 6, 4, 7, 9, 5, 9, 3, 9, 9, 7, 3, 8],
  doctor: [6, 5, 3, 4, 10, 7, 4, 10, 8, 8, 8, 10, 10, 8],
};

const careers = [
  {
    id: 'product-designer', glyph: 'PD', title: 'Product Designer', cluster: 'Design & Technology', stream: 'Any stream',
    summary: 'Turns messy human needs into useful digital products and services.',
    tags: ['Making and designing', 'Understanding people', 'Visual thinking', 'Empathy', 'Creative freedom', 'With a close team'],
    subjects: 'No fixed stream; design, psychology, computer science, and communication all help.',
    route: 'Portfolio → design degree or skills-first programme → internships → product team',
    duration: '3–4 years for a degree, or a strong portfolio-led alternative route',
    day: 'Research users, sketch flows, test prototypes, and work with engineers.',
    reality: 'Feedback is constant. Taste helps, but explaining decisions and iterating matter more.',
    experiment: 'Redesign one frustrating school process and test it with three classmates.',
  },
  {
    id: 'data-scientist', glyph: 'DS', title: 'Data Scientist', cluster: 'Computing & Analytics', stream: 'Science / Commerce with Maths',
    summary: 'Uses statistics, code, and context to find patterns that guide decisions.',
    tags: ['Solving complex problems', 'Pattern spotting', 'Numerical reasoning', 'Mathematics', 'Deep expertise', 'Focused alone'],
    subjects: 'Mathematics is central; statistics, computer science, and economics are useful.',
    route: 'Maths-ready stream → quantitative degree → projects/internships → analyst or data role',
    duration: '3–5 years depending on degree and specialisation',
    day: 'Clean data, test assumptions, build models, and explain findings to a team.',
    reality: 'Much of the job is careful data preparation and communication—not dramatic AI demos.',
    experiment: 'Analyse a public dataset and explain one useful finding in a single chart.',
  },
  {
    id: 'psychologist', glyph: 'PS', title: 'Psychologist', cluster: 'Health & Behaviour', stream: 'Any stream',
    summary: 'Studies behaviour and supports people using evidence-based methods.',
    tags: ['Understanding people', 'Helping communities', 'Empathy', 'Clear writing', 'Visible impact', 'Research and reflection', 'Psychology'],
    subjects: 'Psychology and biology help, but many undergraduate routes accept any stream.',
    route: 'Bachelor’s → relevant master’s → supervised training/licensing for clinical practice',
    duration: '5–7+ years for many professional practice routes',
    day: 'Listen, assess, document, research, and collaborate on support plans.',
    reality: 'Emotional boundaries, long training, and careful ethics are part of the work.',
    experiment: 'Interview a practising psychologist about training, boundaries, and a normal week.',
  },
  {
    id: 'biomedical-engineer', glyph: 'BE', title: 'Biomedical Engineer', cluster: 'Engineering & Health', stream: 'Science',
    summary: 'Builds devices and systems where biology, medicine, and engineering meet.',
    tags: ['Solving complex problems', 'Making and designing', 'Pattern spotting', 'Physics', 'Biology', 'Mathematics', 'Visible impact', 'Hands-on and active'],
    subjects: 'Physics, Chemistry, and Mathematics are commonly required; Biology adds context.',
    route: 'PCM/PCMB → engineering degree → labs, devices, health-tech, or postgraduate study',
    duration: '4 years for a typical engineering degree',
    day: 'Prototype, test, document safety, interpret clinical needs, and improve devices.',
    reality: 'Regulation and testing make progress slower—and safer—than a normal gadget project.',
    experiment: 'Study one assistive device and map the user need, mechanics, and safety trade-offs.',
  },
  {
    id: 'chartered-accountant', glyph: 'CA', title: 'Chartered Accountant', cluster: 'Business & Finance', stream: 'Any stream; Commerce helpful',
    summary: 'Brings trust and structure to finance, tax, reporting, and business decisions.',
    tags: ['Organising money', 'Numerical reasoning', 'Pattern spotting', 'Accountancy', 'Economics', 'Financial stability', 'Structured and predictable'],
    subjects: 'Commerce and Accountancy are helpful, but the professional route is open more broadly.',
    route: 'Foundation route → intermediate → articleship → final qualification',
    duration: 'Often 4.5–6+ years depending on exam progression',
    day: 'Review records, interpret rules, test controls, advise clients, and meet deadlines.',
    reality: 'The exam and training path rewards consistency; deadline seasons can be intense.',
    experiment: 'Build a simple budget and audit trail for a school event or family project.',
  },
  {
    id: 'public-policy', glyph: 'PP', title: 'Public Policy Analyst', cluster: 'Law, Policy & Society', stream: 'Any stream',
    summary: 'Researches public problems and turns evidence into practical policy choices.',
    tags: ['Debating ideas', 'Helping communities', 'Clear writing', 'Pattern spotting', 'History', 'Economics', 'Public service', 'Research and reflection'],
    subjects: 'Economics, history, political science, mathematics, and writing are useful foundations.',
    route: 'Broad undergraduate degree → research/internships → policy role or postgraduate study',
    duration: '3–6 years depending on specialisation',
    day: 'Read evidence, interview stakeholders, compare options, and write clear recommendations.',
    reality: 'Impact is indirect and slow. Good work requires patience with ambiguity and institutions.',
    experiment: 'Write a one-page policy note on a problem in your school or neighbourhood.',
  },
  {
    id: 'sustainability-analyst', glyph: 'SA', title: 'Sustainability Analyst', cluster: 'Climate & Business', stream: 'Science / Commerce / Humanities',
    summary: 'Measures environmental impact and helps organisations make credible improvements.',
    tags: ['Helping communities', 'Solving complex problems', 'Pattern spotting', 'Economics', 'Biology', 'Visible impact', 'With a close team'],
    subjects: 'Environmental science, economics, geography, statistics, and business can all lead in.',
    route: 'Relevant degree → practical projects/certifications → sustainability or ESG team',
    duration: '3–5 years for most degree-led entry paths',
    day: 'Collect impact data, check claims, understand regulation, and plan reductions.',
    reality: 'You will balance environmental ambition with budgets, imperfect data, and real constraints.',
    experiment: 'Measure one week of waste at home or school and propose a testable reduction plan.',
  },
  {
    id: 'lawyer', glyph: 'LW', title: 'Lawyer', cluster: 'Law & Advocacy', stream: 'Any stream',
    summary: 'Uses research, reasoning, negotiation, and advocacy to resolve complex disputes.',
    tags: ['Debating ideas', 'Clear writing', 'Understanding people', 'History', 'Public service', 'Financial stability', 'Changing every day'],
    subjects: 'Any stream can lead to law; reading, writing, history, and economics build useful skills.',
    route: 'Five-year integrated law degree or graduate law route → internships → bar enrolment',
    duration: '5 years for an integrated undergraduate law programme',
    day: 'Research cases, draft documents, prepare arguments, advise people, and negotiate.',
    reality: 'The work involves far more reading, preparation, and detail than courtroom drama.',
    experiment: 'Attend a public hearing or analyse both sides of a recent legal decision.',
  },
  {
    id: 'doctor', glyph: 'MD', title: 'Doctor / MBBS route', cluster: 'Medicine & Clinical Care', stream: 'Science with Biology',
    summary: 'Diagnoses, treats, and supports people through demanding clinical work and lifelong learning.',
    tags: ['Understanding people', 'Helping communities', 'Empathy', 'Biology', 'Chemistry', 'Deep expertise', 'Visible impact', 'Structured and predictable'],
    subjects: 'Physics, Chemistry, Biology/Biotechnology and English are central to the usual Indian eligibility route; verify the current official rules.',
    route: 'PCB/PCMB → NEET-UG and counselling → recognised MBBS programme → internship → registration and possible specialisation',
    duration: 'A long regulated pathway; verify current programme, internship, registration, and postgraduate requirements officially',
    day: 'Take histories, examine patients, interpret evidence, document decisions, communicate risk, and work with clinical teams.',
    reality: 'Blood, illness, bodily exposure, night duties, uncertainty, responsibility, emotional strain, and long training are normal—not edge cases.',
    experiment: 'Speak with a doctor and medical student about an ordinary ward day, then test your response to age-appropriate clinical learning material without graphic exposure.',
  },
];

const defaultState = {
  version: 4,
  onboarded: false,
  session: { mode: 'profile', activeRole: 'student' },
  profile: { name: 'Anya', grade: '10', board: 'CBSE', location: '', school: 'Private school', schoolName: '', medium: 'English', mobility: 'Nearby / daily commute' },
  profiles: {
    student: { name: 'Anya', grade: '10', board: 'CBSE', location: '', school: 'Private school' },
    parent: { name: '', relationship: 'Parent', language: 'English', linkedStudentName: '' },
  },
  view: 'overview',
  theme: 'aurora',
  background: 'campus-walk',
  audience: 'student',
  mentor: 'miso',
  signals: { interests: [], strengths: [], subjects: [], subjectAvoidance: [], values: [], workStyle: [] },
  workReality: { answers: {}, confirmed: false, updatedAt: '' },
  saved: [],
  compare: [],
  streamChoice: '',
  streamReflections: [],
  journey: {
    subjects: [],
    grade11Score: '',
    grade11Milestones: [],
    grade12Target: '',
    entrance: 'Undecided',
    collegeScope: '',
    collegeShortlist: '',
    burningDesire: '',
    experiences: [],
    roleTarget: '',
    workSetting: '',
    employmentReadiness: '',
    stageMilestones: { grade10: [], grade11: [], grade12: [], college1: [], college2: [], college3: [], collegeFinal: [], firstJob: [], dreamJob: [] },
    noNos: { grade10: [], grade11: [], grade12: [], college1: [], college2: [], college3: [], collegeFinal: [], firstJob: [], dreamJob: [] },
    stageNotes: { grade10: '', grade11: '', grade12: '', college1: '', college2: '', college3: '', collegeFinal: '', firstJob: '', dreamJob: '' },
    ranks: { grade10: '', grade11: '', grade12: '', college1: '', college2: '', college3: '', collegeFinal: '' },
  },
  careerFilter: 'All',
  careerSearch: '',
  roadmapDone: ['profile'],
  tasks: [
    { id: 'task-1', text: 'Complete two Career Compass sections', done: false },
    { id: 'task-2', text: 'Discuss one career experiment at dinner', done: false },
  ],
  familyNote: '',
  familyLens: 'student',
  evidence: [],
  experienceFilters: { search: '', country: 'All', stage: 'All', perspective: 'All', ai: 'All' },
  experienceLimit: 12,
  sharedExperiences: [],
  aiJourney: {
    stageAnswers: { grade10: '', grade11: '', grade12: '', college1: '', college2: '', college3: '', collegeFinal: '', firstJob: '', dreamJob: '' },
    claimChecks: [],
    practices: [],
    familyAgreement: '',
  },
  discussionFilters: { search: '', category: 'All', stage: 'All', country: 'All' },
  discussionLimit: 12,
  savedDiscussions: [],
  userDiscussions: [],
  discussionReplies: {},
  communityMode: 'discussions',
  studentDirectoryFilters: { search: '', country: 'All', stage: 'All' },
  studentDirectoryLimit: 24,
  research: { category: 'All', search: '', saved: [] },
};

const viewMeta = {
  overview: ['YOUR DECISION SPACE', 'Overview'],
  compass: ['KNOW YOURSELF', 'Career compass'],
  explore: ['DISCOVER POSSIBILITIES', 'Explore careers'],
  experiences: ['LEARN FROM MANY ROUTES', 'Experience exchange'],
  discussions: ['A GLOBAL DECISION COMMONS', 'Discussions'],
  'ai-journey': ['AI IN EVERY DECISION', 'AI Journey'],
  compare: ['SEE THE TRADE-OFFS', 'Compare paths'],
  roadmap: ['TURN CLARITY INTO ACTION', 'My roadmap'],
  family: ['ONE PLAN, TWO PERSPECTIVES', 'Family room'],
  evidence: ['PROOF OVER PRESSURE', 'Evidence wallet'],
};

const campusBackgrounds = [
  { id: 'campus-walk', name: 'Campus walk', detail: 'Everyday university life', file: 'assets/backgrounds/campus-walk.jpg' },
  { id: 'library-team', name: 'Library team', detail: 'Study and collaboration', file: 'assets/backgrounds/library-team.jpg' },
  { id: 'engineering-lab', name: 'Engineering lab', detail: 'Building and testing', file: 'assets/backgrounds/engineering-lab.jpg' },
  { id: 'design-studio', name: 'Design studio', detail: 'Creative problem-solving', file: 'assets/backgrounds/design-studio.jpg' },
  { id: 'campus-mentor', name: 'Campus mentor', detail: 'Guidance and conversation', file: 'assets/backgrounds/campus-mentor.jpg' },
  { id: 'career-showcase', name: 'Career showcase', detail: 'Projects meet opportunity', file: 'assets/backgrounds/career-showcase.jpg' },
];

const researchCatalog = [
  { id: 'school-affiliation', category: 'Schools', title: 'Verify school and board status', subtitle: 'Affiliation is a starting check—not proof of lived quality.', checks: ['Current affiliation and senior-secondary status', 'Actual subject combinations offered', 'Travel time, language, fees and support', 'Labs, teachers, counselling and recent student conversations'], source: ['CBSE SARAS', 'https://saras.cbse.gov.in/saras/'] },
  { id: 'school-fit', category: 'Schools', title: 'Build a local school reality brief', subtitle: 'Early-stage recommendations should be location-led.', checks: ['Daily commute and transport reliability', 'Subject combination actually available', 'Class size and teacher continuity', 'Accessibility, safety, clubs and practical exposure'] },
  { id: 'ugc-check', category: 'Colleges', title: 'Verify the institution before applying', subtitle: 'Recognition and award authority must be checked officially.', checks: ['UGC institution listing and status', 'Correct campus and programme entity', 'Regulator or professional-council requirements', 'Any current warning or compliance notice'], source: ['UGC HEI directory', 'https://www.ugc.gov.in/universitydetails/'] },
  { id: 'college-context', category: 'Colleges', title: 'Use rankings as context, not destiny', subtitle: 'Inspect the dimensions and the course—not only the overall number.', checks: ['Relevant category and ranking year', 'Teaching, research, outcomes and inclusion dimensions', 'Department-level evidence', 'Student, alumni and employer counter-evidence'], source: ['NIRF India Rankings 2025', 'https://www.nirfindia.org/Rankings/2025/Ranking.html'] },
  { id: 'course-audit', category: 'Courses', title: 'Audit the actual curriculum', subtitle: 'A famous college cannot rescue the wrong daily work.', checks: ['Compulsory subjects you would have to read', 'Electives matching special interest', 'Labs, studios, fieldwork and projects', 'Assessment style, internship and capstone quality'] },
  { id: 'medical-route', category: 'Courses', title: 'MBBS reality check', subtitle: 'Biology interest alone is insufficient.', checks: ['Tolerance for blood, illness and clinical responsibility', 'Long training and competitive entry', 'Night duty, emotional load and patient contact', 'Current official eligibility, counselling and recognition'] },
  { id: 'exam-map', category: 'Exams', title: 'Map entrance routes and alternatives', subtitle: 'An entrance exam is a gate—not a career.', checks: ['Current official eligibility and dates', 'Primary course and why it fits', 'State, national and institution routes', 'A credible alternate that preserves the goal'] },
  { id: 'job-search', category: 'Jobs', title: 'Explore roles and current openings', subtitle: 'Use public job data as dated evidence, never a promise.', checks: ['Daily tasks across at least 10 descriptions', 'Entry requirements versus preferences', 'Location, shifts, travel and contract type', 'Fraud check—never pay for an interview or offer'], source: ['National Career Service', 'https://www.ncs.gov.in/'] },
  { id: 'job-types', category: 'Role types', title: 'Compare how work is organised', subtitle: 'The same degree can lead to very different lives.', checks: ['Deep specialist or people manager', 'Desk, field, clinical, studio or hybrid', 'Individual contributor, client-facing or operations', 'Permanent, contract, freelance, business or public service'] },
  { id: 'company-file', category: 'Companies', title: 'Build a company evidence file', subtitle: 'Brand prestige says little about your actual team and manager.', checks: ['Business model and financial durability', 'Role, team, manager and learning quality', 'Hours, location, travel and promotion norms', 'Annual report, careers page, alumni and recent employees'] },
  { id: 'campus-hiring', category: 'Companies', title: 'Research campus recruiters before final year', subtitle: 'Prepare for the actual role—not the company logo.', checks: ['Past campus roles and eligibility filters', 'Projects that demonstrate relevant capability', 'Selection rounds and preparation runway', 'Bond, location, shifts, compensation structure and mobility'] },
  { id: 'scholarship-plan', category: 'Funding', title: 'Compare the complete cost and funding plan', subtitle: 'Fees are only one part of affordability.', checks: ['Tuition, housing, travel, tools and deposits', 'Scholarship eligibility and renewal rules', 'Loan repayment under conservative salary assumptions', 'Emergency buffer and exit/transfer implications'], source: ['National Scholarship Portal', 'https://scholarships.gov.in/'] },
  { id: 'apprenticeship', category: 'Pathways', title: 'Compare earn-and-learn pathways', subtitle: 'Degrees are not the only credible route.', checks: ['Apprenticeship, diploma, ITI and skill pathways', 'Employer, training and certification quality', 'Stipend, progression and bridge options', 'What evidence graduates actually leave with'], source: ['Apprenticeship India', 'https://www.apprenticeshipindia.gov.in/'] },
  { id: 'legacy-route', category: 'Pathways', title: 'Test a family legacy without surrendering choice', subtitle: 'Inheritance can be an asset, obligation, or both.', checks: ['Which daily work—not title—would be inherited', 'Skills, trust, capital and networks genuinely available', 'Freedom to modernise, specialise or leave', 'One outside alternative tested on equal terms'] },
];

let state = loadState();
let toastTimer;

const isGuest = () => state.session?.mode === 'guest';
const activeProfile = () => state.session?.activeRole === 'parent' ? state.profiles.parent : state.profiles.student;

function requireProfile(message = 'Create a student or parent profile to add to a personal journey.') {
  if (!isGuest()) return true;
  showToast(message);
  return false;
}

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || ![2, 3, 4].includes(stored.version)) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...stored,
      profile: { ...structuredClone(defaultState.profile), ...(stored.profile || {}) },
      session: { ...structuredClone(defaultState.session), ...(stored.session || {}) },
      profiles: {
        student: { ...structuredClone(defaultState.profiles.student), ...(stored.profiles?.student || stored.profile || {}) },
        parent: { ...structuredClone(defaultState.profiles.parent), ...(stored.profiles?.parent || {}) },
      },
      signals: { ...structuredClone(defaultState.signals), ...(stored.signals || {}) },
      workReality: { ...structuredClone(defaultState.workReality), ...(stored.workReality || {}), answers: { ...(stored.workReality?.answers || {}) } },
      journey: {
        ...structuredClone(defaultState.journey),
        ...(stored.journey || {}),
        stageMilestones: { ...structuredClone(defaultState.journey.stageMilestones), ...(stored.journey?.stageMilestones || {}) },
        noNos: { ...structuredClone(defaultState.journey.noNos), ...(stored.journey?.noNos || {}) },
        stageNotes: { ...structuredClone(defaultState.journey.stageNotes), ...(stored.journey?.stageNotes || {}) },
        ranks: { ...structuredClone(defaultState.journey.ranks), ...(stored.journey?.ranks || {}) },
      },
      experienceFilters: { ...structuredClone(defaultState.experienceFilters), ...(stored.experienceFilters || {}) },
      aiJourney: {
        ...structuredClone(defaultState.aiJourney),
        ...(stored.aiJourney || {}),
        stageAnswers: { ...structuredClone(defaultState.aiJourney.stageAnswers), ...(stored.aiJourney?.stageAnswers || {}) },
      },
      discussionFilters: { ...structuredClone(defaultState.discussionFilters), ...(stored.discussionFilters || {}) },
      research: { ...structuredClone(defaultState.research), ...(stored.research || {}) },
      version: 4,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allSignals() {
  return Object.entries(state.signals).filter(([key]) => key !== 'subjectAvoidance').flatMap(([, values]) => values);
}

function workRealityResult() {
  const values = workRealityQuestions.map((question) => Number(state.workReality.answers[question.id] || 0));
  const answered = values.filter(Boolean).length;
  if (!answered) return { answered: 0, primary: null, secondary: null, noNos: [], tensions: [] };
  const ranked = workArchetypes.map((pattern) => {
    const used = values.map((value, index) => value ? Math.abs(value - pattern.ideal[index]) : null).filter((value) => value !== null);
    return { ...pattern, distance: used.reduce((sum, value) => sum + value, 0) / used.length };
  }).sort((a, b) => a.distance - b.distance);
  const answer = (id) => Number(state.workReality.answers[id] || 0);
  const noNos = [
    answer('computerTolerance') && answer('computerTolerance') <= 3 ? 'Coding-heavy daily work' : '',
    answer('physicalActivity') >= 8 ? 'Desk-only routine' : '',
    answer('travelEnergy') && answer('travelEnergy') <= 3 ? 'Frequent travel or relocation' : '',
    answer('peopleIntensity') && answer('peopleIntensity') <= 3 ? 'Constant public interaction' : '',
    answer('peopleIntensity') >= 8 ? 'Mostly isolated work' : '',
    answer('uncertaintyComfort') && answer('uncertaintyComfort') <= 3 ? 'Unpredictable income' : '',
    answer('clinicalTolerance') && answer('clinicalTolerance') <= 3 ? 'Blood / clinical exposure' : '',
  ].filter(Boolean);
  const tensions = [];
  if (answer('familyPriority') >= 8 && answer('promotionDrive') >= 8) tensions.push('Family-first time and rapid promotion may compete; compare actual schedules, not titles.');
  if (answer('meaningOverMoney') >= 8 && answer('uncertaintyComfort') <= 3) tensions.push('Meaning matters strongly, but security does too; test stable mission-led employers and low-risk experiments.');
  if (answer('travelEnergy') >= 8 && answer('familyPriority') >= 8) tensions.push('Travel and family continuity both matter; look for planned travel, seasonal fieldwork, or regional roles.');
  if (answer('legacyImportance') >= 8 && answer('meaningOverMoney') >= 8) tensions.push('Family legacy and personal meaning both matter; test whether the inherited route fits the daily work, not only the family story.');
  return { answered, primary: ranked[0], secondary: ranked[1], noNos, tensions };
}

function compassCompletion() {
  const reality = workRealityResult();
  const evidenceGroups = signalGroups.filter((group) => state.signals[group.key]?.length).length;
  return Math.round(((reality.answered + evidenceGroups * 2) / (workRealityQuestions.length + signalGroups.length * 2)) * 100);
}

function fitFor(career) {
  const selected = allSignals();
  const matches = career.tags.filter((tag) => selected.includes(tag));
  const groupCoverage = signalGroups.filter((group) => state.signals[group.key]?.some((item) => career.tags.includes(item))).length;
  const reality = workRealityResult();
  const careerProfile = careerWorkProfiles[career.id];
  const answeredPairs = careerProfile ? workRealityQuestions.map((question, index) => [Number(state.workReality.answers[question.id] || 0), careerProfile[index]]).filter(([value]) => value) : [];
  const workAlignment = answeredPairs.length ? Math.round(10 - (answeredPairs.reduce((sum, [value, target]) => sum + Math.abs(value - target), 0) / answeredPairs.length)) : 0;
  const conflicts = reality.noNos.filter((noNo) => (noNoCareerExclusions[noNo] || []).includes(career.id));
  const subjectConflicts = (state.signals.subjectAvoidance || []).filter((subject) => (subjectCareerConstraints[subject] || []).includes(career.id)).map((subject) => `Avoids required ${subject}`);
  conflicts.push(...subjectConflicts);
  const score = matches.length * 2 + groupCoverage + workAlignment - conflicts.length * 20;
  const hasEvidence = selected.length || reality.answered;
  const label = !hasEvidence ? 'Profile pending' : conflicts.length ? 'NO-NO conflict' : score >= 16 ? 'Strong signal' : score >= 9 ? 'Worth exploring' : 'Stretch experiment';
  return { score, label, matches, workAlignment, conflicts };
}

function rankedCareers() {
  return careers.map((career) => ({ ...career, fit: fitFor(career) })).sort((a, b) => b.fit.score - a.fit.score || a.title.localeCompare(b.title));
}

function setView(view, { updateHash = true } = {}) {
  if (!viewMeta[view]) return;
  state.view = view;
  saveState();
  if (updateHash) history.replaceState(null, '', `#${view}`);
  render();
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function updateShell() {
  const [eyebrow, title] = viewMeta[state.view];
  $('#pageEyebrow').textContent = eyebrow;
  $('#pageTitle').textContent = title;
  $$('.nav-item').forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  $('#compassBadge').textContent = `${compassCompletion()}%`;
  $('#compareBadge').textContent = state.compare.length;
  const actor = activeProfile();
  const profileName = isGuest() ? 'Guest' : actor?.name || (state.session.activeRole === 'parent' ? 'Parent' : 'Anya');
  $('#studentAvatar').textContent = profileName.slice(0, 2).toUpperCase();
  $('#studentPathName').textContent = isGuest() ? 'Guest explorer' : state.session.activeRole === 'parent' ? `${profileName}'s parent lens` : `${profileName}'s path`;
  $('#studentPathMeta').textContent = isGuest() ? 'Read-only · full exploration' : state.session.activeRole === 'parent' ? `${actor.relationship} · supporting ${actor.linkedStudentName || state.profile.name}` : `Grade ${state.profile?.grade || '10'} · ${state.profile?.board || 'CBSE'}`;
  $('#audienceSwitch span').textContent = state.audience === 'student' ? 'Student view' : 'Parent view';
  document.body.dataset.theme = state.theme;
  const selectedBackground = campusBackgrounds.find((background) => background.id === state.background) || campusBackgrounds[0];
  document.documentElement.style.setProperty('--campus-image', `url('${selectedBackground.file}')`);
  $$('.theme-choice').forEach((button) => button.classList.toggle('active', button.dataset.themeChoice === state.theme));
}

function renderBackgroundOptions() {
  $('#backgroundOptions').innerHTML = campusBackgrounds.map((background) => `
    <button class="background-option ${state.background === background.id ? 'selected' : ''}" data-background="${background.id}" style="--option-image:url('${background.file}')" aria-pressed="${state.background === background.id}">
      <span><strong>${background.name}</strong><small>${background.detail}</small></span>
    </button>`).join('');
}

function renderResearchShelf() {
  const body = $('#researchPanelBody');
  if (!body) return;
  const categories = ['All', ...new Set(researchCatalog.map((item) => item.category))];
  const term = state.research.search.trim().toLowerCase();
  const items = researchCatalog.filter((item) => (state.research.category === 'All' || item.category === state.research.category) && (!term || `${item.title} ${item.subtitle} ${item.category} ${item.checks.join(' ')}`.toLowerCase().includes(term)));
  body.innerHTML = `<div class="research-search"><span>⌕</span><input id="researchSearch" type="search" value="${escapeHtml(state.research.search)}" placeholder="Schools, colleges, jobs, companies…" aria-label="Search research shelf"></div><div class="research-tabs" aria-label="Research category">${categories.map((category) => `<button data-research-category="${category}" class="${state.research.category === category ? 'active' : ''}">${category}</button>`).join('')}</div><p class="research-caution">Research workspace · verify admissions, recognition, fees, placements, salaries and hiring directly with a dated official source.</p><div class="research-list">${items.length ? items.map((item) => `<article class="research-card"><div class="research-card-top"><span>${item.category.toUpperCase()}</span><button data-research-save="${item.id}" aria-label="${state.research.saved.includes(item.id) ? 'Remove from' : 'Save to'} research shortlist" aria-pressed="${state.research.saved.includes(item.id)}">${state.research.saved.includes(item.id) ? '★' : '☆'}</button></div><h3>${item.title}</h3><p>${item.subtitle}</p><ul>${item.checks.map((check) => `<li>${check}</li>`).join('')}</ul>${item.source ? `<a href="${item.source[1]}" target="_blank" rel="noreferrer">Open official source · ${item.source[0]} ↗</a>` : '<small>Build this evidence from official pages plus first-person conversations.</small>'}</article>`).join('') : '<div class="research-empty"><strong>No research cards found.</strong><span>Try another term or category.</span></div>'}</div>`;
}

function openResearchShelf() {
  closeJourneyInspector();
  closeSettings();
  renderResearchShelf();
  $('#researchPanel').setAttribute('aria-hidden', 'false');
  document.body.classList.add('research-open');
}

function closeResearchShelf() {
  document.body.classList.remove('research-open');
  $('#researchPanel').setAttribute('aria-hidden', 'true');
}

function journeyStops() {
  const journey = state.journey || defaultState.journey;
  const stopDefinitions = [
    ['grade10', '01 · GRADE 10', 'Eliminate & explore', 'Rule out poor-fit work'],
    ['grade11', '02 · GRADE 11', 'Build foundations', 'Rhythm · rank · first project'],
    ['grade12', '03 · GRADE 12', 'Choose the right course', 'Boards · entry · alternatives'],
    ['college1', '04 · COLLEGE Y1', 'Confirm course fit', 'Fundamentals · adapt · sample'],
    ['college2', '05 · COLLEGE Y2', 'Find special interest', 'Electives · skills · portfolio'],
    ['college3', '06 · COLLEGE Y3', 'Project + experience', 'Internship · research · proof'],
    ['collegeFinal', '07 · FINAL YEAR', 'Campus launch', 'Capstone · rank · interviews'],
    ['firstJob', '08 · FIRST JOB', 'Learn and reposition', 'Capability · mobility · runway'],
    ['dreamJob', '09 · 6–12 YEARS', 'Reach & sustain dream work', 'Evidence · role moves · renewal'],
  ];
  const stops = stopDefinitions.map(([id, step, title, fallback]) => {
    const milestoneCount = journey.stageMilestones?.[id]?.length || 0;
    const noNoCount = journey.noNos?.[id]?.length || 0;
    const note = journey.stageNotes?.[id]?.trim();
    return { id, step, title, value: milestoneCount ? `${milestoneCount} milestones · ${noNoCount} NO-NOs` : fallback, complete: milestoneCount >= 3 && Boolean(note) };
  });
  const firstIncomplete = stops.findIndex((stop) => !stop.complete);
  return stops.map((stop, index) => ({ ...stop, status: stop.complete ? 'complete' : index === firstIncomplete ? 'active' : 'future' }));
}

function renderJourneyRail() {
  $('#journeyRail').innerHTML = journeyStops().map((stop) => `
    <button class="journey-stop ${stop.status}" data-journey-stage="${stop.id}" aria-label="${stop.step}: ${stop.title}. ${stop.value}">
      <small>${stop.step}</small><strong>${stop.title}</strong><span>${escapeHtml(stop.value)}</span><em class="ai-stop-tag ${state.aiJourney.stageAnswers[stop.id]?.trim() ? 'done' : ''}">AI ${state.aiJourney.stageAnswers[stop.id]?.trim() ? '✓' : '?'}</em>
    </button>`).join('');
}

const journeyChoices = {
  subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Economics', 'Accountancy', 'Psychology', 'History', 'Computer Science', 'Geography', 'Languages', 'Fine Arts', 'Physical Education', 'Vocational subject'],
  stream: ['Science', 'Commerce', 'Humanities', 'Vocational', 'Diploma', 'ITI / Skills route', 'Open combination', 'Undecided'],
  grade11: ['Syllabus rhythm', 'Backlogs addressed', 'First career trial', 'Portfolio project', 'Mentor conversation', 'Competition / olympiad'],
  experience: ['College project', 'Internship', 'Apprenticeship', 'Volunteering', 'Research', 'Portfolio', 'Freelance work', 'Founder experiment', 'Mentor network'],
};

const aiStagePrompts = {
  grade10: 'Which AI suggestion reflects your evidence, and which merely sounds confident? Verify board and subject claims with official sources.',
  grade11: 'Where might AI be creating learning debt? Protect one weekly unaided practice in every foundational subject.',
  grade12: 'Which eligibility, deadline, fee, or application claim must be checked on an official current source before acting?',
  college1: 'Can you explain the foundation without AI after using it, and does the tool follow your institution’s academic-integrity policy?',
  college2: 'Is AI widening your special-interest experiments or narrowing you prematurely to whatever it can generate easily?',
  college3: 'For projects and internships, what did you decide, build, test, and verify personally—and what did AI contribute?',
  collegeFinal: 'Can every portfolio and interview claim survive a live explanation, source check, and unaided problem-solving conversation?',
  firstJob: 'Which tasks can AI assist, which require human leadership, and which outcomes remain personally accountable?',
  dreamJob: 'Are AI and labour-market claims current enough to justify a role move, and what human capability compounds across tool changes?',
};

const discussionStageMap = { grade10: 'grade-10-context', grade11: 'grade-11-stream', grade12: 'grade-12-decision', college1: 'college-transition', college2: 'college-skills', college3: 'internship-search', collegeFinal: 'employment', firstJob: 'early-career', dreamJob: 'career-change' };

function choiceButtons(items, selected, group, multi = false) {
  return `<div class="journey-choice-grid">${items.map((item) => `<button type="button" class="journey-choice ${selected.includes(item) ? 'selected' : ''}" data-journey-choice="${group}" data-value="${escapeHtml(item)}" data-multi="${multi}">${item}</button>`).join('')}</div>`;
}

function legacyRenderJourneyInspector(stageId) {
  const profile = state.profile;
  const journey = state.journey;
  const subjects = [...new Set([...state.signals.subjects, ...journey.subjects])];
  const content = {
    context: {
      step: '01 · GRADE 10 CONTEXT', title: 'Start with what is reachable',
      copy: 'At this stage, recommendations should respect location, school access, board continuity, language, cost, and family reality.',
      fields: `<div class="journey-field-grid"><label class="journey-field">City / district<input name="location" value="${escapeHtml(profile.location)}" placeholder="e.g. Chennai"></label><label class="journey-field">Board<select name="board">${['CBSE','CISCE / ICSE','State Board','IB','Cambridge','NIOS / Open School','Other'].map((item) => `<option ${profile.board === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label class="journey-field">School setting<select name="school">${['Private school','Government school','Government-aided school','International school','Residential school','Open schooling','Home education'].map((item) => `<option ${profile.school === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label class="journey-field">Current / prospective school<input name="schoolName" value="${escapeHtml(profile.schoolName)}" placeholder="School name or shortlist"></label><label class="journey-field">Teaching medium<select name="medium">${['English','Hindi','Regional language','Bilingual','Other'].map((item) => `<option ${profile.medium === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label class="journey-field">Mobility boundary<select name="mobility">${['Nearby / daily commute','Within district','Within state','Residential school possible','Relocation possible','Open / online required'].map((item) => `<option ${profile.mobility === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></div>`,
      recommendation: profile.location ? `Begin with strong ${profile.board} options reachable from ${profile.location} within “${profile.mobility}”; widen only when the educational benefit clearly outweighs disruption.` : 'Add a city or district before recommending schools. Early guidance without location is usually false precision.',
    },
    subjects: {
      step: '02 · SUBJECT FOUNDATION', title: 'Choose the work worth practising', copy: 'Record current and preferred subjects. Availability depends on the school and board; interest alone does not guarantee a combination.',
      fields: choiceButtons(journeyChoices.subjects, subjects, 'subjects', true),
      recommendation: subjects.length ? `${subjects.length} subjects are visible. Compare enjoyment, readiness, school availability, and which combinations preserve nearby options.` : 'Choose current or preferred subjects first. The recommendation stays deliberately open until there is evidence.',
    },
    stream: {
      step: '03 · POST-10TH FORK', title: 'Select a route with alternatives visible', copy: 'Streams are one branching point, not a lifetime identity. Include vocational, diploma, skills, and flexible combinations.',
      fields: choiceButtons(journeyChoices.stream, state.streamChoice ? [state.streamChoice.replace(/^./, (letter) => letter.toUpperCase())] : [], 'stream'),
      recommendation: state.streamChoice ? `${state.streamChoice.replace(/^./, (letter) => letter.toUpperCase())} is recorded. Keep at least two neighbouring routes visible until workload and subject access are tested.` : 'No route is selected. Use subject evidence, actual school combinations, workload tolerance, and a low-risk trial before deciding.',
    },
    grade11: {
      step: '04 · GRADE 11 PERFORMANCE', title: 'Watch performance and recovery', copy: 'Grade 11 should track foundations, backlogs, effort sustainability, and first encounters with real work—not marks alone.',
      fields: `<div class="journey-field-grid"><label class="journey-field full">Current overall performance (%)<input name="grade11Score" type="number" min="0" max="100" value="${escapeHtml(journey.grade11Score)}" placeholder="Enter only when meaningful"></label></div>${choiceButtons(journeyChoices.grade11, journey.grade11Milestones, 'grade11', true)}`,
      recommendation: journey.grade11Score ? `At ${journey.grade11Score}%, look for subject-level patterns and recovery after difficulty. A single average should never close a career route.` : 'Add performance when available, then pair it with effort, backlog recovery, projects, and mentor conversations.',
    },
    grade12: {
      step: '05 · GRADE 12 + ENTRY', title: 'Unify boards, entrances, and applications', copy: 'Keep one view of board readiness, entrance routes, application deadlines, documents, and alternate pathways.',
      fields: `<div class="journey-field-grid"><label class="journey-field">Board target (%)<input name="grade12Target" type="number" min="0" max="100" value="${escapeHtml(journey.grade12Target)}"></label><label class="journey-field">Primary entrance<select name="entrance">${['Undecided','JEE','NEET','CUET','CLAT','IPMAT','NIFT / NID','UCEED','CA Foundation','State CET','Study abroad tests','Portfolio / audition','No entrance planned','Other'].map((item) => `<option ${journey.entrance === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></div>`,
      recommendation: journey.entrance !== 'Undecided' ? `Plan ${journey.entrance} preparation alongside boards, with at least one realistic alternate entry route.` : 'Choose an entrance only after the target course is clear. Exam prestige is not a career decision.',
    },
    college: {
      step: '06 · COLLEGE + COURSE', title: 'Let real desire widen the map', copy: 'Earlier choices are constrained by location. At college level, sustained desire, programme quality, affordability, safety, and fit can justify a wider search.',
      fields: `<div class="journey-field-grid"><label class="journey-field">Search horizon<select name="collegeScope"><option value="">Choose horizon</option>${['Near home first','Best fit in my state','Best fit across India','Specialist programme anywhere','International options','Skills-first / no degree'].map((item) => `<option ${journey.collegeScope === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label class="journey-field">Course / college shortlist<input name="collegeShortlist" value="${escapeHtml(journey.collegeShortlist)}" placeholder="Names or course families"></label><label class="journey-field full">What burning desire makes the effort worthwhile?<textarea name="burningDesire" placeholder="The work, problem, or contribution you keep returning to…">${escapeHtml(journey.burningDesire)}</textarea></label></div>`,
      recommendation: journey.burningDesire ? 'A sustained desire is recorded. Now test it against the actual course, cost, daily work, and a smaller nearby alternative.' : 'Do not widen geography for reputation alone. Record the work or contribution that makes distance, cost, and effort worthwhile.',
    },
    experience: {
      step: '07 · SPECIALISE + PRACTISE', title: 'Turn study into tested capability', copy: 'Projects, internships, apprenticeships, research, volunteering, and portfolios reveal which specialisation survives contact with reality.',
      fields: choiceButtons(journeyChoices.experience, journey.experiences, 'experience', true),
      recommendation: journey.experiences.length ? `${journey.experiences.length} experience types are tracked. Add reflections and proof to the Evidence Wallet.` : 'Choose at least two different experiences before narrowing a specialisation.',
    },
    employment: {
      step: '08 · FIRST EMPLOYMENT', title: 'Launch, learn, and keep moving', copy: 'Employment is a transition, not a permanent ending. Track the first role, work environment, capability gaps, and learning runway. Retirement remains intentionally parked.',
      fields: `<div class="journey-field-grid"><label class="journey-field full">First role or role family<input name="roleTarget" value="${escapeHtml(journey.roleTarget)}" placeholder="e.g. Junior product designer"></label><label class="journey-field">Preferred work setting<select name="workSetting"><option value="">Choose setting</option>${['On-site','Hybrid','Remote','Field-based','Lab / clinical','Workshop / studio','Flexible'].map((item) => `<option ${journey.workSetting === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label class="journey-field">Readiness<select name="employmentReadiness"><option value="">Choose readiness</option>${['Exploring roles','Building proof','Applying','Interviewing','Offer received','Employed and learning'].map((item) => `<option ${journey.employmentReadiness === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></div>`,
      recommendation: 'Optimise the first role for learning, ethical work, support, and transferable capability—not the illusion of a final destination.',
    },
  }[stageId];
  if (!content) return;
  $('#journeyInspectorStep').textContent = content.step;
  $('#journeyInspectorTitle').textContent = content.title;
  $('#journeyInspectorBody').innerHTML = `<form class="journey-form" id="journeyForm" data-stage="${stageId}"><p class="journey-form-copy">${content.copy}</p>${content.fields}<div class="journey-recommendation"><strong>Guidance logic</strong>${content.recommendation}</div><fieldset class="ai-lens-field"><legend><span>AI LENS</span> AI can inform. You remain the decision-maker.</legend><label>${aiStagePrompts[stageId]}<textarea name="aiReflection" placeholder="Record your answer, source to check, or unresolved question…">${escapeHtml(state.aiJourney.stageAnswers[stageId])}</textarea></label></fieldset><button type="button" class="button-secondary related-discussions" data-action="related-discussions" data-id="${stageId}">See discussions for this decision →</button><div class="journey-inspector-actions"><small>Saved locally · editable anytime</small><button class="button-primary">Save this stop →</button></div></form>`;
  if (isGuest()) {
    $('#journeyForm').insertAdjacentHTML('afterbegin', '<p class="guest-lock">GUEST PREVIEW · Create a profile to record choices at this stop.</p>');
    $$('input, select, textarea, button', $('#journeyForm')).forEach((control) => { control.disabled = true; });
    $('.related-discussions', $('#journeyForm')).disabled = false;
  }
  $('#journeyInspector').setAttribute('aria-hidden', 'false');
  document.body.classList.add('journey-open');
}

const noNoOptions = [
  'Heavy rote learning', 'Coding-heavy daily work', 'Blood / clinical exposure', 'Desk-only routine', 'Field-heavy routine',
  'Constant public interaction', 'Mostly isolated work', 'High-pressure sales', 'Night / shift work', 'Frequent travel or relocation',
  'Long qualification path', 'Competitive-exam dependency', 'High financial risk', 'Unpredictable income',
];

const yearMilestoneConfig = {
  grade10: {
    step: '01 · GRADE 10', title: 'Eliminate poor-fit worlds before choosing a stream',
    copy: 'Most students cannot name a career yet. Start with the work, environments, constraints, and trade-offs they already know they do not want.',
    noteLabel: 'After removing the NO-NOs, what activities or problems are still worth testing?',
    milestones: ['Write the first NO-NO list', 'Sample six subject activities', 'Compare available boards and schools', 'Talk to three working adults', 'Run two career mini-experiments', 'Record subject effort—not marks alone'],
  },
  grade11: {
    step: '02 · GRADE 11', title: 'Build the foundation that later projects depend on',
    copy: 'Settle into the route, close foundational gaps, establish a sustainable study rhythm, and test one real problem before chasing impressive titles.',
    noteLabel: 'Which subject or problem still holds your attention after the difficult parts?',
    milestones: ['Stabilise weekly study rhythm', 'Clear foundational backlogs', 'Track subject-level rank or percentile', 'Aim for top-decile consistency where realistic', 'Complete one real-world mini-project', 'Speak with a practitioner or mentor', 'Review the NO-NO list with evidence'],
  },
  grade12: {
    step: '03 · GRADE 12', title: 'Choose the right course—not merely the famous entrance',
    copy: 'Boards, entrances, course curricula, cost, location, alternatives, and actual student work must resolve into one defensible choice.',
    noteLabel: 'Which course family survives curriculum, cost, workload, location, and NO-NO checks?',
    milestones: ['Protect board-exam readiness', 'Verify entrance eligibility and dates', 'Compare actual course curricula', 'Compare cost, support and location', 'Track top-decile or target rank', 'Build primary and alternate shortlists', 'Submit documents and applications early'],
  },
  college1: {
    step: '04 · COLLEGE YEAR 1', title: 'Confirm that the course fits through foundations',
    copy: 'The first year is for adapting, learning the foundation properly, sampling clubs and labs, and noticing which work remains interesting outside the brochure.',
    noteLabel: 'Which foundation, lab, club, or problem makes you want to go deeper?',
    milestones: ['Understand the complete curriculum map', 'Build a GPA / rank baseline', 'Aim for top-decile habits—not grade anxiety', 'Join one relevant club or lab', 'Complete one small foundation project', 'Build faculty and peer relationships', 'Review whether the course still fits'],
  },
  college2: {
    step: '05 · COLLEGE YEAR 2', title: 'Find the special interest that should shape your choices',
    copy: 'Choose electives, tools, communities, and projects around an emerging special interest. A course becomes useful when the student gives it direction.',
    noteLabel: 'What special interest should guide electives, skill-building, and the next project?',
    milestones: ['Choose aligned electives or modules', 'Name one emerging special interest', 'Build one special-interest project', 'Maintain strong rank / GPA evidence', 'Start a public or reviewable portfolio', 'Shadow work or take a short internship', 'Find one domain mentor'],
  },
  college3: {
    step: '06 · COLLEGE YEAR 3', title: 'Choose the project and experience that signal real direction',
    copy: 'A substantial project plus an internship, apprenticeship, research role, or field experience often becomes the bridge to campus interviews and early work.',
    noteLabel: 'Which project problem and experience best align with your special interest and target work?',
    milestones: ['Select a career-aligned project problem', 'Choose a credible project guide', 'Secure internship / research / field experience', 'Document decisions, failures and outcomes', 'Deepen one differentiating skill', 'Maintain top-decile / strong academic evidence', 'Begin role-specific interview practice', 'Speak with recent alumni'],
  },
  collegeFinal: {
    step: '07 · FINAL YEAR', title: 'Convert the right project into a campus opportunity',
    copy: 'The capstone, rank, portfolio, alumni intelligence, interview preparation, and company-role fit must converge before campus recruitment begins.',
    noteLabel: 'Which campus roles genuinely fit the daily work you want—and which offers are only attractive by title?',
    milestones: ['Finish a defensible flagship project', 'Explain every portfolio claim unaided', 'Keep final-year rank / GPA strong', 'Map campus companies to actual roles', 'Prepare resume and role-specific stories', 'Practise aptitude / technical / case rounds', 'Run repeated mock interviews', 'Use alumni and placement-cell evidence', 'Win a campus offer or execute alternate plan'],
  },
  firstJob: {
    step: '08 · FIRST JOB', title: 'Use the first role as a launchpad, not a verdict',
    copy: 'The first offer may not be the dream job. Track learning, work quality, portfolio evidence, mentors, mobility, and financial runway so the next move becomes stronger.',
    noteLabel: 'Which parts of this role move you toward dream work, and which gaps require the next move?',
    milestones: ['Learn the real workflow and standards', 'Deliver measurable outcomes', 'Build one compounding deep skill', 'Find internal and external mentors', 'Record evidence without exposing employer data', 'Review fit every 6–12 months', 'Prepare for an internal or external move', 'Protect a financial and learning runway'],
  },
  dreamJob: {
    step: '09 · YEARS 1–12', title: 'Reach, test, and sustain dream work',
    copy: 'Treat six to twelve years as a deliberate mobility window—not an expiry date. Dream work is defined by daily problems, people, autonomy, values, and contribution, not a single employer logo.',
    noteLabel: 'Describe the daily work, problems, people, environment, and impact you truly desire—without using a job title.',
    milestones: ['Define dream work by daily reality', 'Map capability and credibility gaps', 'Produce high-signal outcomes', 'Build trusted practitioner relationships', 'Make evidence-led role moves', 'Run repeated interview cycles', 'Review progress at years 1, 3, 6, 9 and 12', 'Sustain growth, health, values and impact once there', 'Redefine dream work when priorities change', 'Keep meaningful alternatives alive'],
  },
};

const noNoCareerExclusions = {
  'Coding-heavy daily work': ['data-scientist'],
  'Blood / clinical exposure': ['doctor'],
  'Desk-only routine': ['chartered-accountant', 'data-scientist', 'public-policy'],
  'Field-heavy routine': ['sustainability-analyst'],
  'Constant public interaction': ['psychologist', 'lawyer', 'product-designer'],
  'Mostly isolated work': ['data-scientist'],
  'High-pressure sales': [],
  'Night / shift work': ['biomedical-engineer'],
  'Frequent travel or relocation': ['sustainability-analyst', 'public-policy'],
  'Long qualification path': ['psychologist', 'lawyer', 'chartered-accountant'],
  'Competitive-exam dependency': ['chartered-accountant', 'biomedical-engineer'],
  'High financial risk': [],
  'Unpredictable income': [],
  'Heavy rote learning': ['chartered-accountant'],
};

const subjectCareerConstraints = {
  Physics: ['biomedical-engineer', 'doctor'],
  Chemistry: ['doctor'],
  Mathematics: ['data-scientist', 'biomedical-engineer'],
  Biology: ['doctor'],
  Accountancy: [],
  Economics: [],
  Psychology: [],
  History: [],
};

function recommendationsAfterElimination(noNos) {
  const excluded = new Set(noNos.flatMap((item) => noNoCareerExclusions[item] || []));
  return rankedCareers().filter((career) => !excluded.has(career.id)).slice(0, 4);
}

function renderJourneyInspector(stageId) {
  closeResearchShelf();
  const config = yearMilestoneConfig[stageId];
  if (!config) return;
  const selectedMilestones = state.journey.stageMilestones[stageId] || [];
  const selectedNoNos = state.journey.noNos[stageId] || [];
  const realityNoNos = workRealityResult().noNos;
  const combinedNoNos = [...new Set([...selectedNoNos, ...realityNoNos])];
  const note = state.journey.stageNotes[stageId] || '';
  const rankStages = ['grade10', 'grade11', 'grade12', 'college1', 'college2', 'college3', 'collegeFinal'];
  const rankField = rankStages.includes(stageId) ? `<label class="journey-field full">Current rank / performance context<select name="rank"><option value="">Not recorded yet</option>${['Top 5% / top 5 rank','Top 10% / top 10 rank','Top 25%','Middle range','Recovering from a setback','Institution does not rank'].map((item) => `<option ${state.journey.ranks[stageId] === item ? 'selected' : ''}>${item}</option>`).join('')}</select><small>Top-decile evidence can help in selective pathways and campus screening, but it is not a universal measure of capability or fit.</small></label>` : '';
  const specialFields = stageId === 'grade12' ? `<label class="journey-field">Primary entrance / route<select name="entrance">${['Undecided','JEE','NEET','CUET','CLAT','IPMAT','NIFT / NID','UCEED','CA Foundation','State CET','Portfolio / audition','Diploma / apprenticeship','No entrance planned','Other'].map((item) => `<option ${state.journey.entrance === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label>` : '';
  const eliminated = combinedNoNos.length;
  const survivors = recommendationsAfterElimination(combinedNoNos);
  const recommendation = eliminated
    ? `${eliminated} poor-fit condition${eliminated === 1 ? '' : 's'} removed. Do not recommend from titles yet: test the remaining choices against the next unfinished milestone and the student’s repeated attention.`
    : 'Do not ask for a dream career yet. Mark the work and environments that reliably drain, repel, or conflict with real constraints; recommendations become clearer after elimination.';
  $('#journeyInspectorStep').textContent = config.step;
  $('#journeyInspectorTitle').textContent = config.title;
  $('#journeyInspectorBody').innerHTML = `<form class="journey-form" id="journeyForm" data-stage="${stageId}"><p class="journey-form-copy">${config.copy}</p>${realityNoNos.length ? `<p class="inherited-nonos"><strong>${realityNoNos.length} work-reality NO-NO${realityNoNos.length === 1 ? '' : 's'} carried into this year:</strong> ${realityNoNos.join(' · ')}</p>` : ''}<section class="nono-section"><div><span>STEP 1 · ELIMINATE</span><h3>What is a definite NO-NO?</h3><p>Choose work conditions—not prestige labels. These exclusions narrow the search without pretending the student already knows the answer.</p></div>${choiceButtons(noNoOptions, selectedNoNos, `nono-${stageId}`, true)}</section><section class="survivor-panel"><div><span>REMAINING CHOICES TO TEST</span><p>${eliminated ? `${eliminated} NO-NO condition${eliminated === 1 ? '' : 's'} applied to the current sample library.` : 'Nothing is eliminated yet; this is only the current signal-ranked sample.'}</p></div><div>${survivors.map((career) => `<button type="button" data-action="career-detail" data-id="${career.id}"><strong>${career.title}</strong><small>${career.fit.label} · test, do not assume</small></button>`).join('')}</div><small>Transparent shortlist, not a verdict. Confirm exclusions against the real daily work.</small></section><section class="milestone-section"><div class="milestone-section-head"><div><span>STEP 2 · BUILD EVIDENCE</span><h3>Milestones for this year</h3></div><strong>${selectedMilestones.length}/${config.milestones.length}</strong></div>${choiceButtons(config.milestones, selectedMilestones, `milestone-${stageId}`, true)}</section><div class="journey-field-grid">${rankField}${specialFields}<label class="journey-field full">${config.noteLabel}<textarea name="stageNote" placeholder="Use observations and evidence—not a polished career slogan.">${escapeHtml(note)}</textarea></label></div><div class="journey-recommendation"><strong>Recommendation logic</strong>${recommendation}</div><fieldset class="ai-lens-field"><legend><span>AI LENS</span> AI can inform. You remain accountable.</legend><label>${aiStagePrompts[stageId]}<textarea name="aiReflection" placeholder="Record the claim, source to check, or human judgment required…">${escapeHtml(state.aiJourney.stageAnswers[stageId] || '')}</textarea></label></fieldset><button type="button" class="button-secondary related-discussions" data-action="related-discussions" data-id="${stageId}">See discussions for this year →</button><div class="journey-inspector-actions"><small>${isGuest() ? 'Guest preview · journey editing locked' : 'Saved locally · editable anytime'}</small><button class="button-primary">Save year plan →</button></div></form>`;
  if (isGuest()) {
    $('#journeyForm').insertAdjacentHTML('afterbegin', '<p class="guest-lock">GUEST PREVIEW · Create a profile to record milestones and NO-NOs.</p>');
    $$('input, select, textarea, button', $('#journeyForm')).forEach((control) => { control.disabled = true; });
    $('.related-discussions', $('#journeyForm')).disabled = false;
    $$('[data-action="career-detail"]', $('#journeyForm')).forEach((control) => { control.disabled = false; });
  }
  $('#journeyInspector').setAttribute('aria-hidden', 'false');
  document.body.classList.add('journey-open');
}

function matchRow(career) {
  return `
    <div class="match-row">
      <span class="career-glyph">${career.glyph}</span>
      <span><strong>${career.title}</strong><small>${career.cluster}</small></span>
      <span class="fit-label">${career.fit.label}</span>
    </div>`;
}

function renderOverview() {
  const completion = compassCompletion();
  const reality = workRealityResult();
  const recommendationReady = reality.answered >= 6;
  const matches = rankedCareers().slice(0, 3);
  const copy = state.audience === 'student'
    ? ['Clarity comes from <em>small proof.</em>', 'Discover what fits, compare the real trade-offs, and try a path before anyone asks you to commit.']
    : ['Support the path without <em>taking it over.</em>', 'See the evidence your child is building, discuss real trade-offs, and agree on one useful next step.'];
  return `
    <div class="view-enter">
      <section class="overview-hero">
        <article class="hero-main">
          <p class="eyebrow">${state.audience === 'student' ? 'YOUR PATH · NOT A VERDICT' : 'A SHARED DECISION · STUDENT-LED'}</p>
          <h2 class="display-title">${copy[0]}</h2>
          <p class="section-copy">${copy[1]}</p>
          <div class="hero-actions">
            <button class="button-primary" data-action="go" data-target="compass">Continue your compass <span>→</span></button>
            <button class="button-secondary" data-action="go" data-target="family">Open family room</button>
          </div>
          <div class="hero-foot"><span></span> Saved privately in this browser · No score is a diagnosis</div>
        </article>
        <aside class="pulse-card">
          <div class="pulse-top"><p class="eyebrow">PATH PULSE</p><span>Grade ${escapeHtml(state.profile?.grade || '10')} · ${escapeHtml(state.profile?.board || 'CBSE')}</span></div>
          <div class="pulse-ring" style="--progress:${completion * 3.6}deg"><strong>${completion}%</strong></div>
          <h3>${completion ? 'Your work reality is taking shape.' : 'Start with what you already reject.'}</h3>
          <p>${completion ? 'Each answer makes trade-offs and matches easier to explain.' : 'First identify the work conditions, pressures, and compromises you do not want.'}</p>
          <button class="button-secondary" data-action="go" data-target="compass">${completion ? 'Continue reality scan' : 'Start with my NO-NOs'} →</button>
        </aside>
      </section>

      <section class="decision-loop" aria-label="ZYSHAM decision loop">
        ${[
          ['01', 'Eliminate NO-NOs', 'Work, life, money, uncertainty'],
          ['02', 'Read your pattern', 'Tensions, priorities, evidence'],
          ['03', 'Try one', 'A low-risk experiment'],
          ['04', 'Reflect', 'Keep evidence, update fit'],
          ['05', 'Plan together', 'One shared next step'],
        ].map(([number, title, text]) => `<div class="loop-step"><span>${number}</span><strong>${title}</strong><small>${text}</small></div>`).join('')}
      </section>

      <section class="overview-grid">
        <article class="panel">
          <div class="panel-head"><div><h3>${recommendationReady ? 'Your remaining career worlds' : 'Recommendations are intentionally waiting'}</h3><p>${recommendationReady ? 'Transparent signals, filtered through your work reality.' : 'Answer at least 6 concrete work-reality questions first.'}</p></div><button class="button-quiet" data-action="go" data-target="${recommendationReady ? 'explore' : 'compass'}">${recommendationReady ? 'See all' : 'Begin'} →</button></div>
          <div class="match-list">${recommendationReady ? matches.map(matchRow).join('') : '<div class="recommendation-hold"><span>NO TITLE GUESSING</span><strong>We will not infer a career from your grade, board, or one favourite subject.</strong><p>Start with screens, schedule, uncertainty, family, money, promotion, travel, people, activity, competition, focus, and service.</p></div>'}</div>
        </article>
        <article class="panel next-step">
          <span class="next-step-icon">↗</span>
          <p class="eyebrow">NEXT BEST STEP</p>
          <h3>${!recommendationReady ? 'Complete the Work Reality Scan first.' : completion < 60 ? 'Add one more piece of lived evidence.' : `Try ${matches[0].title} for 30 minutes.`}</h3>
          <p>${!recommendationReady ? 'Begin with what you reject and the trade-offs you can actually live with.' : completion < 60 ? 'Choose only evidence you know today. You can change it as you learn.' : matches[0].experiment}</p>
          <button class="button-primary" data-action="go" data-target="${completion < 60 ? 'compass' : 'evidence'}">Do this next →</button>
        </article>
      </section>
    </div>`;
}

function legacyRenderCompass() {
  const completion = compassCompletion();
  const signalCount = allSignals().length;
  const top = rankedCareers()[0];
  const streamProfiles = [
    { id: 'science', title: 'Science', asks: 'Concept depth, cumulative practice, and comfort with maths and/or biology.', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'] },
    { id: 'commerce', title: 'Commerce', asks: 'Structured practice, business curiosity, and comfort with numbers or systems.', subjects: ['Economics', 'Accountancy', 'Mathematics'] },
    { id: 'humanities', title: 'Humanities', asks: 'Reading, writing, interpretation, and confidence with open-ended questions.', subjects: ['Psychology', 'History', 'Economics'] },
  ].map((stream) => ({ ...stream, signals: stream.subjects.filter((subject) => state.signals.subjects.includes(subject)).length }));
  const chosen = streamProfiles.find((stream) => stream.id === state.streamChoice);
  return `
    <div class="view-enter">
      <header class="section-header">
        <div><p class="eyebrow">CAREER COMPASS</p><h2 class="section-heading">Build a profile you can explain.</h2><p class="section-copy">Five evidence signals create useful starting points. This is reflective guidance—not a psychometric diagnosis or prediction.</p></div>
      </header>
      <div class="compass-layout">
        <div class="signal-stack">
          ${signalGroups.map((group, index) => `
            <section class="signal-card">
              <div class="signal-card-head"><span class="signal-number">0${index + 1}</span><div><h3>${group.title}</h3><p>${group.copy}</p></div></div>
              <div class="chip-grid">
                ${group.choices.map((choice) => `<button class="choice-chip ${state.signals[group.key].includes(choice) ? 'selected' : ''}" data-action="signal" data-group="${group.key}" data-value="${choice}" aria-pressed="${state.signals[group.key].includes(choice)}">${choice}</button>`).join('')}
              </div>
            </section>`).join('')}

          <section class="signal-card">
            <div class="signal-card-head"><span class="signal-number">06</span><div><h3>Stream reality reflection</h3><p>See what each route asks of you. There is no pass or fail.</p></div></div>
            <div class="chip-grid">
              ${streamProfiles.map((stream) => `<button class="choice-chip ${state.streamChoice === stream.id ? 'selected' : ''}" data-action="stream" data-value="${stream.id}" aria-pressed="${state.streamChoice === stream.id}">${stream.title}${stream.signals ? ` · ${stream.signals} subject signal${stream.signals > 1 ? 's' : ''}` : ''}</button>`).join('')}
            </div>
            ${chosen ? `<div class="disclosure"><strong>${chosen.title} asks for:</strong> ${chosen.asks}<br><br>Your current subject evidence supports ${chosen.signals} of ${chosen.subjects.length} common signals. That is a conversation starter, not an eligibility decision.</div>` : ''}
          </section>
        </div>
        <aside class="compass-summary">
          <p class="eyebrow">LIVE SUMMARY</p>
          <h3>${signalCount ? `${signalCount} pieces of evidence, one living profile.` : 'Your first answer is enough to begin.'}</h3>
          <p>${signalCount ? `${top.title} currently has the clearest overlap. We show why, so you can challenge it.` : 'Choose only what feels true today. Your profile should change as you try things.'}</p>
          <div class="signal-bars">
            ${signalGroups.map((group) => {
              const width = Math.min(100, state.signals[group.key].length * 34);
              return `<div class="signal-bar"><div><span>${group.title.replace(/[?].*$/, '')}</span><span>${state.signals[group.key].length}</span></div><div class="bar-track"><i style="width:${width}%"></i></div></div>`;
            }).join('')}
          </div>
          <button class="button-secondary" data-action="go" data-target="explore" ${completion < 20 ? 'disabled' : ''}>Explore explainable matches →</button>
        </aside>
      </div>
    </div>`;
}

function renderCompass() {
  const completion = compassCompletion();
  const reality = workRealityResult();
  const signalCount = allSignals().length;
  const top = rankedCareers()[0];
  const answerLabel = (question) => state.workReality.answers[question.id] ? `${state.workReality.answers[question.id]}/10` : 'Not answered';
  const streamProfiles = [
    { id: 'science', title: 'Science', asks: 'Concept depth, cumulative practice, and comfort with maths and/or biology.', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'] },
    { id: 'commerce', title: 'Commerce', asks: 'Structured practice, business curiosity, and comfort with numbers or systems.', subjects: ['Economics', 'Accountancy', 'Mathematics'] },
    { id: 'humanities', title: 'Humanities', asks: 'Reading, writing, interpretation, and confidence with open-ended questions.', subjects: ['Psychology', 'History', 'Economics'] },
  ].map((stream) => ({ ...stream, signals: stream.subjects.filter((subject) => state.signals.subjects.includes(subject)).length }));
  const chosen = streamProfiles.find((stream) => stream.id === state.streamChoice);
  return `
    <div class="view-enter">
      <header class="section-header compass-intro">
        <div><p class="eyebrow">STEP 1 · ELIMINATE BEFORE YOU RECOMMEND</p><h2 class="section-heading">Start with what you do <em>not</em> want.</h2><p class="section-copy">Concrete aversions and life trade-offs reveal more than a premature dream-job question.</p></div>
        <button class="research-shortcut" data-action="research-open" type="button">Open research shelf <span>→</span></button>
      </header>

      <section class="reality-scan panel" aria-labelledby="realityScanTitle">
        <div class="reality-scan-head"><div><p class="eyebrow">WHAT YOU DON'T LIKE · SERIES 01</p><h3 id="realityScanTitle">Work Reality Scan</h3><p>${isGuest() ? 'Guest preview · create a profile to record your personal answers.' : 'Move every scale. A low answer is not a weakness; it is useful design information.'}</p></div><div class="scan-progress"><strong>${reality.answered}</strong><span>of ${workRealityQuestions.length}<br>answered</span></div></div>
        <div class="reality-question-grid">
          ${workRealityQuestions.map((question, index) => {
            const answer = state.workReality.answers[question.id];
            return `<label class="reality-question ${answer ? 'answered' : ''}">
              <span class="reality-question-number">${String(index + 1).padStart(2, '0')}</span>
              <strong>${question.question}</strong>
              <span class="range-readout" id="readout-${question.id}">${answerLabel(question)}</span>
              <input type="range" min="1" max="10" step="1" value="${answer || 5}" data-work-reality="${question.id}" aria-describedby="ends-${question.id}" ${isGuest() ? 'disabled' : ''}>
              <span class="range-ends" id="ends-${question.id}"><span>1 · ${question.low}</span><span>10 · ${question.high}</span></span>
            </label>`;
          }).join('')}
        </div>
      </section>

      <div class="compass-layout evidence-compass">
        <div class="signal-stack">
          <section class="signal-card preference-bridge">
            <div class="signal-card-head"><span class="signal-number">02</span><div><h3>Now collect supporting evidence</h3><p>Only after the reality scan: activities, strengths, subjects, values, and working style you have actually experienced.</p></div></div>
          </section>
          ${signalGroups.map((group, index) => `
            <section class="signal-card">
              <div class="signal-card-head"><span class="signal-number">${String(index + 1).padStart(2, '0')}</span><div><h3>${group.title}</h3><p>${group.copy}</p></div></div>
              <div class="chip-grid">${group.choices.map((choice) => `<button class="choice-chip ${state.signals[group.key].includes(choice) ? 'selected' : ''}" data-action="signal" data-group="${group.key}" data-value="${choice}" aria-pressed="${state.signals[group.key].includes(choice)}">${choice}</button>`).join('')}</div>
            </section>`).join('')}
          <section class="signal-card">
            <div class="signal-card-head"><span class="signal-number">06</span><div><h3>Stream reality reflection</h3><p>See what each route asks of you. There is no pass or fail.</p></div></div>
            <div class="chip-grid">${streamProfiles.map((stream) => `<button class="choice-chip ${state.streamChoice === stream.id ? 'selected' : ''}" data-action="stream" data-value="${stream.id}" aria-pressed="${state.streamChoice === stream.id}">${stream.title}${stream.signals ? ` · ${stream.signals} subject signal${stream.signals > 1 ? 's' : ''}` : ''}</button>`).join('')}</div>
            ${chosen ? `<div class="disclosure"><strong>${chosen.title} asks for:</strong> ${chosen.asks}<br><br>Your current subject evidence supports ${chosen.signals} of ${chosen.subjects.length} common signals. This is a conversation starter, not an eligibility decision.</div>` : ''}
          </section>
        </div>
        <aside class="compass-summary work-pattern-summary" aria-live="polite">
          <p class="eyebrow">LIVE · EXPLAINABLE PROFILE</p>
          ${reality.primary ? `<span class="pattern-kicker">CURRENT PRIMARY PATTERN</span><h3>${reality.primary.name}</h3><p>${reality.primary.line}.</p>${reality.secondary ? `<div class="secondary-pattern"><span>Also visible</span><strong>${reality.secondary.name}</strong></div>` : ''}` : `<h3>Answer the reality questions first.</h3><p>Your work-style pattern and NO-NOs will appear here. No career is recommended from an unanswered profile.</p>`}
          ${reality.noNos.length ? `<div class="summary-nonos"><span>AUTOMATIC NO-NO SIGNALS</span>${reality.noNos.map((item) => `<b>${item}</b>`).join('')}</div>` : ''}
          ${reality.tensions.map((item) => `<div class="preference-tension"><span>TRADE-OFF TO TEST</span><p>${item}</p></div>`).join('')}
          <div class="profile-meter"><span>${reality.answered}/${workRealityQuestions.length} reality answers · ${signalCount} evidence signals</span><div><i style="width:${completion}%"></i></div></div>
          <p class="summary-explanation">${top && reality.answered ? `<strong>${top.title}</strong> currently overlaps at ${top.fit.workAlignment}/10 on answered work conditions. Validate that against its real daily work.` : 'Recommendations become available as transparent hypotheses—not permanent labels.'}<br><br>Pattern names are revisable work-style summaries—not astrology, diagnosis, destiny, or ability.</p>
          <button class="button-secondary" data-action="go" data-target="explore" ${reality.answered < 6 ? 'disabled' : ''}>Test remaining career worlds →</button>
          ${reality.answered ? '<button class="pattern-reset" data-action="work-reality-reset">Clear reality answers</button>' : ''}
        </aside>
      </div>
    </div>`;
}

function renderCareerCard(career) {
  const saved = state.saved.includes(career.id);
  const compared = state.compare.includes(career.id);
  const why = career.fit.matches.slice(0, 2);
  return `
    <article class="career-card">
      <div class="career-card-top"><span class="career-glyph">${career.glyph}</span><button class="save-button ${saved ? 'saved' : ''}" data-action="save-career" data-id="${career.id}" aria-label="${saved ? 'Remove from' : 'Save to'} shortlist" aria-pressed="${saved}">${saved ? '♥' : '♡'}</button></div>
      <h3>${career.title}</h3>
      <p>${career.summary}</p>
      <div class="tag-row"><span class="tag">${career.fit.label}</span>${career.fit.workAlignment ? `<span class="tag">Work reality: ${career.fit.workAlignment}/10</span>` : ''}${why.map((tag) => `<span class="tag">Because: ${tag}</span>`).join('')}${career.fit.conflicts.map((item) => `<span class="tag conflict-tag">Conflicts: ${item}</span>`).join('')}</div>
      <div class="career-card-foot"><button data-action="career-detail" data-id="${career.id}">Reality & route →</button><button data-action="compare-career" data-id="${career.id}" aria-pressed="${compared}">${compared ? '✓ Comparing' : '+ Compare'}</button></div>
    </article>`;
}

function renderExplore() {
  const clusters = ['All', 'Technology', 'Health', 'Business', 'Society'];
  const term = state.careerSearch.toLowerCase();
  const careerFilter = (career) => state.careerFilter === 'All' || career.cluster.toLowerCase().includes(state.careerFilter.toLowerCase());
  const results = rankedCareers().filter((career) => careerFilter(career) && (!term || `${career.title} ${career.cluster} ${career.summary}`.toLowerCase().includes(term)));
  return `
    <div class="view-enter">
      <header class="section-header"><div><p class="eyebrow">CAREER LIBRARY</p><h2 class="section-heading">Explore the work, not just the title.</h2><p class="section-copy">Every path shows the route, daily reality, trade-offs, and a low-risk way to try it.</p></div><button class="button-secondary" data-action="go" data-target="compare">Compare tray · ${state.compare.length}/3</button></header>
      <div class="filter-row">
        <label class="search-wrap"><span>⌕</span><input id="careerSearch" type="search" value="${escapeHtml(state.careerSearch)}" placeholder="Search careers or clusters" aria-label="Search careers"></label>
        ${clusters.map((filter) => `<button class="filter-button ${state.careerFilter === filter ? 'active' : ''}" data-action="filter" data-value="${filter}">${filter}</button>`).join('')}
      </div>
      <div class="career-grid">${results.length ? results.map(renderCareerCard).join('') : '<div class="panel"><h3>No careers found</h3><p>Try a broader search or another cluster.</p></div>'}</div>
      <p class="disclosure">Match labels come only from the choices in your Career Compass. They do not measure aptitude, guarantee admission, or predict success.</p>
    </div>`;
}

function renderCareerDetail(career) {
  return `
    <div class="view-enter">
      <button class="button-quiet" data-action="go" data-target="explore">← Back to careers</button>
      <header class="section-header"><div><p class="eyebrow">${career.cluster}</p><h2 class="section-heading">${career.title}</h2><p class="section-copy">${career.summary}</p></div><button class="button-primary" data-action="compare-career" data-id="${career.id}">${state.compare.includes(career.id) ? 'Remove from compare' : 'Add to compare'}</button></header>
      <div class="overview-grid">
        <div class="panel"><div class="panel-head"><h3>The path, made visible</h3></div>
          ${[['Typical day', career.day], ['Subject foundation', career.subjects], ['Possible route', career.route], ['Typical preparation time', career.duration], ['Honest reality', career.reality]].map(([label, text]) => `<div class="conversation-prompt"><span>${label.toUpperCase()}</span><p>${text}</p></div>`).join('')}
        </div>
        <aside class="panel next-step"><span class="next-step-icon">↗</span><p class="eyebrow">TRY BEFORE YOU DECIDE</p><h3>A 30–60 minute experiment</h3><p>${career.experiment}</p><button class="button-primary" data-action="add-experiment" data-id="${career.id}">Add to evidence wallet →</button></aside>
      </div>
    </div>`;
}

function renderCompare() {
  const selected = state.compare.map((id) => careers.find((career) => career.id === id)).filter(Boolean);
  if (!selected.length) {
    return `<div class="view-enter"><header class="section-header"><div><p class="eyebrow">CAREER COMPARE</p><h2 class="section-heading">Put the trade-offs side by side.</h2></div></header><div class="compare-empty"><div><span>⇄</span><h3>Your compare tray is empty.</h3><p>Add up to three careers. Compare the actual work, education route, time, and reality—not prestige.</p><button class="button-primary" data-action="go" data-target="explore">Explore careers →</button></div></div></div>`;
  }
  const rows = [
    ['Typical work', 'day'], ['Subject foundation', 'subjects'], ['Education route', 'route'], ['Preparation time', 'duration'], ['Honest reality', 'reality'], ['Try it now', 'experiment'],
  ];
  return `
    <div class="view-enter">
      <header class="section-header"><div><p class="eyebrow">CAREER COMPARE</p><h2 class="section-heading">Trade prestige for useful detail.</h2><p class="section-copy">Compare up to three routes with the same questions. The best path is the one whose work and trade-offs you understand.</p></div><button class="button-secondary" data-action="go" data-target="explore">Add another · ${selected.length}/3</button></header>
      <div class="compare-table"><div class="compare-grid" style="--compare-count:${selected.length}">
        <div class="compare-cell compare-label compare-head">PATH</div>
        ${selected.map((career) => `<div class="compare-cell compare-head"><span class="career-glyph">${career.glyph}</span><h3>${career.title}</h3><button data-action="compare-career" data-id="${career.id}">Remove</button></div>`).join('')}
        ${rows.map(([label, key]) => `<div class="compare-cell compare-label">${label}</div>${selected.map((career) => `<div class="compare-cell"><p>${career[key]}</p></div>`).join('')}`).join('')}
      </div></div>
    </div>`;
}

const roadmapItems = [
  { id: 'profile', stage: 'NOW · GRADE 10', title: 'Build your evidence profile', copy: 'Interests, strengths, values, subjects, and preferred work style.' },
  { id: 'stream', stage: 'NEXT · STREAM DECISION', title: 'Choose with eyes open', copy: 'Compare subject readiness, workload, flexibility, and nearby alternatives.' },
  { id: 'experiment', stage: 'THIS TERM', title: 'Run one real-world experiment', copy: 'A mini-project, practitioner interview, observation, or job-shadow reflection.' },
  { id: 'syllabus', stage: 'GRADE 11', title: 'Connect syllabus to direction', copy: 'Track foundations, review backlogs weekly, and keep a sustainable rhythm.' },
  { id: 'applications', stage: 'GRADE 12', title: 'Unify boards, entrances, and applications', copy: 'One calendar for mocks, error reviews, documents, and decision deadlines.' },
];

function renderRoadmap() {
  return `
    <div class="view-enter">
      <header class="section-header"><div><p class="eyebrow">MY PATH</p><h2 class="section-heading">A living plan, not a perfect plan.</h2><p class="section-copy">Turn decisions into milestones. Check them off, revisit them, and keep the next action small.</p></div></header>
      <div class="roadmap-shell">
        <section class="panel roadmap-list">
          ${roadmapItems.map((item) => {
            const done = state.roadmapDone.includes(item.id);
            return `<article class="roadmap-item ${done ? 'done' : ''}"><button class="milestone-check" data-action="milestone" data-id="${item.id}" aria-label="Mark ${item.title} ${done ? 'incomplete' : 'complete'}" aria-pressed="${done}">${done ? '✓' : '○'}</button><div class="roadmap-copy"><span>${item.stage}</span><h3>${item.title}</h3><p>${item.copy}</p></div><button class="roadmap-action" data-action="roadmap-open" data-id="${item.id}">${done ? 'Review' : 'Open'} →</button></article>`;
          }).join('')}
        </section>
        <aside class="panel weekly-plan">
          <div class="panel-head"><div><h3>This week</h3><p>${state.tasks.filter((task) => task.done).length}/${state.tasks.length} actions complete</p></div></div>
          <div class="task-list">${state.tasks.map((task) => `<div class="task-row"><input type="checkbox" id="${task.id}" data-action="task-toggle" data-id="${task.id}" ${task.done ? 'checked' : ''}><label for="${task.id}">${escapeHtml(task.text)}</label></div>`).join('')}</div>
          <form class="task-form" id="taskForm"><input id="taskInput" maxlength="100" placeholder="Add one small next step" aria-label="New task"><button aria-label="Add task">+</button></form>
          <p class="disclosure">Existing Zysham syllabus, mock review, and entrance planning now live on one shared path.</p>
        </aside>
      </div>
    </div>`;
}

function renderFamily() {
  const parent = state.familyLens === 'parent';
  const prompts = parent
    ? [
        ['ASK, DON’T ASSUME', 'Which part of this path feels exciting—and which part feels heavy?'],
        ['MAKE CONSTRAINTS VISIBLE', 'What time, cost, location, or support constraint should we research together?'],
        ['SUPPORT THE TEST', 'What small experiment can I help arrange without deciding the outcome?'],
      ]
    : [
        ['NAME THE SIGNAL', 'What evidence makes this path feel like yours rather than someone else’s?'],
        ['NAME THE FEAR', 'What are you worried your family may not understand yet?'],
        ['MAKE ONE REQUEST', 'What support would help you test this path fairly?'],
      ];
  const alignment = Math.min(100, 42 + state.saved.length * 8 + state.evidence.length * 7 + (state.familyNote ? 15 : 0));
  return `
    <div class="view-enter">
      <header class="section-header"><div><p class="eyebrow">FAMILY ROOM</p><h2 class="section-heading">Share evidence. Keep ownership clear.</h2><p class="section-copy">The student owns the direction. The family makes constraints, questions, and support visible.</p></div><div class="lens-tabs" aria-label="Family room perspective"><button class="${!parent ? 'active' : ''}" data-action="family-lens" data-value="student">Student lens</button><button class="${parent ? 'active' : ''}" data-action="family-lens" data-value="parent">Parent lens</button></div></header>
      <div class="family-grid">
        <article class="panel alignment-card">
          <p class="eyebrow">CONVERSATION READINESS</p><div class="alignment-score"><strong>${alignment}</strong><span>/ 100</span></div>
          <h3>${alignment >= 70 ? 'You have enough evidence for a useful conversation.' : 'Build one more piece of shared evidence.'}</h3>
          <p>This measures preparation—not agreement. Disagreement can still be productive when the reasons are visible.</p>
          <div class="alignment-track"><i class="on"></i><i class="${alignment >= 60 ? 'on' : ''}"></i><i class="${alignment >= 80 ? 'on' : ''}"></i></div>
        </article>
        <section class="prompt-cards">
          ${prompts.map(([label, prompt]) => `<article class="conversation-prompt"><span>${label}</span><p>${prompt}</p></article>`).join('')}
          <label><span class="eyebrow">SHARED NOTE</span><textarea class="shared-note" id="familyNote" placeholder="Write one thing to research or discuss together…">${escapeHtml(state.familyNote)}</textarea></label>
        </section>
      </div>
    </div>`;
}

function renderEvidence() {
  const top = rankedCareers()[0];
  const experimentCareers = [top, ...careers.filter((career) => state.saved.includes(career.id) && career.id !== top.id)].slice(0, 3);
  return `
    <div class="view-enter">
      <header class="section-header"><div><p class="eyebrow">EVIDENCE WALLET</p><h2 class="section-heading">Collect proof of what energises you.</h2><p class="section-copy">Projects, conversations, experiments, and reflections make future applications stronger—and decisions more honest.</p></div></header>
      <div class="evidence-grid">
        <section class="panel">
          <div class="panel-head"><div><h3>Your evidence</h3><p>${state.evidence.length} item${state.evidence.length === 1 ? '' : 's'} saved locally</p></div></div>
          <form class="evidence-form" id="evidenceForm"><input id="evidenceTitle" maxlength="120" placeholder="What did you make, try, or learn?" aria-label="Evidence title" required><select id="evidenceType" aria-label="Evidence type"><option>Experiment</option><option>Project</option><option>Conversation</option><option>Achievement</option><option>Reflection</option></select><button class="button-primary">Add</button></form>
          <div class="evidence-list">${state.evidence.length ? state.evidence.map((item) => `<article class="evidence-item"><span class="evidence-icon">▣</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.type)}</small></span><button data-action="evidence-remove" data-id="${item.id}" aria-label="Remove ${escapeHtml(item.title)}">×</button></article>`).join('') : '<p class="disclosure">Your wallet is empty. Try one experiment and record what surprised you.</p>'}</div>
        </section>
        <aside>
          <p class="eyebrow">TRY BEFORE YOU DECIDE</p>
          ${experimentCareers.map((career) => `<article class="experiment-card"><span>${career.title.toUpperCase()}</span><h3>One low-risk test</h3><p>${career.experiment}</p><button class="button-secondary" data-action="add-experiment" data-id="${career.id}">Add this experiment</button></article>`).join('')}
        </aside>
      </div>
    </div>`;
}

function experienceFilterOptions(key) {
  return [...new Set(experienceStories.map((story) => key === 'country' ? story.profile.country : key === 'stage' ? story.journey.stage : story.perspective))].sort();
}

function filteredExperiences() {
  const filters = state.experienceFilters;
  const query = filters.search.trim().toLowerCase();
  return experienceStories.filter((story) => {
    const haystack = `${story.title} ${story.narrative} ${story.profile.country} ${story.profile.region} ${story.journey.targetCareer} ${story.tags.join(' ')}`.toLowerCase();
    return (!query || haystack.includes(query))
      && (filters.country === 'All' || story.profile.country === filters.country)
      && (filters.stage === 'All' || story.journey.stage === filters.stage)
      && (filters.perspective === 'All' || story.perspective === filters.perspective)
      && (filters.ai === 'All' || (filters.ai === 'AI used' ? story.aiJourney.usageStage !== 'not-used' : story.aiJourney.usageStage === 'not-used'));
  });
}

function titleCase(value) {
  return String(value).replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function renderExperienceCard(story) {
  return `<article class="experience-card">
    <div class="experience-card-top"><span class="story-kind ${story.storyType}">${story.storyType === 'composite' ? 'Simulated composite' : 'Simulated scenario'}</span><span>${escapeHtml(story.profile.country)} · ${escapeHtml(titleCase(story.journey.stage))}</span></div>
    <h3>${escapeHtml(story.title)}</h3><p>${escapeHtml(story.narrative)}</p>
    <div class="experience-tags"><span>${escapeHtml(story.profile.educationBoardOrRoute)}</span><span>${escapeHtml(titleCase(story.journey.careerCluster))}</span><span>AI: ${escapeHtml(titleCase(story.aiJourney.usageStage))}</span></div>
    <button class="button-secondary" data-action="experience-detail" data-id="${story.id}">Read decisions & trade-offs →</button>
  </article>`;
}

function renderExperiences() {
  const filtered = filteredExperiences();
  const detail = experienceStories.find((story) => story.id === state.detailExperience);
  const countries = experienceFilterOptions('country');
  const stages = experienceFilterOptions('stage');
  const perspectives = experienceFilterOptions('perspective');
  const indiaCount = experienceStories.filter((story) => story.profile.country === 'India').length;
  const aiCount = experienceStories.filter((story) => story.aiJourney.usageStage !== 'not-used').length;
  if (detail) return `<div class="view-enter"><button class="back-button" data-action="experience-close">← Back to all experiences</button>
    <article class="experience-detail panel"><header><div><span class="story-kind ${detail.storyType}">${detail.storyType === 'composite' ? 'Simulated composite' : 'Simulated scenario'}</span><p class="eyebrow">${escapeHtml(detail.profile.country)} · ${escapeHtml(detail.profile.region)} · ${escapeHtml(titleCase(detail.journey.stage))}</p><h2>${escapeHtml(detail.title)}</h2></div><div class="story-score"><strong>${detail.metrics.outcomeConfidence}/5</strong><span>outcome confidence<br>inside this scenario</span></div></header><p class="story-disclosure">${escapeHtml(detail.disclosure)}</p><p class="experience-narrative">${escapeHtml(detail.narrative)}</p>
    <div class="story-decision-grid"><section><span>THE DECISION</span><h3>${escapeHtml(detail.journey.majorDecision)}</h3><ul>${detail.journey.decisionInputs.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><span>ACTIONS</span><ul>${detail.journey.actions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><span>TRADE-OFFS</span><ul>${detail.journey.tradeoffs.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><span>WHAT FOLLOWED</span><h3>${escapeHtml(detail.journey.outcome)}</h3><p>${escapeHtml(detail.journey.lesson)}</p></section></div>
    <section class="ai-story-panel"><span>AI JOURNEY</span><h3>AI acted as ${escapeHtml(titleCase(detail.aiJourney.role))}; the human remained ${escapeHtml(titleCase(detail.aiJourney.humanRole))}.</h3><p><strong>Use:</strong> ${escapeHtml(detail.aiJourney.usage)}</p><p><strong>Challenge:</strong> ${escapeHtml(detail.aiJourney.challenge)}</p><p><strong>Verification:</strong> ${escapeHtml(detail.aiJourney.verification)}</p><button class="button-primary" data-action="go" data-target="ai-journey">Open your AI Journey →</button></section></article></div>`;
  return `<div class="view-enter experience-view">
    <header class="section-header"><div><p class="eyebrow">EXPERIENCE EXCHANGE</p><h2 class="section-heading">Many routes. Honest trade-offs. No borrowed certainty.</h2><p class="section-copy">Search 500 original, fictional scenarios across India and global comparators. Learn from patterns, then add your own private account.</p></div><button class="button-primary" data-action="share-open">Share your experience</button></header>
    <section class="experience-metrics" aria-label="Experience corpus metrics"><article><strong>${experienceCorpusMetadata.storyCount}</strong><span>disclosed scenarios</span></article><article><strong>${indiaCount}</strong><span>India journeys</span></article><article><strong>${countries.length}</strong><span>countries</span></article><article><strong>${aiCount}</strong><span>AI-tagged journeys</span></article><article><strong>${state.sharedExperiences.length}</strong><span>your private stories</span></article></section>
    <form class="experience-filters" id="experienceFilters"><label class="search-wide">Search stories<input id="experienceSearch" value="${escapeHtml(state.experienceFilters.search)}" placeholder="Career, city, board, barrier, lesson…"></label><label>Country<select name="country"><option>All</option>${countries.map((item) => `<option ${state.experienceFilters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label>Journey stage<select name="stage"><option>All</option>${stages.map((item) => `<option ${state.experienceFilters.stage === item ? 'selected' : ''} value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label>Perspective<select name="perspective"><option>All</option>${perspectives.map((item) => `<option ${state.experienceFilters.perspective === item ? 'selected' : ''} value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label>AI involvement<select name="ai"><option>All</option><option ${state.experienceFilters.ai === 'AI used' ? 'selected' : ''}>AI used</option><option ${state.experienceFilters.ai === 'No AI' ? 'selected' : ''}>No AI</option></select></label></form>
    <div class="results-line"><strong>${filtered.length} journeys found</strong><span>What worked for one learner may not transfer to another.</span></div>
    <section class="experience-grid">${filtered.slice(0, state.experienceLimit).map(renderExperienceCard).join('') || '<article class="panel empty-state"><h3>No matching journeys</h3><p>Widen one filter or search a different decision.</p></article>'}</section>
    ${filtered.length > state.experienceLimit ? `<button class="button-secondary load-more" data-action="experience-more">Show more (${filtered.length - state.experienceLimit} remaining)</button>` : ''}
    <section class="source-pathways panel"><div><p class="eyebrow">REAL-WORLD SOURCE PATHWAYS</p><h2>Go from scenarios to publisher-documented accounts.</h2><p>We link outward instead of copying stories or implying reuse rights. Institutional stories can be selective or sponsor-biased; verify dates and local relevance.</p></div><div class="source-links"><a href="https://repository.education.gov.in/" target="_blank" rel="noreferrer">India Ministry of Education ↗</a><a href="https://www.nsdcindia.org/sib" target="_blank" rel="noreferrer">NSDC Stories of Change ↗</a><a href="https://www.unicef.org/india/economic-opportunities-young-people" target="_blank" rel="noreferrer">UNICEF India YuWaah ↗</a><a href="https://myfuture.edu.au/case-studies" target="_blank" rel="noreferrer">Australia myfuture ↗</a><a href="https://skillsbuild.org/spotlights" target="_blank" rel="noreferrer">IBM SkillsBuild spotlights ↗</a></div></section>
  </div>`;
}

function renderShareExperience() {
  return `<div class="view-enter"><button class="back-button" data-action="share-close">← Back to exchange</button><section class="share-experience panel"><p class="eyebrow">SHARE YOUR EXPERIENCE</p><h2>Your story stays private on this device in this prototype.</h2><p class="section-copy">Use a pseudonym. Do not enter a phone number, exact address, exam ID, health record, or another person’s private information.</p><form id="shareExperienceForm" class="share-form"><label>Story title<input name="title" maxlength="100" required placeholder="The choice I had to make"></label><label>Pseudonym or initials<input name="name" maxlength="30" required placeholder="e.g. K, or River"></label><label>Country<input name="country" maxlength="50" value="India" required></label><label>Journey stage<select name="stage">${experienceFilterOptions('stage').map((item) => `<option value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label class="full">What choice were you facing?<textarea name="decision" maxlength="600" required></textarea></label><label class="full">What did you try, and what happened?<textarea name="outcome" maxlength="1200" required></textarea></label><label class="full">How did AI help or complicate the decision?<textarea name="ai" maxlength="600" placeholder="Optional"></textarea></label><label class="consent-check full"><input type="checkbox" required> I have removed identifying details and understand this is stored only in my browser.</label><button class="button-primary">Save private story →</button></form></section></div>`;
}

function allDiscussionTopics() {
  return [...state.userDiscussions, ...discussionTopics];
}

function discussionOptions(key) {
  return [...new Set(discussionTopics.map((topic) => key === 'country' ? topic.perspectiveContext.country : topic[key]))].sort();
}

function filteredDiscussions() {
  const filters = state.discussionFilters;
  const query = filters.search.trim().toLowerCase();
  return allDiscussionTopics().filter((topic) => {
    const haystack = `${topic.title} ${topic.body} ${topic.category} ${topic.journeyStage} ${(topic.tags || []).join(' ')}`.toLowerCase();
    return (!query || haystack.includes(query))
      && (filters.category === 'All' || topic.category === filters.category)
      && (filters.stage === 'All' || topic.journeyStage === filters.stage)
      && (filters.country === 'All' || topic.perspectiveContext?.country === filters.country);
  });
}

function renderDiscussionCard(topic) {
  const saved = state.savedDiscussions.includes(topic.id);
  return `<article class="discussion-card"><div class="discussion-meta"><span class="demo-label">${topic.demo ? 'SYNTHETIC DEMO' : 'YOUR LOCAL POST'}</span><span>${escapeHtml(titleCase(topic.category))}</span><span>${escapeHtml(titleCase(topic.journeyStage))}</span></div><h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.body)}</p><div class="discussion-author"><span>${escapeHtml(topic.author.displayName.slice(0, 2).toUpperCase())}</span><div><strong>${escapeHtml(topic.author.displayName)}</strong><small>${escapeHtml(topic.author.role)} · ${escapeHtml(topic.author.region || topic.author.country)}</small></div></div><footer><span>${topic.metrics?.responseCount || topic.responses?.length || 0} responses · ${topic.metrics?.helpfulVotes || 0} helpful</span><button data-action="discussion-save" data-id="${topic.id}" aria-pressed="${saved}">${saved ? 'Saved' : 'Save'}</button><button data-action="discussion-detail" data-id="${topic.id}">Open →</button></footer></article>`;
}

function renderDiscussionDetail(topic) {
  const responses = [...(topic.responses || []), ...(state.discussionReplies[topic.id] || [])];
  return `<div class="view-enter"><button class="back-button" data-action="discussion-close">← Back to Discussions</button><article class="discussion-thread panel"><header><div class="discussion-meta"><span class="demo-label">${topic.demo ? 'SYNTHETIC DEMO' : 'YOUR LOCAL POST'}</span><span>${escapeHtml(titleCase(topic.category))}</span><span>${escapeHtml(topic.perspectiveContext?.label || '')}</span></div><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.body)}</p><div class="thread-author">Started by ${escapeHtml(topic.author.displayName)} · ${escapeHtml(topic.author.role)} · ${escapeHtml(topic.author.region || topic.author.country)}</div></header>${topic.demo ? `<p class="forum-disclosure">${escapeHtml(topic.disclosure)} Check current eligibility, deadlines, fees, policies, and safety questions with official or qualified sources.</p>` : ''}<section class="thread-responses"><h3>${responses.length} perspectives</h3>${responses.map((response) => `<article class="thread-response ${response.parentResponseId ? 'nested' : ''}"><div><span>${escapeHtml(response.author.displayName.slice(0, 2).toUpperCase())}</span><strong>${escapeHtml(response.author.displayName)}</strong><small>${escapeHtml(response.author.role)} · ${escapeHtml(response.author.region || response.author.country)} · ${response.demo ? 'Demo user' : 'Local profile'}</small></div><p>${escapeHtml(response.body)}</p><footer>${response.helpfulVotes || 0} found this helpful</footer></article>`).join('')}</section><form id="discussionReplyForm" data-topic="${topic.id}" class="discussion-reply"><label>Add a respectful perspective<textarea name="reply" maxlength="1000" required placeholder="Share what you tried, distinguish experience from fact, and link official sources for changing rules."></textarea></label><button class="button-primary">Post local reply →</button></form></article></div>`;
}

function renderNewDiscussion() {
  return `<div class="view-enter"><button class="back-button" data-action="discussion-new-close">← Back to Discussions</button><section class="share-experience panel"><p class="eyebrow">START A DISCUSSION</p><h2>Ask for perspective, not a verdict.</h2><p class="section-copy">Use a pseudonym. Do not post exact school, address, phone, exam ID, health details, or another person’s private information.</p><form id="newDiscussionForm" class="share-form"><label class="full">Discussion title<input name="title" maxlength="150" required></label><label>Category<select name="category">${discussionOptions('category').map((item) => `<option value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label>Journey stage<select name="stage">${discussionOptions('journeyStage').map((item) => `<option value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label class="full">Context and question<textarea name="body" maxlength="1600" required placeholder="What decision are you facing? What have you checked already? Which constraints matter?"></textarea></label><label class="consent-check full"><input type="checkbox" required> I removed identifying details and understand this prototype stores the post only in my browser.</label><button class="button-primary">Save local discussion →</button></form></section></div>`;
}

function renderStudentDirectory() {
  const detail = demoStudents.find((student) => student.id === state.detailStudent);
  if (detail) return `<div class="view-enter"><button class="back-button" data-action="student-detail-close">← Back to demo students</button><article class="demo-student-detail panel"><header><span class="demo-label">FICTIONAL DEMO PROFILE</span><h2>${escapeHtml(detail.alias)}</h2><p>${escapeHtml(detail.disclosure)}</p></header><div class="student-context-grid"><section><span>PLACE & LEARNING</span><h3>${escapeHtml(detail.profile.location.region)}, ${escapeHtml(detail.profile.location.country)}</h3><p>${escapeHtml(titleCase(detail.profile.education.stage))} · ${escapeHtml(detail.profile.education.curriculum)} · ${escapeHtml(detail.profile.education.stream)}</p></section><section><span>CURRENT DECISION</span><h3>${escapeHtml(detail.journey.currentDecision)}</h3><p>${escapeHtml(detail.journey.goal)}</p></section><section><span>ACCESS CONTEXT</span><h3>${escapeHtml(titleCase(detail.context.digitalAccess.device))} · ${escapeHtml(titleCase(detail.context.digitalAccess.connectivity))}</h3><p>${escapeHtml(detail.context.digitalAccess.note)} Accessibility context: ${escapeHtml(titleCase(detail.context.accessibility.supportNeed))}.</p></section><section><span>AI PRACTICE</span><h3>${escapeHtml(titleCase(detail.aiPractice.usageLevel))}</h3><p>${escapeHtml(detail.aiPractice.verificationHabit)} ${escapeHtml(detail.aiPractice.boundary)}</p></section></div><div class="student-discussion-intent"><span>WANTS TO DISCUSS</span><p>${escapeHtml(detail.community.wantsToDiscuss)}</p><button class="button-primary" data-action="student-to-discussions" data-value="${escapeHtml(detail.community.wantsToDiscuss)}">Find related discussions →</button></div></article></div>`;
  const filters = state.studentDirectoryFilters;
  const query = filters.search.trim().toLowerCase();
  const countries = [...new Set(demoStudents.map((student) => student.profile.location.country))].sort();
  const stages = [...new Set(demoStudents.map((student) => student.profile.education.stage))].sort();
  const filtered = demoStudents.filter((student) => {
    const haystack = `${student.alias} ${student.profile.location.country} ${student.profile.location.region} ${student.profile.languages.join(' ')} ${student.profile.education.curriculum} ${student.profile.education.stream} ${student.journey.goal} ${student.community.wantsToDiscuss}`.toLowerCase();
    return (!query || haystack.includes(query)) && (filters.country === 'All' || student.profile.location.country === filters.country) && (filters.stage === 'All' || student.profile.education.stage === filters.stage);
  });
  return `<div class="view-enter"><div class="community-tabs" aria-label="Community sections"><button data-action="community-mode" data-value="discussions">Discussions</button><button class="active" data-action="community-mode" data-value="students">1,000 demo students</button></div><header class="section-header"><div><p class="eyebrow">CONTEXT LIBRARY</p><h2 class="section-heading">Explore backgrounds without turning them into stereotypes.</h2><p class="section-copy">Every profile is fictional. Use this directory to test inclusive product experiences—not to infer what real groups think or predict outcomes.</p></div></header><form class="student-directory-filters" id="studentDirectoryFilters"><label class="search-wide">Search contexts<input id="studentDirectorySearch" value="${escapeHtml(filters.search)}" placeholder="State, country, board, language, goal…"></label><label>Country<select name="country"><option>All</option>${countries.map((item) => `<option ${filters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label>Stage<select name="stage"><option>All</option>${stages.map((item) => `<option value="${item}" ${filters.stage === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label></form><div class="results-line"><strong>${filtered.length} fictional profiles found</strong><span>900 India · 100 international · 21 countries</span></div><section class="student-directory-grid">${filtered.slice(0, state.studentDirectoryLimit).map((student) => `<article><div><span>${escapeHtml(student.alias.slice(-2))}</span><span class="demo-label">DEMO</span></div><h3>${escapeHtml(student.alias)}</h3><p>${escapeHtml(student.profile.location.region)} · ${escapeHtml(student.profile.location.country)}</p><strong>${escapeHtml(titleCase(student.profile.education.stage))} · ${escapeHtml(student.profile.education.curriculum)}</strong><small>${escapeHtml(student.journey.goal)}</small><button class="button-secondary" data-action="student-detail" data-id="${student.id}">View context →</button></article>`).join('')}</section>${filtered.length > state.studentDirectoryLimit ? `<button class="button-secondary load-more" data-action="student-more">Show more (${filtered.length - state.studentDirectoryLimit} remaining)</button>` : ''}</div>`;
}

function renderDiscussions() {
  if (state.communityMode === 'students') return renderStudentDirectory();
  if (state.newDiscussionOpen) return renderNewDiscussion();
  const detail = allDiscussionTopics().find((topic) => topic.id === state.detailDiscussion);
  if (detail) return renderDiscussionDetail(detail);
  const filtered = filteredDiscussions();
  const categories = discussionOptions('category');
  const stages = discussionOptions('journeyStage');
  const countries = discussionOptions('country');
  const spotlightStudents = demoStudents.filter((_, index) => index % 173 === 0).slice(0, 6);
  return `<div class="view-enter discussions-view"><div class="community-tabs" aria-label="Community sections"><button class="active" data-action="community-mode" data-value="discussions">Discussions</button><button data-action="community-mode" data-value="students">1,000 demo students</button></div><header class="section-header"><div><p class="eyebrow">GLOBAL DECISION COMMONS</p><h2 class="section-heading">Ask widely. Verify carefully. Decide humanly.</h2><p class="section-copy">Explore truthful decision frameworks through a safe synthetic forum. Demo voices show varied contexts; they are not real users or evidence of population trends.</p></div><button class="button-primary" data-action="discussion-new">${isGuest() ? 'Create a profile to post' : 'Start a discussion'}</button></header><section class="discussion-metrics"><article><strong>${discussionCorpusMetadata.topicCount}</strong><span>demo discussions</span></article><article><strong>${discussionCorpusMetadata.responseCount}</strong><span>substantive responses</span></article><article><strong>${demoStudentMetadata.profileCount}</strong><span>fictional student contexts</span></article><article><strong>36</strong><span>Indian states & UTs covered</span></article><article><strong>${discussionCorpusMetadata.coverage.categories.length}</strong><span>decision categories</span></article></section><form class="discussion-filters" id="discussionFilters"><label class="search-wide">Search discussions<input id="discussionSearch" value="${escapeHtml(state.discussionFilters.search)}" placeholder="Board, stream, cost, AI, accessibility…"></label><label>Category<select name="category"><option>All</option>${categories.map((item) => `<option value="${item}" ${state.discussionFilters.category === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Journey stage<select name="stage"><option>All</option>${stages.map((item) => `<option value="${item}" ${state.discussionFilters.stage === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Perspective country<select name="country"><option>All</option>${countries.map((item) => `<option ${state.discussionFilters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></form><div class="results-line"><strong>${filtered.length} discussions found</strong><span>Public DMs are intentionally unavailable for student safety.</span></div><section class="discussion-grid">${filtered.slice(0, state.discussionLimit).map(renderDiscussionCard).join('')}</section>${filtered.length > state.discussionLimit ? `<button class="button-secondary load-more" data-action="discussion-more">Show more (${filtered.length - state.discussionLimit} remaining)</button>` : ''}<section class="community-constellation panel"><div><p class="eyebrow">DEMO COMMUNITY CONTEXTS</p><h2>1,000 backgrounds—not 1,000 stereotypes.</h2><p>Profiles span every Indian state and union territory plus 20 other countries. They demonstrate filtering and inclusive design only; never use this synthetic corpus as population evidence.</p></div><div class="demo-people">${spotlightStudents.map((student) => `<article><span>${escapeHtml(student.alias.slice(0, 2).toUpperCase())}</span><strong>${escapeHtml(student.alias)}</strong><small>${escapeHtml(student.profile.location.region)} · ${escapeHtml(titleCase(student.profile.education.stage))}</small><em>${escapeHtml(student.journey.goal)}</em></article>`).join('')}</div></section></div>`;
}

const aiCapabilities = [
  ['AI literacy', 'Know what a tool can and cannot establish'], ['Verification', 'Check consequential claims against current authority'], ['Privacy & consent', 'Protect sensitive data and other people'], ['Bias & fairness', 'Ask whose context and language are missing'], ['Deep-skill continuity', 'Keep unaided human practice alive'], ['Ethics & provenance', 'Show tool use, sources, checks, and ownership'],
];

function renderAIJourney() {
  const completed = journeyStops().filter((stop) => state.aiJourney.stageAnswers[stop.id]?.trim()).length;
  const nextStop = journeyStops().find((stop) => !state.aiJourney.stageAnswers[stop.id]?.trim()) || journeyStops()[7];
  const checks = state.aiJourney.claimChecks;
  return `<div class="view-enter ai-journey-view"><section class="ai-hero"><div><p class="eyebrow">YOUR JUDGMENT LAYER</p><h2>Use AI. Keep your judgment.</h2><p>AI can surface options, explain, draft, and challenge. You remain responsible for checking evidence and making the decision.</p><button class="button-primary" data-action="ai-stage" data-id="${nextStop.id}">Next safe action: answer ${nextStop.title} →</button></div><div class="ai-contract"><strong>${completed}/9</strong><span>year stages have AI evidence</span><small>No opaque “AI readiness” score</small></div></section>
  <section class="ai-stage-map">${journeyStops().map((stop) => `<button data-action="ai-stage" data-id="${stop.id}" class="ai-stage-card ${state.aiJourney.stageAnswers[stop.id]?.trim() ? 'complete' : ''}"><span>${stop.step}</span><strong>${stop.title}</strong><p>${aiStagePrompts[stop.id]}</p><em>${state.aiJourney.stageAnswers[stop.id]?.trim() ? 'Evidence added' : 'Question open'} →</em></button>`).join('')}</section>
  <div class="ai-workbench"><section class="panel"><div class="panel-head"><div><p class="eyebrow">CAPABILITY HABITS</p><h2>Observable practice, not a prediction</h2></div></div><div class="capability-list">${aiCapabilities.map(([name, copy], index) => { const level = completed >= 6 || checks.length >= index + 1 ? 'Demonstrated' : completed >= 2 ? 'Practising' : 'Starting'; return `<article><span>${index + 1}</span><div><strong>${name}</strong><p>${copy}</p></div><em>${level}</em></article>`; }).join('')}</div></section>
  <section class="panel verify-lab"><p class="eyebrow">VERIFY BEFORE YOU DECIDE</p><h2>Log a consequential AI claim.</h2><form id="claimCheckForm"><label>Claim type<select name="type"><option>Admissions rule</option><option>Eligibility</option><option>Salary / market claim</option><option>Course comparison</option><option>Scholarship / deadline</option></select></label><label>What did AI claim?<textarea name="claim" required maxlength="500"></textarea></label><label>Official or first-person source checked<input name="source" required maxlength="300" placeholder="URL, document, teacher, practitioner…"></label><label>What changed after checking?<textarea name="changed" required maxlength="500"></textarea></label><button class="button-primary">Add verification record</button></form>${checks.length ? `<div class="claim-list">${checks.slice(0, 4).map((item) => `<article><span>${escapeHtml(item.type)}</span><strong>${escapeHtml(item.claim)}</strong><p>${escapeHtml(item.changed)}</p><small>Checked: ${escapeHtml(item.source)}</small></article>`).join('')}</div>` : '<p class="disclosure">No checks logged yet. Start with the next high-stakes claim you might act on.</p>'}</section></div>
  <section class="human-accountability panel"><div><p class="eyebrow">WORK-CHANGE EXPLORER</p><h2>AI changes tasks before it changes whole careers.</h2></div><div class="task-boundaries"><article><span>AI ASSISTS</span><p>Search, first drafts, practice, translation, pattern surfacing</p></article><article><span>HUMAN LEADS</span><p>Purpose, context, empathy, negotiation, original inquiry</p></article><article><span>HUMAN ACCOUNTABLE</span><p>Safety, consent, fairness, sign-off, consequential decisions</p></article><article><span>LIKELY CHANGING</span><p>Entry-level task mixes, evidence of skill, tool policies, workflows</p></article></div><p class="freshness-note">Treat labour-market claims as dated and uncertain. Recheck role maps against recent job descriptions and practitioners every 90–180 days.</p></section>
  <section class="family-ai panel"><div><p class="eyebrow">FAMILY AI AGREEMENT</p><h2>Guardrails without surveillance.</h2><p>Agree on allowed use, privacy, cost, disclosure, deep practice, and when a teacher or mentor must be involved.</p></div><label>Our next agreement or topic to discuss<textarea id="familyAiAgreement">${escapeHtml(state.aiJourney.familyAgreement)}</textarea></label></section></div>`;
}

function render() {
  updateShell();
  renderJourneyRail();
  $('#entryGate').classList.toggle('complete', Boolean(state.onboarded));
  const host = $('#viewHost');
  const detailCareer = state.detailCareer ? careers.find((career) => career.id === state.detailCareer) : null;
  if (detailCareer && state.view === 'explore') host.innerHTML = renderCareerDetail(detailCareer);
  else {
    state.detailCareer = '';
    host.innerHTML = ({
      overview: renderOverview,
      compass: renderCompass,
      explore: renderExplore,
      experiences: state.shareExperienceOpen ? renderShareExperience : renderExperiences,
      discussions: renderDiscussions,
      'ai-journey': renderAIJourney,
      compare: renderCompare,
      roadmap: renderRoadmap,
      family: renderFamily,
      evidence: renderEvidence,
    })[state.view]();
  }
  if (state.view === 'discussions') {
    const newDiscussionButton = $('[data-action="discussion-new"]', host);
    if (newDiscussionButton) newDiscussionButton.textContent = 'Start a discussion';
  }
}

function toggleSignal(group, value) {
  const items = state.signals[group];
  const index = items.indexOf(value);
  if (index >= 0) items.splice(index, 1);
  else if (items.length < 4) items.push(value);
  else return showToast('Choose up to four signals in each section.');
  saveState();
  render();
}

function toggleCompare(id) {
  if (state.compare.includes(id)) state.compare = state.compare.filter((item) => item !== id);
  else if (state.compare.length < 3) state.compare.push(id);
  else return showToast('Compare up to three paths at a time.');
  saveState();
  render();
}

function addExperiment(id) {
  const career = careers.find((item) => item.id === id);
  if (!career) return;
  const duplicate = state.evidence.some((item) => item.title === career.experiment);
  if (!duplicate) state.evidence.unshift({ id: `ev-${Date.now()}`, title: career.experiment, type: 'Experiment' });
  saveState();
  showToast(duplicate ? 'That experiment is already in your wallet.' : 'Experiment added to your evidence wallet.');
}

$('.primary-nav').addEventListener('click', (event) => {
  const button = event.target.closest('[data-view]');
  if (!button) return;
  document.body.classList.remove('nav-open');
  setView(button.dataset.view);
});

$('#viewHost').addEventListener('click', (event) => {
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const { action, target, group, value, id } = control.dataset;
  const profileOnlyActions = new Set(['signal', 'stream', 'milestone', 'task-toggle', 'evidence-remove', 'add-experiment', 'share-open', 'work-reality-reset']);
  if (profileOnlyActions.has(action) && !requireProfile(action === 'discussion-new' ? 'Create a profile to post in Discussions.' : action === 'share-open' ? 'Create a profile to share an experience.' : undefined)) return;
  if (action === 'go') setView(target);
  if (action === 'research-open') openResearchShelf();
  if (action === 'signal') toggleSignal(group, value);
  if (action === 'work-reality-reset') { state.workReality = structuredClone(defaultState.workReality); saveState(); render(); showToast('Work Reality Scan cleared.'); }
  if (action === 'stream') { state.streamChoice = state.streamChoice === value ? '' : value; saveState(); render(); }
  if (action === 'filter') { state.careerFilter = value; saveState(); render(); }
  if (action === 'save-career') {
    state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id];
    saveState(); render();
  }
  if (action === 'compare-career') toggleCompare(id);
  if (action === 'career-detail') { state.detailCareer = id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'experience-detail') { state.detailExperience = id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'experience-close') { state.detailExperience = ''; render(); }
  if (action === 'experience-more') { state.experienceLimit += 12; saveState(); render(); }
  if (action === 'share-open') { state.shareExperienceOpen = true; render(); }
  if (action === 'share-close') { state.shareExperienceOpen = false; render(); }
  if (action === 'ai-stage') renderJourneyInspector(id);
  if (action === 'discussion-detail') { state.detailDiscussion = id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'discussion-close') { state.detailDiscussion = ''; render(); }
  if (action === 'discussion-more') { state.discussionLimit += 12; saveState(); render(); }
  if (action === 'discussion-new') { state.newDiscussionOpen = true; render(); }
  if (action === 'discussion-new-close') { state.newDiscussionOpen = false; render(); }
  if (action === 'discussion-save') { state.savedDiscussions = state.savedDiscussions.includes(id) ? state.savedDiscussions.filter((item) => item !== id) : [...state.savedDiscussions, id]; saveState(); render(); }
  if (action === 'community-mode') { state.communityMode = value; state.detailStudent = ''; saveState(); render(); }
  if (action === 'student-detail') { state.detailStudent = id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'student-detail-close') { state.detailStudent = ''; render(); }
  if (action === 'student-more') { state.studentDirectoryLimit += 24; saveState(); render(); }
  if (action === 'student-to-discussions') { state.communityMode = 'discussions'; state.discussionFilters.search = ''; state.discussionFilters.stage = 'All'; state.detailStudent = ''; saveState(); render(); }
  if (action === 'related-discussions') { state.discussionFilters.stage = discussionStageMap[id] || 'All'; closeJourneyInspector(); setView('discussions'); }
  if (action === 'milestone') {
    state.roadmapDone = state.roadmapDone.includes(id) ? state.roadmapDone.filter((item) => item !== id) : [...state.roadmapDone, id];
    saveState(); render();
  }
  if (action === 'roadmap-open') {
    const targets = { profile: 'compass', stream: 'compass', experiment: 'evidence', syllabus: 'roadmap', applications: 'roadmap' };
    if (targets[id] !== 'roadmap') setView(targets[id]); else showToast(id === 'syllabus' ? 'Syllabus rhythm is in your weekly plan.' : 'Application calendar is ready for your confirmed goal.');
  }
  if (action === 'task-toggle') {
    const task = state.tasks.find((item) => item.id === id);
    if (task) task.done = !task.done;
    saveState(); render();
  }
  if (action === 'family-lens') { state.familyLens = value; saveState(); render(); }
  if (action === 'evidence-remove') { state.evidence = state.evidence.filter((item) => item.id !== id); saveState(); render(); }
  if (action === 'add-experiment') addExperiment(id);
});

$('#viewHost').addEventListener('input', (event) => {
  if (event.target.matches('[data-work-reality]')) {
    if (!requireProfile('Create a profile to save a personal Work Reality Scan.')) return;
    const id = event.target.dataset.workReality;
    state.workReality.answers[id] = Number(event.target.value);
    state.workReality.updatedAt = new Date().toISOString();
    const readout = $(`#readout-${id}`);
    if (readout) readout.textContent = `${event.target.value}/10`;
    event.target.closest('.reality-question')?.classList.add('answered');
    saveState();
  }
  if (event.target.id === 'careerSearch') {
    state.careerSearch = event.target.value;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    const search = $('#careerSearch');
    search?.focus();
    search?.setSelectionRange(cursor, cursor);
  }
  if (event.target.id === 'familyNote') {
    if (!requireProfile()) return;
    state.familyNote = event.target.value;
    saveState();
  }
  if (event.target.id === 'experienceSearch') {
    state.experienceFilters.search = event.target.value;
    state.experienceLimit = 12;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    $('#experienceSearch')?.focus();
    $('#experienceSearch')?.setSelectionRange(cursor, cursor);
  }
  if (event.target.id === 'familyAiAgreement') {
    if (!requireProfile()) return;
    state.aiJourney.familyAgreement = event.target.value;
    saveState();
  }
  if (event.target.id === 'discussionSearch') {
    state.discussionFilters.search = event.target.value;
    state.discussionLimit = 12;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    $('#discussionSearch')?.focus();
    $('#discussionSearch')?.setSelectionRange(cursor, cursor);
  }
  if (event.target.id === 'studentDirectorySearch') {
    state.studentDirectoryFilters.search = event.target.value;
    state.studentDirectoryLimit = 24;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    $('#studentDirectorySearch')?.focus();
    $('#studentDirectorySearch')?.setSelectionRange(cursor, cursor);
  }
});

$('#viewHost').addEventListener('change', (event) => {
  if (event.target.matches('[data-work-reality]')) { render(); return; }
  if (event.target.closest('#experienceFilters') && event.target.name) {
    state.experienceFilters[event.target.name] = event.target.value;
    state.experienceLimit = 12;
    saveState(); render();
  }
  if (event.target.closest('#discussionFilters') && event.target.name) {
    state.discussionFilters[event.target.name] = event.target.value;
    state.discussionLimit = 12;
    saveState(); render();
  }
  if (event.target.closest('#studentDirectoryFilters') && event.target.name) {
    state.studentDirectoryFilters[event.target.name] = event.target.value;
    state.studentDirectoryLimit = 24;
    saveState(); render();
  }
});

$('#viewHost').addEventListener('submit', (event) => {
  event.preventDefault();
  const profileOnlyForms = new Set(['taskForm', 'evidenceForm', 'shareExperienceForm', 'claimCheckForm']);
  if (profileOnlyForms.has(event.target.id) && !requireProfile(event.target.id.includes('Discussion') || event.target.id === 'discussionReplyForm' ? 'Create a profile to contribute to Discussions.' : 'Create a profile to save personal work.')) return;
  if (event.target.id === 'taskForm') {
    const input = $('#taskInput');
    const text = input.value.trim();
    if (!text) return;
    state.tasks.push({ id: `task-${Date.now()}`, text, done: false });
    saveState(); render();
  }
  if (event.target.id === 'evidenceForm') {
    const title = $('#evidenceTitle').value.trim();
    const type = $('#evidenceType').value;
    if (!title) return;
    state.evidence.unshift({ id: `ev-${Date.now()}`, title, type });
    saveState(); render();
  }
  if (event.target.id === 'shareExperienceForm') {
    const data = new FormData(event.target);
    state.sharedExperiences.unshift({ id: `shared-${Date.now()}`, title: data.get('title'), pseudonym: data.get('name'), country: data.get('country'), stage: data.get('stage'), decision: data.get('decision'), outcome: data.get('outcome'), ai: data.get('ai'), createdAt: new Date().toISOString() });
    state.shareExperienceOpen = false;
    saveState(); render(); showToast('Private experience saved on this device.');
  }
  if (event.target.id === 'claimCheckForm') {
    const data = new FormData(event.target);
    state.aiJourney.claimChecks.unshift({ id: `claim-${Date.now()}`, type: data.get('type'), claim: data.get('claim'), source: data.get('source'), changed: data.get('changed'), checkedAt: new Date().toISOString() });
    saveState(); render(); showToast('Verification record added.');
  }
  if (event.target.id === 'newDiscussionForm') {
    const data = new FormData(event.target);
    const actor = activeProfile();
    state.userDiscussions.unshift({ id: `local-disc-${Date.now()}`, demo: false, title: data.get('title'), body: data.get('body'), category: data.get('category'), journeyStage: data.get('stage'), perspectiveContext: { label: isGuest() ? 'guest explorer' : `${state.session.activeRole} profile`, country: state.profile.location ? 'India' : 'Unspecified', region: state.profile.location || 'Broad location' }, author: { displayName: isGuest() ? 'Guest explorer' : actor.name || 'Local profile', role: isGuest() ? 'guest' : state.session.activeRole, country: state.profile.location ? 'India' : 'Unspecified', region: state.profile.location || 'Broad location' }, tags: ['local'], createdAt: new Date().toISOString(), metrics: { responseCount: 0, helpfulVotes: 0 }, responses: [] });
    state.newDiscussionOpen = false; saveState(); render(); showToast('Discussion saved locally.');
  }
  if (event.target.id === 'discussionReplyForm') {
    const data = new FormData(event.target);
    const topicId = event.target.dataset.topic;
    const actor = activeProfile();
    state.discussionReplies[topicId] ||= [];
    state.discussionReplies[topicId].push({ id: `local-reply-${Date.now()}`, topicId, parentResponseId: null, author: { displayName: isGuest() ? 'Guest explorer' : actor.name || 'Local profile', role: isGuest() ? 'guest' : state.session.activeRole, country: state.profile.location ? 'India' : 'Unspecified', region: state.profile.location || 'Broad location' }, body: data.get('reply'), createdAt: new Date().toISOString(), helpfulVotes: 0, demo: false });
    saveState(); render(); showToast('Reply saved locally.');
  }
});

$$('.theme-choice').forEach((button) => button.addEventListener('click', () => {
  state.theme = button.dataset.themeChoice;
  saveState();
  render();
  showToast(`${button.title} selected.`);
}));

$('#audienceSwitch').addEventListener('click', () => {
  if (!isGuest() && state.profiles.parent.name) {
    state.session.activeRole = state.session.activeRole === 'student' ? 'parent' : 'student';
    state.audience = state.session.activeRole;
  } else state.audience = state.audience === 'student' ? 'parent' : 'student';
  state.familyLens = state.audience;
  saveState();
  render();
});

function closeNavigation() { document.body.classList.remove('nav-open'); }
$('#menuButton').addEventListener('click', () => document.body.classList.add('nav-open'));
$('#sidebarClose').addEventListener('click', closeNavigation);
$('#sidebarScrim').addEventListener('click', closeNavigation);

function closeJourneyInspector() {
  document.body.classList.remove('journey-open');
  $('#journeyInspector').setAttribute('aria-hidden', 'true');
}

$('#journeyRail').addEventListener('click', (event) => {
  const stop = event.target.closest('[data-journey-stage]');
  if (stop) renderJourneyInspector(stop.dataset.journeyStage);
});
$('#journeyInspectorClose').addEventListener('click', closeJourneyInspector);
$('#journeyScrim').addEventListener('click', closeJourneyInspector);

$('#researchButton').addEventListener('click', openResearchShelf);
$('#researchClose').addEventListener('click', closeResearchShelf);
$('#researchScrim').addEventListener('click', closeResearchShelf);
$('#researchPanelBody').addEventListener('click', (event) => {
  const category = event.target.closest('[data-research-category]');
  if (category) { state.research.category = category.dataset.researchCategory; saveState(); renderResearchShelf(); return; }
  const save = event.target.closest('[data-research-save]');
  if (save) {
    const id = save.dataset.researchSave;
    state.research.saved = state.research.saved.includes(id) ? state.research.saved.filter((item) => item !== id) : [...state.research.saved, id];
    saveState(); renderResearchShelf(); showToast(state.research.saved.includes(id) ? 'Saved to research shortlist.' : 'Removed from research shortlist.');
  }
});
$('#researchPanelBody').addEventListener('input', (event) => {
  if (event.target.id !== 'researchSearch') return;
  state.research.search = event.target.value;
  saveState();
  const cursor = event.target.selectionStart;
  renderResearchShelf();
  $('#researchSearch')?.focus();
  $('#researchSearch')?.setSelectionRange(cursor, cursor);
});

$('#journeyInspectorBody').addEventListener('click', (event) => {
  const careerLink = event.target.closest('[data-action="career-detail"]');
  if (careerLink) {
    state.detailCareer = careerLink.dataset.id;
    closeJourneyInspector();
    setView('explore');
    return;
  }
  const related = event.target.closest('[data-action="related-discussions"]');
  if (related) {
    state.discussionFilters.stage = discussionStageMap[related.dataset.id] || 'All';
    closeJourneyInspector();
    setView('discussions');
    return;
  }
  if (isGuest()) return requireProfile();
  const choice = event.target.closest('[data-journey-choice]');
  if (!choice) return;
  const { journeyChoice: group, value, multi } = choice.dataset;
  if (group.startsWith('nono-')) {
    const stageId = group.slice(5);
    const list = state.journey.noNos[stageId] || [];
    state.journey.noNos[stageId] = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }
  if (group.startsWith('milestone-')) {
    const stageId = group.slice(10);
    const list = state.journey.stageMilestones[stageId] || [];
    state.journey.stageMilestones[stageId] = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }
  if (group === 'subjects') {
    const list = state.journey.subjects;
    state.journey.subjects = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }
  if (group === 'stream') state.streamChoice = value === 'Undecided' ? '' : value.toLowerCase();
  if (group === 'grade11') {
    const list = state.journey.grade11Milestones;
    state.journey.grade11Milestones = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }
  if (group === 'experience') {
    const list = state.journey.experiences;
    state.journey.experiences = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }
  saveState();
  renderJourneyRail();
  renderJourneyInspector($('#journeyForm').dataset.stage);
});

$('#journeyInspectorBody').addEventListener('submit', (event) => {
  if (event.target.id !== 'journeyForm') return;
  event.preventDefault();
  if (!requireProfile()) return;
  const data = new FormData(event.target);
  const stage = event.target.dataset.stage;
  state.aiJourney.stageAnswers[stage] = data.get('aiReflection')?.trim() || '';
  if (yearMilestoneConfig[stage]) {
    state.journey.stageNotes[stage] = data.get('stageNote')?.trim() || '';
    if (data.has('rank')) state.journey.ranks[stage] = data.get('rank') || '';
    if (data.has('entrance')) state.journey.entrance = data.get('entrance') || 'Undecided';
  }
  if (stage === 'context') state.profile = { ...state.profile, location: data.get('location')?.trim() || '', board: data.get('board'), school: data.get('school'), schoolName: data.get('schoolName')?.trim() || '', medium: data.get('medium'), mobility: data.get('mobility') };
  if (stage === 'grade11') state.journey.grade11Score = data.get('grade11Score') || '';
  if (stage === 'grade12') { state.journey.grade12Target = data.get('grade12Target') || ''; state.journey.entrance = data.get('entrance'); }
  if (stage === 'college') { state.journey.collegeScope = data.get('collegeScope'); state.journey.collegeShortlist = data.get('collegeShortlist')?.trim() || ''; state.journey.burningDesire = data.get('burningDesire')?.trim() || ''; }
  if (stage === 'employment') { state.journey.roleTarget = data.get('roleTarget')?.trim() || ''; state.journey.workSetting = data.get('workSetting'); state.journey.employmentReadiness = data.get('employmentReadiness'); }
  saveState();
  updateShell();
  renderJourneyRail();
  closeJourneyInspector();
  showToast('Journey stop saved.');
});

function closeSettings() {
  document.body.classList.remove('settings-open');
  $('#settingsPanel').setAttribute('aria-hidden', 'true');
}

$('#settingsButton').addEventListener('click', () => {
  closeResearchShelf();
  renderBackgroundOptions();
  $('#settingsPanel').setAttribute('aria-hidden', 'false');
  document.body.classList.add('settings-open');
});
$('#settingsClose').addEventListener('click', closeSettings);
$('#settingsScrim').addEventListener('click', closeSettings);
$('#backgroundOptions').addEventListener('click', (event) => {
  const option = event.target.closest('[data-background]');
  if (!option) return;
  state.background = option.dataset.background;
  saveState();
  updateShell();
  renderBackgroundOptions();
  showToast(`${campusBackgrounds.find((item) => item.id === state.background)?.name} background selected.`);
});

let entryRole = 'student';

function setEntryRole(role) {
  entryRole = role;
  $$('[data-entry-role]').forEach((button) => {
    const active = button.dataset.entryRole === role;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active);
  });
  $$('[data-role-fields]').forEach((fields) => { fields.hidden = fields.dataset.roleFields !== role; });
  $('#profileName').required = role === 'student';
  $('#parentName').required = role === 'parent';
  $('#entryRoleLabel').textContent = role;
  (role === 'student' ? $('#profileName') : $('#parentName')).focus();
}

$('.entry-role-tabs').addEventListener('click', (event) => {
  const button = event.target.closest('[data-entry-role]');
  if (button) setEntryRole(button.dataset.entryRole);
});

$('#enterDemo').addEventListener('click', () => {
  state.onboarded = true;
  state.session = { mode: 'profile', activeRole: 'student' };
  state.profile = { ...state.profile, location: 'Chennai', school: 'Private school' };
  state.profiles.student = { ...state.profile };
  state.saved = ['product-designer'];
  state.compare = ['product-designer', 'data-scientist'];
  state.evidence = [{ id: 'ev-demo', title: 'Inter-school science presentation', type: 'Project' }];
  state.workReality = { answers: { computerTolerance: 8, scheduleStructure: 5, uncertaintyComfort: 6, familyPriority: 8, meaningOverMoney: 8, promotionDrive: 4, travelEnergy: 4, peopleIntensity: 6, physicalActivity: 4, competitionComfort: 5, deepFocus: 8, serviceDrive: 8, clinicalTolerance: 3, legacyImportance: 5 }, confirmed: true, updatedAt: new Date().toISOString() };
  state.journey = {
    ...state.journey,
    subjects: ['Mathematics', 'Computer Science', 'Economics'], entrance: 'CUET',
    stageMilestones: {
      ...state.journey.stageMilestones,
      grade10: yearMilestoneConfig.grade10.milestones.slice(0, 5),
      grade11: yearMilestoneConfig.grade11.milestones.slice(0, 5),
      grade12: yearMilestoneConfig.grade12.milestones.slice(0, 4),
      college1: yearMilestoneConfig.college1.milestones.slice(0, 3),
    },
    noNos: { ...state.journey.noNos, grade10: ['High-pressure sales', 'Unpredictable income'], grade11: ['Heavy rote learning'] },
    stageNotes: { ...state.journey.stageNotes, grade10: 'Visual problem-solving and explaining complex systems still feel worth testing.', grade11: 'Design, mathematics, and computing remain interesting even when the work becomes difficult.', grade12: 'A design-and-technology course family survives the first course and cost checks.' },
    ranks: { ...state.journey.ranks, grade11: 'Top 25%' },
  };
  saveState();
  render();
  showToast('Demo path opened. Reset anytime to see the zipper again.');
});

$('#enterGuest').addEventListener('click', () => {
  state.onboarded = true;
  state.session = { mode: 'guest', activeRole: 'student' };
  state.view = 'explore';
  saveState(); render();
  showToast('Guest mode: explore everything; personal publishing and journey edits are locked.');
});

$('#profileForm').addEventListener('change', (event) => {
  if (event.target.name !== 'guide') return;
  $$('.entry-guide').forEach((option) => option.classList.toggle('selected', option.contains(event.target)));
});

$('#profileForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = (entryRole === 'student' ? $('#profileName') : $('#parentName')).value.trim();
  if (!name) return;
  state.session = { mode: 'profile', activeRole: entryRole };
  if (entryRole === 'student') {
    state.profile = { ...structuredClone(defaultState.profile), name, grade: $('#profileGrade').value, board: $('#profileBoard').value, location: $('#profileLocation').value.trim(), school: 'Private school' };
    state.profiles.student = { ...state.profile };
    state.audience = 'student';
  } else {
    state.profiles.parent = { name, relationship: $('#parentRelationship').value, language: $('#parentLanguage').value, linkedStudentName: $('#linkedStudentName').value.trim() };
    if ($('#linkedStudentName').value.trim()) state.profile.name = $('#linkedStudentName').value.trim();
    state.audience = 'parent';
    state.familyLens = 'parent';
  }
  state.mentor = $('input[name="guide"]:checked', event.currentTarget)?.value || 'miso';
  state.onboarded = true;
  saveState();
  updateMentor();
  render();
  showToast(`Welcome, ${name}. Your path starts here.`);
});

$('#resetData').addEventListener('click', () => {
  if (!confirm('Reset all locally saved Zysham demo choices?')) return;
  state = structuredClone(defaultState);
  $('#entryGate').classList.remove('complete');
  $('#profileForm').reset();
  setEntryRole('student');
  saveState();
  setView('overview');
  showToast('Demo choices reset.');
});

const mentorCopy = {
  miso: {
    name: 'Miso', initial: 'M', role: 'RADICALLY CANDID',
    default: 'A match is a clue, not a command. The useful question is: what can you test next?',
    experiment: 'Pick the path you keep romanticising. Spend 30 minutes doing its least glamorous task. Still curious? That is useful evidence.',
  },
  ollie: {
    name: 'Ollie', initial: 'O', role: 'CALMLY PRACTICAL',
    default: 'You do not need your whole future today. Let’s make one small test and learn from it together.',
    experiment: 'Choose one saved career, talk to someone who knows the work, and write down one surprise. Small proof beats big pressure.',
  },
};

function updateMentor(messageType = 'default') {
  const mentor = mentorCopy[state.mentor];
  $('#mentorName').textContent = mentor.name;
  $('#mentorTriggerName').textContent = mentor.name;
  $('#mentorMessage').textContent = mentor[messageType];
  $$('.mentor-animal').forEach((face) => {
    face.classList.toggle('cat', state.mentor === 'miso');
    face.classList.toggle('dog', state.mentor === 'ollie');
  });
  $('.mentor-panel-head small').textContent = mentor.role;
  $('[data-mentor-action="switch"]').textContent = `Switch to ${state.mentor === 'miso' ? 'Ollie' : 'Miso'}`;
}

$('#mentorTrigger').addEventListener('click', () => {
  $('#mentorDock').classList.add('open');
  $('#mentorTrigger').setAttribute('aria-expanded', 'true');
  updateMentor();
});
$('#mentorClose').addEventListener('click', () => {
  $('#mentorDock').classList.remove('open');
  $('#mentorTrigger').setAttribute('aria-expanded', 'false');
});
$('.mentor-actions').addEventListener('click', (event) => {
  const button = event.target.closest('[data-mentor-action]');
  if (!button) return;
  if (button.dataset.mentorAction === 'switch') {
    state.mentor = state.mentor === 'miso' ? 'ollie' : 'miso';
    saveState();
    updateMentor();
  } else updateMentor('experiment');
});

window.addEventListener('hashchange', () => {
  const view = location.hash.slice(1);
  if (viewMeta[view]) setView(view, { updateHash: false });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (document.body.classList.contains('research-open')) closeResearchShelf();
  else if (document.body.classList.contains('journey-open')) closeJourneyInspector();
  else if (document.body.classList.contains('settings-open')) closeSettings();
  else if (document.body.classList.contains('nav-open')) closeNavigation();
});

const initialView = location.hash.slice(1);
if (viewMeta[initialView]) state.view = initialView;
updateMentor();
render();
