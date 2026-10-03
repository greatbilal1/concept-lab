/* ============================================================
   Frontend ↔ Backend Communication — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-same-origin-policy", file: "lessons/0001-the-same-origin-policy.html", title: "The Same-Origin Policy", topic: "The Network Boundary & CORS", anim: "Code" },
  { n: 2, id: "cors-preflight-and-security-boundaries", file: "lessons/0002-cors-preflight-and-security-boundaries.html", title: "CORS, preflight, and security boundaries", topic: "The Network Boundary & CORS", anim: "Code" },
  { n: 3, id: "loading-states-empty-states-and-errors", file: "lessons/0003-loading-states-empty-states-and-errors.html", title: "Loading states, empty states, and errors", topic: "UI State & Optimistic Updates", anim: "Code" },
  { n: 4, id: "optimistic-updates-and-rollback-patterns", file: "lessons/0004-optimistic-updates-and-rollback-patterns.html", title: "Optimistic updates and rollback patterns", topic: "UI State & Optimistic Updates", anim: "Code" },
  { n: 5, id: "race-conditions-and-request-sequencing", file: "lessons/0005-race-conditions-and-request-sequencing.html", title: "Race conditions and request sequencing", topic: "Race Conditions & Sequencing", anim: "Code" },
  { n: 6, id: "client-side-caching-and-swr", file: "lessons/0006-client-side-caching-and-swr.html", title: "Client-side caching and SWR", topic: "Race Conditions & Sequencing", anim: "Code" },
  { n: 7, id: "real-time-sse-and-websockets", file: "lessons/0007-real-time-sse-and-websockets.html", title: "Real-time communication: SSE and WebSockets", topic: "Real-Time & Offline Resilience", anim: "Code" },
  { n: 8, id: "offline-resilience-and-synchronization", file: "lessons/0008-offline-resilience-and-synchronization.html", title: "Offline resilience and synchronization", topic: "Real-Time & Offline Resilience", anim: "Code" }
];

/* ============================================================
   Frontend ↔ Backend Communication — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "network-boundary", title: "The Network Boundary & CORS",
    terms: [
      { term: "Same-origin policy", def: "A critical browser security model restricting scripts on one origin from accessing data from another origin.", lesson: 1, tags: ["security"] },
      { term: "Origin", def: "The combination of URI scheme (protocol), host domain, and port number (e.g. https://example.com:443).", lesson: 1, tags: ["web"] },
      { term: "CORS preflight", def: "An automatic HTTP OPTIONS request sent by the browser to verify cross-origin permissions before the main request.", lesson: 2, tags: ["cors"] },
      { term: "Access-Control-Allow-Origin", def: "The server response header designating which client origins are permitted to read the response.", lesson: 2, tags: ["cors"] }
    ]
  },
  {
    id: "ui-states", title: "UI State & Optimistic Updates",
    terms: [
      { term: "UI state machine", def: "A pattern modeling component states explicitly as idle, loading, success, or error without boolean flags.", lesson: 3, tags: ["ui"] },
      { term: "Empty state", def: "The visual design presented to a user when a successful query returns zero items.", lesson: 3, tags: ["ux"] },
      { term: "Optimistic update", def: "Updating the user interface immediately before the server network confirmation arrives.", lesson: 4, tags: ["ux"] },
      { term: "Rollback", def: "Reverting an optimistic UI change back to its prior state when the underlying network call fails.", lesson: 4, tags: ["resilience"] }
    ]
  },
  {
    id: "race-conditions", title: "Race Conditions & Sequencing",
    terms: [
      { term: "Network race condition", def: "A bug where responses to multiple requests arrive out of order, displaying stale data.", lesson: 5, tags: ["concurrency"] },
      { term: "Debounce", def: "A rate-limiting technique delaying function execution until a specified idle duration has passed without new events.", lesson: 5, tags: ["performance"] },
      { term: "Throttle", def: "Enforcing a maximum execution frequency on a function over time, regardless of event frequency.", lesson: 5, tags: ["performance"] },
      { term: "Stale-While-Revalidate", def: "A caching strategy serving cached data immediately while fetching fresh data in the background.", lesson: 6, tags: ["caching"] }
    ]
  },
  {
    id: "real-time", title: "Real-Time & Offline Resilience",
    terms: [
      { term: "Server-Sent Events", def: "A standard browser protocol (SSE) enabling a server to stream unilateral text events to clients over HTTP.", lesson: 7, tags: ["real-time"] },
      { term: "WebSocket", def: "A bidirectional, full-duplex persistent communication channel established over a single TCP socket.", lesson: 7, tags: ["websockets"] },
      { term: "Long polling", def: "A technique where a server holds an HTTP request open until new data is ready before responding.", lesson: 7, tags: ["real-time"] },
      { term: "Offline queue", def: "A client storage buffer holding user actions locally to sync when internet connectivity restores.", lesson: 8, tags: ["offline"] }
    ]
  }
];
