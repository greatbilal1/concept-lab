/* ============================================================
   Machine Learning Explained — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-core-ml-problem", file: "lessons/0001-the-core-ml-problem.html", title: "The Core ML Problem: Learning Functions from Data", topic: "ML Problem", anim: "Generic" },
  { n: 2, id: "features-labels-datasets", file: "lessons/0002-features-labels-datasets.html", title: "Features, Labels, and Datasets (Train, Val, Test)", topic: "Data Splitting", anim: "Generic" },
  { n: 3, id: "loss-functions-measuring-error", file: "lessons/0003-loss-functions-measuring-error.html", title: "Loss Functions: Measuring Error Mathematically", topic: "Loss Functions", anim: "Generic" },
  { n: 4, id: "optimization-gradient-descent", file: "lessons/0004-optimization-gradient-descent.html", title: "Optimization: Gradient Descent Intuition", topic: "Optimization", anim: "Generic" },
  { n: 5, id: "overfitting-underfitting-regularization", file: "lessons/0005-overfitting-underfitting-regularization.html", title: "Overfitting, Underfitting, and Regularization", topic: "Bias-Variance", anim: "Generic" },
  { n: 6, id: "evaluation-metrics-precision-recall-f1", file: "lessons/0006-evaluation-metrics-precision-recall-f1.html", title: "Evaluation Metrics: Accuracy, Precision, Recall, F1", topic: "Metrics", anim: "Generic" },
  { n: 7, id: "end-to-end-ml-pipeline", file: "lessons/0007-end-to-end-ml-pipeline.html", title: "The End-to-End Machine Learning Pipeline", topic: "MLOps Pipeline", anim: "Generic" },
  { n: 8, id: "classical-ml-to-deep-learning", file: "lessons/0008-classical-ml-to-deep-learning.html", title: "From Classical Machine Learning to Deep Learning", topic: "ML vs DL", anim: "Generic" }
];

/* ============================================================
   Machine Learning Explained — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "problem", title: "Problem & Splitting",
    terms: [
      { term: "Function Approximation", def: "The mathematical framing of machine learning: learning parameters to approximate an unknown true relationship.", lesson: 1, tags: ["ml","math"] },
      { term: "Feature Matrix", def: "A 2D matrix (X) where rows represent individual instances and columns represent measured input variables.", lesson: 2, tags: ["ml","data"] },
      { term: "Data Leakage", def: "A flaw where information from validation or test datasets inadvertently contaminates the training phase.", lesson: 2, tags: ["ml","pitfalls"] }
    ]
  },
  {
    id: "optimization", title: "Loss & Optimization",
    terms: [
      { term: "Mean Squared Error", def: "A regression loss function computing the average of squared differences between predictions and targets.", lesson: 3, tags: ["loss","regression"] },
      { term: "Cross-Entropy Loss", def: "A classification loss function penalizing differences between predicted probabilities and ground-truth classes.", lesson: 3, tags: ["loss","classification"] },
      { term: "Gradient Descent", def: "An optimization algorithm that iteratively adjusts model weights in the direction of steepest downward slope.", lesson: 4, tags: ["optimization","math"] }
    ]
  },
  {
    id: "regularization", title: "Generalization & Regularization",
    terms: [
      { term: "Overfitting", def: "A failure mode where a model memorizes training noise and fails to generalize to unseen test data.", lesson: 5, tags: ["ml","generalization"] },
      { term: "Weight Decay", def: "L2 regularization adding a penalty proportional to squared weight magnitudes to prevent erratic parameters.", lesson: 5, tags: ["regularization","math"] },
      { term: "Early Stopping", def: "Halting the training loop at the exact epoch where validation loss reaches its minimum before rising.", lesson: 5, tags: ["training","regularization"] }
    ]
  },
  {
    id: "metrics-ops", title: "Metrics & Production",
    terms: [
      { term: "F1-Score", def: "The harmonic mean of precision and recall, balancing false alarms against missed detections.", lesson: 6, tags: ["metrics","evaluation"] },
      { term: "Concept Drift", def: "The statistical divergence of real-world production inputs from training distributions over time.", lesson: 7, tags: ["mlops","production"] },
      { term: "XGBoost", def: "An optimized gradient boosted decision tree library that dominates machine learning on tabular data.", lesson: 8, tags: ["algorithms","tabular"] }
    ]
  }
];
