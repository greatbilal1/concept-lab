# Concept Lab

An offline, no-login learning site for courses and concepts. Open the HTML
files directly in a browser — there is no build step, no server, and no
account required.

## What's here

| File | What it is |
|---|---|
| `index.html` | **Concept Lab** — the hub. 32 course cards plus six animated concept explainers. |
| `oop_interactive_course.html` | **Python OOP** — a 20-section interactive course with syntax-highlighted code, quizzes, and a live experiment lab. |
| `videos/` | 25 MP4 explainers rendered with Remotion. |
| `remotion/` | The Remotion project that generates those videos. |

## The courses

The hub lists 32 courses. One is live:

- **Python OOP** — object-oriented programming from first principles, using a
  running KYC / banking example throughout.

The other 31 are placeholders, ready for content.

## Animated explainers

Every concept on the site is explained twice: once as CSS art (which works
with zero dependencies and no network) and once as a short looping video
rendered with [Remotion](https://www.remotion.dev/).

- **6 hub explainers** — mental models, state & behavior, abstraction,
  composition, experimentation, design trade-offs.
- **19 course explainers** — one per OOP concept section, each teaching the
  specific idea from that section.

The videos are 960×540, 30 fps, 4 seconds, and loop seamlessly.

### How the site uses them

Each explainer tile contains a `<video>` layered over the CSS art:

- **Lazy** — the video `src` is only set once the tile scrolls into view.
- **Paused off-screen** — an `IntersectionObserver` pauses videos that leave
  the viewport.
- **Graceful fallback** — if a video fails to load it removes itself and the
  CSS animation remains.
- **Reduced motion** — under `prefers-reduced-motion: reduce` the videos are
  hidden and the CSS art is shown instead.

> **Note:** browsers block media loaded from `file://` URLs. The CSS art
> fallback covers that case, but to see the videos serve the folder over
> HTTP, e.g. `python3 -m http.server`.

## Regenerating the videos

```bash
cd remotion
npm install
npm run render:all     # renders all 25 -> ../videos/*.mp4
npm run studio         # live preview at localhost:3000
```

See `remotion/README.md` for the full composition list and design notes.

## Design

Both pages share one set of design tokens (dark navy panels, cyan/violet
accents, Inter for prose and a monospace stack for code). The Remotion
project mirrors those tokens in `remotion/src/theme.ts` so the videos match
the page exactly.

## License

MIT
