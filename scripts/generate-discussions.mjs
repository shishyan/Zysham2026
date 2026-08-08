#!/usr/bin/env node

/* Deterministic Tamil Nadu-first starter forum corpus. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(directory, '..', 'data', 'discussions.js');
const generatedAt = '2026-08-08T00:00:00.000Z';

const places = [
  ['Chennai', 'Tamil Nadu', 'metro', 'a long commute and coaching traffic'],
  ['Coimbatore', 'Tamil Nadu', 'city', 'engineering colleges everywhere, but very different course quality'],
  ['Madurai', 'Tamil Nadu', 'city', 'family close by and pressure to choose a familiar profession'],
  ['Tiruchirappalli', 'Tamil Nadu', 'city', 'strong local colleges and the temptation to choose only by reputation'],
  ['Salem', 'Tamil Nadu', 'city', 'cost and travel deciding more than brochures admit'],
  ['Tirunelveli', 'Tamil Nadu', 'city', 'limited in-person exposure to newer careers'],
  ['Erode', 'Tamil Nadu', 'city', 'a family business that is both an opportunity and an expectation'],
  ['Vellore', 'Tamil Nadu', 'city', 'medical and engineering expectations in the same family'],
  ['Thoothukudi', 'Tamil Nadu', 'coastal city', 'industry nearby but incomplete information about the actual jobs'],
  ['Thanjavur', 'Tamil Nadu', 'city', 'wanting meaningful work without moving too far from home'],
  ['Tiruppur', 'Tamil Nadu', 'industrial city', 'early earning options competing with a longer degree'],
  ['Hosur', 'Tamil Nadu', 'industrial city', 'manufacturing opportunities and a cross-state commute'],
  ['Nagercoil', 'Tamil Nadu', 'city', 'good local support but relatives comparing colleges constantly'],
  ['Puducherry', 'Tamil Nadu region', 'coastal city', 'multiple boards and nearby-state admission questions'],
  ['Kanchipuram', 'Tamil Nadu', 'district town', 'daily travel, course availability and family care responsibilities'],
  ['Sivakasi', 'Tamil Nadu', 'town', 'a strong local industry that may not match personal interests'],
  ['Dindigul', 'Tamil Nadu', 'town', 'budget limits and uncertainty about leaving home'],
  ['Ramanathapuram', 'Tamil Nadu', 'district town', 'patchy access to mentors and expensive travel for entrance exams'],
  ['Nilgiris', 'Tamil Nadu', 'hill district', 'distance, connectivity and seasonal travel affecting every option'],
];

const dilemmas = [
  ['subjects-and-streams','grade-10-subjects','I cannot make myself open the Biology book anymore','I feel guilty saying this because my marks are fine, but the clinical path everyone mentions makes me tense. Blood is a hard no for me.','How did you separate one difficult chapter from a genuine aversion to the work?'],
  ['subjects-and-streams','grade-11-stream','I chose Computer Science and now I dread every practical','I liked the idea of tech more than the hours of debugging. I have not told my parents because they paid extra for this group.','What small test would tell me whether I dislike coding or only the way I am learning it?'],
  ['family-pressure','grade-10-context','My family has been in this profession for three generations','There is pride, contacts and a ready-made path. There is also a quiet fear that saying no will look ungrateful.','Has anyone tested a family legacy fairly without either obeying it or rejecting it on emotion?'],
  ['school-and-board','grade-10-context','We may change schools for one subject combination','The new school looks stronger on paper, but the commute would take nearly two hours every day. I keep wondering if I will lose more energy than I gain.','What did you check beyond board name and advertised results?'],
  ['exams-and-admissions','grade-12-decision','I am tired of collecting entrance exams like insurance policies','Every new application is called one more option. For me it is another fee, trip and week of anxiety.','How did your family decide what was enough?'],
  ['college-choice','college-selection','The famous college does not offer the specialisation I keep reading about','Everyone reacts to the college name. I am the only one staring at the actual syllabus and feeling unsure.','Would you choose brand reach or a course that fits the work you want to try?'],
  ['college-choice','college-transition','I came home after the first month and said I had made a mistake','Nothing dramatic happened. I just feel flat in every class and embarrassed because the admission was celebrated by everyone.','How long should I adapt before treating this as evidence?'],
  ['skills-and-portfolio','college-skills','My project looks polished, but I do not feel it is mine','AI helped with code and writing until I could no longer explain where my own thinking started. That scares me before interviews.','How would you rebuild ownership without throwing everything away?'],
  ['projects','project-selection','Our guide wants a safe final-year project; I want a real problem','I understand the risk of failing late in college. I also do not want another project that exists only for marks.','How did you negotiate scope, proof and ambition with a guide?'],
  ['internships','internship-search','The internship offer sounds impressive and says almost nothing','No named mentor, no clear tasks, and they want an answer tonight. My friends say I am overthinking a rare chance.','Which questions would make you accept or walk away?'],
  ['campus-placement','employment','I got a campus offer and felt relief, not happiness','My family is celebrating the salary. The role is mostly work I had already ruled out, and I am afraid rejecting it will look irresponsible.','How do you compare security with a poor daily fit?'],
  ['campus-placement','employment','I froze in the interview after preparing for months','I knew the answer later. In the room my mind went blank, and now I am ashamed to face my placement group.','What helped you recover without pretending it did not hurt?'],
  ['first-job','early-career','Six months into my first job, I am learning but disappearing','The team is decent and the pay matters at home. Still, every week is screen, sleep, repeat.','How do you improve a role before deciding to leave it?'],
  ['career-change','early-career','I keep daydreaming about a completely different field','I cannot tell whether this is real curiosity or just escape from a bad manager. I do not want to blow up a stable life.','What reversible experiment gave you an honest answer?'],
  ['money-and-family','all-stages','I would choose family time over a promotion, and people call that low ambition','I do care about good work. I just do not want every success to require moving cities or being unavailable at home.','How do you find roles where this priority is respected?'],
  ['money-and-family','all-stages','I want the higher salary even though the work does not excite me','There are loans and younger siblings. Advice about following passion feels written for another family.','How do you protect future choice while choosing money now?'],
  ['vocational-pathways','diploma-or-apprenticeship','I want the diploma route; my relatives hear failure','I learn faster by making and repairing things. The shame around not doing a degree is becoming harder than the decision itself.','What evidence helped your family see the route differently?'],
  ['accessibility','college-transition','I am exhausted from asking every institution about accessibility','The brochures all say inclusive. Getting a clear answer about classrooms, hostel and exams takes five calls.','What proof would you request before paying a deposit?'],
  ['language-and-belonging','college-transition','I know the answer in Tamil and lose confidence saying it in English','My classmates sound fluent, so I stay quiet even when I understand the concept. It is starting to affect how teachers see me.','What actually helped you bridge language without erasing yourself?'],
  ['ai-literacy','all-stages','AI gave me a confident eligibility answer that was wrong','I almost planned around it. The official notice had one line the summary completely missed.','What verification habit do you use for admissions and scholarships?'],
  ['ai-literacy','college-skills','I think AI is making me look capable faster than I am becoming capable','Assignments are quicker, but without the tool I hesitate on basic steps. I can feel the learning debt growing.','How do you decide what must still be practised unaided?'],
  ['wellbeing','all-stages','I am not lazy; I am just tired of being evaluated','Marks, rank, entrance, internships, placements—every month seems to decide my life again.','How did you create breathing room without abandoning your plan?'],
  ['parent-perspective','all-stages','My child stops talking when I ask about careers','I thought I was showing concern. I now realise every conversation became a status check.','What questions helped parents reopen trust?'],
  ['entrepreneurship','early-career','The family business is available, but I want experience outside first','My parents hear rejection. I see a chance to return with skills and a clearer choice.','How would you make a time-bound plan that respects both sides?'],
  ['company-research','employment','The company brand is strong; the actual role is vague','The offer letter has a title, but nobody will explain the team, shifts or location after training.','What company evidence matters before joining?'],
  ['location','college-selection','A better-ranked option means leaving the support system that keeps me steady','People compare institutions as if location has no emotional or financial cost. For me it changes everything.','How did you price distance honestly without letting fear decide?'],
  ['research','all-stages','Every ranking gives me a different answer','One list rewards research, another placements, another popularity. I am overwhelmed and suspicious of all of them now.','How do you turn rankings into questions instead of conclusions?'],
  ['community','all-stages','I need advice, but I do not want another stranger telling me what to do','I want to hear what happened to real people, including mistakes and regret, without being handed a verdict.','What makes a reply genuinely useful to you?'],
];

const names = ['Kavin','Nila','Arun','Harini','Vignesh','Meena','Surya','Deepa','Ajay','Roshini','Pranav','Yazhini','Karthik','Malar','Dinesh','Keerthi','Sanjay','Aishwarya','Naveen','Janani','Ashwin','Divya','Madhan','Gayathri','Ragul','Swetha','Hari','Anu','Bala','Thara','Mithun','Pavithra'];
const roles = ['student','student','student','parent','college student','final-year student','early-career graduate'];
const replyStarts = [
  'Honestly, I would not rush this.', 'I went through something close to this last year.', 'The part that stayed with me is the guilt.',
  'A small thing helped me more than another advice session.', 'From a parent side, this is hard to hear but important.',
  'I wish someone had told me this before I chose.', 'Please do not let one bad week make the whole decision.',
  'Your question is more reasonable than people are making it sound.', 'I can hear how tired you are.',
];
const replyActions = [
  'Write down what happens on an ordinary day, not the best-case brochure version. The pattern becomes clearer after two or three weeks.',
  'Ask one person doing the actual work and one person who left it. Their disagreement is often more useful than a neat answer.',
  'Separate the family constraint from the student preference on paper. Both are real, but they should not quietly become the same thing.',
  'Try the smallest version you can complete in a weekend, then notice whether you want to return after the frustrating part.',
  'Check the changing rule on the official page and save the date. We lost time once because an old screenshot kept circulating in our group.',
  'Give yourself an alternate route before saying no. That changed our conversation from panic to an actual choice.',
  'Tell one trusted person the unpolished version. I kept repeating a respectable answer until I could not hear my own reason anymore.',
  'Compare time, money, commute, health and daily tasks. Prestige kept becoming less important when we made those costs visible.',
  'You are allowed to be disappointed and still make a careful next move. Recovery is part of the plan, not evidence that you failed.',
];

const sensitiveCategories = new Set(['wellbeing', 'family-pressure', 'money-and-family', 'subjects-and-streams', 'campus-placement', 'career-change', 'accessibility', 'language-and-belonging']);
const sensitiveReplies = [
  'I hid my exhaustion because everyone around me was calling it a discipline problem. The first useful conversation began when I described sleep, concentration and appetite instead of arguing about whether burnout was real. A counsellor helped me make a recovery plan before another exam plan.',
  'Please do not make a permanent decision on the night the result arrives. Eat, sleep, tell one safe person what you are actually thinking, and wait until the shame wave settles. A rank can close one route; it does not close your working life.',
  'My parents sounded controlling, but underneath it was fear about money and an uncertain future. I asked them to name the exact fear. Once it was “we cannot fund another full year,” we could compare a partial drop, a nearby college, and a capped preparation budget instead of fighting about ambition.',
  'I changed direction after two attempts. The worst part was not the new course; it was answering relatives. We agreed on one boring sentence and stopped defending the decision to everyone. That saved energy for actually rebuilding.',
  'One caution from someone who took a drop: wanting another chance is not yet a plan. I would need a post-mortem of the last attempt, a different daily system, mock evidence, a stop date, and an acceptable college option before saying yes again.',
  'I accepted the campus offer because my family needed the income. I did not call it my dream job. I treated it as a twelve-month bridge, protected two evenings for a portfolio, and reviewed the plan every three months. Choosing security now does not mean surrendering every later choice.',
  'When someone says “just follow your passion,” I switch off. What helped me was a three-column page: what I cannot tolerate, what I can become good at, and what can support my responsibilities. The overlap was less romantic but much more usable.',
  'I am a parent, and I regret turning every dinner into a progress report. The apology that worked was specific: “I have been measuring you when you needed me to listen.” We now ask permission before discussing exams and keep one evening completely career-free.',
  'Fluency made other students sound more knowledgeable than they were. I began preparing one question before class and saying it even if the English was imperfect. A friend corrected language after class, never in front of everyone. Confidence followed participation, not the other way around.',
  'Ask accessibility questions in writing and request photos or a live video walkthrough. “We are inclusive” is not an answer. You need the route to classrooms, hostel bathroom dimensions, exam accommodations, who approves them, and what happens when the lift fails.',
  'I thought leaving the field would waste all the years already spent. That was sunk-cost fear. The years still gave me study discipline, domain knowledge and evidence about what does not fit. The next route did not begin from zero.',
  'There is a difference between being tired after hard work and feeling unable to function for weeks. If daily life is collapsing, involve a qualified mental-health professional or a trusted adult; career optimisation can wait. If you may hurt yourself or are in immediate danger, contact local emergency help now and stay with someone safe.',
];

function author(index) {
  return { userId: `TN-${String((index % 900) + 1).padStart(4, '0')}`, displayName: `${names[index % names.length]} ${String.fromCharCode(65 + (index % 18))}.`, role: roles[index % roles.length], country: 'India', region: 'Tamil Nadu', demo: true };
}

function dateFor(index, reply = 0) {
  const start = Date.UTC(2025, 0, 6, 7, 15);
  const timestamp = start + index * 23 * 60 * 60 * 1000 + reply * 5 * 60 * 60 * 1000 + ((index * 13 + reply * 7) % 60) * 60 * 1000;
  return new Date(timestamp).toISOString();
}

function makeTopic(index) {
  const place = places[Math.floor(index / dilemmas.length) % places.length];
  const dilemma = dilemmas[index % dilemmas.length];
  const id = `DISC-${String(index + 1).padStart(4, '0')}`;
  const emotionalLead = ['I have rewritten this post three times.', 'I cannot say this at home yet.', 'This may sound small, but it is keeping me awake.', 'I am posting because the confident answer I give people is not true.', 'I feel silly admitting how confused I am.', 'No one has done anything wrong, which somehow makes this harder.'][index % 6];
  const responses = Array.from({ length: 4 }, (_, replyIndex) => ({
    id: `${id}-R${replyIndex + 1}`, topicId: id, parentResponseId: replyIndex === 3 ? `${id}-R1` : null,
    author: author(index * 5 + replyIndex + 1),
    body: `${replyStarts[(index + replyIndex) % replyStarts.length]} ${replyActions[(index * 2 + replyIndex) % replyActions.length]}`,
    createdAt: dateFor(index, replyIndex + 1), edited: replyIndex === 2 && index % 11 === 0,
    helpfulVotes: 2 + ((index * 5 + replyIndex * 11) % 57), demo: true,
  }));
  if (sensitiveCategories.has(dilemma[0])) {
    Array.from({ length: 6 }, (_, offset) => offset + 4).forEach((replyIndex) => responses.push({
      id: `${id}-R${replyIndex + 1}`, topicId: id, parentResponseId: replyIndex % 3 === 0 ? `${id}-R${1 + (replyIndex % 3)}` : null,
      author: author(index * 11 + replyIndex + 1), body: sensitiveReplies[(index + replyIndex) % sensitiveReplies.length],
      createdAt: dateFor(index, replyIndex + 1), edited: replyIndex === 8 && index % 5 === 0,
      helpfulVotes: 4 + ((index * 7 + replyIndex * 13) % 89), demo: true,
    }));
  }
  return {
    id, demo: true, disclosure: 'Starter community conversation written for the Tamil Nadu rollout. Verify changing facts independently.',
    title: index < dilemmas.length ? dilemma[2] : `${dilemma[2]}; ${place[3]}`,
    body: `${emotionalLead} ${dilemma[3]} Here in ${place[0]}, ${place[3]}. ${dilemma[4]}`,
    category: dilemma[0], journeyStage: dilemma[1],
    perspectiveContext: { label: `${place[0]} perspective`, country: 'India', region: place[1], district: place[0], setting: place[2], language: index % 3 === 0 ? 'Tamil' : 'Tamil / English' },
    author: author(index * 5), tags: [dilemma[0], dilemma[1], place[0].toLowerCase().replaceAll(' ', '-'), 'tamil-nadu'],
    createdAt: dateFor(index), updatedAt: dateFor(index, 4), status: index % 23 === 0 ? 'resolved' : 'open', pinned: index < 3,
    moderation: { reviewStatus: 'starter-reviewed', safetyLabels: sensitiveCategories.has(dilemma[0]) ? ['sensitive-life-decision'] : [], factMode: 'personal-experience-with-source-checks', professionalAdvice: false },
    metrics: { views: 63 + ((index * 47) % 2800), follows: 3 + ((index * 7) % 130), helpfulVotes: responses.reduce((sum, item) => sum + item.helpfulVotes, 0), responseCount: responses.length },
    attachments: [], responses,
  };
}

const topics = Array.from({ length: places.length * dilemmas.length }, (_, index) => makeTopic(index));
const responses = topics.flatMap((topic) => topic.responses);
if (topics.length !== 532) throw new Error(`Expected 532 topics; generated ${topics.length}.`);
if (new Set(topics.map((topic) => topic.title)).size !== topics.length) throw new Error('Discussion titles must be unique.');
if (topics.filter((topic) => topic.perspectiveContext.region === 'Tamil Nadu').length < 450) throw new Error('Tamil Nadu must remain the primary rollout region.');

const metadata = {
  schemaVersion: '2.0.0', generatedAt, generator: 'scripts/generate-discussions.mjs', demo: true,
  disclosure: 'Starter community content for product rollout; do not present author identities as verified people.',
  safetyNote: 'Personal perspectives are not professional advice. Verify changing rules with official sources.',
  topicCount: topics.length, responseCount: responses.length,
  authorProfileCount: new Set([...topics.map((topic) => topic.author.userId), ...responses.map((reply) => reply.author.userId)]).size,
  coverage: {
    categories: [...new Set(topics.map((topic) => topic.category))].sort(),
    journeyStages: [...new Set(topics.map((topic) => topic.journeyStage))].sort(),
    contextCountries: ['India'], participantCountries: ['India'],
    regions: [...new Set(topics.map((topic) => topic.perspectiveContext.region))].sort(),
    districts: [...new Set(topics.map((topic) => topic.perspectiveContext.district))].sort(),
    nestedResponseCount: responses.filter((reply) => reply.parentResponseId).length,
    sensitiveTopicCount: topics.filter((topic) => topic.moderation.safetyLabels.includes('sensitive-life-decision')).length,
  },
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `// Generated by scripts/generate-discussions.mjs. Do not hand-edit.\n\nexport const discussionCorpusMetadata = ${JSON.stringify(metadata)};\n\nexport const discussionTopics = ${JSON.stringify(topics)};\n\nexport default discussionTopics;\n`, 'utf8');
console.log(`Generated ${topics.length} topics and ${responses.length} responses at ${outputPath}`);
