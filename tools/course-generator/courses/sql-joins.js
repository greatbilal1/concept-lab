"use strict";

module.exports = {
  id: "sql-joins",
  title: "SQL Joins & Query Thinking",
  num: 33,
  emoji: "🔗",
  desc: "Inner, left, right and full joins, aggregation and subqueries — combining tables without losing rows.",
  mission: `# Mission — SQL Joins & Query Thinking

## Why this course exists

The true power of relational databases lies in joining tables. When schemas are normalized into separate entities, answering business questions requires reconnecting those entities on the fly. Yet many developers struggle with joins: using INNER JOIN and accidentally dropping customers who have no orders, creating accidental cartesian products that duplicate data, or getting lost in nested subqueries. This course turns SQL join thinking into a visual, predictable set-theoretic discipline.

## What the learner can do at the end

- Choose accurately between INNER, LEFT, RIGHT, and FULL OUTER joins based on data requirements.
- Prevent accidental cartesian explosion (cross joins) caused by missing or incomplete join conditions.
- Write self-joins to model hierarchical data (manager-employee, parent-child categories).
- Compose subqueries, Common Table Expressions (CTEs), and recursive queries cleanly.
- Use window functions (ROW_NUMBER, RANK, SUM OVER) to compute running totals and rankings without collapsing rows.

## What this course is NOT

- Not a basic SQL intro (covered in SQL & Relational Databases).
- Not a physical storage engine course. It focuses on query semantics and logic.

## Success looks like

When tasked with generating a complex report combining four normalized tables with optional relationships and running totals, the learner writes a clean, single-pass SQL query using LEFT JOINs and CTEs in under ten minutes without losing rows.
`,
  notes: `# Notes — SQL Joins & Query Thinking

## Decisions
- Group into four themes: Join Mechanics & Sets, Outer Joins & Missing Data, Subqueries & CTEs, and Advanced Joins & Windows.
- Use Venn diagram set theory visualizations to clarify join boundaries.
`,
  resources: `# Resources — SQL Joins & Query Thinking

## Knowledge (primary sources)
- *SQL Queries for Mere Mortals* by John L. Viescas and Michael J. Hernandez.
- *SQL Antipatterns* by Bill Karwin.
- PostgreSQL Documentation: *Queries — Table Expressions and Joins*.

## Wisdom
- Think in sets, not loops. A JOIN is not a nested for-loop; it is a mathematical set intersection or union.
`,
  cheatsheetSections: [
    {
      title: "Join Type Matrix",
      label: "Visualizing set intersections",
      code: `-- INNER JOIN: Intersection only (both sides must match)
SELECT * FROM users u INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: All users + matching orders (or NULLs if no orders)
SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id;

-- FULL OUTER JOIN: All users + all orders (matched where possible)
SELECT * FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id;`,
      lessonN: 2,
      lessonSlug: "inner-joins-versus-outer-joins",
      lessonTitle: "Inner joins versus outer joins"
    },
    {
      title: "Common Table Expressions (CTEs)",
      label: "Readable multi-step queries",
      code: `WITH monthly_sales AS (
  SELECT user_id, SUM(amount) AS total_spent
  FROM orders
  WHERE order_date >= '2026-01-01'
  GROUP BY user_id
)
SELECT u.name, COALESCE(ms.total_spent, 0) AS revenue
FROM users u
LEFT JOIN monthly_sales ms ON u.id = ms.user_id
ORDER BY revenue DESC;`,
      lessonN: 5,
      lessonSlug: "subqueries-and-common-table-expressions-ctes",
      lessonTitle: "Subqueries and Common Table Expressions (CTEs)"
    },
    {
      title: "Self-Joins & Hierarchies",
      label: "Joining a table to itself",
      code: `-- Find each employee and their direct manager
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,
      lessonN: 6,
      lessonSlug: "self-joins-and-hierarchical-trees",
      lessonTitle: "Self-joins and hierarchical trees"
    },
    {
      title: "Window Functions",
      label: "Analytics without collapsing rows",
      code: `SELECT id, user_id, amount,
  -- Running total per user
  SUM(amount) OVER (PARTITION BY user_id ORDER BY order_date) AS running_total,
  -- Order ranking per user
  ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY amount DESC) AS spending_rank
FROM orders;`,
      lessonN: 8,
      lessonSlug: "window-functions-and-analytical-queries",
      lessonTitle: "Window functions and analytical queries"
    }
  ],
  glossaryGroups: [
    {
      id: "join-mechanics",
      title: "Join Mechanics & Sets",
      terms: [
        { term: "INNER JOIN", def: "A join returning only rows where the join predicate evaluates to true in both participating tables.", lesson: 1, tags: ["joins"] },
        { term: "Cross join", def: "A cartesian product (CROSS JOIN) pairing every row in table A with every row in table B.", lesson: 1, tags: ["joins"] },
        { term: "Join predicate", def: "The ON condition specifying the matching criteria between columns of joined tables.", lesson: 1, tags: ["joins"] },
        { term: "Equi-join", def: "A join using an equality comparison (=) in its join predicate.", lesson: 1, tags: ["joins"] }
      ]
    },
    {
      id: "outer-joins",
      title: "Outer Joins & Missing Data",
      terms: [
        { term: "LEFT JOIN", def: "An outer join returning all rows from the left table, populated with NULLs if the right table has no match.", lesson: 2, tags: ["joins"] },
        { term: "RIGHT JOIN", def: "An outer join returning all rows from the right table, populated with NULLs for unmatched left records.", lesson: 2, tags: ["joins"] },
        { term: "FULL OUTER JOIN", def: "A join returning all rows from both tables, matching where possible and inserting NULLs where no match exists.", lesson: 3, tags: ["joins"] },
        { term: "Anti-join", def: "A query pattern (LEFT JOIN ... WHERE right.id IS NULL) finding records that have NO matching relation.", lesson: 3, tags: ["patterns"] }
      ]
    },
    {
      id: "subqueries-ctes",
      title: "Subqueries, CTEs & Self-Joins",
      terms: [
        { term: "CTE", def: "Common Table Expression (WITH clause): a named temporary result set defined within the scope of a single query.", lesson: 5, tags: ["cte"] },
        { term: "Correlated subquery", def: "A subquery referencing columns from the outer query, evaluated once for every candidate row.", lesson: 4, tags: ["subqueries"] },
        { term: "Self-join", def: "A join where a table is joined with itself using distinct table aliases to model parent-child links.", lesson: 6, tags: ["joins"] },
        { term: "Recursive CTE", def: "A CTE that references its own output to traverse hierarchical or tree-structured data of arbitrary depth.", lesson: 6, tags: ["cte"] }
      ]
    },
    {
      id: "window-functions",
      title: "Window Functions & Analytics",
      terms: [
        { term: "Window function", def: "A calculation function performing operations across a set of rows related to the current row without collapsing rows.", lesson: 8, tags: ["window"] },
        { term: "PARTITION BY", def: "The clause dividing rows into distinct groups for window function evaluation.", lesson: 8, tags: ["window"] },
        { term: "OVER clause", def: "The clause defining the window partitioning and ordering for an analytical window function.", lesson: 8, tags: ["window"] },
        { term: "ROW_NUMBER", def: "A window function assigning a unique sequential integer to each row within a partition.", lesson: 8, tags: ["window"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-mechanics-of-an-inner-join",
      title: "The mechanics of an inner join",
      topic: "Join Mechanics & Sets",
      anim: "Link",
      lede: "How do two tables become one? Discover the mathematical mechanics of INNER JOIN, matching predicates, and why missing ON clauses cause cartesian disasters.",
      winShort: "Connect related tables using INNER JOIN and explicit ON predicates",
      missionLink: "The fundamental query operation across normalized relational databases",
      sec1: {
        title: "Connecting sets by identity",
        content: `<p>In a normalized database, user information lives in <code>users</code> and order totals live in <code>orders</code>. An <b>INNER JOIN</b> connects these two tables by evaluating a <b>Join Predicate</b> (the <code>ON</code> clause): <code>users.id = orders.user_id</code>.</p><p>The mathematical rule of an INNER JOIN: <b>Only rows that have a matching partner on both sides are returned</b>. If a user has never placed an order, that user is completely excluded from the result set.</p>`,
        keyIdea: "INNER JOIN returns the intersection: rows must satisfy the ON condition in both tables."
      },
      predict: {
        q: "What happens if you accidentally omit the 'ON' clause when joining two 1,000-row tables?",
        a: [
          "A Cartesian Product (CROSS JOIN) occurs, producing 1,000,000 rows (1,000 x 1,000)!",
          "The query returns zero rows",
          "The database deletes both tables",
          "The database guesses the primary key automatically"
        ],
        c: 0,
        why: "Without an ON predicate, every row in table A pairs with every row in table B (Cartesian explosion)."
      },
      sec2: {
        title: "The INNER JOIN intersection",
        content: `<p>Visualise how the INNER JOIN extracts only the shared intersection between two tables.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Left Table: Users", lines: ["User 1 (Ada), User 2 (Bob)", "User 3 (Charlie: no orders)"] },
          { title: "ON u.id = o.user_id", lines: ["Intersection Filter", "discards User 3 (no orders)"] },
          { title: "Right Table: Orders", lines: ["Order 101 (Ada), Order 102 (Ada)", "Order 103 (Bob)"] }
        ]
      },
      sec3: {
        title: "Tracing an INNER JOIN execution",
        content: `<p>Trace how the database pairs matching rows from users and orders.</p>`,
      },
      trace: {
        code: [
          "SELECT users.name, orders.id AS order_id, orders.total",
          "FROM users",
          "INNER JOIN orders ON users.id = orders.user_id;"
        ],
        steps: [
          { line: 1, vars: { left: "scan users table" } },
          { line: 2, vars: { match_check: "evaluate users.id == orders.user_id" } },
          { line: 0, vars: { projected_rows: "Ada -> Order 101, Ada -> Order 102, Bob -> Order 103" } }
        ]
      },
      practiceIntro: "Test your memory of INNER JOIN rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The join returning only rows with matches on both sides is <0> JOIN.",
          "The clause specifying matching conditions between tables is the <1> clause.",
          "An unconstrained join pairing every row with every other row is a <2> join."
        ],
        blanks: [
          { a: ["INNER"], why: "INNER JOIN represents set intersection." },
          { a: ["ON"], why: "The ON clause provides the join predicate." },
          { a: ["cross", "cartesian"], why: "Cross joins generate cartesian products." }
        ]
      },
      win: "You can combine normalized tables using INNER JOIN with unambiguous table aliases and predicates.",
      nextTasks: [
        "Join an authors table with a books table using an INNER JOIN on author_id.",
        "Use table aliases (e.g. FROM users u JOIN orders o) to keep queries concise.",
        "Observe how users with zero orders vanish from an INNER JOIN result."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 5: 'Querying Multiple Tables'.",
      quiz: [
        {
          q: "What happens to a row in the left table if it has no matching records in the right table during an INNER JOIN?",
          a: [
            "It is completely excluded and omitted from the final query result set",
            "It is returned with NULL values in the right columns",
            "The database throws a missing key error",
            "It is duplicated five times"
          ],
          c: 0,
          why: "INNER JOIN is strictly an intersection; non-matching rows on either side are dropped."
        },
        {
          q: "Why are table aliases (e.g. FROM customers c JOIN orders o) recommended in multi-table joins?",
          a: [
            "They disambiguate column names that exist in both tables (like id or created_at) and keep queries readable",
            "They make queries execute twice as fast on the server",
            "They are required by the ANSI SQL compiler",
            "They convert strings into numbers"
          ],
          c: 0,
          why: "Aliases prevent 'column reference is ambiguous' errors when joined tables share column names."
        },
        {
          q: "What is an Equi-Join in SQL?",
          a: [
            "A join whose condition uses an equality operator (e.g. ON a.id = b.a_id)",
            "A join that returns an equal number of rows from both tables",
            "A join between two identical copies of the database",
            "A join that runs in equal time on all computers"
          ],
          c: 0,
          why: "An equi-join matches rows using the equality operator (=)."
        },
        {
          q: "What is a Cartesian product (CROSS JOIN)?",
          a: [
            "Every row in table A is paired with every row in table B, producing A_count * B_count rows",
            "A query that calculates the square root of all table numbers",
            "A join that can only be run on 3D computer graphics cards",
            "A join that deletes duplicate rows automatically"
          ],
          c: 0,
          why: "A Cartesian product pairs all combinations across tables, often caused by forgetting an ON clause."
        }
      ]
    },
    {
      n: 2,
      id: "inner-joins-versus-outer-joins",
      title: "Inner joins versus outer joins",
      topic: "Outer Joins & Missing Data",
      anim: "Link",
      lede: "Where did my customers go? Discover why INNER JOIN silently drops records, and how LEFT JOIN preserves every row from your primary table with NULL padding.",
      winShort: "Select between INNER and LEFT joins to preserve records with optional relationships",
      missionLink: "Eliminates the most common bug in business reporting queries: dropped rows",
      sec1: {
        title: "The tragedy of the dropped row",
        content: `<p>A manager asks: <i>'List all customers and their total order count.'</i> You write an <code>INNER JOIN</code>. Your query looks great, but your report shows 800 customers when the database has 1,000 customers. What happened?</p><p>The 200 new customers who have not placed an order yet were <b>silently erased from your report!</b> When relationships are optional, you must use a <b>LEFT OUTER JOIN</b>: it returns <i>all</i> rows from the left table, inserting <code>NULL</code> for the right table columns if no match exists.</p>`,
        keyIdea: "Use LEFT JOIN whenever child records are optional, ensuring parent rows are never dropped."
      },
      predict: {
        q: "What appears in the 'orders.id' column for a customer with zero orders in a LEFT JOIN?",
        a: [
          "NULL",
          "The number 0",
          "An empty text string ''",
          "The query throws an unhandled exception"
        ],
        c: 0,
        why: "When a LEFT JOIN finds no matching child record, it pads all right-side columns with NULL."
      },
      sec2: {
        title: "INNER JOIN versus LEFT JOIN",
        content: `<p>Contrast the strict intersection of INNER JOIN with the inclusive preservation of LEFT JOIN.</p>`,
      },
      diagram: {
        boxes: [
          { title: "INNER JOIN", lines: ["Only users WITH orders", "Users with 0 orders dropped!"] },
          { title: "LEFT JOIN", lines: ["ALL users preserved", "users without orders get NULL on order columns"] },
          { title: "Reporting Rule", lines: ["Always LEFT JOIN when counting:", "COUNT(orders.id) yields 0 instead of dropping!"] }
        ]
      },
      sec3: {
        title: "Tracing LEFT JOIN row preservation",
        content: `<p>Trace how a LEFT JOIN keeps all three users while correctly displaying NULL for user 3.</p>`,
      },
      trace: {
        code: [
          "SELECT u.name, o.id AS order_id",
          "FROM users u",
          "LEFT JOIN orders o ON u.id = o.user_id;"
        ],
        steps: [
          { line: 0, vars: { target: "fetch all users, optional orders" } },
          { line: 1, vars: { left_table: "users u (all rows preserved)" } },
          { line: 2, vars: { result: "Ada -> Order 101, Bob -> Order 102, Charlie -> NULL" } }
        ]
      },
      practiceIntro: "Test your memory of outer joins.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The join that preserves all rows from the left table is <0> JOIN.",
          "When a LEFT JOIN finds no match, it fills missing columns with <1>.",
          "To count child items without counting NULLs, use COUNT(o.<2>)."
        ],
        blanks: [
          { a: ["LEFT", "LEFT OUTER"], why: "LEFT JOIN preserves all left-side rows." },
          { a: ["NULL"], why: "Missing joined values are padded with NULL." },
          { a: ["id"], why: "COUNT(column) skips NULLs; COUNT(*) would count 1 row." }
        ]
      },
      win: "You can write comprehensive reports using LEFT JOIN that accurately preserve parent records with zero child activity.",
      nextTasks: [
        "Generate a customer order report using LEFT JOIN and COUNT(orders.id).",
        "Observe how COUNT(*) reports 1 order for a customer with 0 orders due to the NULL row.",
        "Fix the count by switching to COUNT(orders.id) to report 0."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 10: 'Outer Joins'.",
      quiz: [
        {
          q: "Why does 'SELECT u.name, COUNT(*) FROM users u LEFT JOIN orders o ON ... GROUP BY u.name' report 1 order for users with zero orders?",
          a: [
            "COUNT(*) counts the single preserved user row containing NULL order columns; use COUNT(o.id) instead",
            "Because SQL adds 1 to all counts automatically",
            "Because LEFT JOIN duplicates all rows",
            "Because zero is not a valid number in SQL"
          ],
          c: 0,
          why: "COUNT(*) counts rows in the group (which is 1 row with NULLs); COUNT(o.id) skips NULL and returns 0."
        },
        {
          q: "When should you choose a LEFT JOIN over an INNER JOIN?",
          a: [
            "Whenever you want to retain all rows from the primary table even if they have no matching child records",
            "Whenever you want the query to run faster on the CPU",
            "Only when joining tables that have identical column names",
            "Only on Friday afternoon deploys"
          ],
          c: 0,
          why: "LEFT JOIN is mandatory whenever the relationship is optional (e.g. users who might have 0 orders)."
        },
        {
          q: "What is the difference between LEFT JOIN and RIGHT JOIN?",
          a: [
            "LEFT JOIN preserves all rows from the first table; RIGHT JOIN preserves all rows from the second table",
            "LEFT JOIN works on numbers; RIGHT JOIN works on text",
            "RIGHT JOIN is faster because computers read from right to left",
            "There is no difference between them"
          ],
          c: 0,
          why: "RIGHT JOIN is simply the mirror image of LEFT JOIN; most teams standardize on LEFT JOIN for readability."
        },
        {
          q: "What does the keyword 'OUTER' mean in 'LEFT OUTER JOIN'?",
          a: [
            "It is completely optional syntactic sugar; LEFT JOIN and LEFT OUTER JOIN are 100% identical in SQL",
            "It forces the query to use an external cloud database",
            "It encrypts the joined columns",
            "It sorts the results in reverse order"
          ],
          c: 0,
          why: "The word OUTER is optional noise; LEFT JOIN is identical to LEFT OUTER JOIN."
        }
      ]
    },
    {
      n: 3,
      id: "full-outer-joins-and-anti-joins",
      title: "Full outer joins and anti-joins",
      topic: "Outer Joins & Missing Data",
      anim: "Link",
      lede: "How do you find what ISN'T there? Learn the FULL OUTER JOIN for total reconciliations, and the Anti-Join pattern for finding customers who never bought anything.",
      winShort: "Find missing relationships using anti-joins and reconcile datasets with FULL OUTER JOIN",
      missionLink: "The primary pattern for auditing data discrepancies and churned users",
      sec1: {
        title: "Finding the missing pieces",
        content: `<p>A common business question is negative: <i>'Find all users who have NEVER placed an order'</i>, or <i>'Find all products that have NEVER been purchased'</i>. How do you query the absence of data?</p><p>The answer is an <b>Anti-Join</b>. You perform a <code>LEFT JOIN</code> from users to orders, and then add a <code>WHERE orders.id IS NULL</code> filter. This discards all matching customers and retains <i>only customers with zero orders</i>!</p>`,
        keyIdea: "An anti-join (LEFT JOIN ... WHERE right.id IS NULL) finds records that have zero matching children."
      },
      predict: {
        q: "What does 'SELECT u.name FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL' return?",
        a: [
          "Only users who have zero orders in the orders table",
          "All users who have at least one order",
          "Users whose order total is exactly $0.00",
          "All orders that have no users"
        ],
        c: 0,
        why: "The WHERE o.id IS NULL clause filters out users who had matches, keeping only non-buyers."
      },
      sec2: {
        title: "FULL OUTER JOIN reconciliation",
        content: `<p>A FULL OUTER JOIN returns all rows from both tables, pairing matches and inserting NULLs on both sides.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Matched Rows", lines: ["User with Order", "full data on both sides"] },
          { title: "Unmatched Left", lines: ["User with NO orders", "order columns are NULL"] },
          { title: "Unmatched Right", lines: ["Orphan Order with NO user", "user columns are NULL"] }
        ]
      },
      sec3: {
        title: "Tracing an Anti-Join audit query",
        content: `<p>Trace how the anti-join isolates inactive subscribers who have never logged in.</p>`,
      },
      trace: {
        code: [
          "SELECT u.email",
          "FROM users u",
          "LEFT JOIN logins l ON u.id = l.user_id",
          "WHERE l.id IS NULL; # Anti-join filter"
        ],
        steps: [
          { line: 1, vars: { source: "scan users table" } },
          { line: 2, vars: { left_join: "joins logins (matches get login IDs; non-matches get NULL)" } },
          { line: 3, vars: { anti_join: "keeps strictly rows where l.id is NULL -> inactive users isolated" } }
        ]
      },
      practiceIntro: "Test your memory of anti-joins and full joins.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A query that finds records with no matching relation is an <0>-join.",
          "The join preserving all rows from both participating tables is a <1> OUTER JOIN.",
          "The filter in an anti-join checks WHERE child_table.id IS <2>."
        ],
        blanks: [
          { a: ["anti"], why: "Anti-joins find the absence of relationships." },
          { a: ["FULL"], why: "FULL OUTER JOIN combines left and right outer joins." },
          { a: ["NULL"], why: "IS NULL isolates non-matching parent records." }
        ]
      },
      win: "You can write anti-joins to audit data discrepancies, find churned accounts, and perform full two-way reconciliations.",
      nextTasks: [
        "Find all registered users who have never posted a comment using an anti-join.",
        "Reconcile two accounting ledgers using a FULL OUTER JOIN.",
        "Compare an anti-join with a NOT EXISTS subquery in query plans."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 10: 'Full Outer Joins'.",
      quiz: [
        {
          q: "What does a FULL OUTER JOIN return?",
          a: [
            "All rows from both tables, matching rows where possible and inserting NULLs for unmatched rows on either side",
            "Only rows that match on both sides",
            "A Cartesian product of all rows",
            "An error on modern SQL databases"
          ],
          c: 0,
          why: "FULL OUTER JOIN combines the results of both LEFT JOIN and RIGHT JOIN in one query."
        },
        {
          q: "Why is an Anti-Join (LEFT JOIN ... WHERE right.id IS NULL) often preferred over 'WHERE id NOT IN (SELECT id ...)'?",
          a: [
            "If the subquery in NOT IN contains a single NULL value, the entire NOT IN query returns zero rows due to 3-valued logic!",
            "NOT IN only works with numbers",
            "Anti-joins use less network bandwidth",
            "NOT IN is deprecated in modern SQL"
          ],
          c: 0,
          why: "The famous 'NOT IN with NULL' trap: if the subquery returns NULL, NOT IN evaluates to UNKNOWN for all rows."
        },
        {
          q: "When would you use a FULL OUTER JOIN in real-world engineering?",
          a: [
            "Reconciling two systems (e.g. comparing local bank payments with Stripe transactions to find discrepancies on either side)",
            "Querying user passwords",
            "Deleting tables from the database",
            "Writing mobile push notifications"
          ],
          c: 0,
          why: "FULL OUTER JOIN highlights records present in A but not B, AND records in B but not A."
        },
        {
          q: "What column should be checked in the WHERE clause of an anti-join?",
          a: [
            "A NOT NULL column (such as the Primary Key) from the right-hand joined table",
            "Any column from the left-hand table",
            "A column containing text",
            "The database version number"
          ],
          c: 0,
          why: "Checking right_table.primary_key IS NULL guarantees the row lacked a match."
        }
      ]
    },
    {
      n: 4,
      id: "subqueries-in-select-from-and-where",
      title: "Subqueries in SELECT, FROM, and WHERE",
      topic: "Subqueries & CTEs",
      anim: "Link",
      lede: "A query inside a query. Learn how scalar subqueries, table-derived subqueries, and correlated subqueries allow you to solve multi-stage questions in a single query.",
      winShort: "Compose scalar, derived-table, and correlated subqueries without performance traps",
      missionLink: "Expands query thinking beyond flat single-table lookups",
      sec1: {
        title: "Queries inside queries",
        content: `<p>A <b>Subquery</b> is an SQL query nested inside another query. Depending on where it is placed, a subquery serves different roles:</p><p><b>In WHERE:</b> Filters by computed values (e.g. <code>WHERE price > (SELECT AVG(price) FROM products)</code>). <b>In FROM:</b> Acts as an on-the-fly temporary table (a <i>derived table</i>). <b>In SELECT:</b> Calculates a single scalar value per output row.</p>`,
        keyIdea: "Subqueries nest queries inside SELECT, FROM, or WHERE clauses to solve multi-step problems."
      },
      predict: {
        q: "What is a 'scalar subquery'?",
        a: [
          "A subquery that returns exactly one row and one column (a single atomic value)",
          "A subquery that scales across ten database servers",
          "A subquery that returns a million rows",
          "A query written in Python"
        ],
        c: 0,
        why: "Scalar subqueries produce a single scalar value that can be used in comparisons or SELECT expressions."
      },
      sec2: {
        title: "Subquery placement taxonomy",
        content: `<p>Understand where subqueries can appear in an SQL statement.</p>`,
      },
      diagram: {
        boxes: [
          { title: "WHERE Clause", lines: ["WHERE price > (SELECT AVG...)", "scalar comparison filter"] },
          { title: "FROM Clause (Derived)", lines: ["FROM (SELECT user_id, COUNT(*) ...) sub", "treats query output as a table"] },
          { title: "Correlated Subquery", lines: ["WHERE salary > (SELECT AVG... WHERE dept = o.dept)", "evaluates once per outer row"] }
        ]
      },
      sec3: {
        title: "Tracing a scalar subquery filter",
        content: `<p>Trace how the database calculates the average price once, then filters expensive products.</p>`,
      },
      trace: {
        code: [
          "SELECT title, price",
          "FROM products",
          "WHERE price > (SELECT AVG(price) FROM products); # Subquery evaluates to $45.00"
        ],
        steps: [
          { line: 2, vars: { subquery: "SELECT AVG(price) evaluates to 45.00" } },
          { line: 0, vars: { outer_query: "SELECT title, price WHERE price > 45.00" } },
          { line: 1, vars: { output: "returns all products with above-average price" } }
        ]
      },
      practiceIntro: "Test your memory of subquery types.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A subquery returning exactly one single value is a <0> subquery.",
          "A subquery in the FROM clause acts as a <1> table.",
          "A subquery referencing a column from the outer query is a <2> subquery."
        ],
        blanks: [
          { a: ["scalar"], why: "Scalar subqueries return a single cell value." },
          { a: ["derived"], why: "Derived tables exist in the FROM clause." },
          { a: ["correlated"], why: "Correlated subqueries depend on outer row values." }
        ]
      },
      win: "You can write nested queries to solve multi-stage questions and understand correlated subquery trade-offs.",
      nextTasks: [
        "Find all employees who earn more than the company average using a subquery in WHERE.",
        "Query a derived table in FROM using an alias: FROM (SELECT ...) AS temp.",
        "Explain why correlated subqueries can be slow on large tables."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 9: 'Subqueries'.",
      quiz: [
        {
          q: "What is the performance danger of a 'correlated subquery' on a 1-million-row table?",
          a: [
            "The subquery executes repeatedly once for every single row in the outer table (up to 1 million executions)",
            "It deletes the query cache",
            "It turns off database indexes",
            "It causes SQL syntax to become invalid"
          ],
          c: 0,
          why: "Correlated subqueries depend on outer row values, forcing row-by-row re-evaluation."
        },
        {
          q: "Must a derived table in a FROM clause be given an alias in standard SQL?",
          a: [
            "Yes, every subquery in a FROM clause must be assigned a table alias (e.g. FROM (...) AS sub)",
            "No, aliases are completely optional in FROM clauses",
            "Only if the subquery returns more than 100 rows",
            "Only on SQLite"
          ],
          c: 0,
          why: "The SQL standard mandates that all derived relations in FROM have an explicit alias."
        },
        {
          q: "What happens if a scalar subquery in SELECT returns more than one row at runtime?",
          a: [
            "The database throws a runtime error: 'subquery returned more than one row'",
            "It concatenates all the rows into a string",
            "It randomly picks the first row and continues",
            "It returns NULL"
          ],
          c: 0,
          why: "Scalar subqueries must guarantee at most one row and column; multiple rows trigger a fatal error."
        },
        {
          q: "What does the 'EXISTS' operator do with a subquery?",
          a: [
            "Returns true as soon as the subquery finds at least one matching row, short-circuiting immediately",
            "Calculates the total size of the subquery in bytes",
            "Verifies if the table exists on disk",
            "Encrypts the subquery text"
          ],
          c: 0,
          why: "EXISTS tests for the presence of rows and short-circuits as soon as the first match is found."
        }
      ]
    },
    {
      n: 5,
      id: "subqueries-and-common-table-expressions-ctes",
      title: "Common Table Expressions (CTEs)",
      topic: "Subqueries & CTEs",
      anim: "Link",
      lede: "Stop writing unreadable nested subqueries inside subqueries. Master Common Table Expressions (WITH clauses) to write modular, readable, maintainable SQL pipelines.",
      winShort: "Structure complex multi-step queries using Common Table Expressions (CTEs)",
      missionLink: "The standard tool for clean, readable, professional SQL query composition",
      sec1: {
        title: "The WITH clause revolution",
        content: `<p>When an SQL query requires multiple stages of filtering and aggregation, nesting subqueries five levels deep creates a nightmare of inside-out reading. Nobody can understand where the brackets start and end.</p><p><b>Common Table Expressions (CTEs)</b>, defined using the <code>WITH</code> keyword, allow you to define named temporary result sets at the top of your query. You read from top to bottom, like sequential variable assignments in Python or JavaScript.</p>`,
        keyIdea: "CTEs define named temporary result sets using WITH, making complex queries readable from top to bottom."
      },
      predict: {
        q: "What keyword initiates a Common Table Expression (CTE) in standard SQL?",
        a: ["WITH", "LET", "DEFINE", "TABLE"],
        c: 0,
        why: "The WITH keyword introduces one or more Common Table Expressions at the beginning of a query."
      },
      sec2: {
        title: "Nested subquery versus CTE comparison",
        content: `<p>Contrast the chaotic inside-out nesting of subqueries with the linear readability of CTEs.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Nested Subqueries (Inside-Out)", lines: ["SELECT * FROM (SELECT * FROM (SELECT...", "bracket matching nightmare", "impossible to debug or refactor"] },
          { title: "CTE Pipeline (Top-to-Bottom)", lines: ["WITH regional_sales AS (...),", "top_customers AS (...) ", "SELECT * FROM top_customers;"] }
        ]
      },
      sec3: {
        title: "Tracing a multi-stage CTE query",
        content: `<p>Trace how two chained CTEs calculate monthly totals and filter high spenders cleanly.</p>`,
      },
      trace: {
        code: [
          "WITH monthly_totals AS (",
          "    SELECT user_id, SUM(amount) AS total",
          "    FROM orders GROUP BY user_id",
          "),",
          "vip_users AS (",
          "    SELECT user_id FROM monthly_totals WHERE total >= 1000",
          ")",
          "SELECT users.name, monthly_totals.total",
          "FROM users",
          "JOIN monthly_totals ON users.id = monthly_totals.user_id",
          "WHERE users.id IN (SELECT user_id FROM vip_users);"
        ],
        steps: [
          { line: 0, vars: { cte_1: "monthly_totals computes customer sums" } },
          { line: 4, vars: { cte_2: "vip_users filters to customers with >= 1000" } },
          { line: 7, vars: { main: "main query joins users to clean named CTE blocks" } }
        ]
      },
      practiceIntro: "Test your memory of CTE syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A Common Table Expression is created with the <0> keyword.",
          "The acronym CTE stands for Common Table <1>.",
          "Multiple CTEs are separated from each other by a <2>."
        ],
        blanks: [
          { a: ["WITH"], why: "WITH introduces CTE definitions." },
          { a: ["Expression"], why: "CTE stands for Common Table Expression." },
          { a: [",", "comma"], why: "Commas separate multiple CTE declarations under a single WITH." }
        ]
      },
      win: "You can decompose complex analytical queries into modular, readable CTE pipelines that team members can maintain easily.",
      nextTasks: [
        "Refactor an unreadable nested subquery into a clean WITH clause.",
        "Chain two CTEs together where the second CTE queries the first CTE.",
        "Inspect whether your database engine materializes or inlines CTEs using EXPLAIN."
      ],
      primarySource: "PostgreSQL Documentation: *WITH Queries (Common Table Expressions)* (postgresql.org/docs/current/queries-with.html).",
      quiz: [
        {
          q: "What is the primary readability advantage of CTEs over nested subqueries?",
          a: [
            "CTEs let you read and compose query logic sequentially from top to bottom, rather than reading inside-out",
            "CTEs make queries execute on the graphics card GPU",
            "CTEs eliminate the need for primary keys",
            "CTEs automatically encrypt database backups"
          ],
          c: 0,
          why: "CTEs break complex queries into named, modular steps read in chronological order."
        },
        {
          q: "Can a CTE be referenced multiple times within the same main query?",
          a: [
            "Yes, you can join to the same CTE multiple times in the main query without repeating the subquery text",
            "No, a CTE can only be queried exactly once",
            "Only on Oracle databases",
            "Only if the CTE contains fewer than five rows"
          ],
          c: 0,
          why: "CTEs are reusable within the query scope, eliminating duplicate subquery definitions."
        },
        {
          q: "How do you define multiple CTEs in a single query?",
          a: [
            "Use a single WITH keyword at the top, and separate each named CTE with a comma: WITH cte1 AS (...), cte2 AS (...)",
            "Type the WITH keyword before every single CTE",
            "Separate CTEs with a semicolon",
            "Multiple CTEs are forbidden in SQL"
          ],
          c: 0,
          why: "A single WITH statement introduces all comma-separated CTE definitions before the main SELECT."
        },
        {
          q: "Does a CTE create a permanent table on the database disk?",
          a: [
            "No, a CTE exists only for the duration of that single query execution and is discarded immediately after",
            "Yes, it creates a physical table in the public schema",
            "Yes, unless you explicitly run DROP CTE",
            "Only if it contains more than 10,000 rows"
          ],
          c: 0,
          why: "CTEs are transient query-scoped views; they leave zero persistent footprint on disk."
        }
      ]
    },
    {
      n: 6,
      id: "self-joins-and-hierarchical-trees",
      title: "Self-joins and hierarchical trees",
      topic: "Subqueries & CTEs",
      anim: "Link",
      lede: "How do you query a table that points to itself? Master self-joins to find managers and employees, and recursive CTEs to traverse nested categories of arbitrary depth.",
      winShort: "Query hierarchical organizational charts and category trees using self-joins and recursive CTEs",
      missionLink: "Enables modeling and querying of parent-child trees and category hierarchies",
      sec1: {
        title: "A table that references itself",
        content: `<p>In an organization, managers are also employees. In an e-commerce catalog, parent categories contain child categories. Instead of creating two identical tables, relational design uses a <b>self-referential foreign key</b>: <code>employees.manager_id</code> references <code>employees.id</code>.</p><p>To query employee and manager names together, you perform a <b>Self-Join</b>: joining the <code>employees</code> table to itself using two distinct aliases (<code>employees e LEFT JOIN employees m ON e.manager_id = m.id</code>).</p>`,
        keyIdea: "A self-join pairs a table with itself using distinct aliases to model parent-child hierarchies."
      },
      predict: {
        q: "Why MUST you use distinct table aliases (like 'e' and 'm') when performing a self-join?",
        a: [
          "The database engine needs to distinguish which instance of the table you are referencing in the ON and SELECT clauses",
          "SQL keywords must be abbreviated to one letter",
          "Aliases are required to enable database encryption",
          "Without aliases, all employee records are deleted"
        ],
        c: 0,
        why: "Aliases differentiate the two logical roles (employee vs manager) of the same physical table."
      },
      sec2: {
        title: "Self-join architecture",
        content: `<p>Observe how two logical roles are extracted from a single physical table.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Physical Table: employees", lines: ["id, name, manager_id", "Ada (id 1, mgr null), Bob (id 2, mgr 1)"] },
          { title: "Alias e (Employee)", lines: ["reads subordinate employee row", "e.name = 'Bob'"] },
          { title: "Alias m (Manager)", lines: ["reads supervisor row", "m.name = 'Ada'"] }
        ]
      },
      sec3: {
        title: "Tracing a recursive CTE category tree",
        content: `<p>Trace how a recursive CTE traverses a category tree from root down to leaf products.</p>`,
      },
      trace: {
        code: [
          "WITH RECURSIVE category_tree AS (",
          "    # Anchor member: select root category (Electronics)",
          "    SELECT id, name, parent_id, 1 AS depth FROM categories WHERE parent_id IS NULL",
          "    UNION ALL",
          "    # Recursive member: join children to previous level",
          "    SELECT c.id, c.name, c.parent_id, ct.depth + 1",
          "    FROM categories c JOIN category_tree ct ON c.parent_id = ct.id",
          ")",
          "SELECT * FROM category_tree;"
        ],
        steps: [
          { line: 2, vars: { level_1: "Electronics (depth 1)" } },
          { line: 5, vars: { level_2: "Computers, Audio (depth 2)" } },
          { line: 5, vars: { level_3: "Laptops, Accessories (depth 3)" } },
          { line: 7, vars: { output: "complete tree returned in hierarchical depth order" } }
        ]
      },
      practiceIntro: "Test your memory of self-joins and recursive queries.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Joining a table to itself using two aliases is a <0>-join.",
          "The keyword enabling a CTE to traverse hierarchical trees is WITH <1>.",
          "The non-recursive starting query in a recursive CTE is the <2> member."
        ],
        blanks: [
          { a: ["self"], why: "Self-joins connect a table to itself." },
          { a: ["RECURSIVE"], why: "WITH RECURSIVE enables iterative tree traversal." },
          { a: ["anchor"], why: "The anchor query establishes the tree base level." }
        ]
      },
      win: "You can model and query parent-child hierarchies and traverse nested tree structures using recursive CTEs.",
      nextTasks: [
        "Write a self-join query finding employees and their managers using LEFT JOIN.",
        "Create a category hierarchy table with parent_id foreign key.",
        "Write a WITH RECURSIVE query to calculate the depth of each category."
      ],
      primarySource: "PostgreSQL Documentation: *Recursive Queries* (postgresql.org/docs/current/queries-with.html#QUERIES-WITH-RECURSIVE).",
      quiz: [
        {
          q: "Why should you use a LEFT JOIN rather than an INNER JOIN when pairing employees with their managers?",
          a: [
            "The CEO / top-level executive has manager_id = NULL; an INNER JOIN would drop the CEO from the results!",
            "Because self-joins do not support INNER JOIN",
            "Because managers cannot be employees",
            "To prevent the server from running out of memory"
          ],
          c: 0,
          why: "The root of a hierarchy has no parent (NULL); an INNER JOIN drops the root record."
        },
        {
          q: "What are the two parts of a recursive CTE?",
          a: [
            "An Anchor member (base query) and a Recursive member, combined with UNION ALL",
            "A SELECT statement and an UPDATE statement",
            "A PRIMARY KEY and a FOREIGN KEY",
            "A header and a footer"
          ],
          c: 0,
          why: "The anchor establishes initial rows; the recursive member joins iteratively until empty."
        },
        {
          q: "What prevents a recursive CTE from running into an infinite loop on cyclic data?",
          a: [
            "A cycle detection condition (or depth limit / UNION instead of UNION ALL)",
            "The database limits all queries to 5 milliseconds",
            "The computer CPU automatically cuts power",
            "Cyclic data is physically impossible to store in SQL"
          ],
          c: 0,
          why: "If child points back to parent in a cycle, recursive queries loop infinitely unless guarded by depth."
        },
        {
          q: "What data model uses a self-referential foreign key?",
          a: [
            "Adjacency List model (each node stores a pointer to its immediate parent)",
            "Flat file model",
            "Key-value document model",
            "Spreadsheet grid model"
          ],
          c: 0,
          why: "Adjacency lists store parent_id on the record itself, representing tree graphs cleanly."
        }
      ]
    },
    {
      n: 7,
      id: "set-operations-union-intersect-except",
      title: "Set operations: UNION, INTERSECT, EXCEPT",
      topic: "Advanced Joins & Windows",
      anim: "Link",
      lede: "Joins combine columns horizontally; set operators combine rows vertically. Master UNION, UNION ALL, INTERSECT, and EXCEPT.",
      winShort: "Combine and compare query results vertically using UNION ALL, INTERSECT, and EXCEPT",
      missionLink: "The fundamental set-theoretic tools for combining multi-table row sets",
      sec1: {
        title: "Horizontal versus vertical combination",
        content: `<p>A <code>JOIN</code> combines tables <b>horizontally</b>: it adds columns from Table B onto rows from Table A. In contrast, <b>Set Operations</b> combine queries <b>vertically</b>: they stack rows from Query B on top of rows from Query A.</p><p>SQL provides four standard set operations: <b>UNION</b> (combines rows, removing duplicates), <b>UNION ALL</b> (combines all rows rapidly without deduplication), <b>INTERSECT</b> (returns rows present in both), and <b>EXCEPT / MINUS</b> (returns rows in A but not B).</p>`,
        keyIdea: "Joins append columns horizontally; set operations stack rows vertically."
      },
      predict: {
        q: "Why is 'UNION ALL' significantly faster than 'UNION' on large query results?",
        a: [
          "UNION ALL simply stacks rows without sorting to eliminate duplicate records; UNION performs an expensive deduplication sort",
          "UNION ALL compresses the data before saving",
          "UNION ALL is written in C++ while UNION is written in Python",
          "UNION ALL only returns the first ten rows"
        ],
        c: 0,
        why: "UNION forces an expensive sorting pass to strip duplicate rows; UNION ALL streams rows instantly."
      },
      sec2: {
        title: "The four set operations",
        content: `<p>Visualise how set operations combine and filter rows vertically.</p>`,
      },
      diagram: {
        boxes: [
          { title: "UNION ALL", lines: ["stacks all rows", "fastest, preserves duplicates"] },
          { title: "UNION", lines: ["stacks rows + deduplicates", "requires sorting pass"] },
          { title: "INTERSECT & EXCEPT", lines: ["INTERSECT: rows in A AND B", "EXCEPT: rows in A but NOT in B"] }
        ]
      },
      sec3: {
        title: "Tracing UNION ALL merging",
        content: `<p>Trace how customer emails and vendor emails are combined into a single unified contact list.</p>`,
      },
      trace: {
        code: [
          "SELECT email, 'Customer' AS role FROM customers",
          "UNION ALL",
          "SELECT email, 'Vendor' AS role FROM vendors;",
          "# Stacks 500 customer rows on top of 200 vendor rows -> 700 rows total"
        ],
        steps: [
          { line: 0, vars: { query_1: "extracts 500 customer emails with role tag" } },
          { line: 1, vars: { operator: "UNION ALL merges streams without sorting" } },
          { line: 2, vars: { query_2: "extracts 200 vendor emails with role tag" } },
          { line: 3, vars: { output: "700 combined rows delivered in single result set" } }
        ]
      },
      practiceIntro: "Test your memory of SQL set operators.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The set operator that stacks rows without removing duplicates is UNION <0>.",
          "The set operator returning only rows present in both query results is <1>.",
          "The set operator returning rows in query A that are missing from query B is <2>."
        ],
        blanks: [
          { a: ["ALL"], why: "UNION ALL retains all duplicate rows." },
          { a: ["INTERSECT"], why: "INTERSECT calculates the intersection of two queries." },
          { a: ["EXCEPT", "MINUS"], why: "EXCEPT (or MINUS in Oracle) calculates set difference." }
        ]
      },
      win: "You can combine and compare query result sets vertically using performant UNION ALL and set difference operators.",
      nextTasks: [
        "Combine active and archived orders into a unified view using UNION ALL.",
        "Compare the query plan of UNION versus UNION ALL using EXPLAIN.",
        "Find users who bought Product A but never Product B using EXCEPT."
      ],
      primarySource: "Alan Beaulieu, *Learning SQL*, Chapter 6: 'Working with Sets'.",
      quiz: [
        {
          q: "What requirement must two queries satisfy to be combined with UNION?",
          a: [
            "Both queries must have the exact same number of columns with compatible data types in corresponding positions",
            "Both queries must query the exact same database table",
            "Both queries must contain identical WHERE clauses",
            "Both queries must be written by the same developer"
          ],
          c: 0,
          why: "Union compatibility requires matching column counts and compatible data types in positional order."
        },
        {
          q: "When should you use 'UNION ALL' instead of 'UNION'?",
          a: [
            "Whenever you know results are already distinct, or when preserving duplicate occurrences is acceptable/desired",
            "Only when querying fewer than 5 rows",
            "Whenever the database is running on a battery-powered laptop",
            "Never; UNION ALL is considered bad practice"
          ],
          c: 0,
          why: "UNION ALL avoids the heavy CPU/disk cost of sorting and deduplicating result rows."
        },
        {
          q: "What column names appear in the final result set header of a UNION query?",
          a: [
            "The column names declared in the first SELECT query",
            "The column names from the second SELECT query",
            "A concatenation of both column names",
            "Column names are stripped and replaced with numbers"
          ],
          c: 0,
          why: "The first SELECT statement establishes the result set schema, including column names."
        },
        {
          q: "Where must the ORDER BY clause be placed in a UNION query?",
          a: [
            "At the very end of the entire statement, after the final SELECT query",
            "Inside each individual SELECT query",
            "Directly after the word UNION",
            "ORDER BY is forbidden in UNION queries"
          ],
          c: 0,
          why: "ORDER BY applies to the combined result set and must sit at the end of the full statement."
        }
      ]
    },
    {
      n: 8,
      id: "window-functions-and-analytical-queries",
      title: "Window functions and analytical queries",
      topic: "Advanced Joins & Windows",
      anim: "Link",
      lede: "Aggregate metrics without collapsing rows. Master window functions (OVER, PARTITION BY, ROW_NUMBER, RANK, LEAD, LAG) for running totals and rankings.",
      winShort: "Author analytical queries using window functions without collapsing row detail",
      missionLink: "The pinnacle of advanced analytical SQL querying",
      sec1: {
        title: "Calculations across a sliding window",
        content: `<p>Traditional <code>GROUP BY</code> aggregates rows by collapsing them: if you group 100 orders by customer, you get 1 summary row per customer, losing individual order rows. What if you want to display each individual order alongside the customer's running total?</p><p>This is the superpower of <b>Window Functions</b>. Using the <code>OVER (PARTITION BY ... ORDER BY ...)</code> clause, the database calculates rankings, running sums, or moving averages across related rows <b>while preserving every single individual row</b>.</p>`,
        keyIdea: "Window functions compute aggregate metrics across related row partitions without collapsing rows."
      },
      predict: {
        q: "What is the primary difference between GROUP BY and a Window Function (OVER)?",
        a: [
          "GROUP BY collapses rows into a single summary row per group; Window functions preserve all original rows",
          "GROUP BY is for text; Window functions are for numbers",
          "Window functions only work in Microsoft Windows operating systems",
          "There is no difference between them"
        ],
        c: 0,
        why: "Window functions append calculations to each individual row without reducing row count."
      },
      sec2: {
        title: "Anatomy of the OVER clause",
        content: `<p>Understand the three components that define a window partition and ordering.</p>`,
      },
      diagram: {
        boxes: [
          { title: "PARTITION BY", lines: ["divides rows into buckets", "e.g. PARTITION BY department"] },
          { title: "ORDER BY", lines: ["defines evaluation sequence", "e.g. ORDER BY salary DESC"] },
          { title: "Frame (ROWS/RANGE)", lines: ["sliding calculation window", "running totals, moving averages"] }
        ]
      },
      sec3: {
        title: "Tracing ROW_NUMBER and running totals",
        content: `<p>Trace how a window function ranks employees by salary within their respective departments.</p>`,
      },
      trace: {
        code: [
          "SELECT department, name, salary,",
          "  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,",
          "  SUM(salary) OVER (PARTITION BY department ORDER BY salary DESC) AS running_dept_total",
          "FROM employees;"
        ],
        steps: [
          { line: 0, vars: { row_preservation: "every employee row is retained" } },
          { line: 1, vars: { ranking: "rank numbers reset to 1 at each new department partition" } },
          { line: 2, vars: { running_sum: "accumulates salary row-by-row down the department" } }
        ]
      },
      practiceIntro: "Test your memory of window function syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The clause identifying a window function is the <0> clause.",
          "The sub-clause partitioning rows inside an OVER clause is PARTITION <1>.",
          "The window function returning the value of the PREVIOUS row is <2>()."
        ],
        blanks: [
          { a: ["OVER"], why: "The OVER clause designates a window function." },
          { a: ["BY"], why: "PARTITION BY partitions the calculation frame." },
          { a: ["LAG"], why: "LAG() accesses preceding rows; LEAD() accesses subsequent rows." }
        ]
      },
      win: "You can write advanced analytical SQL queries calculating rankings, percentiles, running totals, and period-over-period deltas.",
      nextTasks: [
        "Calculate a running cumulative total of revenue by date using SUM(amount) OVER (ORDER BY date).",
        "Rank products within each category using ROW_NUMBER() and DENSE_RANK().",
        "Calculate day-over-day revenue differences using LAG(revenue, 1) OVER (ORDER BY date)."
      ],
      primarySource: "PostgreSQL Documentation: *Window Functions* (postgresql.org/docs/current/tutorial-window.html).",
      quiz: [
        {
          q: "What does 'ROW_NUMBER() OVER (PARTITION BY department ORDER BY hire_date)' do?",
          a: [
            "Assigns sequential integers (1, 2, 3...) to employees ordered by hire date, resetting back to 1 for each new department",
            "Counts the total number of departments in the company",
            "Sorts all employees alphabetically by department name",
            "Deletes employees with duplicate hire dates"
          ],
          c: 0,
          why: "ROW_NUMBER numbers rows sequentially, resetting numbering for each new partition."
        },
        {
          q: "What is the difference between RANK() and DENSE_RANK() when two rows have equal values (a tie)?",
          a: [
            "RANK() skips subsequent rank numbers after a tie (1, 2, 2, 4); DENSE_RANK() does not skip numbers (1, 2, 2, 3)",
            "RANK() is for numbers; DENSE_RANK() is for text",
            "DENSE_RANK() only works on PostgreSQL",
            "There is no difference between them"
          ],
          c: 0,
          why: "RANK skips ranks after ties (like Olympic medals); DENSE_RANK leaves no gaps in sequence."
        },
        {
          q: "What do the LAG() and LEAD() window functions allow you to do?",
          a: [
            "Access values from preceding (LAG) or succeeding (LEAD) rows without writing a self-join",
            "Calculate the geometric latency of database connections",
            "Speed up database disk writes",
            "Encrypt database table columns"
          ],
          c: 0,
          why: "LAG and LEAD provide native lookahead and lookbehind across rows in the partition."
        },
        {
          q: "Can window functions be placed inside the WHERE clause of the same query?",
          a: [
            "No, because window functions execute after the WHERE clause; wrap in a CTE or subquery to filter by window results",
            "Yes, window functions can appear anywhere in SQL",
            "Only if wrapped in double quotes",
            "Only on SQLite databases"
          ],
          c: 0,
          why: "Window functions evaluate after WHERE; filtering on window results requires a CTE or derived table."
        }
      ]
    }
  ]
};
