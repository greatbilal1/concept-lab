/* ============================================================
   AI Cost & Latency Engineering — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "token-economics-cost-latency-tradeoffs", file: "lessons/0001-token-economics-cost-latency-tradeoffs.html", title: "The Economics of Tokens: Cost vs Latency Trade-Offs", topic: "Token Economics", anim: "Generic" },
  { n: 2, id: "prompt-caching-kv-cache-reuse", file: "lessons/0002-prompt-caching-kv-cache-reuse.html", title: "Prompt Caching Architecture: KV-Cache Reuse", topic: "Prompt Caching", anim: "Generic" },
  { n: 3, id: "semantic-caching-vector-databases", file: "lessons/0003-semantic-caching-vector-databases.html", title: "Semantic Caching with Vector Databases (GPTCache)", topic: "Semantic Caching", anim: "Generic" },
  { n: 4, id: "speculative-decoding-drafter-models", file: "lessons/0004-speculative-decoding-drafter-models.html", title: "Speculative Decoding and Small Drafter Models", topic: "Speculative Decoding", anim: "Generic" },
  { n: 5, id: "streaming-architectures-optimistic-ui", file: "lessons/0005-streaming-architectures-optimistic-ui.html", title: "Streaming Architectures and Optimistic UI Rendering", topic: "Streaming UX", anim: "Generic" },
  { n: 6, id: "request-batching-vllm-serving", file: "lessons/0006-request-batching-vllm-serving.html", title: "Request Batching and High-Throughput Serving (vLLM)", topic: "High-Throughput Serving", anim: "Generic" },
  { n: 7, id: "dynamic-token-budgets-model-cascades", file: "lessons/0007-dynamic-token-budgets-model-cascades.html", title: "Dynamic Token Budgets and Model Cascades", topic: "Token Cascades", anim: "Generic" },
  { n: 8, id: "engineering-low-latency-cost-pipeline", file: "lessons/0008-engineering-low-latency-cost-pipeline.html", title: "Engineering a Low-Latency, Cost-Optimized AI Pipeline", topic: "Pipeline Synthesis", anim: "Generic" }
];

/* ============================================================
   AI Cost & Latency Engineering — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "inference-regimes", title: "Inference & Caching",
    terms: [
      { term: "Pre-Fill Phase", def: "The compute-bound initial inference stage processing all prompt tokens in parallel across GPU cores.", lesson: 1, tags: ["inference","gpu"] },
      { term: "Decoding Phase", def: "The memory-bandwidth bound autoregressive stage generating output tokens sequentially one by one.", lesson: 1, tags: ["inference","decoding"] },
      { term: "Prompt Caching", def: "Reusing pre-computed Key-Value (KV) attention states for static prompt prefixes across multiple queries.", lesson: 2, tags: ["caching","tokens"] }
    ]
  },
  {
    id: "caches-decoding", title: "Semantic & Speculative",
    terms: [
      { term: "Semantic Cache", def: "A cache matching queries based on embedding vector similarity (cosine >= 0.96) rather than exact strings.", lesson: 3, tags: ["caching","embeddings"] },
      { term: "Speculative Decoding", def: "Using a tiny drafter model to generate candidate tokens verified in parallel by a large model.", lesson: 4, tags: ["decoding","speedup"] },
      { term: "Time-to-First-Token", def: "The elapsed duration between dispatching a request and rendering the very first generated token.", lesson: 5, tags: ["metrics","latency"] }
    ]
  },
  {
    id: "streaming-serving", title: "Streaming & Serving",
    terms: [
      { term: "Server-Sent Events", def: "A lightweight standard for one-way HTTP streaming of text events and tokens from server to client.", lesson: 5, tags: ["protocols","streaming"] },
      { term: "PagedAttention", def: "A memory allocation algorithm managing KV-caches in non-contiguous virtual pages to eliminate fragmentation.", lesson: 6, tags: ["vllm","memory"] },
      { term: "Continuous Batching", def: "Iteration-level scheduling that dynamically injects new requests as soon as any active request finishes.", lesson: 6, tags: ["serving","vllm"] }
    ]
  },
  {
    id: "cascades", title: "Cascades & Economics",
    terms: [
      { term: "Model Cascade", def: "An architectural pattern routing queries to fast cheap models first, escalating to frontier models on failure.", lesson: 7, tags: ["routing","cascades"] },
      { term: "Dynamic Token Budget", def: "Setting task-specific max_tokens limits (e.g. 20 for classification, 1000 for code) to eliminate waste.", lesson: 7, tags: ["economics","optimization"] },
      { term: "Typewriter Smoothing", def: "A frontend buffering technique smoothing out bursty token arrivals into a steady reading cadence.", lesson: 5, tags: ["ux","frontend"] }
    ]
  }
];
