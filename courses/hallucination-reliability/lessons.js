/* ============================================================
   Hallucination & Reliability Engineering — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "mechanics-of-hallucination", file: "lessons/0001-mechanics-of-hallucination.html", title: "The Mechanics of Hallucination: Why Models Confabulate", topic: "Hallucination Mechanics", anim: "Generic" },
  { n: 2, id: "detecting-hallucinations-entailment-consistency", file: "lessons/0002-detecting-hallucinations-entailment-consistency.html", title: "Detecting Hallucinations: Entailment, Self-Check, and Consistency", topic: "Detection", anim: "Generic" },
  { n: 3, id: "grounding-by-construction", file: "lessons/0003-grounding-by-construction.html", title: "Grounding by Construction: Constraining Search Spaces", topic: "Grounding Design", anim: "Generic" },
  { n: 4, id: "fact-checking-loops-verifier-models", file: "lessons/0004-fact-checking-loops-verifier-models.html", title: "Fact-Checking Loops and Verifier Models", topic: "Verifier Models", anim: "Generic" },
  { n: 5, id: "uncertainty-estimation-confidence-scoring", file: "lessons/0005-uncertainty-estimation-confidence-scoring.html", title: "Uncertainty Estimation and Confidence Scoring", topic: "Uncertainty", anim: "Generic" },
  { n: 6, id: "defensive-prompt-design-truthfulness", file: "lessons/0006-defensive-prompt-design-truthfulness.html", title: "Defensive Prompt Design for Truthfulness", topic: "Defensive Prompting", anim: "Generic" },
  { n: 7, id: "human-verification-high-risk-domains", file: "lessons/0007-human-verification-high-risk-domains.html", title: "Human Verification Workflows for High-Risk Domains", topic: "Human Review", anim: "Generic" },
  { n: 8, id: "engineering-mission-critical-reliability", file: "lessons/0008-engineering-mission-critical-reliability.html", title: "Engineering Reliability into Mission-Critical AI", topic: "Reliability Engineering", anim: "Generic" }
];

/* ============================================================
   Hallucination & Reliability Engineering — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "mechanics", title: "Mechanics & Verification",
    terms: [
      { term: "Hallucination", def: "The generation of plausible-sounding but factually false, unverified statements by a language model.", lesson: 1, tags: ["hallucination","safety"] },
      { term: "Confabulation", def: "Generating fabricated or distorted memories and facts without conscious intent to deceive.", lesson: 1, tags: ["theory","psychology"] },
      { term: "Natural Language Inference", def: "An NLP classification task determining whether a hypothesis is Entailed, Contradicted, or Neutral relative to a premise.", lesson: 2, tags: ["nli","verification"] }
    ]
  },
  {
    id: "methods", title: "Methods & Architecture",
    terms: [
      { term: "Grounding by Construction", def: "Designing schemas and interfaces (Literals, IDs) so hallucinations are structurally impossible by grammar design.", lesson: 3, tags: ["architecture","schemas"] },
      { term: "Generator-Verifier", def: "An architectural pattern where a primary model drafts text and an independent critic model audits factual claims.", lesson: 4, tags: ["patterns","verification"] },
      { term: "Semantic Entropy", def: "A confidence metric calculating meaning divergence across multiple stochastic temperature samples.", lesson: 5, tags: ["metrics","uncertainty"] }
    ]
  },
  {
    id: "prompts", title: "Defensive Prompting",
    terms: [
      { term: "Quotes-First Extraction", def: "Requiring a model to extract verbatim source quotes before synthesizing an answer to anchor attention.", lesson: 6, tags: ["prompting","grounding"] },
      { term: "Uncertainty Permission", def: "Explicit prompt instructions authorizing the model to reply 'I do not know' when facts are absent.", lesson: 6, tags: ["prompting","truthfulness"] },
      { term: "Premise Challenge", def: "Instructing a model to detect and correct false user presuppositions rather than sycophantically agreeing.", lesson: 6, tags: ["prompting","sycophancy"] }
    ]
  },
  {
    id: "governance", title: "Governance & Defense",
    terms: [
      { term: "Defense in Depth", def: "Layering multiple independent safeguards (RAG, schemas, NLI, human gates) so single failures are trapped.", lesson: 8, tags: ["security","architecture"] },
      { term: "Audit Trail", def: "An immutable record storing reviewer identity, timestamps, and source evidence for compliance verification.", lesson: 7, tags: ["compliance","governance"] },
      { term: "Conformal Prediction", def: "A statistical framework providing mathematically proven confidence intervals on model prediction sets.", lesson: 5, tags: ["statistics","safety"] }
    ]
  }
];
