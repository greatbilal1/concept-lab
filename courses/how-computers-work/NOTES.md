# Notes — How Computers Actually Work

## Workspace conventions (inherited, do not fork)
- This folder is **content only**. All shared code lives in `assets/`.
- Lessons link `../../../assets/css/tokens.css` then `../../../assets/css/components.css`.
- Lesson body: `<body class="lesson-body" data-course="how-computers-work" data-lesson="N" data-lesson-id="…">`.
- Scripts, in order: `assets/js/icons.js`, `../lessons.js`,
  `assets/js/teach/lesson-engine.js`, `assets/js/teach/quiz.js`,
  `assets/js/teach/widgets.js`.
- Hub link from a lesson is `../course.html`; from `reference/` it is also `../course.html`.
- Root link from depth-3 pages is `../../../index.html`.
- Manifest `file` values are course-relative (`lessons/0001-…`).

## Teaching decisions
- **No code as the subject.** This course is about the machine, so examples are
  numbers, bits, and traces — not Python classes. Where code appears it is there to
  be *traced*, not written.
- **Every lesson ends with a count or a run.** Binary counting, hex conversion,
  a gate truth table, a hand-simulated clock cycle. The win is always something the
  learner produced.
- **One idea per lesson.** The temptation with hardware is to explain everything at
  once. Resist it: each lesson is one layer of the stack.
- **Numbers before architecture.** Binary and hex come first because every later
  lesson (memory addresses, instruction encoding, colour values) depends on them.
- **Quiz rule:** every option must have exactly the same number of words.

## Open questions
- Should there be a lesson on **compilers vs interpreters**? It fits "source to
  running instruction" but may belong in a future programming course instead.
- The `concepts` array on this course in `data/courses.js` references ids
  (`memory`, `data-type`, `value`) that do not exist in `data/concepts.js`. Either
  add those concepts or repoint the array. Not blocking.
- Animations: the OOP *lessons* dropped their explainer stages, but the OOP
  *interactive page* still uses them. This course's lessons follow the lessons
  convention (no stages) — the hub card art is enough.
