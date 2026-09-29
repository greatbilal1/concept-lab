# Learning Record 0001 — Why this course exists

**Date:** 2026-09-27
**Course:** Control Flow & Logic

## Context
The Variables, Types & Memory course teaches what a value *is*, but learners could
still not read a program: they could not say which branch would fire, or why a loop
stopped, or why a chain of `if`s gave the wrong answer. The Functions & Modular
Thinking course assumes control flow is already automatic, because a function body
is mostly branches and loops. This course was created to make that assumption true.

## Decision
Create a 10-lesson course that teaches decisions and repetition, structured as five
topics:

1. **Booleans** (Lessons 01–02) — truthiness, and the operators that produce booleans.
2. **Logic** (Lessons 03–04) — `and`/`or`/`not`, truth tables, short-circuiting.
3. **Branching** (Lessons 05–06) — `if`/`else`, indentation, `elif` chains, nesting.
4. **Loops** (Lessons 07–09) — `while`, `for`, iterables, accumulators, `break`.
5. **Putting it together** (Lesson 10) — control flow as a shape, early exits,
   sentinels, state machines.

## Key insight
The single most important idea is **execution order**: a program written top to
bottom is not a program that runs top to bottom. Branches skip regions and loops
revisit them, and the only way to read code confidently is to be able to say which
line runs next. Every lesson in this course is built around that question — the
`trace` widget exists specifically to make execution order visible.

## Consequences
- This course should be a prerequisite for Functions & Modular Thinking.
- The accumulator pattern (Lesson 08) is the foundation for comprehensions and
  `map`/`filter`/`reduce`, which are deliberately out of scope here.
- The state machine (Lesson 10) is the bridge to the OOP course: an object is a
  state machine whose state is its attributes and whose events are its methods.
