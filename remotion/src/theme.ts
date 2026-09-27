/**
 * Shared design tokens — mirrors the CSS custom properties used by
 * index.html and oop_interactive_course.html so the rendered videos
 * match the site exactly.
 */
export const theme = {
  bg: "#0b1020",
  panel: "#121a2f",
  panel2: "#18223c",
  text: "#edf2ff",
  muted: "#aeb9d6",
  accent: "#67e8f9",
  accent2: "#a78bfa",
  good: "#4ade80",
  warn: "#fbbf24",
  bad: "#fb7185",
  border: "#2b3859",
  code: "#0a0f1d",
} as const;

export const font =
  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

export const mono =
  '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace';

/** Standard explainer video size — matches the site's card aspect. */
export const VIDEO = {
  width: 960,
  height: 540,
  fps: 30,
} as const;

/** A short explainer loop: 4 seconds at 30fps. */
export const LOOP_FRAMES = 120;
