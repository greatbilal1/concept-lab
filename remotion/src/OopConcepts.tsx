import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { theme, font, mono } from "./theme";
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
/* Shared helpers                                                      */
/* ------------------------------------------------------------------ */

/** A labelled caption strip along the bottom of the frame. */
const Caption: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = theme.accent,
}) => {
  const fade = useFadeIn(24);
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: "18px 28px 22px",
        background: "linear-gradient(180deg, transparent, #0b1020ee 45%)",
        color,
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: 0.2,
        opacity: fade,
      }}
    >
      {children}
    </div>
  );
};

/** A code-ish panel used to show a snippet inside the video. */
const CodePanel: React.FC<{
  lines: string[];
  style?: React.CSSProperties;
  highlight?: number;
}> = ({ lines, style, highlight = -1 }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        padding: "14px 18px",
        borderRadius: 14,
        border: `1px solid ${theme.border}`,
        background: theme.code,
        fontFamily: mono,
        fontSize: 17,
        lineHeight: 1.55,
        color: "#c8d3f0",
        whiteSpace: "pre",
        ...style,
      }}
    >
      {lines.map((l, i) => {
        const active = i === highlight;
        const glow = active ? 0.55 + 0.45 * useLoop(60) : 0;
        return (
          <div
            key={i}
            style={{
              color: active ? theme.accent : "#c8d3f0",
              background: active ? `#67e8f9${Math.round(glow * 26).toString(16).padStart(2, "0")}` : "transparent",
              borderRadius: 6,
              padding: "0 6px",
              margin: "0 -6px",
            }}
          >
            {l || " "}
          </div>
        );
      })}
    </div>
  );
};

