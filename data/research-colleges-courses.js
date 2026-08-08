/* Official-source research shelf: colleges, programmes, admissions and funding.
 * Rankings are reproduced only where NIRF publishes an exact rank. Fees and
 * cut-offs are intentionally not inferred; applicants are sent to the live
 * authority because both change by programme, category and admission year.
 */

export const collegeCourseResearchMetadata = {
  id: 'college-course-research-2026-08',
  title: 'College, course, admission and affordability evidence',
  checkedAt: '2026-08-08',
  regionPriority: ['Tamil Nadu', 'India'],
  rankingEdition: 'NIRF India Rankings 2025',
  recordSchema: 'zysham-research-v1',
  policy: 'Official sources only. A NIRF category rank is not a course rank, placement promise, accreditation decision or prediction of student fit.',
  filters: ['geography', 'domain', 'category', 'course family', 'admission route', 'institution type', 'rank category', 'funding route'],
};

const OFFICIAL = {
  nirfEngineering: 'https://www.nirfindia.org/Rankings/2025/EngineeringRanking.html',
  nirfCollege: 'https://www.nirfindia.org/Rankings/2025/CollegeRanking.html',
  nirfUniversity: 'https://www.nirfindia.org/Rankings/2025/UniversityRanking.html',
  nirfMedical: 'https://www.nirfindia.org/Rankings/2025/MedicalRanking.html',
  nirfManagement: 'https://www.nirfindia.org/Rankings/2025/ManagementRanking.html',
  ugcCollege: 'https://www.ugc.gov.in/colleges',
  ugcAutonomous: 'https://www.ugc.gov.in/colleges/Autonomous_Colleges_list',
  aicte: 'https://facilities.aicte-india.org/dashboard/pages/angulardashboard.php#!/approved',
  josaa: 'https://josaa.nic.in/',
  jeeMain: 'https://jeemain.nta.nic.in/information-bulletin/',
  jeeAdvanced: 'https://jeeadv.ac.in/',
  tnea: 'https://www.tneaonline.org/',
  neet: 'https://neet.nta.nic.in/admission-bulletin/',
  mcc: 'https://mcc.nic.in/ug-medical-counselling/',
  cuet: 'https://cuet.nta.nic.in/',
  nsp: 'https://scholarships.gov.in/',
  tnScholarship: 'https://ssp.tn.gov.in/',
  vidyalakshmi: 'https://www.vidyalakshmi.co.in/Students/',
};

const src = (label, url) => ({ label, url, checkedAt: '2026-08-08' });
const rankFacts = (category, rank, score) => [
  { label: 'Official ranking', value: `NIRF 2025 ${category} · Rank ${rank}` },
  { label: 'NIRF score', value: String(score) },
];

const tnEngineering = [
  ['iit-madras','Indian Institute of Technology Madras','Chennai',1,88.72,'IIT','JEE Advanced + JoSAA','https://www.iitm.ac.in/academics/study-at-iitm/undergraduate-programmes','https://fees.iitm.ac.in/'],
  ['nit-trichy','National Institute of Technology Tiruchirappalli','Tiruchirappalli',9,68.14,'NIT','JEE Main + JoSAA','https://www.nitt.edu/home/admissions/','https://www.nitt.edu/home/academics/fees_section/'],
  ['srmist','SRM Institute of Science and Technology','Chennai',14,65.83,'Deemed university','Institution entrance / programme route','https://www.srmist.edu.in/admission-india/','https://www.srmist.edu.in/admission-india/engineering/fees/tuition-fee/'],
  ['vit-vellore','Vellore Institute of Technology','Vellore',16,65.25,'Deemed university','VITEEE / programme route','https://vit.ac.in/admissions/overview','https://vit.ac.in/admissions/fees'],
  ['anna-university','Anna University','Chennai',20,63.80,'State university','TNEA for relevant UG engineering seats','https://www.annauniv.edu/academic_courses.php','https://www.annauniv.edu/fee_structure.php'],
  ['amrita','Amrita Vishwa Vidyapeetham','Coimbatore',23,62.49,'Deemed university','AEEE / JEE route; verify programme','https://www.amrita.edu/admissions/btech/','https://www.amrita.edu/admissions/btech/fees/'],
  ['kalasalingam','Kalasalingam Academy of Research and Education','Krishnankoil',33,59.52,'Deemed university','Institution / national exam route','https://www.kalasalingam.ac.in/admissions/','https://www.kalasalingam.ac.in/fee-structure/'],
  ['sastra','SASTRA Deemed University','Thanjavur',40,58.02,'Deemed university','Institution merit route; verify current policy','https://www.sastra.edu/admissions/','https://www.sastra.edu/admissions/fee-structure.html'],
  ['saveetha','Saveetha Institute of Medical and Technical Sciences','Chennai',45,56.55,'Deemed university','Programme-specific','https://www.saveetha.com/admissions','https://www.saveetha.com/fee-structure'],
  ['ssn','Sri Sivasubramaniya Nadar College of Engineering','Kalavakkam',47,56.08,'Autonomous college','TNEA / management route as officially notified','https://www.ssn.edu.in/admissions/','https://www.ssn.edu.in/fee-structure/'],
  ['psg-tech','PSG College of Technology','Coimbatore',67,50.64,'Autonomous college','TNEA for relevant government-quota seats','https://www.psgtech.edu/admissions.php','https://www.psgtech.edu/fees.php'],
  ['sathyabama','Sathyabama Institute of Science and Technology','Chennai',67,50.64,'Deemed university','Institution entrance / programme route','https://www.sathyabama.ac.in/admissions','https://www.sathyabama.ac.in/fee-structure'],
];

