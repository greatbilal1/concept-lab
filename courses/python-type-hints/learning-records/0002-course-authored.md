# Learning record 0002 — Python Type Hints authored

**Date:** 2026-09-27
**Milestone:** Course authored end to end

## What happened

Wrote the full `python-type-hints` course: a 10-lesson manifest with four topic
groups (Annotations, Generics, Checking, Together), 38 glossary terms, ten lesson
pages, a hand-authored cheat sheet, and the mission, notes and resources documents.

The lesson arc follows the learner's questions in order:

1. Why annotate? — what an annotation is, and what it is not.
2. Annotating variables and functions — the three positions.
3. The common types — scalars, `None`, and the `Any` vs `object` judgement.
4. Optional and Union — the most misread name in Python typing, plus narrowing.
5. Collections and generics — parameterising containers, and `TypeVar`.
6. Type aliases and NewType — naming types and making them distinct.
7. Protocols and Callables — structural typing and function values.
8. Static checking with mypy — running a checker and reading its output.
9. Annotations at runtime — `__annotations__`, forward references, frameworks.
10. Typing in a real project — adoption strategy and where to stop.

## Verification

- Every lesson has exactly 4 quiz questions and a `<div id="fill1"></div>` mount.
- Every lesson uses the frozen script order and the required lesson elements.
- `node tools/validate.js` passes with the course live in `data/courses.js`.
- `node tools/verify-pages.js` passes with all pages resolving.

## What is next

- Consider a follow-up course covering `@overload`, `ParamSpec` and variadic
  generics, which are deliberately out of scope here.
- Revisit whether `TypeVar` deserves its own lesson rather than sharing lesson 5.
