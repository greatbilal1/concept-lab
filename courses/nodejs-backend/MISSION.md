# Mission — Node.js & Backend JavaScript

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
