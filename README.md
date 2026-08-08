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
- Violet–Purple (default), Dark brown-violet, Aurora Light, and Green–Teal themes
- Six original university-life backgrounds selectable in Settings and dimmed by 85%
- A verbatim Prompt Journal documenting how the product was built
- A colourful nine-stage chevron journey from Grade 10 through every college year, campus placement, first job, and a six-to-twelve-year dream-work horizon
- A docked year sidebar with NO-NO elimination, rank/performance context, course, project, internship, campus-interview, and role-mobility milestones
- Experience Exchange, nested under Discussions, with 500 location-neutral journey narratives, a shared top-right region metadata filter, lifecycle/perspective/AI filters, metrics, and private story capture
- A dedicated AI Journey with questions at all nine year/career stages, verification records, capability habits, work-change boundaries, and a family AI agreement
- A 70:30 profile entrance with an original nine-scene campus collage, separate student/parent identities, Miso/Ollie selection, and a read-only guest mode
- Tamil Nadu-first Discussions with 532 distinct topics, 2,128 substantive responses, clickable list rows, region/lifecycle filters, helpful answers, local image attachments, saved topics, reporting, and contextual links from journey stops
- A deterministic knowledge base of 1,000 fictional students: 900 covering every Indian state and union territory and 100 across 20 other countries
- “Your Calling,” a private three-question reflection with exactly 108 India-contextual possibilities per question, searchable multi-select answers, and free writing
- A Study Guide adapted from Home-Manager Learning for Grade 11, Grade 12, JEE Main, and JEE Advanced: overview, curriculum, planner, progress evidence, and a seven-tab chapter workspace with original locally embedded fieldbooks
- Certification Courses across seven categories, with recognised providers, learning-versus-credential cost clarity, saved routes, freshness dates, and official registration links
- Traditional Courses across seven living-practice categories, including Bharatanatyam, Indian music, Sanskrit, yoga, theatre, craft, martial, and folk traditions
- One adaptive right drawer shared by Research, journey-stage editing, Settings, and Miso/Ollie counselling, with a consistent header, scrolling model, close behavior, and responsive overlay
- Hierarchical left navigation: the former chevron journey is represented by nine year-stage submenu links under My Journey, with contextual submenus generated for every major module

The product is a dependency-free static site. Serve the directory through any local HTTP server:

```powershell
npx http-server . -p 4173
```

Then open `http://localhost:4173`.

See [the industry benchmark](docs/industry-benchmark.md) for the feature research and ethical implementation boundaries behind this redesign.

The experience corpus is reproducible with `node scripts/generate-experiences.mjs`. See [the corpus and provenance notes](docs/experience-corpus.md) before adding source-backed or user-submitted accounts.

See [community safety and generated-content provenance](docs/community-safety.md) before connecting Discussions to a backend or real accounts.
