/* ============================================================
   Neural Networks Visually — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-artificial-neuron", file: "lessons/0001-the-artificial-neuron.html", title: "The Artificial Neuron: Weights, Bias, and Activations", topic: "Neuron Anatomy", anim: "Generic" },
  { n: 2, id: "non-linearity-step-to-relu", file: "lessons/0002-non-linearity-step-to-relu.html", title: "Non-Linearity: Why Step Functions Failed and ReLU Succeeded", topic: "Activations", anim: "Generic" },
  { n: 3, id: "mlp-and-forward-propagation", file: "lessons/0003-mlp-and-forward-propagation.html", title: "Multi-Layer Perceptrons and Forward Propagation", topic: "Forward Pass", anim: "Generic" },
  { n: 4, id: "loss-landscape-and-error-gradients", file: "lessons/0004-loss-landscape-and-error-gradients.html", title: "The Loss Landscape and Error Gradients", topic: "Loss Landscapes", anim: "Generic" },
  { n: 5, id: "backpropagation-chain-rule", file: "lessons/0005-backpropagation-chain-rule.html", title: "Backpropagation: The Chain Rule in Action", topic: "Backpropagation", anim: "Generic" },
  { n: 6, id: "learning-rates-batch-sizes", file: "lessons/0006-learning-rates-batch-sizes.html", title: "Learning Rates, Batch Sizes, and Optimization", topic: "Hyperparameters", anim: "Generic" },
  { n: 7, id: "vanishing-exploding-gradients", file: "lessons/0007-vanishing-exploding-gradients.html", title: "Vanishing and Exploding Gradients", topic: "Gradient Stability", anim: "Generic" },
  { n: 8, id: "representation-learning-hidden-layers", file: "lessons/0008-representation-learning-hidden-layers.html", title: "Representation Learning: What Hidden Layers See", topic: "Representation", anim: "Generic" }
];

/* ============================================================
   Neural Networks Visually — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "neuron", title: "Neuron & Activations",
    terms: [
      { term: "Artificial Neuron", def: "A mathematical building block computing a weighted sum of inputs plus bias passed through a non-linear activation.", lesson: 1, tags: ["neural-nets","foundations"] },
      { term: "ReLU", def: "Rectified Linear Unit (max(0, x)) — the standard activation function providing constant gradient 1.0 for positive inputs.", lesson: 2, tags: ["activations","math"] },
      { term: "Universal Approximation Theorem", def: "The mathematical proof that feedforward networks with non-linear activations can approximate any continuous function.", lesson: 2, tags: ["theory","math"] }
    ]
  },
  {
    id: "forward-loss", title: "Forward Pass & Loss",
    terms: [
      { term: "Multi-Layer Perceptron", def: "A feedforward neural network comprising multiple fully connected layers of neurons.", lesson: 3, tags: ["architecture","mlp"] },
      { term: "Softmax", def: "A function that normalizes raw logits into a valid probability distribution that sums to 1.0.", lesson: 3, tags: ["math","classification"] },
      { term: "Loss Landscape", def: "The non-convex mathematical surface defining loss across high-dimensional parameter space.", lesson: 4, tags: ["optimization","theory"] }
    ]
  },
  {
    id: "backprop", title: "Backprop & Training",
    terms: [
      { term: "Backpropagation", def: "An algorithm using the calculus chain rule in reverse to compute exact parameter gradients for all weights efficiently.", lesson: 5, tags: ["algorithms","math"] },
      { term: "AdamW", def: "An adaptive optimization algorithm that decouples weight decay regularization from momentum step updates.", lesson: 6, tags: ["optimizers","training"] },
      { term: "Learning Rate Warmup", def: "A schedule gradually ramping learning rate from zero to protect early random weights from destructive gradient shock.", lesson: 6, tags: ["training","schedules"] }
    ]
  },
  {
    id: "stability", title: "Stability & Representations",
    terms: [
      { term: "Vanishing Gradient", def: "The exponential decay of error gradients across deep layers, causing early layers to cease learning.", lesson: 7, tags: ["deep-learning","pitfalls"] },
      { term: "Residual Skip Connection", def: "An architectural shortcut (y = F(x) + x) providing an uninterrupted gradient highway across deep layers.", lesson: 7, tags: ["architecture","resnets"] },
      { term: "Representation Learning", def: "The capability of deep networks to automatically discover hierarchical feature abstractions directly from raw data.", lesson: 8, tags: ["deep-learning","representations"] }
    ]
  }
];
