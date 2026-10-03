/* ============================================================
   When to Trust AI-Generated Code — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "calibrating-trust-risk-zones", file: "lessons/0001-calibrating-trust-risk-zones.html", title: "Calibrating Trust: High-Risk vs Low-Risk Code", topic: "Trust Calibration", anim: "Generic" },
  { n: 2, id: "plausible-hallucinations", file: "lessons/0002-plausible-hallucinations.html", title: "The Peril of Plausible-Looking Hallucinations", topic: "Hallucinations", anim: "Generic" },
  { n: 3, id: "trusting-compilers-linters-tests", file: "lessons/0003-trusting-compilers-linters-tests.html", title: "Trusting the Compiler, Linter, and Tests Over the Agent", topic: "Deterministic Truth", anim: "Generic" },
  { n: 4, id: "sandboxing-and-execution-safety", file: "lessons/0004-sandboxing-and-execution-safety.html", title: "Sandboxing and Execution Safety: Guarding Against Malicious Code", topic: "Sandboxing", anim: "Generic" },
  { n: 5, id: "verifying-crypto-security", file: "lessons/0005-verifying-crypto-security.html", title: "Verifying Cryptography, Security, and Edge Cases", topic: "Security Verification", anim: "Generic" },
  { n: 6, id: "licensing-copyright-provenance", file: "lessons/0006-licensing-copyright-provenance.html", title: "Licensing, Copyright, and Provenance of Generated Snippets", topic: "IP & Licensing", anim: "Generic" },
  { n: 7, id: "developing-developer-intuition", file: "lessons/0007-developing-developer-intuition.html", title: "Developing Developer Intuition in the AI Era", topic: "Developer Intuition", anim: "Generic" },
  { n: 8, id: "the-accountability-principle", file: "lessons/0008-the-accountability-principle.html", title: "The Accountability Principle: You Own the Committed Code", topic: "Accountability", anim: "Generic" }
];

/* ============================================================
   When to Trust AI-Generated Code — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "trust", title: "Trust & Risk",
    terms: [
      { term: "Calibrated Trust", def: "The practice of scaling review scrutiny and verification gates proportionally to the blast radius of failure.", lesson: 1, tags: ["governance","risk"] },
      { term: "Blast Radius", def: "The maximum potential damage, financial loss, or operational downtime a failure in a specific component can cause.", lesson: 1, tags: ["architecture","risk"] },
      { term: "Plausible Hallucination", def: "A subtle code defect that looks syntactically and stylistically correct to human eyes while being logically invalid.", lesson: 2, tags: ["ai","safety"] }
    ]
  },
  {
    id: "epistemology", title: "Epistemology & Authority",
    terms: [
      { term: "Hierarchy of Truth", def: "Ranking verification authority: terminal test execution and compilers outrank conversational model claims.", lesson: 3, tags: ["epistemology","testing"] },
      { term: "Model Sycophancy", def: "The tendency of language models to confirm user assumptions or falsely claim success to sound agreeable.", lesson: 3, tags: ["ai","psychology"] },
      { term: "Constant-Time Comparison", def: "Comparing secret strings in a fixed duration independent of mismatch location to prevent timing attacks.", lesson: 5, tags: ["security","crypto"] }
    ]
  },
  {
    id: "security-ip", title: "Security & Licensing",
    terms: [
      { term: "Execution Sandbox", def: "An isolated runtime environment (Docker, gVisor) that constrains agent tool execution to protect host systems.", lesson: 4, tags: ["security","sandboxing"] },
      { term: "Timing Attack", def: "A side-channel attack deducing secret cryptographic values by measuring microsecond differences in comparison latency.", lesson: 5, tags: ["security","crypto"] },
      { term: "Copyleft Taint", def: "The legal consequence of inadvertently incorporating GPL-licensed code into a proprietary codebase.", lesson: 6, tags: ["licensing","legal"] }
    ]
  },
  {
    id: "craft", title: "Craft & Responsibility",
    terms: [
      { term: "Developer Intuition", def: "Subconscious pattern-recognition that alerts an experienced engineer that code is over-engineered or brittle.", lesson: 7, tags: ["craft","intuition"] },
      { term: "Accountability Principle", def: "The non-negotiable rule that the human engineer is 100% professionally responsible for all committed code.", lesson: 8, tags: ["ethics","craft"] },
      { term: "Pilot in Command", def: "The mental model holding that the human engineer steers, audits, and takes ultimate responsibility for all automated work.", lesson: 8, tags: ["culture","governance"] }
    ]
  }
];
