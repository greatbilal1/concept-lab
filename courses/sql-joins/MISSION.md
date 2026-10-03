# Mission — SQL Joins & Query Thinking

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
