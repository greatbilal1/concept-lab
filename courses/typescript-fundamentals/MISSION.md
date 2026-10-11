# Mission — TypeScript Fundamentals

## Why this course exists

JavaScript is dynamic and weakly typed, meaning many runtime bugs (like `TypeError: cannot read properties of undefined`) only surface in production. TypeScript adds a compile-time static type system that runs ahead of time and completely erases into clean JavaScript. This course builds a rock-solid mental model of TypeScript's structural type system, type inference engine, narrowing mechanisms, and generic abstraction.

## What the learner can do at the end

- Understand and configure the TypeScript compilation pipeline (`tsc`).
- Use primitive type annotations and leverage TypeScript's powerful type inference.
- Distinguish between `any`, `unknown`, and `never`, handling unvalidated data safely.
- Define object contracts using `interface` and `type` aliases, knowing when to choose which.
- Model complex domain states with Discriminated Unions and perform safe type narrowing.
- Write flexible, reusable, and type-safe code using Generics and constraints (`extends`).
- Apply built-in utility types (`Partial`, `Pick`, `Omit`, `Readonly`) to transform types cleanly.

## What this course is NOT

- Not a basic JavaScript syntax refresher (covered in JavaScript Fundamentals).
- Not a framework-specific course (React, Node, or Angular). It focuses on standard TypeScript semantics.

## Success looks like

When writing or refactoring application code, the learner catches shape mismatches, missing null checks, and invalid states during development before running a single test.
