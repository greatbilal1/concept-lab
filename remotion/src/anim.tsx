import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { theme } from "./theme";

/**
 * A looping sine wave in [0,1] — the Remotion equivalent of a CSS
 * `ease-in-out infinite` keyframe. `phase` offsets the wave so several
 * elements can be staggered, exactly like `animation-delay` in CSS.
 */
export const useLoop = (periodInFrames: number, phase = 0) => {
  const frame = useCurrentFrame();
  const t = ((frame + phase) % periodInFrames) / periodInFrames;
  return (1 - Math.cos(t * Math.PI * 2)) / 2;
};

/** Bob up and down by `amount` pixels. */
export const useBob = (amount = 5, period = 90, phase = 0) => {
  const w = useLoop(period, phase);
  return -amount * w;
};

/** Fade in over the first `frames`, then hold. */
export const useFadeIn = (frames = 20) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [0, frames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
};

/** Continuous rotation in degrees. */
export const useSpin = (secondsPerTurn = 14) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (frame / (fps * secondsPerTurn)) * 360;
};

/** A pulse that expands and fades, looping. */
export const usePulse = (period = 78, phase = 0) => {
  const w = useLoop(period, phase);
  return { scale: 0.6 + w * 1.1, opacity: 0.8 * (1 - w) };
};

/** Blink between 1 and `min` opacity. */
export const useBlink = (period = 66, min = 0.25, phase = 0) => {
  const w = useLoop(period, phase);
  return 1 - (1 - min) * w;
};

/** A dot travelling from 0 to 1 across a track, looping. */
export const useTravel = (period = 66, phase = 0) => {
  const frame = useCurrentFrame();
  const t = ((frame + phase) % period) / period;
  // ease in/out so it feels like the CSS `ease-in-out` packet
  const eased = (1 - Math.cos(t * Math.PI * 2)) / 2;
  const opacity = t < 0.12 ? t / 0.12 : t > 0.88 ? (1 - t) / 0.12 : 1;
  return { t: eased, opacity };
};

/** A bar that grows and shrinks, looping. */
export const useGrow = (min = 0.24, max = 0.82, period = 108, phase = 0) => {
  const w = useLoop(period, phase);
  return min + (max - min) * w;
};

/** A typewriter reveal: returns how many characters to show. */
export const useTypewriter = (text: string, framesPerChar = 3) => {
  const frame = useCurrentFrame();
  const shown = Math.floor(frame / framesPerChar);
  return text.slice(0, Math.max(0, Math.min(text.length, shown)));
};

/** Shared stage background: radial gradient + faint grid. */
export const Stage: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: `radial-gradient(circle at 30% 25%, #1e2c50, #111a30 72%)`,
      overflow: "hidden",
      ...style,
    }}
  >
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.45,
        backgroundImage: `linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
    {children}
  </div>
);

/** A small glowing dot used across many explainers. */
export const Dot: React.FC<{
  color?: string;
  size?: number;
  style?: React.CSSProperties;
}> = ({ color = theme.accent, size = 14, style }) => (
  <div
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      boxShadow: `0 0 ${size}px ${color}`,
      ...style,
    }}
  />
);

/** A rounded panel/chip with a label. */
export const Chip: React.FC<{
  children: React.ReactNode;
  color?: string;
  style?: React.CSSProperties;
}> = ({ children, color = theme.accent, style }) => (
  <div
    style={{
      position: "absolute",
      padding: "10px 16px",
      borderRadius: 12,
      border: `1px solid ${theme.border}`,
      background: "#0e1730",
      color,
      fontSize: 20,
      fontWeight: 700,
      whiteSpace: "nowrap",
      ...style,
    }}
  >
    {children}
  </div>
);

/** A gradient tile with an emoji glyph — the "core" of many explainers. */
export const Core: React.FC<{
  glyph: string;
  size?: number;
  from?: string;
  to?: string;
  glow?: string;
  style?: React.CSSProperties;
}> = ({
  glyph,
  size = 76,
  from = "#2563eb",
  to = "#7c3aed",
  glow = "#7c3aed88",
  style,
}) => (
  <div
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: size * 0.3,
      display: "grid",
      placeItems: "center",
      fontSize: size * 0.46,
      background: `linear-gradient(135deg, ${from}, ${to})`,
      boxShadow: `0 0 28px ${glow}`,
      ...style,
    }}
  >
    {glyph}
  </div>
);
