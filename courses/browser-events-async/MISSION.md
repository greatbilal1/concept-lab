# Mission — Browser Events & Async JavaScript

## Why this course exists

JavaScript is single-threaded: it has one call stack and executes one operation at a time. Yet web browsers fetch network data, animate graphics, listen for user clicks, and stream video concurrently without freezing the UI. How does a single thread accomplish this? The answer is the Event Loop. Without a mental model of the event loop, task queues, and microtasks, asynchronous code feels like unpredictable chaos.

## What the learner can do at the end

- Trace execution order across the synchronous call stack, microtask queue, and macrotask queue.
- Implement DOM event listeners using event delegation, capturing, and bubbling.
- Construct, chain, and error-handle asynchronous Promises cleanly.
- Write readable asynchronous code using async/await and try/catch.
- Orchestrate concurrent asynchronous operations with Promise.all, Promise.allSettled, and Promise.race.

## What this course is NOT

- Not a WebSockets or WebRTC networking course.
- Not a Node.js libuv internals dive. It focuses on the standard browser event loop.

## Success looks like

When given a tricky asynchronous code snippet mixing setTimeout, Promise.then, and async/await, the learner predicts the exact console log output order on paper on the first try.
