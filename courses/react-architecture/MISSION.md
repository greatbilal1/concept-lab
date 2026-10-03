# Mission — Frontend Architecture with React

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
