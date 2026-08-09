const scale = ['Not like me', 'A little like me', 'Somewhat like me', 'Mostly like me', 'Very much like me'];

const makeItems = (rows) => rows.map(([id, dimension, text, reverse = false]) => ({ id, dimension, text, reverse }));

export const careerAssessments = [
  {
    id: 'interests', number: 1, title: 'Interest Pattern', short: 'What draws you in', framework: 'RIASEC-inspired', time: '4 min', scale,
    intro: 'Notice activities you would choose even before rewards, grades, or status enter the picture.',
    dimensions: {
      realistic: ['Realistic', 'Building, fixing, tools, movement, and tangible results', 'Test engineering, skilled craft, field operations, agriculture, or technical production.'],
      investigative: ['Investigative', 'Questions, evidence, analysis, and complex problem solving', 'Test science, data, medicine, research, or diagnostic work.'],
      artistic: ['Artistic', 'Original expression, design, stories, and open-ended creation', 'Test design, media, architecture, writing, or performing arts.'],
      social: ['Social', 'Teaching, supporting, listening, and helping people grow', 'Test education, healthcare, counselling, community, or people development.'],
      enterprising: ['Enterprising', 'Influence, initiative, negotiation, and leading outcomes', 'Test business, law, sales, entrepreneurship, or public leadership.'],
      conventional: ['Conventional', 'Order, records, accuracy, systems, and dependable processes', 'Test finance, administration, compliance, logistics, or quality operations.'],
    },
    items: makeItems([
      ['i1','realistic','I enjoy building, repairing, assembling, or working with physical tools.'],['i2','realistic','I would rather make a tangible object than discuss an abstract idea.'],
      ['i3','investigative','I enjoy finding the cause of a difficult problem.'],['i4','investigative','I willingly read or experiment to answer a question nobody assigned.'],
      ['i5','artistic','I enjoy creating visual, written, musical, or dramatic work.'],['i6','artistic','I like problems that allow several original answers.'],
      ['i7','social','I enjoy helping someone understand, recover, or gain confidence.'],['i8','social','I am energised by patient, useful conversation with people.'],
      ['i9','enterprising','I enjoy persuading a group and moving an idea into action.'],['i10','enterprising','I like taking responsibility for a visible result.'],
      ['i11','conventional','I enjoy organising information so it is accurate and easy to use.'],['i12','conventional','I notice missing steps, inconsistencies, or process errors.'],
    ]),
  },
  {
    id: 'values', number: 2, title: 'Work Values', short: 'What must work provide', framework: 'O*NET values-inspired', time: '4 min', scale,
    intro: 'Rate what your ideal work must protect. High scores are needs to verify in real workplaces, not job titles.',
    dimensions: {
      achievement: ['Achievement', 'Using your abilities and seeing meaningful accomplishment', 'Ask how success is measured and whether you can own complete outcomes.'],
      independence: ['Independence', 'Autonomy, personal judgement, and room to try ideas', 'Compare decision freedom, supervision, and control over methods.'],
      recognition: ['Recognition', 'Advancement, authority, visibility, and acknowledged contribution', 'Research promotion paths, responsibility, and how credit is shared.'],
      relationships: ['Relationships', 'Service, belonging, fairness, and ethical alignment', 'Speak with employees about trust, inclusion, and who benefits from the work.'],
      support: ['Support', 'Good supervision, training, feedback, and organisational care', 'Ask about manager quality, onboarding, coaching, and psychological safety.'],
      conditions: ['Working conditions', 'Security, sustainable demands, pay, and a workable environment', 'Verify schedules, contracts, travel, safety, workload, and complete compensation.'],
    },
    items: makeItems([
      ['v1','achievement','I need work that uses my strongest abilities.'],['v2','achievement','A clear sense of accomplishment matters greatly to me.'],
      ['v3','independence','I need room to make decisions about how I work.'],['v4','independence','I want opportunities to test my own ideas.'],
      ['v5','recognition','Advancement and increasing responsibility matter to me.'],['v6','recognition','I want excellent work to be noticed and acknowledged.'],
      ['v7','relationships','I need my work to benefit people or society.'],['v8','relationships','Fair and ethical treatment is non-negotiable.'],
      ['v9','support','I value managers who teach, back, and challenge their team.'],['v10','support','I want regular, useful feedback rather than being left alone.'],
      ['v11','conditions','Stable employment and fair pay matter strongly.'],['v12','conditions','I need safe demands and enough life outside work.'],
    ]),
  },
  {
    id: 'skills', number: 3, title: 'Skills Confidence', short: 'What you can build on', framework: 'CareerOneStop-inspired', time: '4 min', scale,
    intro: 'Rate confidence from evidence you have today. A low score means untested or trainable, not incapable.',
    dimensions: {
      analytical: ['Analytical', 'Using numbers, logic, evidence, and structured diagnosis', 'Collect a data, coding, finance, or research sample that demonstrates reasoning.'],
      communication: ['Communication', 'Writing, speaking, explaining, and adapting a message', 'Create a short explanation for two different audiences and request critique.'],
      interpersonal: ['Interpersonal', 'Listening, collaborating, resolving tension, and supporting others', 'Lead a peer session or team task and collect behavioural feedback.'],
      creative: ['Creative', 'Generating, visualising, composing, and improving original ideas', 'Produce one constrained portfolio piece and revise it after critique.'],
      operational: ['Operational', 'Planning, organising, checking quality, and completing reliably', 'Plan a real event or workflow with deadlines, owners, and a quality check.'],
      practical: ['Practical', 'Using tools, materials, movement, and spatial judgement', 'Complete a supervised hands-on build, repair, lab, or field task.'],
    },
    items: makeItems([
      ['s1','analytical','I can break a complex problem into testable parts.'],['s2','analytical','I can use numbers or evidence to support a conclusion.'],
      ['s3','communication','I can explain a difficult idea clearly.'],['s4','communication','I can write in a way that fits the reader and purpose.'],
      ['s5','interpersonal','I listen well enough to understand what someone actually needs.'],['s6','interpersonal','I can contribute productively when a team disagrees.'],
      ['s7','creative','I can generate several useful approaches to an open problem.'],['s8','creative','I can turn an idea into something another person can experience.'],
      ['s9','operational','I can plan steps, time, and resources to finish reliably.'],['s10','operational','I catch details that could reduce quality.'],
      ['s11','practical','I learn physical procedures by observing and practising.'],['s12','practical','I can judge how parts, tools, or spaces fit together.'],
    ]),
  },
  {
    id: 'work-style', number: 4, title: 'Work Style', short: 'How you tend to operate', framework: 'Big Five-inspired', time: '4 min', scale,
    intro: 'Describe your usual behaviour, not the person you think a career requires. No style is universally better.',
    dimensions: {
      openness: ['Openness', 'Curiosity, imagination, variety, and comfort with new ideas', 'Explore changing, creative, research, and innovation-rich environments.'],
      conscientiousness: ['Conscientiousness', 'Planning, reliability, persistence, and attention to obligations', 'Explore roles with ownership, standards, long projects, or precise delivery.'],
      extraversion: ['Extraversion', 'Social energy, assertiveness, pace, and visible interaction', 'Compare people-dense roles with quieter roles before deciding.'],
      agreeableness: ['Agreeableness', 'Cooperation, empathy, patience, and concern for others', 'Explore service, facilitation, care, and collaborative work while testing boundaries.'],
      resilience: ['Emotional steadiness', 'Recovery under pressure, uncertainty, and difficult feedback', 'Test pressure gradually and identify the supports that keep performance sustainable.'],
    },
    items: makeItems([
      ['p1','openness','I actively seek unfamiliar ideas and experiences.'],['p2','openness','I prefer familiar methods even when experimentation is possible.',true],
      ['p3','conscientiousness','I prepare early and keep commitments without reminders.'],['p4','conscientiousness','I often leave important work until the last moment.',true],
      ['p5','extraversion','Frequent conversation and group activity give me energy.'],['p6','extraversion','I readily speak up when a group needs direction.'],
      ['p7','agreeableness','I try to understand another person before defending my position.'],['p8','agreeableness','I find other people\'s needs mostly distracting.',true],
      ['p9','resilience','I regain focus after setbacks or criticism.'],['p10','resilience','Uncertainty makes it hard for me to function for a long time.',true],
    ]),
  },
  {
    id: 'environment', number: 5, title: 'Environment Fit', short: 'Where you do your best', framework: 'Person-environment fit', time: '4 min', scale,
    intro: 'Focus on energy and sustainability. The same occupation can feel completely different across workplaces.',
    dimensions: {
      structure: ['Structure', 'Clear expectations, routines, standards, and predictable coordination', 'Verify role clarity, planning cycles, and how often priorities change.'],
      autonomy: ['Autonomy', 'Control over methods, schedule, and independent judgement', 'Ask who decides priorities and how closely everyday work is supervised.'],
      collaboration: ['Collaboration', 'Shared problem solving, frequent exchange, and team belonging', 'Observe actual meeting load, team interdependence, and conflict habits.'],
      dynamism: ['Dynamism', 'Novelty, pace, ambiguity, and changing challenges', 'Test a sprint, event, field assignment, or startup-style project.'],
      depth: ['Depth', 'Long concentration, expertise, quiet, and difficult sustained work', 'Try a multi-hour deep-work block on a real domain problem.'],
    },
    items: makeItems([
      ['e1','structure','I work best with clear standards and dependable routines.'],['e2','structure','Frequent priority changes drain my effectiveness.'],
      ['e3','autonomy','I do my best work when trusted to choose the method.'],['e4','autonomy','I want meaningful control over my schedule.'],
      ['e5','collaboration','Regular exchange with a close team improves my thinking.'],['e6','collaboration','I want work where outcomes depend on genuine cooperation.'],
      ['e7','dynamism','Variety and changing problems keep me engaged.'],['e8','dynamism','I can move forward before every detail is known.'],
      ['e9','depth','I enjoy long, quiet concentration on one difficult problem.'],['e10','depth','Becoming a deep specialist appeals to me.'],
    ]),
  },
  {
    id: 'motivation', number: 6, title: 'Career Motivation', short: 'What keeps effort alive', framework: 'Intrinsic and extrinsic motives', time: '4 min', scale,
    intro: 'Choose what would sustain effort after the novelty of a title or course wears off.',
    dimensions: {
      mastery: ['Mastery', 'Learning, improving, and becoming excellent at a difficult craft', 'Compare paths by the quality of practice and feedback they make possible.'],
      impact: ['Impact', 'Creating visible benefit for people, society, or the environment', 'Trace who benefits, how impact is measured, and what trade-offs are hidden.'],
      reward: ['Reward', 'Income, advancement, status, and competitive achievement', 'Research realistic earnings, promotion odds, hours, and the cost of competition.'],
      freedom: ['Freedom', 'Choice, flexibility, ownership, and self-directed work', 'Test freelance, portfolio, entrepreneurial, or high-autonomy project work safely.'],
      belonging: ['Belonging', 'Shared purpose, community, identity, and trusted relationships', 'Meet several teams and compare culture through specific behaviour, not slogans.'],
    },
    items: makeItems([
      ['m1','mastery','Becoming excellent at a difficult skill would keep me motivated.'],['m2','mastery','I enjoy progress even when nobody notices it.'],
      ['m3','impact','I need to see how my effort improves lives or systems.'],['m4','impact','A socially useful mission can make hard work worthwhile.'],
      ['m5','reward','High earnings and advancement strongly influence my choices.'],['m6','reward','Visible achievement and competition energise me.'],
      ['m7','freedom','Control over my direction matters more than a conventional ladder.'],['m8','freedom','I would trade some predictability for meaningful independence.'],
      ['m9','belonging','I work harder when I feel part of a trusted group.'],['m10','belonging','A shared identity and purpose matter to my commitment.'],
    ]),
  },
  {
    id: 'readiness', number: 7, title: 'Decision Readiness', short: 'What your choice needs next', framework: 'Career decision adaptability', time: '4 min', scale,
    intro: 'This is a process check. Lower areas identify the next useful action; they are not personal weaknesses.',
    dimensions: {
      selfKnowledge: ['Self-knowledge', 'A grounded view of interests, constraints, values, and strengths', 'Compare your assessment pattern with feedback and recent lived evidence.'],
      optionKnowledge: ['Option knowledge', 'Understanding daily work, routes, requirements, and alternatives', 'Research three paths using official course data and practitioner interviews.'],
      agency: ['Agency', 'Ownership of the choice rather than avoidance or pressure-led compliance', 'Name the decision you own and one boundary that protects it.'],
      experimentation: ['Experimentation', 'Testing assumptions through small, reversible experiences', 'Schedule one project, shadow, interview, course sample, or work simulation.'],
      commitment: ['Commitment', 'Ability to choose a next step while keeping evidence-based flexibility', 'Set a dated next action and the evidence that would make you revise it.'],
    },
    items: makeItems([
      ['r1','selfKnowledge','I can explain what I want from work and what I reject.'],['r2','selfKnowledge','My claimed strengths are supported by recent examples.'],
      ['r3','optionKnowledge','I understand the ordinary daily work in my leading options.'],['r4','optionKnowledge','I know the education, cost, time, and fallback routes for my options.'],
      ['r5','agency','My current direction reflects my judgement, not only pressure.'],['r6','agency','I can ask for advice without handing over the decision.'],
      ['r7','experimentation','I have tested at least one option outside imagination or online reading.'],['r8','experimentation','I actively seek evidence that could disconfirm my favourite option.'],
      ['r9','commitment','I can choose a useful next step without demanding total certainty.'],['r10','commitment','I know when I will review the decision and what evidence I will use.'],
    ]),
  },
];

