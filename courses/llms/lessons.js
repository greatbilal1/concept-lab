/* ============================================================
   How LLMs Work — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "autoregressive-next-token", file: "lessons/0001-autoregressive-next-token.html", title: "Autoregressive Language Modeling: Next-Token Prediction", topic: "Next Token", anim: "Generic" },
  { n: 2, id: "pretraining-at-scale", file: "lessons/0002-pretraining-at-scale.html", title: "Pre-training at Scale: Web Scraping, Filtering, and Compute", topic: "Pre-training", anim: "Generic" },
  { n: 3, id: "tokenization-bpe-sentencepiece", file: "lessons/0003-tokenization-bpe-sentencepiece.html", title: "Tokenization: Byte-Pair Encoding (BPE) and SentencePiece", topic: "Tokenization", anim: "Generic" },
  { n: 4, id: "emergent-capabilities-scaling-laws", file: "lessons/0004-emergent-capabilities-scaling-laws.html", title: "Emergent Capabilities and Scaling Laws", topic: "Scaling Laws", anim: "Generic" },
  { n: 5, id: "supervised-fine-tuning-sft", file: "lessons/0005-supervised-fine-tuning-sft.html", title: "Supervised Fine-Tuning (SFT): From Completion to Assistant", topic: "Instruction Tuning", anim: "Generic" },
  { n: 6, id: "alignment-rlhf-and-dpo", file: "lessons/0006-alignment-rlhf-and-dpo.html", title: "Alignment: RLHF and Direct Preference Optimization (DPO)", topic: "Alignment", anim: "Generic" },
  { n: 7, id: "reasoning-models-test-time-compute", file: "lessons/0007-reasoning-models-test-time-compute.html", title: "Reasoning Models and Test-Time Compute", topic: "Reasoning Models", anim: "Generic" },
  { n: 8, id: "generation-probability-distributions", file: "lessons/0008-generation-probability-distributions.html", title: "What Happens During Generation: Probability Distributions", topic: "Generation Mechanics", anim: "Generic" }
];

/* ============================================================
   How LLMs Work — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "pretraining", title: "Autoregressive & Pre-training",
    terms: [
      { term: "Autoregressive Generation", def: "A sequential generation process where previous outputs are fed back into the input sequence to predict subsequent tokens.", lesson: 1, tags: ["llms","generation"] },
      { term: "Base Model", def: "A foundation model trained purely on next-token prediction across trillions of tokens before any instruction tuning.", lesson: 5, tags: ["models","training"] },
      { term: "MinHash Deduplication", def: "An algorithmic data pipeline technique that identifies and purges near-duplicate documents from training corpora.", lesson: 2, tags: ["data","preprocessing"] }
    ]
  },
  {
    id: "tokenization", title: "Tokenization & Scaling",
    terms: [
      { term: "Byte-Pair Encoding", def: "A subword tokenization algorithm that iteratively merges frequent character pairs into reusable vocabulary tokens.", lesson: 3, tags: ["tokenization","nlp"] },
      { term: "Chinchilla Scaling Laws", def: "Empirical laws proving that compute-optimal training requires scaling model parameters and training tokens in equal 1:1 proportion.", lesson: 4, tags: ["scaling","theory"] },
      { term: "Emergent Capability", def: "A capability that appears suddenly at scale as continuous cross-entropy loss crosses critical performance thresholds.", lesson: 4, tags: ["theory","scale"] }
    ]
  },
  {
    id: "post-training", title: "Post-Training Alignment",
    terms: [
      { term: "Supervised Fine-Tuning", def: "Instruction tuning a base model on curated prompt-response pairs to teach it conversational assistant behavior.", lesson: 5, tags: ["alignment","sft"] },
      { term: "Direct Preference Optimization", def: "An alignment algorithm optimizing models directly on human preference pairs (win, lose) without a separate reward model.", lesson: 6, tags: ["alignment","dpo"] },
      { term: "Reward Hacking", def: "A failure mode where an agent exploits loopholes in a reward model (e.g. verbosity) without satisfying true human intent.", lesson: 6, tags: ["alignment","pitfalls"] }
    ]
  },
  {
    id: "inference", title: "Reasoning & Inference",
    terms: [
      { term: "Reasoning Model", def: "A model that generates internal chain-of-thought thinking tokens during inference to explore and self-correct.", lesson: 7, tags: ["reasoning","models"] },
      { term: "Test-Time Compute", def: "Allocating extra inference computational tokens to allow models to deliberate and explore multiple reasoning paths.", lesson: 7, tags: ["inference","scaling"] },
      { term: "Language Model Head", def: "The final linear projection layer in a transformer that maps hidden states to raw vocabulary logits.", lesson: 8, tags: ["architecture","transformers"] }
    ]
  }
];
