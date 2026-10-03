"use strict";

module.exports = {
  id: "http",
  title: "HTTP Explained Visually",
  num: 22,
  emoji: "🔌",
  desc: "Requests, responses, methods, headers and status codes — the protocol every web app speaks.",
  mission: `# Mission — HTTP Explained Visually

## Why this course exists

Hypertext Transfer Protocol (HTTP) is the universal application layer protocol of the modern web. Every web page render, mobile app interaction, and microservice RPC is an HTTP conversation. Yet many developers treat HTTP as magic black-box fetch calls. When status codes mislead, CORS blocks a request, or cache headers cause stale data, developers struggle. This course turns HTTP into a transparent plaintext protocol you can read, debug, and design with mastery.

## What the learner can do at the end

- Dissect raw HTTP/1.1 and HTTP/2 requests and responses down to the byte.
- Select and implement idempotent and safe HTTP methods (GET, POST, PUT, PATCH, DELETE) accurately.
- Interpret and return standard HTTP status codes across the 2xx, 3xx, 4xx, and 5xx ranges.
- Configure caching headers and conditional requests using ETags and Cache-Control.
- Manage stateful sessions over stateless HTTP using secure cookies and headers.

## What this course is NOT

- Not a framework guide for Express, Django, or Spring.
- Not a low-level binary framing guide for HTTP/3 QUIC packet parsers.

## Success looks like

When inspecting an API bug in browser developer tools or curl, the learner reads the raw request and response headers and identifies missing authorization, invalid content-types, or caching anomalies in under two minutes.
`,
  notes: `# Notes — HTTP Explained Visually

## Decisions
- Group into four themes: Request/Response, Methods & Status, Headers & Payloads, and Caching & State.
- Anchor all lessons in raw HTTP text and curl commands to emphasize plaintext transparency.
`,
  resources: `# Resources — HTTP Explained Visually

## Knowledge (primary sources)
- *HTTP: The Definitive Guide* by Gourley and Totty (O'Reilly) — The classic reference work on HTTP protocol architecture.
- IETF RFC 9110: *HTTP Semantics* (2022) — The modern unified authoritative standard for HTTP.
- MDN Web Docs: *HTTP Overview and Guide* (developer.mozilla.org).

## Wisdom
- HTTP is a stateless protocol built on human-readable text conventions. If you can read a text header, you can debug any web app.
`,
  cheatsheetSections: [
    {
      title: "Request & Response",
      label: "Raw HTTP message format",
      code: `GET /v1/users/42 HTTP/1.1
Host: api.example.com
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 38

{"id": 42, "name": "Ada Lovelace"}`,
      lessonN: 2,
      lessonSlug: "anatomy-of-an-http-request",
      lessonTitle: "Anatomy of an HTTP request"
    },
    {
      title: "Method Semantics",
      label: "Safety and idempotency",
      code: `GET    /items     # Safe, Idempotent (Read)
POST   /items     # Unsafe, Non-idempotent (Create)
PUT    /items/1   # Unsafe, Idempotent (Replace)
PATCH  /items/1   # Unsafe, Non-idempotent (Partial)
DELETE /items/1   # Unsafe, Idempotent (Remove)`,
      lessonN: 4,
      lessonSlug: "http-methods-get-post-put-delete",
      lessonTitle: "HTTP methods: GET, POST, PUT, DELETE"
    },
    {
      title: "Status Code Matrix",
      label: "Standard response codes",
      code: `200 OK          # Success with body
201 Created     # Resource created (Location header)
204 No Content  # Success without body
301 Moved Perm  # Permanent redirect
304 Not Modified# Cached copy is fresh
400 Bad Request # Invalid client syntax/params
401 Unauth      # Missing or invalid credentials
403 Forbidden   # Authenticated but not permitted
404 Not Found   # Resource does not exist
500 Server Err  # Unhandled backend crash
502 Bad Gateway # Upstream proxy failure`,
      lessonN: 5,
      lessonSlug: "status-codes-and-what-they-mean",
      lessonTitle: "Status codes and what they mean"
    },
    {
      title: "Caching & Cookies",
      label: "Cache-Control and State",
      code: `Cache-Control: max-age=3600, must-revalidate
ETag: "33a64df551425fcc3"
If-None-Match: "33a64df551425fcc3" -> 304 Not Modified

Set-Cookie: session=xyz; HttpOnly; Secure; SameSite=Strict`,
      lessonN: 7,
      lessonSlug: "caching-and-conditional-requests",
      lessonTitle: "Caching and conditional requests"
    }
  ],
  glossaryGroups: [
    {
      id: "request-response",
      title: "The Request-Response Cycle",
      terms: [
        { term: "HTTP", def: "Hypertext Transfer Protocol: the application-level protocol powering data communication across the World Wide Web.", lesson: 1, tags: ["protocols"] },
        { term: "Statelessness", def: "A protocol property where each request is processed independently without the server retaining client state between requests.", lesson: 1, tags: ["architecture"] },
        { term: "Request line", def: "The first line of an HTTP request, containing the method, path, and protocol version (e.g. GET / HTTP/1.1).", lesson: 2, tags: ["format"] },
        { term: "Status line", def: "The first line of an HTTP response, containing the protocol version, numeric status code, and reason phrase.", lesson: 3, tags: ["format"] }
      ]
    },
    {
      id: "methods-status",
      title: "Methods & Status Codes",
      terms: [
        { term: "Idempotent method", def: "An HTTP method where multiple identical requests have the exact same effect on server state as a single request.", lesson: 4, tags: ["methods"] },
        { term: "Safe method", def: "An HTTP method (like GET or HEAD) that does not modify server resource state and is read-only.", lesson: 4, tags: ["methods"] },
        { term: "2xx Success", def: "HTTP status code family indicating that the client request was successfully received, understood, and accepted.", lesson: 5, tags: ["status"] },
        { term: "4xx Client Error", def: "HTTP status code family indicating an error caused by the client, such as invalid syntax or missing authentication.", lesson: 5, tags: ["status"] }
      ]
    },
    {
      id: "headers-payloads",
      title: "Headers & Payloads",
      terms: [
        { term: "HTTP header", def: "A colon-separated key-value metadata field passed before the message body in HTTP requests and responses.", lesson: 6, tags: ["headers"] },
        { term: "MIME type", def: "A standardized two-part identifier (e.g. application/json, text/html) declaring the media format of payload data.", lesson: 6, tags: ["content"] },
        { term: "Content-Length", def: "A header specifying the decimal number of octets (bytes) contained in the message body.", lesson: 6, tags: ["headers"] },
        { term: "CORS", def: "Cross-Origin Resource Sharing: a browser security mechanism using HTTP headers to permit cross-domain resource requests.", lesson: 6, tags: ["security"] }
      ]
    },
    {
      id: "state-caching",
      title: "State, Cookies & Caching",
      terms: [
        { term: "Cache-Control", def: "The primary HTTP header defining caching policies, expiration times, and revalidation rules.", lesson: 7, tags: ["caching"] },
        { term: "ETag", def: "An entity tag hash representing the specific version of a resource, used for conditional cache validation.", lesson: 7, tags: ["caching"] },
        { term: "HTTP cookie", def: "A small piece of data sent by a server via Set-Cookie and stored in the browser to maintain stateful sessions.", lesson: 8, tags: ["state"] },
        { term: "HttpOnly", def: "A cookie security attribute that blocks JavaScript access to prevent cross-site scripting (XSS) session theft.", lesson: 8, tags: ["security"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "the-request-response-cycle",
      title: "The request-response cycle",
      topic: "The Request-Response Cycle",
      anim: "Flow",
      lede: "At the heart of the web is a simple, repeating conversation: the client asks a question, and the server gives an answer. Explore the stateless protocol loop.",
      winShort: "Articulate the client-initiated, stateless request-response lifecycle",
      missionLink: "The fundamental interaction pattern of all web architecture",
      sec1: {
        title: "A conversation over TCP",
        content: `<p>Every time you load a website or call a REST API, your computer acts as an <b>HTTP client</b>. It opens a TCP connection to the server, sends an explicit HTTP request message, waits for the server to reply with an HTTP response message, and then closes or reuses the connection.</p><p>HTTP is fundamentally <b>stateless</b>: the server does not remember who you are from the previous request unless you explicitly attach an identification token or cookie to the message.</p>`,
        keyIdea: "HTTP is a stateless conversation: every request is evaluated independently as an isolated transaction."
      },
      predict: {
        q: "What does it mean that HTTP is a 'stateless' protocol?",
        a: [
          "The server automatically forgets everything about prior requests once completed",
          "The server cannot run in countries that have states or provinces",
          "HTTP messages cannot be transmitted across state borders",
          "Web servers cannot store data in relational databases"
        ],
        c: 0,
        why: "Statelessness means the protocol preserves no conversational memory between individual request cycles."
      },
      sec2: {
        title: "The request-response lifecycle",
        content: `<p>Observe the sequential phases of an HTTP transaction across the network.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Connect", lines: ["DNS lookup -> IP address", "TCP 3-way handshake on port 80/443"] },
          { title: "2. Request", lines: ["client sends headers & body", "GET /api/v1/items HTTP/1.1"] },
          { title: "3. Response", lines: ["server processes & replies", "HTTP/1.1 200 OK + payload"] }
        ]
      },
      sec3: {
        title: "Tracing an HTTP exchange",
        content: `<p>Trace a minimal HTTP/1.1 text transaction over an open network connection.</p>`,
      },
      trace: {
        code: [
          "# Client sends plaintext command:",
          "GET /hello.txt HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n",
          "# Server replies with formatted headers and body:",
          "HTTP/1.1 200 OK\\r\\nContent-Length: 12\\r\\n\\r\\nHello World!"
        ],
        steps: [
          { line: 0, vars: { client: "connected on port 80" } },
          { line: 1, vars: { sent: "GET request with Host header" } },
          { line: 2, vars: { server: "parsed request and prepared 200 OK response" } },
          { line: 3, vars: { received: "12-byte payload 'Hello World!'" } }
        ]
      },
      practiceIntro: "Test your recall of the HTTP lifecycle.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The party that initiates an HTTP transaction is the <0>.",
          "The party that listens and replies to requests is the <1>.",
          "The protocol characteristic of retaining no session memory is <2>."
        ],
        blanks: [
          { a: ["client"], why: "Clients initiate connections and send requests." },
          { a: ["server"], why: "Servers process requests and return responses." },
          { a: ["stateless", "statelessness"], why: "Stateless protocols treat each request independently." }
        ]
      },
      win: "You can explain the complete round-trip lifecycle of an HTTP transaction from client initiation to server response.",
      nextTasks: [
        "Send a raw HTTP request using curl -v https://httpbin.org/get.",
        "Observe the request and response headers printed in the curl verbose output.",
        "Notice the blank line separating headers from the response body."
      ],
      primarySource: "IETF RFC 9110: *HTTP Semantics*, Section 3: 'Protocol Parameters & Architecture'.",
      quiz: [
        {
          q: "Who initiates communication in a standard HTTP transaction?",
          a: [
            "The client always initiates the request to the server",
            "The server initiates contact whenever it has new data to share",
            "The internet service provider initiates the transaction",
            "The database server initiates the connection"
          ],
          c: 0,
          why: "HTTP is client-driven: servers listen and respond only upon receiving a client request."
        },
        {
          q: "What characters separate the HTTP headers from the message body in raw HTTP text?",
          a: [
            "Two consecutive newline sequences (CRLF CRLF / \\r\\n\\r\\n)",
            "A row of three equal signs (===)",
            "A binary null byte (0x00)",
            "A closing HTML tag (</html>)"
          ],
          c: 0,
          why: "A blank line (CRLF CRLF) marks the end of the header section and the start of the body."
        },
        {
          q: "Why is statelessness considered an architectural strength of HTTP?",
          a: [
            "Servers do not need to hold connection state in memory, enabling easy horizontal scaling",
            "It makes internet connections run faster through copper cables",
            "It prevents web pages from containing visual images",
            "It eliminates the need for computer encryption"
          ],
          c: 0,
          why: "Statelessness lets any server in a load-balanced cluster handle any incoming request."
        },
        {
          q: "What transport protocol does HTTP/1.1 and HTTP/2 rely upon beneath the application layer?",
          a: [
            "TCP (Transmission Control Protocol)",
            "UDP (User Datagram Protocol)",
            "ICMP (Internet Control Message Protocol)",
            "Bluetooth Radio Protocol"
          ],
          c: 0,
          why: "HTTP/1.1 and HTTP/2 run over reliable in-order TCP streams."
        }
      ]
    },
    {
      n: 2,
      id: "anatomy-of-an-http-request",
      title: "Anatomy of an HTTP request",
      topic: "The Request-Response Cycle",
      anim: "Flow",
      lede: "Every web request is a three-part letter: request line, headers, and an optional body. Learn how to construct and read raw HTTP requests.",
      winShort: "Dissect and construct raw HTTP requests containing methods, headers, and payloads",
      missionLink: "Enables manual API debugging and low-level HTTP client authoring",
      sec1: {
        title: "The three parts of an HTTP request",
        content: `<p>An HTTP request is human-readable plaintext divided into three parts: the <b>Request Line</b>, the <b>Headers</b>, and the <b>Body</b>.</p><p>The request line contains three space-separated tokens: the method (<code>GET</code>, <code>POST</code>), the URI path (<code>/api/users</code>), and the protocol version (<code>HTTP/1.1</code>). Headers follow as <code>Key: Value</code> lines, concluded by an empty blank line before the body.</p>`,
        keyIdea: "A request consists of a request line, header key-value pairs, an empty line, and the body payload."
      },
      predict: {
        q: "Which header is strictly mandatory in every HTTP/1.1 request?",
        a: ["Host", "User-Agent", "Accept", "Content-Type"],
        c: 0,
        why: "RFC 9112 requires the Host header so servers can route requests to the correct virtual host domain."
      },
      sec2: {
        title: "Structure of a request message",
        content: `<p>Inspect the exact byte layout of an HTTP/1.1 POST request containing JSON data.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Request Line", lines: ["POST /v1/orders HTTP/1.1", "method + target + version"] },
          { title: "Headers", lines: ["Host: api.example.com", "Content-Type: application/json", "Content-Length: 26"] },
          { title: "Body Payload", lines: ["{\"item\": \"book\", \"qty\": 1}", "raw serialized JSON bytes"] }
        ]
      },
      sec3: {
        title: "Tracing raw request parsing",
        content: `<p>Trace how a web server reads and parses the incoming request line and headers line by line.</p>`,
      },
      trace: {
        code: [
          "POST /api/login HTTP/1.1",
          "Host: auth.example.com",
          "Content-Type: application/json",
          "Content-Length: 17",
          "",
          "{\"user\": \"ada\"}"
        ],
        steps: [
          { line: 0, vars: { method: "POST", path: "/api/login", version: "HTTP/1.1" } },
          { line: 1, vars: { host: "auth.example.com" } },
          { line: 2, vars: { mime: "application/json" } },
          { line: 3, vars: { expected_body_length: "17 bytes" } },
          { line: 5, vars: { body: "parsed JSON payload" } }
        ]
      },
      practiceIntro: "Test your memory of request message structure.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The first line of an HTTP request is the <0> line.",
          "The mandatory HTTP/1.1 header specifying domain name is <1>.",
          "The header indicating payload size in bytes is Content-<2>."
        ],
        blanks: [
          { a: ["request"], why: "The request line defines the method, path, and version." },
          { a: ["Host"], why: "The Host header specifies the target virtual host." },
          { a: ["Length"], why: "Content-Length informs the parser how many body bytes to read." }
        ]
      },
      win: "You can read and compose raw HTTP request text with complete mastery of headers, methods, and body payloads.",
      nextTasks: [
        "Construct a raw HTTP GET request using netcat (nc) or telnet to port 80.",
        "Inspect the request headers sent by your browser using Network DevTools.",
        "Identify the Content-Type header in an outgoing POST submission."
      ],
      primarySource: "IETF RFC 9112: *HTTP/1.1*, Section 2: 'Message Format'.",
      quiz: [
        {
          q: "What are the three components of an HTTP request line?",
          a: [
            "Method, Target URI path, and HTTP Version",
            "Username, Password, and Domain Name",
            "IP Address, Port Number, and MAC Address",
            "Header, Payload, and Checksum"
          ],
          c: 0,
          why: "Example: 'GET /index.html HTTP/1.1' contains method, path, and version."
        },
        {
          q: "Why is the 'Host' header required in HTTP/1.1?",
          a: [
            "It allows a single web server on one IP address to host multiple different domain websites",
            "It encrypts the request with TLS security certificates",
            "It specifies which web browser software the user is running",
            "It tells the computer how much RAM memory to allocate"
          ],
          c: 0,
          why: "Virtual hosting relies on the Host header to distinguish which website the client is visiting."
        },
        {
          q: "Can an HTTP GET request contain a message body payload?",
          a: [
            "Technically allowed by specs, but heavily discouraged because proxies and caches often discard it",
            "No, the HTTP specification makes GET bodies illegal and causes syntax errors",
            "Yes, GET bodies are the standard way to submit login passwords",
            "Only when communicating over satellite connections"
          ],
          c: 0,
          why: "RFC 9110 notes GET bodies have no defined semantics and may be stripped by caches."
        },
        {
          q: "How does a server know how many bytes to read for the request body?",
          a: [
            "By reading the integer value in the Content-Length header or parsing chunked frames",
            "By reading until the physical network cable disconnects",
            "By guessing based on the current time of day",
            "By waiting for the operating system to shut down"
          ],
          c: 0,
          why: "Content-Length tells the parser exactly how many bytes constitute the payload."
        }
      ]
    },
    {
      n: 3,
      id: "anatomy-of-an-http-response",
      title: "Anatomy of an HTTP response",
      topic: "The Request-Response Cycle",
      anim: "Flow",
      lede: "When the server replies, it sends a status line, headers, and the payload. Learn how to decode status lines and inspect response headers.",
      winShort: "Parse raw HTTP response messages and extract status codes and metadata",
      missionLink: "Essential for debugging API failures and verifying server replies",
      sec1: {
        title: "The structure of an HTTP response",
        content: `<p>Just like a request, an HTTP response message is divided into three distinct segments: the <b>Status Line</b>, the <b>Response Headers</b>, and the <b>Response Body</b>.</p><p>The status line contains three tokens: the protocol version (<code>HTTP/1.1</code>), a three-digit integer status code (<code>200</code>), and a human-readable reason phrase (<code>OK</code>). Headers convey metadata like content type, date, caching rules, and server identity.</p>`,
        keyIdea: "A response begins with a status line, followed by headers, a blank line, and the data payload."
      },
      predict: {
        q: "What part of an HTTP response indicates to the browser that an error occurred?",
        a: [
          "The three-digit status code in the status line (e.g. 404 or 500)",
          "The color of the text in the response body",
          "The brand name of the server operating system",
          "The font size used in the HTML markup"
        ],
        c: 0,
        why: "Status codes in the 4xx (client error) and 5xx (server error) ranges signal failure conditions."
      },
      sec2: {
        title: "The response message layout",
        content: `<p>Inspect the raw plaintext structure of an HTTP/1.1 response returning an HTML document.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Status Line", lines: ["HTTP/1.1 200 OK", "version + status code + reason"] },
          { title: "Response Headers", lines: ["Content-Type: text/html", "Server: nginx/1.24", "Content-Length: 104"] },
          { title: "Response Body", lines: ["<!DOCTYPE html><html>...", "the actual payload delivered"] }
        ]
      },
      sec3: {
        title: "Tracing response parsing in a browser",
        content: `<p>Trace how a browser parser processes a status line and headers before rendering the body.</p>`,
      },
      trace: {
        code: [
          "HTTP/1.1 200 OK",
          "Date: Sat, 03 Oct 2026 12:00:00 GMT",
          "Content-Type: text/html; charset=UTF-8",
          "Content-Length: 45",
          "",
          "<html><body><h1>Hello World</h1></body></html>"
        ],
        steps: [
          { line: 0, vars: { status: "200 OK (success)" } },
          { line: 2, vars: { parser_mode: "HTML parser activated with UTF-8 encoding" } },
          { line: 3, vars: { bytes_expected: "45 bytes" } },
          { line: 5, vars: { render: "DOM tree constructed and displayed" } }
        ]
      },
      practiceIntro: "Test your memory of response message anatomy.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The first line of an HTTP response is the <0> line.",
          "The 3-digit number indicating the outcome of a request is the <1> code.",
          "The human-readable phrase accompanying status 200 is <2>."
        ],
        blanks: [
          { a: ["status"], why: "The status line begins every HTTP response." },
          { a: ["status"], why: "The status code conveys success, redirect, or error." },
          { a: ["OK"], why: "200 OK is the standard success status." }
        ]
      },
      win: "You can dissect raw HTTP responses and instantly evaluate status codes, content encodings, and headers.",
      nextTasks: [
        "Fetch headers from a website using curl -I https://example.com.",
        "Verify that the status line contains HTTP/2 or HTTP/1.1 and 200 OK.",
        "Inspect the Content-Type header to see the MIME format."
      ],
      primarySource: "IETF RFC 9112: *HTTP/1.1*, Section 3: 'Response'.",
      quiz: [
        {
          q: "What are the three parts of an HTTP status line?",
          a: [
            "HTTP Version, 3-digit Status Code, and Reason Phrase",
            "Domain Name, Port Number, and Timestamp",
            "Username, Password, and Session Token",
            "Header Name, Header Value, and Checksum"
          ],
          c: 0,
          why: "Example: 'HTTP/1.1 404 Not Found' contains version, numeric code, and textual reason."
        },
        {
          q: "Which header tells the client software how to parse and interpret the response body?",
          a: [
            "Content-Type",
            "User-Agent",
            "Host",
            "Accept-Encoding"
          ],
          c: 0,
          why: "Content-Type specifies the MIME type (e.g. application/json, text/html, image/png)."
        },
        {
          q: "What does status code 204 No Content indicate?",
          a: [
            "The request was successful, but the server deliberately returns an empty body",
            "The requested resource was permanently deleted from disk",
            "The web server has crashed due to memory exhaustion",
            "The client needs to enter credit card billing information"
          ],
          c: 0,
          why: "204 signals successful processing where no response body is needed (e.g. in DELETE actions)."
        },
        {
          q: "What separates the response headers from the response body payload?",
          a: [
            "A single empty blank line (CRLF CRLF)",
            "A series of exclamation marks (!!!)",
            "A JSON closing curly brace (})",
            "An end-of-file byte marker"
          ],
          c: 0,
          why: "In standard HTTP protocol framing, an empty blank line separates headers from body."
        }
      ]
    },
    {
      n: 4,
      id: "http-methods-get-post-put-delete",
      title: "HTTP methods: GET, POST, PUT, DELETE",
      topic: "Methods & Status Codes",
      anim: "Flow",
      lede: "HTTP methods are not suggestions; they have precise mathematical properties of safety and idempotency. Learn how to choose the right method for every operation.",
      winShort: "Select appropriate HTTP verbs based on safety and idempotency semantics",
      missionLink: "Guides clean, predictable REST API design and client communication",
      sec1: {
        title: "Safety and idempotency",
        content: `<p>HTTP methods are defined by two critical semantic properties: <b>Safety</b> and <b>Idempotency</b>.</p><p>A method is <b>safe</b> if it does not alter server resource state (it is read-only, like <code>GET</code> or <code>HEAD</code>). A method is <b>idempotent</b> if executing it ten times produces the exact same server state as executing it once (like <code>PUT</code> or <code>DELETE</code>). <code>POST</code> is neither safe nor idempotent.</p>`,
        keyIdea: "Idempotent methods can be retried automatically over flaky networks without accidental duplication."
      },
      predict: {
        q: "A network drops right after a client sends a request. Is it safe to automatically retry a POST request?",
        a: [
          "No, retrying POST risks creating duplicate resources like double-charging a credit card",
          "Yes, POST requests never modify server database records",
          "Yes, all HTTP requests can be retried an infinite number of times safely",
          "Only if the request was sent on a Friday"
        ],
        c: 0,
        why: "POST is non-idempotent; re-executing it may repeat destructive side effects."
      },
      sec2: {
        title: "The method semantics matrix",
        content: `<p>Memorise the safety, idempotency, and CRUD mappings of the standard HTTP verbs.</p>`,
      },
      diagram: {
        boxes: [
          { title: "GET (Read)", lines: ["Safe: YES", "Idempotent: YES", "never mutates state"] },
          { title: "POST (Create)", lines: ["Safe: NO", "Idempotent: NO", "creates new resources"] },
          { title: "PUT (Replace)", lines: ["Safe: NO", "Idempotent: YES", "replaces resource entirely"] },
          { title: "DELETE (Remove)", lines: ["Safe: NO", "Idempotent: YES", "removes resource"] }
        ]
      },
      sec3: {
        title: "Tracing PUT vs PATCH state modification",
        content: `<p>Trace how PUT replaces an entire object, whereas PATCH applies a partial delta update.</p>`,
      },
      trace: {
        code: [
          "# Initial state: {'name': 'Ada', 'role': 'Admin', 'score': 100}",
          "# PATCH /users/1 with {'score': 105} -> updates only score",
          "# PUT /users/1 with {'score': 105} -> replaces entire object (name and role lost!)",
          "# Conclusion: Use PATCH for partial updates; PUT for complete replacement"
        ],
        steps: [
          { line: 0, vars: { initial: "3 attributes defined" } },
          { line: 1, vars: { patch: "{'name': 'Ada', 'role': 'Admin', 'score': 105}" } },
          { line: 2, vars: { put: "{'score': 105} (fields omitted in PUT are erased)" } }
        ]
      },
      practiceIntro: "Test your recall of method properties.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A method that does not modify server state is called <0>.",
          "A method that produces the same state regardless of repetition is <1>.",
          "The method designed for partial updates of existing resources is <2>."
        ],
        blanks: [
          { a: ["safe"], why: "Safe methods are strictly read-only." },
          { a: ["idempotent"], why: "Idempotent operations can be executed multiple times safely." },
          { a: ["PATCH"], why: "PATCH applies partial delta modifications to a resource." }
        ]
      },
      win: "You can choose the semantically correct HTTP method for any API endpoint according to safety and idempotency rules.",
      nextTasks: [
        "Audit an existing API route table to verify GET methods perform no database mutations.",
        "Ensure update endpoints distinguish between PUT (full replace) and PATCH (partial update).",
        "Explain why payment gateways use idempotency keys with POST requests."
      ],
      primarySource: "IETF RFC 9110: *HTTP Semantics*, Section 9: 'Method Definitions'.",
      quiz: [
        {
          q: "What does it mean for an HTTP method to be idempotent?",
          a: [
            "Making multiple identical requests leaves the server in the exact same state as making one request",
            "The method executes in zero milliseconds without network latency",
            "The method can only be executed by authenticated administrators",
            "The method compresses data before transmission"
          ],
          c: 0,
          why: "Mathematical definition of idempotence: f(f(x)) = f(x)."
        },
        {
          q: "Why is DELETE considered an idempotent method even if the second call returns 404?",
          a: [
            "Because the end state of the server is identical: the resource remains deleted",
            "Because DELETE never deletes data from the database",
            "Because DELETE can only be run once per year",
            "DELETE is actually not idempotent in modern HTTP"
          ],
          c: 0,
          why: "Idempotency applies to side effects on server resource state, not response status codes."
        },
        {
          q: "What is the difference between PUT and PATCH?",
          a: [
            "PUT replaces the target resource entirely; PATCH applies partial modifications to it",
            "PUT is safe; PATCH is unsafe",
            "PUT only works with XML; PATCH only works with JSON",
            "There is no difference between PUT and PATCH"
          ],
          c: 0,
          why: "PUT sets the complete state; PATCH mutates only the specified subset of fields."
        },
        {
          q: "Which of the following methods is classified as 'safe' by HTTP specifications?",
          a: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
          ],
          c: 0,
          why: "GET is safe because it is purely observational and does not alter server state."
        }
      ]
    },
    {
      n: 5,
      id: "status-codes-and-what-they-mean",
      title: "Status codes and what they mean",
      topic: "Methods & Status Codes",
      anim: "Flow",
      lede: "Stop returning 200 OK with error messages inside the body. Master the five status code families and the exact codes that speak clear truth to clients.",
      winShort: "Select and interpret standard HTTP status codes across the 2xx, 3xx, 4xx, and 5xx families",
      missionLink: "Enables proper error handling and automated client retry policies",
      sec1: {
        title: "The five numerical families",
        content: `<p>HTTP status codes are grouped into five distinct families by their first digit: <b>1xx</b> (Informational), <b>2xx</b> (Success), <b>3xx</b> (Redirection), <b>4xx</b> (Client Error), and <b>5xx</b> (Server Error).</p><p>The crucial distinction is between 4xx and 5xx. A <b>4xx error</b> means the client did something wrong (bad parameters, unauthorized, resource missing). A <b>5xx error</b> means the server crashed, timed out, or encountered an unexpected internal defect.</p>`,
        keyIdea: "4xx errors are the client's fault; 5xx errors are the server's fault."
      },
      predict: {
        q: "What status code should an API return when a client provides an invalid email syntax?",
        a: ["200 OK", "400 Bad Request", "500 Internal Server Error", "301 Moved Permanently"],
        c: 1,
        why: "Invalid client input syntax is a client error, properly categorized under 400 Bad Request."
      },
      sec2: {
        title: "The core status code index",
        content: `<p>Learn the standard status codes used across production REST APIs and web services.</p>`,
      },
      diagram: {
        boxes: [
          { title: "201 Created", lines: ["new resource created", "returns Location header"] },
          { title: "304 Not Modified", lines: ["cached copy is fresh", "empty body payload"] },
          { title: "401 vs 403", lines: ["401: who are you? (unauthenticated)", "403: you cannot enter (unauthorized)"] },
          { title: "502 Bad Gateway", lines: ["proxy/gateway failed", "upstream server unreachable"] }
        ]
      },
      sec3: {
        title: "Tracing authentication vs authorization errors",
        content: `<p>Trace how a server decides between 401 Unauthorized and 403 Forbidden.</p>`,
      },
      trace: {
        code: [
          "# Case 1: Missing Authorization token header",
          "-> HTTP/1.1 401 Unauthorized (challenge: Bearer realm='api')",
          "# Case 2: Valid token for normal user trying to access /admin/delete-all",
          "-> HTTP/1.1 403 Forbidden (known identity, but insufficient permissions)"
        ],
        steps: [
          { line: 0, vars: { check: "missing auth header" } },
          { line: 1, vars: { status: "401: client needs to log in" } },
          { line: 2, vars: { check: "identity verified as user_id=42 (role: user)" } },
          { line: 3, vars: { status: "403: logged in, but forbidden from admin action" } }
        ]
      },
      practiceIntro: "Test your recall of HTTP status code mappings.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The status code indicating a new resource was created is <0>.",
          "The code for missing authentication credentials is <1>.",
          "The code indicating an unhandled server crash is <2>."
        ],
        blanks: [
          { a: ["201"], why: "201 Created confirms resource creation." },
          { a: ["401"], why: "401 Unauthorized indicates authentication is required." },
          { a: ["500"], why: "500 Internal Server Error signals unexpected server crashes." }
        ]
      },
      win: "You can accurately assign and diagnose HTTP status codes to communicate unambiguous outcomes to clients.",
      nextTasks: [
        "Audit your API endpoints to replace 200 OK errors with appropriate 4xx codes.",
        "Verify that resource creation endpoints return 201 Created with a Location header.",
        "Check how your reverse proxy handles upstream timeouts with 504 Gateway Timeout."
      ],
      primarySource: "IETF RFC 9110: *HTTP Semantics*, Section 15: 'Status Codes'.",
      quiz: [
        {
          q: "What is the difference between status 401 Unauthorized and 403 Forbidden?",
          a: [
            "401 means credentials are missing or invalid; 403 means identity is verified but permission is denied",
            "401 applies to GET requests; 403 applies to POST requests",
            "401 is a server crash; 403 is a client typo",
            "There is no functional difference between 401 and 403"
          ],
          c: 0,
          why: "401 asks 'Who are you?'; 403 says 'I know who you are, but you cannot perform this action.'"
        },
        {
          q: "What does status code 304 Not Modified tell a web browser client?",
          a: [
            "The client cached copy is still fresh and can be rendered without downloading the body again",
            "The web server has refused to modify the database record",
            "The website has been permanently shut down",
            "The user needs to refresh the page ten times"
          ],
          c: 0,
          why: "304 confirms cached data matches server state, saving bandwidth and latency."
        },
        {
          q: "Why is returning '200 OK' with a body of {'error': 'not found'} considered an antipattern?",
          a: [
            "It breaks automated HTTP client retry logic, monitoring alerts, and browser caching engines",
            "It causes text editors to display syntax errors",
            "It violates international intellectual property treaties",
            "It corrupts database indexes on the server"
          ],
          c: 0,
          why: "HTTP infrastructure relies on status codes in headers to trigger alerts, caches, and retries."
        },
        {
          q: "What status code indicates that a reverse proxy or load balancer could not reach the backend app?",
          a: [
            "502 Bad Gateway",
            "200 OK",
            "400 Bad Request",
            "301 Moved Permanently"
          ],
          c: 0,
          why: "502 signals that an edge proxy received an invalid response or connection drop from upstream."
        }
      ]
    },
    {
      n: 6,
      id: "headers-content-types-and-metadata",
      title: "Headers, content types, and metadata",
      topic: "Headers & Payloads",
      anim: "Flow",
      lede: "Headers are the envelope of the web. Learn how Content-Type, Accept, Authorization, and CORS headers negotiate formats and secure communication.",
      winShort: "Configure content negotiation and authentication headers for HTTP communications",
      missionLink: "Ensures seamless interoperability between heterogeneous clients and servers",
      sec1: {
        title: "Content negotiation",
        content: `<p>The internet connects computers running different operating systems, languages, and formats. How do a Python backend and an iOS client agree on data serialization?</p><p>Through <b>Content Negotiation</b> headers. The client sends <code>Accept: application/json</code> to specify what format it wants. The server replies with <code>Content-Type: application/json; charset=utf-8</code> to declare what format it delivered.</p>`,
        keyIdea: "Accept declares what the client wants; Content-Type declares what the sender provided."
      },
      predict: {
        q: "A client sends POST data formatted as JSON. Which header must accompany the request?",
        a: ["Content-Type: application/json", "Accept: text/plain", "Host: localhost", "User-Agent: curl"],
        c: 0,
        why: "Content-Type informs the server parser how to deserialize incoming body bytes."
      },
      sec2: {
        title: "Essential header categories",
        content: `<p>Categorize the standard headers that govern everyday web application traffic.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Representation", lines: ["Content-Type: application/json", "Content-Length: 128"] },
          { title: "Negotiation", lines: ["Accept: application/json", "Accept-Encoding: gzip, br"] },
          { title: "Authentication", lines: ["Authorization: Bearer <jwt_token>", "Cookie: session_id=xyz"] }
        ]
      },
      sec3: {
        title: "Tracing compression negotiation",
        content: `<p>Trace how Accept-Encoding negotiates gzip compression to reduce payload transfer size by 80%.</p>`,
      },
      trace: {
        code: [
          "Client: Accept-Encoding: gzip, br",
          "Server compresses 100KB HTML down to 20KB using gzip",
          "Server: Content-Encoding: gzip",
          "Client transparently decompresses 20KB back into 100KB DOM"
        ],
        steps: [
          { line: 0, vars: { client_capabilities: "supports gzip and brotli" } },
          { line: 1, vars: { compression: "gzip applied to 100KB payload" } },
          { line: 2, vars: { header: "Content-Encoding: gzip attached" } },
          { line: 3, vars: { bandwidth_saved: "80% reduction in transferred bytes" } }
        ]
      },
      practiceIntro: "Test your recall of HTTP header mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The header declaring payload format is Content-<0>.",
          "The header expressing desired response format is <1>.",
          "The header transmitting bearer authentication tokens is <2>."
        ],
        blanks: [
          { a: ["Type"], why: "Content-Type specifies the MIME representation." },
          { a: ["Accept"], why: "Accept informs the server of supported formats." },
          { a: ["Authorization"], why: "Authorization carries credentials and Bearer tokens." }
        ]
      },
      win: "You can configure content negotiation, compression, and authentication headers cleanly across HTTP clients and servers.",
      nextTasks: [
        "Inspect the Accept-Encoding header sent by your browser in DevTools.",
        "Send an Authorization header using curl -H 'Authorization: Bearer test123'.",
        "Configure your server to compress responses with gzip."
      ],
      primarySource: "IETF RFC 9110: *HTTP Semantics*, Section 8: 'Header Fields'.",
      quiz: [
        {
          q: "What is the difference between the Content-Type and Accept headers?",
          a: [
            "Content-Type describes the data being sent; Accept describes the format desired in return",
            "Content-Type is for text files; Accept is for image files",
            "Content-Type is used by servers; Accept is used only by database engines",
            "There is no difference between the two headers"
          ],
          c: 0,
          why: "Content-Type defines current payload format; Accept negotiates return format."
        },
        {
          q: "What does the 'Authorization: Bearer <token>' header convey?",
          a: [
            "An access credential (such as a JWT token) granting the bearer permission to access the resource",
            "The physical GPS coordinates of the mobile device",
            "The serial number of the user computer monitor",
            "A cryptographic signature verifying hardware chip temperature"
          ],
          c: 0,
          why: "Bearer tokens grant API access to whoever possesses (bears) the token."
        },
        {
          q: "What does Content-Encoding: gzip indicate on an HTTP response?",
          a: [
            "The body payload bytes have been compressed using gzip and must be decompressed upon receipt",
            "The file is a zip archive that must be saved to the desktop",
            "The server has run out of uncompressed hard drive space",
            "The response body is encrypted with proprietary algorithms"
          ],
          c: 0,
          why: "Content-Encoding tells the client which decompression algorithm to apply to the body."
        },
        {
          q: "What happens if a client sends 'Accept: application/json' but the server only has XML?",
          a: [
            "The server may return status 406 Not Acceptable or provide XML with Content-Type: application/xml",
            "The client computer hard drive crashes",
            "The internet router reboots automatically",
            "The server converts XML to JSON using AI"
          ],
          c: 0,
          why: "RFC 9110 provides status 406 Not Acceptable when requested representations cannot be met."
        }
      ]
    },
    {
      n: 7,
      id: "caching-and-conditional-requests",
      title: "Caching and conditional requests",
      topic: "State, Cookies & Caching",
      anim: "Flow",
      lede: "The fastest request is the one you never make. Master Cache-Control, max-age, ETags, and 304 Not Modified conditional requests.",
      winShort: "Implement efficient HTTP caching strategies using Cache-Control and ETag validation",
      missionLink: "Dramatically reduces server load and optimizes client performance",
      sec1: {
        title: "The hierarchy of web caching",
        content: `<p>Every network request consumes bandwidth and introduces latency. HTTP provides built-in caching primitives that allow browsers and CDNs to serve copies of resources without contacting the origin server.</p><p>Caching is controlled by <code>Cache-Control</code>. Directives like <code>max-age=3600</code> declare how long a resource is fresh. When fresh, the browser serves it directly from local memory or disk without sending any network packets.</p>`,
        keyIdea: "Cache-Control directs browsers and CDNs whether, where, and how long to store copies of responses."
      },
      predict: {
        q: "If a response has 'Cache-Control: max-age=600', what happens when the user visits the page 2 minutes later?",
        a: [
          "The browser loads the resource instantly from local cache without making a network request",
          "The browser downloads the entire resource from the server again",
          "The server returns status 500 Internal Server Error",
          "The browser prompts the user to clear their browsing history"
        ],
        c: 0,
        why: "At 2 minutes (120s), the 600s cache window is fresh; the browser fulfills it locally."
      },
      sec2: {
        title: "Conditional validation with ETags",
        content: `<p>When a cached item expires, the browser doesn't need to download it again if it hasn't changed. It sends a conditional check.</p>`,
      },
      diagram: {
        boxes: [
          { title: "First Request", lines: ["Server returns: 200 OK", "ETag: 'v1.4-hash'", "Cache-Control: no-cache"] },
          { title: "Next Request (Expired)", lines: ["Browser sends: If-None-Match: 'v1.4-hash'", "'Has this changed?'"] },
          { title: "Server Validation", lines: ["Hash matches! Resource identical.", "Server replies: 304 Not Modified (0 bytes body)"] }
        ]
      },
      sec3: {
        title: "Tracing ETag revalidation",
        content: `<p>Trace how a conditional request saves 2 megabytes of download bandwidth using 304 Not Modified.</p>`,
      },
      trace: {
        code: [
          "Browser: GET /bundle.js (cached hash: 'a1b2c3')",
          "Browser sends header: If-None-Match: \"a1b2c3\"",
          "Server checks bundle.js on disk -> hash is still 'a1b2c3'",
          "Server returns: HTTP/1.1 304 Not Modified (empty body)",
          "Browser reuses existing cached copy immediately"
        ],
        steps: [
          { line: 0, vars: { cache_status: "stale cache entry present" } },
          { line: 1, vars: { conditional_header: "If-None-Match: \"a1b2c3\"" } },
          { line: 2, vars: { server_check: "bundle content hash unchanged" } },
          { line: 3, vars: { bandwidth: "0 bytes payload transferred; 304 response" } }
        ]
      },
      practiceIntro: "Test your memory of HTTP caching headers.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The primary header setting cache lifetime is <0>-Control.",
          "The cryptographic content hash header used for validation is <1>.",
          "The conditional request header matching an ETag is If-None-<2>."
        ],
        blanks: [
          { a: ["Cache"], why: "Cache-Control governs caching behavior." },
          { a: ["ETag"], why: "ETag provides a content-based fingerprint." },
          { a: ["Match"], why: "If-None-Match verifies if the client ETag is still current." }
        ]
      },
      win: "You can design caching headers that eliminate redundant data transfers and keep web applications fast and responsive.",
      nextTasks: [
        "Inspect Cache-Control headers on images and scripts in your browser DevTools.",
        "Observe 304 Not Modified responses on page reloads.",
        "Configure immutable asset caching for fingerprinted asset bundles."
      ],
      primarySource: "IETF RFC 9111: *HTTP Caching* (2022).",
      quiz: [
        {
          q: "What does 'Cache-Control: no-cache' mean?",
          a: [
            "The browser may cache the response, but must validate it with the origin server before each use",
            "The browser is completely forbidden from storing the response anywhere on disk",
            "The server will delete its database cache after sending the response",
            "The user must manually clear their browser cache to view the page"
          ],
          c: 0,
          why: "no-cache permits caching, but mandates server revalidation (e.g. via ETag) prior to use."
        },
        {
          q: "Which directive strictly forbids any cache (browser or intermediate CDN) from storing a response?",
          a: [
            "Cache-Control: no-store",
            "Cache-Control: no-cache",
            "Cache-Control: max-age=0",
            "Cache-Control: public"
          ],
          c: 0,
          why: "no-store prohibits storing sensitive data to disk or memory caches entirely."
        },
        {
          q: "What is the purpose of the ETag response header?",
          a: [
            "To provide a unique version fingerprint for a resource so changes can be detected conditionally",
            "To encrypt the response body with public key cryptography",
            "To track user browsing habits across different websites",
            "To display the author name in the browser status bar"
          ],
          c: 0,
          why: "ETags act as content checksums that enable 304 Not Modified revalidation."
        },
        {
          q: "Why is 'Cache-Control: max-age=31536000, immutable' recommended for hashed assets (e.g. app.a8f9.js)?",
          a: [
            "Because the content hash in the filename guarantees the URL content will never change, allowing 1-year caching",
            "Because browsers delete files after 31 million milliseconds",
            "Because the operating system requires 1-year expiration for JavaScript files",
            "To comply with European Union privacy regulations"
          ],
          c: 0,
          why: "Fingerprinted filenames mean updates get new URLs, making cached copies safe to keep forever."
        }
      ]
    },
    {
      n: 8,
      id: "cookies-and-session-state",
      title: "Cookies and session state",
      topic: "State, Cookies & Caching",
      anim: "Flow",
      lede: "How does a stateless protocol support login sessions and shopping carts? Learn how Set-Cookie, HttpOnly, and SameSite manage state and defend against attacks.",
      winShort: "Configure secure session cookies with HttpOnly, Secure, and SameSite attributes",
      missionLink: "Prevents critical web vulnerabilities like XSS credential theft and CSRF attacks",
      sec1: {
        title: "Simulating state over a stateless protocol",
        content: `<p>Because HTTP preserves no memory between requests, the web simulates continuity using <b>Cookies</b>. When you log in, the server generates a random session token and returns it in a <code>Set-Cookie</code> response header.</p><p>The browser automatically stores this cookie and attaches it as a <code>Cookie</code> header to <i>every subsequent request</i> sent to that domain. The server inspects the incoming token to identify the authenticated user.</p>`,
        keyIdea: "Cookies are client-stored tokens sent automatically on every request to simulate continuous sessions."
      },
      predict: {
        q: "What security vulnerability occurs if authentication cookies lack the 'HttpOnly' flag?",
        a: [
          "Malicious JavaScript injected via Cross-Site Scripting (XSS) can read and steal the session cookie",
          "The computer CPU will overheat during browser rendering",
          "The cookie cannot be transmitted over HTTPS connections",
          "The website database will automatically delete all customer records"
        ],
        c: 0,
        why: "HttpOnly instructs the browser to block document.cookie access from JavaScript."
      },
      sec2: {
        title: "The cookie security triad",
        content: `<p>Every production session cookie must be guarded by three essential defensive attributes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Secure", lines: ["transmitted only over HTTPS", "blocks plaintext Wi-Fi sniffing"] },
          { title: "HttpOnly", lines: ["inaccessible to document.cookie", "defeats XSS session theft"] },
          { title: "SameSite=Lax/Strict", lines: ["restricts cross-site sending", "defeats Cross-Site Request Forgery (CSRF)"] }
        ]
      },
      sec3: {
        title: "Tracing the session lifecycle",
        content: `<p>Trace how a user logs in, receives a session cookie, and makes authenticated requests.</p>`,
      },
      trace: {
        code: [
          "Client -> POST /login (credentials)",
          "Server -> 200 OK + Set-Cookie: sid=a8f9c2; HttpOnly; Secure; SameSite=Strict",
          "Browser stores sid in secure cookie jar",
          "Client -> GET /dashboard + Cookie: sid=a8f9c2",
          "Server verifies sid -> renders user dashboard"
        ],
        steps: [
          { line: 0, vars: { auth: "valid username and password" } },
          { line: 1, vars: { cookie_set: "session ID issued with 3 security flags" } },
          { line: 2, vars: { storage: "browser isolates cookie to domain" } },
          { line: 4, vars: { session: "authenticated request processed seamlessly" } }
        ]
      },
      practiceIntro: "Test your memory of cookie security attributes.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The header sent by the server to set a cookie is <0>-Cookie.",
          "The flag blocking JavaScript access to cookies is <1>.",
          "The flag ensuring cookies only travel over HTTPS is <2>."
        ],
        blanks: [
          { a: ["Set"], why: "Set-Cookie instructs the client to store the cookie." },
          { a: ["HttpOnly"], why: "HttpOnly mitigates XSS token theft." },
          { a: ["Secure"], why: "Secure restricts transmission to TLS connections." }
        ]
      },
      win: "You can architect resilient, secure session management systems using industry-standard cookie configurations.",
      nextTasks: [
        "Inspect cookies stored by your favorite websites in DevTools Application tab.",
        "Verify that your session cookies carry HttpOnly and Secure flags.",
        "Configure SameSite=Lax on authentication endpoints to guard against CSRF."
      ],
      primarySource: "IETF RFC 6265: *HTTP State Management Mechanism* (Cookie Specification).",
      quiz: [
        {
          q: "What does the 'SameSite=Strict' cookie attribute achieve?",
          a: [
            "Prevents the browser from sending the cookie in cross-site requests, mitigating CSRF attacks",
            "Encrypts the cookie with military grade AES-256 encryption",
            "Forces the cookie to expire exactly after 60 seconds",
            "Blocks users from opening more than one browser tab"
          ],
          c: 0,
          why: "SameSite=Strict ensures cookies are only included when navigating directly within the origin site."
        },
        {
          q: "Why should session tokens never be stored in browser localStorage for sensitive authentication?",
          a: [
            "Any JavaScript running on the page (including third-party analytics or XSS payloads) can read localStorage",
            "localStorage is limited to only 5 bytes of data",
            "localStorage is erased every time the user refreshes the page",
            "localStorage only works on Internet Explorer"
          ],
          c: 0,
          why: "localStorage has no HttpOnly defense; any XSS vulnerability exposes stored tokens directly."
        },
        {
          q: "What header does the browser use to transmit stored cookies back to the server?",
          a: [
            "Cookie: name=value; name2=value2",
            "Set-Cookie: name=value",
            "Authorization-Cookie: bearer",
            "Session-Store: active"
          ],
          c: 0,
          why: "The client sends the 'Cookie' header containing semicolon-delimited key-value pairs."
        },
        {
          q: "What happens when a cookie reaches its 'Expires' or 'Max-Age' timestamp?",
          a: [
            "The browser deletes the cookie from its storage jar and stops sending it in requests",
            "The web server shuts down and reboots automatically",
            "The user computer locks and requires password entry",
            "The website source code is deleted"
          ],
          c: 0,
          why: "Expired cookies are discarded by the browser's internal cookie jar management."
        }
      ]
    }
  ]
};
