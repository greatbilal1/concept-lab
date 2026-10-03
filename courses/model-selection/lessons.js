/* ============================================================
   Model Selection & Trade-offs — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "multi-model-landscape-tiers", file: "lessons/0001-multi-model-landscape-tiers.html", title: "The Multi-Model Landscape: Frontier vs Mid-Tier vs Small", topic: "Model Landscape", anim: "Generic" },
  { n: 2, id: "benchmarks-vs-real-world", file: "lessons/0002-benchmarks-vs-real-world.html", title: "Capability Benchmarks: MMLU, HumanEval, SWE-bench vs Real World", topic: "Benchmarks", anim: "Generic" },
  { n: 3, id: "latency-vs-intelligence-tradeoffs", file: "lessons/0003-latency-vs-intelligence-tradeoffs.html", title: "Latency vs Intelligence: Time-to-First-Token and Throughput", topic: "Latency Trade-offs", anim: "Generic" },
  { n: 4, id: "cost-modeling-tokens-batch-api", file: "lessons/0004-cost-modeling-tokens-batch-api.html", title: "Cost Modeling: Input Tokens, Output Tokens, and Batch API", topic: "Cost Modeling", anim: "Generic" },
  { n: 5, id: "open-weights-vs-proprietary-apis", file: "lessons/0005-open-weights-vs-proprietary-apis.html", title: "Open Weights vs Proprietary APIs", topic: "Open vs Closed", anim: "Generic" },
  { n: 6, id: "licensing-tradeoffs-open-models", file: "lessons/0006-licensing-tradeoffs-open-models.html", title: "Licensing Trade-offs: Apache 2.0 vs Llama Community", topic: "Model Licenses", anim: "Generic" },
  { n: 7, id: "specialized-vs-generalist-models", file: "lessons/0007-specialized-vs-generalist-models.html", title: "Specialized vs Generalist Models", topic: "Specialization", anim: "Generic" },
  { n: 8, id: "building-model-matrix-stack", file: "lessons/0008-building-model-matrix-stack.html", title: "Building a Model Matrix for Your Engineering Stack", topic: "Model Matrix", anim: "Generic" }
];

/* ============================================================
   Model Selection & Trade-offs — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "tiers", title: "Tiers & Landscape",
    terms: [
      { term: "Frontier Model", def: "A flagship foundation model (GPT-4o, Claude 3.5 Sonnet) delivering state-of-the-art reasoning and coding capabilities.", lesson: 1, tags: ["models","landscape"] },
      { term: "Mid-Tier Workhorse", def: "A high-speed, cost-efficient model (GPT-4o-mini, Haiku) delivering 90% intelligence at 10% cost.", lesson: 1, tags: ["models","efficiency"] },
      { term: "Model Cascading", def: "An architectural pattern routing requests to small models first and escalating to frontier models only on failure.", lesson: 1, tags: ["routing","architecture"] }
    ]
  },
  {
    id: "benchmarks", title: "Benchmarks & Evaluation",
    terms: [
      { term: "SWE-bench", def: "An authoritative software engineering benchmark evaluating models on resolving real-world GitHub repository bug issues.", lesson: 2, tags: ["benchmarks","coding"] },
      { term: "Benchmark Contamination", def: "The inadvertent inclusion of benchmark test problems in pre-training data, causing false memorization.", lesson: 2, tags: ["evals","pitfalls"] },
      { term: "MMLU", def: "Massive Multitask Language Understanding — a multi-subject multiple-choice benchmark evaluating general knowledge.", lesson: 2, tags: ["benchmarks","evals"] }
    ]
  },
  {
    id: "economics", title: "Economics & Latency",
    terms: [
      { term: "Blended Token Cost", def: "The effective unit price of an AI operation combining input and higher-priced output token volumes.", lesson: 4, tags: ["economics","pricing"] },
      { term: "Batch API", def: "An asynchronous processing tier offering a 50% discount for non-realtime workloads completed within 24 hours.", lesson: 4, tags: ["api","pricing"] },
      { term: "Speculative Decoding", def: "An inference optimization using a small draft model to generate candidates verified in parallel by a larger model.", lesson: 3, tags: ["inference","optimization"] }
    ]
  },
  {
    id: "governance", title: "Licensing & Governance",
    terms: [
      { term: "Open Weights", def: "Models whose trained parameters are publicly downloadable for private self-hosting (Llama, Mistral).", lesson: 5, tags: ["licensing","open-source"] },
      { term: "Llama Community License", def: "A commercial license permitting free usage below a 700 million monthly active user threshold.", lesson: 6, tags: ["licensing","legal"] },
      { term: "Model Matrix", def: "An enterprise decision framework mapping features to designated models, fallbacks, SLAs, and cost budgets.", lesson: 8, tags: ["architecture","governance"] }
    ]
  }
];
