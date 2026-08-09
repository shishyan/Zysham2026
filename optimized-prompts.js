window.OPTIMIZED_REBUILD_PROMPTS = [
  {
    title: '01 · Establish the product contract',
    purpose: 'Align the entire rebuild before writing code.',
    prompt: `Rebuild ZYSHAM as a mobile-first Career Journey Platform for Indian students (initial focus: Tamil Nadu) and their parents. The governing question is “Who do you want to become and be known for?” The platform must help students discover what they truly desire by first eliminating their NO-NOs, then testing personality, capability, values, constraints, and evidence.

Before coding, inspect the existing repository and produce a concise product contract containing: target users, jobs-to-be-done, non-negotiable principles, complete feature inventory, content boundaries, measurable success criteria, and an explicit list of duplicate or conflicting requirements you will consolidate. Preserve useful existing work. Do not add decorative copy, fake claims, fabricated testimonials, or redundant navigation. End with a dependency-ordered implementation plan and wait only if a genuinely product-changing decision is unresolved.`
  },
  {
    title: '02 · Design the architecture and information model',
    purpose: 'Prevent navigation and data-model rework.',
    prompt: `Using the approved product contract, design and implement the application architecture and canonical data model before polishing screens. Model users, parent/student relationships, roles, preferences, assessments, assessment answers, recommendations, journey stages, milestones, accomplishments, courses, exams, institutions, careers, companies, discussions, alumni experiences, editorial content, AI conversations, regions, and admin settings.

Create one source of truth for routes, menus, labels, permissions, and content entities. Define a clean information architecture with: Find Your Calling, My Journey, The Dream Job, Experience Forum, and Admin Settings in the left navigation; research and learning utilities in one collapsible right rail; profile, blog, and infographics in the top-right utility area. Eliminate duplicate tabs and pages. Add migrations or seeded data through maintainable modules rather than giant inline objects. Verify every route, relationship, and permission with tests.`
  },
  {
    title: '03 · Build the responsive application shell',
    purpose: 'Lock the interaction model and visual system once.',
    prompt: `Implement the complete responsive shell and design system. Use a professional education/academy visual language, violet-purple as the default theme, optional Aurora and teal themes, colorful icons/text/borders only when they communicate meaning, and one seamless scalable campus background with user-selectable alternatives. Avoid wasteful hero banners, walls of cards, excess headings, horizontal scrollbars, and unnecessary vertical space.

The left and right rails must collapse to aligned icon-only states, expand predictably, remain readable over imagery, and work on mobile. Use one standardized overlay drawer for AI and detail views. Keep page titles in the app header and begin useful content near the top. Establish tokens for spacing, typography, opacity, contrast, focus, motion, grids, tables, drawers, and steppers. Meet WCAG AA contrast, keyboard navigation, reduced-motion, and responsive acceptance tests at phone, tablet, laptop, and wide-desktop sizes.`
  },
  {
    title: '04 · Implement secure identity, roles and settings',
    purpose: 'Avoid rebuilding authentication around UI mockups.',
    prompt: `Implement production-appropriate identity and profile flows: sign in, sign up, password reset, guest access, parent and student profiles, owner/admin/editor/member roles, permissions, profile preferences, region/language/persona selection, appearance settings, and a separate Admin Settings area. Guest users may explore but cannot publish journeys or experiences.

Never hard-code or expose credentials. Store passwords only through a secure authentication provider or strong salted hashes. Make the zipper interaction an optional guest-entry affordance without weakening authentication. Add validation, session handling, authorization tests, empty/error/loading states, and an auditable role matrix. Keep the login page clean: a 70/30 academy-image layout, prominent ZYSHAM identity, “Figure your life out,” and “Who do you want to become?”` 
  },
  {
    title: '05 · Build Find Your Calling as one evidence flow',
    purpose: 'Consolidate repeated assessment redesigns.',
    prompt: `Build Find Your Calling as a single guided workflow with an inline step navigation and saved progress. Start with Know Thyself and NO-NOs: work environment, schedule, uncertainty tolerance, family priority, money versus meaning, promotion appetite, travel, disliked subjects, medical/blood tolerance, legacy, and non-negotiables. Then assess personality, burning desire, capability, values, constraints, and demonstrated evidence across seven clearly defined traits.

Use accessible 0–10 NPS-style controls with a true default of 0 and a consistent red-to-green scale where direction is semantically appropriate. Selections must update smoothly without page reloads. Ask the three defining questions with 18 high-quality Indian-context options plus custom input. Produce seven explainable recommendations, uncertainty indicators, alternatives eliminated, immediate experiments, and next-stage actions. Recommendations are hypotheses to test, never verdicts. Add unit and interaction tests for scoring, persistence, keyboard use, and recommendation explanations.`
  },
  {
    title: '06 · Build the year-by-year Career Journey',
    purpose: 'Make the journey actionable rather than decorative.',
    prompt: `Implement My Journey as an actionable railway/chevron progression from Grade 10 through Grades 11–12, each college year, campus placement, first role, and the first 6–12 career years. Each stage must contain relevant decisions, courses, assessments, entrance preparation, projects, internships, rank/academic targets, mentors, portfolio evidence, interview preparation, milestones, risks, AI impact, and progress tracking.

Use a compact journey overview at the top with no horizontal scrollbar. Selecting a stage must reveal useful stage-specific content without flashing or reloading. Move Action Plan, Accomplishments, target roadmap, evidence gaps, and prestige checks here. Integrate Study Guide and AI Journey content into the stage where it matters instead of duplicating standalone pages. Include realistic empty states and demonstrate one complete student journey from Grade 10 to placement.`
  },
  {
    title: '07 · Create The Dream Job and research system',
    purpose: 'Unify scattered career, company and comparison tools.',
    prompt: `Build The Dream Job as the canonical career research area. Include a searchable Job Atlas, career families, role detail, salary ranges with sources and dates, education routes, skills, day-in-the-life realities, work conditions, geographic demand, project and internship suggestions, company pathways, performing arts and traditional careers, and dream-company preparation.

Allow users to select roles and open Compare Roles only from an explicit compare action. Use a banded comparison matrix rather than repetitive cards. If you include livelihood, consequence, values, Vedic reflection, or “karma” perspectives, label them as optional cultural reflection—not scientific fact—and never moralize a person’s worth. Keep factual claims sourced, distinguish evidence from opinion, and show freshness dates. Use the unified right drawer for institution, company, location, ranking, and placement details.`
  },
  {
    title: '08 · Integrate learning, exams and credentials',
    purpose: 'Put preparation resources where decisions happen.',
    prompt: `Implement structured learning resources for Grades 10–12, JEE Main, JEE Advanced, major Indian entrance exams, recognized certification courses, and traditional arts such as Bharatanatyam. Represent every resource with audience, stage, provider, cost, duration, prerequisites, credential value, source link, freshness date, and verification status.

Surface each resource inside its relevant journey stage while keeping searchable indexes in the right-side learning utility. Do not copy copyrighted books or whole third-party sites; summarize, cite, and link to lawful sources. Add filters for region, stream, cost, duration, online/offline, and recognition. Test broken links, filtering, stage mappings, and empty states.`
  },
  {
    title: '09 · Build the Experience Forum responsibly',
    purpose: 'Create a credible community without fabricated identity.',
    prompt: `Build Experience Forum with Alumni Talks, discussions, questions, replies, media attachments, reactions, bookmarks, reporting, moderation, search, region filters, dates, and profile-aware permissions. Use a professional dense list/grid rather than artificial card walls. Content should sound human, emotionally honest, and context-specific without repeating the same question across locations.

Seed only clearly labelled sample personas and sample content; never present generated people or stories as real. Cover sensitive student dilemmas with balanced responses and safety/moderation controls. Add pagination or virtualization, abuse prevention, accessible composer interactions, and tests for authorization, filtering, moderation, and media handling.`
  },
  {
    title: '10 · Upgrade Miso and Ollie into an AI counsellor',
    purpose: 'Tie recommendations to the student’s actual evidence.',
    prompt: `Implement Miso and Ollie as an AI-assisted counselling experience in the unified overlay drawer, capped near 36% desktop width and full-width on small screens. The launcher should be a compact prominent icon pill at the bottom of the right rail that expands on hover/focus. The chat must use available vertical space and readable typography.

Ground responses in the student’s current stage, assessment evidence, constraints, saved goals, and accomplishments. Prevent repetitive canned replies. Provide suggested next actions, explain why they fit, distinguish known facts from inference, allow feedback/correction, and never present career advice as certainty. Add conversation persistence, privacy controls, loading/error states, prompt-injection boundaries for retrieved content, and tests for grounding, repetition, accessibility, and mobile behavior.`
  },
  {
    title: '11 · Build editorial, infographic and communication tools',
    purpose: 'Separate durable content systems from placeholder pages.',
    prompt: `Implement Team Blog, Infographics, newsletters/email communication, and admin publishing as reusable content systems. Provide industry-standard article and infographic templates, categories, authors, publish states, search, previews, image handling, and accessible reading layouts. Create a small set of deeply useful, original seed pieces rather than dozens of thin placeholders.

Content should be emotionally intelligent, visually varied, sourced where factual, and relevant to student and parent decisions. Do not copy third-party articles. Include admin editorial workflows, validation, drafts, scheduling fields, and tests for rendering, permissions, links, and responsive media.`
  },
  {
    title: '12 · Package, test and release the complete platform',
    purpose: 'Finish with evidence instead of another redesign cycle.',
    prompt: `Perform a full integration and release pass. Test as at least three personas: Grade 10 student, parent, and administrator. Cover every route and interactive control; mobile persona switching; both side rails; unified drawers; assessments; recommendations; journey progress; role comparison; forum; AI chat; settings; blog; infographics; and guest restrictions.

Run automated unit, integration, accessibility, responsive, performance, and security checks. Fix all high-impact usability, visibility, consistency, broken-link, flicker, overflow, and authorization issues. Produce a traceability matrix from the product contract to implemented evidence. Remove dead/duplicate UI and placeholder claims. Build the latest Android APK, verify downloadable version metadata, commit only intentional files, deploy GitHub Pages, verify the live URL and assets, and provide a concise release report with test results and known limitations.`
  }
];
