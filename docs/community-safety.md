# Community fixtures, provenance, and safety

The Discussions and generated-name datasets are product fixtures. Their names, starter posts, replies, locations, backgrounds, and outcomes do not represent real people, survey respondents, testimonials, or community activity.

## Included generated coverage

- 1,000 fictional student profiles: 900 across all 28 Indian states and 8 union territories, plus 100 across 20 other countries.
- 532 fictional discussion topics and 2,128 substantive responses, led by Tamil Nadu contexts and varied emotional, academic, family, access, project, internship, and campus-placement dilemmas.
- Context tags for education stage and route, geography, languages, access, family responsibilities, accessibility, AI practice, and decision goals.

The generators are deterministic and validate counts, identifiers, geographic coverage, disclosures, and reply relationships. Regenerate with:

```powershell
node scripts/generate-demo-students.mjs
node scripts/generate-discussions.mjs
```

## Product boundaries

- Never present generated profiles or starter discussions as real users, popularity, testimonials, or population evidence.
- Do not use synthetic profiles to predict success, rank routes, or infer what a demographic group believes.
- Treat admissions rules, fees, eligibility, deadlines, policy, health, legal, financial, and labour-market claims as time-sensitive. Point readers to current official or qualified sources.
- Use pseudonyms and age bands. Do not collect exact school, home address, phone number, exam ID, health record, or another person’s private information.
- Do not provide public direct messaging between minors and unknown adults.
- A production community requires reporting, blocking, correction and deletion workflows, rate limiting, PII/link risk detection, trained human moderation, safeguarding escalation, and appropriate guardian/child-consent handling.
- User posts must not train recommendation systems by default.

The prototype stores guest- and profile-created discussions and replies only in the local browser. It does not publish them to other people.
