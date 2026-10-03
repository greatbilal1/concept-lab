/* ============================================================
   Retrieval-Augmented Generation (RAG) — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-llms-need-external-knowledge", file: "lessons/0001-why-llms-need-external-knowledge.html", title: "Why LLMs Need External Knowledge: Hallucinations and Knowledge Cutoffs", topic: "Knowledge Limits", anim: "Generic" },
  { n: 2, id: "rag-pipeline-architecture", file: "lessons/0002-rag-pipeline-architecture.html", title: "The RAG Pipeline Architecture: Ingest, Embed, Retrieve, Generate", topic: "Pipeline Architecture", anim: "Generic" },
  { n: 3, id: "document-parsing-and-chunking", file: "lessons/0003-document-parsing-and-chunking.html", title: "Document Parsing and Chunking Strategies", topic: "Chunking Strategies", anim: "Generic" },
  { n: 4, id: "chunk-overlap-and-metadata-tagging", file: "lessons/0004-chunk-overlap-and-metadata-tagging.html", title: "Chunk Overlap and Metadata Tagging", topic: "Chunk Enrichment", anim: "Generic" },
  { n: 5, id: "retrieving-top-k-chunks", file: "lessons/0005-retrieving-top-k-chunks.html", title: "Retrieving the Top-K Chunks with Vector Similarity", topic: "Vector Retrieval", anim: "Generic" },
  { n: 6, id: "prompt-construction-grounding-context", file: "lessons/0006-prompt-construction-grounding-context.html", title: "Prompt Construction: Grounding the Model in Retrieved Context", topic: "Grounding Prompts", anim: "Generic" },
  { n: 7, id: "citation-and-source-attribution", file: "lessons/0007-citation-and-source-attribution.html", title: "Citation and Source Attribution in Generated Answers", topic: "Citations", anim: "Generic" },
  { n: 8, id: "common-rag-failure-modes", file: "lessons/0008-common-rag-failure-modes.html", title: "Common RAG Failure Modes: Irrelevant Retrieval and Lost Context", topic: "RAG Triage", anim: "Generic" }
];

/* ============================================================
   Retrieval-Augmented Generation (RAG) — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "fundamentals", title: "RAG Fundamentals",
    terms: [
      { term: "RAG", def: "Retrieval-Augmented Generation — augmenting LLM prompts with relevant external documents retrieved from a database.", lesson: 1, tags: ["rag","architecture"] },
      { term: "Parametric Memory", def: "Factual knowledge encoded directly into the neural network weights during pre-training.", lesson: 1, tags: ["ai","memory"] },
      { term: "Knowledge Cutoff", def: "The chronological date when a model's pre-training dataset ended, after which it has zero knowledge.", lesson: 1, tags: ["models","limits"] }
    ]
  },
  {
    id: "pipeline", title: "Pipeline & Chunking",
    terms: [
      { term: "Ingestion Pipeline", def: "The offline workflow that parses, chunks, embeds, and indexes documents into a vector database.", lesson: 2, tags: ["data","pipeline"] },
      { term: "Recursive Splitting", def: "A chunking algorithm that splits on a prioritized hierarchy of natural boundaries (\n\n, \n, period).", lesson: 3, tags: ["chunking","nlp"] },
      { term: "Chunk Overlap", def: "Repeating a small percentage (10-20%) of text across adjacent chunks to preserve boundary context.", lesson: 4, tags: ["chunking","context"] }
    ]
  },
  {
    id: "retrieval", title: "Retrieval & Grounding",
    terms: [
      { term: "Top-K Retrieval", def: "Retrieving the K nearest neighbor document chunks with the highest vector similarity scores.", lesson: 5, tags: ["retrieval","search"] },
      { term: "Grounding Directive", def: "A strict system prompt instruction requiring the model to answer using only provided context documents.", lesson: 6, tags: ["prompting","safety"] },
      { term: "Source Attribution", def: "Inline citations linking generated statements directly to verifiable source document IDs and pages.", lesson: 7, tags: ["citations","auditability"] }
    ]
  },
  {
    id: "triage", title: "Search & Triage",
    terms: [
      { term: "Hybrid Search", def: "Combining sparse lexical keyword search (BM25) with dense semantic vector search for balanced retrieval.", lesson: 8, tags: ["search","hybrid"] },
      { term: "Retrieval Failure", def: "A RAG defect where the vector database fails to include the correct supporting documents in Top-K.", lesson: 8, tags: ["debugging","rag"] },
      { term: "Generation Failure", def: "A RAG defect where the model receives the correct chunks but misinterprets or ignores them.", lesson: 8, tags: ["debugging","rag"] }
    ]
  }
];
