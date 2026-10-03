# Learning record 0002 — Extending the course from 6 to 8 lessons

**Date:** 2026-09-27
**Course:** Programming & Computational Thinking

## What was decided

The course was extended from 6 lessons to 8 by adding two genuine
computational-thinking moves — **Evaluation** (Lesson 6) and **Generalisation**
(Lesson 7) — and renumbering the synthesis lesson to Lesson 8.

## Why

The original 6-lesson course covered the four canonical moves (decomposition,
patterns, abstraction, algorithms) plus a map and a synthesis. That is the
minimum that teaches the material honestly, but it stops at "write the steps".

Two moves were missing, and both are real:

- **Evaluation** — the "looking back" stage. Pólya's *How to Solve It* treats
  examining the solution as a distinct stage of solving a problem, not an
  afterthought. Without it, the course teaches learners to produce a solution
  but never to judge one.
- **Generalisation** — the move that turns a one-off solution into a reusable
  one. It is the outward-facing twin of pattern recognition (which finds
  patterns *inside* a problem; generalisation finds the family *around* it).

Adding these two takes the course to 8 lessons without inventing filler, which
was the constraint set in learning record 0001.

## Evidence / reasoning

- The user asked why the course was shorter than the other courses (12–14
  lessons) and chose the "add the missing moves" route over splitting each idea
  into concept + practice pairs.
- Evaluation and generalisation are both attested in the course's own
  `RESOURCES.md`: Pólya (looking back) and Bhargava (a solution stated as a
  general procedure with a defined boundary).
- Neither move requires new widgets or new platform features — both are taught
  with the existing `introCards`, `predict`, `diagram`, `fill`, `trace` and quiz
  primitives.

## Consequences

- The loop is now six moves, not four. Lesson 1's map and the cheatsheet's loop
  diagram were updated to match.
- Two new glossary groups were added (`evaluation`, `generalisation`), and the
  `together` group's lesson numbers moved from 6 to 8.
- `data/courses.js` gained two `sections` entries and the `meta` string now
  reads "8 lessons".
- The synthesis lesson (now Lesson 8) was extended to run the shelf problem
  through all six moves, including a new "Move 6 — generalise it" section.
- Adding a ninth lesson would again require a genuinely new idea, not more
  practice.
