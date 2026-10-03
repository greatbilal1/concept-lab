# Notes: Procedural Programming

Authoring decisions and open questions for this course.

## Why this course exists
The Functions & Modular Thinking course teaches how to write *one* function. This
course teaches how to organise a *whole program* out of them: what the steps are,
what order they run in, where the data lives, and how to keep the pieces from
tangling. It sits between Functions (course 5) and OOP (course 7), because OOP is
best understood as a response to the problems procedural code runs into — you
cannot appreciate objects until you have felt the pain of passing the same
dictionary to twelve functions.

## Structure
- 10 lessons in 5 topics: **Steps** (1–2), **Data** (3–4), **Structure** (5–6),
  **Modules** (7–8), **Putting it together** (9–10).
- The first half is about *what a procedure is and how data moves between them*;
  the second half is about *organising many procedures into a program*. Lesson 05
  ("One job per procedure") is the hinge — everything before it is about a single
  step, everything after it is about a program of steps.
- Every lesson ends with something built, refactored, or run, per the workspace rule.

## Design decisions
- **Sequence before structure.** Lesson 01 establishes the core idea — a program
  is a sequence of named steps — before Lesson 02 introduces parameters and return
  values. This order means the learner sees the *shape* of procedural code before
  the mechanics of one procedure.
- **Predict before reveal.** Each lesson opens with a `predict` widget so the
  learner commits to an answer before seeing the explanation.
- **Trace widgets for execution order.** Lessons 02, 03, 04, 05, 06, 07, 08, 09, 10
  use a `trace` widget to step through a short program and watch which step runs
  next and how the data changes. Execution order is the core skill this course
  teaches, carried over from Control Flow.
- **Lab widgets for refactoring.** Lessons 03, 04, 05, 06, 07, 08, 09, 10 use the
  `lab` widget so the learner can edit a script and watch the steps run. The
  procedural style is hard to believe until you have seen a script split apart.
- **One primary source per lesson**, all from the official Python docs — no
  third-party tutorials, so the learner builds the habit of reading the source.
- **Quiz options are all the same word count**, per the workspace rule, so the
  answer is never guessable from the shape of the options.
- **The limits are taught, not hidden.** Lesson 09 is explicitly about where
  procedural code stops scaling, so the course ends by pointing forward to OOP
  rather than pretending the style is always right.

## Open questions
- Should `global` be taught as a tool or only as an anti-pattern? Taught as a
  named anti-pattern in Lesson 04, because the learner will meet it in real code
  and needs to recognise it.
- Should modules (Lessons 07–08) include packages (`__init__.py`)? Left out of
  scope — a single-file module is enough to teach the idea, and packages are a
  packaging topic.
- Should Lesson 10 introduce a small project (a to-do list, a word counter)?
  Kept as a synthesis of the whole course rather than a new build, to stay within
  the 10-minute lesson budget.
- The `anim` keys in `lessons.js` are legacy/reference only — lesson pages do not
  use animation stages, matching the OOP convention.
