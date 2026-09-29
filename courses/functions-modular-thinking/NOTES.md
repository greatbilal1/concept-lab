# Notes: Functions & Modular Thinking

Authoring decisions and open questions for this course.

## Why this course exists
The Control Flow & Logic course teaches what a program *does* — how it decides and
repeats. This course teaches the unit you build those decisions *into*: the
function. It sits between Control Flow (course 4) and Procedural Programming
(course 6), because a program made of named steps is exactly a program made of
functions, and you cannot read one without this.

## Structure
- 10 lessons in 5 topics: **Defining** (1–2), **Passing** (3–4), **Returning**
  (5–6), **Scope & the stack** (7–8), **Modular thinking** (9–10).
- The first half is about *the mechanics of a single function*; the second half is
  about *what happens when functions call each other* and *how to split a program
  into them*. Lesson 07 ("The call stack") is the hinge — everything before it is
  one function in isolation, everything after it is functions in a conversation.
- Every lesson ends with something built, called, or refactored, per the workspace
  rule.

## Design decisions
- **Define before call.** Lesson 01 teaches that a function is a named block you
  define once and call many times, before Lesson 02 introduces parameters. This
  order means `greet()` reads naturally from the start.
- **Predict before reveal.** Each lesson opens with a `predict` widget so the
  learner commits to an answer before seeing the explanation.
- **Trace widgets for the call stack.** Lessons 02, 05, 06, 07, 08, 09, 10 use a
  `trace` widget to step through a call and watch which line runs next and which
  frame is on top. The call stack is the core new mental model this course adds.
- **Lab widgets for calling.** Lessons 03, 04, 05, 06, 07, 08, 09, 10 use the `lab`
  widget so the learner can change an argument and watch the result change. A
  function is hard to believe until you have called it with two different inputs.
- **One primary source per lesson**, all from the official Python docs — no
  third-party tutorials, so the learner builds the habit of reading the source.
- **Quiz options are all the same word count**, per the workspace rule, so the
  answer is never guessable from the shape of the options.

## Open questions
- Should `*args`/`**kwargs` be a lesson? Left out of scope for now — it is a later
  topic, and plain parameters teach the underlying idea first.
- Should closures be a lesson? Kept out, because a closure is a function that
  remembers a scope, and scope (Lesson 07) has to be automatic first.
- Should Lesson 10 introduce modules as "functions in a file"? Left out of scope to
  keep the course focused on the function as the unit of modularity; the
  `python-modules-packages` course picks that up.
- The `anim` keys in `lessons.js` are legacy/reference only — lesson pages do not
  use animation stages, matching the OOP convention.
