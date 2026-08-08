const buildOptions = (question, foundations, lenses) => foundations.flatMap((foundation, foundationIndex) =>
  lenses.map((lens, lensIndex) => ({
    id: `${question}-${String(foundationIndex + 1).padStart(2, '0')}-${String(lensIndex + 1).padStart(2, '0')}`,
    category: foundation.category,
    text: `${foundation.text}${lens}`,
  })),
);

const freedomFoundations = [
  { category: 'Teach & guide', text: 'Teach, mentor and help young people find confidence' },
  { category: 'Build & employ', text: 'Build a thoughtful business that creates dignified local jobs' },
  { category: 'Serve society', text: 'Work on public problems through service, policy or community action' },
  { category: 'Create', text: 'Write, make films, perform, design or create work that moves people' },
  { category: 'Care & heal', text: 'Care for people through health, counselling or patient support' },
  { category: 'Discover', text: 'Research difficult questions and contribute new knowledge' },
  { category: 'Land & climate', text: 'Restore land, improve farming or protect water and climate' },
  { category: 'Invent', text: 'Design useful technology, tools or systems that remove daily friction' },
  { category: 'Justice', text: 'Defend fairness, rights and access for people with less power' },
  { category: 'Explore', text: 'Travel, observe and connect people across languages and cultures' },
  { category: 'Preserve', text: 'Preserve Indian languages, crafts, histories or family knowledge' },
  { category: 'Family & community', text: 'Build a calm life centred on family, neighbours and dependable care' },
];

const freedomLenses = [
  ', without needing a prestigious title.',
  ', while remaining available to my parents and family.',
  ', from my home town or a place where I feel rooted.',
  ', with enough time for children, elders and close relationships.',
  ', at a pace that protects my health and peace of mind.',
  ', even if the work stayed small and never became famous.',
  ', with people whose language and lived reality I understand.',
  ', while keeping space for faith, culture and community duties.',
  ', choosing meaning and mastery over constant promotion.',
];

const boundaryFoundations = [
  { category: 'Integrity', text: 'Mislead, manipulate or sell something I know can harm people' },
  { category: 'Family duty', text: 'Abandon a vulnerable family member when they genuinely need me' },
  { category: 'Health', text: 'Trade away my physical or mental health as a permanent condition of work' },
  { category: 'Meaning', text: 'Spend my whole working life on something I believe has no value' },
  { category: 'Human dignity', text: 'Exploit workers, customers or communities who cannot push back' },
  { category: 'Safety', text: 'Remain in a workplace that normalises harassment, humiliation or threats' },
  { category: 'Corruption', text: 'Pay, take or quietly enable a bribe or dishonest favour' },
  { category: 'Work reality', text: 'Choose clinical or emergency work if I cannot tolerate blood, illness or crisis' },
  { category: 'Lifestyle', text: 'Accept a life that keeps me at a screen almost every waking hour' },
  { category: 'Roots', text: 'Relocate permanently if it means losing every meaningful family connection' },
  { category: 'Ownership', text: 'Claim another person’s work, hide my contribution or fake evidence' },
  { category: 'Relationships', text: 'Sacrifice every close relationship merely to keep climbing titles' },
];

const boundaryLenses = [
  '—even if the salary doubled.',
  '—even if my relatives called it the sensible choice.',
  '—even if the organisation carried a famous name.',
  '—even if refusing slowed my promotion.',
  '—even if everyone around me treated it as normal.',
  '—even if it offered financial security immediately.',
  '—even if saying no disappointed someone I respect.',
  '—even if the role looked impressive from outside.',
  '—even if walking away meant beginning again.',
];

const legacyFoundations = [
  { category: 'Guide', text: 'A teacher and guide who helped people see possibility in themselves' },
  { category: 'Family anchor', text: 'A dependable family anchor who was present when it mattered' },
  { category: 'Builder', text: 'A builder who created useful work and dignified livelihoods' },
  { category: 'Ethical leader', text: 'An ethical leader who remained fair when power made fairness difficult' },
  { category: 'Healer', text: 'A healer who reduced fear, pain or loneliness with skill and humanity' },
  { category: 'Discoverer', text: 'A curious discoverer who left behind knowledge others could build upon' },
  { category: 'Creator', text: 'A creator whose stories, art or designs made people feel understood' },
  { category: 'Steward', text: 'A steward who protected land, water, culture or institutions for the next generation' },
  { category: 'Bridge', text: 'A bridge between generations, languages, communities or opposing viewpoints' },
  { category: 'Craftsperson', text: 'A craftsperson known for quiet mastery, reliability and work done properly' },
  { category: 'Courage', text: 'A courageous person who chose conscience over approval' },
  { category: 'Good life', text: 'A grounded person who proved that a good life is larger than a job title' },
];

const legacyLenses = [
  ', beginning with the people closest to me.',
  ', remembered for conduct rather than status.',
  ', whose success also made the family stronger.',
  ', who opened doors for people without inherited advantage.',
  ', while staying rooted in Indian community and responsibility.',
  ', who made difficult choices without becoming hard or cynical.',
  ', whose work remained useful long after recognition faded.',
  ', who made younger people feel safe to ask honest questions.',
  ', and who had the courage to define enough for myself.',
];

export const callingQuestions = [
  {
    id: 'freedom', number: '01', short: 'Without money pressure',
    question: 'What would you do if you never had to worry about money at all?',
    guidance: 'Remove salary, prestige and other people’s approval for a moment. Notice the work, people and way of living you still move toward.',
    options: buildOptions('freedom', freedomFoundations, freedomLenses),
  },
  {
    id: 'boundary', number: '02', short: 'Your non-negotiable',
    question: 'What would you never do, no matter how much money you were offered?',
    guidance: 'A calling is partly revealed by its boundary. Choose what money, status, security or family pressure should never be allowed to purchase from you.',
    options: buildOptions('boundary', boundaryFoundations, boundaryLenses),
  },
  {
    id: 'legacy', number: '03', short: 'Fifty-year legacy',
    question: 'Who do you want to be known as 50 years from now?',
    guidance: 'Think beyond occupation. Reputation is built from repeated choices: who benefited, what remained, and what you refused to become.',
    options: buildOptions('legacy', legacyFoundations, legacyLenses),
  },
];

for (const question of callingQuestions) {
  if (question.options.length !== 108 || new Set(question.options.map((option) => option.text)).size !== 108) {
    throw new Error(`${question.id} must contain exactly 108 unique options.`);
  }
}

export const callingMetadata = { questionCount: 3, optionsPerQuestion: 108, totalOptions: 324, context: 'India-first, duty-aware, family-aware' };
