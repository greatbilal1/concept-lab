/* ============================================================
   What Is AI? — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "from-rules-to-learning", file: "lessons/0001-from-rules-to-learning.html", title: "From Rules to Learning: The Core Shift", topic: "AI Foundations", anim: "Generic" },
  { n: 2, id: "deterministic-vs-probabilistic", file: "lessons/0002-deterministic-vs-probabilistic.html", title: "Deterministic Software vs Probabilistic Systems", topic: "Probabilistic Systems", anim: "Generic" },
  { n: 3, id: "supervised-unsupervised-rl", file: "lessons/0003-supervised-unsupervised-rl.html", title: "Supervised, Unsupervised, and Reinforcement Learning", topic: "Learning Paradigms", anim: "Generic" },
  { n: 4, id: "training-vs-inference", file: "lessons/0004-training-vs-inference.html", title: "The Training Phase vs The Inference Phase", topic: "Lifecycle", anim: "Generic" },
  { n: 5, id: "reasoning-vs-statistical-association", file: "lessons/0005-reasoning-vs-statistical-association.html", title: "What AI Cannot Do: Reasoning vs Statistical Association", topic: "Capabilities & Limits", anim: "Generic" },
  { n: 6, id: "hallucinations-and-stochasticity", file: "lessons/0006-hallucinations-and-stochasticity.html", title: "Hallucinations and Stochasticity Explained", topic: "Hallucinations", anim: "Generic" },
  { n: 7, id: "mental-models-probabilistic-software", file: "lessons/0007-mental-models-probabilistic-software.html", title: "Mental Models for Working with Probabilistic Software", topic: "Mental Models", anim: "Generic" },
  { n: 8, id: "modern-ai-landscape", file: "lessons/0008-modern-ai-landscape.html", title: "The Modern AI Landscape: Perception, Generation, and Agency", topic: "AI Landscape", anim: "Generic" }
];

/* ============================================================
   What Is AI? — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "foundations", title: "Foundations & Paradigms",
    terms: [
      { term: "Machine Learning", def: "A programming paradigm where algorithms discover mathematical rules from data rather than following hand-coded logic.", lesson: 1, tags: ["ai","foundations"] },
      { term: "Probabilistic System", def: "A system whose outputs are governed by statistical probability distributions rather than fixed static paths.", lesson: 2, tags: ["ai","statistics"] },
      { term: "Supervised Learning", def: "Training a model on paired input-output examples (X -> Y) to predict labels for unseen data.", lesson: 3, tags: ["ml","supervised"] }
    ]
  },
  {
    id: "lifecycle", title: "Lifecycle & Inference",
    terms: [
      { term: "Inference", def: "The read-only phase of evaluating a trained model on new inputs using frozen mathematical weights.", lesson: 4, tags: ["ai","lifecycle"] },
      { term: "Model Weights", def: "The learned numerical parameters inside a neural network that encode statistical patterns and knowledge.", lesson: 1, tags: ["ml","neural-nets"] },
      { term: "Fine-Tuning", def: "An additional training phase that continues optimization on a domain dataset to adapt an existing model.", lesson: 4, tags: ["ml","training"] }
    ]
  },
  {
    id: "limits", title: "Limits & Hallucinations",
    terms: [
      { term: "Hallucination", def: "The generation of plausible-sounding but factually false, unverified statements by a language model.", lesson: 6, tags: ["ai","safety"] },
      { term: "Stochasticity", def: "Randomness and probabilistic variation inherent in sampling tokens from a distribution.", lesson: 6, tags: ["ai","math"] },
      { term: "Grounding", def: "Anchoring model generation to verified facts retrieved from external documents, databases, or tools.", lesson: 6, tags: ["ai","rag"] }
    ]
  },
  {
    id: "architecture", title: "Architecture & Reasoning",
    terms: [
      { term: "Chain of Thought", def: "A prompting technique encouraging models to generate intermediate reasoning tokens before arriving at an answer.", lesson: 5, tags: ["ai","prompting"] },
      { term: "Test-Time Compute", def: "Allocating extra inference tokens for a model to deliberate, backtrack, and evaluate multiple reasoning steps.", lesson: 5, tags: ["ai","reasoning"] },
      { term: "Autonomous Agent", def: "A software system pairing a foundation model with tools, memory, and a ReAct loop to achieve complex goals.", lesson: 8, tags: ["ai","agents"] }
    ]
  }
];
