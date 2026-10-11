/* ============================================================
   TypeScript Fundamentals — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-typescript-and-type-annotations", file: "lessons/0001-why-typescript-and-type-annotations.html", title: "Why TypeScript & Type Annotations", topic: "Basic Types & Type Inference", anim: "Code" },
  { n: 2, id: "type-inference-and-primitive-types", file: "lessons/0002-type-inference-and-primitive-types.html", title: "Type Inference & Safe Types", topic: "Basic Types & Type Inference", anim: "CodePulse" },
  { n: 3, id: "interfaces-and-object-shapes", file: "lessons/0003-interfaces-and-object-shapes.html", title: "Interfaces & Object Shapes", topic: "Interfaces & Type Aliases", anim: "Layers" },
  { n: 4, id: "type-aliases-and-tuples", file: "lessons/0004-type-aliases-and-tuples.html", title: "Type Aliases & Tuples", topic: "Interfaces & Type Aliases", anim: "Code" },
  { n: 5, id: "union-and-intersection-types", file: "lessons/0005-union-and-intersection-types.html", title: "Union & Intersection Types", topic: "Unions, Narrowing & Literals", anim: "Flow" },
  { n: 6, id: "type-narrowing-and-guards", file: "lessons/0006-type-narrowing-and-guards.html", title: "Type Narrowing & Guards", topic: "Unions, Narrowing & Literals", anim: "LayersOrbit" },
  { n: 7, id: "generics-and-type-parameters", file: "lessons/0007-generics-and-type-parameters.html", title: "Generics & Type Parameters", topic: "Generics & Utility Types", anim: "CodePulse" },
  { n: 8, id: "utility-types-and-declaration-files", file: "lessons/0008-utility-types-and-declaration-files.html", title: "Utility Types & Generics in Practice", topic: "Generics & Utility Types", anim: "LayersOrbit" }
];

/* ============================================================
   TypeScript Fundamentals — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "types-and-inference", title: "Types & Type Inference",
    terms: [
      { term: "Type annotation", def: "Explicit syntax (e.g. : string) telling the TypeScript compiler what type a variable, parameter, or return value must be.", lesson: 1, tags: ["syntax","types"] },
      { term: "Type inference", def: "TypeScript's automatic deduction of a variable or expression's type based on its assigned value and context.", lesson: 2, tags: ["compiler","inference"] },
      { term: "Type erasure", def: "The compile-time process where all TypeScript types, interfaces, and annotations are stripped out, emitting plain JavaScript.", lesson: 1, tags: ["compiler"] },
      { term: "Unknown type", def: "The type-safe counterpart of any. Represents any value, but forbids property access or method calls without prior type narrowing.", lesson: 2, tags: ["safety","types"] }
    ]
  },
  {
    id: "contracts-and-aliases", title: "Object Contracts & Aliases",
    terms: [
      { term: "Interface", def: "A TypeScript declaration that defines a contract for the shape of an object, supporting inheritance and declaration merging.", lesson: 3, tags: ["objects","interfaces"] },
      { term: "Type alias", def: "A name given to any type definition using the `type` keyword, capable of representing primitives, unions, and intersections.", lesson: 4, tags: ["syntax","types"] },
      { term: "Structural typing", def: "A type system where type compatibility and equivalence are determined by the shape and members of a value, not explicit nominal inheritance.", lesson: 3, tags: ["theory"] },
      { term: "Tuple", def: "An array with a fixed number of elements whose types are known at specific positions.", lesson: 4, tags: ["arrays","tuples"] }
    ]
  },
  {
    id: "unions-and-narrowing", title: "Unions & Type Narrowing",
    terms: [
      { term: "Union type", def: "A type formed from two or more other types (A | B), representing values that may be any one of those types.", lesson: 5, tags: ["unions","types"] },
      { term: "Type guard", def: "An expression that performs a runtime check that guarantees the type of a value within a conditional branch (e.g. typeof, instanceof).", lesson: 6, tags: ["narrowing"] },
      { term: "Discriminated union", def: "A pattern where each member of a union has a common literal property (the discriminant), enabling TypeScript to narrow exact variants.", lesson: 6, tags: ["patterns","unions"] },
      { term: "Never type", def: "The bottom type representing values that never occur or functions that never return (e.g., throwing an error or infinite loops).", lesson: 5, tags: ["types","theory"] }
    ]
  },
  {
    id: "generics-and-utilities", title: "Generics & Utility Types",
    terms: [
      { term: "Generic type", def: "A type or function parameterized by one or more type variables (e.g. <T>), allowing the creation of reusable type-safe components.", lesson: 7, tags: ["generics"] },
      { term: "Generic constraint", def: "Using the `extends` keyword in a generic parameter to restrict the allowable types to a specific shape or subtype.", lesson: 7, tags: ["generics"] },
      { term: "Partial utility", def: "A built-in utility type that constructs a type with all properties of T set to optional.", lesson: 8, tags: ["utilities"] },
      { term: "Pick utility", def: "A built-in utility type that constructs a type by picking the set of properties Keys from type T.", lesson: 8, tags: ["utilities"] }
    ]
  }
];
