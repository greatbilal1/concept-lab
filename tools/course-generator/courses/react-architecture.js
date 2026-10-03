"use strict";

module.exports = {
  id: "react-architecture",
  title: "Frontend Architecture with React",
  num: 40,
  emoji: "⚛️",
  desc: "Components, props, state, hooks and data flow — building interfaces out of small, composable pieces.",
  mission: `# Mission — Frontend Architecture with React

## Why this course exists

React is the dominant frontend UI library on the web today. But building large, scalable applications in React requires far more than knowing how to call useState. When components grow to 800 lines of code, prop drilling tangles components, useEffect triggers infinite re-render loops, and state is mutated in place, React applications become sluggish and brittle. This course teaches how to architect scalable, maintainable React systems using pure components, custom hooks, unidirectional data flow, and state co-location.

## What the learner can do at the end

- Structure React applications into composable, single-responsibility components and custom hooks.
- Master unidirectional data flow and state co-location (lifting state only when necessary).
- Dissect the React rendering cycle: state triggers, virtual DOM diffing, and reconciliation.
- Tame useEffect: distinguish data synchronization from user event handlers and eliminate dependency loops.
- Prevent unnecessary re-renders using immutable state patterns, useMemo, and useCallback appropriately.

## What this course is NOT

- Not a beginner tutorial on HTML/JSX basics.
- Not a guide to a single meta-framework (Next.js, Remix). It focuses on core React architecture principles.

## Success looks like

When given a complex UI requirement with multi-level interactions, the learner models state at the lowest possible component tree node, encapsulates data fetching into custom hooks, and avoids prop-drilling without reaching for heavy external state libraries.
`,
  notes: `# Notes — Frontend Architecture with React

## Decisions
- Group into four themes: Components & Props, State & The Render Cycle, Mastering Hooks, and Application Architecture.
- Emphasize modern functional React (hooks, pure functions) rather than legacy class components.
`,
  resources: `# Resources — Frontend Architecture with React

## Knowledge (primary sources)
- React Official Documentation (react.dev) — The modern interactive React documentation.
- Dan Abramov, *A Complete Guide to useEffect* (overreacted.io).
- Kent C. Dodds, *State Colocation will make your React app faster* (kentcdodds.com).

## Wisdom
- React is a function of state: UI = f(state). Keep state minimal, derive whatever you can, and keep components pure.
`,
  cheatsheetSections: [
    {
      title: "State Co-location Pattern",
      label: "Keep state as close as possible",
      code: `// Don't put form state in global Redux/Context!
// Keep state inside the component that uses it:
function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");
  return (
    <input 
      value={query} 
      onChange={e => setQuery(e.target.value)} 
    />
  );
}`,
      lessonN: 3,
      lessonSlug: "state-colocation-and-lifting-state",
      lessonTitle: "State co-location and lifting state"
    },
    {
      title: "Custom Hook Abstraction",
      label: "Extracting reusable logic",
      code: `function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}`,
      lessonN: 6,
      lessonSlug: "custom-hooks-as-reusable-logic-engines",
      lessonTitle: "Custom hooks as reusable logic engines"
    },
    {
      title: "Deriving State vs Storing It",
      label: "Avoid redundant state variables",
      code: `// BAD: Redundant state sync
// const [items, setItems] = useState([]);
// const [total, setTotal] = useState(0);

// GOOD: Derive during render (Zero useEffect bugs!)
const [items, setItems] = useState([]);
const total = items.reduce((sum, item) => sum + item.price, 0);`,
      lessonN: 4,
      lessonSlug: "the-react-render-cycle-and-reconciliation",
      lessonTitle: "The React render cycle and reconciliation"
    },
    {
      title: "Context API Boundary",
      label: "Dependency injection for UI trees",
      code: `const ThemeContext = createContext<Theme | null>(null);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}`,
      lessonN: 7,
      lessonSlug: "context-api-and-global-state-boundaries",
      lessonTitle: "Context API and global state boundaries"
    }
  ],
  glossaryGroups: [
    {
      id: "components-props",
      title: "Components & Unidirectional Flow",
      terms: [
        { term: "Component", def: "A pure JavaScript function accepting props and returning JSX markup describing a UI tree.", lesson: 1, tags: ["components"] },
        { term: "Props", def: "Read-only input properties passed down from a parent component to configure child components.", lesson: 1, tags: ["props"] },
        { term: "Unidirectional data flow", def: "The architecture where state flows strictly downward via props, and events flow upward via callbacks.", lesson: 2, tags: ["architecture"] },
        { term: "Pure component", def: "A component function that always returns the exact same JSX output for the same props and state.", lesson: 2, tags: ["react"] }
      ]
    },
    {
      id: "state-rendering",
      title: "State & The Render Cycle",
      terms: [
        { term: "State", def: "Internal component memory that persists across renders and triggers re-rendering when updated.", lesson: 3, tags: ["state"] },
        { term: "State co-location", def: "The practice of keeping state as close as possible to the component that actually renders or consumes it.", lesson: 3, tags: ["architecture"] },
        { term: "Reconciliation", def: "The algorithm React uses to diff virtual DOM trees and determine minimal real DOM updates.", lesson: 4, tags: ["reconciliation"] },
        { term: "Derived state", def: "Values computed on-the-fly during render from existing props or state rather than stored in separate state.", lesson: 4, tags: ["state"] }
      ]
    },
    {
      id: "hooks-effects",
      title: "Hooks & Side Effects",
      terms: [
        { term: "Hook", def: "A special function (prefixed with 'use') allowing functional components to hook into React state and lifecycles.", lesson: 5, tags: ["hooks"] },
        { term: "useEffect", def: "A hook that synchronizes a component with an external system (network, DOM, timer) after rendering.", lesson: 5, tags: ["hooks"] },
        { term: "Custom hook", def: "A reusable function encapsulating stateful logic and other hooks, returning data and actions.", lesson: 6, tags: ["hooks"] },
        { term: "Dependency array", def: "The array passed to useEffect, useMemo, or useCallback specifying which values trigger re-execution when changed.", lesson: 5, tags: ["hooks"] }
      ]
    },
    {
      id: "architecture-patterns",
      title: "Architecture & Performance",
      terms: [
        { term: "Context API", def: "A React feature providing dependency injection of data across component subtrees without prop drilling.", lesson: 7, tags: ["context"] },
        { term: "Prop drilling", def: "The antipattern of passing props down through multiple layers of intermediate components that don't need them.", lesson: 7, tags: ["antipattern"] },
        { term: "Error boundary", def: "A special component that catches JavaScript errors anywhere in its child tree, preventing full app crashes.", lesson: 8, tags: ["errors"] },
        { term: "Code splitting", def: "Splitting application JavaScript bundles into smaller chunks loaded on demand via React.lazy and Suspense.", lesson: 8, tags: ["performance"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "components-as-pure-functions",
      title: "Components as pure functions",
      topic: "Components & Unidirectional Flow",
      anim: "Code",
      lede: "UI as a function of state: UI = f(state). Discover why thinking of React components as pure mathematical functions makes UI predictable and bug-free.",
      winShort: "Author pure React components with zero unexpected rendering side effects",
      missionLink: "The fundamental mental model of modern React component engineering",
      sec1: {
        title: "The pure function formula",
        content: `<p>In modern React, a component is simply a JavaScript function: it accepts an input object (<b>props</b>) and returns a description of UI (<b>JSX</b>). If you pass the same props, it must return the same JSX.</p><p>A pure component has two rules: <b>1. It minds its own business:</b> it does not modify any objects or variables that existed before rendering. <b>2. Same inputs, same output:</b> given the same inputs, a component should always return the same JSX. Modifying global variables during render causes bizarre visual glitches.</p>`,
        keyIdea: "A React component must be a pure function: same props produce same JSX with zero side effects during render."
      },
      predict: {
        q: "What happens if a component mutates an external variable (e.g. 'guestCount++') directly inside its function body during render?",
        a: [
          "Every time the component re-renders (or in StrictMode), guestCount doubles or multiplies unexpectedly, creating visual bugs",
          "The browser permanently crashes",
          "React automatically deletes the variable",
          "The component runs at 120 frames per second"
        ],
        c: 0,
        why: "Impure components that mutate external state during render produce unpredictable bugs across renders."
      },
      sec2: {
        title: "Pure versus Impure components",
        content: `<p>Contrast an impure mutating component with a clean, deterministic pure component.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Impure (Side Effect)", lines: ["let count = 0;", "function Cup() { count++; return <p>Cup #{count}</p> }", "mutates outer variable; buggy!"] },
          { title: "Pure (Deterministic)", lines: ["function Cup({ guestNumber }) {", "  return <p>Cup #{guestNumber}</p>", "}", "same prop -> same output always!"] }
        ]
      },
      sec3: {
        title: "Tracing React StrictMode double rendering",
        content: `<p>Trace how React StrictMode renders components twice in development to expose impure side-effect bugs.</p>`,
      },
      trace: {
        code: [
          "# React.StrictMode active in development:",
          "1. React calls Component(props) -> render 1",
          "2. React immediately calls Component(props) AGAIN -> render 2",
          "3. If Component is pure: Output 1 === Output 2 (clean!)",
          "4. If Component mutates outer state: Output 2 != Output 1 (bug exposed immediately!)"
        ],
        steps: [
          { line: 0, vars: { environment: "development StrictMode enabled" } },
          { line: 1, vars: { check_1: "initial test invocation" } },
          { line: 2, vars: { check_2: "second verification invocation catches mutations" } },
          { line: 4, vars: { verdict: "pure components produce identical DOM output across both passes" } }
        ]
      },
      practiceIntro: "Test your memory of pure component rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A component that produces identical JSX for identical props is a <0> component.",
          "The read-only input parameters passed to a component are <1>.",
          "In development, React.<2>Mode invokes component functions twice to expose impurities."
        ],
        blanks: [
          { a: ["pure"], why: "Pure functions have no side effects." },
          { a: ["props"], why: "Props configure child components immutably." },
          { a: ["Strict"], why: "StrictMode catches side effects in development." }
        ]
      },
      win: "You can write deterministic, pure React components that behave reliably across all render and hydration cycles.",
      nextTasks: [
        "Audit a component to ensure it does not mutate any variables outside its function body.",
        "Observe why React StrictMode renders twice in your development console.",
        "Pass data downward strictly through props rather than reading module-level variables."
      ],
      primarySource: "React Official Documentation: *Keeping Components Pure* (react.dev/learn/keeping-components-pure).",
      quiz: [
        {
          q: "What is a 'side effect' in programming, and where do side effects belong in React?",
          a: [
            "A change outside the function (network calls, DOM mutation); in React, side effects belong in event handlers or useEffect, NEVER in render bodies",
            "A visual styling filter in CSS",
            "A sound effect played through speakers",
            "An error that happens when memory is full"
          ],
          c: 0,
          why: "Rendering must stay pure; side effects belong in user event handlers or useEffect after paint."
        },
        {
          q: "Can a component modify its own incoming 'props' object (e.g. props.title = 'New')?",
          a: [
            "No, props are strictly read-only and immutable; a parent must pass new props to change them",
            "Yes, components can mutate props freely",
            "Only if props are strings",
            "Only on mobile web browsers"
          ],
          c: 0,
          why: "Props are frozen; attempting to mutate props breaks unidirectional data flow."
        },
        {
          q: "Why does React execute components twice in development when wrapped in <React.StrictMode>?",
          a: [
            "To intentionally expose impure functions that mutate variables or produce side effects during rendering",
            "Because development computers have two CPU cores",
            "To download the webpage twice",
            "It is a bug in the React development build"
          ],
          c: 0,
          why: "Double rendering acts as a stress test: if a component is pure, rendering twice produces identical output."
        },
        {
          q: "What does the JSX syntax '<div>{message}</div>' compile to in modern React?",
          a: [
            "A React.createElement() or jsx() function call that returns a plain JavaScript object describing the node",
            "Raw HTML text sent directly to the operating system",
            "A compiled C++ binary",
            "A database SQL query"
          ],
          c: 0,
          why: "JSX compiles into function calls that return plain JavaScript virtual DOM objects."
        }
      ]
    },
    {
      n: 2,
      id: "unidirectional-data-flow-and-props",
      title: "Unidirectional data flow and props",
      topic: "Components & Unidirectional Flow",
      anim: "Code",
      lede: "Data flows down; events flow up. Master unidirectional data flow: how passing props down and callbacks up makes complex UI systems easy to debug.",
      winShort: "Implement unidirectional data flow using props and event callbacks",
      missionLink: "The architectural rule that prevents spaghetti state synchronization bugs",
      sec1: {
        title: "The one-way street of data",
        content: `<p>In older frameworks (like AngularJS 1.x), two-way data binding meant child inputs could silently mutate parent state from anywhere. When a bug occurred, finding which component caused the change was nearly impossible.</p><p>React mandates <b>Unidirectional Data Flow</b>: data flows in strictly one direction: <b>Downwards via props</b>. When a child needs to communicate a change (e.g. user toggled a checkbox), it cannot mutate the parent. It calls an <b>event callback function</b> passed down from the parent: <code>onChange(newValue)</code>.</p>`,
        keyIdea: "Data flows down as props; actions flow up as event callbacks."
      },
      predict: {
        q: "How does a child button component tell its parent container that it was clicked in React?",
        a: [
          "It invokes a callback function passed down to it via props (e.g. onClick())",
          "It directly modifies the parent's state variable in memory",
          "It triggers a full browser page reload",
          "It sends an email to the server"
        ],
        c: 0,
        why: "Children communicate upward by executing callback functions passed down from parents."
      },
      sec2: {
        title: "Unidirectional loop diagram",
        content: `<p>Observe the closed loop: state flows down as props, user action fires callback up, parent updates state.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Parent: Container", lines: ["owns state: count = 0", "passes prop: count={count}", "passes callback: onIncrement={...}"] },
          { title: "Child: CounterButton", lines: ["reads: props.count (0)", "user clicks: calls props.onIncrement()"] },
          { title: "State Update", lines: ["parent updates count to 1", "new props flow down cleanly!"] }
        ]
      },
      sec3: {
        title: "Tracing the event-callback cycle",
        content: `<p>Trace how a toggle action flows up from a child switch to update parent state.</p>`,
      },
      trace: {
        code: [
          "# Parent: <ToggleSwitch enabled={isDark} onToggle={handleToggle} />",
          "1. User clicks ToggleSwitch child element",
          "2. ToggleSwitch executes: props.onToggle(!props.enabled)",
          "3. Parent handleToggle runs: setIsDark(true)",
          "4. Parent re-renders: passes new prop enabled={true} down to child"
        ],
        steps: [
          { line: 1, vars: { user_event: "click received at leaf component" } },
          { line: 2, vars: { callback_up: "callback invoked up to parent with new value" } },
          { line: 3, vars: { parent_state: "parent modifies single source of truth" } },
          { line: 4, vars: { flow_down: "updated prop flows down to update UI" } }
        ]
      },
      practiceIntro: "Test your memory of unidirectional flow.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "In React, data flows strictly <0> through the component tree via props.",
          "Children notify parents of changes by invoking event <1> functions.",
          "The architectural pattern where data flows in a single direction is <2> data flow."
        ],
        blanks: [
          { a: ["down", "downward"], why: "Props flow down from parents to children." },
          { a: ["callback", "callbacks"], why: "Callbacks communicate events upward." },
          { a: ["unidirectional"], why: "Unidirectional data flow is React's core model." }
        ]
      },
      win: "You can design component hierarchies where data flows down as props and actions flow up through callbacks with zero state entanglement.",
      nextTasks: [
        "Build a custom Slider component that receives value as a prop and communicates edits via onChange(val).",
        "Trace the path of a state variable as it flows down three levels of components.",
        "Explain why two-way data binding causes unpredictable state bugs in large teams."
      ],
      primarySource: "React Official Documentation: *Responding to Events* (react.dev/learn/responding-to-events).",
      quiz: [
        {
          q: "What is the primary benefit of Unidirectional Data Flow in large applications?",
          a: [
            "Predictability: data has a single source of truth and state changes can be traced directly to specific parent actions",
            "It speeds up network data downloads",
            "It turns off the need for CSS styling",
            "It makes JavaScript execute on the GPU"
          ],
          c: 0,
          why: "One-way data flow eliminates spooky action-at-a-distance bugs where child components secretly mutate parent data."
        },
        {
          q: "Can a child component directly update its parent's state without a callback function?",
          a: [
            "No, children can only update parent state if the parent explicitly provides a callback or setter function via props",
            "Yes, children can mutate parent variables by default",
            "Only in development mode",
            "Only on Apple Mac computers"
          ],
          c: 0,
          why: "Encapsulation prevents children from reaching into parent scopes directly."
        },
        {
          q: "What should you pass as the 'key' prop when rendering a list of items in React?",
          a: [
            "A stable, unique identifier from your data (like item.id), NEVER array index numbers",
            "Math.random()",
            "The array index number (0, 1, 2...)",
            "The current time in milliseconds"
          ],
          c: 0,
          why: "Stable IDs allow React's reconciler to match items across reorders and deletions without bugs."
        },
        {
          q: "Why does using array indices (key={index}) cause subtle UI bugs when list items are reordered or deleted?",
          a: [
            "React matches components by key index; reordering shifts indices, causing components to hold stale internal state from the wrong item",
            "Array indices crash the browser compiler",
            "Indices are forbidden by JavaScript syntax",
            "It causes internet latency"
          ],
          c: 0,
          why: "Index keys confuse the reconciler during inserts, reorders, and deletes, breaking form inputs."
        }
      ]
    },
    {
      n: 3,
      id: "state-colocation-and-lifting-state",
      title: "State co-location and lifting state",
      topic: "State & The Render Cycle",
      anim: "Code",
      lede: "Where should state live? Master Kent C. Dodds' state co-location principle: keep state as close as possible to where it is used, and lift state only when shared.",
      winShort: "Co-locate state at the lowest common ancestor in the component tree",
      missionLink: "Prevents unnecessary top-level re-renders and bloated global state stores",
      sec1: {
        title: "The global state mistake",
        content: `<p>A common beginner mistake is putting all state into a global store (Redux, Context, or top-level App). When a user types a single character into a search input, the entire <code>App</code> and its 50 child components re-render!</p><p>The golden rule of state architecture is <b>State Co-location</b>: <i>Keep state as close as possible to the component that actually renders or consumes it.</i> If only a modal dialog cares whether it is open, that state belongs inside the modal, not in global state. If two siblings need to share data, <b>lift state up only to their lowest common ancestor</b>.</p>`,
        keyIdea: "Keep state as local as possible; lift state only to the lowest common ancestor that shares it."
      },
      predict: {
        q: "If Component A and Component B both need access to a shared 'selectedTab' state, where should that state live?",
        a: [
          "In their lowest common parent ancestor component that renders both A and B",
          "In global window storage",
          "Duplicated separately in both Component A and Component B",
          "Inside the database"
        ],
        c: 0,
        why: "Lifting state to the lowest common ancestor allows both siblings to receive the state via props."
      },
      sec2: {
        title: "State placement decision tree",
        content: `<p>How to decide where a state variable belongs in the component tree.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Used by 1 Component?", lines: ["Co-locate state locally!", "useState inside that single component"] },
          { title: "Shared by 2 Siblings?", lines: ["Lift state to Common Parent", "pass down as props & callbacks"] },
          { title: "Used by Entire App (Theme, Auth)?", lines: ["Use Context API at Root", "isolated dependency injection"] }
        ]
      },
      sec3: {
        title: "Tracing state lifting",
        content: `<p>Trace how lifting search state from an input to its parent enables a sibling list to filter items.</p>`,
      },
      trace: {
        code: [
          "# Parent: SearchPage",
          "const [query, setQuery] = useState('');",
          "# Sibling 1 (Input): <SearchInput value={query} onChange={setQuery} />",
          "# Sibling 2 (List):  <ResultsList filterQuery={query} />",
          "# Both siblings receive synchronized data from lowest common parent!"
        ],
        steps: [
          { line: 1, vars: { lifted_state: "query state co-located at lowest common ancestor (SearchPage)" } },
          { line: 2, vars: { child_1: "SearchInput updates query via callback" } },
          { line: 3, vars: { child_2: "ResultsList receives fresh query as a prop and filters results" } }
        ]
      },
      practiceIntro: "Test your memory of state co-location.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Placing state as close as possible to where it is used is state <0>.",
          "Moving state up to a shared parent component is <1> state up.",
          "State shared by siblings lives in their lowest common <2>."
        ],
        blanks: [
          { a: ["colocation", "co-location"], why: "State co-location keeps state local." },
          { a: ["lifting"], why: "Lifting state up shares data with siblings." },
          { a: ["ancestor", "parent"], why: "Lowest common ancestor is the optimal parent." }
        ]
      },
      win: "You can structure state cleanly across component trees, preventing bloated global stores and performance-draining re-renders.",
      nextTasks: [
        "Audit an existing component and move an unnecessarily lifted state variable back down into a child.",
        "Refactor two sibling components to share state through their lowest common parent.",
        "Explain why placing text input state in top-level App causes typing lag on large pages."
      ],
      primarySource: "Kent C. Dodds: *State Colocation will make your React app faster* (kentcdodds.com).",
      quiz: [
        {
          q: "What is 'State Co-location' in React architecture?",
          a: [
            "The practice of keeping state as close as possible to the component that actually renders or consumes it",
            "Storing state in database servers located in the same geographic city",
            "Co-locating HTML and CSS in the same file",
            "Running state on mobile phones"
          ],
          c: 0,
          why: "Localizing state keeps components modular and prevents unnecessary re-rendering across unrelated trees."
        },
        {
          q: "What happens when a top-level parent component re-renders due to a state update?",
          a: [
            "By default, all of its child components down the entire tree will also re-render recursively",
            "Only the parent re-renders; children are never re-rendered",
            "The browser reloads the entire page from disk",
            "The computer CPU turns off"
          ],
          c: 0,
          why: "React re-renders entire child subtrees recursively when a parent state updates (unless memoized)."
        },
        {
          q: "When is it appropriate to lift state up?",
          a: [
            "When two or more sibling components need access to the exact same live state or need to coordinate changes",
            "Whenever you create a new component",
            "Only when using Redux",
            "When a component has more than five lines of code"
          ],
          c: 0,
          why: "Lifting state to the common parent allows sharing data across siblings via props."
        },
        {
          q: "Why shouldn't modal open/close state be stored in a global Redux store for typical dialogs?",
          a: [
            "It bloats global state and causes unnecessary top-level re-renders for a concern that is local to one screen feature",
            "Redux forbids boolean values",
            "Modals cannot read Redux state",
            "It causes security vulnerabilities"
          ],
          c: 0,
          why: "Ephemeral UI state belongs in local components, not global application-level stores."
        }
      ]
    },
    {
      n: 4,
      id: "the-react-render-cycle-and-reconciliation",
      title: "The React render cycle and reconciliation",
      topic: "State & The Render Cycle",
      anim: "Code",
      lede: "What happens when you call setState? Explore the two phases of React: the Render Phase (pure calculation, virtual DOM diffing) and the Commit Phase (mutating the real DOM).",
      winShort: "Explain the Render and Commit phases, Virtual DOM diffing, and derived state",
      missionLink: "Demystifies how React updates the screen and optimizes DOM operations",
      sec1: {
        title: "Render phase versus Commit phase",
        content: `<p>Many developers think calling <code>setState</code> immediately updates the physical DOM on screen. In reality, React operates in two distinct phases: <b>1. The Render Phase</b> and <b>2. The Commit Phase</b>.</p><p>During the <b>Render Phase</b>, React calls your component functions to build a new Virtual DOM tree, comparing (<b>reconciling</b>) it with the previous snapshot. During the <b>Commit Phase</b>, React applies <i>only the minimal necessary differences</i> to the real browser DOM (e.g. changing one text node) and schedules painting.</p>`,
        keyIdea: "Render phase computes the virtual DOM diff; Commit phase applies minimal mutations to the real DOM."
      },
      predict: {
        q: "If a component re-renders, does React always update the real browser DOM elements on the screen?",
        a: [
          "No, if the Virtual DOM diff shows the JSX output is identical, React skips touching the real DOM entirely",
          "Yes, React rewrites the entire HTML document on every re-render",
          "The real DOM is deleted and recreated from scratch",
          "Only in production mode"
        ],
        c: 0,
        why: "Reconciliation computes the diff; if nothing changed in JSX output, zero real DOM touches occur."
      },
      sec2: {
        title: "The two-phase pipeline",
        content: `<p>Understand the boundary between pure virtual calculations and physical browser DOM mutations.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Trigger", lines: ["user clicks button -> setState()", "component queued for re-render"] },
          { title: "2. Render Phase (Pure)", lines: ["calls component functions", "diffs new Virtual DOM vs previous", "ZERO real DOM mutations!"] },
          { title: "3. Commit Phase (Mutate)", lines: ["applies minimal mutations to real DOM", "executes useLayoutEffect & useEffect"] }
        ]
      },
      sec3: {
        title: "Tracing derived state versus redundant state",
        content: `<p>Trace why calculating values on the fly during render eliminates desynchronization bugs.</p>`,
      },
      trace: {
        code: [
          "# Bad (Redundant state):",
          "# const [items, setItems] = useState([10, 20]);",
          "# const [total, setTotal] = useState(30); # must be manually synced whenever items change!",
          "# Good (Derived during render phase):",
          "const [items, setItems] = useState([10, 20]);",
          "const total = items.reduce((a, b) => a + b, 0); # computed in 0.001ms during render!"
        ],
        steps: [
          { line: 0, vars: { anti_pattern: "two state variables can desynchronize" } },
          { line: 4, vars: { best_practice: "single source of truth: total derived during render" } },
          { line: 5, vars: { result: "impossible for total to be out of sync with items!" } }
        ]
      },
      practiceIntro: "Test your memory of the React render cycle.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The algorithm React uses to diff virtual trees is <0>.",
          "The phase where React applies changes to the real DOM is the <1> phase.",
          "Values calculated on-the-fly during render are <2> state."
        ],
        blanks: [
          { a: ["reconciliation"], why: "Reconciliation diffs Virtual DOM trees." },
          { a: ["commit"], why: "Commit phase mutates real DOM elements." },
          { a: ["derived"], why: "Derived state is calculated without extra useState." }
        ]
      },
      win: "You can optimize React rendering performance and eliminate redundant state synchronization bugs by deriving values.",
      nextTasks: [
        "Audit a component and replace a redundant useEffect/useState sync with derived state.",
        "Use the React DevTools Profiler to record and inspect component render durations.",
        "Observe how React batches multiple setState calls into a single render pass."
      ],
      primarySource: "React Official Documentation: *Render and Commit* (react.dev/learn/render-and-commit).",
      quiz: [
        {
          q: "What is 'Derived State' in React component design?",
          a: [
            "A value calculated on-the-fly during the render phase from existing props or state, rather than stored in a separate useState",
            "State imported from an external database",
            "State that is derived from browser cookies",
            "A state variable that never changes"
          ],
          c: 0,
          why: "Deriving values during render guarantees they can never get out of sync with their source."
        },
        {
          q: "What is 'State Batching' in modern React 18+?",
          a: [
            "React automatically groups multiple setState calls within the same event into a single re-render pass for performance",
            "A tool that deletes old state variables",
            "A feature that runs states on multiple servers",
            "State that is updated once per hour"
          ],
          c: 0,
          why: "Batching prevents unnecessary intermediate renders when multiple state updates occur together."
        },
        {
          q: "Why is the Virtual DOM faster than directly manipulating the browser DOM?",
          a: [
            "Computing diffs in pure JavaScript memory is orders of magnitude faster than browser layout and paint calculations",
            "The Virtual DOM is stored on a flash drive",
            "The Virtual DOM bypasses JavaScript completely",
            "The Virtual DOM is written in assembly language"
          ],
          c: 0,
          why: "JavaScript memory operations are microsecond fast; real DOM modifications trigger expensive reflows."
        },
        {
          q: "When should you use 'useMemo' for a calculation?",
          a: [
            "Only when profiling proves an expensive calculation (like sorting 10,000 items) is noticeably slowing down re-renders",
            "On every single variable and math equation in your application",
            "Only on strings shorter than three letters",
            "Never; useMemo is deprecated"
          ],
          c: 0,
          why: "useMemo has memory and comparison overhead; only use it for genuinely expensive operations."
        }
      ]
    },
    {
      n: 5,
      id: "mastering-useeffect-synchronization-not-lifecycle",
      title: "Mastering useEffect: synchronization, not lifecycle",
      topic: "Hooks & Side Effects",
      anim: "Code",
      lede: "Stop thinking in componentDidMount. Master useEffect as a synchronization engine: connecting your component to external systems, cleanup functions, and dependency rules.",
      winShort: "Write correct useEffect synchronization logic with proper dependency arrays and cleanup functions",
      missionLink: "Eliminates infinite loops and memory leaks in React side effect handling",
      sec1: {
        title: "Synchronization, not lifecycle",
        content: `<p>Thinking of <code>useEffect</code> as 'lifecycle methods' (componentDidMount, componentDidUpdate) causes endless bugs. <code>useEffect</code> is not a lifecycle tool: <b>it is a Synchronization Engine</b>.</p><p>Its purpose is to <b>synchronize your component with an external system outside of React</b> (a browser window listener, a WebSocket connection, a canvas element, or an external API). The dependency array tells React: <i>'Re-run this synchronization whenever these external values change.'</i></p>`,
        keyIdea: "useEffect synchronizes your component with an external system; it is not a lifecycle method."
      },
      predict: {
        q: "What happens if you omit the dependency array entirely in 'useEffect(() => { ... })'?",
        a: [
          "The effect executes after EVERY single render of the component",
          "The effect only runs once on initial mount",
          "The effect never runs",
          "A syntax error is thrown"
        ],
        c: 0,
        why: "No dependency array means no comparison; the effect runs after every render."
      },
      sec2: {
        title: "The anatomy of an effect",
        content: `<p>Understand the three components: effect logic, cleanup function, and dependency array.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Effect Callback", lines: ["runs AFTER render & paint", "connects to external system (e.g. WebSocket)"] },
          { title: "Cleanup Function (return () => ...)", lines: ["runs BEFORE effect re-runs & on unmount", "disconnects socket, removes listeners!"] },
          { title: "Dependency Array ([id, url])", lines: ["values effect depends on", "skips run if dependencies are identical"] }
        ]
      },
      sec3: {
        title: "Tracing the cleanup lifecycle",
        content: `<p>Trace how React cleans up the previous effect before re-running when a prop changes.</p>`,
      },
      trace: {
        code: [
          "useEffect(() => {",
          "    const conn = connectChat(roomId);",
          "    return () => conn.disconnect(); # cleanup function!",
          "}, [roomId]);",
          "# User switches from room 'general' to 'travel':",
          "# 1. React runs cleanup: conn.disconnect() for 'general'",
          "# 2. React runs effect: connectChat('travel')"
        ],
        steps: [
          { line: 0, vars: { initial_mount: "connected to room 'general'" } },
          { line: 4, vars: { prop_change: "roomId changes from 'general' to 'travel'" } },
          { line: 5, vars: { cleanup_fired: "cleanup disconnects old room first" } },
          { line: 6, vars: { new_connection: "effect connects fresh room cleanly" } }
        ]
      },
      practiceIntro: "Test your memory of useEffect fundamentals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The hook that synchronizes components with external systems is use<0>.",
          "The function returned by an effect to tear down subscriptions is the <1> function.",
          "An empty dependency array [] runs the effect only on initial <2>."
        ],
        blanks: [
          { a: ["Effect"], why: "useEffect handles external synchronization." },
          { a: ["cleanup"], why: "Cleanup functions prevent memory leaks." },
          { a: ["mount"], why: "Empty array [] means dependencies never change." }
        ]
      },
      win: "You can author clean useEffect hooks that synchronize with external systems and clean up resources reliably.",
      nextTasks: [
        "Attach a window scroll or resize listener in useEffect with a clean return function.",
        "Examine why setting state inside useEffect without dependencies causes infinite render loops.",
        "Read Dan Abramov's *A Complete Guide to useEffect*."
      ],
      primarySource: "Dan Abramov: *A Complete Guide to useEffect* (overreacted.io/a-complete-guide-to-useeffect/).",
      quiz: [
        {
          q: "What is the primary role of the cleanup function returned by useEffect?",
          a: [
            "To clean up external subscriptions, timers, or event listeners before the effect re-runs or when the component unmounts",
            "To delete all component state variables",
            "To close the web browser window",
            "To reset the computer clock"
          ],
          c: 0,
          why: "Cleanup functions prevent memory leaks and duplicate connections when components re-render or unmount."
        },
        {
          q: "Why is putting data fetching directly inside raw useEffect often discouraged in modern production React?",
          a: [
            "It lacks caching, deduping, server-rendering support, and easily triggers race conditions; use libraries like TanStack Query instead",
            "useEffect cannot make HTTP requests",
            "Fetch requests in useEffect are blocked by the browser",
            "It turns off database security"
          ],
          c: 0,
          why: "Raw useEffect data fetching suffers from race conditions and lack of caching; dedicated libraries solve this."
        },
        {
          q: "What causes an infinite loop when using useEffect in React?",
          a: [
            "Updating state inside useEffect when that same state (or an object derived from it) is in the dependency array",
            "Using numbers inside the component",
            "Running React on a mobile phone",
            "Writing comments inside the effect"
          ],
          c: 0,
          why: "Updating state triggers a re-render, which re-runs the effect, which updates state again (infinite loop)."
        },
        {
          q: "What rule governs the items that must be included in the useEffect dependency array?",
          a: [
            "Every reactive value (props, state, and variables calculated from them) used inside the effect must be included",
            "Only numbers should be included",
            "Include only the component name",
            "Leave it empty in all cases"
          ],
          c: 0,
          why: "Omitting reactive values causes the effect to read stale closures from prior renders."
        }
      ]
    },
    {
      n: 6,
      id: "custom-hooks-as-reusable-logic-engines",
      title: "Custom hooks as reusable logic engines",
      topic: "Hooks & Side Effects",
      anim: "Code",
      lede: "Extract stateful logic without changing component hierarchy. Learn how to design custom hooks that encapsulate timers, network fetchers, and browser APIs.",
      winShort: "Author reusable custom hooks that encapsulate stateful logic and browser integrations",
      missionLink: "The primary mechanism for code reuse and abstraction in modern React",
      sec1: {
        title: "Extracting the 'how' from the 'what'",
        content: `<p>Components should focus on UI: what elements to render. When a component contains 50 lines of geolocation listening, event handlers, and timer math, the UI gets lost in boilerplate.</p><p>A <b>Custom Hook</b> is a JavaScript function whose name starts with <code>use</code> and that calls other hooks. Custom hooks let you extract stateful logic into reusable modules: <code>const { data, loading } = useFetch('/api/user')</code> or <code>const isOnline = useOnlineStatus()</code>. Components become clean and expressive.</p>`,
        keyIdea: "Custom hooks extract stateful logic into reusable functions, sharing logic without sharing state."
      },
      predict: {
        q: "If two separate components call the same custom hook 'const count = useCounter()', do they share the same count state?",
        a: [
          "No, custom hooks reuse stateful LOGIC, not state itself; each component instance has its own independent state",
          "Yes, all components calling the hook share a single global count variable",
          "Only if both components are rendered on the same line",
          "An error is thrown"
        ],
        c: 0,
        why: "Calling a custom hook is like calling useState: each invocation allocates isolated local state."
      },
      sec2: {
        title: "Custom hook anatomy",
        content: `<p>Observe how custom hooks encapsulate internal state and return clean interfaces.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Custom Hook (useToggle)", lines: ["const [state, setState] = useState(initial);", "const toggle = () => setState(s => !s);", "return [state, toggle];"] },
          { title: "Component A (Modal)", lines: ["const [isOpen, toggleModal] = useToggle();", "isolated state instance"] },
          { title: "Component B (Sidebar)", lines: ["const [isExpanded, toggleSidebar] = useToggle();", "isolated state instance"] }
        ]
      },
      sec3: {
        title: "Tracing the useOnlineStatus custom hook",
        content: `<p>Trace how a custom hook encapsulates browser window events to provide a live boolean flag.</p>`,
      },
      trace: {
        code: [
          "function useOnlineStatus() {",
          "    const [isOnline, setIsOnline] = useState(navigator.onLine);",
          "    useEffect(() => {",
          "        const handle = () => setIsOnline(navigator.onLine);",
          "        window.addEventListener('online', handle);",
          "        window.addEventListener('offline', handle);",
          "        return () => { window.removeEventListener('online', handle); ... };",
          "    }, []);",
          "    return isOnline;",
          "}"
        ],
        steps: [
          { line: 1, vars: { initial_state: "reads navigator.onLine status" } },
          { line: 4, vars: { listeners: "attaches browser online/offline event handlers" } },
          { line: 6, vars: { cleanup: "removes listeners on unmount" } },
          { line: 8, vars: { interface: "returns simple boolean isOnline to any component" } }
        ]
      },
      practiceIntro: "Test your memory of custom hook rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Custom hook function names must strictly begin with the prefix <0>.",
          "Custom hooks reuse stateful <1>, not state values themselves.",
          "Hooks can only be called at the <2> level of a component function, never in loops."
        ],
        blanks: [
          { a: ["use"], why: "The 'use' prefix enables React linter enforcement." },
          { a: ["logic"], why: "Hooks share behavior and logic across components." },
          { a: ["top"], why: "The Rules of Hooks require top-level calls without conditions." }
        ]
      },
      win: "You can design and extract custom hooks that transform complex browser and network logic into elegant, one-line component APIs.",
      nextTasks: [
        "Create a custom useDebounce(value, delay) hook to delay search query updates.",
        "Create a useLocalStorage(key, initialValue) hook that syncs state with browser storage.",
        "Refactor an oversized component by extracting its side effects into a custom hook."
      ],
      primarySource: "React Official Documentation: *Reusing Logic with Custom Hooks* (react.dev/learn/reusing-logic-with-custom-hooks).",
      quiz: [
        {
          q: "What is the mandatory naming convention for custom hooks in React?",
          a: [
            "The function name must start with the lowercase word 'use' (e.g. useAuth, useTheme)",
            "The function name must end with 'Hook'",
            "The function must be named in ALL_CAPS",
            "Custom hooks cannot have names"
          ],
          c: 0,
          why: "The 'use' prefix signals to React and ESLint to enforce the Rules of Hooks."
        },
        {
          q: "What are the two primary 'Rules of Hooks' in React?",
          a: [
            "1. Only call hooks at the top level (never in loops, conditions, or nested functions); 2. Only call hooks from React function components or custom hooks",
            "1. Hooks must be written in TypeScript; 2. Hooks must be exported as default",
            "1. Never use more than three hooks; 2. Never call useState twice",
            "Hooks have no rules"
          ],
          c: 0,
          why: "Calling hooks at top level guarantees that hook call order is identical on every render."
        },
        {
          q: "Do two components using the same custom hook share the same state data in memory?",
          a: [
            "No, custom hooks are a mechanism for sharing stateful logic, but each component call gets its own independent state",
            "Yes, all custom hooks create global singletons in memory",
            "Only on production builds",
            "Only if they are rendered in the same tab"
          ],
          c: 0,
          why: "Each invocation of a hook allocates isolated local state for that specific component instance."
        },
        {
          q: "What should a custom hook return to its consumer?",
          a: [
            "Whatever data structure is most convenient: a tuple array (value, setter) or an object { data, loading, error }",
            "It must always return a string",
            "It must return an HTML div element",
            "It cannot return values"
          ],
          c: 0,
          why: "Custom hooks can return arrays, objects, or primitive values tailored to developer ergonomics."
        }
      ]
    },
    {
      n: 7,
      id: "context-api-and-global-state-boundaries",
      title: "Context API and global state boundaries",
      topic: "Architecture & Performance",
      anim: "Code",
      lede: "Stop passing props down through ten intermediate components. Master the React Context API: dependency injection for UI trees, custom providers, and re-render pitfalls.",
      winShort: "Implement Context API providers for shared app concerns without performance degradation",
      missionLink: "Eliminates prop drilling across deep component hierarchies",
      sec1: {
        title: "Solving prop drilling",
        content: `<p>When data is needed by a component 7 levels deep in the tree (like current user authentication or theme), passing props through every intermediate component is painful: <code>App &rarr; Shell &rarr; Header &rarr; Nav &rarr; UserProfile &rarr; Avatar</code>. This is <b>Prop Drilling</b>.</p><p>React's <b>Context API</b> provides a teleportation mechanism (Dependency Injection). A <code>ThemeContext.Provider</code> wraps an ancestor tree, and <i>any child component at any depth</i> can consume the data directly via <code>useContext(ThemeContext)</code>.</p>`,
        keyIdea: "Context teleports data down the component tree without passing props through intermediate layers."
      },
      predict: {
        q: "What happens to components that consume a Context (via useContext) when the Provider's value changes?",
        a: [
          "Every component consuming that Context will automatically re-render with the new value",
          "Only the top-level Provider re-renders",
          "The browser page reloads",
          "The components ignore the change until the user clicks"
        ],
        c: 0,
        why: "Any component subscribed to a Context re-renders automatically when the context value updates."
      },
      sec2: {
        title: "The Context Provider pattern",
        content: `<p>Learn the standard pattern: pair a Context with a dedicated Provider and custom consumer hook.</p>`,
      },
      diagram: {
        boxes: [
          { title: "ThemeContext.Provider", lines: ["wraps app or subtree", "supplies value={{ theme, setTheme }}"] },
          { title: "Intermediate Components", lines: ["Nav, Header, Sidebar", "zero theme props passed! completely clean!"] },
          { title: "Consumer (useTheme())", lines: ["reads theme directly from Context", "calls setTheme('dark')"] }
        ]
      },
      sec3: {
        title: "Tracing the custom hook guard pattern",
        content: `<p>Trace how a custom consumer hook guards against being called outside of its Provider.</p>`,
      },
      trace: {
        code: [
          "function useAuth() {",
          "    const context = useContext(AuthContext);",
          "    if (!context) {",
          "        throw new Error('useAuth must be used within an AuthProvider');",
          "    }",
          "    return context;",
          "}"
        ],
        steps: [
          { line: 1, vars: { lookup: "reads AuthContext from nearest ancestor provider" } },
          { line: 2, vars: { guard: "checks if provider is missing (returns undefined/null)" } },
          { line: 3, vars: { fail_fast: "throws descriptive developer error rather than cryptic null crash!" } }
        ]
      },
      practiceIntro: "Test your memory of Context API mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Passing props through intermediate layers that do not need them is prop <0>.",
          "The component that supplies context data to children is the Context.<1>.",
          "The hook consumed by children to access context is use<2>."
        ],
        blanks: [
          { a: ["drilling"], why: "Prop drilling clutters intermediate component signatures." },
          { a: ["Provider"], why: "Context.Provider wraps the subtree." },
          { a: ["Context"], why: "useContext(Context) reads the provided value." }
        ]
      },
      win: "You can implement clean, encapsulated Context Providers that eliminate prop drilling while preventing unneeded re-renders.",
      nextTasks: [
        "Create a ThemeContext with a custom useTheme() hook that throws if used outside its Provider.",
        "Split a bloated context into separate State and Dispatch contexts to avoid re-render cascades.",
        "Refactor an application to eliminate a 4-level prop drilling chain."
      ],
      primarySource: "React Official Documentation: *Passing Data Deeply with Context* (react.dev/learn/passing-data-deeply-with-context).",
      quiz: [
        {
          q: "What is 'Prop Drilling' in React?",
          a: [
            "Passing props down through multiple layers of intermediate components that have no use for the data other than forwarding it",
            "A technique for drilling holes in computer hardware",
            "Writing CSS styles in separate files",
            "A tool that benchmarks component speeds"
          ],
          c: 0,
          why: "Prop drilling creates tight coupling and tedious maintenance across intermediate components."
        },
        {
          q: "Why shouldn't you put high-frequency updating data (like mouse cursor coordinates) in a global React Context?",
          a: [
            "Every update to the context value forces every single subscriber component to re-render, causing severe performance collapse",
            "Context cannot store numbers",
            "Context is limited to 10 bytes of data",
            "Mouse coordinates are illegal in React"
          ],
          c: 0,
          why: "Context re-renders all consumers on every value update; rapid changes freeze the UI."
        },
        {
          q: "How can you prevent consumer re-render cascades when using Context?",
          a: [
            "Split context into separate state and dispatch contexts (e.g. UserContext and UserDispatchContext)",
            "Wrap the entire application in a while loop",
            "Delete all child components",
            "Use localStorage instead"
          ],
          c: 0,
          why: "Separating state from dispatch ensures components that only trigger actions don't re-render on state changes."
        },
        {
          q: "Can a component consume multiple different Contexts simultaneously?",
          a: [
            "Yes, a component can call useContext() for as many different contexts as needed (e.g. useAuth, useTheme, useI18n)",
            "No, a component is strictly limited to one context only",
            "Only on mobile Safari",
            "Only if all contexts share the same name"
          ],
          c: 0,
          why: "Components can consume multiple independent contexts without restriction."
        }
      ]
    },
    {
      n: 8,
      id: "error-boundaries-and-code-splitting",
      title: "Error boundaries and code splitting",
      topic: "Architecture & Performance",
      anim: "Code",
      lede: "A crash in one widget shouldn't bring down your whole app, and users shouldn't download 5MB of JavaScript on the homepage. Master Error Boundaries and React.lazy code splitting.",
      winShort: "Implement Error Boundaries to isolate UI crashes and optimize bundle size with React.lazy",
      missionLink: "Ensures enterprise-grade application resilience and lightning-fast load performance",
      sec1: {
        title: "Resilient UI boundaries",
        content: `<p>In modern web applications, an unhandled JavaScript error inside a component during rendering will unmount the <i>entire React tree</i>, leaving the user with a completely blank white screen. A crash in a sidebar widget shouldn't destroy the main application!</p><p><b>Error Boundaries</b> are special components that catch JavaScript errors anywhere in their child component tree, log the error, and display a friendly fallback UI. Furthermore, pair boundaries with <b>Code Splitting (React.lazy and Suspense)</b> to download bundle chunks on demand only when routes are visited.</p>`,
        keyIdea: "Error boundaries catch render crashes gracefully; React.lazy splits bundles for fast initial loading."
      },
      predict: {
        q: "What happens if a component throws an unhandled error during rendering and there is NO Error Boundary above it?",
        a: [
          "The entire React component tree is unmounted, leaving the user with a blank white screen",
          "The error is silently ignored and the component renders as blank",
          "The browser window automatically closes",
          "The user computer reboots"
        ],
        c: 0,
        why: "In React 16+, unhandled rendering errors unmount the whole tree to prevent displaying corrupted UI."
      },
      sec2: {
        title: "The resilient application architecture",
        content: `<p>Observe how error boundaries isolate failures and Suspense manages lazy bundle loading.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Root App Shell", lines: ["top-level error boundary", "handles fatal outages"] },
          { title: "Lazy Route (Suspense)", lines: ["const Admin = React.lazy(...)", "fallback={<LoadingSpinner />}", "loads chunk only on click!"] },
          { title: "Widget Boundary", lines: ["isolates third-party widgets", "widget crash displays 'Widget unavailable'", "main app continues running smoothly!"] }
        ]
      },
      sec3: {
        title: "Tracing React.lazy dynamic import",
        content: `<p>Trace how React.lazy loads a secondary route bundle on demand when visited.</p>`,
      },
      trace: {
        code: [
          "const Dashboard = React.lazy(() => import('./Dashboard.js'));",
          "# In render:",
          "<Suspense fallback={<PageSkeleton />}>",
          "    <Dashboard />",
          "</Suspense>",
          "# When user navigates to Dashboard: browser fetches 'Dashboard.chunk.js' in background!"
        ],
        steps: [
          { line: 0, vars: { lazy_declaration: "Dashboard bundle decoupled from main bundle" } },
          { line: 2, vars: { suspense: "displays PageSkeleton while chunk downloads" } },
          { line: 5, vars: { load: "Dashboard.chunk.js downloaded -> swaps skeleton for real page seamlessly" } }
        ]
      },
      practiceIntro: "Test your memory of error boundaries and code splitting.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A component catching rendering crashes in its child tree is an <0> boundary.",
          "Loading component bundles on demand uses React.<1>().",
          "The component displaying a fallback while a lazy chunk loads is <2>."
        ],
        blanks: [
          { a: ["Error"], why: "Error boundaries catch runtime render exceptions." },
          { a: ["lazy"], why: "React.lazy enables dynamic bundle imports." },
          { a: ["Suspense"], why: "Suspense coordinates asynchronous loading fallbacks." }
        ]
      },
      win: "You can design production-grade React architectures featuring fault-tolerant error boundaries and optimized lazy-loaded bundles.",
      nextTasks: [
        "Wrap an external widget or complex dashboard in an Error Boundary component.",
        "Split a heavy route (like an admin dashboard) using React.lazy and Suspense.",
        "Simulate a render error in development to verify that the fallback UI displays properly."
      ],
      primarySource: "React Official Documentation: *Error Boundaries* (legacy.reactjs.org/docs/error-boundaries.html) & *Code-Splitting* (react.dev/reference/react/lazy).",
      quiz: [
        {
          q: "What types of errors do React Error Boundaries catch?",
          a: [
            "Errors during rendering, in lifecycle methods, and in constructors of components below them in the tree",
            "Errors inside asynchronous event handlers (like onClick fetch calls)",
            "Syntax errors in CSS stylesheets",
            "Server-side database crashes"
          ],
          c: 0,
          why: "Error boundaries catch errors during rendering and lifecycle passes; event handler errors require try/catch."
        },
        {
          q: "What is 'Code Splitting' with React.lazy?",
          a: [
            "Splitting the JavaScript application into separate bundle files loaded on demand when the user visits that specific screen",
            "Splitting code between two monitors",
            "Deleting half of the codebase to make it smaller",
            "Writing code in two different programming languages"
          ],
          c: 0,
          why: "Code splitting keeps the initial homepage bundle small, downloading secondary pages only when needed."
        },
        {
          q: "What component is required to wrap around a 'React.lazy' component to show a loading placeholder?",
          a: [
            "<Suspense fallback={<Loading />}>",
            "<ErrorBoundary>",
            "<React.StrictMode>",
            "<Fragment>"
          ],
          c: 0,
          why: "<Suspense> catches the pending promise of the lazy import and displays the fallback UI."
        },
        {
          q: "Why must Error Boundaries currently be implemented as class components in React?",
          a: [
            "React's error boundary lifecycle methods (componentDidCatch and getDerivedStateFromError) have no functional hook equivalents yet",
            "Because functional components cannot display HTML",
            "Because class components run faster on mobile phones",
            "Because React is deprecating functional components"
          ],
          c: 0,
          why: "componentDidCatch and static getDerivedStateFromError are only supported on class components."
        }
      ]
    }
  ]
};