const indiaEngineering = [
  ['iit-delhi','Indian Institute of Technology Delhi','New Delhi','Delhi',2,85.74,'https://home.iitd.ac.in/undergraduate.php'],
  ['iit-bombay','Indian Institute of Technology Bombay','Mumbai','Maharashtra',3,83.65,'https://www.iitb.ac.in/newacadhome/toadmission.jsp'],
  ['iit-kanpur','Indian Institute of Technology Kanpur','Kanpur','Uttar Pradesh',4,81.82,'https://www.iitk.ac.in/doaa/admissions'],
  ['iit-kharagpur','Indian Institute of Technology Kharagpur','Kharagpur','West Bengal',5,78.69,'https://www.iitkgp.ac.in/admission-ug'],
  ['iit-roorkee','Indian Institute of Technology Roorkee','Roorkee','Uttarakhand',6,75.44,'https://iitr.ac.in/Academics/Admission.html'],
  ['iit-hyderabad','Indian Institute of Technology Hyderabad','Hyderabad','Telangana',7,72.31,'https://www.iith.ac.in/academics/undergraduate/'],
  ['iit-guwahati','Indian Institute of Technology Guwahati','Guwahati','Assam',8,72.24,'https://www.iitg.ac.in/acad/admission/'],
  ['iit-bhu','IIT (BHU) Varanasi','Varanasi','Uttar Pradesh',10,67.24,'https://www.iitbhu.ac.in/acad/admissions'],
  ['bits-pilani','Birla Institute of Technology & Science, Pilani','Pilani','Rajasthan',11,67.02,'https://www.bitsadmission.com/'],
  ['iit-indore','Indian Institute of Technology Indore','Indore','Madhya Pradesh',12,66.65,'https://academic.iiti.ac.in/admissions.php'],
  ['nit-rourkela','National Institute of Technology Rourkela','Rourkela','Odisha',13,66.62,'https://www.nitrkl.ac.in/Academic/Admission/'],
  ['nitk','National Institute of Technology Karnataka, Surathkal','Surathkal','Karnataka',17,64.59,'https://www.nitk.ac.in/admissions'],
];

