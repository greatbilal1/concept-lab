/* ============================================================
   Browser Events & Async JavaScript — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-single-threaded-call-stack", file: "lessons/0001-the-single-threaded-call-stack.html", title: "The single-threaded call stack", topic: "The Event Loop & Queues", anim: "Clock" },
  { n: 2, id: "the-event-loop-and-task-queues", file: "lessons/0002-the-event-loop-and-task-queues.html", title: "The event loop and task queues", topic: "The Event Loop & Queues", anim: "Clock" },
  { n: 3, id: "dom-event-propagation-capturing-and-bubbling", file: "lessons/0003-dom-event-propagation-capturing-and-bubbling.html", title: "DOM event propagation: capturing and bubbling", topic: "DOM Events & Delegation", anim: "Clock" },
  { n: 4, id: "event-bubbling-capturing-and-delegation", file: "lessons/0004-event-bubbling-capturing-and-delegation.html", title: "Event delegation in practice", topic: "DOM Events & Delegation", anim: "Clock" },
  { n: 5, id: "promises-and-the-promise-lifecycle", file: "lessons/0005-promises-and-the-promise-lifecycle.html", title: "Promises and the Promise lifecycle", topic: "Promises & States", anim: "Clock" },
  { n: 6, id: "promise-chaining-and-error-handling", file: "lessons/0006-promise-chaining-and-error-handling.html", title: "Promise chaining and error handling", topic: "Promises & States", anim: "Clock" },
  { n: 7, id: "async-await-syntax-and-mechanics", file: "lessons/0007-async-await-syntax-and-mechanics.html", title: "Async/await syntax and mechanics", topic: "Async/Await & Concurrency", anim: "Clock" },
  { n: 8, id: "concurrent-async-patterns-and-resilience", file: "lessons/0008-concurrent-async-patterns-and-resilience.html", title: "Concurrent async patterns and resilience", topic: "Async/Await & Concurrency", anim: "Clock" }
];

/* ============================================================
   Browser Events & Async JavaScript — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "event-loop", title: "The Event Loop & Queues",
    terms: [
      { term: "Call stack", def: "The LIFO execution stack in JavaScript tracking the active function frames.", lesson: 1, tags: ["runtime"] },
      { term: "Event loop", def: "The coordination loop monitoring the call stack and dispatching tasks from queues.", lesson: 2, tags: ["async"] },
      { term: "Macrotask", def: "A task scheduled by setTimeout, setInterval, or I/O queued in the task queue.", lesson: 2, tags: ["async"] },
      { term: "Microtask", def: "A high-priority asynchronous job (Promise callback) executed immediately when the call stack clears.", lesson: 2, tags: ["async"] }
    ]
  },
  {
    id: "dom-events", title: "DOM Events & Delegation",
    terms: [
      { term: "Event bubbling", def: "The event propagation phase where an event triggers handlers on target and ascends ancestor nodes.", lesson: 3, tags: ["events"] },
      { term: "Event capturing", def: "The initial event propagation phase descending from window down to the target node.", lesson: 3, tags: ["events"] },
      { term: "Event delegation", def: "A pattern attaching a single listener to a parent element to handle events for all children.", lesson: 4, tags: ["patterns"] },
      { term: "preventDefault", def: "A method canceling the default browser action associated with an event.", lesson: 4, tags: ["events"] }
    ]
  },
  {
    id: "promises", title: "Promises & States",
    terms: [
      { term: "Promise", def: "An object representing the eventual completion or failure of an asynchronous operation.", lesson: 5, tags: ["promises"] },
      { term: "Pending state", def: "The initial state of a promise before it is either fulfilled or rejected.", lesson: 5, tags: ["promises"] },
      { term: "Fulfilled state", def: "The resolved state of a promise indicating the asynchronous operation succeeded.", lesson: 5, tags: ["promises"] },
      { term: "Rejected state", def: "The failure state of a promise indicating the asynchronous operation threw an error.", lesson: 5, tags: ["promises"] }
    ]
  },
  {
    id: "async-await", title: "Async/Await & Concurrency",
    terms: [
      { term: "async function", def: "A function prefix enabling await syntax that automatically wraps return values in Promises.", lesson: 7, tags: ["async"] },
      { term: "await keyword", def: "An operator pausing async function execution until a Promise resolves or rejects.", lesson: 7, tags: ["async"] },
      { term: "Promise.all", def: "A combinator resolving when all input promises fulfill, or rejecting as soon as one rejects.", lesson: 6, tags: ["promises"] },
      { term: "AbortController", def: "A standard web API controller allowing cancellation of ongoing DOM requests and fetch calls.", lesson: 8, tags: ["cancellation"] }
    ]
  }
];
