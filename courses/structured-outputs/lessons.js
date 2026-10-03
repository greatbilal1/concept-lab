/* ============================================================
   Structured Outputs & JSON — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-free-form-text-breaks-software", file: "lessons/0001-why-free-form-text-breaks-software.html", title: "Why Free-Form Text Breaks Downstream Software", topic: "Software Integration", anim: "Generic" },
  { n: 2, id: "json-mode-vs-constrained-decoding", file: "lessons/0002-json-mode-vs-constrained-decoding.html", title: "JSON Mode vs Constrained Decoding (Grammar Sampling)", topic: "Constrained Decoding", anim: "Generic" },
  { n: 3, id: "defining-strict-schemas-pydantic-zod", file: "lessons/0003-defining-strict-schemas-pydantic-zod.html", title: "Defining Strict Schemas with JSON Schema and Pydantic/Zod", topic: "Schema Authoring", anim: "Generic" },
  { n: 4, id: "extracting-data-unstructured-text", file: "lessons/0004-extracting-data-unstructured-text.html", title: "Extracting Structured Data from Unstructured Text", topic: "Information Extraction", anim: "Generic" },
  { n: 5, id: "handling-missing-fields-nulls", file: "lessons/0005-handling-missing-fields-nulls.html", title: "Handling Missing Fields, Nulls, and Schema Mismatches", topic: "Missing Data", anim: "Generic" },
  { n: 6, id: "json-repair-loop-self-correction", file: "lessons/0006-json-repair-loop-self-correction.html", title: "The JSON Repair Loop: Self-Correction with Error Feedback", topic: "Self-Correction", anim: "Generic" },
  { n: 7, id: "nested-objects-arrays-enums", file: "lessons/0007-nested-objects-arrays-enums.html", title: "Nested Objects, Arrays, and Enums in Output Schemas", topic: "Complex Schemas", anim: "Generic" },
  { n: 8, id: "production-schema-migration-compatibility", file: "lessons/0008-production-schema-migration-compatibility.html", title: "Production Schema Migration and Backward Compatibility", topic: "Schema Evolution", anim: "Generic" }
];

/* ============================================================
   Structured Outputs & JSON — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "integration", title: "Integration & Chaos",
    terms: [
      { term: "Structured Output", def: "Model output constrained strictly to a machine-readable, deterministic schema (JSON) with zero free-form chatter.", lesson: 1, tags: ["structured","json"] },
      { term: "Conversational Pollution", def: "Unsolicited introductory text ('Sure, here is your data:') that breaks downstream programmatic JSON decoders.", lesson: 1, tags: ["json","pitfalls"] },
      { term: "Data Contract", def: "An unambiguous formal agreement specifying data shapes, keys, types, and constraints across software boundaries.", lesson: 1, tags: ["architecture","contracts"] }
    ]
  },
  {
    id: "decoding", title: "Constrained Decoding",
    terms: [
      { term: "Constrained Decoding", def: "An inference algorithm that dynamically masks vocabulary logits to guarantee 100% adherence to Context-Free Grammars.", lesson: 2, tags: ["decoding","grammars"] },
      { term: "JSON Mode", def: "A semi-constrained generation mode guaranteeing syntactically valid JSON without enforcing specific keys or datatypes.", lesson: 2, tags: ["api","json"] },
      { term: "Grammar Masking", def: "Setting the logits of all tokens that would violate the schema grammar to -infinity before sampling.", lesson: 2, tags: ["math","sampling"] }
    ]
  },
  {
    id: "authoring", title: "Schema Authoring",
    terms: [
      { term: "Pydantic v2", def: "The leading Python data validation library that compiles typed classes directly into standard JSON Schema specifications.", lesson: 3, tags: ["pydantic","python"] },
      { term: "Zod", def: "The standard TypeScript-first schema declaration and validation library used for structured outputs in Node.js.", lesson: 3, tags: ["typescript","zod"] },
      { term: "Field Description", def: "Metadata attached to a schema property that functions as a micro-prompt guiding the model during generation.", lesson: 3, tags: ["prompting","schemas"] }
    ]
  },
  {
    id: "resilience", title: "Resilience & Evolution",
    terms: [
      { term: "JSON Repair Loop", def: "An automated self-healing retry pattern feeding schema validation errors back to the model for correction.", lesson: 6, tags: ["resilience","json"] },
      { term: "Defensive Nullability", def: "Declaring fields as optional (T | None) to give models permission to return null rather than hallucinating fake data.", lesson: 5, tags: ["schemas","safety"] },
      { term: "Additive Default Rule", def: "The migration rule requiring new schema fields to provide default values to maintain backward compatibility.", lesson: 8, tags: ["migrations","architecture"] }
    ]
  }
];
