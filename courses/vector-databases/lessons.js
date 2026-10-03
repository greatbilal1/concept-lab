/* ============================================================
   Vector Databases & Semantic Search — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-relational-databases-struggle-vectors", file: "lessons/0001-why-relational-databases-struggle-vectors.html", title: "Why Relational Databases Struggle with Vector Similarity at Scale", topic: "Vector Scale", anim: "Generic" },
  { n: 2, id: "vector-index-algorithms-hnsw-ivfflat", file: "lessons/0002-vector-index-algorithms-hnsw-ivfflat.html", title: "Vector Index Algorithms: Flat vs HNSW vs IVFFlat", topic: "Index Algorithms", anim: "Generic" },
  { n: 3, id: "vector-database-distance-metrics", file: "lessons/0003-vector-database-distance-metrics.html", title: "Distance Metrics: Cosine, L2 (Euclidean), and Inner Product", topic: "Metric Alignment", anim: "Generic" },
  { n: 4, id: "metadata-filtering-pre-vs-post", file: "lessons/0004-metadata-filtering-pre-vs-post.html", title: "Metadata Filtering: Pre-Filtering vs Post-Filtering", topic: "Filtered Search", anim: "Generic" },
  { n: 5, id: "hybrid-search-bm25-vectors", file: "lessons/0005-hybrid-search-bm25-vectors.html", title: "Hybrid Search: Combining BM25 Keyword Search with Vector Search", topic: "Hybrid Search", anim: "Generic" },
  { n: 6, id: "rrf-and-reranking-models", file: "lessons/0006-rrf-and-reranking-models.html", title: "Reciprocal Rank Fusion (RRF) and Re-ranking Models", topic: "Re-ranking", anim: "Generic" },
  { n: 7, id: "popular-vector-stores-comparison", file: "lessons/0007-popular-vector-stores-comparison.html", title: "Popular Vector Stores: pgvector, Chroma, Qdrant, Pinecone", topic: "Vector Stores", anim: "Generic" },
  { n: 8, id: "scaling-and-maintenance-production", file: "lessons/0008-scaling-and-maintenance-production.html", title: "Scaling and Maintenance: Index Build Times, Memory, and Updates", topic: "Production Operations", anim: "Generic" }
];

/* ============================================================
   Vector Databases & Semantic Search — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "curse", title: "Curse of Dimensionality",
    terms: [
      { term: "Curse of Dimensionality", def: "The phenomenon where geometric distance becomes sparse and B-trees fail in high-dimensional spaces.", lesson: 1, tags: ["math","vectors"] },
      { term: "Approximate Nearest Neighbor", def: "Index algorithms (ANN) trading a tiny fraction of accuracy for 1,000x speedups over brute-force search.", lesson: 1, tags: ["search","algorithms"] },
      { term: "Flat Index", def: "Brute-force exhaustive search computing exact distance against every vector in O(N) linear time.", lesson: 1, tags: ["search","indexing"] }
    ]
  },
  {
    id: "algorithms", title: "Index Algorithms",
    terms: [
      { term: "HNSW", def: "Hierarchical Navigable Small World — a multi-layer graph index providing state-of-the-art speed and recall.", lesson: 2, tags: ["algorithms","hnsw"] },
      { term: "IVFFlat", def: "Inverted File Index — clustering vector space using K-Means to search only relevant centroid cells.", lesson: 2, tags: ["algorithms","clustering"] },
      { term: "Skip-List Graph", def: "A hierarchical graph with sparse highway connections on top and dense local connections on bottom.", lesson: 2, tags: ["data-structures","hnsw"] }
    ]
  },
  {
    id: "metrics-search", title: "Metrics & Hybrid Search",
    terms: [
      { term: "Cosine Distance", def: "Angular distance metric (1 - cos(theta)), represented by the <=> operator in pgvector.", lesson: 3, tags: ["metrics","pgvector"] },
      { term: "Single-Stage Filtered Search", def: "Navigating the HNSW graph while checking metadata filter masks in real time to prevent empty results.", lesson: 4, tags: ["search","filtering"] },
      { term: "Reciprocal Rank Fusion", def: "An algorithm merging disparate search rankings based on reciprocal rank positions: sum(1 / (k + rank)).", lesson: 6, tags: ["algorithms","hybrid"] }
    ]
  },
  {
    id: "operations", title: "Stores & Operations",
    terms: [
      { term: "pgvector", def: "An open-source PostgreSQL extension adding vector data types, HNSW indexing, and similarity search to Postgres.", lesson: 7, tags: ["databases","postgres"] },
      { term: "ChromaDB", def: "An open-source embedded vector database that runs inside Python processes with zero server configuration.", lesson: 7, tags: ["databases","embedded"] },
      { term: "Product Quantization", def: "Compressing vectors into compact codebook centroids to slash index RAM footprint by 75-90%.", lesson: 8, tags: ["compression","memory"] }
    ]
  }
];