/** An object card: a titled box listing attributes. */
const ObjectCard: React.FC<{
  title: string;
  rows: string[];
  color?: string;
  style?: React.CSSProperties;
  bob?: number;
}> = ({ title, rows, color = theme.accent, style, bob = 0 }) => (
  <div
    style={{
      position: "absolute",
      width: 210,
      borderRadius: 16,
      border: `1px solid ${theme.border}`,
      background: "#16223d",
      overflow: "hidden",
      transform: `translateY(${bob}px)`,
      boxShadow: "0 12px 30px #0006",
      ...style,
    }}
  >
    <div
      style={{
        padding: "10px 14px",
        background: `linear-gradient(90deg, ${color}33, transparent)`,
        borderBottom: `1px solid ${theme.border}`,
        color,
        fontWeight: 800,
        fontSize: 19,
      }}
    >
      {title}
    </div>
    <div style={{ padding: "10px 14px", fontFamily: mono, fontSize: 16, color: "#c8d3f0", lineHeight: 1.7 }}>
      {rows.map((r, i) => (
        <div key={i}>{r}</div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* 1. Mental model — state + behavior in one object                    */
/* ------------------------------------------------------------------ */
export const MentalModel: React.FC = () => {
  const bob = useBob(8, 96);
  const travel = useTravel(72);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <ObjectCard
          title="Customer"
          rows={["name", "country", "risk_score"]}
          bob={bob}
          style={{ left: 90, top: 130 }}
        />
        <div
          style={{
            position: "absolute",
            left: 320,
            top: 232,
            width: 130,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />
        <Dot
          color="#fff"
          size={16}
          style={{ left: 320 + travel.t * 130, top: 226, opacity: travel.opacity }}
        />
        <ObjectCard
          title="Behavior"
          rows={["deposit()", "withdraw()", "is_high_risk()"]}
          color={theme.accent2}
          bob={-bob}
          style={{ right: 90, top: 130 }}
        />
        <Caption>
          An object = <span style={{ color: theme.accent }}>state</span> (data) +{" "}
          <span style={{ color: theme.accent2 }}>behavior</span> (actions)
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 2. Class vs object — one blueprint, many instances                  */
/* ------------------------------------------------------------------ */
export const ClassVsObject: React.FC = () => {
  const travel = useTravel(66);
  const bob1 = useBob(7, 90);
  const bob2 = useBob(7, 90, 45);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 150,
            width: 150,
            height: 190,
            borderRadius: 18,
            border: `2px dashed ${theme.accent}`,
            background: "#0e1730",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            color: theme.accent,
            fontWeight: 800,
            fontSize: 20,
            transform: `translateY(${bob1}px)`,
          }}
        >
          class
          <br />
          Customer
          <div style={{ fontSize: 13, fontWeight: 500, color: theme.muted, marginTop: 6 }}>
            blueprint
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 240,
            top: 245,
            width: 150,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />
        <Dot color="#fff" size={16} style={{ left: 240 + travel.t * 150, top: 239, opacity: travel.opacity }} />

        <ObjectCard
          title="customer1"
          rows={["name = 'Bilal'", "country = 'SE'"]}
          bob={bob1}
          style={{ right: 130, top: 90 }}
        />
        <ObjectCard
          title="customer2"
          rows={["name = 'Ada'", "country = 'NO'"]}
          color={theme.good}
          bob={bob2}
          style={{ right: 130, top: 290 }}
        />
        <Caption>
          A <span style={{ color: theme.accent }}>class</span> is the blueprint; each{" "}
          <span style={{ color: theme.accent2 }}>object</span> is a separate thing built from it
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 3. self & attributes — parameter flows into the object              */
/* ------------------------------------------------------------------ */
export const SelfAttributes: React.FC = () => {
  const travel = useTravel(78);
  const bob = useBob(7, 96);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <Chip
          color={theme.warn}
          style={{ left: 70, top: 120, fontSize: 18 }}
        >
          full_name = "Bilal"
        </Chip>
        <div style={{ position: "absolute", left: 70, top: 168, fontSize: 15, color: theme.muted }}>
          parameter
        </div>

        <div
          style={{
            position: "absolute",
            left: 300,
            top: 145,
            width: 150,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.warn}, ${theme.accent})`,
          }}
        />
        <Dot color="#fff" size={16} style={{ left: 300 + travel.t * 150, top: 139, opacity: travel.opacity }} />

        <ObjectCard
          title="self"
          rows={["user_name = 'Bilal'"]}
          bob={bob}
          style={{ right: 90, top: 110 }}
        />
        <div style={{ position: "absolute", right: 90, top: 218, fontSize: 15, color: theme.muted }}>
          attribute on the object
        </div>

        <CodePanel
          lines={[
            "def __init__(self, full_name):",
            "    self.user_name = full_name",
          ]}
          highlight={1}
          style={{ left: 70, bottom: 110 }}
        />
        <Caption>
          The parameter is copied onto the object — the two names need not match
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 4. __init__ — the object is built, then initialized                 */
/* ------------------------------------------------------------------ */
export const InitMethod: React.FC = () => {
  const frame = useCurrentFrame();
  const build = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fill = interpolate(frame, [40, 80], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const pulse = usePulse(72);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 130,
            width: 200,
            height: 200,
            borderRadius: 24,
            border: `2px dashed ${theme.border}`,
            opacity: 0.35 + build * 0.65,
            transform: `scale(${0.85 + build * 0.15})`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 130,
            width: 200,
            height: 200,
            borderRadius: 24,
            border: `2px solid ${theme.accent}`,
            transform: `scale(${pulse.scale})`,
            opacity: pulse.opacity * 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 120,
            top: 130,
            width: 200,
            height: 200,
            borderRadius: 24,
            background: "#16223d",
            border: `1px solid ${theme.border}`,
            display: "grid",
            placeItems: "center",
            fontSize: 46,
          }}
        >
          ✨
        </div>

        <div style={{ position: "absolute", left: 120, top: 348, fontSize: 16, color: theme.muted }}>
          object created
        </div>

        <div
          style={{
            position: "absolute",
            left: 380,
            top: 150,
            width: 4,
            height: 160,
            borderRadius: 4,
            background: theme.border,
          }}
        />
        <Dot
          color={theme.accent}
          size={16}
          style={{ left: 374, top: 150 + fill * 160, opacity: 0.4 + fill * 0.6 }}
        />

        <ObjectCard
          title="BankAccount"
          rows={["owner = 'Bilal'", "balance = 1000"]}
          bob={0}
          style={{ right: 90, top: 130, opacity: 0.25 + fill * 0.75 }}
        />
        <div style={{ position: "absolute", right: 90, top: 238, fontSize: 16, color: theme.muted, opacity: fill }}>
          state filled in by __init__
        </div>

        <Caption>
          <span style={{ fontFamily: mono }}>__init__</span> runs automatically and fills in the
          object's state
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 5. Methods — calling a method on an object                          */
/* ------------------------------------------------------------------ */
export const Methods: React.FC = () => {
  const travel = useTravel(84);
  const bob = useBob(7, 96);
  const balance = 1000 + Math.round(useLoop(84) * 500);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <ObjectCard
          title="account"
          rows={[`balance = ${balance}`]}
          bob={bob}
          style={{ left: 90, top: 140 }}
        />
        <div
          style={{
            position: "absolute",
            left: 320,
            top: 190,
            width: 170,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />
        <Dot color="#fff" size={16} style={{ left: 320 + travel.t * 170, top: 184, opacity: travel.opacity }} />
        <Chip
          color={theme.accent2}
          style={{ right: 90, top: 160, fontSize: 20 }}
        >
          account.deposit(500)
        </Chip>
        <div style={{ position: "absolute", right: 90, top: 214, fontSize: 15, color: theme.muted }}>
          Python passes the object as <span style={{ fontFamily: mono }}>self</span>
        </div>

        <CodePanel
          lines={["def deposit(self, amount):", "    self.balance += amount"]}
          highlight={1}
          style={{ left: 90, bottom: 110 }}
        />
        <Caption>
          A method always receives the object it was called on
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 6. Encapsulation — the object guards its own rules                  */
/* ------------------------------------------------------------------ */
export const Encapsulation: React.FC = () => {
  const frame = useCurrentFrame();
  const blocked = frame > 60;
  const shake = blocked ? Math.sin(frame * 1.6) * 6 : 0;
  const pulse = usePulse(66);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 110,
            top: 120,
            width: 230,
            height: 230,
            borderRadius: 28,
            border: `2px solid ${theme.accent}`,
            transform: `scale(${pulse.scale})`,
            opacity: pulse.opacity * 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 110,
            top: 120,
            width: 230,
            height: 230,
            borderRadius: 28,
            background: "#16223d",
            border: `2px solid ${theme.accent}`,
            display: "grid",
            placeItems: "center",
            fontSize: 54,
            boxShadow: "0 0 34px #67e8f933",
          }}
        >
          🔒
        </div>
        <div style={{ position: "absolute", left: 110, top: 362, fontSize: 16, color: theme.muted }}>
          BankAccount owns the rules
        </div>

        <div
          style={{
            position: "absolute",
            right: 90,
            top: 150,
            width: 300,
            padding: "16px 18px",
            borderRadius: 14,
            border: `1px solid ${blocked ? theme.bad : theme.good}`,
            background: blocked ? "#2a1420" : "#12251c",
            color: blocked ? theme.bad : theme.good,
            fontSize: 18,
            fontWeight: 700,
            transform: `translateX(${shake}px)`,
          }}
        >
          {blocked ? "✕ withdraw(-50) rejected" : "✓ withdraw(200) allowed"}
          <div style={{ fontSize: 14, fontWeight: 500, color: theme.muted, marginTop: 6 }}>
            {blocked ? "amount must be positive" : "amount <= balance"}
          </div>
        </div>

        <Caption>
          State and the rules that change it live together — callers can't bypass them
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 7. Inheritance — child reuses and extends the parent                */
/* ------------------------------------------------------------------ */
export const Inheritance: React.FC = () => {
  const travel = useTravel(72);
  const bobP = useBob(6, 96);
  const bobC = useBob(6, 96, 48);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <ObjectCard
          title="Customer"
          rows={["name", "introduce()"]}
          bob={bobP}
          style={{ left: "50%", top: 70, marginLeft: -105 }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 232,
            width: 4,
            height: 90,
            marginLeft: -2,
            borderRadius: 4,
            background: `linear-gradient(180deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />
        <Dot
          color="#fff"
          size={16}
          style={{ left: "50%", marginLeft: -8, top: 232 + travel.t * 90, opacity: travel.opacity }}
        />
        <ObjectCard
          title="BusinessCustomer"
          rows={["company", "inherits Customer"]}
          color={theme.accent2}
          bob={bobC}
          style={{ left: "50%", top: 330, marginLeft: -105 }}
        />
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 300,
            fontFamily: mono,
            fontSize: 17,
            color: theme.good,
          }}
        >
          super().__init__(name)
        </div>
        <Caption>
          The child gets everything the parent has, then adds its own
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 8. Polymorphism — same call, different behavior                     */
/* ------------------------------------------------------------------ */
export const Polymorphism: React.FC = () => {
  const frame = useCurrentFrame();
  const active = Math.floor(frame / 60) % 3;
  const shapes = [
    { label: "Individual", color: theme.accent, result: '"Individual risk model"' },
    { label: "Business", color: theme.accent2, result: '"Business risk model"' },
    { label: "Trust", color: theme.good, result: '"Trust risk model"' },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <Chip color="#fff" style={{ left: "50%", top: 60, marginLeft: -110, fontSize: 20, background: "#1b2745" }}>
          customer.risk_type()
        </Chip>
        <div style={{ position: "absolute", left: "50%", top: 108, width: 2, height: 40, marginLeft: -1, background: theme.border }} />

        {shapes.map((s, i) => {
          const on = i === active;
          const bob = useBob(6, 90, i * 30);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 90 + i * 270,
                top: 170,
                width: 230,
                borderRadius: 16,
                border: `2px solid ${on ? s.color : theme.border}`,
                background: on ? "#1b2745" : "#131c33",
                padding: "14px 16px",
                transform: `translateY(${bob}px) scale(${on ? 1.04 : 1})`,
                boxShadow: on ? `0 0 26px ${s.color}55` : "none",
                transition: "none",
              }}
            >
              <div style={{ color: s.color, fontWeight: 800, fontSize: 19 }}>{s.label}</div>
              <div style={{ fontFamily: mono, fontSize: 14, color: theme.muted, marginTop: 8 }}>
                {s.result}
              </div>
            </div>
          );
        })}
        <Caption>
          One call, many behaviors — the object decides how it responds
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 9. Abstraction — a promise, not an implementation                   */
/* ------------------------------------------------------------------ */
export const AbstractionOOP: React.FC = () => {
  const pulse = usePulse(78);
  const bob = useBob(7, 96);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 90,
            top: 110,
            width: 260,
            borderRadius: 16,
            border: `2px dashed ${theme.accent2}`,
            background: "#131c33",
            padding: "16px 18px",
          }}
        >
          <div style={{ color: theme.accent2, fontWeight: 800, fontSize: 19 }}>RiskModel (ABC)</div>
          <div style={{ fontFamily: mono, fontSize: 15, color: theme.muted, marginTop: 10 }}>
            @abstractmethod
            <br />
            def calculate(self, customer): ...
          </div>
          <div style={{ fontSize: 14, color: theme.muted, marginTop: 10 }}>
            the promise — no body
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 380,
            top: 190,
            width: 120,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent2}, ${theme.accent})`,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 90,
            top: 130,
            width: 260,
            borderRadius: 16,
            border: `2px solid ${theme.accent}`,
            background: "#16223d",
            padding: "16px 18px",
            transform: `translateY(${bob}px)`,
            boxShadow: "0 0 26px #67e8f933",
          }}
        >
          <div style={{ color: theme.accent, fontWeight: 800, fontSize: 19 }}>KYCModel</div>
          <div style={{ fontFamily: mono, fontSize: 15, color: "#c8d3f0", marginTop: 10 }}>
            def calculate(self, customer):
            <br />
            {"    "}return customer.risk_score * 1.2
          </div>
          <div style={{ fontSize: 14, color: theme.muted, marginTop: 10 }}>
            the implementation — hidden detail
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 300,
            width: 220,
            height: 90,
            marginLeft: -110,
            borderRadius: 20,
            border: `2px solid ${theme.accent}`,
            transform: `scale(${pulse.scale})`,
            opacity: pulse.opacity * 0.5,
          }}
        />
        <Chip
          color="#fff"
          style={{
            left: "50%",
            top: 330,
            marginLeft: -95,
            background: `linear-gradient(135deg, #2563eb, #7c3aed)`,
            border: "none",
            fontSize: 20,
          }}
        >
          model.calculate(c)
        </Chip>
        <Caption>
          Callers depend on the interface, not on how it is implemented
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 10. Composition — an object that contains another object            */
/* ------------------------------------------------------------------ */
export const CompositionOOP: React.FC = () => {
  const travel = useTravel(72);
  const bob = useBob(7, 96);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <ObjectCard
          title="Customer"
          rows={["name = 'Bilal'", "address →"]}
          bob={bob}
          style={{ left: 90, top: 140 }}
        />
        <div
          style={{
            position: "absolute",
            left: 320,
            top: 190,
            width: 170,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.good})`,
          }}
        />
        <Dot color="#fff" size={16} style={{ left: 320 + travel.t * 170, top: 184, opacity: travel.opacity }} />
        <ObjectCard
          title="Address"
          rows={["country = 'SE'", "city = 'Stockholm'"]}
          color={theme.good}
          bob={-bob}
          style={{ right: 90, top: 140 }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 330,
            marginLeft: -150,
            width: 300,
            textAlign: "center",
            fontSize: 20,
            fontWeight: 800,
            color: theme.good,
          }}
        >
          Customer <span style={{ color: theme.muted }}>has-a</span> Address
        </div>
        <Caption>
          Composition builds big things from small, focused parts
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 11. Dunder methods — Python hooks into your object                  */
/* ------------------------------------------------------------------ */
export const DunderMethods: React.FC = () => {
  const frame = useCurrentFrame();
  const showStr = frame > 45;
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <CodePanel
          lines={[
            "def __str__(self):",
            "    return f\"Customer: {self.name}\"",
          ]}
          highlight={1}
          style={{ left: 80, top: 90 }}
        />
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 210,
            fontFamily: mono,
            fontSize: 18,
            color: theme.accent2,
          }}
        >
          print(c)
        </div>
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 250,
            width: 4,
            height: 60,
            borderRadius: 4,
            background: theme.border,
          }}
        />
        <Dot
          color={theme.accent}
          size={16}
          style={{ left: 74, top: 250 + Math.min(1, Math.max(0, (frame - 20) / 25)) * 60 }}
        />

        <div
          style={{
            position: "absolute",
            right: 80,
            top: 250,
            width: 330,
            padding: "18px 20px",
            borderRadius: 14,
            border: `1px solid ${showStr ? theme.good : theme.border}`,
            background: showStr ? "#12251c" : "#131c33",
            fontFamily: mono,
            fontSize: 19,
            color: showStr ? theme.good : theme.muted,
          }}
        >
          {showStr ? "Customer: Bilal" : "…"}
        </div>
        <div style={{ position: "absolute", right: 80, top: 320, fontSize: 15, color: theme.muted }}>
          Python calls <span style={{ fontFamily: mono }}>__str__</span> for you
        </div>

        <Caption>
          Dunder methods let your objects plug into Python's built-in syntax
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 12. Properties — attribute syntax, method logic                     */
/* ------------------------------------------------------------------ */
export const Properties: React.FC = () => {
  const frame = useCurrentFrame();
  const rejected = frame > 70;
  const shake = rejected ? Math.sin(frame * 1.6) * 5 : 0;
  const bob = useBob(6, 96);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 90,
            top: 130,
            width: 250,
            borderRadius: 16,
            border: `1px solid ${theme.border}`,
            background: "#16223d",
            padding: "16px 18px",
            transform: `translateY(${bob}px)`,
          }}
        >
          <div style={{ color: theme.accent, fontWeight: 800, fontSize: 19 }}>account.balance</div>
          <div style={{ fontSize: 15, color: theme.muted, marginTop: 8 }}>
            looks like a plain attribute
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 360,
            top: 190,
            width: 130,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 80,
            top: 120,
            width: 300,
            borderRadius: 16,
            border: `2px solid ${theme.accent2}`,
            background: "#131c33",
            padding: "16px 18px",
          }}
        >
          <div style={{ color: theme.accent2, fontWeight: 800, fontSize: 19 }}>@balance.setter</div>
          <div style={{ fontFamily: mono, fontSize: 15, color: "#c8d3f0", marginTop: 10 }}>
            if value &lt; 0:
            <br />
            {"    "}raise ValueError(...)
          </div>
          <div style={{ fontSize: 14, color: theme.muted, marginTop: 10 }}>
            validation runs behind the scenes
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            top: 300,
            width: 300,
            padding: "12px 16px",
            borderRadius: 12,
            border: `1px solid ${rejected ? theme.bad : theme.good}`,
            background: rejected ? "#2a1420" : "#12251c",
            color: rejected ? theme.bad : theme.good,
            fontSize: 17,
            fontWeight: 700,
            transform: `translateX(${shake}px)`,
          }}
        >
          {rejected ? "✕ account.balance = -5" : "✓ account.balance = 1500"}
        </div>

        <Caption>
          Clean attribute syntax, with real logic and validation underneath
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 13. Instance / class / static methods                               */
/* ------------------------------------------------------------------ */
export const MethodKinds: React.FC = () => {
  const frame = useCurrentFrame();
  const active = Math.floor(frame / 70) % 3;
  const kinds = [
    { tag: "self", name: "Instance", color: theme.accent, note: "needs object state" },
    { tag: "cls", name: "Class", color: theme.accent2, note: "alternate constructor" },
    { tag: "—", name: "Static", color: theme.good, note: "plain utility" },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        {kinds.map((k, i) => {
          const on = i === active;
          const bob = useBob(6, 90, i * 30);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 70 + i * 285,
                top: 120,
                width: 250,
                borderRadius: 18,
                border: `2px solid ${on ? k.color : theme.border}`,
                background: on ? "#1b2745" : "#131c33",
                padding: "18px 18px 20px",
                transform: `translateY(${bob}px) scale(${on ? 1.04 : 1})`,
                boxShadow: on ? `0 0 28px ${k.color}55` : "none",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "3px 12px",
                  borderRadius: 999,
                  background: `${k.color}22`,
                  color: k.color,
                  fontFamily: mono,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                {k.tag}
              </div>
              <div style={{ color: k.color, fontWeight: 800, fontSize: 21, marginTop: 12 }}>
                {k.name}
              </div>
              <div style={{ fontSize: 15, color: theme.muted, marginTop: 8 }}>{k.note}</div>
            </div>
          );
        })}
        <Caption>
          Same class, three kinds of method — pick by what the behavior needs
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 14. Dataclasses — boilerplate collapses into a declaration          */
/* ------------------------------------------------------------------ */
export const Dataclasses: React.FC = () => {
  const frame = useCurrentFrame();
  const collapse = interpolate(frame, [30, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 70,
            top: 100,
            opacity: 1 - collapse,
            transform: `translateX(${-collapse * 40}px)`,
          }}
        >
          <CodePanel
            lines={[
              "class Customer:",
              "    def __init__(self, name, country):",
              "        self.name = name",
              "        self.country = country",
              "    def __repr__(self): ...",
            ]}
            style={{ position: "relative", left: 0, top: 0 }}
          />
          <div style={{ fontSize: 15, color: theme.muted, marginTop: 10 }}>
            lots of boilerplate
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 70,
            top: 100,
            opacity: collapse,
            transform: `translateX(${(1 - collapse) * 40}px)`,
          }}
        >
          <CodePanel
            lines={[
              "@dataclass",
              "class Customer:",
              "    name: str",
              "    country: str",
            ]}
            highlight={0}
            style={{ position: "relative", left: 0, top: 0 }}
          />
          <div style={{ fontSize: 15, color: theme.good, marginTop: 10 }}>
            same result, far less code
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 250,
            marginLeft: -30,
            fontSize: 34,
            color: theme.accent,
            opacity: 0.4 + collapse * 0.6,
          }}
        >
          →
        </div>

        <Caption>
          <span style={{ fontFamily: mono }}>@dataclass</span> writes the boring methods for you
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 15. Designing a system — nouns, data, actions, relationships        */
/* ------------------------------------------------------------------ */
export const DesignSystem: React.FC = () => {
  const frame = useCurrentFrame();
  const step = Math.min(3, Math.floor(frame / 45));
  const steps = [
    { n: "1", t: "Nouns", d: "Customer, Account, Alert" },
    { n: "2", t: "Data", d: "id, country, balance" },
    { n: "3", t: "Actions", d: "deposit, calculate_risk" },
    { n: "4", t: "Relationships", d: "Customer has Accounts" },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        {steps.map((s, i) => {
          const on = i <= step;
          const bob = useBob(5, 90, i * 24);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 70 + i * 215,
                top: 150,
                width: 190,
                borderRadius: 16,
                border: `2px solid ${on ? theme.accent : theme.border}`,
                background: on ? "#1b2745" : "#131c33",
                padding: "16px 16px 18px",
                opacity: on ? 1 : 0.4,
                transform: `translateY(${bob}px)`,
                boxShadow: on ? "0 0 22px #67e8f933" : "none",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: on ? theme.accent : theme.border,
                  color: "#0b1020",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                {s.n}
              </div>
              <div style={{ color: on ? theme.accent : theme.muted, fontWeight: 800, fontSize: 19, marginTop: 12 }}>
                {s.t}
              </div>
              <div style={{ fontSize: 14, color: theme.muted, marginTop: 8 }}>{s.d}</div>
            </div>
          );
        })}
        <Caption>
          Break the problem into concepts before you write a single class
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 16. KYC risk model — the pieces working together                    */
/* ------------------------------------------------------------------ */
export const KycRiskModel: React.FC = () => {
  const frame = useCurrentFrame();
  const score = Math.round(interpolate(frame, [30, 90], [0, 87], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }));
  const high = score >= 70;
  const bob = useBob(6, 96);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <ObjectCard
          title="Customer"
          rows={["country = 'SE'", "risk_score = 65"]}
          bob={bob}
          style={{ left: 70, top: 110 }}
        />
        <div
          style={{
            position: "absolute",
            left: 300,
            top: 160,
            width: 130,
            height: 4,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent2})`,
          }}
        />
        <ObjectCard
          title="RiskModel"
          rows={["calculate(customer)"]}
          color={theme.accent2}
          bob={-bob}
          style={{ left: 440, top: 110 }}
        />

        <div
          style={{
            position: "absolute",
            right: 70,
            top: 130,
            width: 190,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 62,
              fontWeight: 800,
              color: high ? theme.bad : theme.good,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {score}
          </div>
          <div style={{ fontSize: 15, color: theme.muted }}>final score</div>
          <div
            style={{
              marginTop: 12,
              padding: "8px 14px",
              borderRadius: 999,
              display: "inline-block",
              background: high ? "#2a1420" : "#12251c",
              color: high ? theme.bad : theme.good,
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            {high ? "HIGH RISK" : "normal"}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 70,
            bottom: 120,
            fontSize: 17,
            color: theme.muted,
          }}
        >
          Customer holds <span style={{ color: theme.accent }}>state</span> · RiskModel holds{" "}
          <span style={{ color: theme.accent2 }}>one responsibility</span>
        </div>
        <Caption>
          Separate responsibilities: the customer knows itself, the model scores it
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 17. Knowledge check — questions resolving into answers              */
/* ------------------------------------------------------------------ */
export const KnowledgeCheck: React.FC = () => {
  const frame = useCurrentFrame();
  const solved = Math.floor(frame / 40) % 4;
  const qs = ["?", "?", "?", "?"];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        {qs.map((q, i) => {
          const on = i === solved;
          const bob = useBob(6, 80, i * 20);
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 110 + i * 190,
                top: 170,
                width: 130,
                height: 130,
                borderRadius: 24,
                border: `2px solid ${on ? theme.good : theme.border}`,
                background: on ? "#12251c" : "#131c33",
                display: "grid",
                placeItems: "center",
                fontSize: 46,
                fontWeight: 800,
                color: on ? theme.good : theme.muted,
                transform: `translateY(${bob}px) scale(${on ? 1.06 : 1})`,
                boxShadow: on ? "0 0 26px #4ade8055" : "none",
              }}
            >
              {on ? "✓" : q}
            </div>
          );
        })}
        <Caption>
          Check yourself as you go — the score updates instantly
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 18. Experiment lab — change, run, observe                           */
/* ------------------------------------------------------------------ */
export const ExperimentLab: React.FC = () => {
  const frame = useCurrentFrame();
  const run = frame % 90;
  const bubbling = run > 30;
  const bob = useBob(7, 90);
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        <div
          style={{
            position: "absolute",
            left: 110,
            top: 120,
            width: 180,
            height: 200,
            borderRadius: "16px 16px 40px 40px",
            border: `2px solid ${theme.accent}`,
            background: "#0e1730",
            overflow: "hidden",
            transform: `translateY(${bob}px)`,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: `${bubbling ? 55 : 20}%`,
              background: `linear-gradient(180deg, ${theme.accent}55, ${theme.accent2}88)`,
            }}
          />
          {[0, 1, 2].map((i) => (
            <Dot
              key={i}
              color={theme.accent}
              size={10}
              style={{
                left: 30 + i * 55,
                bottom: `${20 + ((run * (1 + i * 0.4)) % 60)}%`,
                opacity: bubbling ? 0.9 : 0.2,
              }}
            />
          ))}
        </div>
        <div style={{ position: "absolute", left: 110, top: 336, fontSize: 16, color: theme.muted }}>
          🧪 change one thing
        </div>

        <CodePanel
          lines={[
            "class Customer:",
            "    name = \"Bilal\"",
            "",
            "print(customer.name)",
          ]}
          highlight={bubbling ? 3 : 1}
          style={{ right: 90, top: 130 }}
        />
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 300,
            width: 300,
            padding: "14px 18px",
            borderRadius: 12,
            border: `1px solid ${theme.border}`,
            background: theme.code,
            fontFamily: mono,
            fontSize: 18,
            color: bubbling ? theme.good : theme.muted,
          }}
        >
          {bubbling ? "Bilal" : "…"}
        </div>

        <Caption>
          Run a tiny example, watch what happens, then change one thing
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};

