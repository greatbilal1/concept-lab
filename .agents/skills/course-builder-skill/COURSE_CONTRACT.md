# Concept Lab Course Contract

STATUS: FROZEN

> This file is the permanent source of truth for course architecture.
> Calibrated against the canonical course `courses/how-computers-work/`
> on 2026-09-27. Do not re-discover these rules from old courses.

## 1. Immutable platform rules

The following are platform-level and must not vary between courses:

- **Runtime:** Vanilla HTML/CSS/JS. No framework, no bundler, no CDN, no build
  step. Every page must work offline from `file://`.
- **Routing:** Static file paths only. No client-side router. A course lives at
  `courses/<course-id>/course.html`; lessons at `courses/<course-id>/lessons/NNNN-slug.html`;
  reference pages at `courses/<course-id>/reference/<course-id>-{glossary,cheatsheet}.html`.
- **Course registration:** One object per course in `data/courses.js`
  (`window.COURSES`). A course becomes visible as "live" only when its page
  exists and `status: "live"` is set with `href`, `lessons`, `glossary`, `meta`
  and `sections`.
- **Course loading:** The hub page loads `lessons.js` (the course manifest),
  then `assets/js/teach/lesson-engine.js`, then calls
  `TeachLesson.init({ course: "<id>", lessons: window.TeachLessons || [] })`.
- **Lesson loading:** Each lesson page loads `../lessons.js`, then the shared
  engines (`lesson-engine.js`, `quiz.js`, `widgets.js`), then mounts widgets via
  inline `TeachWidgets.*` / `TeachQuiz.mount` calls.
- **Progress tracking:** `TeachLesson` (in `lesson-engine.js`) owns all progress.
  It persists per-course completion in `localStorage`. Gating is currently OFF
  (`var GATING_ENABLED = false;`) — every lesson is reachable.
- **Persistence:** `localStorage` only, keyed by course id. No server, no cookies.
- **Navigation:** Hub → lesson via `TeachLesson.hrefFor(file)`. Lesson → hub via
  `../course.html`. Lesson → lesson via the engine-rendered `#lessonNav`.
  Reference → hub via `../course.html`. Any page → site root via `../../../index.html`
  (depth 3) or `../../index.html` (depth 2).
- **Responsive behavior:** Fluid layout, `clamp()` typography, `--measure` /
  `--maxw` tokens. No course-specific breakpoints.
- **Accessibility baseline:** Semantic headings, `lang="en"`, focusable links,
  `prefers-reduced-motion` honored by shared CSS, alt text on images.

## 2. Course directory contract

```text
courses/
  <course-id>/
    course.html                       # hub / lesson map
    lessons.js                        # window.TeachLessons + window.TeachGlossary
    MISSION.md                        # why this course exists
    NOTES.md                          # authoring decisions + open questions
    RESOURCES.md                      # knowledge / wisdom / gaps
    learning-records/
      0001-<slug>.md                  # one record per authoring milestone
    lessons/
      0001-<slug>.html                # one file per manifest entry
      ...
    reference/
      <course-id>-glossary.html       # renders window.TeachGlossary
      <course-id>-cheatsheet.html     # hand-authored .snippet blocks
```

Nothing else is required. Do not add a course-specific runtime, CSS file, or
component library.

## 3. Course metadata contract

Required fields on every `data/courses.js` object:

```text
num        curriculum number, 1..100 (display order)
id         unique slug, also the folder name
title      display name
emoji      glyph shown on the card
tag        category label (uppercase)
category   lowercase category key
level      "beginner" | "intermediate" | "advanced"
tier       curriculum stage 1..10
desc       one-sentence summary
chips      3-5 short topic labels
colors     { c1, c2 } gradient pair
stageArt   animated thumbnail variant (see STAGE_ART in render.js)
status     "live" | "in-progress" | "planned"
tags       free-form tags
prereq     course ids that should be learned first
related    course ids that pair well
paths      path ids this course belongs to
```

Additional fields required **only when `status: "live"`**:

```text
meta       footer meta line, e.g. "12 lessons · interactive quizzes"
href       path to course.html
lessons    { href, label }
glossary   path to the course's glossary page
sections   [{ id, title, anim }] — course page table of contents
```

`sections[].id` values are referenced by `data/glossary.js` entries, so they
must be stable.

