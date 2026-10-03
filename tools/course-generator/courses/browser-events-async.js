"use strict";

module.exports = {
  id: "browser-events-async",
  title: "Browser Events & Async JavaScript",
  num: 27,
  emoji: "⏱️",
  desc: "The event loop, callbacks, promises and async/await — how a single thread handles many things at once.",
  mission: `# Mission — Browser Events & Async JavaScript

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
`,
  notes: `# Notes — Browser Events & Async JavaScript

## Decisions
- Group into four themes: The Event Loop, DOM Events, Promises, and Async/Await Patterns.
- Standardise on 8 rich lessons with predictable queues and traces.
`,
  resources: `# Resources — Browser Events & Async JavaScript

## Knowledge (primary sources)
- Jake Archibald, *In the Loop* (JSConf presentation on microtasks vs macrotasks).
- MDN Web Docs: *Concurrency model and the event loop* (developer.mozilla.org).
- ECMA-262: *Jobs and Job Queues*.

## Wisdom
- A single thread cannot do two things at once, but it can delegate waiting to the browser runtime.
`,
  cheatsheetSections: [
    {
      title: "Event Loop Priority",
      label: "Execution queue hierarchy",
      code: `1. Call Stack (runs current synchronous code to completion)
2. Microtask Queue (Promises, queueMicrotask) - drained completely!
3. Render Phase (style, layout, paint)
4. Macrotask Queue (setTimeout, setInterval, user input event)`,
      lessonN: 2,
      lessonSlug: "the-event-loop-and-task-queues",
      lessonTitle: "The event loop and task queues"
    },
    {
      title: "Event Delegation",
      label: "One listener for many children",
      code: `document.querySelector('#todo-list').addEventListener('click', (e) => {
  const item = e.target.closest('li');
  if (!item) return;
  toggleComplete(item.dataset.id);
});`,
      lessonN: 4,
      lessonSlug: "event-bubbling-capturing-and-delegation",
      lessonTitle: "Event bubbling, capturing, and delegation"
    },
    {
      title: "Promise Combinators",
      label: "Managing multiple concurrent requests",
      code: `// Fails fast if any promise rejects
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);

// Waits for all, never rejects
const results = await Promise.allSettled([reqA(), reqB()]);

// Resolves/rejects with the fastest responder
const winner = await Promise.race([fetchFast(), fetchTimeout()]);`,
      lessonN: 6,
      lessonSlug: "promise-chaining-and-error-handling",
      lessonTitle: "Promise chaining and error handling"
    },
    {
      title: "Async/Await with Timeout",
      label: "Resilient fetch pattern",
      code: `async function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}`,
      lessonN: 8,
      lessonSlug: "concurrent-async-patterns-and-resilience",
      lessonTitle: "Concurrent async patterns and resilience"
    }
  ],
  glossaryGroups: [
    {
      id: "event-loop",
      title: "The Event Loop & Queues",
      terms: [
        { term: "Call stack", def: "The LIFO execution stack in JavaScript tracking the active function frames.", lesson: 1, tags: ["runtime"] },
        { term: "Event loop", def: "The coordination loop monitoring the call stack and dispatching tasks from queues.", lesson: 2, tags: ["async"] },
        { term: "Macrotask", def: "A task scheduled by setTimeout, setInterval, or I/O queued in the task queue.", lesson: 2, tags: ["async"] },
        { term: "Microtask", def: "A high-priority asynchronous job (Promise callback) executed immediately when the call stack clears.", lesson: 2, tags: ["async"] }
      ]
    },
    {
      id: "dom-events",
      title: "DOM Events & Delegation",
      terms: [
        { term: "Event bubbling", def: "The event propagation phase where an event triggers handlers on target and ascends ancestor nodes.", lesson: 3, tags: ["events"] },
        { term: "Event capturing", def: "The initial event propagation phase descending from window down to the target node.", lesson: 3, tags: ["events"] },
        { term: "Event delegation", def: "A pattern attaching a single listener to a parent element to handle events for all children.", lesson: 4, tags: ["patterns"] },
        { term: "preventDefault", def: "A method canceling the default browser action associated with an event.", lesson: 4, tags: ["events"] }
      ]
    },
    {
      id: "promises",
      title: "Promises & States",
      terms: [
        { term: "Promise", def: "An object representing the eventual completion or failure of an asynchronous operation.", lesson: 5, tags: ["promises"] },
        { term: "Pending state", def: "The initial state of a promise before it is either fulfilled or rejected.", lesson: 5, tags: ["promises"] },
        { term: "Fulfilled state", def: "The resolved state of a promise indicating the asynchronous operation succeeded.", lesson: 5, tags: ["promises"] },
        { term: "Rejected state", def: "The failure state of a promise indicating the asynchronous operation threw an error.", lesson: 5, tags: ["promises"] }
      ]
    },
    {
      id: "async-await",
      title: "Async/Await & Concurrency",
      terms: [
        { term: "async function", def: "A function prefix enabling await syntax that automatically wraps return values in Promises.", lesson: 7, tags: ["async"] },
        { term: "await keyword", def: "An operator pausing async function execution until a Promise resolves or rejects.", lesson: 7, tags: ["async"] },
        { term: "Promise.all", def: "A combinator resolving when all input promises fulfill, or rejecting as soon as one rejects.", lesson: 6, tags: ["promises"] },
        { term: "AbortController", def: "A standard web API controller allowing cancellation of ongoing DOM requests and fetch calls.", lesson: 8, tags: ["cancellation"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-single-threaded-call-stack",
      title: "The single-threaded call stack",
      topic: "The Event Loop & Queues",
      anim: "Clock",
      lede: "JavaScript has one thread and one call stack. Understand how synchronous code runs to completion and why blocking the thread freezes the entire browser.",
      winShort: "Trace synchronous call stack execution and identify thread-blocking bottlenecks",
      missionLink: "The foundation for understanding why asynchronous execution exists",
      sec1: {
        title: "One thing at a time",
        content: `<p>The JavaScript engine operates on a single execution thread. It contains a single <b>Call Stack</b>: a data structure that pushes function frames when entered and pops them when returning.</p><p>Because there is only one thread, JavaScript exhibits <b>run-to-completion</b> behavior: the currently executing function cannot be interrupted by other JavaScript. If you run a heavy synchronous calculation that takes 5 seconds, the browser cannot scroll, click, or animate during those 5 seconds — the entire page freezes.</p>`,
        keyIdea: "JavaScript runs synchronously on one thread; blocking the call stack freezes the browser UI."
      },
      predict: {
        q: "What happens to a browser tab while a 'while(true) {}' loop runs in JavaScript?",
        a: [
          "The entire page freezes, becoming unresponsive to clicks, scrolls, and animations",
          "The browser opens a second thread in the background to handle user input",
          "The loop pauses automatically every 10 milliseconds",
          "The computer operating system shuts down"
        ],
        c: 0,
        why: "The synchronous call stack never clears, preventing the event loop from servicing UI events."
      },
      sec2: {
        title: "Call stack frame lifecycle",
        content: `<p>Observe how nested function calls push and pop frames from the single call stack.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Push main()", lines: ["global frame pushed", "begins execution"] },
          { title: "Push calculate()", lines: ["calculate frame pushed", "allocates local variables"] },
          { title: "Pop & Return", lines: ["calculate returns result", "stack clears back to main"] }
        ]
      },
      sec3: {
        title: "Tracing stack execution order",
        content: `<p>Trace how nested function calls execute strictly in Last-In, First-Out order.</p>`,
      },
      trace: {
        code: [
          "function first() { second(); }",
          "function second() { console.log('Inside second'); }",
          "first();"
        ],
        steps: [
          { line: 2, vars: { stack: "[first]" } },
          { line: 0, vars: { stack: "[first, second]" } },
          { line: 1, vars: { output: "'Inside second'" } },
          { line: 2, vars: { stack: "[] (cleared)" } }
        ]
      },
      practiceIntro: "Test your recall of call stack fundamentals.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The data structure tracking running function frames is the <0> stack.",
          "The behavior where a running script cannot be interrupted is run-to-<1>.",
          "A stack exceeding its maximum memory depth produces a stack <2> error."
        ],
        blanks: [
          { a: ["call"], why: "The call stack tracks active execution frames." },
          { a: ["completion"], why: "Run-to-completion guarantees uninterrupted synchronous execution." },
          { a: ["overflow"], why: "Stack overflow occurs with unbounded recursion." }
        ]
      },
      win: "You can explain how JavaScript's single thread processes functions and why long synchronous loops freeze the browser.",
      nextTasks: [
        "View the call stack in DevTools by pausing execution inside a nested function.",
        "Trigger a Maximum call stack size exceeded error with infinite recursion.",
        "Observe how a 2-second synchronous while loop blocks a button click."
      ],
      primarySource: "MDN Web Docs: *Call stack* (developer.mozilla.org/en-US/docs/Glossary/Call_stack).",
      quiz: [
        {
          q: "What does 'single-threaded' mean in the context of JavaScript execution?",
          a: [
            "The JavaScript engine possesses only one call stack and executes one command at a time",
            "JavaScript can only run on computers with a single CPU core",
            "The browser can only load one CSS stylesheet at a time",
            "JavaScript cannot store strings longer than one word"
          ],
          c: 0,
          why: "Single-threaded means sequential execution on one call stack without parallel thread execution."
        },
        {
          q: "Why does an intensive synchronous loop freeze user interaction on a webpage?",
          a: [
            "The event loop cannot process user click or scroll events until the call stack is completely empty",
            "The internet service provider disconnects the computer",
            "The browser deletes the DOM tree from memory",
            "Computer monitors only refresh when JavaScript calls render()"
          ],
          c: 0,
          why: "User input events queue up and wait until the single thread finishes its synchronous work."
        },
        {
          q: "What data structure structure governs the call stack?",
          a: [
            "LIFO (Last In, First Out)",
            "FIFO (First In, First Out)",
            "B-Tree Matrix",
            "Hash Map"
          ],
          c: 0,
          why: "The last function called is placed on top of the stack and is the first to return."
        },
        {
          q: "What happens when a function finishes executing and reaches a return statement?",
          a: [
            "Its frame is popped off the top of the call stack",
            "It is placed in the background task queue",
            "It triggers a complete browser tab reload",
            "Its local variables become global variables"
          ],
          c: 0,
          why: "Returning pops the function frame off the stack and restores control to the caller frame."
        }
      ]
    },
    {
      n: 2,
      id: "the-event-loop-and-task-queues",
      title: "The event loop and task queues",
      topic: "The Event Loop & Queues",
      anim: "Clock",
      lede: "How does setTimeout(fn, 0) run AFTER console.log? Discover the event loop, macrotasks, microtasks, and the strict priority rules governing browser concurrency.",
      winShort: "Predict asynchronous execution timing between call stack, microtasks, and macrotasks",
      missionLink: "The central concurrency model of modern browser JavaScript",
      sec1: {
        title: "The conductor of the browser",
        content: `<p>The <b>Event Loop</b> is a continuous coordination loop that checks: <i>'Is the call stack empty?'</i> If yes, it checks the queues for waiting tasks.</p><p>Crucially, there are two different queues with different priorities: the <b>Macrotask Queue</b> (for <code>setTimeout</code>, <code>setInterval</code>, DOM events) and the <b>Microtask Queue</b> (for Promise callbacks and <code>queueMicrotask</code>). The engine drains the <i>entire</i> microtask queue before it touches a single macrotask.</p>`,
        keyIdea: "Microtasks (Promises) always run before Macrotasks (setTimeout), as soon as the call stack clears."
      },
      predict: {
        q: "console.log(1); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3)); console.log(4); What order prints?",
        a: ["1, 4, 3, 2", "1, 2, 3, 4", "1, 4, 2, 3", "2, 3, 1, 4"],
        c: 0,
        why: "Synchronous (1, 4) runs first; then microtask Promise (3); finally macrotask setTimeout (2)."
      },
      sec2: {
        title: "The queue priority hierarchy",
        content: `<p>Visualise the order in which the event loop processes tasks and render updates.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Call Stack", lines: ["synchronous code", "runs until empty"] },
          { title: "2. Microtask Queue", lines: ["Promises (.then, catch)", "drained completely to 0!"] },
          { title: "3. Macrotask Queue", lines: ["setTimeout, I/O", "runs ONE task, then checks microtasks again"] }
        ]
      },
      sec3: {
        title: "Tracing microtask versus macrotask execution",
        content: `<p>Trace how a microtask cuts in line ahead of a zero-delay setTimeout callback.</p>`,
      },
      trace: {
        code: [
          "setTimeout(() => console.log('timeout'), 0); # enqueues macrotask",
          "Promise.resolve().then(() => console.log('promise')); # enqueues microtask",
          "console.log('sync');"
        ],
        steps: [
          { line: 2, vars: { step_1: "'sync' logs immediately from call stack" } },
          { line: 1, vars: { step_2: "'promise' logs from microtask queue (higher priority)" } },
          { line: 0, vars: { step_3: "'timeout' logs from macrotask queue" } }
        ]
      },
      practiceIntro: "Test your memory of event loop queues.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Callbacks from Promises are placed in the <0> queue.",
          "Callbacks from setTimeout are placed in the <1> queue.",
          "The engine drains the entire microtask queue before running the next <2>."
        ],
        blanks: [
          { a: ["microtask"], why: "Promises use the high-priority microtask queue." },
          { a: ["macrotask", "task"], why: "Timers and DOM events use the macrotask queue." },
          { a: ["macrotask", "task"], why: "Microtasks are drained between every single macrotask." }
        ]
      },
      win: "You can accurately trace and predict the execution order of complex asynchronous code mixing promises and timers.",
      nextTasks: [
        "Run the classic 1, 4, 3, 2 prediction snippet in your browser console.",
        "Schedule an explicit microtask using window.queueMicrotask().",
        "Observe how an infinite microtask loop starves the UI from rendering."
      ],
      primarySource: "Jake Archibald: *Tasks, microtasks, queues and schedules* (jakearchibald.com).",
      quiz: [
        {
          q: "Why does a Promise.then callback run before a setTimeout(fn, 0) callback?",
          a: [
            "Promises are queued as microtasks, which are drained immediately before any macrotask runs",
            "setTimeout adds a mandatory 1-second delay in all browsers",
            "Promises execute in a different thread inside the CPU",
            "setTimeout is deprecated in modern ECMAScript"
          ],
          c: 0,
          why: "The event loop specification guarantees that microtasks drain before the next macrotask."
        },
        {
          q: "What does setTimeout(fn, 0) actually do?",
          a: [
            "Schedules fn as a macrotask to run on the next event loop turn after current sync and microtasks clear",
            "Executes fn synchronously on line 0",
            "Pauses the computer clock for zero seconds",
            "Cancels the function execution"
          ],
          c: 0,
          why: "A delay of 0ms simply yields execution, queueing the callback in the macrotask queue."
        },
        {
          q: "What happens if a microtask recursively schedules another microtask forever?",
          a: [
            "The microtask queue never empties, starving the event loop and completely locking the UI",
            "The browser crashes with a stack overflow error",
            "The browser promotes the tasks to macrotasks automatically",
            "The computer screen dims"
          ],
          c: 0,
          why: "Because microtasks drain completely before rendering, infinite microtasks freeze the page."
        },
        {
          q: "When does the browser perform visual rendering and layout updates?",
          a: [
            "Between event loop turns, after microtasks drain and before the next macrotask",
            "Continuously inside the synchronous call stack",
            "Only when the user moves the mouse cursor",
            "Every 100 milliseconds regardless of JavaScript execution"
          ],
          c: 0,
          why: "Rendering updates occur opportunistically between macrotask cycles after microtasks clear."
        }
      ]
    },
    {
      n: 3,
      id: "dom-event-propagation-capturing-and-bubbling",
      title: "DOM event propagation: capturing and bubbling",
      topic: "DOM Events & Delegation",
      anim: "Clock",
      lede: "When you click a button, the event does not start at the button. Explore the three phases of DOM event propagation: capturing down, target, and bubbling up.",
      winShort: "Explain event propagation phases and control flow with stopPropagation",
      missionLink: "The mechanism underlying all interactive browser UI event handling",
      sec1: {
        title: "The three phases of an event",
        content: `<p>When an event occurs (e.g. clicking a nested <code>&lt;button&gt;</code>), the browser dispatches the event through three distinct phases: <b>1. Capturing Phase</b> (travels from <code>window</code> down through ancestors to the target), <b>2. Target Phase</b> (reaches the element clicked), and <b>3. Bubbling Phase</b> (ascends back up from target to <code>window</code>).</p><p>By default, <code>addEventListener</code> listens only during the <b>bubbling phase</b>. Calling <code>event.stopPropagation()</code> stops the event from ascending further up the tree.</p>`,
        keyIdea: "Events travel down during capturing, reach the target, then bubble back up to window."
      },
      predict: {
        q: "A button is clicked inside a div. Both have click listeners. Which listener runs first by default?",
        a: [
          "The button listener runs first, because bubbling is the default phase",
          "The div listener runs first",
          "Both listeners run simultaneously in parallel",
          "Neither runs unless event.preventDefault() is called"
        ],
        c: 0,
        why: "In the default bubbling phase, the innermost target fires before bubbling up to parent ancestors."
      },
      sec2: {
        title: "Event propagation path",
        content: `<p>Visualise the U-shaped journey an event takes down and up the DOM hierarchy.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Capturing Phase", lines: ["window -> document -> body -> div", "descends down to target"] },
          { title: "2. Target Phase", lines: ["reaches <button>", "fires target listeners"] },
          { title: "3. Bubbling Phase", lines: ["button -> div -> body -> document", "ascends up (default listener phase)"] }
        ]
      },
      sec3: {
        title: "Tracing stopPropagation()",
        content: `<p>Trace how stopPropagation prevents an outer card click handler from firing when a child link is clicked.</p>`,
      },
      trace: {
        code: [
          "button.addEventListener('click', (e) => {",
          "    e.stopPropagation(); # halts bubbling phase right here",
          "    console.log('Button clicked');",
          "});",
          "card.addEventListener('click', () => console.log('Card clicked'));"
        ],
        steps: [
          { line: 0, vars: { click: "button clicked" } },
          { line: 1, vars: { action: "bubbling halted at button" } },
          { line: 2, vars: { output: "'Button clicked'" } },
          { line: 4, vars: { parent: "card listener NEVER receives event" } }
        ]
      },
      practiceIntro: "Test your memory of event propagation phases.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The phase where an event descends down from the root is the <0> phase.",
          "The phase where an event bubbles upward through ancestors is <1>.",
          "The method that halts event propagation along the tree is stop<2>()."
        ],
        blanks: [
          { a: ["capturing", "capture"], why: "Capturing descends from window to target." },
          { a: ["bubbling"], why: "Bubbling ascends from target back to window." },
          { a: ["Propagation"], why: "stopPropagation() stops bubbling and capturing." }
        ]
      },
      win: "You can control event propagation and prevent unwanted parent event collisions using stopPropagation.",
      nextTasks: [
        "Attach a click listener with { capture: true } and observe it firing before bubbling handlers.",
        "Prevent a parent accordion from collapsing when an inner button is clicked using stopPropagation().",
        "Inspect event.target versus event.currentTarget in a console log."
      ],
      primarySource: "W3C DOM Level 3 Events Specification, Section 3.1: 'Event dispatch and DOM tree flow'.",
      quiz: [
        {
          q: "What is the difference between event.target and event.currentTarget?",
          a: [
            "event.target is the element that originated the event; event.currentTarget is the element whose listener is running",
            "event.target only works on buttons; event.currentTarget works on divs",
            "event.target is the mouse cursor; event.currentTarget is the monitor screen",
            "There is no difference between them"
          ],
          c: 0,
          why: "target is the deepest clicked node; currentTarget is the node handling the event."
        },
        {
          q: "How do you configure an event listener to fire during the capturing phase?",
          a: [
            "Pass { capture: true } or true as the third argument to addEventListener",
            "Use the oncapture HTML attribute in markup",
            "Set element.style.capture = 'active'",
            "It is impossible; browsers only support bubbling"
          ],
          c: 0,
          why: "The third parameter of addEventListener specifies whether to listen in capture mode."
        },
        {
          q: "What does event.preventDefault() do?",
          a: [
            "Cancels the default browser action (like following a link or submitting a form) without stopping bubbling",
            "Stops the event from bubbling up the DOM tree",
            "Deletes the element from the DOM tree",
            "Closes the active browser tab"
          ],
          c: 0,
          why: "preventDefault cancels default browser actions; stopPropagation cancels tree traversal."
        },
        {
          q: "Do all DOM events bubble up the tree by default?",
          a: [
            "No, some events like 'focus', 'blur', and 'mouseenter' do not bubble",
            "Yes, every single DOM event bubbles to the window",
            "Only mouse events bubble; keyboard events never bubble",
            "Only events created with JavaScript bubble"
          ],
          c: 0,
          why: "Events have an event.bubbles boolean; focus and blur do not bubble (focusin/focusout do)."
        }
      ]
    },
    {
      n: 4,
      id: "event-bubbling-capturing-and-delegation",
      title: "Event delegation in practice",
      topic: "DOM Events & Delegation",
      anim: "Clock",
      lede: "Do not attach 1,000 event listeners to 1,000 list items. Master event delegation: attaching one smart listener to a parent to manage dynamic children.",
      winShort: "Implement event delegation to manage dynamic list items using element.closest()",
      missionLink: "Dramatically reduces memory consumption and handles dynamically added elements",
      sec1: {
        title: "The power of event delegation",
        content: `<p>If you have a list of 500 items, attaching an event listener to every individual <code>&lt;li&gt;</code> consumes memory and breaks when new items are added dynamically via JavaScript.</p><p>Because events bubble upward, you can attach a <b>single event listener to the parent container</b>. When any child is clicked, the event bubbles to the parent. Using <code>event.target.closest('li')</code>, the parent easily identifies which child was clicked.</p>`,
        keyIdea: "Event delegation leverages bubbling to handle events for all children with one parent listener."
      },
      predict: {
        q: "What happens to event listeners attached directly to child elements when those child elements are deleted from the DOM?",
        a: [
          "If references are kept in variables, memory leaks can occur; event delegation on the parent avoids this entirely",
          "The browser automatically deletes the parent container",
          "The computer hard drive runs low on memory",
          "The operating system reboots"
        ],
        c: 0,
        why: "Direct listeners on deleted nodes risk memory leaks if not cleaned up; delegation avoids this."
      },
      sec2: {
        title: "Event delegation architecture",
        content: `<p>Observe how one container listener services clicks from existing and future children.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Parent: <ul id='list'>", lines: ["single listener attached here", "listens for all child clicks"] },
          { title: "Child Click (<button>)", lines: ["user clicks button inside li", "event bubbles up to <ul>"] },
          { title: "Delegation Check", lines: ["e.target.closest('button.delete')", "executes logic for matching child"] }
        ]
      },
      sec3: {
        title: "Tracing delegation with closest()",
        content: `<p>Trace how closest() identifies the button even when an inner SVG icon was clicked.</p>`,
      },
      trace: {
        code: [
          "list.addEventListener('click', (e) => {",
          "    const btn = e.target.closest('button.action');",
          "    if (!btn || !list.contains(btn)) return; # guard",
          "    handleAction(btn.dataset.id);",
          "});"
        ],
        steps: [
          { line: 0, vars: { click: "user clicks <svg> inside <button class='action' data-id='5'>" } },
          { line: 1, vars: { closest: "ascends from SVG to find button.action" } },
          { line: 2, vars: { check: "passed: button is inside list" } },
          { line: 3, vars: { executed: "handleAction('5') called" } }
        ]
      },
      practiceIntro: "Test your memory of event delegation patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Attaching one listener to a container for all children is event <0>.",
          "The DOM method to find the nearest matching ancestor element is .<1>().",
          "Custom data parameters attached to elements are read via element.<2>."
        ],
        blanks: [
          { a: ["delegation"], why: "Event delegation exploits bubbling." },
          { a: ["closest"], why: "element.closest(selector) matches ancestors." },
          { a: ["dataset"], why: "dataset exposes data-* attribute values." }
        ]
      },
      win: "You can write high-performance UI components that handle dynamic child additions seamlessly using event delegation.",
      nextTasks: [
        "Implement a dynamic todo list where newly created items delete properly via a single parent listener.",
        "Use element.closest() to identify an item when clicking an inner icon.",
        "Verify in DevTools Elements tab that only one listener exists on the parent."
      ],
      primarySource: "David Walsh: *How JavaScript Event Delegation Works* (davidwalsh.name/event-delegate).",
      quiz: [
        {
          q: "Why is 'event.target.closest(selector)' preferred over 'event.target.matches(selector)' in delegation?",
          a: [
            "The user might click an inner nested element (like an <i> icon or <span>) inside the target button",
            "closest() executes faster in older browsers",
            "matches() only works on table elements",
            "closest() encrypts the event payload"
          ],
          c: 0,
          why: "closest() ascends the tree, finding the target button even if an inner child was clicked."
        },
        {
          q: "What is the primary performance benefit of event delegation?",
          a: [
            "It avoids creating hundreds of individual listener function objects in memory",
            "It makes CSS animations run at 120 frames per second",
            "It increases network download bandwidth",
            "It converts synchronous loops into WebAssembly"
          ],
          c: 0,
          why: "One listener uses far less memory than hundreds of individual function allocations."
        },
        {
          q: "Does event delegation work for newly created DOM elements added after page load?",
          a: [
            "Yes, because the parent listener intercepts bubbling events from any child, present or future",
            "No, you must re-attach the listener every time a new element is added",
            "Only if the elements are created using document.write",
            "Only on Google Chrome browsers"
          ],
          c: 0,
          why: "Since the parent listener exists permanently, newly inserted children bubble up to it automatically."
        },
        {
          q: "Which property on the event object reveals the exact element that was clicked?",
          a: [
            "event.target",
            "event.currentTarget",
            "event.delegateTarget",
            "event.originNode"
          ],
          c: 0,
          why: "event.target references the innermost element that initiated the event."
        }
      ]
    },
    {
      n: 5,
      id: "promises-and-the-promise-lifecycle",
      title: "Promises and the Promise lifecycle",
      topic: "Promises & States",
      anim: "Clock",
      lede: "Escape callback hell. Discover the Promise lifecycle — pending, fulfilled, and rejected — and how Promises turn asynchronous operations into composable first-class values.",
      winShort: "Construct and consume Promises using then, catch, and finally",
      missionLink: "The fundamental abstraction for modern asynchronous JavaScript",
      sec1: {
        title: "The three states of a Promise",
        content: `<p>Before Promises, asynchronous code relied on nested callbacks, leading to the deeply indented 'Pyramid of Doom'. A <b>Promise</b> is an object representing a value that may not be available yet.</p><p>A Promise exists in one of three mutually exclusive states: <b>Pending</b> (operation in progress), <b>Fulfilled</b> (completed successfully with a value), or <b>Rejected</b> (failed with an error). Once settled, a Promise's state is immutable: it can never transition again.</p>`,
        keyIdea: "A Promise transitions once from Pending to either Fulfilled or Rejected, never changing again."
      },
      predict: {
        q: "What happens if a Promise executor function calls resolve(1) and then immediately calls reject(2)?",
        a: [
          "The Promise fulfills with 1; the subsequent reject call is completely ignored",
          "The Promise rejects with 2",
          "The Promise enters an infinite loop",
          "A syntax error is thrown"
        ],
        c: 0,
        why: "A Promise settles once; subsequent resolve or reject calls are ignored by the engine."
      },
      sec2: {
        title: "The Promise state transition",
        content: `<p>Observe the one-way state transitions from pending to settled states.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Pending", lines: ["initial state", "neither fulfilled nor rejected"] },
          { title: "Fulfilled (resolve)", lines: [".then(value => ...)", "immutable success value"] },
          { title: "Rejected (reject)", lines: [".catch(error => ...)", "immutable error reason"] }
        ]
      },
      sec3: {
        title: "Tracing Promise construction",
        content: `<p>Trace how a custom Promise wraps a legacy callback timer.</p>`,
      },
      trace: {
        code: [
          "function delay(ms) {",
          "    return new Promise(resolve => setTimeout(resolve, ms));",
          "}",
          "delay(100).then(() => console.log('100ms passed!'));"
        ],
        steps: [
          { line: 1, vars: { promise: "created in pending state" } },
          { line: 1, vars: { timer: "setTimeout queued in web APIs" } },
          { line: 3, vars: { settled: "timer completes -> resolve() called" } },
          { line: 3, vars: { output: "'100ms passed!' logged from microtask queue" } }
        ]
      },
      practiceIntro: "Test your recall of Promise states.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The initial unresolved state of a Promise is <0>.",
          "The method attached to handle Promise fulfillment is .<1>().",
          "The method attached to handle Promise rejection errors is .<2>()."
        ],
        blanks: [
          { a: ["pending"], why: "Pending is the initial state before resolution." },
          { a: ["then"], why: ".then() registers fulfillment handlers." },
          { a: ["catch"], why: ".catch() registers rejection error handlers." }
        ]
      },
      win: "You can wrap callback APIs into clean Promise objects and handle settled states with then, catch, and finally.",
      nextTasks: [
        "Wrap a setTimeout in a promise-based delay(ms) helper function.",
        "Add a .finally() block to clean up a loading spinner regardless of success or failure.",
        "Observe an UnhandledPromiseRejection warning by rejecting a Promise without a catch handler."
      ],
      primarySource: "MDN Web Docs: *Using Promises* (developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises).",
      quiz: [
        {
          q: "What does it mean that a Promise is 'settled'?",
          a: [
            "It is either fulfilled or rejected, and can never change state again",
            "It has been saved to the browser database",
            "It has been cancelled by the user",
            "It is currently waiting in the call stack"
          ],
          c: 0,
          why: "Settled is the term encompassing both final states: fulfilled or rejected."
        },
        {
          q: "When does the .finally(callback) handler execute on a Promise?",
          a: [
            "When the Promise settles, whether it was fulfilled OR rejected",
            "Only when the Promise fulfills successfully",
            "Only when the Promise rejects with an error",
            "Only if the computer is connected to the internet"
          ],
          c: 0,
          why: ".finally() runs unconditionally upon settlement, making it ideal for cleanup logic."
        },
        {
          q: "What does returning a value inside a .then() callback do?",
          a: [
            "Returns a new Promise that immediately resolves with that returned value",
            "Mutates the original Promise object",
            "Prints the value to the browser console",
            "Halts the JavaScript event loop"
          ],
          c: 0,
          why: ".then() always returns a new Promise, enabling method chaining."
        },
        {
          q: "What happens if an unhandled exception is thrown inside a Promise executor function?",
          a: [
            "The Promise automatically rejects with the thrown error",
            "The browser tab terminates immediately",
            "The error is silently ignored and the Promise fulfills with null",
            "The computer reboots"
          ],
          c: 0,
          why: "Promise constructors catch thrown exceptions and convert them into rejections."
        }
      ]
    },
    {
      n: 6,
      id: "promise-chaining-and-error-handling",
      title: "Promise chaining and error handling",
      topic: "Promises & States",
      anim: "Clock",
      lede: "Linear asynchronous pipelines without nesting. Learn how Promise chaining transforms data, handles errors gracefully, and coordinates concurrent jobs with Promise.all.",
      winShort: "Chain multiple asynchronous tasks and coordinate concurrent operations with Promise combinators",
      missionLink: "Prevents callback nesting and coordinates parallel network operations",
      sec1: {
        title: "Flattening the pyramid",
        content: `<p>Every call to <code>.then()</code> returns a <b>brand new Promise</b>. If you return a value from <code>.then()</code>, the next <code>.then()</code> receives that value. If you return another Promise, the chain waits for that inner Promise to settle before continuing.</p><p>Errors fall through the chain automatically until they encounter a <code>.catch()</code> handler. This mirrors synchronous <code>try/catch</code> blocks across multi-step asynchronous workflows.</p>`,
        keyIdea: ".then() returns a new Promise; errors bubble down the chain until caught."
      },
      predict: {
        q: "In Promise.all([p1, p2, p3]), what happens if p2 rejects with an error?",
        a: [
          "Promise.all rejects immediately with p2's error, without waiting for p1 or p3 to finish",
          "Promise.all ignores p2 and returns [p1, p3]",
          "Promise.all retries p2 three times automatically",
          "The browser crashes"
        ],
        c: 0,
        why: "Promise.all is fail-fast: if any promise rejects, the entire combined promise rejects immediately."
      },
      sec2: {
        title: "The four Promise combinators",
        content: `<p>Understand the four built-in methods for orchestrating multiple concurrent Promises.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Promise.all()", lines: ["all must succeed", "fails fast if ANY rejects"] },
          { title: "Promise.allSettled()", lines: ["waits for all to finish", "never rejects; returns status array"] },
          { title: "Promise.race()", lines: ["first to settle (fulfill OR reject)", "useful for request timeouts"] },
          { title: "Promise.any()", lines: ["first to FULFILL successfully", "ignores rejections unless ALL fail"] }
        ]
      },
      sec3: {
        title: "Tracing error fallthrough in a chain",
        content: `<p>Trace how an error on step 1 bypasses step 2 and is caught cleanly by the trailing catch block.</p>`,
      },
      trace: {
        code: [
          "fetchUser(1)",
          "    .then(user => fetchOrders(user.id)) # step 1 fails (throws error)",
          "    .then(orders => renderOrders(orders)) # SKIPPED!",
          "    .catch(err => console.error('Caught error:', err.message));"
        ],
        steps: [
          { line: 0, vars: { start: "fetching user" } },
          { line: 1, vars: { error: "fetchOrders threw NetworkError" } },
          { line: 2, vars: { skipped: "renderOrders bypassed automatically" } },
          { line: 3, vars: { handled: "error caught cleanly in catch block" } }
        ]
      },
      practiceIntro: "Test your memory of Promise combinators.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The combinator requiring all promises to succeed is Promise.<0>().",
          "The combinator that waits for all promises and never rejects is Promise.<1>().",
          "The combinator settling with the fastest promise is Promise.<2>()."
        ],
        blanks: [
          { a: ["all"], why: "Promise.all() fails fast on the first rejection." },
          { a: ["allSettled"], why: "Promise.allSettled() returns status records for all." },
          { a: ["race"], why: "Promise.race() adopts the result of the quickest settlement." }
        ]
      },
      win: "You can orchestrate complex, multi-step asynchronous workflows and parallel network requests cleanly.",
      nextTasks: [
        "Fetch two independent API endpoints in parallel using Promise.all().",
        "Implement a 3-second request timeout using Promise.race() against a delayed rejection.",
        "Use Promise.allSettled() to report on multiple batch operations where some may fail."
      ],
      primarySource: "MDN Web Docs: *Promise concurrency* (developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency).",
      quiz: [
        {
          q: "What is the primary advantage of Promise.allSettled() over Promise.all()?",
          a: [
            "It never rejects, allowing you to inspect which requests succeeded and which failed in a batch",
            "It runs fifty percent faster than Promise.all",
            "It can only be used with image downloads",
            "It automatically retries failed network requests"
          ],
          c: 0,
          why: "allSettled waits for all promises to finish and provides { status, value/reason } for each."
        },
        {
          q: "What happens if a .catch() block returns a regular value?",
          a: [
            "The promise chain recovers from the error and the next .then() receives the value",
            "The promise chain is permanently terminated",
            "A new error is thrown automatically",
            "The computer outputs an alert dialog"
          ],
          c: 0,
          why: "Catching an error and returning a fallback value recovers the chain into a fulfilled state."
        },
        {
          q: "Why is chaining .then() calls superior to nesting .then() inside .then()?",
          a: [
            "It keeps asynchronous code linear and flat, eliminating nested pyramid indentation",
            "It uses less CPU battery power on mobile phones",
            "Nested then calls are forbidden by modern compilers",
            "Chaining converts promises into synchronous functions"
          ],
          c: 0,
          why: "Flat chains are easy to read, refactor, and handle with a single unified catch block."
        },
        {
          q: "What does Promise.resolve(42) return?",
          a: [
            "A Promise immediately fulfilled with the value 42",
            "The raw number 42",
            "An empty array",
            "A function that returns 42"
          ],
          c: 0,
          why: "Promise.resolve wraps any value into an already-fulfilled Promise object."
        }
      ]
    },
    {
      n: 7,
      id: "async-await-syntax-and-mechanics",
      title: "Async/await syntax and mechanics",
      topic: "Async/Await & Concurrency",
      anim: "Clock",
      lede: "Write asynchronous code that reads like synchronous code. Master the async and await keywords, error handling with try/catch, and the underlying Promise engine.",
      winShort: "Author clean asynchronous functions using async/await and standard try/catch blocks",
      missionLink: "The standard modern syntax for reading and writing asynchronous JavaScript",
      sec1: {
        title: "Syntactic sugar over Promises",
        content: `<p>The <code>async/await</code> syntax introduced in ES2017 is not a new concurrency model: it is ergonomic <b>syntactic sugar built directly on top of Promises</b>. An <code>async function</code> always returns a Promise.</p><p>Inside an async function, the <code>await</code> keyword pauses execution of that function until the awaited Promise settles. While paused, the underlying single thread is <b>not blocked</b>: it returns to the event loop and handles other tasks.</p>`,
        keyIdea: "await pauses the local async function without blocking the main browser thread."
      },
      predict: {
        q: "What does an async function return if you write 'async function getNumber() { return 42; }'?",
        a: [
          "A Promise that resolves with the value 42",
          "The literal number 42 directly",
          "undefined",
          "A callback function"
        ],
        c: 0,
        why: "Any value returned from an async function is automatically wrapped in a resolved Promise."
      },
      sec2: {
        title: "Comparing .then() with async/await",
        content: `<p>Observe how async/await transforms Promise chaining into clean, linear code.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Promise Chain (.then)", lines: ["fetch(url)", "  .then(res => res.json())", "  .then(data => render(data))", "  .catch(err => ...);"] },
          { title: "async / await (Linear)", lines: ["try {", "  const res = await fetch(url);", "  const data = await res.json();", "} catch (err) { ... }"] }
        ]
      },
      sec3: {
        title: "Tracing await execution suspension",
        content: `<p>Trace how await pauses the function and yields the thread back to the main event loop.</p>`,
      },
      trace: {
        code: [
          "async function load() {",
          "    console.log('1. Start load');",
          "    const data = await fetchData(); # function pauses here!",
          "    console.log('3. Data loaded');",
          "}",
          "load();",
          "console.log('2. Main script continues');"
        ],
        steps: [
          { line: 1, vars: { log_1: "'1. Start load'" } },
          { line: 2, vars: { suspended: "load() yields execution back to caller" } },
          { line: 6, vars: { log_2: "'2. Main script continues' runs synchronously" } },
          { line: 3, vars: { resumed: "'3. Data loaded' runs when fetchData settles" } }
        ]
      },
      practiceIntro: "Test your memory of async/await syntax.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The keyword placed before a function to allow await is <0>.",
          "The operator that pauses an async function until a Promise settles is <1>.",
          "Errors in async/await functions are caught using standard try/<2> blocks."
        ],
        blanks: [
          { a: ["async"], why: "async declares an asynchronous function." },
          { a: ["await"], why: "await pauses until the promise settles." },
          { a: ["catch"], why: "try/catch handles promise rejections natively." }
        ]
      },
      win: "You can write readable, sequential asynchronous logic using async/await and handle errors with standard try/catch blocks.",
      nextTasks: [
        "Refactor an existing Promise .then() chain into an async/await function.",
        "Wrap an awaited fetch call in a try/catch/finally block.",
        "Verify that calling an async function without await returns a Promise."
      ],
      primarySource: "MDN Web Docs: *async function* (developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).",
      quiz: [
        {
          q: "What does the 'await' keyword do when placed before a Promise?",
          a: [
            "Pauses execution of the enclosing async function until the Promise settles, while letting the browser thread handle other tasks",
            "Blocks the entire computer operating system until data arrives",
            "Converts the Promise into a synchronous while loop",
            "Forces the Promise to settle immediately without waiting"
          ],
          c: 0,
          why: "await suspends only the local async function; the main event loop continues processing other work."
        },
        {
          q: "How are rejected Promises handled when using async/await?",
          a: [
            "The rejected reason is thrown as a standard JavaScript exception that can be caught with try/catch",
            "The browser crashes with a fatal error screen",
            "The function restarts from line 1 automatically",
            "Rejections cannot be caught when using async/await"
          ],
          c: 0,
          why: "await unwraps rejections into thrown exceptions, making standard try/catch work seamlessly."
        },
        {
          q: "Can the 'await' keyword be used outside of an async function?",
          a: [
            "Only at the top level of modern JavaScript ES Modules (Top-Level Await)",
            "Yes, anywhere in any JavaScript file",
            "No, never under any circumstances",
            "Only inside HTML <script> tags"
          ],
          c: 0,
          why: "Top-Level Await is supported in ES Modules; non-module scripts require an enclosing async function."
        },
        {
          q: "What common mistake creates an accidental sequential bottleneck when using async/await?",
          a: [
            "Awaiting independent operations one after another instead of launching them in parallel with Promise.all()",
            "Using try/catch blocks around network requests",
            "Naming the function with an uppercase letter",
            "Returning an object from an async function"
          ],
          c: 0,
          why: "Awaiting independent requests sequentially forces them to run one-by-one, doubling total latency."
        }
      ]
    },
    {
      n: 8,
      id: "concurrent-async-patterns-and-resilience",
      title: "Concurrent async patterns and resilience",
      topic: "Async/Await & Concurrency",
      anim: "Clock",
      lede: "Real networks fail, hang, and drop connections. Master concurrent execution patterns, request cancellation with AbortController, and exponential backoff retry loops.",
      winShort: "Implement resilient async patterns including request timeouts and retry loops",
      missionLink: "Prepares web applications for real-world network instability and latency spikes",
      sec1: {
        title: "Defensive asynchronous architecture",
        content: `<p>In production, network calls fail. They encounter timeouts, 500 errors, and dropped packets. Writing <code>await fetch(url)</code> without timeouts or error boundaries is a recipe for hanging UI states.</p><p>Resilient applications implement two essential patterns: <b>Request Cancellation</b> using the browser's native <code>AbortController</code> API, and <b>Exponential Backoff Retries</b> to recover from temporary network hiccups.</p>`,
        keyIdea: "Never leave network calls without timeouts; use AbortController to cancel hanging requests."
      },
      predict: {
        q: "What happens if a user navigates away from a page while a slow fetch request is still downloading?",
        a: [
          "The fetch continues downloading in the background unless explicitly cancelled with AbortController",
          "The browser cancels the fetch automatically within 1 millisecond",
          "The computer turns off Wi-Fi",
          "The server throws a database syntax error"
        ],
        c: 0,
        why: "Fetch requests continue running in the background unless aborted, wasting bandwidth and memory."
      },
      sec2: {
        title: "The AbortController pattern",
        content: `<p>Learn how AbortController bridges timers and network fetch requests for robust timeouts.</p>`,
      },
      diagram: {
        boxes: [
          { title: "AbortController", lines: ["const controller = new AbortController();", "pass controller.signal to fetch()"] },
          { title: "Timeout Trigger", lines: ["setTimeout(() => controller.abort(), 5000)", "fires abort if time exceeds 5s"] },
          { title: "Fetch Rejection", lines: ["fetch rejects with AbortError", "UI informs user of network timeout"] }
        ]
      },
      sec3: {
        title: "Tracing exponential backoff retry",
        content: `<p>Trace how a retry loop doubles its waiting interval between successive failed network attempts.</p>`,
      },
      trace: {
        code: [
          "# Attempt 1: fails (wait 100ms)",
          "# Attempt 2: fails (wait 200ms = 100 * 2)",
          "# Attempt 3: fails (wait 400ms = 200 * 2)",
          "# Attempt 4: succeeds! Request completed without user noticing failure"
        ],
        steps: [
          { line: 0, vars: { attempt: "1 failed; backoff delay 100ms" } },
          { line: 1, vars: { attempt: "2 failed; backoff delay 200ms" } },
          { line: 2, vars: { attempt: "3 failed; backoff delay 400ms" } },
          { line: 3, vars: { success: "attempt 4 resolved successfully" } }
        ]
      },
      practiceIntro: "Test your memory of resilient async patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The native web API used to cancel fetch requests is <0>Controller.",
          "Progressively doubling retry delays is exponential <1>.",
          "When an aborted fetch rejects, its error name is <2>Error."
        ],
        blanks: [
          { a: ["Abort"], why: "AbortController handles cancellation signals." },
          { a: ["backoff"], why: "Exponential backoff relieves server load during outages." },
          { a: ["Abort"], why: "Aborted fetches throw an DOMException named AbortError." }
        ]
      },
      win: "You can author production-grade asynchronous logic featuring request cancellation, timeouts, and automated retry mechanisms.",
      nextTasks: [
        "Implement a fetch wrapper that aborts requests if they exceed 3 seconds.",
        "Write an async retry function that retries a failing operation up to 3 times.",
        "Cancel an in-flight search autocomplete request when the user types a new character."
      ],
      primarySource: "WHATWG DOM Standard: *AbortController and AbortSignal* (dom.spec.whatwg.org/#aborting-ongoing-activities).",
      quiz: [
        {
          q: "How do you connect an AbortController to a fetch() network request?",
          a: [
            "Pass { signal: controller.signal } in the fetch options object",
            "Call fetch.abort(controller)",
            "Set window.abort = controller",
            "Pass the controller as the first parameter instead of the URL"
          ],
          c: 0,
          why: "The signal property on the fetch options connects the request to the controller."
        },
        {
          q: "Why is exponential backoff preferred over immediate retries when a server fails with status 503?",
          a: [
            "Immediate retries hammer an already overloaded server; backoff gives the server breathing room to recover",
            "Immediate retries are forbidden by TCP specifications",
            "Backoff speeds up the computer processor clock speed",
            "Immediate retries always succeed on the second attempt"
          ],
          c: 0,
          why: "Flooding a struggling server with immediate retries causes a thundering herd failure."
        },
        {
          q: "What does controller.abort() do to an active network fetch?",
          a: [
            "Terminates the network transfer immediately and causes the fetch Promise to reject with an AbortError",
            "Deletes the server database record",
            "Closes the user web browser window",
            "Replaces the response body with an empty string without throwing an error"
          ],
          c: 0,
          why: "abort() halts the request socket immediately and rejects the promise with an AbortError."
        },
        {
          q: "Why should you always clear the timeout timer in a finally block after an aborted fetch completes?",
          a: [
            "To prevent the timer callback from firing later and wasting CPU resources or throwing unexpected errors",
            "Because browsers allow only three timers to exist at a time",
            "Because timers delete computer RAM if left running",
            "To speed up the internet download connection"
          ],
          c: 0,
          why: "clearTimeout(timer) in finally ensures the timer is cleaned up when requests succeed quickly."
        }
      ]
    }
  ]
};