export const careerAssessmentSources = [
  ['O*NET Interest Profiler', 'https://www.onetcenter.org/IP.html'],
  ['O*NET Career Exploration Tools', 'https://www.onetcenter.org/tools.html'],
  ['CareerOneStop self-assessments', 'https://www.careeronestop.org/ExploreCareers/Assessments/self-assessments.aspx'],
  ['International Personality Item Pool', 'https://ipip.ori.org/'],
  ['NCDA career assessment guide', 'https://www.ncda.org/aws/NCDA/asset_manager/get_file/373667?ver=0'],
  ['Insightful Traits career field approach', 'https://insightfultraits.com/career-field-personality-test/'],
  ['Insightful Traits multi-factor career assessment', 'https://insightfultraits.com/career-assessment-test/'],
];

export const careerFieldProfiles = [
  {
    id: 'business', title: 'Business & entrepreneurship', glyph: 'BE',
    summary: 'Turn opportunities into organised action through judgement, ownership, negotiation, and resource decisions.',
    signals: { 'interests:enterprising': 4, 'interests:conventional': 1, 'skills:operational': 2, 'skills:communication': 1, 'work-style:conscientiousness': 2, 'environment:autonomy': 2, 'environment:dynamism': 1, 'motivation:reward': 2, 'motivation:freedom': 2 },
    experiment: 'Design a tiny service, speak with five potential users, and test whether anyone will commit time or money.',
  },
  {
    id: 'marketing', title: 'Marketing & communications', glyph: 'MC',
    summary: 'Understand audiences and shape clear messages, campaigns, stories, and experiences that move people.',
    signals: { 'interests:artistic': 2, 'interests:enterprising': 2, 'skills:communication': 4, 'skills:creative': 2, 'work-style:openness': 2, 'work-style:extraversion': 1, 'environment:collaboration': 1, 'environment:dynamism': 2, 'values:recognition': 1 },
    experiment: 'Create two versions of a campaign for a real cause and compare audience response rather than personal taste.',
  },
  {
    id: 'technology', title: 'Technology & data', glyph: 'TD',
    summary: 'Build and improve digital systems through logic, experimentation, technical learning, and careful problem solving.',
    signals: { 'interests:investigative': 3, 'interests:realistic': 2, 'skills:analytical': 4, 'skills:creative': 1, 'work-style:openness': 2, 'work-style:conscientiousness': 1, 'environment:depth': 3, 'environment:autonomy': 1, 'motivation:mastery': 3 },
    experiment: 'Build a small working tool or analysis, test it with a user, and document failures and revisions.',
  },
  {
    id: 'healthcare', title: 'Healthcare & human services', glyph: 'HH',
    summary: 'Support wellbeing through evidence, trust, responsibility, patient communication, and dependable service.',
    signals: { 'interests:social': 3, 'interests:investigative': 2, 'skills:interpersonal': 3, 'skills:analytical': 1, 'work-style:agreeableness': 2, 'work-style:conscientiousness': 2, 'environment:collaboration': 2, 'environment:structure': 1, 'motivation:impact': 4, 'values:relationships': 2 },
    experiment: 'Interview two practitioners about an ordinary shift, emotional load, training, and ethical responsibility.',
  },
  {
    id: 'education', title: 'Education & training', glyph: 'ET',
    summary: 'Help people learn through explanation, patience, subject knowledge, feedback, and thoughtful facilitation.',
    signals: { 'interests:social': 4, 'interests:investigative': 1, 'skills:communication': 3, 'skills:interpersonal': 2, 'work-style:agreeableness': 2, 'work-style:openness': 1, 'environment:collaboration': 2, 'motivation:impact': 3, 'motivation:mastery': 1, 'values:achievement': 1 },
    experiment: 'Teach one difficult concept to three learners, check what they retained, and revise the explanation.',
  },
  {
    id: 'creative', title: 'Creative industries', glyph: 'CI',
    summary: 'Create original visual, written, spatial, musical, or interactive work for a real audience and purpose.',
    signals: { 'interests:artistic': 5, 'skills:creative': 4, 'skills:communication': 1, 'work-style:openness': 3, 'environment:autonomy': 2, 'environment:dynamism': 1, 'motivation:freedom': 2, 'motivation:mastery': 1, 'values:independence': 2 },
    experiment: 'Complete one constrained portfolio brief for a real user and revise it after two critique rounds.',
  },
  {
    id: 'operations', title: 'Operations & project management', glyph: 'OP',
    summary: 'Coordinate people, time, standards, information, and resources so complex work finishes reliably.',
    signals: { 'interests:conventional': 4, 'interests:enterprising': 1, 'skills:operational': 5, 'skills:interpersonal': 1, 'work-style:conscientiousness': 4, 'environment:structure': 3, 'environment:collaboration': 1, 'motivation:mastery': 1, 'values:achievement': 2, 'values:support': 1 },
    experiment: 'Plan a real event or workflow with owners, dependencies, risks, deadlines, and a retrospective.',
  },
  {
    id: 'sales', title: 'Sales & customer success', glyph: 'SC',
    summary: 'Discover needs, build trust, communicate value, negotiate, and stay accountable for visible outcomes.',
    signals: { 'interests:enterprising': 5, 'interests:social': 1, 'skills:communication': 3, 'skills:interpersonal': 3, 'work-style:extraversion': 3, 'environment:dynamism': 2, 'environment:collaboration': 1, 'motivation:reward': 3, 'motivation:belonging': 1, 'values:recognition': 2 },
    experiment: 'Conduct five discovery conversations and practise recommending only when the offer genuinely fits.',
  },
  {
    id: 'trades', title: 'Trades & hands-on work', glyph: 'TH',
    summary: 'Produce tangible results using tools, materials, physical judgement, technique, and visible quality standards.',
    signals: { 'interests:realistic': 5, 'skills:practical': 5, 'skills:operational': 1, 'work-style:conscientiousness': 1, 'environment:autonomy': 1, 'environment:structure': 1, 'motivation:mastery': 3, 'values:achievement': 2, 'values:conditions': 1 },
    experiment: 'Complete a supervised build, repair, fabrication, field, or lab task and ask for a craft-quality review.',
  },
  {
    id: 'research', title: 'Research & academic paths', glyph: 'RA',
    summary: 'Investigate difficult questions through evidence, sustained concentration, intellectual honesty, and communication.',
    signals: { 'interests:investigative': 5, 'skills:analytical': 4, 'skills:communication': 1, 'work-style:openness': 2, 'work-style:conscientiousness': 1, 'environment:depth': 4, 'environment:autonomy': 1, 'motivation:mastery': 3, 'values:achievement': 1 },
    experiment: 'Form one answerable question, review credible evidence, analyse a small dataset, and write the limitations.',
  },
];
