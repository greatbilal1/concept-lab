"use strict";

module.exports = {
  id: "nodejs-backend",
  title: "Node.js & Backend JavaScript",
  num: 102,
  emoji: "🟢",
  desc: "Build scalable backend services using event-driven, non-blocking I/O in JavaScript.",
  mission: `# Mission — Node.js & Backend JavaScript

## Why this course exists

JavaScript began as a client-side scripting language in web browsers. Node.js brought JavaScript to servers, combining Google's high-speed V8 engine with libuv, a C library providing an asynchronous, event-driven I/O loop. Unlike multi-threaded servers (such as Apache or traditional Java servlets) that allocate a heavy thread per connection, Node.js handles thousands of concurrent network connections on a single thread. This course demystifies the Node.js event loop, streams, native HTTP modules, middleware design, and production scalability.

## What the learner can do at the end

- Explain the architecture of the V8 engine, libuv, and the six phases of the Node.js event loop.
- Choose appropriately between CommonJS (require) and ES Modules (import), configuring package.json smoothly.
- Work with binary data using Buffers and manipulate files asynchronously via fs/promises.
- Stream massive files and network payloads using readable, writable, and transform streams without exhausting RAM.
- Construct native HTTP servers and route requests cleanly without external dependencies.
- Build production-ready REST services using Express and the composable middleware pattern.
- Manage database connections via connection pools to prevent socket starvation.
- Handle unhandled rejections, monitor memory leaks, and utilize the cluster module or PM2 for multi-core scaling.

## What this course is NOT

- Not a frontend browser JavaScript course (covered in JavaScript Fundamentals).
- Not a generic HTTP/REST theoretical overview (covered in HTTP and REST APIs & JSON).
- Not a tutorial for a single ORM (covered in ORMs and Database Design).

## Success looks like

When a backend service experiences latency spikes or memory bloat under high concurrency, the learner diagnoses whether the event loop is blocked, a stream backpressure is unhandled, or a database connection pool is saturated in under five minutes.
`,
  notes: `# Notes — Node.js & Backend JavaScript

## Decisions
- Group into four themes: Runtime Architecture, Streams & Buffers, HTTP & Middleware, and Production & Scaling.
- Ground explanations in libuv thread pool mechanics, single-threaded concurrency trade-offs, and memory backpressure.
`,
  resources: `# Resources — Node.js & Backend JavaScript

## Knowledge (primary sources)
- Official Node.js Documentation (nodejs.org/docs).
- *Node.js Design Patterns* by Mario Casciaro and Luciano Mammino (Packt).
- *Distributed Systems with Node.js* by Thomas Hunter II (O'Reilly).
- Node.js Diagnostic Guides and Event Loop Explanations (nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick).

## Wisdom
- The single thread in Node.js is its superpower and its Achilles' heel: I/O is blazing fast, but a single CPU-heavy computation freezes every user on the server. Never block the event loop.
`,
  cheatsheetSections: [
    {
      title: "Event Loop & Timers",
      label: "Phases of asynchronous execution",
      code: `// Microtasks (run immediately after current operation):
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("promise microtask"));

// Macrotasks (run in event loop phases):
setTimeout(() => console.log("timer phase"), 0);
setImmediate(() => console.log("check phase"));`,
      lessonN: 1,
      lessonSlug: "event-loop-and-libuv",
      lessonTitle: "The Event Loop & Libuv Architecture"
    },
    {
      title: "Buffers & File System",
      label: "Asynchronous binary I/O",
      code: `import fs from "node:fs/promises";

// Allocating and converting binary buffers
const buf = Buffer.from("Hello Node.js", "utf-8");
console.log(buf.length, buf.toString("hex"));

// Safe non-blocking file read
const content = await fs.readFile("./config.json", "utf-8");`,
      lessonN: 3,
      lessonSlug: "file-system-and-buffers",
      lessonTitle: "File System, Buffers & Binary Data"
    },
    {
      title: "Streams & Backpressure",
      label: "Memory-efficient data pipelines",
      code: `import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import zlib from "node:zlib";

// Pipe readable file stream through gzip into destination
await pipeline(
  fs.createReadStream("large-input.log"),
  zlib.createGzip(),
  fs.createWriteStream("large-input.log.gz")
);`,
      lessonN: 4,
      lessonSlug: "streams-and-pipes",
      lessonTitle: "Streams & Piping Large Datasets"
    },
    {
      title: "Express & Middleware",
      label: "Composable request pipeline",
      code: `import express from "express";

const app = express();
app.use(express.json()); // parse JSON body

// Custom logging middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next(); // pass to next handler
});

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.listen(3000);`,
      lessonN: 6,
      lessonSlug: "express-and-middleware-pattern",
      lessonTitle: "Express & Middleware"
    }
  ],
  glossaryGroups: [
    {
      id: "runtime-architecture",
      title: "Node.js Runtime & Architecture",
      terms: [
        { term: "Event Loop", def: "The single-threaded coordination loop in libuv that continuously monitors, schedules, and executes callbacks across distinct phases.", lesson: 1, tags: ["architecture", "concurrency"] },
        { term: "Libuv", def: "The multi-platform C library that powers Node.js with an asynchronous event loop and a background worker thread pool for file and DNS operations.", lesson: 1, tags: ["libuv", "c"] },
        { term: "V8 Engine", def: "Google's open-source C++ JavaScript execution engine that compiles JS to native machine code and manages memory allocation.", lesson: 1, tags: ["engine", "v8"] },
        { term: "Microtask Queue", def: "High-priority queue containing process.nextTick and resolved Promise callbacks, drained immediately after the current operation finishes.", lesson: 1, tags: ["async"] }
      ]
    },
    {
      id: "buffers-and-streams",
      title: "Buffers, File I/O & Streams",
      terms: [
        { term: "Buffer", def: "A fixed-size chunk of raw binary memory allocated outside the V8 JavaScript heap, used for handling network packets and files.", lesson: 3, tags: ["binary", "memory"] },
        { term: "Stream", def: "An abstract interface for handling streaming data chunk-by-chunk, enabling processing of files larger than available RAM.", lesson: 4, tags: ["streams", "io"] },
        { term: "Backpressure", def: "A mechanism where a slow data consumer signals a fast data producer to pause reading until buffered memory drains.", lesson: 4, tags: ["performance", "streams"] },
        { term: "Transform Stream", def: "A duplex stream where output is computed from input (such as gzip compression, decryption, or hashing).", lesson: 4, tags: ["streams"] }
      ]
    },
    {
      id: "http-and-middleware",
      title: "HTTP Networking & Middleware",
      terms: [
        { term: "IncomingMessage", def: "The readable stream representing an incoming HTTP client request in Node.js, delivering headers, method, URL, and body chunks.", lesson: 5, tags: ["http", "network"] },
        { term: "ServerResponse", def: "The writable stream representing an outgoing HTTP response, used to set headers, status codes, and stream body data.", lesson: 5, tags: ["http", "network"] },
        { term: "Middleware", def: "A function in Express or similar frameworks with access to (req, res, next) that processes or alters requests in a sequential chain.", lesson: 6, tags: ["express", "patterns"] },
        { term: "Router", def: "An isolated instance of middleware and routes capable of performing routing functions as a mini-application.", lesson: 6, tags: ["routing"] }
      ]
    },
    {
      id: "production-scaling",
      title: "Production Scaling & Operations",
      terms: [
        { term: "Connection Pooling", def: "A cache of active database socket connections maintained to avoid the latency and overhead of establishing new handshakes per request.", lesson: 7, tags: ["database", "sockets"] },
        { term: "Cluster Module", def: "A built-in Node.js module that forks multiple worker processes sharing server ports to fully utilize multi-core CPU architectures.", lesson: 8, tags: ["scaling", "multicore"] },
        { term: "Worker Threads", def: "A Node.js module enabling execution of CPU-intensive JavaScript code on parallel background OS threads without blocking the main event loop.", lesson: 8, tags: ["threads", "concurrency"] },
        { term: "Graceful Shutdown", def: "The procedure of rejecting new incoming requests, allowing in-flight requests to complete, and closing database pools before process exit.", lesson: 8, tags: ["operations", "devops"] }
      ]
    }
  ],
  topics: [
    "The Node.js Runtime & Architecture",
    "Asynchronous I/O, Buffers & Streams",
    "HTTP Servers & REST APIs",
    "Database Integration & Production Practices"
  ],
  lessons: [
    {
      n: 1,
      id: "event-loop-and-libuv",
      title: "The Event Loop & Libuv Architecture",
      topic: "The Node.js Runtime & Architecture",
      anim: "Flow",
      lede: "Node.js runs JavaScript on a single thread while delegating I/O to operating system kernels and libuv thread pools.",
      winShort: "Explain the event loop phases and trace how asynchronous operations execute across queues",
      missionLink: "Prevent synchronous bottlenecks that freeze server throughput for all connected clients",
      sec1: {
        title: "Single thread, non-blocking execution",
        content: `<p>In traditional server platforms, every incoming request spawns an OS thread or worker process. If a thread waits 50ms for a database query, that entire thread sits idle while consuming 1–2MB of stack RAM.</p><p>Node.js runs on a <b>single main JavaScript thread</b>. When an I/O operation (reading a disk file, querying a database, or contacting an external API) is initiated, Node.js hands the request to the OS kernel or <b>libuv</b>'s background worker pool and immediately continues executing other JavaScript code.</p>`,
        keyIdea: "JavaScript runs on one thread; all blocking I/O is offloaded asynchronously to the operating system and libuv."
      },
      predict: {
        q: "What happens if a developer runs a CPU-intensive loop (like calculating 10 billion hashes) on the main Node.js thread?",
        a: [
          "The entire server halts: no other user requests or timer callbacks can be processed until the calculation finishes",
          "Node.js automatically moves the loop to a new CPU core in the background",
          "The loop runs asynchronously without affecting any other connected clients",
          "The operating system kills the Node.js process immediately for exceeding CPU quota"
        ],
        c: 0,
        why: "Because JavaScript execution is single-threaded, synchronous CPU computation blocks the event loop completely."
      },
      sec2: {
        title: "The six event loop phases",
        content: `<p>Libuv drives the event loop through distinct phases in a continuous circle:</p><ul><li><b>Timers:</b> Executes callbacks scheduled by <code>setTimeout()</code> and <code>setInterval()</code>.</li><li><b>Pending callbacks:</b> Executes I/O callbacks deferred from the previous cycle.</li><li><b>Idle / Prepare:</b> Internal libuv coordination.</li><li><b>Poll:</b> Retrieves new I/O events from the OS kernel; blocks here if idle.</li><li><b>Check:</b> Executes callbacks scheduled by <code>setImmediate()</code>.</li><li><b>Close callbacks:</b> Executes socket and handle close callbacks (e.g. <code>socket.on('close')</code>).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "1. Timers", lines: ["setTimeout()", "setInterval()"] },
          { title: "2. Poll Phase", lines: ["Incoming network data", "File system completions"] },
          { title: "3. Check Phase", lines: ["setImmediate()", "runs after poll completes"] },
          { title: "Microtasks", lines: ["process.nextTick() & Promises", "Drained immediately after ANY phase"] }
        ]
      },
      sec3: {
        title: "Tracing timer vs microtask resolution",
        content: `<p>Trace the exact execution order of synchronous code, microtasks, and event loop macrotasks.</p>`,
      },
      trace: {
        code: [
          "console.log('1: Sync');",
          "setTimeout(() => console.log('2: Timer (macrotask)'), 0);",
          "Promise.resolve().then(() => console.log('3: Promise (microtask)'));",
          "process.nextTick(() => console.log('4: nextTick (microtask)'));",
          "console.log('5: Sync');"
        ],
        steps: [
          { line: 0, vars: { stdout: "1: Sync" } },
          { line: 4, vars: { stdout: "5: Sync (Call stack empty, draining microtasks)" } },
          { line: 3, vars: { stdout: "4: nextTick (Highest priority microtask)" } },
          { line: 2, vars: { stdout: "3: Promise (Microtask queue drained)" } },
          { line: 1, vars: { stdout: "2: Timer (Event loop enters Timers phase)" } }
        ]
      },
      practiceIntro: "Test your understanding of the Node.js event loop and libuv.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The C library responsible for the event loop and thread pool in Node.js is <0>.",
          "High priority microtasks scheduled with process.<1> execute before promises.",
          "The event loop phase that runs setImmediate callbacks is the <2> phase."
        ],
        blanks: [
          { a: ["libuv"], why: "libuv provides cross-platform asynchronous I/O." },
          { a: ["nextTick"], why: "process.nextTick executes immediately after the current operation." },
          { a: ["check"], why: "The check phase executes setImmediate." }
        ]
      },
      win: "You understand how Node.js achieves high concurrency on a single thread and how microtasks and macrotasks are sequenced.",
      nextTasks: [
        "Run a small script scheduling setTimeout, setImmediate, and process.nextTick to verify execution order.",
        "Inspect the UV_THREADPOOL_SIZE environment variable and understand when background threads are used.",
        "Explain the difference between I/O-bound and CPU-bound workloads in Node.js architecture."
      ],
      primarySource: "Official Node.js Guide: *The Node.js Event Loop, Timers, and process.nextTick()*.",
      quiz: [
        {
          q: "What component in Node.js provides the asynchronous event loop and background thread pool?",
          a: [
            "libuv",
            "V8 Engine",
            "npm registry",
            "Express framework"
          ],
          c: 0,
          why: "libuv is the C library providing the event loop and asynchronous thread pool abstractions."
        },
        {
          q: "Why can Node.js handle 100,000 concurrent network connections on a single thread?",
          a: [
            "It uses non-blocking OS socket polling (epoll/kqueue) and only wakes up when events arrive",
            "It secretly compiles JavaScript into C++ multithreaded classes",
            "It compresses incoming HTTP requests into binary zip files",
            "It routes all network connections through local Redis instances"
          ],
          c: 0,
          why: "Operating system kernel notification facilities (epoll, kqueue) allow a single thread to monitor thousands of idle sockets."
        },
        {
          q: "When do Promise microtasks execute relative to event loop phases?",
          a: [
            "Immediately after the current synchronous operation finishes, before entering the next phase",
            "Only at the end of the entire application lifecycle",
            "Inside the Timers phase only",
            "In parallel on a separate background thread"
          ],
          c: 0,
          why: "The microtask queue is drained immediately whenever the JavaScript call stack becomes empty."
        },
        {
          q: "Which operations are offloaded to libuv's background thread pool rather than OS async sockets?",
          a: [
            "File system calls (fs) and DNS lookups (dns.lookup)",
            "TCP network incoming connections",
            "console.log statements",
            "Math.random() operations"
          ],
          c: 0,
          why: "Because file system operations lack universal non-blocking OS support, libuv uses worker threads for them."
        }
      ]
    },
    {
      n: 2,
      id: "modules-commonjs-and-esm",
      title: "Modules: CommonJS and ECMAScript Modules",
      topic: "The Node.js Runtime & Architecture",
      anim: "CodePulse",
      lede: "Node.js supports both historical CommonJS (require) and standard ECMAScript Modules (import). Learn how they interoperate.",
      winShort: "Configure package.json for ESM and navigate import/export interoperability smoothly",
      missionLink: "Modernize dependencies and prevent module loading syntax errors in server applications",
      sec1: {
        title: "Two module systems under one roof",
        content: `<p>For years, Node.js exclusively used <b>CommonJS</b> (<code>require()</code> and <code>module.exports</code>). In CommonJS, modules load synchronously at runtime. Variable exports are copied by value or reference at the moment of evaluation.</p><p>Modern JavaScript uses <b>ECMAScript Modules (ESM)</b> (<code>import</code> and <code>export</code>). ESM is static: imports are parsed and linked before code executes, enabling tree-shaking, static analysis, and top-level await.</p>`,
        keyIdea: "CommonJS loads synchronously at runtime; ESM resolves statically ahead of execution."
      },
      predict: {
        q: "What happens if you use top-level 'await' in a CommonJS (.cjs) module without wrapping it in an async function?",
        a: [
          "SyntaxError: await is only valid in async functions and the top level of ES modules",
          "Node.js executes it without issue",
          "The module is automatically upgraded to ESM",
          "The Node.js runtime crashes with a Segmentation Fault"
        ],
        c: 0,
        why: "Top-level await is an ESM feature; CommonJS strictly requires await inside an async function."
      },
      sec2: {
        title: "Configuring ESM in package.json",
        content: `<p>To enable standard ESM across an entire project, set <code>"type": "module"</code> in your <code>package.json</code>. All <code>.js</code> files will then be treated as ES modules.</p><p>You can also use explicit file extensions: <code>.mjs</code> for ES Modules, and <code>.cjs</code> for CommonJS modules.</p>`,
      },
      diagram: {
        boxes: [
          { title: "CommonJS (.cjs)", lines: ["const fs = require('fs');", "module.exports = { ... };", "Synchronous runtime load"] },
          { title: "package.json config", lines: ["{ 'type': 'module' }", "Declares ESM default for .js"] },
          { title: "ESM (.mjs / .js)", lines: ["import fs from 'node:fs';", "export const config = { ... };", "Static linking & top-level await"] }
        ]
      },
      sec3: {
        title: "Tracing the module resolution lifecycle",
        content: `<p>Trace how Node.js loads native packages with the explicit node: protocol prefix.</p>`,
      },
      trace: {
        code: [
          "// package.json contains: { 'type': 'module' }",
          "import fs from 'node:fs/promises';",
          "const file = await fs.readFile('./package.json', 'utf-8');",
          "console.log('Package loaded successfully');"
        ],
        steps: [
          { line: 0, vars: { mode: "ES Module resolution active" } },
          { line: 1, vars: { import: "Resolved built-in node:fs/promises" } },
          { line: 2, vars: { top_level_await: "Non-blocking async read executed" } },
          { line: 3, vars: { stdout: "Package loaded successfully" } }
        ]
      },
      practiceIntro: "Test your knowledge of Node.js module systems and package resolution.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "In package.json, set type to <0> to enable standard ES imports.",
          "The file extension for explicit CommonJS modules in an ESM project is .<1>.",
          "Node.js recommends prefixing core built-in modules with <2>:."
        ],
        blanks: [
          { a: ["module"], why: "type: module enables ESM." },
          { a: ["cjs"], why: ".cjs denotes CommonJS." },
          { a: ["node"], why: "node: prefix guarantees resolving the built-in module." }
        ]
      },
      win: "You can configure and structure modern Node.js projects with ESM and avoid common interoperability pitfalls.",
      nextTasks: [
        "Create a package.json with 'type': 'module' and run a script using top-level await.",
        "Import a CommonJS package inside an ESM file and observe default import behavior.",
        "Inspect import.meta.url to calculate __dirname equivalents in ESM."
      ],
      primarySource: "Node.js Official Documentation: *Modules: ECMAScript modules*.",
      quiz: [
        {
          q: "How do you enable ECMAScript modules (import/export) for all .js files in a project?",
          a: [
            "Add 'type': 'module' to package.json",
            "Run node with the --experimental-esm flag on every invocation",
            "Install the esm package from npm",
            "Set the environment variable NODE_ENV=esm"
          ],
          c: 0,
          why: "Setting 'type': 'module' in package.json configures Node.js to interpret .js files as ESM."
        },
        {
          q: "Why is the 'node:' prefix recommended when importing built-in modules (e.g. import fs from 'node:fs')?",
          a: [
            "It unambiguously targets the native built-in module and avoids conflicts with third-party npm packages",
            "It encrypts the import statement during network transport",
            "It is required by the JavaScript language specification for all browsers",
            "It forces the module to run on the GPU"
          ],
          c: 0,
          why: "The node: protocol ensures that Node.js always loads the native core module rather than an installed npm module."
        },
        {
          q: "What replaces the CommonJS __dirname and __filename variables in an ES Module?",
          a: [
            "import.meta.url combined with fileURLToPath from node:url",
            "process.cwd()",
            "global.__dirname",
            "window.location.pathname"
          ],
          c: 0,
          why: "In ESM, import.meta.url provides the file URL, converted to a filesystem path via fileURLToPath."
        },
        {
          q: "Can an ES Module use top-level 'await' directly at the root of the file?",
          a: [
            "Yes, top-level await is natively supported in ES Modules",
            "No, await is strictly forbidden outside functions in all JavaScript variants",
            "Yes, but only if the file is named index.js",
            "No, it requires an external compiler like Babel"
          ],
          c: 0,
          why: "ES Modules natively support top-level await, allowing direct asynchronous setup before exporting."
        }
      ]
    },
    {
      n: 3,
      id: "file-system-and-buffers",
      title: "File System, Buffers & Binary Data",
      topic: "Asynchronous I/O, Buffers & Streams",
      anim: "Layers",
      lede: "Node.js handles raw binary data outside V8 memory using Buffers. Learn safe asynchronous file manipulation.",
      winShort: "Read, write, and manipulate binary data and files using Buffer and fs/promises",
      missionLink: "Process images, files, and network sockets without memory corruption or blocking I/O",
      sec1: {
        title: "What is a Buffer?",
        content: `<p>In standard browser JavaScript, strings handle text, but raw binary data (like images, network packets, or compressed archives) was historically awkward. Node.js introduced the global <b>Buffer</b> class.</p><p>A Buffer represents a fixed-size chunk of binary memory allocated outside the V8 heap in native C++ memory. Once allocated, its size cannot be changed.</p>`,
        keyIdea: "Buffers represent raw chunks of binary memory allocated outside the V8 JavaScript garbage collection heap."
      },
      predict: {
        q: "Why is 'Buffer.allocUnsafe(1024)' called 'unsafe'?",
        a: [
          "It does not zero-initialize the memory, meaning it may contain sensitive remnants of previous heap memory",
          "It crashes the server if the file is greater than 1024 bytes",
          "It exposes the computer to physical hard drive hardware damage",
          "It bypasses all operating system file permissions"
        ],
        c: 0,
        why: "allocUnsafe allocates memory without overwriting it with zeros; it is fast, but uninitialized memory could expose old data."
      },
      sec2: {
        title: "Modern file operations with fs/promises",
        content: `<p>Never use synchronous methods like <code>fs.readFileSync()</code> in a request handler because they lock the entire server. Always prefer the promise-based API in <code>node:fs/promises</code>.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Binary Source", lines: ["Network socket", "Disk file (PNG, PDF)", "Raw octet stream"] },
          { title: "Buffer (Native Memory)", lines: ["Buffer.from('hello', 'utf-8')", "Hex / Base64 / Binary bytes", "Fixed length in bytes"] },
          { title: "fs/promises API", lines: ["await fs.readFile()", "await fs.writeFile()", "await fs.mkdir()"] }
        ]
      },
      sec3: {
        title: "Tracing buffer encoding and allocation",
        content: `<p>Trace how a text string translates into byte representations inside a Node.js Buffer.</p>`,
      },
      trace: {
        code: [
          "const buf = Buffer.from('Node', 'utf-8');",
          "console.log(buf.length); // 4 bytes",
          "console.log(buf); // <Buffer 4e 6f 64 65>",
          "console.log(buf.toString('hex')); // '4e6f6465'"
        ],
        steps: [
          { line: 0, vars: { text: "'Node'", encoding: "utf-8" } },
          { line: 1, vars: { length: "4 bytes (1 byte per ASCII character)" } },
          { line: 2, vars: { hex_representation: "4e (N), 6f (o), 64 (d), 65 (e)" } },
          { line: 3, vars: { hex_output: "'4e6f6465'" } }
        ]
      },
      practiceIntro: "Test your understanding of binary buffers and file system APIs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The global class representing raw fixed-size binary data in Node.js is <0>.",
          "The modern asynchronous file system module in Node.js is node:fs/<1>.",
          "To safely allocate a buffer initialized with zeros, call Buffer.<2>(size)."
        ],
        blanks: [
          { a: ["Buffer"], why: "Buffer handles raw binary bytes." },
          { a: ["promises"], why: "node:fs/promises exposes clean async/await methods." },
          { a: ["alloc"], why: "Buffer.alloc safely zeros the memory." }
        ]
      },
      win: "You can manipulate binary files, convert between encodings (UTF-8, Base64, Hex), and write non-blocking file workflows.",
      nextTasks: [
        "Read a binary image file and convert its contents to a Base64 data URI string.",
        "Compare memory usage between reading a 500MB file with fs.readFile vs stream reading.",
        "Inspect Buffer.byteLength() vs string.length on strings with multi-byte emoji characters."
      ],
      primarySource: "Node.js Official Documentation: *Buffer* and *File System*.",
      quiz: [
        {
          q: "Why should 'fs.readFileSync' be strictly avoided in production server request handlers?",
          a: [
            "It completely blocks the single JavaScript thread, freezing all other concurrent user connections while waiting for disk I/O",
            "It corrupts data when reading files larger than 10MB",
            "It only works on Linux servers and fails on macOS or Windows",
            "It requires root administrative privileges"
          ],
          c: 0,
          why: "Synchronous file calls freeze the main event loop, preventing all concurrent requests from being processed."
        },
        {
          q: "What does 'Buffer.byteLength(\"🚀\")' return in UTF-8 encoding?",
          a: [
            "4 bytes",
            "1 byte",
            "2 bytes",
            "0 bytes"
          ],
          c: 0,
          why: "Emoji and special Unicode characters require multiple bytes (up to 4) in UTF-8 encoding."
        },
        {
          q: "How does 'Buffer.alloc(1024)' differ from 'Buffer.allocUnsafe(1024)'?",
          a: [
            "alloc fills the memory with zeros; allocUnsafe leaves uninitialized memory as-is for speed",
            "alloc only works with strings; allocUnsafe works with numbers",
            "alloc stores memory on the GPU; allocUnsafe stores memory on disk",
            "alloc is deprecated in modern Node.js versions"
          ],
          c: 0,
          why: "Buffer.alloc is zero-initialized and safe from data leaks; allocUnsafe is faster but contains whatever garbage was previously in memory."
        },
        {
          q: "Which method converts a Buffer into a Base64-encoded string?",
          a: [
            "buf.toString('base64')",
            "btoa(buf)",
            "buf.toBase64()",
            "JSON.stringify(buf)"
          ],
          c: 0,
          why: "The toString(encoding) method accepts 'base64', 'hex', 'utf-8', and other standard encodings."
        }
      ]
    },
    {
      n: 4,
      id: "streams-and-pipes",
      title: "Streams & Piping Large Datasets",
      topic: "Asynchronous I/O, Buffers & Streams",
      anim: "Flow",
      lede: "Never load gigabyte files into memory at once. Streams process data chunk-by-chunk with automatic backpressure control.",
      winShort: "Pipe data efficiently using stream.pipeline and manage backpressure across read and write operations",
      missionLink: "Prevent Out-Of-Memory (OOM) crashes when handling large file uploads and data exports",
      sec1: {
        title: "The problem with buffering everything",
        content: `<p>If a client uploads a 2GB video file and your server runs <code>await fs.readFile()</code>, Node.js attempts to allocate a 2GB contiguous buffer in RAM. If five clients upload simultaneously, the server crashes with <code>JavaScript heap out of memory</code>.</p><p><b>Streams</b> solve this by processing data in manageable chunks (typically 64KB). Data flows from the source (Readable) to the destination (Writable) continuously, keeping memory usage constant regardless of file size.</p>`,
        keyIdea: "Streams process data chunk by chunk, enabling constant memory usage even when handling gigabytes of data."
      },
      predict: {
        q: "What happens if a fast readable stream pumps data into a slow writable network socket faster than the client can download?",
        a: [
          "Unbounded chunks would pile up in RAM until the server runs out of memory, unless backpressure pauses reading",
          "The extra data is automatically deleted without warning",
          "The client's internet connection is forcibly boosted by the server",
          "The operating system drops the connection immediately"
        ],
        c: 0,
        why: "Without backpressure, buffering faster than the consumer can write exhausts available server RAM."
      },
      sec2: {
        title: "The four stream types & pipeline",
        content: `<p>Node.js defines four fundamental stream types:</p><ul><li><b>Readable:</b> Source of data (e.g. <code>fs.createReadStream</code>, HTTP incoming request).</li><li><b>Writable:</b> Destination for data (e.g. <code>fs.createWriteStream</code>, HTTP response).</li><li><b>Duplex:</b> Both readable and writable (e.g. TCP net socket).</li><li><b>Transform:</b> Duplex stream that modifies data as it passes through (e.g. <code>zlib.createGzip()</code>).</li></ul><p>Always use the promise-based <code>stream/promises.pipeline()</code> helper: it handles errors, cleans up file descriptors, and manages backpressure automatically.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Readable Stream", lines: ["fs.createReadStream()", "Emits 64KB chunks", "Pauses when write buffer full"] },
          { title: "Transform Stream", lines: ["zlib.createGzip()", "Compresses chunks on the fly", "Passes compressed data forward"] },
          { title: "Writable Stream", lines: ["fs.createWriteStream()", "Writes chunks to disk", "Emits 'drain' when buffer clears"] }
        ]
      },
      sec3: {
        title: "Tracing stream pipeline data flow",
        content: `<p>Trace how stream.pipeline coordinates data transfer with automatic error cleanup.</p>`,
      },
      trace: {
        code: [
          "import { pipeline } from 'node:stream/promises';",
          "import fs from 'node:fs';",
          "import zlib from 'node:zlib';",
          "await pipeline(",
          "  fs.createReadStream('raw.log'),",
          "  zlib.createGzip(),",
          "  fs.createWriteStream('raw.log.gz')",
          ");"
        ],
        steps: [
          { line: 3, vars: { pipeline: "Initialized with source, transform, destination" } },
          { line: 4, vars: { chunk_read: "Emits 64KB chunk from disk" } },
          { line: 5, vars: { gzip_transform: "Chunk compressed in memory" } },
          { line: 6, vars: { chunk_write: "Chunk written to raw.log.gz on disk" } }
        ]
      },
      practiceIntro: "Test your mastery of Node.js streams and backpressure mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A stream that can be read from is a <0> stream.",
          "The signal that instructs a fast producer to slow down is called <1>.",
          "The recommended method to safely chain and error-handle streams is stream/promises.<2>."
        ],
        blanks: [
          { a: ["Readable"], why: "Readable streams emit data." },
          { a: ["backpressure"], why: "Backpressure manages mismatched data rates." },
          { a: ["pipeline"], why: "pipeline ensures clean error handling and stream destruction." }
        ]
      },
      win: "You can stream large files and network payloads with constant, minimal memory footprint using stream pipelines.",
      nextTasks: [
        "Implement a script that compresses a large CSV file with zlib using stream.pipeline.",
        "Build a custom Transform stream that converts incoming text to uppercase line-by-line.",
        "Observe process.memoryUsage() before and during a streaming file transfer."
      ],
      primarySource: "Node.js Official Documentation: *Stream*.",
      quiz: [
        {
          q: "What is the primary danger of using readable.pipe(writable) instead of stream.pipeline()?",
          a: [
            "If an error occurs, .pipe() does not properly close or destroy the streams, leading to memory and file descriptor leaks",
            ".pipe() does not work with HTTPS connections",
            ".pipe() is 10 times slower than pipeline",
            ".pipe() is forbidden when running on Linux"
          ],
          c: 0,
          why: "Legacy .pipe() does not propagate errors across multi-stream chains, leaving streams open and leaking resources."
        },
        {
          q: "What is backpressure in the context of Node.js streams?",
          a: [
            "A flow-control mechanism where a slow writer signals a fast reader to pause sending chunks until the internal buffer drains",
            "A hardware sensor in the computer's CPU measuring thermal throttling",
            "A database index algorithm for sorting queries in reverse order",
            "A security technique for preventing DDoS attacks"
          ],
          c: 0,
          why: "Backpressure prevents fast producers from filling server RAM by pausing reads until write buffers drain."
        },
        {
          q: "Which stream type is zlib.createGzip()?",
          a: [
            "Transform Stream",
            "Readable Stream only",
            "Writable Stream only",
            "Buffer Stream"
          ],
          c: 0,
          why: "Transform streams accept data, compute a transformation on it (like compression), and emit the result."
        },
        {
          q: "What is the default buffer threshold (highWaterMark) for standard object-less Node.js streams?",
          a: [
            "64 KB (or 16 KB for standard Readable streams)",
            "1 GB",
            "512 bytes",
            "100 MB"
          ],
          c: 0,
          why: "Standard streams use 64KB (or 16KB) highWaterMark buffers to maintain high throughput with low memory usage."
        }
      ]
    },
    {
      n: 5,
      id: "native-http-and-request-handling",
      title: "Native HTTP Server & Request Handling",
      topic: "HTTP Servers & REST APIs",
      anim: "Globe",
      lede: "Understand what happens before Express: Node's native node:http module parses HTTP connections directly.",
      winShort: "Create an HTTP server from scratch using node:http and parse URLs, methods, and JSON bodies",
      missionLink: "Understand the raw HTTP engine underpinning every Node.js web framework",
      sec1: {
        title: "The node:http module",
        content: `<p>Before installing Express or Fastify, every Node.js web server builds upon the native <code>node:http</code> module. Calling <code>http.createServer((req, res) => { ... })</code> registers an event listener that fires whenever a client initiates an HTTP request.</p><p>Inside the callback, <code>req</code> is an instance of <code>http.IncomingMessage</code> (a Readable stream of the request body), and <code>res</code> is an instance of <code>http.ServerResponse</code> (a Writable stream for the response).</p>`,
        keyIdea: "The native HTTP request is a Readable stream; the response is a Writable stream."
      },
      predict: {
        q: "In native node:http, where is the POST request JSON body located when the (req, res) callback first fires?",
        a: [
          "It has not arrived yet: it must be collected asynchronously in chunks as req emits 'data' events",
          "It is automatically parsed into req.body as a JavaScript object",
          "It is stored in the req.query object",
          "It is automatically written to a temporary file in /tmp"
        ],
        c: 0,
        why: "Because req is a stream, the body data is in transit over the network and must be read chunk-by-chunk."
      },
      sec2: {
        title: "Parsing headers, URLs, and streaming bodies",
        content: `<p>To parse incoming JSON bodies natively, you accumulate chunks from <code>req</code> into an array of buffers, concatenate them upon the <code>'end'</code> event, and call <code>JSON.parse()</code>.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Incoming Request (req)", lines: ["req.method ('GET', 'POST')", "req.url ('/api/users')", "req.headers (Host, Content-Type)", "Readable stream body"] },
          { title: "Server Logic", lines: ["URL routing & validation", "Buffer.concat(chunks)", "JSON.parse(rawBody)"] },
          { title: "Outgoing Response (res)", lines: ["res.writeHead(200, headers)", "res.write(chunk)", "res.end()"] }
        ]
      },
      sec3: {
        title: "Tracing native HTTP server request lifecycle",
        content: `<p>Trace how a native HTTP server routes a request and sends a JSON response.</p>`,
      },
      trace: {
        code: [
          "import http from 'node:http';",
          "const server = http.createServer((req, res) => {",
          "  if (req.method === 'GET' && req.url === '/api/status') {",
          "    res.writeHead(200, { 'Content-Type': 'application/json' });",
          "    res.end(JSON.stringify({ status: 'ok' }));",
          "  }",
          "});",
          "server.listen(3000);"
        ],
        steps: [
          { line: 1, vars: { server: "Listening on port 3000" } },
          { line: 2, vars: { request: "method='GET', url='/api/status'" } },
          { line: 3, vars: { headers_sent: "HTTP/1.1 200 OK, application/json" } },
          { line: 4, vars: { response_ended: "Socket flushed and closed" } }
        ]
      },
      practiceIntro: "Test your understanding of native Node.js HTTP servers and stream handling.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The native Node module used to build HTTP servers is node:<0>.",
          "In the server callback, req is an instance of Incoming<1>.",
          "To finalize and send an HTTP response, you must invoke res.<2>()."
        ],
        blanks: [
          { a: ["http"], why: "node:http provides HTTP primitives." },
          { a: ["Message"], why: "http.IncomingMessage represents the request." },
          { a: ["end"], why: "res.end() flushes the buffer and closes the response stream." }
        ]
      },
      win: "You can build lightweight HTTP servers without dependencies and understand stream-based body collection.",
      nextTasks: [
        "Build a native node:http server that parses POST request bodies without any npm packages.",
        "Implement basic routing for /health and /echo endpoints using req.url and req.method.",
        "Set custom security headers (X-Content-Type-Options, Content-Security-Policy) using res.setHeader."
      ],
      primarySource: "Node.js Official Documentation: *HTTP* (nodejs.org/api/http.html).",
      quiz: [
        {
          q: "Why is 'req.body' undefined by default in native node:http without middleware or manual collection?",
          a: [
            "Because HTTP request bodies stream across the network in chunks and must be read asynchronously",
            "Because Node.js does not support JSON parsing",
            "Because POST requests are forbidden by the W3C specification in native Node",
            "Because the client must send a special __NODE_BODY__ header"
          ],
          c: 0,
          why: "HTTP bodies are streams; Node does not buffer or parse the body into memory automatically."
        },
        {
          q: "What happens if you do not call 'res.end()' in an HTTP request handler?",
          a: [
            "The client continues waiting for more data until its socket times out (the request hangs)",
            "Node.js automatically sends a 404 response after 100 milliseconds",
            "The server process terminates immediately with an exit code 1",
            "The response is automatically converted into a WebSocket"
          ],
          c: 0,
          why: "res is a writable stream; until res.end() is called, the client keeps the connection open waiting for completion."
        },
        {
          q: "Which method sends the HTTP status code and header object simultaneously?",
          a: [
            "res.writeHead(status, headers)",
            "res.sendStatus(status)",
            "res.setHeaderAll(headers)",
            "res.status(status).json()"
          ],
          c: 0,
          why: "res.writeHead(statusCode, [statusMessage], [headers]) sets the status code and headers at once."
        },
        {
          q: "How should you protect an HTTP server from denial-of-service via huge incoming POST payload streams?",
          a: [
            "Track bytes received in 'data' chunks and destroy the socket if it exceeds a maximum size limit (e.g. 1MB)",
            "Set the maxPayload property on package.json",
            "Restart the server every 10 minutes",
            "Limit the server to only accept GET requests"
          ],
          c: 0,
          why: "Tracking chunk lengths and aborting oversized uploads prevents malicious clients from exhausting memory."
        }
      ]
    },
    {
      n: 6,
      id: "express-and-middleware-pattern",
      title: "Express & The Middleware Pipeline",
      topic: "HTTP Servers & REST APIs",
      anim: "LayersOrbit",
      lede: "Express organizes server logic into an elegant pipeline of middleware functions. Learn how to compose clean REST APIs.",
      winShort: "Design modular REST APIs using Express routers, middleware chains, and centralized error handlers",
      missionLink: "Structure clean backend APIs with authentication, validation, and error boundaries",
      sec1: {
        title: "The middleware pattern explained",
        content: `<p>At its core, <b>Express</b> is a routing and middleware web framework with minimal built-in functionality of its own. An Express application is essentially a series of <b>middleware function calls</b>.</p><p>A middleware function has the signature <code>(req, res, next) =&gt; { ... }</code>. It can execute arbitrary code, modify <code>req</code> and <code>res</code>, end the request-response cycle, or call <code>next()</code> to pass control to the next handler in the stack.</p>`,
        keyIdea: "Middleware executes in sequential order: either call next() to continue or end the cycle with a response."
      },
      predict: {
        q: "What happens if a custom middleware function does not send a response AND forgets to call 'next()'?",
        a: [
          "The request hangs indefinitely until the client browser times out",
          "Express automatically skips to the next route handler",
          "Express throws an UnhandledMiddlewareException",
          "The server restarts automatically"
        ],
        c: 0,
        why: "If next() is never invoked and no response is sent, execution halts and the client connection hangs."
      },
      sec2: {
        title: "Centralized error handling middleware",
        content: `<p>Express recognizes a special 4-argument signature as an <b>error-handling middleware</b>: <code>(err, req, res, next) =&gt; { ... }</code>. When you call <code>next(err)</code> anywhere in your application, Express bypasses all regular routes and jumps directly to the nearest error-handling middleware.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Global Middleware", lines: ["app.use(express.json())", "app.use(cors())", "app.use(logger)"] },
          { title: "2. Router & Routes", lines: ["router.get('/users')", "Validation middleware", "Controller handler"] },
          { title: "3. Error Handler", lines: ["(err, req, res, next)", "Logs error internally", "res.status(500).json()"] }
        ]
      },
      sec3: {
        title: "Tracing middleware execution flow",
        content: `<p>Trace how authentication middleware intercepts an unauthorized request before the controller runs.</p>`,
      },
      trace: {
        code: [
          "app.use('/admin', (req, res, next) => {",
          "  if (!req.headers.authorization) {",
          "    return res.status(401).json({ error: 'Unauthorized' });",
          "  }",
          "  next();",
          "});",
          "app.get('/admin/stats', (req, res) => res.json({ secret: 42 }));"
        ],
        steps: [
          { line: 0, vars: { request_received: "GET /admin/stats with NO authorization header" } },
          { line: 1, vars: { check_header: "req.headers.authorization is undefined" } },
          { line: 2, vars: { response_sent: "401 Unauthorized sent; next() is NOT called" } },
          { line: 6, vars: { route_skipped: "/admin/stats controller is never reached" } }
        ]
      },
      practiceIntro: "Test your mastery of Express architecture and middleware patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The function called to pass control to the next middleware is <0>().",
          "An error handling middleware in Express must accept exactly <1> parameters.",
          "To mount a group of related routes under a sub-path, use express.<2>()."
        ],
        blanks: [
          { a: ["next"], why: "next() invokes the next handler." },
          { a: ["4", "four"], why: "The four arguments (err, req, res, next) distinguish error handlers." },
          { a: ["Router"], why: "express.Router() groups modular routes." }
        ]
      },
      win: "You can architect clean, modular Express applications with robust middleware pipelines and centralized error handling.",
      nextTasks: [
        "Build an authentication middleware that verifies Bearer tokens and attaches req.user.",
        "Implement a global 404 and 500 error handler in an Express application.",
        "Refactor route handlers into modular files using express.Router()."
      ],
      primarySource: "Express Official Guide: *Using middleware* and *Error handling* (expressjs.com).",
      quiz: [
        {
          q: "How does Express determine that a middleware function is an error handler?",
          a: [
            "The function explicitly declares four parameters in its signature: (err, req, res, next)",
            "The function is named 'errorHandler'",
            "It must be registered with app.error() instead of app.use()",
            "It must return a rejected Promise"
          ],
          c: 0,
          why: "Express inspects fn.length: functions with 4 arguments are invoked only when an error is passed to next(err)."
        },
        {
          q: "What does calling 'next(new Error(\"Database failed\"))' do in Express?",
          a: [
            "It skips all remaining standard middleware and jumps straight to error-handling middleware",
            "It crashes the Node.js process immediately",
            "It retries the current HTTP request automatically",
            "It logs the error to disk and continues executing standard routes"
          ],
          c: 0,
          why: "Passing any argument to next() signals an error, bypassing regular route handlers."
        },
        {
          q: "What is the primary benefit of 'express.Router()'?",
          a: [
            "It modularizes route definitions into isolated, reusable mini-applications mounted on specific path prefixes",
            "It automatically optimizes SQL queries inside the handlers",
            "It caches HTTP responses in Redis automatically",
            "It enables WebSocket bidirectional communication"
          ],
          c: 0,
          why: "express.Router() creates isolated route collections that can be organized into separate files."
        },
        {
          q: "In what order does Express execute registered middleware functions?",
          a: [
            "In the exact order they are registered via app.use() in the source code",
            "In alphabetical order of their function names",
            "In random order based on event loop idle time",
            "Routes first, followed by middleware"
          ],
          c: 0,
          why: "Express processes middleware strictly in the sequential order they are declared in the code."
        }
      ]
    },
    {
      n: 7,
      id: "database-drivers-and-connection-pooling",
      title: "Database Drivers & Connection Pooling",
      topic: "Database Integration & Production Practices",
      anim: "Bars",
      lede: "Establishing database connections is expensive. Connection pools reuse open TCP sockets to handle thousands of queries efficiently.",
      winShort: "Configure connection pools for PostgreSQL or MySQL and prevent socket starvation under high load",
      missionLink: "Prevent database connection exhaustion and latency degradation during peak user traffic",
      sec1: {
        title: "Why connection pooling is mandatory",
        content: `<p>Opening a database connection requires a three-way TCP handshake, TLS negotiation, authentication, and backend server process allocation. This can take 50–100ms per connection.</p><p>If your web server receives 1,000 requests per second and establishes a fresh connection per request, both your app and the database will rapidly crash with <code>too many clients</code> errors. A <b>connection pool</b> maintains a fixed set of open sockets (e.g. 10–50) that queries borrow and return in milliseconds.</p>`,
        keyIdea: "A connection pool reuses a fixed set of database connections, eliminating connection setup overhead."
      },
      predict: {
        q: "If your database connection pool size is 20, and 50 simultaneous queries arrive at the server, what happens?",
        a: [
          "20 queries execute immediately; the remaining 30 queue in memory and execute as connections become free",
          "30 queries are immediately rejected with an error",
          "The pool automatically expands to 500 connections",
          "The database server crashes"
        ],
        c: 0,
        why: "Connection pools queue excess queries and service them in FIFO order as active queries release their connections."
      },
      sec2: {
        title: "Managing pool clients with pg / mysql2",
        content: `<p>Using libraries like <code>pg</code> (node-postgres), you typically call <code>pool.query('SELECT ...')</code> which handles borrowing, executing, and releasing automatically. When running transactions (BEGIN / COMMIT), you must manually checkout a client with <code>pool.connect()</code> and release it in a <code>finally</code> block.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Incoming HTTP Requests", lines: ["1,000 req/sec", "Borrow client -> Run query -> Return"] },
          { title: "Connection Pool (e.g. 20)", lines: ["Pre-authenticated TCP sockets", "Queues queries if all busy", "Prevents database overload"] },
          { title: "Database Server (Postgres)", lines: ["Fixed worker processes", "Stable CPU and RAM usage", "Zero connection handshake spikes"] }
        ]
      },
      sec3: {
        title: "Tracing connection checkout and release",
        content: `<p>Trace how a transaction client is safely checked out and released back to the pool.</p>`,
      },
      trace: {
        code: [
          "const client = await pool.connect();",
          "try {",
          "  await client.query('BEGIN');",
          "  await client.query('UPDATE accounts SET balance = balance - 100 WHERE id = 1');",
          "  await client.query('COMMIT');",
          "} finally {",
          "  client.release(); // CRITICAL: return to pool",
          "}"
        ],
        steps: [
          { line: 0, vars: { pool_status: "1 connection borrowed (19 free)" } },
          { line: 2, vars: { transaction: "BEGIN executed" } },
          { line: 4, vars: { transaction: "COMMIT executed" } },
          { line: 6, vars: { pool_status: "client.release() called; 20 connections available" } }
        ]
      },
      practiceIntro: "Test your understanding of connection pooling and database driver mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Reusing database sockets across requests is called connection <0>.",
          "To ensure a borrowed database client is returned even on error, release it in a <1> block.",
          "When all pool connections are busy, incoming queries wait in the connection <2>."
        ],
        blanks: [
          { a: ["pooling"], why: "Connection pooling maintains persistent sockets." },
          { a: ["finally"], why: "finally blocks guarantee release execution." },
          { a: ["queue"], why: "Excess queries wait in a FIFO queue." }
        ]
      },
      win: "You can configure robust connection pools and safely manage database transactions without leaking connections.",
      nextTasks: [
        "Configure a node-postgres Pool with max connections, idleTimeoutMillis, and connectionTimeoutMillis.",
        "Demonstrate connection starvation by acquiring a client without calling client.release().",
        "Set up an index health-check endpoint that performs a lightweight SELECT 1 query."
      ],
      primarySource: "node-postgres Documentation: *Pooling* (node-postgres.com/features/pooling).",
      quiz: [
        {
          q: "What happens if a developer forgets to call 'client.release()' after checking out a database client from a pool?",
          a: [
            "The connection remains marked as busy forever, eventually exhausting the pool and causing all subsequent queries to hang",
            "The client is automatically garbage collected and returned to the pool after 1 millisecond",
            "The database drops the entire database schema",
            "Node.js restarts automatically"
          ],
          c: 0,
          why: "Unreleased connections lead to pool starvation: once all slots are leaked, all future queries stall waiting forever."
        },
        {
          q: "Why is a connection pool of 20 often capable of serving thousands of concurrent web users?",
          a: [
            "Most web requests only interact with the database for a few milliseconds, so 20 connections service queries in rapid succession",
            "The pool creates 20 threads per user",
            "PostgreSQL executes queries in parallel on the client machine",
            "The pool compresses the SQL queries"
          ],
          c: 0,
          why: "Individual queries take 1–5ms, so 20 connections can service thousands of operations each second."
        },
        {
          q: "Which parameter controls how long a query waits in the queue before throwing a timeout error if no connection is available?",
          a: [
            "connectionTimeoutMillis",
            "idleTimeoutMillis",
            "maxWaitTimeSeconds",
            "sslTimeout"
          ],
          c: 0,
          why: "connectionTimeoutMillis dictates how long to wait for a connection before rejecting the request."
        },
        {
          q: "Why are database transactions (BEGIN ... COMMIT) incompatible with simple pool.query() calls?",
          a: [
            "pool.query() borrows a random connection for each call, but a transaction must run on the exact same dedicated connection",
            "Transactions only work in C++",
            "pool.query() can only run SELECT statements",
            "Transactions require WebSocket connections"
          ],
          c: 0,
          why: "Transactions are session-specific and require checking out a dedicated client with pool.connect()."
        }
      ]
    },
    {
      n: 8,
      id: "error-handling-env-and-clustering",
      title: "Process Lifecycle, Environment & Clustering",
      topic: "Database Integration & Production Practices",
      anim: "CodePulse",
      lede: "Take Node.js to production: handle unexpected process crashes, manage environment variables, and scale across multi-core CPUs.",
      winShort: "Implement graceful shutdown handlers and scale Node.js across multi-core systems using clustering",
      missionLink: "Ensure zero-downtime deployments and resilient production server availability",
      sec1: {
        title: "Process lifecycle and graceful shutdown",
        content: `<p>In production environments (like Docker, Kubernetes, or systemd), servers frequently restart during deployments. When an orchestrator stops a container, it sends a <code>SIGTERM</code> signal.</p><p>A production Node.js service must capture <code>process.on('SIGTERM')</code>, stop accepting new connections (<code>server.close()</code>), allow in-flight requests to complete, close database pools, and exit cleanly with code 0.</p>`,
        keyIdea: "Graceful shutdown prevents interrupted user requests when containers or services restart during deployment."
      },
      predict: {
        q: "What should you do if an 'uncaughtException' occurs in a Node.js process?",
        a: [
          "Log the error details, close active connections gracefully, and exit the process (allowing an orchestrator like PM2/K8s to restart it cleanly)",
          "Catch it with an empty try/catch and ignore it so the server stays up",
          "Send an email to the user who triggered it",
          "Restart the entire operating system"
        ],
        c: 0,
        why: "An uncaught exception indicates your application state is corrupted; continuing to run risks erratic behavior and data corruption."
      },
      sec2: {
        title: "Scaling with the cluster module",
        content: `<p>Because Node.js runs on a single thread, a server running on an 8-core CPU only uses 12.5% of the machine's processing capacity by default. The <b>cluster</b> module allows you to fork multiple worker processes that share the same server port, automatically balancing incoming connections across all CPU cores.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Primary Process", lines: ["cluster.isPrimary", "Spawns 1 worker per CPU core", "Monitors worker health & restarts"] },
          { title: "Shared Server Port (e.g. 3000)", lines: ["Operating system / cluster load balancing", "Distributes incoming TCP handshakes"] },
          { title: "Worker Processes (x8)", lines: ["Independent V8 & event loops", "Zero shared memory", "Full CPU core utilization"] }
        ]
      },
      sec3: {
        title: "Tracing graceful shutdown execution",
        content: `<p>Trace how a production service coordinates clean termination upon receiving a SIGTERM signal.</p>`,
      },
      trace: {
        code: [
          "process.on('SIGTERM', async () => {",
          "  console.log('SIGTERM received: closing HTTP server...');",
          "  server.close(async () => {",
          "    console.log('HTTP connections closed. Draining database pool...');",
          "    await pool.end();",
          "    process.exit(0);",
          "  });",
          "});"
        ],
        steps: [
          { line: 0, vars: { signal: "SIGTERM signal intercepted from container orchestrator" } },
          { line: 2, vars: { server: "server.close() rejects new requests, finishes active requests" } },
          { line: 4, vars: { database: "pool.end() terminates persistent database connections" } },
          { line: 5, vars: { exit: "process.exit(0) terminates with success status code" } }
        ]
      },
      practiceIntro: "Test your knowledge of production Node.js deployment, clustering, and process events.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The standard Linux termination signal sent by Docker before stopping is SIG<0>.",
          "The built-in module used to fork worker processes across CPU cores is <1>.",
          "Process termination without error should exit with code <2>."
        ],
        blanks: [
          { a: ["TERM"], why: "SIGTERM requests graceful process shutdown." },
          { a: ["cluster"], why: "The cluster module scales across multi-core systems." },
          { a: ["0"], why: "Exit code 0 indicates clean, successful completion." }
        ]
      },
      win: "You can write resilient production services that scale across CPU cores and shut down gracefully without dropping requests.",
      nextTasks: [
        "Implement a graceful shutdown handler that cleanly closes both Express and database pool connections.",
        "Set up a cluster script using os.cpus().length to fork workers across all available cores.",
        "Configure modern environment variable loading using Node 20+ native --env-file flag."
      ],
      primarySource: "Node.js Official Documentation: *Cluster* and *Process*.",
      quiz: [
        {
          q: "What is the purpose of the Node.js cluster module?",
          a: [
            "To fork multiple child processes that share the same server port, utilizing all available CPU cores",
            "To connect multiple independent physical servers into a Kubernetes cluster",
            "To cluster database tables into partitions",
            "To bundle frontend CSS and JavaScript files"
          ],
          c: 0,
          why: "The cluster module spawns worker processes to scale single-threaded Node.js across multi-core systems."
        },
        {
          q: "What is the official recommendation when an 'uncaughtException' occurs in production?",
          a: [
            "Perform a graceful shutdown and exit the process, allowing a process manager to restart a clean instance",
            "Catch it and ignore it so the server stays online",
            "Send an HTTP 200 response to all connected clients",
            "Clear the require cache"
          ],
          c: 0,
          why: "Uncaught exceptions leave the application in an indeterminate corrupted state; restarting ensures reliability."
        },
        {
          q: "How does Node.js 20+ natively support loading .env files without third-party packages like dotenv?",
          a: [
            "Using the command-line flag: node --env-file=.env app.js",
            "It automatically loads any file named .env found in the home directory",
            "By calling JSON.parse(process.env)",
            "By setting the environment variable USE_DOTENV=true"
          ],
          c: 0,
          why: "Node 20+ introduced the native --env-file flag to read environment files without external dependencies."
        },
        {
          q: "What does 'server.close()' do when called on an active HTTP server?",
          a: [
            "It stops accepting new client connections while allowing in-flight requests to complete before closing",
            "It forcibly tears down all active TCP sockets immediately",
            "It shuts down the entire operating system",
            "It clears all database tables"
          ],
          c: 0,
          why: "server.close() initiates a graceful shutdown: new connections are refused while existing requests finish."
        }
      ]
    }
  ]
};
