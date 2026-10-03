/* ============================================================
   REST APIs & JSON — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-six-guiding-constraints-of-rest", file: "lessons/0001-the-six-guiding-constraints-of-rest.html", title: "The six guiding constraints of REST", topic: "REST Architecture & Resources", anim: "Code" },
  { n: 2, id: "resource-oriented-uri-design", file: "lessons/0002-resource-oriented-uri-design.html", title: "Resource-oriented URI design", topic: "REST Architecture & Resources", anim: "Code" },
  { n: 3, id: "json-structure-types-and-serialization", file: "lessons/0003-json-structure-types-and-serialization.html", title: "JSON structure, types, and serialization", topic: "JSON & Data Representations", anim: "Code" },
  { n: 4, id: "crud-operations-and-http-verb-mapping", file: "lessons/0004-crud-operations-and-http-verb-mapping.html", title: "CRUD operations and HTTP verb mapping", topic: "JSON & Data Representations", anim: "Code" },
  { n: 5, id: "error-handling-and-problem-details", file: "lessons/0005-error-handling-and-problem-details.html", title: "Error handling and Problem Details", topic: "API Design Patterns & Errors", anim: "Code" },
  { n: 6, id: "pagination-filtering-and-sorting", file: "lessons/0006-pagination-filtering-and-sorting.html", title: "Pagination, filtering, and sorting", topic: "API Design Patterns & Errors", anim: "Code" },
  { n: 7, id: "api-versioning-strategies", file: "lessons/0007-api-versioning-strategies.html", title: "API versioning strategies", topic: "Evolution & Documentation", anim: "Code" },
  { n: 8, id: "documenting-apis-with-openapi", file: "lessons/0008-documenting-apis-with-openapi.html", title: "Documenting APIs with OpenAPI", topic: "Evolution & Documentation", anim: "Code" }
];

/* ============================================================
   REST APIs & JSON — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "rest-foundations", title: "REST Architecture & Resources",
    terms: [
      { term: "REST", def: "Representational State Transfer: an architectural style for distributed hypermedia systems based on resource abstractions.", lesson: 1, tags: ["architecture"] },
      { term: "Resource", def: "Any named concept that can be identified, addressed, and manipulated via a URI (e.g. user, order, invoice).", lesson: 1, tags: ["resources"] },
      { term: "Uniform interface", def: "The core REST constraint mandating standardized resource identification, representations, and self-descriptive messages.", lesson: 1, tags: ["architecture"] },
      { term: "Collection URI", def: "A pluralized endpoint representing a set of resources (e.g. /api/users).", lesson: 2, tags: ["uri"] }
    ]
  },
  {
    id: "json-data", title: "JSON & Data Representations",
    terms: [
      { term: "JSON", def: "JavaScript Object Notation: a lightweight, text-based, language-independent data interchange format.", lesson: 3, tags: ["json"] },
      { term: "Serialization", def: "The process of converting in-memory data structures into a string format (like JSON) for storage or transmission.", lesson: 3, tags: ["data"] },
      { term: "application/json", def: "The standard IANA MIME media type declaring that an HTTP payload contains JSON formatted text.", lesson: 3, tags: ["mime"] },
      { term: "Idempotency key", def: "A unique client-generated token attached to POST requests allowing safe deduplication and retries.", lesson: 4, tags: ["api"] }
    ]
  },
  {
    id: "api-patterns", title: "API Design Patterns & Errors",
    terms: [
      { term: "Problem Details", def: "RFC 7807 / 9457 standard JSON format providing structured machine-readable error details.", lesson: 5, tags: ["errors"] },
      { term: "Cursor pagination", def: "A pagination technique using an opaque pointer to a record rather than an offset index for stable querying.", lesson: 6, tags: ["pagination"] },
      { term: "Rate limiting", def: "A server policy restricting the number of API requests a client can make within a specified time window.", lesson: 6, tags: ["security"] },
      { term: "Sub-resource", def: "A resource existing only within the context of a parent resource (e.g. /users/1/orders).", lesson: 2, tags: ["uri"] }
    ]
  },
  {
    id: "versioning-docs", title: "Evolution & Documentation",
    terms: [
      { term: "API versioning", def: "The practice of managing non-backwards-compatible changes to an API contract across service updates.", lesson: 7, tags: ["evolution"] },
      { term: "Breaking change", def: "A modification to an API endpoint, field, or behavior that breaks existing client integrations.", lesson: 7, tags: ["design"] },
      { term: "OpenAPI", def: "A standardized, vendor-neutral specification format for describing and documenting RESTful APIs.", lesson: 8, tags: ["docs"] },
      { term: "HATEOAS", def: "Hypermedia as the Engine of Application State: a REST constraint where clients navigate APIs via hypermedia links.", lesson: 8, tags: ["rest"] }
    ]
  }
];
