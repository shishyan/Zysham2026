const checkedAt = '2026-08-08';

const source = (label, url) => ({ label, url, checkedAt });
const fact = (label, value) => ({ label, value });

const boardSource = {
  cbse: source('CBSE curriculum', 'https://www.cbse.gov.in/cbsenew/curriculum.html'),
  cisce: source('CISCE regulations and syllabuses', 'https://cisce.org/regulations-and-syllabuses/'),
  tn: source('Tamil Nadu DGE higher-secondary group list', 'https://www.dge.tn.gov.in/docs/examina/HSE_E.pdf'),
  nios: source('NIOS learner FAQs', 'https://rcdelhi.nios.ac.in/page/faqs.html'),
};

export const schoolExamResearch = [
  {
    id: 'board-cbse', domain: 'school', category: 'Board', title: 'CBSE: Classes XI–XII',
    summary: 'A national board with a broad elective catalogue. The exact combination is still constrained by what the individual school offers.',
    geography: 'India', tags: ['CBSE', 'Class 11', 'Class 12', 'national', 'Tamil available'],
    facts: [fact('Core structure', 'At least five subjects; a language plus academic or skill electives under the current scheme'), fact('Useful breadth', 'Physics, Chemistry, Biology, Mathematics, Applied Mathematics, Computer Science, Economics, Psychology, Legal Studies, arts and skill subjects'), fact('Best verification', 'Check both the CBSE curriculum and the school’s current subject-offering sheet')],
    checks: ['Confirm that the school is currently affiliated in CBSE SARAS', 'Ask which combinations actually ran in the previous two batches', 'Map subjects to each target university’s eligibility—not only to an exam'],
    sources: [boardSource.cbse, source('CBSE affiliation SARAS directory', 'https://saras.cbse.gov.in/saras/AffiliatedList/ListOfSchdirReport')],
    compare: { governance: 'National board', flexibility: 'High on paper; school-dependent', examStyle: 'Board examination with practical/internal components by subject', portability: 'High' },
    caveat: 'CBSE does not guarantee that every affiliated school offers every listed elective or combination.'
  },
  {
    id: 'board-isc', domain: 'school', category: 'Board', title: 'ISC: Classes XI–XII',
    summary: 'CISCE’s senior-secondary qualification, with English central to the programme and a wide subject range in participating schools.',
    geography: 'India', tags: ['ISC', 'CISCE', 'Class 11', 'Class 12', 'English'],
    facts: [fact('Qualification', 'Indian School Certificate (ISC)'), fact('Subject planning', 'Choose only from combinations the school is registered and staffed to offer'), fact('Current-cycle check', 'CISCE publishes year-specific regulations and revised syllabuses')],
    checks: ['Verify the school in CISCE’s official locator', 'Read the regulation for the candidate’s examination year', 'Check practical/project requirements before switching boards'],
    sources: [boardSource.cisce, source('CISCE school locator', 'https://locate.cisce.org/')],
    compare: { governance: 'National council', flexibility: 'Broad; school-dependent', examStyle: 'Board examination plus subject-specific practical/project work', portability: 'High' },
    caveat: 'Use the regulation for the actual examination year; syllabuses and subject rules can be revised.'
  },
  {
    id: 'board-tn-hse', domain: 'school', category: 'Board', title: 'Tamil Nadu State Board: HSE (+1/+2)',
    summary: 'Tamil Nadu’s group-code system provides explicit four-subject routes. This makes the choice legible, but a chosen group can close later eligibility doors.',
    geography: 'Tamil Nadu', tags: ['State Board', 'HSE', 'Class 11', 'Class 12', 'group code'],
    facts: [fact('Official authority', 'Directorate of Government Examinations (DGE), Tamil Nadu'), fact('Major public exams', 'SSLC and Higher Secondary examinations'), fact('Decision unit', 'A defined group code containing four Part III subjects')],
    checks: ['Record the exact group code—not merely “science” or “commerce”', 'Verify school recognition and the group sanctioned at that school', 'Retain official mark sheets because TNEA ranking uses qualifying-exam marks'],
    sources: [boardSource.tn, source('Tamil Nadu DGE portal', 'https://www.dge.tn.gov.in/'), source('TN Schools portal', 'https://schools.tn.gov.in/')],
    compare: { governance: 'Tamil Nadu', flexibility: 'Structured group codes', examStyle: 'State public examinations', portability: 'Recognised nationally; course eligibility remains subject-specific' },
    caveat: 'Schools do not necessarily offer every official group. Confirm the group code and medium directly with the school.'
  },
  {
    id: 'board-nios', domain: 'school', category: 'Board', title: 'NIOS: flexible Secondary and Senior Secondary',
    summary: 'A recognised open-school route useful for flexible pacing, subject repair or non-traditional schedules; downstream institutions may impose exact subject combinations.',
    geography: 'India', tags: ['NIOS', 'open schooling', 'flexible', 'Senior Secondary'],
    facts: [fact('Senior-secondary minimum age', '15 years as on 31 July of admission year, per NIOS FAQ'), fact('Senior-secondary examples', 'Tamil, English, Mathematics, Physics, Chemistry, Biology, Economics, Accountancy, Psychology, Computer Science and others'), fact('Timing rule', 'NIOS warns of a compulsory two-year gap for a Senior Secondary passing certificate after Secondary; without it, exam registration is limited')],
    checks: ['Use only the official NIOS/SDMIS portals', 'Check practical-study-centre availability locally', 'Get written confirmation of target-course subject eligibility before enrolling'],
    sources: [boardSource.nios, source('NIOS admission portal', 'https://sdmis.nios.ac.in/'), source('NIOS accreditation finder', 'https://sdmis.nios.ac.in/home/accredation')],
    compare: { governance: 'Autonomous institution under Ministry of Education', flexibility: 'Very high', examStyle: 'Public examination with practicals where applicable', portability: 'Recognised, but programme-specific conditions matter' },
    caveat: 'Open-school recognition and eligibility for a particular degree are separate questions; verify the admitting authority’s latest rule.'
  },

  ...[
    ['tn-2502','2502 · Engineering/computing','Physics · Chemistry · Computer Science · Mathematics','Engineering, computing, mathematics and many physical-science routes','Does not contain Biology; it is not a medicine route.'],
    ['tn-2503','2503 · PCMB','Physics · Chemistry · Biology · Mathematics','Keeps engineering/mathematics and many health/life-science prerequisites open','Heavy four-core workload; breadth is valuable only if the learner can sustain it.'],
    ['tn-2601','2601 · Biology + computing','Physics · Chemistry · Biology · Computer Science','Medicine/life science plus school-level computing exposure','Without Mathematics, verify eligibility for each engineering, architecture, economics or computing programme.'],
    ['tn-2608','2608 · Botany/Zoology','Physics · Chemistry · Botany · Zoology','Biology-intensive preparation and health/life sciences','No Mathematics; check every non-medical quantitative course separately.'],
    ['tn-2501','2501 · Statistics + Mathematics','Physics · Chemistry · Statistics · Mathematics','Engineering, statistics, quantitative and physical-science directions','No Biology. Statistics is not a substitute for Mathematics where Mathematics is compulsory.'],
    ['tn-2702','2702 · Commerce + computing','Economics · Commerce · Accountancy · Computer Applications','Commerce, accounting, business and applied-computing directions','Business Mathematics is absent; some quantitative degrees may require Mathematics.'],
    ['tn-2801','2801 · Commerce + business mathematics','Economics · Commerce · Accountancy · Business Mathematics and Statistics','Commerce with stronger quantitative preparation; useful for analytics, finance and economics pathways','Always check whether a university accepts Business Mathematics where it specifies Mathematics.'],
    ['tn-2704','2704 · Commerce + history','History · Economics · Commerce · Accountancy','Commerce, humanities, public-policy and business directions','No Mathematics or Computer Applications in the group.'],
    ['tn-2903','2903 · Humanities/social science','History · Economics · Political Science · Geography','Law, policy, civil services foundation, social sciences and humanities','Course access can be broad, but specialised quantitative/science prerequisites remain closed.'],
    ['tn-2605','2605 · Biology + nutrition','Physics · Chemistry · Biology · Nutrition and Dietetics','Health, nutrition, bioscience and allied-health exploration','Eligibility and professional recognition vary greatly across allied-health programmes.']
  ].map(([id,title,subjects,fit,caveat]) => ({
    id, domain: 'school', category: 'Tamil Nadu subject route', title,
    summary: subjects, geography: 'Tamil Nadu', tags: ['Tamil Nadu HSE', 'subject combination', ...subjects.split(' · ')],
    facts: [fact('Part III subjects', subjects), fact('Keeps visible', fit), fact('Decision test', 'Compare this exact subject set against 3–5 likely degree eligibility pages')],
    checks: ['Confirm this group is currently offered by the school', 'Inspect timetable, lab and teacher availability', 'Do not infer degree eligibility from the group’s informal name'],
    sources: [boardSource.tn], compare: { board: 'Tamil Nadu HSE', route: title.split(' · ')[1], subjects, locationPriority: 'School availability matters in Classes XI–XII' }, caveat
  })),

  ...[
    ['jee-main','Engineering entrance','JEE Main','B.E./B.Tech, B.Arch and B.Planning routes including the gateway used for NIT/IIIT/CFTI admissions','India',['Physics','Chemistry','Mathematics'],'NTA','https://jeemain.nta.nic.in/information-bulletin/','Programme/board-performance rules and subject requirements must be read from the current bulletin and admitting institute.'],
    ['jee-advanced','Engineering entrance','JEE Advanced','Admission route to IIT undergraduate programmes after satisfying JEE Main and other current eligibility conditions','India',['Physics','Chemistry','Mathematics'],'IIT organising institute','https://jeeadv.ac.in/','Eligibility includes attempt, age, Class XII appearance and JEE Main performance rules that change by cycle; read the current brochure.'],
    ['tnea','Tamil Nadu admission','TNEA','Single-window counselling for covered first-year B.E./B.Tech seats; rank is derived from qualifying-examination marks under the brochure, not a separate TNEA entrance test','Tamil Nadu',['Mathematics','Physics','Chemistry'],'Tamil Nadu DoTE','https://www.tneaonline.org/','Nativity, reservation, special-category and minimum-mark rules are detailed and document-sensitive.'],
    ['neet-ug','Medical entrance','NEET (UG)','Common national entrance for undergraduate medical education and other notified health programmes','India',['Physics','Chemistry','Biology/Biotechnology','English'],'NTA','https://neet.nta.nic.in/admission-bulletin/','Age, qualifying subjects, counselling authority and programme coverage must be checked in the current bulletin.'],
    ['cuet-ug','University entrance','CUET (UG)','Entrance used by participating central and other universities; the university—not CUET alone—sets programme-specific subject mapping and eligibility','India',['Languages','Domain subjects','General Aptitude as applicable'],'NTA','https://cuet.nta.nic.in/information-bulletin/','Choosing a test paper does not itself establish eligibility for a degree. Check each university programme matrix.'],
    ['clat-ug','Law entrance','CLAT UG','Admission test for participating NLUs’ five-year integrated undergraduate law programmes','India',['Any recognised 10+2 stream'],'Consortium of NLUs','https://consortiumofnlus.ac.in/clat-2026/ug-eligibility.html','For CLAT 2026, minimum is 45% in 10+2 (40% for SC/ST/PwD) and no upper age limit; re-check the next cycle.'],
    ['nata','Architecture entrance','NATA','Architecture aptitude qualifier used by admitting authorities for B.Arch routes','India',['Physics','Mathematics','one permitted third subject'],'Council of Architecture','https://nata.in/assets/pdf/nata-brochure.pdf','For 2026, B.Arch admission requires the prescribed 10+2 subjects and 45% aggregate, or a 10+3 diploma with Mathematics and 45%; a NATA score does not guarantee admission.'],
    ['nid-dat','Design entrance','NID DAT (B.Des)','Design Aptitude Test route to NID B.Des programmes','India',['Any 10+2 stream'],'National Institute of Design','https://admissions.nid.edu/NIDA2026/Default.aspx','The 2026 handbook includes category-specific birth-date cut-offs and requires the qualifying exam result by its deadline.'],
    ['uceed','Design entrance','UCEED','Entrance for B.Des admissions at participating institutes, with institute-specific admission eligibility after qualification','India',['Any 10+2 stream; institute rules vary'],'IIT Bombay','https://www.uceed.iitb.ac.in/2026/','Qualifying UCEED does not guarantee admission; age, attempts, year of Class XII and institute subject rules apply.'],
    ['nift','Design/fashion entrance','NIFT Entrance Examination','National route to NIFT undergraduate design and fashion-technology programmes','India',['Any stream for B.Des','Mathematics required for B.F.Tech'],'NIFT / designated testing authority','https://www.nift.ac.in/admission','B.Des and B.F.Tech have different subject eligibility; use the current prospectus, not coaching summaries.'],
    ['nda','Defence entrance','NDA & NA Examination','UPSC examination for National Defence Academy and Naval Academy entry after Class XII','India',['Any stream for Army wing','PCM for Air Force/Naval wings and 10+2 Cadet Entry'],'UPSC','https://upsc.gov.in/examinations/active-examinations','Marital status, age window, sex/category provisions, physical and medical standards are cycle-specific.'],
    ['icar','Agriculture entrance','ICAR undergraduate admission through CUET (UG)','Agriculture and allied-science admission route used for notified ICAR-AU seats/programmes','India',['Programme-specific science/agriculture subjects'],'ICAR','https://icar.org.in/content/education-division','Use ICAR’s current counselling bulletin and university requirements alongside CUET paper selection.'],
    ['iiser-iat','Science entrance','IISER Aptitude Test (IAT)','Admission route to IISER undergraduate science programmes and other programmes notified for the cycle','India',['Science subjects; programme-specific mathematics conditions'],'IISER admissions','https://iiseradmission.in/','Subject eligibility differs by programme; Mathematics may be mandatory for particular degrees even when the test offers multiple science sections.']
  ].map(([id,category,title,summary,geography,subjects,authority,url,caveat]) => ({
    id, domain: 'exam', category, title, summary, geography, tags: [category, ...subjects],
    facts: [fact('Authority', authority), fact('School-subject signal', subjects.join(' · ')), fact('Route', summary)],
    checks: ['Open the current-cycle official bulletin', 'Check qualifying subjects and marks separately from exam eligibility', 'Check the final counselling/admitting authority and document rules'],
    sources: [source(`${authority} official information`, url)],
    compare: { authority, geography, subjects: subjects.join(', '), selectionMode: id === 'tnea' ? 'Class XII marks + counselling' : 'Entrance assessment + applicable counselling/admission rules' }, caveat
  })),

  {
    id: 'verify-school', domain: 'verification', category: 'School due diligence', title: 'Verify a school before comparing it',
    summary: 'Treat affiliation, recognition, actual subject availability, facilities and student support as separate evidence checks.',
    geography: 'Tamil Nadu', tags: ['verification', 'CBSE SARAS', 'CISCE locator', 'UDISE+', 'recognition'],
    facts: [fact('Identity check', 'Match school name, address and affiliation/recognition number'), fact('Offering check', 'Obtain the current Class XI group/elective sheet'), fact('Delivery check', 'Ask for teacher continuity, practical labs and recent cohorts—not brochure claims')],
    checks: ['Search the relevant board’s official directory', 'Compare the address and affiliation validity', 'Ask the school to document the exact subjects and medium', 'Visit laboratories and speak to current families where possible'],
    sources: [source('CBSE SARAS', 'https://saras.cbse.gov.in/saras/AffiliatedList/ListOfSchdirReport'), source('CISCE school locator', 'https://locate.cisce.org/'), source('UDISE+ school directory', 'https://src.udiseplus.gov.in/')],
    compare: { evidenceOrder: 'Official directory → current offering sheet → delivery evidence → outcomes/context', warning: 'A board label is not a quality rating' },
    caveat: 'Directories establish administrative status, not teaching quality or fit. Verify current details with the authority and school.'
  },
  {
    id: 'route-decision-rule', domain: 'planning', category: 'Decision tool', title: 'Subject-first eligibility audit',
    summary: 'Work backward from possible degrees to their compulsory Class XII subjects, then choose the least burdensome route that preserves genuinely plausible options.',
    geography: 'India', tags: ['comparison', 'eligibility', 'Class 10 decision', 'no-no method'],
    facts: [fact('Step 1', 'List 3 likely and 2 backup degree families'), fact('Step 2', 'Copy compulsory subjects from official university/admission pages'), fact('Step 3', 'Eliminate routes that conflict with strong “do not want” signals'), fact('Step 4', 'Compare nearby schools on actual delivery')],
    checks: ['Distinguish exam eligibility from admission eligibility', 'Do not add Biology or Mathematics “just in case” without workload evidence', 'Re-run the audit whenever the target programme changes'],
    sources: [boardSource.cbse, boardSource.tn, source('CUET official information bulletins', 'https://cuet.nta.nic.in/information-bulletin/'), source('TNEA official portal', 'https://www.tneaonline.org/')],
    compare: { optimisesFor: 'Option value × student fit × sustainable workload', avoids: 'Prestige-only and stream-label decisions' },
    caveat: 'This is a planning method, not an admission decision. The latest admitting authority rules prevail.'
  }
];

export const schoolExamResearchMetadata = {
  generatedAt: checkedAt,
  regionPriority: 'Tamil Nadu',
  recordCount: schoolExamResearch.length,
  schoolRecords: schoolExamResearch.filter((item) => item.domain === 'school').length,
  examRecords: schoolExamResearch.filter((item) => item.domain === 'exam').length,
  methodology: 'Factual fields derived from official board, examination, counselling and institutional sources; summaries are editorial synthesis.',
  updateRule: 'Re-check examination and admission records every cycle and school offerings before each application.',
};
