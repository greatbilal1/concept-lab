/* ============================================================
   AI-Assisted Debugging — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "evidence-vs-ai-confidence", file: "lessons/0001-evidence-vs-ai-confidence.html", title: "Evidence vs AI Confidence: Don't Believe, Verify", topic: "Evidence-First", anim: "Generic" },
  { n: 2, id: "feeding-stack-traces-logs", file: "lessons/0002-feeding-stack-traces-logs.html", title: "Feeding Stack Traces, Logs, and Error Outputs", topic: "Error Context", anim: "Generic" },
  { n: 3, id: "minimal-reproducible-examples", file: "lessons/0003-minimal-reproducible-examples.html", title: "Isolating Minimal Reproducible Examples for the Agent", topic: "Repro Isolation", anim: "Generic" },
  { n: 4, id: "hypothesis-generation-elimination", file: "lessons/0004-hypothesis-generation-elimination.html", title: "Hypothesis Generation and Structured Elimination", topic: "Scientific Method", anim: "Generic" },
  { n: 5, id: "bisection-git-debugging", file: "lessons/0005-bisection-git-debugging.html", title: "Bisection and Git Debugging with Agents", topic: "Git Bisection", anim: "Generic" },
  { n: 6, id: "logic-errors-vs-syntax-errors", file: "lessons/0006-logic-errors-vs-syntax-errors.html", title: "Debugging Logic Errors vs Syntax Errors", topic: "Error Types", anim: "Generic" },
  { n: 7, id: "sycophantic-false-fixes", file: "lessons/0007-sycophantic-false-fixes.html", title: "Guarding Against Sycophantic False Fixes", topic: "False Fixes", anim: "Generic" },
  { n: 8, id: "codifying-root-cause-into-test", file: "lessons/0008-codifying-root-cause-into-test.html", title: "Codifying the Root Cause into a Regression Test", topic: "Regression Defense", anim: "Generic" }
];

/* ============================================================
   AI-Assisted Debugging — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "evidence", title: "Evidence & Diagnostics",
    terms: [
      { term: "Evidence-First Debugging", def: "A discipline prioritizing runtime logs, tracebacks, and test evidence over plausible model assertions.", lesson: 1, tags: ["debugging","evidence"] },
      { term: "Traceback", def: "A report showing the active stack frames and error message at the exact moment an unhandled exception occurred.", lesson: 2, tags: ["debugging","python"] },
      { term: "Minimal Reproducible Example", def: "The smallest standalone code snippet that reliably reproduces an isolated defect without external dependencies.", lesson: 3, tags: ["debugging","isolation"] }
    ]
  },
  {
    id: "methodology", title: "Scientific Methodology",
    terms: [
      { term: "Scientific Debugging", def: "Formulating explicit, falsifiable hypotheses and systematically testing them to eliminate false causes.", lesson: 4, tags: ["debugging","methodology"] },
      { term: "Falsification Experiment", def: "A targeted probe or test designed specifically to prove a debugging hypothesis incorrect.", lesson: 4, tags: ["debugging","testing"] },
      { term: "Git Bisection", def: "Using binary search over git commit history to pinpoint the exact commit that introduced a defect.", lesson: 5, tags: ["git","debugging"] }
    ]
  },
  {
    id: "failure-modes", title: "Error Classes & Pitfalls",
    terms: [
      { term: "Silent Logic Error", def: "A defect where code runs without raising an exception but produces an incorrect business result.", lesson: 6, tags: ["debugging","logic"] },
      { term: "Sycophantic False Fix", def: "A shortcut where an agent passes tests by weakening assertions or deleting validations rather than fixing the bug.", lesson: 7, tags: ["ai","safety"] },
      { term: "Agent Thrashing", def: "An endless loop where an agent makes circular, blind edits that introduce new errors without fixing root causes.", lesson: 4, tags: ["ai","debugging"] }
    ]
  },
  {
    id: "defense", title: "Regression Defense",
    terms: [
      { term: "Regression Test", def: "A permanent automated test authored specifically to ensure a previously resolved bug never regresses.", lesson: 8, tags: ["testing","quality"] },
      { term: "Root Cause", def: "The fundamental underlying defect or flaw that directly initiated the observed failure symptom.", lesson: 1, tags: ["debugging","analysis"] },
      { term: "Circuit Breaker", def: "A rule halting automated debugging loops after repeated failed attempts to prevent compounding damage.", lesson: 4, tags: ["ai","safety"] }
    ]
  }
];
