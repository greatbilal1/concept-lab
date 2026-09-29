# Concept Lab Course Design System

STATUS: FROZEN

This is the visual source of truth for all courses.
Calibrated against `assets/css/tokens.css` and `assets/css/components.css`
on 2026-09-27.

The objective is consistency, not novelty.

## Global principle

A learner should be able to move from one Concept Lab course to another and immediately recognize that it is the same learning platform.

## Typography

- **Font family:** `--font-sans` = `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- **Mono:** `--font-mono` = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace`.
- **Type scale:** `--fs-xs .72rem`, `--fs-sm .82rem`, `--fs-md .92rem`,
  `--fs-base 1rem`, `--fs-lg 1.12rem`, `--fs-xl 1.5rem`, `--fs-2xl 2rem`,
  `--fs-3xl 3rem`.
- **Line heights:** `--lh-tight 1.15`, `--lh-snug 1.4`, `--lh-base 1.65`.
- **Heading hierarchy:** `h1.lesson-title` (clamp), `h2` with a `<span class="n">`
  number badge, `h3` inside `.win` / `.course-map`.
- **Body size:** `--fs-base` with `--lh-base`.
- **Code typography:** `--font-mono`, rendered inside `pre > code` with the
  shared copy button.
- **Labels:** `.lesson-kicker`, `.note-label`, `.snippet .lbl` — uppercase,
  letter-spaced, small.
- **Captions:** `.lesson-meta`, `.see`, `.hub-bar-label` — `--fs-sm`, `--muted`.

## Colors

Actual design tokens (from `tokens.css`):

```text
background:  --bg      #0b1020
surface:     --panel   #121a2f   (--panel2 #18223c for raised)
primary:     --accent  #67e8f9   (cyan)
secondary:   --accent2 #a78bfa   (violet)
text:        --text    #edf2ff
muted:       --muted   #aeb9d6
border:      --border  #2b3859
success:     --good    #4ade80
warning:     --warn    #fbbf24
error:       --bad     #fb7185
code:        --code    #0a0f1d
```

Do not hard-code new course-specific colors when an existing token applies.
The only permitted course-specific colors are the `colors: { c1, c2 }` gradient
pair on the course's `data/courses.js` card and the matching `.lesson-card .num`
gradient in its `course.html`.

## Spacing

Scale: `--sp-1 4px`, `--sp-2 8px`, `--sp-3 12px`, `--sp-4 16px`, `--sp-5 24px`,
`--sp-6 32px`, `--sp-7 48px`, `--sp-8 64px`, `--sp-9 96px`.

Canonical page padding: hub `56px 24px 96px`; lesson `.lesson-wrap` uses the
shared component padding.

## Layout

- **Content max width:** `--maxw 1180px` (hub, course page).
- **Lesson column width:** `--measure 760px`; wide prose `--measure-wide 62ch`.
- **Sidebars:** none.
- **Navigation:** sticky `.topbar` on site pages; `.lesson-top` + `#lessonNav`
  inside lessons.
- **Mobile layout:** single column, fluid; no course-specific breakpoints.
- **Card behavior:** `.lesson-card` grid `46px 1fr auto`, hover lift.
- **Code block layout:** `pre` with `padding-top: 34px` to clear the copy button.

## Components

Canonical visual components (all in `components.css`):

- lesson header — `.lesson-kicker`, `.lesson-title`, `.lesson-lede`, `.lesson-meta`
- section — `h2 > .n`
- callout — `.note` (+ `.good` / `.warn` / `.bad`) with `.note-label`
- code block — `pre > code` + copy button
- example — `.lesson-figure`, `.diagram`
- exercise — `.fill`, `.predict`, `.trace`, `.lab`
- quiz — `.tq*`
- progress indicator — `.readbar`, `.readpill`, `.lesson-progress-mini`
- navigation — `.lesson-top`, `.lnav*`, `.course-map`
- interactive visualization — `.diagram`, `.intro-grid`
- media/illustration — `.lesson-figure`

## Animation

- **Preferred motion style:** subtle, meaning-carrying; no decorative motion.
- **Duration ranges:** `--t-fast .18s`, `--t-base .25s`, `--t-slow .6s`.
- **Easing:** `ease` / `ease-in-out`.
- **Entrance/exit conventions:** fade + small translate.
- **Reduced-motion behavior:** `@media (prefers-reduced-motion: reduce)` disables
  transforms/animations in shared CSS.

Animation should reinforce meaning and must not change the platform's visual identity.

## Illustrations

- **Illustration style:** flat, dark-theme, token-colored.
- **Icon style:** inline SVG sprite (`#i-*` from `sprite.svg`, `#tb-*` from
  `tabler-sprite.svg`) via `Icons.svg()` / `Icons.tabler()`.
- **Image treatment:** rounded, bordered, on `--panel`.
- **Border radius:** `--radius 16px`, `--radius-sm 11px`, `--radius-pill 999px`.
- **Shadows:** minimal; rely on borders and background contrast.
- **Aspect-ratio conventions:** diagrams are fluid width; animation stages are
  960×540.

## Responsive behavior

Fluid layout with `clamp()` typography. No course-specific breakpoints — inherit
the shared ones.

## Accessibility

- **Keyboard behavior:** all interactive elements are native `<button>` / `<a>`.
- **Focus states:** shared focus ring from `components.css`.
- **Semantic structure:** one `h1` per page, ordered `h2` sections.
- **Color contrast:** tokens are chosen for AA contrast on `--bg`.
- **Reduced-motion support:** honored globally.
- **Alternative text conventions:** `alt` on every `<img>`; decorative SVGs
  marked `aria-hidden`.

## Forbidden design drift

Do not introduce a course-specific:
- navigation style
- typography system
- color palette
- button system
- card system
- spacing system
- animation language

unless explicitly approved as a platform-wide design change.

## Calibration

Reference course:

- **Course:** `courses/how-computers-work/`
- **Date frozen:** 2026-09-27
- **Repository commit/version:** working tree at time of calibration

STATUS: FROZEN
