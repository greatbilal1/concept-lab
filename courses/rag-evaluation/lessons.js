/* ============================================================
   RAG Evaluation — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "deconstructing-rag-evaluation", file: "lessons/0001-deconstructing-rag-evaluation.html", title: "Deconstructing RAG Evaluation: Retrieval vs Generation", topic: "RAG Triad", anim: "Generic" },
  { n: 2, id: "evaluating-retrieval-recall-precision", file: "lessons/0002-evaluating-retrieval-recall-precision.html", title: "Evaluating Retrieval: Context Recall and Precision", topic: "Retrieval Metrics", anim: "Generic" },
  { n: 3, id: "evaluating-generation-faithfulness-relevance", file: "lessons/0003-evaluating-generation-faithfulness-relevance.html", title: "Evaluating Generation: Faithfulness and Answer Relevance", topic: "Generation Metrics", anim: "Generic" },
  { n: 4, id: "ragas-and-trulens-frameworks", file: "lessons/0004-ragas-and-trulens-frameworks.html", title: "The Ragas and TruLens Frameworks", topic: "Eval Frameworks", anim: "Generic" },
  { n: 5, id: "synthetic-test-generation-rag", file: "lessons/0005-synthetic-test-generation-rag.html", title: "Synthetic Test Generation for RAG", topic: "Synthetic Datasets", anim: "Generic" },
  { n: 6, id: "failure-mode-diagnosis-triaging", file: "lessons/0006-failure-mode-diagnosis-triaging.html", title: "Failure Mode Diagnosis: Triaging Broken Answers", topic: "RAG Triage", anim: "Generic" },
  { n: 7, id: "benchmarking-embeddings-chunking-matrix", file: "lessons/0007-benchmarking-embeddings-chunking-matrix.html", title: "Benchmarking Embedding Models and Chunking Strategies", topic: "Matrix Benchmarks", anim: "Generic" },
  { n: 8, id: "building-automated-rag-eval-pipeline", file: "lessons/0008-building-automated-rag-eval-pipeline.html", title: "Building an Automated RAG Evaluation Pipeline", topic: "Continuous RAG Evals", anim: "Generic" }
];

/* ============================================================
   RAG Evaluation — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "triad", title: "The RAG Triad",
    terms: [
      { term: "RAG Triad", def: "The three core evaluation pillars: Context Relevance, Groundedness (Faithfulness), and Answer Relevance.", lesson: 1, tags: ["evals","rag"] },
      { term: "Context Recall", def: "The proportion of ground-truth factual statements needed to answer a query successfully captured in retrieved chunks.", lesson: 2, tags: ["retrieval","metrics"] },
      { term: "Context Precision", def: "A metric evaluating whether the most relevant document chunks are ranked at the top of retrieved results.", lesson: 2, tags: ["retrieval","ranking"] }
    ]
  },
  {
    id: "generation-metrics", title: "Generation Metrics",
    terms: [
      { term: "Faithfulness", def: "The ratio of factual claims in the generated response that can be logically inferred from retrieved context (zero hallucination).", lesson: 3, tags: ["generation","grounding"] },
      { term: "Answer Relevance", def: "A metric measuring how directly and completely the generated response addresses the user's specific query.", lesson: 3, tags: ["generation","relevance"] },
      { term: "Ragas", def: "An open-source industry standard Python library for automated RAG Triad evaluation and metric computation.", lesson: 4, tags: ["tools","evals"] }
    ]
  },
  {
    id: "synthesis-triage", title: "Synthesis & Triage",
    terms: [
      { term: "Synthetic Test Generation", def: "Using LLMs to automatically synthesize realistic questions, multi-hop tasks, and ground truths from raw docs.", lesson: 5, tags: ["datasets","synthesis"] },
      { term: "Retrieval Miss", def: "A RAG failure mode where the vector search engine fails to include supporting facts in the Top-K candidates.", lesson: 6, tags: ["debugging","retrieval"] },
      { term: "Context Dilution", def: "Flooding the prompt with excessive low-relevance chunks, which degrades model attention on the true answer.", lesson: 6, tags: ["attention","pitfalls"] }
    ]
  },
  {
    id: "benchmarks", title: "Optimization & Gates",
    terms: [
      { term: "TruLens", def: "An open-source instrumentation framework for real-time RAG Triad feedback evaluation and dashboards.", lesson: 4, tags: ["tools","observability"] },
      { term: "Matrix Benchmark", def: "A grid search experiment evaluating permutations of chunk sizes, overlaps, and embedding models empirically.", lesson: 7, tags: ["experiments","optimization"] },
      { term: "Continuous RAG Gate", def: "An automated CI checkpoint requiring Context Recall >= 0.90 and Faithfulness >= 0.95 to deploy.", lesson: 8, tags: ["ci","quality"] }
    ]
  }
];
