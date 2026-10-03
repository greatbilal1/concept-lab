"use strict";

module.exports = {
  id: "frontend-backend",
  title: "Frontend ↔ Backend Communication",
  num: 30,
  emoji: "🔗",
  desc: "How a browser and a server agree on data: requests, payloads, errors, loading states and caching.",
  mission: `# Mission — Frontend ↔ Backend Communication

## Why this course exists

Frontend engineering and backend engineering are often treated as completely separate worlds. Yet real applications live or die on the seam between them: the network boundary. When CORS blocks requests, payloads mismatch, error states are swallowed, or race conditions render stale data, developers blame each other. This course builds a unified understanding of communication contracts, optimistic updates, loading states, polling, and WebSockets.

## What the learner can do at the end

- Overcome and configure Cross-Origin Resource Sharing (CORS) headers and preflight checks without disabling security.
- Design resilient UI state machines that manage loading, success, error, and empty states cleanly.
- Implement optimistic UI updates with automatic rollback on network failure.
- Prevent network race conditions in search autocomplete and tabs using AbortController and request sequencing.
- Compare request-response, long-polling, Server-Sent Events (SSE), and WebSockets for real-time data.

## What this course is NOT

- Not a single-framework guide for Next.js or React Query.
- Not a low-level socket protocol design course.

## Success looks like

When building a dynamic data-fetching UI component, the learner accounts for network latency, handles 4xx/5xx status codes gracefully, implements optimistic rollbacks, and prevents out-of-order race conditions on the first try.
`,
  notes: `# Notes — Frontend ↔ Backend Communication

## Decisions
- Group into four themes: The Network Boundary & CORS, UI State & Optimistic Updates, Race Conditions & Sequencing, and Real-Time Communication.
- Ground lessons in browser DevTools Network tab inspections and resilient UI patterns.
`,
  resources: `# Resources — Frontend ↔ Backend Communication

## Knowledge (primary sources)
- W3C: *Cross-Origin Resource Sharing (CORS)*.
- WHATWG: *Fetch Living Standard* (fetch.spec.whatwg.org).
- MDN Web Docs: *Server-sent events* & *The WebSocket API*.

## Wisdom
- The network is asynchronous, slow, and unreliable. A good frontend never assumes a server request will succeed instantly or in order.
`,
  cheatsheetSections: [
    {
      title: "CORS Header Matrix",
      label: "Cross-Origin configuration",
      code: `// Simple Requests vs Preflight (OPTIONS)
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400  # cache preflight for 24h`,
      lessonN: 2,
      lessonSlug: "cors-preflight-and-security-boundaries",
      lessonTitle: "CORS, preflight, and security boundaries"
    },
    {
      title: "The 4-State UI Machine",
      label: "Component lifecycle states",
      code: `type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success', data: T }
  | { status: 'error', error: Error };`,
      lessonN: 3,
      lessonSlug: "loading-states-empty-states-and-errors",
      lessonTitle: "Loading states, empty states, and errors"
    },
    {
      title: "Optimistic UI Update",
      label: "Update visually first, rollback on error",
      code: `const previousList = currentList;
setList(list => [...list, newItem]); // optimistic update
try {
  await api.addItem(newItem);
} catch (err) {
  setList(previousList); // rollback on error!
  showErrorBanner("Could not save item.");
}`,
      lessonN: 4,
      lessonSlug: "optimistic-updates-and-rollback-patterns",
      lessonTitle: "Optimistic updates and rollback patterns"
    },
    {
      title: "Real-Time Protocols",
      label: "Polling vs SSE vs WebSockets",
      code: `Short Polling: setInterval(() => fetch('/updates'), 5000)
Server-Sent Events: const es = new EventSource('/stream') (1-way server->client)
WebSockets: const ws = new WebSocket('wss://api/ws') (full duplex 2-way)`,
      lessonN: 7,
      lessonSlug: "real-time-sse-and-websockets",
      lessonTitle: "Real-time communication: SSE and WebSockets"
    }
  ],
  glossaryGroups: [
    {
      id: "network-boundary",
      title: "The Network Boundary & CORS",
      terms: [
        { term: "Same-origin policy", def: "A critical browser security model restricting scripts on one origin from accessing data from another origin.", lesson: 1, tags: ["security"] },
        { term: "Origin", def: "The combination of URI scheme (protocol), host domain, and port number (e.g. https://example.com:443).", lesson: 1, tags: ["web"] },
        { term: "CORS preflight", def: "An automatic HTTP OPTIONS request sent by the browser to verify cross-origin permissions before the main request.", lesson: 2, tags: ["cors"] },
        { term: "Access-Control-Allow-Origin", def: "The server response header designating which client origins are permitted to read the response.", lesson: 2, tags: ["cors"] }
      ]
    },
    {
      id: "ui-states",
      title: "UI State & Optimistic Updates",
      terms: [
        { term: "UI state machine", def: "A pattern modeling component states explicitly as idle, loading, success, or error without boolean flags.", lesson: 3, tags: ["ui"] },
        { term: "Empty state", def: "The visual design presented to a user when a successful query returns zero items.", lesson: 3, tags: ["ux"] },
        { term: "Optimistic update", def: "Updating the user interface immediately before the server network confirmation arrives.", lesson: 4, tags: ["ux"] },
        { term: "Rollback", def: "Reverting an optimistic UI change back to its prior state when the underlying network call fails.", lesson: 4, tags: ["resilience"] }
      ]
    },
    {
      id: "race-conditions",
      title: "Race Conditions & Sequencing",
      terms: [
        { term: "Network race condition", def: "A bug where responses to multiple requests arrive out of order, displaying stale data.", lesson: 5, tags: ["concurrency"] },
        { term: "Debounce", def: "A rate-limiting technique delaying function execution until a specified idle duration has passed without new events.", lesson: 5, tags: ["performance"] },
        { term: "Throttle", def: "Enforcing a maximum execution frequency on a function over time, regardless of event frequency.", lesson: 5, tags: ["performance"] },
        { term: "Stale-While-Revalidate", def: "A caching strategy serving cached data immediately while fetching fresh data in the background.", lesson: 6, tags: ["caching"] }
      ]
    },
    {
      id: "real-time",
      title: "Real-Time & Offline Resilience",
      terms: [
        { term: "Server-Sent Events", def: "A standard browser protocol (SSE) enabling a server to stream unilateral text events to clients over HTTP.", lesson: 7, tags: ["real-time"] },
        { term: "WebSocket", def: "A bidirectional, full-duplex persistent communication channel established over a single TCP socket.", lesson: 7, tags: ["websockets"] },
        { term: "Long polling", def: "A technique where a server holds an HTTP request open until new data is ready before responding.", lesson: 7, tags: ["real-time"] },
        { term: "Offline queue", def: "A client storage buffer holding user actions locally to sync when internet connectivity restores.", lesson: 8, tags: ["offline"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-same-origin-policy",
      title: "The Same-Origin Policy",
      topic: "The Network Boundary & CORS",
      anim: "Code",
      lede: "Why does the browser block JavaScript from reading data from another domain? Discover the Same-Origin Policy (SOP), the foundational security barrier of the web.",
      winShort: "Determine whether two URLs share the same origin and explain SOP protections",
      missionLink: "The cornerstone security boundary separating different web applications",
      sec1: {
        title: "The origin definition",
        content: `<p>A web browser is a shared environment where you might have your bank open in one tab and an untrusted entertainment site in another. What stops a malicious script on <code>evil.com</code> from reading your bank account balance?</p><p>The answer is the <b>Same-Origin Policy (SOP)</b>. The browser defines an <b>Origin</b> as the exact tuple of <b>Scheme + Host + Port</b> (e.g. <code>https://bank.com:443</code>). By default, scripts running on one origin cannot inspect or read data returned from a different origin.</p>`,
        keyIdea: "An origin is defined by scheme, host, and port; the browser blocks cross-origin reading by default."
      },
      predict: {
        q: "Do 'http://example.com' and 'https://example.com' share the same origin?",
        a: [
          "No, because their schemes (http vs https) and default ports (80 vs 443) are different",
          "Yes, because their host names are identical",
          "Yes, if they are hosted on the same server",
          "Only on mobile devices"
        ],
        c: 0,
        why: "Scheme, host, and port must all match exactly for two URLs to share the same origin."
      },
      sec2: {
        title: "Comparing origin comparisons",
        content: `<p>Evaluate which URL pairs share an origin and which trigger cross-origin boundaries.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Target: https://api.com:443", lines: ["Base reference origin", "scheme=https, host=api.com, port=443"] },
          { title: "Same Origin (Allowed)", lines: ["https://api.com/v1/users", "https://api.com:443/docs (same tuple)"] },
          { title: "Cross Origin (Blocked)", lines: ["http://api.com (different scheme)", "https://sub.api.com (different host)", "https://api.com:8080 (different port)"] }
        ]
      },
      sec3: {
        title: "Tracing the SOP boundary block",
        content: `<p>Trace how the browser blocks JavaScript from inspecting cross-origin fetch responses.</p>`,
      },
      trace: {
        code: [
          "# Running on origin https://myapp.com",
          "fetch('https://otherdomain.com/data.json')",
          "# Request is sent over network by browser",
          "# Response arrives from server",
          "# Browser checks SOP: Origins do NOT match and no CORS headers exist!",
          "# Browser blocks JavaScript: TypeError: Failed to fetch (CORS block)"
        ],
        steps: [
          { line: 0, vars: { origin: "https://myapp.com" } },
          { line: 1, vars: { target: "https://otherdomain.com" } },
          { line: 4, vars: { check: "SOP rejects access to response payload" } },
          { line: 5, vars: { exception: "JavaScript promise rejected for security" } }
        ]
      },
      practiceIntro: "Test your memory of Same-Origin rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The three parts defining an origin are scheme, host, and <0>.",
          "The browser security rule restricting cross-domain access is the Same-<1> Policy.",
          "Different subdomains (e.g. app.com vs api.com) are considered <2>-origin."
        ],
        blanks: [
          { a: ["port"], why: "Scheme, host, and port define the origin tuple." },
          { a: ["Origin"], why: "Same-Origin Policy (SOP) is the core security boundary." },
          { a: ["cross"], why: "Different host labels constitute different origins." }
        ]
      },
      win: "You can accurately identify origin boundaries and understand why the browser restricts cross-domain data reading.",
      nextTasks: [
        "Check window.location.origin in your browser console on different websites.",
        "Compare whether two subdomains (e.g. docs.github.com vs github.com) share an origin.",
        "Explain why embedding an image via <img> is allowed while reading it via fetch() is restricted."
      ],
      primarySource: "W3C: *The Web Origin Concept* (RFC 6454).",
      quiz: [
        {
          q: "What three components define a web origin?",
          a: [
            "Protocol (scheme), Hostname, and Port number",
            "Path, Query string, and Hash fragment",
            "IP address, MAC address, and Subnet mask",
            "Username, Password, and Database name"
          ],
          c: 0,
          why: "An origin is strictly defined by the tuple of scheme, host, and port."
        },
        {
          q: "Why does the Same-Origin Policy exist in modern web browsers?",
          a: [
            "To prevent malicious websites from stealing sensitive authenticated data from other websites you visit",
            "To speed up the rendering of CSS animations",
            "To force web developers to purchase SSL certificates",
            "To prevent mobile phones from overheating"
          ],
          c: 0,
          why: "Without SOP, any website you visit could freely read emails or banking pages open in other tabs."
        },
        {
          q: "Does the Same-Origin Policy prevent a browser from sending a cross-origin request across the wire?",
          a: [
            "No, the browser often sends the request; SOP prevents JavaScript from READING the response",
            "Yes, the network card physically refuses to transmit the packet",
            "Yes, DNS resolution is blocked for all other domains",
            "Only on wireless Wi-Fi connections"
          ],
          c: 0,
          why: "A crucial distinction: the request often reaches the server; the browser blocks the script from reading it."
        },
        {
          q: "Are 'https://example.com' and 'https://example.com:8443' the same origin?",
          a: [
            "No, because the port numbers (443 default vs 8443) are different",
            "Yes, because their host names and schemes match",
            "Yes, if they use the same SSL certificate",
            "Only on mobile Safari"
          ],
          c: 0,
          why: "A different port number represents a different origin boundary."
        }
      ]
    },
    {
      n: 2,
      id: "cors-preflight-and-security-boundaries",
      title: "CORS, preflight, and security boundaries",
      topic: "The Network Boundary & CORS",
      anim: "Code",
      lede: "Every frontend developer meets the dreaded CORS error. Learn how Cross-Origin Resource Sharing works, why preflight OPTIONS requests occur, and how to fix them properly.",
      winShort: "Configure server-side CORS headers and troubleshoot preflight OPTIONS requests",
      missionLink: "The mechanism that allows controlled, secure cross-domain API communication",
      sec1: {
        title: "Punching a safe hole in the Same-Origin Policy",
        content: `<p>Modern web apps often host their frontend at <code>https://app.example.com</code> and their API at <code>https://api.example.com</code>. Because these are different origins, SOP blocks communication.</p><p><b>CORS (Cross-Origin Resource Sharing)</b> is a protocol that allows the server to explicitly tell the browser: <i>'I trust https://app.example.com to read my data.'</i> The server does this by including the <code>Access-Control-Allow-Origin</code> header in its response.</p>`,
        keyIdea: "CORS is not a frontend error: it is a server-side header configuration granting cross-origin permissions."
      },
      predict: {
        q: "Who enforces the CORS policy: the web server or the client web browser?",
        a: [
          "The client web browser enforces CORS to protect user security",
          "The backend web server blocks the incoming request",
          "The internet service provider router blocks the packet",
          "The operating system firewall"
        ],
        c: 0,
        why: "CORS is a browser security mechanism; curl and backend servers completely ignore CORS rules."
      },
      sec2: {
        title: "Simple requests versus Preflight checks",
        content: `<p>When a request includes custom headers (like Authorization) or JSON Content-Type, the browser sends an OPTIONS preflight check first.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Preflight (OPTIONS)", lines: ["Browser asks: 'Can I send JSON & Bearer token?'", "Origin: https://app.example.com"] },
          { title: "2. Server Approves", lines: ["Access-Control-Allow-Origin: https://app.example.com", "Access-Control-Allow-Headers: Authorization, Content-Type"] },
          { title: "3. Main Request (POST)", lines: ["Browser now sends actual POST /orders payload", "Server returns 201 Created"] }
        ]
      },
      sec3: {
        title: "Tracing preflight negotiation in DevTools",
        content: `<p>Trace how a preflight OPTIONS handshake precedes an authenticated API request.</p>`,
      },
      trace: {
        code: [
          "Browser -> OPTIONS /api/data (Origin: https://app.com, Access-Control-Request-Method: POST)",
          "Server -> 204 No Content (Access-Control-Allow-Origin: https://app.com, Access-Control-Max-Age: 86400)",
          "Browser -> POST /api/data (sends actual payload now that permission is confirmed)",
          "Server -> 200 OK (data delivered successfully to frontend)"
        ],
        steps: [
          { line: 0, vars: { step_1: "browser checks permissions via preflight OPTIONS" } },
          { line: 1, vars: { step_2: "server validates origin and caches preflight for 24h" } },
          { line: 2, vars: { step_3: "browser fires actual authenticated POST request" } },
          { line: 3, vars: { step_4: "data delivered into JavaScript promise" } }
        ]
      },
      practiceIntro: "Test your memory of CORS headers.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The header designating permitted client origins is Access-Control-Allow-<0>.",
          "The HTTP method used by browsers for preflight checks is <1>.",
          "The header caching preflight approval to avoid repeated checks is Access-Control-Max-<2>."
        ],
        blanks: [
          { a: ["Origin"], why: "Access-Control-Allow-Origin specifies trusted origins." },
          { a: ["OPTIONS"], why: "OPTIONS queries server capability before executing the main call." },
          { a: ["Age"], why: "Access-Control-Max-Age caches preflight results in seconds." }
        ]
      },
      win: "You can diagnose and resolve CORS errors on backend servers and optimize preflight performance.",
      nextTasks: [
        "Inspect an OPTIONS preflight request in your browser DevTools Network tab.",
        "Configure CORS middleware in your backend server to allow your local development origin.",
        "Explain why setting Access-Control-Allow-Origin: * disables credentials like cookies."
      ],
      primarySource: "MDN Web Docs: *Cross-Origin Resource Sharing (CORS)* (developer.mozilla.org/en-US/docs/Web/HTTP/CORS).",
      quiz: [
        {
          q: "Why does a curl command succeed against an API that fails with a CORS error in the browser?",
          a: [
            "curl is a command-line tool that does not enforce browser security policies like CORS",
            "curl encrypts traffic differently than browsers",
            "curl bypasses network routers",
            "curl runs in kernel mode"
          ],
          c: 0,
          why: "CORS is strictly enforced by web browsers to protect end users; non-browser tools ignore it."
        },
        {
          q: "What triggers a browser to send a preflight OPTIONS request before making a fetch call?",
          a: [
            "Using non-simple methods (PUT, DELETE, PATCH) or custom headers (Authorization, application/json)",
            "Making any GET request to any website",
            "Clicking a link on an HTML page",
            "Using a computer with a fast processor"
          ],
          c: 0,
          why: "Requests that could alter server state or use custom headers require preflight permission checks."
        },
        {
          q: "Why shouldn't you set 'Access-Control-Allow-Origin: *' on an API that uses cookie authentication?",
          a: [
            "Browsers strictly forbid credentials (cookies, auth headers) when the wildcard '*' origin is used",
            "The wildcard origin causes server memory to leak",
            "The star character is illegal in HTTP header text",
            "It automatically deletes all database records"
          ],
          c: 0,
          why: "Security rule: credentials require explicit allowed origins, never wildcards."
        },
        {
          q: "What does the 'Access-Control-Max-Age' header do in a preflight response?",
          a: [
            "Instructs the browser to cache the preflight result for N seconds, avoiding repeated OPTIONS requests",
            "Sets the maximum age of the user account",
            "Forces the browser to delete the cookie after N seconds",
            "Restricts the age of the developer who wrote the code"
          ],
          c: 0,
          why: "Max-Age caches preflight approval, eliminating the round-trip delay on subsequent calls."
        }
      ]
    },
    {
      n: 3,
      id: "loading-states-empty-states-and-errors",
      title: "Loading states, empty states, and errors",
      topic: "UI State & Optimistic Updates",
      anim: "Code",
      lede: "An API call is not just data: it is a journey through time. Master the 4-state asynchronous UI state machine: idle, loading, success, and error.",
      winShort: "Design comprehensive asynchronous UI states that handle loading, errors, and empty results",
      missionLink: "Prevents UI flickering and broken component states during network operations",
      sec1: {
        title: "The four essential UI states",
        content: `<p>Many junior developers model asynchronous UI with multiple independent booleans: <code>const [loading, setLoading] = useState(false); const [error, setError] = useState(null);</code>. This leads to impossible states: what if both <code>loading</code> and <code>error</code> are true at the same time?</p><p>A resilient frontend models asynchronous communication as a strict <b>State Machine</b> with four mutually exclusive states: <b>1. Idle</b> (not started), <b>2. Loading</b> (awaiting network), <b>3. Success</b> (data received), and <b>4. Error</b> (network or server failure).</p>`,
        keyIdea: "Model asynchronous UI as mutually exclusive states: idle, loading, success, or error."
      },
      predict: {
        q: "What is an 'empty state' in UI engineering?",
        a: [
          "The visual state displayed when an API query succeeds with 200 OK, but returns an empty list ([])",
          "A crash that happens when the computer monitor is turned off",
          "An error code representing a missing server database",
          "A web page that contains no CSS styling"
        ],
        c: 0,
        why: "Empty states guide users when valid searches return zero items, rather than showing a blank screen."
      },
      sec2: {
        title: "The async state machine lifecycle",
        content: `<p>Visualise the deterministic transitions between asynchronous component states.</p>`,
      },
      diagram: {
        boxes: [
          { title: "IDLE", lines: ["initial mount", "user has not submitted"] },
          { title: "LOADING", lines: ["fetch initiated", "render skeleton / spinner"] },
          { title: "SUCCESS", lines: ["data arrived (status 200)", "render list OR empty state"] },
          { title: "ERROR", lines: ["network failure / 500 error", "render user-friendly error banner"] }
        ]
      },
      sec3: {
        title: "Tracing state machine transitions",
        content: `<p>Trace how a state machine transitions cleanly from loading to error without conflicting booleans.</p>`,
      },
      trace: {
        code: [
          "state = { status: 'loading' } # render skeleton screen",
          "try {",
          "    const data = await api.fetchUsers();",
          "    state = { status: 'success', data }; # render user list",
          "} catch (err) {",
          "    state = { status: 'error', message: err.message }; # render retry button",
          "}"
        ],
        steps: [
          { line: 0, vars: { status: "'loading' (spinner active)" } },
          { line: 2, vars: { network: "fetch failed with 500" } },
          { line: 5, vars: { status: "'error' (loading state cleared automatically; no state collision)" } }
        ]
      },
      practiceIntro: "Test your memory of asynchronous UI states.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The placeholder screen shown while data loads is a <0> screen.",
          "The state representing successful fetch with zero items is the <1> state.",
          "Modeling mutually exclusive states prevents impossible <2> collisions."
        ],
        blanks: [
          { a: ["skeleton"], why: "Skeleton screens maintain layout geometry during load." },
          { a: ["empty"], why: "Empty states provide helpful onboarding when lists have 0 items." },
          { a: ["state", "boolean"], why: "State machines eliminate impossible boolean flag combinations." }
        ]
      },
      win: "You can build resilient frontend components that handle every phase of asynchronous data fetching without visual bugs.",
      nextTasks: [
        "Replace multiple boolean flags (isLoading, isError) with a single status state string.",
        "Implement a skeleton loading placeholder instead of an abrupt generic spinner.",
        "Design an engaging empty state with an action button when a search returns zero results."
      ],
      primarySource: "Kent C. Dodds: *Stop using isLoading booleans* (kentcdodds.com/blog/stop-using-isloading-booleans).",
      quiz: [
        {
          q: "Why is a single 'status' state preferred over separate 'isLoading' and 'isError' booleans?",
          a: [
            "It mathematically prevents impossible states where both isLoading and isError are true simultaneously",
            "It saves fifty megabytes of browser RAM memory",
            "Modern JavaScript compilers forbid more than one boolean per file",
            "It speeds up internet connection bandwidth"
          ],
          c: 0,
          why: "A single status union ('idle' | 'loading' | 'success' | 'error') ensures states are mutually exclusive."
        },
        {
          q: "What should a user-friendly error state always provide to the user?",
          a: [
            "A clear, non-technical explanation of the problem and an actionable 'Retry' button",
            "A full database stack trace with internal file paths",
            "A link to the developer's personal Twitter account",
            "An automatic reload loop that refreshes twenty times per second"
          ],
          c: 0,
          why: "Users need to understand what happened and have a clear recovery path (like a retry action)."
        },
        {
          q: "What is the benefit of a skeleton loading screen over a generic centered spinner?",
          a: [
            "It previews the layout geometry of the incoming content, reducing perceived latency and layout shift (CLS)",
            "It downloads the data fifty percent faster from the server",
            "It eliminates the need for CSS flexbox",
            "It works when the user monitor is unplugged"
          ],
          c: 0,
          why: "Skeletons stabilize visual layout and reduce Cumulative Layout Shift (CLS) as content loads."
        },
        {
          q: "When should an empty state be rendered?",
          a: [
            "When an asynchronous fetch succeeds, but the returned data array contains zero items",
            "Whenever an unhandled server error occurs",
            "While the network request is still in flight",
            "Only when the user's internet is disconnected"
          ],
          c: 0,
          why: "Empty states handle valid, zero-item responses (e.g. empty inbox, no search matches)."
        }
      ]
    },
    {
      n: 4,
      id: "optimistic-updates-and-rollback-patterns",
      title: "Optimistic updates and rollback patterns",
      topic: "UI State & Optimistic Updates",
      anim: "Code",
      lede: "Why wait for the server before showing a 'like' or checkmark? Master optimistic UI updates: rendering success immediately and rolling back gracefully if the network fails.",
      winShort: "Implement optimistic UI updates with automatic state rollback on network rejection",
      missionLink: "Creates snappy, instantaneous user experiences over high-latency networks",
      sec1: {
        title: "Perceived performance through optimism",
        content: `<p>On mobile networks, an API request can take 300 to 800 milliseconds. If a user clicks 'Like' on a post and waits nearly a second for a spinner before the heart turns red, the app feels sluggish and unresponsive.</p><p>With an <b>Optimistic Update</b>, you update the UI state <i>immediately</i> upon user action, assuming the server will succeed. In the background, you dispatch the network request. If the server confirms, you update IDs; if the server fails, you <b>rollback</b> the UI to its previous snapshot and notify the user.</p>`,
        keyIdea: "Update the UI immediately for instant feedback, but retain a snapshot to rollback if the network fails."
      },
      predict: {
        q: "What must you always save before applying an optimistic UI update?",
        a: [
          "A snapshot of the previous state so you can restore it if the network request fails",
          "The user's credit card billing address",
          "A copy of the entire browser history",
          "The server's database root password"
        ],
        c: 0,
        why: "Without a snapshot of prior state, you cannot recover if the server returns an error."
      },
      sec2: {
        title: "The optimistic update lifecycle",
        content: `<p>Follow the sequence from instant UI mutation through server confirmation or error rollback.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. User Action", lines: ["User clicks 'Delete Todo'", "save snapshot: [Item 1, Item 2]"] },
          { title: "2. Optimistic Mutation", lines: ["render UI immediately without Item 1", "dispatch DELETE /api/todos/1 in background"] },
          { title: "3A. Success", lines: ["server returns 204 No Content", "discard snapshot; state confirmed!"] },
          { title: "3B. Failure (Rollback)", lines: ["server returns 500 error", "revert UI to snapshot: [Item 1, Item 2]", "show: 'Could not delete item'"] }
        ]
      },
      sec3: {
        title: "Tracing optimistic rollback in action",
        content: `<p>Trace how a failed toggle operation recovers cleanly back to its original state.</p>`,
      },
      trace: {
        code: [
          "const snapshot = post.isLiked; // false",
          "setPost({ ...post, isLiked: true }); // instant UI update: heart turns red",
          "try {",
          "    await api.likePost(post.id);",
          "} catch (err) {",
          "    setPost({ ...post, isLiked: snapshot }); // rollback: heart reverts to gray",
          "    toast.error('Network failed. Please try again.');",
          "}"
        ],
        steps: [
          { line: 0, vars: { initial: "isLiked: false" } },
          { line: 1, vars: { optimistic: "heart updated to red in 0ms" } },
          { line: 3, vars: { network: "request fails with 503 Service Unavailable" } },
          { line: 5, vars: { rollback: "state restored to false; error toast displayed" } }
        ]
      },
      practiceIntro: "Test your memory of optimistic UI patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Updating the UI before server confirmation is an <0> update.",
          "Reverting UI back to prior state after a network error is a <1>.",
          "The saved copy of state used for recovery is a <2>."
        ],
        blanks: [
          { a: ["optimistic"], why: "Optimistic updates assume success for speed." },
          { a: ["rollback"], why: "Rollbacks restore prior state upon failure." },
          { a: ["snapshot"], why: "A state snapshot preserves previous values." }
        ]
      },
      win: "You can implement snappier user interfaces using optimistic mutations while ensuring data integrity with automated rollbacks.",
      nextTasks: [
        "Implement an optimistic like button that toggles visually in 0ms.",
        "Simulate a network failure in DevTools to verify that the rollback restores state cleanly.",
        "Display a non-intrusive toast notification when a rollback occurs."
      ],
      primarySource: "TanStack Query Documentation: *Optimistic Updates* (tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates).",
      quiz: [
        {
          q: "What is the primary benefit of optimistic UI updates?",
          a: [
            "Instantaneous perceived performance: the user interface responds in 0ms without waiting for network round-trips",
            "It permanently eliminates the need for backend database validation",
            "It reduces the physical size of HTML files",
            "It enables dark mode in older web browsers"
          ],
          c: 0,
          why: "Eliminating perceived waiting time makes applications feel instant and native."
        },
        {
          q: "When is it inappropriate or dangerous to use optimistic UI updates?",
          a: [
            "High-stakes destructive transactions like submitting a financial wire transfer or deleting an organization",
            "Toggling a favorite star icon on a blog post",
            "Marking a todo item as completed",
            "Typing text into a search filter box"
          ],
          c: 0,
          why: "Financial transactions and irreversible operations must be verified by the server before confirmation."
        },
        {
          q: "What happens if an optimistic update does NOT implement a rollback mechanism when a network call fails?",
          a: [
            "The UI displays false information that does not match server reality (a phantom state)",
            "The web server deletes the database",
            "The user computer freezes",
            "The browser crashes with a memory leak"
          ],
          c: 0,
          why: "Without rollback, the user believes an action succeeded when the server actually rejected it."
        },
        {
          q: "How should optimistic list additions handle temporary IDs before the server returns the permanent database ID?",
          a: [
            "Generate a temporary client UUID, and swap it for the real server ID once the 201 response arrives",
            "Hardcode the ID as 0 for all items",
            "Wait ten minutes before allowing the user to click the item",
            "Set the ID to undefined"
          ],
          c: 0,
          why: "Temporary client UUIDs allow local editing until permanent server IDs arrive."
        }
      ]
    },
    {
      n: 5,
      id: "race-conditions-and-request-sequencing",
      title: "Race conditions and request sequencing",
      topic: "Race Conditions & Sequencing",
      anim: "Code",
      lede: "Fast typing breaks slow APIs. Discover why rapid search queries can return out of order, and how to fix race conditions using AbortController and debouncing.",
      winShort: "Prevent out-of-order search autocomplete bugs using debouncing and AbortController",
      missionLink: "Eliminates subtle asynchronous bugs where stale network data overwrites fresh data",
      sec1: {
        title: "The out-of-order response trap",
        content: `<p>Imagine a search input. The user types 'cat', triggering Request A. Then they type 's' ('cats'), triggering Request B. Request B is sent <i>after</i> Request A, but due to network routing, <b>Request B finishes in 50ms, while Request A takes 300ms</b>.</p><p>What happens? Request B renders results for 'cats'. Then 250ms later, Request A finally arrives and overwrites the screen with results for 'cat'! The user typed 'cats', but sees results for 'cat'. This is a classic <b>network race condition</b>.</p>`,
        keyIdea: "Later requests can arrive before earlier requests; always cancel or discard stale in-flight responses."
      },
      predict: {
        q: "How can you cancel an in-flight search fetch request when the user types a new character?",
        a: [
          "Call abort() on the AbortController associated with the previous request before creating the new one",
          "Restart the user web browser",
          "Set the input value to an empty string",
          "Turn off the server Wi-Fi"
        ],
        c: 0,
        why: "Calling controller.abort() terminates the stale in-flight request so it can never overwrite fresh results."
      },
      sec2: {
        title: "Debouncing versus cancellation",
        content: `<p>Combine debouncing (delaying request firing) with AbortController (cancelling active requests).</p>`,
      },
      diagram: {
        boxes: [
          { title: "User Types Rapidly", lines: ["c -> ca -> cat -> cats", "typing events fire 10 times in 1s"] },
          { title: "Debounce (300ms)", lines: ["waits for typing to pause", "fires ONE request instead of 10!"] },
          { title: "AbortController", lines: ["if previous request still in flight:", "controller.abort() cancels stale socket"] }
        ]
      },
      sec3: {
        title: "Tracing search autocomplete cancellation",
        content: `<p>Trace how AbortController eliminates race conditions on a dynamic search input.</p>`,
      },
      trace: {
        code: [
          "let controller = null;",
          "async function handleSearch(query) {",
          "    if (controller) controller.abort(); # cancel previous request!",
          "    controller = new AbortController();",
          "    const res = await fetch(`/search?q=${query}`, { signal: controller.signal });",
          "    render(await res.json());",
          "}"
        ],
        steps: [
          { line: 0, vars: { init: "controller reference tracked in scope" } },
          { line: 2, vars: { check: "stale in-flight search request aborted instantly" } },
          { line: 3, vars: { fresh: "new controller created for current query" } },
          { line: 5, vars: { render: "only the freshest query response ever renders to screen" } }
        ]
      },
      practiceIntro: "Test your memory of race condition prevention.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "When responses arrive in a different order than sent, it is a race <0>.",
          "The technique delaying execution until typing stops for N milliseconds is <1>.",
          "The web API object used to abort in-flight fetch calls is <2>Controller."
        ],
        blanks: [
          { a: ["condition"], why: "Race conditions occur when timing affects outcome." },
          { a: ["debouncing", "debounce"], why: "Debounce waits for idle intervals before firing." },
          { a: ["Abort"], why: "AbortController cancels pending fetch requests." }
        ]
      },
      win: "You can implement rock-solid autocomplete search and tab switching that never display stale out-of-order data.",
      nextTasks: [
        "Implement a debounce helper function with a 300ms delay timer.",
        "Add AbortController cancellation to an autocomplete search component.",
        "Simulate out-of-order responses in DevTools by throttling a request to observe race conditions."
      ],
      primarySource: "MDN Web Docs: *AbortSignal* (developer.mozilla.org/en-US/docs/Web/API/AbortSignal).",
      quiz: [
        {
          q: "What is the difference between debouncing and throttling?",
          a: [
            "Debouncing waits for an idle pause before executing; throttling executes at most once per fixed time interval",
            "Debouncing is for mouse events; throttling is for keyboards",
            "Debouncing speeds up the CPU; throttling slows down the GPU",
            "There is no difference between them"
          ],
          c: 0,
          why: "Debounce resets its timer on every event; throttle enforces a steady maximum execution rate."
        },
        {
          q: "Why does a search input without cancellation frequently show the wrong results after fast typing?",
          a: [
            "An earlier slower request can resolve AFTER a later faster request, overwriting the screen with stale data",
            "Browsers delete search text if typed faster than 50 words per minute",
            "Databases reverse the spelling of words when busy",
            "Search queries must be submitted using HTTP POST"
          ],
          c: 0,
          why: "Variable network latency means arrival order does not match dispatch order."
        },
        {
          q: "What error does a fetch request throw when cancelled via an AbortController signal?",
          a: [
            "A DOMException with the name 'AbortError'",
            "A SyntaxError",
            "A TypeError: Network Failed",
            "It does not throw; it returns null silently"
          ],
          c: 0,
          why: "Fetch rejects with an AbortError DOMException, which you should catch and ignore."
        },
        {
          q: "How can you distinguish an intentional user abort from a genuine network crash?",
          a: [
            "Check if 'err.name === 'AbortError'' in your catch block",
            "Check if the computer screen is still turned on",
            "Look at the color of the browser window border",
            "Ask the user if they meant to cancel"
          ],
          c: 0,
          why: "Checking err.name === 'AbortError' allows you to silence cancellations while alerting on real failures."
        }
      ]
    },
    {
      n: 6,
      id: "client-side-caching-and-swr",
      title: "Client-side caching and SWR",
      topic: "Race Conditions & Sequencing",
      anim: "Code",
      lede: "Stop refetching data every time a user switches tabs. Master client-side caching strategies and the Stale-While-Revalidate (SWR) pattern.",
      winShort: "Implement client-side caching and Stale-While-Revalidate data synchronization",
      missionLink: "Dramatically reduces redundant network requests and server load",
      sec1: {
        title: "The Stale-While-Revalidate pattern",
        content: `<p>In traditional data fetching, every screen transition shows a loading spinner while waiting for fresh data. This feels slow even on fast connections.</p><p>The <b>Stale-While-Revalidate (SWR)</b> strategy (pioneered by HTTP RFC 5861 and popularized by tools like React Query and SWR) solves this: <b>1.</b> Serve cached (stale) data <i>immediately in 0ms</i>, <b>2.</b> Send a background fetch to revalidate with the server, and <b>3.</b> Silently update the UI if the fresh data has changed.</p>`,
        keyIdea: "Serve cached data immediately in 0ms, then silently revalidate in the background."
      },
      predict: {
        q: "What does the user see when navigating to a profile page under the Stale-While-Revalidate pattern?",
        a: [
          "The cached profile renders instantly with zero loading spinner, while fresh updates sync in the background",
          "A blank white screen for 2 seconds",
          "A pop-up modal asking to clear browser cookies",
          "An alert stating the data is expired"
        ],
        c: 0,
        why: "SWR displays existing cached data instantly while validating freshness in the background."
      },
      sec2: {
        title: "The SWR workflow sequence",
        content: `<p>Observe how client caches eliminate loading spinners on repeat visits.</p>`,
      },
      diagram: {
        boxes: [
          { title: "First Visit", lines: ["no cache present", "render skeleton -> fetch -> populate cache"] },
          { title: "Repeat Visit (0ms)", lines: ["cache hit!", "render cached data INSTANTLY in 0ms"] },
          { title: "Background Sync", lines: ["fetch latest data silently", "update UI seamlessly if modified"] }
        ]
      },
      sec3: {
        title: "Tracing an in-memory client cache map",
        content: `<p>Trace how a simple Map cache fulfills repeated requests without hitting the network.</p>`,
      },
      trace: {
        code: [
          "const cache = new Map();",
          "async function getCached(url) {",
          "    if (cache.has(url)) return cache.get(url); # 0ms cache hit!",
          "    const data = await (await fetch(url)).json();",
          "    cache.set(url, data);",
          "    return data;",
          "}"
        ],
        steps: [
          { line: 0, vars: { store: "in-memory Map cache initialized" } },
          { line: 2, vars: { call_1: "url not in cache -> fetches from network (150ms)" } },
          { line: 4, vars: { saved: "response saved to cache Map" } },
          { line: 2, vars: { call_2: "second call for same url -> returns from Map in 0.1ms!" } }
        ]
      },
      practiceIntro: "Test your memory of client-side caching.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The pattern serving stale data while fetching fresh updates is Stale-While-<0>.",
          "The acronym SWR stands for Stale While <1>.",
          "Invalidating a client cache when an edit occurs is cache <2>."
        ],
        blanks: [
          { a: ["Revalidate"], why: "Stale-While-Revalidate provides instant rendering." },
          { a: ["Revalidate"], why: "SWR is the standard abbreviation." },
          { a: ["invalidation", "mutation"], why: "Cache invalidation purges stale entries after updates." }
        ]
      },
      win: "You can implement client-side caching strategies that deliver instant 0ms page transitions while keeping data fresh.",
      nextTasks: [
        "Implement a simple in-memory Map cache with a 60-second TTL.",
        "Refetch data automatically when the user refocuses the browser window (window focus revalidation).",
        "Invalidate and refetch a cached query after a successful POST mutation."
      ],
      primarySource: "IETF RFC 5861: *HTTP Cache-Control Extensions for Stale Content*.",
      quiz: [
        {
          q: "What problem does Stale-While-Revalidate (SWR) solve for user experience?",
          a: [
            "It eliminates jarring loading spinners on repeat page visits by serving cached data instantly",
            "It compresses video files on the client device",
            "It eliminates the need for backend servers",
            "It translates text into other spoken languages"
          ],
          c: 0,
          why: "SWR provides instantaneous UI rendering on repeat visits by backgrounding network checks."
        },
        {
          q: "What is 'Window Focus Revalidation' in modern data-fetching libraries?",
          a: [
            "Automatically refreshing data when the user switches back to the browser tab to keep data current",
            "Adjusting the monitor brightness when the window is clicked",
            "Clearing all user passwords whenever a tab loses focus",
            "Minimizing background windows automatically"
          ],
          c: 0,
          why: "Focus revalidation ensures that when users return to a tab, they view fresh data."
        },
        {
          q: "What should happen to a cached list of items when a user successfully creates a new item via POST?",
          a: [
            "The client should invalidate or update the cached list query so the new item appears immediately",
            "The cache should be permanently disabled forever",
            "The browser should restart",
            "All cached items should be deleted without refetching"
          ],
          c: 0,
          why: "Mutations must trigger cache invalidation so views reflect the newly created entity."
        },
        {
          q: "What is the difference between an in-memory client cache and browser HTTP caching?",
          a: [
            "Client caches (like Map or React Query) manage component state and deduplicate requests in JavaScript memory; HTTP cache is managed by the browser engine",
            "HTTP cache only works on images; client cache only works on numbers",
            "Client cache is forbidden on mobile phones",
            "There is no difference between them"
          ],
          c: 0,
          why: "Client caches operate in JavaScript memory to avoid redundant UI renders and component re-fetches."
        }
      ]
    },
    {
      n: 7,
      id: "real-time-sse-and-websockets",
      title: "Real-time communication: SSE and WebSockets",
      topic: "Real-Time & Offline Resilience",
      anim: "Code",
      lede: "When HTTP polling is too slow: compare Short Polling, Long Polling, Server-Sent Events (SSE), and WebSockets for live chat, notifications, and streaming.",
      winShort: "Select between Polling, Server-Sent Events, and WebSockets based on communication requirements",
      missionLink: "Guides protocol selection for live, streaming, and collaborative web applications",
      sec1: {
        title: "Moving beyond request-response",
        content: `<p>Traditional HTTP requires the client to ask before the server can speak. For live features like chat, stock tickers, or AI token streaming, repeated polling (<code>setInterval(fetch, 1000)</code>) wastes massive bandwidth on empty responses.</p><p>For unidirectional server-to-client streaming (like AI text tokens or live sports scores), <b>Server-Sent Events (SSE)</b> is lightweight, runs over standard HTTP, and has automatic reconnection. For bidirectional, low-latency communication (like multiplayer games or collaborative editing), <b>WebSockets</b> establishes a full-duplex TCP channel.</p>`,
        keyIdea: "Use SSE for unidirectional server-to-client streaming; use WebSockets for bidirectional full-duplex communication."
      },
      predict: {
        q: "Which protocol is the most lightweight and native choice for streaming AI text responses from server to client?",
        a: [
          "Server-Sent Events (SSE) using the standard EventSource API over HTTP",
          "Opening a new WebSocket connection for every word",
          "Sending an email to the client for each token",
          "Polling every 1 millisecond using setInterval"
        ],
        c: 0,
        why: "SSE runs over plain HTTP, supports streaming text natively, and requires no protocol upgrade."
      },
      sec2: {
        title: "The real-time protocol spectrum",
        content: `<p>Compare the four approaches to delivering real-time updates to web clients.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Short Polling", lines: ["fetch every 5s", "wasteful on empty checks", "simplest to implement"] },
          { title: "Server-Sent Events (SSE)", lines: ["text/event-stream over HTTP", "unidirectional (server -> client)", "built-in auto reconnect"] },
          { title: "WebSockets (ws://)", lines: ["protocol upgrade to full duplex", "bidirectional (client <-> server)", "ideal for chat and gaming"] }
        ]
      },
      sec3: {
        title: "Tracing an SSE event stream",
        content: `<p>Trace how a server streams events over a persistent HTTP connection using text/event-stream.</p>`,
      },
      trace: {
        code: [
          "# Client opens stream: const es = new EventSource('/api/live-scores');",
          "# Server responds: Content-Type: text/event-stream",
          "data: {'match': 'Arsenal vs Chelsea', 'score': '1-0'}\\n\\n",
          "# 10 seconds later, server sends next event over SAME connection:",
          "data: {'match': 'Arsenal vs Chelsea', 'score': '1-1'}\\n\\n"
        ],
        steps: [
          { line: 0, vars: { connection: "single HTTP persistent connection opened" } },
          { line: 1, vars: { mime: "Content-Type: text/event-stream active" } },
          { line: 2, vars: { event_1: "client EventSource onmessage fires with score 1-0" } },
          { line: 4, vars: { event_2: "client receives score 1-1 without making new requests" } }
        ]
      },
      practiceIntro: "Test your recall of real-time communication protocols.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The unidirectional streaming protocol over HTTP is Server-Sent <0>.",
          "The browser JavaScript API for receiving SSE streams is Event<1>.",
          "The full-duplex bidirectional protocol initiated via an HTTP upgrade is <2>."
        ],
        blanks: [
          { a: ["Events", "SSE"], why: "Server-Sent Events streams data from server to client." },
          { a: ["Source"], why: "window.EventSource is the standard SSE client interface." },
          { a: ["WebSocket", "WebSockets"], why: "WebSockets provides two-way socket communication." }
        ]
      },
      win: "You can choose the optimal real-time communication protocol for any feature, avoiding wasteful polling architectures.",
      nextTasks: [
        "Stream text chunks from a backend endpoint using text/event-stream.",
        "Consume the stream in frontend JavaScript using the EventSource API.",
        "Inspect an active WebSocket frame stream in DevTools Network WS panel."
      ],
      primarySource: "MDN Web Docs: *Server-sent events* & *Writing WebSocket client applications* (developer.mozilla.org).",
      quiz: [
        {
          q: "What is the primary architectural limitation of Server-Sent Events (SSE)?",
          a: [
            "It is strictly unidirectional: only the server can push data to the client; client sends data via standard HTTP",
            "It cannot transmit text strings",
            "It only works on desktop Windows computers",
            "It requires purchasing dedicated hardware servers"
          ],
          c: 0,
          why: "SSE is one-way (server to client); sending data upstream requires separate HTTP requests."
        },
        {
          q: "Why are WebSockets preferred over HTTP polling for multiplayer online games?",
          a: [
            "WebSockets provide bidirectional, full-duplex communication with negligible per-frame header overhead",
            "WebSockets automatically encrypt all audio chat",
            "WebSockets run without electrical power",
            "WebSockets guarantee that players never lose connection"
          ],
          c: 0,
          why: "Zero HTTP header overhead and sub-millisecond bidirectional sockets are vital for gaming."
        },
        {
          q: "What happens if a network hiccup breaks an active EventSource (SSE) connection?",
          a: [
            "The browser's native EventSource client automatically attempts to reconnect and resumes listening",
            "The web browser window closes immediately",
            "The operating system reboots",
            "The user must manually refresh the web page"
          ],
          c: 0,
          why: "EventSource includes built-in exponential reconnect logic and last-event-id tracking."
        },
        {
          q: "How does a WebSocket connection begin its lifecycle?",
          a: [
            "As a standard HTTP GET request with an 'Upgrade: websocket' header, upgrading the socket to binary framing",
            "By opening an SSH terminal session",
            "By sending an email to the server administrator",
            "Through a Bluetooth wireless handshake"
          ],
          c: 0,
          why: "WebSockets initiate via an HTTP 101 Switching Protocols handshake before switching to framing."
        }
      ]
    },
    {
      n: 8,
      id: "offline-resilience-and-synchronization",
      title: "Offline resilience and synchronization",
      topic: "Real-Time & Offline Resilience",
      anim: "Code",
      lede: "What happens when your user steps into an elevator or subway? Learn how to design offline queues, IndexedDB local persistence, and background sync.",
      winShort: "Design offline storage queues that buffer actions and synchronize upon reconnection",
      missionLink: "Ensures web applications remain functional during intermittent network outages",
      sec1: {
        title: "The offline-first mindset",
        content: `<p>Mobile users do not have continuous, perfect 5G connections: they ride in subways, enter parking garages, and suffer packet loss. An application that crashes or loses unsaved forms when offline frustrates users.</p><p>An <b>offline-first architecture</b> stores data locally first (in <b>IndexedDB</b> or <code>localStorage</code>) and treats the local database as the primary source of truth. Mutations made offline are pushed into an <b>offline action queue</b> and synchronized with the backend once connectivity returns.</p>`,
        keyIdea: "Write to local persistence first; queue network mutations to sync when connectivity restores."
      },
      predict: {
        q: "Which browser storage API is designed for storing large amounts of structured data and binary files offline?",
        a: [
          "IndexedDB (transactional, asynchronous NoSQL database)",
          "document.cookie (limited to 4KB)",
          "localStorage (limited to 5MB, synchronous)",
          "The computer system clipboard"
        ],
        c: 0,
        why: "IndexedDB provides gigabytes of asynchronous, transactional client-side storage."
      },
      sec2: {
        title: "The offline sync queue pattern",
        content: `<p>Observe how offline user edits are queued locally and flushed upon detecting 'online' events.</p>`,
      },
      diagram: {
        boxes: [
          { title: "User Action (Offline)", lines: ["edit note, tap Save", "write immediately to IndexedDB"] },
          { title: "Offline Action Queue", lines: ["enqueue: { action: 'UPDATE', id: 5 }", "persisted in IndexedDB"] },
          { title: "Reconnection (Online)", lines: ["window.addEventListener('online')", "flush queue to server in order!"] }
        ]
      },
      sec3: {
        title: "Tracing conflict resolution on sync",
        content: `<p>Trace how a client detects if a record was modified on the server while the client was offline.</p>`,
      },
      trace: {
        code: [
          "# Local client edited Note #42 (base version: 3)",
          "# Meanwhile, another user edited Note #42 on the server (now version: 4)",
          "# Client sends: PUT /notes/42 with header If-Match: 'v3'",
          "# Server detects conflict -> 412 Precondition Failed!",
          "# Client prompts user: 'Server has newer version — merge changes?'"
        ],
        steps: [
          { line: 0, vars: { local_edit: "note 42 modified offline" } },
          { line: 2, vars: { conditional_sync: "sends with expected version v3" } },
          { line: 3, vars: { conflict: "server rejects: version is now v4" } },
          { line: 4, vars: { resolution: "data collision caught safely without silent overwrites" } }
        ]
      },
      practiceIntro: "Test your memory of offline synchronization concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The browser event firing when network connectivity returns is window on<0>.",
          "The large-capacity transactional browser database is <1>.",
          "Preventing stale offline edits from overwriting server data uses <2> resolution."
        ],
        blanks: [
          { a: ["online"], why: "The 'online' event fires when connectivity restores." },
          { a: ["IndexedDB"], why: "IndexedDB provides large-capacity asynchronous storage." },
          { a: ["conflict"], why: "Conflict resolution handles simultaneous edits safely." }
        ]
      },
      win: "You can architect web applications that function seamlessly offline and sync data reliably upon reconnection.",
      nextTasks: [
        "Listen for window.addEventListener('online') and 'offline' in your console.",
        "Store and retrieve an object from IndexedDB using an open-source wrapper like idb.",
        "Implement a simple localStorage action queue that flushes upon the online event."
      ],
      primarySource: "Alex Feyerke: *Offline First* (offlinefirst.org).",
      quiz: [
        {
          q: "What is the primary advantage of IndexedDB over localStorage for offline web applications?",
          a: [
            "IndexedDB is asynchronous, transactional, supports indexes, and can store hundreds of megabytes of structured data",
            "IndexedDB automatically uploads files to social media",
            "localStorage only works when connected to the internet",
            "IndexedDB is written in Python"
          ],
          c: 0,
          why: "localStorage is synchronous (blocks the UI) and capped at 5MB; IndexedDB is high-capacity and async."
        },
        {
          q: "What is 'Last-Write-Wins' in conflict resolution, and why is it dangerous?",
          a: [
            "The latest arriving timestamp blindly overwrites earlier edits, potentially erasing hours of offline work without warning",
            "It turns off the database server",
            "It requires all users to write code in the terminal",
            "It is the only conflict strategy permitted by law"
          ],
          c: 0,
          why: "Blindly overwriting based on arrival timestamp silently destroys conflicting collaborative edits."
        },
        {
          q: "How does the 'navigator.onLine' property behave in web browsers?",
          a: [
            "Returns a boolean indicating whether the device is connected to a local network (though internet access might still be blocked)",
            "Measures the exact download speed in gigabits per second",
            "Tests if the user has paid their broadband internet bill",
            "Only returns true on Mondays"
          ],
          c: 0,
          why: "navigator.onLine checks local network link status; true does not guarantee the internet is reachable."
        },
        {
          q: "What is the purpose of an offline mutation queue?",
          a: [
            "To record user actions in local storage while offline, replaying them in sequence when connectivity returns",
            "To delete all unsaved forms when the internet drops",
            "To play background music while the user waits",
            "To encrypt the user hard drive"
          ],
          c: 0,
          why: "An action queue buffers user intentions and guarantees sequential replay upon reconnection."
        }
      ]
    }
  ]
};
