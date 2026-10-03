/* ============================================================
   Debugging Code — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-scientific-method-of-debugging", file: "lessons/0001-the-scientific-method-of-debugging.html", title: "The scientific method of debugging", topic: "The Debugging Mindset", anim: "Pulse" },
  { n: 2, id: "making-bugs-reproducible", file: "lessons/0002-making-bugs-reproducible.html", title: "Making bugs reproducible", topic: "The Debugging Mindset", anim: "Pulse" },
  { n: 3, id: "isolating-the-problem-space", file: "lessons/0003-isolating-the-problem-space.html", title: "Isolating the problem space", topic: "Reproduction & Isolation", anim: "Pulse" },
  { n: 4, id: "binary-search-and-git-bisect", file: "lessons/0004-binary-search-and-git-bisect.html", title: "Binary search and bisecting", topic: "Reproduction & Isolation", anim: "Pulse" },
  { n: 5, id: "reading-tracebacks-and-call-stacks", file: "lessons/0005-reading-tracebacks-and-call-stacks.html", title: "Reading tracebacks and call stacks", topic: "Observation Tools", anim: "Pulse" },
  { n: 6, id: "using-breakpoints-and-inspectors", file: "lessons/0006-using-breakpoints-and-inspectors.html", title: "Using breakpoints and inspectors", topic: "Observation Tools", anim: "Pulse" },
  { n: 7, id: "formulating-and-testing-hypotheses", file: "lessons/0007-formulating-and-testing-hypotheses.html", title: "Formulating and testing hypotheses", topic: "Root Cause & Prevention", anim: "Pulse" },
  { n: 8, id: "fixing-the-cause-not-the-symptom", file: "lessons/0008-fixing-the-cause-not-the-symptom.html", title: "Fixing the cause, not the symptom", topic: "Root Cause & Prevention", anim: "Pulse" }
];

/* ============================================================
   Debugging Code — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "mindset", title: "The Debugging Mindset",
    terms: [
      { term: "Scientific debugging", def: "A structured process of observing a defect, proposing a falsifiable hypothesis, and testing it with experiments.", lesson: 1, tags: ["method","mindset"] },
      { term: "Defect", def: "An error in source code logic or data representation that can lead to incorrect state.", lesson: 1, tags: ["fundamentals"] },
      { term: "Infection", def: "Corrupted program state resulting from a defect during program execution.", lesson: 1, tags: ["state"] },
      { term: "Failure", def: "The visible incorrect behavior or crash that occurs when an infection reaches output.", lesson: 1, tags: ["runtime"] }
    ]
  },
  {
    id: "isolation", title: "Reproduction & Search",
    terms: [
      { term: "Minimal reproduction", def: "The smallest script and simplest input guaranteed to trigger a software failure.", lesson: 2, tags: ["testing","technique"] },
      { term: "Delta debugging", def: "Systematically halving inputs or configurations to find the minimal difference causing a failure.", lesson: 3, tags: ["strategy"] },
      { term: "Git bisect", def: "A tool using binary search across commit history to pinpoint which change introduced a bug.", lesson: 4, tags: ["tools","git"] },
      { term: "Flaky bug", def: "A defect whose symptoms appear intermittently due to timing, concurrency, or uninitialised state.", lesson: 2, tags: ["defects"] }
    ]
  },
  {
    id: "inspection", title: "Observation & State",
    terms: [
      { term: "Traceback", def: "A stack report showing active function calls at the moment an unhandled exception occurred.", lesson: 5, tags: ["errors","runtime"] },
      { term: "Call stack frame", def: "A memory record holding the local variables and instruction pointer of one function invocation.", lesson: 5, tags: ["runtime"] },
      { term: "Breakpoint", def: "An intentional pause marker placed in code that halts execution to allow state inspection.", lesson: 6, tags: ["debugger","tools"] },
      { term: "Watchpoint", def: "A debugger trigger that halts execution whenever a specific memory address or variable changes value.", lesson: 6, tags: ["debugger"] }
    ]
  },
  {
    id: "resolution", title: "Root Cause & Prevention",
    terms: [
      { term: "Root cause", def: "The underlying fundamental flaw in design or logic that originated the faulty behavior.", lesson: 7, tags: ["analysis"] },
      { term: "Symptom masking", def: "Modifying code to hide visible errors without addressing the faulty internal condition.", lesson: 8, tags: ["anti-pattern"] },
      { term: "Regression test", def: "An automated test asserting that an identified defect remains fixed in future releases.", lesson: 8, tags: ["testing","prevention"] },
      { term: "Post-mortem", def: "A blameless engineering review documenting how a defect happened and how to prevent similar issues.", lesson: 8, tags: ["process"] }
    ]
  }
];
