#!/usr/bin/env node

/*
 * Deterministically creates the Discussions demo corpus.
 *
 * Every author, topic and response is fictional demo data. The writing offers
 * decision frameworks and lived-perspective prompts, not personalised career,
 * legal, medical or financial advice. Time-sensitive facts are deliberately
 * routed to official sources instead of being asserted here.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "data", "discussions.js");
const GENERATED_AT = "2026-08-08T00:00:00.000Z";

const contexts = [
  { label: "Tamil Nadu learner lens", country: "India", region: "Tamil Nadu", setting: "urban", language: "Tamil / English" },
  { label: "Assam learner lens", country: "India", region: "Assam", setting: "semi-urban", language: "Assamese / English" },
  { label: "Rajasthan learner lens", country: "India", region: "Rajasthan", setting: "rural", language: "Hindi / English" },
  { label: "Kerala learner lens", country: "India", region: "Kerala", setting: "urban", language: "Malayalam / English" },
  { label: "South Asian comparison", country: "Nepal", region: "Bagmati", setting: "urban", language: "Nepali / English" },
  { label: "global student comparison", country: "Canada", region: "Ontario", setting: "urban", language: "English" },
];

const people = [
  ["Aarav N.", "student", "India", "Karnataka"], ["Meera K.", "student", "India", "Kerala"],
  ["Zoya R.", "student", "India", "Delhi"], ["Kabir S.", "student", "India", "Punjab"],
  ["Ishita P.", "student", "India", "West Bengal"], ["Arjun M.", "student", "India", "Tamil Nadu"],
  ["Nandini B.", "student", "India", "Assam"], ["Rohan T.", "student", "India", "Maharashtra"],
  ["Diya J.", "student", "India", "Rajasthan"], ["Vivaan L.", "student", "India", "Gujarat"],
  ["Ananya D.", "student", "India", "Odisha"], ["Rahul C.", "student", "India", "Bihar"],
  ["Priya's parent", "parent", "India", "Telangana"], ["Dev's parent", "parent", "India", "Uttar Pradesh"],
  ["Ms Rao", "school-counsellor", "India", "Karnataka"], ["Mr Thomas", "teacher", "India", "Kerala"],
  ["Dr Sen", "career-mentor", "India", "West Bengal"], ["Neha V.", "early-career", "India", "Madhya Pradesh"],
  ["Sanjay A.", "apprentice", "India", "Haryana"], ["Maya Gurung", "student", "Nepal", "Bagmati"],
  ["Amina K.", "student", "Kenya", "Nairobi County"], ["Lucas M.", "student", "Brazil", "Sao Paulo"],
  ["Farah H.", "student", "United Arab Emirates", "Dubai"], ["Noah C.", "student", "Canada", "Ontario"],
];

const seeds = [
  {
    category: "school-and-board", stage: "grade-10-context", title: "How should I compare CBSE, CISCE and a state board without ranking students?",
    body: "My family keeps asking which board is ‘best’. I want a comparison that starts with teaching language, available subjects, school quality, commute, support needs and future plans—not prestige. What evidence should we collect before deciding?",
    tags: ["boards", "school-choice", "family-decision"],
    replies: [
      "Build a one-page comparison using the actual schools available to you: subject combinations, assessment style, language, accessibility, fees and travel time. Board labels alone do not describe classroom quality. Verify current rules on each board and school’s official website.",
      "I asked to see sample timetables and speak to two current students. The daily workload and commute changed my shortlist more than the board name did.",
      "From a parent lens, include the cost of transport, books and tutoring as well as fees. We also agreed on which factors belonged to the student and which were household constraints.",
      "That separation helps. I would give the student the final voice on learning fit after the family defines the genuine constraints, then record why the choice was made so it can be revisited.",
    ],
  },
  {
    category: "subjects-and-streams", stage: "grade-10-subjects", title: "Can an interest experiment help before choosing a Grade 11 stream?",
    body: "Marks matter, but one exam does not tell me whether I enjoy the work inside a subject. I am considering two-week experiments in coding, biology observation, budgeting and long-form writing. How would you make these fair enough to compare?",
    tags: ["stream-choice", "interest-experiment", "reflection"],
    replies: [
      "Use the same reflection after every experiment: Did curiosity persist when it became difficult? Did you seek feedback? What kind of problems did you want to solve next? The result is evidence about fit, not a permanent identity label.",
      "I kept a small portfolio instead of scoring only enjoyment. A finished spreadsheet, lab note or essay gave my teacher something concrete to discuss with me.",
      "Please include realistic time and resource limits. A learner with a shared device should not look less interested simply because one experiment needed continuous internet.",
      "Good point. Each experiment can have an offline or low-cost version, and comparison should focus on the thinking process rather than polished output.",
    ],
  },
  {
    category: "subjects-and-streams", stage: "grade-11-stream", title: "What if my preferred career does not match the stream my relatives expect?",
    body: "My relatives equate one stream with success, while I am more engaged by another. I need a calm conversation based on pathways, prerequisites, affordability and fallback options. What should I bring to that meeting?",
    tags: ["family-pressure", "stream-choice", "decision-rights"],
    replies: [
      "Bring three things: your evidence of sustained interest, current official prerequisites for two or three plausible routes, and a fallback plan. Avoid claiming one route guarantees an outcome; ask the family to compare trade-offs.",
      "A counsellor helped us use two columns: fears we could test and values we needed to respect. ‘People will judge us’ was not treated as an academic prerequisite.",
      "Parents may be expressing financial uncertainty badly. A budget range, nearby options and scholarship research can turn the conversation from status to feasibility.",
      "I would also set a review date. A decision can be responsible without pretending we know the next seven years perfectly.",
    ],
  },
  {
    category: "exams-and-admissions", stage: "grade-12-decision", title: "How many entrance exams are enough without exhausting the student?",
    body: "More applications seem to create more options, but preparation, fees, travel and stress add up. How can a family build a balanced application portfolio with reach, realistic and safer routes?",
    tags: ["entrance-exams", "wellbeing", "portfolio"],
    replies: [
      "Start from programmes, not exam count. Group options by overlapping preparation, then estimate added cost and recovery time. Check every deadline and eligibility rule on the official admissions source because these can change.",
      "My useful limit came from a weekly calendar. If another exam displaced sleep or school revision, it was not a free extra option.",
      "We included one affordable local route that the student would genuinely accept. Calling an unwanted option ‘safe’ only postpones conflict.",
      "A good portfolio protects both aspiration and health. It should include a plan for results day so one score does not become a verdict on the person.",
    ],
  },
  {
    category: "college-choice", stage: "college-selection", title: "A famous college or a better-fit programme: what should lead the decision?",
    body: "I want to compare curriculum, teaching access, total cost, student support, internships, location and outcomes without being captured by a single ranking. What questions expose the real student experience?",
    tags: ["college-choice", "programme-fit", "cost"],
    replies: [
      "Ask for the current curriculum, faculty access, assessment methods, support services and transparent outcome definitions. A ranking may be one signal, but it cannot substitute for programme-level evidence.",
      "I contacted a current student and asked what an ordinary Tuesday looked like. That revealed commute, class size and club access better than a promotional tour.",
      "Calculate total cost, including housing, travel, equipment and foregone earnings. Then compare the debt or family contribution under conservative—not ideal—assumptions.",
      "Also ask which option leaves room to change direction. Electives, transfer rules and broad foundational skills can matter when interests develop.",
    ],
  },
  {
    category: "vocational-pathways", stage: "diploma-or-apprenticeship", title: "How do we evaluate an ITI, polytechnic or apprenticeship route respectfully?",
    body: "Our community often treats vocational education as a fallback. I want to evaluate hands-on routes by training quality, safety, recognised credentials, employer exposure and progression—not social status.",
    tags: ["vocational", "iti", "polytechnic", "apprenticeship"],
    replies: [
      "Visit the workshop if possible. Ask who maintains equipment, how safety is taught, how much time is practical, what credential is awarded and what graduates do next. Verify recognition and progression rules with the responsible official body.",
      "Talking to an apprentice clarified that learning quality depends heavily on supervision. I would ask how feedback and grievance reporting work before joining.",
      "Families should compare time-to-earning and future study bridges, but not force the quickest income route if the working conditions or learner fit are poor.",
      "A skills portfolio can make the route visible: documented projects, safety practice and supervisor feedback show growth more clearly than labels.",
    ],
  },
  {
    category: "skills-and-portfolio", stage: "college-skills", title: "What makes a student project credible instead of just impressive-looking?",
    body: "Generative AI and templates make polished demos easy. How can a student show the problem, decisions, mistakes, evidence and personal contribution so reviewers can trust the work?",
    tags: ["portfolio", "projects", "authenticity", "ai"],
    replies: [
      "Keep a decision log: problem definition, constraints, alternatives tried, test evidence and changes made. State exactly where AI, teammates or templates contributed. Credibility grows when another person can trace your reasoning.",
      "I added rough versions and a short failure note. In interviews, explaining why one approach failed led to a deeper conversation than the final screenshot.",
      "Do not publish personal data, private client material or classmates’ work without permission. Redact examples and obtain consent before naming collaborators.",
      "A useful test is whether you can reproduce and defend the important parts without the tool. If not, return to the fundamentals before presenting it as your skill.",
    ],
  },
  {
    category: "internships", stage: "internship-search", title: "How can I screen an internship for learning, fairness and safety?",
    body: "An internship description promises exposure but is vague about supervision and tasks. What questions help identify genuine learning, exploitative work or unsafe requests before I accept?",
    tags: ["internships", "safety", "workplace-learning"],
    replies: [
      "Ask for named supervision, expected tasks, hours, location, feedback cadence, expenses or pay, and a contact for concerns. Never pay an unofficial individual to secure a role, and verify the organisation independently.",
      "I requested one example of a past intern’s weekly work. A clear answer helped me distinguish observation, administration and actual guided practice.",
      "For minors, a trusted adult should review travel, communication channels and safeguarding arrangements. Pressure to hide details is a warning sign.",
      "Learning goals should be written before day one. Even a short placement can be valuable if tasks, feedback and boundaries are explicit.",
    ],
  },
  {
    category: "first-job", stage: "employment", title: "How should a fresher compare salary with learning and working conditions?",
    body: "Two roles differ in pay, commute, manager access, contract clarity and skill growth. I do not want to romanticise low pay or chase a headline number. What comparison would you use?",
    tags: ["first-job", "offer-comparison", "workplace"],
    replies: [
      "Compare take-home pay, hours, commute, contract terms, benefits, role scope, supervision and credible learning opportunities. Record unknowns and ask for written clarification; do not infer culture from branding alone.",
      "I scored reversible and irreversible risks separately. A slower learning month was reversible; relocating without a clear contract was a much larger commitment.",
      "Families may value stability, but the candidate should understand who controls the actual workday. Discuss support without taking over the decision.",
      "Speak to a current or former employee when possible, while remembering one account is a data point. Look for patterns across independent evidence.",
    ],
  },
  {
    category: "career-change", stage: "early-career", title: "Is my wish to change direction a bad week or a durable signal?",
    body: "I feel pulled toward a different field but do not want to quit impulsively. What small, reversible tests can separate temporary frustration from real interest and feasible opportunity?",
    tags: ["career-pivot", "experiments", "wellbeing"],
    replies: [
      "Track the specific source of dissatisfaction for several weeks, then test the new field through a bounded project, conversation or course. Define what evidence would make you continue, pause or stop.",
      "A weekend project showed me I liked the subject but not the common work setting. That saved me from treating an interest as a complete job fit.",
      "Include financial runway and responsibilities in the test plan. A staged transition may preserve choice better than an all-or-nothing leap.",
      "If distress is affecting daily functioning, career experimentation is not a substitute for appropriate wellbeing support. Address both questions with the right people.",
    ],
  },
  {
    category: "ai-literacy", stage: "all-stages", title: "When should I trust an AI answer about eligibility or admissions?",
    body: "AI can summarise quickly, but an incorrect deadline or prerequisite can have real consequences. I want a repeatable verification habit for high-impact career decisions.",
    tags: ["ai", "verification", "admissions", "source-literacy"],
    replies: [
      "Treat the AI answer as a lead, not evidence. Identify the exact claim, locate the current official source, check its date and scope, and save the link or screenshot with your decision record.",
      "I ask the tool to list uncertainties, but I still search the institution’s admissions page myself. A confident tone is not proof of accuracy.",
      "For ambiguous rules, contact the responsible office and keep the written response. Forum members can share search strategies, not guarantee eligibility.",
      "Also verify that the official page applies to your applicant category, year and programme. Correct information from the wrong context can still mislead.",
    ],
  },
  {
    category: "ai-literacy", stage: "all-stages", title: "What personal information should never go into a public AI career tool?",
    body: "Students may paste marksheets, identity documents or private reflections to get tailored advice. What is a safer way to ask useful questions while protecting privacy and family information?",
    tags: ["ai", "privacy", "digital-safety"],
    replies: [
      "Use the minimum information needed. Remove names, contact details, IDs, exact addresses, account credentials, health records and other people’s data. Review the tool’s privacy controls and retention terms before use.",
      "I replace exact details with ranges: ‘mid-range budget’ or ‘urban commute’ was enough for brainstorming. Official applications are a separate, secure process.",
      "Schools should provide an approved-tool policy and an offline alternative. A student should not have to surrender sensitive data to receive guidance.",
      "If something sensitive was already shared, stop adding data, review deletion options, change exposed credentials where relevant, and tell a trusted adult or responsible support contact.",
    ],
  },
  {
    category: "ai-literacy", stage: "all-stages", title: "How can we notice bias in AI career recommendations?",
    body: "A recommendation may quietly reflect stereotypes about gender, disability, location, language or income. What prompts and human checks make the missing assumptions visible?",
    tags: ["ai", "bias", "inclusion", "human-decision"],
    replies: [
      "Ask what assumptions drove the ranking, which options were excluded, and how the answer changes when irrelevant identity cues are removed. Then compare against diverse human perspectives and primary information.",
      "I request several viable routes with constraints stated explicitly rather than one ‘best career’. This makes trade-offs easier to inspect.",
      "Do not use protected characteristics as shortcuts for aptitude. Accessibility needs should guide accommodations and environment fit, not narrow ambition.",
      "Document the final human reason for choosing or rejecting an AI suggestion. Accountability should remain with people, especially for consequential decisions.",
    ],
  },
  {
    category: "accessibility", stage: "all-stages", title: "How do I ask a college about accessibility without sharing more than necessary?",
    body: "I need to understand classroom, assessment, housing and digital accessibility. I also want control over who receives my information. How can I evaluate support and disclosure choices?",
    tags: ["accessibility", "college-choice", "privacy"],
    replies: [
      "Ask the accessibility office about processes, typical adjustments, documentation handling, timelines and appeals. You can begin with functional needs and hypothetical questions before deciding what personal details to disclose.",
      "I asked for a campus route and platform demonstration. Seeing the actual environment exposed barriers that a general brochure did not mention.",
      "Support availability and legal duties vary by place and institution, so verify with the responsible office or qualified local advocate rather than relying on forum assumptions.",
      "Include belonging as well as compliance: accessible clubs, peer support and respectful teaching can affect whether formal adjustments work in practice.",
    ],
  },
  {
    category: "first-generation", stage: "college-transition", title: "What does a first-generation college student wish families knew?",
    body: "Our family is proud but unfamiliar with credits, office hours, internships and campus systems. How can we support the student without expecting them to translate every unfamiliar process alone?",
    tags: ["first-generation", "college-transition", "family-support"],
    replies: [
      "Create a support map: academic adviser, financial aid office, accessibility service, trusted peer and emergency contact. Institutional staff should explain their own systems; the student need not know everything immediately.",
      "Regular check-ins worked better when my family asked ‘What support would help?’ instead of checking only marks. Sometimes I needed listening, not a solution.",
      "Families can learn the calendar and budget together while respecting privacy. Independence grows when the student practises asking offices directly.",
      "Normalise confusion during transition. Asking for clarification is a navigation skill, not evidence that the student does not belong.",
    ],
  },
  {
    category: "finance", stage: "college-selection", title: "How can we compare scholarships and education costs without wishful thinking?",
    body: "An award headline can hide renewal conditions and living costs. I want a conservative budget that respects uncertainty and avoids sharing private financial details publicly.",
    tags: ["scholarships", "college-cost", "financial-planning"],
    replies: [
      "Separate confirmed funding from applications and assumptions. Include tuition, housing, food, travel, equipment and emergency margin, then verify renewal conditions and deadlines with official providers.",
      "I built best, expected and difficult scenarios. Seeing the monthly gap helped us discuss a local option without treating it as failure.",
      "Do not post account numbers, documents or exact family income in a forum. Use ranges for peer discussion and consult an authorised adviser for personalised financial commitments.",
      "Ask what happens if funding changes after year one. A sustainable plan includes an exit or transfer route rather than assuming every condition stays favourable.",
    ],
  },
  {
    category: "parents", stage: "all-stages", title: "Which career decisions belong to the student and which belong to the family?",
    body: "Interest, safety, affordability and cultural expectations can collide. I want a decision-rights agreement that avoids both parental control and pretending household constraints do not exist.",
    tags: ["parents", "student-agency", "decision-rights"],
    replies: [
      "Name the roles explicitly: the student owns identity, interests and daily learning; the family states real resource and safety constraints; qualified sources clarify requirements. Shared decisions need reasons and a review date.",
      "Our meetings improved when each person spoke without interruption and then summarised the other side before proposing options.",
      "Parents should distinguish discomfort from danger. An unfamiliar career is not automatically unsafe, and a familiar one is not automatically feasible.",
      "Record unresolved assumptions and test them. A campus visit, budget or short project can replace repeated arguments with new evidence.",
    ],
  },
  {
    category: "global-pathways", stage: "college-selection", title: "What should students verify before considering study in another country?",
    body: "International study discussions often focus on prestige and future work. I want a wider checklist: programme fit, recognition, total cost, visas, housing, wellbeing, rights and a plan if rules change.",
    tags: ["international-study", "verification", "mobility"],
    replies: [
      "Use official institution, immigration and credential-recognition sources for current rules. Build the academic decision first, then stress-test cost, housing, healthcare, support and return-home options.",
      "Speaking to current international students helped, but I treated their stories as experiences rather than promises. Policies and personal circumstances differ.",
      "Families should model currency and funding uncertainty without assuming part-time work will close every gap. Check lawful work conditions through official channels.",
      "Include emotional and accessibility support. Being able to enter a programme is different from being able to live and learn there sustainably.",
    ],
  },
  {
    category: "wellbeing", stage: "grade-12-decision", title: "How do we protect wellbeing during high-stakes exam preparation?",
    body: "I want a plan that values sleep, movement, relationships and asking for help while still taking preparation seriously. What early warning signs and support agreements are useful?",
    tags: ["wellbeing", "exam-preparation", "support"],
    replies: [
      "Set non-negotiable recovery time, realistic study blocks and a named person to contact when functioning changes. Track process goals rather than letting one score define worth.",
      "My weekly review asked what helped learning and what drained it. Reducing one low-value test gave me more consistent revision and sleep.",
      "Persistent distress, hopelessness or inability to function deserves prompt support from a trusted adult and qualified professional; a forum cannot assess or treat it.",
      "Families can agree not to compare students publicly. Curiosity about the plan is more useful than repeated predictions about the result.",
    ],
  },
  {
    category: "community-and-safety", stage: "all-stages", title: "What makes a student career forum safe and genuinely useful?",
    body: "Peer stories can reduce isolation, but advice can become competitive, promotional or invasive. What community rules would help students share uncertainty without being exploited?",
    tags: ["community", "moderation", "privacy", "safety"],
    replies: [
      "Label demo, composite and lived experience clearly; separate personal experience from verified facts; prohibit harassment, doxxing, recruitment scams and guaranteed-outcome claims; provide reporting and appeal routes.",
      "I value replies that explain context and trade-offs more than ‘do this’ answers. A useful response leaves the decision with the student.",
      "Minors need extra privacy defaults. Avoid direct-message pressure, moving conversations to unmonitored channels, or requests for documents and money.",
      "Metrics should reward helpfulness and verification, not only popularity. A careful minority perspective can matter even if it receives fewer reactions.",
    ],
  },
  {
    category: "rural-and-local", stage: "all-stages", title: "How can a student explore careers when travel and internet access are limited?",
    body: "Many suggestions assume a personal laptop, city events and paid courses. What low-bandwidth, local and offline experiments can still produce useful career evidence?",
    tags: ["rural", "digital-access", "low-cost", "inclusion"],
    replies: [
      "Start with local problem observation, library or school resources, informational conversations, downloaded materials and small projects using available tools. Evidence of curiosity and iteration does not require expensive production.",
      "I arranged questions in advance for a phone call with a professional. Fifteen focused minutes taught me more than browsing random videos on limited data.",
      "Teachers and community organisations can coordinate shared equipment and group visits. Access barriers should be documented as design constraints, not misread as low motivation.",
      "When comparing online opportunities, check data needs, device compatibility, language and whether completion actually provides meaningful feedback or recognition.",
    ],
  },
  {
    category: "language-and-belonging", stage: "college-transition", title: "Can learning in a regional language and working in English both be strengths?",
    body: "I understand concepts deeply in one language and encounter many technical resources in another. I want a bridge plan without treating accent or language background as intelligence.",
    tags: ["language", "belonging", "communication"],
    replies: [
      "Build a bilingual concept glossary, practise explaining the same idea in both languages, and use examples from your context. Technical vocabulary is learnable; conceptual understanding is an asset.",
      "Recording short explanations helped me notice missing words without the pressure of a live audience. I asked peers to assess clarity, not accent.",
      "Institutions should provide language support and accessible materials rather than placing the full adaptation burden on students.",
      "AI translation can assist a first pass, but check specialised terms and meaning with course materials or a knowledgeable person before relying on it.",
    ],
  },
];

function authorAt(index) {
  const [displayName, role, country, region] = people[index % people.length];
  return { userId: `DS-${String((index % 1000) + 1).padStart(4, "0")}`, displayName, role, country, region, demo: true };
}

function timestamp(topicIndex, replyIndex = -1) {
  const day = 1 + (topicIndex % 28);
  const hour = 8 + ((topicIndex + replyIndex + 1) % 10);
  return `2026-07-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String((topicIndex * 7 + (replyIndex + 1) * 11) % 60).padStart(2, "0")}:00.000Z`;
}

function makeTopic(index) {
  const seed = seeds[Math.floor(index / contexts.length)];
  const context = contexts[index % contexts.length];
  const id = `DISC-${String(index + 1).padStart(4, "0")}`;
  const responses = seed.replies.map((body, replyIndex) => ({
    id: `${id}-R${replyIndex + 1}`,
    topicId: id,
    parentResponseId: replyIndex === 3 ? `${id}-R1` : null,
    author: authorAt(index * 5 + replyIndex + 1),
    body,
    createdAt: timestamp(index, replyIndex),
    edited: false,
    helpfulVotes: 3 + ((index * 3 + replyIndex * 7) % 42),
    demo: true,
  }));
  return {
    id,
    demo: true,
    disclosure: "Fictional demo discussion for product exploration; it does not represent real users or professional advice.",
    title: `${seed.title} — ${context.label}`,
    body: `${seed.body} I am posting from a ${context.setting} ${context.region} perspective and may use ${context.language}.`,
    category: seed.category,
    journeyStage: seed.stage,
    perspectiveContext: context,
    author: authorAt(index * 5),
    tags: [...seed.tags, context.country.toLowerCase().replaceAll(" ", "-"), context.setting, "demo"],
    createdAt: timestamp(index),
    updatedAt: timestamp(index, 3),
    status: "open",
    pinned: index % 31 === 0,
    moderation: {
      reviewStatus: "demo-reviewed",
      safetyLabels: seed.tags.filter((tag) => ["wellbeing", "privacy", "safety", "financial-planning"].includes(tag)),
      factMode: "decision-framework-with-official-source-referrals",
      professionalAdvice: false,
    },
    metrics: {
      views: 48 + ((index * 43) % 1150),
      follows: 4 + ((index * 11) % 88),
      helpfulVotes: responses.reduce((sum, response) => sum + response.helpfulVotes, 0),
      responseCount: responses.length,
    },
    responses,
  };
}

const topics = Array.from({ length: seeds.length * contexts.length }, (_, index) => makeTopic(index));

function assertCorpus(items) {
  const ids = new Set(items.map((topic) => topic.id));
  const titles = new Set(items.map((topic) => topic.title));
  const responseIds = new Set(items.flatMap((topic) => topic.responses.map((response) => response.id)));
  const expectedResponses = items.length * 4;
  if (items.length < 120 || ids.size !== items.length || titles.size !== items.length) throw new Error("Expected at least 120 uniquely identified demo topics.");
  if (responseIds.size !== expectedResponses) throw new Error("Response IDs must be unique and every topic must have four responses.");
  if (new Set(items.map((topic) => topic.category)).size < 15) throw new Error("Discussion category coverage is too narrow.");
  if (items.some((topic) => !topic.demo || topic.responses.some((response) => !response.demo))) throw new Error("Every topic and response must remain labelled demo.");
  if (items.some((topic) => topic.metrics.responseCount !== topic.responses.length)) throw new Error("Response metrics are inconsistent.");
  if (items.some((topic) => topic.responses[3].parentResponseId !== `${topic.id}-R1`)) throw new Error("Every topic must contain a valid nested response.");
}

assertCorpus(topics);

const allResponses = topics.flatMap((topic) => topic.responses);
const metadata = {
  schemaVersion: "1.0.0",
  generatedAt: GENERATED_AT,
  generator: "scripts/generate-discussions.mjs",
  demo: true,
  disclosure: "All authors, topics and responses are fictional demo data. Never present them as testimonials or real community activity.",
  safetyNote: "Posts provide general decision frameworks and direct time-sensitive questions to official sources. They are not personalised professional advice.",
  topicCount: topics.length,
  responseCount: allResponses.length,
  authorProfileCount: new Set([...
    topics.map((topic) => topic.author.userId),
    ...allResponses.map((response) => response.author.userId),
  ]).size,
  coverage: {
    categories: [...new Set(topics.map((topic) => topic.category))].sort(),
    journeyStages: [...new Set(topics.map((topic) => topic.journeyStage))].sort(),
    contextCountries: [...new Set(topics.map((topic) => topic.perspectiveContext.country))].sort(),
    participantCountries: [...new Set([
      ...topics.map((topic) => topic.author.country),
      ...allResponses.map((response) => response.author.country),
    ])].sort(),
    nestedResponseCount: allResponses.filter((response) => response.parentResponseId).length,
  },
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
const output = `// Generated by scripts/generate-discussions.mjs. Do not hand-edit.\n` +
  `// Every topic, response and author is fictional and explicitly labelled demo.\n\n` +
  `export const discussionCorpusMetadata = ${JSON.stringify(metadata)};\n\n` +
  `export const discussionTopics = ${JSON.stringify(topics)};\n\n` +
  `export default discussionTopics;\n`;
fs.writeFileSync(OUTPUT, output, "utf8");
console.log(`Generated ${topics.length} topics and ${allResponses.length} responses at ${OUTPUT}`);
