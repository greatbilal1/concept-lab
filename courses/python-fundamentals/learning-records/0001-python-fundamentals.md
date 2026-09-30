# 0001 — Python Fundamentals course created

- **Date:** 2026-09-29
- **Milestone:** course scaffolded from the frozen COURSE_CONTRACT.md.

## What happened

Created the course skeleton with `tools/new-course.js`. The manifest and
glossary are empty; lessons will be added with `tools/new-lesson.js`.

## What is next

- Write MISSION.md in full.
- Add the first lesson.
- Register the course in `data/courses.js` (see the object printed by the
  scaffolder) and set `status: "live"` once the first lesson exists.

---

# 0002 — Course authored: 10 lessons, glossary, references

- **Date:** 2026-09-29
- **Milestone:** all ten lessons written and quiz-verified; supporting files
  complete.

## What happened

- Wrote the full `lessons.js` manifest (10 aligned entries) and a six-group
  glossary (`syntax`, `types`, `control`, `functions`, `modules`, `together`).
- Authored Lessons 01–10 as complete lesson pages: body prose, a
  predict/fill/trace/diagram/introCards widget set, and a four-question quiz
  with equal-word-count options.
- Replaced the `course.html` hero placeholder with real copy.
- Wrote `MISSION.md`, `NOTES.md`, `RESOURCES.md` in full.
- Hand-authored the cheat sheet (ten `.snippet` blocks, one per lesson, with
  `.ref-toc` anchors and `.see` links back to each lesson).
- Added lesson links to the glossary footer.

## Verification

- `node /tmp/pyfund-quizcheck.js` → "ALL QUIZZES OK" (every quiz option has an
  equal word count; every lesson has a quiz).
- `node tools/validate.js` and `node tools/verify-pages.js --course
  python-fundamentals` run to exit 0. `validate.js` reports the course as not
  yet registered in `data/courses.js` — expected, since a central integrator
  owns that file.

## What is next

- Central integrator registers the course in `data/courses.js` and
  `data/glossary.js` and flips `status` to `"live"`.
- Possible future lessons: `dict`/`tuple`, exceptions, comprehensions.
