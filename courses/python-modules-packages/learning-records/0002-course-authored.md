# 0001 — Python Modules & Packages course created

- **Date:** 2026-09-27
- **Milestone:** course scaffolded from the frozen COURSE_CONTRACT.md.

## What happened

Created the course skeleton with `tools/new-course.js`. The manifest and
glossary are empty; lessons will be added directly (the manifest is written
first, so `tools/new-lesson.js` is not used — it appends and would mis-number).

## What is next

- Write MISSION.md in full.
- Add the first lesson.
- Register the course in `data/courses.js` and set `status: "live"` once the
  first lesson exists.

---

# 0002 — Course authored: 10 lessons, glossary, references

- **Date:** 2026-09-27
- **Milestone:** all ten lessons written and quiz-verified; supporting files
  complete.

## What happened

- Wrote the full `lessons.js` manifest (10 aligned entries) and a four-group
  glossary (`imports`, `packages`, `environments`, `together`).
- Authored Lessons 01–10 as complete lesson pages: body prose, a
  predict/fill/trace/diagram/introCards widget set, and a four-question quiz
  with equal-word-count options.
- Replaced the `course.html` hero placeholder with real copy.
- Wrote `MISSION.md`, `NOTES.md`, `RESOURCES.md` in full.
- Hand-authored the cheat sheet (ten `.snippet` blocks across four sections,
  with `.ref-toc` anchors and `.see` links back to each lesson).

## Verification

- `node tools/validate.js` — pending (run after `data/courses.js` integration).
- `node tools/verify-pages.js` — pending.

## What is next

- Register the course in `data/courses.js` (`status: "live"`, `href`,
  `lessons`, `glossary`, `sections` matching the four glossary group ids).
- Add glossary entries to `data/glossary.js`.
