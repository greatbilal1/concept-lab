/* ============================================================
   Web Application Security — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "owasp-top-10-common-vulnerabilities", file: "lessons/0001-owasp-top-10-common-vulnerabilities.html", title: "The OWASP Top 10: Understanding Common Vulnerabilities", topic: "OWASP Top 10", anim: "Generic" },
  { n: 2, id: "injection-attacks-sqli-parameterized-queries", file: "lessons/0002-injection-attacks-sqli-parameterized-queries.html", title: "Injection Attacks: SQLi, Command Injection, and Parameterized Queries", topic: "Injection Attacks", anim: "Generic" },
  { n: 3, id: "cross-site-scripting-xss-stored-reflected-dom", file: "lessons/0003-cross-site-scripting-xss-stored-reflected-dom.html", title: "Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based", topic: "XSS Defenses", anim: "Generic" },
  { n: 4, id: "csrf-and-samesite-cookies", file: "lessons/0004-csrf-and-samesite-cookies.html", title: "Cross-Site Request Forgery (CSRF) and SameSite Cookies", topic: "CSRF Defense", anim: "Generic" },
  { n: 5, id: "broken-access-control-and-idor", file: "lessons/0005-broken-access-control-and-idor.html", title: "Broken Access Control and IDOR (Insecure Direct Object References)", topic: "Access Control", anim: "Generic" },
  { n: 6, id: "security-headers-csp-hsts-cors", file: "lessons/0006-security-headers-csp-hsts-cors.html", title: "Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses", topic: "Security Headers", anim: "Generic" },
  { n: 7, id: "secure-api-design-rate-limiting-jwt", file: "lessons/0007-secure-api-design-rate-limiting-jwt.html", title: "Secure API Design: Rate Limiting, Input Validation, and JWT Security", topic: "API Security", anim: "Generic" },
  { n: 8, id: "penetration-testing-and-hardening", file: "lessons/0008-penetration-testing-and-hardening.html", title: "Penetration Testing and Hardening a Web Application", topic: "Hardening", anim: "Generic" }
];

/* ============================================================
   Web Application Security — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "owasp-injection", title: "OWASP & Injection",
    terms: [
      { term: "OWASP Top 10", def: "The industry standard consensus ranking of the ten most critical web application security risks.", lesson: 1, tags: ["owasp","standards"] },
      { term: "SQL Injection", def: "An attack where untrusted user input alters database query syntax, allowing data extraction or bypass.", lesson: 2, tags: ["injection","sqli"] },
      { term: "Parameterized Query", def: "A database query where structure is compiled first and data values are bound separately, preventing SQLi.", lesson: 2, tags: ["defense","database"] }
    ]
  },
  {
    id: "client-attacks", title: "XSS & CSRF",
    terms: [
      { term: "Cross-Site Scripting", def: "A vulnerability allowing attackers to execute arbitrary JavaScript in victims' browsers (XSS).", lesson: 3, tags: ["xss","client"] },
      { term: "DOMPurify", def: "A heavily audited open-source JavaScript library that sanitizes HTML strings to prevent XSS.", lesson: 3, tags: ["tools","sanitization"] },
      { term: "Cross-Site Request Forgery", def: "An attack tricking an authenticated browser into sending unauthorized requests with cookies attached (CSRF).", lesson: 4, tags: ["csrf","cookies"] }
    ]
  },
  {
    id: "access-headers", title: "Access & Headers",
    terms: [
      { term: "Insecure Direct Object Reference", def: "A broken access control flaw where endpoints expose database IDs without verifying user ownership (IDOR).", lesson: 5, tags: ["access","idor"] },
      { term: "Content Security Policy", def: "An HTTP header restricting which domains a browser is permitted to load scripts, styles, and assets from (CSP).", lesson: 6, tags: ["headers","csp"] },
      { term: "HSTS", def: "HTTP Strict Transport Security header instructing browsers to strictly refuse unencrypted HTTP connections.", lesson: 6, tags: ["headers","hsts"] }
    ]
  },
  {
    id: "testing-apis", title: "API & Penetration Testing",
    terms: [
      { term: "SameSite Cookie", def: "A cookie attribute (Lax/Strict) instructing browsers not to attach cookies on cross-origin requests.", lesson: 4, tags: ["cookies","csrf"] },
      { term: "OWASP ZAP", def: "Zed Attack Proxy — a leading open-source dynamic web application security testing (DAST) scanner.", lesson: 8, tags: ["tools","dast"] },
      { term: "DAST", def: "Dynamic Application Security Testing — probing a running application from the outside to find vulnerabilities.", lesson: 8, tags: ["testing","dast"] }
    ]
  }
];
