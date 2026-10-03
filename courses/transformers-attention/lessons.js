/* ============================================================
   Transformers & Attention — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "sequential-bottleneck-rnns", file: "lessons/0001-sequential-bottleneck-rnns.html", title: "The Sequential Bottleneck of RNNs and LSTMs", topic: "Sequential Limits", anim: "Generic" },
  { n: 2, id: "attention-revolution-paper", file: "lessons/0002-attention-revolution-paper.html", title: "The Attention Revolution: Attention Is All You Need", topic: "Attention Paper", anim: "Generic" },
  { n: 3, id: "queries-keys-values-qkv", file: "lessons/0003-queries-keys-values-qkv.html", title: "Queries, Keys, and Values: The Information Retrieval Metaphor", topic: "QKV Intuition", anim: "Generic" },
  { n: 4, id: "scaled-dot-product-attention-math", file: "lessons/0004-scaled-dot-product-attention-math.html", title: "Scaled Dot-Product Attention: Math and Mechanics", topic: "Attention Math", anim: "Generic" },
  { n: 5, id: "multi-head-attention", file: "lessons/0005-multi-head-attention.html", title: "Multi-Head Attention: Attending to Multiple Relationships", topic: "Multi-Head", anim: "Generic" },
  { n: 6, id: "positional-encodings-order", file: "lessons/0006-positional-encodings-order.html", title: "Positional Encodings: Giving Sequences a Sense of Order", topic: "Positional Encoding", anim: "Generic" },
  { n: 7, id: "encoder-vs-decoder-bert-gpt", file: "lessons/0007-encoder-vs-decoder-bert-gpt.html", title: "Encoder vs Decoder Architectures (BERT vs GPT)", topic: "Architectures", anim: "Generic" },
  { n: 8, id: "complete-transformer-block", file: "lessons/0008-complete-transformer-block.html", title: "Residual Connections, LayerNorm, and Feed-Forward Networks", topic: "Transformer Block", anim: "Generic" }
];

/* ============================================================
   Transformers & Attention — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "attention-core", title: "Attention Core & QKV",
    terms: [
      { term: "Transformer", def: "A parallel neural network architecture based entirely on self-attention mechanisms without recurrent loops.", lesson: 2, tags: ["transformers","architecture"] },
      { term: "Self-Attention", def: "An operation where every token in a sequence computes pairwise attention weights over all other tokens in parallel.", lesson: 2, tags: ["transformers","attention"] },
      { term: "QKV Projections", def: "Queries (seeking), Keys (advertising), and Values (content) derived from token embeddings via learned matrices.", lesson: 3, tags: ["transformers","qkv"] }
    ]
  },
  {
    id: "math-heads", title: "Math & Heads",
    terms: [
      { term: "Scaled Dot-Product", def: "Computing attention as softmax(Q K^T / sqrt(d_k)) V, scaling to prevent vanishing gradients.", lesson: 4, tags: ["math","attention"] },
      { term: "Multi-Head Attention", def: "Splitting embedding dimensions into parallel heads to track multiple relational subspaces simultaneously.", lesson: 5, tags: ["transformers","multi-head"] },
      { term: "FlashAttention", def: "A GPU SRAM-tiled attention algorithm computing exact self-attention with high IO efficiency and speed.", lesson: 4, tags: ["hardware","cuda"] }
    ]
  },
  {
    id: "order-masks", title: "Order & Masking",
    terms: [
      { term: "Permutation Invariance", def: "The mathematical property where shuffling input order produces identically shuffled outputs.", lesson: 6, tags: ["theory","math"] },
      { term: "RoPE", def: "Rotary Position Embedding — rotating Query and Key vectors in complex space to represent relative token distance naturally.", lesson: 6, tags: ["transformers","position"] },
      { term: "Causal Masking", def: "Masking future tokens with -infinity in decoders to enforce strictly autoregressive past-only attention.", lesson: 7, tags: ["transformers","decoders"] }
    ]
  },
  {
    id: "block-arch", title: "Block Architecture",
    terms: [
      { term: "Decoder-Only", def: "A transformer architecture using causal masking to generate text autoregressively (GPT, Llama).", lesson: 7, tags: ["architecture","llms"] },
      { term: "Feed-Forward Network", def: "The point-wise MLP sub-layer in a transformer block that acts as a key-value factual memory store.", lesson: 8, tags: ["architecture","mlp"] },
      { term: "RMSNorm", def: "Root Mean Square Normalization — a streamlined, high-performance variant of LayerNorm used in modern LLMs.", lesson: 8, tags: ["normalization","efficiency"] }
    ]
  }
];
