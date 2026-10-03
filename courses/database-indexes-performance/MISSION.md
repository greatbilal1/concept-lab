# Mission — Indexes & Database Performance

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
