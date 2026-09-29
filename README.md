# Concept Lab

An offline, no-login learning site for courses and concepts. Open the HTML
files directly in a browser — there is no build step, no server, and no
account required.

## Structure

```
index.html                    hub — courses, paths, concepts
glossary.html                 glossary — every term, searchable
                              (links each term to its course's own glossary)
oop_interactive_course.html   the OOP interactive lab (legacy, still reachable)

data/                         site-wide content — the only files you edit
  courses.js                  course catalogue (all 100 courses)
  paths.js                    learning paths
  glossary.js                 glossary terms
  concepts.js                 concept cards
  course-widgets.js           interactive widget definitions

assets/                       SHARED code — one copy for the whole site
  css/
    tokens.css                design tokens: colour, type, spacing, shape
    components.css            shared components: lesson shell, quiz, widgets
    site.css                  hub + glossary styles
    course.css                course page styles
    anim.css                  animation primitives
  js/
    render.js                 builds the DOM for every page
    course-runtime.js         course page behaviour
    search.js                 hub search
    icons.js                  inline SVG sprite loader
    anim/
      engine.js               the animation runtime
      scenes.js               all scene definitions
      start.js                starts animations on any page
    teach/                    shared teaching components
      lesson-engine.js        progress, gating, nav, course map, highlighting
      quiz.js                 the quiz widget
      widgets.js              predict / fill / lab / trace widgets

courses/                      one folder per course — CONTENT only, no code
  oop/                        the Object-Oriented Programming course
    course.html               lesson hub / course map  ← the course's main page
    lessons.js                this course's lesson manifest + glossary
    MISSION.md                why this course exists
    RESOURCES.md              primary sources
    NOTES.md                  working notes
    lessons/0001-….html       the 14 lessons
    reference/                glossary + cheat sheet
    learning-records/         progress notes
```

### Where a course lives

A course's **main page is `courses/<id>/course.html`** — the lesson hub. Every
link to a course (the hub card, learning paths, concept cards, glossary sources,
search results) resolves through `href` in `data/courses.js`, so pointing that
field at `course.html` wires the whole site at once.

### One glossary, no duplication

A course's vocabulary is written **once**, in its own manifest
(`courses/<id>/lessons.js`, as `window.TeachGlossary`). Two pages render it:

- `courses/<id>/reference/<id>-glossary.html` — the full, grouped term list
  (a shell; `assets/js/teach/lesson-engine.js` fills it in).
- `glossary.html` — the site-wide index, which links each term back to that
  course glossary page via the `glossary` field in `data/courses.js`.

A new course adds its own `window.TeachGlossary` and a `glossary` path; nothing
is copied. `tools/validate.js` checks every term points at a lesson that exists.

### The three layers

| Layer | Lives in | Holds |
|---|---|---|
| **Tokens** | `assets/css/tokens.css` | Colour, fonts, spacing, radii, motion. Change a value here and every page follows. |
| **Components** | `assets/css/components.css`, `assets/js/teach/*` | Quiz, widgets, lesson engine, lesson styling. One copy for the whole site. |
| **Content** | `courses/<id>/` | Lessons, manifest, mission, references. Zero code copied. |

A course page links the two shared layers and then its own content:

```html
<link rel="stylesheet" href="../../../assets/css/tokens.css">
<link rel="stylesheet" href="../../../assets/css/components.css">
<script src="../../../assets/js/teach/lesson-engine.js"></script>
```

### Adding a course

1. Copy `courses/oop/` to `courses/<id>/`.
2. Delete the lessons, then write your own. Each lesson is a page with
   `<body class="lesson-body" data-course="<id>" data-lesson="N" data-lesson-id="…">`.
3. Rewrite `courses/<id>/lessons.js` — the manifest of `{ n, id, file, title, topic }`.
   `file` is relative to the course folder, e.g. `lessons/0001-….html`.
4. Add one object to `window.COURSES` in `data/courses.js` with
   `href: "courses/<id>/course.html"` and `lessons: { href: "courses/<id>/course.html" }`.
5. Run `node tools/validate.js`.

`data-course` namespaces progress, so two courses never share a completion
state. Everything course-specific stays inside its own folder, so two courses
can both have a `lessons/0001-*.html` without colliding.

## The site pages are shells

Every HTML page is a thin shell. It links the stylesheets, loads the data
files and the renderer, and declares empty mount points:

```html
<div class="courses" id="courseGrid"></div>
```

`assets/js/render.js` fills them. Nothing about a course is written in HTML —
it all comes from `data/courses.js`. That means the hub card, the stat
counters, the sidebar navigation, the section headings and the relationship
rails can never drift out of sync with each other.

## Adding a course

Append one object to `window.COURSES` in `data/courses.js`:

