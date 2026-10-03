"use strict";

module.exports = {
  id: "database-indexes-performance",
  title: "Indexes & Database Performance",
  num: 34,
  emoji: "⚡",
  desc: "How indexes work, when they help, when they hurt, and how to read a query plan.",
  mission: `# Mission — Indexes & Database Performance

## Why this course exists

When a database table has 100 rows, every query is fast. When that table grows to 10 million rows, queries that lack proper indexes suddenly take 45 seconds, peg the CPU at 100%, and cause production outages. Many developers react by blindly adding indexes to every column, which destroys write throughput and wastes memory. This course demystifies B-tree indexes, query planners, sequential scans, composite index column ordering, and EXPLAIN ANALYZE interpretation.

## What the learner can do at the end

- Explain the physical B-tree data structure and why it enables O(log n) searches and range scans.
- Read and interpret EXPLAIN (ANALYZE, BUFFERS) query execution plans accurately.
- Design multi-column composite indexes respecting the Leftmost Prefix rule.
- Distinguish between index scans, index-only scans, and sequential full table scans.
- Evaluate index write penalties and identify duplicate or unused indexes.

## What this course is NOT

- Not a database server hardware purchasing guide.
- Not a specialized search engine course (Elasticsearch). It focuses on relational indexing engines.

## Success looks like

When a production query is identified as slow, the learner runs EXPLAIN ANALYZE, identifies the offending Sequential Scan, and creates the exact targeted composite index that drops query latency from 5 seconds to 2 milliseconds.
`,
  notes: `# Notes — Indexes & Database Performance

## Decisions
- Group into four themes: B-Trees & Scan Types, Query Plans & EXPLAIN, Composite Indexes & Ordering, and Specialized Indexes & Cost.
- Standard PostgreSQL / ANSI SQL focus with EXPLAIN ANALYZE visualizations.
`,
  resources: `# Resources — Indexes & Database Performance

## Knowledge (primary sources)
- Markus Winand, *Use The Index, Luke!* (use-the-index-luke.com) — The modern guide to database performance for developers.
- *PostgreSQL 14 Internals* by Egor Rogov (Postgres Professional).
- *High Performance MySQL* by Silvia Botros & Jeremy Tinley (O'Reilly).

## Wisdom
- An index is not free magic: every index speeds up reads by adding a write tax to every INSERT, UPDATE, and DELETE.
`,
  cheatsheetSections: [
    {
      title: "Index Creation Syntax",
      label: "B-Tree, Unique, and Partial",
      code: `-- Standard B-Tree index
CREATE INDEX idx_users_email ON users(email);

-- Composite index (Order Matters!)
CREATE INDEX idx_orders_user_status ON orders(user_id, status);

-- Partial index (saves disk & memory)
CREATE INDEX idx_unpaid_invoices ON invoices(user_id) 
WHERE status = 'unpaid';`,
      lessonN: 2,
      lessonSlug: "anatomy-of-a-b-tree-index",
      lessonTitle: "Anatomy of a B-tree index"
    },
    {
      title: "Reading EXPLAIN ANALYZE",
      label: "Diagnostic execution plan",
      code: `EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM users WHERE email = 'ada@example.com';

-- Key Plan Nodes:
-- Seq Scan: Reading every page from disk (SLOW on large tables)
-- Index Scan: Traverses B-tree + fetches heap tuple (FAST)
-- Index Only Scan: All data in B-tree; zero heap fetches (FASTEST)`,
      lessonN: 4,
      lessonSlug: "reading-query-plans-with-explain-analyze",
      lessonTitle: "Reading query plans with EXPLAIN ANALYZE"
    },
    {
      title: "Leftmost Prefix Rule",
      label: "Composite index matching",
      code: `-- Index on: (A, B, C)
-- CAN use index:
WHERE A = 1
WHERE A = 1 AND B = 2
WHERE A = 1 AND B = 2 AND C = 3

-- CANNOT use index:
WHERE B = 2               # skips A
WHERE C = 3               # skips A and B`,
      lessonN: 5,
      lessonSlug: "composite-indexes-and-the-leftmost-prefix-rule",
      lessonTitle: "Composite indexes and the leftmost prefix rule"
    },
    {
      title: "Unused Index Audit",
      label: "Finding index write overhead",
      code: `SELECT indexrelname, idx_scan, idx_tup_read, idx_tup_fetch
FROM pg_stat_user_indexes
WHERE idx_scan = 0;  -- 0 scans = unused write penalty!`,
      lessonN: 8,
      lessonSlug: "the-write-penalty-and-index-maintenance",
      lessonTitle: "The write penalty and index maintenance"
    }
  ],
  glossaryGroups: [
    {
      id: "index-foundations",
      title: "B-Trees & Scan Types",
      terms: [
        { term: "Index", def: "A separate physical data structure (usually a B-tree) enabling fast logarithmic lookup of rows.", lesson: 1, tags: ["indexing"] },
        { term: "B-tree", def: "Balanced Tree: a self-balancing search tree data structure maintaining sorted data for logarithmic seeks.", lesson: 2, tags: ["b-tree"] },
        { term: "Sequential scan", def: "A scan operation reading every database page and row in table storage from start to finish.", lesson: 1, tags: ["scans"] },
        { term: "Index scan", def: "A two-phase scan traversing a B-tree to find pointers, then fetching corresponding rows from the table heap.", lesson: 1, tags: ["scans"] }
      ]
    },
    {
      id: "query-plans",
      title: "Query Plans & Execution",
      terms: [
        { term: "EXPLAIN", def: "An SQL command displaying the physical execution plan chosen by the query optimizer without executing it.", lesson: 3, tags: ["explain"] },
        { term: "EXPLAIN ANALYZE", def: "An SQL command that actually executes the query and reports true runtime measurements alongside estimates.", lesson: 4, tags: ["explain"] },
        { term: "Cost estimate", def: "The query planner's arbitrary unit calculating anticipated disk I/O and CPU work for a plan node.", lesson: 3, tags: ["optimizer"] },
        { term: "Index-only scan", def: "A high-speed scan satisfying a query entirely from index leaf nodes without touching table heap pages.", lesson: 4, tags: ["scans"] }
      ]
    },
    {
      id: "composite-indexes",
      title: "Composite Indexes & Sizing",
      terms: [
        { term: "Composite index", def: "An index created across multiple columns in a specified left-to-right order.", lesson: 5, tags: ["indexing"] },
        { term: "Leftmost prefix rule", def: "The rule mandating that queries must filter by leading composite index columns to utilize the index.", lesson: 5, tags: ["b-tree"] },
        { term: "Covering index", def: "An index containing all columns requested by a query (often using INCLUDE), enabling index-only scans.", lesson: 6, tags: ["indexing"] },
        { term: "Partial index", def: "An index built over a subset of rows filtered by a WHERE clause (e.g. WHERE status = 'pending').", lesson: 6, tags: ["indexing"] }
      ]
    },
    {
      id: "maintenance-costs",
      title: "Specialized Indexes & Maintenance",
      terms: [
        { term: "GIN index", def: "Generalized Inverted Index: an index format optimized for arrays, full-text search, and JSONB documents.", lesson: 7, tags: ["postgres"] },
        { term: "Write penalty", def: "The CPU and disk I/O overhead imposed on INSERT, UPDATE, and DELETE operations to update indexes.", lesson: 8, tags: ["performance"] },
        { term: "VACUUM", def: "A PostgreSQL maintenance process reclaiming storage occupied by dead row tuples created by updates/deletes.", lesson: 8, tags: ["maintenance"] },
        { term: "Index bloat", def: "Unusable empty space inside index leaf pages caused by frequent updates, degrading scan performance.", lesson: 8, tags: ["maintenance"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "how-databases-search-without-indexes",
      title: "How databases search without indexes",
      topic: "B-Trees & Scan Types",
      anim: "Pulse",
      lede: "Imagine finding a name in an unalphabetized phone book: you must read every page from cover to cover. Discover the Sequential Scan and why O(n) lookups collapse at scale.",
      winShort: "Explain why sequential scans cause query latency to scale linearly with table size",
      missionLink: "The fundamental baseline that motivates index creation",
      sec1: {
        title: "The Sequential Scan (Table Scan)",
        content: `<p>When a table has no index on a column, the database has only one way to answer <code>WHERE email = 'ada@example.com'</code>: it must read every single disk page and evaluate every single row from the first to the last. This is a <b>Sequential Scan (Seq Scan)</b>.</p><p>A sequential scan has a time complexity of <b>O(n)</b>. On 1,000 rows, it takes 0.5 milliseconds. On 10,000,000 rows, the database must pull gigabytes of data from disk into RAM, taking 15 seconds and consuming 100% of a CPU core.</p>`,
        keyIdea: "Without an index, the database must read every row in the table (Sequential Scan) in O(n) time."
      },
      predict: {
        q: "If a sequential scan takes 100ms on 100,000 rows, approximately how long will it take when the table grows to 10,000,000 rows?",
        a: [
          "Around 10,000ms (10 seconds), because sequential scan time scales linearly with row count",
          "Still 100ms because databases are fast",
          "0.1 milliseconds",
          "Infinite time"
        ],
        c: 0,
        why: "O(n) linear complexity means a 100x increase in rows causes a ~100x increase in scan time."
      },
      sec2: {
        title: "Sequential Scan versus Index Lookup",
        content: `<p>Contrast reading an entire book from start to finish with jumping directly via the index in the back.</p>`,
      },
      diagram: {
        boxes: [
          { title: "No Index: Seq Scan (O(n))", lines: ["reads 10,000,000 rows one by one", "massive disk I/O, CPU at 100%"] },
          { title: "B-Tree Index: Seek (O(log n))", lines: ["traverses 3 tree levels", "reads exactly 1 row; finishes in 0.05ms!"] }
        ]
      },
      sec3: {
        title: "Tracing disk page reading",
        content: `<p>Trace how a table scan forces the database engine to load thousands of 8KB disk pages into memory.</p>`,
      },
      trace: {
        code: [
          "# Table: users (10 million rows, 80,000 disk pages = 640 MB)",
          "# Query: SELECT * FROM users WHERE email = 'ada@example.com';",
          "# Engine reads page 1, page 2, page 3 ... page 80,000",
          "# Total work: 640 MB transferred from disk to RAM just to find ONE row!"
        ],
        steps: [
          { line: 0, vars: { table_size: "10,000,000 rows across 80,000 pages" } },
          { line: 2, vars: { execution: "sequential disk reading loops through all 80,000 pages" } },
          { line: 3, vars: { cost: "640 MB read penalty for single record lookup" } }
        ]
      },
      practiceIntro: "Test your memory of sequential scan mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Scanning an entire table from start to finish is a <0> scan.",
          "The computational complexity of a sequential scan is O(<1>).",
          "The storage unit transferred from disk to memory in PostgreSQL is an 8KB <2>."
        ],
        blanks: [
          { a: ["sequential", "table"], why: "Sequential scans check every row in storage." },
          { a: ["n"], why: "O(n) represents linear scaling with table size." },
          { a: ["page", "block"], why: "Databases read and write in 8KB disk pages." }
        ]
      },
      win: "You can identify why unindexed queries scale linearly and recognize when a table has outgrown sequential scans.",
      nextTasks: [
        "Run EXPLAIN on an unindexed query in PostgreSQL and observe the 'Seq Scan' plan node.",
        "Check the table size in megabytes using pg_size_pretty(pg_relation_size('table')).",
        "Observe the dramatic CPU usage spike when running sequential scans on large tables."
      ],
      primarySource: "Markus Winand, *Use The Index, Luke!*, Section: 'Anatomy of an Index'.",
      quiz: [
        {
          q: "When is a Sequential Scan actually faster and preferred by the database over an index scan?",
          a: [
            "When the table is very small (e.g. under 100 rows), or when a query retrieves a large percentage (e.g. 60%) of all rows",
            "When the computer has an SSD drive",
            "Whenever the query contains an ORDER BY clause",
            "Never; sequential scans are always mistakes"
          ],
          c: 0,
          why: "On tiny tables, reading a few contiguous pages sequentially is faster than traversing an index tree."
        },
        {
          q: "What is the physical time complexity of an indexed B-tree lookup?",
          a: [
            "O(log n) logarithmic time",
            "O(n) linear time",
            "O(n^2) quadratic time",
            "O(1) constant time"
          ],
          c: 0,
          why: "Binary/B-tree search halves the search space at each branch level, operating in O(log n)."
        },
        {
          q: "What hardware resource is primarily exhausted by large sequential scans?",
          a: [
            "Disk I/O bandwidth and CPU cycles spent scanning memory pages",
            "Graphics card GPU memory",
            "Network broadband data cap",
            "Computer monitor power"
          ],
          c: 0,
          why: "Sequential scans flood memory buffers with disk reads and consume 100% CPU evaluating rows."
        },
        {
          q: "What is the table 'heap' in PostgreSQL terminology?",
          a: [
            "The physical file where the table's unsorted row data tuples are stored on disk",
            "A memory cache for storing passwords",
            "A database backup server",
            "The trash bin for deleted rows"
          ],
          c: 0,
          why: "The heap is the primary storage area holding actual table row records."
        }
      ]
    },
    {
      n: 2,
      id: "anatomy-of-a-b-tree-index",
      title: "Anatomy of a B-tree index",
      topic: "B-Trees & Scan Types",
      anim: "Pulse",
      lede: "How does a B-tree find 1 row out of 100 million in 3 disk reads? Explore the balanced search tree: root, intermediate branch nodes, leaf pages, and row pointers.",
      winShort: "Explain how B-tree indexes maintain balanced logarithmic search paths and ordered leaf chains",
      missionLink: "The primary internal data structure powering relational database performance",
      sec1: {
        title: "The self-balancing tree",
        content: `<p>The default and most important index in almost every relational database is the <b>B-tree (Balanced Tree)</b>. A B-tree is an ordered tree structure that maintains balance: every leaf node is at the exact same depth from the root.</p><p>Because each branch node has a high fan-out (storing hundreds of keys per page), a B-tree of 100 million rows has a depth of only <b>3 or 4 levels</b>. To find any row, the engine traverses: <b>Root Node &rarr; Branch Node &rarr; Leaf Node</b>. Three page reads, and the exact row pointer is found!</p>`,
        keyIdea: "A B-tree index has a wide fan-out, allowing lookups across millions of rows in 3 to 4 page hops."
      },
      predict: {
        q: "What is stored in the leaf nodes of a secondary B-tree index?",
        a: [
          "The indexed column value and a physical pointer (tuple ID / ctid) to the row in the table heap",
          "The entire database table duplicated in full",
          "An encrypted hash of the user password",
          "A copy of the SQL query string"
        ],
        c: 0,
        why: "Leaf nodes store the sorted index key paired with a pointer (TID/ctid) to the heap row."
      },
      sec2: {
        title: "B-tree traversal hierarchy",
        content: `<p>Visualise how a search key navigates from root to intermediate branch to leaf.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Root Node (Level 1)", lines: ["contains key ranges: [A-H], [I-P], [Q-Z]", "guides to matching branch page"] },
          { title: "Branch Node (Level 2)", lines: ["finer ranges: [I-L], [M-N], [O-P]", "guides to matching leaf page"] },
          { title: "Leaf Pages (Level 3)", lines: ["sorted values: 'Ada' -> Tuple (Page 4, Row 12)", "doubly-linked: enables instant range scans!"] }
        ]
      },
      sec3: {
        title: "Tracing B-tree range scan execution",
        content: `<p>Trace how the doubly-linked leaf nodes enable blazing-fast range queries like WHERE age BETWEEN 20 AND 25.</p>`,
      },
      trace: {
        code: [
          "# Query: SELECT * FROM users WHERE age >= 21 AND age <= 23;",
          "Step 1: Traverse B-tree to find the first leaf matching age = 21 (3 reads)",
          "Step 2: Walk the doubly-linked horizontal chain across leaf pages",
          "Step 3: Stop as soon as age > 23 is encountered! Zero full-table scanning."
        ],
        steps: [
          { line: 0, vars: { query: "range scan over age column" } },
          { line: 1, vars: { seek: "logarithmic seek locates start of range in 3 hops" } },
          { line: 2, vars: { scan: "sequential walk along ordered leaf page chain" } },
          { line: 3, vars: { halt: "stops instantly at boundary; finishes in 0.1ms" } }
        ]
      },
      practiceIntro: "Test your memory of B-tree index anatomy.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The default self-balancing index structure in SQL is the <0>-tree.",
          "The bottom-most nodes containing the sorted keys and row pointers are <1> nodes.",
          "Because leaf pages are linked horizontally, B-trees excel at <2> queries."
        ],
        blanks: [
          { a: ["B", "b"], why: "B-tree stands for Balanced Tree." },
          { a: ["leaf"], why: "Leaf nodes hold keys and physical tuple pointers." },
          { a: ["range"], why: "Ordered leaf chains allow fast range queries (BETWEEN, >=)." }
        ]
      },
      win: "You can explain the internal mechanics of B-tree indexes and understand why they make lookups and range scans so fast.",
      nextTasks: [
        "Create an index on a column using CREATE INDEX idx_name ON table(column).",
        "Inspect index size in PostgreSQL using pg_size_pretty(pg_relation_size('idx_name')).",
        "Observe how an index accelerates both equality (=) and range (<, >, BETWEEN) queries."
      ],
      primarySource: "PostgreSQL Documentation: *B-Tree Indexes* (postgresql.org/docs/current/btree.html).",
      quiz: [
        {
          q: "Why are B-trees preferred over binary search trees (BST) for database disk storage?",
          a: [
            "B-trees have high fan-out (hundreds of keys per node), keeping tree depth very shallow and minimizing disk I/O",
            "B-trees can only store text words",
            "Binary search trees do not work on computers",
            "B-trees do not use computer memory"
          ],
          c: 0,
          why: "Disk reads are expensive; high fan-out keeps B-tree depth to 3-4 levels for 100M rows."
        },
        {
          q: "What enables B-tree indexes to satisfy ORDER BY clauses without sorting the data at runtime?",
          a: [
            "Keys are already stored in sorted order inside the B-tree leaf nodes",
            "The query planner uses artificial intelligence to sort the data",
            "The database sorts the table every night at midnight",
            "ORDER BY is ignored when an index exists"
          ],
          c: 0,
          why: "Because leaf nodes maintain pre-sorted order, reading the index satisfies ORDER BY for free."
        },
        {
          q: "What is an index leaf node pointer in PostgreSQL?",
          a: [
            "A Tuple ID (ItemPointer / ctid) containing the physical disk page number and item offset of the row",
            "The user's internet IP address",
            "A copy of the SQL query string",
            "A hash of the database password"
          ],
          c: 0,
          why: "ctid (e.g. (4, 12)) specifies block number 4, index slot 12 in the heap file."
        },
        {
          q: "Why does the expression 'WHERE UPPER(email) = 'ADA'' fail to use a standard index on 'email'?",
          a: [
            "The index stores raw 'email' values, not UPPER(email); wrapping a column in a function blinds the index",
            "UPPER is forbidden in SQL queries",
            "Capital letters cannot be stored in B-trees",
            "The query will crash the database"
          ],
          c: 0,
          why: "Functions applied to columns prevent standard index seeks; an expression index is required."
        }
      ]
    },
    {
      n: 3,
      id: "the-query-planner-cost-and-statistics",
      title: "The query planner: cost and statistics",
      topic: "Query Plans & Execution",
      anim: "Pulse",
      lede: "How does the database choose between an index and a table scan? Discover the cost-based query optimizer, table statistics, and the EXPLAIN command.",
      winShort: "Inspect query execution plans using EXPLAIN and understand planner cost calculations",
      missionLink: "Reveals how the database optimizer makes physical execution decisions",
      sec1: {
        title: "The cost-based optimizer",
        content: `<p>When you send an SQL query, the database does not execute it immediately. The <b>Query Optimizer (Planner)</b> analyzes multiple candidate execution strategies, calculates an estimated <b>Cost</b> for each, and picks the cheapest plan.</p><p>Cost is measured in arbitrary units modeling disk I/O page fetches and CPU computations. The planner bases its estimates on internal <b>Table Statistics</b> (tracked by <code>ANALYZE</code>), such as row counts, null fractions, and data distribution histograms.</p>`,
        keyIdea: "The query planner uses statistical histograms to estimate cost and select the optimal plan."
      },
      predict: {
        q: "Does running 'EXPLAIN SELECT ...' actually execute the query and mutate data?",
        a: [
          "No, EXPLAIN only displays the planned execution strategy without running the query",
          "Yes, it runs the query and deletes matching rows",
          "Yes, it executes the query in slow motion",
          "It depends on the time of day"
        ],
        c: 0,
        why: "EXPLAIN prints the optimizer's estimated plan without executing the query."
      },
      sec2: {
        title: "The cost formula components",
        content: `<p>How the planner balances sequential I/O, random I/O, and CPU operator costs.</p>`,
      },
      diagram: {
        boxes: [
          { title: "seq_page_cost (1.0)", lines: ["sequential disk page read", "baseline reference unit"] },
          { title: "random_page_cost (4.0)", lines: ["random disk seek cost", "higher on spinning rust, lower on SSD"] },
          { title: "cpu_tuple_cost (0.01)", lines: ["CPU cost to evaluate", "one row against WHERE filter"] }
        ]
      },
      sec3: {
        title: "Tracing EXPLAIN output format",
        content: `<p>Deconstruct the anatomy of an estimated cost tuple in standard EXPLAIN output.</p>`,
      },
      trace: {
        code: [
          "# EXPLAIN SELECT * FROM users WHERE id = 42;",
          "Index Scan using users_pkey on users  (cost=0.43..8.45 rows=1 width=128)",
          "  Index Cond: (id = 42)"
        ],
        steps: [
          { line: 1, vars: { plan_node: "Index Scan using primary key B-tree" } },
          { line: 1, vars: { startup_cost: "0.43 (cost to fetch the very first row)" } },
          { line: 1, vars: { total_cost: "8.45 (estimated total cost to complete execution)" } },
          { line: 1, vars: { rows_estimate: "rows=1 (planner anticipates exactly 1 matching row)" } }
        ]
      },
      practiceIntro: "Test your memory of query planning concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The SQL command to inspect a query plan without running it is <0>.",
          "The database command used to refresh table statistics is <1>.",
          "In (cost=0.43..8.45), 8.45 represents the estimated <2> cost."
        ],
        blanks: [
          { a: ["EXPLAIN"], why: "EXPLAIN displays estimated execution plans." },
          { a: ["ANALYZE"], why: "ANALYZE updates planner table statistics." },
          { a: ["total"], why: "Total cost is the second number in the cost tuple." }
        ]
      },
      win: "You can run EXPLAIN and interpret cost metrics, node types, and estimated row counts.",
      nextTasks: [
        "Run EXPLAIN on a SELECT query and locate the cost=X..Y numbers.",
        "Update database statistics using the ANALYZE command.",
        "Observe how the planner switches from Index Scan to Seq Scan when querying 90% of a table."
      ],
      primarySource: "PostgreSQL Documentation: *Using EXPLAIN* (postgresql.org/docs/current/using-explain.html).",
      quiz: [
        {
          q: "What do the numbers in '(cost=0.28..8.29 rows=1 width=64)' represent?",
          a: [
            "0.28 is startup cost; 8.29 is total estimated cost; rows=1 is estimated rows; width=64 is average row byte size",
            "The price in US dollars and cents to run the query",
            "The memory addresses in server RAM",
            "The CPU temperature during execution"
          ],
          c: 0,
          why: "Cost tuples report startup cost, total cost, estimated rows, and average width in bytes."
        },
        {
          q: "Why might a query planner choose a Sequential Scan even when an index exists on the column?",
          a: [
            "If the planner estimates that the query will match a large fraction of the table, sequential I/O is cheaper than thousands of random index seeks",
            "Because the index is broken and needs to be deleted",
            "Because the computer has run out of memory",
            "Because SQL standards require a sequential scan every 10 queries"
          ],
          c: 0,
          why: "When fetching a large portion of a table, sequential reading beats random heap pointer lookups."
        },
        {
          q: "What happens if a database's table statistics are completely stale or out of date?",
          a: [
            "The optimizer may pick disastrously slow execution plans based on incorrect row count estimates",
            "The database will automatically delete all tables",
            "Queries will return corrupted data values",
            "The SQL compiler will throw syntax errors"
          ],
          c: 0,
          why: "Stale statistics mislead the optimizer into choosing terrible physical scan strategies."
        },
        {
          q: "What is 'random_page_cost' in database configuration?",
          a: [
            "A planner cost weight representing the cost of a non-sequential random disk page seek relative to sequential reads",
            "A fee charged by cloud hosting providers for random queries",
            "The number of random rows returned by a query",
            "The maximum number of indexes allowed on a table"
          ],
          c: 0,
          why: "random_page_cost models the latency penalty of random I/O (often lowered to 1.1 on fast NVMe SSDs)."
        }
      ]
    },
    {
      n: 4,
      id: "reading-query-plans-with-explain-analyze",
      title: "Reading query plans with EXPLAIN ANALYZE",
      topic: "Query Plans & Execution",
      anim: "Pulse",
      lede: "Stop guessing why queries are slow. Learn how to run EXPLAIN (ANALYZE, BUFFERS) to see actual execution times, memory usage, and the exact node where time is lost.",
      winShort: "Diagnose query performance bottlenecks using EXPLAIN (ANALYZE, BUFFERS)",
      missionLink: "The primary diagnostic tool for optimizing slow database queries",
      sec1: {
        title: "From estimates to ground truth",
        content: `<p><code>EXPLAIN</code> shows what the planner <i>thinks</i> will happen. But to see what <i>actually</i> happened, you must run <b>EXPLAIN (ANALYZE, BUFFERS)</b>. This command executes the query in real time and reports actual elapsed time (in milliseconds) and actual row counts.</p><p>WARNING: <b>EXPLAIN ANALYZE actually executes the statement!</b> If you run <code>EXPLAIN ANALYZE DELETE FROM users;</code>, you will actually delete all your users! Always wrap mutations in a transaction and rollback when testing.</p>`,
        keyIdea: "EXPLAIN ANALYZE actually runs the query and reports true execution times and buffer hits."
      },
      predict: {
        q: "What happens if you run 'EXPLAIN ANALYZE UPDATE accounts SET balance = 0;'?",
        a: [
          "It executes the UPDATE statement, modifies the rows on disk, and prints execution times",
          "It simulates the update without touching real data",
          "It prints an error because UPDATE cannot be analyzed",
          "It exports the query to an Excel spreadsheet"
        ],
        c: 0,
        why: "ANALYZE executes the statement; always wrap in BEGIN; ... ROLLBACK; when testing mutations."
      },
      sec2: {
        title: "The three primary scan nodes",
        content: `<p>Recognize the three fundamental scan strategies in execution plan outputs.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Seq Scan (Slow)", lines: ["reads every page in heap", "filter evaluated row by row"] },
          { title: "Index Scan (Fast)", lines: ["traverses B-tree for pointers", "fetches corresponding heap rows"] },
          { title: "Index Only Scan (Fastest)", lines: ["all requested columns in index", "zero heap page reads!"] }
        ]
      },
      sec3: {
        title: "Tracing EXPLAIN ANALYZE output",
        content: `<p>Trace the diagnostic lines comparing estimated rows with actual rows and execution time.</p>`,
      },
      trace: {
        code: [
          "# EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM users WHERE email = 'ada@example.com';",
          "Index Scan using idx_email on users (cost=0.29..8.30 rows=1) (actual time=0.042..0.043 rows=1 loops=1)",
          "  Index Cond: (email = 'ada@example.com')",
          "  Buffers: shared hit=3",
          "Planning Time: 0.120 ms",
          "Execution Time: 0.065 ms"
        ],
        steps: [
          { line: 1, vars: { scan_type: "Index Scan used; completed in 0.043ms" } },
          { line: 3, vars: { memory: "shared hit=3 (all 3 pages found in RAM cache; zero disk reads!)" } },
          { line: 5, vars: { duration: "total query execution completed in 65 microseconds" } }
        ]
      },
      practiceIntro: "Test your memory of EXPLAIN ANALYZE metrics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The flag that actually executes a query to measure runtime is <0>.",
          "The flag reporting buffer cache hits and disk reads is <1>.",
          "The fastest scan node that avoids reading table heap pages is Index <2> Scan."
        ],
        blanks: [
          { a: ["ANALYZE"], why: "ANALYZE executes the statement and captures real metrics." },
          { a: ["BUFFERS"], why: "BUFFERS reveals whether pages came from RAM (hit) or disk (read)." },
          { a: ["Only"], why: "Index Only Scans read entirely from index leaf pages." }
        ]
      },
      win: "You can run EXPLAIN ANALYZE, pinpoint slow sequential scans, and diagnose disk buffer bottlenecks.",
      nextTasks: [
        "Run EXPLAIN (ANALYZE, BUFFERS) on a query in PostgreSQL and inspect Execution Time.",
        "Observe 'Buffers: shared hit=X read=Y' to distinguish RAM hits from disk I/O.",
        "Compare query time before and after adding a targeted B-tree index."
      ],
      primarySource: "PostgreSQL Documentation: *EXPLAIN* (postgresql.org/docs/current/sql-explain.html).",
      quiz: [
        {
          q: "What does 'Buffers: shared hit=4 read=0' mean in an EXPLAIN (ANALYZE, BUFFERS) report?",
          a: [
            "All 4 required 8KB pages were already cached in server RAM (hit), requiring zero physical disk reads",
            "The query failed 4 times before succeeding",
            "The database deleted 4 buffer files",
            "The query returned 4 rows"
          ],
          c: 0,
          why: "shared hit means the page was found in PostgreSQL's shared_buffers RAM cache."
        },
        {
          q: "What is an 'Index Only Scan'?",
          a: [
            "A scan where all columns requested by SELECT and WHERE are present in the index leaf pages, avoiding heap reads entirely",
            "A scan that only runs on index creation",
            "A scan that deletes the table heap",
            "A query that cannot use WHERE clauses"
          ],
          c: 0,
          why: "If all required data lives in the index, the engine never touches the table heap file."
        },
        {
          q: "What red flag in EXPLAIN ANALYZE indicates that table statistics are severely out of date?",
          a: [
            "A massive difference between estimated rows (e.g. rows=1) and actual rows (e.g. actual rows=500000)",
            "The query plan is printed in red font",
            "Execution time is measured in seconds",
            "The query plan contains more than three lines"
          ],
          c: 0,
          why: "When estimated rows diverges radically from actual rows, the planner is operating on blind statistics."
        },
        {
          q: "Why should you be extremely cautious running EXPLAIN ANALYZE on a production server?",
          a: [
            "Because ANALYZE actually executes the query, which can lock tables, consume resources, or mutate data",
            "Because EXPLAIN ANALYZE automatically restarts the database server",
            "Because it deletes all stored procedures",
            "Because it resets user passwords"
          ],
          c: 0,
          why: "ANALYZE executes the query; running it on an unindexed slow query on production will run that slow query live."
        }
      ]
    },
    {
      n: 5,
      id: "composite-indexes-and-the-leftmost-prefix-rule",
      title: "Composite indexes and the leftmost prefix rule",
      topic: "Composite Indexes & Sizing",
      anim: "Pulse",
      lede: "Index column order matters. Master multi-column composite indexes and the Leftmost Prefix Rule to serve multiple queries with a single index.",
      winShort: "Design composite multi-column indexes respecting the Leftmost Prefix rule",
      missionLink: "Prevents creating redundant single-column indexes and optimizes multi-clause queries",
      sec1: {
        title: "The phonebook analogy: column order is king",
        content: `<p>A telephone directory is an index sorted by <b>(Last Name, First Name)</b>. You can quickly find everyone named 'Smith'. You can quickly find 'Smith, John'. But can you quickly find everyone whose first name is 'John' regardless of last name?</p><p>No! You would have to read every single page. A <b>Composite Index</b> on <code>(A, B)</code> is sorted by A first, and by B only within matching A values. This is the <b>Leftmost Prefix Rule</b>: an index on <code>(A, B, C)</code> can accelerate queries on <code>(A)</code>, <code>(A, B)</code>, and <code>(A, B, C)</code>, but is completely useless for queries on <code>(B)</code> or <code>(C)</code> alone.</p>`,
        keyIdea: "Composite indexes are sorted left-to-right; queries must filter on leading columns to use the index."
      },
      predict: {
        q: "If an index exists on '(tenant_id, created_at)', can it be used by 'WHERE created_at >= '2026-01-01''?",
        a: [
          "No, because the query skips the leading column (tenant_id), violating the Leftmost Prefix rule",
          "Yes, composite indexes work in any arbitrary order",
          "Only on mobile SQLite databases",
          "Yes, if created_at is a timestamp"
        ],
        c: 0,
        why: "Skipping the leftmost column prevents B-tree range traversal; a separate index on created_at is needed."
      },
      sec2: {
        title: "The Leftmost Prefix matrix",
        content: `<p>Understand which WHERE clause combinations can utilize an index on (A, B, C).</p>`,
      },
      diagram: {
        boxes: [
          { title: "Index on: (A, B, C)", lines: ["Sorted by A, then B, then C", "single index serves 3 query patterns!"] },
          { title: "CAN Use Index", lines: ["WHERE A = 1", "WHERE A = 1 AND B = 2", "WHERE A = 1 AND B = 2 AND C = 3"] },
          { title: "CANNOT Use Index", lines: ["WHERE B = 2 (skips A)", "WHERE C = 3 (skips A & B)", "WHERE B = 2 AND C = 3"] }
        ]
      },
      sec3: {
        title: "Tracing composite index sorting",
        content: `<p>Trace how a composite index on (status, created_at) satisfies both filtering and sorting in one seek.</p>`,
      },
      trace: {
        code: [
          "CREATE INDEX idx_orders_status_date ON orders(status, created_at);",
          "SELECT * FROM orders",
          "WHERE status = 'pending'",
          "ORDER BY created_at DESC",
          "LIMIT 10;"
        ],
        steps: [
          { line: 0, vars: { index: "b-tree sorted by status, then created_at" } },
          { line: 2, vars: { seek: "jumps directly to status = 'pending' bucket" } },
          { line: 3, vars: { order: "created_at is ALREADY sorted inside pending bucket! Zero runtime sort!" } },
          { line: 4, vars: { result: "delivers 10 rows in 0.04ms" } }
        ]
      },
      practiceIntro: "Test your memory of composite index rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An index covering multiple columns is a <0> index.",
          "Queries must filter by leading columns according to the <1> Prefix rule.",
          "Equality columns should precede <2> columns in composite index definitions."
        ],
        blanks: [
          { a: ["composite"], why: "Composite indexes span multiple columns." },
          { a: ["Leftmost"], why: "The Leftmost Prefix rule governs B-tree ordering." },
          { a: ["range"], why: "Range filters halt index traversal for subsequent columns." }
        ]
      },
      win: "You can design compact composite indexes that serve multiple query patterns and eliminate runtime sorting.",
      nextTasks: [
        "Create a composite index on (user_id, status) and test queries filtering on user_id alone.",
        "Verify in EXPLAIN that filtering on status alone fails to use the index.",
        "Replace two redundant single-column indexes with one well-ordered composite index."
      ],
      primarySource: "Markus Winand, *Use The Index, Luke!*, Section: 'The Concatenated Index'.",
      quiz: [
        {
          q: "What is the 'Leftmost Prefix Rule' in composite indexing?",
          a: [
            "A composite index on (A, B, C) can only be used by queries that filter by column A, or (A, B), or (A, B, C)",
            "The leftmost column must always be named 'id'",
            "Indexes can only be placed on the left side of the table",
            "The query must be written in English read from left to right"
          ],
          c: 0,
          why: "B-trees are sorted hierarchically from the first column to the last."
        },
        {
          q: "What is the general golden rule for column ordering in composite indexes?",
          a: [
            "Equality columns first, then Range/Sort columns (Equality first, then Range)",
            "Range columns first, then Equality columns",
            "Alphabetical order of column names",
            "Put the shortest column name first"
          ],
          c: 0,
          why: "Range filters (<, >) prevent the index from using subsequent columns for filtering or sorting."
        },
        {
          q: "If you have an index on (A, B), do you also need a separate index on (A)?",
          a: [
            "No, the index on (A, B) already acts as an index on (A) alone due to the leftmost prefix rule",
            "Yes, every single column must have its own standalone index",
            "Only if column A is a number",
            "Yes, otherwise the database throws a duplicate key error"
          ],
          c: 0,
          why: "An index on (A, B) fully covers queries filtering by A alone; a separate index on A is pure waste."
        },
        {
          q: "How does a composite index on (tenant_id, created_at) satisfy 'ORDER BY created_at DESC'?",
          a: [
            "Within each tenant_id bucket, rows are already pre-sorted by created_at in the B-tree leaf nodes",
            "The database sorts the rows in memory before returning them",
            "It converts created_at into an integer",
            "It runs the query twice"
          ],
          c: 0,
          why: "Because rows are physically ordered by created_at inside each tenant bucket, no sorting pass is needed."
        }
      ]
    },
    {
      n: 6,
      id: "partial-indexes-and-covering-indexes",
      title: "Partial indexes and covering indexes",
      topic: "Composite Indexes & Sizing",
      anim: "Pulse",
      lede: "Why index 10 million inactive rows when you only query the 5,000 active ones? Master Partial Indexes to save 90% of disk space, and Covering Indexes (INCLUDE) for index-only scans.",
      winShort: "Design lightweight partial indexes and covering indexes with INCLUDE clauses",
      missionLink: "Dramatically reduces index storage size and enables lightning-fast Index-Only scans",
      sec1: {
        title: "Partial indexes: indexing only what matters",
        content: `<p>In many systems, data is skewed: 99% of orders are 'completed' or 'archived', and only 1% are 'pending' or 'failed'. If your application only queries active orders, creating an index on the entire table wastes hundreds of megabytes of RAM on rows you never search for.</p><p>A <b>Partial Index</b> includes a <code>WHERE</code> clause: <code>CREATE INDEX idx_pending ON orders(created_at) WHERE status = 'pending';</code>. The index contains only the 1% of rows that match! It is tiny, fits entirely in CPU cache, and is updated only when pending orders change.</p>`,
        keyIdea: "Partial indexes index only rows matching a WHERE condition, saving massive disk space and write overhead."
      },
      predict: {
        q: "What is the size benefit of a partial index on a table where 95% of rows are archived?",
        a: [
          "The partial index is approximately 95% smaller than a full index on the table",
          "The partial index takes up twice as much space",
          "Partial indexes do not take up any space on disk",
          "The table size is doubled"
        ],
        c: 0,
        why: "A partial index only stores keys for rows meeting the predicate (5% of the table)."
      },
      sec2: {
        title: "Covering indexes with INCLUDE",
        content: `<p>How the INCLUDE clause stores non-search payload columns in leaf nodes to unlock Index-Only Scans.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Standard Index (email)", lines: ["B-tree search key: email", "must fetch name from heap file (2 reads)"] },
          { title: "Covering Index (email) INCLUDE (name)", lines: ["B-tree search key: email", "payload: name stored in leaf node", "Index-Only Scan: ZERO heap reads!"] }
        ]
      },
      sec3: {
        title: "Tracing a partial index query",
        content: `<p>Trace how the query planner selects a tiny partial index to answer an unread notification query.</p>`,
      },
      trace: {
        code: [
          "CREATE INDEX idx_unread ON notifications(user_id) WHERE read = false;",
          "SELECT * FROM notifications WHERE user_id = 42 AND read = false;"
        ],
        steps: [
          { line: 0, vars: { partial_index: "indexes only unread notifications (5,000 rows out of 5 million)" } },
          { line: 1, vars: { query_match: "WHERE clause matches index predicate exactly" } },
          { line: 1, vars: { plan: "Index Scan using idx_unread; finishes in 0.02ms" } }
        ]
      },
      practiceIntro: "Test your memory of advanced indexing techniques.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "An index built with a WHERE filter clause is a <0> index.",
          "An index containing all columns needed by a query is a <1> index.",
          "The clause adding payload columns to leaf nodes without indexing is <2>."
        ],
        blanks: [
          { a: ["partial"], why: "Partial indexes filter which rows are indexed." },
          { a: ["covering"], why: "Covering indexes satisfy queries entirely from leaf nodes." },
          { a: ["INCLUDE"], why: "The INCLUDE clause appends payload columns to index leaf pages." }
        ]
      },
      win: "You can author compact partial indexes and covering indexes that achieve maximum query speed with minimum storage footprint.",
      nextTasks: [
        "Create a partial index for active/unpaid records in your database.",
        "Create a covering index using CREATE INDEX ... INCLUDE (col) to trigger an Index-Only Scan.",
        "Verify in EXPLAIN that the plan node reports 'Index Only Scan'."
      ],
      primarySource: "PostgreSQL Documentation: *Partial Indexes* (postgresql.org/docs/current/indexes-partial.html).",
      quiz: [
        {
          q: "What happens if a query's WHERE clause does NOT match the partial index's WHERE predicate?",
          a: [
            "The query planner cannot use the partial index and falls back to another index or sequential scan",
            "The query throws a syntax error",
            "The database automatically rebuilds the index",
            "The query returns incorrect data"
          ],
          c: 0,
          why: "A partial index can only be used if the query predicate is guaranteed to be a subset of the index predicate."
        },
        {
          q: "What is the primary benefit of the 'INCLUDE' clause in PostgreSQL covering indexes?",
          a: [
            "It stores payload columns in leaf nodes without adding them to the B-tree search key, enabling Index-Only Scans with less overhead",
            "It encrypts the payload columns with AES-256",
            "It converts text columns into integer numbers",
            "It removes the need for primary keys"
          ],
          c: 0,
          why: "INCLUDE columns are stored only on leaf pages and are not part of the B-tree ordering hierarchy."
        },
        {
          q: "Why are partial unique indexes useful for soft-deleted tables?",
          a: [
            "They allow 'UNIQUE(email) WHERE deleted_at IS NULL', allowing users to re-register deleted emails while preventing active duplicates",
            "They delete old emails automatically",
            "They compress email addresses into 4 bytes",
            "They prevent spam emails from being sent"
          ],
          c: 0,
          why: "Partial unique indexes enforce uniqueness strictly among active non-deleted records."
        },
        {
          q: "Do partial indexes impose a write penalty when inserting rows that do NOT match the index predicate?",
          a: [
            "No, the database skips updating the partial index entirely for rows that do not match the WHERE clause",
            "Yes, partial indexes must be updated on every single insert in the table",
            "Only on Monday mornings",
            "Yes, if the table has more than 10 columns"
          ],
          c: 0,
          why: "If an inserted row fails the partial index predicate, zero index pages are modified, saving write I/O."
        }
      ]
    },
    {
      n: 7,
      id: "specialized-indexes-gin-gist-and-brin",
      title: "Specialized indexes: GIN, GiST, and BRIN",
      topic: "Specialized Indexes & Maintenance",
      anim: "Pulse",
      lede: "B-trees cannot index JSON arrays, full-text words, or geographic coordinates. Discover specialized index types: GIN for JSONB and search, GiST for GIS, and BRIN for terabytes of time-series data.",
      winShort: "Select between B-tree, GIN, GiST, and BRIN index types based on data structures",
      missionLink: "Expands indexing capabilities beyond scalar numbers and strings",
      sec1: {
        title: "When B-trees fall short",
        content: `<p>A B-tree index maps one scalar value per row. But what if a column holds an <b>array of tags</b>, a <b>JSONB document</b>, a <b>full-text document</b>, or a <b>geographic polygon</b>?</p><p>PostgreSQL provides specialized index access methods: <b>GIN (Generalized Inverted Index)</b> decomposes arrays and JSONB documents into individual components, indexing each element separately. <b>BRIN (Block Range Index)</b> indexes massive time-series tables (terabytes in size) in just a few kilobytes of index space.</p>`,
        keyIdea: "Use GIN for JSONB and multi-value arrays; use BRIN for massive time-ordered datasets."
      },
      predict: {
        q: "Which index type is optimal for searching inside a PostgreSQL JSONB column with the '@>' operator?",
        a: ["GIN index", "Standard B-tree", "Hash index", "Linear scan"],
        c: 0,
        why: "GIN (Generalized Inverted Index) indexes keys and values inside JSONB documents."
      },
      sec2: {
        title: "The index access methods spectrum",
        content: `<p>Match your data type and query requirements to the appropriate index method.</p>`,
      },
      diagram: {
        boxes: [
          { title: "B-Tree (Default)", lines: ["scalars: numbers, strings, dates", "equality (=), range (<, >, BETWEEN), ORDER BY"] },
          { title: "GIN (Inverted)", lines: ["multi-value: JSONB, arrays, text search", "contains (@>), key exists (?)"] },
          { title: "BRIN (Block Range)", lines: ["huge time-series append-only tables", "stores min/max per 128 disk pages", "tiny footprint!"] }
        ]
      },
      sec3: {
        title: "Tracing a GIN inverted index lookup",
        content: `<p>Trace how a GIN index finds all users who have the tag 'python' in their JSONB profile.</p>`,
      },
      trace: {
        code: [
          "CREATE INDEX idx_users_skills ON users USING GIN (skills);",
          "SELECT name FROM users WHERE skills @> '[\"python\"]';",
          "# GIN lookup: jumps directly to the entry for 'python'",
          "# Delivers list of matching row pointers in 0.1ms!"
        ],
        steps: [
          { line: 0, vars: { gin_created: "GIN inverted index created on skills array" } },
          { line: 1, vars: { json_query: "contains operator @> searches for 'python'" } },
          { line: 2, vars: { inverted_lookup: "GIN maps 'python' to exact matching tuple IDs" } }
        ]
      },
      practiceIntro: "Test your memory of specialized index types.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The inverted index type used for JSONB and arrays in PostgreSQL is <0>.",
          "The ultra-compact index storing min/max values for block ranges is <1>.",
          "The index type used for geometric points and GIS spatial queries is <2>."
        ],
        blanks: [
          { a: ["GIN"], why: "GIN stands for Generalized Inverted Index." },
          { a: ["BRIN"], why: "BRIN stands for Block Range Index." },
          { a: ["GiST"], why: "GiST handles multi-dimensional spatial data (PostGIS)." }
        ]
      },
      win: "You can select and configure specialized GIN, GiST, and BRIN indexes for JSONB, geographic, and large-scale time-series data.",
      nextTasks: [
        "Create a GIN index on a JSONB column in PostgreSQL using USING GIN.",
        "Query the JSONB column with the contains operator (@>).",
        "Compare the storage footprint of a BRIN index versus a B-tree on a time-ordered log table."
      ],
      primarySource: "PostgreSQL Documentation: *GIN Indexes* & *BRIN Indexes* (postgresql.org/docs/current/indexes-types.html).",
      quiz: [
        {
          q: "What is a GIN (Generalized Inverted Index) index?",
          a: [
            "An index that breaks complex items (arrays, JSON documents, text) into individual elements and maps each element to rows",
            "An index that can only be used on gin distillery inventory databases",
            "A temporary index stored on a USB flash drive",
            "An index that runs once per year"
          ],
          c: 0,
          why: "Inverted indexes map sub-elements (like words or JSON keys) to rows containing them."
        },
        {
          q: "Why is a BRIN (Block Range Index) remarkably effective on massive append-only log tables?",
          a: [
            "It only stores the minimum and maximum values for physical blocks of 128 disk pages, using a fraction of the RAM of a B-tree",
            "It compresses text files into zip format",
            "It prevents the server from needing internet connectivity",
            "It runs on the client web browser"
          ],
          c: 0,
          why: "On naturally ordered data, storing min/max per block range provides huge speedups with 99% less index space."
        },
        {
          q: "What is the trade-off of GIN indexes compared to standard B-tree indexes?",
          a: [
            "GIN indexes are significantly slower to update on writes because inserting one row requires updating multiple inverted index entries",
            "GIN indexes cannot be saved to disk",
            "GIN indexes only work on integers",
            "GIN indexes are illegal in public cloud servers"
          ],
          c: 0,
          why: "An array of 20 items requires updating 20 separate GIN postings lists on every insert."
        },
        {
          q: "Which index type is standard for PostGIS spatial geographic calculations (e.g. ST_DWithin)?",
          a: [
            "GiST (Generalized Search Tree)",
            "BRIN",
            "Hash index",
            "Sequential Scan"
          ],
          c: 0,
          why: "GiST handles bounding boxes and multi-dimensional spatial geometric hierarchies."
        }
      ]
    },
    {
      n: 8,
      id: "the-write-penalty-and-index-maintenance",
      title: "The write penalty and index maintenance",
      topic: "Specialized Indexes & Maintenance",
      anim: "Pulse",
      lede: "Indexes are not free. Every index imposes a tax on every INSERT, UPDATE, and DELETE. Learn how to audit unused indexes, detect index bloat, and perform online reindexing.",
      winShort: "Audit database systems to identify and drop unused indexes and manage write overhead",
      missionLink: "Protects database write throughput and memory cache efficiency",
      sec1: {
        title: "The index write tax",
        content: `<p>If a table has 10 indexes, every single <code>INSERT</code> must write to the table heap AND update all 10 physical B-tree indexes across disk. Every single <code>UPDATE</code> that touches indexed columns must modify those indexes, triggering B-tree page splits and write amplification.</p><p>Furthermore, indexes consume RAM in the buffer pool. If you have 20 gigabytes of unused indexes, they push active table pages out of memory, slowing down your entire database. <b>Unused indexes are pure overhead with zero benefit.</b></p>`,
        keyIdea: "Every index adds write latency and memory overhead; audit and drop unused indexes regularly."
      },
      predict: {
        q: "What query in PostgreSQL identifies indexes that have had zero scans and are wasting write performance?",
        a: [
          "Querying pg_stat_user_indexes for idx_scan = 0",
          "Running SELECT * FROM pg_unused_indexes",
          "Checking the computer error log file",
          "There is no way to know if an index is used"
        ],
        c: 0,
        why: "pg_stat_user_indexes tracks every index scan; idx_scan = 0 reveals completely unused indexes."
      },
      sec2: {
        title: "The index lifecycle balance",
        content: `<p>Balance read acceleration against write penalties and storage overhead.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Read Speed (+)", lines: ["accelerates WHERE filters", "satisfies ORDER BY", "speeds up JOINs"] },
          { title: "Write Penalty (-)", lines: ["slows down INSERT/UPDATE/DELETE", "B-tree page splits on disk"] },
          { title: "Memory Tax (-)", lines: ["eats shared_buffers RAM", "pushes table pages to disk"] }
        ]
      },
      sec3: {
        title: "Tracing online concurrent reindexing",
        content: `<p>Trace how REINDEX CONCURRENTLY rebuilds bloated index pages without locking out production traffic.</p>`,
      },
      trace: {
        code: [
          "# Bloated index: idx_orders_date has 50% empty pages from heavy updates",
          "# Running standard REINDEX locks table against writes! (Outage risk)",
          "# Safe modern command:",
          "REINDEX INDEX CONCURRENTLY idx_orders_date;",
          "# Engine builds new index in background, swaps pointers, drops old index safely!"
        ],
        steps: [
          { line: 0, vars: { problem: "index bloat degradation" } },
          { line: 3, vars: { safe_execution: "CONCURRENTLY builds replacement index in background" } },
          { line: 4, vars: { outcome: "zero downtime; read/write traffic unaffected during rebuild" } }
        ]
      },
      practiceIntro: "Test your memory of index maintenance practices.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The performance overhead on writes caused by indexes is the write <0>.",
          "The PostgreSQL system view tracking index usage counts is pg_stat_user_<1>.",
          "To rebuild an index without locking out table writes, add the keyword <2>."
        ],
        blanks: [
          { a: ["penalty", "tax"], why: "Write penalty describes index update overhead." },
          { a: ["indexes"], why: "pg_stat_user_indexes tracks scan statistics." },
          { a: ["CONCURRENTLY"], why: "CONCURRENTLY builds indexes in the background without exclusive locks." }
        ]
      },
      win: "You can audit and prune unused database indexes and maintain production performance through concurrent reindexing.",
      nextTasks: [
        "Query pg_stat_user_indexes in PostgreSQL to check scan counts on your indexes.",
        "Drop an unused index to speed up write operations on a busy table.",
        "Create an index concurrently in production using CREATE INDEX CONCURRENTLY."
      ],
      primarySource: "PostgreSQL Documentation: *Monitoring Database Activity — pg_stat_user_indexes* (postgresql.org/docs/current/monitoring-stats.html).",
      quiz: [
        {
          q: "Why should you always use 'CREATE INDEX CONCURRENTLY' in a production database?",
          a: [
            "Standard CREATE INDEX acquires an exclusive lock that blocks all INSERT, UPDATE, and DELETE operations until finished; CONCURRENTLY does not lock writes",
            "CONCURRENTLY makes the index twice as fast forever",
            "CONCURRENTLY is required on SSD drives",
            "Standard CREATE INDEX deletes the table data"
          ],
          c: 0,
          why: "CONCURRENTLY prevents production downtime by building the index without acquiring an exclusive table lock."
        },
        {
          q: "What causes 'index bloat' in PostgreSQL B-trees?",
          a: [
            "Frequent UPDATE and DELETE operations leave dead space in index leaf pages that cannot be reclaimed immediately",
            "Storing long strings in the index",
            "Running more than ten queries per minute",
            "Using numbers larger than 1,000"
          ],
          c: 0,
          why: "Updates and deletes create dead versions; over time, index pages become partially empty (bloated)."
        },
        {
          q: "What is HOT (Heap-Only Tuples) optimization in PostgreSQL?",
          a: [
            "An optimization where an UPDATE avoids updating indexes if the indexed columns did not change and space exists on the same heap page",
            "A tool that increases processor clock speed",
            "A method to stream database logs over HTTP",
            "An encrypted index format"
          ],
          c: 0,
          why: "HOT eliminates index update overhead when updates modify only non-indexed columns."
        },
        {
          q: "What should you do with an index that shows 'idx_scan = 0' after months of production traffic?",
          a: [
            "Investigate if it is a foreign key or disaster recovery check, and if not, safely drop it to eliminate write overhead",
            "Double the size of the index immediately",
            "Rename the index to 'used'",
            "Reboot the database server"
          ],
          c: 0,
          why: "Unused indexes waste memory and disk I/O on every write; dropping them reclaims write throughput."
        }
      ]
    }
  ]
};
