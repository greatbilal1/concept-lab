# Concept Lab

An offline, no-login learning site for courses and concepts. Open the HTML
files directly in a browser — there is no build step, no server, and no
account required.

## What's here

| File | What it is |
|---|---|
| `index.html` | **Concept Lab** — the hub. 32 course cards plus six animated concept explainers. |
| `oop_interactive_course.html` | **Python OOP** — a 20-section interactive course with syntax-highlighted code, quizzes, and a live experiment lab. |
| `explainer.js` | The animation runtime: a tiny keyed-reconciliation engine that turns a scene function into a live DOM animation. |
| `explainer.css` | Shared animation primitives (cards, chips, code panels, rings, badges, captions). |
| `explainers.js` | All 25 scene definitions — 6 hub + 19 course. |

## The courses

The hub lists 32 courses. One is live:

- **Python OOP** — object-oriented programming from first principles, using a
  running KYC / banking example throughout.

The other 31 are placeholders, ready for content.

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

`explainer.js` exposes `window.Explainer.createStage(host, scenes, opts)`.
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
- Numbers in `style` are converted to pixels automatically.

This is what makes counting numbers, state flips (✓ allowed → ✕ rejected), and
before/after comparisons possible — things CSS alone cannot express.

### Behaviour

- **Plays in view** — an `IntersectionObserver` starts the loop when a tile
  scrolls into view and pauses it when it leaves.
- **Reduced motion** — under `prefers-reduced-motion: reduce` the runtime
  draws a single static frame and never starts the loop.
- **No dependencies** — no frameworks, no build step, no network requests.

> **Note:** because everything is DOM + CSS, the site works when opened
> directly from `file://` — no local server needed.

## Design

Both pages share one set of design tokens (dark navy panels, cyan/violet
accents, Inter for prose and a monospace stack for code). `explainers.js`
mirrors those tokens in its `T` palette so the animations match the page
exactly.

## License

MIT
