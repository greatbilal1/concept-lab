/* ============================================================
   Frontend Architecture with React — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "components-as-pure-functions", file: "lessons/0001-components-as-pure-functions.html", title: "Components as pure functions", topic: "Components & Unidirectional Flow", anim: "Code" },
  { n: 2, id: "unidirectional-data-flow-and-props", file: "lessons/0002-unidirectional-data-flow-and-props.html", title: "Unidirectional data flow and props", topic: "Components & Unidirectional Flow", anim: "Code" },
  { n: 3, id: "state-colocation-and-lifting-state", file: "lessons/0003-state-colocation-and-lifting-state.html", title: "State co-location and lifting state", topic: "State & The Render Cycle", anim: "Code" },
  { n: 4, id: "the-react-render-cycle-and-reconciliation", file: "lessons/0004-the-react-render-cycle-and-reconciliation.html", title: "The React render cycle and reconciliation", topic: "State & The Render Cycle", anim: "Code" },
  { n: 5, id: "mastering-useeffect-synchronization-not-lifecycle", file: "lessons/0005-mastering-useeffect-synchronization-not-lifecycle.html", title: "Mastering useEffect: synchronization, not lifecycle", topic: "Hooks & Side Effects", anim: "Code" },
  { n: 6, id: "custom-hooks-as-reusable-logic-engines", file: "lessons/0006-custom-hooks-as-reusable-logic-engines.html", title: "Custom hooks as reusable logic engines", topic: "Hooks & Side Effects", anim: "Code" },
  { n: 7, id: "context-api-and-global-state-boundaries", file: "lessons/0007-context-api-and-global-state-boundaries.html", title: "Context API and global state boundaries", topic: "Architecture & Performance", anim: "Code" },
  { n: 8, id: "error-boundaries-and-code-splitting", file: "lessons/0008-error-boundaries-and-code-splitting.html", title: "Error boundaries and code splitting", topic: "Architecture & Performance", anim: "Code" }
];

/* ============================================================
   Frontend Architecture with React — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "components-props", title: "Components & Unidirectional Flow",
    terms: [
      { term: "Component", def: "A pure JavaScript function accepting props and returning JSX markup describing a UI tree.", lesson: 1, tags: ["components"] },
      { term: "Props", def: "Read-only input properties passed down from a parent component to configure child components.", lesson: 1, tags: ["props"] },
      { term: "Unidirectional data flow", def: "The architecture where state flows strictly downward via props, and events flow upward via callbacks.", lesson: 2, tags: ["architecture"] },
      { term: "Pure component", def: "A component function that always returns the exact same JSX output for the same props and state.", lesson: 2, tags: ["react"] }
    ]
  },
  {
    id: "state-rendering", title: "State & The Render Cycle",
    terms: [
      { term: "State", def: "Internal component memory that persists across renders and triggers re-rendering when updated.", lesson: 3, tags: ["state"] },
      { term: "State co-location", def: "The practice of keeping state as close as possible to the component that actually renders or consumes it.", lesson: 3, tags: ["architecture"] },
      { term: "Reconciliation", def: "The algorithm React uses to diff virtual DOM trees and determine minimal real DOM updates.", lesson: 4, tags: ["reconciliation"] },
      { term: "Derived state", def: "Values computed on-the-fly during render from existing props or state rather than stored in separate state.", lesson: 4, tags: ["state"] }
    ]
  },
  {
    id: "hooks-effects", title: "Hooks & Side Effects",
    terms: [
      { term: "Hook", def: "A special function (prefixed with 'use') allowing functional components to hook into React state and lifecycles.", lesson: 5, tags: ["hooks"] },
      { term: "useEffect", def: "A hook that synchronizes a component with an external system (network, DOM, timer) after rendering.", lesson: 5, tags: ["hooks"] },
      { term: "Custom hook", def: "A reusable function encapsulating stateful logic and other hooks, returning data and actions.", lesson: 6, tags: ["hooks"] },
      { term: "Dependency array", def: "The array passed to useEffect, useMemo, or useCallback specifying which values trigger re-execution when changed.", lesson: 5, tags: ["hooks"] }
    ]
  },
  {
    id: "architecture-patterns", title: "Architecture & Performance",
    terms: [
      { term: "Context API", def: "A React feature providing dependency injection of data across component subtrees without prop drilling.", lesson: 7, tags: ["context"] },
      { term: "Prop drilling", def: "The antipattern of passing props down through multiple layers of intermediate components that don't need them.", lesson: 7, tags: ["antipattern"] },
      { term: "Error boundary", def: "A special component that catches JavaScript errors anywhere in its child tree, preventing full app crashes.", lesson: 8, tags: ["errors"] },
      { term: "Code splitting", def: "Splitting application JavaScript bundles into smaller chunks loaded on demand via React.lazy and Suspense.", lesson: 8, tags: ["performance"] }
    ]
  }
];
