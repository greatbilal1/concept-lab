/* ============================================================
   Indexes & Database Performance — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "how-databases-search-without-indexes", file: "lessons/0001-how-databases-search-without-indexes.html", title: "How databases search without indexes", topic: "B-Trees & Scan Types", anim: "Pulse" },
  { n: 2, id: "anatomy-of-a-b-tree-index", file: "lessons/0002-anatomy-of-a-b-tree-index.html", title: "Anatomy of a B-tree index", topic: "B-Trees & Scan Types", anim: "Pulse" },
  { n: 3, id: "the-query-planner-cost-and-statistics", file: "lessons/0003-the-query-planner-cost-and-statistics.html", title: "The query planner: cost and statistics", topic: "Query Plans & Execution", anim: "Pulse" },
  { n: 4, id: "reading-query-plans-with-explain-analyze", file: "lessons/0004-reading-query-plans-with-explain-analyze.html", title: "Reading query plans with EXPLAIN ANALYZE", topic: "Query Plans & Execution", anim: "Pulse" },
  { n: 5, id: "composite-indexes-and-the-leftmost-prefix-rule", file: "lessons/0005-composite-indexes-and-the-leftmost-prefix-rule.html", title: "Composite indexes and the leftmost prefix rule", topic: "Composite Indexes & Sizing", anim: "Pulse" },
  { n: 6, id: "partial-indexes-and-covering-indexes", file: "lessons/0006-partial-indexes-and-covering-indexes.html", title: "Partial indexes and covering indexes", topic: "Composite Indexes & Sizing", anim: "Pulse" },
  { n: 7, id: "specialized-indexes-gin-gist-and-brin", file: "lessons/0007-specialized-indexes-gin-gist-and-brin.html", title: "Specialized indexes: GIN, GiST, and BRIN", topic: "Specialized Indexes & Maintenance", anim: "Pulse" },
  { n: 8, id: "the-write-penalty-and-index-maintenance", file: "lessons/0008-the-write-penalty-and-index-maintenance.html", title: "The write penalty and index maintenance", topic: "Specialized Indexes & Maintenance", anim: "Pulse" }
];

/* ============================================================
   Indexes & Database Performance — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "index-foundations", title: "B-Trees & Scan Types",
    terms: [
      { term: "Index", def: "A separate physical data structure (usually a B-tree) enabling fast logarithmic lookup of rows.", lesson: 1, tags: ["indexing"] },
      { term: "B-tree", def: "Balanced Tree: a self-balancing search tree data structure maintaining sorted data for logarithmic seeks.", lesson: 2, tags: ["b-tree"] },
      { term: "Sequential scan", def: "A scan operation reading every database page and row in table storage from start to finish.", lesson: 1, tags: ["scans"] },
      { term: "Index scan", def: "A two-phase scan traversing a B-tree to find pointers, then fetching corresponding rows from the table heap.", lesson: 1, tags: ["scans"] }
    ]
  },
  {
    id: "query-plans", title: "Query Plans & Execution",
    terms: [
      { term: "EXPLAIN", def: "An SQL command displaying the physical execution plan chosen by the query optimizer without executing it.", lesson: 3, tags: ["explain"] },
      { term: "EXPLAIN ANALYZE", def: "An SQL command that actually executes the query and reports true runtime measurements alongside estimates.", lesson: 4, tags: ["explain"] },
      { term: "Cost estimate", def: "The query planner's arbitrary unit calculating anticipated disk I/O and CPU work for a plan node.", lesson: 3, tags: ["optimizer"] },
      { term: "Index-only scan", def: "A high-speed scan satisfying a query entirely from index leaf nodes without touching table heap pages.", lesson: 4, tags: ["scans"] }
    ]
  },
  {
    id: "composite-indexes", title: "Composite Indexes & Sizing",
    terms: [
      { term: "Composite index", def: "An index created across multiple columns in a specified left-to-right order.", lesson: 5, tags: ["indexing"] },
      { term: "Leftmost prefix rule", def: "The rule mandating that queries must filter by leading composite index columns to utilize the index.", lesson: 5, tags: ["b-tree"] },
      { term: "Covering index", def: "An index containing all columns requested by a query (often using INCLUDE), enabling index-only scans.", lesson: 6, tags: ["indexing"] },
      { term: "Partial index", def: "An index built over a subset of rows filtered by a WHERE clause (e.g. WHERE status = 'pending').", lesson: 6, tags: ["indexing"] }
    ]
  },
  {
    id: "maintenance-costs", title: "Specialized Indexes & Maintenance",
    terms: [
      { term: "GIN index", def: "Generalized Inverted Index: an index format optimized for arrays, full-text search, and JSONB documents.", lesson: 7, tags: ["postgres"] },
      { term: "Write penalty", def: "The CPU and disk I/O overhead imposed on INSERT, UPDATE, and DELETE operations to update indexes.", lesson: 8, tags: ["performance"] },
      { term: "VACUUM", def: "A PostgreSQL maintenance process reclaiming storage occupied by dead row tuples created by updates/deletes.", lesson: 8, tags: ["maintenance"] },
      { term: "Index bloat", def: "Unusable empty space inside index leaf pages caused by frequent updates, degrading scan performance.", lesson: 8, tags: ["maintenance"] }
    ]
  }
];
