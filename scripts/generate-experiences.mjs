#!/usr/bin/env node

/*
 * Deterministically creates the Career Experience Platform seed corpus.
 *
 * Every entry is fictional: either a simulated journey or a composite assembled
 * from common educational and career patterns. No story represents a real
 * person and no external source is claimed. Keep this disclosure intact when
 * consuming or transforming the data.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "data", "experiences.js");
const COUNT = 500;
const GENERATED_AT = "2026-08-08T00:00:00.000Z";

const locations = [
  ["India", "Tamil Nadu", "Chennai", "metro"], ["India", "Karnataka", "Bengaluru", "metro"],
  ["India", "Maharashtra", "Pune", "urban"], ["India", "Delhi", "Delhi", "metro"],
  ["India", "Telangana", "Hyderabad", "metro"], ["India", "West Bengal", "Kolkata", "metro"],
  ["India", "Kerala", "Kozhikode", "urban"], ["India", "Gujarat", "Ahmedabad", "urban"],
  ["India", "Rajasthan", "Jaipur", "urban"], ["India", "Uttar Pradesh", "Lucknow", "urban"],
  ["India", "Bihar", "Gaya district", "rural"], ["India", "Odisha", "Koraput district", "rural"],
  ["India", "Assam", "Jorhat", "semi-urban"], ["India", "Jharkhand", "Ranchi", "semi-urban"],
  ["India", "Madhya Pradesh", "Indore", "urban"], ["India", "Chhattisgarh", "Bastar district", "rural"],
  ["India", "Himachal Pradesh", "Mandi district", "rural"], ["India", "Uttarakhand", "Dehradun", "urban"],
  ["India", "Punjab", "Ludhiana", "urban"], ["India", "Haryana", "Hisar", "semi-urban"],
  ["India", "Goa", "Margao", "semi-urban"], ["India", "Jammu and Kashmir", "Srinagar", "urban"],
  ["India", "Manipur", "Imphal", "urban"], ["India", "Meghalaya", "Shillong", "urban"],
  ["India", "Nagaland", "Kohima", "urban"], ["India", "Tripura", "Agartala", "urban"],
  ["India", "Arunachal Pradesh", "Ziro", "rural"], ["India", "Sikkim", "Gangtok", "urban"],
  ["India", "Andhra Pradesh", "Vijayawada", "urban"], ["India", "Maharashtra", "Gadchiroli district", "rural"],
  ["India", "Tamil Nadu", "Madurai", "semi-urban"], ["India", "Karnataka", "Kalaburagi", "semi-urban"],
  ["India", "Uttar Pradesh", "Bundelkhand", "rural"], ["India", "Kerala", "Wayanad district", "rural"],
  ["India", "Gujarat", "Kutch district", "rural"], ["India", "West Bengal", "Darjeeling district", "rural"],
  ["Bangladesh", "Dhaka Division", "Dhaka", "metro"], ["Nepal", "Bagmati", "Kathmandu", "urban"],
  ["Sri Lanka", "Western Province", "Colombo", "urban"], ["Pakistan", "Punjab", "Lahore", "metro"],
  ["Singapore", "Central Region", "Singapore", "metro"], ["United Arab Emirates", "Dubai", "Dubai", "metro"],
  ["United Kingdom", "England", "Manchester", "urban"], ["United States", "California", "Fresno", "urban"],
  ["Canada", "Ontario", "Toronto", "metro"], ["Germany", "Berlin", "Berlin", "metro"],
  ["Kenya", "Nairobi County", "Nairobi", "urban"], ["Nigeria", "Lagos", "Lagos", "metro"],
  ["Brazil", "Sao Paulo", "Campinas", "urban"], ["Australia", "Victoria", "Melbourne", "metro"],
];

const routes = [
  ["CBSE", "Science (PCM)", "English"], ["CBSE", "Science (PCB)", "Hindi"],
  ["CISCE/ICSE", "Humanities", "English"], ["State Board", "Commerce", "regional language"],
  ["State Board", "Vocational", "regional language"], ["NIOS", "Flexible secondary", "bilingual"],
  ["IB", "Diploma Programme", "English"], ["Cambridge", "A Levels", "English"],
  ["Polytechnic", "Technical diploma", "bilingual"], ["ITI", "Skilled trade", "regional language"],
  ["ISC", "Science", "English"], ["State Board", "Arts", "bilingual"],
];

const stages = [
  "grade-10-board-choice", "grade-10-subject-exploration", "grade-11-stream-choice",
  "grade-12-exam-preparation", "entrance-exam-decision", "diploma-or-degree",
  "college-course-selection", "college-transition", "skills-and-projects",
  "internship-search", "first-job-search", "early-career-pivot", "return-to-learning",
];

const careers = [
  ["software engineering", "technology"], ["nursing", "healthcare"], ["medicine", "healthcare"],
  ["civil engineering", "infrastructure"], ["chartered accountancy", "finance"], ["teaching", "education"],
  ["agricultural technology", "agriculture"], ["graphic design", "creative"], ["law", "legal"],
  ["electrician", "skilled-trades"], ["data analysis", "technology"], ["social work", "public-service"],
  ["hospitality management", "hospitality"], ["environmental science", "sustainability"],
  ["journalism", "media"], ["entrepreneurship", "business"], ["public administration", "public-service"],
  ["mechanical engineering", "manufacturing"], ["psychology", "healthcare"], ["animation", "creative"],
  ["cybersecurity", "technology"], ["sports management", "sports"], ["pharmacy", "healthcare"],
  ["renewable energy technician", "green-jobs"], ["supply chain operations", "operations"],
];

const accessProfiles = [
  ["stable-middle-income", "reliable", "none"], ["low-income", "shared-device", "none"],
  ["first-generation-learner", "mobile-only", "none"], ["scholarship-dependent", "limited-data", "none"],
  ["caregiver-responsibilities", "evening-only", "none"], ["working-student", "public-wifi", "none"],
  ["migrant-family", "mobile-only", "none"], ["remote-community", "intermittent", "none"],
  ["stable-middle-income", "reliable", "low-vision"], ["first-generation-learner", "shared-device", "hearing"],
  ["low-income", "limited-data", "mobility"], ["stable-middle-income", "reliable", "neurodivergent"],
  ["scholarship-dependent", "mobile-only", "chronic-illness"], ["family-business-household", "reliable", "none"],
];

const aiPatterns = [
  ["exploration", "compared career pathways and generated questions for counsellors", "confident hallucinations about eligibility"],
  ["learning", "translated difficult concepts and created a revision plan", "over-reliance weakened independent recall"],
  ["decision-support", "built a weighted shortlist while the student retained the final choice", "ranking bias hid a locally strong option"],
  ["application", "reviewed a draft statement without inventing achievements", "generic wording flattened the student's voice"],
  ["project-work", "debugged small examples and explained errors", "copying output obscured gaps in fundamentals"],
  ["interview-practice", "simulated interviews and suggested reflection prompts", "feedback did not understand local language cues"],
  ["accessibility", "converted notes into a more accessible format", "poor source material produced incomplete summaries"],
  ["not-used", "was deliberately not used; teachers, peers and primary sources guided the choice", "missing digital support increased research time"],
];

const pressures = [
  "family preference for a familiar profession", "the cost of relocating", "limited local subject availability",
  "competitive entrance tests", "language confidence", "pressure to earn quickly", "uncertain scholarship timing",
  "a mismatch between marks and curiosity", "caregiving time", "few visible role models",
];
const actions = [
  "interviewed two practitioners", "attended a public-college open day", "completed a low-cost trial project",
  "mapped fees, travel and scholarship deadlines", "asked an alumnus about daily work", "compared a degree with a diploma",
  "used a week-long job-shadowing opportunity", "formed a peer study circle", "spoke with a teacher and a family member separately",
  "tested interest through a community problem", "reviewed official eligibility rules", "created a portfolio from small assignments",
];
const outcomes = [
  ["progressing", "continued on the chosen route with a clearer next checkpoint"],
  ["pivoted", "changed direction after low-cost experimentation revealed a better fit"],
  ["paused", "paused formal study while preserving a route back through flexible learning"],
  ["employed", "secured an entry-level role and identified the next skills to build"],
  ["studying", "entered a course with a funding and support plan"],
  ["apprenticeship", "started paid work-based learning with a recognised credential path"],
  ["entrepreneurial", "began a small service pilot while maintaining a fallback study option"],
];
const lessons = [
  "Test a career through a small real task before committing years to it.",
  "A nearby affordable route can be a strong first step, not a smaller ambition.",
  "Official eligibility pages should verify every AI-generated claim.",
  "Separate the student's preference from family, peer and ranking pressure.",
  "The best plan includes money, travel, language and support—not only marks.",
  "A pivot is evidence of learning when it is based on reflection and experiments.",
  "Use AI to widen questions; keep consequential choices and accountability human.",
  "Ask what the day-to-day work feels like, not only what the job title promises.",
  "Build more than one route to the same underlying goal.",
  "Document constraints early so support and accommodations are part of the plan.",
];

function pick(list, seed, offset = 0) {
  return list[(seed * (offset * 2 + 3) + offset * offset + 7) % list.length];
}

function makeStory(i) {
  const n = i + 1;
  const location = i < 400 ? locations[i % 36] : locations[36 + (i % 14)];
  const route = pick(routes, n, 1);
  const stage = pick(stages, n, 2);
  const career = pick(careers, n, 3);
  const access = pick(accessProfiles, n, 4);
  const ai = pick(aiPatterns, n, 5);
  const pressure = pick(pressures, n, 6);
  const actionA = pick(actions, n, 7);
  const actionBCandidate = pick(actions, n, 11);
  const actionB = actionBCandidate === actionA ? actions[(actions.indexOf(actionBCandidate) + 1) % actions.length] : actionBCandidate;
  const outcome = pick(outcomes, n, 8);
  const lesson = pick(lessons, n, 9);
  const storyType = n % 4 === 0 ? "composite" : "simulated";
  const perspective = ["student", "parent-and-student", "mentor-observer", "first-generation-student", "career-switcher"][n % 5];
  const title = `${location[2]} route ${String(n).padStart(3, "0")}: ${stage.replaceAll("-", " ")} toward ${career[0]}`;
  const narrative = `This ${storyType} ${perspective} account follows a learner in ${location[2]}, ${location[0]}, at the ${stage.replaceAll("-", " ")} stage. Studying through ${route[0]} and ${route[1]}, the learner was drawn to ${career[0]} but had to weigh ${pressure}. The learner ${actionA} and ${actionB}. AI ${ai[1]}; however, ${ai[2]} was treated as a warning. Consequential information was checked with official material and people with direct experience. The result: ${outcome[1]}.`;
  return {
    id: `CXP-${String(n).padStart(4, "0")}`,
    storyType,
    disclosure: `This is an original ${storyType} scenario created for product exploration. It does not describe a real person and does not claim an external source.`,
    title,
    perspective,
    profile: {
      country: location[0], region: location[1], locality: location[2], setting: location[3],
      socioeconomicContext: access[0], digitalAccess: access[1], accessibilityPerspective: access[2],
      educationBoardOrRoute: route[0], streamOrProgramme: route[1], learningLanguage: route[2],
    },
    journey: {
      stage, targetCareer: career[0], careerCluster: career[1],
      majorDecision: `Whether to continue toward ${career[0]} while accounting for ${pressure}.`,
      decisionInputs: ["personal interest", pressure, "affordability and access", "evidence from a small experiment"],
      actions: [actionA, actionB], tradeoffs: [pressure, `time invested in ${actionA}`, "keeping a fallback route open"],
      outcomeStatus: outcome[0], outcome: outcome[1], lesson,
    },
    aiJourney: {
      usageStage: ai[0], role: "knowledge-source-and-thinking-aid", humanRole: "decision-maker-and-accountable-verifier",
      usage: ai[1], challenge: ai[2], verification: "Checked high-impact claims against official eligibility information and a trusted human.",
      reflectionQuestions: [
        "Which part of this recommendation is evidence, and which part is an assumption?",
        "Whose goals and constraints are missing from the AI response?",
        "What must a human verify before acting?",
      ],
    },
    narrative,
    tags: [
      location[0].toLowerCase().replaceAll(" ", "-"), location[3], route[0].toLowerCase().replaceAll(/[^a-z0-9]+/g, "-"),
      stage, career[1], access[0], access[1], access[2], `ai-${ai[0]}`, outcome[0], perspective,
    ],
    metrics: {
      journeyStageIndex: stages.indexOf(stage), decisionComplexity: 2 + (n % 4), aiReliance: ai[0] === "not-used" ? 0 : 1 + (n % 4),
      financialConstraint: ["low-income", "scholarship-dependent"].includes(access[0]) ? 4 : 1 + (n % 3),
      locationFlexibility: location[3] === "rural" ? 1 + (n % 2) : 2 + (n % 4),
      supportTouchpoints: 1 + (n % 5), outcomeConfidence: 2 + ((n * 3) % 4),
    },
  };
}

const stories = Array.from({ length: COUNT }, (_, i) => makeStory(i));

function assertCorpus(items) {
  const ids = new Set(items.map((item) => item.id));
  const titles = new Set(items.map((item) => item.title));
  const narratives = new Set(items.map((item) => item.narrative));
  if (items.length !== COUNT || ids.size !== COUNT || titles.size !== COUNT || narratives.size !== COUNT) {
    throw new Error("Corpus must contain exactly 500 unique IDs, titles and narratives.");
  }
  if (items.some((item) => !["simulated", "composite"].includes(item.storyType))) {
    throw new Error("Every story must be labelled simulated or composite.");
  }
  if (items.filter((item) => item.profile.country === "India").length !== 400) {
    throw new Error("The corpus must contain exactly 400 India-based journeys.");
  }
  if (new Set(items.map((item) => item.profile.country)).size < 10) {
    throw new Error("The corpus needs broad international perspective coverage.");
  }
}

assertCorpus(stories);
const corpus = {
  schemaVersion: "1.0.0",
  generatedAt: GENERATED_AT,
  generator: "scripts/generate-experiences.mjs",
  licenseNote: "Original fictional seed data; simulated/composite use only.",
  ethicsNote: "No entry represents a real person. Do not relabel entries as testimonials or attach real identities without informed consent.",
  storyCount: stories.length,
  coverage: {
    indiaStories: stories.filter((s) => s.profile.country === "India").length,
    internationalStories: stories.filter((s) => s.profile.country !== "India").length,
    countries: [...new Set(stories.map((s) => s.profile.country))].sort(),
    stages: [...new Set(stories.map((s) => s.journey.stage))].sort(),
    storyTypes: { simulated: stories.filter((s) => s.storyType === "simulated").length, composite: stories.filter((s) => s.storyType === "composite").length },
  },
  stories,
};

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
const js = `// Generated by scripts/generate-experiences.mjs. Do not hand-edit.\n` +
  `// Every entry is fictional and explicitly labelled simulated or composite.\n\n` +
  `export const experienceCorpusMetadata = ${JSON.stringify({ ...corpus, stories: undefined }, null, 2).replace(/,\n  "stories": undefined/, "")};\n\n` +
  `export const experienceStories = ${JSON.stringify(stories, null, 2)};\n\n` +
  `export default experienceStories;\n`;
fs.writeFileSync(OUTPUT, js, "utf8");
console.log(`Generated ${stories.length} stories at ${OUTPUT}`);
