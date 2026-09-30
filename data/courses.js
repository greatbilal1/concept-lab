/* ============================================================
   Concept Lab — course catalogue (100-course curriculum)
   ------------------------------------------------------------
   Every course on the hub is one object in this array. The hub
   page, the glossary, the learning paths and the validator all
   read from here.

   This file is DATA ONLY. It describes the curriculum — it does
   not contain course content. A course becomes "live" only when
   its page exists and its sections are written.

   Fields
     num        curriculum number, 1..100 (display order)
     id         unique slug, also the page filename stem
     title      display name
     emoji      glyph shown on the card
     tag        category label (uppercase, shown on the card)
     category   lowercase category key (used by filters)
     level      "beginner" | "intermediate" | "advanced"
     stage      curriculum stage 1..10 (the ten levels)
     desc       one-sentence summary
     chips      short topic labels (3-5)
     colors     { c1, c2 } gradient pair
     stageArt   animated thumbnail variant (see STAGE_ART in render.js)
     status     "live" | "in-progress" | "planned"
     meta       footer meta line (live courses only)
     tags       free-form tags used by glossary + path filters
     prereq     course ids that should be learned first
     related    course ids that pair well
     paths      path ids this course belongs to
     sections   [{ id, title, anim }] — course page table of contents
                (live courses only; omitted for planned courses)
     glossary   path to the course's own glossary page (live courses
                only). The site-wide glossary links each term here, so
                the term list lives in exactly one place: the course's
                own manifest (courses/<id>/lessons.js).
   ============================================================ */

