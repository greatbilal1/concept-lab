# Notes — Programming & Computational Thinking

## Workspace conventions

- This course follows the frozen Concept Lab contracts in
  `.agents/skills/course-builder-skill/`.
- Canonical reference course: `courses/how-computers-work/`.
- Shared assets are never forked. Only course-specific files are added:
  `course.html`, `lessons.js`, `lessons/*.html`, `reference/*.html`,
  `MISSION.md`, `NOTES.md`, `RESOURCES.md`, `learning-records/`.
- Depth rules: `course.html` is depth 2 (`../../assets/`); lessons and reference
  pages are depth 3 (`../../../assets/`).

## Teaching decisions

- **Order of the six moves.** Decomposition → Patterns → Abstraction →
  Algorithms → Evaluation → Generalisation. This is deliberate: you cannot spot
  a pattern until you have broken a problem into parts, and you cannot choose an
  abstraction until you have seen the pattern. Algorithms come next because they
  are the *output* of the first three. Evaluation follows because you cannot
  judge a solution until one exists. Generalisation comes last because you
  cannot widen a solution until you have judged it worth keeping.
- **Lesson 1 is a map, not a definition.** Beginners need to know where they are
  going before they are taught the parts. Lesson 1 introduces the six moves as
  a single loop, then each later lesson takes one.
- **Lesson 8 is the synthesis.** It deliberately re-uses the same problem from
  Lesson 1 so the learner can see how much more they can do with it now.
- **No code until it helps.** Lessons 1–5 stay in the physical world. Lesson 5
  introduces step notation (numbered steps, then a simple pseudocode shape).
  Lesson 8 uses the `lab` widget once, to show that an algorithm is something a
  machine can actually follow.
- **Evaluation and generalisation are real moves, not padding.** They are the
  two stages Pólya's *How to Solve It* adds after solving ("looking back") and
  the move that turns a one-off solution into a reusable one. They were added
  to take the course from 6 to 8 lessons without inventing filler.
- **Misconceptions are named explicitly.** Each lesson has a `.note.warn` that
  states the common wrong belief in the learner's own words, then corrects it.
- **Quiz options are word-count matched.** Every option in a question has the
  same number of words, so length never leaks the answer.

## Open questions

- Should Lesson 5 introduce pseudocode, or stay purely in numbered steps? Kept
  pseudocode minimal (a `repeat`/`if` shape only) so it does not become a
  language lesson.
- The `lab` widget only understands class/attribute/instance/print. It is used
  in Lesson 8 as a *demonstration* of a machine following steps, not as a
  programming exercise. If it proves confusing, it can be swapped for a `trace`
  widget without changing the lesson's structure.
