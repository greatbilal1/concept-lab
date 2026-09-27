import React from "react";
import { AbsoluteFill } from "remotion";
import { theme, font } from "./theme";
import {
  Stage,
  Dot,
  Chip,
  Core,
  useBob,
  useSpin,
  usePulse,
  useBlink,
  useTravel,
  useGrow,
  useLoop,
  useFadeIn,
} from "./anim";

/* ------------------------------------------------------------------ */
/* 1. Mental models — brain core with orbiting idea nodes              */
/* ------------------------------------------------------------------ */
export const MentalModels: React.FC = () => {
  const bob = useBob(8, 90);
  const spin = useSpin(14);
  const fade = useFadeIn(18);
  const nodes = [
    { left: "22%", top: "26%", color: theme.accent, phase: 0 },
    { right: "20%", top: "34%", color: theme.accent2, phase: 36 },
    { left: "30%", bottom: "22%", color: theme.accent, phase: 72 },
    { right: "26%", bottom: "26%", color: theme.good, phase: 108 },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 190,
            height: 190,
            marginLeft: -95,
            marginTop: -95,
            border: `2px dashed #67e8f955`,
            borderRadius: "50%",
            transform: `rotate(${spin}deg)`,
          }}
        />
        <Core
          glyph="🧠"
          size={88}
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translateY(${bob}px)`,
            opacity: fade,
          }}
        />
        {nodes.map((n, i) => (
          <Node key={i} {...n} />
        ))}
      </Stage>
    </AbsoluteFill>
  );
};

const Node: React.FC<{
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  color: string;
  phase: number;
}> = ({ color, phase, ...pos }) => {
  const w = useLoop(120, phase);
  return (
    <Dot
      color={color}
      size={14}
      style={{
        ...pos,
        transform: `translate(${w * 12}px, ${-w * 12}px)`,
      }}
    />
  );
};

/* ------------------------------------------------------------------ */
/* 2. State & behavior — data chip linked to action chip               */
/* ------------------------------------------------------------------ */
export const StateBehavior: React.FC = () => {
  const bobA = useBob(7, 102);
  const bobB = useBob(7, 102, 51);
  const travel = useTravel(72);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <Chip
          color={theme.accent}
          style={{
            left: 70,
            top: "50%",
            transform: `translateY(-50%) translateY(${bobA}px)`,
          }}
        >
          balance = 1000
        </Chip>
        <Chip
          color={theme.accent2}
          style={{
            right: 70,
            top: "50%",
            transform: `translateY(-50%) translateY(${bobB}px)`,
          }}
        >
          deposit(500)
        </Chip>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 150,
            height: 4,
            marginLeft: -75,
            marginTop: -2,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />
        <Dot
          color="#ffffff"
          size={16}
          style={{
            left: `calc(50% - 75px + ${travel.t * 150}px)`,
            top: "50%",
            marginTop: -8,
            opacity: travel.opacity,
          }}
        />
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 3. Abstraction — messy internals behind a clean panel               */
/* ------------------------------------------------------------------ */
export const Abstraction: React.FC = () => {
  const bob = useBob(7, 96);
  const pulse = usePulse(78);
  const mess = [
    { left: "12%", top: "22%", phase: 0 },
    { left: "30%", top: "52%", phase: 15 },
    { left: "16%", top: "74%", phase: 30 },
    { right: "14%", top: "30%", phase: 45 },
    { right: "26%", top: "66%", phase: 60 },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        {mess.map((m, i) => (
          <MessBar key={i} {...m} />
        ))}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 200,
            height: 100,
            marginLeft: -100,
            marginTop: -50,
            border: `2px solid #67e8f966`,
            borderRadius: 26,
            transform: `scale(${pulse.scale})`,
            opacity: pulse.opacity,
          }}
        />
        <Chip
          color="#ffffff"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translateY(${bob}px)`,
            background: `linear-gradient(135deg, #2563eb, #7c3aed)`,
            border: "none",
            fontSize: 24,
            boxShadow: "0 0 30px #2563eb77",
          }}
        >
          calculate()
        </Chip>
      </Stage>
    </AbsoluteFill>
  );
};

const MessBar: React.FC<{
  left?: string;
  right?: string;
  top: string;
  phase: number;
}> = ({ phase, ...pos }) => {
  const opacity = useBlink(78, 0.25, phase);
  return (
    <div
      style={{
        position: "absolute",
        width: 52,
        height: 16,
        borderRadius: 8,
        background: "#3b4a72",
        opacity: opacity * 0.55,
        ...pos,
      }}
    />
  );
};

