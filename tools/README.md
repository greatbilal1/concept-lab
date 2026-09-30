# Concept Lab — tools

Dev-only scripts. None of them ship to the browser; they exist so that a course
author (human or agent) never has to hand-derive structure, hand-count words, or
hand-audit pages.

Run everything from the repo root.

---

## The one rule that matters

**The contracts are the only style source.**

`LESSON_CONTRACT.md` and `COURSE_CONTRACT.md` (in
`.agents/skills/course-builder-skill/`) are the single source of truth for
structure, style, and the widget API. They are `STATUS: FROZEN`.

- Do **not** re-derive conventions by reading old courses.
- Do **not** compare several courses to "see how they do it".
- Read the contracts, then read **exactly one** canonical course
  (`courses/how-computers-work/`) only if you need to copy a concrete pattern.
- When extending a course, that course is its own style reference.

If a contract and an old course disagree, **the contract wins**. Old courses are
not evidence; they are history.

The scaffolders below encode the contracts, so the fastest way to obey the rule
is to let them generate the skeleton and then fill in content.

---

## Scaffolders

### `new-course.js` — create a whole course skeleton

```bash
node tools/new-course.js <course-id> "<Course title>" [--num <N>] [--emoji <glyph>]
```

Creates `courses/<id>/` with the full COURSE_CONTRACT.md layout:

```
course.html                       hub / lesson map (canonical shell)
lessons.js                        empty TeachLessons + TeachGlossary
MISSION.md  NOTES.md  RESOURCES.md
learning-records/0001-<slug>.md
lessons/                          (empty — fill with new-lesson.js)
reference/<id>-glossary.html      renders window.TeachGlossary
reference/<id>-cheatsheet.html    hand-authored .snippet blocks
```

It never overwrites an existing course folder. It does **not** edit
`data/courses.js` — it prints the exact object to paste, because that file is
hand-curated and order-sensitive. Register the course, then run the validator.

### `new-lesson.js` — add one lesson

```bash
node tools/new-lesson.js <course-id> "<Lesson title>" [--topic "<Topic>"] [--anim <Key>]
```

Reads `courses/<id>/lessons.js` to find the next lesson number, writes
`courses/<id>/lessons/NNNN-<slug>.html` from the canonical skeleton, and appends
the matching manifest entry. The skeleton already has:

- correct depth-3 asset paths (`../../../assets/…`)
- the required sections and widget mount points
  (`#predict1`, `#diagram1`, `#trace1`, `#fill1`, `#quiz`)
- a 4-question quiz with four placeholder options each
- the frozen script order

It never overwrites an existing file. Fill in the content, then validate.

---

## Validator

### `validate.js` — the gate

```bash
node tools/validate.js
```

Must exit `0`. It checks course metadata, stage-art variants, prereq/related/path
resolution, glossary section references, live-course manifests, lesson file
existence, and — for every live course's lesson HTML — that:

- each quiz has exactly **4** questions
- each quiz question has at least one option
- every `TeachWidgets.x("#id")` call has a matching `<div id="id">`

Quiz-count findings are warnings (`✗`) that do **not** force a non-zero exit,
but they should be driven to zero. Run this after every change.

### `verify-pages.js` — the page audit

```bash
node tools/verify-pages.js [--course <id>] [--quiet]
```

Where `validate.js` checks **data** (courses.js, glossary, manifests) and quiz
correctness, this checks the **HTML pages** themselves. For every live course it
audits the hub, every lesson, and every reference page for:

- `<!DOCTYPE html>`, `<html lang>`, charset, viewport, a `<title>`
- asset paths that actually resolve on disk
- no nested `<a>` inside `<a>`
- no leftover scaffold placeholders
- lesson pages: the `data-course` / `data-lesson` / `data-lesson-id` contract,
  required elements (`#readFill`, `#readPct`, `#miniFill`, `#miniPct`,
  `#lessonNav`, `#courseMap`), `.lesson-back` → `../course.html`, the frozen
  script order, and a `TeachQuiz.mount("#quiz")` + `<div id="quiz">`
- hub pages: `#lessonList`, `#statDone`, `#statTotal`, `#hubFill`, `#startBtn`,
  and links to the course glossary + cheatsheet
- reference pages: `data-course`, a link back to `../course.html`, and (for
  glossaries) the manifest + engine scripts

Exit `0` = every page passed. Exit `1` = at least one problem. Run it alongside
`validate.js` before considering a course done.

---

## Quiz template & checklist

See [`QUIZ_TEMPLATE.md`](./QUIZ_TEMPLATE.md) for a copy-paste quiz snippet and
the full pre-commit checklist.

---

## Typical authoring loop

```bash
node tools/new-lesson.js <course-id> "<Lesson title>"   # scaffold
# … fill in the content …
node tools/validate.js                                  # data + quiz gate
node tools/verify-pages.js                              # page structure gate
```

Do not commit or push unless explicitly asked.
