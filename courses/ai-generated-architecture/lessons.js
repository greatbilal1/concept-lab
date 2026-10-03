/* ============================================================
   Working With AI-Generated Architecture — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "how-ai-introduces-drift", file: "lessons/0001-how-ai-introduces-drift.html", title: "How AI Agents Introduce Architectural Drift", topic: "Architectural Drift", anim: "Generic" },
  { n: 2, id: "enforcing-module-boundaries", file: "lessons/0002-enforcing-module-boundaries.html", title: "Enforcing Module Boundaries and Dependency Directions", topic: "Module Boundaries", anim: "Generic" },
  { n: 3, id: "avoiding-sprawling-files", file: "lessons/0003-avoiding-sprawling-files.html", title: "Avoiding Sprawling Single-Purpose Files and Duplication", topic: "File Organization", anim: "Generic" },
  { n: 4, id: "schema-and-contract-discipline", file: "lessons/0004-schema-and-contract-discipline.html", title: "Schema and Contract Discipline", topic: "Contracts", anim: "Generic" },
  { n: 5, id: "keeping-domain-models-pure", file: "lessons/0005-keeping-domain-models-pure.html", title: "Keeping Domain Models Pure", topic: "Domain Purity", anim: "Generic" },
  { n: 6, id: "refactoring-prototypes-to-production", file: "lessons/0006-refactoring-prototypes-to-production.html", title: "Refactoring AI Prototyped Code into Production Shape", topic: "Production Hardening", anim: "Generic" },
  { n: 7, id: "architectural-fitness-functions", file: "lessons/0007-architectural-fitness-functions.html", title: "Architectural Fitness Functions and Linting", topic: "Fitness Functions", anim: "Generic" },
  { n: 8, id: "long-term-maintainability", file: "lessons/0008-long-term-maintainability.html", title: "Long-Term Maintainability of AI-Assisted Codebases", topic: "Sustained Quality", anim: "Generic" }
];

/* ============================================================
   Working With AI-Generated Architecture — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "drift", title: "Drift & Boundaries",
    terms: [
      { term: "Architectural Drift", def: "The gradual erosion of clean system design caused by accumulated local shortcuts and inconsistent patterns.", lesson: 1, tags: ["architecture","quality"] },
      { term: "Inward Dependency Rule", def: "The principle that source code dependencies must point inward toward business domain logic, never outward.", lesson: 2, tags: ["architecture","clean"] },
      { term: "Layer Contamination", def: "The anti-pattern of importing infrastructure or delivery libraries directly into core domain entities.", lesson: 2, tags: ["architecture","smells"] }
    ]
  },
  {
    id: "schemas", title: "Schemas & Purity",
    terms: [
      { term: "Schema Discipline", def: "Enforcing strict, strongly typed data contracts (Pydantic, Zod) to validate data shapes at system boundaries.", lesson: 4, tags: ["contracts","types"] },
      { term: "Pure Domain Model", def: "A business entity implemented with vanilla language constructs, isolated completely from databases and web frameworks.", lesson: 5, tags: ["architecture","domain"] },
      { term: "Extra Forbid", def: "A schema validation setting that rejects unexpected or hallucinated fields with an immediate error.", lesson: 4, tags: ["pydantic","validation"] }
    ]
  },
  {
    id: "hardening", title: "Production Hardening",
    terms: [
      { term: "Happy-Path Myopia", def: "The tendency of prototypes to handle ideal scenarios while failing on network timeouts, bad inputs, or concurrency.", lesson: 6, tags: ["reliability","prototypes"] },
      { term: "Idempotency", def: "The property of an operation producing the exact same result even if invoked multiple times with identical arguments.", lesson: 6, tags: ["api","reliability"] },
      { term: "Structured Logging", def: "Emitting diagnostic logs as structured JSON key-value pairs to enable automated filtering and querying.", lesson: 6, tags: ["observability","devops"] }
    ]
  },
  {
    id: "governance", title: "Fitness & Maintainability",
    terms: [
      { term: "Architectural Fitness Function", def: "An automated test or check in CI verifying that code adheres to defined structural and dependency invariants.", lesson: 7, tags: ["ci","architecture"] },
      { term: "Circular Dependency", def: "An anti-pattern where two or more modules depend directly or indirectly upon each other, tangling architecture.", lesson: 7, tags: ["architecture","smells"] },
      { term: "Sustainable Velocity", def: "The engineering capability to ship software rapidly and reliably year after year without accumulating crippling debt.", lesson: 8, tags: ["culture","craft"] }
    ]
  }
];