/* ------------------------------------------------------------------ */
/* 4. Composition — small blocks assembling into one                   */
/* ------------------------------------------------------------------ */
export const Composition: React.FC = () => {
  const bobWhole = useBob(8, 108);
  const blocks = [
    { left: "16%", top: "24%", label: "A", phase: 0 },
    { left: "16%", bottom: "22%", label: "B", phase: 30 },
    { left: "38%", top: "50%", label: "C", phase: 60 },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        {blocks.map((b, i) => (
          <Block key={i} {...b} />
        ))}
        <div
          style={{
            position: "absolute",
            right: "16%",
            top: "50%",
            width: 110,
            height: 110,
            marginTop: -55,
            borderRadius: 28,
            display: "grid",
            placeItems: "center",
            fontSize: 46,
            background: `linear-gradient(135deg, #059669, #0891b2)`,
            boxShadow: "0 0 30px #0891b277",
            transform: `translateY(${bobWhole}px)`,
          }}
        >
          📦
        </div>
      </Stage>
    </AbsoluteFill>
  );
};

const Block: React.FC<{
  left: string;
  top?: string;
  bottom?: string;
  label: string;
  phase: number;
}> = ({ label, phase, ...pos }) => {
  const bob = useBob(7, 90, phase);
  return (
    <div
      style={{
        position: "absolute",
        width: 62,
        height: 62,
        borderRadius: 18,
        border: `1px solid ${theme.border}`,
        background: "#16223d",
        display: "grid",
        placeItems: "center",
        fontSize: 22,
        fontWeight: 800,
        color: theme.accent,
        transform: `translateY(${bob}px)`,
        ...pos,
      }}
    >
      {label}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* 5. Experimentation — knobs driving a live bar                       */
/* ------------------------------------------------------------------ */
export const Experimentation: React.FC = () => {
  const spinA = useSpin(9);
  const spinB = useSpin(9);
  const grow = useGrow(0.24, 0.82, 108);
  const blink = useBlink(54, 0.3);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <Knob glyph="↻" color={theme.accent} spin={spinA} style={{ left: "16%", top: "26%" }} />
        <Knob glyph="↺" color={theme.accent2} spin={-spinB} style={{ left: "16%", bottom: "24%" }} />
        <div
          style={{
            position: "absolute",
            left: "34%",
            right: "16%",
            top: "50%",
            height: 22,
            marginTop: -11,
            borderRadius: 99,
            background: "#0e1730",
            border: `1px solid ${theme.border}`,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${grow * 100}%`,
              borderRadius: 99,
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            right: "14%",
            top: "22%",
            fontSize: 20,
            fontWeight: 800,
            color: theme.good,
            opacity: blink,
          }}
        >
          result: 87
        </div>
      </Stage>
    </AbsoluteFill>
  );
};

const Knob: React.FC<{
  glyph: string;
  color: string;
  spin: number;
  style: React.CSSProperties;
}> = ({ glyph, color, spin, style }) => (
  <div
    style={{
      position: "absolute",
      width: 72,
      height: 72,
      borderRadius: "50%",
      border: `3px solid ${color}`,
      background: "#0e1730",
      display: "grid",
      placeItems: "center",
      fontSize: 30,
      color,
      transform: `rotate(${spin}deg)`,
      ...style,
    }}
  >
    {glyph}
  </div>
);

/* ------------------------------------------------------------------ */
/* 6. Design trade-offs — a balance beam tilting between two pans      */
/* ------------------------------------------------------------------ */
export const DesignTradeoffs: React.FC = () => {
  const w = useLoop(120);
  const tilt = -8 + w * 16;
  const bobL = useBob(6, 120);
  const bobR = useBob(6, 120, 60);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "44%",
            width: 260,
            height: 6,
            marginLeft: -130,
            borderRadius: 6,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
            transform: `rotate(${tilt}deg)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "44%",
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
            borderRadius: "50%",
            background: "#fff",
            boxShadow: "0 0 20px #fff",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "calc(44% + 8px)",
            width: 4,
            height: 70,
            marginLeft: -2,
            background: "#3d5488",
          }}
        />
        <Pan label="simple" color={theme.accent} style={{ left: "calc(50% - 130px)", transform: `translateY(${bobL}px)` }} />
        <Pan label="flexible" color={theme.accent2} style={{ left: "calc(50% + 40px)", transform: `translateY(${bobR}px)` }} />
      </Stage>
    </AbsoluteFill>
  );
};

const Pan: React.FC<{
  label: string;
  color: string;
  style: React.CSSProperties;
}> = ({ label, color, style }) => (
  <div
    style={{
      position: "absolute",
      top: "calc(44% + 14px)",
      width: 90,
      height: 60,
      borderRadius: "0 0 24px 24px",
      border: `1px solid ${theme.border}`,
      background: "#16223d",
      display: "grid",
      placeItems: "center",
      fontSize: 16,
      fontWeight: 800,
      color,
      ...style,
    }}
  >
    {label}
  </div>
);
