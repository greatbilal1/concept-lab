# Learning Record 0001 — Why this course exists

**Date:** 2026-09-27
**Course:** Functions & Modular Thinking

## Context

The learner has finished Control Flow & Logic. They can write a program that
decides and repeats — but every program they write is still one long scroll of
statements at the top level. When something breaks, they cannot point at the
piece that broke, because there are no pieces. When they need the same work
twice, they copy it.

This is the exact wall the mission describes: *"I write one long scroll of
statements, I can't find my bugs, and I copy work instead of reusing it."*

## Decision

Build a ten-lesson course that moves the learner from *statements* to *named
pieces*, in five topics:

1. **Defining** (01–02) — a definition names a block of work; a call runs it.
2. **Passing** (03–04) — parameters carry values in; defaults make them optional.
3. **Returning** (05–06) — `return` hands a value back; `None` is the signal.
4. **Scope & the stack** (07–08) — the call stack explains nested calls and
   tracebacks; scope explains where names live.
5. **Modular thinking** (09–10) — contracts (docstrings, hints) and splitting a
   real program into one-job functions.

Lesson 07 (the call stack) is the hinge: it is the first lesson where the learner
must hold more than one active call in their head, and it is what makes a
traceback readable instead of frightening.

## Key insight

The course's real subject is not syntax. It is **the move from a value that is
shown to a value that is handed back**. Every lesson before 05 prints; every
lesson from 05 on returns. That single change is what makes composition possible,
and composition is what makes a program modular.

The second insight is that `None` is not a nuisance but a *signal*: it means
either "no value by design" or "a path forgot to return". Teaching the learner to
tell those apart is what turns a traceback from noise into a map.

## Consequences

- Every lesson opens with a predict widget and closes with a quiz, so the learner
  is always guessing before being told.
- Trace widgets are used heavily in lessons 02 and 05–10, because the call stack
  is invisible and must be made visible.
- The mutable-default trap (lesson 04) is taught as a *rule*, not a curiosity:
  defaults are created once, so they must never be mutable.
- Out of scope, deliberately: classes and OOP, decorators, closures and
  higher-order functions, recursion, and modules-as-files. Those belong to later
  courses; this one stays on the single-file, single-function level.
- The next course (OOP) can assume the learner can define, call, pass to, and
  return from a function, and can read a traceback.
