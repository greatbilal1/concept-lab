/* ============================================================
   Tokens, Context Windows & Context Limits — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "characters-words-tokens", file: "lessons/0001-characters-words-tokens.html", title: "Characters vs Words vs Tokens: How BPE Slices Text", topic: "Token Mechanics", anim: "Generic" },
  { n: 2, id: "token-costs-pricing-speeds", file: "lessons/0002-token-costs-pricing-speeds.html", title: "Token Costs, Pricing, and Token-Per-Second Speeds", topic: "Token Economics", anim: "Generic" },
  { n: 3, id: "context-window-evolution", file: "lessons/0003-context-window-evolution.html", title: "The Context Window: 4k, 32k, 128k, 1M+ Tokens", topic: "Context Limits", anim: "Generic" },
  { n: 4, id: "quadratic-attention-flashattention", file: "lessons/0004-quadratic-attention-flashattention.html", title: "Quadratic Attention Cost vs FlashAttention and Sliding Windows", topic: "Attention Optimization", anim: "Generic" },
  { n: 5, id: "needle-in-a-haystack-degradation", file: "lessons/0005-needle-in-a-haystack-degradation.html", title: "Needle-in-a-Haystack: Retrieval Degradation in Long Contexts", topic: "NIAH Testing", anim: "Generic" },
  { n: 6, id: "context-eviction-rolling-windows", file: "lessons/0006-context-eviction-rolling-windows.html", title: "Context Eviction and Rolling Windows in Chat Apps", topic: "Eviction Strategies", anim: "Generic" },
  { n: 7, id: "handling-prompt-truncation-gracefully", file: "lessons/0007-handling-prompt-truncation-gracefully.html", title: "Handling Prompt Truncation Gracefully", topic: "Truncation Hygiene", anim: "Generic" },
  { n: 8, id: "designing-around-context-limits", file: "lessons/0008-designing-around-context-limits.html", title: "Designing Architectures Around Context Limits", topic: "Architecture Design", anim: "Generic" }
];

/* ============================================================
   Tokens, Context Windows & Context Limits — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "tokens", title: "Tokens & Pricing",
    terms: [
      { term: "Token", def: "A statistical subword fragment of text (roughly 4 characters or 0.75 words in English) processed by LLMs.", lesson: 1, tags: ["tokens","nlp"] },
      { term: "Pre-Fill Phase", def: "The parallel GPU forward pass that processes all input prompt tokens simultaneously before generation begins.", lesson: 2, tags: ["inference","gpu"] },
      { term: "Decoding Phase", def: "The sequential autoregressive generation of output tokens, requiring one GPU forward pass per token.", lesson: 2, tags: ["inference","decoding"] }
    ]
  },
  {
    id: "latency", title: "Latency & Complexity",
    terms: [
      { term: "Time-to-First-Token", def: "The elapsed duration from sending a request until the first generated token streams back from the model.", lesson: 2, tags: ["latency","metrics"] },
      { term: "Tokens-Per-Second", def: "The generation throughput speed measuring how many output tokens the model emits per second.", lesson: 2, tags: ["performance","metrics"] },
      { term: "Quadratic Attention", def: "The O(N^2) memory and compute scaling of self-attention where doubling sequence length quadruples cost.", lesson: 4, tags: ["math","complexity"] }
    ]
  },
  {
    id: "optimization", title: "Optimization & Evaluation",
    terms: [
      { term: "FlashAttention", def: "An exact, IO-aware tiled self-attention algorithm computing attention in GPU SRAM without HBM memory bottlenecks.", lesson: 4, tags: ["hardware","cuda"] },
      { term: "Needle-in-a-Haystack", def: "A benchmark evaluating retrieval accuracy when a specific fact is inserted at varying depths in long text.", lesson: 5, tags: ["benchmarks","evals"] },
      { term: "Sliding Window Attention", def: "An attention pattern restricting attention to a local window of W tokens, converting complexity to linear O(N * W).", lesson: 4, tags: ["transformers","efficiency"] }
    ]
  },
  {
    id: "architecture", title: "Memory & Architecture",
    terms: [
      { term: "Summarization Buffer", def: "A conversation management pattern condensing older evicted turns into a pinned summary block.", lesson: 6, tags: ["context","memory"] },
      { term: "Output Reserve", def: "Unused context window capacity intentionally reserved for the model's generated answer tokens.", lesson: 7, tags: ["context","budget"] },
      { term: "Map-Reduce Summarization", def: "An architectural pattern summarizing large documents by processing chunks in parallel and reducing summaries.", lesson: 8, tags: ["architecture","scale"] }
    ]
  }
];
