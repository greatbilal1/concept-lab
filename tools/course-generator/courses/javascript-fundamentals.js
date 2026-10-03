"use strict";

module.exports = {
  id: "javascript-fundamentals",
  title: "JavaScript Fundamentals",
  num: 26,
  emoji: "🖥️",
  desc: "Values, functions, closures, objects and modules — the language the browser actually runs.",
  mission: `# Mission — JavaScript Fundamentals

## Why this course exists

JavaScript is the native runtime language of the web. Millions write JavaScript every day, but many rely on cargo-cult snippets without understanding how the engine actually operates. Quirks like type coercion, variable scoping, reference mutations, and closures become frustrating traps. This course provides a rock-solid mental model of JavaScript: execution contexts, lexical environments, prototype references, and modern ES module semantics.

## What the learner can do at the end

- Choose appropriately between primitives and objects, and let versus const bindings.
- Reason through equality checks and type coercion using strict equality (===) and truthiness rules.
- Author functional transformations using modern array methods (map, filter, reduce) cleanly.
- Explain and exploit lexical closures for data encapsulation and factory functions.
- Work with references, shallow vs deep cloning, destructuring, and ES module imports/exports.

## What this course is NOT

- Not a DOM manipulation tutorial (covered in HTML & DOM).
- Not a browser events or async/promises course (covered in Browser Events & Async).
- Not a React or Node.js framework guide. It teaches pure ECMAScript fundamentals.

## Success looks like

When encountering an unexpected bug involving object mutation, closure capture, or truthy coercion, the learner diagnoses the exact line of erroneous reasoning in under two minutes without running a debugger.
`,
  notes: `# Notes — JavaScript Fundamentals

## Decisions
- Group into four themes: Primitives & Variables, Functions & Scope, Objects & Collections, and Modern JS.
- Ground explanations in ECMAScript engine execution mechanics (Lexical Environments, Reference Types).
`,
  resources: `# Resources — JavaScript Fundamentals

## Knowledge (primary sources)
- *JavaScript: The Definitive Guide* by David Flanagan (O'Reilly) — The authoritative modern JS reference.
- *You Don't Know JS Yet* by Kyle Simpson — Deep dive into scopes, closures, objects, and types.
- MDN Web Docs: *JavaScript Guide* (developer.mozilla.org).
- ECMA-262: *ECMAScript Language Specification*.

## Wisdom
- JavaScript is not a toy language; it is a sophisticated functional and object-based language with lexical scope. Respect its rules and it becomes a joy to use.
`,
  cheatsheetSections: [
    {
      title: "Variables & Truthiness",
      label: "Bindings and coercion",
      code: `const x = 42;         // immutable binding (cannot reassign)
let count = 0;        // mutable binding
// Falsy values (only 8 in JS):
// false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy! (including [], {}, and "0")`,
      lessonN: 2,
      lessonSlug: "equality-types-and-truthiness",
      lessonTitle: "Equality, types, and truthiness"
    },
    {
      title: "Functions & Closures",
      label: "Lexical scope encapsulation",
      code: `function createCounter(start = 0) {
  let count = start; // private closure state
  return () => ++count;
}
const next = createCounter();
next(); // 1
next(); // 2`,
      lessonN: 4,
      lessonSlug: "scope-lexical-environment-and-closures",
      lessonTitle: "Scope, lexical environment, and closures"
    },
    {
      title: "Array Transformations",
      label: "Declarative collection pipelines",
      code: `const numbers = [1, 2, 3, 4, 5];
const sumOfEvens = numbers
  .filter(n => n % 2 === 0)   // [2, 4]
  .map(n => n * 10)           // [20, 40]
  .reduce((acc, n) => acc + n, 0); // 60`,
      lessonN: 6,
      lessonSlug: "arrays-and-array-methods",
      lessonTitle: "Arrays and modern array methods"
    },
    {
      title: "Destructuring & Modules",
      label: "ES module syntax",
      code: `// Named export & import
export const add = (a, b) => a + b;
import { add } from './math.js';

// Object destructuring with rest
const user = { id: 1, name: 'Ada', role: 'admin' };
const { name, ...rest } = user; // name='Ada', rest={id:1, role:'admin'}`,
      lessonN: 8,
      lessonSlug: "modules-import-and-export",
      lessonTitle: "Modules: import and export"
    }
  ],
  glossaryGroups: [
    {
      id: "types-vars",
      title: "Primitives & Variables",
      terms: [
        { term: "Primitive value", def: "An immutable data value represented directly at the lowest level of the language (e.g. number, string, boolean).", lesson: 1, tags: ["types"] },
        { term: "Temporal Dead Zone", def: "The state between entering scope and variable declaration where let and const variables cannot be accessed.", lesson: 1, tags: ["scope"] },
        { term: "Strict equality", def: "The === operator, comparing both type and value without performing implicit type coercion.", lesson: 2, tags: ["operators"] },
        { term: "Type coercion", def: "The automatic or implicit conversion of values from one data type to another during operations.", lesson: 2, tags: ["types"] }
      ]
    },
    {
      id: "functions-scope",
      title: "Functions & Scope",
      terms: [
        { term: "Lexical scope", def: "Scope resolution determined by the physical location of variable declarations in the source code.", lesson: 4, tags: ["scope"] },
        { term: "Closure", def: "The combination of a function bundled together with references to its surrounding lexical environment.", lesson: 4, tags: ["closures"] },
        { term: "Arrow function", def: "A compact function syntax (=>) that does not bind its own this, arguments, or super.", lesson: 3, tags: ["functions"] },
        { term: "Higher-order function", def: "A function that accepts another function as an argument, returns a function, or both.", lesson: 3, tags: ["functions"] }
      ]
    },
    {
      id: "objects-arrays",
      title: "Objects & Collections",
      terms: [
        { term: "Reference type", def: "Objects, arrays, and functions stored on the heap, accessed and passed via memory references.", lesson: 5, tags: ["objects"] },
        { term: "Shallow copy", def: "A copy of an object where top-level properties are duplicated, but nested objects remain shared references.", lesson: 5, tags: ["memory"] },
        { term: "Pure function", def: "A function that always produces the same output for the same input and causes zero observable side effects.", lesson: 6, tags: ["functional"] },
        { term: "Reduce method", def: "An array method executing a reducer callback over all items to accumulate them into a single result value.", lesson: 6, tags: ["arrays"] }
      ]
    },
    {
      id: "modern-js",
      title: "Destructuring & Modules",
      terms: [
        { term: "Destructuring", def: "A syntax enabling the unpacking of values from arrays or properties from objects into distinct variables.", lesson: 7, tags: ["syntax"] },
        { term: "Spread operator", def: "The syntax (...) that expands an iterable array or object into individual elements or properties.", lesson: 7, tags: ["syntax"] },
        { term: "ES Module", def: "The official standard JavaScript module system using import and export statements.", lesson: 8, tags: ["modules"] },
        { term: "Default export", def: "The primary export of a module imported without curly braces (e.g. import App from './App.js').", lesson: 8, tags: ["modules"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "primitives-and-variables-let-const",
      title: "Primitives and variables: let vs const",
      topic: "Primitives & Variables",
      anim: "CodeSweep",
      lede: "Stop using var. Master the modern let and const keywords, the Temporal Dead Zone, and the fundamental boundary between primitives and objects.",
      winShort: "Choose appropriately between let, const, and JavaScript primitive types",
      missionLink: "Forms the foundational variable model of modern ECMAScript",
      sec1: {
        title: "The seven primitive types",
        content: `<p>JavaScript values fall into two categories: <b>Primitives</b> and <b>Objects</b>. There are seven primitive types: <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, and <code>bigint</code>.</p><p>Primitives are strictly <b>immutable</b>: you cannot add properties to them or mutate their internal contents. Variables hold primitive values directly by value; objects are held by memory reference.</p>`,
        keyIdea: "Primitives are immutable values copied by value; objects are mutable structures accessed by reference."
      },
      predict: {
        q: "What does 'const arr = [1, 2]; arr.push(3);' do?",
        a: [
          "Successfully appends 3 to the array, because const prevents reassigning the variable, not mutating the object",
          "Throws a TypeError because const makes all array contents completely immutable",
          "Converts the array into a string",
          "Deletes the first element of the array"
        ],
        c: 0,
        why: "const protects the variable binding from reassignment; it does not freeze the underlying object."
      },
      sec2: {
        title: "Variable declarations compared",
        content: `<p>Understand why modern JavaScript strictly forbids legacy var in favor of block-scoped let and const.</p>`,
      },
      diagram: {
        boxes: [
          { title: "const (Default)", lines: ["block-scoped, TDZ enforced", "cannot be reassigned", "use for 95% of variables"] },
          { title: "let (Reassignable)", lines: ["block-scoped, TDZ enforced", "can be reassigned", "use for loops & counters"] },
          { title: "var (Legacy / Avoid)", lines: ["function-scoped, hoisted to undefined", "accidental global leaks", "deprecated in modern code"] }
        ]
      },
      sec3: {
        title: "Tracing the Temporal Dead Zone (TDZ)",
        content: `<p>Trace how let and const protect you from using variables before their initialization line.</p>`,
      },
      trace: {
        code: [
          "# Line 1: Scope entered; variable 'age' enters Temporal Dead Zone",
          "# Line 2: console.log(age) -> ReferenceError: Cannot access 'age' before initialization",
          "let age = 30; # TDZ ends; variable is initialized",
          "console.log(age); # prints 30"
        ],
        steps: [
          { line: 0, vars: { scope: "block entered" } },
          { line: 1, vars: { error: "ReferenceError in TDZ" } },
          { line: 2, vars: { initialized: "age = 30" } },
          { line: 3, vars: { output: "30" } }
        ]
      },
      practiceIntro: "Test your recall of variable binding rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The keyword for variables that will not be reassigned is <0>.",
          "The keyword for mutable block-scoped variables is <1>.",
          "The state where a let variable cannot be accessed before declaration is the <2> Dead Zone."
        ],
        blanks: [
          { a: ["const"], why: "const creates an un-reassignable binding." },
          { a: ["let"], why: "let creates a mutable block-scoped variable." },
          { a: ["Temporal"], why: "The Temporal Dead Zone (TDZ) guards against uninitialized access." }
        ]
      },
      win: "You can choose the right variable binding strategy and avoid legacy variable hoisting bugs.",
      nextTasks: [
        "Audit a script and convert all legacy var declarations to const or let.",
        "Trigger an intentional TDZ ReferenceError to observe the engine protection in action.",
        "Verify why mutating an object declared with const is legal."
      ],
      primarySource: "Dr. Axel Rauschmayer, *Exploring JS: Variables and Scoping* (exploringjs.com).",
      quiz: [
        {
          q: "What does the 'const' keyword guarantee in JavaScript?",
          a: [
            "The variable identifier cannot be reassigned to a different value or reference",
            "The object referenced by the variable cannot have its properties modified",
            "The variable is encrypted in computer RAM",
            "The variable can only hold positive numbers"
          ],
          c: 0,
          why: "const protects the identifier binding from reassignment; object immutability requires Object.freeze."
        },
        {
          q: "What is the scope of variables declared with 'let' and 'const'?",
          a: [
            "Block scope (bounded by the nearest enclosing curly braces {})",
            "Global scope across all browser tabs",
            "Function scope only (ignoring if statements and loops)",
            "File scope on Windows computers only"
          ],
          c: 0,
          why: "let and const are block-scoped; they exist only within their enclosing { ... } block."
        },
        {
          q: "Which of the following is a primitive value in JavaScript?",
          a: [
            "Symbol('id')",
            "new Date()",
            "[1, 2, 3]",
            "{ name: 'Ada' }"
          ],
          c: 0,
          why: "Symbol is one of the seven primitive types; Dates, Arrays, and plain Objects are reference types."
        },
        {
          q: "What happens when you try to access a 'let' variable before its declaration line?",
          a: [
            "A ReferenceError is thrown because the variable is in the Temporal Dead Zone",
            "It silently evaluates to undefined like legacy var",
            "The browser crashes immediately",
            "The computer CPU executes the line in reverse"
          ],
          c: 0,
          why: "let and const enter the TDZ at scope start; reading them before declaration throws ReferenceError."
        }
      ]
    },
    {
      n: 2,
      id: "equality-types-and-truthiness",
      title: "Equality, types, and truthiness",
      topic: "Primitives & Variables",
      anim: "CodeSweep",
      lede: "Why does '[] == ![]' evaluate to true? Master the strict equality operator (===), the 8 falsy values, and the rules of type coercion.",
      winShort: "Predict equality and truthiness outcomes using strict comparison rules",
      missionLink: "Eliminates frustrating conditional bugs caused by implicit coercion",
      sec1: {
        title: "Strict equality versus loose equality",
        content: `<p>JavaScript has two equality operators: <b>strict equality</b> (<code>===</code>) and <b>loose equality</b> (<code>==</code>). Loose equality tries to be 'helpful' by coercing different types: <code>'5' == 5</code> evaluates to true.</p><p>This coercion creates bizarre edge cases: <code>0 == ''</code> is true, and <code>false == '0'</code> is true. In professional modern code, <b>always use strict equality (===)</b>, which never coerces types and checks both type and value.</p>`,
        keyIdea: "Always use strict equality (===); never rely on loose equality (==) coercion."
      },
      predict: {
        q: "What does 'null === undefined' evaluate to versus 'null == undefined'?",
        a: [
          "null === undefined is false; null == undefined is true",
          "Both evaluate to true",
          "Both evaluate to false",
          "null === undefined throws a syntax error"
        ],
        c: 0,
        why: "Strict equality sees different types (null vs undefined); loose equality treats them as loosely equal."
      },
      sec2: {
        title: "The complete list of 8 falsy values",
        content: `<p>In JavaScript, every value is either truthy or falsy. Memorise the only eight falsy values in the entire language.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Boolean & Numbers", lines: ["false", "0, -0, 0n (BigInt)", "NaN (Not-a-Number)"] },
          { title: "Strings & Emptiness", lines: ["'' (empty string)", "null", "undefined"] },
          { title: "Everything Else = TRUTHY!", lines: ["[] (empty array is truthy!)", "{} (empty object is truthy!)", "'0', 'false' (non-empty strings)"] }
        ]
      },
      sec3: {
        title: "Tracing truthiness in conditionals",
        content: `<p>Trace how common objects and strings evaluate inside an if statement condition.</p>`,
      },
      trace: {
        code: [
          "if ([]) { console.log('Empty array is TRUTHY!') }",
          "if ({}) { console.log('Empty object is TRUTHY!') }",
          "if ('') { console.log('This line NEVER runs (falsy)') }",
          "if (0)  { console.log('This line NEVER runs (falsy)') }"
        ],
        steps: [
          { line: 0, vars: { check_array: "[] is an object reference -> TRUTHY" } },
          { line: 1, vars: { check_object: "{} is an object reference -> TRUTHY" } },
          { line: 2, vars: { check_empty_str: "'' has length 0 -> FALSY" } },
          { line: 3, vars: { check_zero: "0 numeric zero -> FALSY" } }
        ]
      },
      practiceIntro: "Test your recall of truthiness and equality rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The equality operator that checks type and value without coercion is <0>.",
          "An empty array [] evaluates in a Boolean context to <1>.",
          "The special number value representing an invalid mathematical result is <2>."
        ],
        blanks: [
          { a: ["===", "strict equality"], why: "=== checks both type and value strictly." },
          { a: ["truthy", "true"], why: "All objects, including empty arrays and objects, are truthy." },
          { a: ["NaN"], why: "NaN stands for Not-a-Number." }
        ]
      },
      win: "You can navigate JavaScript conditionals with certainty, knowing the exact 8 falsy values and avoiding loose equality traps.",
      nextTasks: [
        "Audit an existing codebase and replace all == with ===.",
        "Check what Boolean([]) and Boolean({}) return in your browser console.",
        "Use the nullish coalescing operator (??) to provide defaults without treating 0 as false."
      ],
      primarySource: "Kyle Simpson, *You Don't Know JS: Types & Grammar* (Chapter 4: 'Coercion').",
      quiz: [
        {
          q: "What does the expression 'Boolean([])' evaluate to?",
          a: [
            "true, because all objects and arrays are truthy in JavaScript regardless of their length",
            "false, because the array has zero elements",
            "undefined",
            "NaN"
          ],
          c: 0,
          why: "All objects (including arrays and plain objects) are truthy, even when empty."
        },
        {
          q: "How does the nullish coalescing operator (??) differ from logical OR (||)?",
          a: [
            "?? only falls back on null or undefined; || falls back on ANY falsy value (like 0 or '')",
            "?? works on numbers; || works on strings",
            "?? compiles into a loop",
            "There is no difference between ?? and ||"
          ],
          c: 0,
          why: "Nullish coalescing (??) prevents valid values like 0 or empty string from being overridden."
        },
        {
          q: "What does 'typeof null' return in JavaScript?",
          a: [
            "'object' (a historical 1995 engine bug preserved for backwards compatibility)",
            "'null'",
            "'undefined'",
            "'boolean'"
          ],
          c: 0,
          why: "A famous legacy bug in the original JS engine type tag implementation returns 'object'."
        },
        {
          q: "Which of the following is NOT one of the 8 falsy values?",
          a: [
            "'0' (a string containing the digit zero)",
            "0 (the number zero)",
            "NaN",
            "undefined"
          ],
          c: 0,
          why: "Any string with length > 0 is truthy, so '0' is truthy while 0 is falsy."
        }
      ]
    },
    {
      n: 3,
      id: "functions-parameters-and-returns",
      title: "Functions, parameters, and returns",
      topic: "Functions & Scope",
      anim: "CodeSweep",
      lede: "Functions are first-class citizens in JavaScript: you can pass them, return them, and store them in objects. Master arrow functions, default parameters, and rest syntax.",
      winShort: "Author modern functions with default parameters, rest arguments, and arrow syntax",
      missionLink: "The fundamental unit of modular execution in JavaScript",
      sec1: {
        title: "First-class functions",
        content: `<p>In JavaScript, functions are <b>first-class values</b>. A function is an object that can be assigned to a variable, passed as an argument to another function (a <b>callback</b>), and returned from another function.</p><p>Modern JavaScript uses both standard function declarations and <b>arrow functions</b> (<code>(x) =&gt; x * 2</code>). Arrow functions provide concise syntax and do not bind their own <code>this</code> or <code>arguments</code> keywords.</p>`,
        keyIdea: "Functions are values that can be passed, returned, and stored like any other variable."
      },
      predict: {
        q: "What happens if a function executes without an explicit 'return' statement?",
        a: [
          "It automatically returns undefined",
          "It returns null",
          "It throws a missing return syntax error",
          "It returns the number 0"
        ],
        c: 0,
        why: "In JavaScript, functions that finish without an explicit return statement evaluate to undefined."
      },
      sec2: {
        title: "Function syntax comparison",
        content: `<p>Understand the trade-offs between function declarations and concise arrow expressions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Declaration", lines: ["function add(a, b) { return a + b }", "hoisted, binds own 'this'"] },
          { title: "Arrow Function", lines: ["const add = (a, b) => a + b", "concise implicit return, lexical 'this'"] },
          { title: "Default & Rest", lines: ["function log(tag = 'INFO', ...msg)", "default values and rest arrays"] }
        ]
      },
      sec3: {
        title: "Tracing higher-order function callbacks",
        content: `<p>Trace how a higher-order function accepts a transformer function and applies it to an array.</p>`,
      },
      trace: {
        code: [
          "const double = x => x * 2;",
          "const applyTwice = (fn, val) => fn(fn(val));",
          "const result = applyTwice(double, 5);",
          "# double(5) -> 10, then double(10) -> 20"
        ],
        steps: [
          { line: 0, vars: { fn: "double defined" } },
          { line: 1, vars: { higher_order: "applyTwice accepts callback function" } },
          { line: 2, vars: { first_call: "fn(5) = 10" } },
          { line: 3, vars: { second_call: "fn(10) = 20" } }
        ]
      },
      practiceIntro: "Test your memory of function syntax features.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A function passed into another function as an argument is a <0>.",
          "The syntax gathering variable arguments into an array is the <1> parameter.",
          "An arrow function with a single expression has an <2> return."
        ],
        blanks: [
          { a: ["callback"], why: "Callbacks are functions passed as parameters." },
          { a: ["rest"], why: "Rest parameters (...args) collect excess arguments." },
          { a: ["implicit"], why: "Omitting curly braces creates an implicit return." }
        ]
      },
      win: "You can write expressive functions using modern arrow syntax, default values, and higher-order callbacks.",
      nextTasks: [
        "Refactor a multi-line function declaration into a clean arrow function.",
        "Add default parameter values to a function that previously checked for undefined.",
        "Write a higher-order function that takes a callback and logs its execution time."
      ],
      primarySource: "MDN Web Docs: *Functions — JavaScript* (developer.mozilla.org).",
      quiz: [
        {
          q: "What does the rest parameter syntax (...args) do inside a function signature?",
          a: [
            "Collects all remaining passed arguments into a true JavaScript array",
            "Stops the function from executing for a specified number of seconds",
            "Deletes unneeded arguments to save memory",
            "Encrypts the parameters before execution"
          ],
          c: 0,
          why: "Rest parameters capture remaining arguments into a clean array."
        },
        {
          q: "How does the 'this' keyword behave inside an arrow function?",
          a: [
            "It lexically inherits 'this' from its surrounding parent scope at definition time",
            "It binds to the global window object in all cases",
            "It creates a new blank object called this",
            "Arrow functions throw an error if you type the word this"
          ],
          c: 0,
          why: "Arrow functions have no this binding of their own; they retain lexical this."
        },
        {
          q: "What is an implicit return in an arrow function?",
          a: [
            "Returning the evaluated expression without writing the 'return' keyword or enclosing braces",
            "A return that only happens when the computer is idle",
            "A return value that is automatically converted to JSON",
            "A function that returns undefined secretly"
          ],
          c: 0,
          why: "Single-expression arrow functions (e.g. x => x * 2) return the expression automatically."
        },
        {
          q: "What value is assigned to a parameter with a default value if undefined is passed?",
          a: [
            "The configured default value is used",
            "null is assigned",
            "The function throws a TypeError",
            "The parameter is deleted"
          ],
          c: 0,
          why: "Default parameters trigger when the argument is either omitted or explicitly undefined."
        }
      ]
    },
    {
      n: 4,
      id: "scope-lexical-environment-and-closures",
      title: "Scope, lexical environment, and closures",
      topic: "Functions & Scope",
      anim: "CodeSweep",
      lede: "Closures are the secret weapon of JavaScript. Learn how functions remember the scope in which they were born, enabling private state and factory functions.",
      winShort: "Explain and implement lexical closures for data encapsulation and state management",
      missionLink: "The single most tested conceptual topic in professional JavaScript",
      sec1: {
        title: "Lexical scope and closures",
        content: `<p>JavaScript uses <b>lexical scoping</b>: a function's scope is determined by where it is written in the physical source code, not where it is called. Inner functions have access to variables declared in their outer enclosing scopes.</p><p>A <b>closure</b> is formed when an inner function is returned or passed out of its parent scope, yet <i>retains access to the parent's variables</i>. Even though the parent function finished executing, its variables stay alive in memory because the inner function still references them.</p>`,
        keyIdea: "A closure is a function that remembers its outer lexical environment even after the parent returns."
      },
      predict: {
        q: "A function returns an inner function that increments an outer variable 'count'. What happens when the inner function is called twice?",
        a: [
          "count increments from 1 to 2, preserving state across invocations",
          "count resets to 0 on every call",
          "A ReferenceError is thrown because the outer function already returned",
          "The computer RAM is purged"
        ],
        c: 0,
        why: "The closure maintains a persistent live reference to the enclosed outer variable."
      },
      sec2: {
        title: "The closure memory bubble",
        content: `<p>Visualise how closures preserve encapsulated private variables from garbage collection.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Outer Scope: createCounter()", lines: ["let count = 0 (private state)", "returns inner function"] },
          { title: "Closure Retention", lines: ["inner function retains pointer to count", "garbage collector preserves count"] },
          { title: "Consumer", lines: ["counter() increments count", "count cannot be accessed directly from outside!"] }
        ]
      },
      sec3: {
        title: "Tracing closure state persistence",
        content: `<p>Trace how two separate closure instances maintain completely independent state variables.</p>`,
      },
      trace: {
        code: [
          "function makeAdder(x) { return y => x + y; }",
          "const add5 = makeAdder(5);",
          "const add10 = makeAdder(10);",
          "add5(2);  # 5 + 2 = 7",
          "add10(2); # 10 + 2 = 12 (independent state preserved!)"
        ],
        steps: [
          { line: 0, vars: { factory: "makeAdder defined" } },
          { line: 1, vars: { add5: "closure capturing x = 5" } },
          { line: 2, vars: { add10: "separate closure capturing x = 10" } },
          { line: 3, vars: { result_5: "7" } },
          { line: 4, vars: { result_10: "12 (each closure has its own environment)" } }
        ]
      },
      practiceIntro: "Test your understanding of closure mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Scope determined by source code physical placement is <0> scope.",
          "A function bundled with its lexical environment is a <1>.",
          "Closures allow creating private variables without using <2> properties."
        ],
        blanks: [
          { a: ["lexical"], why: "Lexical scope is resolved based on code structure." },
          { a: ["closure"], why: "Closures package functions with enclosed environment records." },
          { a: ["class", "object"], why: "Closures encapsulate private state in functions." }
        ]
      },
      win: "You can explain and implement closures to encapsulate private state and construct function factories.",
      nextTasks: [
        "Implement a counter factory function that exposes increment and decrement methods.",
        "Verify in DevTools Sources panel that the closure scope shows captured variables.",
        "Explain why variables in closures are not cleaned up by garbage collection."
      ],
      primarySource: "Kyle Simpson, *You Don't Know JS: Scope & Closures* (Chapter 7: 'Using Closures').",
      quiz: [
        {
          q: "What is a closure in JavaScript?",
          a: [
            "A function that retains access to its lexical scope even when executed outside that scope",
            "A method to close browser tabs using JavaScript code",
            "An error that happens when an infinite loop runs",
            "A syntax rule that requires semicolons at the end of every line"
          ],
          c: 0,
          why: "A closure preserves access to outer variables across time and execution boundaries."
        },
        {
          q: "Why isn't a local variable garbage collected when its parent function finishes executing if a closure exists?",
          a: [
            "Because the inner closure function holds an active reference to the environment record",
            "Because JavaScript never garbage collects numbers",
            "Because the variable is saved permanently to the hard drive",
            "Because the operating system freezes the memory"
          ],
          c: 0,
          why: "Garbage collectors only free memory when zero reachable references remain."
        },
        {
          q: "What is the primary practical use case for closures in software design?",
          a: [
            "Data privacy and encapsulation (preventing direct external modification of state)",
            "Making web pages download faster over Wi-Fi",
            "Converting HTML into image formats",
            "Translating variable names into binary numbers"
          ],
          c: 0,
          why: "Closures encapsulate private state accessible only through returned getter/setter functions."
        },
        {
          q: "Do two separate calls to a closure factory function share the same private variables?",
          a: [
            "No, each invocation of the outer function creates a completely fresh, independent lexical environment",
            "Yes, all closures share one global variable namespace",
            "Only if they are given the same variable name",
            "Yes, unless you reboot the computer"
          ],
          c: 0,
          why: "Every function invocation allocates a distinct environment record in memory."
        }
      ]
    },
    {
      n: 5,
      id: "objects-references-and-properties",
      title: "Objects, references, and properties",
      topic: "Objects & Collections",
      anim: "CodeSweep",
      lede: "Objects are not copied; they are referenced. Discover the memory mechanics behind reference equality, property access, and shallow versus deep copying.",
      winShort: "Prevent accidental mutation bugs using immutability patterns and cloning",
      missionLink: "Eliminates the single most common cause of unintended side-effect bugs",
      sec1: {
        title: "Values versus references in memory",
        content: `<p>When you assign a primitive (like a number), JavaScript copies the value. When you assign an object, array, or function, JavaScript copies only the <b>memory address reference</b>.</p><p>If two variables point to the same object reference, mutating one variable mutates the other! This causes subtle bugs where modifying data in one component unexpectedly corrupts state in another.</p>`,
        keyIdea: "Object variables hold memory references; assigning an object shares the reference, not a copy."
      },
      predict: {
        q: "const a = { x: 1 }; const b = a; b.x = 99; What is a.x?",
        a: ["99 (both a and b point to the exact same object)", "1 (a is unchanged)", "undefined", "NaN"],
        c: 0,
        why: "'b = a' copies the reference; modifying b.x mutates the shared underlying object in memory."
      },
      sec2: {
        title: "Shallow copying versus deep copying",
        content: `<p>Understand why the spread operator ({...obj}) is only a shallow copy, leaving nested objects shared.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Shallow Copy ({...obj})", lines: ["duplicates top-level properties", "nested objects/arrays remain shared references!"] },
          { title: "Deep Copy (structuredClone)", lines: ["recursively clones all nested objects", "completely isolated memory graph"] },
          { title: "Reference Equality (===)", lines: ["returns true ONLY if memory address matches", "{ a: 1 } === { a: 1 } is FALSE!"] }
        ]
      },
      sec3: {
        title: "Tracing object mutation bugs",
        content: `<p>Trace how a shallow copy leaves nested address objects linked between original and copy.</p>`,
      },
      trace: {
        code: [
          "const original = { user: 'Ada', address: { city: 'London' } };",
          "const shallow = { ...original };",
          "shallow.address.city = 'Paris'; # mutates nested shared reference!",
          "console.log(original.address.city); # 'Paris' (unexpected side effect!)"
        ],
        steps: [
          { line: 0, vars: { original: "object with nested address" } },
          { line: 1, vars: { shallow: "top-level cloned, address reference shared" } },
          { line: 2, vars: { mutation: "mutated city in shared address object" } },
          { line: 3, vars: { result: "original was silently corrupted" } }
        ]
      },
      practiceIntro: "Test your memory of object reference behavior.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Copying only top-level properties creates a <0> copy.",
          "The modern native browser API to create a true deep clone is <1>Clone().",
          "To prevent any property modifications on an object, call Object.<2>()."
        ],
        blanks: [
          { a: ["shallow"], why: "Shallow copies leave nested objects shared." },
          { a: ["structured"], why: "structuredClone() performs a native deep copy." },
          { a: ["freeze"], why: "Object.freeze() makes top-level properties read-only." }
        ]
      },
      win: "You can write pure functions that update object state without introducing accidental mutation side effects.",
      nextTasks: [
        "Test reference equality between two identical literal objects ({ a: 1 } === { a: 1 }).",
        "Deep clone an object containing nested arrays using structuredClone().",
        "Observe how Object.freeze() blocks property mutation."
      ],
      primarySource: "MDN Web Docs: *Working with Objects* & *structuredClone* (developer.mozilla.org).",
      quiz: [
        {
          q: "Why does '{ a: 1 } === { a: 1 }' evaluate to false in JavaScript?",
          a: [
            "Each object literal creates a distinct object at a different memory address, and === checks reference identity",
            "The values inside the curly braces are evaluated in reverse",
            "JavaScript does not support the triple equals operator on objects",
            "The curly braces cancel each other out"
          ],
          c: 0,
          why: "For reference types, === checks whether both operands point to the exact same memory location."
        },
        {
          q: "What is the limitation of copying an object using the spread operator ({...obj})?",
          a: [
            "It only creates a shallow copy; nested objects and arrays are copied by reference and remain shared",
            "It converts all numbers into strings",
            "It only copies the first three properties",
            "It is deprecated in modern ECMAScript"
          ],
          c: 0,
          why: "The spread operator copies values at depth 1; nested references still point to the original objects."
        },
        {
          q: "What does the native 'structuredClone(obj)' function do?",
          a: [
            "Performs a full deep copy, recursively duplicating all nested objects and arrays",
            "Converts the object into an SQL query string",
            "Deletes all private variables from the object",
            "Freezes the object so it cannot be read"
          ],
          c: 0,
          why: "structuredClone creates an entirely independent deep duplicate of the object graph."
        },
        {
          q: "How can you safely access a deeply nested property that might be null or undefined?",
          a: [
            "Using optional chaining: user?.address?.city",
            "Using three exclamation marks: !!!user",
            "Wrapping the code in a while loop",
            "Renaming the property to 'safe'"
          ],
          c: 0,
          why: "Optional chaining (?.) short-circuits to undefined without throwing a TypeError."
        }
      ]
    },
    {
      n: 6,
      id: "arrays-and-array-methods",
      title: "Arrays and modern array methods",
      topic: "Objects & Collections",
      anim: "CodeSweep",
      lede: "Stop writing manual for-loops. Master declarative, immutable array pipelines using map, filter, reduce, find, and some.",
      winShort: "Transform collections declaratively using pure array methods and reduce",
      missionLink: "The core functional style of modern idiomatic JavaScript",
      sec1: {
        title: "Imperative loops versus declarative pipelines",
        content: `<p>In older code, transforming a list meant declaring an empty array, writing a <code>for (let i = 0; i &lt; len; i++)</code> loop, and pushing mutated values. This is <b>imperative</b>: it details every step of how to do it.</p><p>Modern JavaScript uses <b>declarative higher-order array methods</b>: <code>map</code> (transform each item), <code>filter</code> (keep matching items), and <code>reduce</code> (aggregate into a single value). They produce new arrays without mutating the original, preventing side-effect bugs.</p>`,
        keyIdea: "map transforms; filter selects; reduce accumulates; all three leave the original array untouched."
      },
      predict: {
        q: "What does [1, 2, 3].map(x => x * 2) return, and does it modify the original array?",
        a: [
          "Returns [2, 4, 6] as a brand new array; the original [1, 2, 3] is unchanged",
          "Mutates the original array in place to [2, 4, 6]",
          "Returns the single number 12",
          "Returns [1, 2, 3, 2, 4, 6]"
        ],
        c: 0,
        why: "map produces a new array of transformed values without mutating the source array."
      },
      sec2: {
        title: "The array methods toolkit",
        content: `<p>Distinguish between pure non-mutating methods and legacy in-place mutating methods.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Pure / Non-Mutating", lines: [".map(), .filter(), .reduce()", ".slice(), .find(), .some()", "returns new data safely"] },
          { title: "Mutating / Destructive", lines: [".push(), .pop(), .splice()", ".sort(), .reverse()", "mutates original array in place!"] },
          { title: "Modern ES2023 Safe", lines: [".toSorted(), .toReversed()", "safe non-mutating alternatives"] }
        ]
      },
      sec3: {
        title: "Tracing an array pipeline",
        content: `<p>Trace how a chain of filter and reduce calculates the total cost of pending orders.</p>`,
      },
      trace: {
        code: [
          "const orders = [ { id: 1, total: 30, pending: true }, { id: 2, total: 50, pending: false }, { id: 3, total: 20, pending: true } ];",
          "const pendingTotal = orders",
          "    .filter(o => o.pending)",
          "    .reduce((sum, o) => sum + o.total, 0);",
          "# Filter -> orders 1 and 3; Reduce -> 30 + 20 = 50"
        ],
        steps: [
          { line: 0, vars: { initial: "3 orders" } },
          { line: 2, vars: { filter: "kept orders 1 and 3" } },
          { line: 3, vars: { reduce: "accumulated total: 50" } }
        ]
      },
      practiceIntro: "Test your memory of array methods.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The method that creates a new array of transformed items is .<0>().",
          "The method that selects a subset of items matching a condition is .<1>().",
          "The method that aggregates an entire array down to a single value is .<2>()."
        ],
        blanks: [
          { a: ["map"], why: "map applies a transformation to each item." },
          { a: ["filter"], why: "filter keeps items where the predicate returns true." },
          { a: ["reduce"], why: "reduce accumulates array values into a single result." }
        ]
      },
      win: "You can write expressive, non-mutating data pipelines that process collections cleanly and reliably.",
      nextTasks: [
        "Replace a traditional for-loop with a map or filter expression.",
        "Use reduce to count the frequency of categories in an array of objects.",
        "Use the modern toSorted() method to sort an array without mutating the original."
      ],
      primarySource: "MDN Web Docs: *Array methods* (developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).",
      quiz: [
        {
          q: "What is the difference between Array.prototype.slice() and Array.prototype.splice()?",
          a: [
            "slice() returns a shallow copy of a portion of an array without mutating it; splice() mutates the original array",
            "slice() works on strings; splice() works on numbers",
            "splice() is an asynchronous operation returning a Promise",
            "There is no difference between slice and splice"
          ],
          c: 0,
          why: "slice is pure and non-mutating; splice modifies the array in-place by removing or inserting items."
        },
        {
          q: "What does 'array.find(predicate)' return if no element matches the condition?",
          a: [
            "undefined",
            "null",
            "-1",
            "An empty array []"
          ],
          c: 0,
          why: "find returns the first matching element, or undefined if no element satisfies the predicate."
        },
        {
          q: "What is the initial value argument in array.reduce(callback, initialValue)?",
          a: [
            "The starting value passed to the accumulator on the first iteration",
            "The maximum number of items the reducer is allowed to process",
            "The timeout delay in milliseconds",
            "The index where reduction should start"
          ],
          c: 0,
          why: "initialValue initializes the accumulator; omitting it defaults to the first array element."
        },
        {
          q: "What does 'array.some(predicate)' return?",
          a: [
            "true if AT LEAST ONE element in the array satisfies the predicate function",
            "true only if ALL elements satisfy the predicate function",
            "A random subset of array elements",
            "The total count of matching items"
          ],
          c: 0,
          why: "some checks if any item passes; every checks if all items pass."
        }
      ]
    },
    {
      n: 7,
      id: "destructuring-spread-and-rest",
      title: "Destructuring, spread, and rest operators",
      topic: "Destructuring & Modules",
      anim: "CodeSweep",
      lede: "Unpack data with elegance. Master object and array destructuring, default values, the spread operator for merging, and rest parameters.",
      winShort: "Unpack and merge complex objects and arrays using destructuring and spread syntax",
      missionLink: "Simplifies data handling and eliminates verbose boilerplate accessors",
      sec1: {
        title: "Declarative unpacking",
        content: `<p>Before modern JavaScript, extracting properties from objects required repetitive lines of code: <code>const name = user.name; const age = user.age;</code>. <b>Destructuring</b> lets you extract multiple properties in a single declarative line: <code>const { name, age } = user;</code>.</p><p>You can destructure both objects (by property name) and arrays (by index position), rename variables during extraction, and assign default values for missing properties.</p>`,
        keyIdea: "Destructuring unpacks values from objects and arrays into distinct local variables."
      },
      predict: {
        q: "const [first, ...rest] = [10, 20, 30]; What are the values of 'first' and 'rest'?",
        a: [
          "first is 10; rest is [20, 30]",
          "first is [10]; rest is 20",
          "first is 10; rest is 30",
          "A syntax error is thrown"
        ],
        c: 0,
        why: "Array destructuring matches by position: first extracts item 0; rest gathers the remaining elements."
      },
      sec2: {
        title: "Spread versus Rest syntax",
        content: `<p>The three dots (...) serve two opposite roles depending on where they are placed.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Spread (...)", lines: ["expands an existing collection", "const merged = [...a, ...b];", "const clone = { ...user, role: 'admin' };"] },
          { title: "Rest (...)", lines: ["gathers remaining items together", "const { id, ...details } = user;", "function sum(...numbers) { }"] }
        ]
      },
      sec3: {
        title: "Tracing immutable object updates",
        content: `<p>Trace how the spread operator updates an object property immutably without mutating the source.</p>`,
      },
      trace: {
        code: [
          "const state = { count: 1, user: 'Ada' };",
          "const nextState = { ...state, count: state.count + 1 };",
          "console.log(state.count);     # 1 (original preserved)",
          "console.log(nextState.count); # 2 (updated copy created)"
        ],
        steps: [
          { line: 0, vars: { state: "{ count: 1, user: 'Ada' }" } },
          { line: 1, vars: { nextState: "new object: spreads state, overrides count" } },
          { line: 2, vars: { check_original: "count is still 1" } },
          { line: 3, vars: { check_next: "count is 2" } }
        ]
      },
      practiceIntro: "Test your recall of destructuring and spread syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Unpacking properties from an object into variables is object <0>.",
          "The operator expanding an array into individual items is the <1> operator.",
          "Assigning a fallback in destructuring uses the <2> syntax (e.g. { role = 'guest' })."
        ],
        blanks: [
          { a: ["destructuring"], why: "Destructuring extracts values into variables." },
          { a: ["spread"], why: "The spread operator (...) spreads elements outward." },
          { a: ["default", "="], why: "The = operator specifies default values for missing keys." }
        ]
      },
      win: "You can unpack API payloads and perform immutable state transformations cleanly with destructuring and spread syntax.",
      nextTasks: [
        "Unpack specific properties from an API response object using destructuring.",
        "Merge two objects immutably using the spread operator ({ ...a, ...b }).",
        "Use rest parameters to extract an ID and collect remaining properties."
      ],
      primarySource: "MDN Web Docs: *Destructuring assignment* & *Spread syntax* (developer.mozilla.org).",
      quiz: [
        {
          q: "How do you rename a property while destructuring an object in JavaScript?",
          a: [
            "const { oldName: newName } = object;",
            "const { oldName as newName } = object;",
            "const { oldName -> newName } = object;",
            "const { newName = oldName } = object;"
          ],
          c: 0,
          why: "Colon notation renames: 'const { id: userId } = user' binds user.id to local variable userId."
        },
        {
          q: "What happens if you destructure a property that does not exist on the object?",
          a: [
            "The variable is assigned undefined (or its specified default value)",
            "A fatal NullPointerException is thrown",
            "The computer crashes immediately",
            "The object is deleted from memory"
          ],
          c: 0,
          why: "Missing properties evaluate to undefined unless a default value is declared."
        },
        {
          q: "How does the spread operator handle duplicate keys when merging two objects ({ ...a, ...b })?",
          a: [
            "Properties in object b overwrite matching properties from object a because b appears later",
            "It throws a DuplicateKeyError",
            "It merges both values into an array",
            "Properties in object a take precedence"
          ],
          c: 0,
          why: "Later keys in object spread override earlier keys, enabling clean update overrides."
        },
        {
          q: "Can the rest operator (...) appear in the middle of a destructuring pattern (e.g. [a, ...middle, b])?",
          a: [
            "No, rest syntax must always be the very last element in the pattern",
            "Yes, in all modern ECMAScript versions",
            "Only when destructuring objects with numbers",
            "Only on mobile web browsers"
          ],
          c: 0,
          why: "Syntax rule: a rest element must be last in an array or object destructuring pattern."
        }
      ]
    },
    {
      n: 8,
      id: "modules-import-and-export",
      title: "Modules: import and export",
      topic: "Destructuring & Modules",
      anim: "CodeSweep",
      lede: "Stop polluting the global window object. Master ECMAScript Modules (ESM), named versus default exports, static import analysis, and modular software boundaries.",
      winShort: "Structure JavaScript code into modular ES modules using named and default exports",
      missionLink: "Enables scalable code organization across multi-file applications",
      sec1: {
        title: "The official JavaScript module standard",
        content: `<p>Historically, JavaScript had no built-in module system: everything shared a single global namespace, leading to naming collisions. Node.js created CommonJS (<code>require</code> / <code>module.exports</code>), but today the official universal standard is <b>ECMAScript Modules (ESM)</b>.</p><p>ES Modules use <code>import</code> and <code>export</code> statements. Unlike legacy script tags, ES modules have their own isolated module scope, execute in strict mode automatically, and are statically analyzable by bundlers for tree-shaking.</p>`,
        keyIdea: "ES Modules isolate scope and provide static import/export declarations for reliable dependency graphs."
      },
      predict: {
        q: "What happens when you declare a variable with 'const x = 10;' at the top level of an ES module?",
        a: [
          "It is private to that module and is NOT attached to the global window object",
          "It automatically becomes a global variable accessible across all scripts",
          "It throws a syntax error because modules require classes",
          "It is saved permanently to the computer hard drive"
        ],
        c: 0,
        why: "ES modules have their own top-level module scope; variables do not leak into the global window scope."
      },
      sec2: {
        title: "Named exports versus default exports",
        content: `<p>Understand when to use explicit named exports versus single default module exports.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Named Exports", lines: ["export const add = ...", "import { add, sub } from './math.js'", "explicit names, refactoring safe"] },
          { title: "Default Export", lines: ["export default class User { ... }", "import User from './User.js'", "single primary export per file"] },
          { title: "Re-exporting", lines: ["export * from './buttons.js'", "aggregates index barrel files"] }
        ]
      },
      sec3: {
        title: "Tracing static import resolution",
        content: `<p>Trace how the JavaScript engine resolves and loads module dependencies before executing code.</p>`,
      },
      trace: {
        code: [
          "// math.js: export function multiply(a, b) { return a * b; }",
          "// main.js:",
          "import { multiply } from './math.js';",
          "const result = multiply(4, 5);",
          "console.log(result); # 20"
        ],
        steps: [
          { line: 0, vars: { module_1: "math.js exports named 'multiply' binding" } },
          { line: 2, vars: { static_import: "engine links imported binding before execution" } },
          { line: 3, vars: { execution: "multiply(4, 5) evaluated" } },
          { line: 4, vars: { output: "20 logged cleanly without global pollution" } }
        ]
      },
      practiceIntro: "Test your recall of ES module syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The statement used to expose functions from a module is <0>.",
          "The statement used to consume functions from another module is <1>.",
          "The modern standard module system is <2> Modules (ESM)."
        ],
        blanks: [
          { a: ["export"], why: "export shares symbols from a module." },
          { a: ["import"], why: "import brings symbols into scope." },
          { a: ["ECMAScript", "ES"], why: "ES Modules (ESM) is the official specification standard." }
        ]
      },
      win: "You can organize applications into clean, maintainable ES modules with explicit interfaces and zero global namespace pollution.",
      nextTasks: [
        "Create an ES module that exports two utility functions using named exports.",
        "Import the functions into another file and run it in Node or the browser.",
        "Verify why named exports are easier to autocomplete and refactor than default exports."
      ],
      primarySource: "MDN Web Docs: *JavaScript modules* (developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).",
      quiz: [
        {
          q: "What is the primary advantage of named exports over default exports?",
          a: [
            "Named exports enforce exact naming, preventing accidental renaming and enabling superior IDE autocomplete and tree-shaking",
            "Named exports run twice as fast on modern CPU processors",
            "Named exports can only be used on numerical calculations",
            "Named exports eliminate the need for semicolons"
          ],
          c: 0,
          why: "Named exports maintain consistent symbol names across the codebase and support better tool analysis."
        },
        {
          q: "How do you load an ES module directly inside an HTML file?",
          a: [
            "<script type='module' src='main.js'></script>",
            "<script format='esm' src='main.js'></script>",
            "<module src='main.js'></module>",
            "<link rel='module' href='main.js'>"
          ],
          c: 0,
          why: "The type='module' attribute on a <script> tag signals modern ES module parsing."
        },
        {
          q: "Can standard 'import' statements be called conditionally inside an if statement?",
          a: [
            "No, static import declarations must be at the top level; dynamic imports use import() function",
            "Yes, imports work anywhere inside functions and loops",
            "Only if the condition evaluates to true",
            "Only on Windows operating systems"
          ],
          c: 0,
          why: "Static imports must be top-level for static analysis; dynamic loading uses the import() promise."
        },
        {
          q: "What mode do ES modules execute in by default?",
          a: [
            "Strict Mode ('use strict' is active automatically)",
            "Quirks Mode",
            "Legacy ECMAScript 3 Mode",
            "Debug Mode"
          ],
          c: 0,
          why: "All ES modules run in strict mode automatically without needing an explicit 'use strict' pragma."
        }
      ]
    }
  ]
};
