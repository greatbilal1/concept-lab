# Notes — Data Structures

Authoring decisions and open questions. Append as you go; never rewrite history.

## Decisions

- (2026-09-30) Course scaffolded from the frozen COURSE_CONTRACT.md. Card already
  existed in `data/courses.js` as `num: 8`, `status: "planned"`; flipped to live.
- (2026-09-30) Ordering is **layout-first**: arrays → linked lists → stacks →
  queues → hash tables → trees. Each lesson introduces one arrangement and the
  operations it makes cheap. Complexity is mentioned only to explain *why* a
  layout helps, never as a standalone topic.
- (2026-09-30) Every structure is shown twice: built from scratch, then the
  built-in Python version. The from-scratch version is the teaching; the built-in
  is the payoff.
- (2026-09-30) Prereq is `oop` (the learner needs classes to build structures from
  scratch). Related: `algorithms-problem-solving`, `big-o-complexity`.

## Open questions

- Should there be a dedicated lesson on "choosing a structure" as a synthesis, or
  is the final lesson enough? Currently the last lesson is the synthesis.
- Do we need a lesson on sets, or is that folded into hash tables?

## Known gaps

- No coverage of graphs (deliberately — that belongs with algorithms).
- No coverage of heaps / priority queues (candidate for a future extension).
