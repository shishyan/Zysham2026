const chapter = (track, subject, index, title, focus) => ({
  id: `${track}-${subject}-${index}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  number: index + 1,
  title,
  focus,
  summary: `${title} is best learned by connecting the central idea to a worked example, then retrieving it without notes. ${focus}`,
  concepts: [
    `Define the governing quantities and conditions in ${title}.`,
    `Translate words, diagrams, or observations into a usable model.`,
    `Test the result with units, limiting cases, and a second method.`,
  ],
  traps: ['Starting calculation before naming the unknown', 'Memorising a result without its conditions', 'Skipping units, signs, domain, or reasonableness checks'],
  practice: ['Explain the idea in 90 seconds without notes.', 'Solve one direct, one mixed, and one unfamiliar problem.', 'Write the first wrong step in an error log and repair it.'],
});

const source = {
  ncert11: 'https://ncert.nic.in/textbook.php?kegy1=0-10',
  ncert12: 'https://ncert.nic.in/textbook.php',
  jeeMain: 'https://jeemain.nta.nic.in/',
  jeeAdvanced: 'https://jeeadv.ac.in/',
};

const tracks = {
  grade11: {
    id: 'grade11', label: 'Grade 11', short: 'Build foundations', sourceLabel: 'Official NCERT textbooks', sourceUrl: source.ncert11,
    subjects: {
      Physics: [
        ['Units & Measurement', 'Treat uncertainty and significant figures as part of the answer.'], ['Motion in a Straight Line', 'Read graphs as stories of change, not decoration.'], ['Motion in a Plane', 'Resolve vectors before applying equations.'], ['Laws of Motion', 'Draw a clean free-body diagram for every body.'], ['Work, Energy & Power', 'Choose the energy or force view deliberately.'], ['System of Particles & Rotation', 'Track axis, torque, angular momentum, and inertia together.'], ['Gravitation', 'Separate field, potential, force, and energy.'], ['Mechanical Properties of Solids', 'Relate microscopic response to stress and strain.'], ['Mechanical Properties of Fluids', 'Use continuity and energy with their assumptions visible.'], ['Thermal Properties of Matter', 'Distinguish heat, temperature, and internal energy.'], ['Thermodynamics', 'Name the system, process, and sign convention first.'], ['Kinetic Theory', 'Connect molecular motion to macroscopic variables.'], ['Oscillations', 'Find equilibrium and restoring tendency before equations.'], ['Waves', 'Track phase, superposition, speed, and boundary conditions.'],
      ],
      Chemistry: [
        ['Some Basic Concepts of Chemistry', 'Make mole ratios the bridge between particles and measurements.'], ['Structure of Atom', 'Keep model limits distinct from observed spectra.'], ['Classification & Periodicity', 'Explain trends through effective nuclear charge and shells.'], ['Chemical Bonding', 'Use structure, charge, and energy—not shape memorisation alone.'], ['Thermodynamics', 'Separate state functions from path quantities.'], ['Equilibrium', 'Reason about competing rates and disturbances.'], ['Redox Reactions', 'Balance mass and charge before interpreting chemistry.'], ['Organic Chemistry: Principles', 'Electron movement and mechanism matter more than reaction lists.'], ['Hydrocarbons', 'Predict reactivity from bonding and intermediates.'],
      ],
      Mathematics: [
        ['Sets', 'State universe, membership, and operations precisely.'], ['Relations & Functions', 'Check domain, range, mapping, and invertibility.'], ['Trigonometric Functions', 'Use the unit circle to reason about identities.'], ['Complex Numbers', 'Move fluently between algebraic and geometric views.'], ['Linear Inequalities', 'Track sign changes and represent the solution set.'], ['Permutations & Combinations', 'Decide whether order and repetition matter before counting.'], ['Binomial Theorem', 'Use term structure, symmetry, and coefficient logic.'], ['Sequences & Series', 'Identify the pattern before applying a formula.'], ['Straight Lines', 'Connect slope, angle, distance, and forms of the equation.'], ['Conic Sections', 'Read each standard equation as geometry.'], ['Limits & Derivatives', 'Treat derivative as local change before rules.'], ['Statistics', 'Interpret spread alongside centre.'], ['Probability', 'Define the sample space before counting outcomes.'],
      ],
      Biology: [
        ['The Living World', 'Use defining evidence and hierarchy carefully.'], ['Biological Classification', 'Compare organisation, nutrition, reproduction, and evolution.'], ['Plant Kingdom', 'Build a feature-and-life-cycle matrix.'], ['Animal Kingdom', 'Use body plan evidence rather than isolated facts.'], ['Cell: Unit of Life', 'Link structure to transport, signalling, and function.'], ['Biomolecules', 'Relate chemical structure to biological role.'], ['Cell Cycle & Division', 'Follow chromosome state through each transition.'], ['Plant Physiology', 'Connect transport, photosynthesis, respiration, and regulation.'], ['Human Physiology', 'Study each system as regulation with feedback.'],
      ],
      'Computer Science': [
        ['Computer Systems', 'Trace information from representation to execution.'], ['Python Foundations', 'Predict program state before running code.'], ['Control Flow', 'Design conditions and loops from invariants.'], ['Data Collections', 'Choose a structure for the operations needed.'], ['Functions', 'Separate inputs, return values, scope, and side effects.'], ['Society, Law & Ethics', 'Treat privacy, bias, ownership, and access as design constraints.'],
      ],
    },
  },
  grade12: {
    id: 'grade12', label: 'Grade 12', short: 'Master boards + entry', sourceLabel: 'Official NCERT textbooks', sourceUrl: source.ncert12,
    subjects: {
      Physics: [['Electric Charges & Fields', 'Use symmetry before integration.'], ['Electrostatic Potential & Capacitance', 'Distinguish field, potential, and stored energy.'], ['Current Electricity', 'Model sources and networks, not ideal symbols only.'], ['Moving Charges & Magnetism', 'Track vector direction with a consistent rule.'], ['Electromagnetic Induction', 'Connect flux change to induced response.'], ['Alternating Current', 'Use phasors to expose phase and impedance.'], ['Ray & Wave Optics', 'Choose the right model for the scale.'], ['Dual Nature', 'Use experiments to motivate the quantum model.'], ['Atoms & Nuclei', 'Balance conservation with binding energy.'], ['Semiconductors', 'Trace charge carriers through actual circuits.']],
      Chemistry: [['Solutions', 'Connect composition to colligative behaviour.'], ['Electrochemistry', 'Relate cell potential, spontaneity, and concentration.'], ['Chemical Kinetics', 'Extract rate law from evidence.'], ['d- and f-Block Elements', 'Use electronic structure to explain trends.'], ['Coordination Compounds', 'Link naming, bonding, geometry, and properties.'], ['Haloalkanes & Haloarenes', 'Compare pathways through mechanism and conditions.'], ['Alcohols, Phenols & Ethers', 'Use structure to predict acidity and reactivity.'], ['Aldehydes, Ketones & Acids', 'Track nucleophiles, carbonyl polarity, and oxidation state.'], ['Amines', 'Compare basicity with solvation and resonance visible.'], ['Biomolecules', 'Connect molecular form to living function.']],
      Mathematics: [['Relations & Functions', 'Prove mapping properties, do not infer them visually.'], ['Inverse Trigonometry', 'Respect principal-value domains.'], ['Matrices', 'Treat matrix operations as transformations and systems.'], ['Determinants', 'Use structure before expansion.'], ['Continuity & Differentiability', 'Check local behaviour and hypotheses.'], ['Applications of Derivatives', 'Translate extrema into real constraints.'], ['Integrals', 'Choose substitution, parts, identities, or geometry deliberately.'], ['Applications of Integrals', 'Sketch the region before limits.'], ['Differential Equations', 'Verify a solution and initial condition.'], ['Vector Algebra', 'Use dot and cross products geometrically.'], ['Three-Dimensional Geometry', 'Build lines and planes from vectors.'], ['Linear Programming', 'Model constraints before inspecting vertices.'], ['Probability', 'Condition on information explicitly.']],
      Biology: [['Sexual Reproduction', 'Follow structures, timing, and regulation.'], ['Genetics & Inheritance', 'Move from crosses to molecular evidence.'], ['Molecular Basis of Inheritance', 'Track information flow and experimental proof.'], ['Evolution', 'Separate mechanism, evidence, and historical pattern.'], ['Human Health & Disease', 'Connect cause, response, prevention, and public health.'], ['Biotechnology', 'Explain each tool, step, control, and ethical boundary.'], ['Ecology', 'Reason across organism, population, community, and ecosystem scales.']],
      'Computer Science': [['Python Revision', 'Write and test small functions before full programs.'], ['File Handling', 'Model file state, parsing, errors, and closure.'], ['Stacks & Queues', 'Tie operations to invariants and complexity.'], ['Computer Networks', 'Trace data across layers and devices.'], ['Databases & SQL', 'Design relations before querying.'], ['Security', 'Connect threat, vulnerability, control, and human behaviour.'], ['Project Work', 'Document the problem, user, iterations, testing, and personal contribution.']],
    },
  },
  jeeMain: {
    id: 'jeeMain', label: 'JEE Main', short: 'Speed with accuracy', sourceLabel: 'NTA JEE Main portal', sourceUrl: source.jeeMain,
    subjects: {
      Physics: [['Mechanics', 'Build free-body, energy, momentum, and rotation fluency.'], ['Thermal Physics', 'Connect process graphs, kinetic theory, and thermodynamics.'], ['Electrodynamics', 'Link fields, potential, circuits, magnetism, and induction.'], ['Optics', 'Combine diagrams with sign conventions and approximation limits.'], ['Modern Physics', 'Use conservation and experimental evidence.'], ['Experimental Skills', 'Read instruments, errors, graphs, and practical setups.']],
      Chemistry: [['Physical Chemistry', 'Build a calculation system with units and approximations.'], ['Inorganic Chemistry', 'Use NCERT language, trends, exceptions, and repeated recall.'], ['Organic Chemistry', 'Organise reactions by mechanism and reagent role.'], ['Practical Chemistry', 'Connect observations to ions, functional groups, and method.']],
      Mathematics: [['Algebra', 'Recognise structure and control cases.'], ['Calculus', 'Move among graph, limit, rate, and accumulation.'], ['Coordinate Geometry', 'Translate geometry into efficient equations.'], ['Vectors & 3D', 'Use geometric meaning to reduce algebra.'], ['Trigonometry', 'Control identities, ranges, and transformations.'], ['Statistics & Probability', 'Define events and assumptions before computation.']],
    },
  },
  jeeAdvanced: {
    id: 'jeeAdvanced', label: 'JEE Advanced', short: 'Reason across ideas', sourceLabel: 'Official JEE Advanced portal', sourceUrl: source.jeeAdvanced,
    subjects: {
      Physics: [['Multi-body Mechanics', 'Choose coordinates and conservation laws for coupled motion.'], ['Rigid Body Dynamics', 'Combine torque, angular momentum, energy, and constraints.'], ['Fluids & Thermal Systems', 'Cross-link pressure, flow, heat, and state changes.'], ['Fields & Circuits', 'Move between local field reasoning and whole networks.'], ['Magnetism & Induction', 'Use geometry and changing flux in non-routine setups.'], ['Waves, Optics & Modern Physics', 'Test competing models against scale and evidence.']],
      Chemistry: [['Physical Chemistry Synthesis', 'Combine equilibrium, thermodynamics, kinetics, and electrochemistry.'], ['Inorganic Reasoning', 'Use bonding and periodic logic before exceptions.'], ['Organic Mechanism Chains', 'Predict intermediates, selectivity, and competing paths.'], ['Experimental Chemistry', 'Infer composition and error from procedures and observations.']],
      Mathematics: [['Advanced Algebra', 'Exploit symmetry, bounds, transformations, and construction.'], ['Calculus Synthesis', 'Combine graphical reasoning, inequalities, and exact analysis.'], ['Analytic Geometry', 'Choose coordinate systems that simplify the invariant.'], ['Combinatorics & Probability', 'Partition cases without overlap or omission.'], ['Vectors & Spatial Geometry', 'Use projections, products, and locus reasoning.']],
    },
  },
};

Object.values(tracks).forEach((track) => Object.entries(track.subjects).forEach(([subject, items]) => {
  track.subjects[subject] = items.map(([title, focus], index) => chapter(track.id, subject, index, title, focus));
}));

export const studyTracks = tracks;
export const studyGuideMeta = {
  adaptedFrom: 'Home-Manager Learning module',
  stages: ['Overview', 'Curriculum', 'Planner', 'Progress'],
  workspaceTabs: ['Summary', 'Genius Mind', 'Read Book', 'My Notes', 'Practice & Tests', 'Assignments', 'Mastery'],
  rights: 'Zysham Fieldbooks are original, locally embedded study notes. Official textbooks remain on their publishers’ sites.',
};

