/* ============================================================
   JavaScript Fundamentals — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "primitives-and-variables-let-const", file: "lessons/0001-primitives-and-variables-let-const.html", title: "Primitives and variables: let vs const", topic: "Primitives & Variables", anim: "CodeSweep" },
  { n: 2, id: "equality-types-and-truthiness", file: "lessons/0002-equality-types-and-truthiness.html", title: "Equality, types, and truthiness", topic: "Primitives & Variables", anim: "CodeSweep" },
  { n: 3, id: "functions-parameters-and-returns", file: "lessons/0003-functions-parameters-and-returns.html", title: "Functions, parameters, and returns", topic: "Functions & Scope", anim: "CodeSweep" },
  { n: 4, id: "scope-lexical-environment-and-closures", file: "lessons/0004-scope-lexical-environment-and-closures.html", title: "Scope, lexical environment, and closures", topic: "Functions & Scope", anim: "CodeSweep" },
  { n: 5, id: "objects-references-and-properties", file: "lessons/0005-objects-references-and-properties.html", title: "Objects, references, and properties", topic: "Objects & Collections", anim: "CodeSweep" },
  { n: 6, id: "arrays-and-array-methods", file: "lessons/0006-arrays-and-array-methods.html", title: "Arrays and modern array methods", topic: "Objects & Collections", anim: "CodeSweep" },
  { n: 7, id: "destructuring-spread-and-rest", file: "lessons/0007-destructuring-spread-and-rest.html", title: "Destructuring, spread, and rest operators", topic: "Destructuring & Modules", anim: "CodeSweep" },
  { n: 8, id: "modules-import-and-export", file: "lessons/0008-modules-import-and-export.html", title: "Modules: import and export", topic: "Destructuring & Modules", anim: "CodeSweep" }
];

/* ============================================================
   JavaScript Fundamentals — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "types-vars", title: "Primitives & Variables",
    terms: [
      { term: "Primitive value", def: "An immutable data value represented directly at the lowest level of the language (e.g. number, string, boolean).", lesson: 1, tags: ["types"] },
      { term: "Temporal Dead Zone", def: "The state between entering scope and variable declaration where let and const variables cannot be accessed.", lesson: 1, tags: ["scope"] },
      { term: "Strict equality", def: "The === operator, comparing both type and value without performing implicit type coercion.", lesson: 2, tags: ["operators"] },
      { term: "Type coercion", def: "The automatic or implicit conversion of values from one data type to another during operations.", lesson: 2, tags: ["types"] }
    ]
  },
  {
    id: "functions-scope", title: "Functions & Scope",
    terms: [
      { term: "Lexical scope", def: "Scope resolution determined by the physical location of variable declarations in the source code.", lesson: 4, tags: ["scope"] },
      { term: "Closure", def: "The combination of a function bundled together with references to its surrounding lexical environment.", lesson: 4, tags: ["closures"] },
      { term: "Arrow function", def: "A compact function syntax (=>) that does not bind its own this, arguments, or super.", lesson: 3, tags: ["functions"] },
      { term: "Higher-order function", def: "A function that accepts another function as an argument, returns a function, or both.", lesson: 3, tags: ["functions"] }
    ]
  },
  {
    id: "objects-arrays", title: "Objects & Collections",
    terms: [
      { term: "Reference type", def: "Objects, arrays, and functions stored on the heap, accessed and passed via memory references.", lesson: 5, tags: ["objects"] },
      { term: "Shallow copy", def: "A copy of an object where top-level properties are duplicated, but nested objects remain shared references.", lesson: 5, tags: ["memory"] },
      { term: "Pure function", def: "A function that always produces the same output for the same input and causes zero observable side effects.", lesson: 6, tags: ["functional"] },
      { term: "Reduce method", def: "An array method executing a reducer callback over all items to accumulate them into a single result value.", lesson: 6, tags: ["arrays"] }
    ]
  },
  {
    id: "modern-js", title: "Destructuring & Modules",
    terms: [
      { term: "Destructuring", def: "A syntax enabling the unpacking of values from arrays or properties from objects into distinct variables.", lesson: 7, tags: ["syntax"] },
      { term: "Spread operator", def: "The syntax (...) that expands an iterable array or object into individual elements or properties.", lesson: 7, tags: ["syntax"] },
      { term: "ES Module", def: "The official standard JavaScript module system using import and export statements.", lesson: 8, tags: ["modules"] },
      { term: "Default export", def: "The primary export of a module imported without curly braces (e.g. import App from './App.js').", lesson: 8, tags: ["modules"] }
    ]
  }
];
