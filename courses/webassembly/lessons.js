/* ============================================================
   WebAssembly — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-webassembly-and-vm-architecture", file: "lessons/0001-why-webassembly-and-vm-architecture.html", title: "Why WebAssembly: Performance & Architecture", topic: "Wasm Architecture & Stack VM", anim: "LayersOrbit" },
  { n: 2, id: "wat-text-format-and-stack-machine", file: "lessons/0002-wat-text-format-and-stack-machine.html", title: "WAT & The Stack Machine", topic: "Wasm Architecture & Stack VM", anim: "CodePulse" },
  { n: 3, id: "linear-memory-and-buffers", file: "lessons/0003-linear-memory-and-buffers.html", title: "Linear Memory & TypedArrays", topic: "Linear Memory & Interoperability", anim: "Layers" },
  { n: 4, id: "js-wasm-interop-and-web-apis", file: "lessons/0004-js-wasm-interop-and-web-apis.html", title: "JavaScript & Wasm Interoperability", topic: "Linear Memory & Interoperability", anim: "Flow" },
  { n: 5, id: "compiling-rust-and-c-to-wasm", file: "lessons/0005-compiling-rust-and-c-to-wasm.html", title: "Compiling Rust & C to Wasm", topic: "Compiling Systems Languages (Rust/C)", anim: "Code" },
  { n: 6, id: "memory-management-and-strings", file: "lessons/0006-memory-management-and-strings.html", title: "Complex Types & Memory Management", topic: "Compiling Systems Languages (Rust/C)", anim: "LayersOrbit" },
  { n: 7, id: "simd-threads-and-performance", file: "lessons/0007-simd-threads-and-performance.html", title: "High Performance: SIMD & Web Workers", topic: "Wasm Beyond the Browser & WASI", anim: "Bars" },
  { n: 8, id: "wasi-and-server-side-wasm", file: "lessons/0008-wasi-and-server-side-wasm.html", title: "Beyond the Browser: WASI & Server-Side Wasm", topic: "Wasm Beyond the Browser & WASI", anim: "Globe" }
];

/* ============================================================
   WebAssembly — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "wasm-architecture", title: "Wasm Architecture & Virtual Machine",
    terms: [
      { term: "WebAssembly", def: "A compact binary instruction format for a stack-based virtual machine designed to execute at near-native speed in sandboxed environments.", lesson: 1, tags: ["wasm","bytecode"] },
      { term: "Stack machine", def: "A computing architecture where instructions push operands onto an evaluation stack and pop results, rather than operating on named hardware registers.", lesson: 2, tags: ["vm","architecture"] },
      { term: "WAT", def: "WebAssembly Text format: a human-readable S-expression representation of binary Wasm instructions, converted using wat2wasm.", lesson: 2, tags: ["wat","syntax"] },
      { term: "JIT Compilation", def: "Just-In-Time compilation where the browser's engine translates portable Wasm bytecode into native machine instructions directly on the host CPU.", lesson: 1, tags: ["compiler"] }
    ]
  },
  {
    id: "memory-and-interop", title: "Linear Memory & Interoperability",
    terms: [
      { term: "Linear Memory", def: "A contiguous, resizable array of raw bytes allocated by the browser and exposed to WebAssembly and JavaScript simultaneously.", lesson: 3, tags: ["memory","buffer"] },
      { term: "Wasm Page", def: "The fixed atomic unit of WebAssembly memory allocation, equal to exactly 65,536 bytes (64 kilobytes).", lesson: 3, tags: ["memory","pages"] },
      { term: "instantiateStreaming", def: "The primary browser API that downloads, compiles, and instantiates a WebAssembly module in a single streaming pipeline.", lesson: 4, tags: ["api","browser"] },
      { term: "TypedArray", def: "A JavaScript view (such as Uint8Array or Float32Array) providing structured read and write access to raw binary ArrayBuffers.", lesson: 3, tags: ["javascript","memory"] }
    ]
  },
  {
    id: "compilation-and-types", title: "Languages & Compilation",
    terms: [
      { term: "Emscripten", def: "An open-source LLVM-to-WebAssembly compiler toolchain that ports large C and C++ projects (including POSIX and OpenGL APIs) to the web.", lesson: 5, tags: ["c","emscripten"] },
      { term: "wasm-bindgen", def: "A Rust library and CLI tool facilitating high-level interactions between Wasm modules and JavaScript objects.", lesson: 5, tags: ["rust","tooling"] },
      { term: "Memory pointer", def: "An integer offset indicating the starting byte address of an object or string in Wasm linear memory.", lesson: 6, tags: ["pointers","memory"] },
      { term: "wasm-pack", def: "A one-stop CLI tool for building, profiling, and packaging Rust-generated WebAssembly code for npm publication.", lesson: 5, tags: ["rust","npm"] }
    ]
  },
  {
    id: "performance-and-wasi", title: "High Performance & WASI",
    terms: [
      { term: "SIMD", def: "Single Instruction, Multiple Data: hardware instructions that perform the same calculation across multiple data points in parallel in a single CPU cycle.", lesson: 7, tags: ["simd","performance"] },
      { term: "WASI", def: "WebAssembly System Interface: a standardized modular system interface providing sandboxed POSIX-like system calls (files, clocks, sockets) outside browsers.", lesson: 8, tags: ["wasi","systems"] },
      { term: "SharedArrayBuffer", def: "A shared memory primitive that allows multiple parallel Web Workers and Wasm instances to read and write to the same memory block.", lesson: 7, tags: ["threads","concurrency"] },
      { term: "Sandboxing", def: "The security model where WebAssembly code executes in an isolated environment with zero access to system calls, host files, or DOM unless explicitly imported.", lesson: 1, tags: ["security"] }
    ]
  }
];
