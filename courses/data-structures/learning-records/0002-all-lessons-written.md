# 0002 — All eight lessons written and the course is live

- **Date:** 2026-10-01
- **Milestone:** the data-structures course is complete and registered as live.

## What happened

Wrote the full eight-lesson sequence and finished the course shell:

1. **Arrays: the default** — contiguous layout, O(1) index reads, O(n) inserts.
2. **Linked lists** — nodes and pointers, cheap front inserts, slow nth reads.
3. **Stacks (LIFO)** — one end only, push/pop, the undo pattern.
4. **Queues (FIFO)** — two ends, the `list.pop(0)` trap, `collections.deque`.
5. **Hash tables** — hash function, collisions, load factor, resizing, `dict`.
6. **Trees** — nodes that branch, root/leaf/depth, binary trees.
7. **Binary search trees** — the ordering rule, halving search, traversals.
8. **Choosing a structure** — Big-O, amortised cost, trade-offs, a decision guide.

Also completed:

- Rewrote `reference/data-structures-cheatsheet.html` from the scaffold into eight
  real sections, each with a runnable snippet and a link back to its lesson.
- Filled in the `course.html` hero (title, lede, `statTotal` = 8, start button).
- Registered the course in `data/courses.js` — `status: "live"`, `meta`, `href`,
  `lessons`, `glossary`, and five `sections` matching the glossary group ids.
- Added 28 glossary entries to `data/glossary.js` across the five sections.

## Verification

- `node tools/validate.js` → passed (courses 100, paths 10, glossary 202).
- `node tools/verify-pages.js` → passed (courses 8, pages 106).
- Every quiz question was checked with `node tools/wc.js` so all four options in
  a question have an equal word count.

## What is next

- Consider a lesson on sets, or fold sets into the hash-tables lesson.
- Known gaps: no graphs, no heaps or priority queues.
- The course is a prerequisite for `algorithms-problem-solving`.