```js
{
  id: "my-course",              // slug, also the page filename stem
  title: "My Course",
  emoji: "🎯",
  tag: "CATEGORY",              // uppercase label on the card
  desc: "One sentence about what it teaches.",
  chips: ["Topic A", "Topic B", "Topic C"],
  colors: { c1: "#2563eb", c2: "#7c3aed" },
  stage: "code",                // animated thumbnail variant
  status: "soon",               // "live" once the page exists
  tags: ["topic-a", "topic-b"], // used by the glossary and path filters
  prereq: ["python-basics"],    // ids to learn first
  related: ["clean-code"],      // ids that pair well
  paths: ["python-developer"],  // path ids this belongs to
  sections: [                   // table of contents (live courses only)
    { id: "intro", title: "Introduction", anim: "MyIntroScene" }
  ]
}
```

That is the whole workflow. The card appears on the hub, the counters update,
the path lists pick it up, and the glossary can link to it — with no other
file touched.

### Stage variants

`stage` picks the animated thumbnail. Available variants:

`code`, `code-sweep`, `code-pulse`, `bars`, `bars-nodes`, `layers`,
`layers-orbit`, `globe`, `globe-nodes`, `pulse`, `pulse-nodes`, `term`,
`term-layers`, `flow`, `gear-flow`, `shield-pulse`, `net-sweep`, `orbit-nodes`

They are defined in the `STAGE_ART` map in `assets/js/render.js` and animated
by the keyframes in `assets/css/site.css`.

### Making a course live

1. Set `status: "live"` and add `href` if the filename differs from `<id>.html`.
2. Add a `sections` array — the sidebar and the `<h2>` headings are both
   generated from it, so numbering can never drift.
3. Give each section a `data-anim` scene name and add that scene to
   `assets/js/anim/scenes.js` under `ExplainerScenes.<courseId>`.

## Animated explainers

Every concept on the site is explained by a short, looping animation that runs
live in the browser. There are no video files — the animations are plain DOM
elements styled with CSS, so they work offline straight from disk.

- **6 hub explainers** — mental models, state & behavior, abstraction,
  composition, experimentation, design trade-offs.
- **19 course explainers** — one per OOP concept section, each teaching the
  specific idea from that section.

Each animation is a 6-second loop that cycles through its scenes seamlessly.

### How it works

`assets/js/anim/engine.js` exposes `window.Explainer.createStage(host, scenes, opts)`.
A *scene* is a plain function of normalized time `t ∈ [0, 1)` that returns a
flat list of elements, each with a stable key `k`:

```js
function mentalModels(t) {
  return [
    el("ring", { left: 380, top: 180, width: 200, height: 200, borderRadius: "50%" }),
    text("cap", "A model is a simplified map of reality", { bottom: 40 }),
  ];
}
```

On every frame the runtime reconciles the returned list against the DOM:

- A key that already exists keeps its **same DOM node**, so CSS transitions
  animate it smoothly between frames.
- A key that disappears is removed; a new key is created.
- Numbers in `style` are converted to pixels automatically (except for
  unitless properties like `opacity` and `zIndex`).
- `html` renders markup; `text` renders plain text.

Scenes are authored in a **960×540** coordinate space. The stage scales itself
to fit its container with a `ResizeObserver`, so the same scene works in a
large hub tile and a small sidebar thumbnail.

### Starting an animation

You never call `createStage` directly. Mark any element with `data-anim` and
`assets/js/anim/start.js` starts it:

```html
<div class="sec-stage" data-anim="OopInheritance"></div>
<div class="stage"     data-anim="Composition"></div>
```

The scene is looked up in `window.ExplainerScenes` using the namespace from
`data-anim-scope`, falling back to `<body data-course>`, then `"hub"`. So the
same markup works on any page with no per-page JavaScript.

| Attribute | Effect |
|---|---|
| `data-anim` | Scene name to play (required) |
| `data-anim-scope` | Force a namespace, e.g. `oop` |
| `data-anim-duration` | Scene duration in ms (default `6000`) |
| `data-anim-once` | Play a single pass, then hold the last frame |

The module is idempotent — a stage is only ever started once — and it
re-scans whenever the renderer emits `conceptlab:rendered`, so stages built
dynamically by `assets/js/render.js` are picked up automatically.

```js
Animations.start(document);   // start every stage on the page
Animations.stop(document);    // tear them all down
```

### Behaviour

- **Plays in view** — an `IntersectionObserver` starts the loop when a tile
  scrolls into view and pauses it when it leaves.
- **Reduced motion** — under `prefers-reduced-motion: reduce` the runtime
  draws a single static frame and never starts the loop.
- **No dependencies** — no frameworks, no build step, no network requests.

> **Note:** because everything is DOM + CSS, the site works when opened
> directly from `file://` — no local server needed.

## Design

All pages share one set of design tokens (dark navy panels, cyan/violet
accents, Inter for prose and a monospace stack for code) defined in
`assets/css/tokens.css`. `assets/js/anim/scenes.js` mirrors those tokens in
its `T` palette so the animations match the page exactly.

## License

MIT