## 4. Lesson contract

See LESSON_CONTRACT.md.

## 5. Shared components

All shared components live in `assets/css/components.css` and
`assets/js/teach/*.js`. Course authors **may use** them and **may not fork**
them.

| Component | Purpose | Where it lives | Extendable? |
|---|---|---|---|
| Lesson shell | `.lesson-wrap`, `.lesson-top`, `.lesson-kicker`, `.lesson-title`, `.lesson-lede`, `.lesson-meta`, `.lesson-foot` | components.css | No |
| Reading progress | `.readbar` + `#readFill`, `.readpill` + `#readPct`, `.lesson-progress-mini` + `#miniFill`/`#miniPct` | components.css + lesson-engine.js | No |
| Prose | `p`, `h2 > .n`, `ul`/`ol`, `code`, `pre` | components.css | No |
| Callouts | `.note`, `.note.good`, `.note.warn`, `.note.bad`, `.note-label` | components.css | No |
| Win box | `.win` | components.css | No |
| Quiz | `.tq*` classes | components.css + quiz.js | No |
| Widgets | `.predict*`, `.fill*`, `.lab*`, `.trace*`, `.diagram`, `.intro-grid` | components.css + widgets.js | No |
| Course map | `.cm-item*` | components.css + lesson-engine.js | No |
| Footer nav | `.lnav*` | components.css + lesson-engine.js | No |
| Ask-teacher | `.ask-teacher` | components.css | No |
| Icons | `Icons.svg(name, cls)` / `Icons.tabler(name, cls)` | icons.js + sprite.svg | No |
| Animations | `Explainer.createStage`, `ExplainerScenes` | anim/*.js | Course may add scenes to its own namespace only |

**Widget API (frozen):**

```js
TeachWidgets.predict(sel, { q, a: [...], c: idx, why, label })
TeachWidgets.fill(sel, { label, lines: ["…<0>…"], blanks: [{ a: [...], why }] })
TeachWidgets.lab(sel, { label, starter })
TeachWidgets.trace(sel, { label, code: [...], steps: [{ line, vars: { k: v } }] })
TeachWidgets.diagram(sel, { boxes: [{ title, lines: [...] }], vertical })
TeachWidgets.cards(sel, { cards: [{ title, body }] })
TeachWidgets.introCards(sel, { cards: [{ ico, title, body }] })
TeachQuiz.mount(sel, [{ q, a: [...], c: idx, why }])
```

## 6. Styling contract

See DESIGN_SYSTEM.md.

## 7. State and persistence

- **What state exists:** per-course lesson completion (a set of lesson numbers).
- **Where it lives:** `localStorage`, managed entirely by `TeachLesson`.
- **How it is persisted:** `TeachLesson.markDone(n)` / `TeachLesson.clearProgress()`.
- **What must survive navigation:** completion state across hub ↔ lesson ↔ reference.
- **What must NOT be persisted:** quiz answers, widget state, scroll position,
  anything course-specific. Do not add new persistence keys.

## 8. Validation

```text
install:   (none — no dependencies)
dev:       (none — open index.html directly)
test:      (none)
lint:      (none)
typecheck: (none)
build:     (none)
validate:  node tools/validate.js
```

`node tools/validate.js` must exit 0. It checks course metadata, stage-art
variants, prereq/related/path resolution, glossary section references, live
course manifests, lesson file existence, and glossary term → lesson references.

## 9. Forbidden changes

Unless explicitly requested as a platform migration, course creation must not modify:

- routing architecture
- lesson engine (`assets/js/teach/lesson-engine.js`)
- quiz engine (`assets/js/teach/quiz.js`)
- widget engine (`assets/js/teach/widgets.js`)
- progress engine
- global design tokens (`assets/css/tokens.css`)
- global typography
- global navigation
- existing course content
- shared state architecture
- persistence architecture
- `assets/css/components.css` (except a genuinely necessary shared addition)

## 10. Calibration record

Canonical reference course:

- **Course:** `courses/how-computers-work/` (12 lessons, 4 sections)
- **Why selected:** most recently approved course; represents the current
  intended architecture and visual system.
- **Date frozen:** 2026-09-27
- **Repository commit/version:** working tree at time of calibration
- **Auditor:** course-builder skill (automated calibration pass)

STATUS: FROZEN
