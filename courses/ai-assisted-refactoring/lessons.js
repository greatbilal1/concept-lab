/* ============================================================
   AI-Assisted Refactoring — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "test-suite-as-safety-net", file: "lessons/0001-test-suite-as-safety-net.html", title: "The Test Suite as the Mandatory Safety Net", topic: "Safety Net", anim: "Generic" },
  { n: 2, id: "mechanical-refactorings", file: "lessons/0002-mechanical-refactorings.html", title: "Mechanical Refactorings: Renames, Modernizations, Type Additions", topic: "Mechanical Tasks", anim: "Generic" },
  { n: 3, id: "bulk-codemods-ast-transforms", file: "lessons/0003-bulk-codemods-ast-transforms.html", title: "Bulk Codemods and AST Transformations with AI", topic: "Codemods", anim: "Generic" },
  { n: 4, id: "step-by-step-monolith-decomposition", file: "lessons/0004-step-by-step-monolith-decomposition.html", title: "Step-by-Step Monolith Decomposition", topic: "Monolith Decomposition", anim: "Generic" },
  { n: 5, id: "extracting-services-modules", file: "lessons/0005-extracting-services-modules.html", title: "Extracting Services and Modules with Agent Guidance", topic: "Service Extraction", anim: "Generic" },
  { n: 6, id: "verifying-invariants-multi-file-diffs", file: "lessons/0006-verifying-invariants-multi-file-diffs.html", title: "Verifying Invariants Across Large Multi-File Diffs", topic: "Multi-File Verification", anim: "Generic" },
  { n: 7, id: "rollback-strategies-atomic-commits", file: "lessons/0007-rollback-strategies-atomic-commits.html", title: "Rollback Strategies and Atomic Commit Discipline", topic: "Rollback Discipline", anim: "Generic" },
  { n: 8, id: "post-refactor-performance-audits", file: "lessons/0008-post-refactor-performance-audits.html", title: "Post-Refactor Performance and Regression Audits", topic: "Performance Audits", anim: "Generic" }
];

/* ============================================================
   AI-Assisted Refactoring — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "safety", title: "Safety & Mechanics",
    terms: [
      { term: "Safety Net Prerequisite", def: "The rule that automated tests must pass 100% before initiating any structural code refactoring.", lesson: 1, tags: ["refactoring","safety"] },
      { term: "Mechanical Refactoring", def: "Repetitive, rule-based code transformations (renames, syntax modernizations, type additions) ideal for AI execution.", lesson: 2, tags: ["refactoring","automation"] },
      { term: "AST Codemod", def: "A script that parses and modifies the Abstract Syntax Tree of source code to execute deterministic bulk transformations.", lesson: 3, tags: ["tooling","ast"] }
    ]
  },
  {
    id: "decomposition", title: "Decomposition & Seams",
    terms: [
      { term: "Step-by-Step Slicing", def: "Decomposing a large monolith incrementally by extracting one cohesive cluster at a time.", lesson: 4, tags: ["architecture","refactoring"] },
      { term: "Re-Export Seam", def: "Exporting extracted symbols from their original location to preserve caller compatibility during refactoring.", lesson: 4, tags: ["architecture","compatibility"] },
      { term: "Repository Pattern", def: "An architectural seam decoupling business application services from database query implementations.", lesson: 5, tags: ["patterns","architecture"] }
    ]
  },
  {
    id: "verification", title: "Verification & Git",
    terms: [
      { term: "Whole-Project Type Check", def: "Running static type analysis across the entire codebase to verify all call sites match updated signatures.", lesson: 6, tags: ["typing","verification"] },
      { term: "Atomic Commit", def: "A single git commit containing one self-contained, verified change that keeps the test suite green.", lesson: 7, tags: ["git","workflow"] },
      { term: "Instant Rollback", def: "The capability to revert a failed experimental refactoring step in seconds using git reset.", lesson: 7, tags: ["git","safety"] }
    ]
  },
  {
    id: "performance", title: "Performance & Auditing",
    terms: [
      { term: "N+1 Query Regression", def: "A performance bug where extracted property accesses inside a loop trigger N redundant database round-trips.", lesson: 8, tags: ["performance","databases"] },
      { term: "Memory Materialization", def: "Loading an entire dataset into RAM at once instead of processing it iteratively with streaming generators.", lesson: 8, tags: ["performance","memory"] },
      { term: "Query Count Assertion", def: "An automated test assertion that enforces an upper bound on the number of SQL queries fired during an operation.", lesson: 8, tags: ["testing","performance"] }
    ]
  }
];
