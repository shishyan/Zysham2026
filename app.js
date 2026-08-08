import { experienceStories, experienceCorpusMetadata } from './data/experiences.js';
import { discussionTopics, discussionCorpusMetadata } from './data/discussions.js';
import { demoStudents as generatedProfiles, demoStudentMetadata as generatedNameMetadata } from './data/demo-students.js';
import { callingQuestions, callingMetadata } from './data/calling-options.js';
import { teamBlogEntries, newsletterIssues, editorialMetadata } from './data/editorial.js';
import { studyTracks, studyGuideMeta } from './data/study-guide.js';
import { certificationCategories, certificationCourses } from './data/certification-courses.js';
import { traditionalCategories, traditionalCourses } from './data/traditional-courses.js';
import { schoolExamResearch, schoolExamResearchMetadata } from './data/research-schools-exams.js';
import { collegeCourseResearch, collegeCourseResearchMetadata } from './data/research-colleges-courses.js';
import { jobLocationResearch, jobLocationResearchMetadata } from './data/research-jobs-locations.js';

const demoStudentMetadata = generatedNameMetadata;

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

const defaultState = {
  version: 5,
  onboarded: false,
  session: { mode: 'signed_out', activeRole: 'student', accountId: '' },
  accounts: [],
  workspaces: {},
  profile: { name: 'Anya', grade: '10', board: 'CBSE', location: '', school: 'Private school', schoolName: '', medium: 'English', mobility: 'Nearby / daily commute' },
  profiles: {
    student: { name: 'Anya', grade: '10', board: 'CBSE', location: '', school: 'Private school' },
    parent: { name: '', relationship: 'Parent', language: 'English', linkedStudentName: '' },
  },
  view: 'calling',
  activeJourneyStage: 'grade10',
  theme: 'brown-violet',
  regionScope: 'All',
  background: 'campus-walk',
  appearance: { mode: 'default', customBackgrounds: [] },
  audience: 'student',
  mentor: 'miso',
  mentorChat: { open: true, stage: 'auto', messages: [] },
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
  discussionFilters: { search: '', category: 'All', stage: 'All', country: 'India', region: 'Tamil Nadu' },
  discussionLimit: 12,
  savedDiscussions: [],
  userDiscussions: [],
  discussionReplies: {},
  communityMode: 'discussions',
  journeyStageTab: 'focus',
  studentDirectoryFilters: { search: '', country: 'All', stage: 'All' },
  studentDirectoryLimit: 24,
  research: { category: 'All evidence', search: '', geography: 'All', saved: [], compare: [], detailId: '' },
  calling: {
    activeQuestion: 'freedom', search: '', limit: 18,
    selections: { freedom: [], boundary: [], legacy: [] },
    custom: { freedom: '', boundary: '', legacy: '' },
  },
  generatedNames: { scope: 'Tamil Nadu' },
  communications: { newsletterSubscribed: false, productUpdates: false, familyDigest: false, consentAt: '', subscriberEmail: '', campaigns: [], outbox: [] },
  editorial: { blogSearch: '', blogCategory: 'All', selectedBlogId: '', selectedNewsletterId: '', localPosts: [], localNewsletters: [] },
  studyGuide: { section: 'overview', track: 'grade11', subject: 'Physics', search: '', selectedChapterId: '', chapterTab: 'summary', statuses: {}, mastery: {}, notes: {}, studyBlocks: [], assessments: [], assignments: [] },
  certifications: { category: 'Digital & AI', search: '', saved: [], detailId: '' },
  traditional: { category: 'Dance', search: '', saved: [], detailId: '' },
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
  'journey-stage': ['YEAR-BY-YEAR JOURNEY', 'Journey stage'],
  research: ['VERIFY BEFORE YOU RANK', 'Research'],
  calling: ['THREE QUESTIONS · 324 POSSIBILITIES', 'Find Your Calling'],
  blog: ['FROM THE ZYSHAM TEAM', 'Team Blog'],
  newsletters: ['FIELD NOTES FOR THE JOURNEY', 'Newsletter'],
  'study-guide': ['LEARN · PRACTISE · MASTER', 'Study Guide'],
  certifications: ['RECOGNISED SELF-LEARNING', 'Certification Courses'],
  traditional: ['HERITAGE · DISCIPLINE · EXPRESSION', 'Traditional Courses'],
};

