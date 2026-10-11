"use strict";

module.exports = {
  id: "webassembly",
  title: "WebAssembly",
  num: 107,
  emoji: "🕸️",
  desc: "Run compiled, high-performance code in the browser at near-native speed.",
  mission: `# Mission — WebAssembly

## Why this course exists

For decades, JavaScript was the only programming language that web browsers could execute natively. While modern JIT compilers have made JavaScript fast, its dynamic typing, garbage collection pauses, and prototype resolution make it unsuitable for compute-heavy workloads like 3D gaming, video editing, physics simulations, audio synthesis, and cryptography. WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine, designed as a portable compilation target that runs in sandboxed browser environments at near-native speed.

## What the learner can do at the end

- Explain the architecture of the WebAssembly stack machine and how it runs alongside JavaScript inside the browser engine.
- Read and write simple WebAssembly Text Format (WAT) instructions directly.
- Allocate and manipulate Wasm Linear Memory using JavaScript TypedArrays (Uint8Array, Float32Array).
- Instantiate and call Wasm modules using standard browser APIs (WebAssembly.instantiateStreaming).
- Compile C/C++ (via Emscripten) and Rust (via wasm-pack and wasm-bindgen) into optimized Wasm binaries.
- Pass complex data structures (strings, structs, images) across the JS-Wasm boundary using memory pointers.
- Accelerate computations using SIMD (Single Instruction Multiple Data) and parallel Web Workers.
- Understand server-side WebAssembly and the WebAssembly System Interface (WASI).

## What this course is NOT

- Not a beginner JavaScript or C syntax course.
- Not a replacement for JavaScript. Wasm works alongside JavaScript, handling CPU-heavy hot paths.

## Success looks like

When confronted with a performance bottleneck in web applications (such as real-time audio filtering, image blurring, or heavy cryptographic calculations), the learner compiles a high-performance Rust/C function to Wasm and hooks it into the JavaScript UI with zero frame drops.
`,
  notes: `# Notes — WebAssembly

## Decisions
- Group into four themes: Virtual Machine Architecture, Linear Memory & Interop, Language Compilation (Rust/C), and High Performance & WASI.
- Ground explanations in stack-based bytecode execution, linear memory buffers, and boundary marshaling overhead.
`,
  resources: `# Resources — WebAssembly

## Knowledge (primary sources)
- W3C WebAssembly Core Specification (webassembly.github.io/spec/core).
- MDN Web Docs: *WebAssembly* (developer.mozilla.org).
- *Programming WebAssembly with Rust* by Kevin Hoffman (Pragmatic Bookshelf).
- Bytecode Alliance and WASI Documentation (bytecodealliance.org).

## Wisdom
- WebAssembly does not replace JavaScript; it gives JavaScript a bionic arm. Use JS for DOM and UI interactions; hand heavy numeric number-crunching to Wasm.
`,
  cheatsheetSections: [
    {
      title: "Streaming Instantiation",
      label: "Fastest way to compile and load Wasm",
      code: `// Stream and compile simultaneously while downloading
const { instance, module } = await WebAssembly.instantiateStreaming(
  fetch("math.wasm"),
  {
    env: {
      log: (val) => console.log("From Wasm:", val)
    }
  }
);

// Call exported Wasm function
const sum = instance.exports.add(40, 2);`,
      lessonN: 4,
      lessonSlug: "js-wasm-interop-and-web-apis",
      lessonTitle: "JavaScript & Wasm Interop"
    },
    {
      title: "Handwritten WAT Module",
      label: "WebAssembly text syntax",
      code: `(module
  ;; Import JS function
  (import "env" "log" (func $log (param i32)))
  
  ;; Export add function
  (func (export "add") (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
)`,
      lessonN: 2,
      lessonSlug: "wat-text-format-and-stack-machine",
      lessonTitle: "WAT & The Stack Machine"
    },
    {
      title: "Linear Memory Access",
      label: "Reading bytes across the boundary",
      code: `// JavaScript allocating 64KB Wasm page
const memory = new WebAssembly.Memory({ initial: 1 }); // 1 page = 64KB
const view = new Uint8Array(memory.buffer);

// Write text into Wasm memory
const encoder = new TextEncoder();
view.set(encoder.encode("Hello Wasm!"), 0);

// Pass pointer (offset 0) and length into Wasm
instance.exports.process_string(0, 11);`,
      lessonN: 3,
      lessonSlug: "linear-memory-and-buffers",
      lessonTitle: "Linear Memory & TypedArrays"
    },
    {
      title: "Rust wasm-bindgen Export",
      label: "Idiomatic compiled Rust",
      code: `use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}`,
      lessonN: 5,
      lessonSlug: "compiling-rust-and-c-to-wasm",
      lessonTitle: "Compiling Rust & C to Wasm"
    }
  ],
  glossaryGroups: [
    {
      id: "wasm-architecture",
      title: "Wasm Architecture & Virtual Machine",
      terms: [
        { term: "WebAssembly", def: "A compact binary instruction format for a stack-based virtual machine designed to execute at near-native speed in sandboxed environments.", lesson: 1, tags: ["wasm", "bytecode"] },
        { term: "Stack machine", def: "A computing architecture where instructions push operands onto an evaluation stack and pop results, rather than operating on named hardware registers.", lesson: 2, tags: ["vm", "architecture"] },
        { term: "WAT", def: "WebAssembly Text format: a human-readable S-expression representation of binary Wasm instructions, converted using wat2wasm.", lesson: 2, tags: ["wat", "syntax"] },
        { term: "JIT Compilation", def: "Just-In-Time compilation where the browser's engine translates portable Wasm bytecode into native machine instructions directly on the host CPU.", lesson: 1, tags: ["compiler"] }
      ]
    },
    {
      id: "memory-and-interop",
      title: "Linear Memory & Interoperability",
      terms: [
        { term: "Linear Memory", def: "A contiguous, resizable array of raw bytes allocated by the browser and exposed to WebAssembly and JavaScript simultaneously.", lesson: 3, tags: ["memory", "buffer"] },
        { term: "Wasm Page", def: "The fixed atomic unit of WebAssembly memory allocation, equal to exactly 65,536 bytes (64 kilobytes).", lesson: 3, tags: ["memory", "pages"] },
        { term: "instantiateStreaming", def: "The primary browser API that downloads, compiles, and instantiates a WebAssembly module in a single streaming pipeline.", lesson: 4, tags: ["api", "browser"] },
        { term: "TypedArray", def: "A JavaScript view (such as Uint8Array or Float32Array) providing structured read and write access to raw binary ArrayBuffers.", lesson: 3, tags: ["javascript", "memory"] }
      ]
    },
    {
      id: "compilation-and-types",
      title: "Languages & Compilation",
      terms: [
        { term: "Emscripten", def: "An open-source LLVM-to-WebAssembly compiler toolchain that ports large C and C++ projects (including POSIX and OpenGL APIs) to the web.", lesson: 5, tags: ["c", "emscripten"] },
        { term: "wasm-bindgen", def: "A Rust library and CLI tool facilitating high-level interactions between Wasm modules and JavaScript objects.", lesson: 5, tags: ["rust", "tooling"] },
        { term: "Memory pointer", def: "An integer offset indicating the starting byte address of an object or string in Wasm linear memory.", lesson: 6, tags: ["pointers", "memory"] },
        { term: "wasm-pack", def: "A one-stop CLI tool for building, profiling, and packaging Rust-generated WebAssembly code for npm publication.", lesson: 5, tags: ["rust", "npm"] }
      ]
    },
    {
      id: "performance-and-wasi",
      title: "High Performance & WASI",
      terms: [
        { term: "SIMD", def: "Single Instruction, Multiple Data: hardware instructions that perform the same calculation across multiple data points in parallel in a single CPU cycle.", lesson: 7, tags: ["simd", "performance"] },
        { term: "WASI", def: "WebAssembly System Interface: a standardized modular system interface providing sandboxed POSIX-like system calls (files, clocks, sockets) outside browsers.", lesson: 8, tags: ["wasi", "systems"] },
        { term: "SharedArrayBuffer", def: "A shared memory primitive that allows multiple parallel Web Workers and Wasm instances to read and write to the same memory block.", lesson: 7, tags: ["threads", "concurrency"] },
        { term: "Sandboxing", def: "The security model where WebAssembly code executes in an isolated environment with zero access to system calls, host files, or DOM unless explicitly imported.", lesson: 1, tags: ["security"] }
      ]
    }
  ],
  topics: [
    "Wasm Architecture & Stack VM",
    "Linear Memory & Interoperability",
    "Compiling Systems Languages (Rust/C)",
    "Wasm Beyond the Browser & WASI"
  ],
  lessons: [
    {
      n: 1,
      id: "why-webassembly-and-vm-architecture",
      title: "Why WebAssembly: Performance & Architecture",
      topic: "Wasm Architecture & Stack VM",
      anim: "LayersOrbit",
      lede: "JavaScript is dynamically typed and garbage collected. WebAssembly brings near-native compiled performance to the browser.",
      winShort: "Articulate why WebAssembly exists, how it differs from JavaScript, and the sandboxed security model",
      missionLink: "Accelerate CPU-heavy web applications without sacrificing browser sandboxing security",
      sec1: {
        title: "The performance limitations of JavaScript",
        content: `<p>Modern V8 and SpiderMonkey engines are marvels of engineering, but JavaScript has architectural limits:</p><ul><li><b>Dynamic types:</b> V8 must make optimistic JIT assumptions. If a variable changes type from an integer to an object, the JIT de-optimizes and falls back to slow bytecode.</li><li><b>Garbage collection:</b> Periodic GC pauses cause frame drops in 60fps games and audio stutter in synthesizers.</li><li><b>Parsing overhead:</b> Large 10MB JavaScript files must be parsed, tokenized, and compiled before execution.</li></ul><p><b>WebAssembly (Wasm)</b> is a pre-compiled binary format. The browser validates and compiles Wasm directly to machine code in a single streaming pass with zero GC pauses.</p>`,
        keyIdea: "WebAssembly provides deterministic, pre-compiled binary execution with near-native speed and no garbage collection pauses."
      },
      predict: {
        q: "Does WebAssembly replace JavaScript and deprecate frontend frameworks like React?",
        a: [
          "No: WebAssembly is designed to work alongside JavaScript, handling CPU-heavy compute tasks while JS manages the DOM and UI",
          "Yes: the W3C plans to remove JavaScript from browsers by 2030",
          "Yes: WebAssembly has direct native access to the DOM tree",
          "No: WebAssembly only runs on Android phones"
        ],
        c: 0,
        why: "Wasm complements JavaScript: JS handles UI and DOM manipulation, while Wasm handles heavy numeric computation."
      },
      sec2: {
        title: "The Wasm security sandbox",
        content: `<p>Running compiled native code inside a browser sounds terrifying. What prevents a Wasm module from reading your hard drive or stealing passwords?</p><p>WebAssembly is strictly <b>sandboxed</b> inside the same security context as JavaScript. A Wasm module has <b>no access to the host operating system, filesystem, or network sockets</b> unless explicitly provided via imported JavaScript functions. Pointers cannot escape Wasm's isolated linear memory.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Browser Engine Sandbox", lines: ["Same security origin as JS", "Zero direct OS access", "No arbitrary syscalls"] },
          { title: "JavaScript Tier", lines: ["DOM manipulation", "Fetch API & network", "Event listeners"] },
          { title: "WebAssembly Tier", lines: ["Compiled Rust/C++ binary", "Stack machine execution", "Linear memory number crunching"] }
        ]
      },
      sec3: {
        title: "Tracing the compilation and execution pipeline",
        content: `<p>Trace how a compiled Wasm module is fetched and executed in the browser.</p>`,
      },
      trace: {
        code: [
          "1. Browser initiates: fetch('algorithm.wasm')",
          "2. WebAssembly.instantiateStreaming compiles bytes while network chunks arrive",
          "3. Module verified: Bytecode validated against type and memory safety rules",
          "4. Host machine JIT emits native x86_64 or ARM64 assembly",
          "5. JavaScript calls exported function: instance.exports.calculate()"
        ],
        steps: [
          { line: 0, vars: { download: "Binary .wasm stream started" } },
          { line: 1, vars: { streaming: "Concurrent download and compilation" } },
          { line: 2, vars: { validation: "Safety checks guarantee memory isolation" } },
          { line: 4, vars: { execution: "Near-native CPU instruction execution" } }
        ]
      },
      practiceIntro: "Test your understanding of WebAssembly foundations and security.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "WebAssembly is a binary instruction format for a <0>-based virtual machine.",
          "Wasm runs inside an isolated browser security <1>.",
          "WebAssembly memory is non-blocking because it has no automatic <2> collection."
        ],
        blanks: [
          { a: ["stack"], why: "Wasm operates as a stack virtual machine." },
          { a: ["sandbox"], why: "Wasm is securely sandboxed." },
          { a: ["garbage"], why: "Manual memory eliminates GC pauses." }
        ]
      },
      win: "You can articulate why WebAssembly is critical for high-performance computing on the web and describe its sandboxed security architecture.",
      nextTasks: [
        "Inspect a .wasm file in a hex editor to observe the magic number header (\\0asm).",
        "Benchmark array sorting in pure JavaScript vs compiled Wasm.",
        "Verify that a WebAssembly module cannot call window or document directly without JS bridge functions."
      ],
      primarySource: "W3C WebAssembly Specification: *Introduction and Overview* (webassembly.github.io/spec).",
      quiz: [
        {
          q: "What is the primary motivation for using WebAssembly in a web application?",
          a: [
            "To execute compute-intensive algorithms at near-native CPU speed without JavaScript JIT deoptimizations or garbage collection pauses",
            "To replace CSS layout engines with C++ code",
            "To bypass browser cookie security policies",
            "To reduce font download file sizes"
          ],
          c: 0,
          why: "Wasm provides consistent, high-performance execution for CPU-heavy tasks like physics, compression, and 3D rendering."
        },
        {
          q: "How does WebAssembly interact with the browser's DOM (Document Object Model)?",
          a: [
            "It cannot access the DOM directly; it must call imported JavaScript functions to interact with DOM nodes",
            "It has direct pointer access to the browser's C++ DOM nodes",
            "It replaces the DOM with raw OpenGL pixels",
            "It uses SQL queries to update HTML elements"
          ],
          c: 0,
          why: "WebAssembly has no native DOM access; all DOM modifications must be bridged through imported JavaScript functions."
        },
        {
          q: "What are the four primary value types natively supported in standard WebAssembly bytecode?",
          a: [
            "i32, i64, f32, and f64 (32-bit and 64-bit integers and floats)",
            "string, number, boolean, and object",
            "int, char, double, and pointer",
            "JSON, XML, HTML, and binary"
          ],
          c: 0,
          why: "Core Wasm operates directly on raw primitive numbers: 32-bit and 64-bit integers and floating-point values."
        },
        {
          q: "Why is WebAssembly immune to buffer overflow attacks compromising the host operating system?",
          a: [
            "It executes inside a secure browser sandbox with isolated linear memory and cannot execute arbitrary machine syscalls",
            "Because C and Rust code cannot have memory bugs",
            "Because browsers encrypt all memory with AES-256",
            "Because Wasm only runs in read-only mode"
          ],
          c: 0,
          why: "Wasm's memory is bounded within an allocated ArrayBuffer; invalid memory accesses trap safely within the sandbox."
        }
      ]
    },
    {
      n: 2,
      id: "wat-text-format-and-stack-machine",
      title: "WAT & The Stack Machine",
      topic: "Wasm Architecture & Stack VM",
      anim: "CodePulse",
      lede: "WebAssembly is binary, but it has a human-readable counterpart: WAT. Learn how stack operations push and pop operands.",
      winShort: "Read and write WebAssembly Text format (WAT) and understand stack-based bytecode evaluation",
      missionLink: "Understand the raw execution model underpinning every compiled Wasm module",
      sec1: {
        title: "The stack machine paradigm",
        content: `<p>Most modern hardware CPUs are <b>register-based</b> (they operate on named registers like <code>RAX</code>, <code>RBX</code>). WebAssembly is designed as a <b>stack machine</b> because stack bytecode is compact, fast to transmit, and easy to validate.</p><p>In a stack machine, instructions push numbers onto an evaluation stack, operations pop their arguments from the stack, compute the result, and push the result back onto the stack.</p>`,
        keyIdea: "A stack machine pushes values onto an evaluation stack and pops them to compute results."
      },
      predict: {
        q: "What is the result of executing: i32.const 10, i32.const 20, i32.add?",
        a: [
          "The stack contains one element: 30",
          "The stack contains two elements: 10 and 20",
          "An error: stack overflow",
          "The value 1020"
        ],
        c: 0,
        why: "i32.const pushes 10 and 20; i32.add pops both, adds them (30), and pushes 30 back onto the stack."
      },
      sec2: {
        title: "WebAssembly Text format (WAT)",
        content: `<p>Because binary <code>.wasm</code> files are unreadable by humans, the W3C defined <b>WAT (WebAssembly Text Format)</b> using Lisp-style S-expressions (parentheses). The <code>wat2wasm</code> tool from the WABT toolkit compiles WAT text into binary Wasm.</p>`,
      },
      diagram: {
        boxes: [
          { title: "WAT S-Expression", lines: ["(func $add (param $a i32) (param $b i32)", "  local.get $a", "  local.get $b", "  i32.add)"] },
          { title: "wat2wasm Compiler", lines: ["Transforms text S-expressions", "into compact binary opcode stream"] },
          { title: "Binary .wasm", lines: ["00 61 73 6d 01 00 00 00", "Compact 40-byte binary payload"] }
        ]
      },
      sec3: {
        title: "Tracing stack execution for a multiplication function",
        content: `<p>Trace how operands move on and off the evaluation stack during execution.</p>`,
      },
      trace: {
        code: [
          "local.get $x      ;; Push x (e.g. 5) onto stack  -> Stack: [5]",
          "local.get $y      ;; Push y (e.g. 4) onto stack  -> Stack: [5, 4]",
          "i32.mul           ;; Pop 4 and 5, multiply, push -> Stack: [20]",
          "return            ;; Function returns top of stack: 20"
        ],
        steps: [
          { line: 0, vars: { stack: "[5]" } },
          { line: 1, vars: { stack: "[5, 4]" } },
          { line: 2, vars: { stack: "[20]" } },
          { line: 3, vars: { result: "20 returned to caller" } }
        ]
      },
      practiceIntro: "Test your understanding of the WebAssembly stack machine and WAT syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The human-readable S-expression format for WebAssembly is <0>.",
          "The command that pushes a 32-bit constant onto the stack is i32.<1>.",
          "The CLI tool that converts WAT text files into binary wasm is <2>2wasm."
        ],
        blanks: [
          { a: ["WAT"], why: "WebAssembly Text format." },
          { a: ["const"], why: "i32.const pushes integer constants." },
          { a: ["wat"], why: "wat2wasm compiles WAT to Wasm." }
        ]
      },
      win: "You can read and author simple WebAssembly Text modules and explain the stack evaluation process.",
      nextTasks: [
        "Install the WABT toolkit (brew install wabt) and compile a small WAT file using wat2wasm.",
        "Write a WAT function that calculates the square of an integer: x * x.",
        "Disassemble a compiled .wasm binary back into readable text using wasm2wat."
      ],
      primarySource: "MDN Web Docs: *Understanding WebAssembly text format* (developer.mozilla.org).",
      quiz: [
        {
          q: "What is WAT in the WebAssembly ecosystem?",
          a: [
            "The human-readable S-expression text representation of WebAssembly binary code",
            "A testing framework for Node.js",
            "A WebAssembly package manager",
            "A WebAssembly browser extension"
          ],
          c: 0,
          why: "WAT (WebAssembly Text) is the standardized text syntax used for authoring and inspecting Wasm."
        },
        {
          q: "How does a stack-based virtual machine evaluate operations like 'i32.sub'?",
          a: [
            "It pops the two top values from the stack, subtracts the second popped from the first, and pushes the result onto the stack",
            "It looks up values in CPU registers RAX and RBX",
            "It queries a relational database table",
            "It allocates a new thread in the background"
          ],
          c: 0,
          why: "Stack machines pop arguments from the top of the evaluation stack and push the computed result."
        },
        {
          q: "Which tool from the official WABT toolkit converts binary .wasm into human-readable .wat?",
          a: [
            "wasm2wat",
            "wat2wasm",
            "wasm-decompile",
            "wasm-strip"
          ],
          c: 0,
          why: "wasm2wat disassembles binary bytecode into human-readable WAT format."
        },
        {
          q: "What is the purpose of the '(export \"add\" (func $add))' instruction in WAT?",
          a: [
            "It exposes the internal $add function to the JavaScript environment under the name 'add'",
            "It uploads the function to the npm registry",
            "It writes the function to the local hard drive",
            "It makes the function run on every CPU core"
          ],
          c: 0,
          why: "export declarations make functions callable from JavaScript host code via instance.exports."
        }
      ]
    },
    {
      n: 3,
      id: "linear-memory-and-buffers",
      title: "Linear Memory & TypedArrays",
      topic: "Linear Memory & Interoperability",
      anim: "Layers",
      lede: "WebAssembly cannot access JavaScript garbage-collected objects directly. Instead, both communicate through shared Linear Memory.",
      winShort: "Allocate, read, and write WebAssembly Linear Memory using JavaScript TypedArrays",
      missionLink: "Exchange high-volume raw data (images, audio, geometries) between JS and Wasm with zero copying",
      sec1: {
        title: "The Linear Memory model",
        content: `<p>WebAssembly modules do not have direct access to JavaScript variables or the DOM. Instead, Wasm programs interact with the outside world through <b>Linear Memory</b>: a single contiguous array of raw bytes represented as a <code>WebAssembly.Memory</code> object.</p><p>Memory is allocated in <b>pages of 64KB (65,536 bytes)</b>. Memory can grow dynamically using <code>memory.grow(pages)</code>. Both JavaScript and Wasm can read and write to this exact same memory buffer simultaneously.</p>`,
        keyIdea: "Linear memory is a contiguous byte array (in 64KB pages) shared between JavaScript and WebAssembly."
      },
      predict: {
        q: "What is the size of one standard WebAssembly memory page?",
        a: [
          "64 kilobytes (65,536 bytes)",
          "1 megabyte",
          "4 kilobytes",
          "512 bytes"
        ],
        c: 0,
        why: "WebAssembly memory pages are standardized at exactly 64KB (65,536 bytes)."
      },
      sec2: {
        title: "Viewing memory with TypedArrays",
        content: `<p>In JavaScript, a <code>WebAssembly.Memory</code> object wraps an <code>ArrayBuffer</code>. You inspect or modify memory by creating <b>TypedArray views</b> over its buffer:</p><ul><li><code>new Uint8Array(memory.buffer):</code> Byte-by-byte access (great for images and ASCII strings).</li><li><code>new Int32Array(memory.buffer):</code> 4-byte signed integers.</li><li><code>new Float32Array(memory.buffer):</code> 4-byte floating point numbers (great for 3D coordinates and audio waveforms).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "WebAssembly Module", lines: ["Writes processed pixels", "at memory offset 0x1000", "Direct pointer arithmetic"] },
          { title: "Shared Linear Memory", lines: ["64KB contiguous byte block", "Zero copy overhead!"] },
          { title: "JavaScript (Canvas)", lines: ["new Uint8ClampedArray(mem.buffer)", "ctx.putImageData()", "Direct GPU screen rendering!"] }
        ]
      },
      sec3: {
        title: "Tracing zero-copy image manipulation",
        content: `<p>Trace how JavaScript and Wasm collaborate on an image filter without copying memory.</p>`,
      },
      trace: {
        code: [
          "1. JS allocates Wasm memory: const mem = new WebAssembly.Memory({ initial: 10 }); // 640KB",
          "2. JS writes raw image pixels into memory buffer starting at offset 0",
          "3. JS invokes Wasm function: instance.exports.apply_blur(0, width, height)",
          "4. Wasm loops over byte array in-place, applying convolution blur filter",
          "5. JS renders modified buffer directly to <canvas> with zero byte copies"
        ],
        steps: [
          { line: 0, vars: { allocation: "10 pages (640KB) reserved" } },
          { line: 1, vars: { input_write: "Pixels copied to linear memory" } },
          { line: 3, vars: { wasm_processing: "Near-native C/Rust speed filter execution" } },
          { line: 4, vars: { zero_copy: "Canvas draws directly from memory.buffer" } }
        ]
      },
      practiceIntro: "Test your mastery of WebAssembly linear memory and TypedArray views.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The standard size of a WebAssembly memory page is <0> KB.",
          "In JavaScript, the raw memory buffer is accessed via memory.<1>.",
          "To view bytes as 8-bit unsigned integers, wrap the buffer in a <2>Array."
        ],
        blanks: [
          { a: ["64"], why: "64KB per page." },
          { a: ["buffer"], why: "memory.buffer provides the ArrayBuffer." },
          { a: ["Uint8"], why: "Uint8Array reads bytes." }
        ]
      },
      win: "You can allocate, read, and write to Wasm linear memory using TypedArray views to achieve zero-copy data exchanges.",
      nextTasks: [
        "Create a WebAssembly.Memory instance in JavaScript and pass it into a WAT module via imports.",
        "Write an array of floats into linear memory from JS and compute their sum inside Wasm.",
        "Demonstrate dynamic memory expansion by calling memory.grow(1) and recreating your TypedArray view."
      ],
      primarySource: "MDN Web Docs: *WebAssembly.Memory* (developer.mozilla.org).",
      quiz: [
        {
          q: "What is Linear Memory in WebAssembly?",
          a: [
            "A contiguous, resizable array of raw bytes shared between JavaScript and WebAssembly",
            "A linear algebra library for machine learning",
            "A hard drive partition formatted with ext4",
            "A database index stored in memory"
          ],
          c: 0,
          why: "Linear memory provides a flat byte-addressable buffer that both Wasm and JS can access directly."
        },
        {
          q: "What critical gotcha happens in JavaScript when WebAssembly memory expands via 'memory.grow()'?",
          a: [
            "The existing ArrayBuffer is detached and invalidated, requiring all JavaScript TypedArray views to be recreated",
            "The browser crashes with an Out-Of-Memory error",
            "All previous data in memory is erased",
            "The WebAssembly instance terminates"
          ],
          c: 0,
          why: "When memory grows, the underlying buffer address moves; existing TypedArray references detach and become zero-length."
        },
        {
          q: "How many bytes are in 4 pages of WebAssembly memory?",
          a: [
            "262,144 bytes (256 KB)",
            "4,096 bytes",
            "1,048,576 bytes",
            "40,000 bytes"
          ],
          c: 0,
          why: "4 pages * 65,536 bytes per page = 262,144 bytes."
        },
        {
          q: "Why is passing pointers to linear memory vastly faster than JSON serialization for large datasets?",
          a: [
            "It avoids parsing and string serialization overhead, operating directly on raw bytes in-place (zero copy)",
            "Because JSON is forbidden by the W3C in modern browsers",
            "Because linear memory compresses data automatically with gzip",
            "Because TypedArrays run on the GPU"
          ],
          c: 0,
          why: "Zero-copy pointer sharing eliminates expensive JSON string encoding and parsing overhead."
        }
      ]
    },
    {
      n: 4,
      id: "js-wasm-interop-and-web-apis",
      title: "JavaScript & Wasm Interoperability",
      topic: "Linear Memory & Interoperability",
      anim: "Flow",
      lede: "How do JavaScript and WebAssembly communicate? Master the WebAssembly JavaScript API, imports, exports, and streaming.",
      winShort: "Use WebAssembly.instantiateStreaming to fetch, compile, and exchange functions between JS and Wasm",
      missionLink: "Integrate high-speed compiled modules into production frontend web applications",
      sec1: {
        title: "The WebAssembly JavaScript API",
        content: `<p>Modern browsers provide the global <code>WebAssembly</code> namespace. The gold standard for loading modules is <code>WebAssembly.instantiateStreaming()</code>.</p><p>Unlike legacy approaches that wait for the entire binary to download before compiling, <code>instantiateStreaming</code> parses and compiles bytecode into machine code <i>in a background thread while network chunks are still in transit</i>.</p>`,
        keyIdea: "instantiateStreaming downloads and compiles WebAssembly concurrently in a background thread."
      },
      predict: {
        q: "What HTTP header must a web server send for 'WebAssembly.instantiateStreaming' to succeed?",
        a: [
          "Content-Type: application/wasm",
          "Content-Type: application/octet-stream",
          "Accept-Encoding: gzip",
          "X-WebAssembly: enabled"
        ],
        c: 0,
        why: "Browsers strictly mandate the official MIME type 'application/wasm' for streaming compilation."
      },
      sec2: {
        title: "Imports and Exports: The bridge",
        content: `<p>Communication between JS and Wasm flows across two boundaries:</p><ul><li><b>Exports:</b> Functions, globals, and memory defined in Wasm that JavaScript calls via <code>instance.exports.myFunction()</code>.</li><li><b>Imports:</b> JavaScript functions, objects, or memory passed into Wasm during instantiation via the import object. This allows Wasm to call JavaScript logging or timing functions.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "JavaScript Host", lines: ["imports: { env: { print: (n) => console.log(n) } }", "Calls: instance.exports.run()"] },
          { title: "WebAssembly Bridge", lines: ["Bidirectional function calls", "Primitive numbers passed directly"] },
          { title: "WebAssembly Module", lines: ["calls imported 'print' function", "exports 'run' function"] }
        ]
      },
      sec3: {
        title: "Tracing bidirectional function calling",
        content: `<p>Trace how a Wasm module calls an imported JavaScript callback during execution.</p>`,
      },
      trace: {
        code: [
          "1. JS supplies import: const imports = { env: { notify: (code) => alert('Code: ' + code) } };",
          "2. JS calls: instance.exports.validate_token(999);",
          "3. Wasm executes validation loop in compiled bytecode",
          "4. Wasm hits call instruction targeting imported $notify function",
          "5. Engine switches context: JS alert('Code: 200') executes!"
        ],
        steps: [
          { line: 0, vars: { import_table: "JS notify callback registered in Wasm" } },
          { line: 1, vars: { js_to_wasm: "Execution enters Wasm stack machine" } },
          { line: 3, vars: { wasm_to_js: "Wasm invokes imported host callback" } },
          { line: 4, vars: { completed: "Control returns seamlessly across boundary" } }
        ]
      },
      practiceIntro: "Test your understanding of the WebAssembly JavaScript API and streaming instantiation.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The fastest method to compile and load Wasm is WebAssembly.<0>Streaming.",
          "The mandatory MIME type header for Wasm files is application/<1>.",
          "Functions exposed by Wasm to JavaScript live on instance.<2>."
        ],
        blanks: [
          { a: ["instantiate"], why: "instantiateStreaming compiles during download." },
          { a: ["wasm"], why: "application/wasm is the official MIME type." },
          { a: ["exports"], why: "instance.exports contains exported symbols." }
        ]
      },
      win: "You can fetch, compile, and link WebAssembly modules with bidirectional function calls and custom imports.",
      nextTasks: [
        "Implement a web page that loads a Wasm module via WebAssembly.instantiateStreaming(fetch(...)).",
        "Pass a JavaScript console.log callback into Wasm and invoke it from a loop inside Wasm.",
        "Handle instantiateStreaming fallback when a server sends an incorrect MIME type."
      ],
      primarySource: "MDN Web Docs: *Loading and running WebAssembly code*.",
      quiz: [
        {
          q: "Why is 'WebAssembly.instantiateStreaming' faster than fetching an ArrayBuffer and calling 'WebAssembly.instantiate'?",
          a: [
            "It compiles bytecode concurrently as network packets arrive, avoiding the need to wait for the entire download to complete",
            "It runs on the cloud instead of the client machine",
            "It uses UDP instead of TCP",
            "It skips all security validation checks"
          ],
          c: 0,
          why: "Streaming compilation processes byte chunks in a background compiler thread simultaneously with network download."
        },
        {
          q: "What happens if the web server serves a .wasm file with 'Content-Type: text/plain'?",
          a: [
            "WebAssembly.instantiateStreaming fails with a TypeError, requiring a fallback to arrayBuffer parsing",
            "The browser converts the file to JavaScript automatically",
            "The file is executed as a CSS stylesheet",
            "The browser executes the module with 50% slower speed"
          ],
          c: 0,
          why: "instantiateStreaming enforces strict MIME type checking; non-conforming types reject the promise."
        },
        {
          q: "How does a WebAssembly module call a JavaScript function like console.log()?",
          a: [
            "The JavaScript function must be passed into the module as an import object during instantiation",
            "Wasm can call window.console.log directly via pointer arithmetic",
            "Wasm executes a shell command to run Node.js",
            "It is impossible for Wasm to trigger any JavaScript code"
          ],
          c: 0,
          why: "Wasm only knows about host functions that are explicitly declared in its imports table."
        },
        {
          q: "What types can be passed directly as arguments to an exported WebAssembly function without memory manipulation?",
          a: [
            "Numbers (32-bit and 64-bit integers and floats)",
            "Strings, arrays, and objects",
            "DOM HTML elements",
            "Promises and async callbacks"
          ],
          c: 0,
          why: "Core Wasm only accepts numeric primitives (i32, i64, f32, f64) natively across function boundaries."
        }
      ]
    },
    {
      n: 5,
      id: "compiling-rust-and-c-to-wasm",
      title: "Compiling Rust & C to Wasm",
      topic: "Compiling Systems Languages (Rust/C)",
      anim: "Code",
      lede: "Nobody writes raw WAT by hand for large applications. Learn how modern toolchains compile Rust and C/C++ to WebAssembly.",
      winShort: "Compile C/C++ using Emscripten and Rust using wasm-pack and wasm-bindgen",
      missionLink: "Port existing mature C/Rust libraries (FFmpeg, SQLite, OpenCV) directly to the web browser",
      sec1: {
        title: "The two compilation giants: C/C++ vs Rust",
        content: `<p>WebAssembly was born to bring high-performance systems code to the web. Two ecosystems lead the industry:</p><ul><li><b>C / C++ (Emscripten):</b> Uses <code>emcc</code> to compile massive legacy codebases (AutoCAD, Unreal Engine, SQLite, FFmpeg) to Wasm. Emscripten provides a virtual POSIX layer, translating OpenGL to WebGL and files to an in-memory virtual filesystem (MEMFS).</li><li><b>Rust (wasm-pack):</b> The modern darling of Wasm development. Rust's zero-cost abstractions, lack of garbage collection, and safety guarantees align perfectly with Wasm. Tools like <code>wasm-bindgen</code> generate seamless JavaScript glue code automatically.</li></ul>`,
        keyIdea: "Emscripten ports legacy C/C++ projects with POSIX simulation; Rust produces lean, modern, type-safe Wasm packages."
      },
      predict: {
        q: "What does the 'wasm-pack build --target web' command produce in a Rust project?",
        a: [
          "An optimized .wasm binary, a JavaScript glue file (.js), and TypeScript declaration files (.d.ts) ready for import",
          "An executable Windows .exe file",
          "A Docker container image",
          "A native iOS mobile application"
        ],
        c: 0,
        why: "wasm-pack compiles the Rust code to Wasm and generates TypeScript-ready JS wrapper bindings automatically."
      },
      sec2: {
        title: "The role of wasm-bindgen",
        content: `<p>Because Wasm only understands numbers, passing a JavaScript string <code>"Hello"</code> into Rust requires allocating memory, copying UTF-8 bytes, and passing a pointer. Doing this manually is tedious and error-prone.</p><p><b>wasm-bindgen</b> automates this entirely: annotating a Rust function with <code>#[wasm_bindgen]</code> generates JavaScript glue code that serializes strings, objects, and arrays across the boundary invisibly.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Rust Source (lib.rs)", lines: ["#[wasm_bindgen]", "pub fn greet(name: &str) -> String {", "  format!('Hello, {}!', name)", "}"] },
          { title: "wasm-pack compiler", lines: ["Compiles Rust to .wasm", "Generates pkg/my_lib.js glue", "Generates pkg/my_lib.d.ts"] },
          { title: "JavaScript Usage", lines: ["import { greet } from './pkg';", "console.log(greet('Ada'));", "Clean, transparent string call!"] }
        ]
      },
      sec3: {
        title: "Tracing Rust to Wasm compilation",
        content: `<p>Trace how wasm-pack compiles and packages a Rust crate for web consumption.</p>`,
      },
      trace: {
        code: [
          "1. Cargo.toml declares: [lib] crate-type = ['cdylib']",
          "2. Developer executes: wasm-pack build --target web",
          "3. rustc compiles Rust code to WebAssembly target: wasm32-unknown-unknown",
          "4. wasm-opt runs binary optimization passes (stripping dead code)",
          "5. Generated /pkg directory contains ready-to-use ES module"
        ],
        steps: [
          { line: 0, vars: { crate_type: "C dynamic library target" } },
          { line: 2, vars: { target: "wasm32 compilation target selected" } },
          { line: 3, vars: { optimization: "wasm-opt minimizes binary size" } },
          { line: 4, vars: { output: "npm-compatible package emitted" } }
        ]
      },
      practiceIntro: "Test your understanding of C and Rust WebAssembly compilation toolchains.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The LLVM-based compiler toolchain used to port C/C++ to Wasm is <0>.",
          "The one-stop tool used to build and package Rust WebAssembly projects is wasm-<1>.",
          "The Rust macro that exposes functions to JavaScript is #[wasm_<2>]."
        ],
        blanks: [
          { a: ["Emscripten"], why: "Emscripten compiles C/C++." },
          { a: ["pack"], why: "wasm-pack builds Rust Wasm packages." },
          { a: ["bindgen"], why: "wasm-bindgen generates JS bindings." }
        ]
      },
      win: "You can compile C/C++ and Rust applications into optimized WebAssembly modules with automated JavaScript bindings.",
      nextTasks: [
        "Initialize a new Rust library with wasm-pack new my-wasm-lib and inspect the generated code.",
        "Compile a simple C program with emcc to generate an HTML/Wasm demo.",
        "Inspect the TypeScript declarations (.d.ts) generated by wasm-bindgen."
      ],
      primarySource: "The Rust and WebAssembly Book: *wasm-pack and wasm-bindgen* (rustwasm.github.io/docs/book).",
      quiz: [
        {
          q: "Why is Rust exceptionally well-suited for compiling to WebAssembly?",
          a: [
            "It has no garbage collector, zero-cost abstractions, predictable memory usage, and first-class official compiler target support",
            "It is the only language that supports HTML",
            "Rust code compiles directly to CSS",
            "Rust code cannot have any logic errors"
          ],
          c: 0,
          why: "Rust's lack of runtime GC and minimal runtime footprint produces tiny, fast, predictable Wasm binaries."
        },
        {
          q: "What is the primary role of 'wasm-bindgen' in a Rust Wasm project?",
          a: [
            "It automatically generates JavaScript and WebAssembly glue code to allow seamless passing of rich types (strings, objects) across the boundary",
            "It converts Rust code into Python",
            "It hosts the Wasm binary on the AWS cloud",
            "It encrypts the browser window"
          ],
          c: 0,
          why: "wasm-bindgen bridges the low-level numeric Wasm interface with rich high-level JavaScript objects and strings."
        },
        {
          q: "What does the Emscripten compiler (emcc) simulate to allow complex legacy C++ software to run in browsers?",
          a: [
            "A complete virtual POSIX environment, including virtual in-memory filesystems (MEMFS) and OpenGL-to-WebGL translation",
            "A physical Intel CPU chip",
            "A Windows 95 desktop interface",
            "A physical hard drive controller"
          ],
          c: 0,
          why: "Emscripten simulates POSIX filesystems, threads, and graphics APIs so legacy desktop C++ code runs unchanged in browsers."
        },
        {
          q: "What optimizer tool is automatically executed by wasm-pack to minimize .wasm binary size?",
          a: [
            "wasm-opt",
            "webpack",
            "gzip",
            "uglify-js"
          ],
          c: 0,
          why: "wasm-opt (from Binaryen) performs dead-code elimination, inlining, and opcode compression on Wasm binaries."
        }
      ]
    },
    {
      n: 6,
      id: "memory-management-and-strings",
      title: "Complex Types & Memory Management",
      topic: "Compiling Systems Languages (Rust/C)",
      anim: "LayersOrbit",
      lede: "How do you pass a string or JSON object to Wasm when it only understands numbers? Master pointers, allocations, and deallocation.",
      winShort: "Pass strings and byte buffers across the JS-Wasm boundary using memory pointers and prevent memory leaks",
      missionLink: "Master low-level data marshaling and manual memory lifecycle management",
      sec1: {
        title: "The string challenge: Everything is a number",
        content: `<p>WebAssembly functions can only accept and return <code>i32</code>, <code>i64</code>, <code>f32</code>, and <code>f64</code>. It has no native concept of a string, array, or object. So how does <code>greet("Alice")</code> work?</p><p>A string in Wasm is represented as <b>two numbers</b>:</p><ol><li>A <b>pointer (offset):</b> The 32-bit memory address where the string's bytes begin in linear memory.</li><li>A <b>length:</b> The number of UTF-8 bytes in the string.</li></ol>`,
        keyIdea: "Strings and buffers are passed to Wasm as a memory pointer (offset address) and a length."
      },
      predict: {
        q: "If JavaScript allocates a buffer inside Wasm linear memory and passes it to Wasm, who is responsible for freeing that memory?",
        a: [
          "The developer must explicitly manage allocation and deallocation: JavaScript's garbage collector cannot free Wasm linear memory",
          "JavaScript's garbage collector automatically cleans up Wasm memory",
          "The operating system reclaims it after 5 seconds",
          "Wasm memory is read-only and cannot be freed"
        ],
        c: 0,
        why: "Wasm linear memory is manually managed; objects allocated inside it must be freed explicitly to prevent memory leaks."
      },
      sec2: {
        title: "The allocation lifecycle: malloc and free",
        content: `<p>To pass data from JavaScript into Wasm without bindgen abstractions:</p><ol><li>Wasm exports an allocation helper: <code>alloc(size)</code> (which calls Rust/C <code>malloc</code>).</li><li>JavaScript calls <code>const ptr = instance.exports.alloc(byteLength)</code>.</li><li>JavaScript writes the UTF-8 bytes into <code>new Uint8Array(memory.buffer, ptr, byteLength)</code>.</li><li>Wasm processes the data at <code>ptr</code>.</li><li>JavaScript calls <code>instance.exports.dealloc(ptr, byteLength)</code> to prevent memory leaks.</li></ol>`,
      },
      diagram: {
        boxes: [
          { title: "1. JS Allocation", lines: ["const ptr = exports.alloc(len)", "Gets free address in Wasm heap"] },
          { title: "2. Write Bytes", lines: ["TextEncoder().encodeInto()", "Writes bytes into memory.buffer at ptr"] },
          { title: "3. Deallocation", lines: ["exports.dealloc(ptr, len)", "Frees memory in Wasm allocator"] }
        ]
      },
      sec3: {
        title: "Tracing string encoding and decoding across boundaries",
        content: `<p>Trace how TextEncoder and TextDecoder bridge strings across the linear memory boundary.</p>`,
      },
      trace: {
        code: [
          "const text = 'Hello WebAssembly';",
          "const bytes = new TextEncoder().encode(text); // 17 bytes",
          "const ptr = instance.exports.allocate(bytes.length); // e.g. address 1024",
          "new Uint8Array(memory.buffer, ptr, bytes.length).set(bytes);",
          "const outPtr = instance.exports.uppercase(ptr, bytes.length);",
          "const result = new TextDecoder().decode(new Uint8Array(memory.buffer, outPtr, bytes.length));"
        ],
        steps: [
          { line: 1, vars: { encoded: "17 UTF-8 bytes in JS" } },
          { line: 2, vars: { pointer: "Memory allocated at offset 1024" } },
          { line: 4, vars: { wasm_transform: "Wasm processes bytes at offset 1024" } },
          { line: 5, vars: { decoded: "Result decoded back to JS string: 'HELLO WEBASSEMBLY'" } }
        ]
      },
      practiceIntro: "Test your understanding of manual memory allocation and string marshaling.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A string in Wasm is represented by a memory <0> and a length.",
          "The browser API used to encode JS strings into UTF-8 bytes is Text<1>.",
          "Failing to deallocate memory allocated in Wasm causes a memory <2>."
        ],
        blanks: [
          { a: ["pointer"], why: "Pointers point to memory offsets." },
          { a: ["Encoder"], why: "TextEncoder produces UTF-8 byte arrays." },
          { a: ["leak"], why: "Unfreed linear memory leaks permanently." }
        ]
      },
      win: "You understand how complex data types are passed across the boundary and can manage manual allocations safely.",
      nextTasks: [
        "Write an allocation and deallocation helper in WAT or C that exposes malloc and free.",
        "Implement a round-trip string uppercase function using TextEncoder and TextDecoder.",
        "Inspect memory leak behavior by repeatedly allocating memory without calling dealloc."
      ],
      primarySource: "MDN Web Docs: *Passing strings to WebAssembly*.",
      quiz: [
        {
          q: "Why can't you pass a JavaScript string directly to a WebAssembly function like 'instance.exports.greet(\"Ada\")'?",
          a: [
            "Core WebAssembly only understands numeric primitive types; strings must be marshaled as a memory pointer and byte length",
            "Strings are not supported on the web platform",
            "Wasm only accepts emojis",
            "Because JavaScript strings are always encrypted"
          ],
          c: 0,
          why: "Wasm has no string type; strings are stored as raw bytes in linear memory referenced by numeric pointers."
        },
        {
          q: "What standard browser API encodes a JavaScript string into a Uint8Array of UTF-8 bytes?",
          a: [
            "TextEncoder",
            "JSON.stringify",
            "String.toBytes()",
            "Buffer.from()"
          ],
          c: 0,
          why: "new TextEncoder().encode() is the native browser API for converting strings into UTF-8 byte arrays."
        },
        {
          q: "What happens if JavaScript continuously allocates buffers in Wasm memory without deallocating them?",
          a: [
            "Wasm linear memory expands continuously until browser memory is exhausted, causing a memory leak and crash",
            "The browser garbage collector frees them automatically after each function call",
            "The Wasm module rewrites the memory automatically",
            "Nothing, memory automatically resets to zero"
          ],
          c: 0,
          why: "Wasm linear memory is not managed by the V8 garbage collector; manual deallocation is mandatory."
        },
        {
          q: "What is a 'pointer' in the context of WebAssembly linear memory?",
          a: [
            "An integer (i32) representing the byte offset index in the linear memory ArrayBuffer where data begins",
            "The physical coordinates of the user's mouse cursor",
            "A reference to an HTML DOM button",
            "A URL link to an external website"
          ],
          c: 0,
          why: "Pointers in 32-bit WebAssembly are 32-bit integers specifying the start index of data in linear memory."
        }
      ]
    },
    {
      n: 7,
      id: "simd-threads-and-performance",
      title: "High Performance: SIMD & Web Workers",
      topic: "Wasm Beyond the Browser & WASI",
      anim: "Bars",
      lede: "Unlock the full power of modern CPU silicon: process 4 or 8 numbers simultaneously with SIMD and run parallel threads with Web Workers.",
      winShort: "Leverage WebAssembly SIMD vectorization and multithread with Web Workers and SharedArrayBuffer",
      missionLink: "Achieve maximum floating-point and media throughput on modern multi-core devices",
      sec1: {
        title: "SIMD: Single Instruction, Multiple Data",
        content: `<p>Standard CPU instructions process one number at a time (Scalar arithmetic). Modern CPU hardware (Intel SSE/AVX, ARM NEON) features <b>vector registers (128-bit)</b> that can perform arithmetic across multiple values in a single hardware cycle.</p><p><b>WebAssembly Fixed-width SIMD</b> introduces the <code>v128</code> type. A single <code>i32x4.add</code> instruction adds four 32-bit integers simultaneously, delivering immediate <b>2x to 8x speedups</b> for image filters, matrix math, physics, and machine learning.</p>`,
        keyIdea: "Fixed-width SIMD (v128) processes four 32-bit floats or integers in a single CPU cycle."
      },
      predict: {
        q: "How many 32-bit floating point numbers can a single 128-bit Wasm SIMD vector hold?",
        a: [
          "4 (128 bits divided by 32 bits = 4 parallel numbers)",
          "16",
          "2",
          "1"
        ],
        c: 0,
        why: "A 128-bit vector register holds exactly four 32-bit floats (f32x4) or integers (i32x4)."
      },
      sec2: {
        title: "Multithreading with Web Workers and SharedArrayBuffer",
        content: `<p>By default, WebAssembly runs on the browser's main thread. If you run a 5-second computation, the UI freezes.</p><p>To achieve true parallel multithreading, you spawn <b>Web Workers</b> and share a single <code>WebAssembly.Memory</code> instance backed by a <b>SharedArrayBuffer</b>. Multiple worker threads execute compiled Wasm code across different CPU cores while sharing the same memory space, using atomic instructions (<code>i32.atomic.rmw.add</code>) to prevent race conditions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "SharedArrayBuffer Memory", lines: ["Shared linear memory pool", "Atomic instructions (Atomics.wait/notify)", "Zero inter-thread copying"] },
          { title: "Web Worker 1 (Core 1)", lines: ["Wasm Instance 1", "Renders Top Half of Image"] },
          { title: "Web Worker 2 (Core 2)", lines: ["Wasm Instance 2", "Renders Bottom Half of Image"] }
        ]
      },
      sec3: {
        title: "Tracing SIMD vector arithmetic",
        content: `<p>Trace how a SIMD instruction transforms four vector pairs simultaneously.</p>`,
      },
      trace: {
        code: [
          "Vector A: [ 10,  20,  30,  40 ] (128-bit register)",
          "Vector B: [  1,   2,   3,   4 ] (128-bit register)",
          "Execute: f32x4.add in a single hardware cycle",
          "Result:   [ 11,  22,  33,  44 ] (128-bit register)"
        ],
        steps: [
          { line: 0, vars: { vector_a: "4 float numbers packed in 128 bits" } },
          { line: 1, vars: { vector_b: "4 float numbers packed in 128 bits" } },
          { line: 2, vars: { hardware_execution: "Hardware ARM NEON or Intel AVX instruction fired" } },
          { line: 3, vars: { result: "All 4 additions finish in 1 CPU cycle" } }
        ]
      },
      practiceIntro: "Test your understanding of SIMD vectorization and multithreading.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The vector processing acronym that executes one instruction across multiple values is <0>.",
          "The 128-bit vector data type in WebAssembly is <1>.",
          "To share Wasm linear memory across Web Workers, backing memory must be a <2>ArrayBuffer."
        ],
        blanks: [
          { a: ["SIMD"], why: "Single Instruction Multiple Data." },
          { a: ["v128"], why: "v128 represents 128-bit vector types." },
          { a: ["Shared"], why: "SharedArrayBuffer allows multi-threaded shared memory." }
        ]
      },
      win: "You can accelerate media and compute algorithms with SIMD vectorization and scale workloads across multiple CPU cores with Web Workers.",
      nextTasks: [
        "Check browser SIMD feature support using WebAssembly.validate() with a tiny SIMD module.",
        "Configure cross-origin isolation headers (COOP and COEP) to enable SharedArrayBuffer in your server.",
        "Benchmark a matrix multiplication algorithm with and without SIMD vectorization."
      ],
      primarySource: "W3C WebAssembly: *Fixed-width SIMD Specification*.",
      quiz: [
        {
          q: "What is the primary performance benefit of WebAssembly SIMD (Single Instruction, Multiple Data)?",
          a: [
            "It allows the CPU to perform the same mathematical operation on multiple numbers simultaneously in a single clock cycle",
            "It automatically moves calculations to remote cloud servers",
            "It eliminates all memory allocation overhead",
            "It compresses JavaScript files by 80%"
          ],
          c: 0,
          why: "SIMD leverages CPU vector units to compute across 4, 8, or 16 values in parallel in one cycle."
        },
        {
          q: "What security headers must a web server provide to enable 'SharedArrayBuffer' for multithreaded Wasm?",
          a: [
            "Cross-Origin-Opener-Policy (COOP) and Cross-Origin-Embedder-Policy (COEP)",
            "Content-Security-Policy: default-src *",
            "Access-Control-Allow-Origin: *",
            "Strict-Transport-Security"
          ],
          c: 0,
          why: "Post-Spectre security requirements mandate COOP and COEP cross-origin isolation before SharedArrayBuffer is unlocked."
        },
        {
          q: "How do multiple Web Workers running Wasm cooperate without data races when modifying shared memory?",
          a: [
            "Using atomic memory instructions (such as i32.atomic.rmw.add) and synchronization primitives (Atomics.wait/notify)",
            "By taking turns every 10 seconds",
            "By sending each other Slack messages",
            "By restarting the browser window"
          ],
          c: 0,
          why: "Atomic operations guarantee thread-safe read-modify-write cycles without race conditions on shared memory."
        },
        {
          q: "Why should heavy WebAssembly computations be offloaded from the main browser thread to a Web Worker?",
          a: [
            "To prevent long-running computations from blocking the UI thread and freezing user interactions or dropping frames",
            "Because WebAssembly cannot run on the main thread",
            "Because Web Workers run with administrator privileges",
            "Because Web Workers do not consume battery power"
          ],
          c: 0,
          why: "Offloading CPU-heavy Wasm work to Web Workers keeps the main JavaScript thread responsive and smooth."
        }
      ]
    },
    {
      n: 8,
      id: "wasi-and-server-side-wasm",
      title: "Beyond the Browser: WASI & Server-Side Wasm",
      topic: "Wasm Beyond the Browser & WASI",
      anim: "Globe",
      lede: "'If WASM + WASI had existed in 2008, we wouldn't have needed to create Docker' — Solomon Hykes (co-founder of Docker). Discover serverless Wasm.",
      winShort: "Explain the WebAssembly System Interface (WASI) and run standalone Wasm binaries with Wasmtime and Node.js",
      missionLink: "Deploy ultra-lightweight, sandboxed microservices and edge compute functions using WASI",
      sec1: {
        title: "WebAssembly outside the browser",
        content: `<p>WebAssembly was designed for browsers, but its core properties—near-native speed, compact size, instant startup (&lt;1ms), and capability-based security sandboxing—make it an extraordinary runtime for <b>cloud servers and edge compute</b>.</p><p>Docker containers require bundling an entire mini-Linux operating system (megabytes or gigabytes in size). A server-side Wasm module is typically a few hundred kilobytes, starts in microseconds, and consumes almost zero idle RAM.</p>`,
        keyIdea: "Server-side WebAssembly provides sub-millisecond cold starts and sandboxed execution with zero OS container bloat."
      },
      predict: {
        q: "What was missing that prevented standard WebAssembly from running standalone on a server outside the browser?",
        a: [
          "A standardized system interface for file I/O, networking, and system clocks (WASI)",
          "Browsers refused to allow Wasm files to be exported",
          "Server CPUs cannot execute binary bytecode",
          "Server motherboards lack WebAssembly chips"
        ],
        c: 0,
        why: "In browsers, JS supplies host APIs; running standalone on servers requires a standard system call interface (WASI)."
      },
      sec2: {
        title: "WASI: WebAssembly System Interface",
        content: `<p>The <b>WebAssembly System Interface (WASI)</b> defines a modular, standard collection of POSIX-like system APIs: reading files, querying clocks, and generating random numbers.</p><p>Crucially, WASI uses <b>capability-based security</b>: a WASI module has zero access to files by default. The host runtime (like <b>Wasmtime</b>, <b>Wasmer</b>, or Node.js) must explicitly grant access to specific directories (e.g. <code>wasmtime run --dir=/tmp app.wasm</code>).</p>`,
      },
      diagram: {
        boxes: [
          { title: "Standalone Wasm Binary", lines: ["Compiled Rust / C / Go app", "No bundled Linux OS!", "Size: 200KB"] },
          { title: "WASI System Interface", lines: ["Capability-based security", "Sandboxed file / network access", "Standardized POSIX calls"] },
          { title: "Host Runtime", lines: ["Wasmtime / Wasmer / Node.js", "Sub-millisecond startup", "Runs on Edge / Cloud / Serverless"] }
        ]
      },
      sec3: {
        title: "Tracing standalone WASI execution with Wasmtime",
        content: `<p>Trace how a standalone Wasm binary executes securely via Wasmtime with pre-opened directory capabilities.</p>`,
      },
      trace: {
        code: [
          "1. Developer compiles Rust CLI app: cargo build --target wasm32-wasi",
          "2. Operator runs: wasmtime run --dir=./data app.wasm",
          "3. App attempts to read './data/config.json' -> GRANTED by capability",
          "4. App attempts to read '/etc/passwd' -> BLOCKED: Capability denied by WASI sandbox!",
          "5. Process executes and exits cleanly with exit code 0"
        ],
        steps: [
          { line: 0, vars: { target: "wasm32-wasi compilation target" } },
          { line: 1, vars: { permissions: "Explicit capability granted for ./data only" } },
          { line: 3, vars: { security_check: "Attempted file traversal rejected at sandbox layer" } },
          { line: 4, vars: { safe_exit: "Untrusted code executes safely" } }
        ]
      },
      practiceIntro: "Test your understanding of WASI and server-side WebAssembly runtimes.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The standardized system interface for WebAssembly outside browsers is <0>.",
          "A popular standalone WebAssembly runtime by the Bytecode Alliance is Wasm<1>.",
          "WASI security where access to files must be explicitly pre-granted is <2>-based security."
        ],
        blanks: [
          { a: ["WASI"], why: "WebAssembly System Interface." },
          { a: ["time"], why: "Wasmtime is a leading standalone runtime." },
          { a: ["capability"], why: "Capability-based security avoids ambient authority." }
        ]
      },
      win: "You understand how WASI enables server-side WebAssembly and why lightweight Wasm runtimes are revolutionizing edge compute.",
      nextTasks: [
        "Install wasmtime (curl https://wasmtime.dev/install.sh | bash) and run a hello-world Wasm binary.",
        "Compile a Rust application targeting wasm32-wasi and execute it with Node.js wasi module.",
        "Compare startup latency between a Docker Alpine container (200ms) vs a Wasmtime binary (1ms)."
      ],
      primarySource: "Bytecode Alliance: *Standardizing WASI: The WebAssembly System Interface* (bytecodealliance.org).",
      quiz: [
        {
          q: "What is WASI (WebAssembly System Interface)?",
          a: [
            "A standardized set of modular system APIs allowing WebAssembly to access files, clocks, and system resources securely outside browsers",
            "A web design layout framework",
            "A protocol for connecting Bluetooth keyboards to computers",
            "A CSS animation preprocessor"
          ],
          c: 0,
          why: "WASI provides portable, sandboxed operating system abstractions for standalone WebAssembly runtimes."
        },
        {
          q: "Why are edge compute platforms (like Cloudflare Workers and Fastly Compute) adopting WebAssembly over Docker containers?",
          a: [
            "Wasm modules start in under 1 millisecond with minimal memory overhead, eliminating container cold starts",
            "Docker is banned in international cloud datacenters",
            "Wasm does not require electricity to run",
            "Docker cannot execute Python code"
          ],
          c: 0,
          why: "Wasm provides instant sub-millisecond cold starts and high density, running thousands of tenants on a single server."
        },
        {
          q: "What does 'capability-based security' mean in the context of WASI?",
          a: [
            "The program has zero access to files or network by default; specific directory and socket capabilities must be explicitly granted by the host",
            "The program can only run if the user has a capability license key",
            "The CPU must have hardware capability flags enabled in the BIOS",
            "The program is allowed to do anything without restriction"
          ],
          c: 0,
          why: "Capability-based security eliminates ambient authority: access to resources is denied unless explicitly pre-opened by the runtime."
        },
        {
          q: "Which standalone WebAssembly runtime is maintained by the Bytecode Alliance (Mozilla, Fastly, Intel, Microsoft)?",
          a: [
            "Wasmtime",
            "Node.js",
            "V8 Engine",
            "VirtualBox"
          ],
          c: 0,
          why: "Wasmtime is the flagship open-source standalone WASI runtime developed by the Bytecode Alliance."
        }
      ]
    }
  ]
};
