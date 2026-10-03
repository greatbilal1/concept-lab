/* ============================================================
   Giving AI Agents the Right Project Context — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-agents-hallucinate-conventions", file: "lessons/0001-why-agents-hallucinate-conventions.html", title: "Why Agents Hallucinate Conventions", topic: "Conventions", anim: "Generic" },
  { n: 2, id: "agent-instructions-files", file: "lessons/0002-agent-instructions-files.html", title: "Agent Instructions Files (.cursorrules, copilot-instructions.md)", topic: "Instructions Files", anim: "Generic" },
  { n: 3, id: "adrs-as-agent-context", file: "lessons/0003-adrs-as-agent-context.html", title: "Architecture Decision Records (ADRs) as Agent Context", topic: "ADRs", anim: "Generic" },
  { n: 4, id: "providing-golden-code-examples", file: "lessons/0004-providing-golden-code-examples.html", title: "Providing Golden Code Examples", topic: "Golden Examples", anim: "Generic" },
  { n: 5, id: "repo-maps-and-architecture-guides", file: "lessons/0005-repo-maps-and-architecture-guides.html", title: "Repository Maps and Architecture Guides", topic: "Repo Maps", anim: "Generic" },
  { n: 6, id: "tool-definitions-and-scripts", file: "lessons/0006-tool-definitions-and-scripts.html", title: "Tool Definitions and Workflow Scripts", topic: "Tooling & Scripts", anim: "Generic" },
  { n: 7, id: "keeping-context-fresh-and-concise", file: "lessons/0007-keeping-context-fresh-and-concise.html", title: "Keeping Project Context Fresh and Concise", topic: "Context Maintenance", anim: "Generic" },
  { n: 8, id: "testing-agent-alignment", file: "lessons/0008-testing-agent-alignment.html", title: "Testing Agent Alignment with Project Standards", topic: "Alignment Audits", anim: "Generic" }
];

/* ============================================================
   Giving AI Agents the Right Project Context — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "conventions", title: "Conventions & Drift",
    terms: [
      { term: "Convention Guessing", def: "The tendency of models to fall back on generic training averages when project context is missing.", lesson: 1, tags: ["ai","conventions"] },
      { term: "Instruction File", def: "A repository configuration file (.cursorrules, copilot-instructions.md) providing system directives to AI agents.", lesson: 2, tags: ["ai","config"] },
      { term: "Architectural Drift", def: "The slow degradation of project standards caused by introducing alien, inconsistent code patterns.", lesson: 1, tags: ["architecture","quality"] }
    ]
  },
  {
    id: "records", title: "ADRs & Knowledge",
    terms: [
      { term: "Architecture Decision Record", def: "A document capturing an architectural decision, its context, consequences, and evaluated alternatives.", lesson: 3, tags: ["architecture","docs"] },
      { term: "Golden File", def: "An exemplary production file in the repository cited as the authoritative template for code style and patterns.", lesson: 4, tags: ["architecture","patterns"] },
      { term: "Golden Pair", def: "A matched pair of exemplary files: one clean implementation and its corresponding high-quality test file.", lesson: 4, tags: ["testing","patterns"] }
    ]
  },
  {
    id: "mapping", title: "Mapping & Tooling",
    terms: [
      { term: "Repository Map", def: "A high-level structural overview documenting directory responsibilities and dependency direction invariants.", lesson: 5, tags: ["architecture","navigation"] },
      { term: "Dependency Direction Invariant", def: "An architectural rule governing which layers are allowed to import from which (e.g. domain never imports storage).", lesson: 5, tags: ["architecture","invariants"] },
      { term: "Workflow Script", def: "A standardized runner command (make test, npm run lint) encapsulating complex flags and environment variables.", lesson: 6, tags: ["devops","tooling"] }
    ]
  },
  {
    id: "maintenance", title: "Maintenance & Auditing",
    terms: [
      { term: "Instruction Pruning", def: "Removing formatting trivia and obsolete rules from instruction files to maximize attention density.", lesson: 7, tags: ["context","maintenance"] },
      { term: "Alignment Audit", def: "Empirically evaluating agent-generated code against project conventions using benchmark prompts.", lesson: 8, tags: ["ai","evals"] },
      { term: "One-Command Verification", def: "A single script (make check) that runs linters, type checks, and tests together for agent validation.", lesson: 6, tags: ["ci","testing"] }
    ]
  }
];