/* ------------------------------------------------------------------ */
/* 19. Cheat sheet — the terms stacking up                             */
/* ------------------------------------------------------------------ */
export const CheatSheet: React.FC = () => {
  const frame = useCurrentFrame();
  const rows = [
    { t: "Class", s: "class Customer:" },
    { t: "Object", s: "c = Customer()" },
    { t: "Attribute", s: "self.name" },
    { t: "Method", s: "def deposit(self):" },
    { t: "Inheritance", s: "class B(A):" },
  ];
  return (
    <AbsoluteFill style={{ background: theme.bg, fontFamily: font }}>
      <Stage>
        {rows.map((r, i) => {
          const appear = interpolate(frame, [i * 12, i * 12 + 20], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 90,
                right: 90,
                top: 70 + i * 74,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderRadius: 12,
                border: `1px solid ${theme.border}`,
                background: "#16223d",
                opacity: appear,
                transform: `translateX(${(1 - appear) * -24}px)`,
              }}
            >
              <span style={{ color: theme.accent, fontWeight: 800, fontSize: 20 }}>{r.t}</span>
              <span style={{ fontFamily: mono, fontSize: 17, color: "#c8d3f0" }}>{r.s}</span>
            </div>
          );
        })}
        <Caption>
          The vocabulary you'll use every day, in one place
        </Caption>
      </Stage>
    </AbsoluteFill>
  );
};
