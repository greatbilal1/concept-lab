"use strict";

module.exports = {
  id: "typescript-fundamentals",
  title: "TypeScript Fundamentals",
  num: 101,
  emoji: "📘",
  desc: "Bring static typing to JavaScript for robust, scalable front-end and back-end applications.",
  mission: `# Mission — TypeScript Fundamentals

## Why this course exists

JavaScript is dynamic and weakly typed, meaning many runtime bugs (like \`TypeError: cannot read properties of undefined\`) only surface in production. TypeScript adds a compile-time static type system that runs ahead of time and completely erases into clean JavaScript. This course builds a rock-solid mental model of TypeScript's structural type system, type inference engine, narrowing mechanisms, and generic abstraction.

## What the learner can do at the end

- Understand and configure the TypeScript compilation pipeline (\`tsc\`).
- Use primitive type annotations and leverage TypeScript's powerful type inference.
- Distinguish between \`any\`, \`unknown\`, and \`never\`, handling unvalidated data safely.
- Define object contracts using \`interface\` and \`type\` aliases, knowing when to choose which.
- Model complex domain states with Discriminated Unions and perform safe type narrowing.
- Write flexible, reusable, and type-safe code using Generics and constraints (\`extends\`).
- Apply built-in utility types (\`Partial\`, \`Pick\`, \`Omit\`, \`Readonly\`) to transform types cleanly.

## What this course is NOT

- Not a basic JavaScript syntax refresher (covered in JavaScript Fundamentals).
- Not a framework-specific course (React, Node, or Angular). It focuses on standard TypeScript semantics.

## Success looks like

When writing or refactoring application code, the learner catches shape mismatches, missing null checks, and invalid states during development before running a single test.
`,
  notes: `# Notes — TypeScript Fundamentals

## Decisions
- Group into four themes: Types & Inference, Object Contracts, Unions & Narrowing, and Generics & Utilities.
- Ground explanations in TypeScript's structural ("duck typing") type system and zero-runtime-cost type erasure.
`,
  resources: `# Resources — TypeScript Fundamentals

## Knowledge (primary sources)
- Official TypeScript Handbook (typescriptlang.org/docs).
- *Programming TypeScript* by Boris Cherny (O'Reilly).
- *Effective TypeScript* by Dan Vanderkam (O'Reilly).
- Matt Pocock's Total TypeScript tutorials and workshops.

## Wisdom
- Types in TypeScript describe the shape of values, not their runtime identity. Types vanish at runtime; only JavaScript remains.
`,
  cheatsheetSections: [
    {
      title: "Primitives & Annotations",
      label: "Basic types and variables",
      code: `let count: number = 42;
let username: string = "Ada";
let isActive: boolean = true;
// Arrays
let tags: string[] = ["web", "ts"];
let matrix: Array<number> = [1, 2, 3];
// Tuples: fixed length and types
let pair: [string, number] = ["score", 100];`,
      lessonN: 1,
      lessonSlug: "why-typescript-and-type-annotations",
      lessonTitle: "Why TypeScript & Type Annotations"
    },
    {
      title: "any vs unknown vs never",
      label: "Safe top and bottom types",
      code: `// any disables the compiler completely (avoid!)
let bad: any = "hello";
bad.nonExistentMethod(); // compiles, crashes at runtime!

// unknown requires narrowing before use (safe!)
let input: unknown = JSON.parse('{"id": 1}');
if (typeof input === "object" && input !== null && "id" in input) {
  console.log((input as { id: number }).id);
}

// never represents values that can never occur
function fail(msg: string): never {
  throw new Error(msg);
}`,
      lessonN: 2,
      lessonSlug: "type-inference-and-primitive-types",
      lessonTitle: "Type Inference & Safe Types"
    },
    {
      title: "Interfaces vs Type Aliases",
      label: "Modeling object shapes",
      code: `interface User {
  readonly id: string;
  name: string;
  email?: string; // optional property
}

// Interfaces support declaration merging and extension
interface Admin extends User {
  role: "superadmin" | "moderator";
}

// Type aliases support unions, primitives, and mapped types
type ID = string | number;
type Callback = (data: string) => void;`,
      lessonN: 3,
      lessonSlug: "interfaces-and-object-shapes",
      lessonTitle: "Interfaces & Object Shapes"
    },
    {
      title: "Discriminated Unions",
      label: "Exhaustive state modeling",
      code: `type NetworkState =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; data: string }
  | { state: "error"; message: string };

function render(s: NetworkState) {
  switch (s.state) {
    case "idle": return "Ready";
    case "loading": return "Loading...";
    case "success": return s.data; // TS knows data exists!
    case "error": return s.message; // TS knows message exists!
  }
}`,
      lessonN: 6,
      lessonSlug: "type-narrowing-and-guards",
      lessonTitle: "Type Narrowing & Guards"
    },
    {
      title: "Generics & Utility Types",
      label: "Reusable abstractions",
      code: `// Generic function
function wrapInArray<T>(item: T): T[] {
  return [item];
}

interface Product {
  id: number;
  name: string;
  price: number;
}

// Built-in utilities
type ReadonlyProduct = Readonly<Product>;
type ProductUpdate = Partial<Product>; // all fields optional
type ProductPreview = Pick<Product, "id" | "name">;
type WithoutPrice = Omit<Product, "price">;`,
      lessonN: 8,
      lessonSlug: "utility-types-and-declaration-files",
      lessonTitle: "Utility Types & Generics"
    }
  ],
  glossaryGroups: [
    {
      id: "types-and-inference",
      title: "Types & Type Inference",
      terms: [
        { term: "Type annotation", def: "Explicit syntax (e.g. : string) telling the TypeScript compiler what type a variable, parameter, or return value must be.", lesson: 1, tags: ["syntax", "types"] },
        { term: "Type inference", def: "TypeScript's automatic deduction of a variable or expression's type based on its assigned value and context.", lesson: 2, tags: ["compiler", "inference"] },
        { term: "Type erasure", def: "The compile-time process where all TypeScript types, interfaces, and annotations are stripped out, emitting plain JavaScript.", lesson: 1, tags: ["compiler"] },
        { term: "Unknown type", def: "The type-safe counterpart of any. Represents any value, but forbids property access or method calls without prior type narrowing.", lesson: 2, tags: ["safety", "types"] }
      ]
    },
    {
      id: "contracts-and-aliases",
      title: "Object Contracts & Aliases",
      terms: [
        { term: "Interface", def: "A TypeScript declaration that defines a contract for the shape of an object, supporting inheritance and declaration merging.", lesson: 3, tags: ["objects", "interfaces"] },
        { term: "Type alias", def: "A name given to any type definition using the `type` keyword, capable of representing primitives, unions, and intersections.", lesson: 4, tags: ["syntax", "types"] },
        { term: "Structural typing", def: "A type system where type compatibility and equivalence are determined by the shape and members of a value, not explicit nominal inheritance.", lesson: 3, tags: ["theory"] },
        { term: "Tuple", def: "An array with a fixed number of elements whose types are known at specific positions.", lesson: 4, tags: ["arrays", "tuples"] }
      ]
    },
    {
      id: "unions-and-narrowing",
      title: "Unions & Type Narrowing",
      terms: [
        { term: "Union type", def: "A type formed from two or more other types (A | B), representing values that may be any one of those types.", lesson: 5, tags: ["unions", "types"] },
        { term: "Type guard", def: "An expression that performs a runtime check that guarantees the type of a value within a conditional branch (e.g. typeof, instanceof).", lesson: 6, tags: ["narrowing"] },
        { term: "Discriminated union", def: "A pattern where each member of a union has a common literal property (the discriminant), enabling TypeScript to narrow exact variants.", lesson: 6, tags: ["patterns", "unions"] },
        { term: "Never type", def: "The bottom type representing values that never occur or functions that never return (e.g., throwing an error or infinite loops).", lesson: 5, tags: ["types", "theory"] }
      ]
    },
    {
      id: "generics-and-utilities",
      title: "Generics & Utility Types",
      terms: [
        { term: "Generic type", def: "A type or function parameterized by one or more type variables (e.g. <T>), allowing the creation of reusable type-safe components.", lesson: 7, tags: ["generics"] },
        { term: "Generic constraint", def: "Using the `extends` keyword in a generic parameter to restrict the allowable types to a specific shape or subtype.", lesson: 7, tags: ["generics"] },
        { term: "Partial utility", def: "A built-in utility type that constructs a type with all properties of T set to optional.", lesson: 8, tags: ["utilities"] },
        { term: "Pick utility", def: "A built-in utility type that constructs a type by picking the set of properties Keys from type T.", lesson: 8, tags: ["utilities"] }
      ]
    }
  ],
  topics: [
    "Basic Types & Type Inference",
    "Interfaces & Type Aliases",
    "Unions, Narrowing & Literals",
    "Generics & Utility Types"
  ],
  lessons: [
    {
      n: 1,
      id: "why-typescript-and-type-annotations",
      title: "Why TypeScript & Type Annotations",
      topic: "Basic Types & Type Inference",
      anim: "Code",
      lede: "JavaScript is dynamically typed; TypeScript adds a compile-time static type system that verifies code correctness before execution.",
      winShort: "Write explicit type annotations for variables, functions, and arrays and understand type erasure",
      missionLink: "Eliminate silent runtime type errors across complex applications",
      sec1: {
        title: "Static typing on top of dynamic JavaScript",
        content: `<p>In standard JavaScript, variables can hold any value, and functions receive whatever arguments are passed at runtime. If you pass an unexpected shape, JavaScript fails at runtime with errors like <code>TypeError: user.toUpperCase is not a function</code>.</p><p>TypeScript introduces a <b>compile-time type checker</b>. You write TypeScript (<code>.ts</code> files), the compiler (<code>tsc</code>) verifies all types, and then produces clean JavaScript (<code>.js</code>) by completely stripping out (erasing) the type annotations.</p>`,
        keyIdea: "TypeScript catches bugs during compilation; at runtime, only standard JavaScript executes with zero performance overhead."
      },
      predict: {
        q: "What remains of TypeScript type annotations when code is compiled to JavaScript?",
        a: [
          "Nothing: all types, interfaces, and annotations are completely erased during compilation",
          "They are converted into runtime assert statements",
          "They are stored in a hidden __types__ object on the global scope",
          "They are converted into browser cookies"
        ],
        c: 0,
        why: "TypeScript features complete type erasure: type checking happens strictly ahead of time, leaving clean, fast JavaScript."
      },
      sec2: {
        title: "Basic type annotations",
        content: `<p>You annotate variables and function parameters using a colon (<code>: type</code>). The primary primitive types match JavaScript's primitives: <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, and <code>undefined</code>.</p>`,
      },
      diagram: {
        boxes: [
          { title: "TypeScript Source (.ts)", lines: ["let count: number = 42;", "function add(a: number): number"] },
          { title: "tsc Compiler", lines: ["Type Checking & Verification", "Diagnostics & Error Reporting"] },
          { title: "Emitted JavaScript (.js)", lines: ["let count = 42;", "function add(a) { return a; }"] }
        ]
      },
      sec3: {
        title: "Tracing function type verification",
        content: `<p>Observe how the TypeScript compiler detects a type mismatch when passing arguments to an annotated function.</p>`,
      },
      trace: {
        code: [
          "function greet(name: string, age: number): string {",
          "  return `Hello ${name}, you are ${age} years old`;",
          "}",
          "greet('Alice', 30); // valid call",
          "// greet('Bob', 'thirty'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'"
        ],
        steps: [
          { line: 0, vars: { signature: "(name: string, age: number) => string" } },
          { line: 3, vars: { check_call: "name: 'Alice' (string ok), age: 30 (number ok)" } },
          { line: 4, vars: { compiler_error: "TS2345: Argument 'thirty' is not assignable to 'number'" } }
        ]
      },
      practiceIntro: "Test your understanding of type annotations and compiler behavior.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "TypeScript annotations are removed at compile time through type <0>.",
          "The CLI compiler command that compiles TypeScript is <1>.",
          "The primitive type representing numeric values in TypeScript is <2>."
        ],
        blanks: [
          { a: ["erasure"], why: "Type erasure removes all static types when emitting JavaScript." },
          { a: ["tsc"], why: "tsc is the official TypeScript Compiler executable." },
          { a: ["number"], why: "number covers integers, floats, and NaN." }
        ]
      },
      win: "You can explain the purpose of TypeScript, annotate primitive variables and functions, and understand the compile-to-JS cycle.",
      nextTasks: [
        "Install typescript via npm and compile a simple hello.ts file with tsc.",
        "Deliberately pass an invalid type to an annotated function and inspect the compiler error.",
        "Verify that emitted .js files contain no TypeScript type keywords."
      ],
      primarySource: "Official TypeScript Handbook, *The Basics* (typescriptlang.org).",
      quiz: [
        {
          q: "What happens when you compile TypeScript code that contains type annotations?",
          a: [
            "The compiler validates the types and strips them away, emitting standard JavaScript",
            "The browser executes the types using a specialized TypeScript engine",
            "The types are transformed into runtime JSON schema validators",
            "The compiler fails unless every variable has an explicit annotation"
          ],
          c: 0,
          why: "TypeScript erases all type syntax during compilation; runtime code is pure JavaScript."
        },
        {
          q: "Which of the following correctly annotates a function that takes two numbers and returns a boolean?",
          a: [
            "function isGreater(a: number, b: number): boolean",
            "function isGreater(a: int, b: int) -> bool",
            "def isGreater(a: number, b: number) => boolean",
            "function isGreater(number a, number b): boolean"
          ],
          c: 0,
          why: "TypeScript uses 'name: type' for parameters and ': returnType' after the parameter list."
        },
        {
          q: "What is the primary benefit of compile-time type checking over manual runtime checks?",
          a: [
            "Errors are detected immediately in the editor or build step without running code in production",
            "It speeds up network download speeds for JavaScript files",
            "It prevents CSS rendering bugs on mobile screens",
            "It automatically optimizes database SQL queries"
          ],
          c: 0,
          why: "Static typing catches mismatch and undefined errors before code is ever deployed."
        },
        {
          q: "Does TypeScript enforce type restrictions at runtime if invalid data arrives from a fetch() API call?",
          a: [
            "No, TypeScript types only exist at compile time; runtime data must be validated with runtime guards or schema libraries",
            "Yes, TypeScript intercepts network packets and validates their types automatically",
            "Yes, the browser rejects any JSON that violates TypeScript interfaces",
            "No, because TypeScript cannot be used with asynchronous code"
          ],
          c: 0,
          why: "Because types are erased, TypeScript cannot validate arbitrary external data arriving at runtime."
        }
      ]
    },
    {
      n: 2,
      id: "type-inference-and-primitive-types",
      title: "Type Inference & Safe Types",
      topic: "Basic Types & Type Inference",
      anim: "CodePulse",
      lede: "You do not need to annotate every variable. TypeScript's inference engine automatically calculates types, while unknown and any control type safety.",
      winShort: "Rely on type inference where appropriate and use unknown instead of any for unvalidated data",
      missionLink: "Prevent unsafe code from sneaking into type-checked codebases",
      sec1: {
        title: "The power of type inference",
        content: `<p>TypeScript is smart: when you declare a variable with an initial value, the compiler automatically deduces its type. Writing <code>let score = 100;</code> infers <code>number</code> without requiring <code>let score: number = 100;</code>.</p><p>Over-annotating code adds clutter. The standard best practice is: <b>let TypeScript infer local variable types; explicitly annotate function parameters and public APIs</b>.</p>`,
        keyIdea: "Let TypeScript infer local variable types from assignments; annotate function boundaries and complex returns."
      },
      predict: {
        q: "If you declare 'let greeting = \"Hello World\";' and later write 'greeting = 42;', what happens?",
        a: [
          "TypeScript reports a compile error: Type 'number' is not assignable to type 'string'",
          "TypeScript silently re-infers greeting as number",
          "The program crashes at runtime",
          "greeting is automatically converted to the string '42'"
        ],
        c: 0,
        why: "greeting was inferred as string upon initialization; reassigning a number causes a static compile error."
      },
      sec2: {
        title: "any versus unknown versus never",
        content: `<p>Understanding the top and bottom types is crucial:</p><ul><li><b>any:</b> Disables all type checking. It is an escape hatch that allows calling arbitrary methods and assigning to anything. Avoid using it!</li><li><b>unknown:</b> Represents a value of any type, but you <i>cannot</i> use or call properties on it until you narrow its type (e.g. via <code>typeof</code> or assertion).</li><li><b>never:</b> Represents a state that can never exist (e.g. a function that always throws, or unreachable code branches).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "unknown (Safe Top Type)", lines: ["Can hold any value", "Requires narrowing before access", "Preferred for unvalidated input"] },
          { title: "any (Unsafe Wildcard)", lines: ["Disables all compiler checks", "Propagates bugs throughout codebase", "Use only as absolute last resort"] },
          { title: "never (Bottom Type)", lines: ["Represents impossible states", "Exhaustive switch checks", "Functions that throw or loop forever"] }
        ]
      },
      sec3: {
        title: "Tracing unknown type narrowing",
        content: `<p>Trace how the compiler enforces narrowing before permitting operations on an unknown variable.</p>`,
      },
      trace: {
        code: [
          "let data: unknown = JSON.parse('\"Ada Lovelace\"');",
          "// data.toUpperCase(); // Error: 'data' is of type 'unknown'",
          "if (typeof data === 'string') {",
          "  console.log(data.toUpperCase()); // Valid! TS narrowed data to string",
          "}"
        ],
        steps: [
          { line: 0, vars: { data: "unknown" } },
          { line: 1, vars: { compiler_guard: "Object is of type 'unknown', access forbidden" } },
          { line: 2, vars: { check: "typeof data === 'string' -> true" } },
          { line: 3, vars: { narrowed_type: "string", method_call: "'ADA LOVELACE'" } }
        ]
      },
      practiceIntro: "Test your mastery of type inference, any, unknown, and never.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The type that turns off all TypeScript safety checks is <0>.",
          "The safe top type that requires validation before property access is <1>.",
          "The bottom type representing values that never occur is <2>."
        ],
        blanks: [
          { a: ["any"], why: "any disables the compiler." },
          { a: ["unknown"], why: "unknown forces you to prove what type it is before using it." },
          { a: ["never"], why: "never is the empty bottom type." }
        ]
      },
      win: "You can write idiomatic code leveraging type inference and use unknown to safely handle external inputs.",
      nextTasks: [
        "Replace occurrences of any in a script with unknown and add typeof narrowing.",
        "Write a function that never returns and inspect its inferred never return type.",
        "Check how const vs let produces literal types vs widened primitive types during inference."
      ],
      primarySource: "Boris Cherny, *Programming TypeScript*, Chapter 3: *All About Types*.",
      quiz: [
        {
          q: "Why is 'unknown' preferred over 'any' when handling API responses or user inputs?",
          a: [
            "unknown prevents accidental property access until you explicitly prove its runtime type",
            "unknown automatically parses JSON strings into JavaScript objects",
            "unknown makes API responses load 50% faster",
            "unknown is compatible with older versions of Internet Explorer"
          ],
          c: 0,
          why: "unknown forces the developer to check the value's type before using it, preserving type safety."
        },
        {
          q: "What type does TypeScript infer for: const name = 'Alice' vs let name = 'Alice'?",
          a: [
            "const infers the literal type 'Alice'; let infers the widened type string",
            "Both infer string",
            "Both infer any",
            "const infers string; let infers undefined"
          ],
          c: 0,
          why: "Since const cannot be reassigned, TS infers the exact literal type 'Alice'. Since let can be reassigned, it widens to string."
        },
        {
          q: "When does a function have a return type of 'never'?",
          a: [
            "When it always throws an error or enters an infinite loop, never finishing normally",
            "When it returns null or undefined",
            "When it returns an empty object {}",
            "When it is an asynchronous function"
          ],
          c: 0,
          why: "never signifies that the function never returns a value to the caller."
        },
        {
          q: "What is the recommended approach to annotating local variables with obvious initial values?",
          a: [
            "Let TypeScript infer the type automatically to avoid boilerplate code",
            "Always write explicit annotations on every single line",
            "Cast every variable using the 'as any' operator",
            "Annotate variables using JSDoc comments only"
          ],
          c: 0,
          why: "TypeScript's inference is robust; manual annotations on simple local assignments are redundant."
        }
      ]
    },
    {
      n: 3,
      id: "interfaces-and-object-shapes",
      title: "Interfaces & Object Shapes",
      topic: "Interfaces & Type Aliases",
      anim: "Layers",
      lede: "In TypeScript, types are structural ('duck typed'): if an object has the required properties, it satisfies the interface.",
      winShort: "Define object contracts with interfaces, optional properties, and readonly fields",
      missionLink: "Guarantee consistent data shapes across components and microservices",
      sec1: {
        title: "Structural typing vs nominal typing",
        content: `<p>Languages like Java or C# use <b>nominal typing</b>: an object only satisfies an interface if its class explicitly declares <code>implements InterfaceName</code>.</p><p>TypeScript uses <b>structural typing</b> (often called "duck typing"). If an object matches the shape defined by an interface—meaning it has the required properties with matching types—TypeScript accepts it, regardless of how it was created.</p>`,
        keyIdea: "TypeScript cares about the shape of data, not the class label on the object."
      },
      predict: {
        q: "Given interface Point { x: number; y: number; }, is const p = { x: 1, y: 2, z: 3 }; assignable to a parameter of type Point?",
        a: [
          "Yes, because p has x and y of type number (extra properties on existing objects are permitted)",
          "No, because p has an extra property 'z'",
          "No, because p did not use the class syntax",
          "Yes, but the 'z' property is physically deleted from the object"
        ],
        c: 0,
        why: "In structural typing, an object that has at least the required members satisfies the interface."
      },
      sec2: {
        title: "Interface features: optional and readonly",
        content: `<p>Interfaces provide modifiers to fine-tune property behavior:</p><ul><li><code>readonly id: string</code>: Prevents mutation of the property after creation.</li><li><code>email?: string</code>: Marks the property as optional (it can be string or undefined).</li><li><code>extends OtherInterface</code>: Inherits properties from one or more base interfaces.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Base Interface", lines: ["interface User {", "  readonly id: string;", "  name: string;", "  email?: string;", "}"] },
          { title: "Extended Interface", lines: ["interface Admin extends User {", "  role: 'super' | 'mod';", "}"] },
          { title: "Satisfying Object", lines: ["{ id: '1', name: 'Ada',", "  role: 'super' }", "(email omitted - optional)"] }
        ]
      },
      sec3: {
        title: "Tracing readonly enforcement",
        content: `<p>Observe how TypeScript prevents property reassignment when marked as readonly.</p>`,
      },
      trace: {
        code: [
          "interface Config { readonly apiUrl: string; timeout: number; }",
          "const cfg: Config = { apiUrl: 'https://api.dev', timeout: 5000 };",
          "cfg.timeout = 10000; // valid: timeout is mutable",
          "// cfg.apiUrl = 'https://api.prod'; // Error: Cannot assign to 'apiUrl' because it is a read-only property."
        ],
        steps: [
          { line: 0, vars: { interface: "apiUrl (readonly), timeout (mutable)" } },
          { line: 1, vars: { cfg: "initialized with apiUrl and timeout" } },
          { line: 2, vars: { timeout: "updated to 10000" } },
          { line: 3, vars: { compiler_error: "TS2540: Cannot assign to read-only property 'apiUrl'" } }
        ]
      },
      practiceIntro: "Test your understanding of interfaces, structural typing, and property modifiers.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A type system based on shape rather than declared class name is called <0> typing.",
          "To mark an interface property as optional, append a <1> after its name.",
          "To forbid modifying an object property after assignment, prefix it with <2>."
        ],
        blanks: [
          { a: ["structural"], why: "Structural typing verifies matching properties." },
          { a: ["?"], why: "The question mark denotes optional fields." },
          { a: ["readonly"], why: "readonly enforces compile-time immutability on properties." }
        ]
      },
      win: "You can define clean object contracts, extend them, and utilize readonly and optional modifiers.",
      nextTasks: [
        "Create an interface for a database record with readonly id and optional timestamps.",
        "Extend an existing interface using the extends keyword.",
        "Demonstrate structural typing by passing an anonymous object literal to a function."
      ],
      primarySource: "Dan Vanderkam, *Effective TypeScript*, Item 4: *Get Comfortable with Structural Typing*.",
      quiz: [
        {
          q: "What defines structural typing in TypeScript?",
          a: [
            "Compatibility is determined strictly by the structure (properties and methods) of a value",
            "Types must be explicitly registered with the global runtime registry",
            "Classes must inherit from an abstract base class with the same name",
            "Object keys must always be sorted alphabetically"
          ],
          c: 0,
          why: "TypeScript evaluates whether the required properties exist on the value, regardless of its nominal origin."
        },
        {
          q: "How do you make an interface property optional in TypeScript?",
          a: [
            "Add a question mark (?) after the property name (e.g. bio?: string)",
            "Prefix the property with optional (e.g. optional bio: string)",
            "Wrap the type in Optional<string>",
            "Set its default value to null inside the interface"
          ],
          c: 0,
          why: "In TypeScript syntax, propertyName?: type indicates an optional field."
        },
        {
          q: "What does the 'readonly' keyword do when applied to an interface property?",
          a: [
            "It prevents reassignment of that property at compile time",
            "It freezes the entire object in memory using Object.freeze at runtime",
            "It prevents the property from being displayed in console.log()",
            "It makes the property accessible only inside private class methods"
          ],
          c: 0,
          why: "readonly tells the TypeScript compiler to reject any assignment to that property after initialization."
        },
        {
          q: "Can an interface in TypeScript extend multiple other interfaces?",
          a: [
            "Yes, using commas: interface C extends A, B { ... }",
            "No, TypeScript only supports single interface inheritance",
            "No, multiple inheritance requires class declarations",
            "Yes, but only if they have zero overlapping property names"
          ],
          c: 0,
          why: "Interfaces can extend multiple interfaces by comma-separating them."
        }
      ]
    },
    {
      n: 4,
      id: "type-aliases-and-tuples",
      title: "Type Aliases & Tuples",
      topic: "Interfaces & Type Aliases",
      anim: "Code",
      lede: "Type aliases give a name to any type—including unions, primitives, and tuples. Learn how they complement interfaces.",
      winShort: "Create type aliases for custom types and define fixed-length, typed tuples",
      missionLink: "Represent complex primitive combinations and structured return values cleanly",
      sec1: {
        title: "Type aliases: naming any shape",
        content: `<p>While <code>interface</code> is specifically designed for object structures, a <b>type alias</b> (declared with <code>type Name = ...</code>) can name <i>any</i> valid type: primitives, unions, intersections, functions, or tuples.</p><p>For example: <code>type ID = string | number;</code> cannot be expressed with an interface. Type aliases are indispensable when modeling domain types and functional signatures.</p>`,
        keyIdea: "Use interface for open, extensible object models; use type alias for unions, primitives, tuples, and function signatures."
      },
      predict: {
        q: "Can an interface represent a union of string | number?",
        a: [
          "No, interfaces can only describe object shapes and function signatures; unions require type aliases",
          "Yes, using interface ID extends string, number",
          "Yes, using interface ID { value: string | number }",
          "Yes, interfaces and types are 100% identical in every syntax capability"
        ],
        c: 0,
        why: "An interface defines an object structure; union types of primitives require the 'type' keyword."
      },
      sec2: {
        title: "Tuples: fixed-length, ordered arrays",
        content: `<p>A <b>tuple</b> is a specialized array with a fixed number of elements where each position has a specific type. A classic example is a coordinate pair <code>[number, number]</code> or React's <code>useState</code> return value <code>[state, setState]</code>.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Standard Array", lines: ["let list: number[] = [1, 2, 3];", "Arbitrary length", "All elements share type"] },
          { title: "Tuple", lines: ["let coord: [number, number] = [10, 20];", "Fixed length: exactly 2 items", "Positional typing"] },
          { title: "Labeled Tuple", lines: ["type UserPair = [id: number, name: string];", "Self-documenting positional slots", "Clear editor autocompletion"] }
        ]
      },
      sec3: {
        title: "Tracing tuple type boundaries",
        content: `<p>Trace how TypeScript verifies position and length on tuple assignments.</p>`,
      },
      trace: {
        code: [
          "type ResponseEntry = [statusCode: number, message: string];",
          "let res: ResponseEntry = [200, 'OK']; // valid",
          "// let bad1: ResponseEntry = ['OK', 200]; // Error: Type 'string' is not assignable to type 'number'",
          "// let bad2: ResponseEntry = [200, 'OK', true]; // Error: Source has 3 elements, target allows only 2"
        ],
        steps: [
          { line: 0, vars: { tuple_definition: "Slot 0: number, Slot 1: string" } },
          { line: 1, vars: { res: "[200, 'OK'] matches length 2 and types" } },
          { line: 2, vars: { type_mismatch: "Index 0 must be number, got string" } },
          { line: 3, vars: { length_mismatch: "Length 3 exceeds target length 2" } }
        ]
      },
      practiceIntro: "Test your knowledge of type aliases and tuple data structures.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The keyword used to define a type alias is <0>.",
          "An array with fixed length and explicit types at each index is a <1>.",
          "To define a type representing either a string or number, you write string <2> number."
        ],
        blanks: [
          { a: ["type"], why: "type creates a custom type alias." },
          { a: ["tuple"], why: "Tuples guarantee fixed size and positional typing." },
          { a: ["|"], why: "The pipe symbol (|) creates a union type." }
        ]
      },
      win: "You know when to use type aliases over interfaces and how to model fixed pairs and records with tuples.",
      nextTasks: [
        "Define a tuple for geo-coordinates [latitude: number, longitude: number].",
        "Create a type alias for a callback function receiving a string and returning void.",
        "Compare declaration merging behavior between interfaces and type aliases."
      ],
      primarySource: "Official TypeScript Handbook, *Everyday Types: Type Aliases & Tuples*.",
      quiz: [
        {
          q: "Which scenario strictly requires a 'type' alias rather than an 'interface'?",
          a: [
            "Creating a union type (e.g. type Status = 'open' | 'closed')",
            "Defining the shape of a simple object with two strings",
            "Describing a class constructor",
            "Inheriting properties from another object shape"
          ],
          c: 0,
          why: "Only type aliases can directly declare union, intersection, and primitive aliases."
        },
        {
          q: "What is the key characteristic of a TypeScript tuple?",
          a: [
            "It is an array where the number of elements and their types at specific positions are fixed",
            "It is an immutable object frozen with Object.freeze",
            "It can only contain numbers",
            "It is a database table row stored in memory"
          ],
          c: 0,
          why: "Tuples express arrays with fixed lengths and specific types per index position."
        },
        {
          q: "What is declaration merging in TypeScript?",
          a: [
            "Multiple interface declarations with the same name automatically merge their properties into a single interface",
            "Combining two JavaScript files using a bundler like Webpack",
            "Automatically importing all files in a directory",
            "Converting all functions into arrow functions"
          ],
          c: 0,
          why: "Interfaces with identical names merge their property definitions; type aliases will throw a duplicate identifier error."
        },
        {
          q: "Which syntax correctly defines a tuple type with a string and a boolean?",
          a: [
            "A colon followed by string and boolean enclosed in square brackets",
            "A colon followed by string and boolean enclosed in parentheses",
            "Angle brackets: Tuple of string and boolean",
            "Curly braces containing string and boolean"
          ],
          c: 0,
          why: "Square brackets enclose the positional element types of a tuple."
        }
      ]
    },
    {
      n: 5,
      id: "union-and-intersection-types",
      title: "Union & Intersection Types",
      topic: "Unions, Narrowing & Literals",
      anim: "Flow",
      lede: "Compose flexible and expressive types using union (|) and intersection (&) operators, combining distinct data structures.",
      winShort: "Combine types with unions and intersections to express complex domain states",
      missionLink: "Prevent invalid states and enable flexible API contract composition",
      sec1: {
        title: "Unions: One of several types",
        content: `<p>A <b>union type</b> (<code>A | B</code>) models a value that can be <i>either</i> type A <i>or</i> type B. It is TypeScript's way of expressing "OR".</p><p>When accessing properties on a raw union value before narrowing, TypeScript only allows properties that are shared by <i>all</i> members of the union.</p>`,
        keyIdea: "A union A | B represents values that are either A or B; only shared properties can be accessed without narrowing."
      },
      predict: {
        q: "If type A = { id: string; name: string }; and type B = { id: string; count: number }; what property can you access on variable x: A | B without narrowing?",
        a: [
          "Only 'id', because it is the only property common to both A and B",
          "All three: id, name, and count",
          "None, you cannot access any properties on unions",
          "name, because string properties take precedence"
        ],
        c: 0,
        why: "TypeScript only permits property access on a union if the property exists on every possible member."
      },
      sec2: {
        title: "Intersections: Combining all properties",
        content: `<p>An <b>intersection type</b> (<code>A & B</code>) combines multiple types into one. A value of type <code>A & B</code> must satisfy <i>all</i> properties of A <b>and</b> all properties of B. It is TypeScript's way of expressing "AND".</p>`,
      },
      diagram: {
        boxes: [
          { title: "Union (A | B)", lines: ["Either A OR B", "Only COMMON properties accessible", "Models alternatives / states"] },
          { title: "Intersection (A & B)", lines: ["Both A AND B", "ALL properties from both required", "Models mixins & composition"] },
          { title: "Literal Unions", lines: ["type Role = 'admin' | 'user' | 'guest';", "Restricts values to exact strings", "Replaces error-prone magic strings"] }
        ]
      },
      sec3: {
        title: "Tracing literal unions in action",
        content: `<p>Trace how string literal unions catch typos in configuration strings.</p>`,
      },
      trace: {
        code: [
          "type Theme = 'light' | 'dark' | 'system';",
          "let currentTheme: Theme = 'light'; // valid",
          "currentTheme = 'dark'; // valid",
          "// currentTheme = 'dim'; // Error: Type '\"dim\"' is not assignable to type 'Theme'."
        ],
        steps: [
          { line: 0, vars: { allowed_literals: "'light' | 'dark' | 'system'" } },
          { line: 1, vars: { currentTheme: "'light' (ok)" } },
          { line: 2, vars: { currentTheme: "'dark' (ok)" } },
          { line: 3, vars: { compiler_error: "TS2322: 'dim' is not assignable to Theme" } }
        ]
      },
      practiceIntro: "Test your recall of unions, intersections, and literal types.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The operator used to create a union type is the <0> character.",
          "The operator used to create an intersection type is the <1> character.",
          "A type composed of exact specific string values is a string <2> union."
        ],
        blanks: [
          { a: ["|"], why: "Pipe (|) represents union (OR)." },
          { a: ["&"], why: "Ampersand (&) represents intersection (AND)." },
          { a: ["literal"], why: "String literal types restrict values to exact strings." }
        ]
      },
      win: "You can combine types using union and intersection operators and prevent typos with literal types.",
      nextTasks: [
        "Create a string literal union for HTTP methods: 'GET' | 'POST' | 'PUT' | 'DELETE'.",
        "Compose an entity type with timestamps using an intersection (&).",
        "Explain why accessing a non-shared property on a union results in a compiler error."
      ],
      primarySource: "Official TypeScript Handbook, *Unions and Intersection Types*.",
      quiz: [
        {
          q: "What does the type 'string | number' represent?",
          a: [
            "A value that can be either a string or a number",
            "A value that must simultaneously be both a string and a number",
            "A string converted into a number at runtime",
            "An array containing strings and numbers"
          ],
          c: 0,
          why: "The union operator (|) represents alternative types: either string or number."
        },
        {
          q: "What properties does an object of type 'Person & Employee' possess?",
          a: [
            "All properties of Person and all properties of Employee combined",
            "Only the properties shared between Person and Employee",
            "Only properties declared as functions",
            "Zero properties until initialized with a class"
          ],
          c: 0,
          why: "An intersection type (&) merges all constituent property requirements."
        },
        {
          q: "Why are string literal unions like 'type State = \"pending\" | \"done\";' superior to plain strings?",
          a: [
            "They prevent typos at compile time and provide instant IDE autocomplete for all valid options",
            "They take up less RAM in the browser V8 engine",
            "They encrypt the string data in network transfers",
            "They eliminate the need for unit testing completely"
          ],
          c: 0,
          why: "String literal unions restrict values to exact allowed options, catching misspelled strings immediately."
        },
        {
          q: "If you have a variable of type 'Dog | Fish', when can you call '.bark()' on it?",
          a: [
            "Only after narrowing the type to confirm the value is actually a Dog",
            "At any time, TypeScript will ignore the call if it is a Fish",
            "Never, because Fish does not have a bark method",
            "Only inside an asynchronous function"
          ],
          c: 0,
          why: "You cannot call a method unique to one union branch until you narrow the type."
        }
      ]
    },
    {
      n: 6,
      id: "type-narrowing-and-guards",
      title: "Type Narrowing & Guards",
      topic: "Unions, Narrowing & Literals",
      anim: "LayersOrbit",
      lede: "Type narrowing turns broad union types into specific, safe types using runtime checks and discriminated unions.",
      winShort: "Narrow union types using typeof, instanceof, in operator, and discriminated unions",
      missionLink: "Write bulletproof branch logic that guarantees type safety across every execution path",
      sec1: {
        title: "How TypeScript narrows types",
        content: `<p><b>Type narrowing</b> is the process where TypeScript analyzes your JavaScript control flow statements (like <code>if</code>, <code>switch</code>, and ternary operators) to refine a broad type into a narrower, more specific type inside that block.</p><p>Standard JavaScript operators serve as built-in <b>type guards</b>: <code>typeof</code> (for primitives), <code>instanceof</code> (for class instances), and the <code>in</code> operator (for property existence).</p>`,
        keyIdea: "TypeScript traces runtime condition checks to narrow types automatically inside conditional blocks."
      },
      predict: {
        q: "In 'function fn(x: string | number) { if (typeof x === \"string\") { ... } }', what is the type of x inside the else block?",
        a: [
          "number",
          "string",
          "string | number",
          "any"
        ],
        c: 0,
        why: "Since x was string | number and the string case was handled, TypeScript knows x must be number in the else branch."
      },
      sec2: {
        title: "Discriminated unions: the gold standard",
        content: `<p>A <b>discriminated union</b> (or tagged union) is an architectural pattern where each object type in a union shares a common literal property—called the <b>discriminant</b> (e.g. <code>kind</code>, <code>type</code>, or <code>status</code>).</p><p>When you switch on this property, TypeScript narrows the exact shape in each <code>case</code> block with zero casting.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Circle Variant", lines: ["{ kind: 'circle',", "  radius: number }"] },
          { title: "Square Variant", lines: ["{ kind: 'square',", "  sideLength: number }"] },
          { title: "Exhaustive Switch", lines: ["switch (shape.kind) {", "  case 'circle': shape.radius", "  case 'square': shape.sideLength", "}"] }
        ]
      },
      sec3: {
        title: "Tracing discriminated union narrowing",
        content: `<p>Trace how checking the discriminant unlocks access to variant-specific fields.</p>`,
      },
      trace: {
        code: [
          "type Action = { type: 'LOGIN'; username: string } | { type: 'LOGOUT' };",
          "function handle(action: Action) {",
          "  if (action.type === 'LOGIN') {",
          "    console.log(action.username); // valid: narrowed to LOGIN variant",
          "  }",
          "}"
        ],
        steps: [
          { line: 0, vars: { Action: "Union of LOGIN and LOGOUT variants" } },
          { line: 2, vars: { check: "action.type === 'LOGIN' evaluated" } },
          { line: 3, vars: { narrowed_type: "{ type: 'LOGIN'; username: string }" } }
        ]
      },
      practiceIntro: "Test your mastery of type guards and discriminated unions.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The process of refining a broad type into a specific type is called type <0>.",
          "The operator used to check if an object is an instance of a class is <1>.",
          "In a discriminated union, the common literal tag property is called the <2>."
        ],
        blanks: [
          { a: ["narrowing"], why: "Control flow analysis narrows types within conditional blocks." },
          { a: ["instanceof"], why: "instanceof checks prototype inheritance at runtime." },
          { a: ["discriminant"], why: "The discriminant is the shared literal tag key." }
        ]
      },
      win: "You can safely narrow union types using standard guards and architect robust state machines with discriminated unions.",
      nextTasks: [
        "Model an asynchronous API request state (idle, loading, success, error) as a discriminated union.",
        "Implement an exhaustive switch statement that asserts default: assertNever(val).",
        "Write a custom user-defined type guard function using the 'param is Type' syntax."
      ],
      primarySource: "Matt Pocock, *Total TypeScript: Narrowing and Discriminated Unions*.",
      quiz: [
        {
          q: "What makes a union of object types a 'discriminated union'?",
          a: [
            "All members have a common property with a unique literal type that acts as a tag",
            "All members implement the same abstract class",
            "The union is exported from a separate .d.ts declaration file",
            "The types contain no optional properties"
          ],
          c: 0,
          why: "A discriminant is a shared literal property that enables unambiguous branching."
        },
        {
          q: "Which JavaScript operator checks whether a specific property key exists in an object for type narrowing?",
          a: [
            "The 'in' operator (e.g. 'email' in user)",
            "The 'has' operator",
            "The 'exists' operator",
            "The 'typeof' operator"
          ],
          c: 0,
          why: "The 'in' operator verifies property existence and acts as a built-in TypeScript type guard."
        },
        {
          q: "What does the return type 'pet is Dog' indicate on a function signature?",
          a: [
            "It is a user-defined type guard: if the function returns true, TypeScript treats pet as a Dog",
            "It converts pet into an instance of class Dog at runtime",
            "It asserts that pet can never be null",
            "It is an alias for boolean"
          ],
          c: 0,
          why: "Type predicates (arg is Type) instruct the compiler to narrow the argument when the predicate returns true."
        },
        {
          q: "How can you enforce compile-time exhaustive checking in a switch over a discriminated union?",
          a: [
            "Assign the switch's default case variable to a type of 'never'",
            "Include a comment with @exhaustive",
            "Wrap the switch in a try/catch block",
            "Use while (true) instead of switch"
          ],
          c: 0,
          why: "Assigning an unhandled union variant to 'never' causes a compiler error if any case is forgotten."
        }
      ]
    },
    {
      n: 7,
      id: "generics-and-type-parameters",
      title: "Generics & Type Parameters",
      topic: "Generics & Utility Types",
      anim: "CodePulse",
      lede: "Generics allow you to write reusable, flexible functions and classes while preserving full type information.",
      winShort: "Author generic functions and interfaces with type parameters and constraints",
      missionLink: "Build reusable libraries and utilities without sacrificing type safety or resorting to any",
      sec1: {
        title: "Why generics exist",
        content: `<p>Imagine writing a function that returns the first item of an array. If you accept <code>any[]</code> and return <code>any</code>, all type safety is lost. If you write separate functions for <code>number[]</code> and <code>string[]</code>, you duplicate code.</p><p><b>Generics</b> solve this by introducing <b>type parameters</b> (conventionally named <code>T</code>, <code>U</code>, <code>V</code>). They act as variables for types, capturing the input type and flowing it to the output.</p>`,
        keyIdea: "Generics capture and preserve the exact type of data passed into reusable functions and classes."
      },
      predict: {
        q: "Given function identity<T>(arg: T): T { return arg; }, what is the inferred return type of identity(\"hello\")?",
        a: [
          "string (or literal \"hello\")",
          "any",
          "unknown",
          "T"
        ],
        c: 0,
        why: "TypeScript captures T as 'hello' or string from the argument and preserves it as the return type."
      },
      sec2: {
        title: "Generic constraints: extends keyword",
        content: `<p>Sometimes a generic must guarantee certain properties. You can constrain a generic type parameter using <code>T extends Shape</code>.</p><p>For example, <code>function logLength&lt;T extends { length: number }&gt;(item: T)</code> guarantees that <code>item.length</code> is valid, accepting strings, arrays, or custom objects with a length property, while rejecting numbers or booleans.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Generic Parameter <T>", lines: ["function first<T>(arr: T[]): T", "T adapts to whatever array is passed"] },
          { title: "Constrained Generic", lines: ["<T extends HasId>", "Guarantees item has .id property", "Rejects incompatible shapes"] },
          { title: "Generic Interface", lines: ["interface ApiResponse<Data> {", "  status: number;", "  data: Data;", "}"] }
        ]
      },
      sec3: {
        title: "Tracing generic constraint validation",
        content: `<p>Trace how the TypeScript compiler enforces generic constraints at call sites.</p>`,
      },
      trace: {
        code: [
          "function getLength<T extends { length: number }>(val: T): number {",
          "  return val.length;",
          "}",
          "getLength('hello'); // valid: string has .length",
          "getLength([1, 2, 3]); // valid: array has .length",
          "// getLength(123); // Error: Argument of type 'number' is not assignable to parameter of type '{ length: number }'"
        ],
        steps: [
          { line: 0, vars: { constraint: "T must have property 'length: number'" } },
          { line: 3, vars: { test_string: "'hello'.length exists (T = string)" } },
          { line: 4, vars: { test_array: "[1, 2, 3].length exists (T = number[])" } },
          { line: 5, vars: { compiler_error: "TS2345: number does not satisfy { length: number }" } }
        ]
      },
      practiceIntro: "Test your understanding of generic type parameters and constraints.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Type parameters in generics are enclosed in angle brackets: <<0>>.",
          "To constrain a generic parameter to a specific interface, use the <1> keyword.",
          "A generic interface wrapping API data is often written as ApiResponse<<2>>."
        ],
        blanks: [
          { a: ["T"], why: "T is the standard placeholder for a type parameter." },
          { a: ["extends"], why: "extends restricts a generic parameter." },
          { a: ["T", "Data"], why: "T or Data parameterizes the response payload." }
        ]
      },
      win: "You can write reusable generic functions, interfaces, and classes with constraints instead of resorting to any.",
      nextTasks: [
        "Write a generic function to pick a random element from an array of any type T.",
        "Create an interface PaginatedResponse<T> with items: T[], total: number, page: number.",
        "Implement a generic key-value store class with set<K, V> and get<K, V>."
      ],
      primarySource: "Official TypeScript Handbook, *Generics* (typescriptlang.org).",
      quiz: [
        {
          q: "What is the primary advantage of using a generic function over a function accepting 'any'?",
          a: [
            "Generics preserve the specific type information of the input, maintaining full static type safety",
            "Generics execute faster in the browser's JavaScript runtime",
            "Generics allow the function to accept only strings and numbers",
            "Generics convert all arguments into JSON strings automatically"
          ],
          c: 0,
          why: "Generics capture and retain the caller's specific type throughout the function's return and usage."
        },
        {
          q: "What does '<T extends { id: string }>' mean in a generic function declaration?",
          a: [
            "T can be any type as long as it has at least a string property named 'id'",
            "T must be an instance of class Id",
            "T will be renamed to id during compilation",
            "T is optional and defaults to string"
          ],
          c: 0,
          why: "'extends' establishes a constraint: whatever type replaces T must satisfy the shape { id: string }."
        },
        {
          q: "Can a generic function have more than one type parameter (e.g. <T, U>)?",
          a: [
            "Yes, you can declare as many comma-separated type parameters as needed",
            "No, TypeScript strictly limits generic declarations to a single type parameter T",
            "Yes, but only if one of them is a number",
            "No, multiple parameters require using any"
          ],
          c: 0,
          why: "Generics can accept multiple type parameters, such as <Key, Value> or <T, U>."
        },
        {
          q: "If you call 'first([1, 2, 3])' on 'function first<T>(arr: T[]): T', what is T inferred as?",
          a: [
            "number",
            "number[]",
            "any",
            "Array<T>"
          ],
          c: 0,
          why: "Because an array of numbers is passed, T[] matches number[], inferring T = number."
        }
      ]
    },
    {
      n: 8,
      id: "utility-types-and-declaration-files",
      title: "Utility Types & Generics in Practice",
      topic: "Generics & Utility Types",
      anim: "LayersOrbit",
      lede: "TypeScript provides built-in utility types to transform existing types effortlessly without duplicating code.",
      winShort: "Transform types cleanly using Partial, Required, Readonly, Pick, Omit, and Record",
      missionLink: "Eliminate duplicate type declarations across data models and mutation endpoints",
      sec1: {
        title: "Built-in utility types",
        content: `<p>Instead of manually rewriting types for update payloads or preview cards, TypeScript includes powerful global <b>utility types</b> that transform types using mapped types:</p><ul><li><code>Partial&lt;T&gt;</code>: Makes all properties in T optional (ideal for PATCH request bodies).</li><li><code>Required&lt;T&gt;</code>: Makes all properties in T mandatory.</li><li><code>Readonly&lt;T&gt;</code>: Makes all properties in T immutable.</li><li><code>Pick&lt;T, Keys&gt;</code>: Selects only a specific subset of properties from T.</li><li><code>Omit&lt;T, Keys&gt;</code>: Removes specific properties from T.</li><li><code>Record&lt;Keys, Value&gt;</code>: Creates a dictionary mapping specific keys to a value type.</li></ul>`,
        keyIdea: "Use utility types to derive new types from existing models rather than copying and pasting properties."
      },
      predict: {
        q: "If type User = { id: string; name: string; email: string; }; what properties exist on Omit<User, 'email'>?",
        a: [
          "id and name",
          "email only",
          "id, name, and email as optional",
          "None, Omit empties the type"
        ],
        c: 0,
        why: "Omit<User, 'email'> strips the email property, preserving id and name."
      },
      sec2: {
        title: "Common utility type transformations",
        content: `<p>Observe how easily a canonical domain model can be derived into specialized shapes for creation, updating, and lookups.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Canonical Model: User", lines: ["{ id: string;", "  name: string;", "  email: string; }"] },
          { title: "Update DTO: Partial<User>", lines: ["{ id?: string;", "  name?: string;", "  email?: string; }"] },
          { title: "User Map: Record<string, User>", lines: ["{ [userId: string]: User }", "Dictionary mapping ids to objects"] }
        ]
      },
      sec3: {
        title: "Tracing utility type composition",
        content: `<p>Trace how Pick and Omit generate new types with compile-time safety.</p>`,
      },
      trace: {
        code: [
          "interface Post { id: number; title: string; content: string; authorId: number; }",
          "type PostSummary = Pick<Post, 'id' | 'title'>;",
          "const summary: PostSummary = { id: 1, title: 'TypeScript 101' }; // valid",
          "// const bad: PostSummary = { id: 1, title: 'Hi', content: '...' }; // Error: Object literal may only specify known properties"
        ],
        steps: [
          { line: 0, vars: { base_interface: "Post has 4 properties" } },
          { line: 1, vars: { derived_type: "PostSummary has only 'id' and 'title'" } },
          { line: 2, vars: { summary: "Matches PostSummary exact shape" } },
          { line: 3, vars: { compiler_error: "TS2353: 'content' does not exist in type 'PostSummary'" } }
        ]
      },
      practiceIntro: "Test your mastery of TypeScript utility types and type transformation.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "To make every property of an interface optional, wrap it in <0><T>.",
          "To select only properties 'id' and 'name' from type T, use <1><T, 'id' | 'name'>.",
          "To construct an object type with string keys and number values, use <2><string, number>."
        ],
        blanks: [
          { a: ["Partial"], why: "Partial<T> makes all fields optional." },
          { a: ["Pick"], why: "Pick selects specific keys." },
          { a: ["Record"], why: "Record<K, V> creates dictionary types." }
        ]
      },
      win: "You can leverage utility types to cleanly derive mutation models, views, and dictionaries without duplicate code.",
      nextTasks: [
        "Create an UpdateUserDTO type using Partial<Omit<User, 'id'>>.",
        "Define an application cache using Record<string, CacheEntry>.",
        "Inspect node_modules/@types to understand how declaration files (.d.ts) provide types for JS libraries."
      ],
      primarySource: "Official TypeScript Handbook, *Utility Types* (typescriptlang.org).",
      quiz: [
        {
          q: "Which utility type makes all properties of an interface optional?",
          a: [
            "Partial<T>",
            "Optional<T>",
            "Omit<T>",
            "Nullable<T>"
          ],
          c: 0,
          why: "Partial<T> constructs a type where every field in T is optional."
        },
        {
          q: "What does 'Record<string, number>' describe?",
          a: [
            "An object whose keys are strings and values are numbers",
            "An array of strings and numbers",
            "A database table with string and numeric columns",
            "A tuple with one string and one number"
          ],
          c: 0,
          why: "Record<K, V> creates a dictionary type with keys of type K and values of type V."
        },
        {
          q: "How does 'Pick<T, K>' differ from 'Omit<T, K>'?",
          a: [
            "Pick includes only keys K from T; Omit excludes keys K from T",
            "Pick is for classes; Omit is for interfaces",
            "Pick makes properties optional; Omit removes their types",
            "Pick creates arrays; Omit creates objects"
          ],
          c: 0,
          why: "Pick keeps the specified keys; Omit drops them."
        },
        {
          q: "What is the purpose of a declaration file (.d.ts) in TypeScript?",
          a: [
            "To provide type definitions for existing JavaScript code without containing executable runtime code",
            "To speed up compiler execution by caching JavaScript ASTs",
            "To store encrypted environment variables for deployment",
            "To define HTML and CSS layout templates"
          ],
          c: 0,
          why: "Declaration files (.d.ts) declare types, interfaces, and ambient declarations for JavaScript modules."
        }
      ]
    }
  ]
};
