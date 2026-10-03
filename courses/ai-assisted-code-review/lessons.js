/* ============================================================
   AI-Assisted Code Review — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "what-ai-review-excels-at", file: "lessons/0001-what-ai-review-excels-at.html", title: "What AI Code Review Is Good At", topic: "Strengths", anim: "Generic" },
  { n: 2, id: "ai-review-blind-spots", file: "lessons/0002-ai-review-blind-spots.html", title: "AI Blind Spots: Business Logic, Race Conditions, Architecture", topic: "Blind Spots", anim: "Generic" },
  { n: 3, id: "reviewing-diffs-with-skepticism", file: "lessons/0003-reviewing-diffs-with-skepticism.html", title: "Reviewing AI-Generated Diffs with Skepticism", topic: "Diff Skepticism", anim: "Generic" },
  { n: 4, id: "prompting-security-audits", file: "lessons/0004-prompting-security-audits.html", title: "Prompting for Security Audits and Vulnerabilities", topic: "Security Audits", anim: "Generic" },
  { n: 5, id: "automated-pr-summaries", file: "lessons/0005-automated-pr-summaries.html", title: "Automated PR Summaries and Risk Assessment", topic: "PR Summaries", anim: "Generic" },
  { n: 6, id: "linters-with-llm-review", file: "lessons/0006-linters-with-llm-review.html", title: "Combining Static Analysis Linters with LLM Review", topic: "Integrated Pipeline", anim: "Generic" },
  { n: 7, id: "preventing-review-fatigue", file: "lessons/0007-preventing-review-fatigue.html", title: "Preventing Review Fatigue and Rubber-Stamping", topic: "Review Fatigue", anim: "Generic" },
  { n: 8, id: "human-verification-gates", file: "lessons/0008-human-verification-gates.html", title: "Establishing Human Verification Gates", topic: "Verification Gates", anim: "Generic" }
];

/* ============================================================
   AI-Assisted Code Review — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "strengths", title: "Strengths & Metrics",
    terms: [
      { term: "Mechanical Review", def: "Automated code review evaluating syntax, type consistency, docstrings, and unhandled null values.", lesson: 1, tags: ["review","automation"] },
      { term: "PR Summary", def: "An AI-generated breakdown of pull request intent, architectural impact, risk assessment, and review order.", lesson: 5, tags: ["review","pr"] },
      { term: "Reviewer Ergonomics", def: "Structuring PRs and documentation to minimize cognitive fatigue and maximize reviewer efficiency.", lesson: 5, tags: ["workflow","ergonomics"] }
    ]
  },
  {
    id: "blind-spots", title: "Blind Spots & Vulnerabilities",
    terms: [
      { term: "AI Blind Spot", def: "A class of defect (concurrency, race conditions, business domain rules) that AI reviewers reliably overlook.", lesson: 2, tags: ["ai","safety"] },
      { term: "Package Hallucination", def: "A vulnerability where an AI imports a plausible-sounding package name that does not exist in public registries.", lesson: 3, tags: ["security","ai"] },
      { term: "IDOR", def: "Insecure Direct Object Reference — exposing a database record by ID without verifying caller ownership or permission.", lesson: 4, tags: ["security","owasp"] }
    ]
  },
  {
    id: "pipeline", title: "Pipeline Integration",
    terms: [
      { term: "Two-Layer Review Pipeline", def: "A workflow combining deterministic static analysis (linters, type checkers) with LLM semantic review.", lesson: 6, tags: ["ci","tooling"] },
      { term: "Static Analysis", def: "Analyzing source code without executing it to guarantee syntax, typing, and security rule compliance.", lesson: 6, tags: ["testing","quality"] },
      { term: "Blast Radius", def: "The maximum potential damage and operational fallout that a defect or failure can inflict on a system.", lesson: 8, tags: ["architecture","risk"] }
    ]
  },
  {
    id: "governance", title: "Governance & Quality",
    terms: [
      { term: "Review Fatigue", def: "Cognitive exhaustion resulting from reviewing high volumes of code, leading to superficial approvals.", lesson: 7, tags: ["culture","management"] },
      { term: "Rubber-Stamping", def: "The dangerous habit of approving pull requests without conducting rigorous line-by-line verification.", lesson: 7, tags: ["quality","risk"] },
      { term: "Human Verification Gate", def: "A mandatory manual approval checkpoint required before executing high-consequence operations.", lesson: 8, tags: ["governance","security"] }
    ]
  }
];
