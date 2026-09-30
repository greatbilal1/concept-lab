# Quiz template & author checklist

Every lesson quiz must have **exactly 4 questions**, each with **four options**.

---

## The template

Copy this into a lesson's inline `<script>`, then replace the content.

```js
TeachQuiz.mount("#quiz", [
  {
    q: "First question?",
    a: ["Option one here", "Option two here", "Option three here", "Option four here"],
    c: 0,
    why: "Why the correct option is correct, and why the others are not."
  },
  {
    q: "Second question?",
    a: ["Option one here", "Option two here", "Option three here", "Option four here"],
    c: 1,
    why: "Why the correct option is correct, and why the others are not."
  },
  {
    q: "Third question?",
    a: ["Option one here", "Option two here", "Option three here", "Option four here"],
    c: 2,
    why: "Why the correct option is correct, and why the others are not."
  },
  {
    q: "Fourth question?",
    a: ["Option one here", "Option two here", "Option three here", "Option four here"],
    c: 3,
    why: "Why the correct option is correct, and why the others are not."
  }
]);
```

The mount point must exist in the body:

```html
<div id="quiz"></div>
```

`c` is the 0-based index of the correct option. `why` is shown after answering.

---

## Writing good options

Keep the options plausible and parallel so the answer is not obvious:

- **Make every option a real candidate** — no throwaway distractors.
- **Keep them similar in shape** — e.g. every option is
  `"<subject> <verb> <object>"`.
- **Vary the correct answer's position** across the four questions.
- **Do not let length give it away** — avoid one option being dramatically
  longer or shorter than the others.

---

## Pre-commit checklist

Run through this before considering a lesson or course done.

**Quiz**
- [ ] Exactly 4 questions.
- [ ] Each question has four options.
- [ ] `c` points at the genuinely correct option.
- [ ] Every question has a `why`.
- [ ] `<div id="quiz"></div>` exists in the body.

**Lesson page**
- [ ] `<body class="lesson-body" data-course data-lesson data-lesson-id>` — all
      three attributes present and matching the folder / filename.
- [ ] Asset paths use `../../../assets/…` (depth 3).
- [ ] `.lesson-back` links to `../course.html`.
- [ ] Required elements present: `#readFill`, `#readPct`, `#miniFill`,
      `#miniPct`, `#lessonNav`, `#courseMap`.
- [ ] Frozen script order: `icons.js`, `lessons.js`, `lesson-engine.js`,
      `quiz.js`, `widgets.js`.
- [ ] Every `TeachWidgets.x("#id")` call has a matching `<div id="id">`.
- [ ] No leftover scaffold placeholders.

**Manifest & registration**
- [ ] `lessons.js` has one entry per lesson, `n` contiguous from 1.
- [ ] `data/courses.js` `meta` lesson count matches the manifest.
- [ ] `sections[]` ids match the glossary group ids in `lessons.js`.

**Gate**
- [ ] `node tools/validate.js` exits 0.
- [ ] `node tools/verify-pages.js` exits 0.
