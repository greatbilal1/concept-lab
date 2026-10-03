/* ============================================================
   HTTP Explained Visually — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-request-response-cycle", file: "lessons/0001-the-request-response-cycle.html", title: "The request-response cycle", topic: "The Request-Response Cycle", anim: "Flow" },
  { n: 2, id: "anatomy-of-an-http-request", file: "lessons/0002-anatomy-of-an-http-request.html", title: "Anatomy of an HTTP request", topic: "The Request-Response Cycle", anim: "Flow" },
  { n: 3, id: "anatomy-of-an-http-response", file: "lessons/0003-anatomy-of-an-http-response.html", title: "Anatomy of an HTTP response", topic: "The Request-Response Cycle", anim: "Flow" },
  { n: 4, id: "http-methods-get-post-put-delete", file: "lessons/0004-http-methods-get-post-put-delete.html", title: "HTTP methods: GET, POST, PUT, DELETE", topic: "Methods & Status Codes", anim: "Flow" },
  { n: 5, id: "status-codes-and-what-they-mean", file: "lessons/0005-status-codes-and-what-they-mean.html", title: "Status codes and what they mean", topic: "Methods & Status Codes", anim: "Flow" },
  { n: 6, id: "headers-content-types-and-metadata", file: "lessons/0006-headers-content-types-and-metadata.html", title: "Headers, content types, and metadata", topic: "Headers & Payloads", anim: "Flow" },
  { n: 7, id: "caching-and-conditional-requests", file: "lessons/0007-caching-and-conditional-requests.html", title: "Caching and conditional requests", topic: "State, Cookies & Caching", anim: "Flow" },
  { n: 8, id: "cookies-and-session-state", file: "lessons/0008-cookies-and-session-state.html", title: "Cookies and session state", topic: "State, Cookies & Caching", anim: "Flow" }
];

/* ============================================================
   HTTP Explained Visually — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "request-response", title: "The Request-Response Cycle",
    terms: [
      { term: "HTTP", def: "Hypertext Transfer Protocol: the application-level protocol powering data communication across the World Wide Web.", lesson: 1, tags: ["protocols"] },
      { term: "Statelessness", def: "A protocol property where each request is processed independently without the server retaining client state between requests.", lesson: 1, tags: ["architecture"] },
      { term: "Request line", def: "The first line of an HTTP request, containing the method, path, and protocol version (e.g. GET / HTTP/1.1).", lesson: 2, tags: ["format"] },
      { term: "Status line", def: "The first line of an HTTP response, containing the protocol version, numeric status code, and reason phrase.", lesson: 3, tags: ["format"] }
    ]
  },
  {
    id: "methods-status", title: "Methods & Status Codes",
    terms: [
      { term: "Idempotent method", def: "An HTTP method where multiple identical requests have the exact same effect on server state as a single request.", lesson: 4, tags: ["methods"] },
      { term: "Safe method", def: "An HTTP method (like GET or HEAD) that does not modify server resource state and is read-only.", lesson: 4, tags: ["methods"] },
      { term: "2xx Success", def: "HTTP status code family indicating that the client request was successfully received, understood, and accepted.", lesson: 5, tags: ["status"] },
      { term: "4xx Client Error", def: "HTTP status code family indicating an error caused by the client, such as invalid syntax or missing authentication.", lesson: 5, tags: ["status"] }
    ]
  },
  {
    id: "headers-payloads", title: "Headers & Payloads",
    terms: [
      { term: "HTTP header", def: "A colon-separated key-value metadata field passed before the message body in HTTP requests and responses.", lesson: 6, tags: ["headers"] },
      { term: "MIME type", def: "A standardized two-part identifier (e.g. application/json, text/html) declaring the media format of payload data.", lesson: 6, tags: ["content"] },
      { term: "Content-Length", def: "A header specifying the decimal number of octets (bytes) contained in the message body.", lesson: 6, tags: ["headers"] },
      { term: "CORS", def: "Cross-Origin Resource Sharing: a browser security mechanism using HTTP headers to permit cross-domain resource requests.", lesson: 6, tags: ["security"] }
    ]
  },
  {
    id: "state-caching", title: "State, Cookies & Caching",
    terms: [
      { term: "Cache-Control", def: "The primary HTTP header defining caching policies, expiration times, and revalidation rules.", lesson: 7, tags: ["caching"] },
      { term: "ETag", def: "An entity tag hash representing the specific version of a resource, used for conditional cache validation.", lesson: 7, tags: ["caching"] },
      { term: "HTTP cookie", def: "A small piece of data sent by a server via Set-Cookie and stored in the browser to maintain stateful sessions.", lesson: 8, tags: ["state"] },
      { term: "HttpOnly", def: "A cookie security attribute that blocks JavaScript access to prevent cross-site scripting (XSS) session theft.", lesson: 8, tags: ["security"] }
    ]
  }
];
