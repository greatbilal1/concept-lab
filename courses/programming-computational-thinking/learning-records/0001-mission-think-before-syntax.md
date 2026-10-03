# Learning record 0001 — Mission: build computational thinking before syntax

**Date:** 2026-09-27
**Course:** Programming & Computational Thinking

## What was decided

The course teaches the six computational-thinking moves — decomposition,
patterns, abstraction, algorithms, evaluation, generalisation — *before* any
programming language, and treats them as one connected loop rather than six
separate definitions.

## Why

The catalogue places this course at `num: 2`, immediately after
`how-computers-work` and before `variables-types-memory`. That position is a
statement about prerequisites: the learner is expected to arrive knowing what a
computer *is*, and to leave knowing how to *think* about problems, so that the
later language courses can focus on syntax.

If this course taught syntax, it would duplicate `python-fundamentals` and
break the ordering of the whole foundations tier.

## Evidence / reasoning

- `data/courses.js` describes the course as "Decomposition, patterns,
  abstraction and algorithms — how to turn a problem into steps a computer can
  run." The description is about *thinking*, not about a language.
- Its `prereq` is `how-computers-work` (the machine) and its `related` courses
  are `control-flow-logic` and `algorithms-problem-solving` — both downstream.
- Wing (2006) frames computational thinking as a thought process independent of
  any particular tool, which supports teaching it tool-free.

## Consequences

- Examples must be understandable with zero programming knowledge. Physical-world
  examples (sandwiches, trips, routines, mazes) carry Lessons 1–5.
- Lesson 5 introduces step notation only; it must not become a language lesson.
- Lesson 6 (evaluation) and Lesson 7 (generalisation) extend the loop beyond
  "write the steps": judging the result, then widening it to a family.
- Lesson 8 is the only lesson that touches the `lab` widget, and only to show
  that a machine can follow steps — not to teach programming.
- The course is 8 lessons. Adding a ninth would require a genuinely new idea,
  not more practice.