const campusBackgrounds = [
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

const researchDomains = ['All evidence', 'Schools & subjects', 'Entrances & admissions', 'Colleges & courses', 'Cost & funding', 'Careers & skills', 'Apprenticeships', 'Employers', 'Locations'];
const researchCatalog = [...schoolExamResearch, ...collegeCourseResearch, ...jobLocationResearch].map((item) => {
  const raw = String(item.domain).toLowerCase();
  const domain = raw === 'school' || raw === 'planning' || (raw === 'verification' && item.category?.toLowerCase().includes('school')) ? 'Schools & subjects'
    : raw === 'exam' || raw === 'admissions' ? 'Entrances & admissions'
    : raw === 'college research' || raw === 'verification' ? 'Colleges & courses'
    : raw === 'affordability' ? 'Cost & funding'
    : raw === 'jobs' || raw === 'skills' ? 'Careers & skills'
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
let toastTimer;

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

const drawerDefinitions = {
  journey: { source: '#journeyInspector', kicker: 'YEAR-BY-YEAR JOURNEY', title: 'Journey stage', width: 470 },
  research: { source: '#researchPanel', kicker: 'EVIDENCE BEFORE DECISIONS', title: 'Research', width: 500 },
  settings: { source: '#settingsPanel', kicker: 'PERSONALISE ZYSHAM', title: 'Settings', width: 540 },
  mentor: { source: '#mentorPanel', kicker: 'AI-ASSISTED COUNSELLING', title: 'Miso · Career counsellor', width: 390 },
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
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('right-drawer-open');
  if (kind !== 'mentor') { $('#mentorDock').classList.remove('open'); document.body.classList.remove('mentor-open'); }
}

function closeRightDrawer(kind = '') {
  const drawer = $('#rightDrawer');
  if (kind && drawer.dataset.kind !== kind) return;
  drawer.setAttribute('aria-hidden', 'true');
  drawer.dataset.kind = '';
  document.body.classList.remove('right-drawer-open', 'journey-open', 'research-open', 'settings-open', 'mentor-open');
  $('#mentorDock').classList.remove('open');
  $$('.right-drawer-view', drawer).forEach((view) => { view.hidden = true; view.classList.remove('active'); view.setAttribute('aria-hidden', 'true'); });
}

initialiseRightDrawer();

const sidebarMenuViews = {
  journey: ['overview', 'journey-stage'],
  discussions: ['discussions'], research: ['research'], study: ['study-guide'], certifications: ['certifications'],
  traditional: ['traditional'], calling: ['calling', 'compass', 'explore', 'compare', 'roadmap', 'ai-journey', 'evidence'], blog: ['blog'], newsletters: ['newsletters'],
};

function sidebarMenuDefinitions() {
  return {
    journey: [{ kind: 'view', value: 'overview', label: 'Journey overview', group: 'Workspace' }],
    discussions: [['discussions','Discussions'],['experiences','Experience Exchange'],['saved','Saved topics']].map(([value,label]) => ({ kind: 'community', value, label })),
    research: researchDomains.map((value) => ({ kind: 'research', value, label: value })),
    study: Object.values(studyTracks).map((track) => ({ kind: 'study', value: track.id, label: track.label, meta: track.short })),
    certifications: certificationCategories.map((value) => ({ kind: 'certification', value, label: value })),
    traditional: traditionalCategories.map((value) => ({ kind: 'traditional', value, label: value })),
    calling: [
      ...callingQuestions.map((question) => ({ kind: 'calling', value: question.id, label: question.short, meta: `Question ${question.number}`, group: 'Calling questions' })),
      ...[['compass','Know yourself'],['explore','Explore careers'],['compare','Compare paths'],['roadmap','Action plan'],['ai-journey','AI Journey'],['evidence','Evidence wallet']].map(([value,label]) => ({ kind: 'view', value, label, group: 'Decision tools' })),
    ],
    blog: [{ kind: 'blog', value: 'All', label: 'All viewpoints' }, ...[...new Set(teamBlogEntries.map((item) => item.category))].map((value) => ({ kind: 'blog', value, label: value }))],
    newsletters: [{ kind: 'newsletter', value: 'latest', label: 'Latest issue' }, { kind: 'newsletter', value: 'archive', label: 'Issue archive' }, { kind: 'newsletter', value: 'subscribe', label: 'Subscribe & preferences' }],
  };
}

function initialiseSidebarMenus() {
  const definitions = sidebarMenuDefinitions();
  const submenuIcons = {
    overview: '◇', grade10: '10', grade11: '11', grade12: '12', college1: 'Ⅰ', college2: 'Ⅱ', college3: 'Ⅲ', collegeFinal: 'Ⅳ', firstJob: '↗', dreamJob: '★',
    compass: '⌁', explore: '✦', compare: '⇄', roadmap: '✓', 'ai-journey': '✧', evidence: '▣', discussions: '#', experiences: '◌', saved: '♥',
    latest: '●', archive: '▤', subscribe: '+',
  };
  $$('[data-menu]').forEach((parent) => {
    const key = parent.dataset.menu;
    const group = document.createElement('div');
    group.className = `nav-group nav-group-${key}`;
    group.dataset.navGroup = key;
    parent.before(group);
    group.append(parent);
    parent.setAttribute('aria-expanded', key === 'journey' ? 'true' : 'false');
    const chevron = document.createElement('span');
    chevron.className = 'nav-menu-chevron'; chevron.textContent = '⌄'; chevron.setAttribute('aria-hidden', 'true');
    parent.append(chevron);
    const submenu = document.createElement('div');
    submenu.className = 'nav-submenu'; submenu.setAttribute('aria-label', `${parent.textContent.trim()} sections`);
    let lastGroup = '';
    (definitions[key] || []).forEach((item, index) => {
      if (item.group && item.group !== lastGroup) {
        const label = document.createElement('span'); label.className = 'nav-submenu-label'; label.textContent = item.group; submenu.append(label); lastGroup = item.group;
      }
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'nav-subitem'; button.dataset.submenuKind = item.kind; button.dataset.value = item.value;
      const marker = document.createElement('span'); marker.className = 'nav-subitem-marker'; marker.textContent = submenuIcons[item.value] || ({ research: '⌕', study: '▤', certification: '✪', traditional: '❋', calling: '✦', blog: '✎', newsletter: '✉', community: '◉' }[item.kind] || '•'); marker.setAttribute('aria-hidden', 'true');
      const copy = document.createElement('span'); const strong = document.createElement('strong'); strong.textContent = item.label; copy.append(strong);
      if (item.meta) { const small = document.createElement('small'); small.textContent = item.meta; copy.append(small); }
      button.append(marker, copy); submenu.append(button);
    });
    group.append(submenu);
    group.classList.toggle('expanded', key === 'journey');
  });
}

function updateSidebarMenus() {
  const activeGroup = Object.entries(sidebarMenuViews).find(([, views]) => views.includes(state.view))?.[0] || '';
  $$('[data-nav-group]').forEach((group) => {
    const key = group.dataset.navGroup;
    const belongs = key === activeGroup;
    group.classList.toggle('expanded', belongs);
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
      : kind === 'calling' ? state.view === 'calling' && state.calling.activeQuestion === value
      : kind === 'blog' ? state.view === 'blog' && state.editorial.blogCategory === value
      : kind === 'newsletter' ? state.view === 'newsletters' && (value === 'latest' ? Boolean(state.editorial.selectedNewsletterId) : value === 'archive' ? !state.editorial.selectedNewsletterId : false)
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
    if (!stored || ![2, 3, 4, 5].includes(stored.version)) return structuredClone(defaultState);
    return {
      ...structuredClone(defaultState),
      ...stored,
      profile: { ...structuredClone(defaultState.profile), ...(stored.profile || {}) },
      session: { ...structuredClone(defaultState.session), ...(stored.session || {}) },
      accounts: Array.isArray(stored.accounts) ? stored.accounts : [],
      workspaces: stored.workspaces && typeof stored.workspaces === 'object' ? stored.workspaces : {},
      appearance: { ...structuredClone(defaultState.appearance), ...(stored.appearance || { mode: 'override' }), customBackgrounds: Array.isArray(stored.appearance?.customBackgrounds) ? stored.appearance.customBackgrounds : [] },
      mentorChat: { ...structuredClone(defaultState.mentorChat), ...(stored.mentorChat || {}), messages: Array.isArray(stored.mentorChat?.messages) ? stored.mentorChat.messages.slice(-50) : [] },
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
      calling: {
        ...structuredClone(defaultState.calling), ...(stored.calling || {}),
        selections: { ...structuredClone(defaultState.calling.selections), ...(stored.calling?.selections || {}) },
        custom: { ...structuredClone(defaultState.calling.custom), ...(stored.calling?.custom || {}) },
      },
      communications: { ...structuredClone(defaultState.communications), ...(stored.communications || {}), campaigns: Array.isArray(stored.communications?.campaigns) ? stored.communications.campaigns : [], outbox: Array.isArray(stored.communications?.outbox) ? stored.communications.outbox : [] },
      editorial: { ...structuredClone(defaultState.editorial), ...(stored.editorial || {}), localPosts: Array.isArray(stored.editorial?.localPosts) ? stored.editorial.localPosts : [], localNewsletters: Array.isArray(stored.editorial?.localNewsletters) ? stored.editorial.localNewsletters : [] },
      studyGuide: { ...structuredClone(defaultState.studyGuide), ...(stored.studyGuide || {}), statuses: { ...(stored.studyGuide?.statuses || {}) }, mastery: { ...(stored.studyGuide?.mastery || {}) }, notes: { ...(stored.studyGuide?.notes || {}) }, studyBlocks: Array.isArray(stored.studyGuide?.studyBlocks) ? stored.studyGuide.studyBlocks : [], assessments: Array.isArray(stored.studyGuide?.assessments) ? stored.studyGuide.assessments : [], assignments: Array.isArray(stored.studyGuide?.assignments) ? stored.studyGuide.assignments : [] },
      certifications: { ...structuredClone(defaultState.certifications), ...(stored.certifications || {}), saved: Array.isArray(stored.certifications?.saved) ? stored.certifications.saved : [] },
      traditional: { ...structuredClone(defaultState.traditional), ...(stored.traditional || {}), saved: Array.isArray(stored.traditional?.saved) ? stored.traditional.saved : [] },
      version: 5,
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const workspaceKeys = ['profile', 'profiles', 'signals', 'workReality', 'saved', 'compare', 'streamChoice', 'streamReflections', 'journey', 'roadmapDone', 'tasks', 'familyNote', 'familyLens', 'evidence', 'aiJourney', 'calling', 'mentor', 'mentorChat', 'studyGuide', 'certifications', 'traditional'];

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
  $('#pageTitle').textContent = state.view === 'journey-stage' ? yearMilestoneConfig[state.activeJourneyStage]?.title || title : title;
  $$('.nav-item').forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle('active', active);
    button.setAttribute('aria-current', active ? 'page' : 'false');
  });
  $('#compassBadge').textContent = `${compassCompletion()}%`;
  if ($('#compareBadge')) $('#compareBadge').textContent = state.compare.length;
  const actor = activeProfile();
  const profileName = isGuest() ? 'Guest' : actor?.name || actor?.displayName || (state.session.activeRole === 'parent' ? 'Parent' : state.session.activeRole === 'admin' ? 'Team member' : 'Anya');
  $('#studentAvatar').textContent = profileName.slice(0, 2).toUpperCase();
  $('#studentPathName').textContent = isGuest() ? 'Guest explorer' : state.session.activeRole === 'admin' ? profileName : state.session.activeRole === 'parent' ? `${profileName}'s parent lens` : `${profileName}'s path`;
  $('#studentPathMeta').textContent = isGuest() ? 'Read-only · full exploration' : state.session.activeRole === 'admin' ? `${actor?.teamRole || 'Team'} · publishing access` : state.session.activeRole === 'parent' ? `${actor?.relationship || 'Parent'} · supporting ${actor?.linkedStudentName || state.profile.name}` : `Grade ${state.profile?.grade || '10'} · ${state.profile?.board || 'CBSE'}`;
  $('#audienceSwitch span').textContent = state.audience === 'student' ? 'Student view' : 'Parent view';
  const appearance = effectiveAppearance();
  document.body.dataset.theme = appearance.theme;
  document.documentElement.style.setProperty('--campus-image', `url(${JSON.stringify(appearance.background.file)})`);
  $$('.theme-choice').forEach((button) => {
    const active = button.dataset.themeChoice === state.theme;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const regionSelect = $('#globalRegionSelect');
  if (regionSelect) {
    const options = [...new Map(experienceStories.map((story) => [`${story.profile.country}::${story.profile.region}`, { country: story.profile.country, region: story.profile.region }])).values()];
    regionSelect.innerHTML = `<option value="All">All regions</option><optgroup label="India">${options.filter((item) => item.country === 'India').map((item) => `<option value="${escapeHtml(`${item.country}::${item.region}`)}">${escapeHtml(item.region)}</option>`).join('')}</optgroup><optgroup label="Other countries">${options.filter((item) => item.country !== 'India').map((item) => `<option value="${escapeHtml(`${item.country}::${item.region}`)}">${escapeHtml(item.country)} · ${escapeHtml(item.region)}</option>`).join('')}</optgroup>`;
    regionSelect.value = state.regionScope || 'All';
  }
  updateSidebarMenus();
}

function allBackgrounds() {
  return [...campusBackgrounds, ...(state.appearance?.customBackgrounds || [])];
}

function effectiveAppearance() {
  const useDefault = state.appearance?.mode !== 'override';
  const background = useDefault ? campusBackgrounds[0] : allBackgrounds().find((item) => item.id === state.background) || campusBackgrounds[0];
  return { theme: useDefault ? 'brown-violet' : state.theme, background };
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
  const saved = researchCatalog.filter((item) => state.research.saved.includes(item.id));
  body.innerHTML = `<section class="research-drawer-index"><p class="eyebrow">RESEARCH INDEX</p><h2>${researchCatalog.length} verified starting points</h2><p>Use the full page to search and compare. This drawer keeps selected evidence beside the rest of your work.</p><dl><div><dt>Schools + exams</dt><dd>${schoolExamResearchMetadata.recordCount || schoolExamResearch.length}</dd></div><div><dt>Colleges + funding</dt><dd>${collegeCourseResearchMetadata.recordCount || collegeCourseResearch.length}</dd></div><div><dt>Work + locations</dt><dd>${jobLocationResearchMetadata.recordCount || jobLocationResearch.length}</dd></div></dl><h3>Saved evidence</h3>${saved.length ? `<div class="research-saved-list">${saved.map((item) => `<button data-action="research-detail" data-id="${item.id}"><span>${escapeHtml(item.category)}</span><strong>${escapeHtml(item.title)}</strong></button>`).join('')}</div>` : '<p>No saved evidence yet. Save records from the Research page.</p>'}</section>`;
}

function openResearchShelf(id = '') {
  closeJourneyInspector();
  closeSettings();
  state.research.detailId = id;
  renderResearchShelf();
  document.body.classList.add('research-open');
  openRightDrawer('research');
}

function renderResearch() {
  if (!researchDomains.includes(state.research.category)) state.research.category = 'All evidence';
  const items = filteredResearchRecords();
  const compareItems = state.research.compare.map((id) => researchCatalog.find((item) => item.id === id)).filter(Boolean);
  const officialSources = new Set(researchCatalog.flatMap((item) => item.sources.map((source) => source.url))).size;
  const compareKeys = [...new Set(compareItems.flatMap((item) => Object.keys(item.compare || {})))].slice(0, 7);
  return `<div class="view-enter research-view"><header class="research-workspace-head"><div><p class="eyebrow">OFFICIAL-SOURCE RESEARCH · CHECKED 08 AUG 2026</p><h2>Evidence you can actually use.</h2><p>Schools, subject routes, entrances, colleges, funding, careers, apprenticeships, employers and Tamil Nadu opportunity clusters.</p></div><div class="research-head-metrics"><span><strong>${researchCatalog.length}</strong>records</span><span><strong>${officialSources}</strong>official links</span><span><strong>${state.research.saved.length}</strong>saved</span></div></header><nav class="research-view-tabs" aria-label="Research domains">${researchDomains.map((section) => `<button class="${state.research.category === section ? 'active' : ''}" data-action="research-section" data-value="${section}">${section}<small>${section === 'All evidence' ? researchCatalog.length : researchCatalog.filter((item) => item.researchDomain === section).length}</small></button>`).join('')}</nav><form class="research-command" id="researchPageFilters"><label class="research-page-search"><span>Search evidence</span><input id="researchPageSearch" type="search" value="${escapeHtml(state.research.search)}" placeholder="Try TNEA, CBSE, scholarship, apprenticeship, Chennai…"></label><label><span>Geography</span><select name="geography"><option>All</option><option ${state.research.geography === 'Tamil Nadu' ? 'selected' : ''}>Tamil Nadu</option><option ${state.research.geography === 'India' ? 'selected' : ''}>India</option></select></label><button type="button" class="button-secondary" data-action="research-open">Saved evidence · ${state.research.saved.length}</button></form>${compareItems.length ? `<section class="research-compare-workbench"><header><div><p class="eyebrow">SIDE-BY-SIDE EVIDENCE</p><h3>${compareItems.length} records selected</h3></div><button class="button-quiet" data-action="research-compare-clear">Clear comparison</button></header><div class="research-compare-table" style="--research-compare:${compareItems.length}"><div class="research-compare-label">Evidence</div>${compareItems.map((item) => `<div class="research-compare-head"><small>${escapeHtml(item.category)}</small><strong>${escapeHtml(item.title)}</strong><button data-action="research-compare" data-id="${item.id}">Remove</button></div>`).join('')}${compareKeys.map((key) => `<div class="research-compare-label">${escapeHtml(titleCase(key))}</div>${compareItems.map((item) => `<div>${escapeHtml(String(item.compare?.[key] ?? 'Not stated'))}</div>`).join('')}`).join('')}</div></section>` : ''}<section class="research-data-table" aria-label="Research evidence"><div class="research-data-head"><span>Evidence</span><span>Geography</span><span>Checked</span><span>Actions</span></div>${items.map((item) => `<article><button class="research-record-main" data-action="research-detail" data-id="${item.id}"><span>${escapeHtml(item.category)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.summary)}</p></button><span>${escapeHtml(item.geographyLabel)}</span><time datetime="${researchCheckedAt(item)}">${escapeHtml(researchCheckedAt(item))}</time><div><button data-action="research-compare" data-id="${item.id}" aria-pressed="${state.research.compare.includes(item.id)}">${state.research.compare.includes(item.id) ? '✓ Compare' : '+ Compare'}</button><button data-action="research-quick-save" data-id="${item.id}" aria-pressed="${state.research.saved.includes(item.id)}">${state.research.saved.includes(item.id) ? '★' : '☆'}</button></div></article>`).join('') || '<div class="research-empty"><strong>No evidence matches.</strong><span>Clear one filter or try a broader search.</span></div>'}</section></div>`;
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
  const completion = Math.round((selected.length / config.milestones.length) * 100);
  const stageTab = ['focus', 'choices', 'evidence', 'community', 'ai'].includes(state.journeyStageTab) ? state.journeyStageTab : 'focus';
  const tabs = [['focus', 'Focus'], ['choices', 'Choices & NO-NOs'], ['evidence', 'Evidence'], ['community', 'Community'], ['ai', 'AI lens']];
  const tabContent = {
    focus: `<section class="panel stage-milestone-board"><div class="panel-head"><div><h3>Focus for this stage</h3><p>Complete what matters; revisit when circumstances change.</p></div><button class="button-secondary" data-action="journey-edit" data-id="${stageId}">Edit full stage</button></div><div class="stage-milestone-grid">${config.milestones.map((milestone, milestoneIndex) => `<button class="stage-milestone ${selected.includes(milestone) ? 'complete' : ''}" data-action="journey-page-milestone" data-stage="${stageId}" data-value="${milestone}" aria-pressed="${selected.includes(milestone)}"><span>${String(milestoneIndex + 1).padStart(2, '0')}</span><strong>${milestone}</strong><em>${selected.includes(milestone) ? 'Complete' : 'To focus'}</em></button>`).join('')}</div></section>`,
    choices: `<div class="journey-stage-layout"><section class="panel stage-nono-card"><p class="eyebrow">WHAT IS RULED OUT</p><h3>${combinedNoNos.length ? `${combinedNoNos.length} NO-NO signals` : 'Start with what you know you do not want'}</h3><div class="stage-nono-tags">${combinedNoNos.length ? combinedNoNos.map((item) => `<span>${escapeHtml(item)}</span>`).join('') : '<p>Record working conditions, subjects and trade-offs that feel clearly wrong.</p>'}</div><button class="button-secondary" data-action="journey-edit" data-id="${stageId}">Review NO-NOs</button></section><section class="panel stage-shortlist"><p class="eyebrow">REMAINING WORLDS TO TEST</p>${survivors.map((career) => `<button data-action="career-detail" data-id="${career.id}"><span>${career.glyph}</span><strong>${career.title}</strong><small>${career.fit.label}</small></button>`).join('')}</section></div>`,
    evidence: `<section class="panel stage-proof-card stage-tab-panel"><p class="eyebrow">CURRENT EVIDENCE</p><dl><div><dt>Performance</dt><dd>${escapeHtml(rank || 'Not recorded')}</dd></div><div><dt>Reflection</dt><dd>${escapeHtml(note || 'No reflection recorded')}</dd></div><div><dt>Completed milestones</dt><dd>${selected.length} of ${config.milestones.length}</dd></div></dl><button class="button-primary" data-action="journey-edit" data-id="${stageId}">Add evidence and reflection</button></section>`,
    community: `<section class="panel stage-tab-panel"><p class="eyebrow">LEARN FROM CONTEXT, NOT CONSENSUS</p><h3>See how other learners approached ${escapeHtml(config.title)}.</h3><p>Compare constraints, doubts, reversals and evidence. A popular answer is not automatically the right answer for you.</p><button class="button-primary" data-action="stage-community" data-id="${stageId}">Open related discussions</button></section>`,
    ai: `<section class="panel stage-tab-panel"><p class="eyebrow">AI LENS</p><h3>${state.aiJourney.stageAnswers[stageId]?.trim() ? 'You have an AI reflection for this stage.' : 'One AI question is still open.'}</h3><p>${escapeHtml(aiStagePrompts[stageId])}</p>${state.aiJourney.stageAnswers[stageId]?.trim() ? `<blockquote>${escapeHtml(state.aiJourney.stageAnswers[stageId])}</blockquote>` : ''}<button class="button-primary" data-action="journey-edit" data-id="${stageId}">${state.aiJourney.stageAnswers[stageId]?.trim() ? 'Review AI evidence' : 'Answer the AI question'}</button></section>`,
  }[stageTab];
  return `<div class="view-enter journey-stage-page">
    <header class="journey-stage-hero panel"><div><p class="eyebrow">${config.step}</p><h2>${config.title}</h2><p>${config.copy}</p></div><div class="stage-completion"><strong>${completion}%</strong><span>${selected.length}/${config.milestones.length} milestones</span></div></header>
    <nav class="stage-tabs" aria-label="${escapeHtml(config.title)} sections">${tabs.map(([id, label]) => `<button data-action="stage-tab" data-value="${id}" class="${stageTab === id ? 'active' : ''}" aria-current="${stageTab === id ? 'page' : 'false'}">${label}</button>`).join('')}</nav>
    ${tabContent}
    <nav class="stage-page-navigation" aria-label="Journey stage pages">${index > 0 ? `<button class="button-secondary" data-action="journey-stage-nav" data-id="${stops[index - 1].id}">← ${stops[index - 1].title}</button>` : '<span></span>'}${index < stops.length - 1 ? `<button class="button-primary" data-action="journey-stage-nav" data-id="${stops[index + 1].id}">${stops[index + 1].title} →</button>` : '<button class="button-primary" data-action="go" data-target="roadmap">Open complete roadmap →</button>'}</nav>
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
  if (state.communityMode === 'experiences') return `${renderCommunityTabs()}${state.shareExperienceOpen ? renderShareExperience() : renderExperiences()}`;
  if (state.newDiscussionOpen) return `${renderCommunityTabs()}${renderNewDiscussion()}`;
  const detail = allDiscussionTopics().find((topic) => topic.id === state.detailDiscussion);
  if (detail) return `${renderCommunityTabs()}${renderDiscussionDetail(detail)}`;
  const filtered = filteredDiscussions();
  const categories = discussionOptions('category');
  const stages = discussionOptions('journeyStage');
  const countries = discussionOptions('country');
  const regions = discussionOptions('region');
  const tabs = [['discussions', 'Discussions'], ['experiences', 'Experience Exchange'], ['saved', 'Saved']];
  return `<div class="view-enter discussions-view"><section class="forum-unified"><header class="forum-header"><div><p class="eyebrow">TAMIL NADU · INITIAL ROLLOUT</p><h2>Real questions deserve room to be messy.</h2><p>Ask, confess uncertainty, compare lived context, and verify consequential claims.</p></div><button class="button-primary" data-action="discussion-new">${isGuest() ? 'Create a profile to post' : 'Start a discussion'}</button></header><form class="forum-command" id="discussionFilters"><nav class="community-tabs" aria-label="Community sections">${tabs.map(([id, label]) => `<button type="button" class="${state.communityMode === id ? 'active' : ''}" data-action="community-mode" data-value="${id}">${label}${id === 'saved' && state.savedDiscussions.length ? ` <span>${state.savedDiscussions.length}</span>` : ''}</button>`).join('')}</nav><label class="forum-search"><span>Search</span><input id="discussionSearch" value="${escapeHtml(state.discussionFilters.search)}" placeholder="Campus placement, NEET fear, hostel…"></label><label class="forum-region-filter"><span>Region</span><select name="region"><option>All</option>${regions.map((item) => `<option value="${item}" ${state.discussionFilters.region === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label><details class="forum-more"><summary>More filters</summary><div><label>Category<select name="category"><option>All</option>${categories.map((item) => `<option value="${item}" ${state.discussionFilters.category === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Journey stage<select name="stage"><option>All</option>${stages.map((item) => `<option value="${item}" ${state.discussionFilters.stage === item ? 'selected' : ''}>${titleCase(item)}</option>`).join('')}</select></label><label>Country<select name="country"><option>All</option>${countries.map((item) => `<option ${state.discussionFilters.country === item ? 'selected' : ''}>${item}</option>`).join('')}</select></label></div></details><span class="forum-result-count"><strong>${filtered.length}</strong> discussions</span></form></section><section class="discussion-list" aria-label="Discussion list"><div class="discussion-list-head"><span>Topic</span><span>Activity</span></div>${filtered.slice(0, state.discussionLimit).map(renderDiscussionCard).join('') || '<div class="forum-empty"><strong>No discussions match these filters.</strong><span>Try All regions or remove one filter.</span></div>'}</section>${filtered.length > state.discussionLimit ? `<button class="button-secondary load-more" data-action="discussion-more">Show more (${filtered.length - state.discussionLimit} remaining)</button>` : ''}</div>`;
}

const aiCapabilities = [
  ['AI literacy', 'Know what a tool can and cannot establish'], ['Verification', 'Check consequential claims against current authority'], ['Privacy & consent', 'Protect sensitive data and other people'], ['Bias & fairness', 'Ask whose context and language are missing'], ['Deep-skill continuity', 'Keep unaided human practice alive'], ['Ethics & provenance', 'Show tool use, sources, checks, and ownership'],
];

const journeyWorkspaceTabs = [['overview', 'Overview'], ['journey-stage', 'Year path']];
const callingWorkspaceTabs = [
  ['calling', 'Calling questions'], ['compass', 'Know yourself'], ['explore', 'Career worlds'],
  ['compare', 'Compare'], ['roadmap', 'Action plan'], ['evidence', 'Evidence'], ['ai-journey', 'AI lens'],
];

function renderJourneyWorkspaceTabs() {
  const yearTabs = journeyStops().map((stop) => `<button data-journey-stage="${stop.id}" class="${state.view === 'journey-stage' && state.activeJourneyStage === stop.id ? 'active' : ''}">${stop.step}</button>`).join('');
  return `<div class="journey-inline-navigation"><nav class="journey-workspace-tabs" aria-label="My Journey"><button data-action="go" data-target="overview" class="${state.view === 'overview' ? 'active' : ''}">Overview</button>${yearTabs}</nav></div>`;
}

function renderCallingWorkspaceTabs() {
  return `<nav class="journey-workspace-tabs calling-workspace-tabs" aria-label="Find Your Calling and decision tools">${callingWorkspaceTabs.map(([view, label]) => `<button data-action="go" data-target="${view}" class="${state.view === view ? 'active' : ''}">${label}</button>`).join('')}</nav>`;
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

function renderCalling() {
  const active = callingQuestions.find((question) => question.id === state.calling.activeQuestion) || callingQuestions[0];
  const selected = state.calling.selections[active.id] || [];
  const query = state.calling.search.trim().toLowerCase();
  const filtered = active.options.filter((option) => !query || `${option.text} ${option.category}`.toLowerCase().includes(query));
  const visible = filtered.slice(0, state.calling.limit);
  const answered = callingQuestions.filter((question) => state.calling.selections[question.id]?.length || state.calling.custom[question.id]?.trim()).length;
  const allSelected = callingQuestions.flatMap((question) => (state.calling.selections[question.id] || []).map((id) => question.options.find((option) => option.id === id)).filter(Boolean));
  const themes = [...new Set(allSelected.map((option) => option.category))].slice(0, 8);
  const synthesis = callingSynthesis();
  return `<div class="view-enter calling-view">
    <section class="calling-hero"><div><p class="eyebrow">FIND YOUR CALLING</p><h2>Three questions that may change what you think you want.</h2><p>This is not a test and there is no ideal answer. Choose statements that create recognition, resistance or relief. Those reactions become the evidence behind your recommendations.</p></div><div class="calling-progress"><strong>${answered}/3</strong><span>questions reflected on</span><small>${callingMetadata.optionsPerQuestion} starting points for each question</small></div></section>
    <nav class="calling-question-tabs" aria-label="Calling questions">${callingQuestions.map((question) => `<button data-action="calling-question" data-value="${question.id}" class="${active.id === question.id ? 'active' : ''}"><span>${question.number}</span><strong>${question.short}</strong><em>${state.calling.selections[question.id]?.length || state.calling.custom[question.id]?.trim() ? 'Reflection added' : 'Open question'}</em></button>`).join('')}</nav>
    <div class="calling-layout"><main class="calling-question panel"><header><span>QUESTION ${active.number}</span><h2>“${active.question}”</h2><p>${active.guidance}</p></header><div class="calling-tools"><label>Search ${callingMetadata.optionsPerQuestion} possibilities<input id="callingSearch" type="search" value="${escapeHtml(state.calling.search)}" placeholder="Family, creating, service, health, integrity…"></label><span>${selected.length} selected · choose any that feel true</span></div><section class="calling-option-list" aria-label="Possible answers">${visible.map((option) => { const on = selected.includes(option.id); return `<button data-action="calling-option" data-id="${option.id}" class="${on ? 'selected' : ''}" aria-pressed="${on}"><span>${on ? '✓' : '+'}</span><div><small>${escapeHtml(option.category)}</small><strong>${escapeHtml(option.text)}</strong></div></button>`; }).join('') || '<div class="calling-empty">No possibilities match that search. Try a broader word—or write your own answer below.</div>'}</section>${filtered.length > state.calling.limit ? `<button class="button-secondary calling-more" data-action="calling-more">Show ${Math.min(18, filtered.length - state.calling.limit)} more · ${filtered.length - state.calling.limit} remaining</button>` : ''}<label class="calling-custom">Your own answer<textarea data-calling-custom="${active.id}" maxlength="800" ${isGuest() ? 'disabled' : ''} placeholder="Write in your own words. It can be uncertain, unfinished or different from every option above.">${escapeHtml(state.calling.custom[active.id])}</textarea><small>${isGuest() ? 'Create a profile to save a private answer.' : 'Saved privately on this device.'}</small></label></main>
      <aside class="calling-reflection panel"><p class="eyebrow">YOUR CALLING COMPASS</p><h3>${themes.length ? (synthesis.complete ? 'Your strongest directions' : 'A provisional pattern is emerging') : 'Select what feels true—not what sounds admirable.'}</h3>${themes.length ? `<div class="calling-themes">${themes.map((theme) => `<span>${escapeHtml(theme)}</span>`).join('')}</div><div class="calling-recommendations">${synthesis.ranked.map((direction, index) => `<article class="calling-recommendation ${index === 0 ? 'primary' : ''}"><span>${index === 0 ? 'STRONGEST DIRECTION' : `ALTERNATIVE ${index + 1}`}</span><h4>${escapeHtml(direction.title)}</h4><p><strong>Why:</strong> ${escapeHtml(direction.reasons.length ? direction.reasons.join(', ') : 'your own written reflection')} recur in your answers.</p><p><strong>Possible arenas:</strong> ${escapeHtml(direction.arenas)}.</p><p><strong>Test it:</strong> ${escapeHtml(direction.experiment)}</p><small>${escapeHtml(direction.caution)}</small></article>`).join('')}</div>${synthesis.boundaries.length ? `<div class="calling-guardrails"><strong>Your work must protect</strong>${synthesis.boundaries.map((item) => `<span>${escapeHtml(item.guidance)}</span>`).join('')}</div>` : ''}` : '<p>Look for three kinds of signal: what gives relief, what creates a firm boundary, and whose life becomes better because of your work.</p>'}<div class="calling-summary">${callingQuestions.map((question) => { const count = state.calling.selections[question.id]?.length || 0; const custom = state.calling.custom[question.id]?.trim(); return `<section><span>${question.number}</span><div><strong>${question.short}</strong><p>${count ? `${count} possibilities selected` : 'No possibilities selected'}${custom ? ' · own answer added' : ''}</p></div></section>`; }).join('')}</div><p class="calling-caution">These are hypotheses, not a psychological diagnosis. Test the strongest direction in real life, discuss it with people who know you, and revise it when evidence changes.</p>${answered ? '<button class="button-quiet" data-action="calling-clear">Clear my calling reflections</button>' : ''}</aside>
    </div>
  </div>`;
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
  if (selected) return `<div class="view-enter editorial-detail"><button class="button-quiet" data-action="blog-close">← All Team Blog entries</button><article class="panel"><header><span>${escapeHtml(selected.category)} · ${escapeHtml(selected.audience)}</span><h2>${escapeHtml(selected.title)}</h2><p>${escapeHtml(selected.deck)}</p><div><strong>${escapeHtml(selected.author)}</strong><small>${escapeHtml(selected.authorRole)} · ${editorialDate(selected.publishedAt)} · ${selected.readMinutes || 5} min read</small></div></header><div class="editorial-body">${String(selected.body).split(/\n\n+/).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}</div><footer><p>Team viewpoint · challenge assumptions, verify changing claims, and keep the final decision with the student.</p><button class="button-secondary" data-action="newsletter-view">Get the monthly field notes →</button></footer></article></div>`;
  const categories = ['All', ...new Set(posts.map((post) => post.category))];
  const query = state.editorial.blogSearch.trim().toLowerCase();
  const filtered = posts.filter((post) => (state.editorial.blogCategory === 'All' || post.category === state.editorial.blogCategory) && (!query || `${post.title} ${post.deck} ${post.category} ${post.author}`.toLowerCase().includes(query)));
  const featured = filtered.find((post) => post.featured) || filtered[0];
  return `<div class="view-enter editorial-view"><header class="editorial-hero"><div><p class="eyebrow">TEAM BLOG · ${editorialMetadata.blogCount} STARTER ESSAYS</p><h2>Viewpoints with their assumptions showing.</h2><p>Notes from the people designing, researching and questioning career guidance. These essays are prompts for better decisions—not instructions from authority.</p></div>${featured ? `<button data-action="blog-open" data-id="${featured.id}"><span>FEATURED</span><strong>${escapeHtml(featured.title)}</strong><small>${escapeHtml(featured.deck)}</small></button>` : ''}</header>${renderAdminBlogComposer()}<form class="editorial-toolbar" id="blogFilters"><label>Search Team Blog<input id="blogSearch" type="search" value="${escapeHtml(state.editorial.blogSearch)}" placeholder="Projects, placements, family, AI…"></label><label>Topic<select name="category">${categories.map((category) => `<option ${state.editorial.blogCategory === category ? 'selected' : ''}>${escapeHtml(category)}</option>`).join('')}</select></label><span>${filtered.length} entries</span></form><section class="editorial-list">${filtered.map((post) => `<button data-action="blog-open" data-id="${post.id}"><span>${escapeHtml(post.category)}${post.status === 'draft' ? ' · DRAFT' : ''}</span><div><h3>${escapeHtml(post.title)}</h3><p>${escapeHtml(post.deck)}</p><small>${escapeHtml(post.author)} · ${editorialDate(post.publishedAt)}</small></div><em>${post.readMinutes || 5} min →</em></button>`).join('') || '<p class="panel">No entries match this search.</p>'}</section></div>`;
}

function renderAdminNewsletterComposer() {
  if (!isAdmin()) return '';
  return `<details class="editorial-admin panel"><summary><span>ADMIN</span> Compose a newsletter</summary><form id="newsletterComposerForm"><div class="editorial-form-grid"><label>Subject line<input name="title" required maxlength="120"></label><label>Audience<select name="audience"><option>All subscribers</option><option>Students</option><option>Parents</option><option>College students</option></select></label><label class="full">Editor’s note<textarea name="summary" required maxlength="600"></textarea></label><label class="full">Sections<textarea name="sections" required maxlength="2000" placeholder="One section headline per line"></textarea></label><label>Status<select name="status"><option value="draft">Save draft</option><option value="sent">Send to local outbox</option><option value="scheduled">Schedule</option></select></label><label>Schedule time<input name="scheduledAt" type="datetime-local"></label></div><button class="button-primary">Save newsletter campaign</button><p class="form-disclosure">Prototype delivery writes to a local outbox. Connect a verified transactional email provider, domain authentication, unsubscribe processing and delivery webhooks before production.</p></form></details>`;
}

function renderNewsletters() {
  const issues = allNewsletterIssues();
  const selected = issues.find((issue) => issue.id === state.editorial.selectedNewsletterId);
  if (selected) return `<div class="view-enter editorial-detail newsletter-detail"><button class="button-quiet" data-action="newsletter-close">← All newsletters</button><article class="panel"><header><span>ISSUE ${String(selected.issue || 'NEW').padStart(2, '0')} · ${escapeHtml(selected.audience)}</span><h2>${escapeHtml(selected.title)}</h2><p>${escapeHtml(selected.summary)}</p><div><strong>${escapeHtml(selected.editor)}</strong><small>${editorialDate(selected.publishedAt)} · ${escapeHtml(selected.status)}</small></div></header><ol class="newsletter-sections">${selected.sections.map((section) => `<li>${escapeHtml(section)}</li>`).join('')}</ol><footer><p>You received this preview because you opened it inside Zysham. Email delivery is not connected in this prototype.</p></footer></article></div>`;
  const account = currentAccount();
  const preferences = account?.communication || state.communications;
  return `<div class="view-enter editorial-view newsletter-view"><header class="editorial-hero newsletter-hero"><div><p class="eyebrow">NEWSLETTER · ${editorialMetadata.newsletterCount} SAMPLE ISSUES</p><h2>One useful field note. No manufactured urgency.</h2><p>Monthly decision prompts for students and families, with a separate preference for product announcements.</p></div><form id="newsletterSubscribeForm" class="newsletter-subscribe"><label>Email address<input name="email" type="email" required value="${escapeHtml(preferences.subscriberEmail || account?.email || '')}" placeholder="you@example.com"></label><label class="consent-line"><input name="consent" type="checkbox" required ${preferences.newsletterSubscribed ? 'checked' : ''}> Send me the career field-notes newsletter</label><button class="button-primary">${preferences.newsletterSubscribed ? 'Update subscription' : 'Subscribe'}</button><small>Consent is recorded separately. Unsubscribe anytime in Settings.</small></form></header>${renderAdminNewsletterComposer()}<section class="newsletter-status panel"><div><strong>${issues.filter((item) => item.status === 'sent').length}</strong><span>published issues</span></div><div><strong>${preferences.newsletterSubscribed ? 'On' : 'Off'}</strong><span>your subscription</span></div><div><strong>${state.communications.outbox.length}</strong><span>local outbox items</span></div></section><section class="newsletter-grid">${issues.map((issue) => `<button data-action="newsletter-open" data-id="${issue.id}"><span>ISSUE ${String(issue.issue || 'NEW').padStart(2, '0')} · ${issue.status.toUpperCase()}</span><h3>${escapeHtml(issue.title)}</h3><p>${escapeHtml(issue.summary)}</p><ul>${issue.sections.slice(0, 3).map((section) => `<li>${escapeHtml(section)}</li>`).join('')}</ul><small>${editorialDate(issue.publishedAt)} · Open issue →</small></button>`).join('')}</section></div>`;
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

function renderStudyGuide() {
  const context = activeStudyContext();
  if (context.selected) return `<div class="view-enter study-guide-view">${renderStudyChapter(context)}</div>`;
  const sections = [['overview','Overview'],['curriculum','Curriculum'],['planner','Planner'],['progress','Progress']];
  const content = state.studyGuide.section === 'curriculum' ? renderStudyCurriculum(context) : state.studyGuide.section === 'planner' ? renderStudyPlanner(context) : state.studyGuide.section === 'progress' ? renderStudyProgress(context) : renderStudyOverview(context);
  return `<div class="view-enter study-guide-view"><header class="study-hero"><div><p class="eyebrow">ADAPTED FROM HOME-MANAGER LEARNING</p><h2>Learn deeply. Show the evidence.</h2><p>Grade 11, Grade 12, JEE Main, and JEE Advanced—without family monitoring, Grade 7 content, or performance theatre.</p></div><span>${escapeHtml(studyGuideMeta.rights)}</span></header><nav class="study-track-tabs" aria-label="Study track">${Object.values(studyTracks).map((track) => `<button data-action="study-track" data-value="${track.id}" class="${track.id === context.track.id ? 'active' : ''}"><strong>${escapeHtml(track.label)}</strong><small>${escapeHtml(track.short)}</small></button>`).join('')}</nav><div class="study-command"><nav aria-label="Study Guide sections">${sections.map(([id,label]) => `<button data-action="study-section" data-value="${id}" class="${state.studyGuide.section === id ? 'active' : ''}">${label}</button>`).join('')}</nav><label>Subject<select data-study-subject>${context.subjects.map((subject) => `<option ${subject === state.studyGuide.subject ? 'selected' : ''}>${escapeHtml(subject)}</option>`).join('')}</select></label></div>${content}</div>`;
}

function renderCertificationCourses() {
  const query = state.certifications.search.toLowerCase();
  const filtered = certificationCourses.filter((item) => item.category === state.certifications.category && `${item.title} ${item.provider} ${item.skills}`.toLowerCase().includes(query));
  const selected = certificationCourses.find((item) => item.id === state.certifications.detailId);
  if (selected) return `<div class="view-enter course-catalogue"><button class="chapter-back" data-action="cert-close">← All certification courses</button><article class="course-detail"><span>${escapeHtml(selected.category)} · checked ${selected.checked}</span><h2>${escapeHtml(selected.title)}</h2><p class="course-provider">${escapeHtml(selected.provider)}</p><div class="course-facts"><section><small>LEVEL</small><strong>${escapeHtml(selected.level)}</strong></section><section><small>FORMAT</small><strong>${escapeHtml(selected.format)}</strong></section><section><small>LEARNING COST</small><strong>${escapeHtml(selected.learningCost)}</strong></section></div><h3>What you build</h3><p>${escapeHtml(selected.skills)}</p><h3>Credential reality</h3><p>${escapeHtml(selected.credential)}</p><p class="freshness-note">${escapeHtml(selected.note)}</p><div class="course-actions"><a class="button-primary" href="${selected.url}" target="_blank" rel="noopener noreferrer">Open official registration ↗</a><button data-action="cert-save" data-id="${selected.id}">${state.certifications.saved.includes(selected.id) ? 'Saved ✓' : 'Save course'}</button></div></article></div>`;
  return `<div class="view-enter course-catalogue"><header class="catalogue-hero"><div><p class="eyebrow">SEVEN LEARNING ROUTES · OFFICIAL PROVIDERS</p><h2>Learn for free. Pay only with your eyes open.</h2><p>Recognised institutions, honest credential costs, and direct official registration routes.</p></div><div><strong>${certificationCourses.length}</strong><span>curated starting points</span><small>Verified 08 Aug 2026</small></div></header><nav class="catalogue-categories">${certificationCategories.map((category) => `<button data-action="cert-category" data-value="${category}" class="${state.certifications.category === category ? 'active' : ''}">${escapeHtml(category)}<small>${certificationCourses.filter((item) => item.category === category).length}</small></button>`).join('')}</nav><div class="catalogue-toolbar"><label>Search this category<input data-cert-search type="search" value="${escapeHtml(state.certifications.search)}" placeholder="Provider, skill, or course"></label><span>${filtered.length} routes</span></div><section class="catalogue-list">${filtered.map((item) => `<button data-action="cert-open" data-id="${item.id}"><span class="provider-mark">${item.provider.split(/\s+/).slice(0,2).map((part) => part[0]).join('')}</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.provider)} · ${escapeHtml(item.level)}</small><p>${escapeHtml(item.skills)}</p></span><span class="cost-tag">${escapeHtml(item.learningCost)}</span><em>Details →</em></button>`).join('')}</section><p class="catalogue-disclosure">A completion badge is not always a professional certification. Zysham keeps learning cost and assessment/credential cost separate; always confirm the current course page.</p></div>`;
}

function renderTraditionalCourses() {
  const query = state.traditional.search.toLowerCase();
  const filtered = traditionalCourses.filter((item) => item.category === state.traditional.category && `${item.title} ${item.provider} ${item.skills}`.toLowerCase().includes(query));
  const selected = traditionalCourses.find((item) => item.id === state.traditional.detailId);
  if (selected) return `<div class="view-enter course-catalogue traditional-catalogue"><button class="chapter-back" data-action="traditional-close">← All traditional courses</button><article class="course-detail"><span>${escapeHtml(selected.category)} · checked ${selected.checked}</span><h2>${escapeHtml(selected.title)}</h2><p class="course-provider">${escapeHtml(selected.provider)}</p><h3>Learning path</h3><p>${escapeHtml(selected.path)}</p><h3>What the practice develops</h3><p>${escapeHtml(selected.skills)}</p><h3>Reality check</h3><p>${escapeHtml(selected.reality)}</p><div class="course-actions"><a class="button-primary" href="${selected.url}" target="_blank" rel="noopener noreferrer">Visit official institution ↗</a><button data-action="traditional-save" data-id="${selected.id}">${state.traditional.saved.includes(selected.id) ? 'Saved ✓' : 'Save path'}</button></div></article></div>`;
  return `<div class="view-enter course-catalogue traditional-catalogue"><header class="catalogue-hero traditional-hero"><div><p class="eyebrow">HERITAGE AS LIVING PRACTICE</p><h2>Continuity is a skill you can train.</h2><p>Dance, music, language, yoga, theatre, craft, and living traditions—chosen with the same seriousness as any career skill.</p></div><div><strong>${traditionalCourses.length}</strong><span>credible starting routes</span><small>Teacher, practice, lineage</small></div></header><nav class="catalogue-categories">${traditionalCategories.map((category) => `<button data-action="traditional-category" data-value="${category}" class="${state.traditional.category === category ? 'active' : ''}">${escapeHtml(category)}<small>${traditionalCourses.filter((item) => item.category === category).length}</small></button>`).join('')}</nav><div class="catalogue-toolbar"><label>Search this tradition<input data-traditional-search type="search" value="${escapeHtml(state.traditional.search)}" placeholder="Art, institution, or skill"></label><span>${filtered.length} paths</span></div><section class="catalogue-list">${filtered.map((item) => `<button data-action="traditional-open" data-id="${item.id}"><span class="provider-mark heritage">ॐ</span><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.provider)}</small><p>${escapeHtml(item.path)}</p></span><span class="cost-tag">Practice-led</span><em>Details →</em></button>`).join('')}</section><p class="catalogue-disclosure">Tradition is not a decorative extracurricular. Choose a credible teacher, understand the lineage and safety requirements, and make room for sustained practice.</p></div>`;
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
    overview: '.overview-hero', compass: '.reality-scan', explore: '.filter-row', discussions: '.forum-unified', research: '.research-view-tabs',
    calling: '.calling-question-tabs', 'ai-journey': '.ai-stage-map', 'study-guide': '.study-command', certifications: '.catalogue-categories', traditional: '.catalogue-categories',
  };
  const anchor = host.querySelector(anchors[view]);
  if (anchor) anchor.insertAdjacentHTML('afterend', visual);
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
    })[state.view]();
  }
  placeContextVisual(host, state.view);
  if (state.view === 'overview' || state.view === 'journey-stage') host.insertAdjacentHTML('afterbegin', renderJourneyWorkspaceTabs());
  if (callingWorkspaceTabs.some(([view]) => view === state.view)) host.insertAdjacentHTML('afterbegin', renderCallingWorkspaceTabs());
  updateMentor();
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

$('#sidebar').addEventListener('click', (event) => {
  const child = event.target.closest('[data-submenu-kind]');
  if (child) {
    const { submenuKind: kind, value } = child.dataset;
    if (kind === 'view') setView(value);
    if (kind === 'journey-stage') { state.activeJourneyStage = value; state.journeyStageTab = 'focus'; saveState(); setView('journey-stage'); }
    if (kind === 'community') { state.communityMode = value; state.detailDiscussion = ''; state.detailExperience = ''; state.newDiscussionOpen = false; state.shareExperienceOpen = false; saveState(); setView('discussions'); }
    if (kind === 'research') { state.research.category = value; state.research.detailId = ''; saveState(); setView('research'); }
    if (kind === 'study') { state.studyGuide.track = value; state.studyGuide.subject = Object.keys(studyTracks[value].subjects)[0]; state.studyGuide.selectedChapterId = ''; state.studyGuide.search = ''; saveState(); setView('study-guide'); }
    if (kind === 'certification') { state.certifications.category = value; state.certifications.detailId = ''; state.certifications.search = ''; saveState(); setView('certifications'); }
    if (kind === 'traditional') { state.traditional.category = value; state.traditional.detailId = ''; state.traditional.search = ''; saveState(); setView('traditional'); }
    if (kind === 'calling') { state.calling.activeQuestion = value; state.calling.search = ''; state.calling.limit = 18; saveState(); setView('calling'); }
    if (kind === 'blog') { state.editorial.blogCategory = value; state.editorial.selectedBlogId = ''; saveState(); setView('blog'); }
    if (kind === 'newsletter') {
      state.editorial.selectedNewsletterId = value === 'latest' ? ([...state.editorial.localNewsletters, ...newsletterIssues][0]?.id || '') : '';
      saveState(); setView('newsletters');
      if (value === 'subscribe') requestAnimationFrame(() => $('.newsletter-subscribe')?.scrollIntoView({ block: 'center' }));
    }
    closeNavigation();
    return;
  }
  const button = event.target.closest('[data-view]');
  if (!button) return;
  const group = button.closest('[data-nav-group]');
  if (group) {
    $$('[data-nav-group]').forEach((item) => item.classList.toggle('expanded', item === group));
    $$('[data-menu]').forEach((item) => item.setAttribute('aria-expanded', String(item.closest('[data-nav-group]')?.classList.contains('expanded'))));
  }
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
  const profileOnlyActions = new Set(['signal', 'stream', 'milestone', 'task-toggle', 'evidence-remove', 'add-experiment', 'share-open', 'discussion-new', 'work-reality-reset', 'journey-page-milestone', 'calling-option', 'study-status', 'study-mastery-bump', 'study-assignment', 'study-block-done']);
  if (profileOnlyActions.has(action) && !requireProfile(action === 'discussion-new' ? 'Create a profile to post in Discussions.' : action === 'share-open' ? 'Create a profile to share an experience.' : action === 'calling-option' ? 'Create a profile to save a private calling reflection.' : undefined)) return;
  if (action === 'go') setView(target);
  if (action === 'research-open') openResearchShelf();
  if (action === 'signal') toggleSignal(group, value);
  if (action === 'work-reality-reset') { state.workReality = structuredClone(defaultState.workReality); saveState(); render(); showToast('Work Reality Scan cleared.'); }
  if (action === 'journey-page-milestone') {
    const list = state.journey.stageMilestones[control.dataset.stage] || [];
    state.journey.stageMilestones[control.dataset.stage] = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
    saveState(); render();
  }
  if (action === 'journey-edit') renderJourneyInspector(id);
  if (action === 'journey-stage-nav') { state.activeJourneyStage = id; state.journeyStageTab = 'focus'; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'stage-tab') { state.journeyStageTab = value; saveState(); render(); }
  if (action === 'stage-community') { state.communityMode = 'discussions'; state.discussionFilters.stage = discussionStageMap[id] || 'All'; setView('discussions'); }
  if (action === 'stream') { state.streamChoice = state.streamChoice === value ? '' : value; saveState(); render(); }
  if (action === 'filter') { state.careerFilter = value; saveState(); render(); }
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
  if (action === 'calling-question') { state.calling.activeQuestion = value; state.calling.search = ''; state.calling.limit = 18; saveState(); render(); }
  if (action === 'calling-option') {
    const list = state.calling.selections[state.calling.activeQuestion] || [];
    state.calling.selections[state.calling.activeQuestion] = list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
    saveState(); render();
  }
  if (action === 'calling-more') { state.calling.limit += 18; saveState(); render(); }
  if (action === 'blog-open') { state.editorial.selectedBlogId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'blog-close') { state.editorial.selectedBlogId = ''; saveState(); render(); }
  if (action === 'newsletter-view') setView('newsletters');
  if (action === 'newsletter-open') { state.editorial.selectedNewsletterId = id; saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'newsletter-close') { state.editorial.selectedNewsletterId = ''; saveState(); render(); }
  if (action === 'calling-clear' && confirm('Clear all three calling reflections saved on this device?')) {
    state.calling = structuredClone(defaultState.calling); saveState(); render(); showToast('Calling reflections cleared.');
  }
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
  if (event.target.matches('[data-calling-custom]')) {
    if (!requireProfile('Create a profile to save a private calling reflection.')) return;
    state.calling.custom[event.target.dataset.callingCustom] = event.target.value;
    saveState();
  }
  if (event.target.matches('[data-study-notes]')) { if (!requireProfile('Create a profile to save personal study notes.')) return; state.studyGuide.notes[event.target.dataset.studyNotes] = event.target.value; saveState(); }
  if (event.target.matches('[data-study-search]')) { state.studyGuide.search = event.target.value; saveState(); const query = event.target.value.toLowerCase(); $$('.study-chapter-list > button', $('#viewHost')).forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.matches('[data-cert-search]')) { state.certifications.search = event.target.value; saveState(); const query = event.target.value.toLowerCase(); $$('.catalogue-list > button', $('#viewHost')).forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.matches('[data-traditional-search]')) { state.traditional.search = event.target.value; saveState(); const query = event.target.value.toLowerCase(); $$('.catalogue-list > button', $('#viewHost')).forEach((row) => { row.hidden = !row.textContent.toLowerCase().includes(query); }); }
  if (event.target.id === 'researchPageSearch') { state.research.search = event.target.value; saveState(); const cursor = event.target.selectionStart; render(); $('#researchPageSearch')?.focus(); $('#researchPageSearch')?.setSelectionRange(cursor, cursor); }
  if (event.target.matches('[data-study-mastery]')) { if (!requireProfile('Create a profile to save mastery evidence.')) return; const id = event.target.dataset.studyMastery; state.studyGuide.mastery[id] = Number(event.target.value); saveState(); event.target.closest('.mastery-control')?.querySelector('output')?.replaceChildren(`${event.target.value}%`); }
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
  if (event.target.closest('#researchPageFilters') && event.target.name === 'geography') { state.research.geography = event.target.value; saveState(); render(); }
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
  const profileOnlyForms = new Set(['taskForm', 'evidenceForm', 'shareExperienceForm', 'claimCheckForm', 'newDiscussionForm', 'discussionReplyForm']);
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

$('#audienceSwitch').addEventListener('click', () => {
  if (!isGuest() && state.profiles.parent.name) {
    state.session.activeRole = state.session.activeRole === 'student' ? 'parent' : 'student';
    state.audience = state.session.activeRole;
  } else state.audience = state.audience === 'student' ? 'parent' : 'student';
  state.familyLens = state.audience;
  saveState();
  render();
});

$('#globalRegionSelect').addEventListener('change', (event) => {
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

function closeJourneyInspector() {
  document.body.classList.remove('journey-open');
  closeRightDrawer('journey');
}

function closeActiveRightDrawer() {
  const kind = $('#rightDrawer').dataset.kind;
  if (kind === 'journey') closeJourneyInspector();
  else if (kind === 'research') closeResearchShelf();
  else if (kind === 'settings') closeSettings();
  else if (kind === 'mentor') {
    state.mentorChat.open = false;
    $('#mentorDock').classList.remove('mobile-open');
    saveState(); closeRightDrawer('mentor'); updateMentor();
  } else closeRightDrawer();
}

$('#rightDrawerClose').addEventListener('click', closeActiveRightDrawer);
$('#rightDrawerScrim').addEventListener('click', closeActiveRightDrawer);

$('#journeyInspectorClose').addEventListener('click', closeJourneyInspector);
$('#journeyScrim').addEventListener('click', closeJourneyInspector);

$('#researchButton').addEventListener('click', openResearchShelf);
$('#researchClose').addEventListener('click', closeResearchShelf);
$('#researchScrim').addEventListener('click', closeResearchShelf);
$('#researchPanelBody').addEventListener('click', (event) => {
  const back = event.target.closest('[data-research-back]');
  if (back) { state.research.detailId = ''; saveState(); renderResearchShelf(); return; }
  const detailButton = event.target.closest('[data-action="research-detail"]');
  if (detailButton) { state.research.detailId = detailButton.dataset.id; saveState(); renderResearchShelf(); return; }
  const category = event.target.closest('[data-research-category]');
  if (category) { state.research.category = category.dataset.researchCategory; state.research.detailId = ''; saveState(); renderResearchShelf(); return; }
  const save = event.target.closest('[data-research-save]');
  if (save) {
    const id = save.dataset.researchSave;
    state.research.saved = state.research.saved.includes(id) ? state.research.saved.filter((item) => item !== id) : [...state.research.saved, id];
    saveState(); renderResearchShelf(); showToast(state.research.saved.includes(id) ? 'Saved to research shortlist.' : 'Removed from research shortlist.');
  }
  const compare = event.target.closest('[data-action="research-compare"]');
  if (compare) {
    const id = compare.dataset.id;
    const alreadyCompared = state.research.compare.includes(id);
    if (!alreadyCompared && state.research.compare.length >= 3) return showToast('Compare up to three evidence records at a time.');
    state.research.compare = alreadyCompared ? state.research.compare.filter((item) => item !== id) : [...state.research.compare, id];
    saveState(); renderResearchShelf(); showToast(alreadyCompared ? 'Removed from comparison.' : 'Added to comparison.');
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
  closeRightDrawer('settings');
}

$('#settingsButton').addEventListener('click', () => {
  closeNavigation();
  closeResearchShelf();
  renderAccountSettings();
  renderBackgroundOptions();
  renderGeneratedNames();
  document.body.classList.add('settings-open');
  openRightDrawer('settings');
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
$('#backgroundOptions').addEventListener('click', (event) => {
  const option = event.target.closest('[data-background]');
  if (!option) return;
  state.appearance.mode = 'override';
  state.background = option.dataset.background;
  saveState();
  updateShell();
  renderBackgroundOptions();
  showToast(`${allBackgrounds().find((item) => item.id === state.background)?.name} background selected.`);
});

$('#backgroundOptions').addEventListener('click', (event) => {
  const remove = event.target.closest('[data-background-remove]');
  if (!remove) return;
  const background = state.appearance.customBackgrounds.find((item) => item.id === remove.dataset.backgroundRemove);
  if (!background || !confirm(`Remove “${background.name}” from this device?`)) return;
  state.appearance.customBackgrounds = state.appearance.customBackgrounds.filter((item) => item.id !== background.id);
  if (state.background === background.id) state.background = 'campus-walk';
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
  try { saveState(); } catch {
    state.appearance.customBackgrounds = state.appearance.customBackgrounds.filter((item) => item.id !== background.id);
    state.background = 'campus-walk';
    showToast('This image could not be stored. Try a smaller file or use an HTTPS image URL.');
    return;
  }
  form.reset(); updateShell(); renderBackgroundOptions();
  showToast(`${background.name} added and selected.`);
});

$('#appearanceReset').addEventListener('click', () => {
  state.appearance.mode = 'default';
  state.theme = 'brown-violet';
  state.background = 'campus-walk';
  saveState(); updateShell(); renderBackgroundOptions();
  showToast('Dark brown-violet and Campus walk restored. Personal backgrounds remain available.');
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
  $('#entryTitle').textContent = mode === 'create' ? 'Create your profile.' : 'Welcome back.';
  $('#entryAuthCopy').textContent = mode === 'create' ? 'Separate profiles keep student ownership, parent support, and team publishing permissions clear.' : 'Sign in to the profile stored on this device. Your journey and communication choices will be restored.';
  $('#entrySubmit').innerHTML = mode === 'create' ? `Create <span id="entryRoleLabel">${entryRole}</span> profile →` : 'Sign in →';
  $('#entryIdentifierLabel').textContent = mode === 'create' ? 'Email address' : 'Email or user ID';
  $('#entryIdentifier').type = mode === 'create' ? 'email' : 'text';
  $('#entryIdentifier').placeholder = mode === 'create' ? 'you@example.com' : 'Email or profile name';
  $('#entryPassword').autocomplete = mode === 'create' ? 'new-password' : 'current-password';
  $('#entryPassword').placeholder = mode === 'create' ? 'At least 8 characters' : 'Enter your password';
  $('#profileName').required = mode === 'create' && entryRole === 'student';
  $('#parentName').required = mode === 'create' && entryRole === 'parent';
  $('#adminName').required = mode === 'create' && entryRole === 'admin';
  $('#enterGuest').hidden = false;
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

$('#enterAdminSample').addEventListener('click', () => {
  let account = state.accounts.find((item) => item.id === 'sample-admin');
  if (!account) {
    account = { id: 'sample-admin', email: 'editor.sample@zysham.local', role: 'admin', displayName: 'Kavya Iyer', teamRole: 'Editor', language: 'English', timezone: 'Asia/Kolkata', visibility: 'Private', emailVerified: false, sample: true, createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString() };
    state.accounts.push(account);
  }
  restoreWorkspace(account.id);
  account.lastLoginAt = new Date().toISOString();
  state.session = { mode: 'profile', activeRole: 'admin', accountId: account.id };
  state.onboarded = true;
  captureWorkspace(account.id);
  saveState(); setView('blog');
  showToast('Team admin sample opened. Publishing stays local to this browser.');
});

$('#enterGuest').addEventListener('click', () => {
  state.onboarded = true;
  state.session = { mode: 'guest', activeRole: 'student', accountId: '' };
  state.view = 'explore';
  saveState(); render();
  showToast('Guest mode: explore everything; personal publishing and journey edits are locked.');
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
  const account = { id: `account-${Date.now()}`, email, role: entryRole, displayName: name, teamRole: entryRole === 'admin' ? $('#adminTeamRole').value : '', language: entryRole === 'parent' ? $('#parentLanguage').value : 'English', timezone: 'Asia/Kolkata', visibility: 'Private', emailVerified: false, salt, passwordHash: await passwordDigest(password, salt), createdAt: new Date().toISOString(), lastLoginAt: new Date().toISOString() };
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
  if (entryRole === 'admin') setView('blog'); else render();
  showToast(`Welcome, ${name}. Your path starts here.`);
});

function signOutToEntry() {
  closeSettings(); closeResearchShelf(); closeJourneyInspector();
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

function mentorReply(message, stageId) {
  const evidence = mentorEvidence(stageId);
  const lower = message.toLowerCase();
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
$('#mentorPanel').addEventListener('click', (event) => {
  const question = event.target.closest('[data-mentor-question]');
  if (question) {
    const text = question.dataset.mentorQuestion;
    addMentorMessage('user', text);
    addMentorMessage('assistant', mentorReply(text, mentorStageId()));
    saveState(); updateMentor();
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
  } else if (button.dataset.mentorAction === 'clear' && confirm('Clear this private counselling conversation?')) {
    state.mentorChat.messages = [];
    saveState(); updateMentor();
  }
});

$('#mentorStage').addEventListener('change', (event) => {
  state.mentorChat.stage = event.target.value;
  saveState(); updateMentor();
});

$('#mentorChatForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = $('#mentorChatInput');
  const message = input.value.trim();
  if (!message) return;
  const stageId = mentorStageId();
  addMentorMessage('user', message, stageId);
  addMentorMessage('assistant', mentorReply(message, stageId), stageId);
  input.value = '';
  saveState(); updateMentor();
});

matchMedia('(min-width: 1200px)').addEventListener('change', () => updateMentor());

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
  else if ($('#mentorDock').classList.contains('open')) {
    state.mentorChat.open = false;
    $('#mentorDock').classList.remove('mobile-open');
    saveState(); updateMentor();
  }
});

const initialView = location.hash.slice(1);
if (viewMeta[initialView]) state.view = initialView;
updateMentor();
render();
