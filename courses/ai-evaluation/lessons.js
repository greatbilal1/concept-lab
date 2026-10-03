/* ============================================================
   AI Evaluation & Testing — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-vibes-problem-eyeball-testing", file: "lessons/0001-the-vibes-problem-eyeball-testing.html", title: "The 'Vibes' Problem: Moving Beyond Eyeball Testing", topic: "The Vibes Problem", anim: "Generic" },
  { n: 2, id: "golden-evaluation-datasets", file: "lessons/0002-golden-evaluation-datasets.html", title: "Golden Evaluation Datasets: Curation and Diversity", topic: "Golden Datasets", anim: "Generic" },
  { n: 3, id: "deterministic-vs-model-graders", file: "lessons/0003-deterministic-vs-model-graders.html", title: "Deterministic vs Model-Based Graders", topic: "Graders", anim: "Generic" },
  { n: 4, id: "llm-as-a-judge-rubrics-biases", file: "lessons/0004-llm-as-a-judge-rubrics-biases.html", title: "LLM-as-a-Judge: Rubrics, Calibration, and Bias Mitigation", topic: "Judge Engineering", anim: "Generic" },
  { n: 5, id: "reference-based-metrics-bleu-rouge-bertscore", file: "lessons/0005-reference-based-metrics-bleu-rouge-bertscore.html", title: "Reference-Based Metrics: BLEU, ROUGE, and BERTScore", topic: "Reference Metrics", anim: "Generic" },
  { n: 6, id: "continuous-eval-ci-cd", file: "lessons/0006-continuous-eval-ci-cd.html", title: "Continuous Evaluation in CI/CD Pipelines", topic: "CI/CD Evals", anim: "Generic" },
  { n: 7, id: "ab-testing-user-feedback-ground-truth", file: "lessons/0007-ab-testing-user-feedback-ground-truth.html", title: "A/B Testing, User Feedback, and Production Ground Truth", topic: "Production Evals", anim: "Generic" },
  { n: 8, id: "building-automated-eval-harness", file: "lessons/0008-building-automated-eval-harness.html", title: "Building an Automated AI Evaluation Harness", topic: "Eval Harness", anim: "Generic" }
];

/* ============================================================
   AI Evaluation & Testing — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "vibes-datasets", title: "Vibes & Golden Datasets",
    terms: [
      { term: "Vibe-Based Testing", def: "The unscientific anti-pattern of manually checking 2-3 casual examples in a playground and guessing at quality.", lesson: 1, tags: ["evals","pitfalls"] },
      { term: "Golden Dataset", def: "A curated, representative, and human-verified benchmark set of inputs and expected ground truths.", lesson: 2, tags: ["evals","datasets"] },
      { term: "Regression", def: "A performance or accuracy drop on previously passing test cases caused by a prompt or model change.", lesson: 1, tags: ["testing","quality"] }
    ]
  },
  {
    id: "graders", title: "Graders & Judges",
    terms: [
      { term: "Deterministic Grader", def: "A code assertion (JSON schema, regex, exit code) that evaluates objective criteria at zero cost.", lesson: 3, tags: ["evals","code"] },
      { term: "LLM-as-a-Judge", def: "Using a frontier model to score qualitative outputs against a structured grading rubric.", lesson: 4, tags: ["evals","judges"] },
      { term: "Verbosity Bias", def: "The systemic tendency of model judges to award higher scores to longer, wordier responses.", lesson: 4, tags: ["evals","biases"] }
    ]
  },
  {
    id: "reference-metrics", title: "Reference & CI Metrics",
    terms: [
      { term: "BERTScore", def: "An evaluation metric computing token embedding cosine similarity to recognize valid synonyms and paraphrasing.", lesson: 5, tags: ["metrics","embeddings"] },
      { term: "ROUGE", def: "Recall-Oriented Understudy for Gifting Evaluation — an n-gram overlap metric standard in summarization.", lesson: 5, tags: ["metrics","nlp"] },
      { term: "Continuous Evaluation", def: "Embedding automated benchmark test suites into CI/CD pipelines to gate and block regressive PRs.", lesson: 6, tags: ["ci","devops"] }
    ]
  },
  {
    id: "production-flywheels", title: "Production & Flywheels",
    terms: [
      { term: "Quality Flywheel", def: "The continuous loop of capturing production user failure signals and promoting them into golden eval datasets.", lesson: 7, tags: ["mlops","flywheels"] },
      { term: "Implicit Feedback", def: "Behavioral user signals (copying text, accepting code, regenerating) that reveal satisfaction without surveys.", lesson: 7, tags: ["telemetry","ux"] },
      { term: "Eval Harness", def: "An automated testing software platform that loads datasets, runs models concurrently, grades outputs, and reports metrics.", lesson: 8, tags: ["tooling","evals"] }
    ]
  }
];
