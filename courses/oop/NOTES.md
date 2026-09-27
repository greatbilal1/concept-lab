# NOTES.md — working notes & preferences

## User preferences
- Wants to **build a real Python project** (app / CLI / library) — see [[MISSION.md]].
- Wants to **keep the existing course page** (`oop_interactive_course.html`) and have
  the teach workspace live **alongside** it, not replace it.
- Wants to start **from the very beginning** (what an object is), not skip to
  inheritance.
- Prefers **doing over reading**: every lesson should end with something built or run.
- Works offline, `file://`, no build step, no dependencies — matches the rest of the
  Concept Lab workspace.

## Workspace conventions (inherited from Concept Lab)
- Vanilla HTML/CSS/JS. No frameworks, no bundler, no CDN.
- Design tokens live in `assets/css/tokens.css` (dark theme, `--accent` cyan,
  `--accent2` violet). Lessons reuse these so the workspace looks like one course.
- Icons: inline SVG sprite via `assets/js/icons.js` (`Icons.tabler(name)`), because
  external `<use href="file.svg#id">` is blocked on `file://`.
- Animations: `assets/js/anim/engine.js` (`window.Explainer.createStage`), 960×540
  coordinate space, scenes are functions of `t ∈ [0,1)`.

## Teaching decisions
- This course lives in its own folder: `courses/oop/`. Everything OOP-specific
  (lessons, references, mission, manifest) is inside it, so adding another course
  never collides with this one.
- Lessons live in `./lessons/`, numbered `0001-<dash-case-name>.html`.
- Reference docs live in `./reference/` — the glossary and cheat sheet are the first
  two, and every lesson links to them.
- The lesson manifest is `./lessons.js` (a sibling of `course.html`). It is CONTENT:
  the list of lessons for this course, with `file` paths relative to this folder.
- Shared components are NOT in this folder. They live in the site-wide `assets/`:
  `assets/css/components.css` (lesson shell, quiz, widgets) and
  `assets/js/teach/{lesson-engine,quiz,widgets}.js`. One copy serves every course.
  A course page links them with `../../../assets/…` (lessons/reference) or
  `../../assets/…` (the hub).
- The lesson engine is course-agnostic: it reads `<body data-course="…">` for the
  progress namespace and takes the manifest via `TeachLesson.init({ course, lessons })`.
- The course hub is `./course.html`; the older interactive page stays at the
  workspace root as `oop_interactive_course.html`.
- Quizzes: every answer option is the **same number of words** so formatting gives no
  clue. Feedback is immediate and automatic.
- Each lesson recommends one primary source from [[RESOURCES.md]] and reminds the
  user to ask follow-up questions.

## Open questions
- Which project will the mission's "real Python project" be? Not yet chosen. Once it
  is, lessons should start using that project's domain (e.g. a library catalogue, a
  task tracker) instead of generic `Customer`/`BankAccount` examples.
