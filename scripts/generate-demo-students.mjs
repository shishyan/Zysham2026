#!/usr/bin/env node

/*
 * Deterministically creates generated-name context profiles for Zysham.
 *
 * These records are interface and discussion seed data—not people, surveys,
 * testimonials, or statistical claims. They deliberately use numbered aliases
 * instead of names. Never relabel them as real users or attach real identities.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "data", "demo-students.js");
const GENERATED_AT = "2026-08-08T00:00:00.000Z";

const indianFirstNames = [
  "Aarav", "Aditi", "Aditya", "Akshara", "Aman", "Ananya", "Aniket", "Anjali", "Arjun", "Avani",
  "Bhavna", "Charan", "Devika", "Dhruv", "Diya", "Farhan", "Gauri", "Harsh", "Ishaan", "Ishita",
  "Jatin", "Kavya", "Kiran", "Lakshmi", "Manav", "Meera", "Nandini", "Neel", "Nisha", "Omkar",
  "Pallavi", "Pranav", "Priya", "Rahul", "Rhea", "Rohan", "Saanvi", "Sahil", "Samira", "Sanjay",
  "Shreya", "Siddharth", "Sneha", "Tanvi", "Tara", "Varun", "Vedika", "Vihaan", "Yash", "Zoya",
];
const indianFamilyNames = ["Das", "Devi", "Gupta", "Iyer", "Jain", "Joshi", "Khan", "Kumar", "Mehta", "Mishra", "Nair", "Patel", "Rao", "Reddy", "Roy", "Shah", "Sharma", "Singh"];
const tamilFirstNames = ["Aadhavan", "Abinaya", "Akilan", "Ananya", "Arul", "Deepika", "Dharani", "Harini", "Iniya", "Karthik", "Kavin", "Keerthana", "Madhavan", "Malar", "Meena", "Naveen", "Nila", "Pranav", "Roshini", "Sanjay", "Surya", "Swetha", "Tharun", "Vignesh", "Yazhini"];
const internationalFirstNames = ["Aiko", "Amara", "Ana", "Ari", "Camila", "Daniel", "Elena", "Ethan", "Fatima", "Hana", "Ibrahim", "Isla", "Jae", "Jonah", "Kenji", "Leila", "Lucas", "Maya", "Nadia", "Noah", "Olivia", "Rafael", "Sara", "Sofia", "Tariq", "Theo", "Yara", "Yuki", "Zane", "Zuri", "Chloe", "Diego", "Emma", "Felix", "Grace", "Hugo", "Lina", "Mateo", "Nora", "Sam"];
const internationalFamilyNames = ["Lee", "Martin", "Garcia", "Okafor", "Silva"];

function generatedAlias(index, region, international) {
  if (region === "Tamil Nadu") return `${tamilFirstNames[index % tamilFirstNames.length]} ${String.fromCharCode(65 + (index % 26))}.`;
  if (international) {
    const relative = index - 900;
    return `${internationalFirstNames[relative % internationalFirstNames.length]} ${internationalFamilyNames[Math.floor(relative / internationalFirstNames.length)]}`;
  }
  return `${indianFirstNames[index % indianFirstNames.length]} ${indianFamilyNames[Math.floor(index / indianFirstNames.length)]}`;
}

// Twenty-five profiles per region gives exact, even coverage of all 36
// Indian states and union territories (900 profiles).
const indianRegions = [
  ["Andhra Pradesh", "Telugu", "Vijayawada", "State Board"],
  ["Arunachal Pradesh", "English", "Itanagar", "State Board"],
  ["Assam", "Assamese", "Jorhat", "State Board"],
  ["Bihar", "Hindi", "Gaya", "State Board"],
  ["Chhattisgarh", "Hindi", "Raipur", "State Board"],
  ["Goa", "Konkani", "Margao", "State Board"],
  ["Gujarat", "Gujarati", "Vadodara", "State Board"],
  ["Haryana", "Hindi", "Hisar", "State Board"],
  ["Himachal Pradesh", "Hindi", "Mandi", "State Board"],
  ["Jharkhand", "Hindi", "Ranchi", "State Board"],
  ["Karnataka", "Kannada", "Mysuru", "State Board"],
  ["Kerala", "Malayalam", "Kozhikode", "State Board"],
  ["Madhya Pradesh", "Hindi", "Indore", "State Board"],
  ["Maharashtra", "Marathi", "Pune", "State Board"],
  ["Manipur", "Meitei", "Imphal", "State Board"],
  ["Meghalaya", "English", "Shillong", "State Board"],
  ["Mizoram", "Mizo", "Aizawl", "State Board"],
  ["Nagaland", "English", "Kohima", "State Board"],
  ["Odisha", "Odia", "Bhubaneswar", "State Board"],
  ["Punjab", "Punjabi", "Ludhiana", "State Board"],
  ["Rajasthan", "Hindi", "Jaipur", "State Board"],
  ["Sikkim", "Nepali", "Gangtok", "State Board"],
  ["Tamil Nadu", "Tamil", "Madurai", "State Board"],
  ["Telangana", "Telugu", "Warangal", "State Board"],
  ["Tripura", "Bengali", "Agartala", "State Board"],
  ["Uttar Pradesh", "Hindi", "Lucknow", "State Board"],
  ["Uttarakhand", "Hindi", "Dehradun", "State Board"],
  ["West Bengal", "Bengali", "Kolkata", "State Board"],
  ["Andaman and Nicobar Islands", "Hindi", "Port Blair", "State Board"],
  ["Chandigarh", "Hindi", "Chandigarh", "CBSE"],
  ["Dadra and Nagar Haveli and Daman and Diu", "Gujarati", "Daman", "State Board"],
  ["Delhi", "Hindi", "Delhi", "CBSE"],
  ["Jammu and Kashmir", "Urdu", "Srinagar", "State Board"],
  ["Ladakh", "Ladakhi", "Leh", "CBSE"],
  ["Lakshadweep", "Malayalam", "Kavaratti", "State Board"],
  ["Puducherry", "Tamil", "Puducherry", "State Board"],
];

// Five profiles per country gives 100 international perspectives. Curriculum
// labels are intentionally broad because systems and qualifications vary.
const internationalRegions = [
  ["Australia", "Victoria", "Melbourne", "Australian curriculum", "English"],
  ["Bangladesh", "Dhaka Division", "Dhaka", "National curriculum", "Bengali"],
  ["Brazil", "Sao Paulo", "Campinas", "National curriculum", "Portuguese"],
  ["Canada", "Ontario", "Toronto", "Provincial curriculum", "English"],
  ["France", "Ile-de-France", "Paris", "Baccalaureat pathway", "French"],
  ["Germany", "Berlin", "Berlin", "State secondary pathway", "German"],
  ["Indonesia", "West Java", "Bandung", "National curriculum", "Indonesian"],
  ["Japan", "Kansai", "Osaka", "National curriculum", "Japanese"],
  ["Kenya", "Nairobi County", "Nairobi", "Competency-based curriculum", "Swahili"],
  ["Nepal", "Bagmati", "Kathmandu", "National Examination Board", "Nepali"],
  ["New Zealand", "Auckland", "Auckland", "NCEA pathway", "English"],
  ["Nigeria", "Lagos State", "Lagos", "National secondary curriculum", "English"],
  ["Philippines", "Central Luzon", "Angeles", "K-12 curriculum", "Filipino"],
  ["Singapore", "Central Region", "Singapore", "Singapore-Cambridge pathway", "English"],
  ["South Africa", "Gauteng", "Johannesburg", "National Senior Certificate", "English"],
  ["South Korea", "Seoul", "Seoul", "National curriculum", "Korean"],
  ["Sri Lanka", "Western Province", "Colombo", "GCE pathway", "Sinhala"],
  ["United Arab Emirates", "Dubai", "Dubai", "International curriculum", "Arabic"],
  ["United Kingdom", "England", "Manchester", "GCSE/A level pathway", "English"],
  ["United States", "California", "Fresno", "State high-school curriculum", "English"],
];

const stages = [
  ["grade-9", "Exploring strengths before senior-secondary choices"],
  ["grade-10", "Choosing a board, subjects, and next learning environment"],
  ["grade-11", "Testing whether the selected stream fits"],
  ["grade-12", "Balancing final examinations with entrance decisions"],
  ["diploma", "Connecting applied training to a first role or degree"],
  ["undergraduate-early", "Choosing projects, communities, and foundational skills"],
  ["undergraduate-final", "Turning learning into evidence for work or further study"],
  ["gap-or-transition", "Using a planned transition period without losing momentum"],
  ["first-job-search", "Evaluating entry roles for learning, dignity, and fit"],
];

const streams = [
  "Science: mathematics", "Science: biology", "Commerce", "Humanities",
  "Arts and design", "Vocational studies", "Interdisciplinary", "Not chosen yet",
];

const fields = [
  ["software and data", ["coding", "mathematics", "building useful tools"]],
  ["health and allied care", ["biology", "patient communication", "community health"]],
  ["climate and environment", ["ecology", "field observation", "sustainable systems"]],
  ["design and media", ["visual storytelling", "writing", "user research"]],
  ["education", ["teaching", "languages", "learning design"]],
  ["law and public policy", ["civics", "debate", "evidence-based writing"]],
  ["finance and business", ["accounting", "entrepreneurship", "market research"]],
  ["engineering and manufacturing", ["mechanics", "making", "physics"]],
  ["agriculture and food systems", ["plant science", "local enterprise", "water systems"]],
  ["skilled trades", ["repair", "electrical systems", "hands-on learning"]],
  ["hospitality and tourism", ["languages", "service design", "local culture"]],
  ["psychology and social care", ["active listening", "behaviour", "community service"]],
  ["sports and wellbeing", ["fitness", "teamwork", "performance analysis"]],
  ["research and academia", ["experiments", "reading", "long-form inquiry"]],
];

const defaultGeography = ["urban", "semi-urban", "rural"];
const metroRegions = new Set(["Delhi", "Chandigarh", "Singapore", "Dubai", "Seoul"]);
const mountainRegions = new Set([
  "Arunachal Pradesh", "Himachal Pradesh", "Jammu and Kashmir", "Ladakh", "Sikkim",
  "Uttarakhand", "Meghalaya", "Mizoram", "Nagaland", "Nepal", "Japan",
]);
const coastalRegions = new Set([
  "Andhra Pradesh", "Goa", "Gujarat", "Karnataka", "Kerala", "Maharashtra", "Odisha",
  "Tamil Nadu", "West Bengal", "Puducherry", "Australia", "Bangladesh", "Brazil",
  "Indonesia", "Kenya", "New Zealand", "Nigeria", "Philippines", "Singapore",
  "South Africa", "South Korea", "Sri Lanka", "United Arab Emirates", "United Kingdom",
  "United States",
]);
const islandRegions = new Set(["Andaman and Nicobar Islands", "Lakshadweep"]);
const remoteRegions = new Set([
  "Arunachal Pradesh", "Assam", "Chhattisgarh", "Himachal Pradesh", "Jammu and Kashmir",
  "Ladakh", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura",
  "Andaman and Nicobar Islands", "Lakshadweep",
]);
const schoolSettings = ["government", "government-aided", "private low-fee", "private", "residential", "open-schooling", "community-supported"];
const economicContexts = [
  "budget-constrained household", "income varies seasonally", "stable modest-income household",
  "financially secure household", "scholarship-dependent education", "student also earns part-time",
];
const digitalAccess = [
  ["personal-laptop", "reliable", "Can learn online at home most days"],
  ["shared-computer", "scheduled", "Coordinates access with family members"],
  ["smartphone-only", "mobile-data", "Needs low-bandwidth and mobile-friendly resources"],
  ["school-or-library", "limited-hours", "Uses a shared learning space for larger tasks"],
  ["personal-phone-and-computer", "reliable", "Has regular access but still checks privacy settings"],
  ["intermittent-device", "unreliable", "Downloads material when connectivity is available"],
];
const accessibility = [
  ["none-disclosed", []],
  ["low-vision", ["screen magnification", "high contrast", "structured documents"]],
  ["hearing-access", ["captions", "transcripts", "written instructions"]],
  ["mobility-access", ["accessible transport", "step-free learning spaces", "remote participation"]],
  ["neurodivergent-learning", ["predictable structure", "quiet work time", "chunked instructions"]],
  ["chronic-health-management", ["flexible deadlines", "recorded lessons", "rest planning"]],
  ["language-access", ["bilingual explanations", "plain language", "visual examples"]],
];
const responsibilities = [
  "none beyond study", "helps with household work", "supports a family enterprise",
  "cares for a younger sibling", "commutes more than an hour", "works occasional paid shifts",
  "participates in community responsibilities",
];
const supports = [
  "family encouragement", "a trusted teacher", "peer study group", "school counsellor",
  "community mentor", "online learning community", "alumni contact", "no consistent mentor yet",
];
const aiLevels = ["not-yet-using", "occasional", "guided", "regular-critical-use", "project-based"];
const aiPractices = [
  "asks for concepts in simpler language", "generates practice questions and checks answers independently",
  "compares course and career routes", "brainstorms project directions before making an original plan",
  "uses translation as a bridge, then checks meaning", "reviews writing while keeping authorship visible",
  "tests small code examples and reads the documentation", "organises questions before speaking with a human mentor",
];
const verificationHabits = [
  "checks important claims against two reliable sources", "asks a teacher or practitioner before a major choice",
  "follows links to primary sources and records dates", "treats generated answers as hypotheses to test",
  "has not formed a consistent verification habit yet",
];
const aiConcerns = [
  "confident-sounding misinformation", "privacy of personal and family data", "bias in recommendations",
  "losing practice by outsourcing difficult work", "unclear authorship and academic integrity",
  "unequal access to capable tools", "changes in entry-level work",
];
const goals = [
  "build a small portfolio before choosing a specialisation",
  "compare affordable local options with scholarships farther away",
  "speak with two practitioners before committing to a course",
  "find a route that combines meaningful work with financial stability",
  "strengthen foundational skills before entrance preparation",
  "test the field through a project, volunteering, or job shadowing",
  "identify an accessible learning environment and support plan",
];

function mulberry32(seed) {
  return function random() {
    let value = seed += 0x6D2B79F5;
    value = Math.imul(value ^ value >>> 15, value | 1);
    value ^= value + Math.imul(value ^ value >>> 7, value | 61);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

function choose(list, random) {
  return list[Math.floor(random() * list.length)];
}

function chooseMany(list, count, random) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, count);
}

function plausibleGeographies(country, region) {
  const result = [...defaultGeography];
  if (metroRegions.has(region)) result.push("metro");
  if (mountainRegions.has(region) || mountainRegions.has(country)) result.push("mountain");
  if (coastalRegions.has(region) || coastalRegions.has(country)) result.push("coastal");
  if (islandRegions.has(region)) result.push("island");
  if (remoteRegions.has(region)) result.push("remote");
  return [...new Set(result)];
}

function makeProfile(index, location, international = false) {
  const random = mulberry32(20260808 + index * 7919);
  const id = `demo-student-${String(index + 1).padStart(4, "0")}`;
  const [stage, decision] = choose(stages, random);
  const [field, fieldInterests] = choose(fields, random);
  const [device, connectivity, accessNote] = choose(digitalAccess, random);
  const [accessNeed, accommodations] = choose(accessibility, random);
  const pronouns = choose(["she/her", "he/him", "they/them"], random);
  const ageBand = stage.startsWith("grade-") ? "14–18" : stage === "first-job-search" ? "20–24" : "17–23";

  let country;
  let region;
  let locality;
  let curriculum;
  let regionalLanguage;
  if (international) {
    [country, region, locality, curriculum, regionalLanguage] = location;
  } else {
    [region, regionalLanguage, locality, curriculum] = location;
    country = "India";
    // Retain the region's common board while representing national/open options.
    curriculum = choose([curriculum, curriculum, "CBSE", "CISCE", "NIOS"], random);
  }

  const locationType = choose(plausibleGeographies(country, region), random);
  const languagePool = [...new Set([regionalLanguage, "English", ...(country === "India" ? ["Hindi"] : [])])];
  const selectedLanguages = chooseMany(languagePool, Math.min(languagePool.length, random() > 0.45 ? 2 : 1), random);
  const chosenSupports = chooseMany(supports, random() > 0.75 ? 2 : 1, random);
  const selectedPractices = chooseMany(aiPractices, 2, random);
  const confidence = 1 + Math.floor(random() * 5);

  return {
    id,
    alias: generatedAlias(index, region, international),
    fictional: true,
    disclosure: "Generated context profile for interface testing; not a real person, account, or testimonial.",
    profile: {
      role: "student",
      pronouns,
      ageBand,
      location: {
        country,
        region,
        locality: ["metro", "urban"].includes(locationType) ? locality : `${region} community; ${locality} is the nearest listed hub`,
        geography: locationType,
      },
      languages: selectedLanguages,
      education: {
        stage,
        curriculum,
        stream: choose(streams, random),
        schoolSetting: choose(schoolSettings, random),
      },
    },
    context: {
      economic: choose(economicContexts, random),
      firstGenerationLearner: random() < 0.31,
      responsibility: choose(responsibilities, random),
      digitalAccess: { device, connectivity, note: accessNote },
      accessibility: { supportNeed: accessNeed, helpfulAccommodations: accommodations },
    },
    journey: {
      currentDecision: decision,
      interestArea: field,
      interests: chooseMany(fieldInterests, 2, random),
      goal: choose(goals, random),
      confidence: { score: confidence, scale: 5 },
      preferredRoute: choose(["degree", "diploma", "apprenticeship", "vocational certificate", "work-and-study", "still comparing"], random),
      mobility: choose(["local only", "within region", "within country", "open to international study", "undecided"], random),
      supportNetwork: chosenSupports,
    },
    aiPractice: {
      usageLevel: choose(aiLevels, random),
      uses: selectedPractices,
      verificationHabit: choose(verificationHabits, random),
      boundary: "Keeps the consequential education or career decision with the student and trusted humans.",
      primaryConcern: choose(aiConcerns, random),
    },
    community: {
      perspectiveTags: [stage, field, choose(["seeking-options", "project-learning", "family-conversation", "funding", "accessibility", "first-role"], random)],
      wantsToDiscuss: choose([
        "how to test a career before paying for a course",
        "how families and students can compare routes together",
        "how to recognise trustworthy course and job information",
        "how to build evidence of skill with limited resources",
        "how to use AI without giving away authorship or judgement",
        "how peers manage uncertainty after a major choice",
      ], random),
    },
  };
}

const demoStudents = [];
for (const region of indianRegions) {
  for (let i = 0; i < 25; i += 1) demoStudents.push(makeProfile(demoStudents.length, region));
}
for (const region of internationalRegions) {
  for (let i = 0; i < 5; i += 1) demoStudents.push(makeProfile(demoStudents.length, region, true));
}

const ids = new Set(demoStudents.map((student) => student.id));
const aliases = new Set(demoStudents.map((student) => student.alias));
const indiaRegionsCovered = new Set(demoStudents.filter((student) => student.profile.location.country === "India").map((student) => student.profile.location.region));
const countriesCovered = new Set(demoStudents.map((student) => student.profile.location.country));

if (demoStudents.length !== 1000) throw new Error(`Expected 1000 profiles, got ${demoStudents.length}`);
if (ids.size !== 1000 || aliases.size !== 1000) throw new Error("Profile identifiers and aliases must be unique");
if (indiaRegionsCovered.size !== 36) throw new Error(`Expected all 36 Indian states/UTs, got ${indiaRegionsCovered.size}`);
if (countriesCovered.size !== 21) throw new Error(`Expected India plus 20 countries, got ${countriesCovered.size}`);
if (demoStudents.some((student) => !student.fictional || !student.disclosure)) throw new Error("Every profile must disclose fictional status");

const metadata = {
  schemaVersion: "1.0.0",
  generatedAt: GENERATED_AT,
  generator: "scripts/generate-demo-students.mjs",
  datasetType: "fictional-demo-profiles",
  profileCount: demoStudents.length,
  disclosure: "All profiles are fictional composites generated for product demonstration. No record represents a real person, user, survey respondent, or testimonial.",
  safetyNote: "Do not use this synthetic corpus to infer population statistics, train high-stakes decision systems, or impersonate real students.",
  coverage: {
    indiaProfiles: 900,
    internationalProfiles: 100,
    indianStatesAndUnionTerritories: [...indiaRegionsCovered].sort(),
    countries: [...countriesCovered].sort(),
  },
};

const output = `// Generated by scripts/generate-demo-students.mjs. Do not hand-edit.\n// All aliases and profiles are fictional; none represents a real person.\n\nexport const demoStudentMetadata = ${JSON.stringify(metadata)};\n\nexport const demoStudents = ${JSON.stringify(demoStudents)};\n`;
fs.writeFileSync(OUTPUT, output, "utf8");
console.log(`Generated ${demoStudents.length} fictional profiles at ${OUTPUT}`);
