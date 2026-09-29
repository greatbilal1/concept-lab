# Notes: Control Flow & Logic

Authoring decisions and open questions for this course.

## Why this course exists
The Variables, Types & Memory course teaches what a value *is*. This course teaches
what a program *does* with it: how it decides, and how it repeats. It sits between
Variables (course 3) and Functions & Modular Thinking (course 5), because a
function body is mostly control flow, and you cannot read one without this.

## Structure
- 10 lessons in 5 topics: **Booleans** (1–2), **Logic** (3–4), **Branching** (5–6),
  **Loops** (7–9), **Putting it together** (10).
- The first half is about *values that are true or false*; the second half is about
  *what to do with them*. Lesson 05 ("Choosing a path") is the hinge — everything
  before it produces a boolean, everything after it consumes one.
- Every lesson ends with something built, counted, or run, per the workspace rule.

## Design decisions
- **Truthiness before comparison.** Lesson 01 teaches that almost every value is
  truthy or falsy before Lesson 02 introduces the operators that produce booleans.
  This order means `if items:` reads naturally from the start.
- **Predict before reveal.** Each lesson opens with a `predict` widget so the
  learner commits to an answer before seeing the explanation.
- **Trace widgets for execution order.** Lessons 02, 03, 04, 05, 06, 07, 08, 09, 10
  use a `trace` widget to step through a short program and watch which line runs
  next. Execution order is the core skill this course teaches.
- **Lab widgets for loops.** Lessons 05, 06, 07, 08, 09, 10 use the `lab` widget so
  the learner can change a value and watch the branch or loop respond. Loops are
  hard to believe until you have seen one stop.
- **One primary source per lesson**, all from the official Python docs — no
  third-party tutorials, so the learner builds the habit of reading the source.
- **Quiz options are all the same word count**, per the workspace rule, so the
  answer is never guessable from the shape of the options.

## Open questions
- Should `match`/`case` be a lesson? Left out of scope for now — it is a later
  topic, and `elif` chains teach the underlying idea first.
- Should the loop `else` clause (Lesson 09) be its own lesson? Kept folded in,
  because it only makes sense next to `break`.
- Should Lesson 10 introduce comprehensions as "the accumulator, compressed"?
  Left out of scope to keep the course focused on explicit control flow.
- The `anim` keys in `lessons.js` are legacy/reference only — lesson pages do not
  use animation stages, matching the OOP convention.
