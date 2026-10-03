/* ============================================================
   Context Engineering — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "context-window-as-budget", file: "lessons/0001-context-window-as-budget.html", title: "The Context Window as a Scarcity Budget", topic: "Context Budget", anim: "Generic" },
  { n: 2, id: "lost-in-the-middle", file: "lessons/0002-lost-in-the-middle.html", title: "The Lost in the Middle Phenomenon", topic: "Attention Bias", anim: "Generic" },
  { n: 3, id: "pruning-summarization-compaction", file: "lessons/0003-pruning-summarization-compaction.html", title: "Context Pruning, Summarization, and Compaction", topic: "Context Reduction", anim: "Generic" },
  { n: 4, id: "selecting-the-right-files", file: "lessons/0004-selecting-the-right-files.html", title: "Selecting the Right Files for the Task", topic: "Working Set", anim: "Generic" },
  { n: 5, id: "token-economics-signal-noise", file: "lessons/0005-token-economics-signal-noise.html", title: "Token Economics: Signal-to-Noise Ratio", topic: "Token Economics", anim: "Generic" },
  { n: 6, id: "dynamic-context-assembly", file: "lessons/0006-dynamic-context-assembly.html", title: "Dynamic Context Assembly", topic: "Context Retrieval", anim: "Generic" },
  { n: 7, id: "prompt-caching-prefix-optimization", file: "lessons/0007-prompt-caching-prefix-optimization.html", title: "Prompt Caching and Prefix Optimization", topic: "Caching Optimization", anim: "Generic" },
  { n: 8, id: "measuring-context-quality", file: "lessons/0008-measuring-context-quality.html", title: "Measuring Context Quality and Drift", topic: "Context Metrics", anim: "Generic" }
];

/* ============================================================
   Context Engineering — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "budget", title: "Budget & Economics",
    terms: [
      { term: "Context Window", def: "The maximum sequence length of tokens a language model can process across prompt and output in a single call.", lesson: 1, tags: ["ai","context"] },
      { term: "Token Economics", def: "The financial, latency, and attention trade-offs governing how tokens are budgeted and utilized.", lesson: 5, tags: ["ai","economics"] },
      { term: "Signal-to-Noise Ratio", def: "The proportion of task-critical domain information relative to useless boilerplate in context.", lesson: 1, tags: ["ai","quality"] }
    ]
  },
  {
    id: "attention", title: "Attention Dynamics",
    terms: [
      { term: "Lost in the Middle", def: "The empirical tendency of transformer models to recall tokens at the start and end of context much better than the middle.", lesson: 2, tags: ["ai","attention"] },
      { term: "Sandwich Pattern", def: "A prompt engineering technique placing core constraints at both the very beginning and very end of long contexts.", lesson: 2, tags: ["ai","patterns"] },
      { term: "Attention Dilution", def: "The reduction in relative attention weight assigned to key instructions when context is saturated with noise.", lesson: 1, tags: ["ai","transformers"] }
    ]
  },
  {
    id: "reduction", title: "Reduction & Caching",
    terms: [
      { term: "AST Pruning", def: "Extracting public interfaces and types from code while omitting method bodies to save context tokens.", lesson: 3, tags: ["context","tooling"] },
      { term: "Prompt Caching", def: "Reusing pre-computed KV-cache states for identical prompt prefixes across API requests to cut cost and latency.", lesson: 7, tags: ["ai","caching"] },
      { term: "Working Set", def: "The minimal set of files (target edit, interface contract, and test) needed to solve a specific task.", lesson: 4, tags: ["context","workflow"] }
    ]
  },
  {
    id: "retrieval", title: "Assembly & Evaluation",
    terms: [
      { term: "Dynamic Context Assembly", def: "Just-in-time automated retrieval of relevant files, schemas, and diffs based on active task intent.", lesson: 6, tags: ["ai","retrieval"] },
      { term: "Context Precision", def: "The proportion of retrieved context tokens that are genuinely relevant and used in task execution.", lesson: 8, tags: ["ai","metrics"] },
      { term: "Context Recall", def: "The proportion of necessary domain facts successfully captured by the retrieval pipeline.", lesson: 8, tags: ["ai","metrics"] }
    ]
  }
];
