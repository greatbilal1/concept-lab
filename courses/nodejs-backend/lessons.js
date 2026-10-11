/* ============================================================
   Node.js & Backend JavaScript — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "event-loop-and-libuv", file: "lessons/0001-event-loop-and-libuv.html", title: "The Event Loop & Libuv Architecture", topic: "The Node.js Runtime & Architecture", anim: "Flow" },
  { n: 2, id: "modules-commonjs-and-esm", file: "lessons/0002-modules-commonjs-and-esm.html", title: "Modules: CommonJS and ECMAScript Modules", topic: "The Node.js Runtime & Architecture", anim: "CodePulse" },
  { n: 3, id: "file-system-and-buffers", file: "lessons/0003-file-system-and-buffers.html", title: "File System, Buffers & Binary Data", topic: "Asynchronous I/O, Buffers & Streams", anim: "Layers" },
  { n: 4, id: "streams-and-pipes", file: "lessons/0004-streams-and-pipes.html", title: "Streams & Piping Large Datasets", topic: "Asynchronous I/O, Buffers & Streams", anim: "Flow" },
  { n: 5, id: "native-http-and-request-handling", file: "lessons/0005-native-http-and-request-handling.html", title: "Native HTTP Server & Request Handling", topic: "HTTP Servers & REST APIs", anim: "Globe" },
  { n: 6, id: "express-and-middleware-pattern", file: "lessons/0006-express-and-middleware-pattern.html", title: "Express & The Middleware Pipeline", topic: "HTTP Servers & REST APIs", anim: "LayersOrbit" },
  { n: 7, id: "database-drivers-and-connection-pooling", file: "lessons/0007-database-drivers-and-connection-pooling.html", title: "Database Drivers & Connection Pooling", topic: "Database Integration & Production Practices", anim: "Bars" },
  { n: 8, id: "error-handling-env-and-clustering", file: "lessons/0008-error-handling-env-and-clustering.html", title: "Process Lifecycle, Environment & Clustering", topic: "Database Integration & Production Practices", anim: "CodePulse" }
];

/* ============================================================
   Node.js & Backend JavaScript — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "runtime-architecture", title: "Node.js Runtime & Architecture",
    terms: [
      { term: "Event Loop", def: "The single-threaded coordination loop in libuv that continuously monitors, schedules, and executes callbacks across distinct phases.", lesson: 1, tags: ["architecture","concurrency"] },
      { term: "Libuv", def: "The multi-platform C library that powers Node.js with an asynchronous event loop and a background worker thread pool for file and DNS operations.", lesson: 1, tags: ["libuv","c"] },
      { term: "V8 Engine", def: "Google's open-source C++ JavaScript execution engine that compiles JS to native machine code and manages memory allocation.", lesson: 1, tags: ["engine","v8"] },
      { term: "Microtask Queue", def: "High-priority queue containing process.nextTick and resolved Promise callbacks, drained immediately after the current operation finishes.", lesson: 1, tags: ["async"] }
    ]
  },
  {
    id: "buffers-and-streams", title: "Buffers, File I/O & Streams",
    terms: [
      { term: "Buffer", def: "A fixed-size chunk of raw binary memory allocated outside the V8 JavaScript heap, used for handling network packets and files.", lesson: 3, tags: ["binary","memory"] },
      { term: "Stream", def: "An abstract interface for handling streaming data chunk-by-chunk, enabling processing of files larger than available RAM.", lesson: 4, tags: ["streams","io"] },
      { term: "Backpressure", def: "A mechanism where a slow data consumer signals a fast data producer to pause reading until buffered memory drains.", lesson: 4, tags: ["performance","streams"] },
      { term: "Transform Stream", def: "A duplex stream where output is computed from input (such as gzip compression, decryption, or hashing).", lesson: 4, tags: ["streams"] }
    ]
  },
  {
    id: "http-and-middleware", title: "HTTP Networking & Middleware",
    terms: [
      { term: "IncomingMessage", def: "The readable stream representing an incoming HTTP client request in Node.js, delivering headers, method, URL, and body chunks.", lesson: 5, tags: ["http","network"] },
      { term: "ServerResponse", def: "The writable stream representing an outgoing HTTP response, used to set headers, status codes, and stream body data.", lesson: 5, tags: ["http","network"] },
      { term: "Middleware", def: "A function in Express or similar frameworks with access to (req, res, next) that processes or alters requests in a sequential chain.", lesson: 6, tags: ["express","patterns"] },
      { term: "Router", def: "An isolated instance of middleware and routes capable of performing routing functions as a mini-application.", lesson: 6, tags: ["routing"] }
    ]
  },
  {
    id: "production-scaling", title: "Production Scaling & Operations",
    terms: [
      { term: "Connection Pooling", def: "A cache of active database socket connections maintained to avoid the latency and overhead of establishing new handshakes per request.", lesson: 7, tags: ["database","sockets"] },
      { term: "Cluster Module", def: "A built-in Node.js module that forks multiple worker processes sharing server ports to fully utilize multi-core CPU architectures.", lesson: 8, tags: ["scaling","multicore"] },
      { term: "Worker Threads", def: "A Node.js module enabling execution of CPU-intensive JavaScript code on parallel background OS threads without blocking the main event loop.", lesson: 8, tags: ["threads","concurrency"] },
      { term: "Graceful Shutdown", def: "The procedure of rejecting new incoming requests, allowing in-flight requests to complete, and closing database pools before process exit.", lesson: 8, tags: ["operations","devops"] }
    ]
  }
];
