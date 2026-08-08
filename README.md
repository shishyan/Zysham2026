# ZYSHAM2026

A student-led career guidance workspace for Indian students and their families.

## What is included

- Career Compass that starts with a 14-question Work Reality Scan, derives one of 12 revisable work-style patterns, asks for subject aversions rather than favourite subjects, and carries clinical, lifestyle, family-legacy, and academic NO-NOs into explainable recommendations
- A searchable right-side Research Shelf for schools, colleges, courses, exams, jobs, companies, role types, funding, and alternate pathways, with official verification entry points
- First-run zipper entrance, student profile, and Miso/Ollie animal-guide selection
- Explainable career matches and searchable exploration
- Side-by-side comparison for up to three paths
- CBSE-aware stream reflection and a living Grade 10–12 roadmap
- Student/Parent perspectives and guided family conversations
- Evidence Wallet and low-risk career experiments
- Miso and Ollie mentor voices
- Aurora Light (default), Green–Teal, and Violet–Purple themes
- Six original university-life backgrounds selectable in Settings and dimmed by 85%
- A verbatim Prompt Journal documenting how the product was built
- A colourful nine-stage chevron journey from Grade 10 through every college year, campus placement, first job, and a six-to-twelve-year dream-work horizon
- A docked year sidebar with NO-NO elimination, rank/performance context, course, project, internship, campus-interview, and role-mobility milestones
- Experience Exchange with search, lifecycle/country/perspective/AI filters, metrics, private story capture, and exactly 500 disclosed fictional scenarios (400 India, 100 international)
- A dedicated AI Journey with questions at all nine year/career stages, verification records, capability habits, work-change boundaries, and a family AI agreement
- A 70:30 profile entrance with an original nine-scene campus collage, separate student/parent identities, Miso/Ollie selection, and a read-only guest mode
- Discussions with 132 synthetic demo topics, 528 substantive responses, nested replies, lifecycle filters, locally stored guest/profile contributions, and contextual links from journey stops
- A deterministic knowledge base of 1,000 fictional students: 900 covering every Indian state and union territory and 100 across 20 other countries

The product is a dependency-free static site. Serve the directory through any local HTTP server:

```powershell
npx http-server . -p 4173
```

Then open `http://localhost:4173`.

See [the industry benchmark](docs/industry-benchmark.md) for the feature research and ethical implementation boundaries behind this redesign.

The experience corpus is reproducible with `node scripts/generate-experiences.mjs`. See [the corpus and provenance notes](docs/experience-corpus.md) before adding source-backed or user-submitted accounts.

See [community safety and demo provenance](docs/community-safety.md) before connecting Discussions to a backend or real accounts.
