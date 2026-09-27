# Concept Lab — Remotion explainers

Programmatic video versions of the animated concept explainers on the
Concept Lab site. Each explainer is a React component animated with
Remotion's frame-based API, rendered to MP4, and dropped into `../videos/`
where `index.html` and `oop_interactive_course.html` pick them up.

There are two families of explainers:

- **Concept Lab hub** (`index.html`) — six general concept cards.
- **OOP course** (`oop_interactive_course.html`) — nineteen per-section
  explainers that teach the specific idea in each section, using the same
  Customer / BankAccount / RiskModel examples the course text uses.

## Why Remotion

The site's explainers were originally pure CSS `@keyframes`. That works, but
the motion is hard to reason about and impossible to export. Remotion gives
us:

- **Deterministic frames** — every animation is a pure function of the frame
  number, so a render is reproducible.
- **Real easing math** — `useLoop()` is a cosine wave, not a hand-tuned
  keyframe percentage.
- **Exportable output** — the same component renders to MP4 for the site and
  to a still for docs.

## Layout

```
remotion/
  package.json        deps + scripts
  tsconfig.json       TS config (react-jsx, strict)
  remotion.config.json  entry point
  render-all.mjs      renders every composition -> ../videos/
  src/
    index.ts          registerRoot()
    Root.tsx          <Composition> registry
    theme.ts          design tokens mirrored from the site CSS
    anim.tsx          shared hooks + primitives (Stage, Dot, Chip, Core)
    Concepts.tsx      the six hub explainer components
    OopConcepts.tsx   the nineteen OOP course explainer components
```

## Commands

```bash
npm install          # once
npm run studio       # live preview at localhost:3000
npm run render:all   # render all 25 -> ../videos/*.mp4
node render-all.mjs MentalModels Abstraction   # render a subset
```

## Compositions

### Concept Lab hub (`index.html`)

| ID | Concept | Motion |
|---|---|---|
| `MentalModels` | Mental models | Brain core bobbing inside a slowly rotating dashed ring, four idea nodes drifting on staggered phases |
| `StateBehavior` | State & behavior | Two chips bobbing out of phase, a packet travelling the link between them |
| `Abstraction` | Abstraction | Five dim internal bars blinking behind a pulsing ring and a solid `calculate()` chip |
| `Composition` | Composition | Three labelled blocks bobbing on staggered phases beside a single assembled `📦` |
| `Experimentation` | Experimentation | Two counter-rotating knobs driving a bar that grows and shrinks, with a blinking readout |
| `DesignTradeoffs` | Design trade-offs | A balance beam tilting back and forth between `simple` and `flexible` pans |

### OOP course (`oop_interactive_course.html`)

| ID | Section | What it shows |
|---|---|---|
| `OopMentalModel` | Introduction / 1. Mental model | A `Customer` state card and a `Behavior` card linked by a travelling packet |
| `OopClassVsObject` | 2. Class vs object | A dashed `class Customer` blueprint feeding two separate objects |
| `OopSelfAttributes` | 3. `self` and attributes | A `full_name` parameter flowing onto `self.user_name` |
| `OopInitMethod` | 4. `__init__` | An empty outline that fills with state when `__init__` runs |
| `OopMethods` | 5. Methods | `account.deposit(500)` with the balance counting up |
| `OopEncapsulation` | 6. Encapsulation | A locked vault that flips from allowing to rejecting a withdrawal |
| `OopInheritance` | 7. Inheritance | A packet travelling from `Customer` down into `BusinessCustomer` |
| `OopPolymorphism` | 8. Polymorphism | One `risk_type()` call cycling through three different behaviors |
| `OopAbstraction` | 9. Abstraction | A dashed `RiskModel (ABC)` promise beside a solid `KYCModel` implementation |
| `OopComposition` | 10. Composition | A `Customer` holding an `Address` — "has-a" |
| `OopDunderMethods` | 11. Dunder methods | `print(c)` resolving through `__str__` into `Customer: Bilal` |
| `OopProperties` | 12. Properties | `account.balance` with a setter that rejects a negative value |
| `OopMethodKinds` | 13. Instance/class/static | Three method cards cycling active |
| `OopDataclasses` | 14. Dataclasses | Boilerplate collapsing into an `@dataclass` declaration |
| `OopDesignSystem` | 15. Designing a system | Four steps revealing in order: nouns, data, actions, relationships |
| `OopKycRiskModel` | 16. KYC risk model | A score counting up to 87 and flipping to a HIGH RISK badge |
| `OopKnowledgeCheck` | 17. Knowledge check | Question boxes resolving into check marks |
| `OopExperimentLab` | 18. Experiment lab | A flask bubbling while a snippet prints `Bilal` |
| `OopCheatSheet` | 19. Cheat sheet | The five core terms sliding in one by one |

All 25 are 960×540, 30 fps, 120 frames (4 s), and loop seamlessly because
every animation is periodic over the composition length.

## How the site consumes them

`index.html` places a `<video class="stage-video" data-src="videos/X.mp4">`
inside each `.stage`. `oop_interactive_course.html` does the same inside each
`.sec-stage`. The CSS art stays in the DOM underneath and is only faded out
once the video has decoded a frame (`.has-video`). Behaviour:

- **Lazy** — `src` is not set until the card scrolls into view.
- **Paused off-screen** — an `IntersectionObserver` pauses videos that leave
  the viewport so six loops don't run at once.
- **Graceful fallback** — if a video fails to load, the element removes
  itself and the CSS animation remains.
- **Reduced motion** — under `prefers-reduced-motion: reduce` the videos are
  `display:none` and the CSS art is shown instead.

On the course page the section tile is 96×96 while the CSS art is showing,
and grows to 288×162 (16:9) once a video is ready so the explainer is
readable. On narrow screens it becomes full-width at `aspect-ratio: 16/9`.

## Note on formats

Only MP4 (H.264) is emitted. VP8/WebM rendered by Remotion failed to open in
Chromium's demuxer (`DEMUXER_ERROR_COULD_NOT_OPEN`), and MP4 plays in every
target browser, so the WebM pass was dropped.
