import { experienceStories, experienceCorpusMetadata } from './data/experiences.js';
import { discussionTopics, discussionCorpusMetadata } from './data/discussions.js';
import { demoStudents as generatedProfiles, demoStudentMetadata as generatedNameMetadata } from './data/demo-students.js';
import { callingQuestions, callingMetadata } from './data/calling-options.js';
import { teamBlogEntries, newsletterIssues, infographicTopics, editorialMetadata } from './data/editorial.js';
import { studyTracks, studyGuideMeta } from './data/study-guide.js';
import { certificationCategories, certificationCourses } from './data/certification-courses.js';
import { traditionalCategories, traditionalCourses } from './data/traditional-courses.js';
import { schoolExamResearch, schoolExamResearchMetadata } from './data/research-schools-exams.js';
import { collegeCourseResearch, collegeCourseResearchMetadata } from './data/research-colleges-courses.js';
import { jobLocationResearch, jobLocationResearchMetadata } from './data/research-jobs-locations.js';
import { dreamJobEmployers, dreamJobVocations, dreamJobArtsFramework, dreamJobStageBlueprint, dreamJobMetadata } from './data/dream-job-paths.js';
import { karmicJobs, karmicFramework, karmicJobsMetadata } from './data/karmic-jobs.js';
import { entranceExamGuide, entranceExamCategories, entranceExams, entranceExamSources } from './data/entrance-exams.js';
import { careerAssessments, careerAssessmentSources, careerFieldProfiles } from './data/career-assessments.js';

const demoStudentMetadata = generatedNameMetadata;

const STORAGE_KEY = 'zysham2026-state-v2';

const vedicCareerThemes = {
  leadership: { title: 'Leadership & public responsibility', summary: 'Roles that reward initiative, visibility, judgement, and responsibility for outcomes.', roles: ['Public administration', 'Operations leadership', 'Entrepreneurship', 'Defence services'], experiment: 'Lead a four-week school or community project and ask the team for structured feedback.' },
  technology: { title: 'Technology & systems', summary: 'Work involving logic, technical systems, invention, and solving complex operational problems.', roles: ['Software engineering', 'Data analytics', 'Electronics', 'Product engineering'], experiment: 'Build a small technical project and document the problem, tests, and improvements.' },
  research: { title: 'Research & investigation', summary: 'Paths centred on depth, evidence, diagnosis, and finding what is hidden or not yet understood.', roles: ['Scientific research', 'Cybersecurity', 'Policy research', 'Forensic analysis'], experiment: 'Choose one question, compare three credible sources, and publish a one-page evidence brief.' },
  communication: { title: 'Communication & knowledge', summary: 'Careers using language, explanation, teaching, media, or the translation of complex ideas.', roles: ['Teaching', 'Writing and publishing', 'Marketing', 'Journalism'], experiment: 'Teach a difficult idea in a five-minute video, then improve it from audience feedback.' },
  care: { title: 'Care & human development', summary: 'People-facing work requiring patience, trust, listening, and sustained contribution to wellbeing.', roles: ['Psychology', 'Healthcare', 'Counselling', 'Social impact'], experiment: 'Interview a practitioner about training, emotional load, ethics, and an ordinary working day.' },
  creative: { title: 'Design & creative expression', summary: 'Work combining aesthetics, imagination, craft, storytelling, and sensitivity to experience.', roles: ['Product design', 'Architecture', 'Film and media', 'Visual communication'], experiment: 'Create one portfolio piece for a real user and revise it after two critique rounds.' },
  finance: { title: 'Finance & commercial judgement', summary: 'Paths built around value, resources, negotiation, disciplined decisions, and long-term stewardship.', roles: ['Accounting', 'Banking', 'Investment research', 'Business strategy'], experiment: 'Build and review a budget or unit-economics model for a small real-world project.' },
  law: { title: 'Law, policy & diplomacy', summary: 'Work that calls for balance, argument, negotiation, ethics, and institutional understanding.', roles: ['Law', 'Public policy', 'Diplomacy', 'Compliance'], experiment: 'Analyse both sides of a live policy question and write a neutral recommendation.' },
  practical: { title: 'Practical craft & built environments', summary: 'Tangible work with tools, materials, land, infrastructure, or reliable physical processes.', roles: ['Civil engineering', 'Manufacturing', 'Agriculture', 'Construction management'], experiment: 'Shadow a practitioner or complete a hands-on build with measurable quality criteria.' },
  service: { title: 'Service & dependable operations', summary: 'Structured work where consistency, precision, process, and helping a larger system matter.', roles: ['Quality assurance', 'Healthcare operations', 'Government services', 'Supply chain'], experiment: 'Map a recurring process, measure its delays, and test one practical improvement.' },
};

const vedicRashiThemes = {
  Mesha: ['leadership','technology','practical'], Vrishabha: ['finance','creative','practical'], Mithuna: ['communication','technology','finance'], Karka: ['care','service','creative'], Simha: ['leadership','communication','creative'], Kanya: ['research','service','finance'], Tula: ['law','creative','finance'], Vrishchika: ['research','technology','care'], Dhanu: ['communication','law','research'], Makara: ['practical','service','leadership'], Kumbha: ['technology','research','service'], Meena: ['care','creative','communication'],
};

const vedicNakshatraThemes = {
  Ashwini: ['care','practical','leadership'], Bharani: ['law','creative','care'], Krittika: ['leadership','law','practical'], Rohini: ['finance','creative','practical'], Mrigashira: ['research','communication','creative'], Ardra: ['technology','research','communication'], Punarvasu: ['communication','care','practical'], Pushya: ['care','service','leadership'], Ashlesha: ['research','care','finance'], Magha: ['leadership','law','research'], 'Purva Phalguni': ['creative','leadership','care'], 'Uttara Phalguni': ['leadership','service','law'], Hasta: ['practical','finance','creative'], Chitra: ['creative','technology','practical'], Swati: ['technology','finance','communication'], Vishakha: ['leadership','law','communication'], Anuradha: ['research','service','communication'], Jyeshtha: ['leadership','research','law'], Mula: ['research','care','practical'], 'Purva Ashadha': ['creative','communication','leadership'], 'Uttara Ashadha': ['leadership','law','service'], Shravana: ['communication','service','care'], Dhanishtha: ['technology','finance','creative'], Shatabhisha: ['research','technology','care'], 'Purva Bhadrapada': ['research','law','care'], 'Uttara Bhadrapada': ['care','research','communication'], Revati: ['creative','communication','service'],
};

const vedicPlanetThemes = {
  Sun: ['leadership','service'], Moon: ['care','creative'], Mars: ['technology','practical'], Mercury: ['communication','finance'], Jupiter: ['communication','law'], Venus: ['creative','finance'], Saturn: ['service','practical'], Rahu: ['technology','research'], Ketu: ['research','care'],
};

const vedicInterestThemes = {
  'Building and technology': ['technology','practical'], 'People and wellbeing': ['care','service'], 'Business and money': ['finance','leadership'], 'Ideas and communication': ['communication','law'], 'Art and design': ['creative','communication'], 'Science and discovery': ['research','technology'], 'Public service and justice': ['law','service'],
};

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
    reality: 'Much of the job is careful data preparation and communication—not dramatic AI showcases.',
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

const rolePermissions = {
  admin: ['app:configure', 'android:release', 'content:publish', 'community:configure', 'workspace:reset'],
  student: ['journey:edit', 'evidence:edit', 'community:participate'],
  parent: ['journey:view', 'family:edit', 'community:participate'],
};

const seededAccounts = [
  { id: 'admin-default', email: 'admin@zysham.local', role: 'admin', displayName: 'Admin', teamRole: 'Platform Administrator', accessLevel: 'administrator', salt: 'zysham-admin-seed', passwordHash: '76ecb6ba491c79f326a7d032cb51dec63f6f409f37e82bfcff001fc732fcb4f7' },
  { id: 'admin-sasha', email: 'sasha@zysham.local', role: 'admin', displayName: 'Sasha', teamRole: 'Owner', accessLevel: 'owner', salt: 'zysham-sasha-seed', passwordHash: '4e6be4c3d8a8697f80114540d1886676efffd036ec87a238d7336355256c2b6a' },
  { id: 'admin-harshini', email: 'harshini@zysham.local', role: 'admin', displayName: 'Harshini', teamRole: 'Co-owner', accessLevel: 'co-owner', salt: 'zysham-harshini-seed', passwordHash: 'a1cb2e6c735eab72da1a76333a6bbe2373c607c59a34236a980a4ab5b46783ac' },
].map((account) => ({ ...account, language: 'English', timezone: 'Asia/Kolkata', visibility: 'Private', emailVerified: true, seeded: true, createdAt: '2026-08-09T00:00:00.000Z', lastLoginAt: '', profile: { role: account.role, teamRole: account.teamRole, accessLevel: account.accessLevel, status: 'active', permissions: rolePermissions[account.role] } }));

function normaliseAccounts(accounts = []) {
  const seededEmails = new Set(seededAccounts.map((account) => account.email));
  const localAccounts = accounts.filter((account) => !seededEmails.has(String(account.email || '').toLowerCase())).map((account) => {
    const role = rolePermissions[account.role] ? account.role : 'student';
    return { ...account, role, profile: { role, teamRole: account.teamRole || '', accessLevel: role === 'admin' ? 'administrator' : 'standard', status: 'active', permissions: rolePermissions[role], ...(account.profile || {}) } };
  });
  return [...seededAccounts.map((account) => structuredClone(account)), ...localAccounts];
}

const defaultState = {
  version: 6,
  onboarded: false,
  session: { mode: 'signed_out', activeRole: 'student', accountId: '' },
  accounts: normaliseAccounts(),
  workspaces: {},
  profile: { name: 'Anya', grade: '10', board: 'CBSE', location: '', school: 'Private school', schoolName: '', medium: 'English', mobility: 'Nearby / daily commute' },
  profiles: {
    student: { name: 'Anya', grade: '10', board: 'CBSE', location: '', school: 'Private school' },
    parent: { name: '', relationship: 'Parent', language: 'English', linkedStudentName: '' },
  },
  view: 'calling',
  activeJourneyStage: 'grade10',
  theme: 'violet',
  regionScope: 'All',
  sidebarExpanded: false,
  researchRailExpanded: false,
  background: 'academy-wide-courtyard',
  appearance: { mode: 'default', defaultBackgroundId: 'academy-wide-courtyard', customBackgrounds: [], slideshow: { enabled: false, interval: 20 } },
  audience: 'student',
  mentor: 'miso',
  mentorChat: { open: false, stage: 'auto', messages: [] },
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
    milestoneProgress: { grade10: {}, grade11: {}, grade12: {}, college1: {}, college2: {}, college3: {}, collegeFinal: {}, firstJob: {}, dreamJob: {} },
    noNos: { grade10: [], grade11: [], grade12: [], college1: [], college2: [], college3: [], collegeFinal: [], firstJob: [], dreamJob: [] },
    stageNotes: { grade10: '', grade11: '', grade12: '', college1: '', college2: '', college3: '', collegeFinal: '', firstJob: '', dreamJob: '' },
    ranks: { grade10: '', grade11: '', grade12: '', college1: '', college2: '', college3: '', collegeFinal: '' },
    stagePhase: { grade10: 'north-star', grade11: 'purpose', grade12: 'targets', college1: 'adapt', college2: 'interest', college3: 'target-work', collegeFinal: 'flagship', firstJob: 'learn', dreamJob: 'reality' },
  },
  careerFilter: 'All',
  careerSearch: '',
  roadmapDone: ['profile'],
  roadmapSection: 'actions',
  overviewSection: 'journey',
  tasks: [
    { id: 'task-1', text: 'Complete two Career Compass sections', done: false },
    { id: 'task-2', text: 'Discuss one career experiment at dinner', done: false },
  ],
  familyNote: '',
  familyLens: 'student',
  evidence: [],
  accomplishments: { section: 'overview', rewards: [], courses: [], exams: [], scores: [] },
  experienceFilters: { search: '', country: 'All', stage: 'All', perspective: 'All', ai: 'All' },
  experienceLimit: 12,
  sharedExperiences: [],
  aiJourney: {
    stageAnswers: { grade10: '', grade11: '', grade12: '', college1: '', college2: '', college3: '', collegeFinal: '', firstJob: '', dreamJob: '' },
    claimChecks: [],
    practices: [],
    familyAgreement: '',
  },
  discussionFilters: { search: '', category: 'All', stage: 'All', country: 'India', region: 'Tamil Nadu' },
  discussionLimit: 12,
  savedDiscussions: [],
  userDiscussions: [],
  discussionReplies: {},
  communityMode: 'discussions',
  journeyStageTab: 'focus',
  studentDirectoryFilters: { search: '', country: 'All', stage: 'All' },
  studentDirectoryLimit: 24,
  research: { category: 'All evidence', search: '', geography: 'All', savedOnly: false, saved: [], compare: [], detailId: '' },
  calling: {
    mode: 'assessment', activeAssessment: 'personality', activeQuestion: 'freedom', search: '', limit: 18,
    selections: { freedom: [], boundary: [], legacy: [] },
    custom: { freedom: '', boundary: '', legacy: '' },
    assessment: {
      personality: {}, desire: {}, capability: {},
    },
  },
  generatedNames: { scope: 'Tamil Nadu' },
  platform: { defaultView: 'calling', defaultTheme: 'violet', defaultRegion: 'All', allowGuestAccess: true, showEditorialLinks: true },
  adminConfig: {
    platformName: 'ZYSHAM', supportEmail: 'support@zysham.in', defaultLanguage: 'English', timezone: 'Asia/Kolkata', academicYear: '2026–27', rolloutRegion: 'Tamil Nadu',
    recommendationsPerStage: 7, assessmentRetakeDays: 14, allowGuestAssessments: true, evidenceBeforeRecommendation: true, showUncertainty: true,
    sourceFreshnessDays: 180, requireOfficialSources: true, showSourceDates: true, staleContentWarning: true, regionalFallback: 'India',
    aiMode: 'local-first', aiModel: 'Zysham Career SLM', cloudFallback: false, citationsRequired: true, humanDecisionNotice: true, maxAiRecommendations: 3, logPrompts: false,
    minimumCommunityAge: 13, pseudonymsRequired: true, imageSharing: true, maxUploadMb: 8, premoderateFirstPosts: true, slowModeSeconds: 30, minMetricsCohort: 10, enableReporting: true,
    privacyRetentionDays: 365, exportEnabled: true, deletionEnabled: true, analyticsMode: 'privacy-preserving', consentVersion: '2026.1',
    digestDay: 'Sunday', transactionalEmail: true, editorialApproval: true, newsletterDoubleOptIn: true,
    maintenanceMode: false, releaseChannel: 'stable', auditFrequency: 'monthly', backupsEnabled: true, lastAuditAt: '',
  },
  communications: { newsletterSubscribed: false, productUpdates: false, familyDigest: false, consentAt: '', subscriberEmail: '', campaigns: [], outbox: [] },
  editorial: { blogSearch: '', blogCategory: 'All', selectedBlogId: '', selectedNewsletterId: '', localPosts: [], localNewsletters: [] },
  studyGuide: { section: 'overview', track: 'grade11', subject: 'Physics', search: '', selectedChapterId: '', chapterTab: 'summary', statuses: {}, mastery: {}, notes: {}, studyBlocks: [], assessments: [], assignments: [] },
  certifications: { category: 'Digital & AI', search: '', saved: [], detailId: '' },
  traditional: { category: 'Dance', search: '', saved: [], detailId: '' },
  entranceExams: { section: 'catalogue', category: 'all', search: '', guidePage: 5 },
  dreamJob: { tab: 'discover', selectedId: 'google', selectedVocationId: 'performing-artist', previewStage: '', search: '', saved: [], identity: '', targetRole: '', evidence: '', vocationEvidence: '', vocationProgress: {} },
  jobsHub: { tab: 'overview', search: '', category: 'All', karmaBand: 'All', salaryBand: 'All', selectedIds: [], detailId: '' },
  vedicPrediction: { name: '', birthDate: '', birthTime: '', birthPlace: '', rashi: '', nakshatra: '', ascendant: '', tenthHouse: '', dominantPlanet: '', interest: '', workPreference: '', goal: '', generatedAt: '' },
  assessments: { active: 'interests', hub: 'signals', answers: {}, completed: {}, updatedAt: '' },
};

const viewMeta = {
  overview: ['YOUR DECISION SPACE', 'Overview'],
  compass: ['KNOW THYSELF', 'Know Thyself'],
  explore: ['DISCOVER POSSIBILITIES', 'Explore careers'],
  experiences: ['LEARN FROM MANY ROUTES', 'Experience exchange'],
  discussions: ['A GLOBAL DECISION COMMONS', 'Discussions'],
  'ai-journey': ['AI IN EVERY DECISION', 'AI Journey'],
  'admin-settings': ['PLATFORM GOVERNANCE', 'Admin Settings'],
  compare: ['SEE THE TRADE-OFFS', 'Compare paths'],
  roadmap: ['TURN CLARITY INTO ACTION', 'My roadmap'],
  family: ['ONE PLAN, TWO PERSPECTIVES', 'Family room'],
  evidence: ['PROGRESS YOU CAN NAME', 'Accomplishments'],
  'journey-stage': ['YEAR-BY-YEAR JOURNEY', 'Journey stage'],
  'vedic-prediction': ['TRADITION AS A REFLECTIVE LENS', 'Vedic Prediction'],
  assessments: ['ALL ASSESSMENTS · ONE WORKSPACE', 'Assessments'],
  'burning-desire': ['WHAT YOU WOULD WILLINGLY SUSTAIN', 'Burning Desire'],
  research: ['VERIFY BEFORE YOU RANK', 'Research'],
  calling: ['3 ASSESSMENTS · 7 TRAITS · 7 NEXT MOVES', 'Find Your Calling'],
  blog: ['FROM THE ZYSHAM TEAM', 'Team Blog'],
  newsletters: ['SEVEN VISUAL DECISION GUIDES', 'Infographics'],
  'study-guide': ['LEARN · PRACTISE · MASTER', 'Study Guide'],
  certifications: ['RECOGNISED SELF-LEARNING', 'Certification Courses'],
  traditional: ['HERITAGE · DISCIPLINE · EXPRESSION', 'Traditional Courses'],
  'entrance-exams': ['SEARCH · VERIFY · PREPARE', 'Entrance Exams'],
  'dream-job': ['PURPOSE · PROOF · MOBILITY', 'The Dream Job'],
  jobs: ['ROLE · LIVELIHOOD · CONSEQUENCE', 'Role & Work Library'],
};

const campusBackgrounds = [
  { id: 'academy-wide-courtyard', name: 'Wide courtyard', detail: 'Open contemporary academy', file: 'assets/backgrounds/academy-wide-courtyard.jpg' },
  { id: 'academy-sunrise-quadrangle', name: 'Sunrise quadrangle', detail: 'Warm, quiet morning', file: 'assets/backgrounds/academy-sunrise-quadrangle.jpg' },
  { id: 'academy-library-terrace', name: 'Library terrace', detail: 'Open-air collaboration', file: 'assets/backgrounds/academy-library-terrace.jpg' },
  { id: 'academy-innovation-court', name: 'Innovation court', detail: 'Engineering and making', file: 'assets/backgrounds/academy-innovation-court.jpg' },
  { id: 'academy-arts-amphitheatre', name: 'Arts amphitheatre', detail: 'Heritage and discussion', file: 'assets/backgrounds/academy-arts-amphitheatre.jpg' },
  { id: 'academy-science-garden', name: 'Science garden', detail: 'Labs meet landscape', file: 'assets/backgrounds/academy-science-garden.jpg' },
  { id: 'academy-heritage-modern', name: 'Heritage modern', detail: 'Old and new learning', file: 'assets/backgrounds/academy-heritage-modern.jpg' },
  { id: 'academy-monsoon-courtyard', name: 'Monsoon courtyard', detail: 'Fresh after the rain', file: 'assets/backgrounds/academy-monsoon-courtyard.jpg' },
  { id: 'academy-evening-commons', name: 'Evening commons', detail: 'Warm library at blue hour', file: 'assets/backgrounds/academy-evening-commons.jpg' },
  { id: 'academy-sustainable-green', name: 'Sustainable campus', detail: 'Green, climate-aware design', file: 'assets/backgrounds/academy-sustainable-green.jpg' },
  { id: 'academy-urban-rooftop', name: 'Urban rooftop', detail: 'Learning above the city', file: 'assets/backgrounds/academy-urban-rooftop.jpg' },
  { id: 'academy-lakeside-commons', name: 'Lakeside commons', detail: 'Calm water and study', file: 'assets/backgrounds/academy-lakeside-commons.jpg' },
  { id: 'campus-walk', name: 'Campus walk', detail: 'Everyday university life', file: 'assets/backgrounds/campus-walk.jpg' },
  { id: 'library-team', name: 'Library team', detail: 'Study and collaboration', file: 'assets/backgrounds/library-team.jpg' },
  { id: 'engineering-lab', name: 'Engineering lab', detail: 'Building and testing', file: 'assets/backgrounds/engineering-lab.jpg' },
  { id: 'design-studio', name: 'Design studio', detail: 'Creative problem-solving', file: 'assets/backgrounds/design-studio.jpg' },
  { id: 'campus-mentor', name: 'Campus mentor', detail: 'Guidance and conversation', file: 'assets/backgrounds/campus-mentor.jpg' },
  { id: 'career-showcase', name: 'Career showcase', detail: 'Projects meet opportunity', file: 'assets/backgrounds/career-showcase.jpg' },
];

const legacyResearchCatalog = [
  { id: 'tn-college-ranking', category: 'College Ranking', title: 'Tamil Nadu college evidence · NIRF 2025', subtitle: 'Filter the official college table, then inspect the dimension scores and the actual programme.', checks: ['Thiagarajar College, Madurai · official rank 20', "St. Joseph's College, Tiruchirappalli · official rank 25", 'Bishop Heber College, Tiruchirappalli · official rank 46', 'Never transfer an overall college rank directly to a specific course'], source: ['NIRF 2025 College ranking', 'https://www.nirfindia.org/Rankings/2025/CollegeRanking.html'] },
  { id: 'tn-school-ranking', category: 'School Ranking', title: 'Tamil Nadu school comparison · evidence matrix', subtitle: 'There is no single official school league table that captures student fit.', checks: ['Verify affiliation and senior-secondary status', 'Compare actual subject combinations and teachers', 'Add commute, fees, language and support', 'Talk to current students; do not rank from board labels alone'], source: ['CBSE SARAS school search', 'https://saras.cbse.gov.in/saras/'] },
  { id: 'tn-location-ranking', category: 'Location Ranking', title: 'Rank locations by the student’s real constraints', subtitle: 'A useful location score changes by course, budget, family responsibilities and desired work.', checks: ['Commute or relocation burden', 'Relevant colleges, employers and internships', 'Housing, safety, language and accessibility', 'Family support, healthcare, connectivity and fallback routes'] },
  { id: 'company-ranking', category: 'Company Ranking', title: 'Compare employers by role quality—not brand', subtitle: 'Company-wide reputation cannot tell you what one team, manager or graduate role will be like.', checks: ['Actual role tasks and manager access', 'Hours, shifts, location and travel', 'Learning, internal mobility and attrition signals', 'Written pay, bond, probation and benefits terms'] },
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

const campusPlacementSource = (label, url) => ({ label, url, checkedAt: '2026-08-09' });
const campusPlacementResearch = [
  {
    id: 'placement-process-map', domain: 'campus-placements', category: 'Process map', title: 'Map the campus placement process before final year',
    summary: 'Treat placement as a sequence you can prepare for: institute eligibility and registration, employer briefing, assessment, role-specific selection rounds, interview, documentation and offer review.', geography: 'India',
    tags: ['campus placement', 'final year', 'workflow', 'TPO'],
    facts: [{ label: 'Common sequence', value: 'Eligibility → registration → assessment → discussion or role round → interview → offer' }, { label: 'Student output', value: 'One dated tracker for employers, roles, stages, evidence and next action' }],
    checks: ['Get the current placement policy and calendar from your institute.', 'Record the role and eligibility for every employer separately.', 'Prepare for the announced process; do not assume every company uses every round.'],
    sources: [campusPlacementSource('Placement Preparation — campus placement process', 'https://www.placementpreparation.io/blog/campus-placement-process-in-india/'), campusPlacementSource('TCS campus hiring process example', 'https://www.tcs.com/careers/india/slp')],
    compare: { stage: 'College final year', evidence: 'Placement tracker', risk: 'Assuming one universal process', nextMove: 'Ask the placement cell for the current calendar' },
    caveat: 'The supplied guide is a useful process overview, not an official rulebook. Rounds and eligibility vary by institute, role and employer.'
  },
  {
    id: 'placement-cell-brief', domain: 'campus-placements', category: 'Placement cell', title: 'Build your placement-cell briefing',
    summary: 'Know the institute rules, eligibility calculations, registration deadlines, attendance requirements, offer policy and escalation contact before applications open.', geography: 'India',
    tags: ['placement cell', 'eligibility', 'calendar', 'policy'],
    facts: [{ label: 'Capture', value: 'Policy, calendar, eligible branches, marks rule, backlogs rule and offer limits' }, { label: 'Verify with', value: 'The current institute placement office or TPO' }],
    checks: ['Save the dated policy rather than relying on senior-year memory.', 'Ask how CGPA conversion and active backlogs are treated.', 'Clarify whether accepting one offer changes eligibility for later drives.'],
    sources: [campusPlacementSource('AICTE Internship Policy', 'https://internship.aicte-india.org/dashboard/state/maharashtra/extra-images/6-AICTE-Internship-Policy.pdf')],
    compare: { stage: 'College years 2–final', evidence: 'Verified policy brief', risk: 'Missing an administrative gate', nextMove: 'Book a TPO clarification' },
    caveat: 'Placement policies are institute-specific and can change during an academic year.'
  },
  {
    id: 'placement-resume-evidence', domain: 'campus-placements', category: 'Application evidence', title: 'Create a role-specific resume and proof pack',
    summary: 'Make each claim inspectable. Connect projects, internships, coursework and responsibilities to the work in the actual job description.', geography: 'India',
    tags: ['resume', 'portfolio', 'projects', 'job description'],
    facts: [{ label: 'Core pack', value: 'One-page resume, transcript, project proof, portfolio or repository, and concise project explanations' }, { label: 'Quality test', value: 'You can defend every line without AI or a teammate answering for you' }],
    checks: ['Mirror role language only when it is truthful.', 'Quantify outcomes only when you can explain the baseline and measurement.', 'Remove unsupported skill lists and confidential project data.'],
    sources: [campusPlacementSource('NCS — From Campus to Corporate mentoring', 'https://betacloud.ncs.gov.in/ncs-pmvbry')],
    compare: { stage: 'College years 2–final', evidence: 'Audited resume + proof links', risk: 'Generic or inflated claims', nextMove: 'Run a line-by-line evidence audit' },
    caveat: 'A polished resume may improve clarity; it cannot replace relevant capability evidence.'
  },
  {
    id: 'placement-assessment-plan', domain: 'campus-placements', category: 'Assessments', title: 'Prepare from a diagnostic, not random question volume',
    summary: 'Identify the tested capabilities for the target role, take a timed baseline, keep an error log and revisit weak concepts until performance is reliable.', geography: 'India',
    tags: ['aptitude', 'coding', 'technical test', 'diagnostic'],
    facts: [{ label: 'Useful loop', value: 'Baseline → error category → concept repair → timed retest → explanation' }, { label: 'Role first', value: 'Aptitude, coding, case, writing and domain tests require different preparation' }],
    checks: ['Use the employer or placement-cell test notice as the syllabus.', 'Track accuracy and reasoning, not just questions attempted.', 'Practise under the time and tool constraints actually announced.'],
    sources: [campusPlacementSource('Placement Preparation — process overview', 'https://www.placementpreparation.io/blog/campus-placement-process-in-india/'), campusPlacementSource('TCS selection process example', 'https://www.tcs.com/careers/india/slp')],
    compare: { stage: 'College years 3–final', evidence: 'Timed baselines + error log', risk: 'High volume without learning', nextMove: 'Take one role-aligned diagnostic' },
    caveat: 'Test formats change. Verify the current employer communication before investing in a preparation pattern.'
  },
  {
    id: 'placement-group-rounds', domain: 'campus-placements', category: 'Group rounds', title: 'Practise contribution, listening and respectful disagreement',
    summary: 'Where a group discussion, interaction or case is used, demonstrate structured thinking and help the group progress instead of competing for airtime.', geography: 'India',
    tags: ['group discussion', 'case', 'communication', 'collaboration'],
    facts: [{ label: 'Strong evidence', value: 'Frame the question, add one reasoned point, invite evidence, synthesise and correct gracefully' }, { label: 'Avoid', value: 'Interrupting, memorised speeches and dominating quieter candidates' }],
    checks: ['Record a practice round and review speaking time.', 'Practise summarising a view you disagree with fairly.', 'Use current evidence for factual topics.'],
    sources: [campusPlacementSource('TCS campus process example', 'https://www.tcs.com/careers/india/slp')],
    compare: { stage: 'College final year', evidence: 'Reviewed practice recording', risk: 'Performance without collaboration', nextMove: 'Run one six-person practice round' },
    caveat: 'Many roles do not use group rounds. Prepare only when the announced process requires one.'
  },
  {
    id: 'placement-interview-project', domain: 'campus-placements', category: 'Interviews', title: 'Defend your college project as evidence of judgment',
    summary: 'Explain the problem, your exact contribution, alternatives, failures, decisions, measurements and what you would change—not only the final demo.', geography: 'India',
    tags: ['interview', 'college project', 'technical', 'STAR'],
    facts: [{ label: 'Project story', value: 'Context → constraint → your decision → result → failure or trade-off → next revision' }, { label: 'Integrity test', value: 'Clearly separate your work, team work and AI-assisted work' }],
    checks: ['Prepare a two-minute and ten-minute version.', 'Reproduce one core part without AI assistance.', 'Invite a mentor to challenge assumptions and weak evidence.'],
    sources: [campusPlacementSource('NCS — From Campus to Corporate mentoring', 'https://betacloud.ncs.gov.in/ncs-pmvbry'), campusPlacementSource('Placement Preparation — process overview', 'https://www.placementpreparation.io/blog/campus-placement-process-in-india/')],
    compare: { stage: 'College years 2–final', evidence: 'Project defence + artifact', risk: 'Claiming team output as personal work', nextMove: 'Record a mock project defence' },
    caveat: 'Interview focus varies by role. Use the job description and official process communication to choose examples.'
  },
  {
    id: 'placement-offer-audit', domain: 'campus-placements', category: 'Offer decision', title: 'Read the complete offer, not only the CTC headline',
    summary: 'Compare the actual role, fixed and variable pay, work location, shifts, probation, training terms, service agreement, notice period, benefits and joining conditions.', geography: 'India',
    tags: ['offer', 'CTC', 'bond', 'location', 'probation'],
    facts: [{ label: 'Decision record', value: 'Role, team, fixed pay, variable conditions, location, start date, restrictions and unanswered questions' }, { label: 'Human check', value: 'Discuss unclear legal or financial terms with a qualified adult or adviser' }],
    checks: ['Ask for the written offer and annexures.', 'Separate fixed cash, variable pay and one-time benefits.', 'Check role/location flexibility and service-agreement exit terms before accepting.'],
    sources: [campusPlacementSource('NCS — career and employment services', 'https://www.ncs.gov.in/')],
    compare: { stage: 'College final year', evidence: 'Written offer comparison', risk: 'Choosing by headline compensation', nextMove: 'Complete the offer audit before accepting' },
    caveat: 'This is a decision checklist, not legal or financial advice. Obtain qualified review for consequential terms.'
  },
  {
    id: 'placement-internship-evidence', domain: 'campus-placements', category: 'Internship bridge', title: 'Turn an internship into inspectable placement evidence',
    summary: 'Document the agreed work, supervision, attendance, deliverables, feedback, learning and final artifact while respecting confidentiality.', geography: 'India',
    tags: ['internship', 'evaluation', 'certificate', 'evidence'],
    facts: [{ label: 'Evidence chain', value: 'Joining record → work log → supervisor feedback → report or artifact → completion record' }, { label: 'Placement value', value: 'A credible account of contribution, learning and professional behaviour' }],
    checks: ['Agree deliverables and supervisor before starting.', 'Keep a weekly decision and learning log.', 'Request feedback early enough to improve, not only at completion.'],
    sources: [campusPlacementSource('AICTE Internship Policy', 'https://internship.aicte-india.org/dashboard/state/maharashtra/extra-images/6-AICTE-Internship-Policy.pdf')],
    compare: { stage: 'College years 1–final', evidence: 'Supervisor-reviewed work record', risk: 'Certificate without meaningful work', nextMove: 'Define one verifiable deliverable' },
    caveat: 'Follow your institution and employer confidentiality rules; never publish protected work merely to strengthen a portfolio.'
  },
  {
    id: 'placement-fraud-safety', domain: 'campus-placements', category: 'Safety', title: 'Verify every recruiter and never pay for a job offer',
    summary: 'Use the institute placement cell, the employer’s official careers domain and government services to verify unfamiliar messages, links and requests.', geography: 'India',
    tags: ['fraud', 'recruitment fee', 'safety', 'verification'],
    facts: [{ label: 'Red flags', value: 'Payment demand, rushed secrecy, personal accounts, unofficial domains, guaranteed selection or unnecessary identity data' }, { label: 'Official principle', value: 'NCS states its services are free; TCS states it does not charge recruitment fees' }],
    checks: ['Verify the sender and opening independently.', 'Do not pay for registration, interview, offer or mandatory equipment.', 'Report suspicious campus messages to the placement cell and the named organisation.'],
    sources: [campusPlacementSource('NCS fraud warning and free-service statement', 'https://www.ncs.gov.in/placement-agency/hi-in/Pages/default.aspx'), campusPlacementSource('TCS recruitment disclaimer', 'https://www.tcs.com/careers/india/slp')],
    compare: { stage: 'Any hiring stage', evidence: 'Verified official vacancy or drive', risk: 'Payment or identity theft', nextMove: 'Cross-check on the official domain' },
    caveat: 'A familiar logo or forwarded college message is not proof of authenticity.'
  },
  {
    id: 'placement-off-campus-fallback', domain: 'campus-placements', category: 'Mobility', title: 'Run an off-campus path in parallel',
    summary: 'Campus access is useful but transient. Maintain a role shortlist, alerts, official applications, referrals grounded in evidence and a weekly outreach rhythm.', geography: 'India',
    tags: ['off campus', 'NCS', 'job fair', 'mobility'],
    facts: [{ label: 'Parallel system', value: 'Official portals + employer career pages + alumni conversations + evidence-led applications' }, { label: 'Weekly rhythm', value: 'Research roles, improve one proof item, apply selectively, follow up and review outcomes' }],
    checks: ['Search by role and skill rather than company prestige alone.', 'Log application source, date, status and next action.', 'Keep learning and project evidence moving while waiting.'],
    sources: [campusPlacementSource('National Career Service', 'https://www.ncs.gov.in/'), campusPlacementSource('NCS job-seeker FAQs', 'https://www.ncs.gov.in/job-seeker/_layouts/15/ncsp/faqs.aspx')],
    compare: { stage: 'College final year–first job', evidence: 'Application and learning tracker', risk: 'Treating campus rejection as career verdict', nextMove: 'Create a ten-role evidence map' },
    caveat: 'Portal listings and job fairs are access channels, not guarantees. Verify each role and employer independently.'
  }
];

const researchDomains = ['All evidence', 'Schools & subjects', 'Entrances & admissions', 'Colleges & courses', 'Cost & funding', 'Careers & skills', 'Campus placements', 'Apprenticeships', 'Employers', 'Locations'];
const researchCatalog = [...schoolExamResearch, ...collegeCourseResearch, ...jobLocationResearch, ...campusPlacementResearch].map((item) => {
  const raw = String(item.domain).toLowerCase();
  const domain = raw === 'school' || raw === 'planning' || (raw === 'verification' && item.category?.toLowerCase().includes('school')) ? 'Schools & subjects'
    : raw === 'exam' || raw === 'admissions' ? 'Entrances & admissions'
    : raw === 'college research' || raw === 'verification' ? 'Colleges & courses'
    : raw === 'affordability' ? 'Cost & funding'
    : raw === 'jobs' || raw === 'skills' ? 'Careers & skills'
    : raw === 'campus-placements' ? 'Campus placements'
    : raw === 'apprenticeships' ? 'Apprenticeships'
    : raw === 'employers' ? 'Employers'
    : raw === 'locations' ? 'Locations' : 'Colleges & courses';
  const geography = typeof item.geography === 'string' ? item.geography : [item.geography?.city, item.geography?.state, item.geography?.country].filter((value, index, values) => value && value !== 'Online' && values.indexOf(value) === index).join(', ') || 'India';
  return { ...item, researchDomain: domain, geographyLabel: geography, subtitle: item.summary, source: item.sources?.[0] ? [item.sources[0].label, item.sources[0].url] : null };
});

let state = loadState();
if (state.session.mode === 'profile' && !state.accounts.some((account) => account.id === state.session.accountId)) {
  state.session = { ...state.session, mode: 'signed_out', accountId: '' };
  state.onboarded = false;
}
if (state.communityMode === 'students') state.communityMode = 'discussions';
if (state.view === 'research') state.view = 'overview';
if (state.view === 'study-guide') {
  state.activeJourneyStage = state.studyGuide.track === 'grade11' ? 'grade11' : 'grade12';
  state.journeyStageTab = 'study';
  state.view = 'journey-stage';
}
if (state.view === 'ai-journey') {
  state.overviewSection = 'ai';
  state.view = 'overview';
}
const previousDreamIdentity = state.dreamJob.identity?.trim();
if (previousDreamIdentity) {
  const callingLegacy = state.calling.custom.legacy?.trim() || '';
  if (!callingLegacy) state.calling.custom.legacy = previousDreamIdentity;
  else if (!callingLegacy.toLocaleLowerCase().includes(previousDreamIdentity.toLocaleLowerCase())) state.calling.custom.legacy = `${callingLegacy}\n${previousDreamIdentity}`.slice(0, 800);
  state.dreamJob.identity = '';
}
const movedDreamSection = { roadmap: 'target', evidence: 'gaps', reality: 'prestige' }[state.dreamJob.tab];
if (movedDreamSection) {
  state.roadmapSection = movedDreamSection;
  state.dreamJob.tab = 'discover';
  if (state.view === 'dream-job') state.view = 'roadmap';
}
let toastTimer;
let rightDrawerReturnFocus = null;

const isGuest = () => state.session?.mode === 'guest';
const currentAccount = () => state.accounts.find((account) => account.id === state.session?.accountId) || null;
const isAdmin = () => currentAccount()?.role === 'admin';
const activeProfile = () => state.session?.activeRole === 'parent' ? state.profiles.parent : state.session?.activeRole === 'admin' ? currentAccount() : state.profiles.student;

function requireProfile(message = 'Create a student or parent profile to add to a personal journey.') {
  if (!isGuest()) return true;
  showToast(message);
  return false;
}

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const dreamJobPanel = document.createElement('section');
dreamJobPanel.id = 'dreamJobPanel';
dreamJobPanel.className = 'dream-path-drawer';
dreamJobPanel.setAttribute('aria-label', 'Dream Job vocation details');
document.body.append(dreamJobPanel);

const drawerDefinitions = {
  journey: { source: '#journeyInspector', kicker: 'YEAR-BY-YEAR JOURNEY', title: 'Journey stage', width: 470 },
  research: { source: '#researchPanel', kicker: 'EVIDENCE BEFORE DECISIONS', title: 'Research', width: 1120 },
  settings: { source: '#settingsPanel', kicker: 'YOUR PROFILE', title: 'User Profile Preferences', width: 560 },
  adminSettings: { source: '#adminSettingsPanel', kicker: 'PLATFORM CONTROL', title: 'Admin Settings', width: 600 },
  mentor: { source: '#mentorPanel', kicker: 'AI-ASSISTED COUNSELLING', title: 'Miso · Career counsellor', width: 640 },
  dream: { source: '#dreamJobPanel', kicker: 'VOCATION BEFORE PRESTIGE', title: 'Performing arts path', width: 560 },
};

function initialiseRightDrawer() {
  const host = $('#rightDrawerBody');
  Object.entries(drawerDefinitions).forEach(([kind, definition]) => {
    const source = $(definition.source);
    if (!source) return;
    source.classList.add('right-drawer-view');
    source.dataset.drawerView = kind;
    source.hidden = true;
    host.append(source);
  });
}

function openRightDrawer(kind, overrides = {}) {
  const definition = { ...drawerDefinitions[kind], ...overrides };
  if (!definition?.source) return;
  const drawer = $('#rightDrawer');
  $$('.right-drawer-view', drawer).forEach((view) => { const active = view.dataset.drawerView === kind; view.hidden = !active; view.classList.toggle('active', active); view.setAttribute('aria-hidden', String(!active)); });
  $('#rightDrawerKicker').textContent = definition.kicker;
  $('#rightDrawerTitle').textContent = definition.title;
  const icon = $('#rightDrawerIcon');
  icon.hidden = kind !== 'mentor';
  icon.className = `right-drawer-icon${kind === 'mentor' ? ` mentor-face mentor-animal ${state.mentor === 'miso' ? 'cat' : 'dog'}` : ''}`;
  drawer.style.setProperty('--drawer-width', `${definition.width}px`);
  document.body.style.setProperty('--drawer-width', `${definition.width}px`);
  drawer.dataset.kind = kind;
  document.body.dataset.drawerKind = kind;
  rightDrawerReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('right-drawer-open');
  $('#toast')?.classList.remove('show');
  clearTimeout(toastTimer);
  $('#headerProfileButton')?.setAttribute('aria-expanded', String(kind === 'settings'));
  $('#adminSettingsButton')?.setAttribute('aria-expanded', String(kind === 'adminSettings'));
  if (kind !== 'mentor') { $('#mentorDock').classList.remove('open'); document.body.classList.remove('mentor-open'); }
  $('#rightDrawerClose')?.focus({ preventScroll: true });
}

function closeRightDrawer(kind = '') {
  const drawer = $('#rightDrawer');
  if (kind && drawer.dataset.kind !== kind) return;
  drawer.setAttribute('aria-hidden', 'true');
  drawer.dataset.kind = '';
  delete document.body.dataset.drawerKind;
  document.body.classList.remove('right-drawer-open', 'journey-open', 'research-open', 'settings-open', 'admin-settings-open', 'mentor-open');
  $('#headerProfileButton')?.setAttribute('aria-expanded', 'false');
  $('#adminSettingsButton')?.setAttribute('aria-expanded', 'false');
  $('#mentorDock').classList.remove('open');
  $$('.right-drawer-view', drawer).forEach((view) => { view.hidden = true; view.classList.remove('active'); view.setAttribute('aria-hidden', 'true'); });
  if (rightDrawerReturnFocus?.isConnected) rightDrawerReturnFocus.focus();
  rightDrawerReturnFocus = null;
}

initialiseRightDrawer();

const sidebarMenuViews = {
  journey: ['overview', 'journey-stage', 'roadmap', 'evidence'],
  discussions: ['discussions'], certifications: ['certifications'],
  traditional: ['traditional'], exams: ['entrance-exams'], dreamJob: ['dream-job', 'jobs', 'explore', 'compare'], ethics: ['jobs'], calling: ['calling', 'assessments', 'compass', 'burning-desire', 'vedic-prediction'], blog: ['blog'], newsletters: ['newsletters'],
};
const ethicsTabs = ['framework', 'improve', 'foundations'];
function activeSidebarGroup() {
  if (state.view === 'jobs') return ethicsTabs.includes(state.jobsHub.tab) ? 'ethics' : 'dreamJob';
  return Object.entries(sidebarMenuViews).find(([, views]) => views.includes(state.view))?.[0] || '';
}
let expandedSidebarGroup = activeSidebarGroup();
const sidebarItemColors = ['#d6a8ff', '#78ddd4', '#ff9fbe', '#f4c66f', '#91c8ff', '#9ce0aa', '#ffb67f'];

function sidebarMenuDefinitions() {
  return {
    journey: [
      { kind: 'view', value: 'overview', label: 'Journey overview', group: 'Workspace' },
      { kind: 'view', value: 'roadmap', label: 'Action Plan', meta: 'Milestones and next steps', group: 'Workspace' },
      { kind: 'view', value: 'evidence', label: 'Accomplishments', meta: 'Projects, progress and recognition', group: 'Workspace' },
    ],
    discussions: [['discussions','Discussions'],['experiences','Alumni Talks'],['saved','Saved topics']].map(([value,label]) => ({ kind: 'community', value, label })),
    certifications: certificationCategories.map((value) => ({ kind: 'certification', value, label: value })),
    traditional: traditionalCategories.map((value) => ({ kind: 'traditional', value, label: value })),
    exams: [
      { kind: 'exam-section', value: 'catalogue', label: 'Exam catalogue', meta: `${entranceExams.length} decision-ready routes`, group: 'Workspace' },
      { kind: 'exam-section', value: 'planning', label: 'Decision & counselling plan', meta: 'Fit before form-filling', group: 'Workspace' },
      { kind: 'exam-section', value: 'handbook', label: 'Complete PDF handbook', meta: `${entranceExamGuide.pages} pages · ${entranceExamGuide.statedExamCount} exams`, group: 'Workspace' },
      ...entranceExamCategories.filter((item) => !['all', 'syllabus'].includes(item.id)).map((item) => ({ kind: 'exam-category', value: item.id, label: item.label, meta: `Guide page ${item.page}`, group: 'Pathways' })),
      { kind: 'exam-category', value: 'syllabus', label: 'Syllabus library', meta: 'Guide page 101', group: 'Preparation' },
    ],
    dreamJob: [
      { kind: 'view', value: 'explore', label: 'Career directions' },
      { kind: 'view', value: 'compare', label: 'Compare directions' },
      { kind: 'dream-job', value: 'discover', label: 'Employer atlas' },
      { kind: 'dream-job', value: 'performing', label: 'Performing arts paths' },
      { kind: 'jobs', value: 'atlas', label: 'Role library' },
      { kind: 'jobs', value: 'compare', label: 'Compare roles' },
    ],
    ethics: [
      { kind: 'jobs', value: 'framework', label: 'Work ethics' },
      { kind: 'jobs', value: 'improve', label: 'Improve the workplace' },
      { kind: 'jobs', value: 'foundations', label: 'Ethical foundations' },
    ],
    calling: [
      { kind: 'view', value: 'compass', label: 'Know Thyself' },
      { kind: 'view', value: 'assessments', label: 'Self assessments' },
      { kind: 'view', value: 'burning-desire', label: 'Burning Desire' },
      { kind: 'view', value: 'vedic-prediction', label: 'Vedic Prediction', meta: 'Reflective career lens' },
    ],
    blog: [{ kind: 'blog', value: 'All', label: 'All viewpoints' }, ...[...new Set(teamBlogEntries.map((item) => item.category))].map((value) => ({ kind: 'blog', value, label: value }))],
    newsletters: infographicTopics.map((topic) => ({ kind: 'newsletter', value: topic.id, label: `${topic.number} · ${topic.label}`, meta: topic.title })),
  };
}

const uiIconPaths = {
  calling: '<path d="M12 3a6 6 0 0 0-3.5 10.9V17h7v-3.1A6 6 0 0 0 12 3Z"/><path d="M9 21h6M9 17h6"/>',
  journey: '<path d="M4 19V5m0 0 4 4M4 5 8 1M4 12h7l3-4h6M14 8l3-3m-3 3 3 3M11 12l3 4h6m-6 0 3-3m-3 3 3 3"/>',
  discussions: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/>',
  research: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M8 11h6M11 8v6"/>',
  study: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22Z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22Z"/>',
  certificate: '<path d="M6 3h12v13H6z"/><path d="m9 21 3-2 3 2v-5H9zM9 7h6M9 11h4"/>',
  traditional: '<path d="M12 3c3 3 5 5 5 8a5 5 0 0 1-10 0c0-3 2-5 5-8Z"/><path d="M5 21h14M8 17l-2 4m10-4 2 4M12 8v6"/>',
  exam: '<path d="M5 3h14v18H5z"/><path d="M9 8h6M9 12h6M9 16h3"/><path d="m15 16 1.5 1.5L20 14"/>',
  dream: '<path d="m12 2 2.3 5.2L20 8l-4 3.8 1 5.5-5-2.7-5 2.7 1-5.5L4 8l5.7-.8Z"/><path d="M9 21h6M12 15v6"/>',
  karma: '<path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM8 21h8"/>',
  journal: '<path d="M5 3h14v18H5zM9 3v18M12 8h4M12 12h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  signout: '<path d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9"/>',
  reset: '<path d="M4 4v6h6M5.5 15a8 8 0 1 0 .5-7"/>',
  overview: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
  community: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20a6 6 0 0 1 12 0m0-5a5 5 0 0 1 6 5"/>',
  tool: '<path d="m14 6 4-4 4 4-4 4M2 18l8-8 4 4-8 8H2z"/>',
  dot: '<circle cx="12" cy="12" r="4"/>',
};

function iconMarkup(name) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${uiIconPaths[name] || uiIconPaths.dot}</svg>`;
}

$$('[data-icon]').forEach((node) => { node.innerHTML = iconMarkup(node.dataset.icon); });

function initialiseSidebarMenus() {
  const definitions = sidebarMenuDefinitions();
  $$('[data-menu]').forEach((parent) => {
    const key = parent.dataset.menu;
    const group = document.createElement('div');
    group.className = `nav-group nav-group-${key}`;
    group.dataset.navGroup = key;
    parent.before(group);
    group.append(parent);
    parent.setAttribute('aria-expanded', String(key === expandedSidebarGroup));
    const chevron = document.createElement('span');
    chevron.className = 'nav-menu-chevron'; chevron.textContent = '⌄'; chevron.setAttribute('aria-hidden', 'true');
    parent.append(chevron);
    const submenu = document.createElement('div');
    submenu.className = 'nav-submenu'; submenu.setAttribute('aria-label', `${parent.textContent.trim()} sections`);
    (definitions[key] || []).forEach((item, index) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'nav-subitem'; button.dataset.submenuKind = item.kind; button.dataset.value = item.value;
      button.style.setProperty('--item-accent', sidebarItemColors[index % sidebarItemColors.length]);
      const marker = document.createElement('span'); marker.className = 'nav-subitem-marker'; marker.innerHTML = iconMarkup(item.kind === 'community' ? 'community' : item.kind === 'research' ? 'research' : item.kind === 'study' ? 'study' : item.kind === 'certification' ? 'certificate' : item.kind === 'traditional' ? 'traditional' : item.kind.startsWith('exam-') ? 'exam' : item.kind === 'dream-job' ? 'dream' : item.kind === 'jobs' ? 'karma' : item.kind === 'calling' ? 'calling' : item.value === 'overview' ? 'overview' : 'tool'); marker.setAttribute('aria-hidden', 'true');
      const copy = document.createElement('span'); const strong = document.createElement('strong'); strong.textContent = item.label; copy.append(strong);
      button.append(marker, copy); submenu.append(button);
    });
    group.append(submenu);
    group.classList.toggle('expanded', key === expandedSidebarGroup);
  });
}

function updateSidebarMenus() {
  const activeGroup = activeSidebarGroup();
  $$('[data-nav-group]').forEach((group) => {
    const key = group.dataset.navGroup;
    const belongs = key === activeGroup;
    group.classList.toggle('expanded', key === expandedSidebarGroup);
    const parent = $('[data-menu]', group);
    parent?.classList.toggle('active', belongs);
    parent?.setAttribute('aria-expanded', String(group.classList.contains('expanded')));
  });
  $$('.nav-subitem').forEach((button) => {
    const { submenuKind: kind, value } = button.dataset;
    const active = kind === 'view' ? state.view === value
      : kind === 'journey-stage' ? state.view === 'journey-stage' && state.activeJourneyStage === value
      : kind === 'community' ? state.view === 'discussions' && state.communityMode === value
      : kind === 'research' ? state.view === 'research' && state.research.category === value
      : kind === 'study' ? state.view === 'study-guide' && state.studyGuide.track === value
      : kind === 'certification' ? state.view === 'certifications' && state.certifications.category === value
      : kind === 'traditional' ? state.view === 'traditional' && state.traditional.category === value
      : kind === 'exam-section' ? state.view === 'entrance-exams' && state.entranceExams.section === value
      : kind === 'exam-category' ? state.view === 'entrance-exams' && state.entranceExams.category === value
      : kind === 'dream-job' ? state.view === 'dream-job' && state.dreamJob.tab === value
      : kind === 'jobs' ? state.view === 'jobs' && state.jobsHub.tab === value
      : kind === 'calling-mode' ? state.view === 'calling' && state.calling.mode === value
      : kind === 'calling' ? state.view === 'calling' && state.calling.activeQuestion === value
      : kind === 'blog' ? state.view === 'blog' && state.editorial.blogCategory === value
      : kind === 'newsletter' ? state.view === 'newsletters' && state.editorial.selectedNewsletterId === value
      : false;
    button.classList.toggle('active', active); button.setAttribute('aria-current', active ? 'page' : 'false');
  });
}

initialiseSidebarMenus();

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || ![2, 3, 4, 5, 6].includes(stored.version)) return structuredClone(defaultState);
    const callingAssessmentValues = (type) => Object.fromEntries(Object.entries(stored.calling?.assessment?.[type] || {}).filter(([, value]) => stored.version >= 6 || Number(value) > 0));
    return {
      ...structuredClone(defaultState),
      ...stored,
      profile: { ...structuredClone(defaultState.profile), ...(stored.profile || {}) },
      session: { ...structuredClone(defaultState.session), ...(stored.session || {}) },
      accounts: normaliseAccounts(Array.isArray(stored.accounts) ? stored.accounts : []),
      workspaces: stored.workspaces && typeof stored.workspaces === 'object' ? stored.workspaces : {},
      appearance: {
        ...structuredClone(defaultState.appearance),
        ...(stored.appearance || { mode: 'override' }),
        customBackgrounds: Array.isArray(stored.appearance?.customBackgrounds) ? stored.appearance.customBackgrounds : [],
        slideshow: { ...structuredClone(defaultState.appearance.slideshow), ...(stored.appearance?.slideshow || {}) },
      },
      platform: { ...structuredClone(defaultState.platform), ...(stored.platform || {}) },
      adminConfig: { ...structuredClone(defaultState.adminConfig), ...(stored.adminConfig || {}) },
      mentorChat: { ...structuredClone(defaultState.mentorChat), ...(stored.mentorChat || {}), messages: Array.isArray(stored.mentorChat?.messages) ? stored.mentorChat.messages.slice(-50).map((item) => ({ ...item, text: String(item.text || '').replace(/^The local model could not run \([\s\S]*\)\.\s*/, '') })) : [] },
      profiles: {
        student: { ...structuredClone(defaultState.profiles.student), ...(stored.profiles?.student || stored.profile || {}) },
        parent: { ...structuredClone(defaultState.profiles.parent), ...(stored.profiles?.parent || {}) },
      },
      signals: { ...structuredClone(defaultState.signals), ...(stored.signals || {}) },
      workReality: { ...structuredClone(defaultState.workReality), ...(stored.workReality || {}), answers: { ...(stored.workReality?.answers || {}) } },
      vedicPrediction: { ...structuredClone(defaultState.vedicPrediction), ...(stored.vedicPrediction || {}) },
      assessments: { ...structuredClone(defaultState.assessments), ...(stored.assessments || {}), answers: { ...(stored.assessments?.answers || {}) }, completed: { ...(stored.assessments?.completed || {}) } },
      journey: {
        ...structuredClone(defaultState.journey),
        ...(stored.journey || {}),
        stageMilestones: { ...structuredClone(defaultState.journey.stageMilestones), ...(stored.journey?.stageMilestones || {}) },
        milestoneProgress: Object.fromEntries(Object.keys(defaultState.journey.milestoneProgress).map((stage) => [stage, { ...(stored.journey?.milestoneProgress?.[stage] || {}) }])),
        noNos: { ...structuredClone(defaultState.journey.noNos), ...(stored.journey?.noNos || {}) },
        stageNotes: { ...structuredClone(defaultState.journey.stageNotes), ...(stored.journey?.stageNotes || {}) },
        ranks: { ...structuredClone(defaultState.journey.ranks), ...(stored.journey?.ranks || {}) },
        stagePhase: { ...structuredClone(defaultState.journey.stagePhase), ...(stored.journey?.stagePhase || {}) },
      },
      experienceFilters: { ...structuredClone(defaultState.experienceFilters), ...(stored.experienceFilters || {}) },
      aiJourney: {
        ...structuredClone(defaultState.aiJourney),
        ...(stored.aiJourney || {}),
        stageAnswers: { ...structuredClone(defaultState.aiJourney.stageAnswers), ...(stored.aiJourney?.stageAnswers || {}) },
      },
      discussionFilters: { ...structuredClone(defaultState.discussionFilters), ...(stored.discussionFilters || {}) },
      research: { ...structuredClone(defaultState.research), ...(stored.research || {}) },
      accomplishments: {
        ...structuredClone(defaultState.accomplishments), ...(stored.accomplishments || {}),
        rewards: Array.isArray(stored.accomplishments?.rewards) ? stored.accomplishments.rewards : [],
        courses: Array.isArray(stored.accomplishments?.courses) ? stored.accomplishments.courses : [],
        exams: Array.isArray(stored.accomplishments?.exams) ? stored.accomplishments.exams : [],
        scores: Array.isArray(stored.accomplishments?.scores) ? stored.accomplishments.scores : [],
      },
      calling: {
        ...structuredClone(defaultState.calling), ...(stored.calling || {}),
        selections: Object.fromEntries(callingQuestions.map((question) => {
          const validIds = new Set(question.options.map((option) => option.id));
          const selected = Array.isArray(stored.calling?.selections?.[question.id]) ? stored.calling.selections[question.id] : [];
          return [question.id, selected.filter((id) => validIds.has(id))];
        })),
        custom: { ...structuredClone(defaultState.calling.custom), ...(stored.calling?.custom || {}) },
        assessment: {
          personality: callingAssessmentValues('personality'),
          desire: callingAssessmentValues('desire'),
          capability: callingAssessmentValues('capability'),
        },
      },
      communications: { ...structuredClone(defaultState.communications), ...(stored.communications || {}), campaigns: Array.isArray(stored.communications?.campaigns) ? stored.communications.campaigns : [], outbox: Array.isArray(stored.communications?.outbox) ? stored.communications.outbox : [] },
      editorial: { ...structuredClone(defaultState.editorial), ...(stored.editorial || {}), localPosts: Array.isArray(stored.editorial?.localPosts) ? stored.editorial.localPosts : [], localNewsletters: Array.isArray(stored.editorial?.localNewsletters) ? stored.editorial.localNewsletters : [] },
      studyGuide: { ...structuredClone(defaultState.studyGuide), ...(stored.studyGuide || {}), statuses: { ...(stored.studyGuide?.statuses || {}) }, mastery: { ...(stored.studyGuide?.mastery || {}) }, notes: { ...(stored.studyGuide?.notes || {}) }, studyBlocks: Array.isArray(stored.studyGuide?.studyBlocks) ? stored.studyGuide.studyBlocks : [], assessments: Array.isArray(stored.studyGuide?.assessments) ? stored.studyGuide.assessments : [], assignments: Array.isArray(stored.studyGuide?.assignments) ? stored.studyGuide.assignments : [] },
      certifications: { ...structuredClone(defaultState.certifications), ...(stored.certifications || {}), saved: Array.isArray(stored.certifications?.saved) ? stored.certifications.saved : [] },
      traditional: { ...structuredClone(defaultState.traditional), ...(stored.traditional || {}), saved: Array.isArray(stored.traditional?.saved) ? stored.traditional.saved : [] },
      entranceExams: { ...structuredClone(defaultState.entranceExams), ...(stored.entranceExams || {}) },
      dreamJob: { ...structuredClone(defaultState.dreamJob), ...(stored.dreamJob || {}), saved: Array.isArray(stored.dreamJob?.saved) ? stored.dreamJob.saved : [] },
      jobsHub: { ...structuredClone(defaultState.jobsHub), ...(stored.jobsHub || {}), selectedIds: Array.isArray(stored.jobsHub?.selectedIds) ? stored.jobsHub.selectedIds : [] },
      version: 6,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  const snapshot = isGuest()
    ? {
        ...state,
        calling: structuredClone(defaultState.calling),
        assessments: structuredClone(defaultState.assessments),
        workReality: structuredClone(defaultState.workReality),
        signals: structuredClone(defaultState.signals),
        dreamJob: structuredClone(defaultState.dreamJob),
      }
    : state;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
}

const workspaceKeys = ['profile', 'profiles', 'signals', 'workReality', 'saved', 'compare', 'streamChoice', 'streamReflections', 'journey', 'roadmapDone', 'roadmapSection', 'overviewSection', 'tasks', 'familyNote', 'familyLens', 'evidence', 'accomplishments', 'aiJourney', 'calling', 'assessments', 'mentor', 'mentorChat', 'studyGuide', 'certifications', 'traditional', 'entranceExams', 'dreamJob', 'vedicPrediction', 'jobsHub'];

function captureWorkspace(accountId = state.session.accountId) {
  if (!accountId) return;
  state.workspaces[accountId] = Object.fromEntries(workspaceKeys.map((key) => [key, structuredClone(state[key])]));
}

function restoreWorkspace(accountId) {
  const workspace = state.workspaces[accountId];
  workspaceKeys.forEach((key) => { state[key] = structuredClone(workspace?.[key] ?? defaultState[key]); });
}

function allSignals() {
  return Object.entries(state.signals).filter(([key]) => key !== 'subjectAvoidance').flatMap(([, values]) => values);
}

function ratingColor(value) {
  const scale = ['#b4232f', '#b83a25', '#b64d16', '#a55e08', '#8d6c00', '#707800', '#4f7f18', '#2f7c31', '#187241', '#09694c', '#006057'];
  const score = Math.max(0, Math.min(10, Math.round(Number(value) || 0)));
  return scale[score];
}

function workRealityResult() {
  const entries = workRealityQuestions.map((question) => ({ value: Number(state.workReality.answers[question.id] ?? 0), answered: Object.hasOwn(state.workReality.answers, question.id) }));
  const values = entries.map((entry) => entry.value);
  const answered = entries.filter((entry) => entry.answered).length;
  if (!answered) return { answered: 0, primary: null, secondary: null, noNos: [], tensions: [] };
  const ranked = workArchetypes.map((pattern) => {
    const used = entries.map((entry, index) => entry.answered ? Math.abs(entry.value - pattern.ideal[index]) : null).filter((value) => value !== null);
    return { ...pattern, distance: used.reduce((sum, value) => sum + value, 0) / used.length };
  }).sort((a, b) => a.distance - b.distance);
  const answer = (id) => Number(state.workReality.answers[id] ?? 0);
  const hasAnswer = (id) => Object.hasOwn(state.workReality.answers, id);
  const noNos = [
    hasAnswer('computerTolerance') && answer('computerTolerance') <= 3 ? 'Coding-heavy daily work' : '',
    answer('physicalActivity') >= 8 ? 'Desk-only routine' : '',
    hasAnswer('travelEnergy') && answer('travelEnergy') <= 3 ? 'Frequent travel or relocation' : '',
    hasAnswer('peopleIntensity') && answer('peopleIntensity') <= 3 ? 'Constant public interaction' : '',
    answer('peopleIntensity') >= 8 ? 'Mostly isolated work' : '',
    hasAnswer('uncertaintyComfort') && answer('uncertaintyComfort') <= 3 ? 'Unpredictable income' : '',
    hasAnswer('clinicalTolerance') && answer('clinicalTolerance') <= 3 ? 'Blood / clinical exposure' : '',
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
  const answeredPairs = careerProfile ? workRealityQuestions.map((question, index) => [Number(state.workReality.answers[question.id] ?? 0), careerProfile[index], Object.hasOwn(state.workReality.answers, question.id)]).filter(([, , answered]) => answered) : [];
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
  if (view === 'research') { openResearchShelf(); return; }
  let redirectedView = false;
  if (view === 'study-guide') {
    state.activeJourneyStage = state.studyGuide.track === 'grade11' ? 'grade11' : 'grade12';
    state.journeyStageTab = 'study';
    view = 'journey-stage';
    redirectedView = true;
  }
  if (view === 'ai-journey') {
    state.overviewSection = 'ai';
    view = 'overview';
    redirectedView = true;
  }
  state.view = view;
  saveState();
  if (updateHash || redirectedView) history.replaceState(null, '', `#${view}`);
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

function regionOptionsMarkup() {
  const options = [...new Map(experienceStories.map((story) => [`${story.profile.country}::${story.profile.region}`, { country: story.profile.country, region: story.profile.region }])).values()];
  return `<option value="All">All regions</option><optgroup label="India">${options.filter((item) => item.country === 'India').map((item) => `<option value="${escapeHtml(`${item.country}::${item.region}`)}">${escapeHtml(item.region)}</option>`).join('')}</optgroup><optgroup label="Other countries">${options.filter((item) => item.country !== 'India').map((item) => `<option value="${escapeHtml(`${item.country}::${item.region}`)}">${escapeHtml(item.country)} · ${escapeHtml(item.region)}</option>`).join('')}</optgroup>`;
}

function renderResearchRail() {
  const nav = $('#researchRailNav');
  if (!nav) return;
  const domainIcons = { 'Schools & subjects': 'study', 'Entrances & admissions': 'exam', 'Colleges & courses': 'overview', 'Cost & funding': 'karma', 'Careers & skills': 'calling', 'Campus placements': 'dream', Apprenticeships: 'tool', Employers: 'community', Locations: 'journey' };
  nav.innerHTML = researchDomains.filter((domain) => domain !== 'All evidence').map((domain, index) => `<button data-research-rail="${escapeHtml(domain)}" class="${state.research.category === domain ? 'active' : ''}" style="--rail-accent:${sidebarItemColors[index % sidebarItemColors.length]}" aria-label="Open ${escapeHtml(domain)} research" title="${escapeHtml(domain)}"><span class="research-rail-icon" aria-hidden="true">${iconMarkup(domainIcons[domain] || 'research')}</span><strong>${escapeHtml(domain)}</strong><small>${researchCatalog.filter((item) => item.researchDomain === domain).length}</small></button>`).join('');
  $('#researchRailTotal').textContent = `${researchCatalog.length} evidence records`;
  $('#researchRailSaved').textContent = state.research.saved.length;
}

function updateShell() {
  const [eyebrow, title] = state.view === 'jobs' && ethicsTabs.includes(state.jobsHub.tab)
    ? ['LIVELIHOOD WITH CONSCIENCE', 'Moral & Ethics']
    : viewMeta[state.view];
  document.body.dataset.view = state.view;
  document.body.classList.toggle('left-sidebar-expanded', Boolean(state.sidebarExpanded));
  document.body.classList.toggle('right-sidebar-expanded', Boolean(state.researchRailExpanded));
  const leftToggle = $('#leftSidebarToggle');
  if (leftToggle) {
    leftToggle.setAttribute('aria-expanded', String(Boolean(state.sidebarExpanded)));
    leftToggle.title = state.sidebarExpanded ? 'Collapse navigation' : 'Expand navigation';
    $('.sidebar-toggle-icon', leftToggle).textContent = state.sidebarExpanded ? '‹' : '›';
    $('.sidebar-footer-label', leftToggle).textContent = state.sidebarExpanded ? 'Collapse navigation' : 'Expand navigation';
  }
  const rightToggle = $('#rightSidebarToggle');
  if (rightToggle) {
    rightToggle.setAttribute('aria-expanded', String(Boolean(state.researchRailExpanded)));
    rightToggle.title = state.researchRailExpanded ? 'Collapse research navigation' : 'Expand research navigation';
    $('span', rightToggle).textContent = state.researchRailExpanded ? '›' : '‹';
    $('strong', rightToggle).textContent = state.researchRailExpanded ? 'Collapse' : 'Expand';
  }
  $('#pageEyebrow').textContent = eyebrow;
  $('#pageTitle').textContent = state.view === 'journey-stage' ? yearMilestoneConfig[state.activeJourneyStage]?.title || title : title;
  $$('.nav-item').forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  if ($('#compassBadge')) $('#compassBadge').textContent = `${compassCompletion()}%`;
  if ($('#compareBadge')) $('#compareBadge').textContent = state.compare.length;
  const actor = activeProfile();
  const profileName = isGuest() ? 'Guest' : actor?.name || actor?.displayName || (state.session.activeRole === 'parent' ? 'Parent' : state.session.activeRole === 'admin' ? 'Team member' : 'Anya');
  if ($('#studentAvatar')) $('#studentAvatar').textContent = profileName.slice(0, 2).toUpperCase();
  if ($('#studentPathName')) $('#studentPathName').textContent = isGuest() ? 'Guest explorer' : state.session.activeRole === 'admin' ? profileName : state.session.activeRole === 'parent' ? `${profileName}'s parent lens` : `${profileName}'s path`;
  if ($('#studentPathMeta')) $('#studentPathMeta').textContent = isGuest() ? 'Read-only · full exploration' : state.session.activeRole === 'admin' ? `${actor?.teamRole || 'Team'} · publishing access` : state.session.activeRole === 'parent' ? `${actor?.relationship || 'Parent'} · supporting ${actor?.linkedStudentName || state.profile.name}` : `Grade ${state.profile?.grade || '10'} · ${state.profile?.board || 'CBSE'}`;
  const headerName = isGuest() ? 'Guest' : currentAccount()?.displayName || profileName;
  $('#headerProfileAvatar').textContent = headerName.slice(0, 2).toUpperCase();
  $('#headerProfileLabel').textContent = headerName;
  $('#headerProfileButton').setAttribute('aria-label', isGuest() ? 'Open guest profile and sign-in options' : `Open profile settings for ${headerName}`);
  const adminSettingsButton = $('#adminSettingsButton');
  const adminAccessActive = isAdmin();
  adminSettingsButton.dataset.access = adminAccessActive ? 'active' : 'restricted';
  adminSettingsButton.classList.toggle('active', state.view === 'admin-settings');
  adminSettingsButton.setAttribute('aria-current', state.view === 'admin-settings' ? 'page' : 'false');
  adminSettingsButton.title = adminAccessActive ? 'Admin Settings' : 'Admin Settings · Team Admin sign-in required';
  adminSettingsButton.setAttribute('aria-label', adminSettingsButton.title);
  if ($('#enterGuest')) $('#enterGuest').hidden = state.platform?.allowGuestAccess === false;
  $$('.header-editorial-link').forEach((button) => {
    button.hidden = state.platform?.showEditorialLinks === false;
    button.classList.toggle('active', button.dataset.view === state.view);
  });
  $$('[data-learning-view]').forEach((button) => {
    const active = button.dataset.learningView === state.view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  const appearance = effectiveAppearance();
  document.body.dataset.theme = appearance.theme;
  document.documentElement.style.setProperty('--campus-image', `url(${JSON.stringify(appearance.background.file)})`);
  showAppBackground(appearance.background, true);
  syncBackgroundSlideshow();
  $$('.theme-choice').forEach((button) => {
    const active = button.dataset.themeChoice === state.theme;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const audienceSelect = $('#userAudienceSelect');
  if (audienceSelect) audienceSelect.value = state.audience;
  const regionSelect = $('#userRegionSelect');
  if (regionSelect) {
    regionSelect.innerHTML = regionOptionsMarkup();
    regionSelect.value = state.regionScope || 'All';
  }
  renderResearchRail();
  updateSidebarMenus();
}

function promoteViewHeading(host) {
  const candidates = [
    '.section-header', '.hero-main', '.journey-stage-hero', '.research-workspace-head',
    '.assessment-hub-main > section > header', '.assessment-hub-main .calling-question > header', '.burning-desire-intro',
    '.assessment-hero', '.dream-calling-handoff', '.entrance-exams-hero', '.exam-section-head',
    '.vedic-hero', '.forum-header', '.editorial-hero', '.ai-hero', '.jobs-hero',
    '.infographic-hero', '.jobs-page-head', '.compact-page-intro', '.course-detail',
    '.job-detail-page > header', '.experience-detail > header',
    '.editorial-detail article > header', '.infographic-detail article > header', '.share-experience'
  ];
  const container = candidates
    .map((selector) => host.querySelector(selector))
    .find((element) => element?.querySelector(':scope h2, :scope h3, h2, h3'));
  const heading = container?.querySelector(':scope h2, :scope h3, h2, h3');
  if (!heading) {
    const [eyebrow, title] = viewMeta[state.view];
    const fallback = document.createElement('header');
    fallback.className = 'content-page-heading';
    fallback.innerHTML = `<p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${escapeHtml(title)}</h2>`;
    host.prepend(fallback);
    return;
  }

  const headingBlock = heading.parentElement;
  let eyebrow = headingBlock?.querySelector(':scope > .eyebrow');
  if (!eyebrow && headingBlock) {
    eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow generated-page-eyebrow';
    eyebrow.textContent = viewMeta[state.view][0];
    headingBlock.insertBefore(eyebrow, heading);
  } else if (eyebrow && heading.compareDocumentPosition(eyebrow) & Node.DOCUMENT_POSITION_FOLLOWING) {
    headingBlock.insertBefore(eyebrow, heading);
  }
  container.classList.remove('app-heading-promoted');
  heading.classList.remove('promoted-page-heading');
  eyebrow?.classList.remove('promoted-page-eyebrow');
}

function allBackgrounds() {
  return [...campusBackgrounds, ...(state.appearance?.customBackgrounds || [])];
}

let backgroundSlideshowTimer = null;
let backgroundSlideshowSignature = '';
let slideshowBackgroundId = '';
let backgroundLayerIndex = 0;

function ensureAppBackgroundStage() {
  let stage = $('#appBackgroundStage');
  if (stage) return stage;
  stage = document.createElement('div');
  stage.id = 'appBackgroundStage';
  stage.className = 'app-background-stage';
  stage.setAttribute('aria-hidden', 'true');
  stage.innerHTML = '<span class="app-background-layer"></span><span class="app-background-layer"></span>';
  document.body.prepend(stage);
  return stage;
}

function showAppBackground(background, animate = true) {
  if (!background?.file) return;
  const stage = ensureAppBackgroundStage();
  const layers = $$('.app-background-layer', stage);
  const current = layers[backgroundLayerIndex];
  if (current?.dataset.backgroundId === background.id) return;
  const nextIndex = current?.dataset.backgroundId ? 1 - backgroundLayerIndex : backgroundLayerIndex;
  const next = layers[nextIndex];
  next.style.backgroundImage = `url(${JSON.stringify(background.file)})`;
  next.dataset.backgroundId = background.id;
  next.className = `app-background-layer${animate && current?.dataset.backgroundId ? ' entering' : ' active'}`;
  if (animate && current?.dataset.backgroundId) {
    current.className = 'app-background-layer active';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      current.className = 'app-background-layer leaving';
      next.className = 'app-background-layer active';
    }));
    window.setTimeout(() => { if (current !== layers[backgroundLayerIndex]) current.className = 'app-background-layer'; }, 950);
  } else if (current !== next) {
    current.className = 'app-background-layer';
  }
  backgroundLayerIndex = nextIndex;
}

function syncBackgroundSlideshow() {
  const slideshow = state.appearance?.slideshow || defaultState.appearance.slideshow;
  const interval = Math.max(10, Number(slideshow.interval) || 20);
  const signature = `${Boolean(slideshow.enabled)}:${interval}`;
  if (signature === backgroundSlideshowSignature) return;
  window.clearInterval(backgroundSlideshowTimer);
  backgroundSlideshowTimer = null;
  backgroundSlideshowSignature = signature;
  if (!slideshow.enabled) { slideshowBackgroundId = ''; return; }
  slideshowBackgroundId = effectiveAppearance(false).background.id;
  backgroundSlideshowTimer = window.setInterval(() => {
    const backgrounds = allBackgrounds();
    const currentIndex = Math.max(0, backgrounds.findIndex((item) => item.id === slideshowBackgroundId));
    const next = backgrounds[(currentIndex + 1) % backgrounds.length];
    slideshowBackgroundId = next.id;
    showAppBackground(next, true);
    renderBackgroundOptions();
  }, interval * 1000);
}

function effectiveAppearance(includeSlideshow = true) {
  const useDefault = state.appearance?.mode !== 'override';
  const backgrounds = allBackgrounds();
  const defaultBackground = backgrounds.find((item) => item.id === state.appearance?.defaultBackgroundId) || campusBackgrounds[0];
  const selectedBackground = useDefault ? defaultBackground : backgrounds.find((item) => item.id === state.background) || defaultBackground;
  const background = includeSlideshow && state.appearance?.slideshow?.enabled && slideshowBackgroundId
    ? backgrounds.find((item) => item.id === slideshowBackgroundId) || selectedBackground
    : selectedBackground;
  return { theme: useDefault ? state.platform?.defaultTheme || 'violet' : state.theme, background };
}

function renderBackgroundOptions() {
  const effective = effectiveAppearance();
  $('#backgroundOptions').innerHTML = allBackgrounds().map((background) => `
    <div class="background-option-wrap">
    <button class="background-option ${effective.background.id === background.id ? 'selected' : ''}" data-background="${background.id}" style="${escapeHtml(`--option-image:url('${String(background.file).replaceAll("'", '%27')}')`)}" aria-pressed="${effective.background.id === background.id}">
      <span><strong>${escapeHtml(background.name)}</strong><small>${escapeHtml(background.detail)}</small></span>
    </button>${background.custom ? `<button class="background-remove" type="button" data-background-remove="${background.id}" aria-label="Remove ${escapeHtml(background.name)}">Remove</button>` : ''}</div>`).join('');
  $$('[data-appearance-mode]').forEach((button) => {
    const active = button.dataset.appearanceMode === state.appearance.mode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-checked', String(active));
  });
  $('#appearanceOverrides').classList.toggle('using-defaults', state.appearance.mode !== 'override');
  const defaultBackground = allBackgrounds().find((item) => item.id === state.appearance.defaultBackgroundId) || campusBackgrounds[0];
  $('#backgroundDefaultStatus').textContent = `Default: ${defaultBackground.name}`;
  $('#backgroundSetDefault').textContent = effective.background.id === defaultBackground.id ? 'Current background is default' : 'Set selected as default';
  $('#backgroundSlideshowEnabled').checked = Boolean(state.appearance.slideshow?.enabled);
  $('#backgroundSlideshowInterval').value = String(state.appearance.slideshow?.interval || 20);
  $('#backgroundSlideshowInterval').disabled = !state.appearance.slideshow?.enabled;
}

function renderGeneratedNames() {
  const scope = state.generatedNames?.scope || 'Tamil Nadu';
  const pool = generatedProfilePool();
  const samples = pool.filter((_, index) => index % Math.max(1, Math.floor(pool.length / 12)) === 0).slice(0, 12);
  const select = $('#generatedNameScope');
  if (select) select.value = scope;
  const preview = $('#generatedNamePreview');
  if (preview) preview.innerHTML = samples.map((profile) => `<span><strong>${escapeHtml(profile.alias)}</strong><small>${escapeHtml(profile.profile.location.region)} · ${escapeHtml(profile.profile.location.country)}</small></span>`).join('');
}

function renderAccountSettings() {
  const host = $('#accountSettingsBody');
  const account = currentAccount();
  if (!account) {
    host.innerHTML = `<div class="account-guest"><strong>${isGuest() ? 'Guest session' : 'No signed-in account'}</strong><p>Exploration preferences can stay local, but publishing and personal journey ownership require a profile.</p><button class="button-primary" type="button" data-account-action="signin">Return to sign in</button></div>`;
    return;
  }
  const preferences = account.communication || {};
  host.innerHTML = `<form class="account-settings-form" id="accountSettingsForm"><div class="account-identity"><span>${escapeHtml(account.displayName.slice(0, 2).toUpperCase())}</span><div><strong>${escapeHtml(account.displayName)}</strong><small>${escapeHtml(account.role)} profile · ${escapeHtml(account.email)}</small></div><em>${account.emailVerified ? 'Email verified' : 'Email not verified in prototype'}</em></div><div class="account-form-grid"><label>Display name<input name="displayName" required maxlength="40" value="${escapeHtml(account.displayName)}"></label><label>Preferred language<select name="language">${['English','Tamil','Hindi','Telugu','Kannada','Malayalam','Bengali','Marathi'].map((item) => `<option ${account.language === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label>Timezone<select name="timezone"><option ${account.timezone === 'Asia/Kolkata' ? 'selected' : ''} value="Asia/Kolkata">India · Asia/Kolkata</option><option value="UTC" ${account.timezone === 'UTC' ? 'selected' : ''}>UTC</option></select></label><label>Profile visibility<select name="visibility"><option ${account.visibility === 'Private' ? 'selected' : ''}>Private</option><option ${account.visibility === 'Pseudonymous' ? 'selected' : ''}>Pseudonymous</option></select></label></div><fieldset class="communication-preferences"><legend>Email communication</legend><label><input type="checkbox" name="newsletter" ${preferences.newsletterSubscribed ? 'checked' : ''}> Monthly career field notes</label><label><input type="checkbox" name="familyDigest" ${preferences.familyDigest ? 'checked' : ''}> Family decision digest</label><label><input type="checkbox" name="productUpdates" ${preferences.productUpdates ? 'checked' : ''}> Product and platform updates</label><small>Each category is independent. Transactional account and safety messages would remain separate in production.</small></fieldset><div class="account-actions"><button class="button-primary">Save profile and preferences</button><button class="button-secondary" type="button" data-account-action="signout">Sign out</button></div></form>`;
}

function filteredResearchRecords() {
  const term = state.research.search.trim().toLowerCase();
  return researchCatalog.filter((item) => {
    const haystack = `${item.title} ${item.summary} ${item.category} ${item.researchDomain} ${item.geographyLabel} ${(item.tags || []).join(' ')} ${(item.facts || []).map((fact) => `${fact.label} ${fact.value}`).join(' ')}`.toLowerCase();
    return (state.research.category === 'All evidence' || item.researchDomain === state.research.category)
      && (state.research.geography === 'All' || item.geographyLabel.includes(state.research.geography))
      && (!state.research.savedOnly || state.research.saved.includes(item.id))
      && (!term || haystack.includes(term));
  });
}

function researchCheckedAt(item) {
  return item.sources?.map((source) => source.checkedAt).filter(Boolean).sort().at(-1) || 'Check live source';
}

function renderResearchShelf() {
  const body = $('#researchPanelBody');
  if (!body) return;
  const detail = researchCatalog.find((item) => item.id === state.research.detailId);
  if (detail) {
    body.innerHTML = `<button class="button-quiet research-back" data-research-back>← Back to research index</button><article class="research-detail"><span>${escapeHtml(detail.researchDomain)} · ${escapeHtml(detail.category)}</span><h2>${escapeHtml(detail.title)}</h2><p>${escapeHtml(detail.summary)}</p><div class="research-fact-grid">${detail.facts.map((fact) => `<section><small>${escapeHtml(fact.label)}</small><strong>${escapeHtml(String(fact.value))}</strong></section>`).join('')}</div><h3>Decision checks</h3><ol>${detail.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join('')}</ol><h3>Official evidence</h3><div class="research-source-list">${detail.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(source.label)}</span><small>Checked ${escapeHtml(source.checkedAt)} · open ↗</small></a>`).join('')}</div><p class="research-caution"><strong>Limitation:</strong> ${escapeHtml(detail.caveat)}</p><div class="research-detail-actions"><button class="button-secondary" data-research-save="${detail.id}">${state.research.saved.includes(detail.id) ? 'Saved ★' : 'Save evidence ☆'}</button><button class="button-secondary" data-action="research-compare" data-id="${detail.id}">${state.research.compare.includes(detail.id) ? 'Remove from compare' : 'Add to compare'}</button></div></article>`;
    return;
  }
  body.innerHTML = renderResearch();
}

function openResearchShelf(id = '') {
  closeJourneyInspector();
  closeSettings();
  closeAdminSettings();
  state.research.detailId = id;
  renderResearchShelf();
  renderResearchRail();
  document.body.classList.add('research-open');
  openRightDrawer('research');
}

function renderResearch() {
  if (!researchDomains.includes(state.research.category)) state.research.category = 'All evidence';
  const items = filteredResearchRecords();
  const compareItems = state.research.compare.map((id) => researchCatalog.find((item) => item.id === id)).filter(Boolean);
  const officialSources = new Set(researchCatalog.flatMap((item) => item.sources.map((source) => source.url))).size;
  const compareKeys = [...new Set(compareItems.flatMap((item) => Object.keys(item.compare || {})))].slice(0, 7);
  const researchTitle = state.research.savedOnly ? 'Saved research' : state.research.category === 'All evidence' ? 'Research library' : state.research.category;
  const researchScope = state.research.savedOnly ? 'YOUR SAVED RECORDS' : state.research.category === 'All evidence' ? 'ALL RESEARCH AREAS' : 'RESEARCH AREA';
  const compareColumns = compareItems.map((item) => `<div class="research-compare-head"><small>${escapeHtml(item.category)}</small><strong>${escapeHtml(item.title)}</strong><button data-action="research-compare" data-id="${item.id}">Remove</button></div>`).join('');
  const compareRows = compareKeys.map((key) => {
    const values = compareItems.map((item) => `<div>${escapeHtml(String(item.compare?.[key] ?? 'Not stated'))}</div>`).join('');
    return `<div class="research-compare-label">${escapeHtml(titleCase(key))}</div>${values}`;
  }).join('');
  const compareWorkbench = compareItems.length ? `<section class="research-compare-workbench"><header><div><p class="eyebrow">SIDE-BY-SIDE EVIDENCE</p><h3>${compareItems.length} records selected</h3></div><button class="button-quiet" data-action="research-compare-clear">Clear comparison</button></header><div class="research-compare-table" style="--research-compare:${compareItems.length}"><div class="research-compare-label">Evidence</div>${compareColumns}${compareRows}</div></section>` : '';
  const researchRows = items.map((item) => `<article><button class="research-record-main" data-action="research-detail" data-id="${item.id}"><span>${escapeHtml(item.category)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.summary)}</p></button><span>${escapeHtml(item.geographyLabel)}</span><time datetime="${researchCheckedAt(item)}">${escapeHtml(researchCheckedAt(item))}</time><div><button data-action="research-compare" data-id="${item.id}" aria-pressed="${state.research.compare.includes(item.id)}">${state.research.compare.includes(item.id) ? '✓ Compare' : '+ Compare'}</button><button data-action="research-quick-save" data-id="${item.id}" aria-pressed="${state.research.saved.includes(item.id)}">${state.research.saved.includes(item.id) ? '★' : '☆'}</button></div></article>`).join('');
  const researchEmpty = `<div class="research-empty"><strong>No evidence matches.</strong><span>${state.research.savedOnly ? 'Save evidence from another research domain first.' : 'Clear one filter or try a broader search.'}</span></div>`;
  return `<div class="research-view"><header class="research-workspace-head compact-page-intro"><div><p class="eyebrow">${researchScope} · UPDATED 09 AUG 2026</p><h2>${escapeHtml(researchTitle)}</h2></div><div class="research-head-metrics"><span><strong>${items.length}</strong>shown</span><span><strong>${officialSources}</strong>sources</span><span><strong>${state.research.saved.length}</strong>saved</span></div></header><form class="research-command" id="researchDrawerFilters"><label class="research-page-search"><span>Search this research lane</span><input id="researchSearch" type="search" value="${escapeHtml(state.research.search)}" placeholder="Try TNEA, CBSE, scholarship, placement, Chennai…"></label><label><span>Geography</span><select name="geography"><option>All</option><option ${state.research.geography === 'Tamil Nadu' ? 'selected' : ''}>Tamil Nadu</option><option ${state.research.geography === 'India' ? 'selected' : ''}>India</option></select></label><button type="button" class="research-saved-summary ${state.research.savedOnly ? 'active' : ''}" data-research-saved-toggle aria-pressed="${state.research.savedOnly}">★ ${state.research.saved.length} saved</button></form>${compareWorkbench}<section class="research-data-table" aria-label="Research records"><div class="research-data-head"><span>Research record</span><span>Geography</span><span>Checked</span><span>Actions</span></div>${researchRows || researchEmpty}</section></div>`;
}

function closeResearchShelf() {
  document.body.classList.remove('research-open');
  closeRightDrawer('research');
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
  const rail = $('#journeyRail');
  if (!rail) return;
  rail.innerHTML = journeyStops().map((stop) => `
    <button class="journey-stop ${stop.status} ${state.view === 'journey-stage' && state.activeJourneyStage === stop.id ? 'current' : ''}" data-journey-stage="${stop.id}" aria-label="Open ${stop.step}: ${stop.title}">
      <small>${stop.step}</small><strong>${stop.title}</strong><em class="ai-stop-tag ${state.aiJourney.stageAnswers[stop.id]?.trim() ? 'done' : ''}">AI ${state.aiJourney.stageAnswers[stop.id]?.trim() ? '✓' : '?'}</em>
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
      recommendation: journey.experiences.length ? `${journey.experiences.length} experience types are tracked. Add meaningful outcomes to Accomplishments.` : 'Choose at least two different experiences before narrowing a specialisation.',
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
  document.body.classList.add('journey-open');
  openRightDrawer('journey', { kicker: content.step, title: content.title });
}

const noNoOptions = [
  'Heavy rote learning', 'Coding-heavy daily work', 'Blood / clinical exposure', 'Desk-only routine', 'Field-heavy routine',
  'Constant public interaction', 'Mostly isolated work', 'High-pressure sales', 'Night / shift work', 'Frequent travel or relocation',
  'Long qualification path', 'Competitive-exam dependency', 'High financial risk', 'Unpredictable income',
];

const yearMilestoneConfig = {
  grade10: {
    step: '01 · GRADE 10', title: 'Eliminate poor-fit worlds before choosing a stream',
    purpose: 'Leave Grade 10 with fewer false choices, a truthful view of your effort, and two directions worth testing—not a borrowed dream.',
    copy: 'Most students cannot name a career yet. Start with the work, environments, constraints, and trade-offs they already know they do not want.',
    noteLabel: 'After removing the NO-NOs, what activities or problems are still worth testing?',
    milestones: ['Write a provisional identity and legacy statement', 'Write the first NO-NO list', 'Complete the three student assessments', 'Compare all seven recognised route families', 'Map subject gates for surviving choices', 'Sample six subject and work activities', 'Talk to three students or working adults', 'Run two career mini-experiments', 'Compare real schools, boards, cost and commute', 'Choose a primary route and credible alternate', 'Write the first 30-day Grade 11 bridge'],
  },
  grade11: {
    step: '02 · GRADE 11', title: 'Build the foundation that later projects depend on',
    purpose: 'Build study habits and subject foundations strong enough to support future choices without sacrificing health or curiosity.',
    copy: 'Settle into the route, close foundational gaps, establish a sustainable study rhythm, and test one real problem before chasing impressive titles.',
    noteLabel: 'Which subject or problem still holds your attention after the difficult parts?',
    milestones: ['Stabilise weekly study rhythm', 'Clear foundational backlogs', 'Track subject-level rank or percentile', 'Aim for top-decile consistency where realistic', 'Complete one real-world mini-project', 'Speak with a practitioner or mentor', 'Review the NO-NO list with evidence'],
  },
  grade12: {
    step: '03 · GRADE 12', title: 'Choose the right course—not merely the famous entrance',
    purpose: 'Make one evidence-backed course decision with affordable, realistic alternatives and no preventable deadline failures.',
    copy: 'Boards, entrances, course curricula, cost, location, alternatives, and actual student work must resolve into one defensible choice.',
    noteLabel: 'Which course family survives curriculum, cost, workload, location, and NO-NO checks?',
    milestones: ['Protect board-exam readiness', 'Verify entrance eligibility and dates', 'Compare actual course curricula', 'Compare cost, support and location', 'Track top-decile or target rank', 'Build primary and alternate shortlists', 'Submit documents and applications early'],
  },
  college1: {
    step: '04 · COLLEGE YEAR 1', title: 'Confirm that the course fits through foundations',
    purpose: 'Learn how college works, protect the fundamentals, and find people and environments that help you grow with integrity.',
    copy: 'The first year is for adapting, learning the foundation properly, sampling clubs and labs, and noticing which work remains interesting outside the brochure.',
    noteLabel: 'Which foundation, lab, club, or problem makes you want to go deeper?',
    milestones: ['Understand the complete curriculum map', 'Build a GPA / rank baseline', 'Aim for top-decile habits—not grade anxiety', 'Join one relevant club or lab', 'Complete one small foundation project', 'Build faculty and peer relationships', 'Review whether the course still fits'],
  },
  college2: {
    step: '05 · COLLEGE YEAR 2', title: 'Find the special interest that should shape your choices',
    purpose: 'Turn broad coursework into a personally meaningful direction through electives, practice, mentorship, and a reviewable project.',
    copy: 'Choose electives, tools, communities, and projects around an emerging special interest. A course becomes useful when the student gives it direction.',
    noteLabel: 'What special interest should guide electives, skill-building, and the next project?',
    milestones: ['Choose aligned electives or modules', 'Name one emerging special interest', 'Build one special-interest project', 'Maintain strong rank / GPA evidence', 'Start a public or reviewable portfolio', 'Shadow work or take a short internship', 'Find one domain mentor'],
  },
  college3: {
    step: '06 · COLLEGE YEAR 3', title: 'Choose the project and experience that signal real direction',
    purpose: 'Create credible proof of what you can do through a serious project and real workplace, research, or community experience.',
    copy: 'A substantial project plus an internship, apprenticeship, research role, or field experience often becomes the bridge to campus interviews and early work.',
    noteLabel: 'Which project problem and experience best align with your special interest and target work?',
    milestones: ['Select a career-aligned project problem', 'Choose a credible project guide', 'Secure internship / research / field experience', 'Document decisions, failures and outcomes', 'Deepen one differentiating skill', 'Maintain top-decile / strong academic evidence', 'Begin role-specific interview practice', 'Speak with recent alumni'],
  },
  collegeFinal: {
    step: '07 · FINAL YEAR', title: 'Convert the right project into a campus opportunity',
    purpose: 'Enter placement season able to explain your work honestly, choose roles by daily reality, and execute a strong alternate plan.',
    copy: 'The capstone, rank, portfolio, alumni intelligence, interview preparation, and company-role fit must converge before campus recruitment begins.',
    noteLabel: 'Which campus roles genuinely fit the daily work you want—and which offers are only attractive by title?',
    milestones: ['Finish a defensible flagship project', 'Explain every portfolio claim unaided', 'Keep final-year rank / GPA strong', 'Map campus companies to actual roles', 'Prepare resume and role-specific stories', 'Practise aptitude / technical / case rounds', 'Run repeated mock interviews', 'Use alumni and placement-cell evidence', 'Win a campus offer or execute alternate plan'],
  },
  firstJob: {
    step: '08 · FIRST JOB', title: 'Use the first role as a launchpad, not a verdict',
    purpose: 'Become dependable, keep learning, build financial stability, and gather evidence for a better-aligned next move.',
    copy: 'The first offer may not be the dream job. Track learning, work quality, portfolio evidence, mentors, mobility, and financial runway so the next move becomes stronger.',
    noteLabel: 'Which parts of this role move you toward dream work, and which gaps require the next move?',
    milestones: ['Learn the real workflow and standards', 'Deliver measurable outcomes', 'Build one compounding deep skill', 'Find internal and external mentors', 'Record evidence without exposing employer data', 'Review fit every 6–12 months', 'Prepare for an internal or external move', 'Protect a financial and learning runway'],
  },
  dreamJob: {
    step: '09 · YEARS 1–12', title: 'Reach, test, and sustain dream work',
    purpose: 'Move toward work whose daily practice, relationships, values, and contribution remain meaningful—not merely impressive.',
    copy: 'Treat six to twelve years as a deliberate mobility window—not an expiry date. Dream work is defined by daily problems, people, autonomy, values, and contribution, not a single employer logo.',
    noteLabel: 'Describe the daily work, problems, people, environment, and impact you truly desire—without using a job title.',
    milestones: ['Define dream work by daily reality', 'Map capability and credibility gaps', 'Produce high-signal outcomes', 'Build trusted practitioner relationships', 'Make evidence-led role moves', 'Run repeated interview cycles', 'Review progress at years 1, 3, 6, 9 and 12', 'Sustain growth, health, values and impact once there', 'Redefine dream work when priorities change', 'Keep meaningful alternatives alive'],
  },
};

const stagePhaseLabels = {
  grade10: [['north-star','North star'],['eliminate','Eliminate'],['assess','Assess'],['routes','Map routes'],['test','Reality tests'],['compare','Compare'],['decide','Decide & bridge']],
  grade11: [['purpose','Reconfirm'],['foundation','Foundations'],['system','Study system'],['proof','First proof'],['review','Review route']],
  grade12: [['targets','Target matrix'],['exams','Boards & entrances'],['verify','Verify institutions'],['apply','Applications'],['choose','Choose & hand over']],
  college1: [['adapt','Understand'],['foundation','Foundations'],['sample','Sample worlds'],['people','Relationships'],['review','Review fit']],
  college2: [['interest','Name the question'],['stack','Capability stack'],['project','Build project'],['field','Enter the field'],['plan','Plan year 3']],
  college3: [['target-work','Target work'],['problem','Flagship problem'],['experience','Real experience'],['proof','Build evidence'],['placement','Placement map']],
  collegeFinal: [['flagship','Finish flagship'],['opportunities','Map opportunities'],['interviews','Interview ready'],['execute','Placement season'],['alternate','Alternate route']],
  firstJob: [['learn','Learn system'],['deliver','Trusted work'],['compound','Compound skill'],['mobility','Build mobility'],['purpose','Return to purpose']],
  dreamJob: [['reality','Daily reality'],['gaps','Map gaps'],['signal','High-signal proof'],['moves','Repeated moves'],['sustain','Sustain & redefine']],
};

function stageProcess(stageId) {
  const labels = stagePhaseLabels[stageId] || stagePhaseLabels.grade10;
  const milestones = yearMilestoneConfig[stageId].milestones;
  return labels.map(([id, label], index) => {
    const start = Math.floor(index * milestones.length / labels.length);
    const end = Math.floor((index + 1) * milestones.length / labels.length);
    return { id, label, milestones: milestones.slice(start, Math.max(start + 1, end)) };
  });
}

const grade10RouteAtlas = [
  ['Science · PCM', 'Mathematics, physics and chemistry; school combinations vary.', 'Engineering, computing, architecture, physical sciences and many cross-disciplinary degrees.', 'Test sustained mathematics and abstract problem-solving; verify course-specific subject rules.'],
  ['Science · PCB / PCMB', 'Biology, physics and chemistry, with mathematics where offered.', 'Medicine, allied health, life sciences, agriculture and research routes.', 'Test clinical/lab reality, long training, competitive gates and any blood or care-work boundary.'],
  ['Commerce', 'Accountancy, business studies and economics, with mathematics or applied mathematics where available.', 'Finance, accounting, law, management, economics, analytics and enterprise.', 'Compare numerical, regulatory, client and commercial work—not a salary stereotype.'],
  ['Humanities / Arts', 'Languages and combinations such as history, politics, geography, sociology, psychology, economics or arts.', 'Law, policy, design, media, social sciences, education, research and public service.', 'Check writing, reading, fieldwork and target-course requirements; this is not a lower-rank stream.'],
  ['Polytechnic diploma', 'A branch-specific technical diploma, commonly entered after Grade 10 under state rules.', 'Technical work, apprenticeship, employment and possible lateral progression subject to current rules.', 'Verify approval, laboratories, branch fit, cost, placements and Tamil Nadu admission rules.'],
  ['ITI / skill-first', 'Trade-based practical training under recognised schemes; duration and eligibility vary by trade.', 'Skilled trades, apprenticeship, employment, enterprise and further learning.', 'Verify NCVT/SCVT recognition, real workshop exposure, safety, apprenticeship links and progression.'],
  ['NIOS / flexible senior secondary', 'Recognised open-school route with flexible subject and pace choices.', 'Senior-secondary certification and later study where the chosen subjects satisfy eligibility.', 'Verify practical requirements, subject combinations, learner support and target-institution acceptance.'],
];

const stageGuideContent = {
  grade10: { title: 'Every recognised route deserves an honest comparison.', checks: ['Start with who you want to become and the contribution you want to make.', 'Map target courses to required subjects before selecting a school combination.', 'Compare total cost, commute, language, safety, support, laboratories and reversibility.', 'Keep a primary route and an alternate that does not fail for the same reason.'] },
  grade11: { title: 'Build foundations before optimising for an entrance rank.', checks: ['Audit subject gaps and practical obligations.', 'Create a sustainable study, sleep and recovery rhythm.', 'Complete one real problem or mini-project.', 'Distinguish adjustment difficulty from genuine route mismatch.'] },
  grade12: { title: 'Turn options into an executable decision.', checks: ['Use one board, entrance and application calendar.', 'Verify eligibility, recognition and deadlines officially.', 'Compare curriculum, student work, total cost and alternate exits.', 'Prepare documents, scholarships and a first-semester handover plan.'] },
  college1: { title: 'Validate the course through lived experience.', checks: ['Understand curriculum, grading, integrity rules and support.', 'Protect foundations and prevent backlogs.', 'Sample clubs, labs, studios and service worlds.', 'Find trusted peers, seniors and faculty.'] },
  college2: { title: 'Turn broad study into a special-interest hypothesis.', checks: ['Choose an important problem, not a fashionable tool.', 'Align electives and a capability stack.', 'Build a reviewable project for a real user.', 'Seek mentor critique and field exposure.'] },
  college3: { title: 'Create credible external proof.', checks: ['Define target work by daily tasks.', 'Choose a feasible, purpose-linked flagship problem.', 'Secure internship, research, apprenticeship or field experience.', 'Map current role descriptions to evidence gaps.'] },
  collegeFinal: { title: 'Convert proof into opportunity.', checks: ['Defend every project claim unaided.', 'Map campus companies to actual roles.', 'Practise aptitude, technical, case and behavioural rounds.', 'Protect a credible off-campus or further-study alternative.'] },
  firstJob: { title: 'Use employment to compound capability and choice.', checks: ['Learn real standards and stakeholders.', 'Deliver measurable, ethical outcomes.', 'Keep portfolio-safe evidence and mentors.', 'Review fit and mobility every 6–12 months.'] },
  dreamJob: { title: 'A company is an environment; meaningful work is the destination.', checks: ['Define problems, people, autonomy, pace and contribution.', 'Separate capability gaps from access gaps.', 'Make evidence-led moves without an artificial expiry date.', 'Reassess health, relationships, values and impact after arrival.'] },
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

const stageLearningBlueprints = {
  grade10: {
    outcome: 'Choose Grade 11 subjects from evidence—not prestige, fear, or family habit.',
    learn: [
      ['Core foundations', 'Strengthen mathematics, science, language and social-science fundamentals; record where effort produces improvement.', 'study-guide', 'grade11'],
      ['Route literacy', 'Learn what PCM, PCB/PCMB, Commerce, Humanities, Polytechnic, ITI and flexible schooling actually require.', 'entrance-exams', 'planning'],
      ['Human breadth', 'Try one arts, language, craft, sport or service discipline long enough to notice genuine energy.', 'traditional', 'Language & Knowledge'],
    ],
    assess: [
      ['Know Thyself', 'Complete the work-reality scan and name hard constraints before choosing a route.', 'compass', ''],
      ['Discovery + student assessment', 'Test interests, work values, personality, desire and current capability.', 'assessments', 'signals'],
      ['Subject evidence check', 'Compare marks with unaided problem-solving, curiosity, recovery after difficulty and teacher feedback.', 'assessments', 'career:skills'],
    ],
    build: ['Run six short subject trials across at least three route families.', 'Interview one senior student and one practitioner from each surviving route.', 'Create a route matrix covering subjects, workload, cost, commute and reversibility.'],
    verify: ['Two viable routes remain.', 'Required subjects are verified.', 'A primary and alternate Grade 11 plan are written.'],
  },
  grade11: {
    outcome: 'Finish the year with strong foundations, a sustainable study system and the first proof of applied ability.',
    learn: [
      ['Grade 11 subject mastery', 'Study the actual syllabus in cumulative weekly blocks; close prerequisite gaps before coaching speed.', 'study-guide', 'grade11'],
      ['Digital and AI literacy', 'Learn responsible research, spreadsheets, data handling and AI verification as supporting tools.', 'certifications', 'Digital & AI'],
      ['Communication practice', 'Build clear writing, explanation and presentation alongside technical or academic study.', 'certifications', 'Employability & Communication'],
    ],
    assess: [
      ['Skills confidence', 'Rate only capabilities you can demonstrate, then compare the result with teacher feedback and work samples.', 'assessments', 'career:skills'],
      ['Work style', 'Test concentration, collaboration, structure and recovery under a real Grade 11 workload.', 'assessments', 'career:work-style'],
      ['Monthly mastery audit', 'Use unaided quizzes, error logs and teach-back—not hours studied—as the evidence.', 'study-guide', 'grade11'],
    ],
    build: ['Complete one syllabus-linked mini-project with a real question and documented method.', 'Explain one difficult concept each month without notes or AI.', 'Keep an error log showing correction and retest.'],
    verify: ['Foundational backlogs are controlled.', 'Study rhythm is sustainable.', 'One reviewable project and teacher critique exist.'],
  },
  grade12: {
    outcome: 'Convert course intent into board readiness, verified applications and affordable alternatives.',
    learn: [
      ['Grade 12 mastery', 'Prioritise board concepts, past-paper patterns, practicals and timed retrieval.', 'study-guide', 'grade12'],
      ['Entrance preparation', 'Prepare only for exams attached to a verified course plan; maintain one calendar for dates and documents.', 'entrance-exams', 'catalogue'],
      ['Application communication', 'Practise statements, portfolios, interviews and professional communication where the route requires them.', 'certifications', 'Employability & Communication'],
    ],
    assess: [
      ['Decision readiness', 'Check whether the shortlist is based on curriculum, affordability, eligibility and lived evidence.', 'assessments', 'career:readiness'],
      ['Timed capability checks', 'Run board and entrance mocks, classify errors and retest weak concepts.', 'study-guide', 'grade12'],
      ['Environment fit', 'Assess campus size, language, location, support, pace and financial constraints.', 'assessments', 'career:environment'],
    ],
    build: ['Create primary, alternate and financial-safety course lists.', 'Maintain a live deadline, document and scholarship tracker.', 'Prepare a first-semester foundation bridge after exams.'],
    verify: ['Eligibility checked on official sources.', 'Applications submitted early.', 'Every option passes cost and course-content checks.'],
  },
  college1: {
    outcome: 'Understand the discipline, master its foundations and verify whether the course deserves deeper commitment.',
    learn: [
      ['Course foundations', 'Map prerequisites, core papers, laboratories, grading and academic-integrity rules from the full curriculum.', 'study-guide', 'grade12'],
      ['Foundational digital skill', 'Build spreadsheet, research, presentation and responsible AI competence useful in any discipline.', 'certifications', 'Digital & AI'],
      ['Wellbeing discipline', 'Use a sustainable physical or contemplative practice to protect sleep, attention and recovery.', 'traditional', 'Yoga & Wellbeing'],
    ],
    assess: [
      ['Interest pattern', 'Retake interest assessment after real labs, lectures, clubs and assignments—not during orientation.', 'assessments', 'career:interests'],
      ['Learning capability', 'Validate conceptual understanding through unaided explanation and practical work.', 'assessments', 'career:skills'],
      ['Course-fit review', 'Compare expectations with actual curriculum, peer culture and daily work.', 'assessments', 'career:environment'],
    ],
    build: ['Complete one small foundation project from problem to reflection.', 'Sample one lab, club, studio, service group or student team.', 'Build relationships with two peers, one senior and one faculty member.'],
    verify: ['No unmanaged foundational backlog.', 'One work sample is explainable unaided.', 'Course fit is reviewed with evidence.'],
  },
  college2: {
    outcome: 'Choose a special-interest direction and assemble the capability stack needed to investigate it seriously.',
    learn: [
      ['Domain electives', 'Select modules because they deepen a question or problem—not because they are easy or fashionable.', 'study-guide', 'grade12'],
      ['Applied capability', 'Add one relevant technical, business, data, health, sustainability or communication course.', 'certifications', 'Data & Software'],
      ['Creative range', 'Use theatre, storytelling, visual craft, music or language to strengthen observation and communication.', 'traditional', 'Theatre & Storytelling'],
    ],
    assess: [
      ['Capability profile', 'Compare self-rating with assignments, mentor critique and a real user’s response.', 'assessments', 'student'],
      ['Career motivation', 'Separate love of the problem from status, salary or tool fascination.', 'assessments', 'career:motivation'],
      ['Values check', 'Identify the people affected, ethical boundaries and kinds of contribution worth sustaining.', 'assessments', 'career:values'],
    ],
    build: ['Publish one reviewable special-interest project for a defined user.', 'Conduct five problem interviews or field observations.', 'Ask a domain mentor to critique the question, method and next skill gap.'],
    verify: ['A special-interest question is named.', 'Electives and skill courses support it.', 'External critique changed the work.'],
  },
  college3: {
    outcome: 'Produce credible external proof through a serious project and real field experience.',
    learn: [
      ['Role-specific depth', 'Study tools and concepts repeatedly requested in target-role descriptions.', 'certifications', 'Data & Software'],
      ['Workplace communication', 'Practise briefs, documentation, presentations, feedback and professional correspondence.', 'certifications', 'Employability & Communication'],
      ['Research and verification', 'Learn evidence quality, measurement, consent, attribution and limits relevant to the project.', 'certifications', 'Digital & AI'],
    ],
    assess: [
      ['Skills gap audit', 'Map target-role tasks against demonstrated, developing and missing capabilities.', 'assessments', 'career:skills'],
      ['Environment fit', 'Compare internship realities: pace, manager, team, field/desk mix and ethics.', 'assessments', 'career:environment'],
      ['Project defence', 'Explain the problem, decisions, failures and results without slides or AI assistance.', 'evidence', ''],
    ],
    build: ['Complete an internship, apprenticeship, research role or community field placement.', 'Build a flagship project with version history, user feedback and measured outcomes.', 'Interview recent alumni about actual entry work and hiring evidence.'],
    verify: ['One external supervisor can verify the work.', 'Portfolio shows decisions and outcomes.', 'Target roles are supported by evidence.'],
  },
  collegeFinal: {
    outcome: 'Turn academic and field evidence into a role-specific campus and off-campus launch.',
    learn: [
      ['Selection preparation', 'Practise aptitude, technical, case, portfolio and behavioural rounds used by target roles.', 'certifications', 'Employability & Communication'],
      ['Role and employer literacy', 'Compare daily tasks, team quality, location, contract, learning and ethical consequence.', 'jobs', 'atlas'],
      ['Gap-specific revision', 'Revise only the foundational and applied gaps exposed by mocks and job descriptions.', 'certifications', 'Data & Software'],
    ],
    assess: [
      ['Decision readiness', 'Test offer choices against role reality, learning, health, ethics and financial needs.', 'assessments', 'career:readiness'],
      ['Mock selection loops', 'Run repeated timed tests and interviews with scored feedback.', 'assessments', 'career:skills'],
      ['Evidence audit', 'Remove claims you cannot defend and strengthen the proof behind the remaining ones.', 'evidence', ''],
    ],
    build: ['Finish and defend one flagship capstone.', 'Create role-specific resume, portfolio and interview stories.', 'Run campus and alternate applications in parallel.'],
    verify: ['Every claim survives live questioning.', 'At least two launch routes are active.', 'Offers are compared by role—not logo alone.'],
  },
  firstJob: {
    outcome: 'Become dependable, compound one valuable capability and prepare an evidence-led next move.',
    learn: [
      ['Work system mastery', 'Learn stakeholders, standards, workflow, quality controls and the business or public purpose behind the role.', 'jobs', 'framework'],
      ['Deep-skill course', 'Choose one certification tied to repeated work—not a collection of badges.', 'certifications', 'Business & Entrepreneurship'],
      ['Ethical AI at work', 'Use AI with privacy, verification, attribution and clear personal accountability.', 'certifications', 'Digital & AI'],
    ],
    assess: [
      ['Work values', 'Compare stated company values with incentives, manager behaviour and consequences for others.', 'assessments', 'career:values'],
      ['Work style', 'Review energy, autonomy, people intensity, pace and learning after six months.', 'assessments', 'career:work-style'],
      ['Capability evidence', 'Separate tasks performed from outcomes delivered and skills independently repeatable.', 'evidence', ''],
    ],
    build: ['Deliver one measurable, ethical outcome.', 'Maintain a privacy-safe evidence log and quarterly reflection.', 'Build internal and external mentor relationships.'],
    verify: ['Core work is independently reliable.', 'One skill is compounding.', 'A stay, internal move or external move is evidence-backed.'],
  },
  dreamJob: {
    outcome: 'Reach and sustain meaningful work through deliberate capability, relationship and role moves.',
    learn: [
      ['Advanced specialisation', 'Study the hardest recurring problems in the desired work and build depth that survives tool changes.', 'certifications', 'Business & Entrepreneurship'],
      ['Leadership and stewardship', 'Learn to make decisions that protect people, quality, truth and long-term consequence.', 'jobs', 'framework'],
      ['Communication and teaching', 'Practise mentoring, writing and explanation so expertise benefits others.', 'certifications', 'Employability & Communication'],
    ],
    assess: [
      ['Role consequence review', 'Compare salary, daily work, company business model and karmic consequence without confusing title with service.', 'jobs', 'compare'],
      ['Values and motivation', 'Reassess what contribution, autonomy, mastery and relationships now matter.', 'assessments', 'career:motivation'],
      ['Life-fit audit', 'Review health, family, location, pace and financial runway before each major move.', 'compass', ''],
    ],
    build: ['Produce high-signal outcomes in the desired problem space.', 'Build trusted practitioner relationships through contribution.', 'Run small role experiments before irreversible moves.'],
    verify: ['The daily work—not only the title—is desirable.', 'Capability and access gaps are explicit.', 'Growth does not require abandoning health, integrity or relationships.'],
  },
};

function renderStageLearningPlan(stageId, completion, statusCounts, nextMilestones) {
  const plan = stageLearningBlueprints[stageId] || stageLearningBlueprints.grade10;
  const resource = ([title, copy, target, value]) => `<article><div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(copy)}</p></div><button data-action="stage-resource" data-target="${target}" data-value="${value || ''}">Open workspace →</button></article>`;
  return `<section class="stage-progress-summary panel stage-outcome-summary"><div><span>YEAR OUTCOME</span><h3>${escapeHtml(plan.outcome)}</h3><div class="stage-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${completion}"><span style="width:${completion}%"></span></div></div><dl><div><dt>Complete</dt><dd>${statusCounts.complete}</dd></div><div><dt>Doing</dt><dd>${statusCounts.doing}</dd></div><div><dt>Queued</dt><dd>${statusCounts.todo}</dd></div></dl>${nextMilestones.length ? `<aside><span>NEXT CHECKPOINT</span><strong>${escapeHtml(nextMilestones[0])}</strong></aside>` : ''}</section>
    <section class="stage-learning-plan"><header><div><span>LEARN · ASSESS · APPLY · VERIFY</span><h3>Your curriculum for this stage</h3><p>These are the learning and evidence blocks a student should actually complete this year. Dedicated pages remain available for deeper work.</p></div></header><div class="stage-learning-grid"><section class="stage-learning-lane learn"><div class="stage-lane-head"><span>01</span><div><strong>Learn and prepare</strong><small>Courses and knowledge</small></div></div>${plan.learn.map(resource).join('')}</section><section class="stage-learning-lane assess"><div class="stage-lane-head"><span>02</span><div><strong>Assess and validate</strong><small>Capability, fit and constraints</small></div></div>${plan.assess.map(resource).join('')}</section><section class="stage-learning-lane build"><div class="stage-lane-head"><span>03</span><div><strong>Apply in real work</strong><small>Projects and experience</small></div></div>${plan.build.map((item) => `<article><i>→</i><p>${escapeHtml(item)}</p></article>`).join('')}</section><section class="stage-learning-lane verify"><div class="stage-lane-head"><span>04</span><div><strong>Evidence gate</strong><small>Move on only when true</small></div></div>${plan.verify.map((item) => `<article><i>✓</i><p>${escapeHtml(item)}</p></article>`).join('')}</section></div></section>`;
}

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
  document.body.classList.add('journey-open');
  openRightDrawer('journey', { kicker: config.step, title: config.title });
}

function matchRow(career) {
  return `
    <div class="match-row">
      <span class="career-glyph">${career.glyph}</span>
      <span><strong>${career.title}</strong><small>${career.cluster}</small></span>
      <span class="fit-label">${career.fit.label}</span>
    </div>`;
}

function careerAssessmentResult(assessment) {
  const totals = Object.fromEntries(Object.keys(assessment.dimensions).map((key) => [key, []]));
  assessment.items.forEach((item) => {
    const raw = Number(state.assessments.answers[item.id] || 0);
    if (raw) totals[item.dimension].push(item.reverse ? 6 - raw : raw);
  });
  return Object.entries(totals).map(([key, values]) => ({
    key, score: values.length ? Math.round((values.reduce((sum, value) => sum + value, 0) / values.length - 1) * 25) : 0,
    label: assessment.dimensions[key][0], description: assessment.dimensions[key][1], recommendation: assessment.dimensions[key][2],
  })).sort((a, b) => b.score - a.score || a.label.localeCompare(b.label));
}

function careerAssessmentProgress(assessment) {
  const answered = assessment.items.filter((item) => Number(state.assessments.answers[item.id])).length;
  return { answered, total: assessment.items.length, percent: Math.round(answered / assessment.items.length * 100) };
}

function careerFieldMatches() {
  const available = {};
  careerAssessments.filter((assessment) => state.assessments.completed[assessment.id]).forEach((assessment) => {
    careerAssessmentResult(assessment).forEach((result) => { available[`${assessment.id}:${result.key}`] = { ...result, assessment: assessment.title }; });
  });
  return careerFieldProfiles.map((field) => {
    const contributions = Object.entries(field.signals).filter(([key]) => available[key]).map(([key, weight]) => ({ ...available[key], key, weight, contribution: available[key].score * weight }));
    const weight = contributions.reduce((sum, item) => sum + item.weight, 0);
    const score = weight ? Math.round(contributions.reduce((sum, item) => sum + item.contribution, 0) / weight) : 0;
    return { ...field, score, contributions: contributions.sort((a, b) => b.contribution - a.contribution).slice(0, 3) };
  }).filter((field) => field.contributions.length).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

function renderCareerAssessmentWorkspace() {
  const active = careerAssessments.find((item) => item.id === state.assessments.active) || careerAssessments[0];
  const progress = careerAssessmentProgress(active);
  const completed = Boolean(state.assessments.completed[active.id]);
  const results = completed ? careerAssessmentResult(active) : [];
  const completedAssessments = careerAssessments.filter((item) => state.assessments.completed[item.id]);
  const profileSignals = completedAssessments.map((assessment) => ({ assessment, result: careerAssessmentResult(assessment)[0] })).filter((item) => item.result);
  const fieldMatches = completedAssessments.length >= 3 ? careerFieldMatches().slice(0, 3) : [];
  const activeIndex = careerAssessments.findIndex((item) => item.id === active.id);
  const next = careerAssessments[activeIndex + 1];
  return `<div class="assessments-page view-enter">
    <section class="assessment-hero panel"><div><p class="eyebrow">FIND YOUR CALLING · SEVEN DISTINCT LENSES</p><h2>Career Assessments</h2><p>Build a wider picture of what you enjoy, value, can develop, and need from work. Each result explains its evidence and ends with something practical to verify.</p></div><div class="assessment-completion"><strong>${completedAssessments.length}/7</strong><span>lenses complete</span><i><b style="width:${completedAssessments.length / 7 * 100}%"></b></i></div></section>
    <nav class="assessment-picker" aria-label="Career assessments">${careerAssessments.map((assessment) => { const itemProgress = careerAssessmentProgress(assessment); const done = Boolean(state.assessments.completed[assessment.id]); return `<button type="button" class="panel ${assessment.id === active.id ? 'active' : ''} ${done ? 'complete' : ''}" data-action="assessment-open" data-id="${assessment.id}" aria-current="${assessment.id === active.id ? 'step' : 'false'}"><span>0${assessment.number}</span><div><strong>${escapeHtml(assessment.title)}</strong><small>${done ? 'Complete' : itemProgress.answered ? `${itemProgress.answered}/${itemProgress.total} answered` : assessment.short}</small></div><em>${done ? '✓' : '→'}</em></button>`; }).join('')}</nav>
    <div class="assessment-workspace">
      <main class="panel assessment-questionnaire">
        <header class="assessment-head"><div><span>ASSESSMENT 0${active.number} · ${escapeHtml(active.framework)} · ${escapeHtml(active.time)}</span><h3>${escapeHtml(active.title)}</h3><p>${escapeHtml(active.intro)}</p></div><div class="assessment-progress-ring" style="--progress:${progress.percent * 3.6}deg"><strong>${progress.percent}%</strong></div></header>
        <div class="assessment-scale-key"><span>Rate each statement</span>${active.scale.map((label,index) => `<small><b>${index + 1}</b>${escapeHtml(label)}</small>`).join('')}</div>
        <div class="assessment-questions">${active.items.map((item,index) => `<fieldset class="assessment-question ${state.assessments.answers[item.id] ? 'answered' : ''}"><legend><span>${String(index + 1).padStart(2,'0')}</span>${escapeHtml(item.text)}</legend><div role="radiogroup" aria-label="${escapeHtml(item.text)}">${active.scale.map((label,scaleIndex) => { const value = scaleIndex + 1; return `<label title="${escapeHtml(label)}"><input type="radio" name="assessment-${item.id}" value="${value}" data-assessment-answer="${item.id}" ${Number(state.assessments.answers[item.id]) === value ? 'checked' : ''}><span>${value}</span><small>${escapeHtml(label)}</small></label>`; }).join('')}</div></fieldset>`).join('')}</div>
        <footer class="assessment-actions"><button type="button" class="button-quiet" data-action="assessment-reset" data-id="${active.id}">Reset this assessment</button><div><span>${progress.answered} of ${progress.total} answered</span><button type="button" class="button-primary" data-action="assessment-complete" data-id="${active.id}" ${progress.answered < progress.total ? 'disabled' : ''}>${completed ? 'Refresh results' : 'See my results'} →</button></div></footer>
      </main>
      <aside class="assessment-insights" aria-live="polite">
        ${completed ? `<section class="panel assessment-result"><div class="assessment-result-title"><div><p class="eyebrow">YOUR ${escapeHtml(active.title).toUpperCase()} PROFILE</p><h3>${escapeHtml(results[0].label)} leads this lens</h3><p>Scores show relative emphasis within this assessment, not ability, worth, or probability of success.</p></div><strong>${results[0].score}</strong></div><div class="assessment-bars">${results.map((result) => `<div><span><b>${escapeHtml(result.label)}</b><em>${result.score}</em></span><i><b style="width:${result.score}%"></b></i><p>${escapeHtml(result.description)}</p></div>`).join('')}</div><div class="assessment-recommendation"><span>VERIFY THIS NEXT</span><strong>${escapeHtml(results[0].label)}</strong><p>${escapeHtml(results[0].recommendation)}</p></div>${next ? `<button type="button" class="button-secondary" data-action="assessment-open" data-id="${next.id}">Continue to ${escapeHtml(next.title)} →</button>` : '<button type="button" class="button-secondary" data-action="go" data-target="explore">Use results to explore careers →</button>'}</section>`
        : `<section class="panel assessment-waiting"><span>0${active.number}</span><p class="eyebrow">RESULTS WAITING</p><h3>Complete every statement.</h3><p>Your answers save as you go. Results appear only after the full lens is complete, so a partial pattern is not mistaken for a conclusion.</p><div><strong>${progress.answered}</strong><small>answered</small><strong>${progress.total - progress.answered}</strong><small>remaining</small></div></section>`}
        ${profileSignals.length >= 2 ? `<section class="panel assessment-profile"><p class="eyebrow">CROSS-ASSESSMENT PROFILE</p><h3>What repeats across lenses</h3><p>These are your leading signals from completed assessments. Look for combinations and tensions rather than one winning label.</p><div>${profileSignals.map(({assessment,result}) => `<span><small>${escapeHtml(assessment.title)}</small><strong>${escapeHtml(result.label)}</strong></span>`).join('')}</div></section>` : ''}
      </aside>
    </div>
    <section class="panel career-fit-report">
      <header><div><p class="eyebrow">COMPOSITE CAREER FIT REPORT</p><h3>Several fields, never one perfect job</h3><p>Inspired by Insightful Traits' career-field approach, this combines only your completed lenses across interests, strengths, work style, values, motivators, and environment. It is a shortlist for exploration—not a success forecast.</p></div><span>${fieldMatches.length ? `${completedAssessments.length} lenses combined` : `${Math.max(0, 3 - completedAssessments.length)} more ${Math.max(0, 3 - completedAssessments.length) === 1 ? 'lens' : 'lenses'} to unlock`}</span></header>
      ${fieldMatches.length ? `<div class="career-field-matches">${fieldMatches.map((field,index) => `<article><div class="career-field-glyph">${escapeHtml(field.glyph)}</div><div class="career-field-copy"><span>MATCH 0${index + 1} · RELATIVE ALIGNMENT ${field.score}</span><h4>${escapeHtml(field.title)}</h4><p>${escapeHtml(field.summary)}</p><div class="career-field-evidence"><strong>Strongest evidence</strong>${field.contributions.map((item) => `<span>${escapeHtml(item.assessment)} · ${escapeHtml(item.label)}</span>`).join('')}</div><div class="career-field-test"><strong>Run a micro-experiment</strong><p>${escapeHtml(field.experiment)}</p></div></div></article>`).join('')}</div><footer><p><strong>Use fit factors, not titles.</strong> Compare daily tasks, pace, structure, autonomy, teamwork, change, and the manager or institution around the role.</p><button class="button-secondary" data-action="go" data-target="explore">Explore career details →</button></footer>`
      : `<div class="career-fit-locked"><span>3+</span><div><h4>Complete any three lenses to build field matches.</h4><p>Using several completed assessments reduces the chance that one mood, label, or preference dominates the recommendation.</p></div></div>`}
    </section>
    <section class="panel assessment-method"><div><p class="eyebrow">METHOD & RESPONSIBLE USE</p><h3>Original, exploration-only adaptations</h3><p>These short tools are informed by established career-exploration frameworks but are not reproductions of proprietary clinical or hiring instruments. Use several lenses together, verify results through lived experience, and never use them to screen or exclude a person.</p></div><div>${careerAssessmentSources.map(([label,url]) => `<a href="${url}" target="_blank" rel="noopener">${escapeHtml(label)} <span>↗</span></a>`).join('')}</div></section>
  </div>`;
}

function renderSignalAssessment() {
  const selected = Object.values(state.signals).flat().length;
  return `<section class="signal-assessment">
    <header class="assessment-head"><div><p class="eyebrow">DISCOVERY ASSESSMENT · LIVED EVIDENCE</p><h2>What pulls you in?</h2><p>Choose up to four honest signals in each group. This is separate from the Know Thyself reality scan so attraction and aversion do not blur together.</p></div><div class="assessment-completion"><strong>${selected}</strong><span>signals chosen</span></div></header>
    <div class="signal-assessment-groups">${signalGroups.map((group, index) => `<section class="signal-card"><div class="signal-card-head"><span class="signal-number">${String(index + 1).padStart(2, '0')}</span><div><h3>${escapeHtml(group.title)}</h3><p>${escapeHtml(group.copy)}</p></div></div><div class="chip-grid">${group.choices.map((choice) => `<button class="choice-chip ${state.signals[group.key].includes(choice) ? 'selected' : ''}" data-action="signal" data-group="${group.key}" data-value="${choice}" aria-pressed="${state.signals[group.key].includes(choice)}">${escapeHtml(choice)}</button>`).join('')}</div></section>`).join('')}</div>
  </section>`;
}

function renderAssessments() {
  const hub = state.assessments.hub === 'reflections' ? 'signals' : state.assessments.hub || 'signals';
  const items = [
    ['signals', 'Discovery signals', `${Object.values(state.signals).flat().length} selected`],
    ['student', 'Student assessment', `${callingAssessmentCoverage()}/21 answered`],
    ...careerAssessments.map((assessment) => { const progress = careerAssessmentProgress(assessment); return [`career:${assessment.id}`, assessment.title, state.assessments.completed[assessment.id] ? 'Complete' : `${progress.answered}/${progress.total} answered`]; }),
    ['recommendations', '7 recommendations', 'From your student assessment'],
  ];
  const body = hub === 'signals' ? renderSignalAssessment()
    : hub === 'student' ? renderStudentAssessment()
    : hub === 'recommendations' ? renderAssessmentRecommendations()
    : renderCareerAssessmentWorkspace();
  return `<div class="assessment-hub assessment-hub-campaign view-enter"><section class="calling-campaign-hero" aria-labelledby="callingCampaignTitle"><div class="calling-campaign-light" aria-hidden="true"></div><div class="calling-campaign-copy"><p class="eyebrow">ZYSHAM DISCOVERY STUDIO · BUILT AROUND YOU</p><h2 id="callingCampaignTitle">A future that feels<br><em>like yours.</em></h2><p>Move beyond borrowed expectations. Notice what energises you, test what the work really asks, and build a direction from evidence you can trust.</p><div class="calling-campaign-actions"><button class="button-primary" data-action="campaign-begin" data-value="student">Begin the guided discovery <span>→</span></button><button class="calling-campaign-secondary" data-action="campaign-begin" data-value="signals">Explore the method</button></div><div class="calling-campaign-proof"><span><strong>10</strong><small>reflective lenses</small></span><span><strong>21</strong><small>human signals</small></span><span><strong>0</strong><small>destiny scores</small></span></div></div><div class="calling-campaign-note"><span>01</span><p><strong>Start with the person.</strong> No result, rank or inherited dream gets the first word.</p></div><div class="calling-campaign-scroll" aria-hidden="true"><i></i><span>DISCOVER</span></div></section><aside class="assessment-hub-sidebar"><div><p class="eyebrow">ASSESSMENT INDEX</p><h2>All assessments</h2><p>One place for every lens. Move between them without losing your answers.</p></div><nav aria-label="All assessments">${items.map(([id, label, meta], index) => `<button data-action="assessment-hub" data-value="${id}" class="${hub === id ? 'active' : ''}" aria-current="${hub === id ? 'page' : 'false'}"><span>${String(index + 1).padStart(2, '0')}</span><span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(meta)}</small></span></button>`).join('')}</nav></aside><main class="assessment-hub-main">${body}</main></div>`;
}

function vedicOption(value, label, selected) {
  return `<option value="${escapeHtml(value)}" ${selected === value ? 'selected' : ''}>${escapeHtml(label || value)}</option>`;
}

function vedicPredictionResults() {
  const profile = state.vedicPrediction;
  const scores = Object.fromEntries(Object.keys(vedicCareerThemes).map((key) => [key, 0]));
  const reasons = Object.fromEntries(Object.keys(vedicCareerThemes).map((key) => [key, []]));
  const add = (keys, weight, reason) => (keys || []).forEach((key) => { scores[key] += weight; reasons[key].push(reason); });
  if (profile.rashi) add(vedicRashiThemes[profile.rashi], 3, `${profile.rashi} Rashi`);
  if (profile.nakshatra) add(vedicNakshatraThemes[profile.nakshatra], 4, `${profile.nakshatra} Nakshatra`);
  if (profile.ascendant) add(vedicRashiThemes[profile.ascendant], 2, `${profile.ascendant} Lagna`);
  if (profile.tenthHouse) add(vedicPlanetThemes[profile.tenthHouse], 3, `${profile.tenthHouse} as a stated 10th-house influence`);
  if (profile.dominantPlanet) add(vedicPlanetThemes[profile.dominantPlanet], 2, `${profile.dominantPlanet} as a stated dominant planet`);
  if (profile.interest) add(vedicInterestThemes[profile.interest], 4, `your practical interest in ${profile.interest.toLowerCase()}`);
  return Object.entries(scores).map(([key, score]) => ({ key, score, ...vedicCareerThemes[key], reasons: [...new Set(reasons[key])] })).filter((item) => item.score).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title)).slice(0, 4);
}

function renderVedicPrediction() {
  const profile = state.vedicPrediction;
  const results = profile.generatedAt ? vedicPredictionResults() : [];
  const rashis = [['Mesha','Mesha (Aries)'],['Vrishabha','Vrishabha (Taurus)'],['Mithuna','Mithuna (Gemini)'],['Karka','Karka (Cancer)'],['Simha','Simha (Leo)'],['Kanya','Kanya (Virgo)'],['Tula','Tula (Libra)'],['Vrishchika','Vrishchika (Scorpio)'],['Dhanu','Dhanu (Sagittarius)'],['Makara','Makara (Capricorn)'],['Kumbha','Kumbha (Aquarius)'],['Meena','Meena (Pisces)']];
  const nakshatras = Object.keys(vedicNakshatraThemes);
  const planets = Object.keys(vedicPlanetThemes);
  const interests = Object.keys(vedicInterestThemes);
  const inputCount = [profile.rashi, profile.nakshatra, profile.ascendant, profile.tenthHouse, profile.dominantPlanet, profile.interest].filter(Boolean).length;
  return `<div class="vedic-page view-enter">
    <section class="vedic-hero panel">
      <div><p class="eyebrow">MY JOURNEY · REFLECTIVE CAREER LENS</p><h2>Vedic Prediction</h2><p>Bring chart factors you already know together with a real-world interest. Zysham turns the overlap into career themes and small experiments—not fate, certainty, or a substitute for aptitude, education, and lived evidence.</p></div>
      <div class="vedic-hero-mark" aria-hidden="true"><span>ॐ</span><small>Reflect · test · decide</small></div>
    </section>
    <div class="vedic-layout">
      <form class="panel vedic-form" id="vedicPredictionForm">
        <div class="panel-head"><div><p class="eyebrow">YOUR INPUTS</p><h3>Build a reflective profile</h3><p>Birth details stay only in this browser. This tool does not calculate a Kundli.</p></div>${profile.generatedAt ? '<button class="button-quiet" type="button" data-action="vedic-reset">Clear</button>' : ''}</div>
        <fieldset><legend>Birth context <small>Optional; for your record</small></legend><div class="vedic-field-grid">
          <label class="full">Name<input name="name" maxlength="60" value="${escapeHtml(profile.name)}" placeholder="Name or nickname"></label>
          <label>Date of birth<input name="birthDate" type="date" value="${escapeHtml(profile.birthDate)}"></label>
          <label>Time of birth<input name="birthTime" type="time" value="${escapeHtml(profile.birthTime)}"></label>
          <label class="full">Place of birth<input name="birthPlace" maxlength="100" value="${escapeHtml(profile.birthPlace)}" placeholder="Town / city, state, country"></label>
        </div></fieldset>
        <fieldset><legend>Chart factors <small>Enter from a chart you trust</small></legend><div class="vedic-field-grid">
          <label>Chandra Rashi<select name="rashi" required><option value="">Choose Moon sign</option>${rashis.map(([value,label]) => vedicOption(value,label,profile.rashi)).join('')}</select></label>
          <label>Janma Nakshatra<select name="nakshatra" required><option value="">Choose birth star</option>${nakshatras.map((value) => vedicOption(value,value,profile.nakshatra)).join('')}</select></label>
          <label>Lagna / Ascendant<select name="ascendant"><option value="">Not known</option>${rashis.map(([value,label]) => vedicOption(value,label,profile.ascendant)).join('')}</select></label>
          <label>10th-house influence<select name="tenthHouse"><option value="">Not known</option>${planets.map((value) => vedicOption(value,value,profile.tenthHouse)).join('')}</select><small>Use the planet your astrologer or chart identifies as most relevant.</small></label>
          <label>Dominant planet<select name="dominantPlanet"><option value="">Not known</option>${planets.map((value) => vedicOption(value,value,profile.dominantPlanet)).join('')}</select></label>
          <label>Strongest current interest<select name="interest" required><option value="">Choose a lived interest</option>${interests.map((value) => vedicOption(value,value,profile.interest)).join('')}</select></label>
          <label>Preferred work setting<select name="workPreference"><option value="">Still exploring</option>${['Structured organisation','Independent practice','Small collaborative team','Public-facing environment','Research or deep-focus setting','Field or hands-on setting'].map((value) => vedicOption(value,value,profile.workPreference)).join('')}</select></label>
          <label>Current decision<select name="goal"><option value="">Choose a decision</option>${['Subjects or stream','College course','First career direction','Career change','Entrepreneurship'].map((value) => vedicOption(value,value,profile.goal)).join('')}</select></label>
        </div></fieldset>
        <div class="vedic-consent"><strong>How this works</strong><p>Traditional associations create hypotheses. Your stated interest is weighted alongside them, and every result is paired with a practical test. Do not use this output alone for education, money, health, or employment decisions.</p></div>
        <button class="button-primary vedic-submit" type="submit">${profile.generatedAt ? 'Refresh recommendations' : 'Make recommendations'} →</button>
      </form>
      <aside class="vedic-results" aria-live="polite">
        ${results.length ? `<div class="vedic-result-head"><div><p class="eyebrow">YOUR REFLECTIVE SHORTLIST</p><h3>${escapeHtml(profile.name || 'Your')} career themes</h3><p>Built from ${inputCount} chart and lived-interest signals. Ordered by repeated overlap, not probability.</p></div><span>${new Date(profile.generatedAt).toLocaleDateString('en-IN')}</span></div>
          <div class="vedic-result-list">${results.map((item,index) => `<article class="panel vedic-result-card"><div class="vedic-result-rank">0${index + 1}</div><div><h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.summary)}</p><div class="vedic-reason"><strong>Why it appeared</strong><span>${item.reasons.map(escapeHtml).join(' · ')}</span></div><div class="vedic-role-list">${item.roles.map((role) => `<span>${escapeHtml(role)}</span>`).join('')}</div><div class="vedic-experiment"><strong>Test before deciding</strong><p>${escapeHtml(item.experiment)}</p></div></div></article>`).join('')}</div>
          <div class="panel vedic-next"><p class="eyebrow">GROUND THE READING</p><h3>Compare the top themes with your Career Compass.</h3><p>Keep a theme only when your subjects, constraints, work preferences, and first-hand experiments support it.</p><button class="button-secondary" data-action="go" data-target="compass">Open Career Compass →</button></div>`
        : `<div class="panel vedic-empty"><span aria-hidden="true">✦</span><p class="eyebrow">RECOMMENDATIONS WAITING</p><h3>Start with three honest inputs.</h3><p>Add your Rashi, Nakshatra, and a lived interest. Lagna and 10th-house factors can add nuance when you already know them.</p><ol><li>Enter known chart factors.</li><li>Add what genuinely interests you now.</li><li>Generate themes, then test them in real life.</li></ol></div>`}
      </aside>
    </div>
    <section class="panel vedic-method"><div><p class="eyebrow">METHOD & SOURCES</p><h3>What informs this lens</h3><p>The reference material associates professions with Nakshatras and Rashis, and describes career readings as multi-factor work involving the 10th, 6th, 2nd, 7th, and 11th houses, planetary influences, Lagna, and the D-10 chart. Zysham uses only the factors you explicitly enter and does not claim a complete chart reading.</p></div><div class="vedic-source-list"><a href="https://www.ambikaastro.com/nakshatras-related-profession/" target="_blank" rel="noopener">Nakshatras & professions <span>↗</span></a><a href="https://www.grahai.com/blog/best-career-by-rashi" target="_blank" rel="noopener">Career themes by Rashi <span>↗</span></a><a href="https://www.kptripathi.co.in/houses-career-astrology/" target="_blank" rel="noopener">Career and astrological houses <span>↗</span></a><a href="https://astrovishwajeet.com/how-to-choose-career-as-per-vedic-astrology/" target="_blank" rel="noopener">Multi-factor career analysis <span>↗</span></a></div></section>
  </div>`;
}

function renderOverviewSectionTabs() {
  const section = ['journey', 'ai'].includes(state.overviewSection) ? state.overviewSection : 'journey';
  const completed = journeyStops().filter((stop) => state.aiJourney.stageAnswers[stop.id]?.trim()).length;
  return `<nav class="overview-section-tabs" aria-label="Journey overview sections">
    <button type="button" data-action="overview-section" data-value="journey" class="${section === 'journey' ? 'active' : ''}" aria-current="${section === 'journey' ? 'page' : 'false'}"><span>Journey overview</span><small>Your map and next move</small></button>
    <button type="button" data-action="overview-section" data-value="ai" class="${section === 'ai' ? 'active' : ''}" aria-current="${section === 'ai' ? 'page' : 'false'}"><span>AI Journey</span><small>${completed}/9 stages grounded</small></button>
  </nav>`;
}

function renderOverview() {
  const overviewSection = ['journey', 'ai'].includes(state.overviewSection) ? state.overviewSection : 'journey';
  const sectionTabs = renderOverviewSectionTabs();
  if (overviewSection === 'ai') return `<div class="view-enter journey-overview-workspace">${sectionTabs}${renderAIJourney()}</div>`;
  const completion = compassCompletion();
  const reality = workRealityResult();
  const recommendationReady = reality.answered >= 6;
  const matches = rankedCareers().slice(0, 3);
  const copy = state.audience === 'student'
    ? ['Clarity comes from <em>small proof.</em>', 'Discover what fits, compare the real trade-offs, and try a path before anyone asks you to commit.']
    : ['Support the path without <em>taking it over.</em>', 'See the evidence your child is building, discuss real trade-offs, and agree on one useful next step.'];
  return `
    <div class="view-enter journey-overview-workspace">
      ${sectionTabs}
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
  const reality = workRealityResult();
  const top = rankedCareers()[0];
  const answerLabel = (question) => Object.hasOwn(state.workReality.answers, question.id) ? `${Number(state.workReality.answers[question.id])}/10` : 'Not answered';
  return `
    <div class="view-enter">
      <header class="section-header compass-intro">
        <div><p class="eyebrow">STEP 1 · ELIMINATE BEFORE YOU RECOMMEND</p><h2 class="section-heading">Start with what you do <em>not</em> want.</h2><p class="section-copy">Concrete aversions and life trade-offs reveal more than a premature dream-job question.</p></div>
        <button class="research-shortcut" data-action="research-open" type="button">Open research shelf <span>→</span></button>
      </header>

      <section class="reality-scan panel" aria-labelledby="realityScanTitle">
        <div class="reality-scan-head"><div><p class="eyebrow">WHAT YOU DON'T LIKE · SERIES 01</p><h3 id="realityScanTitle">Work Reality Scan</h3><p>${isGuest() ? 'Answer freely in this session. Create a profile only when you want to save the result.' : 'Move every scale. A low answer is not a weakness; it is useful design information.'}</p></div><div class="scan-progress"><strong>${reality.answered}</strong><span>of ${workRealityQuestions.length}<br>answered</span></div></div>
        <div class="reality-question-grid">
          ${workRealityQuestions.map((question, index) => {
            const answered = Object.hasOwn(state.workReality.answers, question.id);
            const answer = Number(state.workReality.answers[question.id] ?? 0);
            return `<article class="reality-question ${answered ? 'answered' : ''}" style="--rating-color:${answered ? ratingColor(answer) : '#8b94a7'}">
              <span class="reality-question-number">${String(index + 1).padStart(2, '0')}</span>
              <strong>${question.question}</strong>
              <span class="range-readout" id="readout-${question.id}">${answerLabel(question)}</span>
              <div class="nps-scale" role="radiogroup" aria-label="${escapeHtml(question.question)}"><div class="nps-options">${Array.from({ length: 11 }, (_, score) => `<label class="nps-score" title="${score === 0 ? escapeHtml(question.low) : score === 10 ? escapeHtml(question.high) : `${score} out of 10`}"><input type="radio" name="work-reality-${question.id}" value="${score}" data-work-reality="${question.id}" ${answered && answer === score ? 'checked' : ''}><span>${score}</span></label>`).join('')}</div><div class="nps-anchors"><small>${escapeHtml(question.low)}</small><small>${escapeHtml(question.high)}</small></div></div>
            </article>`;
          }).join('')}
        </div>
      </section>

      <div class="compass-layout evidence-compass know-thyself-layout">
        <aside class="compass-summary work-pattern-summary" aria-live="polite">
          <p class="eyebrow">LIVE · EXPLAINABLE PROFILE</p>
          ${reality.primary ? `<span class="pattern-kicker">CURRENT PRIMARY PATTERN</span><h3>${reality.primary.name}</h3><p>${reality.primary.line}.</p>${reality.secondary ? `<div class="secondary-pattern"><span>Also visible</span><strong>${reality.secondary.name}</strong></div>` : ''}` : `<h3>Answer the reality questions first.</h3><p>Your work-style pattern and NO-NOs will appear here. No career is recommended from an unanswered profile.</p>`}
          ${reality.noNos.length ? `<div class="summary-nonos"><span>AUTOMATIC NO-NO SIGNALS</span>${reality.noNos.map((item) => `<b>${item}</b>`).join('')}</div>` : ''}
          ${reality.tensions.map((item) => `<div class="preference-tension"><span>TRADE-OFF TO TEST</span><p>${item}</p></div>`).join('')}
          <div class="profile-meter"><span>${reality.answered}/${workRealityQuestions.length} reality answers</span><div><i style="width:${reality.answered / workRealityQuestions.length * 100}%"></i></div></div>
          <p class="summary-explanation">${top && reality.answered ? `<strong>${top.title}</strong> currently overlaps at ${top.fit.workAlignment}/10 on answered work conditions. Validate that against its real daily work.` : 'Recommendations become available as transparent hypotheses—not permanent labels.'}<br><br>Pattern names are revisable work-style summaries—not astrology, diagnosis, destiny, or ability.</p>
          <button class="button-secondary" data-action="go" data-target="explore" ${reality.answered < 6 ? 'disabled' : ''}>Test remaining career worlds →</button>
          ${reality.answered ? '<button class="pattern-reset" data-action="work-reality-reset">Clear reality answers</button>' : ''}
        </aside>
        <section class="panel know-thyself-next"><p class="eyebrow">NEXT · ASSESSMENTS</p><h3>Now explore what pulls you in.</h3><p>Attraction, strengths, values and work-style signals have their own assessment workspace.</p><button class="button-primary" data-action="go" data-target="assessments">Open all assessments →</button></section></div>
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
        <aside class="panel next-step"><span class="next-step-icon">↗</span><p class="eyebrow">TRY BEFORE YOU DECIDE</p><h3>A 30–60 minute experiment</h3><p>${career.experiment}</p><button class="button-primary" data-action="add-experiment" data-id="${career.id}">Track in Accomplishments →</button></aside>
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

function renderJourneyStagePage() {
  const stageId = yearMilestoneConfig[state.activeJourneyStage] ? state.activeJourneyStage : 'grade10';
  const config = yearMilestoneConfig[stageId];
  const stops = journeyStops();
  const index = stops.findIndex((stop) => stop.id === stageId);
  const selected = state.journey.stageMilestones[stageId] || [];
  const personalNoNos = state.journey.noNos[stageId] || [];
  const inheritedNoNos = workRealityResult().noNos;
  const combinedNoNos = [...new Set([...inheritedNoNos, ...personalNoNos])];
  const survivors = recommendationsAfterElimination(combinedNoNos);
  const note = state.journey.stageNotes[stageId]?.trim();
  const rank = state.journey.ranks[stageId];
  const progressMap = state.journey.milestoneProgress?.[stageId] || {};
  const milestoneStatus = (milestone) => selected.includes(milestone) ? 'complete' : progressMap[milestone] || 'todo';
  const statusCounts = config.milestones.reduce((counts, milestone) => { counts[milestoneStatus(milestone)] += 1; return counts; }, { todo: 0, doing: 0, complete: 0 });
  const progressPoints = statusCounts.complete + (statusCounts.doing * .5);
  const completion = Math.round((progressPoints / config.milestones.length) * 100);
  const nextMilestones = config.milestones.filter((milestone) => milestoneStatus(milestone) !== 'complete').slice(0, 2);
  const hasStudyGuide = ['grade11', 'grade12'].includes(stageId);
  const validStageTabs = ['focus', 'guide', 'choices', 'evidence', 'community', 'ai', ...(hasStudyGuide ? ['study'] : [])];
  const stageTab = validStageTabs.includes(state.journeyStageTab) ? state.journeyStageTab : 'focus';
  const tabs = [['focus', 'Year curriculum'], ...(hasStudyGuide ? [['study', 'Study Guide']] : []), ['guide', 'Route guide'], ['choices', 'Choices & NO-NOs'], ['evidence', 'Evidence'], ['community', 'Community'], ['ai', 'AI lens']];
  const phases = stageProcess(stageId);
  const activePhaseId = phases.some((phase) => phase.id === state.journey.stagePhase?.[stageId]) ? state.journey.stagePhase[stageId] : phases[0].id;
  const activePhase = phases.find((phase) => phase.id === activePhaseId) || phases[0];
  const phaseCompletion = (phase) => phase.milestones.every((milestone) => milestoneStatus(milestone) === 'complete');
  const phaseStepper = `<ol class="milestone-chevron-flow" aria-label="${escapeHtml(config.step)} milestone process">${phases.map((phase, phaseIndex) => `<li><button data-action="stage-phase" data-stage="${stageId}" data-value="${phase.id}" class="${phase.id === activePhaseId ? 'active' : ''} ${phaseCompletion(phase) ? 'complete' : ''}" aria-current="${phase.id === activePhaseId ? 'step' : 'false'}"><span>${String(phaseIndex + 1).padStart(2, '0')}</span><strong>${escapeHtml(phase.label)}</strong><small>${phaseCompletion(phase) ? 'Complete' : `${phase.milestones.filter((milestone) => milestoneStatus(milestone) === 'complete').length}/${phase.milestones.length}`}</small></button></li>`).join('')}</ol>`;
  const guide = stageGuideContent[stageId];
  const routeGuide = stageId === 'grade10' ? `<div class="route-atlas-table"><div><strong>Route</strong><strong>Learning foundation</strong><strong>What it can open</strong><strong>Reality check</strong></div>${grade10RouteAtlas.map(([route, foundation, opens, reality]) => `<article><h4>${escapeHtml(route)}</h4><p>${escapeHtml(foundation)}</p><p>${escapeHtml(opens)}</p><p>${escapeHtml(reality)}</p></article>`).join('')}</div><div class="route-source-actions"><a href="https://cbseacademic.nic.in/curriculum_2026.html" target="_blank" rel="noopener">CBSE curriculum ↗</a><a href="https://www.dge.tn.gov.in/docs/examina/HSE_E.pdf" target="_blank" rel="noopener">Tamil Nadu HSE groups ↗</a><a href="https://www.tnpoly.in/public/" target="_blank" rel="noopener">TN Polytechnic ↗</a><a href="https://dgt.gov.in/en/CTS" target="_blank" rel="noopener">DGT / ITI routes ↗</a><a href="https://www.nios.ac.in/" target="_blank" rel="noopener">NIOS ↗</a></div>` : '';
  const legacyTabContent = {
    focus: `<section class="stage-progress-summary panel"><div><p class="eyebrow">WHO THIS STAGE SERVES</p><h3>${escapeHtml(config.purpose)}</h3><div class="stage-progress-track" role="progressbar" aria-label="Stage progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${completion}"><span style="width:${completion}%"></span></div></div><dl><div><dt>Completed</dt><dd>${statusCounts.complete}</dd></div><div><dt>In progress</dt><dd>${statusCounts.doing}</dd></div><div><dt>Not started</dt><dd>${statusCounts.todo}</dd></div></dl>${nextMilestones.length ? `<aside><span>NEXT HIGH-ROAD TARGET</span><strong>${escapeHtml(nextMilestones[0])}</strong><small>Does this move you toward the person you want to become?</small></aside>` : '<aside><span>STAGE COMPLETE</span><strong>Reflect, document the evidence, then move forward.</strong></aside>'}</section><section class="stage-process-workspace"><ol class="milestone-chevron-flow" aria-label="${escapeHtml(config.step)} milestone process">${phases.map((phase, phaseIndex) => `<li><button data-action="stage-phase" data-stage="${stageId}" data-value="${phase.id}" class="${phase.id === activePhaseId ? 'active' : ''} ${phaseCompletion(phase) ? 'complete' : ''}" aria-current="${phase.id === activePhaseId ? 'step' : 'false'}"><span>${String(phaseIndex + 1).padStart(2, '0')}</span><strong>${escapeHtml(phase.label)}</strong><small>${phaseCompletion(phase) ? 'Complete' : `${phase.milestones.filter((milestone) => milestoneStatus(milestone) === 'complete').length}/${phase.milestones.length}`}</small></button></li>`).join('')}</ol><section class="panel stage-milestone-board"><div class="panel-head"><div><p class="eyebrow">STEP ${String(phases.findIndex((phase) => phase.id === activePhaseId) + 1).padStart(2, '0')}</p><h3>${escapeHtml(activePhase.label)}</h3></div><button class="button-secondary" data-action="journey-edit" data-id="${stageId}">Add reflection</button></div><div class="stage-phase-milestones">${activePhase.milestones.map((milestone) => { const status = milestoneStatus(milestone); const number = config.milestones.indexOf(milestone) + 1; return `<button class="stage-milestone ${status}" data-action="journey-page-milestone" data-stage="${stageId}" data-value="${escapeHtml(milestone)}" data-status="${status}" aria-label="${escapeHtml(milestone)}. ${status === 'complete' ? 'Complete' : status === 'doing' ? 'In progress' : 'Not started'}. Click to advance status."><span>${String(number).padStart(2, '0')}</span><strong>${escapeHtml(milestone)}</strong><em>${status === 'complete' ? '✓ Complete' : status === 'doing' ? '◐ In progress' : '○ Not started'}</em></button>`; }).join('')}</div></section></section>`,
    study: hasStudyGuide ? renderJourneyStudyGuide(stageId) : '',
    guide: `<section class="panel stage-route-guide"><header><div><p class="eyebrow">DECISION KNOWLEDGE</p><h3>${escapeHtml(guide.title)}</h3></div><button class="button-secondary" data-action="research-open">Open verified research</button></header><ol>${guide.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join('')}</ol>${routeGuide}<p class="source-caution">Rules, programmes and admissions change. Verify current eligibility on the linked official source before acting.</p></section>`,
    choices: `<div class="journey-stage-layout"><section class="panel stage-nono-card"><p class="eyebrow">WHAT IS RULED OUT</p><h3>${combinedNoNos.length ? `${combinedNoNos.length} NO-NO signals` : 'Start with what you know you do not want'}</h3><div class="stage-nono-tags">${combinedNoNos.length ? combinedNoNos.map((item) => `<span>${escapeHtml(item)}</span>`).join('') : '<p>Record working conditions, subjects and trade-offs that feel clearly wrong.</p>'}</div><button class="button-secondary" data-action="journey-edit" data-id="${stageId}">Review NO-NOs</button></section><section class="panel stage-shortlist"><p class="eyebrow">REMAINING WORLDS TO TEST</p>${survivors.map((career) => `<button data-action="career-detail" data-id="${career.id}"><span>${career.glyph}</span><strong>${career.title}</strong><small>${career.fit.label}</small></button>`).join('')}</section></div>`,
    evidence: `<section class="panel stage-proof-card stage-tab-panel"><p class="eyebrow">CURRENT EVIDENCE</p><dl><div><dt>Performance</dt><dd>${escapeHtml(rank || 'Not recorded')}</dd></div><div><dt>Reflection</dt><dd>${escapeHtml(note || 'No reflection recorded')}</dd></div><div><dt>Completed milestones</dt><dd>${selected.length} of ${config.milestones.length}</dd></div></dl><button class="button-primary" data-action="journey-edit" data-id="${stageId}">Add evidence and reflection</button></section>`,
    community: `<section class="panel stage-tab-panel"><p class="eyebrow">LEARN FROM CONTEXT, NOT CONSENSUS</p><h3>See how other learners approached ${escapeHtml(config.title)}.</h3><p>Compare constraints, doubts, reversals and evidence. A popular answer is not automatically the right answer for you.</p><button class="button-primary" data-action="stage-community" data-id="${stageId}">Open related discussions</button></section>`,
    ai: `<section class="panel stage-tab-panel"><p class="eyebrow">AI LENS</p><h3>${state.aiJourney.stageAnswers[stageId]?.trim() ? 'You have an AI reflection for this stage.' : 'One AI question is still open.'}</h3><p>${escapeHtml(aiStagePrompts[stageId])}</p>${state.aiJourney.stageAnswers[stageId]?.trim() ? `<blockquote>${escapeHtml(state.aiJourney.stageAnswers[stageId])}</blockquote>` : ''}<button class="button-primary" data-action="journey-edit" data-id="${stageId}">${state.aiJourney.stageAnswers[stageId]?.trim() ? 'Review AI evidence' : 'Answer the AI question'}</button></section>`,
  }[stageTab];
  const tabContent = stageTab === 'focus' ? renderStageLearningPlan(stageId, completion, statusCounts, nextMilestones) : legacyTabContent;
  return `<div class="view-enter journey-stage-page">
    ${phaseStepper}
    <header class="journey-stage-hero panel"><div><p class="eyebrow">${config.step}</p><h2>${config.title}</h2><p>${config.copy}</p></div><div class="stage-completion"><strong>${completion}%</strong><span>${statusCounts.complete} complete · ${statusCounts.doing} active</span></div></header>
    <nav class="stage-tabs" aria-label="${escapeHtml(config.title)} sections">${tabs.map(([id, label]) => `<button data-action="stage-tab" data-value="${id}" class="${stageTab === id ? 'active' : ''}" aria-current="${stageTab === id ? 'page' : 'false'}">${label}</button>`).join('')}</nav>
    ${tabContent}
    <nav class="stage-page-navigation" aria-label="Journey stage pages">${index > 0 ? `<button class="button-secondary" data-action="journey-stage-nav" data-id="${stops[index - 1].id}">← ${stops[index - 1].title}</button>` : '<span></span>'}${index < stops.length - 1 ? `<button class="button-primary" data-action="journey-stage-nav" data-id="${stops[index + 1].id}">${stops[index + 1].title} →</button>` : '<button class="button-primary" data-action="go" data-target="roadmap">Open complete roadmap →</button>'}</nav>
  </div>`;
}

const roadmapItems = [
  { id: 'profile', stage: 'NOW · GRADE 10', title: 'Discover Your Capability & Potential', copy: 'Map your interests, strengths, values, subject readiness, preferred work style, and real-world evidence.' },
  { id: 'stream', stage: 'NEXT · STREAM DECISION', title: 'Choose with eyes open', copy: 'Compare subject readiness, workload, flexibility, and nearby alternatives.' },
  { id: 'experiment', stage: 'THIS TERM', title: 'Run one real-world experiment', copy: 'A mini-project, practitioner interview, observation, or job-shadow reflection.' },
  { id: 'syllabus', stage: 'GRADE 11', title: 'Connect syllabus to direction', copy: 'Track foundations, review backlogs weekly, and keep a sustainable rhythm.' },
  { id: 'applications', stage: 'GRADE 12', title: 'Unify boards, entrances, and applications', copy: 'One calendar for mocks, error reviews, documents, and decision deadlines.' },
];

function actionPlanTargetContext() {
  const selected = dreamJobEmployers.find((employer) => employer.id === state.dreamJob.selectedId) || dreamJobEmployers[0];
  const currentStageId = state.dreamJob.previewStage || mentorStageId();
  const currentStage = dreamJobStageBlueprint.find((stage) => stage.stage === currentStageId) || dreamJobStageBlueprint[0];
  return { selected, currentStageId, currentStage, vocation: selectedDreamVocation() };
}

function renderTargetRoadmapPlan() {
  const { selected, currentStageId, currentStage, vocation } = actionPlanTargetContext();
  const vocationMilestones = vocation.stageMilestones[currentStage.stage] || [];
  return `<section class="dream-roadmap action-plan-dream-section"><header><p class="eyebrow">FROM SCHOOL TO MEANINGFUL WORK</p><h3>The destination may be a company, a vocation—or a portfolio of both.</h3></header><ol class="dream-stage-chevrons" aria-label="Target roadmap stages">${dreamJobStageBlueprint.map((stage, index) => `<li class="${stage.stage === currentStageId ? 'current' : ''}"><button data-action="dream-stage" data-value="${stage.stage}" ${stage.stage === currentStageId ? 'aria-current="step"' : ''}><span>${String(index + 1).padStart(2,'0')}</span><strong>${escapeHtml(stage.label)}</strong></button></li>`).join('')}</ol><article class="dream-stage-focus"><div><p class="eyebrow">CURRENT FOCUS · ${escapeHtml(currentStage.label)}</p><h4>${escapeHtml(currentStage.focus)}</h4><p>${escapeHtml(currentStage.action)}</p></div><aside><span>${state.dreamJob.selectedVocationId ? vocation.mark : selected.mark}</span><strong>${escapeHtml(state.dreamJob.selectedVocationId ? vocation.name : selected.name)}</strong><p>${escapeHtml(state.dreamJob.selectedVocationId ? vocationMilestones.slice(0, 2).join(' · ') : selected.evidence.slice(0, 2).join(' · '))}</p>${state.dreamJob.selectedVocationId ? `<button class="button-quiet" data-action="dream-vocation-detail" data-id="${vocation.id}">View milestones</button>` : ''}</aside></article></section>`;
}

function renderEvidenceGapPlan() {
  const { selected, currentStage } = actionPlanTargetContext();
  return `<section class="dream-evidence action-plan-dream-section"><header><div><p class="eyebrow">ROLE FIRST · ${escapeHtml(currentStage.label)}</p><h3>What can you prove—not merely claim?</h3></div><span>${selected.mark}</span></header><div><section><h4>Target role family</h4><p>${escapeHtml(state.dreamJob.targetRole || 'Choose a role in The Dream Job. A company target without a role target is too vague.')}</p><h4>Evidence standard to test</h4><ol>${selected.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section><label>Evidence I already have<textarea data-dream-input="evidence" placeholder="Projects, outcomes, feedback, difficult work, responsibility…">${escapeHtml(state.dreamJob.evidence)}</textarea><small>${isGuest() ? 'Available in this session. Create a profile only to retain it.' : 'Saved privately with your profile.'}</small></label></div><footer><button class="button-primary" data-action="dream-go-evidence">Open Accomplishments</button></footer></section>`;
}

function renderPrestigeCheckPlan() {
  const { selected } = actionPlanTargetContext();
  return `<section class="dream-reality action-plan-dream-section"><header><p class="eyebrow">PRESTIGE-FREE REVIEW</p><h3>Would the work still matter without the name?</h3></header><div class="dream-reality-grid">${['A company is an environment, not a calling.','The same logo contains radically different work.','A referral may improve visibility; it does not replace evidence.','A solved-problem count measures volume, not explanation or judgment.','A programme can close or change—verify before planning around it.','Your campus changes access, not the value of your ability.'].map((item, index) => `<article><span>${String(index + 1).padStart(2,'0')}</span><p>${escapeHtml(item)}</p></article>`).join('')}</div><aside><strong>${escapeHtml(selected.name)} reality</strong><p>${escapeHtml(selected.reality)}</p><a href="${selected.source}" target="_blank" rel="noopener">Verify current roles and requirements ↗</a></aside></section>`;
}

function renderRoadmap() {
  const section = ['actions', 'target', 'gaps', 'prestige'].includes(state.roadmapSection) ? state.roadmapSection : 'actions';
  const actionList = `<div class="roadmap-shell"><section class="panel roadmap-list">${roadmapItems.map((item) => { const done = state.roadmapDone.includes(item.id); return `<article class="roadmap-item ${done ? 'done' : ''}"><button class="milestone-check" data-action="milestone" data-id="${item.id}" aria-label="Mark ${item.title} ${done ? 'incomplete' : 'complete'}" aria-pressed="${done}">${done ? '✓' : '○'}</button><div class="roadmap-copy"><span>${item.stage}</span><h3>${item.title}</h3><p>${item.copy}</p></div><button class="roadmap-action" data-action="roadmap-open" data-id="${item.id}">${done ? 'Review' : 'Open'} →</button></article>`; }).join('')}</section><aside class="panel weekly-plan"><div class="panel-head"><div><h3>This week</h3><p>${state.tasks.filter((task) => task.done).length}/${state.tasks.length} actions complete</p></div></div><div class="task-list">${state.tasks.map((task) => `<div class="task-row"><input type="checkbox" id="${task.id}" data-action="task-toggle" data-id="${task.id}" ${task.done ? 'checked' : ''}><label for="${task.id}">${escapeHtml(task.text)}</label></div>`).join('')}</div><form class="task-form" id="taskForm"><input id="taskInput" maxlength="100" placeholder="Add one small next step" aria-label="New task"><button aria-label="Add task">+</button></form><p class="disclosure">Existing Zysham syllabus, mock review, and entrance planning now live on one shared path.</p></aside></div>`;
  const content = section === 'target' ? renderTargetRoadmapPlan() : section === 'gaps' ? renderEvidenceGapPlan() : section === 'prestige' ? renderPrestigeCheckPlan() : actionList;
  return `<div class="view-enter"><header class="section-header"><div><p class="eyebrow">MY PATH · ACTION PLAN</p><h2 class="section-heading">A living plan, not a perfect plan.</h2><p class="section-copy">Turn decisions into milestones. Check them off, revisit them, and keep the next action small.</p></div></header><nav class="action-plan-tabs" aria-label="Action Plan workspaces">${[['actions','Next actions'],['target','Target roadmap'],['gaps','Evidence gaps'],['prestige','Prestige check']].map(([id, label]) => `<button data-action="roadmap-section" data-value="${id}" class="${section === id ? 'active' : ''}" aria-current="${section === id ? 'page' : 'false'}">${label}</button>`).join('')}</nav>${content}</div>`;
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

function renderEvidenceLegacy() {
  const top = rankedCareers()[0];
  const experimentCareers = [top, ...careers.filter((career) => state.saved.includes(career.id) && career.id !== top.id)].slice(0, 3);
  const completedMilestones = roadmapItems.filter((item) => state.roadmapDone.includes(item.id));
  const completedActions = state.tasks.filter((task) => task.done);
  const accomplishmentTypes = ['Project', 'Milestone', 'Certification', 'Award or recognition', 'Leadership', 'Service', 'Skill developed', 'Reflection'];
  return `
    <div class="view-enter">
      <header class="section-header"><div><p class="eyebrow">ACCOMPLISHMENTS</p><h2 class="section-heading">Recognise what you completed, contributed, and learned.</h2><p class="section-copy">Keep projects, milestones, certifications, service, recognition, and meaningful growth together. This is a living record—not a competition or a polished résumé.</p></div></header>
      <section class="accomplishment-summary" aria-label="Accomplishment summary"><span><strong>${state.evidence.length}</strong>recorded</span><span><strong>${completedMilestones.length}</strong>journey milestones</span><span><strong>${completedActions.length}</strong>actions completed</span></section>
      <div class="evidence-grid">
        <section class="panel">
          <div class="panel-head"><div><h3>Your accomplishment record</h3><p>${state.evidence.length} item${state.evidence.length === 1 ? '' : 's'} saved locally</p></div></div>
          <form class="evidence-form" id="evidenceForm"><input id="evidenceTitle" maxlength="120" placeholder="What did you complete, contribute, or improve?" aria-label="Accomplishment title" required><select id="evidenceType" aria-label="Accomplishment type">${accomplishmentTypes.map((type) => `<option>${type}</option>`).join('')}</select><button class="button-primary">Add accomplishment</button></form>
          <div class="evidence-list">${state.evidence.length ? state.evidence.map((item) => `<article class="evidence-item"><span class="evidence-icon">▣</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.type)}</small></span><button data-action="evidence-remove" data-id="${item.id}" aria-label="Remove ${escapeHtml(item.title)}">×</button></article>`).join('') : '<p class="disclosure">No accomplishments recorded yet. Start with one project, milestone, contribution, or lesson you are proud to remember.</p>'}</div>
        </section>
        <aside class="accomplishment-journey">
          <p class="eyebrow">FROM YOUR JOURNEY</p>
          <section class="panel accomplishment-completed"><h3>Completed along the way</h3>${completedMilestones.length || completedActions.length ? `<div>${completedMilestones.map((item) => `<p><span>✓</span><strong>${escapeHtml(item.title)}</strong><small>Journey milestone</small></p>`).join('')}${completedActions.map((item) => `<p><span>✓</span><strong>${escapeHtml(item.text)}</strong><small>Action completed</small></p>`).join('')}</div>` : '<p>Your completed Action Plan milestones and weekly actions will appear here automatically.</p>'}</section>
          <p class="eyebrow">WHAT TO BUILD NEXT</p>
          ${experimentCareers.map((career) => `<article class="experiment-card"><span>${career.title.toUpperCase()}</span><h3>A possible next accomplishment</h3><p>${career.experiment}</p><button class="button-secondary" data-action="add-experiment" data-id="${career.id}">Track as a growth plan</button></article>`).join('')}
        </aside>
      </div>
    </div>`;
}

function trackerEmpty(title, copy) {
  return `<div class="tracker-empty"><span aria-hidden="true">◇</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(copy)}</p></div>`;
}

function renderEvidence() {
  const sections = [['overview','Overview'],['tasks','Tasks'],['milestones','Milestones'],['rewards','Rewards'],['courses','Courses completed'],['exams','Exams completed'],['scores','Scores']];
  const section = sections.some(([id]) => id === state.accomplishments.section) ? state.accomplishments.section : 'overview';
  const stages = Object.entries(yearMilestoneConfig);
  const completedTasks = state.tasks.filter((task) => task.done).length;
  const milestoneTotal = stages.reduce((sum,[,config]) => sum + config.milestones.length, 0);
  const milestoneComplete = stages.reduce((sum,[id]) => sum + (state.journey.stageMilestones[id] || []).length, 0);
  const averageScore = state.accomplishments.scores.length ? Math.round(state.accomplishments.scores.reduce((sum,item) => sum + (Number(item.score) / Math.max(1,Number(item.max))) * 100, 0) / state.accomplishments.scores.length) : 0;
  const taskPanel = `<section class="tracker-workspace"><form class="tracker-add-form" id="taskForm"><input id="taskInput" name="text" maxlength="120" required placeholder="Add a clear next action"><select name="stage" aria-label="Journey stage">${stages.map(([id,c])=>`<option value="${id}">${escapeHtml(c.step)}</option>`).join('')}</select><select name="priority" aria-label="Priority"><option>High</option><option selected>Medium</option><option>Low</option></select><input name="due" type="date" aria-label="Due date"><button class="button-primary">Add task</button></form><div class="tracker-table task-tracker"><header><span>Done</span><span>Task</span><span>Stage</span><span>Priority</span><span>Due</span><span></span></header>${state.tasks.length ? state.tasks.map((task)=>`<article class="${task.done?'complete':''}"><input type="checkbox" data-action="task-toggle" data-id="${task.id}" ${task.done?'checked':''} aria-label="Mark ${escapeHtml(task.text)} complete"><strong>${escapeHtml(task.text)}</strong><span>${escapeHtml(yearMilestoneConfig[task.stage]?.step || 'General')}</span><em data-priority="${escapeHtml(task.priority || 'Medium')}">${escapeHtml(task.priority || 'Medium')}</em><time>${escapeHtml(task.due || 'No date')}</time><button data-action="tracker-remove" data-group="tasks" data-id="${task.id}" aria-label="Remove task">×</button></article>`).join('') : trackerEmpty('No tasks yet','Add one action small enough to finish and meaningful enough to matter.')}</div></section>`;
  const milestonePanel = `<section class="milestone-tracker-grid">${stages.map(([stageId,config])=>{const done=state.journey.stageMilestones[stageId]||[];const progress=Math.round(done.length/config.milestones.length*100);return `<details class="milestone-tracker-stage" ${stageId===state.activeJourneyStage?'open':''}><summary><span>${escapeHtml(config.step)}</span><strong>${escapeHtml(config.title)}</strong><div><i style="width:${progress}%"></i></div><em>${done.length}/${config.milestones.length}</em></summary><div>${config.milestones.map((milestone,index)=>{const status=done.includes(milestone)?'complete':state.journey.milestoneProgress?.[stageId]?.[milestone]||'todo';return `<button class="${status}" data-action="journey-page-milestone" data-stage="${stageId}" data-value="${escapeHtml(milestone)}"><span>${String(index+1).padStart(2,'0')}</span><strong>${escapeHtml(milestone)}</strong><em>${status==='complete'?'Complete':status==='doing'?'In progress':'Not started'}</em></button>`}).join('')}</div></details>`}).join('')}</section>`;
  const rewardPanel = `<section class="tracker-workspace"><form class="tracker-add-form" id="rewardTrackerForm"><input name="title" required maxlength="100" placeholder="Award, recognition or contribution"><input name="issuer" required maxlength="80" placeholder="Issuer / organisation"><select name="level"><option>School / College</option><option>District</option><option>State</option><option>National</option><option>International</option><option>Community</option></select><input name="date" type="date" required><button class="button-primary">Record reward</button></form><div class="tracker-record-grid">${state.accomplishments.rewards.length?state.accomplishments.rewards.map((item)=>`<article><span>REWARD · ${escapeHtml(item.level)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.issuer)}</p><time>${escapeHtml(item.date)}</time><button data-action="tracker-remove" data-group="rewards" data-id="${item.id}">Remove</button></article>`).join(''):trackerEmpty('No rewards recorded','Recognition is context, not identity. Record what it acknowledges and what you learned.')}</div></section>`;
  const coursePanel = `<section class="tracker-workspace"><form class="tracker-add-form tracker-six" id="courseTrackerForm"><input name="title" required maxlength="100" placeholder="Course or certification"><input name="provider" required maxlength="80" placeholder="Institution / provider"><select name="category"><option>Academic</option><option>Technical</option><option>Professional</option><option>Language</option><option>Creative</option><option>Traditional arts</option><option>Life skills</option></select><input name="hours" type="number" min="1" max="5000" placeholder="Hours"><input name="date" type="date" required><button class="button-primary">Add completion</button></form><div class="tracker-table record-table"><header><span>Course</span><span>Provider</span><span>Category</span><span>Effort</span><span>Completed</span><span></span></header>${state.accomplishments.courses.length?state.accomplishments.courses.map((item)=>`<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.provider)}</span><em>${escapeHtml(item.category)}</em><span>${escapeHtml(item.hours || '—')} ${item.hours?'hours':''}</span><time>${escapeHtml(item.date)}</time><button data-action="tracker-remove" data-group="courses" data-id="${item.id}">×</button></article>`).join(''):trackerEmpty('No completed courses','Record completed learning with its provider, effort, date, and evidence—not courses merely bookmarked.')}</div></section>`;
  const examPanel = `<section class="tracker-workspace"><form class="tracker-add-form tracker-six" id="examTrackerForm"><input name="title" required maxlength="100" placeholder="Exam / entrance / assessment"><input name="authority" required maxlength="80" placeholder="Board / authority"><input name="score" maxlength="30" placeholder="Score / rank / percentile"><select name="result"><option>Completed</option><option>Qualified</option><option>Result awaited</option><option>Retry planned</option></select><input name="date" type="date" required><button class="button-primary">Add exam</button></form><div class="tracker-table record-table"><header><span>Exam</span><span>Authority</span><span>Outcome</span><span>Result</span><span>Date</span><span></span></header>${state.accomplishments.exams.length?state.accomplishments.exams.map((item)=>`<article><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.authority)}</span><em>${escapeHtml(item.score || 'Not recorded')}</em><span>${escapeHtml(item.result)}</span><time>${escapeHtml(item.date)}</time><button data-action="tracker-remove" data-group="exams" data-id="${item.id}">×</button></article>`).join(''):trackerEmpty('No completed exams','Record attempts truthfully. A result is evidence for the next plan, not a judgment of worth.')}</div></section>`;
  const scorePanel = `<section class="tracker-workspace"><form class="tracker-add-form tracker-six" id="scoreTrackerForm"><input name="subject" required maxlength="60" placeholder="Subject / skill"><input name="assessment" required maxlength="80" placeholder="Assessment name"><input name="score" required type="number" min="0" step=".01" placeholder="Score"><input name="max" required type="number" min="1" step=".01" placeholder="Out of"><input name="date" type="date" required><button class="button-primary">Add score</button></form><div class="score-tracker-list">${state.accomplishments.scores.length?state.accomplishments.scores.map((item)=>{const percent=Math.min(100,Math.round(Number(item.score)/Math.max(1,Number(item.max))*100));return `<article><div><span>${escapeHtml(item.subject)}</span><strong>${escapeHtml(item.assessment)}</strong><small>${escapeHtml(item.date)}</small></div><div class="score-track"><i style="width:${percent}%"></i></div><em>${escapeHtml(item.score)} / ${escapeHtml(item.max)}<strong>${percent}%</strong></em><button data-action="tracker-remove" data-group="scores" data-id="${item.id}">×</button></article>`}).join(''):trackerEmpty('No scores recorded','Track comparable evidence over time and record the repair action behind improvement.')}</div></section>`;
  const evidenceTypes = ['Project','Milestone','Certification','Award or recognition','Leadership','Service','Skill developed','Reflection'];
  const recent = [...state.evidence.map((item)=>({...item,kind:item.type,date:item.createdAt})),...state.accomplishments.rewards.map((item)=>({...item,kind:'Reward'})),...state.accomplishments.courses.map((item)=>({...item,kind:'Course'})),...state.accomplishments.exams.map((item)=>({...item,kind:'Exam'}))].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))).slice(0,6);
  const overviewPanel = `<section class="tracker-overview"><div class="tracker-kpi-grid"><article><span>Tasks</span><strong>${completedTasks}/${state.tasks.length}</strong><i style="--value:${state.tasks.length?completedTasks/state.tasks.length*100:0}%"></i></article><article><span>Milestones</span><strong>${milestoneComplete}/${milestoneTotal}</strong><i style="--value:${milestoneTotal?milestoneComplete/milestoneTotal*100:0}%"></i></article><article><span>Rewards</span><strong>${state.accomplishments.rewards.length}</strong><small>recognitions recorded</small></article><article><span>Courses</span><strong>${state.accomplishments.courses.length}</strong><small>completed learning routes</small></article><article><span>Exams</span><strong>${state.accomplishments.exams.length}</strong><small>attempts documented</small></article><article><span>Score average</span><strong>${averageScore||'—'}${averageScore?'%':''}</strong><small>across recorded scores</small></article></div><div class="tracker-overview-grid"><section class="panel"><div class="panel-head"><div><h3>Accomplishment record</h3><p>Projects, service, leadership, skills, and reflection.</p></div></div><form class="evidence-form" id="evidenceForm"><input id="evidenceTitle" maxlength="120" placeholder="What did you complete, contribute, or improve?" required><select id="evidenceType">${evidenceTypes.map((type)=>`<option>${type}</option>`).join('')}</select><button class="button-primary">Add</button></form><div class="evidence-list">${state.evidence.length?state.evidence.slice(0,8).map((item)=>`<article class="evidence-item"><span class="evidence-icon">▣</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.type)}</small></span><button data-action="evidence-remove" data-id="${item.id}">×</button></article>`).join(''):trackerEmpty('No evidence yet','Record one finished project, contribution, skill, or reflection.')}</div></section><section class="panel tracker-recent"><div class="panel-head"><div><h3>Recent progress</h3><p>One timeline across every tracker.</p></div></div>${recent.length?recent.map((item)=>`<article><span>${escapeHtml(item.kind||'Progress')}</span><strong>${escapeHtml(item.title)}</strong><time>${escapeHtml(item.date?String(item.date).slice(0,10):'')}</time></article>`).join(''):trackerEmpty('Your timeline is ready','Completed work from all seven trackers will appear here.')}</section></div></section>`;
  const content = {overview:overviewPanel,tasks:taskPanel,milestones:milestonePanel,rewards:rewardPanel,courses:coursePanel,exams:examPanel,scores:scorePanel}[section];
  return `<div class="view-enter accomplishment-hub"><header class="section-header"><div><p class="eyebrow">MY JOURNEY · PROGRESS SYSTEM</p><h2 class="section-heading">Track the work behind your growth.</h2><p class="section-copy">Tasks, milestones, learning, attempts, recognition, and scores stay connected to the same journey.</p></div></header><nav class="accomplishment-tabs" aria-label="Accomplishment trackers">${sections.map(([id,label],index)=>`<button data-action="accomplishment-tab" data-value="${id}" class="${section===id?'active':''}" aria-current="${section===id?'page':'false'}"><span>${String(index+1).padStart(2,'0')}</span>${label}</button>`).join('')}</nav>${content}</div>`;
}

function experienceFilterOptions(key) {
  return [...new Set(experienceStories.map((story) => key === 'country' ? story.profile.country : key === 'stage' ? story.journey.stage : story.perspective))].sort();
}

function filteredExperiences() {
  const filters = state.experienceFilters;
  const query = filters.search.trim().toLowerCase();
  const [scopeCountry, scopeRegion] = (state.regionScope || 'All').split('::');
  return experienceStories.filter((story) => {
    const haystack = `${story.title} ${story.narrative} ${story.journey.targetCareer} ${story.profile.educationBoardOrRoute} ${story.tags.filter((tag) => !tag.includes(story.profile.country.toLowerCase())).join(' ')}`.toLowerCase();
    return (!query || haystack.includes(query))
      && ((state.regionScope || 'All') === 'All' || (story.profile.country === scopeCountry && story.profile.region === scopeRegion))
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
    <div class="experience-card-top"><span class="story-kind ${story.storyType}">${story.storyType === 'composite' ? 'Composite journey' : 'Journey scenario'}</span><span>${escapeHtml(titleCase(story.journey.stage))}</span></div>
    <h3>${escapeHtml(story.title)}</h3><p>${escapeHtml(story.narrative)}</p>
    <div class="experience-tags"><span>${escapeHtml(story.profile.educationBoardOrRoute)}</span><span>${escapeHtml(titleCase(story.journey.careerCluster))}</span><span>AI: ${escapeHtml(titleCase(story.aiJourney.usageStage))}</span></div>
    <button class="button-secondary" data-action="experience-detail" data-id="${story.id}">Read decisions & trade-offs →</button>
  </article>`;
}

function renderExperiences() {
  const filtered = filteredExperiences();
  const detail = experienceStories.find((story) => story.id === state.detailExperience);
  const stages = experienceFilterOptions('stage');
  const perspectives = experienceFilterOptions('perspective');
  const aiCount = experienceStories.filter((story) => story.aiJourney.usageStage !== 'not-used').length;
  if (detail) return `<div class="view-enter"><button class="back-button" data-action="experience-close">← Back to all experiences</button>
    <article class="experience-detail panel"><header><div><span class="story-kind ${detail.storyType}">${detail.storyType === 'composite' ? 'Composite journey' : 'Journey scenario'}</span><p class="eyebrow">${escapeHtml(titleCase(detail.journey.stage))} · ${escapeHtml(titleCase(detail.perspective))}</p><h2>${escapeHtml(detail.title)}</h2></div><div class="story-score"><strong>${detail.metrics.outcomeConfidence}/5</strong><span>outcome confidence<br>inside this journey</span></div></header><p class="story-disclosure">This is a curated learning account, not a verified testimonial. Region is filter metadata—not the premise of the story. Use its choices and trade-offs as questions for your own research.</p><p class="experience-narrative">${escapeHtml(detail.narrative)}</p>
    <div class="story-decision-grid"><section><span>THE DECISION</span><h3>${escapeHtml(detail.journey.majorDecision)}</h3><ul>${detail.journey.decisionInputs.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><span>ACTIONS</span><ul>${detail.journey.actions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><span>TRADE-OFFS</span><ul>${detail.journey.tradeoffs.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section><section><span>WHAT FOLLOWED</span><h3>${escapeHtml(detail.journey.outcome)}</h3><p>${escapeHtml(detail.journey.lesson)}</p></section></div>
    <section class="ai-story-panel"><span>AI JOURNEY</span><h3>AI acted as ${escapeHtml(titleCase(detail.aiJourney.role))}; the human remained ${escapeHtml(titleCase(detail.aiJourney.humanRole))}.</h3><p><strong>Use:</strong> ${escapeHtml(detail.aiJourney.usage)}</p><p><strong>Challenge:</strong> ${escapeHtml(detail.aiJourney.challenge)}</p><p><strong>Verification:</strong> ${escapeHtml(detail.aiJourney.verification)}</p><button class="button-primary" data-action="go" data-target="ai-journey">Open your AI Journey →</button></section></article></div>`;
  return `<div class="view-enter experience-view">
    <header class="section-header"><div><p class="eyebrow">EXPERIENCE EXCHANGE</p><h2 class="section-heading">Many routes. Honest trade-offs. No borrowed certainty.</h2><p class="section-copy">Search 500 decision journeys by stage, perspective, career, or barrier. Location never defines the story; use the Region selector in the top-right only when local context matters.</p></div><button class="button-primary" data-action="share-open">Share your experience</button></header>
    <section class="experience-metrics" aria-label="Experience corpus metrics"><article><strong>${experienceCorpusMetadata.storyCount}</strong><span>journey scenarios</span></article><article><strong>${stages.length}</strong><span>lifecycle stages</span></article><article><strong>${perspectives.length}</strong><span>perspectives</span></article><article><strong>${aiCount}</strong><span>AI-tagged journeys</span></article><article><strong>${state.sharedExperiences.length}</strong><span>your private stories</span></article></section>
    <form class="experience-filters" id="experienceFilters"><label class="search-wide">Search stories<input id="experienceSearch" value="${escapeHtml(state.experienceFilters.search)}" placeholder="Career, board, barrier, decision, lesson…"></label><label>Journey stage<select name="stage"><option>All</option>${stages.map((item) => `<option ${state.experienceFilters.stage === item ? 'selected' : ''} value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label>Perspective<select name="perspective"><option>All</option>${perspectives.map((item) => `<option ${state.experienceFilters.perspective === item ? 'selected' : ''} value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label>AI involvement<select name="ai"><option>All</option><option ${state.experienceFilters.ai === 'AI used' ? 'selected' : ''}>AI used</option><option ${state.experienceFilters.ai === 'No AI' ? 'selected' : ''}>No AI</option></select></label></form>
    <div class="results-line"><strong>${filtered.length} journeys found</strong><span>What worked for one learner may not transfer to another.</span></div>
    <section class="experience-grid">${filtered.slice(0, state.experienceLimit).map(renderExperienceCard).join('') || '<article class="panel empty-state"><h3>No matching journeys</h3><p>Widen one filter or search a different decision.</p></article>'}</section>
    ${filtered.length > state.experienceLimit ? `<button class="button-secondary load-more" data-action="experience-more">Show more (${filtered.length - state.experienceLimit} remaining)</button>` : ''}
    <section class="source-pathways panel"><div><p class="eyebrow">REAL-WORLD SOURCE PATHWAYS</p><h2>Go from scenarios to publisher-documented accounts.</h2><p>We link outward instead of copying stories or implying reuse rights. Institutional stories can be selective or sponsor-biased; verify dates and local relevance.</p></div><div class="source-links"><a href="https://repository.education.gov.in/" target="_blank" rel="noreferrer">India Ministry of Education ↗</a><a href="https://www.nsdcindia.org/sib" target="_blank" rel="noreferrer">NSDC Stories of Change ↗</a><a href="https://www.unicef.org/india/economic-opportunities-young-people" target="_blank" rel="noreferrer">UNICEF India YuWaah ↗</a><a href="https://myfuture.edu.au/case-studies" target="_blank" rel="noreferrer">Australia myfuture ↗</a><a href="https://skillsbuild.org/spotlights" target="_blank" rel="noreferrer">IBM SkillsBuild spotlights ↗</a></div></section>
  </div>`;
}

function renderShareExperience() {
  return `<div class="view-enter"><button class="back-button" data-action="share-close">← Back to exchange</button><section class="share-experience panel"><p class="eyebrow">SHARE YOUR EXPERIENCE</p><h2>Your story stays private on this device in this prototype.</h2><p class="section-copy">Use a pseudonym. Do not enter a phone number, exact address, exam ID, health record, or another person’s private information.</p><form id="shareExperienceForm" class="share-form"><label>Story title<input name="title" maxlength="100" required placeholder="The choice I had to make"></label><label>Pseudonym or initials<input name="name" maxlength="30" required placeholder="e.g. K, or River"></label><label>Country<input name="country" maxlength="50" value="India" required></label><label>Journey stage<select name="stage">${experienceFilterOptions('stage').map((item) => `<option value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label class="full">What choice were you facing?<textarea name="decision" maxlength="600" required></textarea></label><label class="full">What did you try, and what happened?<textarea name="outcome" maxlength="1200" required></textarea></label><label class="full">How did AI help or complicate the decision?<textarea name="ai" maxlength="600" placeholder="Optional"></textarea></label><label class="consent-check full"><input type="checkbox" required> I have removed identifying details and understand this is stored only in my browser.</label><button class="button-primary">Save private story →</button></form></section></div>`;
}

function generatedProfilePool() {
  const scope = state.generatedNames?.scope || 'Tamil Nadu';
  return generatedProfiles.filter((profile) => scope === 'Tamil Nadu'
    ? profile.profile.location.country === 'India' && profile.profile.location.region === 'Tamil Nadu'
    : scope === 'India' ? profile.profile.location.country === 'India' : profile.profile.location.country !== 'India');
}

function generatedDisplayName(seed) {
  const pool = generatedProfilePool();
  const hash = [...String(seed)].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return pool[hash % pool.length]?.alias || 'Community member';
}

function discussionDateTime(value) {
  if (!value || Number.isNaN(new Date(value).getTime())) return 'Date unavailable';
  return new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' }).format(new Date(value));
}

function allDiscussionTopics() {
  const starters = discussionTopics.map((topic) => ({
    ...topic,
    author: { ...topic.author, displayName: generatedDisplayName(`${topic.id}-author`) },
    responses: (topic.responses || []).map((response) => ({ ...response, author: { ...response.author, displayName: generatedDisplayName(response.id) } })),
  }));
  return [...state.userDiscussions, ...starters];
}

function discussionOptions(key) {
  if (key === 'region') return [...new Set(discussionTopics.flatMap((topic) => [topic.perspectiveContext.region, topic.perspectiveContext.district]).filter(Boolean))].sort((a, b) => a === 'Tamil Nadu' ? -1 : b === 'Tamil Nadu' ? 1 : a.localeCompare(b));
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
      && (filters.country === 'All' || topic.perspectiveContext?.country === filters.country)
      && (filters.region === 'All' || topic.perspectiveContext?.region === filters.region || topic.perspectiveContext?.district === filters.region)
      && (state.communityMode !== 'saved' || state.savedDiscussions.includes(topic.id));
  });
}

function renderDiscussionCard(topic) {
  const saved = state.savedDiscussions.includes(topic.id);
  return `<article class="discussion-row" data-action="discussion-detail" data-id="${topic.id}" role="link" tabindex="0" aria-label="Open discussion: ${escapeHtml(topic.title)}"><div class="discussion-row-author"><span>${escapeHtml(topic.author.displayName.slice(0, 2).toUpperCase())}</span></div><div class="discussion-row-main"><div class="discussion-meta"><span>${escapeHtml(titleCase(topic.category))}</span><span>${escapeHtml(titleCase(topic.journeyStage))}</span>${topic.status === 'resolved' ? '<span class="resolved-label">Helpful answer</span>' : ''}</div><h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.body)}</p><small>${escapeHtml(topic.author.displayName)} · ${escapeHtml(topic.perspectiveContext?.district || topic.author.region)} · <time datetime="${escapeHtml(topic.createdAt)}">${escapeHtml(discussionDateTime(topic.createdAt))}</time>${topic.attachments?.length ? ' · ▧ image attached' : ''}</small></div><div class="discussion-row-stats"><span><strong>${topic.metrics?.responseCount || topic.responses?.length || 0}</strong> replies</span><span><strong>${topic.metrics?.views || 0}</strong> views</span><button data-action="discussion-save" data-id="${topic.id}" aria-pressed="${saved}" aria-label="${saved ? 'Remove saved discussion' : 'Save discussion'}">${saved ? '★' : '☆'}</button></div></article>`;
}

function renderDiscussionDetail(topic) {
  const responses = [...(topic.responses || []), ...(state.discussionReplies[topic.id] || [])];
  return `<div class="view-enter"><button class="back-button" data-action="discussion-close">← Back to Discussions</button><article class="discussion-thread panel"><header><div class="discussion-meta"><span>${escapeHtml(titleCase(topic.category))}</span><span>${escapeHtml(topic.perspectiveContext?.district || topic.perspectiveContext?.region || '')}</span>${topic.status === 'resolved' ? '<span class="resolved-label">Helpful answer identified</span>' : ''}</div><h2>${escapeHtml(topic.title)}</h2><p>${escapeHtml(topic.body)}</p>${topic.imageData ? `<img class="thread-image" src="${topic.imageData}" alt="Image shared with this discussion">` : topic.attachments?.length ? '<div class="thread-attachment-placeholder">▧ Image shared with the opening post</div>' : ''}<div class="thread-author">Started by ${escapeHtml(topic.author.displayName)} · ${escapeHtml(topic.author.role)} · ${escapeHtml(topic.perspectiveContext?.district || topic.author.region)} · <time datetime="${escapeHtml(topic.createdAt)}">${escapeHtml(discussionDateTime(topic.createdAt))}</time></div><div class="thread-tools"><button data-action="discussion-save" data-id="${topic.id}">${state.savedDiscussions.includes(topic.id) ? '★ Saved' : '☆ Save'}</button><button data-action="thread-copy">⌁ Copy link</button><button data-action="thread-report">⚑ Report</button></div></header><p class="forum-disclosure">Personal experience is context, not proof. Verify changing eligibility, fees, placement, salary and policy claims with dated official sources.</p><section class="thread-responses"><h3>${responses.length} perspectives</h3>${responses.map((response, index) => `<article class="thread-response ${response.parentResponseId ? 'nested' : ''} ${topic.status === 'resolved' && index === 0 ? 'accepted' : ''}"><div><span>${escapeHtml(response.author.displayName.slice(0, 2).toUpperCase())}</span><strong>${escapeHtml(response.author.displayName)}</strong><small>${escapeHtml(response.author.role)} · ${escapeHtml(response.author.region || response.author.country)}</small></div><p>${escapeHtml(response.body)}</p>${response.imageData ? `<img class="reply-image" src="${response.imageData}" alt="Image shared with this reply">` : ''}<footer>${topic.status === 'resolved' && index === 0 ? '✓ Helpful answer · ' : ''}<time datetime="${escapeHtml(response.createdAt)}">${escapeHtml(discussionDateTime(response.createdAt))}</time> · ${response.helpfulVotes || 0} found this helpful</footer></article>`).join('')}</section><form id="discussionReplyForm" data-topic="${topic.id}" class="discussion-reply"><label>Add a respectful perspective<textarea name="reply" maxlength="1000" required placeholder="Write as you speak. Share what happened, what you are unsure about, and what you would verify."></textarea></label><label class="forum-upload">▧ Add an image<input type="file" name="image" accept="image/png,image/jpeg,image/webp"><small>Optional · PNG, JPG or WebP · maximum 1.5 MB</small></label><button class="button-primary">Post local reply →</button></form></article></div>`;
}

function renderNewDiscussion() {
  return `<div class="view-enter"><button class="back-button" data-action="discussion-new-close">← Back to Discussions</button><section class="share-experience panel"><p class="eyebrow">START A DISCUSSION</p><h2>Write the question you are actually carrying.</h2><p class="section-copy">Natural language is welcome. Remove exact school, address, phone, exam ID, medical records, and another person’s private information.</p><form id="newDiscussionForm" class="share-form"><label class="full">Discussion title<input name="title" maxlength="150" required placeholder="The sentence you would say to a trusted friend"></label><label>Category<select name="category">${discussionOptions('category').map((item) => `<option value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label>Journey stage<select name="stage">${discussionOptions('journeyStage').map((item) => `<option value="${item}">${titleCase(item)}</option>`).join('')}</select></label><label class="full">What happened, and what are you confused about?<textarea name="body" maxlength="1600" required placeholder="You do not need to sound certain or polished."></textarea></label><label class="forum-upload full">▧ Share an image<input type="file" name="image" accept="image/png,image/jpeg,image/webp"><small>Optional · PNG, JPG or WebP · maximum 1.5 MB · remove names and identifiers</small></label><label class="consent-check full"><input type="checkbox" required> I removed identifying details and understand this prototype stores the post only in my browser.</label><button class="button-primary">Publish to this device →</button></form></section></div>`;
}

function renderStudentDirectory() {
  const detail = generatedProfiles.find((student) => student.id === state.detailStudent);
  if (detail) return `<div class="view-enter"><button class="back-button" data-action="student-detail-close">← Back to demo students</button><article class="demo-student-detail panel"><header><span class="demo-label">FICTIONAL DEMO PROFILE</span><h2>${escapeHtml(detail.alias)}</h2><p>${escapeHtml(detail.disclosure)}</p></header><div class="student-context-grid"><section><span>PLACE & LEARNING</span><h3>${escapeHtml(detail.profile.location.region)}, ${escapeHtml(detail.profile.location.country)}</h3><p>${escapeHtml(titleCase(detail.profile.education.stage))} · ${escapeHtml(detail.profile.education.curriculum)} · ${escapeHtml(detail.profile.education.stream)}</p></section><section><span>CURRENT DECISION</span><h3>${escapeHtml(detail.journey.currentDecision)}</h3><p>${escapeHtml(detail.journey.goal)}</p></section><section><span>ACCESS CONTEXT</span><h3>${escapeHtml(titleCase(detail.context.digitalAccess.device))} · ${escapeHtml(titleCase(detail.context.digitalAccess.connectivity))}</h3><p>${escapeHtml(detail.context.digitalAccess.note)} Accessibility context: ${escapeHtml(titleCase(detail.context.accessibility.supportNeed))}.</p></section><section><span>AI PRACTICE</span><h3>${escapeHtml(titleCase(detail.aiPractice.usageLevel))}</h3><p>${escapeHtml(detail.aiPractice.verificationHabit)} ${escapeHtml(detail.aiPractice.boundary)}</p></section></div><div class="student-discussion-intent"><span>WANTS TO DISCUSS</span><p>${escapeHtml(detail.community.wantsToDiscuss)}</p><button class="button-primary" data-action="student-to-discussions" data-value="${escapeHtml(detail.community.wantsToDiscuss)}">Find related discussions →</button></div></article></div>`;
  const filters = state.studentDirectoryFilters;
  const query = filters.search.trim().toLowerCase();
  const countries = [...new Set(generatedProfiles.map((student) => student.profile.location.country))].sort();
  const stages = [...new Set(generatedProfiles.map((student) => student.profile.education.stage))].sort();
  const filtered = generatedProfiles.filter((student) => {
    const haystack = `${student.alias} ${student.profile.location.country} ${student.profile.location.region} ${student.profile.languages.join(' ')} ${student.profile.education.curriculum} ${student.profile.education.stream} ${student.journey.goal} ${student.community.wantsToDiscuss}`.toLowerCase();
    return (!query || haystack.includes(query)) && (filters.country === 'All' || student.profile.location.country === filters.country) && (filters.stage === 'All' || student.profile.education.stage === filters.stage);
  });
  return `<div class="view-enter"><header class="section-header"><div><p class="eyebrow">CONTEXT DIRECTORY</p><h2 class="section-heading">Explore backgrounds without turning them into stereotypes.</h2><p class="section-copy">These starter profiles help compare access, location and learning contexts. They must never be used to predict what a group believes or who will succeed.</p></div></header><form class="student-directory-filters" id="studentDirectoryFilters"><label class="search-wide">Search contexts<input id="studentDirectorySearch" value="${escapeHtml(filters.search)}" placeholder="State, country, board, language, goal…"></label><label>Country<select name="country"><option>All</option>${countries.map((item) => `<option ${filters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><label>Stage<select name="stage"><option>All</option>${stages.map((item) => `<option value="${item}" ${filters.stage === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label></form><div class="results-line"><strong>${filtered.length} profiles found</strong><span>900 India · 100 international · 21 countries</span></div><section class="student-directory-grid">${filtered.slice(0, state.studentDirectoryLimit).map((student) => `<article><div><span>${escapeHtml(student.alias.slice(-2))}</span><span class="demo-label">STARTER</span></div><h3>${escapeHtml(student.alias)}</h3><p>${escapeHtml(student.profile.location.region)} · ${escapeHtml(student.profile.location.country)}</p><strong>${escapeHtml(titleCase(student.profile.education.stage))} · ${escapeHtml(student.profile.education.curriculum)}</strong><small>${escapeHtml(student.journey.goal)}</small><button class="button-secondary" data-action="student-detail" data-id="${student.id}">View context →</button></article>`).join('')}</section>${filtered.length > state.studentDirectoryLimit ? `<button class="button-secondary load-more" data-action="student-more">Show more (${filtered.length - state.studentDirectoryLimit} remaining)</button>` : ''}</div>`;
}

function renderCommunityTabs() {
  const tabs = [['discussions', 'Discussions'], ['experiences', 'Experience Exchange'], ['saved', 'Saved']];
  return `<nav class="community-tabs" aria-label="Community sections">${tabs.map(([id, label]) => `<button class="${state.communityMode === id ? 'active' : ''}" data-action="community-mode" data-value="${id}">${label}${id === 'saved' && state.savedDiscussions.length ? ` <span>${state.savedDiscussions.length}</span>` : ''}</button>`).join('')}</nav>`;
}

function renderDiscussionsLegacy() {
  if (state.communityMode === 'experiences') return `${renderCommunityTabs()}${state.shareExperienceOpen ? renderShareExperience() : renderExperiences()}`;
  if (state.newDiscussionOpen) return `${renderCommunityTabs()}${renderNewDiscussion()}`;
  const detail = allDiscussionTopics().find((topic) => topic.id === state.detailDiscussion);
  if (detail) return `${renderCommunityTabs()}${renderDiscussionDetail(detail)}`;
  const filtered = filteredDiscussions();
  const categories = discussionOptions('category');
  const stages = discussionOptions('journeyStage');
  const countries = discussionOptions('country');
  const regions = discussionOptions('region');
  return `${renderCommunityTabs()}<div class="view-enter discussions-view"><header class="forum-header"><div><p class="eyebrow">TAMIL NADU · INITIAL ROLLOUT</p><h2>Real questions deserve room to be messy.</h2><p>Ask, confess uncertainty, compare lived context, and verify anything consequential before acting.</p></div><div class="forum-header-actions"><label class="forum-region-filter">Region<select name="region" form="discussionFilters"><option>All</option>${regions.map((item) => `<option value="${item}" ${state.discussionFilters.region === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><button class="button-primary" data-action="discussion-new">${isGuest() ? 'Create a profile to post' : 'Start a discussion'}</button></div></header><section class="forum-summary-strip" aria-label="Community summary"><span><strong>${discussionCorpusMetadata.topicCount}</strong> discussions</span><span><strong>${discussionCorpusMetadata.responseCount}</strong> replies</span><span><strong>${discussionCorpusMetadata.coverage.categories.length}</strong> decision topics</span><span><strong>${demoStudentMetadata.profileCount}</strong> contexts</span></section><form class="discussion-filters" id="discussionFilters"><label class="search-wide">Search discussions<input id="discussionSearch" value="${escapeHtml(state.discussionFilters.search)}" placeholder="Try ‘campus placement’, ‘NEET fear’ or ‘Coimbatore hostel’"></label><label>Category<select name="category"><option>All</option>${categories.map((item) => `<option value="${item}" ${state.discussionFilters.category === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Journey stage<select name="stage"><option>All</option>${stages.map((item) => `<option value="${item}" ${state.discussionFilters.stage === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Country<select name="country"><option>All</option>${countries.map((item) => `<option ${state.discussionFilters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></form><div class="results-line"><strong>${filtered.length} discussions</strong><span>No public direct messages. Report unsafe content from inside a thread.</span></div><section class="discussion-list" aria-label="Discussion list"><div class="discussion-list-head"><span>Topic</span><span>Activity</span></div>${filtered.slice(0, state.discussionLimit).map(renderDiscussionCard).join('') || '<div class="forum-empty"><strong>No discussions match these filters.</strong><span>Try All regions or remove one filter.</span></div>'}</section>${filtered.length > state.discussionLimit ? `<button class="button-secondary load-more" data-action="discussion-more">Show more (${filtered.length - state.discussionLimit} remaining)</button>` : ''}</div>`;
}

function renderDiscussions() {
  if (state.communityMode === 'experiences') return state.shareExperienceOpen ? renderShareExperience() : renderExperiences();
  if (state.newDiscussionOpen) return renderNewDiscussion();
  const detail = allDiscussionTopics().find((topic) => topic.id === state.detailDiscussion);
  if (detail) return renderDiscussionDetail(detail);
  const filtered = filteredDiscussions();
  const categories = discussionOptions('category');
  const stages = discussionOptions('journeyStage');
  const countries = discussionOptions('country');
  const regions = discussionOptions('region');
  return `<div class="view-enter discussions-view"><section class="forum-unified"><header class="forum-header"><div><p class="eyebrow">TAMIL NADU · INITIAL ROLLOUT</p><h2>Real questions deserve room to be messy.</h2><p>Ask, confess uncertainty, compare lived context, and verify consequential claims.</p></div><button class="button-primary" data-action="discussion-new">${isGuest() ? 'Create a profile to post' : 'Start a discussion'}</button></header><form class="forum-command forum-command-without-tabs" id="discussionFilters"><label class="forum-search"><span>Search</span><input id="discussionSearch" value="${escapeHtml(state.discussionFilters.search)}" placeholder="Campus placement, NEET fear, hostel…"></label><label class="forum-region-filter"><span>Region</span><select name="region"><option>All</option>${regions.map((item) => `<option value="${item}" ${state.discussionFilters.region === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><details class="forum-more"><summary>More filters</summary><div><label>Category<select name="category"><option>All</option>${categories.map((item) => `<option value="${item}" ${state.discussionFilters.category === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Journey stage<select name="stage"><option>All</option>${stages.map((item) => `<option value="${item}" ${state.discussionFilters.stage === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Country<select name="country"><option>All</option>${countries.map((item) => `<option ${state.discussionFilters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></div></details><span class="forum-result-count"><strong>${filtered.length}</strong> discussions</span></form></section><section class="discussion-list" aria-label="Discussion list"><div class="discussion-list-head"><span>Topic</span><span>Activity</span></div>${filtered.slice(0, state.discussionLimit).map(renderDiscussionCard).join('') || '<div class="forum-empty"><strong>No discussions match these filters.</strong><span>Try All regions or remove one filter.</span></div>'}</section>${filtered.length > state.discussionLimit ? `<button class="button-secondary load-more" data-action="discussion-more">Show more (${filtered.length - state.discussionLimit} remaining)</button>` : ''}</div>`;
}

const aiCapabilities = [
  ['AI literacy', 'Know what a tool can and cannot establish'], ['Verification', 'Check consequential claims against current authority'], ['Privacy & consent', 'Protect sensitive data and other people'], ['Bias & fairness', 'Ask whose context and language are missing'], ['Deep-skill continuity', 'Keep unaided human practice alive'], ['Ethics & provenance', 'Show tool use, sources, checks, and ownership'],
];

const journeyWorkspaceTabs = [['overview', 'Overview'], ['journey-stage', 'Year path'], ['roadmap', 'Action Plan'], ['evidence', 'Accomplishments']];
const callingWorkspaceTabs = [
  ['compass', 'Know Thyself'], ['assessments', 'Assessments'], ['explore', 'Career worlds'],
  ['compare', 'Compare'], ['ai-journey', 'AI lens'],
];

const callingAssessmentTypes = [
  { id: 'personality', number: '01', label: 'Personality', copy: 'How you naturally prefer to work, relate and decide.' },
  { id: 'desire', number: '02', label: 'Burning desire', copy: 'What you would willingly sustain when nobody is praising you.' },
  { id: 'capability', number: '03', label: 'Capability', copy: 'What you can demonstrate today through action and evidence.' },
];

const callingAssessmentTraits = [
  { id: 'agency', label: 'Agency & ownership', short: 'Agency', color: '#8b5cf6', description: 'Taking responsibility for choices and carrying work to completion.', experiment: 'own one bounded decision and finish it', evidence: 'a decision log showing trade-offs and follow-through', questions: {
    personality: ['How naturally do you step forward when a decision has no obvious owner?', 'Prefer clear direction', 'Prefer ownership'], desire: ['How strongly do you want your work to carry your signature and responsibility?', 'Happy to contribute', 'Want to own outcomes'], capability: ['How reliably can you plan and finish self-directed work today?', 'Need close support', 'Finish independently'],
  } },
  { id: 'people', label: 'Human connection', short: 'People', color: '#ec4899', description: 'Listening, collaborating and making another person’s situation better.', experiment: 'help one real person solve a problem and ask what changed', evidence: 'specific feedback from a learner, teammate, customer or community member', questions: {
    personality: ['How much energy do you gain from understanding and working with people?', 'Prefer solo focus', 'Energised by people'], desire: ['How strongly must your future work improve a person’s life directly?', 'Impact can be indirect', 'Need visible human impact'], capability: ['How well can you listen, explain and resolve disagreement today?', 'Still practising', 'Others trust me'],
  } },
  { id: 'mastery', label: 'Inquiry & mastery', short: 'Mastery', color: '#0ea5e9', description: 'Staying with difficult questions long enough to develop real depth.', experiment: 'investigate one difficult question beyond the first easy answer', evidence: 'a sourced explanation, solved problem set or expert critique', questions: {
    personality: ['How naturally do you keep investigating after the quick answer is available?', 'Prefer quick closure', 'Keep going for depth'], desire: ['How much do you want to become exceptionally good at a difficult craft?', 'Breadth is enough', 'Deep mastery matters'], capability: ['How well can you learn, verify and explain a hard idea without hiding gaps?', 'Need a method', 'Can show depth'],
  } },
  { id: 'creation', label: 'Creation & expression', short: 'Creation', color: '#f97316', description: 'Turning an idea into something original, useful or expressive.', experiment: 'make a small original artifact for a defined audience', evidence: 'a prototype, performance, essay, design or revision trail', questions: {
    personality: ['How often do you respond to a problem by wanting to make something?', 'Prefer using proven work', 'Want to create'], desire: ['How important is original expression or invention in the life you want?', 'Optional', 'Central to my life'], capability: ['How well can you turn an idea into a finished, revisable artifact today?', 'Mostly ideas', 'Repeated finished work'],
  } },
  { id: 'structure', label: 'Structure & security', short: 'Structure', color: '#14b8a6', description: 'Creating reliability, routines and a life that protects important commitments.', experiment: 'design and follow a realistic one-week plan', evidence: 'completed commitments, deadlines and a routine that survived disruption', questions: {
    personality: ['How much does a predictable rhythm help you do your best work?', 'Thrive in fluidity', 'Thrive with structure'], desire: ['How important are stability, location and dependable time for family?', 'Can trade stability', 'Must protect stability'], capability: ['How reliably do you organise time, commitments and details today?', 'Often reactive', 'Dependably organised'],
  } },
  { id: 'adaptability', label: 'Adaptability & courage', short: 'Adaptability', color: '#eab308', description: 'Learning through uncertainty, recovery and unfamiliar situations.', experiment: 'attempt one unfamiliar, low-risk challenge where failure is possible', evidence: 'a reflection showing what failed, what changed and what you tried next', questions: {
    personality: ['How comfortable are you acting when the path and outcome are uncertain?', 'Need assurance', 'Can navigate uncertainty'], desire: ['How strongly do you want novelty, travel, change or difficult new territory?', 'Prefer rooted continuity', 'Seek new frontiers'], capability: ['How well do you recover, revise and continue after a setback today?', 'Setbacks derail me', 'Adapt and continue'],
  } },
  { id: 'stewardship', label: 'Stewardship & responsibility', short: 'Stewardship', color: '#22c55e', description: 'Protecting people, ethics, resources, family or institutions beyond yourself.', experiment: 'take responsibility for something that affects other people', evidence: 'trusted delivery plus a record of an ethical or resource trade-off', questions: {
    personality: ['How naturally do you notice what must be protected or cared for?', 'Focus on my task', 'Notice wider responsibility'], desire: ['How important are duty, family legacy, service and long-term consequence?', 'Personal freedom first', 'Duty gives meaning'], capability: ['How consistently can others trust your judgment and follow-through today?', 'Building trust', 'Trusted with consequences'],
  } },
];

const assessmentStageOrder = ['grade10', 'grade11', 'grade12', 'college1', 'college2', 'college3', 'collegeFinal', 'firstJob', 'dreamJob'];
const assessmentStageFrames = {
  grade10: { next: 'Grade 11', current: (t) => `Run a 7-day test: ${t.experiment}. Record what felt energising, draining and worth repeating.`, bridge: (t) => `Carry ${t.evidence} into one subject routine or mini-project before choosing a route.` },
  grade11: { next: 'Grade 12', current: (t) => `Use one school month to ${t.experiment}; protect subject fundamentals while you test fit.`, bridge: (t) => `Turn ${t.evidence} into a stronger project, exam habit or course-choice criterion.` },
  grade12: { next: 'College year 1', current: (t) => `Test this trait inside entrance preparation, applications or a real project—not only through reflection.`, bridge: (t) => `Choose one course or campus opportunity where ${t.short.toLowerCase()} can be practised and evidenced from the first term.` },
  college1: { next: 'College year 2', current: (t) => `Build foundations through ${t.experiment} in a club, lab, studio or community setting.`, bridge: (t) => `Use ${t.evidence} to select an elective and one deeper special-interest project.` },
  college2: { next: 'College year 3', current: (t) => `Choose a course and project that make you practise ${t.short.toLowerCase()}, not merely collect a certificate.`, bridge: (t) => `Convert ${t.evidence} into internship, research or field-work proof.` },
  college3: { next: 'Final college year', current: (t) => `Use an internship, research role or serious project to test ${t.short.toLowerCase()} under real constraints.`, bridge: (t) => `Present ${t.evidence} in your final project and campus-interview story.` },
  collegeFinal: { next: 'First job', current: (t) => `Make ${t.short.toLowerCase()} visible in your capstone, portfolio and campus interview evidence.`, bridge: (t) => `Select a first role where you can keep building this trait during the first 90 days.` },
  firstJob: { next: 'Dream-role runway', current: (t) => `Deliver one measurable work outcome that proves ${t.short.toLowerCase()} without neglecting health or ethics.`, bridge: (t) => `Review the evidence after 6 months and choose the next role, mentor or skill gap deliberately.` },
  dreamJob: { next: 'Next 12-month review', current: (t) => `Practise ${t.short.toLowerCase()} at a higher level through meaningful work, mastery or mentoring.`, bridge: (t) => `Reassess whether the role still serves the life and contribution you intend—not just its title.` },
};

function renderJourneyWorkspaceTabs() {
  const yearTabs = journeyStops().map((stop, index) => {
    const stageLabel = stop.step.split('·').slice(1).join('·').trim() || stop.step;
    const current = state.view === 'journey-stage' && state.activeJourneyStage === stop.id;
    return `<button data-journey-stage="${stop.id}" class="railway-station ${stop.status === 'active' ? 'next-stop' : stop.status} ${current ? 'active' : ''}" aria-current="${current ? 'step' : 'false'}"><span class="station-number">${String(index + 1).padStart(2, '0')}</span><i class="station-node" aria-hidden="true"><b></b></i><span class="station-copy"><strong>${escapeHtml(stageLabel)}</strong><small>${escapeHtml(stop.title)}</small></span></button>`;
  }).join('');
  return `<div class="journey-inline-navigation railway-journey"><nav class="journey-workspace-tabs" aria-label="My Journey railway"><button data-action="go" data-target="overview" class="railway-station route-map ${state.view === 'overview' ? 'active' : ''}" aria-current="${state.view === 'overview' ? 'page' : 'false'}"><span class="station-number">00</span><i class="station-node" aria-hidden="true"><b></b></i><span class="station-copy"><strong>Overview</strong><small>Journey map</small></span></button>${yearTabs}</nav></div>`;
}

function renderCallingWorkspaceTabs() {
  return `<nav class="journey-workspace-tabs calling-workspace-tabs" aria-label="Find Your Calling and decision tools">${callingWorkspaceTabs.map(([view, label]) => `<button data-action="go" data-target="${view}" class="${state.view === view || (state.view === 'calling' && view === 'assessments') ? 'active' : ''}">${label}</button>`).join('')}</nav>`;
}

const callingDirections = [
  { id: 'educator', title: 'Educator & capability builder', motives: ['Teach & guide', 'Guide', 'Bridge'], arenas: 'Teaching, mentoring, learning design, counselling, community education', experiment: 'Teach one difficult idea to three learners, then ask what genuinely became clearer.', caution: 'Protect against emotional overextension and institutions that value paperwork over learners.' },
  { id: 'builder', title: 'Purpose-led builder', motives: ['Build & employ', 'Builder', 'Invent'], arenas: 'Entrepreneurship, product leadership, social enterprise, operations, institution building', experiment: 'Find one repeated local problem and build the smallest useful solution with a real user.', caution: 'Do not confuse scale, fundraising or title with usefulness; test whether uncertainty suits your life.' },
  { id: 'public', title: 'Public-interest problem solver', motives: ['Serve society', 'Justice', 'Ethical leader', 'Courage'], arenas: 'Civil services, public policy, law, development, civic technology, advocacy', experiment: 'Study one public problem from citizen, frontline-worker and policy perspectives before proposing a fix.', caution: 'Look for roles where conscience and patient systems work can coexist without consuming your health.' },
  { id: 'creator', title: 'Creator & cultural voice', motives: ['Create', 'Creator', 'Preserve', 'Bridge'], arenas: 'Writing, design, film, performance, communication, heritage and language work', experiment: 'Publish one small original work for a defined audience and notice whether revision energises you.', caution: 'Separate love of making from desire for recognition, and design a realistic income bridge.' },
  { id: 'healer', title: 'Care & healing professional', motives: ['Care & heal', 'Healer', 'Family & community'], arenas: 'Medicine, allied health, psychology, counselling, rehabilitation, patient support', experiment: 'Shadow or interview a practitioner about ordinary days, emotional load and clinical realities.', caution: 'Care is broader than medicine. Respect any boundary around blood, crisis, health or relentless availability.' },
  { id: 'researcher', title: 'Researcher & knowledge creator', motives: ['Discover', 'Discoverer', 'Craftsperson'], arenas: 'Science, social research, academia, R&D, analysis, evidence and evaluation', experiment: 'Investigate one unanswered question for two weeks and produce a sourced explanation or prototype.', caution: 'Test whether you enjoy slow uncertainty and repeated failure, not only the pleasure of finding answers.' },
  { id: 'steward', title: 'Steward of land, culture & continuity', motives: ['Land & climate', 'Steward', 'Preserve', 'Family & community'], arenas: 'Climate, conservation, agriculture, heritage, archives, responsible tourism, local institutions', experiment: 'Join one field-based preservation or environmental effort and document the practical trade-offs.', caution: 'Good intentions need technical depth, community consent and a financially sustainable route.' },
  { id: 'technologist', title: 'Human-centred technologist', motives: ['Invent', 'Craftsperson', 'Builder', 'Discoverer'], arenas: 'Engineering, product design, computing, applied AI, architecture and technical crafts', experiment: 'Build a working tool for a person—not a portfolio prompt—and observe them use it without guidance.', caution: 'A technology path fits only if sustained screen time, abstraction and continuous relearning remain acceptable.' },
  { id: 'connector', title: 'Cross-cultural connector', motives: ['Explore', 'Bridge', 'Creator'], arenas: 'International relations, journalism, languages, diplomacy, travel, research and community partnerships', experiment: 'Create a small project with people from another language, region or worldview and resolve one misunderstanding.', caution: 'Distinguish meaningful field engagement from simply wanting novelty or travel.' },
  { id: 'anchor', title: 'Community & family anchor', motives: ['Family & community', 'Family anchor', 'Good life', 'Guide'], arenas: 'Stable local professions, family enterprise, education, care, administration and community leadership', experiment: 'Design an ordinary ideal week, then compare three careers by presence, predictability and contribution.', caution: 'Choosing rootedness is not a lack of ambition; still protect your own growth from unspoken obligation.' },
  { id: 'craft', title: 'Independent master craftsperson', motives: ['Craftsperson', 'Creator', 'Invent', 'Good life'], arenas: 'Specialist engineering, design, skilled trades, artisan practice, technical consulting and independent work', experiment: 'Practise one demanding skill long enough to receive expert critique on precision, not just enthusiasm.', caution: 'Choose mastery deliberately and build visibility, income resilience and community without chasing hierarchy.' },
  { id: 'ethical-leader', title: 'Ethical organisational leader', motives: ['Ethical leader', 'Builder', 'Justice', 'Family anchor'], arenas: 'Responsible management, people leadership, governance, finance, operations and institutional reform', experiment: 'Lead a small team decision where resources are limited, explain the trade-off and invite dissent.', caution: 'Leadership fit comes from accepting accountability and conflict, not from title, status or promotion alone.' },
];

const callingBoundaryGuidance = {
  Integrity: 'work whose incentives do not require manipulation', 'Human dignity': 'respectful institutions and fair treatment', Corruption: 'clear governance and ethical escalation', Ownership: 'visible authorship and honest evidence',
  'Family duty': 'predictable flexibility when family genuinely needs you', Relationships: 'growth that does not consume every close relationship', Roots: 'a route compatible with geographic rootedness',
  Health: 'sustainable pace and health protection', Safety: 'psychologically and physically safe workplaces', Lifestyle: 'limited all-day screen dependence', 'Work reality': 'non-clinical or carefully tested care settings', Meaning: 'visible usefulness beyond status',
};

function callingSynthesis() {
  const categoryScores = new Map();
  const evidence = [];
  for (const question of callingQuestions) {
    const options = (state.calling.selections[question.id] || []).map((id) => question.options.find((option) => option.id === id)).filter(Boolean);
    const counts = options.reduce((map, option) => map.set(option.category, (map.get(option.category) || 0) + 1), new Map());
    const weight = question.id === 'freedom' ? 3 : question.id === 'legacy' ? 2.4 : 1.4;
    for (const [category, count] of counts) {
      const score = weight * (.65 + .35 * Math.min(count, 3));
      categoryScores.set(category, (categoryScores.get(category) || 0) + score);
      evidence.push({ question: question.id, category, count });
    }
  }
  const customText = Object.values(state.calling.custom).join(' ').toLowerCase();
  const customSignals = [
    ['Teach & guide', /teach|mentor|coach|student|explain/], ['Build & employ', /business|company|employ|entrepreneur|build/], ['Serve society', /society|public|community|service|people/],
    ['Create', /write|art|music|film|design|create|dance/], ['Care & heal', /care|heal|health|counsel|patient/], ['Discover', /research|discover|science|knowledge|question/],
    ['Land & climate', /climate|farm|land|water|nature|environment/], ['Invent', /invent|technology|engineer|tool|product/], ['Justice', /justice|rights|fair|law/],
    ['Explore', /travel|explore|culture|language|world/], ['Preserve', /heritage|tradition|preserve|history/], ['Family & community', /family|parent|children|home|root/],
  ];
  for (const [category, pattern] of customSignals) if (pattern.test(customText)) categoryScores.set(category, (categoryScores.get(category) || 0) + 1.7);
  const ranked = callingDirections.map((direction) => ({ ...direction, score: direction.motives.reduce((sum, motive) => sum + (categoryScores.get(motive) || 0), 0), reasons: direction.motives.filter((motive) => categoryScores.has(motive)).sort((a, b) => categoryScores.get(b) - categoryScores.get(a)) })).sort((a, b) => b.score - a.score);
  const boundaries = evidence.filter((item) => item.question === 'boundary').sort((a, b) => b.count - a.count).map((item) => ({ category: item.category, guidance: callingBoundaryGuidance[item.category] })).filter((item) => item.guidance);
  return { ranked: ranked.slice(0, 3), boundaries: boundaries.slice(0, 4), evidenceCount: evidence.length, complete: callingQuestions.every((question) => state.calling.selections[question.id]?.length || state.calling.custom[question.id]?.trim()) };
}

function callingAssessmentResults() {
  return callingAssessmentTraits.map((trait) => {
    const entries = callingAssessmentTypes.map((type) => ({ value: Number(state.calling.assessment?.[type.id]?.[trait.id] ?? 0), answered: Object.hasOwn(state.calling.assessment?.[type.id] || {}, trait.id) }));
    const values = entries.map((entry) => entry.value);
    const answered = entries.filter((entry) => entry.answered).map((entry) => entry.value);
    const score = answered.length ? answered.reduce((sum, value) => sum + value, 0) / answered.length : 0;
    const [personality, desire, capability] = values;
    let insight = 'More evidence is needed before interpreting this trait.';
    if (answered.length === 3 && desire >= 7 && capability <= 4) insight = 'Desire is ahead of demonstrated capability. Treat that as a reason to build proof, not to abandon the direction.';
    else if (answered.length === 3 && capability >= 7 && desire <= 4) insight = 'You can do this well, but capability alone does not mean you should build a life around it.';
    else if (answered.length === 3 && Math.min(...values) >= 7) insight = 'Preference, desire and demonstrated capability currently reinforce one another.';
    else if (answered.length === 3 && Math.max(...values) - Math.min(...values) >= 4) insight = 'The three lenses disagree. A small real-world test is more useful than averaging the tension away.';
    else if (answered.length === 3) insight = 'The three lenses are reasonably consistent; the next step is to test this pattern in real work.';
    return { ...trait, values, coverage: answered.length, score, insight };
  });
}

function callingAssessmentCoverage() {
  return callingAssessmentTypes.reduce((total, type) => total + callingAssessmentTraits.filter((trait) => Object.hasOwn(state.calling.assessment?.[type.id] || {}, trait.id)).length, 0);
}

function assessmentStageContext() {
  const id = mentorStageId();
  const index = Math.max(0, assessmentStageOrder.indexOf(id));
  return { id, config: yearMilestoneConfig[id] || yearMilestoneConfig.grade10, frame: assessmentStageFrames[id] || assessmentStageFrames.grade10, index };
}

function assessmentRadar(results) {
  const center = 150;
  const radius = 104;
  const point = (index, scale = 1) => {
    const angle = (-Math.PI / 2) + (index * Math.PI * 2 / results.length);
    return [center + Math.cos(angle) * radius * scale, center + Math.sin(angle) * radius * scale];
  };
  const polygon = (scale) => results.map((_, index) => point(index, scale).map((value) => value.toFixed(1)).join(',')).join(' ');
  const scorePolygon = results.map((result, index) => point(index, result.score / 10).map((value) => value.toFixed(1)).join(',')).join(' ');
  return `<svg class="assessment-radar" viewBox="0 0 300 300" role="img" aria-labelledby="assessmentRadarTitle"><title id="assessmentRadarTitle">Seven-trait assessment profile. Unanswered traits remain at the centre.</title>${[.25,.5,.75,1].map((ring) => `<polygon class="radar-ring" points="${polygon(ring)}"/>`).join('')}${results.map((result, index) => { const [x, y] = point(index); return `<line class="radar-axis" x1="${center}" y1="${center}" x2="${x}" y2="${y}"/><circle cx="${x}" cy="${y}" r="4" fill="${result.color}"/>`; }).join('')}<polygon class="radar-result" points="${scorePolygon}"/>${results.map((result, index) => { const [x, y] = point(index, 1.22); return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">${escapeHtml(result.short)}</text>`; }).join('')}</svg>`;
}

function renderCallingFlowTabs() {
  const mode = state.calling.mode || 'assessment';
  const assessed = callingAssessmentCoverage();
  const reflected = callingQuestions.filter((question) => state.calling.selections[question.id]?.length || state.calling.custom[question.id]?.trim()).length;
  return `<nav class="calling-flow-tabs" aria-label="Student assessment workflow"><button data-action="calling-mode" data-value="assessment" class="${mode === 'assessment' ? 'active' : ''}"><span>01</span><strong>Assess</strong><small>${assessed}/21 signals</small></button><button data-action="calling-mode" data-value="questions" class="${mode === 'questions' ? 'active' : ''}"><span>02</span><strong>Reflect</strong><small>${reflected}/3 questions</small></button><button data-action="calling-mode" data-value="recommendations" class="${mode === 'recommendations' ? 'active' : ''}"><span>03</span><strong>Act</strong><small>7 next moves</small></button></nav>`;
}

function renderStudentAssessment() {
  const activeId = state.calling.activeAssessment || 'personality';
  const active = callingAssessmentTypes.find((type) => type.id === activeId) || callingAssessmentTypes[0];
  const answered = callingAssessmentTraits.filter((trait) => Object.hasOwn(state.calling.assessment?.[active.id] || {}, trait.id)).length;
  const activeIndex = callingAssessmentTypes.findIndex((type) => type.id === active.id);
  return `<section class="student-assessment"><header class="assessment-head"><div><p class="eyebrow">THREE LENSES · ONE PERSON</p><h2>Separate preference, purpose and present proof.</h2></div><div class="assessment-completion"><strong>${callingAssessmentCoverage()}</strong><span>of 21 signals</span></div></header><nav class="assessment-type-tabs" aria-label="Assessment type">${callingAssessmentTypes.map((type) => { const count = callingAssessmentTraits.filter((trait) => Object.hasOwn(state.calling.assessment?.[type.id] || {}, trait.id)).length; return `<button data-action="assessment-type" data-value="${type.id}" class="${type.id === active.id ? 'active' : ''}" aria-pressed="${type.id === active.id}"><span>${type.number}</span><strong>${type.label}</strong><small>${count}/7</small></button>`; }).join('')}</nav><div class="assessment-frame"><header><div><span>${active.number} · ${escapeHtml(active.label)}</span><h3>${escapeHtml(active.copy)}</h3></div><strong>${answered}/7 answered</strong></header><div class="assessment-trait-list">${callingAssessmentTraits.map((trait, index) => { const question = trait.questions[active.id]; const hasValue = Object.hasOwn(state.calling.assessment?.[active.id] || {}, trait.id); const value = Number(state.calling.assessment?.[active.id]?.[trait.id] ?? 0); return `<article class="assessment-trait-row ${hasValue ? 'answered' : ''}" style="--trait:${trait.color};--rating-color:${hasValue ? ratingColor(value) : '#8b94a7'}"><div class="trait-number">${String(index + 1).padStart(2, '0')}</div><div class="trait-question"><div class="trait-prompt"><strong>${escapeHtml(trait.label)}</strong><span>${escapeHtml(question[0])}</span></div><div class="trait-scale nps-scale" role="radiogroup" aria-label="${escapeHtml(trait.label)}: ${escapeHtml(question[0])}"><div class="nps-options">${Array.from({ length: 11 }, (_, score) => `<label class="nps-score" title="${score === 0 ? escapeHtml(question[1]) : score === 10 ? escapeHtml(question[2]) : `${score} out of 10`}"><input type="radio" name="assessment-${active.id}-${trait.id}" value="${score}" data-calling-assessment="${active.id}:${trait.id}" ${hasValue && value === score ? 'checked' : ''}><span>${score}</span></label>`).join('')}</div><div class="nps-anchors"><small>${escapeHtml(question[1])}</small><output id="assessment-${active.id}-${trait.id}-readout">${hasValue ? `${value}/10` : 'Not answered'}</output><small>${escapeHtml(question[2])}</small></div></div></div></article>`; }).join('')}</div><footer><p>Capability means evidence available now—not fixed potential. A low answer may simply mean you have not had the opportunity yet.</p><button class="button-primary" data-action="assessment-next" data-value="${activeIndex < 2 ? callingAssessmentTypes[activeIndex + 1].id : 'recommendations'}">${activeIndex < 2 ? `Continue to ${callingAssessmentTypes[activeIndex + 1].label}` : 'See 7 recommendations'} →</button></footer></div></section>`;
}

function renderAssessmentRecommendations() {
  const results = callingAssessmentResults();
  const stage = assessmentStageContext();
  const coverage = callingAssessmentCoverage();
  return `<section class="assessment-results"><header class="assessment-results-head"><div><p class="eyebrow">CURRENT STAGE · ${escapeHtml(stage.config.step)}</p><h2>Seven signals. Seven moves you can test now.</h2><p>Each recommendation connects today’s evidence to ${escapeHtml(stage.frame.next)}. Scores organise reflection; they do not rank your worth or predict success.</p></div><div class="assessment-result-score"><strong>${coverage}</strong><span>/21 answered</span><button data-action="calling-mode" data-value="assessment">Review answers</button></div></header><div class="assessment-profile"><div>${assessmentRadar(results)}</div><section aria-label="Trait summary">${results.map((result) => `<div style="--trait:${result.color}"><span>${escapeHtml(result.short)}</span><i><b style="width:${result.score * 10}%"></b></i><strong>${result.coverage ? result.score.toFixed(1) : '—'}</strong></div>`).join('')}</section></div><div class="assessment-recommendation-list">${results.map((result, index) => `<article style="--trait:${result.color}"><header><span>${String(index + 1).padStart(2, '0')}</span><div><h3>${escapeHtml(result.label)}</h3><p>${result.coverage}/3 lenses · ${result.coverage ? `${result.score.toFixed(1)}/10` : 'evidence missing'}</p></div></header><p class="assessment-insight">${escapeHtml(result.insight)}</p><div class="assessment-stage-action"><small>NOW · ${escapeHtml(stage.config.step)}</small><p>${escapeHtml(stage.frame.current(result))}</p></div><div class="assessment-stage-action next"><small>NEXT · ${escapeHtml(stage.frame.next)}</small><p>${escapeHtml(stage.frame.bridge(result))}</p></div></article>`).join('')}</div><footer class="assessment-results-footer"><p>${isGuest() ? 'Your answers work fully in this session. Create a profile only when you want to keep this assessment.' : 'This assessment is saved privately with your profile and can change as evidence changes.'}</p>${isGuest() ? '<button class="button-primary" data-action="assessment-save">Save assessment to a profile</button>' : ''}<button class="button-quiet" data-action="assessment-clear">Clear assessment answers</button></footer></section>`;
}

function renderCallingQuestions() {
  const active = callingQuestions.find((question) => question.id === state.calling.activeQuestion) || callingQuestions[0];
  const selected = state.calling.selections[active.id] || [];
  const query = state.calling.search.trim().toLowerCase();
  const filtered = active.options.filter((option) => !query || `${option.text} ${option.category}`.toLowerCase().includes(query));
  const visible = filtered.slice(0, state.calling.limit);
  const answered = callingQuestions.filter((question) => state.calling.selections[question.id]?.length || state.calling.custom[question.id]?.trim()).length;
  const allSelected = callingQuestions.flatMap((question) => (state.calling.selections[question.id] || []).map((id) => question.options.find((option) => option.id === id)).filter(Boolean));
  const themes = [...new Set(allSelected.map((option) => option.category))].slice(0, 8);
  const synthesis = callingSynthesis();
  return `<div class="view-enter calling-view burning-desire-view">
    <header class="calling-intro burning-desire-intro"><div><p class="eyebrow">FIND YOUR CALLING · BURNING DESIRE</p><h2>What would you willingly sustain?</h2><p>Move past borrowed approval. Reflect on freedom, non-negotiables and the legacy you would still care about when the work becomes ordinary.</p></div><strong>${answered}<span>/ 3 reflected</span></strong></header>
    <nav class="calling-question-tabs" aria-label="Three calling questions">${callingQuestions.map((question) => { const done = state.calling.selections[question.id]?.length || state.calling.custom[question.id]?.trim(); return `<button data-action="calling-question" data-value="${question.id}" class="${active.id === question.id ? 'active' : ''}" aria-current="${active.id === question.id ? 'step' : 'false'}"><span>${question.number}</span><strong>“${escapeHtml(question.question)}”</strong><em>${done ? '✓ Reflection added' : 'Answer this question'} →</em></button>`; }).join('')}</nav>
    <div class="calling-layout"><main class="calling-question panel"><header><span>QUESTION ${active.number}</span><h2>“${active.question}”</h2><p>${active.guidance}</p></header><div class="calling-tools"><label>Search ${callingMetadata.optionsPerQuestion} possibilities<input id="callingSearch" type="search" value="${escapeHtml(state.calling.search)}" placeholder="Family, creating, service, health, integrity…"></label><span>${selected.length} selected · choose any that feel true</span></div><section class="calling-option-list" aria-label="Possible answers">${visible.map((option) => { const on = selected.includes(option.id); return `<button data-action="calling-option" data-id="${option.id}" class="${on ? 'selected' : ''}" aria-pressed="${on}"><span>${on ? '✓' : '+'}</span><div><small>${escapeHtml(option.category)}</small><strong>${escapeHtml(option.text)}</strong></div></button>`; }).join('') || '<div class="calling-empty">No possibilities match that search. Try a broader word—or write your own answer below.</div>'}</section>${filtered.length > state.calling.limit ? `<button class="button-secondary calling-more" data-action="calling-more">Show ${Math.min(18, filtered.length - state.calling.limit)} more · ${filtered.length - state.calling.limit} remaining</button>` : ''}<label class="calling-custom">Your own answer<textarea data-calling-custom="${active.id}" maxlength="800" placeholder="Write in your own words. It can be uncertain, unfinished or different from every option above.">${escapeHtml(state.calling.custom[active.id])}</textarea><small>${isGuest() ? 'Temporary in this session · create a profile only when you want to save.' : 'Saved privately on this device.'}</small></label></main>
      <aside class="calling-reflection panel"><p class="eyebrow">YOUR CALLING COMPASS</p><h3>${themes.length ? (synthesis.complete ? 'Your strongest directions' : 'A provisional pattern is emerging') : 'Select what feels true—not what sounds admirable.'}</h3>${themes.length ? `<div class="calling-themes">${themes.map((theme) => `<span>${escapeHtml(theme)}</span>`).join('')}</div><div class="calling-recommendations">${synthesis.ranked.map((direction, index) => `<article class="calling-recommendation ${index === 0 ? 'primary' : ''}"><span>${index === 0 ? 'STRONGEST DIRECTION' : `ALTERNATIVE ${index + 1}`}</span><h4>${escapeHtml(direction.title)}</h4><p><strong>Why:</strong> ${escapeHtml(direction.reasons.length ? direction.reasons.join(', ') : 'your own written reflection')} recur in your answers.</p><p><strong>Possible arenas:</strong> ${escapeHtml(direction.arenas)}.</p><p><strong>Test it:</strong> ${escapeHtml(direction.experiment)}</p><small>${escapeHtml(direction.caution)}</small></article>`).join('')}</div>${synthesis.boundaries.length ? `<div class="calling-guardrails"><strong>Your work must protect</strong>${synthesis.boundaries.map((item) => `<span>${escapeHtml(item.guidance)}</span>`).join('')}</div>` : ''}` : '<p>Look for three kinds of signal: what gives relief, what creates a firm boundary, and whose life becomes better because of your work.</p>'}<div class="calling-summary">${callingQuestions.map((question) => { const count = state.calling.selections[question.id]?.length || 0; const custom = state.calling.custom[question.id]?.trim(); return `<section><span>${question.number}</span><div><strong>${question.short}</strong><p>${count ? `${count} possibilities selected` : 'No possibilities selected'}${custom ? ' · own answer added' : ''}</p></div></section>`; }).join('')}</div><p class="calling-caution">These are hypotheses, not a psychological diagnosis. Test the strongest direction in real life, discuss it with people who know you, and revise it when evidence changes.</p>${answered ? `${isGuest() ? '<button class="button-primary" data-action="calling-save">Save these reflections</button>' : ''}<button class="button-quiet" data-action="calling-clear">Clear Burning Desire reflections</button>` : ''}</aside>
    </div>
  </div>`;
}

function renderCalling() {
  return renderAssessments();
}

function renderBurningDesire() {
  return renderCallingQuestions();
}

function dreamJobNorthStar() {
  const legacyQuestion = callingQuestions.find((question) => question.id === 'legacy');
  const selected = (state.calling.selections.legacy || []).map((id) => legacyQuestion?.options.find((option) => option.id === id)?.text).filter(Boolean);
  return state.calling.custom.legacy.trim() || selected.slice(0, 2).join(' · ') || state.dreamJob.identity.trim();
}

function selectedDreamVocation() {
  return dreamJobVocations.find((path) => path.id === state.dreamJob.selectedVocationId) || dreamJobVocations[0];
}

function renderDreamPathDrawer(path = selectedDreamVocation(), stageId = state.dreamJob.previewStage || mentorStageId()) {
  const stage = dreamJobStageBlueprint.find((item) => item.stage === stageId) || dreamJobStageBlueprint[0];
  const milestones = path.stageMilestones[stage.stage] || [];
  const completed = state.dreamJob.vocationProgress?.[path.id]?.[stage.stage] || [];
  const completion = milestones.length ? Math.round((completed.length / milestones.length) * 100) : 0;
  dreamJobPanel.innerHTML = `<div class="dream-path-drawer-content" style="--path-accent:${path.accent}">
    <header><span>${escapeHtml(path.mark)}</span><div><p class="eyebrow">${escapeHtml(path.family)}</p><h2>${escapeHtml(path.name)}</h2><p>${escapeHtml(path.promise)}</p></div></header>
    <section><h3>What an ordinary week contains</h3><ul>${path.dailyWork.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
    <section class="dream-path-no-nos"><h3>Pause if these are true</h3>${path.noNoTests.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</section>
    <section><div class="dream-path-progress"><h3>${escapeHtml(stage.label)} milestones</h3><strong>${completion}%</strong></div><progress max="100" value="${completion}" aria-label="${escapeHtml(stage.label)} milestone progress">${completion}%</progress><p class="dream-path-stage-note">Use these as experiments, not gates. ${isGuest() ? 'You can test every control now; create a profile only when you want to retain progress.' : 'Progress is kept with your profile on this device.'}</p><div class="dream-path-milestones">${milestones.map((item) => { const done = completed.includes(item); return `<button data-dream-path-milestone="${escapeHtml(item)}" data-path="${path.id}" data-stage="${stage.stage}" class="${done ? 'complete' : ''}" aria-pressed="${done}"><span>${done ? '✓' : '○'}</span>${escapeHtml(item)}</button>`; }).join('')}</div></section>
    <section><h3>Role worlds inside this vocation</h3><div class="dream-path-role-worlds">${path.roleWorlds.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div></section>
    <section><h3>Proof that matters</h3><ol>${path.proof.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>
    <section><h3>Routes worth comparing</h3><ol>${path.routeOptions.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section>
    <section><h3>Career mobility—not a fallback failure</h3><div class="dream-path-role-worlds">${path.mobilityRoutes.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}</div></section>
    <section><h3>A more resilient income design</h3><p>${escapeHtml(path.incomeModel)}</p></section>
    <section class="dream-path-toolkit"><h3>Professional toolkit</h3>
      ${[
        ['Audition lab', dreamJobArtsFramework.auditionLab],
        ['Course decision matrix', dreamJobArtsFramework.courseDecisionChecks],
        ['Income & runway planner', dreamJobArtsFramework.incomeAndRunway],
        ['Rights, safety & health', dreamJobArtsFramework.rightsAndSafety],
        ['Family agreement', dreamJobArtsFramework.familyConversation],
      ].map(([label, items], index) => `<details ${index === 0 ? 'open' : ''}><summary>${escapeHtml(label)}<span>${items.length}</span></summary><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul></details>`).join('')}
    </section>
    <section><h3>Years 1–12 after entry</h3><div class="dream-career-phases">${dreamJobArtsFramework.careerPhases.map((phase) => `<article><span>${escapeHtml(phase.label)}</span><strong>${escapeHtml(phase.focus)}</strong><p>${escapeHtml(phase.action)}</p></article>`).join('')}</div></section>
    <section class="dream-path-sources"><h3>Research trail</h3><p>Zysham’s roadmap is independently written from the themes below; it does not reproduce their prose. Verify changing course and opportunity details directly.</p>${path.sources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener"><span>${escapeHtml(source.publisher)}</span><strong>${escapeHtml(source.title)}</strong><em>Open source ↗</em></a>`).join('')}</section>
  </div>`;
  openRightDrawer('dream', { kicker: `${stage.label.toUpperCase()} · PURPOSE-LED PATH`, title: path.name });
}

function renderDreamJob(isRefresh = false) {
  if (!['discover', 'performing'].includes(state.dreamJob.tab)) state.dreamJob.tab = 'discover';
  const query = state.dreamJob.search.trim().toLowerCase();
  const employers = dreamJobEmployers.filter((employer) => !query || `${employer.name} ${employer.family} ${employer.roleWorlds.join(' ')}`.toLowerCase().includes(query));
  const selected = dreamJobEmployers.find((employer) => employer.id === state.dreamJob.selectedId) || dreamJobEmployers[0];
  const currentStageId = state.dreamJob.previewStage || mentorStageId();
  const currentStage = dreamJobStageBlueprint.find((stage) => stage.stage === currentStageId) || dreamJobStageBlueprint[0];
  const northStar = dreamJobNorthStar();
  const callingDirections = callingSynthesis().ranked.filter((item) => item.score > 0).slice(0, 3);
  const realityEvidence = workRealityResult();
  const vocation = selectedDreamVocation();
  const tabContent = {
    discover: `<div class="dream-atlas"><aside><label>Search employers and role worlds<input data-dream-input="search" type="search" value="${escapeHtml(state.dreamJob.search)}" placeholder="Engineering, research, design, consulting…"></label><div class="dream-employer-list">${employers.map((employer) => `<button data-action="dream-employer" data-id="${employer.id}" class="${selected.id === employer.id ? 'active' : ''}"><span>${employer.mark}</span><div><strong>${escapeHtml(employer.name)}</strong><small>${escapeHtml(employer.family)}</small></div></button>`).join('') || '<p>No employer or role world matches.</p>'}</div></aside><article class="dream-employer-detail"><header><span>${selected.mark}</span><div><p class="eyebrow">EMPLOYER ENVIRONMENT · NOT A CALLING</p><h3>${escapeHtml(selected.name)}</h3><p>${escapeHtml(selected.family)}</p></div><button data-action="dream-save" data-id="${selected.id}" aria-pressed="${state.dreamJob.saved.includes(selected.id)}">${state.dreamJob.saved.includes(selected.id) ? 'Saved ★' : 'Save target ☆'}</button></header><section><h4>Environment-fit questions</h4>${selected.purposeQuestions.map((question) => `<p>${escapeHtml(question)}</p>`).join('')}</section><section><h4>Role worlds inside the same logo</h4><div class="dream-role-tags">${selected.roleWorlds.map((role) => `<button data-action="dream-role" data-value="${escapeHtml(role)}" class="${state.dreamJob.targetRole === role ? 'active' : ''}">${escapeHtml(role)}</button>`).join('')}</div></section><section><h4>Proof worth building</h4><ol>${selected.evidence.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section><p class="dream-reality-note">${escapeHtml(selected.reality)}</p><a href="${selected.source}" target="_blank" rel="noopener">Official careers source · checked ${dreamJobMetadata.checkedAt} ↗</a></article></div>`,
    performing: `<section class="dream-vocations"><header><div><p class="eyebrow">CRAFT · LIVELIHOOD · CONTRIBUTION</p><h3>A dream can be a vocation—not an employer.</h3><p>Test whether you love the ordinary practice, then build proof, collaborators and more than one honest income route.</p></div><span>${dreamJobVocations.length} paths</span></header><div class="dream-vocation-layout"><nav aria-label="Performing arts paths">${dreamJobVocations.map((path) => `<button data-action="dream-vocation" data-id="${path.id}" aria-pressed="${path.id === vocation.id}" class="${path.id === vocation.id ? 'active' : ''}" style="--path-accent:${path.accent}"><span>${escapeHtml(path.mark)}</span><div><strong>${escapeHtml(path.name)}</strong><small>${escapeHtml(path.family)}</small></div></button>`).join('')}</nav><article class="dream-vocation-preview" style="--path-accent:${vocation.accent}"><header><span>${escapeHtml(vocation.mark)}</span><div><p class="eyebrow">${escapeHtml(vocation.family)}</p><h4>${escapeHtml(vocation.name)}</h4></div></header><blockquote>${escapeHtml(vocation.promise)}</blockquote><section><h5>Would the work fit?</h5>${vocation.noNoTests.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}</section><section><h5>Proof to build</h5><ol>${vocation.proof.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ol></section><footer><button class="button-primary" data-action="dream-vocation-detail" data-id="${vocation.id}">Open ${escapeHtml(currentStage.label)} path</button><small>${isGuest() ? 'Explore fully as a guest · profile needed only to retain progress.' : 'Stage progress is saved privately on this device.'}</small></footer></article></div></section>`,
  }[state.dreamJob.tab] || '';
  return `<div class="view-enter dream-job-view${isRefresh ? ' view-refresh' : ''}"><section class="dream-calling-handoff"><div><p class="eyebrow">YOUR CALLING → WORK TO TEST</p><h2>${northStar ? `“${escapeHtml(northStar)}”` : 'Your calling is still open. Test work without inventing certainty.'}</h2>${callingDirections.length ? `<div class="dream-calling-directions">${callingDirections.map((item) => `<span>${escapeHtml(item.title)}</span>`).join('')}</div>` : ''}</div><aside><span>OWNED BY FIND YOUR CALLING</span><strong>${callingAssessmentCoverage()}/21 assessment signals · ${realityEvidence.noNos.length} firm NO-NOs</strong><p>Identity and values are edited once in Find Your Calling. This workspace turns them into role, employer and evidence decisions.</p><button class="button-secondary" data-action="dream-review-calling">Review calling evidence</button></aside></section>${tabContent}<p class="dream-disclosure">${escapeHtml(dreamJobMetadata.disclosure)}</p></div>`;
}

function refreshDreamJob(focusSelector = '') {
  $('#viewHost').innerHTML = renderDreamJob(true);
  if (focusSelector) requestAnimationFrame(() => $(focusSelector, $('#viewHost'))?.focus());
}

function editorialDate(value) {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));
}

function allBlogPosts() {
  return [...state.editorial.localPosts, ...teamBlogEntries].filter((post) => post.status === 'published' || isAdmin());
}

function allNewsletterIssues() {
  return [...state.editorial.localNewsletters, ...newsletterIssues].filter((issue) => issue.status === 'sent' || isAdmin());
}

function renderAdminBlogComposer() {
  if (!isAdmin()) return '';
  return `<details class="editorial-admin panel"><summary><span>ADMIN</span> Write a Team Blog post</summary><form id="blogComposerForm"><div class="editorial-form-grid"><label>Title<input name="title" required maxlength="120"></label><label>Category<select name="category"><option>Team viewpoint</option><option>Admissions</option><option>Family</option><option>Projects</option><option>Employment</option><option>AI</option></select></label><label class="full">Short introduction<textarea name="deck" required maxlength="320"></textarea></label><label class="full">Article body<textarea name="body" required minlength="120" maxlength="5000" placeholder="Use blank lines between paragraphs."></textarea></label><label>Publishing status<select name="status"><option value="published">Publish now</option><option value="draft">Save draft</option></select></label><label>Audience<select name="audience"><option>Everyone</option><option>Students</option><option>Families</option><option>College</option></select></label></div><button class="button-primary">Save Team Blog entry</button></form></details>`;
}

function renderBlog() {
  const posts = allBlogPosts();
  const selected = posts.find((post) => post.id === state.editorial.selectedBlogId);
  if (selected) {
    const paragraphs = String(selected.body).split(/\n\n+/);
    const actions = selected.actions || ['Name what is true now', 'Test one assumption gently', 'Choose one next conversation'];
    return `<div class="view-enter editorial-detail longform-detail"><button class="button-quiet" data-action="blog-close">← All Team Blog entries</button><article class="panel"><header><span>${escapeHtml(selected.category)} · ${escapeHtml(selected.audience)}</span><h2>${escapeHtml(selected.title)}</h2><p>${escapeHtml(selected.deck)}</p><div><strong>${escapeHtml(selected.author)}</strong><small>${escapeHtml(selected.authorRole)} · ${editorialDate(selected.publishedAt)} · ${selected.readMinutes || 5} min read</small></div></header><div class="longform-layout"><div class="editorial-body">${paragraphs.map((paragraph, index) => `${index === 1 && selected.pullQuote ? `<blockquote>${escapeHtml(selected.pullQuote)}</blockquote>` : ''}<p>${escapeHtml(paragraph)}</p>`).join('')}</div><aside class="blog-reading-map" aria-label="A gentle way to use this article"><span>PAUSE · NOTICE · MOVE</span><h3>A gentle way forward</h3><ol>${actions.map((action) => `<li><i aria-hidden="true"></i><strong>${escapeHtml(action)}</strong></li>`).join('')}</ol><p>This is a reflection map, not a prescription. Adapt it to health, safety, money and the people involved.</p></aside></div>${selected.source ? `<aside class="editorial-source-note"><span>RESEARCH SOURCE</span><p>This Zysham article is independently written. It was informed by <a href="${selected.source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(selected.source.title)} · ${escapeHtml(selected.source.publisher)} ↗</a></p><small>${escapeHtml(selected.source.relationship)}</small></aside>` : ''}<footer><p>Team viewpoint · challenge assumptions, make room for emotion, and keep the final decision with the person who must live it.</p><button class="button-secondary" data-action="newsletter-view">Explore the seven infographics →</button></footer></article></div>`;
  }
  const categories = ['All', ...new Set(posts.map((post) => post.category))];
  const query = state.editorial.blogSearch.trim().toLowerCase();
  const filtered = posts.filter((post) => (state.editorial.blogCategory === 'All' || post.category === state.editorial.blogCategory) && (!query || `${post.title} ${post.deck} ${post.category} ${post.author}`.toLowerCase().includes(query)));
  const featured = filtered.find((post) => post.featured) || filtered[0];
  return `<div class="view-enter editorial-view"><header class="editorial-hero"><div><p class="eyebrow">TEAM BLOG · ${editorialMetadata.blogCount} HUMAN STORIES</p><h2>Room for the feelings inside a decision.</h2><p>Long-form reflections about results, family, money, belonging, work and recovery. Written to be sat with, shared, and questioned — never used as instructions from authority.</p></div>${featured ? `<button data-action="blog-open" data-id="${featured.id}"><span>FEATURED LONG READ</span><strong>${escapeHtml(featured.title)}</strong><small>${escapeHtml(featured.deck)}</small></button>` : ''}</header>${renderAdminBlogComposer()}<form class="editorial-toolbar" id="blogFilters"><label>Search Team Blog<input id="blogSearch" type="search" value="${escapeHtml(state.editorial.blogSearch)}" placeholder="Family, belonging, recovery, work…"></label><label>Topic<select name="category">${categories.map((category) => `<option ${state.editorial.blogCategory === category ? 'selected' : ''}>${escapeHtml(category)}</option>`).join('')}</select></label><span>${filtered.length} entries</span></form><section class="editorial-list">${filtered.map((post) => `<button data-action="blog-open" data-id="${post.id}"><span>${escapeHtml(post.category)}${post.status === 'draft' ? ' · DRAFT' : ''}</span><div><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.deck)}</p><small>${escapeHtml(post.author)} · ${editorialDate(post.publishedAt)}</small></div><em>${post.readMinutes || 5} min →</em></button>`).join('') || '<p class="panel">No entries match this search.</p>'}</section></div>`;
}

function renderAdminNewsletterComposer() {
  if (!isAdmin()) return '';
  return `<details class="editorial-admin panel"><summary><span>ADMIN</span> Compose a newsletter</summary><form id="newsletterComposerForm"><div class="editorial-form-grid"><label>Subject line<input name="title" required maxlength="120"></label><label>Audience<select name="audience"><option>All subscribers</option><option>Students</option><option>Parents</option><option>College students</option></select></label><label class="full">Editor’s note<textarea name="summary" required maxlength="600"></textarea></label><label class="full">Sections<textarea name="sections" required maxlength="2000" placeholder="One section headline per line"></textarea></label><label>Status<select name="status"><option value="draft">Save draft</option><option value="sent">Send to local outbox</option><option value="scheduled">Schedule</option></select></label><label>Schedule time<input name="scheduledAt" type="datetime-local"></label></div><button class="button-primary">Save newsletter campaign</button><p class="form-disclosure">Prototype delivery writes to a local outbox. Connect a verified transactional email provider, domain authentication, unsubscribe processing and delivery webhooks before production.</p></form></details>`;
}

function renderNewsletters() {
  const selected = infographicTopics.find((topic) => topic.id === state.editorial.selectedNewsletterId);
  if (selected) return `<div class="view-enter infographic-detail" style="--infographic-accent:${selected.accent}"><button class="button-quiet" data-action="newsletter-close">← All infographics</button><article class="panel"><header><span>${selected.number} · ${escapeHtml(selected.label)}</span><h2>${escapeHtml(selected.title)}</h2><p>${escapeHtml(selected.summary)}</p><strong>${escapeHtml(selected.stat)}</strong></header><div class="infographic-flow" aria-label="${escapeHtml(selected.title)} diagram">${selected.steps.map(([label, copy], index) => `<section><b>${String(index + 1).padStart(2, '0')}</b><div><h3>${escapeHtml(label)}</h3><p>${escapeHtml(copy)}</p></div></section>`).join('')}</div><blockquote><span>REFLECTION</span>${escapeHtml(selected.reflection)}</blockquote><footer><p>Use this visual as a conversation aid. Context, safety and current official requirements always come first.</p></footer></article></div>`;
  return `<div class="view-enter infographic-view"><header class="infographic-hero"><div><p class="eyebrow">INFOGRAPHICS · ${editorialMetadata.infographicCount} VISUAL GUIDES</p><h2>See the whole decision, not just the next gate.</h2><p>Seven visual tools for students, families and educators. Each one turns a pressured conversation into a sequence you can inspect together.</p></div><figure><img src="assets/visuals/seven-pathways-infographic.png" alt="A student supported by family and educators beneath seven connected career pathways: self, subjects, cost, college, projects, work and wellbeing."><figcaption>One person. Seven connected lenses. No single score decides the route.</figcaption></figure></header><section class="infographic-grid">${infographicTopics.map((topic) => `<button data-action="newsletter-open" data-id="${topic.id}" style="--infographic-accent:${topic.accent}"><span>${topic.number} · ${escapeHtml(topic.label)}</span><strong>${escapeHtml(topic.stat)}</strong><h3>${escapeHtml(topic.title)}</h3><p>${escapeHtml(topic.summary)}</p><div aria-hidden="true">${topic.steps.map(([label]) => `<i title="${escapeHtml(label)}"></i>`).join('')}</div><small>Open the visual guide →</small></button>`).join('')}</section><aside class="infographic-method panel"><span>HOW TO USE THESE</span><p>Start with the visual that matches the tension in the room. Read it slowly, let each person answer the reflection question, and finish with one action small enough to complete without panic.</p></aside></div>`;
}

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

function activeStudyContext() {
  const track = studyTracks[state.studyGuide.track] || studyTracks.grade11;
  const subjects = Object.keys(track.subjects);
  if (!track.subjects[state.studyGuide.subject]) state.studyGuide.subject = subjects[0];
  const chapters = track.subjects[state.studyGuide.subject];
  const selected = chapters.find((item) => item.id === state.studyGuide.selectedChapterId);
  return { track, subjects, chapters, selected };
}

function studyStatus(id) { return state.studyGuide.statuses[id] || 'not-started'; }
function studyMastery(id) { return Number(state.studyGuide.mastery[id] || 0); }
function studyProgress(chapters) {
  if (!chapters.length) return 0;
  return Math.round(chapters.reduce((sum, item) => sum + studyMastery(item.id), 0) / chapters.length);
}

function renderStudyOverview(context) {
  const all = Object.values(context.track.subjects).flat();
  const mastered = all.filter((item) => studyStatus(item.id) === 'mastered').length;
  const learning = all.filter((item) => studyStatus(item.id) === 'learning' || studyStatus(item.id) === 'revision').length;
  const assessed = state.studyGuide.assessments.filter((item) => item.track === context.track.id);
  const average = assessed.length ? Math.round(assessed.reduce((sum, item) => sum + Number(item.score), 0) / assessed.length) : 0;
  const priorities = Object.entries(context.track.subjects).map(([subject, chapters]) => ({ subject, progress: studyProgress(chapters), next: chapters.find((item) => studyStatus(item.id) !== 'mastered') })).sort((a,b) => a.progress - b.progress);
  return `<section class="study-dashboard"><div class="study-stat"><strong>${mastered}</strong><span>chapters mastered</span><small>Evidence, not prediction</small></div><div class="study-stat"><strong>${learning}</strong><span>in active learning</span><small>Keep the queue small</small></div><div class="study-stat"><strong>${average || '—'}${average ? '%' : ''}</strong><span>assessment average</span><small>${assessed.length} recorded tests</small></div><div class="study-stat"><strong>${state.studyGuide.studyBlocks.length}</strong><span>planned sessions</span><small>Retrieval before rereading</small></div></section>
  <div class="study-overview-grid"><section class="panel"><div class="panel-head"><div><p class="eyebrow">PRIORITY SUBJECTS</p><h2>Study the weakest evidence first.</h2></div></div><div class="study-priority-list">${priorities.map((item) => `<button data-action="study-subject" data-value="${escapeHtml(item.subject)}"><span>${escapeHtml(item.subject)}</span><div class="study-progress"><i style="width:${item.progress}%"></i></div><strong>${item.progress}%</strong><small>${item.next ? `Next: ${escapeHtml(item.next.title)}` : 'Track complete'}</small></button>`).join('')}</div></section>
  <section class="panel study-next"><p class="eyebrow">HIGH-IMPACT NEXT ACTIONS</p><h2>Turn reading into usable recall.</h2><ol><li><strong>Learn one idea</strong><span>Open the first incomplete chapter in your lowest-progress subject.</span></li><li><strong>Close the book</strong><span>Explain it from memory in 90 seconds.</span></li><li><strong>Mix the problems</strong><span>Solve one direct, one combined, and one unfamiliar question.</span></li><li><strong>Repair the first error</strong><span>Record what failed and the cue you will use next time.</span></li></ol></section></div>`;
}

function renderStudyCurriculum(context) {
  const query = state.studyGuide.search.trim().toLowerCase();
  const chapters = context.chapters.filter((item) => `${item.title} ${item.focus}`.toLowerCase().includes(query));
  return `<section class="study-library"><div><p class="eyebrow">LOCALLY EMBEDDED FIELDBOOK</p><h2>${escapeHtml(context.track.label)} · ${escapeHtml(state.studyGuide.subject)}</h2><p>Original Zysham explanations, retrieval prompts, common traps, and practice loops stay available offline in this app.</p></div><a href="${context.track.sourceUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(context.track.sourceLabel)} ↗</a></section>
  <div class="study-curriculum-toolbar"><label>Search this subject<input data-study-search type="search" value="${escapeHtml(state.studyGuide.search)}" placeholder="Chapter or concept"></label><span>${chapters.length} of ${context.chapters.length} chapters</span></div>
  <section class="study-chapter-list">${chapters.map((item) => { const status = studyStatus(item.id); const mastery = studyMastery(item.id); return `<button data-action="study-chapter" data-id="${item.id}"><span class="chapter-number">${String(item.number).padStart(2,'0')}</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.focus)}</small></span><span class="chapter-state ${status}">${status.replace('-', ' ')}</span><span class="chapter-mastery">${mastery}%<i><b style="width:${mastery}%"></b></i></span><em>Open →</em></button>`; }).join('') || '<p class="panel">No chapters match this search.</p>'}</section>`;
}

function renderStudyPlanner(context) {
  const blocks = state.studyGuide.studyBlocks.slice().sort((a,b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  return `<div class="study-planner-grid"><section class="panel"><p class="eyebrow">PLAN A FOCUSED BLOCK</p><h2>Give every session one visible outcome.</h2><form id="studyBlockForm" class="study-form"><label>Subject<select name="subject">${context.subjects.map((subject) => `<option>${escapeHtml(subject)}</option>`).join('')}</select></label><label>Chapter or outcome<input name="outcome" required maxlength="120" placeholder="e.g. derive and apply work–energy theorem"></label><label>Date<input name="date" type="date" required></label><label>Start time<input name="time" type="time" required></label><label>Minutes<input name="minutes" type="number" min="15" max="180" value="45" required></label><label>Method<select name="method"><option>Recall + problems</option><option>Concept repair</option><option>Timed mixed set</option><option>Revision cycle</option><option>Mock analysis</option></select></label><button class="button-primary">Add study block</button></form></section>
  <section class="panel"><p class="eyebrow">ASSESSMENT EVIDENCE</p><h2>Record a test, then record the repair.</h2><form id="studyAssessmentForm" class="study-form"><label>Subject<select name="subject">${context.subjects.map((subject) => `<option>${escapeHtml(subject)}</option>`).join('')}</select></label><label>Test type<select name="type"><option>Chapter test</option><option>Board-style paper</option><option>JEE Main mock</option><option>JEE Advanced mixed set</option></select></label><label>Score %<input name="score" type="number" min="0" max="100" required></label><label class="wide">First error to repair<input name="repair" required maxlength="160" placeholder="Concept, reading, method, calculation, or time"></label><button class="button-primary">Record assessment</button></form></section></div>
  <section class="panel study-schedule"><div class="panel-head"><div><p class="eyebrow">UPCOMING STUDY</p><h2>${blocks.length ? `${blocks.length} intentional blocks` : 'Your study queue is clear.'}</h2></div></div>${blocks.length ? blocks.map((block) => `<article><time>${escapeHtml(block.date)}<small>${escapeHtml(block.time)} · ${block.minutes} min</small></time><div><strong>${escapeHtml(block.subject)}</strong><p>${escapeHtml(block.outcome)}</p><small>${escapeHtml(block.method)}</small></div><button data-action="study-block-done" data-id="${block.id}" aria-label="Complete study block">✓</button></article>`).join('') : '<p>Add the next block only when you know what evidence it should produce.</p>'}</section>`;
}

function renderStudyProgress(context) {
  const subjectRows = Object.entries(context.track.subjects).map(([subject, chapters]) => ({ subject, progress: studyProgress(chapters), mastered: chapters.filter((item) => studyStatus(item.id) === 'mastered').length, total: chapters.length }));
  const assessments = state.studyGuide.assessments.filter((item) => item.track === context.track.id).slice().reverse();
  return `<section class="panel study-readiness"><div class="panel-head"><div><p class="eyebrow">READINESS EVIDENCE</p><h2>Coverage × retrieval × repair.</h2><p>This is a record of work completed—not a rank or result prediction.</p></div></div>${subjectRows.map((item) => `<article><span><strong>${escapeHtml(item.subject)}</strong><small>${item.mastered}/${item.total} mastered</small></span><div class="study-progress"><i style="width:${item.progress}%"></i></div><b>${item.progress}%</b></article>`).join('')}</section>
  <section class="panel study-error-log"><p class="eyebrow">ERROR & TEST LOG</p><h2>The first wrong step is more useful than the final mark.</h2>${assessments.length ? assessments.map((item) => `<article><span>${escapeHtml(item.type)} · ${escapeHtml(item.subject)}</span><strong>${item.score}%</strong><p>${escapeHtml(item.repair)}</p><small>${escapeHtml(item.date)}</small></article>`).join('') : '<p>No assessment evidence yet. Take a small test before deciding you “know” a chapter.</p>'}</section>`;
}

function renderStudyChapter(context) {
  const item = context.selected;
  if (!item) return '';
  const tabs = studyGuideMeta.workspaceTabs.map((label) => [label.toLowerCase().replace(/[^a-z]+/g,'-').replace(/-$/,''), label]);
  const tab = state.studyGuide.chapterTab;
  const status = studyStatus(item.id);
  const mastery = studyMastery(item.id);
  const body = tab === 'summary' ? `<div class="chapter-reading"><p class="chapter-lead">${escapeHtml(item.summary)}</p><h3>Three ideas to own</h3><ol>${item.concepts.map((value) => `<li>${escapeHtml(value)}</li>`).join('')}</ol></div>`
    : tab === 'genius-mind' ? `<div class="chapter-reading"><p class="chapter-lead">Think like a teacher: make the hidden decisions visible.</p><h3>Genius Mind routine</h3><ol><li>State what is known, unknown, and constrained.</li><li>Draw or represent the situation before choosing a formula.</li><li>Predict the direction, scale, or pattern of the answer.</li><li>Solve, then challenge the result with another view.</li></ol><h3>Common traps</h3><ul>${item.traps.map((value) => `<li>${escapeHtml(value)}</li>`).join('')}</ul></div>`
    : tab === 'read-book' ? `<div class="chapter-reading book-page"><p class="book-kicker">ZYSHAM FIELDBOOK · ${escapeHtml(context.track.label)}</p><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.summary)}</p>${item.concepts.map((value,index) => `<section><h3>${index + 1}. ${escapeHtml(value.split(' ').slice(0,5).join(' '))}</h3><p>${escapeHtml(value)} Ask: what changes, what stays invariant, and which evidence would prove the model wrong?</p></section>`).join('')}<aside>This locally embedded companion is original Zysham material. Use the official publisher link in Curriculum for the prescribed textbook.</aside></div>`
    : tab === 'my-notes' ? `<label class="chapter-notes">Your notes<textarea data-study-notes="${item.id}" rows="12" placeholder="Write in your own words. Add the example that made the idea click.">${escapeHtml(state.studyGuide.notes[item.id] || '')}</textarea><small>Saved locally as you type.</small></label>`
    : tab === 'practice-tests' ? `<div class="chapter-reading"><p class="chapter-lead">Do these without looking back.</p><ol>${item.practice.map((value) => `<li>${escapeHtml(value)}</li>`).join('')}</ol><button class="button-primary" data-action="study-mastery-bump" data-id="${item.id}">I completed a retrieval cycle · +20%</button></div>`
    : tab === 'assignments' ? `<div class="chapter-reading"><h3>One meaningful assignment</h3><p>Create a one-page teaching sheet for ${escapeHtml(item.title)}: a concept map, one worked example, one plausible wrong answer, and a correction. For JEE tracks, add a mixed problem that combines this topic with an earlier one.</p><button class="button-primary" data-action="study-assignment" data-id="${item.id}">Add assignment to planner</button></div>`
    : `<div class="mastery-control"><p>Mastery should mean you can explain, retrieve, apply, and repair—not that you have seen the page.</p><output>${mastery}%</output><input data-study-mastery="${item.id}" type="range" min="0" max="100" step="10" value="${mastery}"><div>${['not-started','learning','revision','mastered'].map((value) => `<button data-action="study-status" data-id="${item.id}" data-value="${value}" class="${status === value ? 'active' : ''}">${value.replace('-',' ')}</button>`).join('')}</div></div>`;
  return `<div class="study-chapter-workspace"><button class="chapter-back" data-action="study-chapter-close">← Back to curriculum</button><header><span>${escapeHtml(context.track.label)} · ${escapeHtml(state.studyGuide.subject)} · Chapter ${item.number}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.focus)}</p></header><nav class="chapter-tabs" aria-label="Chapter workspace">${tabs.map(([id,label]) => `<button data-action="study-chapter-tab" data-value="${id}" class="${tab === id ? 'active' : ''}">${escapeHtml(label)}</button>`).join('')}</nav><section class="chapter-tab-body">${body}</section></div>`;
}

function journeyStudyTrackIds(stageId) {
  return stageId === 'grade11' ? ['grade11'] : stageId === 'grade12' ? ['grade12', 'jeeMain', 'jeeAdvanced'] : [];
}

function renderJourneyStudyGuide(stageId) {
  const availableTrackIds = journeyStudyTrackIds(stageId);
  if (!availableTrackIds.length) return '';
  const activeTrackId = availableTrackIds.includes(state.studyGuide.track) ? state.studyGuide.track : availableTrackIds[0];
  if (state.studyGuide.track !== activeTrackId) {
    state.studyGuide.track = activeTrackId;
    state.studyGuide.subject = Object.keys(studyTracks[activeTrackId].subjects)[0];
    state.studyGuide.selectedChapterId = '';
    state.studyGuide.search = '';
  }
  const context = activeStudyContext();
  if (context.selected) return `<section class="journey-study-guide">${renderStudyChapter(context)}</section>`;
  const sections = [['overview','Overview'],['curriculum','Curriculum'],['planner','Planner'],['progress','Progress']];
  const content = state.studyGuide.section === 'curriculum' ? renderStudyCurriculum(context) : state.studyGuide.section === 'planner' ? renderStudyPlanner(context) : state.studyGuide.section === 'progress' ? renderStudyProgress(context) : renderStudyOverview(context);
  const trackSwitch = availableTrackIds.length > 1 ? `<nav class="journey-study-tracks" aria-label="Grade 12 study routes">${availableTrackIds.map((trackId) => { const track = studyTracks[trackId]; return `<button data-action="study-track" data-value="${trackId}" class="${trackId === context.track.id ? 'active' : ''}" aria-pressed="${trackId === context.track.id}"><strong>${escapeHtml(track.label)}</strong><small>${escapeHtml(track.short)}</small></button>`; }).join('')}</nav>` : `<div class="journey-study-track-label"><strong>${escapeHtml(context.track.label)}</strong><span>${escapeHtml(context.track.short)}</span></div>`;
  return `<section class="journey-study-guide"><header class="journey-study-head"><div><h3>${escapeHtml(context.track.label)} learning workspace</h3><p>Curriculum, planning and mastery evidence now stay with this year of your journey.</p></div><span>${Object.values(context.track.subjects).flat().length} chapters</span></header>${trackSwitch}<div class="study-command"><nav aria-label="Study Guide sections">${sections.map(([id,label]) => `<button data-action="study-section" data-value="${id}" class="${state.studyGuide.section === id ? 'active' : ''}">${label}</button>`).join('')}</nav><label>Subject<select data-study-subject>${context.subjects.map((subject) => `<option ${subject === state.studyGuide.subject ? 'selected' : ''}>${escapeHtml(subject)}</option>`).join('')}</select></label></div>${content}</section>`;
}

function renderStudyGuide() {
  const context = activeStudyContext();
  if (context.selected) return `<div class="view-enter study-guide-view">${renderStudyChapter(context)}</div>`;
  const sections = [['overview','Overview'],['curriculum','Curriculum'],['planner','Planner'],['progress','Progress']];
  const content = state.studyGuide.section === 'curriculum' ? renderStudyCurriculum(context) : state.studyGuide.section === 'planner' ? renderStudyPlanner(context) : state.studyGuide.section === 'progress' ? renderStudyProgress(context) : renderStudyOverview(context);
  return `<div class="view-enter study-guide-view"><header class="compact-page-intro"><div><p class="eyebrow">${escapeHtml(context.track.label)} · STUDY GUIDE</p><h2>Learn deeply. Show the evidence.</h2></div><span>${escapeHtml(studyGuideMeta.rights)}</span></header><div class="study-command"><nav aria-label="Study Guide sections">${sections.map(([id,label]) => `<button data-action="study-section" data-value="${id}" class="${state.studyGuide.section === id ? 'active' : ''}">${label}</button>`).join('')}</nav><label>Subject<select data-study-subject>${context.subjects.map((subject) => `<option ${subject === state.studyGuide.subject ? 'selected' : ''}>${escapeHtml(subject)}</option>`).join('')}</select></label></div>${content}</div>`;
}

function renderCertificationCourses() {
  const query = state.certifications.search.toLowerCase();
  const filtered = certificationCourses.filter((item) => item.category === state.certifications.category && `${item.title} ${item.provider} ${item.skills}`.toLowerCase().includes(query));
  const selected = certificationCourses.find((item) => item.id === state.certifications.detailId);
  if (selected) return `<div class="view-enter course-catalogue"><button class="chapter-back" data-action="cert-close">← All certification courses</button><article class="course-detail"><span>${escapeHtml(selected.category)} · checked ${selected.checked}</span><h2>${escapeHtml(selected.title)}</h2><p class="course-provider">${escapeHtml(selected.provider)}</p><div class="course-facts"><section><small>LEVEL</small><strong>${escapeHtml(selected.level)}</strong></section><section><small>FORMAT</small><strong>${escapeHtml(selected.format)}</strong></section><section><small>LEARNING COST</small><strong>${escapeHtml(selected.learningCost)}</strong></section></div><h3>What you build</h3><p>${escapeHtml(selected.skills)}</p><h3>Credential reality</h3><p>${escapeHtml(selected.credential)}</p><p class="freshness-note">${escapeHtml(selected.note)}</p><div class="course-actions"><a class="button-primary" href="${selected.url}" target="_blank" rel="noopener noreferrer">Open official registration ↗</a><button data-action="cert-save" data-id="${selected.id}">${state.certifications.saved.includes(selected.id) ? 'Saved ✓' : 'Save course'}</button></div></article></div>`;
  return `<div class="view-enter course-catalogue"><header class="compact-page-intro"><div><p class="eyebrow">${escapeHtml(state.certifications.category)} · OFFICIAL PROVIDERS</p><h2>Learn for free. Pay only with your eyes open.</h2></div><span>${certificationCourses.length} curated routes · checked 08 Aug 2026</span></header><div class="catalogue-toolbar"><label>Search ${escapeHtml(state.certifications.category)}<input data-cert-search type="search" value="${escapeHtml(state.certifications.search)}" placeholder="Provider, skill, or course"></label><span>${filtered.length} routes</span></div><section class="catalogue-list">${filtered.map((item) => `<button data-action="cert-open" data-id="${item.id}"><span class="provider-mark">${item.provider.split(/\s+/).slice(0,2).map((part) => part[0]).join('')}</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.provider)} · ${escapeHtml(item.level)}</small><p>${escapeHtml(item.skills)}</p></span><span class="cost-tag">${escapeHtml(item.learningCost)}</span><em>Details →</em></button>`).join('')}</section><p class="catalogue-disclosure">A completion badge is not always a professional certification. Zysham keeps learning cost and assessment/credential cost separate; always confirm the current course page.</p></div>`;
}

function renderTraditionalCourses() {
  const query = state.traditional.search.toLowerCase();
  const filtered = traditionalCourses.filter((item) => item.category === state.traditional.category && `${item.title} ${item.provider} ${item.skills}`.toLowerCase().includes(query));
  const selected = traditionalCourses.find((item) => item.id === state.traditional.detailId);
  if (selected) return `<div class="view-enter course-catalogue traditional-catalogue"><button class="chapter-back" data-action="traditional-close">← All traditional courses</button><article class="course-detail"><span>${escapeHtml(selected.category)} · checked ${selected.checked}</span><h2>${escapeHtml(selected.title)}</h2><p class="course-provider">${escapeHtml(selected.provider)}</p><h3>Learning path</h3><p>${escapeHtml(selected.path)}</p><h3>What the practice develops</h3><p>${escapeHtml(selected.skills)}</p><h3>Reality check</h3><p>${escapeHtml(selected.reality)}</p><div class="course-actions"><a class="button-primary" href="${selected.url}" target="_blank" rel="noopener noreferrer">Visit official institution ↗</a><button data-action="traditional-save" data-id="${selected.id}">${state.traditional.saved.includes(selected.id) ? 'Saved ✓' : 'Save path'}</button></div></article></div>`;
  return `<div class="view-enter course-catalogue traditional-catalogue"><header class="compact-page-intro"><div><p class="eyebrow">${escapeHtml(state.traditional.category)} · LIVING HERITAGE</p><h2>Continuity is a skill you can train.</h2></div><span>${traditionalCourses.length} credible starting routes</span></header><div class="catalogue-toolbar"><label>Search ${escapeHtml(state.traditional.category)}<input data-traditional-search type="search" value="${escapeHtml(state.traditional.search)}" placeholder="Art, institution, or skill"></label><span>${filtered.length} paths</span></div><section class="catalogue-list">${filtered.map((item) => `<button data-action="traditional-open" data-id="${item.id}"><span class="provider-mark heritage">ॐ</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.provider)}</small><p>${escapeHtml(item.path)}</p></span><span class="cost-tag">Practice-led</span><em>Details →</em></button>`).join('')}</section><p class="catalogue-disclosure">Tradition is not a decorative extracurricular. Choose a credible teacher, understand the lineage and safety requirements, and make room for sustained practice.</p></div>`;
}

function entranceExamTabs() {
  return `<nav class="exam-workspace-tabs" aria-label="Entrance exam workspace">${[
    ['catalogue', 'Exam catalogue'], ['planning', 'Decision guide'], ['handbook', 'Full PDF handbook'],
  ].map(([value, label]) => `<button data-action="exam-section" data-value="${value}" class="${state.entranceExams.section === value ? 'active' : ''}">${label}</button>`).join('')}</nav>`;
}

function renderExamCatalogue() {
  const selectedCategory = entranceExamCategories.find((item) => item.id === state.entranceExams.category) || entranceExamCategories[0];
  const query = state.entranceExams.search.trim().toLowerCase();
  const filtered = entranceExams.filter((item) => (selectedCategory.id === 'all' || item.category === selectedCategory.id)
    && (!query || `${item.shortName} ${item.fullName} ${item.authority} ${item.route} ${item.subjects}`.toLowerCase().includes(query)));
  return `<section class="exam-catalogue" aria-labelledby="examCatalogueTitle">
    <header class="exam-section-head compact-page-intro"><div><p class="eyebrow">${escapeHtml(selectedCategory.label)} · ${filtered.length} ROUTES</p><h3 id="examCatalogueTitle">Find the gate that serves the course.</h3><p>${escapeHtml(selectedCategory.description)}. Exam choice follows course fit, eligibility and affordability—not prestige alone.</p></div><button class="button-secondary" data-action="exam-guide-jump" data-page="${selectedCategory.page}">Handbook chapter →</button></header>
    <form class="exam-search" id="entranceExamFilters"><label><span>Search exam, authority, course or subject</span><input id="entranceExamSearch" type="search" value="${escapeHtml(state.entranceExams.search)}" placeholder="Try JEE, design, law, biology, Tamil Nadu…"></label><div><strong>${filtered.length}</strong><span>decision-ready routes</span></div></form>
    <div class="exam-card-grid">${filtered.map((item) => `<details class="exam-card"><summary><span class="exam-monogram">${escapeHtml(item.shortName.replace(/[^A-Z0-9]/gi, '').slice(0, 3).toUpperCase())}</span><span><small>${escapeHtml(entranceExamCategories.find((category) => category.id === item.category)?.label || item.category)} · ${escapeHtml(item.level)}</small><strong>${escapeHtml(item.shortName)}</strong><em>${escapeHtml(item.fullName)}</em></span><b aria-hidden="true">+</b></summary><div><dl><div><dt>Admission route</dt><dd>${escapeHtml(item.route)}</dd></div><div><dt>Conducting authority</dt><dd>${escapeHtml(item.authority)}</dd></div><div><dt>Subject / eligibility alert</dt><dd>${escapeHtml(item.subjects)}</dd></div><div><dt>Selection format</dt><dd>${escapeHtml(item.format)}</dd></div></dl><a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer">Verify on official website ↗</a></div></details>`).join('') || '<div class="exam-empty"><strong>No indexed route matches.</strong><span>Try a broader term or open the full PDF handbook for all 400+ entries.</span><button data-action="exam-section" data-value="handbook">Open complete handbook</button></div>'}</div>
  </section>`;
}

function renderExamPlanning() {
  const steps = [
    ['1', 'Start with the learner', 'Record interests, work-style preferences, subject aversions, health or accessibility needs, family boundaries and location constraints.', 'Career Compass', 'compass'],
    ['2', 'Choose courses before exams', 'Compare the actual curriculum, compulsory subjects and ordinary work that follows. Keep one adjacent course route alive.', 'Explore careers', 'explore'],
    ['3', 'Build an exam basket', 'Choose a primary route, an overlap route and a lower-risk fallback. Check whether one preparation plan genuinely serves all three.', 'Research eligibility', 'research'],
    ['4', 'Prepare from the current syllabus', 'Use the official bulletin as the syllabus source, diagnose gaps, practise retrieval and timed application, then repair from evidence.', 'Open Study Guide', 'study-guide'],
    ['5', 'Plan counselling before the score', 'Map counselling bodies, documents, quotas, choice filling, fees, refund rules and realistic college/course trade-offs before results day.', 'Open roadmap', 'roadmap'],
    ['6', 'Keep a verification trail', 'Save the dated official notice, eligibility clause and application proof. A coaching post or search snippet is never the final authority.', 'Accomplishments', 'evidence'],
  ];
  const counselling = [
    ['JEE route', 'JEE Main/Advanced → rank evidence → JoSAA/other counselling → branch, institute, cost and fallback comparison'],
    ['NEET route', 'NEET UG → score/rank evidence → AIQ and applicable state counselling → recognition, bond, fee and course checks'],
    ['CUET route', 'Programme shortlist → university subject mapping → CUET paper choices → university portal/counselling requirements'],
    ['Design route', 'Aptitude preparation → portfolio/studio evidence where required → exam and interview stages → programme and studio-culture fit'],
  ];
  return `<section class="exam-planning"><header class="exam-section-head"><div><p class="eyebrow">ORIGINAL GUIDANCE WORKFLOW · CLASS 9 ONWARD</p><h3>An exam is a gate, not a career.</h3><p>This workflow adapts the strongest useful pattern from modern career-guidance platforms: discovery, assessment, course research, preparation, counselling and evidence in one continuous student record.</p></div><button class="button-secondary" data-action="exam-guide-jump" data-page="101">Open syllabus library →</button></header>
    <div class="exam-decision-steps">${steps.map(([number, title, copy, action, view]) => `<article><span>${number}</span><div><h4>${title}</h4><p>${copy}</p></div><button data-action="go" data-target="${view}">${action} →</button></article>`).join('')}</div>
    <section class="exam-counselling-map"><header><p class="eyebrow">SCORE-TO-SEAT MAPS</p><h3>Prepare for admission, not only the test.</h3></header><div>${counselling.map(([title, copy]) => `<article><strong>${title}</strong><p>${copy}</p></article>`).join('')}</div></section>
    <aside class="exam-family-check"><strong>Family checkpoint</strong><p>Agree on the maximum total cost, acceptable locations, repeat-year boundary and one valid alternative before application pressure peaks. Revisit the agreement when evidence changes.</p></aside>
  </section>`;
}

function renderExamHandbook() {
  const active = entranceExamCategories.find((item) => item.page === Number(state.entranceExams.guidePage)) || entranceExamCategories[0];
  const pdfUrl = `${entranceExamGuide.file}#page=${state.entranceExams.guidePage}&view=FitH`;
  return `<section class="exam-handbook"><header class="exam-section-head"><div><p class="eyebrow">COMPLETE SUPPLIED HANDBOOK · ${entranceExamGuide.pages} PAGES</p><h3>Every chapter, inside the workspace.</h3><p>${escapeHtml(entranceExamGuide.note)}</p></div><div class="exam-document-actions"><a class="button-primary" href="${entranceExamGuide.file}" target="_blank" rel="noopener noreferrer">Open PDF ↗</a><a class="button-secondary" href="${entranceExamGuide.file}" download>Download PDF</a></div></header>
    <div class="exam-handbook-layout"><nav aria-label="Handbook chapter index"><p class="eyebrow">CHAPTER INDEX</p>${entranceExamCategories.map((item) => `<button data-action="exam-guide-page" data-page="${item.page}" class="${active.id === item.id ? 'active' : ''}"><span>${escapeHtml(item.id === 'all' ? 'Contents & guide overview' : item.label)}</span><small>Page ${item.page}</small></button>`).join('')}</nav><div class="exam-pdf-frame"><div><strong>${escapeHtml(active.id === 'all' ? 'Contents & guide overview' : active.label)}</strong><span>PDF page ${state.entranceExams.guidePage} of ${entranceExamGuide.pages}</span></div><iframe title="${escapeHtml(entranceExamGuide.title)} — ${escapeHtml(active.label)}" src="${pdfUrl}"></iframe><p>If the embedded reader is unavailable in your browser, use <a href="${pdfUrl}" target="_blank" rel="noopener noreferrer">Open PDF at this chapter</a>.</p></div></div>
  </section>`;
}

function renderEntranceExams() {
  const body = state.entranceExams.section === 'planning' ? renderExamPlanning() : state.entranceExams.section === 'handbook' ? renderExamHandbook() : renderExamCatalogue();
  return `<div class="view-enter entrance-exams-view">${body}<footer class="exam-source-notes"><div><strong>Source and freshness discipline</strong><p>Volatile dates and fees are not frozen here; official notifications control.</p></div>${entranceExamSources.map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(source.type)}</span><strong>${escapeHtml(source.label)}</strong><em>Open ↗</em></a>`).join('')}</footer></div>`;
}

const marketingPageLibrary = {
  overview: { image: 'assets/visuals/calling-academy-hero.png', kicker: 'YOUR JOURNEY · BUILT WITH EVIDENCE', title: ['Your path is already', 'beginning.'], copy: 'See where you are, what you have learned, and which next experience can turn uncertainty into useful evidence.', marker: '01', proof: 'One connected journey' },
  'journey-stage': { image: 'assets/visuals/academy-learning-hero.png', kicker: 'THIS YEAR · ONE HUMAN CHAPTER', title: ['Build this year into', 'a bridge.'], copy: 'Protect foundations, test the work, and leave this stage with evidence the next version of you can use.', marker: '02', proof: 'Progress without panic' },
  roadmap: { image: 'assets/visuals/calling-academy-hero.png', kicker: 'ACTION PLAN · SMALL MOVES THAT COMPOUND', title: ['Turn direction into', 'momentum.'], copy: 'Bring the next milestone close enough to act on, while keeping recovery routes and real life in the plan.', marker: '03', proof: 'From intention to action' },
  evidence: { image: 'assets/visuals/academy-innovation-hero.png', kicker: 'YOUR WORK · YOUR LEARNING · YOUR PROOF', title: ['Make progress', 'visible.'], copy: 'Keep the projects, conversations, revisions and recoveries that show how your judgment is becoming stronger.', marker: '04', proof: 'Proof over performance' },
  family: { image: 'assets/visuals/academy-mentoring-hero.png', kicker: 'FAMILY GUIDANCE · SUPPORT WITHOUT SILENT STEERING', title: ['A shared plan can still be', 'theirs.'], copy: 'Name money, safety, distance and care honestly—then keep the student’s voice inside the final decision.', marker: '05', proof: 'Care with agency' },
  compass: { image: 'assets/visuals/academy-mentoring-hero.png', kicker: 'REALITY SCAN · PREFERENCES MEET DAILY WORK', title: ['Know what the work asks', 'of you.'], copy: 'Notice energy, boundaries and conditions before a prestigious title starts answering on your behalf.', marker: '01', proof: 'Self-knowledge in context' },
  explore: { image: 'assets/visuals/academy-innovation-hero.png', kicker: 'CAREER WORLDS · LOOK BENEATH THE TITLE', title: ['Meet the work before', 'choosing it.'], copy: 'Explore ordinary tasks, environments, routes and trade-offs before narrowing a life around a job name.', marker: '02', proof: 'Reality before ranking' },
  compare: { image: 'assets/visuals/academy-innovation-hero.png', kicker: 'COMPARE DIRECTIONS · NOTHING IMPORTANT STAYS HIDDEN', title: ['Trade-offs deserve', 'daylight.'], copy: 'Place routes side by side: daily work, entry gates, cost, mobility, uncertainty and the life each one makes possible.', marker: '03', proof: 'Compare the whole life' },
  experiences: { image: 'assets/visuals/academy-mentoring-hero.png', kicker: 'ALUMNI TALKS · FIRST-PERSON EVIDENCE', title: ['Borrow perspective, not', 'somebody else’s path.'], copy: 'Listen for the ordinary week, the unexpected difficulty and the quiet choice a brochure would never show.', marker: '01', proof: 'Many lives, no template' },
  discussions: { image: 'assets/visuals/academy-mentoring-hero.png', kicker: 'DECISION COMMONS · ASK WITHOUT PERFORMING CERTAINTY', title: ['Better questions grow', 'in community.'], copy: 'Share uncertainty, compare lived experience and leave room for routes that began somewhere different.', marker: '02', proof: 'Conversation with care' },
  'ai-journey': { image: 'assets/visuals/academy-innovation-hero.png', kicker: 'AI DECISION LENS · HUMAN ACCOUNTABILITY', title: ['Use the tool. Keep', 'the judgment.'], copy: 'Let AI explain, draft and challenge—then verify consequential claims and keep the final responsibility human.', marker: '03', proof: 'Assistance without surrender' },
  certifications: { image: 'assets/visuals/academy-learning-hero.png', kicker: 'SKILLS & CREDENTIALS · EVIDENCE THAT TRAVELS', title: ['A credential should prove', 'capability.'], copy: 'Choose learning by the task it helps you perform, the feedback it includes and the proof you can defend.', marker: '01', proof: 'Skill beyond the badge' },
  traditional: { image: 'assets/visuals/academy-learning-hero.png', kicker: 'LIVING PRACTICE · CRAFT, CULTURE & CONTINUITY', title: ['Let practice carry', 'tradition forward.'], copy: 'Approach inherited knowledge with disciplined study, patient craft, ethical context and room for a contemporary voice.', marker: '02', proof: 'Inheritance made conscious' },
  'entrance-exams': { image: 'assets/visuals/academy-learning-hero.png', kicker: 'ENTRANCE EXAMS · A GATE, NOT AN IDENTITY', title: ['Prepare for the gate. Remember', 'the life beyond it.'], copy: 'Connect preparation to course fit, counselling, affordability, recovery and the work you hope the route will enable.', marker: '03', proof: 'Preparation with perspective' },
  'dream-job': { image: 'assets/visuals/academy-innovation-hero.png', kicker: 'DREAM WORK · PRESTIGE-FREE AMBITION', title: ['Aim high. Stay close', 'to the work.'], copy: 'Study the problems, people, conditions and evidence behind admired organisations and meaningful vocations.', marker: '01', proof: 'Ambition grounded in work' },
  jobs: { image: 'assets/visuals/academy-innovation-hero.png', kicker: 'ROLE LIBRARY · LIVELIHOOD & CONSEQUENCE', title: ['Read the role beneath', 'the reputation.'], copy: 'Compare capability, salary, environment, service, risk and mobility without using status as a shortcut.', marker: '02', proof: 'Work examined honestly' },
  'vedic-prediction': { image: 'assets/visuals/academy-mentoring-hero.png', kicker: 'TRADITIONAL LENS · REFLECTION, NOT DESTINY', title: ['Use tradition as', 'a reflective lens.'], copy: 'Hold inherited frameworks with respect and humility, then test every practical decision against lived evidence.', marker: '03', proof: 'Meaning without determinism' },
  blog: { image: 'assets/visuals/academy-mentoring-hero.png', kicker: 'TEAM BLOG · THE FEELINGS INSIDE A DECISION', title: ['Stories make room for', 'the human decision.'], copy: 'Long-form reflections for the moments when results, money, belonging, family and hope refuse to fit inside a checklist.', marker: '01', proof: 'Human before prescriptive' },
  newsletters: { image: 'assets/visuals/academy-learning-hero.png', kicker: 'INFOGRAPHICS · SEE THE WHOLE DECISION', title: ['Complex choices can become', 'visible.'], copy: 'Use seven visual guides to slow the room down, connect the trade-offs and choose one next conversation.', marker: '02', proof: 'Clarity without simplification' },
};

const marketingImageLibrary = {
  overview: 'assets/visuals/journey-overview-hero.png',
  'journey-stage': 'assets/visuals/journey-stage-hero.png',
  roadmap: 'assets/visuals/roadmap-action-hero.png',
  evidence: 'assets/visuals/evidence-portfolio-hero.png',
  family: 'assets/visuals/family-guidance-hero.png',
  compass: 'assets/visuals/compass-reality-hero.png',
  explore: 'assets/visuals/career-explore-hero.png',
  compare: 'assets/visuals/career-compare-hero.png',
  experiences: 'assets/backgrounds/campus-mentor.jpg',
  discussions: 'assets/visuals/community-discussions-hero.png',
  'ai-journey': 'assets/visuals/academy-innovation-hero.png',
  certifications: 'assets/visuals/certification-skills-hero.png',
  traditional: 'assets/visuals/traditional-learning-hero.png',
  'entrance-exams': 'assets/visuals/entrance-exams-hero.png',
  'dream-job': 'assets/visuals/dream-work-hero.png',
  jobs: 'assets/visuals/role-library-hero.png',
  'vedic-prediction': 'assets/backgrounds/design-studio.jpg',
  blog: 'assets/backgrounds/library-team.jpg',
  newsletters: 'assets/visuals/academy-learning-hero.png',
};

Object.entries(marketingImageLibrary).forEach(([view, image]) => {
  marketingPageLibrary[view].image = image;
});

function marketingBannerAllowed(host, view) {
  if (!marketingPageLibrary[view] || ['calling', 'assessments'].includes(view)) return false;
  if (view === 'jobs' && ethicsTabs.includes(state.jobsHub.tab)) return false;
  return !host.querySelector('.career-detail,.experience-detail,.editorial-detail,.infographic-detail,.course-detail,.job-detail-page,.share-experience,.discussion-detail,.thread-detail,.exam-handbook');
}

function renderMarketingBanner(view) {
  const config = marketingPageLibrary[view];
  if (!config) return '';
  const stage = view === 'journey-stage' ? yearMilestoneConfig[state.activeJourneyStage] : null;
  const kicker = stage ? `${escapeHtml(stage.step)} · ${escapeHtml(stage.title).toUpperCase()}` : escapeHtml(config.kicker);
  return `<section class="marketing-banner" style="--marketing-image:url('${config.image}')" aria-label="${escapeHtml(config.title.join(' '))}"><div class="marketing-banner-glow" aria-hidden="true"></div><div class="marketing-banner-copy"><p class="eyebrow">${kicker}</p><h2>${escapeHtml(config.title[0])}<br><em>${escapeHtml(config.title[1])}</em></h2><p>${escapeHtml(config.copy)}</p><div class="marketing-banner-meta"><span><i aria-hidden="true"></i>${escapeHtml(config.proof)}</span><span>ZYSHAM · GUIDANCE WITH ITS ASSUMPTIONS SHOWING</span></div></div><aside><span>${escapeHtml(config.marker)}</span><p><strong>Pause here.</strong> Read the page as an invitation to investigate—not an instruction about who you must become.</p></aside><div class="marketing-banner-motion" aria-hidden="true"><i></i><b></b><i></i></div></section>`;
}

function placeMarketingBanner(host, view) {
  if (!marketingBannerAllowed(host, view)) return;
  const root = host.querySelector(':scope > .view-enter') || host;
  root.insertAdjacentHTML('afterbegin', renderMarketingBanner(view));
}

const pageVisualLibrary = {
  overview: ['assets/visuals/career-discovery-panorama.png', 'Indian college students testing career interests through projects, teaching and collaborative research', 'A calling becomes clearer through action', 'panorama'],
  compass: ['assets/backgrounds/design-studio.jpg', 'Students collaborating around a design project', 'Preferences become useful when tested against real work', 'bars'],
  explore: ['assets/backgrounds/career-showcase.jpg', 'Students speaking with professionals at a career showcase', 'Explore career worlds before narrowing titles', 'clusters'],
  discussions: ['assets/backgrounds/campus-mentor.jpg', 'A student and mentor having a thoughtful career conversation', 'Many routes. Shared uncertainty. Better questions.', 'community'],
  research: ['assets/backgrounds/library-team.jpg', 'Students comparing information together in a university library', 'Rank evidence by relevance, source and freshness', 'evidence'],
  calling: ['assets/visuals/career-discovery-panorama.png', 'Indian students discovering purpose through building, presenting and mentoring', 'Look for the pattern across desire, boundaries and legacy', 'calling'],
  'ai-journey': ['assets/backgrounds/engineering-lab.jpg', 'Students testing a physical engineering prototype in a laboratory', 'AI assists. Humans verify and remain accountable.', 'ai'],
  'study-guide': ['assets/backgrounds/library-team.jpg', 'A university study group working through books and notes', 'A useful study loop produces visible evidence', 'study'],
  certifications: ['assets/backgrounds/engineering-lab.jpg', 'Students learning practical technical skills in an engineering laboratory', 'Choose credentials by skill, evidence and recognition', 'credentials'],
  traditional: ['assets/backgrounds/design-studio.jpg', 'Students developing a creative practice together in a studio', 'Practice turns cultural inheritance into living capability', 'tradition'],
};

function renderContextVisual(view) {
  const visual = pageVisualLibrary[view];
  if (!visual) return '';
  const [src, alt, caption, kind] = visual;
  const reality = workRealityResult();
  const charts = {
    panorama: [['Profile evidence', compassCompletion()], ['Reality explored', Math.min(100, reality.answered * 7)], ['Experiments', Math.min(100, state.evidence.length * 20)]],
    bars: [['Questions', Math.min(100, reality.answered * 7)], ['NO-NOs', Math.min(100, reality.noNos.length * 15)], ['Evidence', compassCompletion()]],
    clusters: [['Technology', careers.filter((item) => item.cluster === 'Technology').length], ['Health', careers.filter((item) => item.cluster === 'Health').length], ['Business', careers.filter((item) => item.cluster === 'Business').length], ['Society', careers.filter((item) => item.cluster === 'Society').length]],
    calling: callingQuestions.map((question) => [question.short, (state.calling.selections[question.id] || []).length]),
    study: [['Learn', 28], ['Retrieve', 34], ['Apply', 24], ['Repair', 14]],
  };
  const chart = charts[kind];
  const visualBody = chart ? `<div class="context-bars" aria-label="${escapeHtml(caption)} chart">${chart.map(([label, value]) => `<div><span><b>${escapeHtml(label)}</b><em>${value}${kind === 'clusters' || kind === 'calling' ? '' : '%'}</em></span><i><b style="width:${kind === 'clusters' ? Math.min(100, value * 20) : kind === 'calling' ? Math.min(100, value * 12) : value}%"></b></i></div>`).join('')}</div>`
    : kind === 'community' ? `<div class="context-metrics"><strong>532</strong><span>conversations</span><strong>21</strong><span>countries represented</span><strong>19</strong><span>decision themes</span></div>`
    : kind === 'evidence' ? `<table class="context-table"><thead><tr><th>Check</th><th>Use</th></tr></thead><tbody><tr><td>Official source</td><td>Eligibility</td></tr><tr><td>Student voice</td><td>Lived reality</td></tr><tr><td>Current date</td><td>Freshness</td></tr></tbody></table>`
    : kind === 'ai' ? `<ol class="context-flow"><li>Ask</li><li>Challenge</li><li>Verify</li><li>Decide</li></ol>`
    : kind === 'credentials' ? `<div class="context-metrics"><strong>7</strong><span>skill categories</span><strong>3</strong><span>checks: provider, assessment, cost</span></div>`
    : `<ol class="context-flow"><li>Observe</li><li>Practise</li><li>Receive critique</li><li>Continue</li></ol>`;
  return `<figure class="context-visual context-visual-${kind}"><div class="context-photo"><img src="${src}" alt="${escapeHtml(alt)}"><figcaption>${escapeHtml(caption)}</figcaption></div><div class="context-data">${visualBody}</div></figure>`;
}

function placeContextVisual(host, view) {
  const visual = renderContextVisual(view);
  if (!visual) return;
  const anchors = {
    overview: '.overview-hero', compass: '.reality-scan', explore: '.filter-row', discussions: '.forum-unified',
    'ai-journey': '.ai-stage-map', 'study-guide': '.study-command', certifications: '.catalogue-categories', traditional: '.catalogue-categories',
  };
  const anchor = host.querySelector(anchors[view]);
  if (anchor) anchor.insertAdjacentHTML('afterend', visual);
}

function karmaTone(score) {
  if (score <= 2) return { label: 'Bad Karma', className: 'bad' };
  if (score < 5) return { label: 'Karmic risk', className: 'risk' };
  if (score < 7) return { label: 'Neutral / conditional', className: 'neutral' };
  if (score < 9) return { label: 'Good Karma', className: 'good' };
  return { label: 'Seva-rich', className: 'seva' };
}

function salaryLabel(job) {
  return `₹${job.salaryMin}L–₹${job.salaryMax}L`;
}

function renderKarmaMeter(score, compact = false) {
  const tone = karmaTone(score);
  return `<div class="karma-meter ${tone.className} ${compact ? 'compact' : ''}" aria-label="${score} out of 10, ${tone.label}"><div><i style="width:${score * 10}%"></i></div><strong>${score.toFixed(1)}</strong><span>${tone.label}</span></div>`;
}

function renderJobCard(job) {
  const selected = state.jobsHub.selectedIds.includes(job.id);
  return `<article class="karma-job-card">
    <div class="karma-job-head"><span>${escapeHtml(job.category)}</span><strong>${salaryLabel(job)}<small>/ year</small></strong></div>
    <h3>${escapeHtml(job.title)}</h3><p>${escapeHtml(job.summary)}</p>
    ${renderKarmaMeter(job.score, true)}
    <div class="karma-range"><span>Possible context range</span><b>${job.rangeMin.toFixed(1)}–${job.rangeMax.toFixed(1)}</b></div>
    <div class="karma-job-actions"><button data-action="job-detail" data-id="${job.id}">Open role page →</button><button data-action="job-compare" data-id="${job.id}" aria-pressed="${selected}">${selected ? '✓ Comparing' : '+ Compare'}</button></div>
  </article>`;
}

function renderJobsOverview() {
  const high = karmicJobs.filter((job) => job.score >= 9).length;
  const conditional = karmicJobs.filter((job) => job.rangeMax - job.rangeMin >= 5).length;
  const examples = ['school-teacher','software-engineer','real-estate-agent','hospital-administrator','emergency-doctor','predatory-debt-collector'].map((id) => karmicJobs.find((job) => job.id === id));
  return `<div class="jobs-overview">
    <section class="jobs-hero"><div><p class="eyebrow">THE KARMIC GENIE SYSTEM</p><h2>Do not ask only, “What will I earn?” Ask, “What will my earning cause?”</h2><p>Salary and karma are deliberately separate. A modest income does not make work spiritually superior, and wealth is not impure when earned through honest value, fair exchange, and responsible consequence.</p><div class="jobs-hero-actions"><button class="button-primary" data-action="jobs-tab" data-value="atlas">Explore ${karmicJobs.length} roles →</button><button class="button-secondary" data-action="jobs-tab" data-value="framework">See the scoring method</button></div></div><aside><span class="karma-orbit">10</span><strong>Good Karma</strong><small>Seva · truth · non-harm</small><hr><span class="karma-orbit neutral">5</span><strong>Neutral / conditional</strong><small>Context decides</small><hr><span class="karma-orbit bad">0</span><strong>Bad Karma</strong><small>Exploitation · deception · harm</small></aside></section>
    <section class="jobs-stat-grid"><article><strong>${karmicJobs.length}</strong><span>role pages</span></article><article><strong>${new Set(karmicJobs.map((job) => job.category)).size}</strong><span>work sectors</span></article><article><strong>${high}</strong><span>seva-rich starting profiles</span></article><article><strong>${conditional}</strong><span>strongly context-sensitive roles</span></article></section>
    <section class="jobs-principle-callout panel"><div><p class="eyebrow">THE CENTRAL RULE</p><h3>No profession owns virtue. No salary proves vice.</h3></div><p>The score describes a normal pattern of actions and incentives—not the soul of a worker. A teacher can harm; a real-estate agent can protect a family; a hospital can heal while its billing system exploits. Inspect <strong>role × employer × conduct × intention × consequence</strong>.</p></section>
    <section><div class="jobs-section-head"><div><p class="eyebrow">SEE THE CONTRAST</p><h3>Same money question. Deeper consequence question.</h3></div><button class="button-quiet" data-action="jobs-tab" data-value="atlas">View all roles →</button></div><div class="karma-card-grid">${examples.map(renderJobCard).join('')}</div></section>
    <p class="jobs-disclaimer">${escapeHtml(karmicJobsMetadata.disclaimer)}</p>
  </div>`;
}

function filteredKarmicJobs() {
  const query = state.jobsHub.search.trim().toLowerCase();
  return karmicJobs.filter((job) => {
    const karmaMatch = state.jobsHub.karmaBand === 'All' || (state.jobsHub.karmaBand === 'Bad' ? job.score < 3 : state.jobsHub.karmaBand === 'Neutral' ? job.score >= 3 && job.score < 7 : job.score >= 7);
    const salaryMatch = state.jobsHub.salaryBand === 'All' || (state.jobsHub.salaryBand === 'Under 10L' ? job.salaryMin < 10 : state.jobsHub.salaryBand === '10–25L' ? job.salaryMax >= 10 && job.salaryMin <= 25 : job.salaryMax > 25);
    return (!query || `${job.title} ${job.category} ${job.summary} ${job.risks} ${job.uplift}`.toLowerCase().includes(query)) && (state.jobsHub.category === 'All' || job.category === state.jobsHub.category) && karmaMatch && salaryMatch;
  }).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}

function renderJobMatrixRow(job) {
  const tone = karmaTone(job.score);
  const selected = state.jobsHub.selectedIds.includes(job.id);
  return `<article class="jobs-matrix-row ${tone.className}" role="row">
    <div class="jobs-matrix-role" role="cell"><button data-action="job-detail" data-id="${job.id}"><strong>${escapeHtml(job.title)}</strong><span>${escapeHtml(job.category)}</span></button></div>
    <div class="jobs-matrix-salary" role="cell"><strong>${salaryLabel(job)}</strong><span>gross / year</span></div>
    <div class="jobs-matrix-karma" role="cell"><b>${job.score.toFixed(1)}</b><span>${escapeHtml(tone.label)}</span><i><em style="width:${job.score * 10}%"></em></i></div>
    <div class="jobs-matrix-range" role="cell"><strong>${job.rangeMin.toFixed(1)}–${job.rangeMax.toFixed(1)}</strong><span>context range</span></div>
    <div class="jobs-matrix-effect positive" role="cell"><span>↑ SERVICE PATH</span><p>${escapeHtml(job.uplift)}</p></div>
    <div class="jobs-matrix-effect negative" role="cell"><span>↓ RED LINES</span><p>${escapeHtml(job.risks)}</p></div>
    <div class="jobs-matrix-action" role="cell"><button data-action="job-compare" data-id="${job.id}" aria-pressed="${selected}">${selected ? '✓ Added' : '+ Compare'}</button><button data-action="job-detail" data-id="${job.id}" aria-label="Open ${escapeHtml(job.title)} role page">→</button></div>
  </article>`;
}

function renderJobsAtlas() {
  const jobs = filteredKarmicJobs();
  const categories = ['All', ...new Set(karmicJobs.map((job) => job.category))];
  const selectedCount = state.jobsHub.selectedIds.length;
  return `<div class="jobs-atlas"><header class="jobs-page-head"><div><p class="eyebrow">JOB ATLAS · INDIA PLANNING BANDS</p><h2>Compare livelihood and consequence.</h2><p>${escapeHtml(karmicJobsMetadata.salaryNote)}</p></div><div class="jobs-atlas-actions"><strong>${jobs.length}<small>roles shown</small></strong><button class="button-primary" data-action="jobs-compare-open" ${selectedCount ? '' : 'disabled'}>Compare selected <span>${selectedCount}/3</span></button></div></header>
    <form class="jobs-filter-bar" id="jobsFilters"><label><span>Search roles or risks</span><input id="jobsSearch" type="search" value="${escapeHtml(state.jobsHub.search)}" placeholder="Teacher, hospital, honesty, surveillance…"></label><label><span>Sector</span><select name="category">${categories.map((value) => `<option ${state.jobsHub.category === value ? 'selected' : ''}>${escapeHtml(value)}</option>`).join('')}</select></label><label><span>Karma band</span><select name="karmaBand">${['All','Good','Neutral','Bad'].map((value) => `<option ${state.jobsHub.karmaBand === value ? 'selected' : ''}>${value}</option>`).join('')}</select></label><label><span>Salary reach</span><select name="salaryBand">${['All','Under 10L','10–25L','25L+'].map((value) => `<option ${state.jobsHub.salaryBand === value ? 'selected' : ''}>${value}</option>`).join('')}</select></label></form>
    <div class="karma-legend"><span><i class="bad"></i>0–2 · bad karma</span><span><i class="risk"></i>2–5 · karmic risk</span><span><i class="neutral"></i>5–7 · neutral / conditional</span><span><i class="good"></i>7–9 · good karma</span><span><i class="seva"></i>9–10 · seva-rich</span></div>
    <section class="jobs-matrix" role="table" aria-label="Livelihood and karmic consequence matrix">
      <div class="jobs-matrix-head" role="row"><span role="columnheader">Role & sector</span><span role="columnheader">Salary band</span><span role="columnheader">Karma</span><span role="columnheader">Possible range</span><span role="columnheader">Good-karma practice</span><span role="columnheader">Karmic risks</span><span role="columnheader">Actions</span></div>
      <div class="jobs-matrix-body" role="rowgroup">${jobs.map(renderJobMatrixRow).join('') || '<div class="jobs-empty"><strong>No roles match.</strong><span>Broaden one filter to reopen the atlas.</span></div>'}</div>
    </section>
  </div>`;
}

function renderJobsFramework() {
  return `<div class="jobs-framework"><section class="ethics-manifesto"><span>MORAL &amp; ETHICS</span><h2>There are a thousand ways to earn money, but very few ways to earn it ethically and morally.</h2><p>Start by examining not only what work pays, but who it serves, what it asks you to tolerate, and which consequences it leaves behind.</p></section><header class="jobs-page-head"><div><p class="eyebrow">TRANSPARENT METHOD · NOT DIVINATION</p><h2>Six questions create the base score.</h2><p>The base is a weighted ethical profile of ordinary work. Context can move it by up to three points—because a title alone cannot see your actions or the employer’s business model.</p></div><span class="framework-formula">BASE<br>± CONTEXT<br>= 0–10</span></header>
    <section class="framework-grid">${karmicFramework.principles.map((item, index) => `<article><span>0${index + 1}</span><div><h3>${escapeHtml(item.label)}</h3><p>${escapeHtml(item.question)}</p></div><strong>${item.weight}%</strong></article>`).join('')}</section>
    <section class="context-modifiers panel"><div><p class="eyebrow">CONTEXT MODIFIERS</p><h3>The company matters. Your choices matter more.</h3></div>${karmicFramework.modifiers.map((item) => `<article><div><strong>${escapeHtml(item.label)}</strong><span>${escapeHtml(item.range)}</span></div><p>${escapeHtml(item.copy)}</p></article>`).join('')}</section>
    <section class="karma-scenarios"><article><span class="scenario-score bad">1.2</span><h3>Property deception</h3><p>Hidden defects, illegal cash, manufactured urgency, and distress exploitation. High income does not cleanse a harmful method.</p></article><article><span class="scenario-score neutral">5.0</span><h3>Neutral technical work</h3><p>A competent IT role with no clear public benefit or major harm. Product choices, privacy, accessibility, and employer incentives move it.</p></article><article><span class="scenario-score good">9.2</span><h3>Emergency care</h3><p>Skilled action saves life. Fair treatment and honest consent lift the work; unnecessary procedures or profit-first billing pull it down.</p></article></section>
    <section class="jobs-caution"><strong>Why there is no “cursed profession” label</strong><p>Vedic ethical ideas emphasise action, attachment, duty, truth, non-harm, and consequence. Calling a whole class of people cursed erases context and can become its own form of harm. Karmic Genie names risky systems and behaviours precisely so a person can change them.</p></section>
  </div>`;
}

function renderJobsCompare() {
  const selected = state.jobsHub.selectedIds.map((id) => karmicJobs.find((job) => job.id === id)).filter(Boolean);
  if (!selected.length) return `<div class="jobs-compare-empty"><span>⇄</span><p class="eyebrow">ROLE COMPARISON</p><h2>Compare up to three forms of livelihood.</h2><p>Put salary, base karma, possible range, service potential, and corruption risks beside each other.</p><button class="button-primary" data-action="jobs-tab" data-value="atlas">Choose roles →</button></div>`;
  const rows = [
    ['Salary planning band', (job) => `${salaryLabel(job)} / year`],
    ['Base karma', (job) => `${job.score.toFixed(1)} · ${karmaTone(job.score).label}`],
    ['Context range', (job) => `${job.rangeMin.toFixed(1)}–${job.rangeMax.toFixed(1)}`],
    ['Service path', (job) => job.uplift],
    ['Karmic risks', (job) => job.risks],
  ];
  return `<div class="jobs-compare"><header class="jobs-page-head"><div><p class="eyebrow">SIDE-BY-SIDE</p><h2>Follow the money—and the consequence.</h2><p>A larger salary is neither a bonus nor a penalty in the karma score.</p></div><button class="button-secondary" data-action="jobs-tab" data-value="atlas">← Back to Job Atlas</button></header><div class="jobs-compare-table" style="--job-count:${selected.length}"><div class="compare-label">Role</div>${selected.map((job) => `<div class="compare-job-head"><small>${escapeHtml(job.category)}</small><strong>${escapeHtml(job.title)}</strong>${renderKarmaMeter(job.score, true)}<button data-action="job-compare" data-id="${job.id}">Remove</button></div>`).join('')}${rows.map(([label, getValue]) => `<div class="compare-label">${label}</div>${selected.map((job) => `<div class="compare-value">${escapeHtml(getValue(job))}</div>`).join('')}`).join('')}</div></div>`;
}

function renderJobsImprove() {
  const examples = karmicJobs.filter((job) => ['real-estate-agent','hospital-administrator','software-engineer','financial-adviser','police-officer','influencer'].includes(job.id));
  return `<div class="jobs-improve"><header class="jobs-page-head"><div><p class="eyebrow">KARMA IS PRACTICE</p><h2>Improve the way the work is done.</h2><p>You may not control an entire industry. You can still choose the employer, refuse specific harm, disclose conflicts, protect people, document objections, repair mistakes, or leave when complicity becomes the job.</p></div></header><section class="improve-path"><article><span>01</span><h3>See clearly</h3><p>Name who benefits, who pays, who carries risk, and what stays hidden.</p></article><article><span>02</span><h3>Reduce harm</h3><p>Remove deception, coercion, waste, discrimination, unsafe shortcuts, and needless suffering.</p></article><article><span>03</span><h3>Add service</h3><p>Increase access, dignity, truth, consent, fair value, and long-term capability.</p></article><article><span>04</span><h3>Accept consequence</h3><p>Measure outcomes, invite challenge, repair harm, and change course when evidence demands it.</p></article></section><div class="improve-role-list">${examples.map((job) => `<article><div><small>${escapeHtml(job.category)}</small><h3>${escapeHtml(job.title)}</h3>${renderKarmaMeter(job.score, true)}</div><section><strong>Move upward</strong><p>${escapeHtml(job.uplift)}</p></section><section><strong>Red lines</strong><p>${escapeHtml(job.risks)}</p></section><button data-action="job-detail" data-id="${job.id}">Full role page →</button></article>`).join('')}</div></div>`;
}

function renderJobsFoundations() {
  return `<div class="jobs-foundations"><header class="jobs-page-head"><div><p class="eyebrow">VEDIC-INSPIRED · PLURAL · REFLECTIVE</p><h2>A dharmic lens for modern work.</h2><p>This system draws ethical questions from widely recognised Indic ideas without pretending that one formula can calculate metaphysical karma.</p></div></header><section class="foundation-grid"><article><span>धर्म</span><h3>Dharma</h3><p>Do the responsibility appropriate to your role with competence, courage, fairness, and awareness—not blind obedience to title or employer.</p></article><article><span>अहिंसा</span><h3>Ahimsa</h3><p>Reduce avoidable harm. Emergency force or surgery may protect life; intent, necessity, proportionality, and care still matter.</p></article><article><span>सत्य</span><h3>Satya</h3><p>Truth in claims, contracts, diagnosis, evidence, prices, risks, and advertising. Silence can become deception when another person relies on disclosure.</p></article><article><span>अस्तेय</span><h3>Asteya</h3><p>Do not take what is not freely and knowingly given—money, credit, time, attention, data, labour, land, or opportunity.</p></article><article><span>सेवा</span><h3>Seva + Lokasangraha</h3><p>Service and the holding-together of society: build capability, protect the vulnerable, and leave systems more trustworthy.</p></article><article><span>अपरिग्रह</span><h3>Aparigraha</h3><p>Question greed and needless accumulation. Earn well, but do not let commission, status, or fear make harm invisible.</p></article></section><section class="jobs-caution"><strong>Interpretive boundary</strong><p>Karma traditions are diverse and deeper than a product score. The 0–10 rating is a conversation aid: use it to ask better questions, never to rank human worth, predict rebirth, stigmatise workers, or outsource conscience.</p></section></div>`;
}

function renderJobDetail(job) {
  const selected = state.jobsHub.selectedIds.includes(job.id);
  return `<div class="job-detail-page"><button class="button-quiet" data-action="job-detail-close">← Back to ${state.jobsHub.tab === 'improve' ? 'improvement paths' : 'job atlas'}</button><header><div><p class="eyebrow">${escapeHtml(job.category)} · ROLE PAGE</p><h2>${escapeHtml(job.title)}</h2><p>${escapeHtml(job.summary)}</p></div><aside><small>INDIA SALARY PLANNING BAND</small><strong>${salaryLabel(job)}</strong><span>gross / year · indicative</span></aside></header><section class="job-detail-score panel"><div><p class="eyebrow">BASE KARMIC PROFILE</p><h3>${job.score.toFixed(1)} / 10 · ${karmaTone(job.score).label}</h3>${renderKarmaMeter(job.score)}</div><div><span>LOW-CONTEXT CASE <b>${job.rangeMin.toFixed(1)}</b></span><i></i><span>HIGH-CONTEXT CASE <b>${job.rangeMax.toFixed(1)}</b></span></div><p>The range is not uncertainty theatre: it represents how radically employer incentives and individual conduct can change the same title.</p></section><section class="dimension-list">${karmicFramework.principles.map((principle, index) => `<article><div><span>${escapeHtml(principle.label)}</span><strong>${job.dimensions[index].toFixed(1)}</strong></div><div><i style="width:${job.dimensions[index] * 10}%"></i></div><p>${escapeHtml(principle.question)}</p></article>`).join('')}</section><div class="job-detail-actions"><section class="uplift"><p class="eyebrow">GOOD-KARMA PRACTICE</p><h3>How to raise the work</h3><p>${escapeHtml(job.uplift)}</p></section><section class="risks"><p class="eyebrow">KARMIC RED LINES</p><h3>What pulls it downward</h3><p>${escapeHtml(job.risks)}</p></section></div><div class="job-detail-footer"><p>${escapeHtml(karmicJobsMetadata.salaryNote)}</p><button class="button-primary" data-action="job-compare" data-id="${job.id}">${selected ? 'Remove from comparison' : 'Add to comparison'}</button></div></div>`;
}

function renderJobsHub() {
  if (!['atlas', 'framework', 'compare', 'improve', 'foundations'].includes(state.jobsHub.tab)) state.jobsHub.tab = 'atlas';
  if (state.jobsHub.tab === 'compare' && !state.jobsHub.selectedIds.length) state.jobsHub.tab = 'atlas';
  const detail = karmicJobs.find((job) => job.id === state.jobsHub.detailId);
  const body = detail ? renderJobDetail(detail) : ({ overview: renderJobsOverview, atlas: renderJobsAtlas, framework: renderJobsFramework, compare: renderJobsCompare, improve: renderJobsImprove, foundations: renderJobsFoundations }[state.jobsHub.tab] || renderJobsOverview)();
  return `<div class="view-enter karmic-jobs-page">${body}</div>`;
}

function renderAdminSettingsPage() {
  const account = currentAccount();
  if (!isAdmin()) return `<div class="view-enter admin-page"><header class="admin-page-head"><div><p class="eyebrow">PLATFORM GOVERNANCE</p><strong>Protected platform controls</strong><p>Configuration is separated from personal profile preferences.</p></div><span class="admin-status restricted">Restricted</span></header><section class="admin-page-denied"><span aria-hidden="true">A</span><div><p class="eyebrow">TEAM ADMIN REQUIRED</p><h3>Sign in to manage the career platform.</h3><p>Career guidance rules, AI safeguards, community moderation, privacy, communications, releases, and operational controls remain protected.</p><button class="button-primary" data-action="admin-signin">Return to Admin sign in</button></div></section></div>`;
  const cfg = state.adminConfig;
  const checked = (value) => value ? 'checked' : '';
  const toggle = (name, label, copy) => `<label class="admin-toggle"><input type="checkbox" name="${name}" ${checked(cfg[name])}><span><strong>${label}</strong><small>${copy}</small></span></label>`;
  const auditLabel = cfg.lastAuditAt ? new Date(cfg.lastAuditAt).toLocaleString('en-IN') : 'Not run on this device';
  const sections = [
    ['general', 'General & access'], ['guidance', 'Guidance engine'], ['content', 'Research & content'], ['ai', 'AI governance'],
    ['community', 'Community safety'], ['privacy', 'Privacy & data'], ['communications', 'Communications'], ['operations', 'Operations'],
  ];
  return `<div class="view-enter admin-page">
    <header class="admin-page-head"><div><p class="eyebrow">PLATFORM GOVERNANCE · ${escapeHtml(account.teamRole || 'ADMINISTRATOR')}</p><strong>Platform control centre</strong><p>Guidance, evidence, safety, privacy, and operations in one workspace.</p></div><div class="admin-head-actions"><span class="admin-status active">Admin access active</span><button class="button-secondary" data-action="admin-export">Export configuration</button></div></header>
    <section class="admin-health-strip" aria-label="Platform summary"><article><strong>${researchCatalog.length}</strong><span>research records</span></article><article><strong>${experienceStories.length}</strong><span>experience stories</span></article><article><strong>${discussionTopics.length}</strong><span>discussion topics</span></article><article><strong>${state.accounts.length}</strong><span>local accounts</span></article><article><strong>${escapeHtml(cfg.releaseChannel)}</strong><span>release channel</span></article></section>
    <div class="admin-page-layout"><nav class="admin-section-nav" aria-label="Admin setting categories">${sections.map(([id,label], index) => `<a href="#admin-${id}"><span>${String(index + 1).padStart(2,'0')}</span>${label}</a>`).join('')}</nav>
    <form id="adminConfigurationForm" class="admin-configuration-form">
      <section class="admin-config-section" id="admin-general"><header><span>01</span><div><h3>General & access</h3><p>Product identity, rollout defaults, and entry behavior.</p></div></header><div class="admin-field-grid">
        <label>Platform name<input name="platformName" maxlength="40" value="${escapeHtml(cfg.platformName)}"></label><label>Support email<input name="supportEmail" type="email" value="${escapeHtml(cfg.supportEmail)}"></label>
        <label>Default language<select name="defaultLanguage">${['English','Tamil','Hindi','Malayalam','Telugu'].map((v)=>`<option ${cfg.defaultLanguage===v?'selected':''}>${v}</option>`).join('')}</select></label><label>Platform timezone<select name="timezone"><option ${cfg.timezone==='Asia/Kolkata'?'selected':''}>Asia/Kolkata</option><option ${cfg.timezone==='UTC'?'selected':''}>UTC</option></select></label>
        <label>Academic year<input name="academicYear" maxlength="16" value="${escapeHtml(cfg.academicYear)}"></label><label>Initial rollout region<select name="rolloutRegion">${['Tamil Nadu','India','International'].map((v)=>`<option ${cfg.rolloutRegion===v?'selected':''}>${v}</option>`).join('')}</select></label>
        <label>Default start page<select name="defaultView">${[['calling','Find Your Calling'],['overview','Journey overview'],['explore','Career directions'],['blog','Team Blog']].map(([v,l])=>`<option value="${v}" ${state.platform.defaultView===v?'selected':''}>${l}</option>`).join('')}</select></label><label>Default theme<select name="defaultTheme">${[['violet','Violet-purple'],['brown-violet','Dark brown-violet'],['aurora','Aurora Light'],['teal','Green-teal']].map(([v,l])=>`<option value="${v}" ${state.platform.defaultTheme===v?'selected':''}>${l}</option>`).join('')}</select></label>
      </div><div class="admin-toggle-grid">${toggle('allowGuestAssessments','Guest assessments','Visitors can answer assessments; a profile is required only when saving.')}<label class="admin-toggle"><input type="checkbox" name="allowGuestAccess" ${checked(state.platform.allowGuestAccess)}><span><strong>Guest exploration</strong><small>Allow full read-only exploration without creating an account.</small></span></label><label class="admin-toggle"><input type="checkbox" name="showEditorialLinks" ${checked(state.platform.showEditorialLinks)}><span><strong>Editorial links</strong><small>Show Team Blog and Newsletter in the top navigation.</small></span></label>${toggle('maintenanceMode','Maintenance mode','Keep administrative access while pausing public entry.')}</div></section>

      <section class="admin-config-section" id="admin-guidance"><header><span>02</span><div><h3>Guidance engine</h3><p>Control assessment pacing and recommendation discipline.</p></div></header><div class="admin-field-grid"><label>Recommendations per stage<input name="recommendationsPerStage" type="number" min="3" max="12" value="${cfg.recommendationsPerStage}"></label><label>Assessment retake interval<input name="assessmentRetakeDays" type="number" min="0" max="365" value="${cfg.assessmentRetakeDays}"><small>Days before suggesting a reflective retake.</small></label></div><div class="admin-toggle-grid">${toggle('evidenceBeforeRecommendation','Evidence before recommendations','Require NO-NOs, lived evidence, or constraints before presenting a shortlist.')}${toggle('showUncertainty','Explain uncertainty','Show missing evidence, conflicts, and why a recommendation may change.')}${toggle('humanDecisionNotice','Student remains the decision-maker','Keep agency language visible in guidance and AI outputs.')}</div><aside class="admin-policy-note"><strong>Fixed assessment standard</strong><span>All quantitative reflective scales remain 0–10, use red-to-green progression, and never become diagnostic labels.</span></aside></section>

      <section class="admin-config-section" id="admin-content"><header><span>03</span><div><h3>Research & content</h3><p>Freshness, provenance, regional fallback, and starter identities.</p></div></header><div class="admin-field-grid"><label>Source freshness window<input name="sourceFreshnessDays" type="number" min="30" max="730" value="${cfg.sourceFreshnessDays}"><small>Days before a changing claim is marked for review.</small></label><label>National fallback<select name="regionalFallback">${['India','No fallback','International comparator'].map((v)=>`<option ${cfg.regionalFallback===v?'selected':''}>${v}</option>`).join('')}</select></label><label>Community name pool<select name="generatedNameScope">${['Tamil Nadu','India','International'].map((v)=>`<option ${state.generatedNames.scope===v?'selected':''}>${v}</option>`).join('')}</select></label><label>Default regional scope<select name="defaultRegion"><option value="All" ${state.platform.defaultRegion==='All'?'selected':''}>All regions</option><option value="India::Tamil Nadu" ${state.platform.defaultRegion==='India::Tamil Nadu'?'selected':''}>India · Tamil Nadu</option></select></label></div><div class="admin-toggle-grid">${toggle('requireOfficialSources','Official sources for consequential facts','Eligibility, admissions, rankings, fees, and deadlines need a primary source.')}${toggle('showSourceDates','Display source dates','Expose checked dates and jurisdiction alongside factual guidance.')}${toggle('staleContentWarning','Warn on stale evidence','Flag content that exceeds its freshness window instead of silently ranking it.')}</div></section>

      <section class="admin-config-section" id="admin-ai"><header><span>04</span><div><h3>AI governance</h3><p>Model policy, grounding, disclosure, and human accountability.</p></div></header><div class="admin-field-grid"><label>Serving mode<select name="aiMode">${[['local-first','Local-first'],['local-only','Local only'],['managed','Managed service']].map(([v,l])=>`<option value="${v}" ${cfg.aiMode===v?'selected':''}>${l}</option>`).join('')}</select></label><label>Approved model label<input name="aiModel" maxlength="60" value="${escapeHtml(cfg.aiModel)}"></label><label>Maximum recommendations<input name="maxAiRecommendations" type="number" min="1" max="7" value="${cfg.maxAiRecommendations}"></label><label>Knowledge boundary<select disabled><option>Zysham content + student-shared context</option></select></label></div><div class="admin-toggle-grid">${toggle('citationsRequired','Ground changing claims','Require current sources for admissions, course, salary, and employment claims.')}${toggle('cloudFallback','Cloud fallback','Allow an approved remote model when the local SLM is unavailable.')}${toggle('logPrompts','Retain counselling prompts','Off by default; enable only with an approved retention and consent policy.')}${toggle('humanDecisionNotice','Human accountability notice','Reinforce that AI informs while the student and family decide.')}</div></section>

      <section class="admin-config-section" id="admin-community"><header><span>05</span><div><h3>Community safety</h3><p>Safeguarding, moderation, media, and aggregate insight controls.</p></div></header><div class="admin-field-grid"><label>Minimum participation age<input name="minimumCommunityAge" type="number" min="13" max="18" value="${cfg.minimumCommunityAge}"></label><label>Maximum image upload<input name="maxUploadMb" type="number" min="1" max="20" value="${cfg.maxUploadMb}"><small>Megabytes per image.</small></label><label>Discussion slow mode<input name="slowModeSeconds" type="number" min="0" max="3600" value="${cfg.slowModeSeconds}"><small>Seconds between new posts.</small></label><label>Minimum metrics cohort<input name="minMetricsCohort" type="number" min="5" max="100" value="${cfg.minMetricsCohort}"><small>Never expose small identifiable cohorts.</small></label></div><div class="admin-toggle-grid">${toggle('pseudonymsRequired','Pseudonyms by default','Do not expose minors’ full names, exact schools, or direct contact details.')}${toggle('imageSharing','Image sharing','Allow moderated image attachments with metadata removal.')}${toggle('premoderateFirstPosts','Review first contribution','Queue a new member’s first topic or experience before publication.')}${toggle('enableReporting','Reporting and correction flow','Keep report, correction, lock, and takedown states available.')}</div></section>

      <section class="admin-config-section" id="admin-privacy"><header><span>06</span><div><h3>Privacy & data</h3><p>Retention, consent, portability, deletion, and measurement.</p></div></header><div class="admin-field-grid"><label>Default retention period<input name="privacyRetentionDays" type="number" min="30" max="3650" value="${cfg.privacyRetentionDays}"><small>Days before a private-data review is required.</small></label><label>Consent policy version<input name="consentVersion" maxlength="20" value="${escapeHtml(cfg.consentVersion)}"></label><label>Analytics mode<select name="analyticsMode">${[['privacy-preserving','Privacy-preserving aggregates'],['essential-only','Essential operations only'],['disabled','Disabled']].map(([v,l])=>`<option value="${v}" ${cfg.analyticsMode===v?'selected':''}>${l}</option>`).join('')}</select></label><label>Data residency<select disabled><option>Local browser prototype</option></select></label></div><div class="admin-toggle-grid">${toggle('exportEnabled','Account data export','Allow students and parents to download their records.')}${toggle('deletionEnabled','Self-service deletion','Provide account and journey deletion with clear consequences.')}${toggle('backupsEnabled','Configuration backup','Include platform policy in recoverable administrative backups.')}</div></section>

      <section class="admin-config-section" id="admin-communications"><header><span>07</span><div><h3>Communications</h3><p>Email consent, editorial workflow, and family digests.</p></div></header><div class="admin-field-grid"><label>Weekly digest day<select name="digestDay">${['Sunday','Monday','Wednesday','Friday'].map((v)=>`<option ${cfg.digestDay===v?'selected':''}>${v}</option>`).join('')}</select></label><label>Delivery adapter<select disabled><option>Local preview outbox</option></select></label></div><div class="admin-toggle-grid">${toggle('transactionalEmail','Transactional email','Enable verification, security, and service-status messages.')}${toggle('editorialApproval','Editorial approval required','Require review before Team Blog and Newsletter publication.')}${toggle('newsletterDoubleOptIn','Newsletter double opt-in','Confirm subscription before adding an address to editorial delivery.')}</div><aside class="admin-policy-note"><strong>Current delivery status</strong><span>${state.communications.outbox.length} local-preview messages · ${state.communications.campaigns.length} campaigns recorded.</span></aside></section>

      <section class="admin-config-section" id="admin-operations"><header><span>08</span><div><h3>Operations & releases</h3><p>Release channel, policy audits, diagnostics, and recovery.</p></div></header><div class="admin-field-grid"><label>Release channel<select name="releaseChannel">${['stable','preview','internal'].map((v)=>`<option ${cfg.releaseChannel===v?'selected':''}>${titleCase(v)}</option>`).join('')}</select></label><label>Governance audit frequency<select name="auditFrequency">${['weekly','monthly','quarterly'].map((v)=>`<option ${cfg.auditFrequency===v?'selected':''}>${titleCase(v)}</option>`).join('')}</select></label></div><div class="admin-operation-grid"><article><strong>Policy audit</strong><p>Check source freshness, safety defaults, AI accountability, and community thresholds.</p><small>Last run: ${escapeHtml(auditLabel)}</small><button type="button" class="button-secondary" data-action="admin-run-audit">Run audit</button></article><article><strong>Android release</strong><p>Stable package distributed through the official GitHub release channel.</p><a class="button-secondary" href="https://github.com/shishyan/Zysham2026/releases/download/android-latest/zysham-latest.apk" download>Download latest APK</a></article><article><strong>Local workspace</strong><p>Reset this browser’s accounts, choices, content drafts, and configuration.</p><button type="button" class="button-secondary danger" data-action="admin-reset-workspace">Reset workspace</button></article></div></section>

      <footer class="admin-save-bar"><div><strong>Platform configuration</strong><span>Changes remain local to this prototype until a production backend is connected.</span></div><button type="button" class="button-secondary" data-action="admin-reset-config">Restore defaults</button><button class="button-primary" type="submit">Save configuration</button></footer>
    </form></div></div>`;
}

function render() {
  updateShell();
  renderJourneyRail();
  $('#entryGate').classList.toggle('complete', state.session.mode !== 'signed_out');
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
      'admin-settings': renderAdminSettingsPage,
      compare: renderCompare,
      roadmap: renderRoadmap,
      family: renderFamily,
      evidence: renderEvidence,
      'journey-stage': renderJourneyStagePage,
      research: renderResearch,
      calling: renderCalling,
      blog: renderBlog,
      newsletters: renderNewsletters,
      'study-guide': renderStudyGuide,
      certifications: renderCertificationCourses,
      traditional: renderTraditionalCourses,
      'entrance-exams': renderEntranceExams,
      'dream-job': renderDreamJob,
      jobs: renderJobsHub,
      'vedic-prediction': renderVedicPrediction,
      assessments: renderAssessments,
      'burning-desire': renderBurningDesire,
    })[state.view]();
  }
  if (state.view === 'overview' || state.view === 'journey-stage') host.insertAdjacentHTML('afterbegin', renderJourneyWorkspaceTabs());
  if (state.view === 'journey-stage') {
    const phaseStepper = $('.milestone-chevron-flow', host);
    const stagePage = $('.journey-stage-page', host);
    if (phaseStepper && stagePage) {
      phaseStepper.classList.add('milestone-chevron-top');
      stagePage.prepend(phaseStepper);
    }
  }
  placeMarketingBanner(host, state.view);
  promoteViewHeading(host);
  updateMentor();
}

function refreshView(focusSelector = '') {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  document.body.classList.add('view-refreshing');
  render();
  window.scrollTo({ left: scrollX, top: scrollY, behavior: 'instant' });
  if (focusSelector) $(focusSelector, $('#viewHost'))?.focus({ preventScroll: true });
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('view-refreshing')));
}

function toggleSignal(group, value) {
  const items = state.signals[group];
  const index = items.indexOf(value);
  if (index >= 0) items.splice(index, 1);
  else if (items.length < 4) items.push(value);
  else return showToast('Choose up to four signals in each section.');
  saveState();
  refreshView(`[data-action="signal"][data-group="${CSS.escape(group)}"][data-value="${CSS.escape(value)}"]`);
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
  if (!duplicate) state.evidence.unshift({ id: `ev-${Date.now()}`, title: career.experiment, type: 'Growth plan', createdAt: new Date().toISOString() });
  saveState();
  showToast(duplicate ? 'That growth plan is already tracked.' : 'Growth plan added to Accomplishments.');
}

$('#sidebar').addEventListener('click', (event) => {
  const child = event.target.closest('[data-submenu-kind]');
  if (child) {
    const { submenuKind: kind, value } = child.dataset;
    expandedSidebarGroup = child.closest('[data-nav-group]')?.dataset.navGroup || expandedSidebarGroup;
    if (kind === 'view') setView(value);
    if (kind === 'journey-stage') { state.activeJourneyStage = value; state.journeyStageTab = 'focus'; saveState(); setView('journey-stage'); }
    if (kind === 'community') { state.communityMode = value; state.detailDiscussion = ''; state.detailExperience = ''; state.newDiscussionOpen = false; state.shareExperienceOpen = false; saveState(); setView('discussions'); }
    if (kind === 'research') { state.research.category = value; state.research.detailId = ''; saveState(); setView('research'); }
    if (kind === 'study') { state.studyGuide.track = value; state.studyGuide.subject = Object.keys(studyTracks[value].subjects)[0]; state.studyGuide.selectedChapterId = ''; state.studyGuide.search = ''; saveState(); setView('study-guide'); }
    if (kind === 'certification') { state.certifications.category = value; state.certifications.detailId = ''; state.certifications.search = ''; saveState(); setView('certifications'); }
    if (kind === 'traditional') { state.traditional.category = value; state.traditional.detailId = ''; state.traditional.search = ''; saveState(); setView('traditional'); }
    if (kind === 'exam-section') { state.entranceExams.section = value; saveState(); setView('entrance-exams'); }
    if (kind === 'exam-category') {
      const category = entranceExamCategories.find((item) => item.id === value);
      state.entranceExams.category = value;
      state.entranceExams.search = '';
      state.entranceExams.guidePage = category?.page || 5;
      state.entranceExams.section = value === 'syllabus' ? 'handbook' : 'catalogue';
      saveState(); setView('entrance-exams');
    }
    if (kind === 'dream-job') { state.dreamJob.tab = value; saveState(); setView('dream-job'); }
    if (kind === 'jobs') { state.jobsHub.tab = value; state.jobsHub.detailId = ''; saveState(); setView('jobs'); }
    if (kind === 'calling-mode') { state.calling.mode = value; saveState(); setView('calling'); }
    if (kind === 'calling') { state.calling.mode = 'questions'; state.calling.activeQuestion = value; state.calling.search = ''; state.calling.limit = 18; saveState(); setView('calling'); }
    if (kind === 'blog') { state.editorial.blogCategory = value; state.editorial.selectedBlogId = ''; saveState(); setView('blog'); }
    if (kind === 'newsletter') {
      state.editorial.selectedNewsletterId = infographicTopics.some((topic) => topic.id === value) ? value : '';
      saveState(); setView('newsletters');
    }
    closeNavigation();
    return;
  }
  const button = event.target.closest('[data-view]');
  if (!button) return;
  const group = button.closest('[data-nav-group]');
  if (group) {
    const key = group.dataset.navGroup;
    expandedSidebarGroup = expandedSidebarGroup === key ? '' : key;
    $$('[data-nav-group]').forEach((item) => item.classList.toggle('expanded', item.dataset.navGroup === expandedSidebarGroup));
    $$('[data-menu]').forEach((item) => item.setAttribute('aria-expanded', String(item.closest('[data-nav-group]')?.classList.contains('expanded'))));
    return;
  }
  setView(button.dataset.view);
});

$('.header-actions').addEventListener('click', (event) => {
  const button = event.target.closest('[data-view]');
  if (!button) return;
  setView(button.dataset.view);
});

$('#viewHost').addEventListener('click', (event) => {
  const journeyStage = event.target.closest('[data-journey-stage]');
  if (journeyStage) {
    state.activeJourneyStage = journeyStage.dataset.journeyStage;
    state.journeyStageTab = 'focus';
    setView('journey-stage');
    return;
  }
  const control = event.target.closest('[data-action]');
  if (!control) return;
  const { action, target, group, value, id } = control.dataset;
  if (action === 'admin-signin') { signOutToEntry(); return; }
  if (action === 'admin-run-audit') {
    if (!isAdmin()) return showToast('Team Admin access is required.');
    state.adminConfig.lastAuditAt = new Date().toISOString(); saveState(); render(); showToast('Governance audit completed. No blocking local checks found.'); return;
  }
  if (action === 'admin-export') {
    if (!isAdmin()) return showToast('Team Admin access is required.');
    const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), platform: state.platform, adminConfig: state.adminConfig }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = `zysham-admin-config-${new Date().toISOString().slice(0,10)}.json`; link.click(); URL.revokeObjectURL(url); showToast('Configuration export prepared.'); return;
  }
  if (action === 'admin-reset-config') {
    if (!isAdmin() || !confirm('Restore all platform configuration defaults?')) return;
    state.platform = structuredClone(defaultState.platform); state.adminConfig = structuredClone(defaultState.adminConfig); state.generatedNames = structuredClone(defaultState.generatedNames); saveState(); render(); showToast('Platform configuration defaults restored.'); return;
  }
  if (action === 'admin-reset-workspace') {
    if (!isAdmin() || !confirm('Reset all locally saved Zysham accounts, journeys, drafts, and configuration?')) return;
    state = structuredClone(defaultState); saveState(); signOutToEntry(); showToast('Local workspace reset.'); return;
  }
  const profileOnlyActions = new Set(['stream', 'milestone', 'task-toggle', 'tracker-remove', 'evidence-remove', 'add-experiment', 'share-open', 'discussion-new', 'journey-page-milestone', 'study-status', 'study-mastery-bump', 'study-assignment', 'study-block-done', 'assessment-complete', 'assessment-reset']);
  if (profileOnlyActions.has(action) && !requireProfile(action === 'discussion-new' ? 'Create a profile to post in Discussions.' : action === 'share-open' ? 'Create a profile to share an experience.' : undefined)) return;
  if (action === 'accomplishment-tab') { state.accomplishments.section = value; saveState(); render(); }
  if (action === 'tracker-remove') {
    if (group === 'tasks') state.tasks = state.tasks.filter((item) => item.id !== id);
    else if (['rewards','courses','exams','scores'].includes(group)) state.accomplishments[group] = state.accomplishments[group].filter((item) => item.id !== id);
    saveState(); render(); showToast('Tracker record removed.');
  }
  if (action === 'go') setView(target);
  if (action === 'vedic-reset') { state.vedicPrediction = structuredClone(defaultState.vedicPrediction); saveState(); render(); showToast('Vedic Prediction inputs cleared.'); }
  if (action === 'assessment-open') { state.assessments.active = id; if (state.view === 'assessments' || state.view === 'calling') state.assessments.hub = `career:${id}`; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'assessment-hub') {
    state.assessments.hub = value;
    if (value.startsWith('career:')) state.assessments.active = value.slice(7);
    saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (action === 'campaign-begin') {
    state.assessments.hub = value || 'student';
    saveState(); render();
    requestAnimationFrame(() => $('.assessment-hub-main')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
  if (action === 'assessment-complete') {
    const assessment = careerAssessments.find((item) => item.id === id);
    if (!assessment || careerAssessmentProgress(assessment).answered < assessment.items.length) return showToast('Answer every statement before viewing results.');
    state.assessments.completed[id] = new Date().toISOString(); state.assessments.updatedAt = new Date().toISOString(); saveState(); render(); showToast(`${assessment.title} complete.`);
  }
  if (action === 'assessment-reset') {
    const assessment = careerAssessments.find((item) => item.id === id);
    if (!assessment) return;
    assessment.items.forEach((item) => { delete state.assessments.answers[item.id]; }); delete state.assessments.completed[id]; saveState(); render(); showToast(`${assessment.title} reset.`);
  }
  if (action === 'research-open') { state.research.savedOnly = false; openResearchShelf(); }
  if (action === 'signal') toggleSignal(group, value);
  if (action === 'work-reality-reset') { state.workReality = structuredClone(defaultState.workReality); saveState(); render(); showToast('Work Reality Scan cleared.'); }
  if (action === 'journey-page-milestone') {
    const stage = control.dataset.stage;
    const list = state.journey.stageMilestones[stage] || [];
    state.journey.milestoneProgress ||= structuredClone(defaultState.journey.milestoneProgress);
    state.journey.milestoneProgress[stage] ||= {};
    const current = list.includes(value) ? 'complete' : state.journey.milestoneProgress[stage][value] || 'todo';
    const next = current === 'todo' ? 'doing' : current === 'doing' ? 'complete' : 'todo';
    state.journey.milestoneProgress[stage][value] = next;
    state.journey.stageMilestones[stage] = next === 'complete' ? [...new Set([...list, value])] : list.filter((item) => item !== value);
    saveState(); render();
    showToast(next === 'doing' ? 'Milestone marked in progress.' : next === 'complete' ? 'Milestone completed—add evidence when useful.' : 'Milestone reset to not started.');
  }
  if (action === 'journey-edit') renderJourneyInspector(id);
  if (action === 'journey-stage-nav') { state.activeJourneyStage = id; state.journeyStageTab = 'focus'; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'stage-tab') {
    state.journeyStageTab = value;
    if (value === 'study') {
      const availableTracks = journeyStudyTrackIds(state.activeJourneyStage);
      const nextTrack = availableTracks.includes(state.studyGuide.track) ? state.studyGuide.track : availableTracks[0];
      if (nextTrack && state.studyGuide.track !== nextTrack) {
        state.studyGuide.track = nextTrack;
        state.studyGuide.subject = Object.keys(studyTracks[nextTrack].subjects)[0];
        state.studyGuide.selectedChapterId = '';
        state.studyGuide.search = '';
      }
    }
    saveState(); render();
  }
  if (action === 'stage-phase') { state.journey.stagePhase ||= {}; state.journey.stagePhase[control.dataset.stage] = value; state.journeyStageTab = 'focus'; saveState(); render(); }
  if (action === 'stage-resource') {
    if (target === 'assessments') {
      state.assessments.hub = value || 'signals';
      if (value?.startsWith('career:')) state.assessments.active = value.slice(7);
    }
    if (target === 'study-guide' && studyTracks[value]) {
      state.studyGuide.track = value;
      state.studyGuide.subject = Object.keys(studyTracks[value].subjects)[0];
      state.studyGuide.section = 'overview';
      state.studyGuide.selectedChapterId = '';
    }
    if (target === 'certifications' && certificationCategories.includes(value)) { state.certifications.category = value; state.certifications.detailId = ''; }
    if (target === 'traditional' && traditionalCategories.includes(value)) { state.traditional.category = value; state.traditional.detailId = ''; }
    if (target === 'entrance-exams') { state.entranceExams.section = value || 'catalogue'; state.entranceExams.category = 'all'; }
    if (target === 'jobs') { state.jobsHub.tab = value || 'overview'; state.jobsHub.detailId = ''; }
    saveState(); setView(target);
  }
  if (action === 'stage-community') { state.communityMode = 'discussions'; state.discussionFilters.stage = discussionStageMap[id] || 'All'; setView('discussions'); }
  if (action === 'stream') { state.streamChoice = state.streamChoice === value ? '' : value; saveState(); refreshView(`[data-action="stream"][data-value="${CSS.escape(value)}"]`); }
  if (action === 'filter') { state.careerFilter = value; saveState(); refreshView(`[data-action="filter"][data-value="${CSS.escape(value)}"]`); }
  if (action === 'save-career') {
    state.saved = state.saved.includes(id) ? state.saved.filter((item) => item !== id) : [...state.saved, id];
    saveState(); render();
  }
  if (action === 'compare-career') toggleCompare(id);
  if (action === 'career-detail') { state.detailCareer = id; setView('explore'); }
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
  if (action === 'community-mode') { state.communityMode = value; state.detailStudent = ''; state.detailDiscussion = ''; state.detailExperience = ''; state.newDiscussionOpen = false; state.shareExperienceOpen = false; saveState(); render(); }
  if (action === 'thread-copy') { navigator.clipboard?.writeText(location.href).then(() => showToast('Discussion link copied.')).catch(() => showToast('Copy is unavailable in this browser.')); }
  if (action === 'thread-report') showToast('Report received for local review. Thank you for protecting the community.');
  if (action === 'research-section') { state.research.category = value; state.research.detailId = ''; saveState(); render(); }
  if (action === 'research-detail') openResearchShelf(id);
  if (action === 'research-compare') {
    const alreadyCompared = state.research.compare.includes(id);
    if (!alreadyCompared && state.research.compare.length >= 3) { showToast('Compare up to three evidence records at a time.'); return; }
    state.research.compare = alreadyCompared ? state.research.compare.filter((item) => item !== id) : [...state.research.compare, id];
    saveState(); render();
  }
  if (action === 'research-compare-clear') { state.research.compare = []; saveState(); render(); }
  if (action === 'research-quick-save') { state.research.saved = state.research.saved.includes(id) ? state.research.saved.filter((item) => item !== id) : [...state.research.saved, id]; saveState(); render(); }
  if (action === 'jobs-tab') { state.jobsHub.tab = value; state.jobsHub.detailId = ''; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'jobs-compare-open') {
    if (!state.jobsHub.selectedIds.length) { showToast('Choose at least one role from Job Atlas first.'); return; }
    state.jobsHub.tab = 'compare'; state.jobsHub.detailId = ''; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (action === 'job-detail') { state.jobsHub.detailId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'job-detail-close') { state.jobsHub.detailId = ''; saveState(); render(); }
  if (action === 'job-compare') {
    const selected = state.jobsHub.selectedIds.includes(id);
    if (!selected && state.jobsHub.selectedIds.length >= 3) { showToast('Compare up to three roles at a time.'); return; }
    state.jobsHub.selectedIds = selected ? state.jobsHub.selectedIds.filter((item) => item !== id) : [...state.jobsHub.selectedIds, id];
    saveState(); refreshView(`[data-action="job-compare"][data-id="${CSS.escape(id)}"]`); showToast(selected ? 'Role removed from comparison.' : 'Role added to comparison.');
  }
  if (action === 'dream-tab') { state.dreamJob.tab = value; saveState(); refreshDreamJob(`[data-action="dream-tab"][data-value="${CSS.escape(value)}"]`); }
  if (action === 'dream-employer') { state.dreamJob.selectedId = id; state.dreamJob.selectedVocationId = ''; saveState(); refreshDreamJob(`[data-action="dream-employer"][data-id="${CSS.escape(id)}"]`); }
  if (action === 'dream-vocation') { state.dreamJob.selectedVocationId = id; saveState(); refreshDreamJob(`[data-action="dream-vocation"][data-id="${CSS.escape(id)}"]`); }
  if (action === 'dream-vocation-detail') { state.dreamJob.selectedVocationId = id; saveState(); renderDreamPathDrawer(); }
  if (action === 'dream-role') { state.dreamJob.targetRole = value; state.dreamJob.selectedVocationId = ''; state.roadmapSection = 'gaps'; saveState(); setView('roadmap'); }
  if (action === 'dream-stage') { state.dreamJob.previewStage = value; saveState(); if (state.view === 'roadmap') render(); else refreshDreamJob(`[data-action="dream-stage"][data-value="${CSS.escape(value)}"]`); }
  if (action === 'dream-save') { state.dreamJob.saved = state.dreamJob.saved.includes(id) ? state.dreamJob.saved.filter((item) => item !== id) : [...state.dreamJob.saved, id]; saveState(); refreshDreamJob(`[data-action="dream-save"][data-id="${CSS.escape(id)}"]`); }
  if (action === 'dream-go-evidence') setView('evidence');
  if (action === 'dream-review-calling') { saveState(); setView('burning-desire'); }
  if (action === 'overview-section') { state.overviewSection = ['journey', 'ai'].includes(value) ? value : 'journey'; saveState(); render(); }
  if (action === 'roadmap-section') { state.roadmapSection = value; saveState(); render(); }
  if (action === 'calling-mode') {
    state.calling.mode = value;
    if (value === 'questions') { saveState(); setView('burning-desire'); }
    else { state.assessments.hub = value === 'recommendations' ? 'recommendations' : 'student'; saveState(); if (state.view !== 'assessments') setView('assessments'); else render(); }
  }
  if (action === 'assessment-type') { state.calling.activeAssessment = value; saveState(); render(); }
  if (action === 'assessment-next') { if (value === 'recommendations') { state.calling.mode = 'recommendations'; state.assessments.hub = 'recommendations'; } else state.calling.activeAssessment = value; saveState(); render(); }
  if (action === 'assessment-save') {
    if (!requireProfile('Create a profile only to save this assessment. You can complete it as a guest.')) return;
    captureWorkspace(); saveState(); showToast('Assessment saved to your profile.');
  }
  if (action === 'assessment-clear' && confirm(`Clear all 21 assessment answers ${isGuest() ? 'from this session' : 'saved on this device'}?`)) {
    state.calling.assessment = structuredClone(defaultState.calling.assessment); state.calling.mode = 'assessment'; saveState(); render(); showToast('Assessment answers cleared.');
  }
  if (action === 'calling-question') { state.calling.mode = 'questions'; state.calling.activeQuestion = value; state.calling.search = ''; state.calling.limit = 18; saveState(); render(); }
  if (action === 'calling-option') {
    const list = state.calling.selections[state.calling.activeQuestion] || [];
    state.calling.selections[state.calling.activeQuestion] = list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
    saveState(); refreshView(`[data-action="calling-option"][data-id="${CSS.escape(id)}"]`);
  }
  if (action === 'calling-more') { state.calling.limit += 18; saveState(); render(); }
  if (action === 'calling-save') {
    if (!requireProfile('Create a profile only to save these reflections. You can keep answering as a guest.')) return;
    captureWorkspace(); saveState(); showToast('Burning Desire saved to your profile.');
  }
  if (action === 'blog-open') { state.editorial.selectedBlogId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'blog-close') { state.editorial.selectedBlogId = ''; saveState(); render(); }
  if (action === 'newsletter-view') { state.editorial.selectedNewsletterId = ''; saveState(); setView('newsletters'); }
  if (action === 'newsletter-open') { state.editorial.selectedNewsletterId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'newsletter-close') { state.editorial.selectedNewsletterId = ''; saveState(); render(); }
  if (action === 'calling-clear' && confirm(`Clear all three Burning Desire reflections ${isGuest() ? 'from this session' : 'saved on this device'}?`)) {
    state.calling = structuredClone(defaultState.calling); saveState(); render(); showToast('Burning Desire reflections cleared.');
  }
  if (action === 'student-detail') { state.detailStudent = id; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'student-detail-close') { state.detailStudent = ''; render(); }
  if (action === 'student-more') { state.studentDirectoryLimit += 24; saveState(); render(); }
  if (action === 'student-to-discussions') { state.communityMode = 'discussions'; state.discussionFilters.search = ''; state.discussionFilters.stage = 'All'; state.detailStudent = ''; saveState(); render(); }
  if (action === 'related-discussions') { state.discussionFilters.stage = discussionStageMap[id] || 'All'; closeJourneyInspector(); setView('discussions'); }
  if (action === 'milestone') {
    state.roadmapDone = state.roadmapDone.includes(id) ? state.roadmapDone.filter((item) => item !== id) : [...state.roadmapDone, id];
    saveState(); refreshView(`[data-action="milestone"][data-id="${CSS.escape(id)}"]`);
  }
  if (action === 'roadmap-open') {
    const targets = { profile: 'compass', stream: 'compass', experiment: 'evidence', syllabus: 'roadmap', applications: 'roadmap' };
    if (targets[id] !== 'roadmap') setView(targets[id]); else showToast(id === 'syllabus' ? 'Syllabus rhythm is in your weekly plan.' : 'Application calendar is ready for your confirmed goal.');
  }
  if (action === 'task-toggle') {
    const task = state.tasks.find((item) => item.id === id);
    if (task) task.done = !task.done;
    saveState(); refreshView(`[data-action="task-toggle"][data-id="${CSS.escape(id)}"]`);
  }
  if (action === 'family-lens') { state.familyLens = value; saveState(); refreshView(`[data-action="family-lens"][data-value="${CSS.escape(value)}"]`); }
  if (action === 'evidence-remove') { state.evidence = state.evidence.filter((item) => item.id !== id); saveState(); render(); }
  if (action === 'add-experiment') addExperiment(id);
  if (action === 'study-track') { state.studyGuide.track = value; state.studyGuide.subject = Object.keys(studyTracks[value].subjects)[0]; state.studyGuide.selectedChapterId = ''; state.studyGuide.search = ''; saveState(); render(); }
  if (action === 'study-section') { state.studyGuide.section = value; state.studyGuide.selectedChapterId = ''; saveState(); render(); }
  if (action === 'study-subject') { state.studyGuide.subject = value; state.studyGuide.section = 'curriculum'; state.studyGuide.search = ''; saveState(); render(); }
  if (action === 'study-chapter') { state.studyGuide.selectedChapterId = id; state.studyGuide.chapterTab = 'summary'; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'study-chapter-close') { state.studyGuide.selectedChapterId = ''; saveState(); render(); }
  if (action === 'study-chapter-tab') { state.studyGuide.chapterTab = value; saveState(); render(); }
  if (action === 'study-status') { state.studyGuide.statuses[id] = value; if (value === 'mastered') state.studyGuide.mastery[id] = Math.max(80, studyMastery(id)); saveState(); render(); }
  if (action === 'study-mastery-bump') { state.studyGuide.mastery[id] = Math.min(100, studyMastery(id) + 20); state.studyGuide.statuses[id] = state.studyGuide.mastery[id] >= 80 ? 'revision' : 'learning'; saveState(); render(); showToast('Retrieval cycle recorded.'); }
  if (action === 'study-assignment') { const chapter = Object.values(studyTracks).flatMap((track) => Object.values(track.subjects).flat()).find((item) => item.id === id); if (chapter && !state.studyGuide.assignments.some((item) => item.chapterId === id)) state.studyGuide.assignments.push({ id: `assignment-${Date.now()}`, chapterId: id, title: `Teach-back sheet · ${chapter.title}`, done: false }); saveState(); showToast('Assignment added to your Study Guide.'); }
  if (action === 'study-block-done') { state.studyGuide.studyBlocks = state.studyGuide.studyBlocks.filter((item) => item.id !== id); saveState(); render(); showToast('Study block completed. Record what changed.'); }
  if (action === 'cert-category') { state.certifications.category = value; state.certifications.detailId = ''; state.certifications.search = ''; saveState(); render(); }
  if (action === 'cert-open') { state.certifications.detailId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'cert-close') { state.certifications.detailId = ''; saveState(); render(); }
  if (action === 'cert-save') { state.certifications.saved = state.certifications.saved.includes(id) ? state.certifications.saved.filter((item) => item !== id) : [...state.certifications.saved, id]; saveState(); render(); }
  if (action === 'exam-section') { state.entranceExams.section = value; saveState(); render(); }
  if (action === 'exam-category') { state.entranceExams.category = value; state.entranceExams.search = ''; saveState(); render(); }
  if (action === 'exam-guide-jump') { state.entranceExams.guidePage = Number(control.dataset.page) || 5; state.entranceExams.section = 'handbook'; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'exam-guide-page') { state.entranceExams.guidePage = Number(control.dataset.page) || 5; saveState(); render(); }
  if (action === 'traditional-category') { state.traditional.category = value; state.traditional.detailId = ''; state.traditional.search = ''; saveState(); render(); }
  if (action === 'traditional-open') { state.traditional.detailId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'traditional-close') { state.traditional.detailId = ''; saveState(); render(); }
  if (action === 'traditional-save') { state.traditional.saved = state.traditional.saved.includes(id) ? state.traditional.saved.filter((item) => item !== id) : [...state.traditional.saved, id]; saveState(); render(); }
});

$('#viewHost').addEventListener('keydown', (event) => {
  if (!['Enter', ' '].includes(event.key)) return;
  const row = event.target.closest('.discussion-row');
  if (!row || event.target.closest('button, a, input, select, textarea')) return;
  event.preventDefault();
  state.detailDiscussion = row.dataset.id;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('#viewHost').addEventListener('input', (event) => {
  if (event.target.matches('[data-assessment-answer]')) {
    const itemId = event.target.dataset.assessmentAnswer;
    const wasComplete = Boolean(state.assessments.completed[state.assessments.active]);
    state.assessments.answers[itemId] = Number(event.target.value);
    state.assessments.updatedAt = new Date().toISOString();
    if (wasComplete) delete state.assessments.completed[state.assessments.active];
    saveState();
    if (wasComplete) { render(); return; }
    event.target.closest('.assessment-question')?.classList.add('answered');
    const assessment = careerAssessments.find((item) => item.id === state.assessments.active);
    const progress = careerAssessmentProgress(assessment);
    const ring = $('.assessment-progress-ring');
    if (ring) { ring.style.setProperty('--progress', `${progress.percent * 3.6}deg`); ring.querySelector('strong').textContent = `${progress.percent}%`; }
    const footer = $('.assessment-actions');
    if (footer) { footer.querySelector('span').textContent = `${progress.answered} of ${progress.total} answered`; footer.querySelector('.button-primary').disabled = progress.answered < progress.total; }
    return;
  }
  if (event.target.matches('[data-work-reality]')) {
    const id = event.target.dataset.workReality;
    state.workReality.answers[id] = Number(event.target.value);
    state.workReality.updatedAt = new Date().toISOString();
    const readout = $(`#readout-${id}`);
    if (readout) readout.textContent = `${event.target.value}/10`;
    const row = event.target.closest('.reality-question');
    row?.classList.add('answered');
    row?.style.setProperty('--rating-color', ratingColor(event.target.value));
    saveState();
    const reality = workRealityResult();
    const progress = $('.scan-progress');
    if (progress) { progress.querySelector('strong').textContent = reality.answered; progress.querySelector('span').innerHTML = `of ${workRealityQuestions.length}<br>answered`; }
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
  if (event.target.id === 'callingSearch') {
    state.calling.search = event.target.value;
    state.calling.limit = 18;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    $('#callingSearch')?.focus();
    $('#callingSearch')?.setSelectionRange(cursor, cursor);
  }
  if (event.target.id === 'blogSearch') {
    state.editorial.blogSearch = event.target.value;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    $('#blogSearch')?.focus();
    $('#blogSearch')?.setSelectionRange(cursor, cursor);
  }
  if (event.target.matches('[data-dream-input]')) {
    const field = event.target.dataset.dreamInput;
    state.dreamJob[field] = event.target.value;
    saveState();
    if (field === 'search') {
      const cursor = event.target.selectionStart;
      render();
      const search = $('[data-dream-input="search"]');
      search?.focus(); search?.setSelectionRange(cursor, cursor);
    }
  }
  if (event.target.matches('[data-calling-custom]')) {
    state.calling.custom[event.target.dataset.callingCustom] = event.target.value;
    saveState();
  }
  if (event.target.matches('[data-calling-assessment]')) {
    const [type, trait] = event.target.dataset.callingAssessment.split(':');
    state.calling.assessment[type][trait] = Number(event.target.value);
    const readout = $(`#assessment-${type}-${trait}-readout`);
    if (readout) readout.textContent = `${event.target.value}/10`;
    const row = event.target.closest('.assessment-trait-row');
    row?.classList.add('answered');
    row?.style.setProperty('--rating-color', ratingColor(event.target.value));
    saveState();
    const activeAnswered = callingAssessmentTraits.filter((item) => Object.hasOwn(state.calling.assessment?.[type] || {}, item.id)).length;
    const frameCount = $('.assessment-frame > header > strong');
    if (frameCount) frameCount.textContent = `${activeAnswered}/7 answered`;
    const totalCount = callingAssessmentCoverage();
    const completion = $('.student-assessment > .assessment-head .assessment-completion strong');
    if (completion) completion.textContent = totalCount;
    const typeCount = $(`.assessment-type-tabs [data-value="${CSS.escape(type)}"] small`);
    if (typeCount) typeCount.textContent = `${activeAnswered}/7`;
    const flowCount = $('.calling-flow-tabs button:first-child small');
    if (flowCount) flowCount.textContent = `${totalCount}/21 signals`;
  }
  if (event.target.matches('[data-study-notes]')) { if (!requireProfile('Create a profile to save personal study notes.')) return; state.studyGuide.notes[event.target.dataset.studyNotes] = event.target.value; saveState(); }
  if (event.target.matches('[data-study-search]')) { state.studyGuide.search = event.target.value; saveState(); const query = event.target.value.toLowerCase(); $$('.study-chapter-list > button', $('#viewHost')).forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.matches('[data-cert-search]')) { state.certifications.search = event.target.value; saveState(); const query = event.target.value.toLowerCase(); $$('.catalogue-list > button', $('#viewHost')).forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.id === 'entranceExamSearch') {
    state.entranceExams.search = event.target.value;
    saveState();
    const cursor = event.target.selectionStart;
    render();
    $('#entranceExamSearch')?.focus();
    $('#entranceExamSearch')?.setSelectionRange(cursor, cursor);
  }
  if (event.target.matches('[data-traditional-search]')) { state.traditional.search = event.target.value; saveState(); const query = event.target.value.toLowerCase(); $$('.catalogue-list > button', $('#viewHost')).forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.id === 'jobsSearch') { state.jobsHub.search = event.target.value; saveState(); const cursor = event.target.selectionStart; render(); $('#jobsSearch')?.focus(); $('#jobsSearch')?.setSelectionRange(cursor, cursor); }
  if (event.target.matches('[data-study-mastery]')) { if (!requireProfile('Create a profile to save mastery evidence.')) return; const id = event.target.dataset.studyMastery; state.studyGuide.mastery[id] = Number(event.target.value); saveState(); event.target.closest('.mastery-control')?.querySelector('output')?.replaceChildren(`${event.target.value}%`); }
});

$('#viewHost').addEventListener('change', (event) => {
  if (event.target.matches('[data-work-reality], [data-calling-assessment]')) return;
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
  if (event.target.matches('.forum-region-filter select') && !event.target.closest('#discussionFilters')) {
    state.discussionFilters.region = event.target.value;
    state.discussionLimit = 12;
    saveState(); render();
  }
  if (event.target.closest('#studentDirectoryFilters') && event.target.name) {
    state.studentDirectoryFilters[event.target.name] = event.target.value;
    state.studentDirectoryLimit = 24;
    saveState(); render();
  }
  if (event.target.closest('#blogFilters') && event.target.name === 'category') {
    state.editorial.blogCategory = event.target.value;
    saveState(); render();
  }
  if (event.target.closest('#jobsFilters') && ['category', 'karmaBand', 'salaryBand'].includes(event.target.name)) { state.jobsHub[event.target.name] = event.target.value; saveState(); render(); }
  if (event.target.matches('[data-study-subject]')) { state.studyGuide.subject = event.target.value; state.studyGuide.search = ''; state.studyGuide.selectedChapterId = ''; saveState(); render(); }
});

function fileToDataUrl(file) {
  if (!file || !file.size) return Promise.resolve('');
  if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) return Promise.reject(new Error('Use a PNG, JPG or WebP image.'));
  if (file.size > 1.5 * 1024 * 1024) return Promise.reject(new Error('Keep the image under 1.5 MB.'));
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('The image could not be read.'));
    reader.readAsDataURL(file);
  });
}

async function backgroundFileToDataUrl(file) {
  if (!file || !file.size) return '';
  if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) throw new Error('Use a PNG, JPG or WebP background.');
  if (file.size > 8 * 1024 * 1024) throw new Error('Choose an image under 8 MB.');
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = objectUrl;
    await image.decode();
    const scale = Math.min(1, 1800 / image.naturalWidth, 1200 / image.naturalHeight);
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', .78);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

$('#viewHost').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (event.target.id === 'adminConfigurationForm') {
    if (!isAdmin()) return showToast('Team Admin access is required.');
    const data = new FormData(event.target);
    const textKeys = ['platformName','supportEmail','defaultLanguage','timezone','academicYear','rolloutRegion','regionalFallback','aiMode','aiModel','analyticsMode','consentVersion','digestDay','releaseChannel','auditFrequency'];
    const numberKeys = ['recommendationsPerStage','assessmentRetakeDays','sourceFreshnessDays','maxAiRecommendations','minimumCommunityAge','maxUploadMb','slowModeSeconds','minMetricsCohort','privacyRetentionDays'];
    const booleanKeys = ['allowGuestAssessments','evidenceBeforeRecommendation','showUncertainty','requireOfficialSources','showSourceDates','staleContentWarning','cloudFallback','citationsRequired','humanDecisionNotice','logPrompts','pseudonymsRequired','imageSharing','premoderateFirstPosts','enableReporting','exportEnabled','deletionEnabled','backupsEnabled','transactionalEmail','editorialApproval','newsletterDoubleOptIn','maintenanceMode'];
    textKeys.forEach((key) => { state.adminConfig[key] = String(data.get(key) || '').trim(); });
    numberKeys.forEach((key) => { state.adminConfig[key] = Number(data.get(key)); });
    booleanKeys.forEach((key) => { state.adminConfig[key] = data.has(key); });
    state.platform = { defaultView: data.get('defaultView'), defaultTheme: data.get('defaultTheme'), defaultRegion: data.get('defaultRegion'), allowGuestAccess: data.has('allowGuestAccess'), showEditorialLinks: data.has('showEditorialLinks') };
    state.generatedNames.scope = data.get('generatedNameScope');
    saveState(); updateShell(); render(); showToast('Admin configuration saved.'); return;
  }
  if (event.target.id === 'vedicPredictionForm') {
    if (!requireProfile('Create a profile to save a private Vedic Prediction.')) return;
    const data = new FormData(event.target);
    state.vedicPrediction = {
      ...state.vedicPrediction,
      ...Object.fromEntries(['name','birthDate','birthTime','birthPlace','rashi','nakshatra','ascendant','tenthHouse','dominantPlanet','interest','workPreference','goal'].map((key) => [key, String(data.get(key) || '').trim()])),
      generatedAt: new Date().toISOString(),
    };
    saveState(); render(); showToast('Reflective recommendations are ready.');
    requestAnimationFrame(() => $('.vedic-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    return;
  }
  if (event.target.id === 'studyBlockForm') {
    if (!requireProfile('Create a profile to save a study plan.')) return;
    const data = new FormData(event.target);
    state.studyGuide.studyBlocks.push({ id: `study-${Date.now()}`, track: state.studyGuide.track, subject: data.get('subject'), outcome: String(data.get('outcome')).trim(), date: data.get('date'), time: data.get('time'), minutes: Number(data.get('minutes')), method: data.get('method') });
    saveState(); render(); showToast('Focused study block planned.'); return;
  }
  if (event.target.id === 'studyAssessmentForm') {
    if (!requireProfile('Create a profile to save assessment evidence.')) return;
    const data = new FormData(event.target);
    state.studyGuide.assessments.push({ id: `assessment-${Date.now()}`, track: state.studyGuide.track, subject: data.get('subject'), type: data.get('type'), score: Number(data.get('score')), repair: String(data.get('repair')).trim(), date: new Date().toLocaleDateString('en-IN') });
    saveState(); render(); showToast('Assessment and repair recorded.'); return;
  }
  if (event.target.id === 'blogComposerForm') {
    if (!isAdmin()) return showToast('Team Blog publishing requires an admin profile.');
    const data = new FormData(event.target);
    const account = currentAccount();
    state.editorial.localPosts.unshift({ id: `local-blog-${Date.now()}`, title: String(data.get('title')).trim(), category: data.get('category'), audience: data.get('audience'), deck: String(data.get('deck')).trim(), body: String(data.get('body')).trim(), author: account.displayName, authorRole: account.teamRole || 'Zysham team', publishedAt: new Date().toISOString(), readMinutes: Math.max(3, Math.round(String(data.get('body')).split(/\s+/).length / 180)), status: data.get('status'), featured: false });
    saveState(); render(); showToast(data.get('status') === 'draft' ? 'Team Blog draft saved locally.' : 'Team Blog entry published locally.');
    return;
  }
  if (event.target.id === 'newsletterComposerForm') {
    if (!isAdmin()) return showToast('Newsletter publishing requires an admin profile.');
    const data = new FormData(event.target);
    const status = data.get('status');
    if (status === 'scheduled' && !data.get('scheduledAt')) return showToast('Choose a schedule time before saving.');
    const account = currentAccount();
    const issue = { id: `local-newsletter-${Date.now()}`, issue: newsletterIssues.length + state.editorial.localNewsletters.length + 1, title: String(data.get('title')).trim(), summary: String(data.get('summary')).trim(), sections: String(data.get('sections')).split(/\n+/).map((item) => item.trim()).filter(Boolean), editor: account.displayName, publishedAt: new Date().toISOString(), scheduledAt: data.get('scheduledAt') || '', status, audience: data.get('audience') };
    state.editorial.localNewsletters.unshift(issue);
    const recipients = [...state.accounts.map((item) => item.communication).filter((item) => item?.newsletterSubscribed && item.subscriberEmail).map((item) => item.subscriberEmail), ...(state.communications.newsletterSubscribed && state.communications.subscriberEmail ? [state.communications.subscriberEmail] : [])].filter((email, index, list) => list.indexOf(email) === index);
    const campaign = { id: `campaign-${Date.now()}`, newsletterId: issue.id, subject: issue.title, audience: issue.audience, status, scheduledAt: issue.scheduledAt, createdAt: new Date().toISOString(), recipientCount: recipients.length };
    state.communications.campaigns.unshift(campaign);
    if (status === 'sent') recipients.forEach((email, index) => state.communications.outbox.unshift({ id: `mail-${Date.now()}-${index}`, campaignId: campaign.id, to: email, subject: issue.title, status: 'local-preview', createdAt: new Date().toISOString() }));
    saveState(); render(); showToast(status === 'sent' ? `Campaign added to local outbox for ${campaign.recipientCount} subscriber${campaign.recipientCount === 1 ? '' : 's'}.` : `Newsletter ${status} saved locally.`);
    return;
  }
  if (event.target.id === 'newsletterSubscribeForm') {
    const data = new FormData(event.target);
    const preferences = currentAccount() ? (currentAccount().communication ||= {}) : state.communications;
    preferences.newsletterSubscribed = data.has('consent');
    preferences.subscriberEmail = String(data.get('email')).trim().toLowerCase();
    preferences.consentAt = preferences.newsletterSubscribed ? new Date().toISOString() : '';
    saveState(); render(); showToast(preferences.newsletterSubscribed ? 'Newsletter preference saved on this device.' : 'Newsletter subscription removed.');
    return;
  }
  const profileOnlyForms = new Set(['taskForm', 'evidenceForm', 'rewardTrackerForm', 'courseTrackerForm', 'examTrackerForm', 'scoreTrackerForm', 'shareExperienceForm', 'claimCheckForm', 'newDiscussionForm', 'discussionReplyForm']);
  if (profileOnlyForms.has(event.target.id) && !requireProfile(event.target.id.includes('Discussion') || event.target.id === 'discussionReplyForm' ? 'Create a profile to contribute to Discussions.' : 'Create a profile to save personal work.')) return;
  if (event.target.id === 'taskForm') {
    const data = new FormData(event.target);
    const text = String(data.get('text') || '').trim();
    if (!text) return;
    state.tasks.push({ id: `task-${Date.now()}`, text, stage: data.get('stage'), priority: data.get('priority'), due: data.get('due'), done: false });
    saveState(); render(); showToast('Task added to your tracker.'); return;
  }
  if (event.target.id === 'evidenceForm') {
    const title = $('#evidenceTitle').value.trim();
    const type = $('#evidenceType').value;
    if (!title) return;
    state.evidence.unshift({ id: `ev-${Date.now()}`, title, type, createdAt: new Date().toISOString() });
    saveState(); render(); showToast('Accomplishment added.'); return;
  }
  if (event.target.id === 'rewardTrackerForm') {
    const data = new FormData(event.target); state.accomplishments.rewards.unshift({ id:`reward-${Date.now()}`, title:String(data.get('title')).trim(), issuer:String(data.get('issuer')).trim(), level:data.get('level'), date:data.get('date') }); saveState(); render(); showToast('Reward recorded with context.'); return;
  }
  if (event.target.id === 'courseTrackerForm') {
    const data = new FormData(event.target); state.accomplishments.courses.unshift({ id:`course-${Date.now()}`, title:String(data.get('title')).trim(), provider:String(data.get('provider')).trim(), category:data.get('category'), hours:data.get('hours'), date:data.get('date') }); saveState(); render(); showToast('Completed course recorded.'); return;
  }
  if (event.target.id === 'examTrackerForm') {
    const data = new FormData(event.target); state.accomplishments.exams.unshift({ id:`exam-${Date.now()}`, title:String(data.get('title')).trim(), authority:String(data.get('authority')).trim(), score:String(data.get('score')).trim(), result:data.get('result'), date:data.get('date') }); saveState(); render(); showToast('Exam record added.'); return;
  }
  if (event.target.id === 'scoreTrackerForm') {
    const data = new FormData(event.target); const score=Number(data.get('score')), max=Number(data.get('max')); if (score > max) return showToast('Score cannot be greater than the maximum.'); state.accomplishments.scores.unshift({ id:`score-${Date.now()}`, subject:String(data.get('subject')).trim(), assessment:String(data.get('assessment')).trim(), score, max, date:data.get('date') }); saveState(); render(); showToast('Score added to the trend tracker.'); return;
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
    let imageData = '';
    try { imageData = await fileToDataUrl(event.target.elements.image?.files?.[0]); } catch (error) { showToast(error.message); return; }
    state.userDiscussions.unshift({ id: `local-disc-${Date.now()}`, demo: false, title: data.get('title'), body: data.get('body'), imageData, category: data.get('category'), journeyStage: data.get('stage'), perspectiveContext: { label: `${state.session.activeRole} profile`, country: 'India', region: 'Tamil Nadu', district: state.profile.location || 'Tamil Nadu' }, author: { displayName: actor.name || 'Local profile', role: state.session.activeRole, country: 'India', region: state.profile.location || 'Tamil Nadu' }, tags: ['local'], createdAt: new Date().toISOString(), metrics: { responseCount: 0, helpfulVotes: 0, views: 1 }, responses: [] });
    state.newDiscussionOpen = false; saveState(); render(); showToast('Discussion saved locally.');
  }
  if (event.target.id === 'discussionReplyForm') {
    const data = new FormData(event.target);
    const topicId = event.target.dataset.topic;
    const actor = activeProfile();
    state.discussionReplies[topicId] ||= [];
    let imageData = '';
    try { imageData = await fileToDataUrl(event.target.elements.image?.files?.[0]); } catch (error) { showToast(error.message); return; }
    state.discussionReplies[topicId].push({ id: `local-reply-${Date.now()}`, topicId, parentResponseId: null, author: { displayName: actor.name || 'Local profile', role: state.session.activeRole, country: 'India', region: state.profile.location || 'Tamil Nadu' }, body: data.get('reply'), imageData, createdAt: new Date().toISOString(), helpfulVotes: 0, demo: false });
    saveState(); render(); showToast('Reply saved locally.');
  }
});

$$('.theme-choice').forEach((button) => button.addEventListener('click', () => {
  state.appearance.mode = 'override';
  state.theme = button.dataset.themeChoice;
  saveState();
  render(); renderBackgroundOptions();
  showToast(`${button.title} selected.`);
}));

$('#userAudienceSelect').addEventListener('change', (event) => {
  state.audience = event.target.value;
  state.familyLens = state.audience;
  saveState();
  render();
  showToast(`${state.audience === 'student' ? 'Student' : 'Parent'} guidance view selected.`);
});

$('#userRegionSelect').addEventListener('change', (event) => {
  state.regionScope = event.target.value;
  state.experienceLimit = 12;
  state.detailExperience = '';
  if (state.regionScope === 'All') state.discussionFilters = { ...state.discussionFilters, country: 'All', region: 'All' };
  else {
    const [country, region] = state.regionScope.split('::');
    state.discussionFilters = { ...state.discussionFilters, country, region };
  }
  saveState();
  render();
  showToast(state.regionScope === 'All' ? 'Showing every region.' : `Regional filter: ${state.regionScope.split('::').join(' · ')}`);
});

function closeNavigation() { document.body.classList.remove('nav-open'); }
$('#menuButton').addEventListener('click', () => document.body.classList.add('nav-open'));
$('#sidebarClose').addEventListener('click', closeNavigation);
$('#sidebarScrim').addEventListener('click', closeNavigation);

function setLeftSidebarExpanded(expanded) {
  state.sidebarExpanded = Boolean(expanded);
  saveState();
  updateShell();
}

function setRightSidebarExpanded(expanded) {
  state.researchRailExpanded = Boolean(expanded);
  saveState();
  updateShell();
}

$('#sidebar').addEventListener('click', (event) => {
  if (event.target.closest('#leftSidebarToggle, .sidebar-footer a, .sidebar-footer button') || matchMedia('(max-width: 900px)').matches) return;
  if (!state.sidebarExpanded) {
    event.preventDefault();
    event.stopPropagation();
    setLeftSidebarExpanded(true);
  }
}, true);
$('#leftSidebarToggle').addEventListener('click', (event) => {
  event.stopPropagation();
  setLeftSidebarExpanded(!state.sidebarExpanded);
});
$('#researchRail').addEventListener('click', (event) => {
  if (event.target.closest('#rightSidebarToggle, #mentorTrigger, .right-learning-nav')) return;
  if (!state.researchRailExpanded) {
    event.preventDefault();
    event.stopPropagation();
    setRightSidebarExpanded(true);
  }
}, true);
$('#rightSidebarToggle').addEventListener('click', (event) => {
  event.stopPropagation();
  setRightSidebarExpanded(!state.researchRailExpanded);
});
$('.right-learning-nav').addEventListener('click', (event) => {
  const button = event.target.closest('[data-learning-view]');
  if (button) setView(button.dataset.learningView);
});

function closeJourneyInspector() {
  document.body.classList.remove('journey-open');
  closeRightDrawer('journey');
}

function closeActiveRightDrawer() {
  const kind = $('#rightDrawer').dataset.kind;
  if (kind === 'journey') closeJourneyInspector();
  else if (kind === 'research') closeResearchShelf();
  else if (kind === 'settings') closeSettings();
  else if (kind === 'adminSettings') closeAdminSettings();
  else if (kind === 'mentor') {
    state.mentorChat.open = false;
    $('#mentorDock').classList.remove('mobile-open');
    saveState(); closeRightDrawer('mentor'); updateMentor();
  } else closeRightDrawer();
}

$('#rightDrawerClose').addEventListener('click', closeActiveRightDrawer);
$('#rightDrawerScrim').addEventListener('click', closeActiveRightDrawer);
dreamJobPanel.addEventListener('click', (event) => {
  const milestone = event.target.closest('[data-dream-path-milestone]');
  if (!milestone) return;
  const { path, stage, dreamPathMilestone: value } = milestone.dataset;
  state.dreamJob.vocationProgress ||= {};
  state.dreamJob.vocationProgress[path] ||= {};
  const list = state.dreamJob.vocationProgress[path][stage] || [];
  state.dreamJob.vocationProgress[path][stage] = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  saveState();
  renderDreamPathDrawer(dreamJobVocations.find((item) => item.id === path), stage);
  showToast(isGuest() ? 'Tracked for this guest session. Create a profile when you want to retain it.' : 'Vocation milestone updated.');
});

$('#journeyInspectorClose').addEventListener('click', closeJourneyInspector);
$('#journeyScrim').addEventListener('click', closeJourneyInspector);

$('#researchButton').addEventListener('click', () => { state.research.savedOnly = false; state.research.detailId = ''; saveState(); openResearchShelf(); });
$('#researchSavedButton').addEventListener('click', () => { state.research.category = 'All evidence'; state.research.savedOnly = true; state.research.detailId = ''; state.research.search = ''; saveState(); openResearchShelf(); });
$('#researchRailNav').addEventListener('click', (event) => {
  const button = event.target.closest('[data-research-rail]');
  if (!button) return;
  state.research.category = button.dataset.researchRail;
  state.research.savedOnly = false;
  state.research.detailId = '';
  state.research.search = '';
  saveState();
  openResearchShelf();
});
$('#researchClose').addEventListener('click', closeResearchShelf);
$('#researchScrim').addEventListener('click', closeResearchShelf);
$('#researchPanelBody').addEventListener('click', (event) => {
  const control = event.target.closest('button, a');
  if (control) event.stopPropagation();
  const back = event.target.closest('[data-research-back]');
  if (back) { state.research.detailId = ''; saveState(); renderResearchShelf(); return; }
  const detailButton = event.target.closest('[data-action="research-detail"]');
  if (detailButton) { state.research.detailId = detailButton.dataset.id; saveState(); renderResearchShelf(); return; }
  const savedToggle = event.target.closest('[data-research-saved-toggle]');
  if (savedToggle) { state.research.savedOnly = !state.research.savedOnly; state.research.detailId = ''; saveState(); renderResearchShelf(); return; }
  const save = event.target.closest('[data-research-save]');
  if (save) {
    const id = save.dataset.researchSave;
    state.research.saved = state.research.saved.includes(id) ? state.research.saved.filter((item) => item !== id) : [...state.research.saved, id];
    saveState(); renderResearchShelf(); renderResearchRail(); showToast(state.research.saved.includes(id) ? 'Saved to research shortlist.' : 'Removed from research shortlist.');
  }
  const compare = event.target.closest('[data-action="research-compare"]');
  if (compare) {
    const id = compare.dataset.id;
    const alreadyCompared = state.research.compare.includes(id);
    if (!alreadyCompared && state.research.compare.length >= 3) return showToast('Compare up to three evidence records at a time.');
    state.research.compare = alreadyCompared ? state.research.compare.filter((item) => item !== id) : [...state.research.compare, id];
    saveState(); renderResearchShelf(); showToast(alreadyCompared ? 'Removed from comparison.' : 'Added to comparison.');
  }
  const clear = event.target.closest('[data-action="research-compare-clear"]');
  if (clear) { state.research.compare = []; saveState(); renderResearchShelf(); renderResearchRail(); return; }
  const quickSave = event.target.closest('[data-action="research-quick-save"]');
  if (quickSave) {
    const id = quickSave.dataset.id;
    state.research.saved = state.research.saved.includes(id) ? state.research.saved.filter((item) => item !== id) : [...state.research.saved, id];
    saveState(); renderResearchShelf(); renderResearchRail();
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
$('#researchPanelBody').addEventListener('change', (event) => {
  if (!event.target.closest('#researchDrawerFilters') || event.target.name !== 'geography') return;
  state.research.geography = event.target.value;
  saveState(); renderResearchShelf();
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
    const completing = !list.includes(value);
    state.journey.stageMilestones[stageId] = completing ? [...list, value] : list.filter((item) => item !== value);
    state.journey.milestoneProgress ||= structuredClone(defaultState.journey.milestoneProgress);
    state.journey.milestoneProgress[stageId] ||= {};
    state.journey.milestoneProgress[stageId][value] = completing ? 'complete' : 'todo';
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
  closeRightDrawer('settings');
}

function closeAdminSettings() {
  document.body.classList.remove('admin-settings-open');
  closeRightDrawer('adminSettings');
}

function renderAdminSettings() {
  const host = $('#adminSettingsBody');
  if (!host) return;
  const account = currentAccount();
  const accessActive = isAdmin();
  $$('[data-admin-control]', $('#adminSettingsPanel')).forEach((section) => { section.hidden = !accessActive; });
  host.innerHTML = accessActive
    ? `<div class="admin-settings-identity"><span>${escapeHtml(account.displayName.slice(0, 2).toUpperCase())}</span><div><strong>${escapeHtml(account.displayName)}</strong><small>${escapeHtml(account.teamRole || 'Administrator')} · ${escapeHtml(account.email)}</small></div><em>Admin access active</em></div>`
    : `<div class="admin-access-denied"><span aria-hidden="true">A</span><div><strong>Team Admin access required</strong><p>Admin Settings is always available here, but app configuration, Android release, identity-pool, and maintenance controls remain locked until an admin signs in.</p></div><button class="button-primary" type="button" data-admin-action="signin">Sign in as Admin</button></div><p class="admin-access-note">Choose Admin, Sasha, or Harshini from the Admin users section on the sign-in page.</p>`;
  if (accessActive) {
    const form = $('#platformSettingsForm');
    form.elements.defaultView.value = state.platform.defaultView;
    form.elements.defaultTheme.value = state.platform.defaultTheme;
    form.elements.defaultRegion.value = state.platform.defaultRegion;
    form.elements.allowGuestAccess.checked = state.platform.allowGuestAccess;
    form.elements.showEditorialLinks.checked = state.platform.showEditorialLinks;
  }
}

function openSettings(section = '') {
  closeNavigation();
  closeResearchShelf();
  closeAdminSettings();
  renderAccountSettings();
  renderBackgroundOptions();
  updateShell();
  document.body.classList.add('settings-open');
  openRightDrawer('settings');
  requestAnimationFrame(() => {
    if (section === 'account') $('.account-settings')?.scrollIntoView({ block: 'start' });
    else $('#settingsPanel').scrollTop = 0;
  });
}

$('#headerProfileButton').addEventListener('click', () => openSettings());
$('#adminSettingsButton').addEventListener('click', () => {
  closeNavigation(); closeResearchShelf(); closeSettings();
  closeAdminSettings();
  setView('admin-settings');
});
$('#adminSettingsBody').addEventListener('click', (event) => {
  if (event.target.closest('[data-admin-action="signin"]')) signOutToEntry();
});
$('#platformSettingsForm').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!isAdmin()) return showToast('Team Admin access is required.');
  const data = new FormData(event.target);
  state.platform = {
    defaultView: data.get('defaultView'),
    defaultTheme: data.get('defaultTheme'),
    defaultRegion: data.get('defaultRegion'),
    allowGuestAccess: data.has('allowGuestAccess'),
    showEditorialLinks: data.has('showEditorialLinks'),
  };
  saveState(); updateShell();
  showToast('App configuration saved on this device.');
});
$('#platformSettingsForm').addEventListener('click', (event) => {
  if (!event.target.closest('[data-admin-action="reset-platform"]')) return;
  state.platform = structuredClone(defaultState.platform);
  saveState(); updateShell(); renderAdminSettings();
  showToast('App configuration defaults restored.');
});
$('#accountSettingsBody').addEventListener('click', (event) => {
  const action = event.target.closest('[data-account-action]')?.dataset.accountAction;
  if (action === 'signin' || action === 'signout') signOutToEntry();
});
$('#accountSettingsBody').addEventListener('submit', (event) => {
  if (event.target.id !== 'accountSettingsForm') return;
  event.preventDefault();
  const account = currentAccount();
  if (!account) return;
  const data = new FormData(event.target);
  account.displayName = String(data.get('displayName')).trim();
  account.language = data.get('language');
  account.timezone = data.get('timezone');
  account.visibility = data.get('visibility');
  account.communication = { newsletterSubscribed: data.has('newsletter'), familyDigest: data.has('familyDigest'), productUpdates: data.has('productUpdates'), subscriberEmail: account.email, consentAt: (data.has('newsletter') || data.has('familyDigest') || data.has('productUpdates')) ? new Date().toISOString() : '' };
  if (account.role === 'student') { state.profile.name = account.displayName; state.profiles.student.name = account.displayName; }
  if (account.role === 'parent') state.profiles.parent.name = account.displayName;
  captureWorkspace(); saveState(); updateShell(); renderAccountSettings();
  showToast('Profile and communication preferences saved.');
});
$('.appearance-mode').addEventListener('click', (event) => {
  const button = event.target.closest('[data-appearance-mode]');
  if (!button) return;
  state.appearance.mode = button.dataset.appearanceMode;
  saveState(); updateShell(); renderBackgroundOptions();
  showToast(button.dataset.appearanceMode === 'default' ? 'Zysham appearance defaults restored.' : 'Your appearance override is active.');
});
$('#generatedNameScope').addEventListener('change', (event) => {
  state.generatedNames.scope = event.target.value;
  if (event.target.value === 'Tamil Nadu') state.discussionFilters = { ...state.discussionFilters, country: 'India', region: 'Tamil Nadu' };
  else if (event.target.value === 'India') state.discussionFilters = { ...state.discussionFilters, country: 'India', region: 'All' };
  else state.discussionFilters = { ...state.discussionFilters, country: 'All', region: 'All' };
  saveState();
  renderGeneratedNames();
  if (state.view === 'discussions') render();
  showToast(`${event.target.value} generated-name pool selected.`);
});
$('#settingsClose').addEventListener('click', closeSettings);
$('#settingsScrim').addEventListener('click', closeSettings);
$('#adminSettingsClose').addEventListener('click', closeAdminSettings);
$('#backgroundOptions').addEventListener('click', (event) => {
  const option = event.target.closest('[data-background]');
  if (!option) return;
  state.appearance.mode = 'override';
  state.background = option.dataset.background;
  slideshowBackgroundId = state.background;
  saveState();
  updateShell();
  renderBackgroundOptions();
  showToast(`${allBackgrounds().find((item) => item.id === state.background)?.name} background selected.`);
});

$('#backgroundSetDefault').addEventListener('click', () => {
  const background = effectiveAppearance().background;
  state.appearance.defaultBackgroundId = background.id;
  state.background = background.id;
  saveState(); updateShell(); renderBackgroundOptions();
  showToast(`${background.name} is now your default background.`);
});

$('#backgroundSlideshowEnabled').addEventListener('change', (event) => {
  state.appearance.slideshow.enabled = event.target.checked;
  slideshowBackgroundId = effectiveAppearance(false).background.id;
  backgroundSlideshowSignature = '';
  saveState(); updateShell(); renderBackgroundOptions();
  showToast(event.target.checked ? 'Background slideshow started.' : 'Background slideshow stopped.');
});

$('#backgroundSlideshowInterval').addEventListener('change', (event) => {
  state.appearance.slideshow.interval = Math.max(10, Number(event.target.value) || 20);
  backgroundSlideshowSignature = '';
  saveState(); updateShell(); renderBackgroundOptions();
  showToast(`Backgrounds will change every ${state.appearance.slideshow.interval} seconds.`);
});

$('#backgroundOptions').addEventListener('click', (event) => {
  const remove = event.target.closest('[data-background-remove]');
  if (!remove) return;
  const background = state.appearance.customBackgrounds.find((item) => item.id === remove.dataset.backgroundRemove);
  if (!background || !confirm(`Remove “${background.name}” from this device?`)) return;
  state.appearance.customBackgrounds = state.appearance.customBackgrounds.filter((item) => item.id !== background.id);
  if (state.background === background.id) state.background = 'academy-wide-courtyard';
  if (state.appearance.defaultBackgroundId === background.id) state.appearance.defaultBackgroundId = 'academy-wide-courtyard';
  saveState(); updateShell(); renderBackgroundOptions();
  showToast(`${background.name} removed.`);
});

$('#backgroundAddForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (state.appearance.customBackgrounds.length >= 12) return showToast('Keep up to 12 personal backgrounds on this device. Remove one to add another.');
  const data = new FormData(form);
  const file = form.elements.file.files[0];
  const rawUrl = String(data.get('url') || '').trim();
  if (!file && !rawUrl) return showToast('Choose an image file or add a direct HTTPS image URL.');
  let imageSource = '';
  try {
    if (file) imageSource = await backgroundFileToDataUrl(file);
    else {
      const parsed = new URL(rawUrl);
      if (parsed.protocol !== 'https:') throw new Error('Use a direct HTTPS image URL.');
      imageSource = parsed.href;
    }
  } catch (error) { showToast(error.message); return; }
  const fallbackName = file?.name.replace(/\.[^.]+$/, '') || new URL(imageSource).hostname.replace(/^www\./, '');
  const background = { id: `custom-${Date.now()}`, name: String(data.get('name') || '').trim() || fallbackName || 'Personal background', detail: file ? 'Added from this device' : 'Added by image URL', file: imageSource, custom: true };
  state.appearance.customBackgrounds.unshift(background);
  state.appearance.mode = 'override';
  state.background = background.id;
  slideshowBackgroundId = background.id;
  try { saveState(); } catch {
    state.appearance.customBackgrounds = state.appearance.customBackgrounds.filter((item) => item.id !== background.id);
    state.background = 'academy-wide-courtyard';
    showToast('This image could not be stored. Try a smaller file or use an HTTPS image URL.');
    return;
  }
  form.reset(); updateShell(); renderBackgroundOptions();
  showToast(`${background.name} added and selected.`);
});

$('#appearanceReset').addEventListener('click', () => {
  state.appearance.mode = 'default';
  state.theme = 'violet';
  state.background = 'academy-wide-courtyard';
  state.appearance.defaultBackgroundId = 'academy-wide-courtyard';
  state.appearance.slideshow = { enabled: false, interval: 20 };
  slideshowBackgroundId = '';
  backgroundSlideshowSignature = '';
  saveState(); updateShell(); renderBackgroundOptions();
  showToast('Violet-purple and Wide courtyard restored. Personal backgrounds remain available.');
});

let entryRole = 'student';
let authMode = 'signin';

function passwordDigest(password, salt) {
  return crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${password}`)).then((buffer) => [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, '0')).join(''));
}

function newSalt() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

function setAuthMode(mode) {
  authMode = mode;
  $$('[data-auth-mode]').forEach((button) => {
    const active = button.dataset.authMode === mode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  $('#entryCreateFields').hidden = mode !== 'create';
  $('#entrySigninOptions').hidden = mode !== 'signin';
  $('#seededLoginAccounts').hidden = mode !== 'signin';
  $('#entryTitle').textContent = mode === 'create' ? 'Create your profile.' : 'Welcome back.';
  $('#entryAuthCopy').textContent = mode === 'create' ? 'Separate profiles keep student ownership, parent support, and team publishing permissions clear.' : 'Sign in to the profile stored on this device. Your journey and communication choices will be restored.';
  $('#entrySubmit').innerHTML = mode === 'create' ? `Create <span id="entryRoleLabel">${entryRole}</span> profile →` : 'Sign in →';
  $('#entryIdentifierLabel').textContent = mode === 'create' ? 'Email address' : 'Email or user ID';
  $('#entryIdentifier').type = mode === 'create' ? 'email' : 'text';
  $('#entryIdentifier').placeholder = mode === 'create' ? 'you@example.com' : 'Email or profile name';
  $('#entryPassword').autocomplete = mode === 'create' ? 'new-password' : 'current-password';
  $('#entryPassword').minLength = mode === 'create' ? 8 : 1;
  $('#entryPassword').placeholder = mode === 'create' ? 'At least 8 characters' : 'Enter your password';
  $('#profileName').required = mode === 'create' && entryRole === 'student';
  $('#parentName').required = mode === 'create' && entryRole === 'parent';
  $('#adminName').required = mode === 'create' && entryRole === 'admin';
  $('#enterGuest').hidden = state.platform?.allowGuestAccess === false;
}

function setEntryRole(role) {
  entryRole = role;
  $$('[data-entry-role]').forEach((button) => {
    const active = button.dataset.entryRole === role;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', active);
  });
  $$('[data-role-fields]').forEach((fields) => { fields.hidden = fields.dataset.roleFields !== role; });
  $('#profileName').required = authMode === 'create' && role === 'student';
  $('#parentName').required = authMode === 'create' && role === 'parent';
  $('#adminName').required = authMode === 'create' && role === 'admin';
  if ($('#entryRoleLabel')) $('#entryRoleLabel').textContent = role;
  (role === 'student' ? $('#profileName') : role === 'parent' ? $('#parentName') : $('#adminName')).focus();
}

$('.entry-auth-tabs').addEventListener('click', (event) => {
  const button = event.target.closest('[data-auth-mode]');
  if (button) setAuthMode(button.dataset.authMode);
});

$('.entry-role-tabs').addEventListener('click', (event) => {
  const button = event.target.closest('[data-entry-role]');
  if (button) setEntryRole(button.dataset.entryRole);
});

$('#seededLoginAccounts').addEventListener('click', (event) => {
  const account = event.target.closest('[data-seeded-login]');
  if (!account) return;
  $('#entryIdentifier').value = account.dataset.seededLogin;
  $('#entryPassword').value = account.dataset.seededPassword;
  $('#entryPassword').focus();
});

$('#enterSample').addEventListener('click', () => {
  state.onboarded = true;
  let account = state.accounts.find((item) => item.id === 'sample-student');
  if (!account) {
    account = { id: 'sample-student', email: 'anya.sample@zysham.local', role: 'student', displayName: 'Anya', language: 'English', timezone: 'Asia/Kolkata', visibility: 'Private', emailVerified: false, sample: true, createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString() };
    state.accounts.push(account);
  }
  restoreWorkspace(account.id);
  state.session = { mode: 'profile', activeRole: 'student', accountId: account.id };
  state.profile = { ...state.profile, location: 'Chennai', school: 'Private school' };
  state.profiles.student = { ...state.profile };
  state.saved = ['product-designer'];
  state.compare = ['product-designer', 'data-scientist'];
  state.evidence = [{ id: 'ev-sample', title: 'Inter-school science presentation', type: 'Project' }];
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
  captureWorkspace(account.id);
  saveState();
  render();
  showToast('Anya’s sample journey opened. Reset anytime to see the zipper again.');
});

let guestEntryPending = false;

function enterGuestSession({ animateZipper = false } = {}) {
  if (state.platform?.allowGuestAccess === false) return showToast('Guest exploration is disabled by the Team Admin.');
  if (guestEntryPending || state.session.mode !== 'signed_out') return;
  const gate = $('#entryGate');
  const pull = $('#entryZipPull');
  const finish = () => {
    state.onboarded = true;
    state.session = { mode: 'guest', activeRole: 'student', accountId: '' };
    state.view = state.platform?.defaultView || 'calling';
    state.regionScope = state.platform?.defaultRegion || 'All';
    saveState(); render();
    pull.classList.remove('dragging');
    pull.style.removeProperty('--zip-pull-top');
    pull.style.removeProperty('--zip-pull-left');
    window.setTimeout(() => gate.classList.remove('unzipping'), 380);
    guestEntryPending = false;
    showToast('Guest mode: explore everything; personal publishing and journey edits are locked.');
  };
  if (animateZipper && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    guestEntryPending = true;
    gate.classList.add('unzipping');
    window.setTimeout(finish, 720);
  } else finish();
}

$('#enterGuest').addEventListener('click', () => enterGuestSession());

const entryZipPull = $('#entryZipPull');
let zipDrag = null;
let suppressZipClick = false;

entryZipPull.addEventListener('pointerdown', (event) => {
  if (guestEntryPending || state.session.mode !== 'signed_out' || state.platform?.allowGuestAccess === false) return;
  const gateRect = $('#entryGate').getBoundingClientRect();
  const horizontal = matchMedia('(max-width: 720px)').matches;
  zipDrag = {
    pointerId: event.pointerId,
    horizontal,
    start: horizontal ? event.clientX : event.clientY,
    origin: horizontal ? gateRect.width * .5 : gateRect.height * .14,
    limit: horizontal ? gateRect.width * .9 : gateRect.height * .88,
    distance: 0,
  };
  entryZipPull.setPointerCapture(event.pointerId);
  entryZipPull.classList.add('dragging');
  event.preventDefault();
});

entryZipPull.addEventListener('pointermove', (event) => {
  if (!zipDrag || event.pointerId !== zipDrag.pointerId) return;
  const delta = (zipDrag.horizontal ? event.clientX : event.clientY) - zipDrag.start;
  zipDrag.distance = Math.max(0, Math.min(zipDrag.limit - zipDrag.origin, delta));
  const position = zipDrag.origin + zipDrag.distance;
  entryZipPull.style.setProperty(zipDrag.horizontal ? '--zip-pull-left' : '--zip-pull-top', `${position}px`);
});

function finishZipDrag(event, cancelled = false) {
  if (!zipDrag || event.pointerId !== zipDrag.pointerId) return;
  const progress = zipDrag.distance / Math.max(1, zipDrag.limit - zipDrag.origin);
  const tapped = zipDrag.distance <= 5;
  suppressZipClick = true;
  if (entryZipPull.hasPointerCapture(event.pointerId)) entryZipPull.releasePointerCapture(event.pointerId);
  entryZipPull.classList.remove('dragging');
  entryZipPull.style.removeProperty('--zip-pull-top');
  entryZipPull.style.removeProperty('--zip-pull-left');
  zipDrag = null;
  if (!cancelled && (progress >= .55 || tapped)) enterGuestSession({ animateZipper: true });
  window.setTimeout(() => { suppressZipClick = false; }, 0);
}

entryZipPull.addEventListener('pointerup', (event) => finishZipDrag(event));
entryZipPull.addEventListener('pointercancel', (event) => finishZipDrag(event, true));
entryZipPull.addEventListener('click', (event) => {
  if (suppressZipClick) { event.preventDefault(); return; }
  enterGuestSession({ animateZipper: true });
});

$('#profileForm').addEventListener('change', (event) => {
  if (event.target.name !== 'guide') return;
  $$('.entry-guide').forEach((option) => option.classList.toggle('selected', option.contains(event.target)));
});

$('#profileForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (authMode === 'signin') {
    const identifier = $('#entryIdentifier').value.trim().toLowerCase();
    const password = $('#entryPassword').value;
    const account = state.accounts.find((item) => (item.email === identifier || item.displayName?.toLowerCase() === identifier) && item.passwordHash);
    if (!account || await passwordDigest(password, account.salt) !== account.passwordHash) return showToast('ID or password did not match a profile stored on this device.');
    account.lastLoginAt = new Date().toISOString();
    restoreWorkspace(account.id);
    state.session = { mode: 'profile', activeRole: account.role, accountId: account.id };
    state.audience = account.role === 'parent' ? 'parent' : 'student';
    state.onboarded = true;
    saveState(); render();
    showToast(`Welcome back, ${account.displayName}.`);
    return;
  }
  const name = (entryRole === 'student' ? $('#profileName') : entryRole === 'parent' ? $('#parentName') : $('#adminName')).value.trim();
  const email = $('#entryIdentifier').value.trim().toLowerCase();
  const password = $('#entryPassword').value;
  if (!name || !email || password.length < 8) return showToast('Add a name, valid email, and password of at least 8 characters.');
  if (state.accounts.some((account) => account.email === email)) return showToast('A profile with this email already exists on this device. Use Sign in.');
  const salt = newSalt();
  const teamRole = entryRole === 'admin' ? $('#adminTeamRole').value : '';
  const account = { id: `account-${Date.now()}`, email, role: entryRole, displayName: name, teamRole, language: entryRole === 'parent' ? $('#parentLanguage').value : 'English', timezone: 'Asia/Kolkata', visibility: 'Private', emailVerified: false, salt, passwordHash: await passwordDigest(password, salt), createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString(), profile: { role: entryRole, teamRole, accessLevel: entryRole === 'admin' ? 'administrator' : 'standard', status: 'active', permissions: rolePermissions[entryRole] } };
  state.accounts.push(account);
  restoreWorkspace(account.id);
  state.session = { mode: 'profile', activeRole: entryRole, accountId: account.id };
  if (entryRole === 'student') {
    state.profile = { ...structuredClone(defaultState.profile), name, grade: $('#profileGrade').value, board: $('#profileBoard').value, location: $('#profileLocation').value.trim(), school: 'Private school' };
    state.profiles.student = { ...state.profile };
    state.audience = 'student';
  } else if (entryRole === 'parent') {
    state.profiles.parent = { name, relationship: $('#parentRelationship').value, language: $('#parentLanguage').value, linkedStudentName: $('#linkedStudentName').value.trim() };
    if ($('#linkedStudentName').value.trim()) state.profile.name = $('#linkedStudentName').value.trim();
    state.audience = 'parent';
    state.familyLens = 'parent';
  } else {
    state.audience = 'student';
    state.view = 'blog';
  }
  state.mentor = $('input[name="guide"]:checked', event.currentTarget)?.value || 'miso';
  state.onboarded = true;
  captureWorkspace(account.id);
  saveState();
  updateMentor();
  if (entryRole === 'admin') setView('blog');
  else {
    state.regionScope = state.platform?.defaultRegion || 'All';
    setView(state.platform?.defaultView || 'calling');
  }
  showToast(`Welcome, ${name}. Your path starts here.`);
});

function signOutToEntry() {
  closeSettings(); closeAdminSettings(); closeResearchShelf(); closeJourneyInspector();
  captureWorkspace();
  state.session = { ...state.session, mode: 'signed_out', accountId: '' };
  state.onboarded = false;
  saveState(); render();
  $('#profileForm').reset();
  setAuthMode('signin');
  showToast('Signed out. Your local profiles and journey data are still on this device.');
}

$('#signOutButton').addEventListener('click', signOutToEntry);
$('#signinHelp').addEventListener('click', () => showToast('This local prototype cannot email a reset link. Create another profile or use a sample workspace.'));
$('#toggleEntryPassword').addEventListener('click', (event) => {
  const password = $('#entryPassword');
  const reveal = password.type === 'password';
  password.type = reveal ? 'text' : 'password';
  event.currentTarget.textContent = reveal ? 'Hide' : 'Show';
  event.currentTarget.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
  event.currentTarget.setAttribute('aria-pressed', String(reveal));
});

$('#resetData').addEventListener('click', () => {
  if (!confirm('Reset all locally saved Zysham workspace choices?')) return;
  state = structuredClone(defaultState);
  $('#entryGate').classList.remove('complete');
  $('#profileForm').reset();
  setAuthMode('signin');
  setEntryRole('student');
  saveState();
  setView('overview');
  showToast('Workspace choices reset.');
});

let mentorSLMEngine = null;
let mentorSLMModule = null;
let mentorSLMBusy = false;
const mentorSLMModelId = 'flan-t5-small';
let mentorSLMStatus = {
  state: 'idle',
  label: 'Embedded SLM available',
  detail: 'Flan-T5 Small · quantized CPU/WASM model · no GPU required.',
  progress: 0,
  modelId: '',
};

const mentorCopy = {
  miso: {
    name: 'Miso', role: 'RADICALLY CANDID',
    welcome: 'I will help you eliminate poor fits, test what remains, and show the evidence behind every recommendation.',
  },
  ollie: {
    name: 'Ollie', role: 'CALMLY PRACTICAL',
    welcome: 'You do not need your whole future today. We can turn what matters to you into one small, useful next step.',
  },
};

function mentorStageId() {
  if (state.mentorChat.stage !== 'auto' && yearMilestoneConfig[state.mentorChat.stage]) return state.mentorChat.stage;
  if (yearMilestoneConfig[state.activeJourneyStage] && state.view === 'journey-stage') return state.activeJourneyStage;
  const grade = String(state.profiles?.student?.grade || state.profile?.grade || '10').toLowerCase();
  if (grade.includes('11')) return 'grade11';
  if (grade.includes('12')) return 'grade12';
  if (grade.includes('college')) return 'college1';
  return 'grade10';
}

function mentorEvidence(stageId = mentorStageId()) {
  const config = yearMilestoneConfig[stageId];
  const milestones = state.journey.stageMilestones[stageId] || [];
  const noNos = [...new Set([...(state.journey.noNos[stageId] || []), ...workRealityResult().noNos])];
  const next = config.milestones.find((item) => !milestones.includes(item)) || 'Review the evidence and choose the next reversible step';
  const careersLeft = recommendationsAfterElimination(noNos).slice(0, 3);
  const signals = [
    noNos.length ? `${noNos.length} NO-NO${noNos.length === 1 ? '' : 's'}` : '',
    workRealityResult().answered ? `${workRealityResult().answered} work-reality answers` : '',
    state.journey.stageNotes[stageId]?.trim() ? 'a stage reflection' : '',
    state.journey.ranks[stageId] ? 'performance context' : '',
  ].filter(Boolean);
  return { config, milestones, noNos, next, careersLeft, signals };
}

function mentorSuggestions(stageId) {
  const base = ['What should I focus on this year?', 'Which NO-NO matters most?', 'Recommend one low-risk experiment', 'How should I discuss this with my family?'];
  const specific = {
    grade10: 'How do I choose a stream without knowing my career?', grade11: 'How do I recover weak foundations?', grade12: 'How should I compare courses and entrance routes?',
    college1: 'How do I test whether this course really fits?', college2: 'How do I find my special interest?', college3: 'Which project and internship should I choose?',
    collegeFinal: 'How do I prepare for campus interviews?', firstJob: 'How can my first job lead toward dream work?', dreamJob: 'How do I plan a realistic role move?',
  };
  return [specific[stageId], ...base].filter(Boolean).slice(0, 4);
}

function mentorMessageIntent(message) {
  const lower = String(message || '').trim().toLowerCase();
  if (/\bwhat (?:else )?can you do\b|\bhow can you help\b|\bwhat can i ask\b|\byour (?:skills|capabilities)\b/.test(lower)) return 'capabilities';
  if (/\byou (?:already )?(?:said|told me)\b|\bsame answer\b|\brepeat(?:ing|ed)?\b/.test(lower)) return 'repetition';
  if (/\bwhat else\b|\banother (?:idea|option|step|way)\b|\bsomething different\b|\bother options?\b/.test(lower)) return 'alternative';
  return '';
}

function mentorCapabilityReply() {
  const lead = state.mentor === 'ollie' ? 'Quite a few things—and I should answer the question you asked.' : 'Here is what I can actually help with.';
  return `${lead} I can help you clarify a decision, identify NO-NOs, compare courses or careers, design a low-risk experiment, turn a large goal into next steps, prepare a family conversation, review project or interview evidence, and flag claims that need a current official source. I can use what you have saved in Zysham, but I will not invent facts or make the decision for you. Which kind of help do you want right now?`;
}

function mentorAlternativeReply(stageId, acknowledgeRepeat = false) {
  const evidence = mentorEvidence(stageId);
  const remaining = evidence.config.milestones.filter((item) => !evidence.milestones.includes(item) && item !== evidence.next).slice(0, 3);
  const options = remaining.length ? remaining : ['Review one NO-NO against real daily work', 'Compare two routes on cost, access, and reversibility', 'Speak with one student or practitioner and record what changed'];
  const opening = acknowledgeRepeat ? 'You’re right—I repeated the same recommendation.' : 'Here are different options instead of repeating the same next move.';
  return `${opening} You could ${options.map((item) => item.replace(/^./, (letter) => letter.toLowerCase())).join('; or ')}. Pick the one that answers your current uncertainty—not the one that merely looks productive. Which option feels most useful?`;
}

function mentorSharedNeeds() {
  const shared = state.mentorChat.messages.filter((item) => item.role === 'user').map((item) => item.text).join(' ').toLowerCase();
  const patterns = [
    ['family', /family|parent|home|legacy|lineage/], ['income security', /money|salary|secure|security|uncertain|risk/],
    ['stay local', /near|nearby|location|relocat|commute/], ['project evidence', /project|capstone|portfolio|intern/],
    ['campus placement', /placement|campus|interview/], ['less screen time', /screen|computer|desk/],
    ['avoid clinical exposure', /blood|clinical|hospital/], ['travel', /travel|field work/], ['AI boundaries', /\bai\b|chatgpt|automation/],
  ];
  return patterns.filter(([, pattern]) => pattern.test(shared)).map(([label]) => label).slice(0, 4);
}

function mentorKnowledgeDocuments() {
  const stageDocs = Object.entries(yearMilestoneConfig).map(([id, item]) => ({
    id: `stage:${id}`, title: `${item.step} · ${item.title}`,
    text: `${item.purpose} ${item.copy} Milestones: ${item.milestones.join('; ')}. Reflection: ${item.noteLabel}`,
  }));
  const careerDocs = careers.map((item) => ({ id: `career:${item.id}`, title: item.title, text: `${item.cluster}. ${item.summary} Daily work: ${item.day} Education: ${item.education}. Reality: ${item.reality}. Try: ${item.experiment}.` }));
  const researchDocs = researchCatalog.map((item) => ({ id: `research:${item.id}`, title: item.title, text: `${item.researchDomain}. ${item.summary} ${item.facts.map((fact) => `${fact.label}: ${fact.value}`).join('. ')} Checks: ${item.checks.join('; ')} Caveat: ${item.caveat}. Official sources: ${item.sources.map((source) => source.label).join(', ')}.` }));
  const callingDocs = callingQuestions.map((item) => ({ id: `calling:${item.id}`, title: item.question, text: `${item.guidance} Answer themes: ${[...new Set(item.options.map((option) => option.category))].join(', ')}.` }));
  const studyDocs = Object.values(studyTracks).map((item) => ({ id: `study:${item.id}`, title: item.label, text: `${item.short}. Subjects: ${Object.keys(item.subjects).join(', ')}. Official source: ${item.sourceLabel}.` }));
  const certificationDocs = certificationCourses.map((item) => ({ id: `certification:${item.id}`, title: item.title, text: `${item.provider}. ${item.category}. ${item.level}. ${item.skills}. Cost: ${item.learningCost}. Credential: ${item.credential}.` }));
  const traditionalDocs = traditionalCourses.map((item) => ({ id: `traditional:${item.id}`, title: item.title, text: `${item.provider}. ${item.category}. Path: ${item.path}. Develops: ${item.skills}. Reality: ${item.reality}.` }));
  const dreamJobDocs = dreamJobEmployers.map((item) => ({ id: `dream:${item.id}`, title: `${item.name} career environment`, text: `${item.family}. Role worlds: ${item.roleWorlds.join(', ')}. Evidence: ${item.evidence.join('; ')}. Reality: ${item.reality} Official source: ${item.source}.` }));
  const dreamVocationDocs = dreamJobVocations.map((item) => ({ id: `vocation:${item.id}`, title: `${item.name} purpose-led path`, text: `${item.promise} Daily work: ${item.dailyWork.join('; ')}. NO-NO tests: ${item.noNoTests.join('; ')}. Role worlds: ${item.roleWorlds.join(', ')}. Proof: ${item.proof.join('; ')}. Routes: ${item.routeOptions.join('; ')}. Mobility: ${item.mobilityRoutes.join('; ')}. Stage milestones: ${Object.entries(item.stageMilestones).map(([stage, milestones]) => `${stage}: ${milestones.join(', ')}`).join(' | ')}. Income design: ${item.incomeModel}. Sources: ${item.sources.map((source) => `${source.publisher}: ${source.url}`).join('; ')}` }));
  const karmicJobDocs = karmicJobs.map((item) => ({ id: `karma:${item.id}`, title: `${item.title} · Karmic Genie`, text: `Indicative India salary band ${salaryLabel(item)} per year. Base karma ${item.score}/10 with a context range of ${item.rangeMin}–${item.rangeMax}. Good-karma practice: ${item.uplift} Karmic risks: ${item.risks} This rates patterns of action and consequence, not human worth.` }));
  return [...stageDocs, ...careerDocs, ...researchDocs, ...callingDocs, ...studyDocs, ...certificationDocs, ...traditionalDocs, ...dreamJobDocs, ...dreamVocationDocs, ...karmicJobDocs];
}

function mentorRetrieve(query, stageId, limit = 8) {
  const tokens = [...new Set(`${query} ${yearMilestoneConfig[stageId]?.title || ''}`.toLowerCase().match(/[a-z0-9]{3,}/g) || [])].filter((token) => !['what', 'with', 'this', 'that', 'your', 'have', 'from', 'should', 'could', 'would'].includes(token));
  return mentorKnowledgeDocuments().map((doc) => {
    const haystack = `${doc.title} ${doc.text}`.toLowerCase();
    const score = tokens.reduce((sum, token) => sum + (haystack.includes(token) ? (doc.title.toLowerCase().includes(token) ? 4 : 1) : 0), 0) + (doc.id === `stage:${stageId}` ? 7 : 0);
    return { ...doc, score };
  }).filter((doc) => doc.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
}

function mentorStudentContext(stageId) {
  const evidence = mentorEvidence(stageId);
  const work = workRealityResult();
  const assessment = callingAssessmentResults();
  const assessmentSummary = assessment.filter((trait) => trait.coverage).map((trait) => `${trait.short}: ${trait.score.toFixed(1)}/10 across ${trait.coverage}/3 lenses`).join('; ');
  const calling = callingQuestions.map((question) => {
    const chosen = (state.calling.selections[question.id] || []).map((id) => question.options.find((option) => option.id === id)?.text).filter(Boolean);
    const own = state.calling.custom[question.id]?.trim();
    return chosen.length || own ? `${question.short}: ${[...chosen.slice(0, 5), own].filter(Boolean).join('; ')}` : '';
  }).filter(Boolean);
  const savedCareers = careers.filter((career) => state.saved.includes(career.id)).map((career) => career.title);
  const stageProgress = state.journey.milestoneProgress?.[stageId] || {};
  const selectedVocation = dreamJobVocations.find((item) => item.id === state.dreamJob.selectedVocationId);
  const vocationStage = state.dreamJob.previewStage || stageId;
  const vocationMilestones = selectedVocation?.stageMilestones?.[vocationStage] || [];
  const completedVocationMilestones = selectedVocation ? (state.dreamJob.vocationProgress?.[selectedVocation.id]?.[vocationStage] || []) : [];
  return [
    `Audience: ${state.audience}; active profile: ${state.session.activeRole}; stage: ${evidence.config.step}.`,
    `NO-NOs: ${evidence.noNos.join(', ') || 'none recorded'}. Work-reality profile: ${work.label || 'not completed'}; ${work.answered || 0} answers.`,
    `Completed milestones: ${evidence.milestones.join('; ') || 'none'}. In progress: ${Object.entries(stageProgress).filter(([, status]) => status === 'doing').map(([name]) => name).join('; ') || 'none'}.`,
    `Stage reflection: ${state.journey.stageNotes[stageId]?.trim() || 'none'}. Performance context: ${state.journey.ranks[stageId] || 'not recorded'}.`,
    `Burning Desire reflections: ${calling.join(' | ') || 'none'}. Saved careers: ${savedCareers.join(', ') || 'none'}.`,
    `Student assessment: ${assessmentSummary || 'no trait evidence yet'}. Treat personality, desire and capability as separate evidence; never diagnose or predict success from these scores.`,
    `Dream-work north star: ${dreamJobNorthStar() || 'not recorded'}. Employer environment: ${dreamJobEmployers.find((item) => item.id === state.dreamJob.selectedId)?.name || 'none selected'}; role family: ${state.dreamJob.targetRole || 'not selected'}. Company prestige must never substitute for purpose or role fit.`,
    `Selected vocation: ${selectedVocation?.name || 'none selected'}; vocation stage: ${vocationStage}; completed vocation milestones: ${completedVocationMilestones.join('; ') || 'none'}. Remaining vocation milestones: ${vocationMilestones.filter((item) => !completedVocationMilestones.includes(item)).join('; ') || 'none'}.`,
    `Accomplishments: ${state.evidence.slice(-8).map((item) => `${item.title} (${item.type})`).join('; ') || 'none recorded'}. Shared needs detected: ${mentorSharedNeeds().join(', ') || 'none'}.`,
  ].join('\n');
}

function mentorSystemPrompt(message, stageId) {
  const retrieved = mentorRetrieve(message, stageId);
  const voice = state.mentor === 'miso' ? 'Direct, candid, concise, but never shaming.' : 'Calm, practical, encouraging, but never vague.';
  return `You are ${mentorCopy[state.mentor].name}, Zysham's career counsellor for Indian students and parents. ${voice}
Use only the STUDENT CONTEXT and ZYSHAM KNOWLEDGE below for personal claims. Do not invent marks, eligibility, fees, salaries, rankings, deadlines, placements, or user facts. Say when evidence is missing. Recommendations are hypotheses to test, never destiny, diagnosis, aptitude verdict, astrology, or prestige advice. Start from NO-NOs and constraints; protect student agency, family reality, health, integrity, accessibility, and purpose. For changing or high-stakes claims, explicitly ask the user to verify a current official source. Distinguish what the app knows, what the student shared, and what remains uncertain. Give at most three concrete next steps and one question. Cite grounding inline as [App: exact source title]. Do not cite a source you did not receive.

STUDENT CONTEXT
${mentorStudentContext(stageId)}

ZYSHAM KNOWLEDGE
${retrieved.map((doc) => `[App: ${doc.title}] ${doc.text}`).join('\n\n')}`;
}

function updateMentorModelUI() {
  const status = $('#mentorModelStatus');
  if (!status) return;
  status.textContent = mentorSLMStatus.label;
  $('#mentorModelDetail').textContent = mentorSLMStatus.detail;
  $('#mentorModelDot').className = mentorSLMStatus.state;
  const progress = $('#mentorModelProgress');
  progress.hidden = !['loading', 'generating'].includes(mentorSLMStatus.state);
  $('span', progress).style.width = `${Math.max(2, mentorSLMStatus.progress || 0)}%`;
  const button = $('#mentorModelButton');
  button.disabled = mentorSLMBusy || mentorSLMStatus.state === 'ready';
  button.textContent = mentorSLMStatus.state === 'ready' ? 'Embedded SLM active' : mentorSLMStatus.state === 'loading' ? 'Loading…' : mentorSLMStatus.state === 'fallback' ? 'Retry embedded SLM' : 'Load embedded SLM · 98 MB';
  $('#mentorChatInput').disabled = mentorSLMBusy;
  $('#mentorChatForm button').disabled = mentorSLMBusy;
}

async function initialiseMentorSLM() {
  if (mentorSLMEngine) return mentorSLMEngine;
  mentorSLMBusy = true;
  mentorSLMStatus = { ...mentorSLMStatus, state: 'loading', label: 'Loading embedded SLM', detail: 'Preparing the CPU/WASM engine…', progress: 2 };
  updateMentorModelUI();
  try {
    mentorSLMModule ||= await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1');
    mentorSLMModule.env.allowLocalModels = true;
    mentorSLMModule.env.allowRemoteModels = false;
    mentorSLMModule.env.localModelPath = new URL('./assets/models/', import.meta.url).href;
    mentorSLMEngine = await mentorSLMModule.pipeline('text2text-generation', mentorSLMModelId, {
      device: 'wasm',
      dtype: 'q8',
      progress_callback: (progress) => {
        const fraction = Number(progress.progress || 0);
        const percent = fraction > 1 ? Math.round(fraction) : Math.round(fraction * 100);
        const file = progress.file ? String(progress.file).split('/').pop() : 'embedded model';
        mentorSLMStatus = { ...mentorSLMStatus, state: 'loading', label: 'Loading embedded SLM', detail: `${progress.status || 'Loading'} · ${file}`, progress: Number.isFinite(percent) ? percent : mentorSLMStatus.progress };
        updateMentorModelUI();
      },
    });
    mentorSLMStatus = { state: 'ready', label: 'Embedded SLM ready', detail: 'Flan-T5 Small · quantized CPU/WASM · Zysham grounded', progress: 100, modelId: mentorSLMModelId };
    return mentorSLMEngine;
  } catch (error) {
    mentorSLMEngine = null;
    mentorSLMStatus = { ...mentorSLMStatus, state: 'fallback', label: 'Grounded counsellor ready', detail: 'The embedded SLM could not load. Zysham’s deterministic guidance remains available.', progress: 0 };
    throw error;
  } finally {
    mentorSLMBusy = false;
    updateMentorModelUI();
  }
}

async function mentorSLMReply(message, stageId) {
  const engine = await initialiseMentorSLM();
  const groundedDraft = mentorReply(message, stageId);
  const prompt = `Paraphrase the grounded career-counselling draft in clear, humane English. Preserve every fact and caveat. Do not repeat these instructions. Do not add careers, marks, salaries, eligibility, rankings, diagnoses, or promises. Use no more than 140 words.

Student: ${message.slice(0, 500)}
Grounded draft: ${groundedDraft}
Counsellor:`;
  mentorSLMBusy = true;
  mentorSLMStatus = { ...mentorSLMStatus, state: 'generating', label: 'Counsellor is reasoning', detail: `Grounded in ${mentorRetrieve(message, stageId).length} relevant Zysham records`, progress: 65 };
  updateMentorModelUI();
  try {
    const completion = await engine(prompt, {
      max_new_tokens: 190,
      do_sample: false,
      repetition_penalty: 1.08,
      no_repeat_ngram_size: 3,
    });
    const reply = String(completion?.[0]?.generated_text || '').trim().replace(/^(?:test|grounded)\s+draft:\s*/i, '');
    const words = reply.toLowerCase().match(/[a-z]{3,}/g) || [];
    const uniqueRatio = words.length ? new Set(words).size / words.length : 0;
    const draftWords = new Set((groundedDraft.toLowerCase().match(/[a-z]{4,}/g) || []).filter((word) => !['this', 'that', 'with', 'from', 'your', 'have', 'then', 'what'].includes(word)));
    const overlap = new Set(words.filter((word) => draftWords.has(word))).size;
    const replyNumbers = reply.match(/\b\d+(?:\.\d+)?\b/g) || [];
    const inventedNumber = replyNumbers.some((number) => !groundedDraft.includes(number));
    const repeatsInstructions = /grounded draft|student:|counsellor:|paraphrase the|rewrite the/i.test(reply);
    const coherent = reply.length >= 60 && reply.length <= 1200 && words.length >= 10 && uniqueRatio >= 0.55 && overlap >= 3 && !inventedNumber && !repeatsInstructions;
    return coherent ? reply : groundedDraft;
  } finally {
    mentorSLMBusy = false;
    mentorSLMStatus = { ...mentorSLMStatus, state: 'ready', label: 'Embedded SLM ready', detail: 'Flan-T5 Small · quantized CPU/WASM · Zysham grounded', progress: 100 };
    updateMentorModelUI();
  }
}

async function runMentorTurn(message, stageId = mentorStageId()) {
  addMentorMessage('user', message, stageId);
  saveState(); updateMentor();
  let reply = '';
  const directIntent = mentorMessageIntent(message);
  if (directIntent) {
    reply = mentorReply(message, stageId);
  } else if (mentorSLMEngine && mentorSLMStatus.state === 'ready') {
    try {
      reply = await mentorSLMReply(message, stageId);
    } catch {
      reply = mentorReply(message, stageId);
    }
  } else {
    reply = mentorReply(message, stageId);
  }
  const previousAssistant = [...state.mentorChat.messages].reverse().find((item) => item.role === 'assistant');
  const normaliseReply = (text) => String(text || '').replace(/\s+/g, ' ').trim().toLowerCase();
  if (previousAssistant && normaliseReply(previousAssistant.text) === normaliseReply(reply)) {
    reply = mentorAlternativeReply(stageId, true);
  }
  addMentorMessage('assistant', reply, stageId);
  saveState(); updateMentor();
}

function mentorReply(message, stageId) {
  const evidence = mentorEvidence(stageId);
  const lower = message.toLowerCase();
  const intent = mentorMessageIntent(message);
  if (intent === 'capabilities') return mentorCapabilityReply();
  if (intent === 'repetition') return mentorAlternativeReply(stageId, true);
  if (intent === 'alternative') return mentorAlternativeReply(stageId);
  const sharedNeeds = mentorSharedNeeds();
  const warm = state.mentor === 'ollie';
  const opening = warm ? 'Let’s make this manageable.' : 'Let’s separate pressure from evidence.';
  let guidance;
  if (/family|parent|home|legacy|lineage/.test(lower)) guidance = 'Write down the non-negotiable family constraint—location, care time, income, tradition, or safety—then compare two routes that respect it and one route that tests whether it is negotiable. Family duty belongs in the decision; it should not silently become the whole decision.';
  else if (/money|salary|secure|security|uncertain|risk/.test(lower)) guidance = 'Set a minimum acceptable income, training cost, relocation boundary, and uncertainty tolerance. Compare routes against those numbers, then test whether a higher-income option still survives your strongest NO-NOs. Salary claims need a dated source and a realistic entry-level range.';
  else if (/blood|mbbs|doctor|medical|biology|subject/.test(lower)) guidance = 'Treat subject dislike and clinical tolerance as evidence, not a label. For medicine, test the ordinary reality—long study, illness, bodily exposure, shifts, responsibility, and patient contact—then verify current eligibility officially. If the reality is a firm NO-NO, explore adjacent health roles with different daily work.';
  else if (/project|capstone|portfolio|intern/.test(lower)) guidance = 'Choose a problem that overlaps your special interest, a target role’s real tasks, and evidence you can demonstrate. Before committing, confirm a credible guide, access to data or tools, a six-week first version, and one external reviewer. The best project is one you can explain—including failures—without AI carrying the reasoning.';
  else if (/college|course|degree|school|entrance/.test(lower)) guidance = 'Compare the actual curriculum, compulsory subjects, cost, commute or relocation, teaching access, project quality, internships, and role-level placement evidence. Prestige is context, not fit. Keep one adjacent route alive until official eligibility and affordability are verified.';
  else if (/job|placement|campus|interview|company/.test(lower)) guidance = 'Work backward from the actual campus roles: eligibility filters, daily tasks, selection rounds, location, shifts, and bond terms. Build one defensible project, maintain the strongest realistic academic evidence, practise explaining decisions aloud, and keep an off-campus alternative active.';
  else if (/\bai\b|chatgpt|model|automation/.test(lower)) guidance = 'Use AI to surface options, practise, and challenge assumptions—not to own the choice. Record the claim, date, source checked, what you did unaided, and who remains accountable. Protect sensitive data and preserve weekly deep-skill practice.';
  else if (/don.?t know|confus|stuck|unsure|no idea/.test(lower)) guidance = `Start with elimination. Your current list has ${evidence.noNos.length || 'no recorded'} firm NO-NOs. Add the conditions that reliably drain or conflict with your life, then try one surviving path through its least glamorous task.`;
  else guidance = `For ${evidence.config.step.replace(/^\d+ · /, '')}, the most useful next move is “${evidence.next}”. Make it small enough to complete, then record what felt energising, draining, difficult, and worth repeating.`;
  const candidates = evidence.careersLeft.length ? ` Paths still worth testing in the current sample: ${evidence.careersLeft.map((career) => career.title).join(', ')}.` : '';
  const basisParts = [...evidence.signals, ...(sharedNeeds.length ? [`needs you shared: ${sharedNeeds.join(', ')}`] : [])];
  const basis = basisParts.length ? `Based on ${basisParts.join(', ')}.` : 'This is a starting hypothesis because little personal evidence is saved yet.';
  return `${opening} ${guidance}${candidates} ${basis} This is a recommendation to test, not a verdict.`;
}

function addMentorMessage(role, text, stage = mentorStageId()) {
  state.mentorChat.messages.push({ id: `mentor-${Date.now()}-${Math.random().toString(16).slice(2)}`, role, text, stage, mentor: role === 'assistant' ? state.mentor : undefined, createdAt: new Date().toISOString() });
  state.mentorChat.messages = state.mentorChat.messages.slice(-50);
}

function updateMentor() {
  const mentor = mentorCopy[state.mentor];
  const stageId = mentorStageId();
  const evidence = mentorEvidence(stageId);
  const desktop = matchMedia('(min-width: 1200px)').matches;
  const shouldOpen = Boolean(state.mentorChat.open) && (desktop || $('#mentorDock').classList.contains('mobile-open'));
  $('#mentorName').textContent = mentor.name;
  $('#mentorTriggerName').textContent = mentor.name;
  $('#mentorRole').textContent = mentor.role;
  $$('.mentor-animal').forEach((face) => {
    face.classList.toggle('cat', state.mentor === 'miso');
    face.classList.toggle('dog', state.mentor === 'ollie');
  });
  $('#mentorStage').value = state.mentorChat.stage;
  const sharedNeeds = mentorSharedNeeds();
  $('#mentorContextSummary').textContent = isGuest() ? `Guest preview · ${sharedNeeds.length ? `using shared needs: ${sharedNeeds.join(', ')}` : 'tell the guide your needs; no personal journey is being built'}.` : `${evidence.config.step} · ${evidence.milestones.length}/${evidence.config.milestones.length} milestones · ${evidence.noNos.length} NO-NOs${sharedNeeds.length ? ` · shared: ${sharedNeeds.join(', ')}` : ''}`;
  $('#mentorRecommendation').innerHTML = `<span>CURRENT RECOMMENDATION</span><h3>${escapeHtml(evidence.config.title)}</h3><p><strong>Next evidence:</strong> ${escapeHtml(evidence.next)}</p>${evidence.careersLeft.length ? `<small>Explore: ${evidence.careersLeft.map((career) => escapeHtml(career.title)).join(' · ')}</small>` : ''}<button type="button" data-mentor-action="open-stage">Open this year’s plan →</button>`;
  const messages = state.mentorChat.messages;
  $('#mentorMessages').innerHTML = messages.length ? messages.map((item) => `<article class="mentor-message ${item.role}"><small>${item.role === 'assistant' ? mentorCopy[item.mentor || state.mentor]?.name || mentor.name : 'You'}</small><p>${escapeHtml(item.text)}</p></article>`).join('') : `<article class="mentor-message assistant"><small>${mentor.name}</small><p>${escapeHtml(mentor.welcome)} Tell me what you do not want, what you cannot compromise on, or what decision is in front of you.</p></article>`;
  $('#mentorSuggestions').innerHTML = mentorSuggestions(stageId).map((question) => `<button type="button" data-mentor-question="${escapeHtml(question)}">${escapeHtml(question)}</button>`).join('');
  $('[data-mentor-action="switch"]').textContent = `Switch to ${state.mentor === 'miso' ? 'Ollie' : 'Miso'}`;
  const drawerKind = $('#rightDrawer').dataset.kind;
  const canShowMentor = shouldOpen && (!drawerKind || drawerKind === 'mentor');
  $('#mentorDock').classList.toggle('open', canShowMentor);
  document.body.classList.toggle('mentor-open', canShowMentor && desktop);
  if (canShowMentor) openRightDrawer('mentor', { title: `${mentor.name} · Career counsellor` });
  else if (!shouldOpen && drawerKind === 'mentor') closeRightDrawer('mentor');
  $('#mentorTrigger').setAttribute('aria-expanded', String(shouldOpen));
  updateMentorModelUI();
  requestAnimationFrame(() => { const log = $('#mentorMessages'); log.scrollTop = log.scrollHeight; });
}

$('#mentorTrigger').addEventListener('click', () => {
  state.mentorChat.open = true;
  $('#mentorDock').classList.add('mobile-open');
  saveState();
  updateMentor();
});
$('#mentorClose').addEventListener('click', () => {
  state.mentorChat.open = false;
  $('#mentorDock').classList.remove('mobile-open');
  saveState();
  updateMentor();
});
$('#mentorPanel').addEventListener('click', async (event) => {
  const question = event.target.closest('[data-mentor-question]');
  if (question) {
    const text = question.dataset.mentorQuestion;
    await runMentorTurn(text, mentorStageId());
    return;
  }
  const button = event.target.closest('[data-mentor-action]');
  if (!button) return;
  if (button.dataset.mentorAction === 'switch') {
    state.mentor = state.mentor === 'miso' ? 'ollie' : 'miso';
    saveState(); updateMentor();
  } else if (button.dataset.mentorAction === 'open-stage') {
    state.activeJourneyStage = mentorStageId();
    setView('journey-stage');
  } else if (button.dataset.mentorAction === 'load-model') {
    try { await initialiseMentorSLM(); showToast('The embedded SLM is loaded and grounded in Zysham.'); }
    catch { showToast('The embedded SLM could not load. Grounded counselling remains active.'); }
  } else if (button.dataset.mentorAction === 'clear' && confirm('Clear this private counselling conversation?')) {
    state.mentorChat.messages = [];
    saveState(); updateMentor();
  }
});

$('#mentorStage').addEventListener('change', (event) => {
  state.mentorChat.stage = event.target.value;
  saveState(); updateMentor();
});

$('#mentorChatForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const input = $('#mentorChatInput');
  const message = input.value.trim();
  if (!message) return;
  const stageId = mentorStageId();
  input.value = '';
  await runMentorTurn(message, stageId);
});

matchMedia('(min-width: 1200px)').addEventListener('change', () => updateMentor());

window.addEventListener('hashchange', () => {
  const view = location.hash.slice(1);
  if (viewMeta[view]) setView(view, { updateHash: false });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab' && document.body.classList.contains('right-drawer-open')) {
    const drawer = $('#rightDrawer');
    const focusable = $$('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), details > summary', drawer).filter((item) => !item.hidden && item.getClientRects().length);
    if (focusable.length) {
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return;
  }
  if (event.key !== 'Escape') return;
  if (document.body.classList.contains('right-drawer-open')) closeActiveRightDrawer();
  else if (document.body.classList.contains('research-open')) closeResearchShelf();
  else if (document.body.classList.contains('journey-open')) closeJourneyInspector();
  else if (document.body.classList.contains('settings-open')) closeSettings();
  else if (document.body.classList.contains('nav-open')) closeNavigation();
  else if ($('#mentorDock').classList.contains('open')) {
    state.mentorChat.open = false;
    $('#mentorDock').classList.remove('mobile-open');
    saveState(); updateMentor();
  }
});

const initialView = location.hash.slice(1);
const openInitialResearch = initialView === 'research';
const openInitialStudyGuide = initialView === 'study-guide';
const openInitialAIJourney = initialView === 'ai-journey';
if (openInitialStudyGuide) {
  state.activeJourneyStage = state.studyGuide.track === 'grade11' ? 'grade11' : 'grade12';
  state.journeyStageTab = 'study';
  state.view = 'journey-stage';
  history.replaceState(null, '', '#journey-stage');
} else if (openInitialAIJourney) {
  state.overviewSection = 'ai';
  state.view = 'overview';
  history.replaceState(null, '', '#overview');
} else if (viewMeta[initialView] && !openInitialResearch) state.view = initialView;
setAuthMode('signin');
updateMentor();
render();
if (openInitialResearch) requestAnimationFrame(() => openResearchShelf());
