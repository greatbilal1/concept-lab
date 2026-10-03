/* ============================================================
   Prompting vs Specification — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-clever-prompts-fail", file: "lessons/0001-why-clever-prompts-fail.html", title: "Why Clever Prompts Fail on Complex Tasks", topic: "Prompt Failure", anim: "Generic" },
  { n: 2, id: "anatomy-of-a-specification", file: "lessons/0002-anatomy-of-a-specification.html", title: "Anatomy of a Software Specification", topic: "Spec Anatomy", anim: "Generic" },
  { n: 3, id: "functional-reqs-vs-constraints", file: "lessons/0003-functional-reqs-vs-constraints.html", title: "Functional Requirements vs Implementation Constraints", topic: "Requirements", anim: "Generic" },
  { n: 4, id: "verifiable-acceptance-criteria", file: "lessons/0004-verifiable-acceptance-criteria.html", title: "Acceptance Criteria Agents Can Actually Verify", topic: "Acceptance Criteria", anim: "Generic" },
  { n: 5, id: "edge-cases-invariants-non-goals", file: "lessons/0005-edge-cases-invariants-non-goals.html", title: "Edge Cases, Invariants, and Non-Goals", topic: "Edge Cases", anim: "Generic" },
  { n: 6, id: "example-driven-specifications", file: "lessons/0006-example-driven-specifications.html", title: "Example-Driven Specifications", topic: "Concrete Examples", anim: "Generic" },
  { n: 7, id: "iterative-spec-refinement", file: "lessons/0007-iterative-spec-refinement.html", title: "Iterative Spec Refinement", topic: "Iteration", anim: "Generic" },
  { n: 8, id: "specs-as-living-contracts", file: "lessons/0008-specs-as-living-contracts.html", title: "Specs as Living Contracts for Humans and Machines", topic: "Living Contracts", anim: "Generic" }
];

/* ============================================================
   Prompting vs Specification — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "spec", title: "Specifications & Contracts",
    terms: [
      { term: "Software Specification", def: "A precise document defining functional requirements, technical constraints, invariants, and acceptance criteria.", lesson: 1, tags: ["specs","engineering"] },
      { term: "Living Contract", def: "A specification maintained in version control alongside code and validated by automated tests.", lesson: 8, tags: ["specs","quality"] },
      { term: "System Invariant", def: "A universal business rule or structural truth that must remain valid across all state transitions.", lesson: 5, tags: ["architecture","invariants"] }
    ]
  },
  {
    id: "boundaries", title: "Requirements & Boundaries",
    terms: [
      { term: "Functional Requirement", def: "A specification of what a system must do from the perspective of user capabilities and business outcomes.", lesson: 3, tags: ["specs","requirements"] },
      { term: "Implementation Constraint", def: "A technical boundary or limitation governing how a requirement must be built (libraries, patterns, performance).", lesson: 3, tags: ["specs","constraints"] },
      { term: "Non-Goal", def: "An explicit statement of what is deliberately excluded from scope to prevent agent over-engineering.", lesson: 2, tags: ["specs","scope"] }
    ]
  },
  {
    id: "verification", title: "Verification & Grounding",
    terms: [
      { term: "Machine-Verifiable Criterion", def: "An acceptance criterion that can be objectively proven true or false via an automated command or test.", lesson: 4, tags: ["testing","verification"] },
      { term: "Example-Driven Specification", def: "Using concrete input-output payloads (JSON, code) to eliminate semantic ambiguity in requirements.", lesson: 6, tags: ["specs","examples"] },
      { term: "Golden Reference", def: "An existing production file in the repository cited in a spec as an exemplary pattern to replicate.", lesson: 6, tags: ["architecture","patterns"] }
    ]
  },
  {
    id: "iteration", title: "Discovery & Refinement",
    terms: [
      { term: "Iterative Spec Refinement", def: "The practice of using agent repository probes to surface hidden friction and sharpen specifications.", lesson: 7, tags: ["workflow","iteration"] },
      { term: "Architectural Drift", def: "The gradual divergence of a codebase from its intended design principles due to uncoordinated changes.", lesson: 8, tags: ["architecture","quality"] },
      { term: "Circuit Breaker", def: "An explicit limit halting automated agent loops when verification criteria fail repeatedly.", lesson: 4, tags: ["ai","safety"] }
    ]
  }
];
