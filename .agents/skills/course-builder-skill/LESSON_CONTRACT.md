# Concept Lab Lesson Contract

STATUS: FROZEN

This document defines the permanent structure of a lesson.
Calibrated against `courses/how-computers-work/lessons/0001-bits-and-binary.html`
on 2026-09-27.

## Required lesson sequence

The canonical lesson page, in order:

1. `<head>` — charset, viewport, `<title>Lesson NN — <Title></title>`, then
   `../../../assets/css/tokens.css` and `../../../assets/css/components.css`.
2. `<body class="lesson-body" data-course="<id>" data-lesson="N" data-lesson-id="<slug>">`
3. `.readbar > .fill#readFill` and `.readpill > #readPct` (reading progress).
4. `.lesson-wrap` containing:
   - `.lesson-top` — `.lesson-back` (`../course.html`) + `.lesson-progress-mini`
     (`#miniFill`, `#miniPct`).
   - `.lesson-kicker` — `<span class="n">Lesson NN</span> · <Topic>`.
   - `h1.lesson-title`, `p.lesson-lede`.
   - `.lesson-meta` — three `<span>`s: **Time**, **Win**, **Mission link**.
   - Numbered `h2` sections: `<h2><span class="n">1</span>Section title</h2>`.
   - Widget mount points as empty `<div id="…">` elements.
   - `.win` — "✓ Your win for today".
   - Final `h2` — "Do this next" with an `<ol>` of 3 concrete tasks.
   - `.note` — "Primary source" citing one entry from `RESOURCES.md`.
   - `.ask-teacher` — the "Stuck, or curious?" reminder.
   - `#lessonNav` (engine-rendered prev/next).
   - `.course-map > #courseMap` (engine-rendered).
5. Scripts, in order: `../../../assets/js/icons.js`, `../lessons.js`,
   `../../../assets/js/teach/lesson-engine.js`, `../../../assets/js/teach/quiz.js`,
   `../../../assets/js/teach/widgets.js`.
6. Inline `<script>` mounting widgets and the quiz.

## Lesson metadata

The manifest entry (`window.TeachLessons`) requires:

```text
n      1-based lesson number (unique, in order)
id     dash-case slug, matches the filename after the number
file   path relative to the course folder, e.g. "lessons/0001-slug.html"
title  short title shown in nav and the map
topic  grouping label used by the hub
anim   legacy scene key (kept for the hub card art)
```

The page itself carries `data-course`, `data-lesson`, `data-lesson-id`.

## Content rules

### Explanations

- Start from the learner's current knowledge.
- Introduce one major abstraction at a time.
- Prefer concrete examples before terminology-heavy explanations.
- Explain why a concept exists, not only what it is.
- Connect each new concept to earlier concepts.

### Examples

Examples must:
- be runnable/plausible
- match the explanation
- avoid unexplained magic
- increase in complexity gradually

### Exercises

Exercises must test concepts actually taught.

Avoid:
- trick questions
- accidental dependence on advanced concepts
- large jumps in difficulty
- exercises whose solution is unrelated to the lesson

### Knowledge checks

Knowledge checks should distinguish:
- recognition
- understanding
- application

Prefer questions that reveal misconceptions.

**Hard rule:** every quiz option must have the **same number of words**, so
nothing about the answer is given away by length.

## Interactive elements

Use existing interaction primitives first. The available widgets are:

- `TeachWidgets.predict` — predict-then-reveal multiple choice.
- `TeachWidgets.fill` — fill-in-the-blank recall.
- `TeachWidgets.trace` — step-through a sequence of states.
- `TeachWidgets.diagram` — boxes-and-arrows structural diagram.
- `TeachWidgets.introCards` — three icon cards.
- `TeachWidgets.cards` — plain titled cards.
- `TeachWidgets.lab` — tiny Python-ish interpreter (class/attr/instance/print only).
- `TeachQuiz.mount` — the end-of-lesson knowledge check.

Do not create a new interaction framework for one lesson.

## Visuals

Visuals should explain a concept rather than decorate the page.

Use animation when:
- state changes over time
- relationships are difficult to understand statically
- sequencing matters
- cause/effect is important

Do not animate merely because animation is available. Lesson pages do **not**
embed animation stages (matching the existing courses); the `anim` key in the
manifest is used only for hub card art.

## Lesson completion

`TeachLesson` marks a lesson done when the learner reaches the end of the page
(scroll-based). This behavior is owned by `lesson-engine.js` and must not be
changed for a new course.

## Calibration

Canonical lesson:

- **Course:** `courses/how-computers-work/`
- **Lesson:** `lessons/0001-bits-and-binary.html`
- **Date frozen:** 2026-09-27
- **Repository commit/version:** working tree at time of calibration

STATUS: FROZEN
