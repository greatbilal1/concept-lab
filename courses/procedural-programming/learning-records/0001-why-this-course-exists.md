# Learning Record 0001 — Why this course exists

**Date:** 2026-09-29
**Course:** Procedural Programming

## Context
The Functions & Modular Thinking course teaches how to write a single function:
parameters, return values, scope, the call stack. But learners could still not
organise a *program*: they wrote one long script, or a pile of functions that all
reached for the same globals, or a file so tangled that changing one line broke
three others. The OOP course assumes the learner already knows how to structure a
program out of procedures, because a class is a way of organising behaviour — you
cannot appreciate it until you have felt the limits of organising behaviour
without it. This course was created to make that assumption true.

## Decision
Create a 10-lesson course that teaches how to organise a program as a sequence of
named steps, structured as five topics:

1. **Steps** (Lessons 01–02) — a program is a sequence; a procedure names one step.
2. **Data** (Lessons 03–04) — passing data in, getting data out, avoiding globals.
3. **Structure** (Lessons 05–06) — one job per procedure; shared state and its cost.
4. **Modules** (Lessons 07–08) — grouping steps into a file; importing and reusing.
5. **Putting it together** (Lessons 09–10) — where the style breaks down, and the
   whole shape of a procedural program.

## Key insight
The single most important idea is **the step**: a program is a sequence of named
steps, each doing one job, each taking data in and handing data back. Every lesson
in this course is built around that question — the `trace` widget exists
specifically to make the sequence of steps visible, and the `lab` widget exists so
the learner can split a script apart and watch the steps run.

## Consequences
- This course should be a prerequisite for the OOP course.
- The "one job per procedure" rule (Lesson 05) is the foundation for the single
  responsibility principle in OOP, which is deliberately out of scope here.
- Lesson 09 is the bridge to OOP: the moment the same data is passed to every
  function is the moment an object starts to look attractive. The course ends by
  naming that moment rather than hiding it.
