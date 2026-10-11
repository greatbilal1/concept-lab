# Resources — Node.js & Backend JavaScript

## Knowledge (primary sources)
- Official Node.js Documentation (nodejs.org/docs).
- *Node.js Design Patterns* by Mario Casciaro and Luciano Mammino (Packt).
- *Distributed Systems with Node.js* by Thomas Hunter II (O'Reilly).
- Node.js Diagnostic Guides and Event Loop Explanations (nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick).

## Wisdom
- The single thread in Node.js is its superpower and its Achilles' heel: I/O is blazing fast, but a single CPU-heavy computation freezes every user on the server. Never block the event loop.
