/* ============================================================
   Prompt Injection & AI Security — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "prompt-injection-anatomy-direct-indirect", file: "lessons/0001-prompt-injection-anatomy-direct-indirect.html", title: "The Prompt Injection Anatomy: Direct vs Indirect Injection", topic: "Injection Anatomy", anim: "Generic" },
  { n: 2, id: "indirect-prompt-injection-vectors", file: "lessons/0002-indirect-prompt-injection-vectors.html", title: "Indirect Prompt Injection: Web Scraping, PDFs, and Poisoned Data", topic: "Indirect Vectors", anim: "Generic" },
  { n: 3, id: "data-exfiltration-markdown-tools", file: "lessons/0003-data-exfiltration-markdown-tools.html", title: "Data Exfiltration via Markdown Images and Tool Calls", topic: "Data Exfiltration", anim: "Generic" },
  { n: 4, id: "prompt-leaking-system-extraction", file: "lessons/0004-prompt-leaking-system-extraction.html", title: "Prompt Leaking and System Extraction Attacks", topic: "Prompt Leaking", anim: "Generic" },
  { n: 5, id: "structural-delimiters-xml-tags", file: "lessons/0005-structural-delimiters-xml-tags.html", title: "Structural Delimiters, XML Tags, and Instruction Separation", topic: "Instruction Separation", anim: "Generic" },
  { n: 6, id: "pre-and-post-prompt-detection-classifiers", file: "lessons/0006-pre-and-post-prompt-detection-classifiers.html", title: "Pre-Prompt and Post-Prompt Detection Classifiers", topic: "Safety Classifiers", anim: "Generic" },
  { n: 7, id: "dual-llm-controller-reader-architecture", file: "lessons/0007-dual-llm-controller-reader-architecture.html", title: "Dual-LLM Architectures: Decoupled Controller and Reader", topic: "Dual-LLM", anim: "Generic" },
  { n: 8, id: "red-teaming-and-hardening-ai-app", file: "lessons/0008-red-teaming-and-hardening-ai-app.html", title: "Red Teaming and Hardening an AI Application Against Injection", topic: "AI Hardening", anim: "Generic" }
];

/* ============================================================
   Prompt Injection & AI Security — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "injection-types", title: "Injection & Exfiltration",
    terms: [
      { term: "Prompt Injection", def: "An attack where untrusted user input alters an LLM's instructions, taking control of model execution.", lesson: 1, tags: ["security","injection"] },
      { term: "Indirect Prompt Injection", def: "Embedding adversarial instructions inside third-party data (web pages, PDFs, emails) that an AI reads.", lesson: 2, tags: ["vectors","indirect"] },
      { term: "Markdown Image Exfiltration", def: "Trick a model into rendering image tags that transmit private data in URL query strings to an attacker's server.", lesson: 3, tags: ["exfiltration","markdown"] }
    ]
  },
  {
    id: "extraction-delimiters", title: "Extraction & Delimiters",
    terms: [
      { term: "Prompt Leaking", def: "Coaxing an AI into verbatim regurgitating its confidential system prompt and proprietary instructions.", lesson: 4, tags: ["attacks","leaking"] },
      { term: "Nonce Delimiters", def: "Dynamic, unguessable random boundary tags (<data_8f4a>) that make tag-breakout prompt injection impossible.", lesson: 5, tags: ["defense","delimiters"] },
      { term: "Tag Breakout", def: "An attack where the user submits a closing tag (</data>) to escape data boundaries and inject system commands.", lesson: 5, tags: ["attacks","breakout"] }
    ]
  },
  {
    id: "classifiers-architecture", title: "Classifiers & Dual-LLM",
    terms: [
      { term: "Dual-LLM Architecture", def: "Decoupling execution into an unprivileged toolless Reader for untrusted data, and a privileged Controller with tools.", lesson: 7, tags: ["architecture","dualllm"] },
      { term: "Pre-Prompt Classifier", def: "A fast specialized model (DeBERTa, Llama Guard) screening inputs at the perimeter for adversarial syntax.", lesson: 6, tags: ["defense","classifiers"] },
      { term: "GCG Attack", def: "Greedy Coordinate Gradient — an adversarial algorithm optimizing token suffixes to bypass model safety alignment.", lesson: 6, tags: ["research","gcg"] }
    ]
  },
  {
    id: "redteaming", title: "Red Teaming & Auditing",
    terms: [
      { term: "AI Red Teaming", def: "Systematically simulating adversarial attacks and jailbreaks to discover AI application vulnerabilities.", lesson: 8, tags: ["operations","redteam"] },
      { term: "PyRIT", def: "Python Risk Identification Tool — Microsoft's open-source framework for automating AI security red teaming.", lesson: 8, tags: ["tools","redteam"] },
      { term: "Garak", def: "An open-source vulnerability scanner specifically probing LLMs for prompt injection, leakage, and jailbreaks.", lesson: 8, tags: ["tools","scanners"] }
    ]
  }
];
