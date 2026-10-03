/* ============================================================
   Inference, Temperature & Sampling — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "logits-and-softmax-probabilities", file: "lessons/0001-logits-and-softmax-probabilities.html", title: "The Logits Vector and Softmax Probabilities", topic: "Logits & Softmax", anim: "Generic" },
  { n: 2, id: "greedy-decoding-argmax", file: "lessons/0002-greedy-decoding-argmax.html", title: "Greedy Decoding (Argmax): Deterministic but Repetitive", topic: "Greedy Decoding", anim: "Generic" },
  { n: 3, id: "temperature-controlling-sharpness", file: "lessons/0003-temperature-controlling-sharpness.html", title: "Temperature: Controlling Sharpness of the Distribution", topic: "Temperature", anim: "Generic" },
  { n: 4, id: "top-k-sampling", file: "lessons/0004-top-k-sampling.html", title: "Top-K Sampling: Limiting to the Top K Candidates", topic: "Top-K", anim: "Generic" },
  { n: 5, id: "top-p-nucleus-sampling", file: "lessons/0005-top-p-nucleus-sampling.html", title: "Top-P (Nucleus) Sampling: Dynamic Cumulative Probability", topic: "Top-P Nucleus", anim: "Generic" },
  { n: 6, id: "frequency-and-presence-penalties", file: "lessons/0006-frequency-and-presence-penalties.html", title: "Frequency and Presence Penalties: Reducing Repetition", topic: "Penalties", anim: "Generic" },
  { n: 7, id: "random-seeds-and-reproducibility", file: "lessons/0007-random-seeds-and-reproducibility.html", title: "Random Seeds and Reproducibility in LLM Inference", topic: "Seeds & Testing", anim: "Generic" },
  { n: 8, id: "choosing-sampling-parameters-tasks", file: "lessons/0008-choosing-sampling-parameters-tasks.html", title: "Choosing Sampling Parameters for Code vs Creative Tasks", topic: "Sampling Recipes", anim: "Generic" }
];

/* ============================================================
   Inference, Temperature & Sampling — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "logits-math", title: "Logits & Softmax",
    terms: [
      { term: "Logits", def: "The unnormalized raw output scores produced by multiplying the final hidden state by the vocabulary matrix.", lesson: 1, tags: ["inference","math"] },
      { term: "Softmax Function", def: "An exponential normalization function converting real-valued logits into a probability distribution summing to 1.0.", lesson: 1, tags: ["math","probabilities"] },
      { term: "Greedy Decoding", def: "A deterministic decoding strategy that selects the single token with the highest probability (argmax) at each step.", lesson: 2, tags: ["sampling","decoding"] }
    ]
  },
  {
    id: "temperature-tail", title: "Temperature & Truncation",
    terms: [
      { term: "Temperature", def: "A hyperparameter dividing logits before Softmax to control the entropy, sharpness, and randomness of the distribution.", lesson: 3, tags: ["sampling","temperature"] },
      { term: "Top-K Sampling", def: "A truncation filter zeroing out all tokens outside the top K most probable candidates before sampling.", lesson: 4, tags: ["sampling","top-k"] },
      { term: "Top-P (Nucleus)", def: "A dynamic sampling method keeping the smallest pool of top tokens whose cumulative probability mass exceeds P.", lesson: 5, tags: ["sampling","top-p"] }
    ]
  },
  {
    id: "penalties", title: "Penalties & Control",
    terms: [
      { term: "Frequency Penalty", def: "A logit deduction proportional to how many times a token has appeared, discouraging repetitive phrase loops.", lesson: 6, tags: ["sampling","penalties"] },
      { term: "Presence Penalty", def: "A flat one-shot logit penalty applied to any token that has appeared at least once, encouraging new topics.", lesson: 6, tags: ["sampling","penalties"] },
      { term: "Logit Bias", def: "A dictionary adding or subtracting fixed numerical scores to specific token IDs to compel or ban them.", lesson: 6, tags: ["sampling","control"] }
    ]
  },
  {
    id: "reproducibility", title: "Reproducibility & Production",
    terms: [
      { term: "Random Seed", def: "An initialization integer that locks down pseudo-random number generator state for reproducible sampling.", lesson: 7, tags: ["testing","reproducibility"] },
      { term: "System Fingerprint", def: "A response identifier indicating the backend serving hardware and model weight configuration.", lesson: 7, tags: ["infrastructure","metrics"] },
      { term: "Max Tokens", def: "A hard upper bound capping the maximum number of output tokens a model is permitted to generate.", lesson: 8, tags: ["api","budget"] }
    ]
  }
];
