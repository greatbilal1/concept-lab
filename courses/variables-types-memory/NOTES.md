# Notes: Variables, Types & Memory

Authoring decisions and open questions for this course.

## Why this course exists
The OOP course assumes you already understand that a name is a reference to an
object. Several learners hit that assumption and stalled. This course fills the
gap: it teaches the naming-and-binding model *before* OOP, so that `self`, shared
state, and mutation stop being surprises.

## Structure
- 10 lessons in 4 topics: **Names & values** (1–2), **Types** (3–5),
  **Memory** (6–8), **Putting it together** (9–10).
- The first half is about *names and types*; the second half is about *memory*.
  Lesson 06 ("References, not copies") is the hinge — everything before it sets up
  the label model, everything after it uses the reference model.
- Every lesson ends with something built, counted, or run, per the workspace rule.

## Design decisions
- **Label model, not box model.** The whole course is built on "a name is a label
  bound to a value". The box model is explicitly named as a common mistake in
  Lesson 01, because it is the single biggest source of confusion downstream.
- **Predict before reveal.** Each lesson opens with a `predict` widget so the
  learner commits to an answer before seeing the explanation.
- **Trace widgets for state.** Lessons 02, 03, 04, 05, 06, 07, 08, 09, 10 use a
  `trace` widget to step through a short program and watch names rebind or values
  mutate. This is the core skill the course teaches.
- **One primary source per lesson**, all from the official Python docs or PEP 8 —
  no third-party tutorials, so the learner builds the habit of reading the source.
- **Quiz options are all the same word count**, per the workspace rule, so the
  answer is never guessable from the shape of the options.

## Open questions
- Should there be a lesson on `tuple` and `frozenset` as immutable containers?
  Currently folded into Lesson 05 as examples rather than a full lesson.
- Should the stack/heap lesson (07) come before references (06)? Kept as-is
  because the reference model is the prerequisite for understanding frames.
- The `anim` keys in `lessons.js` are legacy/reference only — lesson pages do not
  use animation stages, matching the OOP convention.
