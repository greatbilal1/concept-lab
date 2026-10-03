/* ============================================================
   Prompt Engineering — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "anatomy-of-effective-system-prompt", file: "lessons/0001-anatomy-of-effective-system-prompt.html", title: "The Anatomy of an Effective System Prompt", topic: "System Prompts", anim: "Generic" },
  { n: 2, id: "instructions-delimiters-formatting", file: "lessons/0002-instructions-delimiters-formatting.html", title: "Clear Instructions, Delimiters, and Markdown Formatting", topic: "Delimiters", anim: "Generic" },
  { n: 3, id: "zero-shot-vs-few-shot-prompting", file: "lessons/0003-zero-shot-vs-few-shot-prompting.html", title: "Zero-Shot vs Few-Shot Prompting: The Power of Examples", topic: "Few-Shot Learning", anim: "Generic" },
  { n: 4, id: "chain-of-thought-reasoning", file: "lessons/0004-chain-of-thought-reasoning.html", title: "Chain-of-Thought (CoT): 'Think Step by Step'", topic: "Chain of Thought", anim: "Generic" },
  { n: 5, id: "persona-and-role-assignment", file: "lessons/0005-persona-and-role-assignment.html", title: "Persona and Role Assignment", topic: "Personas", anim: "Generic" },
  { n: 6, id: "negative-prompting-and-guardrails", file: "lessons/0006-negative-prompting-and-guardrails.html", title: "Negative Prompting and Guardrails: 'Do NOT do X'", topic: "Negative Constraints", anim: "Generic" },
  { n: 7, id: "handling-ambiguity-clarifying-questions", file: "lessons/0007-handling-ambiguity-clarifying-questions.html", title: "Handling Ambiguity and Asking Clarifying Questions", topic: "Clarifying Q&A", anim: "Generic" },
  { n: 8, id: "systematic-prompt-eval-versioning", file: "lessons/0008-systematic-prompt-eval-versioning.html", title: "Systematic Prompt Evaluation and Versioning", topic: "Prompt Evals", anim: "Generic" }
];

/* ============================================================
   Prompt Engineering — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "prompts", title: "System Prompts & Delimiters",
    terms: [
      { term: "System Prompt", def: "A high-authority directive setting global persona, behavioral rules, constraints, and output formatting for an AI session.", lesson: 1, tags: ["prompting","roles"] },
      { term: "Structural Delimiters", def: "Explicit markup boundary tags (e.g. <context>) separating developer instructions from untrusted external text.", lesson: 2, tags: ["prompting","security"] },
      { term: "Conversational Filler", def: "Unnecessary introductory or closing chatter ('Sure, here is...') that wastes tokens and breaks JSON parsers.", lesson: 1, tags: ["prompting","efficiency"] }
    ]
  },
  {
    id: "techniques", title: "Few-Shot & Reasoning",
    terms: [
      { term: "Few-Shot Prompting", def: "Providing 2 to 5 concrete input-output demonstration examples in context to anchor formatting and accuracy.", lesson: 3, tags: ["prompting","few-shot"] },
      { term: "Chain of Thought", def: "Prompting models to emit intermediate reasoning steps before arriving at a final logical or mathematical answer.", lesson: 4, tags: ["reasoning","prompting"] },
      { term: "Persona Steering", def: "Calibrating model vocabulary, skepticism, and depth by assigning an explicit professional domain identity.", lesson: 5, tags: ["prompting","personas"] }
    ]
  },
  {
    id: "guardrails", title: "Guardrails & Clarification",
    terms: [
      { term: "Negative Prompting", def: "Explicitly stating what a model must NOT do to prevent scope creep, dependency hallucination, and rewrites.", lesson: 6, tags: ["prompting","guardrails"] },
      { term: "Clarification Protocol", def: "Instructing an agent to detect ambiguous requirements, propose options, and pause for human confirmation.", lesson: 7, tags: ["agents","workflow"] },
      { term: "Scope Restraint", def: "A constraint forbidding an agent from modifying files or functions outside an explicitly declared task boundary.", lesson: 6, tags: ["safety","agents"] }
    ]
  },
  {
    id: "evaluation", title: "Evaluation & Tooling",
    terms: [
      { term: "Prompt Eval Pipeline", def: "An automated testing suite that evaluates prompt versions against golden benchmark datasets to prevent regressions.", lesson: 8, tags: ["evals","ci"] },
      { term: "LLM-as-a-Judge", def: "Using a frontier model to score and evaluate candidate outputs against a structured grading rubric.", lesson: 8, tags: ["evals","metrics"] },
      { term: "Golden Eval Dataset", def: "A curated benchmark set of representative input-output pairs used to test prompt accuracy and consistency.", lesson: 8, tags: ["evals","testing"] }
    ]
  }
];
