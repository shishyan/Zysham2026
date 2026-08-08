// Employment research for Zysham. Facts are deliberately source-led: no invented
// salary bands, vacancy totals, employer rankings or placement promises.

const CHECKED_AT = '2026-08-08';
const source = (label, url) => ({ label, url, checkedAt: CHECKED_AT });

export const jobLocationResearch = [
  {
    id: 'role-software-product', domain: 'jobs', category: 'Digital product',
    title: 'Software & product engineering',
    summary: 'Build, test and operate software products. Compare this path by the work you enjoy—debugging, systems thinking and sustained screen time—not by the word “IT”.',
    geography: 'India · strongest breadth in major technology centres; opportunities also remote/hybrid',
    tags: ['engineering', 'software', 'product', 'screen-intensive'],
    facts: [{ label: 'Typical evidence', value: 'Deployed project, readable code, tests and a clear account of trade-offs' }, { label: 'Adjacent routes', value: 'QA automation, cloud operations, cybersecurity, data engineering, product support' }],
    checks: ['Read 20 current role descriptions and count recurring skills.', 'Build one small product used by real people.', 'Ask whether you enjoy fixing failures after the novelty ends.'],
    sources: [source('NCS career sectors', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx'), source('NSDC occupational standards', 'https://www.nsdcindia.org/nos')],
    compare: { educationRoutes: ['BE/BTech', 'BSc/BCA + portfolio', 'Diploma + experience'], workMode: 'Primarily computer-based', entryEvidence: 'Portfolio + fundamentals', mobility: 'National' },
    caveat: 'Job titles vary widely. A short course does not substitute for demonstrable problem-solving or guarantee employment.'
  },
  {
    id: 'role-electronics-embedded', domain: 'jobs', category: 'Engineering',
    title: 'Electronics, embedded systems & hardware testing',
    summary: 'Design, program, validate or manufacture electronic systems—from boards and firmware to production testing.',
    geography: 'Tamil Nadu · Chennai–Tiruvallur–Sriperumbudur and Hosur ecosystems; India-wide',
    tags: ['electronics', 'embedded', 'manufacturing', 'laboratory'],
    facts: [{ label: 'Typical evidence', value: 'Working circuit or embedded prototype, measurements, failure log and documentation' }, { label: 'Tamil Nadu signal', value: 'SIPCOT lists electronics manufacturing clusters and shared testing/prototyping infrastructure' }],
    checks: ['Try a sensor-to-dashboard project.', 'Compare design, firmware, validation and production roles.', 'Visit a lab or manufacturing unit before specialising.'],
    sources: [source('Guidance Tamil Nadu — Electronics', 'https://www.investingintamilnadu.com/sectors/electronics'), source('SIPCOT sector clusters', 'https://sipcotweb.tn.gov.in/Sector'), source('ESSCI', 'https://essc-india.org/')],
    compare: { educationRoutes: ['BE/BTech ECE/EEE', 'Diploma', 'ITI + apprenticeship'], workMode: 'Lab, plant and computer mix', entryEvidence: 'Prototype + measurements', mobility: 'Cluster-led' },
    caveat: 'Electronics roles are not all chip design; inspect the actual function, shift pattern and plant location.'
  },
  {
    id: 'role-automotive-mobility', domain: 'jobs', category: 'Engineering',
    title: 'Automotive, EV & mobility systems',
    summary: 'Work across vehicle design, components, controls, quality, manufacturing, service and the expanding EV supply chain.',
    geography: 'Tamil Nadu · Chennai–Sriperumbudur–Oragadam and Hosur; India-wide manufacturing centres',
    tags: ['automotive', 'EV', 'quality', 'manufacturing'],
    facts: [{ label: 'Role families', value: 'Design, simulation, embedded controls, production, quality, supply chain and after-sales' }, { label: 'Best early test', value: 'Formula Student, EV conversion, CAD/manufacturing or diagnostics project' }],
    checks: ['Separate fascination with vehicles from interest in engineering work.', 'Compare office design work with plant operations.', 'Check whether the role involves shifts or supplier travel.'],
    sources: [source('Automotive Skills Development Council', 'https://www.asdc.org.in/'), source('SIPCOT sector clusters', 'https://sipcotweb.tn.gov.in/Sector'), source('NSDC occupational standards', 'https://www.nsdcindia.org/nos')],
    compare: { educationRoutes: ['BE/BTech', 'Diploma', 'ITI + apprenticeship'], workMode: 'Design office, test track or plant', entryEvidence: 'Team engineering project', mobility: 'Cluster-led' },
    caveat: 'EV growth changes skill mixes, but mechanical, manufacturing and quality fundamentals remain relevant.'
  },
  {
    id: 'role-industrial-production', domain: 'jobs', category: 'Manufacturing',
    title: 'Production, quality & industrial operations',
    summary: 'Turn designs into repeatable output by improving process, safety, quality, maintenance and throughput.',
    geography: 'Tamil Nadu industrial corridors and manufacturing centres across India',
    tags: ['production', 'quality', 'operations', 'hands-on'],
    facts: [{ label: 'Daily reality', value: 'Process observation, root-cause work, documentation, coordination and plant-floor decisions' }, { label: 'Entry evidence', value: 'Measured process-improvement or fabrication project' }],
    checks: ['Observe a real production line.', 'Learn basic safety, quality tools and data collection.', 'Ask about shift rotation before accepting an offer.'],
    sources: [source('NCS manufacturing career sectors', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx'), source('NSDC occupational standards', 'https://www.nsdcindia.org/nos'), source('SIPCOT', 'https://sipcotweb.tn.gov.in/')],
    compare: { educationRoutes: ['BE/BTech', 'Diploma', 'ITI + apprenticeship'], workMode: 'Plant-centred', entryEvidence: 'Measured improvement', mobility: 'Industrial corridors' },
    caveat: 'Plant, safety and shift conditions differ by employer and site; verify them directly.'
  },
  {
    id: 'role-textile-apparel', domain: 'jobs', category: 'Textiles & apparel',
    title: 'Textile technology, apparel & merchandising',
    summary: 'A broad value chain spanning fibre, spinning, processing, garment production, quality, design, merchandising and export operations.',
    geography: 'Tamil Nadu · Coimbatore, Tiruppur, Erode, Karur and Chennai clusters',
    tags: ['textiles', 'apparel', 'design', 'exports'],
    facts: [{ label: 'Distinct paths', value: 'Textile engineering, fashion/design, production, compliance, merchandising and supply chain' }, { label: 'Cluster clue', value: 'Coimbatore district identifies textiles alongside engineering and IT; Tiruppur is an apparel export centre' }],
    checks: ['Visit both a mill/production unit and a design studio.', 'Compare creative work with buyer-facing merchandising.', 'Investigate sustainability, compliance and technical textiles.'],
    sources: [source('Coimbatore district economy', 'https://coimbatore.nic.in/economy/'), source('Tamil Nadu Handlooms — sector information', 'https://www.tnhandlooms.tn.gov.in/english/sectortext.php?t=1'), source('SIPCOT sector clusters', 'https://sipcotweb.tn.gov.in/Sector')],
    compare: { educationRoutes: ['BTech Textile', 'Design degree/diploma', 'General degree + domain experience'], workMode: 'Studio, office and production mix', entryEvidence: 'Product/process portfolio', mobility: 'Strong TN clusters' },
    caveat: '“Fashion” and textile manufacturing involve very different work; compare functions, not just the sector label.'
  },
  {
    id: 'role-health-allied', domain: 'jobs', category: 'Health',
    title: 'Allied health & clinical support',
    summary: 'Patient-facing and diagnostic careers beyond medicine, including laboratory, imaging, therapy and health-support functions.',
    geography: 'India · hospitals, diagnostic centres and community settings',
    tags: ['healthcare', 'patient-care', 'laboratory', 'regulated'],
    facts: [{ label: 'Reality test', value: 'Comfort with illness, bodily fluids, responsibility, protocols and sometimes shifts' }, { label: 'Role diversity', value: 'Laboratory, imaging, therapy and patient-care paths require different aptitudes' }],
    checks: ['Shadow a professional where permitted.', 'Verify programme recognition and clinical exposure.', 'Eliminate roles whose physical/emotional realities are unacceptable.'],
    sources: [source('NCS allied health careers', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx'), source('Healthcare Sector Skill Council', 'https://www.healthcare-ssc.in/'), source('National Commission for Allied and Healthcare Professions', 'https://ncahp.abdm.gov.in/')],
    compare: { educationRoutes: ['Recognised allied-health degree/diploma', 'Role-specific regulated route'], workMode: 'Patient, clinic or laboratory', entryEvidence: 'Clinical training', mobility: 'National' },
    caveat: 'Recognition and scope of practice matter. Verify the regulator, institution and clinical placement before paying fees.'
  },
  {
    id: 'role-logistics-supply-chain', domain: 'jobs', category: 'Operations',
    title: 'Logistics & supply-chain operations',
    summary: 'Coordinate materials, warehouses, transport, planning, procurement and delivery across physical networks.',
    geography: 'India · ports, industrial corridors, cities and distribution hubs',
    tags: ['logistics', 'operations', 'analytics', 'coordination'],
    facts: [{ label: 'Work signals', value: 'Time pressure, exception handling, vendor coordination and operational data' }, { label: 'Entry evidence', value: 'Inventory, routing or fulfilment improvement project' }],
    checks: ['Map one product from supplier to customer.', 'Compare planning/analytics with warehouse/transport operations.', 'Check shift, travel and site expectations.'],
    sources: [source('Logistics Sector Skill Council', 'https://lsc-india.com/'), source('NCS logistics careers', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx')],
    compare: { educationRoutes: ['Any degree + operations skills', 'Engineering/commerce', 'Diploma/skill route'], workMode: 'Office and field mix', entryEvidence: 'Operations case/project', mobility: 'National' },
    caveat: '“Supply chain” can mean analytics, procurement, warehouse or field operations; read the responsibilities closely.'
  },
  {
    id: 'role-bfsi', domain: 'jobs', category: 'Business & finance',
    title: 'Banking, financial services & insurance',
    summary: 'Includes regulated operations, credit, risk, customer service, sales, analytics and technology—not one uniform banking career.',
    geography: 'India · nationwide branch networks and urban operations/technology centres',
    tags: ['finance', 'risk', 'customer', 'regulated'],
    facts: [{ label: 'Role split', value: 'Sales/relationship, operations, credit/risk, compliance, analytics and technology' }, { label: 'Fit question', value: 'Are you comfortable with targets, customer trust and careful documentation?' }],
    checks: ['Compare target-bearing sales with analytical and operational roles.', 'Read regulator and employer eligibility rules.', 'Test financial-statement and spreadsheet work.'],
    sources: [source('BFSI Sector Skill Council', 'https://bfsissc.com/'), source('NCS financial services careers', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx')],
    compare: { educationRoutes: ['Commerce/finance', 'Any degree + selection route', 'Technology/analytics'], workMode: 'Office, branch or field', entryEvidence: 'Role-dependent exam/project', mobility: 'National' },
    caveat: 'Do not infer role quality from a bank brand alone; sales targets, contract type and function materially change the experience.'
  },

  {
    id: 'path-naps', domain: 'apprenticeships', category: 'Work-based learning',
    title: 'NAPS / Apprenticeship India',
    summary: 'Government apprenticeship route combining basic training with on-the-job training under a contract; candidates search and apply through the official portal.',
    geography: 'India · filter opportunities by state, district, trade and establishment',
    tags: ['apprenticeship', 'NAPS', 'ITI', 'on-the-job'],
    facts: [{ label: 'Best suited to', value: 'Candidates seeking structured workplace learning across designated and optional trades' }, { label: 'Official workflow', value: 'Register, search, apply, accept an offer and execute the apprenticeship contract online' }],
    checks: ['Use only the official portal.', 'Read eligibility, duration, stipend and location on the live posting.', 'Confirm whether the listing is training rather than permanent employment.'],
    sources: [source('Apprenticeship India', 'https://www.apprenticeshipindia.gov.in/'), source('NSDC apprenticeship overview', 'https://nsdcindia.org/apprenticeship'), source('Government apprenticeship schemes — PIB', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2226495&lang=1&reg=3')],
    compare: { audience: 'Trade, optional-trade and other eligible candidates', delivery: 'Contracted workplace training', liveSearch: true, permanentJobGuarantee: false },
    caveat: 'An apprenticeship is training and does not itself guarantee absorption. Never pay an intermediary for an NCS/NAPS application.'
  },
  {
    id: 'path-nats', domain: 'apprenticeships', category: 'Graduate & diploma training',
    title: 'NATS 2.0',
    summary: 'Official apprenticeship route commonly used for graduate, diploma and vocational candidates to gain supervised workplace experience.',
    geography: 'India · opportunities vary by employer and cycle',
    tags: ['apprenticeship', 'NATS', 'graduate', 'diploma'],
    facts: [{ label: 'Best suited to', value: 'Eligible graduates, diploma holders and vocational candidates' }, { label: 'Decision point', value: 'Compare training function and mentor exposure—not only employer name' }],
    checks: ['Confirm eligibility on the current portal notice.', 'Read the employer advertisement as well as portal entry.', 'Treat deadlines and vacancy counts as live information.'],
    sources: [source('NATS 2.0', 'https://nats.education.gov.in/'), source('National Portal of India — apprenticeship training', 'https://www.india.gov.in/category/education-learning/subcategory/higher-education/details/apprenticeship-training-portal'), source('Government apprenticeship schemes — PIB', 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2226495&lang=1&reg=3')],
    compare: { audience: 'Eligible graduate/diploma/vocational candidates', delivery: 'Workplace training', liveSearch: true, permanentJobGuarantee: false },
    caveat: 'Eligibility and openings change. An apprenticeship certificate or completion does not promise a permanent role.'
  },
  {
    id: 'path-ncs', domain: 'jobs', category: 'Official job search',
    title: 'National Career Service',
    summary: 'Ministry of Labour & Employment portal for jobs, job fairs, career information, counselling and government employment links.',
    geography: 'India · state and district filters, including Tamil Nadu',
    tags: ['NCS', 'job-search', 'job-fairs', 'government'],
    facts: [{ label: 'Useful filters', value: 'Keyword, location, sector, functional role, education, experience and job nature' }, { label: 'Cost warning', value: 'NCS states that its services are free of cost' }],
    checks: ['Cross-check employer identity and application channel.', 'Save the posting date and requirements.', 'Never pay for registration, application or interview processing.'],
    sources: [source('National Career Service', 'https://www.ncs.gov.in/'), source('NCS job search', 'https://www.ncs.gov.in/Pages/Search.aspx?OT=nav'), source('NCS career repository', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx')],
    compare: { audience: 'Jobseekers', delivery: 'Search, events and guidance', liveSearch: true, fee: 'Free' },
    caveat: 'Listings are live and may include partners. Verify every employer and never rely on an old cached vacancy.'
  },
  {
    id: 'path-skill-standards', domain: 'skills', category: 'Skill validation',
    title: 'NSDC National Occupational Standards',
    summary: 'Sector-wise Qualification Packs, National Occupational Standards and model curricula provide a useful checklist of what a defined role expects.',
    geography: 'India',
    tags: ['NSDC', 'NOS', 'curriculum', 'skills'],
    facts: [{ label: 'Use it for', value: 'Role vocabulary, expected competencies and training comparison' }, { label: 'Do not use it for', value: 'Predicting vacancies, salary or guaranteed employability' }],
    checks: ['Find the current role/qualification pack.', 'Compare course syllabus with occupational units.', 'Validate skills through a project or workplace evidence.'],
    sources: [source('NSDC NOS and model curricula', 'https://www.nsdcindia.org/nos'), source('Skill India Digital Hub', 'https://www.skillindiadigital.gov.in/')],
    compare: { audience: 'Learners, counsellors and training buyers', delivery: 'Standards and curricula', liveSearch: false, evidenceType: 'Competency framework' },
    caveat: 'Standards help define competence; provider quality, assessment integrity and employer demand still require separate verification.'
  },
  {
    id: 'path-futureskills', domain: 'skills', category: 'Digital upskilling',
    title: 'FutureSkills PRIME',
    summary: 'MeitY–NASSCOM digital-skilling initiative covering emerging technology pathways; useful as a structured supplement to college learning.',
    geography: 'India · online',
    tags: ['digital', 'AI', 'cybersecurity', 'upskilling'],
    facts: [{ label: 'Use it for', value: 'Exploring structured emerging-technology pathways' }, { label: 'Pair with', value: 'A demonstrable project, fundamentals and domain context' }],
    checks: ['Check current course provider, prerequisites and assessment.', 'Choose a pathway tied to a project.', 'Do not collect certificates without application evidence.'],
    sources: [source('FutureSkills PRIME', 'https://www.futureskillsprime.in/'), source('Directorate General of Employment — schemes', 'https://www.dge.gov.in/index.php/schemes_programmes')],
    compare: { audience: 'Students and working learners', delivery: 'Online skilling', liveSearch: true, evidenceType: 'Course + project' },
    caveat: 'Course availability and benefits change; verify current terms. Certification alone is not a hiring promise.'
  },

  {
    id: 'cluster-chennai', domain: 'locations', category: 'Tamil Nadu cluster',
    title: 'Chennai metropolitan industrial & services ecosystem',
    summary: 'The state’s broadest mix: IT/ITeS and SaaS, finance, healthcare, automotive, electronics, ports and corporate functions.',
    geography: 'Chennai · Kancheepuram · Chengalpattu · Tiruvallur',
    tags: ['Chennai', 'IT', 'automotive', 'electronics', 'services'],
    facts: [{ label: 'Research advantage', value: 'Breadth supports comparing several functions without changing state' }, { label: 'Nearby clusters', value: 'Sriperumbudur, Oragadam, Manallur, Thervoy Kandigai and Gummidipoondi' }],
    checks: ['Map the actual worksite, not just “Chennai” in the job title.', 'Compare commute and housing before accepting.', 'Search by function plus industrial area.'],
    sources: [source('Tamil Nadu Industrial Policy', 'https://embindpp.gov.in/pdf/notice/TamilNadu_Industrial_Policy_2021.pdf'), source('SIPCOT sectors and clusters', 'https://sipcotweb.tn.gov.in/Sector'), source('Guidance Tamil Nadu — Electronics', 'https://www.investingintamilnadu.com/sectors/electronics')],
    compare: { sectorBreadth: 'Very broad', studentAccess: 'High', worksiteSpread: 'Metropolitan region and distant corridors', relocationNeedWithinTN: 'Low for local residents; commute may be substantial' },
    caveat: 'A metropolitan label can conceal a distant plant or shift commute. Verify the precise site and transport.'
  },
  {
    id: 'cluster-coimbatore', domain: 'locations', category: 'Tamil Nadu cluster',
    title: 'Coimbatore engineering, textiles & technology ecosystem',
    summary: 'A diversified regional economy with textiles, pumps and motors, foundries, auto components, manufacturing, IT and BPO.',
    geography: 'Coimbatore and western Tamil Nadu',
    tags: ['Coimbatore', 'engineering', 'textiles', 'IT', 'MSME'],
    facts: [{ label: 'Good for exploring', value: 'Mechanical/production work, components, textile value chains and technology services' }, { label: 'Ecosystem character', value: 'Mix of established companies and many smaller industrial enterprises' }],
    checks: ['Compare an MSME learning role with a large-company structured role.', 'Ask who will mentor you and what equipment you will use.', 'Include nearby Tiruppur/Erode when mapping options.'],
    sources: [source('Coimbatore district economy', 'https://coimbatore.nic.in/economy/'), source('Coimbatore district industry', 'https://coimbatore.nic.in/industry/'), source('SIPCOT', 'https://sipcotweb.tn.gov.in/')],
    compare: { sectorBreadth: 'Broad manufacturing + services', studentAccess: 'High', worksiteSpread: 'City and surrounding industrial belt', relocationNeedWithinTN: 'Regional' },
    caveat: 'Company scale and formal training quality vary. Assess the specific team, machinery and supervision.'
  },
  {
    id: 'cluster-hosur', domain: 'locations', category: 'Tamil Nadu cluster',
    title: 'Hosur manufacturing & electronics ecosystem',
    summary: 'Border-region industrial base associated with automotive, components, electronics and advanced manufacturing, with access to the Bengaluru market.',
    geography: 'Hosur · Krishnagiri district · Bengaluru corridor',
    tags: ['Hosur', 'automotive', 'electronics', 'manufacturing'],
    facts: [{ label: 'Career advantage', value: 'Dense plant and supplier ecosystem for production, quality and engineering exposure' }, { label: 'Location trade-off', value: 'Cross-border commuting, housing and worksite transport deserve explicit comparison' }],
    checks: ['Search suppliers as well as headline manufacturers.', 'Verify shifts and transport.', 'Compare Hosur residence with Bengaluru-side commute costs.'],
    sources: [source('SIPCOT sectors and clusters', 'https://sipcotweb.tn.gov.in/Sector'), source('SIPCOT overview', 'https://sipcotweb.tn.gov.in/About_SIPCOT'), source('Tamil Nadu Industrial Policy', 'https://embindpp.gov.in/pdf/notice/TamilNadu_Industrial_Policy_2021.pdf')],
    compare: { sectorBreadth: 'Manufacturing-led', studentAccess: 'Strong for engineering/diploma/ITI', worksiteSpread: 'Industrial estates', relocationNeedWithinTN: 'Likely outside local district' },
    caveat: 'Cluster presence does not imply every employer is hiring; use official career pages and apprenticeship portals for live openings.'
  },
  {
    id: 'cluster-tiruppur-erode-karur', domain: 'locations', category: 'Tamil Nadu cluster',
    title: 'Tiruppur–Erode–Karur textile value chain',
    summary: 'Interconnected strengths in knitwear, garments, spinning, processing, home textiles, merchandising and export operations.',
    geography: 'Western Tamil Nadu · Tiruppur, Erode and Karur',
    tags: ['Tiruppur', 'Erode', 'Karur', 'textiles', 'exports'],
    facts: [{ label: 'Role breadth', value: 'Production, quality, testing, compliance, sustainability, merchandising, design and logistics' }, { label: 'Learning route', value: 'Plant visits and internships reveal the value chain better than course names alone' }],
    checks: ['Map the product and production stage of each employer.', 'Ask about buyer communication and compliance exposure.', 'Check factory location, transport and seasonal workload.'],
    sources: [source('Coimbatore district economy', 'https://coimbatore.nic.in/economy/'), source('Tamil Nadu Handlooms — sector information', 'https://www.tnhandlooms.tn.gov.in/english/sectortext.php?t=1'), source('Tamil Nadu circular economy policy', 'https://storage.investingintamilnadu.com/Guidance/Uploads/Documents/circular_policy_2026.pdf')],
    compare: { sectorBreadth: 'Deep textile specialisation', studentAccess: 'Strong for textile/design/operations', worksiteSpread: 'Multi-city cluster', relocationNeedWithinTN: 'Regional' },
    caveat: 'Working conditions and compliance differ substantially across units; investigate the individual workplace.'
  },
  {
    id: 'cluster-trichy', domain: 'locations', category: 'Tamil Nadu cluster',
    title: 'Tiruchirappalli engineering & fabrication ecosystem',
    summary: 'Engineering, fabrication and industrial-services pathways supported by a central Tamil Nadu education and manufacturing base.',
    geography: 'Tiruchirappalli and central Tamil Nadu',
    tags: ['Trichy', 'fabrication', 'engineering', 'manufacturing'],
    facts: [{ label: 'Good project signals', value: 'CAD-to-fabrication, welding quality, inspection, maintenance and industrial automation' }, { label: 'Search strategy', value: 'Include vendors and engineering-service firms, not only major anchors' }],
    checks: ['Document a fabrication or maintenance project.', 'Compare design-office and site/plant roles.', 'Verify safety practice and supervision.'],
    sources: [source('SIPCOT industrial parks', 'https://sipcotweb.tn.gov.in/'), source('NCS manufacturing careers', 'https://www.ncs.gov.in/content-repository/Pages/BrowseBySectors.aspx'), source('NSDC occupational standards', 'https://www.nsdcindia.org/nos')],
    compare: { sectorBreadth: 'Engineering-led', studentAccess: 'Strong for engineering/diploma/ITI', worksiteSpread: 'City and industrial sites', relocationNeedWithinTN: 'Regional' },
    caveat: 'This is an ecosystem orientation, not a city ranking. Validate current employers and vacancies separately.'
  },
  {
    id: 'cluster-south-tn', domain: 'locations', category: 'Tamil Nadu cluster',
    title: 'South Tamil Nadu: emerging industrial and services options',
    summary: 'Madurai, Tirunelveli and Thoothukudi offer distinct healthcare, services, manufacturing, logistics/port and growing technology pathways.',
    geography: 'Madurai · Tirunelveli · Thoothukudi and surrounding districts',
    tags: ['Madurai', 'Tirunelveli', 'Thoothukudi', 'logistics', 'services'],
    facts: [{ label: 'Why research locally', value: 'Family proximity and cost can matter, while role depth may differ from Chennai' }, { label: 'Widen the lens', value: 'Include healthcare, port/logistics, industrial parks, MSMEs and public-sector-linked supply chains' }],
    checks: ['Compare local role learning with relocation upside.', 'Search the exact industrial park and district.', 'Ask whether the work builds portable skills.'],
    sources: [source('SIPCOT industrial parks', 'https://sipcotweb.tn.gov.in/'), source('SIPCOT sector clusters', 'https://sipcotweb.tn.gov.in/Sector'), source('NCS location-filtered job search', 'https://www.ncs.gov.in/Pages/Search.aspx?OT=nav')],
    compare: { sectorBreadth: 'Mixed and location-specific', studentAccess: 'Growing', worksiteSpread: 'Several separate city/industrial nodes', relocationNeedWithinTN: 'Potentially lower for southern districts' },
    caveat: 'Do not infer current opportunity volume from planned investment. Confirm operating employers and live openings.'
  },

  {
    id: 'employer-tcs', domain: 'employers', category: 'Employer research',
    title: 'Tata Consultancy Services',
    summary: 'Large technology-services employer. Research the specific programme, business unit, role family, work location and mobility terms.',
    geography: 'India · multiple locations including Tamil Nadu',
    tags: ['TCS', 'IT-services', 'graduates'],
    facts: [{ label: 'Research before applying', value: 'Eligibility, assessment route, role allocation, location flexibility and official communication domain' }, { label: 'Compare by', value: 'Actual role and learning exposure, not company name alone' }],
    checks: ['Apply through the official careers site.', 'Match the programme to your graduation year.', 'Reject any request for recruitment payment.'],
    sources: [source('TCS Careers India', 'https://www.tcs.com/careers/india'), source('TCS recruitment fraud alert', 'https://www.tcs.com/careers/india/recruitment-fraud-alert')],
    compare: { employerType: 'Large IT services', studentRoutes: 'Programme-dependent', tamilNaduPresence: true, officialOpenings: 'Live careers site' },
    caveat: 'Hiring programmes and eligibility change. This record is not an endorsement or placement prediction.'
  },
  {
    id: 'employer-zoho', domain: 'employers', category: 'Employer research',
    title: 'Zoho',
    summary: 'Product-software employer with Tamil Nadu roots. Compare engineering, design, sales, support and other role families separately.',
    geography: 'Tamil Nadu and other locations; verify each live role',
    tags: ['Zoho', 'product-software', 'Tamil Nadu'],
    facts: [{ label: 'Portfolio fit', value: 'Product thinking, problem-solving and communication evidence should match the function' }, { label: 'Location rule', value: 'Use the location stated on the live vacancy' }],
    checks: ['Use only the official careers page.', 'Read the entire role description.', 'Build evidence relevant to the exact function.'],
    sources: [source('Zoho Careers', 'https://www.zoho.com/careers/')],
    compare: { employerType: 'Product software', studentRoutes: 'Role-dependent', tamilNaduPresence: true, officialOpenings: 'Live careers site' },
    caveat: 'Do not generalise one employee experience to every team. Roles, locations and selection processes change.'
  },
  {
    id: 'employer-freshworks', domain: 'employers', category: 'Employer research',
    title: 'Freshworks',
    summary: 'SaaS product company. Useful for researching product engineering, design, customer success, sales and business operations careers.',
    geography: 'India and global locations; verify the live posting',
    tags: ['Freshworks', 'SaaS', 'product'],
    facts: [{ label: 'Compare functions', value: 'Engineering, product, customer success and sales have different work rhythms and evidence' }, { label: 'Student action', value: 'Study one product and propose a measured improvement' }],
    checks: ['Use the official job board.', 'Verify location and experience requirements.', 'Avoid third-party promises of guaranteed selection.'],
    sources: [source('Freshworks Careers', 'https://www.freshworks.com/company/careers/')],
    compare: { employerType: 'SaaS product', studentRoutes: 'Live-role dependent', tamilNaduPresence: 'Verify current posting', officialOpenings: 'Live careers site' },
    caveat: 'A company’s origin or office history does not establish the location of a current vacancy.'
  },
  {
    id: 'employer-titan', domain: 'employers', category: 'Employer research',
    title: 'Titan Company',
    summary: 'Consumer and manufacturing business spanning design, engineering, retail, supply chain and corporate functions.',
    geography: 'India · operations include Tamil Nadu; verify each role',
    tags: ['Titan', 'manufacturing', 'retail', 'design'],
    facts: [{ label: 'Career breadth', value: 'Product/design, manufacturing, quality, retail, analytics, supply chain and business roles' }, { label: 'Best comparison', value: 'Plant, retail and corporate roles should be evaluated as different careers' }],
    checks: ['Use the official careers page.', 'Identify worksite and function.', 'Ask what measurable responsibility a trainee receives.'],
    sources: [source('Titan Careers', 'https://www.titancompany.in/careers')],
    compare: { employerType: 'Consumer + manufacturing', studentRoutes: 'Role-dependent', tamilNaduPresence: true, officialOpenings: 'Live careers site' },
    caveat: 'Brand familiarity is not evidence of role fit; inspect job content, worksite and employment terms.'
  },
  {
    id: 'employer-ashok-leyland', domain: 'employers', category: 'Employer research',
    title: 'Ashok Leyland',
    summary: 'Commercial-vehicle manufacturer relevant to automotive design, manufacturing, quality, supply chain, service and digital functions.',
    geography: 'India · Tamil Nadu operations; verify job location',
    tags: ['Ashok Leyland', 'automotive', 'manufacturing'],
    facts: [{ label: 'Strong evidence', value: 'Vehicle/team project, manufacturing improvement, diagnostics or controls work' }, { label: 'Function check', value: 'Corporate, plant, R&D and field-service roles differ materially' }],
    checks: ['Use the official career channel.', 'Verify plant/site and shifts.', 'Compare graduate roles with apprenticeship routes.'],
    sources: [source('Ashok Leyland Careers', 'https://www.ashokleyland.com/in/en/careers')],
    compare: { employerType: 'Automotive manufacturing', studentRoutes: 'Role and programme dependent', tamilNaduPresence: true, officialOpenings: 'Official careers site' },
    caveat: 'No hiring volume or selection likelihood is implied; consult the current official posting.'
  },
  {
    id: 'employer-l-and-t', domain: 'employers', category: 'Employer research',
    title: 'Larsen & Toubro',
    summary: 'Diversified engineering group with role families across projects, manufacturing, technology and services.',
    geography: 'India and international project sites; location mobility may matter',
    tags: ['L&T', 'engineering', 'projects', 'manufacturing'],
    facts: [{ label: 'Fit question', value: 'Are you open to project sites, travel or relocation if the role requires it?' }, { label: 'Evidence', value: 'Applied engineering project, safety awareness and disciplined execution' }],
    checks: ['Read business-unit and location details.', 'Distinguish site execution from design-office work.', 'Use only official careers channels.'],
    sources: [source('L&T Careers', 'https://www.larsentoubro.com/corporate/careers/')],
    compare: { employerType: 'Diversified engineering', studentRoutes: 'Business-unit dependent', tamilNaduPresence: true, officialOpenings: 'Official careers site' },
    caveat: 'The group contains very different businesses. Compare the employing entity, project and role—not the umbrella brand.'
  }
];

export const jobLocationResearchMetadata = {
  id: 'zysham-employment-research-v1',
  title: 'Jobs, skills, apprenticeships, employers and Tamil Nadu career clusters',
  generatedAt: CHECKED_AT,
  checkedAt: CHECKED_AT,
  audience: 'Students and parents, with Tamil Nadu as the initial rollout region',
  recordCount: jobLocationResearch.length,
  domains: jobLocationResearch.reduce((counts, item) => {
    counts[item.domain] = (counts[item.domain] || 0) + 1;
    return counts;
  }, {}),
  methodology: [
    'Prioritises Government of India, Government of Tamil Nadu, regulators, sector skill councils and official employer career pages.',
    'Describes role families and decision criteria; it does not create employer or location league tables.',
    'Excludes salary bands, vacancy counts and selection rates because they are volatile and easily misleading.',
    'Every record carries a checked date, direct source URLs, action checks and a caveat.'
  ],
  globalCaveats: [
    'Live vacancies, eligibility, deadlines, fees, regulation and work locations must be rechecked at the linked official source.',
    'Cluster strength is not a promise that a specific employer is hiring.',
    'Employer inclusion is illustrative, not a ranking, endorsement or prediction of fit.',
    'Never pay for NCS services or trust recruitment communication without verifying the employer’s official domain.'
  ],
  primaryPortals: [
    source('National Career Service', 'https://www.ncs.gov.in/'),
    source('Apprenticeship India', 'https://www.apprenticeshipindia.gov.in/'),
    source('NATS 2.0', 'https://nats.education.gov.in/'),
    source('NSDC occupational standards', 'https://www.nsdcindia.org/nos'),
    source('Skill India Digital Hub', 'https://www.skillindiadigital.gov.in/'),
    source('Guidance Tamil Nadu', 'https://www.investingintamilnadu.com/'),
    source('SIPCOT', 'https://sipcotweb.tn.gov.in/')
  ]
};

