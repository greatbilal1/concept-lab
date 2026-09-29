# Learning Record 0001 — Why this course exists

**Date:** 2026-09-27
**Course:** Variables, Types & Memory

## Context
While building the OOP course, a recurring blocker appeared: learners could write
classes, but they could not explain why two names sometimes shared a value and
sometimes did not. The OOP lessons assume a reference model that was never taught
explicitly. This course was created to teach that model first.

## Decision
Create a 10-lesson course that teaches naming and binding *before* OOP, structured
as four topics:

1. **Names & values** (Lessons 01–02) — a name is a label; assignment is a binding.
2. **Types** (Lessons 03–05) — types are rules; numbers, text, and mutability.
3. **Memory** (Lessons 06–08) — references, the stack and heap, garbage and lifetime.
4. **Putting it together** (Lessons 09–10) — copying vs sharing, and naming.

## Key insight
The single most important idea is the **label model**: a name is a label bound to a
value, not a box that contains one. Every downstream surprise — shared mutation,
aliasing bugs, `0.1 + 0.2`, local names vanishing — follows from taking that model
seriously. Lesson 01 names the box model explicitly as a common mistake, because it
is the belief that causes all the others.

## Consequences
- This course should be a prerequisite for the OOP course.
- The reference model taught here (Lesson 06) is the foundation for `self` in OOP.
- Future courses on data structures can assume the learner knows mutability and
  aliasing, and can build on them directly.