export const collegeCourseResearch = [
  ...tnEngineering.map(([id,title,city,rank,score,type,route,admissionUrl,feeUrl]) => ({
    id, domain: 'College research', category: 'Engineering institution', title,
    summary: `${city}-based option with an exact NIRF 2025 Engineering rank. Compare the actual branch, curriculum, access route and full cost—not the institution name alone.`,
    geography: { country: 'India', state: 'Tamil Nadu', city, priority: 'Tamil Nadu first' },
    tags: ['Tamil Nadu','engineering','NIRF 2025',type,route],
    facts: [...rankFacts('Engineering',rank,score),{label:'Institution type',value:type},{label:'Primary admission evidence',value:route},{label:'Cost status',value:'Open the current official fee schedule; hostel, mess and deposits may be separate'}],
    checks: ['Confirm the exact programme is offered in the intended campus','Verify current recognition/approval for the programme where applicable','Compare compulsory subjects, laboratories, project access and internship structure','Read the current fee schedule and refund policy before paying','Use official counselling cut-offs only as historical context, never as a guarantee'],
    sources: [src('NIRF 2025 Engineering',OFFICIAL.nirfEngineering),src('Official admissions / programmes',admissionUrl),src('Official fee information',feeUrl),src('UGC college lookup',OFFICIAL.ugcCollege)],
    compare: { rankCategory:'Engineering',rankYear:2025,rank,score,institutionType:type,admissionRoute:route,costComparable:false,costBasis:'Programme, category, scholarship and residence dependent',regionPriority:1 },
    caveat: 'NIRF Engineering is institution/category evidence, not a branch ranking. Fees and routes can change each cycle; verify the linked current notice.'
  })),
  ...indiaEngineering.map(([id,title,city,state,rank,score,admissionUrl]) => ({
    id, domain:'College research',category:'India engineering benchmark',title,
    summary:`A national comparison point in ${city}; use it to widen the fit conversation only when programme, affordability and relocation work for the student.`,
    geography:{country:'India',state,city,priority:'India wide'},tags:['India','engineering','NIRF 2025','JoSAA'],
    facts:[...rankFacts('Engineering',rank,score),{label:'Primary route',value:id==='bits-pilani'?'BITSAT / official BITS admission process':'JEE Advanced or JEE Main, as applicable, followed by official allocation'}],
    checks:['Inspect programme curriculum and department evidence','Budget tuition plus residence and travel','Check the current eligibility and seat-allocation rules','Plan a credible state-level and adjacent-course fallback'],
    sources:[src('NIRF 2025 Engineering',OFFICIAL.nirfEngineering),src('Official institution admissions',admissionUrl),src(id==='bits-pilani'?'Official BITS admission portal':'JoSAA 2026',id==='bits-pilani'?'https://www.bitsadmission.com/':OFFICIAL.josaa)],
    compare:{rankCategory:'Engineering',rankYear:2025,rank,score,admissionRoute:id==='bits-pilani'?'BITSAT / official BITS route':'JoSAA route as applicable',costComparable:false,regionPriority:2},
    caveat:'This national benchmark does not imply it is a better personal choice than a Tamil Nadu option. Verify live programme, fees and rules.'
  })),
  {
    id:'tnea-route',domain:'Admissions',category:'Tamil Nadu counselling',title:'TNEA · Tamil Nadu Engineering Admissions',summary:'The official single-window evidence route for eligible Tamil Nadu engineering admissions: registration, certificate verification, rank publication, choice filling, allotment, confirmation and reporting.',geography:{country:'India',state:'Tamil Nadu',city:'Statewide',priority:'Tamil Nadu first'},tags:['TNEA','engineering','counselling','Tamil Nadu','choice filling'],facts:[{label:'Selection basis',value:'Qualifying-examination marks and official ranking rules; no separate TNEA entrance exam'},{label:'Workflow',value:'Register → verify → rank → fill ordered choices → allot → confirm → report'},{label:'Cost evidence',value:'Registration and college fees must be read from the current brochure/allotment/institution notice'}],checks:['Read the current information brochure','Prepare nativity, community, income and first-graduate evidence where applicable','Order choices by genuine preference—not predicted availability','Confirm deadlines and allotment response option before every round'],sources:[src('TNEA official portal',OFFICIAL.tnea),src('Directorate of Technical Education Tamil Nadu','https://dte.tn.gov.in/')],compare:{routeType:'State counselling',exam:'No separate entrance test',choiceOrderMatters:true,regionPriority:1},caveat:'Dates, eligibility, reservations, fees, seat matrix and participating colleges change annually.'
  },
  {
    id:'josaa-route',domain:'Admissions',category:'National counselling',title:'JoSAA · IIT, NIT, IIIT and GFTI seat allocation',summary:'The Ministry of Education’s joint allocation platform for 138 participating institutes in 2026–27, using JEE Advanced and JEE Main pathways as applicable.',geography:{country:'India',state:'All India',city:'Online',priority:'India wide'},tags:['JoSAA','JEE Main','JEE Advanced','IIT','NIT','IIIT'],facts:[{label:'2026 scope',value:'23 IITs, IISc Bengaluru, 31 NITs, IIEST Shibpur, 26 IIITs and 56 other GFTIs'},{label:'Choice logic',value:'Eligibility plus ordered choices, category and seat availability under current business rules'},{label:'Cost evidence',value:'Seat acceptance, partial admission and institute fees are distinct; read current notices'}],checks:['Read 2026 Business Rules, schedule and restrictions','Verify qualifying exam and programme-specific eligibility','Model choices as reach / fit / safer without sacrificing true preference order','Budget seat-acceptance and institute reporting payments'],sources:[src('JoSAA 2026',OFFICIAL.josaa),src('JEE Main 2026 bulletin',OFFICIAL.jeeMain),src('JEE Advanced official site',OFFICIAL.jeeAdvanced),src('Programme restrictions','https://josaa.nic.in/restrictions-at-institutes-academic-programs-level/')],compare:{routeType:'National counselling',participatingInstitutes:138,choiceOrderMatters:true,regionPriority:2},caveat:'Eligibility and allocation rules are session-specific. Historical opening/closing ranks are planning evidence, not predictions.'
  },
  {
    id:'medical-route',domain:'Admissions',category:'Medical and dental',title:'NEET-UG + official counselling route',summary:'Use the NTA bulletin for examination eligibility and MCC or the relevant state counselling authority for allocation. Institution marketing is not a substitute for these rules.',geography:{country:'India',state:'Tamil Nadu + India',city:'Online',priority:'Tamil Nadu first'},tags:['NEET UG','MBBS','BDS','MCC','medical'],facts:[{label:'Qualifying route',value:'NEET-UG under the current NTA bulletin'},{label:'Allocation',value:'MCC and/or authorised state counselling, depending on seat type'},{label:'Cost risk',value:'Government, deemed and private fee structures are not comparable; inspect the exact seat category'}],checks:['Confirm personal tolerance for clinical work before optimising rank','Verify college recognition and exact seat category','Read tuition, hostel, service bond and discontinuation terms','Use only official counselling notices and allotment portals'],sources:[src('NEET-UG official bulletin',OFFICIAL.neet),src('MCC UG Medical Counselling',OFFICIAL.mcc),src('National Medical Commission college search','https://www.nmc.org.in/information-desk/college-and-course-search/')],compare:{routeType:'Exam + counselling',exam:'NEET-UG',costComparable:false,regionPriority:1},caveat:'Seat category, state eligibility, bonds and fees can materially change the decision; verify each in the current counselling documents.'
  },
  {
    id:'cuet-route',domain:'Admissions',category:'Arts, science and commerce',title:'CUET-UG and university-specific admissions',summary:'CUET is an entrance route used by participating universities, not a universal admission process for every arts, science or commerce college.',geography:{country:'India',state:'All India',city:'Online',priority:'India wide'},tags:['CUET UG','arts','science','commerce','central universities'],facts:[{label:'Exam authority',value:'National Testing Agency'},{label:'Programme mapping',value:'Required subjects and eligibility are set by each participating university/programme'},{label:'Decision focus',value:'Curriculum, department, language, campus, cost and progression—not a generic university label'}],checks:['Map Class 12 subjects to programme eligibility','Choose CUET test papers only after reading university requirements','Check whether the target institution actually participates','Keep Tamil Nadu university/college application routes separately'],sources:[src('CUET-UG official portal',OFFICIAL.cuet),src('UGC college lookup',OFFICIAL.ugcCollege)],compare:{routeType:'Entrance + institution allocation',exam:'CUET-UG where adopted',regionPriority:2},caveat:'Participation and subject combinations change. Always reconcile the NTA bulletin with the target university prospectus.'
  },
  {
    id:'recognition-audit',domain:'Verification',category:'Recognition and approval',title:'Verify the institution and the exact programme',summary:'Recognition is a gate, not a quality score. University status, college affiliation, autonomous status and programme-level approval are different claims.',geography:{country:'India',state:'Tamil Nadu + India',city:'Online',priority:'Universal'},tags:['UGC','AICTE','NMC','recognition','approval'],facts:[{label:'Institution / college evidence',value:'UGC official university and college records'},{label:'Technical-programme evidence',value:'AICTE approved-institute dashboard where applicable'},{label:'Professional programmes',value:'Check the relevant statutory regulator, not only UGC'}],checks:['Match exact legal name, campus and programme','Check approval for the intended academic year','Confirm awarding university and affiliation','Save a dated copy or screenshot of the official result'],sources:[src('UGC college lookup',OFFICIAL.ugcCollege),src('UGC autonomous college list',OFFICIAL.ugcAutonomous),src('AICTE approved institutes',OFFICIAL.aicte),src('NMC college and course search','https://www.nmc.org.in/information-desk/college-and-course-search/')],compare:{routeType:'Due diligence',rankApplicable:false,regionPriority:1},caveat:'Do not interpret inclusion in a regulator list as a ranking, placement endorsement or guarantee of current programme quality.'
  },
  {
    id:'nsp-funding',domain:'Affordability',category:'Scholarships',title:'National Scholarship Portal',summary:'The Government of India’s common scholarship application and verification portal. Match schemes through the live eligibility rules instead of relying on copied lists.',geography:{country:'India',state:'All India',city:'Online',priority:'Universal'},tags:['scholarship','NSP','income','category','merit'],facts:[{label:'Use',value:'Scheme discovery, application, verification and status through the official portal'},{label:'Cost model',value:'Treat scholarship as conditional until sanctioned; retain a plan that works if delayed or rejected'},{label:'Documents',value:'Scheme-specific identity, institution, bank, income, category and academic records'}],checks:['Read scheme ministry, eligibility and closing date','Confirm institution/course eligibility','Use a student-controlled bank/mobile/email trail','Never pay an agent to guarantee selection'],sources:[src('National Scholarship Portal',OFFICIAL.nsp)],compare:{fundingType:'Scholarship portal',repayment:false,regionPriority:1},caveat:'Schemes, amounts and deadlines change. Application submission is not scholarship sanction.'
  },
  {
    id:'tn-scholarship-funding',domain:'Affordability',category:'Tamil Nadu scholarships',title:'Tamil Nadu State Scholarship Portal',summary:'Official state route for eligible Tamil Nadu scholarship schemes and institutional verification.',geography:{country:'India',state:'Tamil Nadu',city:'Online',priority:'Tamil Nadu first'},tags:['Tamil Nadu','scholarship','state portal','first graduate'],facts:[{label:'Scope',value:'Tamil Nadu schemes shown in the live state portal'},{label:'Decision rule',value:'Verify community, income, institution, course and study-mode eligibility scheme by scheme'},{label:'Budget rule',value:'Do not subtract an expected award until eligibility and sanction are confirmed'}],checks:['Use the current portal scheme list','Check institution nodal-officer requirements','Align names and bank details across records','Preserve acknowledgement and status evidence'],sources:[src('Tamil Nadu State Scholarship Portal',OFFICIAL.tnScholarship),src('Tamil Nadu Higher Education Department','https://www.tn.gov.in/department/12')],compare:{fundingType:'State scholarship portal',repayment:false,regionPriority:1},caveat:'Availability and rules are scheme- and year-specific; first-graduate concessions and scholarships are not interchangeable.'
  },
  {
    id:'vidyalakshmi-funding',domain:'Affordability',category:'Education finance',title:'Vidya Lakshmi education-loan portal',summary:'A Government-supported route to inspect and apply for education-loan products. A loan expands timing, not affordability; model repayment against conservative outcomes.',geography:{country:'India',state:'All India',city:'Online',priority:'Universal'},tags:['education loan','affordability','repayment','Vidya Lakshmi'],facts:[{label:'Funding type',value:'Repayable education loan—not scholarship'},{label:'Compare',value:'Interest, moratorium, collateral/co-borrower, eligible expenses, processing and prepayment'},{label:'Stress test',value:'Model repayment at a lower-than-hoped starting salary and a delayed first job'}],checks:['Compare official lender terms','Include hostel, devices, travel and deposits in total cost','Understand when interest starts and capitalises','Never select a course only because financing is available'],sources:[src('Vidya Lakshmi official portal',OFFICIAL.vidyalakshmi),src('Department of Higher Education education loans','https://www.education.gov.in/scholarships-education-loan-0')],compare:{fundingType:'Loan marketplace',repayment:true,rankApplicable:false,regionPriority:1},caveat:'Displayed products and lender decisions can change. Read the sanction letter; portal presence is not approval or a recommendation.'
  }
];

if (typeof window !== 'undefined') {
  window.collegeCourseResearch = collegeCourseResearch;
  window.collegeCourseResearchMetadata = collegeCourseResearchMetadata;
}
