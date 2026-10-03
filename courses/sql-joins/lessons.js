/* ============================================================
   SQL Joins & Query Thinking — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-mechanics-of-an-inner-join", file: "lessons/0001-the-mechanics-of-an-inner-join.html", title: "The mechanics of an inner join", topic: "Join Mechanics & Sets", anim: "Link" },
  { n: 2, id: "inner-joins-versus-outer-joins", file: "lessons/0002-inner-joins-versus-outer-joins.html", title: "Inner joins versus outer joins", topic: "Outer Joins & Missing Data", anim: "Link" },
  { n: 3, id: "full-outer-joins-and-anti-joins", file: "lessons/0003-full-outer-joins-and-anti-joins.html", title: "Full outer joins and anti-joins", topic: "Outer Joins & Missing Data", anim: "Link" },
  { n: 4, id: "subqueries-in-select-from-and-where", file: "lessons/0004-subqueries-in-select-from-and-where.html", title: "Subqueries in SELECT, FROM, and WHERE", topic: "Subqueries & CTEs", anim: "Link" },
  { n: 5, id: "subqueries-and-common-table-expressions-ctes", file: "lessons/0005-subqueries-and-common-table-expressions-ctes.html", title: "Common Table Expressions (CTEs)", topic: "Subqueries & CTEs", anim: "Link" },
  { n: 6, id: "self-joins-and-hierarchical-trees", file: "lessons/0006-self-joins-and-hierarchical-trees.html", title: "Self-joins and hierarchical trees", topic: "Subqueries & CTEs", anim: "Link" },
  { n: 7, id: "set-operations-union-intersect-except", file: "lessons/0007-set-operations-union-intersect-except.html", title: "Set operations: UNION, INTERSECT, EXCEPT", topic: "Advanced Joins & Windows", anim: "Link" },
  { n: 8, id: "window-functions-and-analytical-queries", file: "lessons/0008-window-functions-and-analytical-queries.html", title: "Window functions and analytical queries", topic: "Advanced Joins & Windows", anim: "Link" }
];

/* ============================================================
   SQL Joins & Query Thinking — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "join-mechanics", title: "Join Mechanics & Sets",
    terms: [
      { term: "INNER JOIN", def: "A join returning only rows where the join predicate evaluates to true in both participating tables.", lesson: 1, tags: ["joins"] },
      { term: "Cross join", def: "A cartesian product (CROSS JOIN) pairing every row in table A with every row in table B.", lesson: 1, tags: ["joins"] },
      { term: "Join predicate", def: "The ON condition specifying the matching criteria between columns of joined tables.", lesson: 1, tags: ["joins"] },
      { term: "Equi-join", def: "A join using an equality comparison (=) in its join predicate.", lesson: 1, tags: ["joins"] }
    ]
  },
  {
    id: "outer-joins", title: "Outer Joins & Missing Data",
    terms: [
      { term: "LEFT JOIN", def: "An outer join returning all rows from the left table, populated with NULLs if the right table has no match.", lesson: 2, tags: ["joins"] },
      { term: "RIGHT JOIN", def: "An outer join returning all rows from the right table, populated with NULLs for unmatched left records.", lesson: 2, tags: ["joins"] },
      { term: "FULL OUTER JOIN", def: "A join returning all rows from both tables, matching where possible and inserting NULLs where no match exists.", lesson: 3, tags: ["joins"] },
      { term: "Anti-join", def: "A query pattern (LEFT JOIN ... WHERE right.id IS NULL) finding records that have NO matching relation.", lesson: 3, tags: ["patterns"] }
    ]
  },
  {
    id: "subqueries-ctes", title: "Subqueries, CTEs & Self-Joins",
    terms: [
      { term: "CTE", def: "Common Table Expression (WITH clause): a named temporary result set defined within the scope of a single query.", lesson: 5, tags: ["cte"] },
      { term: "Correlated subquery", def: "A subquery referencing columns from the outer query, evaluated once for every candidate row.", lesson: 4, tags: ["subqueries"] },
      { term: "Self-join", def: "A join where a table is joined with itself using distinct table aliases to model parent-child links.", lesson: 6, tags: ["joins"] },
      { term: "Recursive CTE", def: "A CTE that references its own output to traverse hierarchical or tree-structured data of arbitrary depth.", lesson: 6, tags: ["cte"] }
    ]
  },
  {
    id: "window-functions", title: "Window Functions & Analytics",
    terms: [
      { term: "Window function", def: "A calculation function performing operations across a set of rows related to the current row without collapsing rows.", lesson: 8, tags: ["window"] },
      { term: "PARTITION BY", def: "The clause dividing rows into distinct groups for window function evaluation.", lesson: 8, tags: ["window"] },
      { term: "OVER clause", def: "The clause defining the window partitioning and ordering for an analytical window function.", lesson: 8, tags: ["window"] },
      { term: "ROW_NUMBER", def: "A window function assigning a unique sequential integer to each row within a partition.", lesson: 8, tags: ["window"] }
    ]
  }
];
