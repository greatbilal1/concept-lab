/* ============================================================
   Reading Code You Didn't Write — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "code-is-read-more-than-written", file: "lessons/0001-code-is-read-more-than-written.html", title: "Code is read more than written", topic: "Orientation & Entry Points", anim: "CodeSweep" },
  { n: 2, id: "finding-the-entry-point", file: "lessons/0002-finding-the-entry-point.html", title: "Finding the entry point", topic: "Orientation & Entry Points", anim: "CodeSweep" },
  { n: 3, id: "following-the-data-path", file: "lessons/0003-following-the-data-path.html", title: "Following the data path", topic: "Tracing Data & Call Paths", anim: "CodeSweep" },
  { n: 4, id: "mapping-call-hierarchies", file: "lessons/0004-mapping-call-hierarchies.html", title: "Mapping call hierarchies", topic: "Tracing Data & Call Paths", anim: "CodeSweep" },
  { n: 5, id: "reading-tests-as-specifications", file: "lessons/0005-reading-tests-as-specifications.html", title: "Reading tests as specifications", topic: "Mental Models & Tests", anim: "CodeSweep" },
  { n: 6, id: "skimming-versus-deep-reading", file: "lessons/0006-skimming-versus-deep-reading.html", title: "Skimming versus deep reading", topic: "Mental Models & Tests", anim: "CodeSweep" },
  { n: 7, id: "decoding-naming-and-conventions", file: "lessons/0007-decoding-naming-and-conventions.html", title: "Decoding naming and conventions", topic: "Conventions & Architecture", anim: "CodeSweep" },
  { n: 8, id: "building-a-system-mental-model", file: "lessons/0008-building-a-system-mental-model.html", title: "Building a system mental model", topic: "Conventions & Architecture", anim: "CodeSweep" }
];

/* ============================================================
   Reading Code You Didn't Write — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "orientation", title: "Orientation & Entry Points",
    terms: [
      { term: "Entry point", def: "The initial function or file where an operating system or server passes control to user code.", lesson: 2, tags: ["architecture"] },
      { term: "Manifest file", def: "A metadata file (like package.json or pyproject.toml) listing project dependencies, scripts, and configuration.", lesson: 2, tags: ["project"] },
      { term: "Cognitive load", def: "The amount of working memory used while trying to parse and understand complex syntax.", lesson: 1, tags: ["theory"] },
      { term: "Top-down reading", def: "Beginning at high-level architecture before examining granular line-by-line mechanics.", lesson: 1, tags: ["technique"] }
    ]
  },
  {
    id: "data-flow", title: "Tracing Data & Call Paths",
    terms: [
      { term: "Data lifecycle", def: "The sequence of transformations a payload undergoes from ingress, to business logic, to storage.", lesson: 3, tags: ["data"] },
      { term: "Call hierarchy", def: "The tree structure of caller functions and their downstream callees across files.", lesson: 4, tags: ["navigation"] },
      { term: "Call site", def: "The exact line of code where a function or method invocation occurs.", lesson: 4, tags: ["code"] },
      { term: "Seam", def: "A boundary in code where behavior can be observed or altered without modifying the calling source.", lesson: 3, tags: ["architecture"] }
    ]
  },
  {
    id: "mental-models", title: "Mental Models & Tests",
    terms: [
      { term: "Mental model", def: "An internal conceptual simulation of how software subsystems behave and interact.", lesson: 8, tags: ["cognition"] },
      { term: "Executable specification", def: "An automated test suite that demonstrates precisely what behavior code is expected to produce.", lesson: 5, tags: ["testing"] },
      { term: "Skimming", def: "Rapidly scanning code structure, types, and comments to gain broad context without reading every statement.", lesson: 6, tags: ["reading"] },
      { term: "Deep reading", def: "Meticulous line-by-line analysis of a specific critical function or security algorithm.", lesson: 6, tags: ["reading"] }
    ]
  },
  {
    id: "conventions", title: "Conventions & Architecture",
    terms: [
      { term: "Domain model", def: "The collection of classes, entities, and business rules reflecting the real-world problem being solved.", lesson: 7, tags: ["domain"] },
      { term: "Naming convention", def: "A standardized pattern for naming variables, files, and classes that communicates their purpose.", lesson: 7, tags: ["clean-code"] },
      { term: "Spaghetti code", def: "Software with tangled, highly-coupled control flow that resists straightforward linear tracing.", lesson: 8, tags: ["anti-pattern"] },
      { term: "Architecture diagram", def: "A visual schematic depicting services, database connections, and primary communication flows.", lesson: 8, tags: ["documentation"] }
    ]
  }
];