window.COURSES = [

  /* ==========================================================
     LEVEL 1 — UNDERSTAND COMPUTERS & CODE
     ========================================================== */
  {
    num: 1, id: "how-computers-work", title: "How Computers Actually Work", emoji: "🖥️",
    tag: "FOUNDATIONS", category: "foundations", level: "beginner", tier: 1,
    desc: "From transistors and binary to memory and the CPU — the machine underneath every line of code.",
    chips: ["Binary", "CPU", "Memory"], colors: { c1: "#2563eb", c2: "#0891b2" }, stageArt: "layers",
    status: "live", tags: ["foundations", "hardware", "cs"],
    meta: "12 lessons · interactive quizzes · hands-on counting",
    prereq: [], related: ["programming-computational-thinking", "variables-types-memory"],
    paths: ["cs-foundations"],
    concepts: ["memory", "data-type", "value"],
    href: "courses/how-computers-work/course.html",
    lessons: { href: "courses/how-computers-work/course.html", label: "Guided lessons" },
    glossary: "courses/how-computers-work/reference/how-computers-work-glossary.html",
    sections: [
      { id: "numbers", title: "Numbers", anim: "HcwBits" },
      { id: "logic", title: "Logic & circuits", anim: "HcwGates" },
      { id: "machine", title: "The machine", anim: "HcwCpu" },
      { id: "data", title: "Data & translation", anim: "HcwCompile" }
    ]
  },
  {
    num: 2, id: "programming-computational-thinking", title: "Programming & Computational Thinking", emoji: "🧠",
    tag: "FOUNDATIONS", category: "foundations", level: "beginner", tier: 1,
    desc: "Decomposition, patterns, abstraction, algorithms, evaluation and generalisation — how to turn a problem into steps a computer can run, then judge and widen them.",
    chips: ["Decomposition", "Abstraction", "Algorithms"], colors: { c1: "#7c3aed", c2: "#2563eb" }, stageArt: "flow",
    status: "live", tags: ["foundations", "thinking"],
    meta: "8 lessons · interactive quizzes · worked examples",
    prereq: ["how-computers-work"], related: ["control-flow-logic", "algorithms-problem-solving"],
    paths: ["cs-foundations", "python-developer"],
    concepts: ["algorithm", "abstraction", "control-flow"],
    href: "courses/programming-computational-thinking/course.html",
    lessons: { href: "courses/programming-computational-thinking/course.html", label: "Guided lessons" },
    glossary: "courses/programming-computational-thinking/reference/programming-computational-thinking-glossary.html",
    sections: [
      { id: "thinking", title: "Computational thinking", anim: "PctLoop" },
      { id: "decomposition", title: "Decomposition", anim: "PctDecompose" },
      { id: "patterns", title: "Patterns", anim: "PctPattern" },
      { id: "abstraction", title: "Abstraction", anim: "PctAbstract" },
      { id: "algorithms", title: "Algorithms", anim: "PctAlgorithm" },
      { id: "evaluation", title: "Evaluation", anim: "PctEvaluate" },
      { id: "generalisation", title: "Generalisation", anim: "PctGeneralise" },
      { id: "together", title: "Putting it together", anim: "PctTogether" }
    ]
  },
  {
    num: 3, id: "variables-types-memory", title: "Variables, Types & Memory", emoji: "📦",
    tag: "FOUNDATIONS", category: "foundations", level: "beginner", tier: 1,
    desc: "Names, values, types and what actually happens in memory when you assign one to the other.",
    chips: ["Variables", "Types", "References"], colors: { c1: "#0891b2", c2: "#22c55e" }, stageArt: "code",
    status: "live", tags: ["foundations", "types"],
    meta: "10 lessons · interactive quizzes · worked examples",
    prereq: ["programming-computational-thinking"], related: ["control-flow-logic", "python-fundamentals"],
    paths: ["cs-foundations", "python-developer"],
    concepts: ["variable", "value", "data-type", "memory", "state"],
    href: "courses/variables-types-memory/course.html",
    lessons: { href: "courses/variables-types-memory/course.html", label: "Guided lessons" },
    glossary: "courses/variables-types-memory/reference/variables-types-memory-glossary.html",
    sections: [
      { id: "names", title: "Names & values", anim: "VtmName" },
      { id: "types", title: "Types", anim: "VtmType" },
      { id: "memory", title: "Memory", anim: "VtmRef" },
      { id: "together", title: "Putting it together", anim: "VtmCopy" }
    ]
  },
  {
    num: 4, id: "control-flow-logic", title: "Control Flow & Logic", emoji: "🔀",
    tag: "FOUNDATIONS", category: "foundations", level: "beginner", tier: 1,
    desc: "Conditions, loops and boolean logic — the machinery that lets a program make decisions and repeat work.",
    chips: ["Conditions", "Loops", "Booleans"], colors: { c1: "#f59e0b", c2: "#ef4444" }, stageArt: "flow",
    status: "live", tags: ["foundations", "logic"],
    meta: "10 lessons · interactive quizzes · worked examples",
    prereq: ["variables-types-memory"], related: ["functions-modular-thinking", "algorithms-problem-solving"],
    paths: ["cs-foundations", "python-developer"],
    concepts: ["control-flow", "state"],
    href: "courses/control-flow-logic/course.html",
    lessons: { href: "courses/control-flow-logic/course.html", label: "Guided lessons" },
    glossary: "courses/control-flow-logic/reference/control-flow-logic-glossary.html",
    sections: [
      { id: "booleans", title: "Booleans", anim: "CflTruth" },
      { id: "logic", title: "Logic", anim: "CflCombine" },
      { id: "branching", title: "Branching", anim: "CflBranch" },
      { id: "loops", title: "Loops", anim: "CflWhile" },
      { id: "together", title: "Putting it together", anim: "CflTogether" }
    ]
  },
  {
    num: 5, id: "functions-modular-thinking", title: "Functions & Modular Thinking", emoji: "🧩",
    tag: "FOUNDATIONS", category: "foundations", level: "beginner", tier: 1,
    desc: "Parameters, return values, scope and the call stack — breaking a program into pieces you can name.",
    chips: ["Parameters", "Return", "Scope"], colors: { c1: "#22c55e", c2: "#0ea5e9" }, stageArt: "code-pulse",
    status: "live", tags: ["foundations", "functions"],
    meta: "10 lessons · interactive quizzes · worked examples",
    prereq: ["control-flow-logic"], related: ["procedural-programming", "oop"],
    paths: ["cs-foundations", "python-developer"],
    concepts: ["function", "parameter", "return-value", "scope"],
    href: "courses/functions-modular-thinking/course.html",
    lessons: { href: "courses/functions-modular-thinking/course.html", label: "Guided lessons" },
    glossary: "courses/functions-modular-thinking/reference/functions-modular-thinking-glossary.html",
    sections: [
      { id: "defining", title: "Defining", anim: "FmtDefine" },
      { id: "passing", title: "Passing", anim: "FmtParams" },
      { id: "returning", title: "Returning", anim: "FmtReturn" },
      { id: "scope", title: "Scope & the stack", anim: "FmtStack" },
      { id: "modular", title: "Modular thinking", anim: "FmtSplit" }
    ]
  },
  {
    num: 6, id: "procedural-programming", title: "Procedural Programming", emoji: "📜",
    tag: "FOUNDATIONS", category: "foundations", level: "beginner", tier: 1,
    desc: "Organising a program as a sequence of named steps — the style most code starts in, and its limits.",
    chips: ["Steps", "State", "Modules"], colors: { c1: "#0ea5e9", c2: "#6366f1" }, stageArt: "flow",
    status: "live", href: "courses/procedural-programming/course.html",
    lessons: { href: "courses/procedural-programming/course.html", label: "Guided lessons" },
    glossary: "courses/procedural-programming/reference/procedural-programming-glossary.html",
    meta: "10 lessons · interactive quizzes · worked examples",
    tags: ["foundations", "procedural"],
    prereq: ["functions-modular-thinking"], related: ["oop", "software-project-structure"],
    paths: ["cs-foundations", "python-developer"],
    concepts: ["function", "state", "control-flow", "scope"],
    sections: [
      { id: "steps", title: "Steps", anim: "PpSequence" },
      { id: "data", title: "Data", anim: "PpParams" },
      { id: "structure", title: "Structure", anim: "PpOneJob" },
      { id: "modules", title: "Modules", anim: "PpModule" },
      { id: "together", title: "Putting it together", anim: "PpTogether" }
    ]
  },
  {
    num: 7, id: "oop", title: "Object-Oriented Programming", emoji: "🧩",
    tag: "PYTHON", category: "python", level: "beginner", tier: 1,
    desc: "A detailed, visual, hands-on introduction to OOP — from classes and objects all the way to dataclasses and real design.",
    chips: ["Classes", "Inheritance", "Polymorphism", "Dataclasses", "+14 more"],
    colors: { c1: "#2563eb", c2: "#7c3aed" }, stageArt: "code",
    status: "live", href: "courses/oop/course.html",
    lessons: { href: "courses/oop/course.html", label: "Guided lessons" },
    glossary: "courses/oop/reference/oop-glossary.html",
    meta: "19 lessons • interactive quiz • lab",
    tags: ["python", "oop", "design", "classes"],
    prereq: ["functions-modular-thinking"],
    related: ["composition-vs-inheritance", "design-patterns", "clean-code"],
    paths: ["python-developer", "cs-foundations"],
    concepts: ["object", "class", "method", "attribute", "inheritance", "composition",
               "abstraction", "encapsulation", "state"],
    sections: [
      { id: "intro", title: "Introduction: why object-oriented programming matters", anim: "OopMentalModel", icon: "spark",
        takeaway: "OOP groups data and the actions on it into one unit, so your code mirrors the real-world things it models." },
      { id: "mental", title: "The mental model", anim: "OopMentalModel", icon: "layers",
        takeaway: "An object is state (what it knows) plus behavior (what it can do) — always picture both together." },
      { id: "class", title: "Class vs object", anim: "OopClassVsObject", icon: "grid",
        takeaway: "A class is the blueprint; an object is one thing built from it. One class, many objects." },
      { id: "self", title: "`self` and attributes", anim: "OopSelfAttributes", icon: "tag",
        takeaway: "`self` is the object the method was called on — it is how a method reaches its own data." },
      { id: "init", title: "`__init__`: initializing an object", anim: "OopInitMethod", icon: "play",
        takeaway: "`__init__` runs automatically at creation and fills in the object's starting state." },
      { id: "methods", title: "Methods: what objects can do", anim: "OopMethods", icon: "route",
        takeaway: "A method is a function that always receives its own object as the first argument." },
      { id: "encap", title: "Encapsulation", anim: "OopEncapsulation", icon: "lock",
        takeaway: "Keep state and the rules that change it together, so callers cannot bypass the rules." },
      { id: "inherit", title: "Inheritance", anim: "OopInheritance", icon: "layers",
        takeaway: "A child class gets everything the parent has, then adds or overrides its own parts." },
      { id: "poly", title: "Polymorphism", anim: "OopPolymorphism", icon: "route",
        takeaway: "One call, many behaviors — each object decides how it responds to the same message." },
      { id: "abstract", title: "Abstraction", anim: "OopAbstraction", icon: "layers",
        takeaway: "Callers depend on a simple interface, not on the messy details behind it." },
      { id: "composition", title: "Composition — objects containing other objects", anim: "OopComposition", icon: "grid",
        takeaway: "Build big things out of small, focused parts — often more flexible than inheritance." },
      { id: "special", title: "Special / dunder methods", anim: "OopDunderMethods", icon: "spark",
        takeaway: "Dunder methods let your objects plug into Python's built-in syntax like `len()` and `+`." },
      { id: "property", title: "Properties", anim: "OopProperties", icon: "tag",
        takeaway: "Properties give clean attribute syntax with real logic and validation underneath." },
      { id: "classmethods", title: "Instance, class and static methods", anim: "OopMethodKinds", icon: "layers",
        takeaway: "Same class, three kinds of method — pick the one that matches what the behavior needs." },
      { id: "dataclass", title: "Dataclasses", anim: "OopDataclasses", icon: "spark",
        takeaway: "`@dataclass` writes the boring `__init__`, `__repr__` and equality methods for you." },
      { id: "design", title: "Designing an OOP system", anim: "OopDesignSystem", icon: "grid",
        takeaway: "Name the concepts and their responsibilities before you write a single class." },
      { id: "kyc", title: "Complete practical example: KYC risk model", anim: "OopKycRiskModel", icon: "check",
        takeaway: "Separate responsibilities: the customer knows itself, the model scores it, the service coordinates." },
      { id: "quiz", title: "Knowledge check", anim: "OopKnowledgeCheck", icon: "check",
        takeaway: "Check yourself as you go — the score updates instantly so you know what stuck." },
      { id: "play", title: "Experiment lab", anim: "OopExperimentLab", icon: "play",
        takeaway: "Run a tiny example, watch what happens, then change one thing and run it again." },
      { id: "cheat", title: "OOP cheat sheet", anim: "OopCheatSheet", icon: "book",
        takeaway: "The vocabulary you'll use every day, gathered in one place for quick reference." }
    ]
  },
  {
    num: 8, id: "data-structures", title: "Data Structures", emoji: "📊",
    tag: "CS CORE", category: "cs", level: "beginner", tier: 1,
    desc: "Arrays, lists, stacks, queues, hash tables and trees — how data is arranged, and why it matters.",
    chips: ["Arrays", "Stacks", "Hash tables"], colors: { c1: "#0891b2", c2: "#2563eb" }, stageArt: "bars",
    status: "planned", tags: ["cs", "data-structures"],
    prereq: ["oop"], related: ["algorithms-problem-solving", "big-o-complexity"],
    paths: ["cs-foundations", "python-developer", "ai-engineer"],
    concepts: ["array", "list", "stack", "queue", "hash-table"]
  },
  {
    num: 9, id: "algorithms-problem-solving", title: "Algorithms & Problem Solving", emoji: "🧮",
    tag: "CS CORE", category: "cs", level: "beginner", tier: 1,
    desc: "Sorting, searching, recursion and the habits that turn a hard problem into a sequence of small ones.",
    chips: ["Sorting", "Searching", "Recursion"], colors: { c1: "#6366f1", c2: "#0891b2" }, stageArt: "bars-nodes",
    status: "live", href: "courses/algorithms-problem-solving/course.html",
    lessons: { href: "courses/algorithms-problem-solving/course.html", label: "Guided lessons" },
    glossary: "courses/algorithms-problem-solving/reference/algorithms-problem-solving-glossary.html",
    meta: "8 lessons · interactive quizzes · worked examples",
    tags: ["cs", "algorithms"],
    prereq: ["data-structures"], related: ["big-o-complexity", "testing-fundamentals"],
    paths: ["cs-foundations"],
    concepts: ["algorithm", "complexity", "list"]
  },
  {
    num: 10, id: "big-o-complexity", title: "Big O & Computational Complexity", emoji: "📈",
    tag: "CS CORE", category: "cs", level: "beginner", tier: 1,
    desc: "How to reason about how an algorithm's cost grows — the vocabulary for comparing two solutions honestly.",
    chips: ["Big O", "Growth", "Trade-offs"], colors: { c1: "#a855f7", c2: "#2563eb" }, stageArt: "bars-nodes",
    status: "live", href: "courses/big-o-complexity/course.html",
    lessons: { href: "courses/big-o-complexity/course.html", label: "Guided lessons" },
    glossary: "courses/big-o-complexity/reference/big-o-complexity-glossary.html",
    meta: "8 lessons · interactive quizzes · worked examples",
    tags: ["cs", "complexity"],
    prereq: ["algorithms-problem-solving"], related: ["database-indexes-performance", "distributed-systems"],
    paths: ["cs-foundations"],
    concepts: ["complexity", "algorithm"]
  },

  /* ==========================================================
     LEVEL 2 — BECOME COMFORTABLE WITH CODE
     ========================================================== */
  {
    num: 11, id: "python-fundamentals", title: "Python Fundamentals", emoji: "🐍",
    tag: "PYTHON", category: "python", level: "beginner", tier: 2,
    desc: "Syntax, types, control flow, functions and modules — the foundation everything else builds on.",
    chips: ["Types", "Functions", "Modules"], colors: { c1: "#f59e0b", c2: "#ef4444" }, stageArt: "code",
    status: "live", href: "courses/python-fundamentals/course.html",
    lessons: { href: "courses/python-fundamentals/course.html", label: "Guided lessons" },
    glossary: "courses/python-fundamentals/reference/python-fundamentals-glossary.html",
    meta: "10 lessons · interactive quizzes · worked examples",
    tags: ["python", "basics"],
    prereq: ["functions-modular-thinking"], related: ["python-modules-packages", "oop"],
    paths: ["python-developer", "cs-foundations", "backend-engineer", "ai-engineer", "data-analyst"],
    concepts: ["variable", "data-type", "control-flow", "function", "list", "scope"]
  },
  {
    num: 12, id: "python-modules-packages", title: "Python Modules & Packages", emoji: "📚",
    tag: "PYTHON", category: "python", level: "beginner", tier: 2,
    desc: "Imports, packages, virtual environments and how a project's files become importable names.",
    chips: ["Imports", "Packages", "venv"], colors: { c1: "#22c55e", c2: "#f59e0b" }, stageArt: "term-layers",
    status: "planned", tags: ["python", "tooling"],
    prereq: ["python-fundamentals"], related: ["software-project-structure", "python-files-json-data"],
    paths: ["python-developer", "backend-engineer"],
    concepts: ["function", "scope"]
  },
  {
    num: 13, id: "python-errors-exceptions", title: "Python Errors & Exceptions", emoji: "🚨",
    tag: "PYTHON", category: "python", level: "beginner", tier: 2,
    desc: "Reading tracebacks, raising and catching exceptions, and designing failure that is easy to diagnose.",
    chips: ["Tracebacks", "try/except", "Raising"], colors: { c1: "#ef4444", c2: "#f59e0b" }, stageArt: "code-pulse",
    status: "live", href: "courses/python-errors-exceptions/course.html",
    lessons: { href: "courses/python-errors-exceptions/course.html", label: "Guided lessons" },
    glossary: "courses/python-errors-exceptions/reference/python-errors-exceptions-glossary.html",
    meta: "8 lessons · interactive quizzes · worked examples",
    tags: ["python", "errors"],
    prereq: ["python-fundamentals"], related: ["debugging-code", "testing-fundamentals"],
    paths: ["python-developer", "backend-engineer"],
    concepts: ["control-flow", "function"]
  },
  {
    num: 14, id: "python-files-json-data", title: "Python Files, JSON & Data", emoji: "🗂️",
    tag: "PYTHON", category: "python", level: "beginner", tier: 2,
    desc: "Reading and writing files, parsing JSON and CSV, and moving data between formats without losing it.",
    chips: ["Files", "JSON", "CSV"], colors: { c1: "#0ea5e9", c2: "#22c55e" }, stageArt: "layers",
    status: "planned", tags: ["python", "data"],
    prereq: ["python-fundamentals"], related: ["rest-apis-json", "sql-relational-databases"],
    paths: ["python-developer", "data-analyst", "backend-engineer"],
    concepts: ["json", "data-type"]
  },
  {
    num: 15, id: "python-type-hints", title: "Python Type Hints", emoji: "🏷️",
    tag: "PYTHON", category: "python", level: "beginner", tier: 2,
    desc: "Annotations, generics and static checking — making your intent visible to tools and to other people.",
    chips: ["Annotations", "Generics", "mypy"], colors: { c1: "#2563eb", c2: "#06b6d4" }, stageArt: "code",
    status: "planned", tags: ["python", "types"],
    prereq: ["python-fundamentals"], related: ["clean-code", "fastapi"],
    paths: ["python-developer", "backend-engineer"],
    concepts: ["data-type", "function", "abstraction"]
  },
  {
    num: 16, id: "debugging-code", title: "Debugging Code", emoji: "🔍",
    tag: "CRAFT", category: "craft", level: "beginner", tier: 2,
    desc: "A systematic method for finding bugs: reproduce, isolate, hypothesise, verify — instead of guessing.",
    chips: ["Breakpoints", "Bisecting", "Hypotheses"], colors: { c1: "#f97316", c2: "#dc2626" }, stageArt: "pulse",
    status: "planned", tags: ["craft", "debugging"],
    prereq: ["python-errors-exceptions"], related: ["reading-code", "testing-fundamentals"],
    paths: ["python-developer", "backend-engineer", "devops"],
    concepts: ["state", "control-flow"]
  },
  {
    num: 17, id: "reading-code", title: "Reading Code You Didn't Write", emoji: "📖",
    tag: "CRAFT", category: "craft", level: "beginner", tier: 2,
    desc: "How to orient in an unfamiliar codebase: entry points, data flow, naming and the questions to ask first.",
    chips: ["Entry points", "Data flow", "Orientation"], colors: { c1: "#8b5cf6", c2: "#0ea5e9" }, stageArt: "code-sweep",
    status: "planned", tags: ["craft", "reading"],
    prereq: ["python-fundamentals"], related: ["debugging-code", "software-project-structure"],
    paths: ["python-developer", "backend-engineer", "cs-foundations"],
    concepts: ["abstraction", "function", "state"]
  },
  {
    num: 18, id: "git-version-control", title: "Git & Version Control", emoji: "🔀",
    tag: "TOOLING", category: "tooling", level: "beginner", tier: 2,
    desc: "Commits, branches, merges, rebasing and how to recover when things go wrong.",
    chips: ["Branching", "Merge", "Rebase"], colors: { c1: "#8b5cf6", c2: "#ec4899" }, stageArt: "term",
    status: "live", href: "courses/git-version-control/course.html",
    lessons: { href: "courses/git-version-control/course.html", label: "Guided lessons" },
    glossary: "courses/git-version-control/reference/git-version-control-glossary.html",
    meta: "8 lessons · interactive quizzes · worked examples",
    tags: ["git", "tooling"],
    prereq: [], related: ["ci-cd", "software-project-structure"],
    paths: ["python-developer", "backend-engineer", "devops", "cs-foundations"],
    concepts: ["git"]
  },
  {
    num: 19, id: "command-line-shell", title: "Command Line & Shell Fundamentals", emoji: "🐧",
    tag: "SYSTEMS", category: "systems", level: "beginner", tier: 2,
    desc: "Files, permissions, processes, pipes and shell scripting — fluency in the terminal.",
    chips: ["Shell", "Pipes", "Processes"], colors: { c1: "#dc2626", c2: "#7c3aed" }, stageArt: "term-layers",
    status: "planned", tags: ["linux", "systems", "tooling"],
    prereq: [], related: ["docker-containers", "software-project-structure"],
    paths: ["devops", "cs-foundations", "backend-engineer"],
    concepts: ["container"]
  },
  {
    num: 20, id: "software-project-structure", title: "How Software Projects Are Structured", emoji: "🗃️",
    tag: "CRAFT", category: "craft", level: "beginner", tier: 2,
    desc: "Layout, entry points, configuration and dependency files — the conventions that make a repo navigable.",
    chips: ["Layout", "Config", "Dependencies"], colors: { c1: "#14b8a6", c2: "#3b82f6" }, stageArt: "layers-orbit",
    status: "planned", tags: ["craft", "structure"],
    prereq: ["python-modules-packages"], related: ["backend-architecture", "ci-cd"],
    paths: ["python-developer", "backend-engineer", "devops"],
    concepts: ["abstraction", "container"]
  },

  /* ==========================================================
     LEVEL 3 — UNDERSTAND THE WEB
     ========================================================== */
  {
    num: 21, id: "how-the-internet-works", title: "How the Internet Works", emoji: "🌐",
    tag: "WEB", category: "web", level: "beginner", tier: 3,
    desc: "Packets, IP, routing and the layered journey a request takes from your machine to a server and back.",
    chips: ["Packets", "IP", "Routing"], colors: { c1: "#059669", c2: "#0891b2" }, stageArt: "globe",
    status: "planned", tags: ["web", "networks"],
    prereq: [], related: ["http", "dns-domains-tls"],
    paths: ["frontend-engineer", "backend-engineer", "cs-foundations"],
    concepts: ["request", "response"]
  },
  {
    num: 22, id: "http", title: "HTTP Explained Visually", emoji: "🔌",
    tag: "WEB", category: "web", level: "beginner", tier: 3,
    desc: "Requests, responses, methods, headers and status codes — the protocol every web app speaks.",
    chips: ["Methods", "Headers", "Status codes"], colors: { c1: "#14b8a6", c2: "#3b82f6" }, stageArt: "flow",
    status: "planned", tags: ["web", "http"],
    prereq: ["how-the-internet-works"], related: ["rest-apis-json", "frontend-backend"],
    paths: ["frontend-engineer", "backend-engineer"],
    concepts: ["http", "request", "response", "api"]
  },
  {
    num: 23, id: "dns-domains-tls", title: "DNS, Domains & TLS", emoji: "🔐",
    tag: "WEB", category: "web", level: "beginner", tier: 3,
    desc: "How a name becomes an address, and how a connection becomes private — DNS resolution and the TLS handshake.",
    chips: ["DNS", "Certificates", "TLS"], colors: { c1: "#7c3aed", c2: "#06b6d4" }, stageArt: "globe-nodes",
    status: "planned", tags: ["web", "security", "networks"],
    prereq: ["how-the-internet-works"], related: ["authentication-sessions", "web-security"],
    paths: ["frontend-engineer", "backend-engineer", "devops"],
    concepts: ["request", "authentication"]
  },
  {
    num: 24, id: "html-dom", title: "HTML & DOM", emoji: "📄",
    tag: "FRONTEND", category: "frontend", level: "beginner", tier: 3,
    desc: "Semantic markup and the tree the browser builds from it — the structure every page is made of.",
    chips: ["Semantics", "Tree", "Accessibility"], colors: { c1: "#f97316", c2: "#f59e0b" }, stageArt: "layers",
    status: "planned", tags: ["web", "frontend", "html"],
    prereq: ["how-the-internet-works"], related: ["css-layout", "javascript-fundamentals"],
    paths: ["frontend-engineer"],
    concepts: ["frontend"]
  },
  {
    num: 25, id: "css-layout", title: "CSS & Layout Systems", emoji: "🎨",
    tag: "FRONTEND", category: "frontend", level: "beginner", tier: 3,
    desc: "The box model, flexbox, grid and responsive design — making layouts behave predictably.",
    chips: ["Flexbox", "Grid", "Responsive"], colors: { c1: "#a855f7", c2: "#2563eb" }, stageArt: "pulse-nodes",
    status: "planned", tags: ["css", "design", "frontend"],
    prereq: ["html-dom"], related: ["javascript-fundamentals", "react-architecture"],
    paths: ["frontend-engineer"],
    concepts: ["frontend"]
  },
  {
    num: 26, id: "javascript-fundamentals", title: "JavaScript Fundamentals", emoji: "🖥️",
    tag: "FRONTEND", category: "frontend", level: "beginner", tier: 3,
    desc: "Values, functions, closures, objects and modules — the language the browser actually runs.",
    chips: ["Closures", "Objects", "Modules"], colors: { c1: "#ef4444", c2: "#f59e0b" }, stageArt: "code-sweep",
    status: "planned", tags: ["javascript", "frontend"],
    prereq: ["html-dom"], related: ["browser-events-async", "react-architecture"],
    paths: ["frontend-engineer"],
    concepts: ["variable", "function", "scope", "object", "frontend"]
  },
  {
    num: 27, id: "browser-events-async", title: "Browser Events & Async JavaScript", emoji: "⏱️",
    tag: "FRONTEND", category: "frontend", level: "beginner", tier: 3,
    desc: "The event loop, callbacks, promises and async/await — how a single thread handles many things at once.",
    chips: ["Event loop", "Promises", "async/await"], colors: { c1: "#f59e0b", c2: "#8b5cf6" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["javascript", "frontend", "async"],
    prereq: ["javascript-fundamentals"], related: ["frontend-backend", "rest-apis-json"],
    paths: ["frontend-engineer"],
    concepts: ["control-flow", "request", "frontend"]
  },
  {
    num: 28, id: "rest-apis-json", title: "REST APIs & JSON", emoji: "🧾",
    tag: "APIS", category: "apis", level: "beginner", tier: 3,
    desc: "Design resources, verbs, status codes and versioning — then consume and build real APIs.",
    chips: ["REST", "JSON", "Versioning"], colors: { c1: "#14b8a6", c2: "#3b82f6" }, stageArt: "flow",
    status: "planned", tags: ["apis", "http", "backend"],
    prereq: ["http"], related: ["fastapi", "frontend-backend"],
    paths: ["backend-engineer", "frontend-engineer", "ai-engineer"],
    concepts: ["api", "json", "request", "response", "http"]
  },
  {
    num: 29, id: "authentication-sessions", title: "Authentication & Sessions", emoji: "🪪",
    tag: "SECURITY", category: "security", level: "beginner", tier: 3,
    desc: "Passwords, hashing, cookies, tokens and sessions — how a server knows who is asking.",
    chips: ["Hashing", "Cookies", "Tokens"], colors: { c1: "#0ea5e9", c2: "#22c55e" }, stageArt: "shield-pulse",
    status: "planned", tags: ["security", "auth", "web"],
    prereq: ["http"], related: ["secrets-identity", "web-security"],
    paths: ["backend-engineer", "frontend-engineer"],
    concepts: ["authentication", "request", "response"]
  },
  {
    num: 30, id: "frontend-backend", title: "Frontend ↔ Backend Communication", emoji: "🔗",
    tag: "WEB", category: "web", level: "beginner", tier: 3,
    desc: "How a browser and a server agree on data: requests, payloads, errors, loading states and caching.",
    chips: ["Payloads", "Errors", "Caching"], colors: { c1: "#3b82f6", c2: "#14b8a6" }, stageArt: "flow",
    status: "planned", tags: ["web", "apis", "frontend"],
    prereq: ["rest-apis-json", "browser-events-async"], related: ["backend-architecture", "react-architecture"],
    paths: ["frontend-engineer", "backend-engineer"],
    concepts: ["frontend", "backend", "api", "request", "response"]
  },

  /* ==========================================================
     LEVEL 4 — BUILD REAL APPLICATIONS
     ========================================================== */
  {
    num: 31, id: "sql-relational-databases", title: "SQL & Relational Databases", emoji: "🗄️",
    tag: "DATABASES", category: "databases", level: "beginner", tier: 4,
    desc: "Tables, rows, keys and queries — storing data so it stays correct and stays findable.",
    chips: ["SELECT", "Keys", "Queries"], colors: { c1: "#7c3aed", c2: "#db2777" }, stageArt: "layers",
    status: "planned", tags: ["databases", "sql", "backend"],
    prereq: ["python-files-json-data"], related: ["database-design", "sql-joins"],
    paths: ["backend-engineer", "data-analyst", "cs-foundations"],
    concepts: ["database", "table", "primary-key", "sql-join"]
  },
  {
    num: 32, id: "database-design", title: "Database Design & Relationships", emoji: "🧱",
    tag: "DATABASES", category: "databases", level: "beginner", tier: 4,
    desc: "Normalisation, one-to-many and many-to-many relationships, and modelling a domain in tables.",
    chips: ["Normalisation", "Relationships", "Modelling"], colors: { c1: "#8b5cf6", c2: "#ec4899" }, stageArt: "layers-orbit",
    status: "planned", tags: ["databases", "design"],
    prereq: ["sql-relational-databases"], related: ["sql-joins", "orms"],
    paths: ["backend-engineer", "data-analyst"],
    concepts: ["database", "table", "primary-key", "foreign-key"]
  },
  {
    num: 33, id: "sql-joins", title: "SQL Joins & Query Thinking", emoji: "🔗",
    tag: "DATABASES", category: "databases", level: "beginner", tier: 4,
    desc: "Inner, left, right and full joins, aggregation and subqueries — combining tables without losing rows.",
    chips: ["Joins", "Aggregation", "Subqueries"], colors: { c1: "#db2777", c2: "#7c3aed" }, stageArt: "flow",
    status: "planned", tags: ["databases", "sql"],
    prereq: ["database-design"], related: ["database-indexes-performance", "orms"],
    paths: ["backend-engineer", "data-analyst"],
    concepts: ["sql-join", "table", "foreign-key"]
  },
  {
    num: 34, id: "database-indexes-performance", title: "Indexes & Database Performance", emoji: "⚡",
    tag: "DATABASES", category: "databases", level: "beginner", tier: 4,
    desc: "How indexes work, when they help, when they hurt, and how to read a query plan.",
    chips: ["Indexes", "Query plans", "Tuning"], colors: { c1: "#f59e0b", c2: "#db2777" }, stageArt: "bars-nodes",
    status: "planned", tags: ["databases", "performance"],
    prereq: ["sql-joins"], related: ["big-o-complexity", "transactions-data-integrity"],
    paths: ["backend-engineer", "data-analyst"],
    concepts: ["database", "complexity", "table"]
  },
  {
    num: 35, id: "transactions-data-integrity", title: "Transactions & Data Integrity", emoji: "🔒",
    tag: "DATABASES", category: "databases", level: "beginner", tier: 4,
    desc: "ACID, isolation levels, locking and constraints — keeping data correct when many things happen at once.",
    chips: ["ACID", "Isolation", "Constraints"], colors: { c1: "#22c55e", c2: "#0ea5e9" }, stageArt: "shield-pulse",
    status: "planned", tags: ["databases", "integrity"],
    prereq: ["sql-joins"], related: ["distributed-systems", "backend-architecture"],
    paths: ["backend-engineer", "cs-foundations"],
    concepts: ["transaction", "database", "state"]
  },
  {
    num: 36, id: "postgresql", title: "PostgreSQL", emoji: "🐘",
    tag: "DATABASES", category: "databases", level: "beginner", tier: 4,
    desc: "The practical side of a real database: types, extensions, JSON columns, roles and backups.",
    chips: ["Types", "Extensions", "Roles"], colors: { c1: "#3b82f6", c2: "#7c3aed" }, stageArt: "layers",
    status: "planned", tags: ["databases", "postgres"],
    prereq: ["transactions-data-integrity"], related: ["orms", "backend-architecture"],
    paths: ["backend-engineer", "devops"],
    concepts: ["database", "table", "transaction"]
  },
  {
    num: 37, id: "orms", title: "ORMs & Database Abstraction", emoji: "🧰",
    tag: "BACKEND", category: "backend", level: "beginner", tier: 4,
    desc: "Mapping objects to tables, migrations and the trade-offs of letting a library write your SQL.",
    chips: ["Mapping", "Migrations", "Trade-offs"], colors: { c1: "#14b8a6", c2: "#6366f1" }, stageArt: "layers-orbit",
    status: "planned", tags: ["backend", "databases", "python"],
    prereq: ["sql-joins", "oop"], related: ["fastapi", "backend-architecture"],
    paths: ["backend-engineer", "python-developer"],
    concepts: ["database", "object", "abstraction", "table"]
  },
  {
    num: 38, id: "backend-architecture", title: "Backend Architecture", emoji: "🏗️",
    tag: "BACKEND", category: "backend", level: "beginner", tier: 4,
    desc: "Layers, boundaries, services and configuration — structuring a server so it survives change.",
    chips: ["Layers", "Services", "Config"], colors: { c1: "#6366f1", c2: "#0ea5e9" }, stageArt: "layers-orbit",
    status: "planned", tags: ["backend", "architecture"],
    prereq: ["rest-apis-json", "software-project-structure"], related: ["fastapi", "software-architecture-patterns"],
    paths: ["backend-engineer", "python-developer"],
    concepts: ["backend", "abstraction", "api", "separation-of-concerns"]
  },
  {
    num: 39, id: "fastapi", title: "FastAPI & Python APIs", emoji: "🚀",
    tag: "BACKEND", category: "backend", level: "beginner", tier: 4,
    desc: "Build typed, async web services with validation, dependency injection and automatic docs.",
    chips: ["FastAPI", "Pydantic", "Async"], colors: { c1: "#22c55e", c2: "#0ea5e9" }, stageArt: "layers-orbit",
    status: "planned", tags: ["backend", "python", "apis"],
    prereq: ["backend-architecture", "python-type-hints"], related: ["dependency-injection", "docker-containers"],
    paths: ["backend-engineer", "python-developer", "ai-engineer"],
    concepts: ["api", "backend", "json", "dependency-injection", "request", "response"]
  },
  {
    num: 40, id: "react-architecture", title: "Frontend Architecture with React", emoji: "⚛️",
    tag: "FRONTEND", category: "frontend", level: "beginner", tier: 4,
    desc: "Components, props, state, hooks and data flow — building interfaces out of small, composable pieces.",
    chips: ["Components", "Hooks", "State"], colors: { c1: "#06b6d4", c2: "#8b5cf6" }, stageArt: "code-sweep",
    status: "planned", tags: ["react", "frontend"],
    prereq: ["javascript-fundamentals", "frontend-backend"], related: ["css-layout", "separation-of-concerns"],
    paths: ["frontend-engineer"],
    concepts: ["frontend", "composition", "state", "abstraction"]
  },

  /* ==========================================================
     LEVEL 5 — SOFTWARE ENGINEERING
     ========================================================== */
  {
    num: 41, id: "clean-code", title: "Clean Code & Code Smells", emoji: "🧹",
    tag: "CRAFT", category: "craft", level: "intermediate", tier: 5,
    desc: "Naming, small functions, removing duplication and recognising the smells that predict future pain.",
    chips: ["Naming", "Smells", "Simplicity"], colors: { c1: "#f97316", c2: "#7c3aed" }, stageArt: "code-pulse",
    status: "planned", tags: ["craft", "quality"],
    prereq: ["oop"], related: ["refactoring-technical-debt", "separation-of-concerns"],
    paths: ["python-developer", "cs-foundations", "backend-engineer"],
    concepts: ["abstraction", "function", "separation-of-concerns"]
  },
  {
    num: 42, id: "separation-of-concerns", title: "Separation of Concerns", emoji: "🧭",
    tag: "DESIGN", category: "design", level: "intermediate", tier: 5,
    desc: "Giving each part of a system one reason to change — the principle behind most good architecture.",
    chips: ["Boundaries", "Cohesion", "Coupling"], colors: { c1: "#10b981", c2: "#3b82f6" }, stageArt: "layers",
    status: "planned", tags: ["design", "architecture"],
    prereq: ["clean-code"], related: ["dependency-injection", "software-architecture-patterns"],
    paths: ["cs-foundations", "backend-engineer", "python-developer"],
    concepts: ["separation-of-concerns", "abstraction", "encapsulation"]
  },
  {
    num: 43, id: "dependency-injection", title: "Dependency Injection", emoji: "💉",
    tag: "DESIGN", category: "design", level: "intermediate", tier: 5,
    desc: "Passing collaborators in instead of constructing them — making code testable and swappable.",
    chips: ["Injection", "Testability", "Wiring"], colors: { c1: "#0ea5e9", c2: "#a855f7" }, stageArt: "flow",
    status: "planned", tags: ["design", "testing"],
    prereq: ["separation-of-concerns"], related: ["testing-fundamentals", "fastapi"],
    paths: ["backend-engineer", "python-developer", "cs-foundations"],
    concepts: ["dependency-injection", "composition", "abstraction", "testing"]
  },
  {
    num: 44, id: "composition-vs-inheritance", title: "Composition vs Inheritance", emoji: "⚖️",
    tag: "DESIGN", category: "design", level: "intermediate", tier: 5,
    desc: "When to reuse by containing and when to reuse by deriving — and why composition usually wins.",
    chips: ["has-a", "is-a", "Reuse"], colors: { c1: "#a855f7", c2: "#22c55e" }, stageArt: "pulse-nodes",
    status: "planned", tags: ["design", "oop"],
    prereq: ["oop"], related: ["design-patterns", "clean-code"],
    paths: ["cs-foundations", "python-developer"],
    concepts: ["composition", "inheritance", "object", "abstraction"]
  },
  {
    num: 45, id: "design-patterns", title: "Design Patterns", emoji: "🧩",
    tag: "DESIGN", category: "design", level: "intermediate", tier: 5,
    desc: "Factory, observer, strategy, adapter and friends — reusable solutions to recurring problems.",
    chips: ["Factory", "Observer", "Strategy"], colors: { c1: "#10b981", c2: "#3b82f6" }, stageArt: "pulse-nodes",
    status: "planned", tags: ["design", "patterns", "oop"],
    prereq: ["composition-vs-inheritance"], related: ["software-architecture-patterns", "clean-code"],
    paths: ["cs-foundations", "python-developer", "backend-engineer"],
    concepts: ["composition", "inheritance", "abstraction", "object"]
  },
  {
    num: 46, id: "software-architecture-patterns", title: "Software Architecture Patterns", emoji: "🏛️",
    tag: "ARCHITECTURE", category: "architecture", level: "intermediate", tier: 5,
    desc: "Layered, hexagonal, event-driven and microservice shapes — and the trade-offs each one buys.",
    chips: ["Layered", "Hexagonal", "Events"], colors: { c1: "#ec4899", c2: "#f97316" }, stageArt: "layers-orbit",
    status: "planned", tags: ["architecture", "design"],
    prereq: ["separation-of-concerns"], related: ["system-design", "production-ai-architecture"],
    paths: ["cs-foundations", "backend-engineer"],
    concepts: ["separation-of-concerns", "abstraction", "backend"]
  },
  {
    num: 47, id: "testing-fundamentals", title: "Testing Fundamentals", emoji: "🧪",
    tag: "TESTING", category: "testing", level: "intermediate", tier: 5,
    desc: "What a test is for, what makes one trustworthy, and how to test behaviour instead of implementation.",
    chips: ["Assertions", "Fixtures", "Coverage"], colors: { c1: "#0ea5e9", c2: "#6366f1" }, stageArt: "pulse",
    status: "planned", tags: ["testing", "quality"],
    prereq: ["python-fundamentals"], related: ["unit-integration-testing", "tdd"],
    paths: ["python-developer", "backend-engineer", "cs-foundations"],
    concepts: ["testing", "function", "state"]
  },
  {
    num: 48, id: "unit-integration-testing", title: "Unit Testing & Integration Testing", emoji: "🔬",
    tag: "TESTING", category: "testing", level: "intermediate", tier: 5,
    desc: "Isolating units, mocking boundaries and testing the seams where components actually meet.",
    chips: ["Units", "Mocks", "Integration"], colors: { c1: "#6366f1", c2: "#0ea5e9" }, stageArt: "pulse-nodes",
    status: "planned", tags: ["testing", "quality"],
    prereq: ["testing-fundamentals"], related: ["tdd", "dependency-injection"],
    paths: ["python-developer", "backend-engineer"],
    concepts: ["testing", "dependency-injection", "abstraction"]
  },
  {
    num: 49, id: "tdd", title: "Test-Driven Development", emoji: "🔴",
    tag: "TESTING", category: "testing", level: "intermediate", tier: 5,
    desc: "The red-green-refactor loop: writing the test first to force a design that is easy to call.",
    chips: ["Red-green", "Refactor", "Design"], colors: { c1: "#ef4444", c2: "#22c55e" }, stageArt: "pulse",
    status: "planned", tags: ["testing", "craft"],
    prereq: ["unit-integration-testing"], related: ["refactoring-technical-debt", "clean-code"],
    paths: ["python-developer", "backend-engineer", "cs-foundations"],
    concepts: ["testing", "refactoring", "function"]
  },
  {
    num: 50, id: "refactoring-technical-debt", title: "Refactoring & Technical Debt", emoji: "🔧",
    tag: "CRAFT", category: "craft", level: "intermediate", tier: 5,
    desc: "Improving structure without changing behaviour — and managing the debt you deliberately take on.",
    chips: ["Refactoring", "Debt", "Safety"], colors: { c1: "#f59e0b", c2: "#f97316" }, stageArt: "code-pulse",
    status: "planned", tags: ["craft", "quality"],
    prereq: ["clean-code", "testing-fundamentals"], related: ["ai-assisted-refactoring", "design-patterns"],
    paths: ["python-developer", "backend-engineer", "cs-foundations"],
    concepts: ["refactoring", "testing", "abstraction"]
  },

  /* ==========================================================
     LEVEL 6 — VIBE CODING PROPERLY
     ========================================================== */
  {
    num: 51, id: "ai-coding-agents", title: "How AI Coding Agents Work", emoji: "🤖",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "What an agent actually does: read context, plan, edit files, run tools, observe results and iterate.",
    chips: ["Agent loop", "Tools", "Context"], colors: { c1: "#6366f1", c2: "#ec4899" }, stageArt: "net-sweep",
    status: "planned", tags: ["ai", "workflow", "agents"],
    prereq: ["reading-code"], related: ["context-engineering", "ai-agents"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["agent", "agent-loop", "tool-call", "context-window"]
  },
  {
    num: 52, id: "prompting-vs-specification", title: "Prompting vs Specification", emoji: "📝",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Why a precise specification beats a clever prompt — and how to write requirements an agent can verify.",
    chips: ["Specs", "Requirements", "Verification"], colors: { c1: "#8b5cf6", c2: "#0ea5e9" }, stageArt: "code-sweep",
    status: "planned", tags: ["ai", "workflow", "specification"],
    prereq: ["ai-coding-agents"], related: ["context-engineering", "prompt-engineering"],
    paths: ["ai-engineer", "python-developer"],
    concepts: ["prompt", "agent", "evaluation"]
  },
  {
    num: 53, id: "context-engineering", title: "Context Engineering", emoji: "🧠",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Choosing what the model sees: files, conventions, examples and constraints — and what to leave out.",
    chips: ["Context", "Selection", "Budget"], colors: { c1: "#0ea5e9", c2: "#a855f7" }, stageArt: "net-sweep",
    status: "planned", tags: ["ai", "workflow", "context"],
    prereq: ["prompting-vs-specification"], related: ["ai-project-context", "tokens-context"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["context-window", "prompt", "token", "agent"]
  },
  {
    num: 54, id: "ai-project-context", title: "Giving AI Agents the Right Project Context", emoji: "🗂️",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Conventions files, architecture notes and examples that make an agent produce code that fits your repo.",
    chips: ["Conventions", "Examples", "Repo map"], colors: { c1: "#14b8a6", c2: "#6366f1" }, stageArt: "layers-orbit",
    status: "planned", tags: ["ai", "workflow", "context"],
    prereq: ["context-engineering"], related: ["large-ai-coding-projects", "software-project-structure"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["context-window", "prompt", "agent", "abstraction"]
  },
  {
    num: 55, id: "ai-assisted-debugging", title: "AI-Assisted Debugging", emoji: "🐞",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Using an agent to form and test hypotheses — while keeping the evidence, not the confidence, in charge.",
    chips: ["Hypotheses", "Evidence", "Traces"], colors: { c1: "#ef4444", c2: "#f59e0b" }, stageArt: "pulse",
    status: "planned", tags: ["ai", "workflow", "debugging"],
    prereq: ["debugging-code", "ai-coding-agents"], related: ["ai-assisted-code-review", "trusting-ai-generated-code"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["agent", "hallucination", "evaluation"]
  },
  {
    num: 56, id: "ai-assisted-code-review", title: "AI-Assisted Code Review", emoji: "🔎",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "What a model is good at spotting, what it reliably misses, and how to review generated diffs.",
    chips: ["Diffs", "Review", "Blind spots"], colors: { c1: "#f97316", c2: "#8b5cf6" }, stageArt: "code-pulse",
    status: "planned", tags: ["ai", "workflow", "review"],
    prereq: ["ai-coding-agents", "clean-code"], related: ["trusting-ai-generated-code", "ai-assisted-refactoring"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["agent", "evaluation", "hallucination"]
  },
  {
    num: 57, id: "ai-generated-architecture", title: "Working With AI-Generated Architecture", emoji: "🏗️",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Keeping generated structure coherent over time: boundaries, naming, and stopping the drift.",
    chips: ["Boundaries", "Drift", "Coherence"], colors: { c1: "#6366f1", c2: "#14b8a6" }, stageArt: "layers-orbit",
    status: "planned", tags: ["ai", "workflow", "architecture"],
    prereq: ["ai-project-context", "separation-of-concerns"], related: ["large-ai-coding-projects", "software-architecture-patterns"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["agent", "separation-of-concerns", "abstraction", "context-window"]
  },
  {
    num: 58, id: "ai-assisted-refactoring", title: "AI-Assisted Refactoring", emoji: "🔧",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Using tests as a safety net while an agent performs large mechanical changes across a codebase.",
    chips: ["Safety net", "Bulk edits", "Tests"], colors: { c1: "#f59e0b", c2: "#22c55e" }, stageArt: "code-pulse",
    status: "planned", tags: ["ai", "workflow", "refactoring"],
    prereq: ["refactoring-technical-debt", "ai-coding-agents"], related: ["ai-assisted-code-review", "trusting-ai-generated-code"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["refactoring", "testing", "agent", "evaluation"]
  },
  {
    num: 59, id: "large-ai-coding-projects", title: "Managing Large AI Coding Projects", emoji: "🗺️",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Breaking big goals into verifiable steps, keeping context fresh, and knowing when to take the wheel.",
    chips: ["Planning", "Checkpoints", "Scope"], colors: { c1: "#0ea5e9", c2: "#ec4899" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["ai", "workflow", "planning"],
    prereq: ["ai-project-context"], related: ["trusting-ai-generated-code", "ai-generated-architecture"],
    paths: ["ai-engineer", "backend-engineer", "python-developer"],
    concepts: ["agent", "context-window", "evaluation", "agent-loop"]
  },
  {
    num: 60, id: "trusting-ai-generated-code", title: "When to Trust AI-Generated Code", emoji: "⚖️",
    tag: "AI WORKFLOW", category: "ai-workflow", level: "intermediate", tier: 6,
    desc: "Calibrating trust: which tasks are safe to delegate, which need review, and which need a human.",
    chips: ["Calibration", "Risk", "Review"], colors: { c1: "#a855f7", c2: "#f59e0b" }, stageArt: "shield-pulse",
    status: "planned", tags: ["ai", "workflow", "trust"],
    prereq: ["ai-assisted-code-review"], related: ["hallucination-reliability", "ai-guardrails"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["hallucination", "evaluation", "guardrail", "agent"]
  },

  /* ==========================================================
     LEVEL 7 — AI FUNDAMENTALS
     ========================================================== */
  {
    num: 61, id: "what-is-ai", title: "What Is AI?", emoji: "✨",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "What we mean by intelligence in software, and the difference between rules, learning and generation.",
    chips: ["Rules", "Learning", "Generation"], colors: { c1: "#6366f1", c2: "#ec4899" }, stageArt: "net-sweep",
    status: "planned", tags: ["ai", "ml"],
    prereq: ["programming-computational-thinking"], related: ["machine-learning", "llms"],
    paths: ["ai-engineer", "data-analyst"],
    concepts: ["machine-learning", "llm"]
  },
  {
    num: 62, id: "machine-learning", title: "Machine Learning Explained", emoji: "📉",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Features, training, evaluation and overfitting — the core loop behind every ML model.",
    chips: ["Training", "Metrics", "Overfitting"], colors: { c1: "#6366f1", c2: "#ec4899" }, stageArt: "net-sweep",
    status: "planned", tags: ["ml", "ai"],
    prereq: ["what-is-ai"], related: ["neural-networks", "ai-evaluation"],
    paths: ["ai-engineer", "data-analyst"],
    concepts: ["machine-learning", "evaluation", "embedding"]
  },
  {
    num: 63, id: "neural-networks", title: "Neural Networks Visually", emoji: "🧠",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Layers, weights, gradients and backpropagation — why deep models learn what they learn.",
    chips: ["Layers", "Gradients", "Backprop"], colors: { c1: "#a855f7", c2: "#0ea5e9" }, stageArt: "net-sweep",
    status: "planned", tags: ["ml", "ai", "deep-learning"],
    prereq: ["machine-learning"], related: ["transformers-attention", "embeddings"],
    paths: ["ai-engineer"],
    concepts: ["neural-network", "machine-learning", "embedding"]
  },
  {
    num: 64, id: "embeddings", title: "Embeddings Explained", emoji: "🧭",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Turning meaning into vectors — how similar things end up near each other in a high-dimensional space.",
    chips: ["Vectors", "Similarity", "Space"], colors: { c1: "#14b8a6", c2: "#8b5cf6" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["ai", "embeddings"],
    prereq: ["neural-networks"], related: ["vector-databases", "rag"],
    paths: ["ai-engineer", "data-analyst"],
    concepts: ["embedding", "vector-search", "token"]
  },
  {
    num: 65, id: "transformers-attention", title: "Transformers & Attention", emoji: "🎯",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Attention, queries, keys and values — the mechanism that lets a model weigh every token against every other.",
    chips: ["Attention", "QKV", "Sequence"], colors: { c1: "#8b5cf6", c2: "#06b6d4" }, stageArt: "net-sweep",
    status: "planned", tags: ["ai", "transformers"],
    prereq: ["embeddings"], related: ["llms", "tokens-context"],
    paths: ["ai-engineer"],
    concepts: ["transformer", "attention", "token", "embedding"]
  },
  {
    num: 66, id: "llms", title: "How LLMs Work", emoji: "💬",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Pretraining, next-token prediction and instruction tuning — what a language model is actually doing.",
    chips: ["Pretraining", "Next token", "Tuning"], colors: { c1: "#14b8a6", c2: "#8b5cf6" }, stageArt: "net-sweep",
    status: "planned", tags: ["ai", "llm"],
    prereq: ["transformers-attention"], related: ["tokens-context", "inference-sampling"],
    paths: ["ai-engineer", "data-analyst"],
    concepts: ["llm", "token", "transformer", "inference", "hallucination"]
  },
  {
    num: 67, id: "tokens-context", title: "Tokens, Context Windows & Context Limits", emoji: "🪟",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "How text becomes tokens, what fits in a context window, and what happens when it does not.",
    chips: ["Tokens", "Windows", "Limits"], colors: { c1: "#0ea5e9", c2: "#a855f7" }, stageArt: "bars-nodes",
    status: "planned", tags: ["ai", "llm", "context"],
    prereq: ["llms"], related: ["context-engineering", "ai-memory-context"],
    paths: ["ai-engineer", "python-developer"],
    concepts: ["token", "context-window", "llm", "prompt"]
  },
  {
    num: 68, id: "inference-sampling", title: "Inference, Temperature & Sampling", emoji: "🎲",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "How a model picks the next token, and how temperature, top-p and seeds change the output.",
    chips: ["Temperature", "top-p", "Seeds"], colors: { c1: "#f59e0b", c2: "#8b5cf6" }, stageArt: "pulse-nodes",
    status: "planned", tags: ["ai", "llm", "inference"],
    prereq: ["llms"], related: ["model-selection", "ai-cost-latency"],
    paths: ["ai-engineer"],
    concepts: ["inference", "sampling", "llm", "token"]
  },
  {
    num: 69, id: "model-selection", title: "Model Selection & Trade-offs", emoji: "📊",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Capability, cost, latency, context and licence — choosing a model for the job instead of the hype.",
    chips: ["Capability", "Cost", "Licence"], colors: { c1: "#3b82f6", c2: "#14b8a6" }, stageArt: "bars-nodes",
    status: "planned", tags: ["ai", "models"],
    prereq: ["inference-sampling"], related: ["local-vs-cloud-models", "ai-model-routing"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["llm", "inference", "evaluation"]
  },
  {
    num: 70, id: "local-vs-cloud-models", title: "Local Models vs Cloud Models", emoji: "🏠",
    tag: "AI / ML", category: "ai", level: "intermediate", tier: 7,
    desc: "Privacy, cost, latency and control — the real trade-offs between running models yourself and renting them.",
    chips: ["Privacy", "Cost", "Control"], colors: { c1: "#22c55e", c2: "#0ea5e9" }, stageArt: "globe-nodes",
    status: "planned", tags: ["ai", "models", "infrastructure"],
    prereq: ["model-selection"], related: ["ai-cost-latency", "production-ai-architecture"],
    paths: ["ai-engineer", "devops"],
    concepts: ["llm", "inference", "ai-cost-latency"]
  },

  /* ==========================================================
     LEVEL 8 — BUILD AI APPLICATIONS
     ========================================================== */
  {
    num: 71, id: "first-llm-application", title: "Building Your First LLM Application", emoji: "🚀",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "From a single API call to a small app: input, prompt, model call, output handling and error paths.",
    chips: ["API call", "Prompt", "Output"], colors: { c1: "#6366f1", c2: "#22c55e" }, stageArt: "flow",
    status: "planned", tags: ["ai", "apps"],
    prereq: ["llms", "rest-apis-json"], related: ["prompt-engineering", "structured-outputs"],
    paths: ["ai-engineer", "python-developer", "backend-engineer"],
    concepts: ["llm", "prompt", "api", "inference"]
  },
  {
    num: 72, id: "prompt-engineering", title: "Prompt Engineering", emoji: "✍️",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Instructions, examples, roles and constraints — getting reliable behaviour from a language model.",
    chips: ["Instructions", "Examples", "Roles"], colors: { c1: "#8b5cf6", c2: "#0ea5e9" }, stageArt: "code-sweep",
    status: "planned", tags: ["ai", "prompting"],
    prereq: ["first-llm-application"], related: ["structured-outputs", "function-calling"],
    paths: ["ai-engineer", "python-developer"],
    concepts: ["prompt", "llm", "evaluation", "hallucination"]
  },
  {
    num: 73, id: "structured-outputs", title: "Structured Outputs & JSON", emoji: "🧱",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Schemas, validation and repair loops — making a model return data your program can actually use.",
    chips: ["Schemas", "Validation", "Repair"], colors: { c1: "#14b8a6", c2: "#6366f1" }, stageArt: "layers",
    status: "planned", tags: ["ai", "apps", "json"],
    prereq: ["prompt-engineering"], related: ["function-calling", "ai-guardrails"],
    paths: ["ai-engineer", "backend-engineer", "python-developer"],
    concepts: ["structured-output", "json", "guardrail", "prompt"]
  },
  {
    num: 74, id: "function-calling", title: "Function Calling & Tool Use", emoji: "🛠️",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Letting a model request actions: tool schemas, arguments, results and the loop that ties them together.",
    chips: ["Tools", "Schemas", "Loop"], colors: { c1: "#0ea5e9", c2: "#a855f7" }, stageArt: "flow",
    status: "planned", tags: ["ai", "apps", "tools"],
    prereq: ["structured-outputs"], related: ["ai-agents", "mcp"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["tool-call", "structured-output", "agent", "api"]
  },
  {
    num: 75, id: "rag", title: "Retrieval-Augmented Generation (RAG)", emoji: "📚",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Retrieve relevant text, put it in the prompt, and ground the answer in sources you control.",
    chips: ["Retrieval", "Grounding", "Chunks"], colors: { c1: "#a855f7", c2: "#14b8a6" }, stageArt: "flow",
    status: "planned", tags: ["ai", "rag"],
    prereq: ["embeddings", "prompt-engineering"], related: ["vector-databases", "rag-evaluation"],
    paths: ["ai-engineer", "backend-engineer", "data-analyst"],
    concepts: ["rag", "embedding", "vector-search", "prompt", "hallucination"]
  },
  {
    num: 76, id: "vector-databases", title: "Vector Databases & Semantic Search", emoji: "🔍",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Storing and querying embeddings at scale: indexes, similarity metrics and hybrid search.",
    chips: ["Indexes", "Similarity", "Hybrid"], colors: { c1: "#14b8a6", c2: "#3b82f6" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["ai", "vectors", "search"],
    prereq: ["embeddings"], related: ["rag", "ai-memory-context"],
    paths: ["ai-engineer", "backend-engineer", "data-analyst"],
    concepts: ["vector-search", "embedding", "database", "rag"]
  },
  {
    num: 77, id: "ai-memory-context", title: "AI Memory & Context Management", emoji: "🧷",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Short-term and long-term memory, summarisation and what to keep in a limited context window.",
    chips: ["Memory", "Summaries", "Budget"], colors: { c1: "#8b5cf6", c2: "#22c55e" }, stageArt: "layers-orbit",
    status: "planned", tags: ["ai", "memory", "context"],
    prereq: ["tokens-context", "rag"], related: ["ai-agents", "context-engineering"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["memory", "context-window", "rag", "agent"]
  },
  {
    num: 78, id: "ai-agents", title: "AI Agents & Agent Loops", emoji: "🔁",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Goal, plan, act, observe, repeat — building a loop that can use tools and recover from failure.",
    chips: ["Loops", "Planning", "Tools"], colors: { c1: "#6366f1", c2: "#ec4899" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["ai", "agents"],
    prereq: ["function-calling", "ai-memory-context"], related: ["multi-agent-systems", "agent-evaluation"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["agent", "agent-loop", "tool-call", "memory", "guardrail"]
  },
  {
    num: 79, id: "multi-agent-systems", title: "Multi-Agent Systems", emoji: "👥",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "Splitting work across specialised agents: roles, handoffs, shared state and coordination cost.",
    chips: ["Roles", "Handoffs", "Coordination"], colors: { c1: "#ec4899", c2: "#8b5cf6" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["ai", "agents"],
    prereq: ["ai-agents"], related: ["agent-evaluation", "production-ai-architecture"],
    paths: ["ai-engineer"],
    concepts: ["multi-agent", "agent", "agent-loop", "evaluation"]
  },
  {
    num: 80, id: "mcp", title: "MCP & Tool-Connected AI Systems", emoji: "🔌",
    tag: "AI APPS", category: "ai-apps", level: "intermediate", tier: 8,
    desc: "A standard protocol for exposing tools and data to models — servers, clients, resources and prompts.",
    chips: ["Protocol", "Servers", "Resources"], colors: { c1: "#0ea5e9", c2: "#6366f1" }, stageArt: "flow",
    status: "planned", tags: ["ai", "tools", "protocol"],
    prereq: ["function-calling"], related: ["ai-agent-security", "ai-agents"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["mcp", "tool-call", "agent", "api"]
  },

  /* ==========================================================
     LEVEL 9 — PRODUCTION AI ENGINEERING
     ========================================================== */
  {
    num: 81, id: "ai-evaluation", title: "AI Evaluation & Testing", emoji: "📏",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Datasets, graders and rubrics — measuring whether a model change actually made things better.",
    chips: ["Datasets", "Graders", "Rubrics"], colors: { c1: "#0ea5e9", c2: "#22c55e" }, stageArt: "bars-nodes",
    status: "planned", tags: ["ai", "evaluation"],
    prereq: ["llms", "testing-fundamentals"], related: ["rag-evaluation", "agent-evaluation"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["evaluation", "testing", "llm", "hallucination"]
  },
  {
    num: 82, id: "llm-observability", title: "LLM Observability & Tracing", emoji: "📡",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Traces, spans, token accounting and prompt logs — seeing what your AI system actually did.",
    chips: ["Traces", "Spans", "Tokens"], colors: { c1: "#3b82f6", c2: "#dc2626" }, stageArt: "bars",
    status: "planned", tags: ["ai", "observability"],
    prereq: ["first-llm-application"], related: ["ai-cost-latency", "ai-evaluation"],
    paths: ["ai-engineer", "devops", "backend-engineer"],
    concepts: ["evaluation", "inference", "token", "agent"]
  },
  {
    num: 83, id: "hallucination-reliability", title: "Hallucination & Reliability Engineering", emoji: "🛡️",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Why models invent things, how to detect it, and the design patterns that make answers checkable.",
    chips: ["Detection", "Grounding", "Checks"], colors: { c1: "#f59e0b", c2: "#ef4444" }, stageArt: "shield-pulse",
    status: "planned", tags: ["ai", "reliability"],
    prereq: ["ai-evaluation"], related: ["ai-guardrails", "rag-evaluation"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["hallucination", "guardrail", "rag", "evaluation"]
  },
  {
    num: 84, id: "rag-evaluation", title: "RAG Evaluation", emoji: "🔬",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Measuring retrieval and generation separately: recall, precision, faithfulness and answer quality.",
    chips: ["Recall", "Faithfulness", "Quality"], colors: { c1: "#14b8a6", c2: "#8b5cf6" }, stageArt: "bars-nodes",
    status: "planned", tags: ["ai", "rag", "evaluation"],
    prereq: ["rag", "ai-evaluation"], related: ["hallucination-reliability", "vector-databases"],
    paths: ["ai-engineer", "data-analyst"],
    concepts: ["rag", "evaluation", "vector-search", "hallucination"]
  },
  {
    num: 85, id: "agent-evaluation", title: "Agent Evaluation", emoji: "🧭",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Scoring multi-step behaviour: task success, tool correctness, cost per task and failure recovery.",
    chips: ["Task success", "Tools", "Cost"], colors: { c1: "#8b5cf6", c2: "#0ea5e9" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["ai", "agents", "evaluation"],
    prereq: ["ai-agents", "ai-evaluation"], related: ["multi-agent-systems", "ai-cost-latency"],
    paths: ["ai-engineer"],
    concepts: ["agent", "evaluation", "tool-call", "agent-loop"]
  },
  {
    num: 86, id: "ai-guardrails", title: "AI Guardrails & Validation", emoji: "🚧",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Input filters, output validation, allow-lists and human review — bounding what a system may do.",
    chips: ["Filters", "Validation", "Review"], colors: { c1: "#22c55e", c2: "#0ea5e9" }, stageArt: "shield-pulse",
    status: "planned", tags: ["ai", "safety"],
    prereq: ["structured-outputs"], related: ["prompt-injection", "hallucination-reliability"],
    paths: ["ai-engineer", "backend-engineer", "devops"],
    concepts: ["guardrail", "structured-output", "prompt-injection", "evaluation"]
  },
  {
    num: 87, id: "ai-cost-latency", title: "AI Cost & Latency Engineering", emoji: "⏱️",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Token budgets, caching, streaming and batching — making AI features fast enough and cheap enough.",
    chips: ["Caching", "Streaming", "Batching"], colors: { c1: "#f97316", c2: "#3b82f6" }, stageArt: "bars",
    status: "planned", tags: ["ai", "performance", "cost"],
    prereq: ["llm-observability"], related: ["ai-model-routing", "local-vs-cloud-models"],
    paths: ["ai-engineer", "backend-engineer", "devops"],
    concepts: ["inference", "token", "ai-cost-latency", "evaluation"]
  },
  {
    num: 88, id: "ai-model-routing", title: "AI Model Routing & Fallbacks", emoji: "🔀",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Sending each request to the right model, and degrading gracefully when a provider fails.",
    chips: ["Routing", "Fallbacks", "Retries"], colors: { c1: "#6366f1", c2: "#14b8a6" }, stageArt: "flow",
    status: "planned", tags: ["ai", "reliability", "cost"],
    prereq: ["model-selection", "ai-cost-latency"], related: ["production-ai-architecture", "reliable-ai-systems"],
    paths: ["ai-engineer", "backend-engineer", "devops"],
    concepts: ["llm", "inference", "guardrail", "evaluation"]
  },
  {
    num: 89, id: "production-ai-architecture", title: "Production AI Architecture", emoji: "🏭",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Putting the pieces together: services, queues, storage, evaluation and deployment for AI features.",
    chips: ["Services", "Queues", "Deployment"], colors: { c1: "#ec4899", c2: "#6366f1" }, stageArt: "layers-orbit",
    status: "planned", tags: ["ai", "architecture", "production"],
    prereq: ["ai-model-routing", "software-architecture-patterns"], related: ["reliable-ai-systems", "cloud-architecture"],
    paths: ["ai-engineer", "backend-engineer", "devops"],
    concepts: ["backend", "separation-of-concerns", "evaluation", "guardrail", "agent"]
  },
  {
    num: 90, id: "reliable-ai-systems", title: "Building Reliable AI Systems", emoji: "🧱",
    tag: "AI OPS", category: "ai-ops", level: "advanced", tier: 9,
    desc: "Designing for failure, drift and change — the habits that keep an AI feature trustworthy over time.",
    chips: ["Failure", "Drift", "Trust"], colors: { c1: "#0ea5e9", c2: "#a855f7" }, stageArt: "shield-pulse",
    status: "planned", tags: ["ai", "reliability"],
    prereq: ["production-ai-architecture"], related: ["hallucination-reliability", "distributed-systems"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["evaluation", "guardrail", "hallucination", "testing"]
  },

  /* ==========================================================
     LEVEL 10 — SECURITY, SYSTEMS & ARCHITECTURE
     ========================================================== */
  {
    num: 91, id: "cybersecurity-fundamentals", title: "Cybersecurity Fundamentals", emoji: "🔐",
    tag: "SECURITY", category: "security", level: "advanced", tier: 10,
    desc: "Threat models, attack surfaces and defence in depth — how to think like an attacker, safely.",
    chips: ["Threats", "Surfaces", "Defence"], colors: { c1: "#0ea5e9", c2: "#22c55e" }, stageArt: "shield-pulse",
    status: "planned", tags: ["security"],
    prereq: ["how-the-internet-works"], related: ["web-security", "secrets-identity"],
    paths: ["backend-engineer", "devops", "cs-foundations"],
    concepts: ["authentication", "guardrail"]
  },
  {
    num: 92, id: "web-security", title: "Web Application Security", emoji: "🕸️",
    tag: "SECURITY", category: "security", level: "advanced", tier: 10,
    desc: "Injection, XSS, CSRF, broken access control and the OWASP risks that keep showing up in real apps.",
    chips: ["Injection", "XSS", "Access control"], colors: { c1: "#ef4444", c2: "#f59e0b" }, stageArt: "shield-pulse",
    status: "planned", tags: ["security", "web"],
    prereq: ["cybersecurity-fundamentals", "authentication-sessions"], related: ["secrets-identity", "prompt-injection"],
    paths: ["backend-engineer", "frontend-engineer", "devops"],
    concepts: ["authentication", "guardrail", "api"]
  },
  {
    num: 93, id: "secrets-identity", title: "Secrets, Credentials & Identity", emoji: "🗝️",
    tag: "SECURITY", category: "security", level: "advanced", tier: 10,
    desc: "Key management, rotation, least privilege and identity between services — keeping secrets out of code.",
    chips: ["Keys", "Rotation", "Least privilege"], colors: { c1: "#22c55e", c2: "#3b82f6" }, stageArt: "shield-pulse",
    status: "planned", tags: ["security", "identity"],
    prereq: ["authentication-sessions"], related: ["cloud-architecture", "ci-cd"],
    paths: ["devops", "backend-engineer"],
    concepts: ["authentication", "guardrail"]
  },
  {
    num: 94, id: "prompt-injection", title: "Prompt Injection & AI Security", emoji: "💉",
    tag: "AI SECURITY", category: "ai-security", level: "advanced", tier: 10,
    desc: "Direct and indirect injection, data exfiltration and why untrusted text must never be treated as instructions.",
    chips: ["Injection", "Exfiltration", "Trust"], colors: { c1: "#ec4899", c2: "#ef4444" }, stageArt: "shield-pulse",
    status: "planned", tags: ["ai", "security"],
    prereq: ["prompt-engineering", "web-security"], related: ["ai-agent-security", "ai-guardrails"],
    paths: ["ai-engineer", "backend-engineer"],
    concepts: ["prompt-injection", "guardrail", "prompt", "agent"]
  },
  {
    num: 95, id: "ai-agent-security", title: "Securing AI Agents & Tools", emoji: "🛡️",
    tag: "AI SECURITY", category: "ai-security", level: "advanced", tier: 10,
    desc: "Sandboxing tools, scoping permissions and limiting blast radius when an agent can actually act.",
    chips: ["Sandboxing", "Permissions", "Blast radius"], colors: { c1: "#f59e0b", c2: "#ec4899" }, stageArt: "shield-pulse",
    status: "planned", tags: ["ai", "security", "agents"],
    prereq: ["prompt-injection", "ai-agents"], related: ["mcp", "ai-guardrails"],
    paths: ["ai-engineer", "backend-engineer", "devops"],
    concepts: ["prompt-injection", "guardrail", "agent", "tool-call", "mcp"]
  },
  {
    num: 96, id: "docker-containers", title: "Docker & Containers", emoji: "🐳",
    tag: "DEVOPS", category: "devops", level: "advanced", tier: 10,
    desc: "Images, containers, volumes and compose — packaging software so it runs the same everywhere.",
    chips: ["Images", "Compose", "Volumes"], colors: { c1: "#f97316", c2: "#dc2626" }, stageArt: "gear-flow",
    status: "planned", tags: ["docker", "devops"],
    prereq: ["command-line-shell"], related: ["ci-cd", "cloud-architecture"],
    paths: ["devops", "backend-engineer"],
    concepts: ["container", "backend"]
  },
  {
    num: 97, id: "ci-cd", title: "CI/CD & Automated Deployment", emoji: "🔁",
    tag: "DEVOPS", category: "devops", level: "advanced", tier: 10,
    desc: "Automate build, test and deploy so every change ships safely and repeatably.",
    chips: ["Pipelines", "Build", "Deploy"], colors: { c1: "#6366f1", c2: "#0ea5e9" }, stageArt: "gear-flow",
    status: "planned", tags: ["cicd", "devops"],
    prereq: ["git-version-control", "testing-fundamentals"], related: ["docker-containers", "secrets-identity"],
    paths: ["devops", "backend-engineer", "python-developer"],
    concepts: ["testing", "container", "git"]
  },
  {
    num: 98, id: "cloud-architecture", title: "Cloud Architecture", emoji: "☁️",
    tag: "CLOUD", category: "cloud", level: "advanced", tier: 10,
    desc: "Compute, storage, networking and identity — the mental model behind every cloud provider.",
    chips: ["Compute", "Storage", "IAM"], colors: { c1: "#3b82f6", c2: "#14b8a6" }, stageArt: "globe-nodes",
    status: "planned", tags: ["cloud", "devops"],
    prereq: ["docker-containers"], related: ["distributed-systems", "secrets-identity"],
    paths: ["devops", "backend-engineer"],
    concepts: ["container", "backend", "authentication"]
  },
  {
    num: 99, id: "distributed-systems", title: "Distributed Systems & Scalability", emoji: "🕸️",
    tag: "ARCHITECTURE", category: "architecture", level: "advanced", tier: 10,
    desc: "Consistency, partitioning, replication and failure — reasoning about many machines as one system.",
    chips: ["Consistency", "Replication", "Failure"], colors: { c1: "#7c3aed", c2: "#06b6d4" }, stageArt: "orbit-nodes",
    status: "planned", tags: ["architecture", "scaling", "systems"],
    prereq: ["cloud-architecture", "transactions-data-integrity"], related: ["system-design", "reliable-ai-systems"],
    paths: ["backend-engineer", "devops", "cs-foundations"],
    concepts: ["transaction", "complexity", "backend"]
  },
  {
    num: 100, id: "system-design", title: "System Design: From Idea to Production", emoji: "🧭",
    tag: "ARCHITECTURE", category: "architecture", level: "advanced", tier: 10,
    desc: "Caching, queues, sharding and trade-offs — designing a system end to end and defending the choices.",
    chips: ["Caching", "Queues", "Sharding"], colors: { c1: "#2563eb", c2: "#a855f7" }, stageArt: "layers-orbit",
    status: "planned", tags: ["architecture", "scaling", "design"],
    prereq: ["distributed-systems", "backend-architecture"], related: ["production-ai-architecture", "software-architecture-patterns"],
    paths: ["backend-engineer", "cs-foundations", "devops"],
    concepts: ["backend", "database", "complexity", "separation-of-concerns", "transaction"]
  }
];
