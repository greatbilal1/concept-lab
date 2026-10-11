# Mission — WebAssembly

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
