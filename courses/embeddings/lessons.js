/* ============================================================
   Embeddings Explained — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "from-words-to-vectors", file: "lessons/0001-from-words-to-vectors.html", title: "From Words to Vectors: The Geometry of Meaning", topic: "Vector Geometry", anim: "Generic" },
  { n: 2, id: "one-hot-vs-dense-embeddings", file: "lessons/0002-one-hot-vs-dense-embeddings.html", title: "One-Hot Encoding vs Dense Embeddings", topic: "Dense vs Sparse", anim: "Generic" },
  { n: 3, id: "distance-metrics-cosine-dot-euclidean", file: "lessons/0003-distance-metrics-cosine-dot-euclidean.html", title: "Distance Metrics: Cosine Similarity, Dot Product, Euclidean", topic: "Similarity Metrics", anim: "Generic" },
  { n: 4, id: "semantic-vector-arithmetic", file: "lessons/0004-semantic-vector-arithmetic.html", title: "Semantic Vector Spaces: Vector Arithmetic", topic: "Vector Math", anim: "Generic" },
  { n: 5, id: "sentence-document-embeddings", file: "lessons/0005-sentence-document-embeddings.html", title: "Sentence and Document Embeddings", topic: "Text Embeddings", anim: "Generic" },
  { n: 6, id: "multimodal-embeddings-clip", file: "lessons/0006-multimodal-embeddings-clip.html", title: "Multimodal Embeddings: Aligning Text and Images", topic: "Multimodal", anim: "Generic" },
  { n: 7, id: "visualizing-high-dimensions-tsne-umap", file: "lessons/0007-visualizing-high-dimensions-tsne-umap.html", title: "Visualizing High Dimensions: t-SNE and UMAP", topic: "Dimensionality Reduction", anim: "Generic" },
  { n: 8, id: "practical-embedding-models", file: "lessons/0008-practical-embedding-models.html", title: "Practical Embedding Models and Best Practices", topic: "Production Embeddings", anim: "Generic" }
];

/* ============================================================
   Embeddings Explained — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "geometry", title: "Geometry & Representation",
    terms: [
      { term: "Embedding Vector", def: "A high-dimensional list of floating-point numbers mapping a concept to coordinates in semantic space.", lesson: 1, tags: ["embeddings","math"] },
      { term: "Dense Representation", def: "A compact coordinate representation where every dimension carries continuous values, unlike sparse one-hot vectors.", lesson: 2, tags: ["embeddings","types"] },
      { term: "Semantic Vector Space", def: "A continuous geometric space where distance and angle correspond to conceptual similarity.", lesson: 1, tags: ["math","nlp"] }
    ]
  },
  {
    id: "similarity", title: "Similarity & Math",
    terms: [
      { term: "Cosine Similarity", def: "A metric measuring the cosine of the angle between two vectors, bounded between -1.0 and +1.0.", lesson: 3, tags: ["math","similarity"] },
      { term: "Dot Product", def: "The sum of the products of corresponding elements in two vectors, reflecting orientation and magnitude.", lesson: 3, tags: ["math","linear-algebra"] },
      { term: "Vector Analogy", def: "Linear semantic relationships in vector space (e.g. King - Man + Woman = Queen).", lesson: 4, tags: ["nlp","word2vec"] }
    ]
  },
  {
    id: "modalities", title: "Sentences & Modalities",
    terms: [
      { term: "Sentence-BERT", def: "A bi-encoder transformer architecture that embeds full sentences and paragraphs into semantic vectors.", lesson: 5, tags: ["transformers","models"] },
      { term: "CLIP", def: "Contrastive Language-Image Pretraining — dual encoders mapping images and text into a shared vector space.", lesson: 6, tags: ["multimodal","vision"] },
      { term: "Contrastive Loss", def: "A training loss pulling paired representations together while pushing non-paired representations apart.", lesson: 6, tags: ["training","loss"] }
    ]
  },
  {
    id: "production", title: "Production & Visualization",
    terms: [
      { term: "UMAP", def: "Uniform Manifold Approximation and Projection — a non-linear algorithm projecting high-dimensional vectors to 2D/3D.", lesson: 7, tags: ["visualization","dimension-reduction"] },
      { term: "Matryoshka Embeddings", def: "Embeddings trained so early dimensions capture the core signal, enabling truncation to save 80% RAM.", lesson: 8, tags: ["embeddings","efficiency"] },
      { term: "MTEB", def: "Massive Text Embedding Benchmark — an authoritative leaderboard evaluating embedding model performance.", lesson: 8, tags: ["benchmarks","evals"] }
    ]
  }
];
