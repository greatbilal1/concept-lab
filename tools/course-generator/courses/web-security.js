"use strict";

module.exports = {
  "id": "web-security",
  "title": "Web Application Security",
  "num": 92,
  "emoji": "🕸️",
  "desc": "Injection, XSS, CSRF, broken access control and the OWASP risks that keep showing up in real apps.",
  "topics": [
    "Web Security",
    "OWASP Top 10",
    "SQL Injection",
    "XSS",
    "CSRF",
    "SameSite Cookies",
    "IDOR",
    "Security Headers",
    "CSP",
    "Penetration Testing"
  ],
  "mission": "# Mission — Web Application Security\n\nMaster the science of engineering secure web applications. Navigate the OWASP Top 10 risk landscape, eliminate SQL and command injection with parameterized queries, neutralize Stored and Reflected XSS using context-aware escaping and DOMPurify, defend against CSRF using the cookie Holy Trinity (HttpOnly, Secure, SameSite=Lax), prevent IDOR and broken access control with ownership verification, configure browser security headers (CSP, HSTS, CORS), secure APIs with Pydantic and JWT validation, and conduct automated penetration testing with OWASP ZAP.",
  "notes": "# Notes — Web Application Security\n\nNever trust client-side validation. Parameterize all SQL queries, sanitize user HTML with DOMPurify, store tokens in HttpOnly SameSite cookies, and enforce ownership checks on every endpoint.",
  "resources": "# Resources — Web Application Security\n\n- OWASP Foundation, *OWASP Top 10 Web Application Security Risks*\n- PortSwigger Web Security Academy, *SQLi, XSS, and CSRF Interactive Labs*\n- Mozilla Developer Network (MDN), *Content Security Policy (CSP) Reference*",
  "glossaryGroups": [
    {
      "id": "owasp-injection",
      "title": "OWASP & Injection",
      "terms": [
        {
          "term": "OWASP Top 10",
          "def": "The industry standard consensus ranking of the ten most critical web application security risks.",
          "lesson": 1,
          "tags": [
            "owasp",
            "standards"
          ]
        },
        {
          "term": "SQL Injection",
          "def": "An attack where untrusted user input alters database query syntax, allowing data extraction or bypass.",
          "lesson": 2,
          "tags": [
            "injection",
            "sqli"
          ]
        },
        {
          "term": "Parameterized Query",
          "def": "A database query where structure is compiled first and data values are bound separately, preventing SQLi.",
          "lesson": 2,
          "tags": [
            "defense",
            "database"
          ]
        }
      ]
    },
    {
      "id": "client-attacks",
      "title": "XSS & CSRF",
      "terms": [
        {
          "term": "Cross-Site Scripting",
          "def": "A vulnerability allowing attackers to execute arbitrary JavaScript in victims' browsers (XSS).",
          "lesson": 3,
          "tags": [
            "xss",
            "client"
          ]
        },
        {
          "term": "DOMPurify",
          "def": "A heavily audited open-source JavaScript library that sanitizes HTML strings to prevent XSS.",
          "lesson": 3,
          "tags": [
            "tools",
            "sanitization"
          ]
        },
        {
          "term": "Cross-Site Request Forgery",
          "def": "An attack tricking an authenticated browser into sending unauthorized requests with cookies attached (CSRF).",
          "lesson": 4,
          "tags": [
            "csrf",
            "cookies"
          ]
        }
      ]
    },
    {
      "id": "access-headers",
      "title": "Access & Headers",
      "terms": [
        {
          "term": "Insecure Direct Object Reference",
          "def": "A broken access control flaw where endpoints expose database IDs without verifying user ownership (IDOR).",
          "lesson": 5,
          "tags": [
            "access",
            "idor"
          ]
        },
        {
          "term": "Content Security Policy",
          "def": "An HTTP header restricting which domains a browser is permitted to load scripts, styles, and assets from (CSP).",
          "lesson": 6,
          "tags": [
            "headers",
            "csp"
          ]
        },
        {
          "term": "HSTS",
          "def": "HTTP Strict Transport Security header instructing browsers to strictly refuse unencrypted HTTP connections.",
          "lesson": 6,
          "tags": [
            "headers",
            "hsts"
          ]
        }
      ]
    },
    {
      "id": "testing-apis",
      "title": "API & Penetration Testing",
      "terms": [
        {
          "term": "SameSite Cookie",
          "def": "A cookie attribute (Lax/Strict) instructing browsers not to attach cookies on cross-origin requests.",
          "lesson": 4,
          "tags": [
            "cookies",
            "csrf"
          ]
        },
        {
          "term": "OWASP ZAP",
          "def": "Zed Attack Proxy — a leading open-source dynamic web application security testing (DAST) scanner.",
          "lesson": 8,
          "tags": [
            "tools",
            "dast"
          ]
        },
        {
          "term": "DAST",
          "def": "Dynamic Application Security Testing — probing a running application from the outside to find vulnerabilities.",
          "lesson": 8,
          "tags": [
            "testing",
            "dast"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "AsyncPG Parameterized SQL Query",
      "label": "100% SQL injection immunity",
      "code": "# Code and data are strictly separated:\nrow = await db.fetchrow(\n    \"SELECT id, email, role FROM users WHERE email = $1 AND is_active = $2\",\n    untrusted_user_input, True\n)",
      "lessonN": 2,
      "lessonSlug": "injection-attacks-sqli-parameterized-queries",
      "lessonTitle": "Injection Attacks: SQLi, Command Injection, and Parameterized Queries"
    },
    {
      "title": "Secure Session Cookie Holy Trinity",
      "label": "Maximum browser cookie protection",
      "code": "response.set_cookie(\n    key=\"session_token\", value=secure_token,\n    httponly=True,  # Blocks XSS JavaScript read access\n    secure=True,    # Requires HTTPS transmission\n    samesite=\"Lax\"  # Blocks CSRF cross-origin POSTs\n)",
      "lessonN": 4,
      "lessonSlug": "csrf-and-samesite-cookies",
      "lessonTitle": "Cross-Site Request Forgery (CSRF) and SameSite Cookies"
    },
    {
      "title": "DOMPurify Rich Text Sanitization",
      "label": "Client-side XSS prevention",
      "code": "import DOMPurify from 'dompurify';\n// Strips <script>, onerror, and dangerous attributes:\nconst cleanHtml = DOMPurify.sanitize(userContent);\ndocument.getElementById('bio').innerHTML = cleanHtml;",
      "lessonN": 3,
      "lessonSlug": "cross-site-scripting-xss-stored-reflected-dom",
      "lessonTitle": "Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based"
    },
    {
      "title": "Hardened Security Headers Middleware",
      "label": "FastAPI browser defense headers",
      "code": "@app.middleware(\"http\")\nasync def add_security_headers(request, call_next):\n    res = await call_next(request)\n    res.headers[\"Content-Security-Policy\"] = \"default-src 'self'\"\n    res.headers[\"Strict-Transport-Security\"] = \"max-age=31536000; includeSubDomains\"\n    res.headers[\"X-Frame-Options\"] = \"DENY\"\n    res.headers[\"X-Content-Type-Options\"] = \"nosniff\"\n    return res",
      "lessonN": 6,
      "lessonSlug": "security-headers-csp-hsts-cors",
      "lessonTitle": "Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "owasp-top-10-common-vulnerabilities",
      "title": "The OWASP Top 10: Understanding Common Vulnerabilities",
      "topic": "OWASP Top 10",
      "anim": "Generic",
      "lede": "The web vulnerability landscape: the Open Web Application Security Project (OWASP), root causes of web breaches, and risk ranking.",
      "winShort": "You understand the OWASP Top 10 landscape and common web vulnerability categories.",
      "missionLink": "Mastering the owasp top 10: understanding common vulnerabilities across modern software engineering",
      "sec1": {
        "title": "Core principles of The OWASP Top 10: Understanding Common Vulnerabilities",
        "content": "<p>Every day, thousands of web applications are compromised. But attackers rarely invent exotic quantum exploits; they exploit the <strong>same classic web vulnerabilities</strong> that have plagued software for decades. The <strong>OWASP Top 10</strong> catalogs these risks to guide defensive engineering.</p>",
        "keyIdea": "The web vulnerability landscape: the Open Web Application Security Project (OWASP), root causes of web breaches, and risk ranking."
      },
      "predict": {
        "q": "What is the 'OWASP Top 10' in software engineering?",
        "a": [
          "A regularly updated consensus standard representing the ten most critical security risks facing web applications worldwide",
          "A top 10 list of computer games",
          "A government agency that arrests hackers",
          "A list of web design trends"
        ],
        "c": 0,
        "why": "The OWASP Top 10 provides an authoritative industry standard of the most prevalent and severe web application risks.",
        "prompt": "What is the 'OWASP Top 10' in software engineering?",
        "options": [
          "A regularly updated consensus standard representing the ten most critical security risks facing web applications worldwide",
          "A top 10 list of computer games",
          "A government agency that arrests hackers",
          "A list of web design trends"
        ],
        "answer": 0,
        "explanation": "The OWASP Top 10 provides an authoritative industry standard of the most prevalent and severe web application risks."
      },
      "sec2": {
        "title": "OWASP Top 10 Highlights",
        "content": "<p>Key categories from the modern OWASP Top 10:</p>"
      },
      "diagram": {
        "title": "OWASP Top 10 Highlights",
        "caption": "The most prevalent web security failure modes",
        "steps": [
          {
            "title": "A01: Broken Access Control",
            "lines": [
              "Viewing other users' private records",
              "Privilege escalation to admin roles",
              "#1 most common web vulnerability"
            ]
          },
          {
            "title": "A03: Injection (SQL / Command)",
            "lines": [
              "Untrusted input concatenated into queries",
              "Allows arbitrary database extraction"
            ]
          },
          {
            "title": "A05: Security Misconfiguration",
            "lines": [
              "Debug mode left active in production",
              "Default passwords and open cloud buckets"
            ]
          }
        ],
        "boxes": [
          {
            "title": "A01: Broken Access Control",
            "lines": [
              "Viewing other users' private records",
              "Privilege escalation to admin roles",
              "#1 most common web vulnerability"
            ]
          },
          {
            "title": "A03: Injection (SQL / Command)",
            "lines": [
              "Untrusted input concatenated into queries",
              "Allows arbitrary database extraction"
            ]
          },
          {
            "title": "A05: Security Misconfiguration",
            "lines": [
              "Debug mode left active in production",
              "Default passwords and open cloud buckets"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Gap Between Client and Server",
        "content": "<ul><li><strong>A01: Broken Access Control:</strong> The #1 web vulnerability. Users acting outside their intended permissions (viewing other users' accounts, modifying admin settings).</li><li><strong>A02: Cryptographic Failures:</strong> Storing passwords in plaintext, using weak hashes (MD5, SHA1), or failing to enforce TLS in transit.</li><li><strong>A03: Injection:</strong> Untrusted user input interpreted as commands (SQLi, Command Injection, LDAP injection).</li><li><strong>A05: Security Misconfiguration:</strong> Default credentials left enabled, debug mode active in production, open S3 buckets, overly permissive CORS headers.</li><li><strong>A07: Identification and Authentication Failures:</strong> Permitting brute-force credential stuffing, missing MFA, or weak session expiration.</li></ul><pre><code># The Anatomy of a Web Vulnerability:\n# An attacker exploits a gap where developer assumptions diverge from protocol reality:\n# 1. Developer assumes client dropdown sends only 'user' or 'viewer'.\n# 2. Attacker intercepts HTTP request and changes payload to 'role=admin'.\n# 3. Backend blindly saves payload -> System compromised via Broken Access Control!</code></pre><div class=\"callout\"><p><strong>The Core Web Security Rule:</strong> Never trust the client. Every API endpoint must independently authenticate identity, validate input schemas, and enforce access authorization.</p></div>"
      },
      "trace": {
        "title": "The Gap Between Client and Server",
        "caption": "Where vulnerabilities thrive",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The OWASP Top 10: Understanding Common Vulnerabilities"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Client-Side Controls (Bypassable)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Server-Side Controls (Inviolable)"
            }
          }
        ],
        "code": [
          "# Tracing The OWASP Top 10: Understanding Common Vulnerabilities",
          "def execute_flow():",
          "    # The web vulnerability landscape: the Open Web Appl...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the OWASP sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "The OWASP Top 10 catalogs the most critical web risks, with Broken {1} Control and {2} attacks consistently ranking among the most severe."
        ],
        "blanks": [
          {
            "a": [
              "Access"
            ],
            "why": "Permission enforcement category"
          },
          {
            "a": [
              "Injection"
            ],
            "why": "SQL and command manipulation"
          }
        ]
      },
      "win": "You understand the OWASP Top 10 landscape and common web vulnerability categories.",
      "nextTasks": [
        "Audit your project code and identify where the owasp top 10: understanding common vulnerabilities applies.",
        "Author a unit test or verification script exercising the owasp top 10: understanding common vulnerabilities.",
        "Document team architectural conventions regarding the owasp top 10: understanding common vulnerabilities."
      ],
      "primarySource": "Industry standards and best practices for The OWASP Top 10: Understanding Common Vulnerabilities.",
      "quiz": [
        {
          "q": "What is currently ranked as the #1 most prevalent web application security risk in the OWASP Top 10?",
          "a": [
            "Broken Access Control (users accessing records or actions outside their authorization)",
            "Hardware power loss",
            "Slow internet connections",
            "Outdated website fonts"
          ],
          "c": 0,
          "why": "Broken Access Control is the most widespread vulnerability found in web application audits."
        },
        {
          "q": "Why is leaving 'DEBUG = True' enabled in production web applications a critical security misconfiguration?",
          "a": [
            "Unhandled errors display full stack traces, server environment variables, secret database credentials, and internal file paths to users",
            "It makes the website load slower",
            "It turns off user logins",
            "It deletes database tables"
          ],
          "c": 0,
          "why": "Debug pages leak sensitive internal paths, code snippets, and environment variables to attackers."
        },
        {
          "q": "How does an attacker exploit an 'Identification and Authentication Failure'?",
          "a": [
            "By running automated credential stuffing attacks using lists of leaked passwords without being blocked by rate limits or MFA",
            "By typing fast",
            "By cracking the monitor glass",
            "By turning off the router"
          ],
          "c": 0,
          "why": "Weak brute-force defenses and missing MFA allow automated credential stuffing to compromise accounts."
        },
        {
          "q": "What organization publishes the OWASP Top 10 standard?",
          "a": [
            "The Open Web Application Security Project (OWASP), an international non-profit security community",
            "Microsoft Corporation",
            "The United States Navy",
            "Google Search"
          ],
          "c": 0,
          "why": "OWASP is an open, non-profit community focused on improving software security."
        }
      ],
      "next": {
        "title": "Injection Attacks: SQLi, Command Injection, and Parameterized Queries",
        "desc": "Neutralize injection vulnerabilities with parameterized database queries."
      }
    },
    {
      "n": 2,
      "id": "injection-attacks-sqli-parameterized-queries",
      "title": "Injection Attacks: SQLi, Command Injection, and Parameterized Queries",
      "topic": "Injection Attacks",
      "anim": "Generic",
      "lede": "The classic fatal vulnerability: SQL Injection (SQLi), OS command injection, why string concatenation fails, and parameterized queries.",
      "winShort": "You know how to prevent SQL and command injection attacks using parameterized queries and array execution.",
      "missionLink": "Mastering injection attacks: sqli, command injection, and parameterized queries across modern software engineering",
      "sec1": {
        "title": "Core principles of Injection Attacks: SQLi, Command Injection, and Parameterized Queries",
        "content": "<p>SQL Injection (SQLi) has caused some of the largest data breaches in human history. It stems from a single fundamental mistake: <strong>confusing data with code</strong>. When you concatenate user input into an SQL query string, the database interpreter cannot tell where your query ends and the attacker's commands begin.</p>",
        "keyIdea": "The classic fatal vulnerability: SQL Injection (SQLi), OS command injection, why string concatenation fails, and parameterized queries."
      },
      "predict": {
        "q": "What causes an SQL Injection (SQLi) vulnerability in a web application?",
        "a": [
          "Directly interpolating untrusted user strings into an SQL command string, allowing user input to be parsed and executed as database code",
          "Using an SQL database instead of NoSQL",
          "Having too many rows in a table",
          "Running queries on Linux"
        ],
        "c": 0,
        "why": "SQL injection occurs when untrusted user input alters the grammatical structure of the SQL query syntax.",
        "prompt": "What causes an SQL Injection (SQLi) vulnerability in a web application?",
        "options": [
          "Directly interpolating untrusted user strings into an SQL command string, allowing user input to be parsed and executed as database code",
          "Using an SQL database instead of NoSQL",
          "Having too many rows in a table",
          "Running queries on Linux"
        ],
        "answer": 0,
        "explanation": "SQL injection occurs when untrusted user input alters the grammatical structure of the SQL query syntax."
      },
      "sec2": {
        "title": "String Concatenation vs Parameterized Queries",
        "content": "<p>The Classic SQL Injection Vulnerability:</p>"
      },
      "diagram": {
        "title": "String Concatenation vs Parameterized Queries",
        "caption": "Code injection vs strict parameter binding",
        "steps": [
          {
            "title": "String Concatenation (Vulnerable)",
            "lines": [
              "query = 'SELECT * WHERE user = ' + input",
              "Attacker input alters SQL syntax logic",
              "Allows authentication bypass & data theft"
            ]
          },
          {
            "title": "Parameterized Query (Immune)",
            "lines": [
              "query = 'SELECT * WHERE user = $1', [input]",
              "Input is bound strictly as literal data",
              "100% immune to SQL injection!"
            ]
          }
        ],
        "boxes": [
          {
            "title": "String Concatenation (Vulnerable)",
            "lines": [
              "query = 'SELECT * WHERE user = ' + input",
              "Attacker input alters SQL syntax logic",
              "Allows authentication bypass & data theft"
            ]
          },
          {
            "title": "Parameterized Query (Immune)",
            "lines": [
              "query = 'SELECT * WHERE user = $1', [input]",
              "Input is bound strictly as literal data",
              "100% immune to SQL injection!"
            ]
          }
        ]
      },
      "sec3": {
        "title": "OS Command Injection Danger",
        "content": "<pre><code># VULNERABLE CODE (String Concatenation): \nuser_input = \"admin' OR '1'='1\"\nquery = \"SELECT * FROM users WHERE email = '\" + user_input + \"' AND password = 'secret'\"\n# Resulting Executed SQL:\n# SELECT * FROM users WHERE email = 'admin' OR '1'='1' AND password = 'secret'\n# Because '1'='1' is always TRUE, the attacker logs in as ADMIN without a password!</code></pre><p>The Absolute Defense: <strong>Parameterized Queries (Prepared Statements)</strong>:</p><ul><li><strong>Separation of Code and Data:</strong> The SQL query structure is sent to the database engine first: <code>SELECT * FROM users WHERE email = $1</code>. The database compiles the execution plan.</li><li><strong>Data Passed as Bound Values:</strong> The user input is transmitted separately across the wire as a literal value parameter. Even if the user types <code>' OR 1=1; DROP TABLE users;--</code>, the database treats it strictly as a harmless, literal string!</li></ul><pre><code># SECURE CODE (Parameterized Query in Python/asyncpg):\n# The database driver handles parameter binding safely:\nuser_input = \"admin' OR '1'='1\"\nrow = await db.fetchrow(\n    \"SELECT * FROM users WHERE email = $1 AND password_hash = $2\",\n    user_input, hashed_pw # Passed as separate parameters! 100% IMMUNE TO SQLi!\n)</code></pre><div class=\"callout\"><p><strong>The Zero-Tolerance Law:</strong> Never, under any circumstances, use f-strings, format(), or + string concatenation to build SQL or shell commands. Always use parameterized queries.</p></div>"
      },
      "trace": {
        "title": "OS Command Injection Danger",
        "caption": "The peril of shell=True",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Injection Attacks: SQLi, Command Injection, and Parameterized Queries"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Vulnerable Shell Execution"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Secure Array Execution"
            }
          }
        ],
        "code": [
          "# Tracing Injection Attacks: SQLi, Command Injection, and Parameterized Queries",
          "def execute_flow():",
          "    # The classic fatal vulnerability: SQL Injection (SQ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the injection sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "SQL injection occurs when untrusted input is concatenated into queries, and is completely neutralized by using {1} queries to separate code from {2}."
        ],
        "blanks": [
          {
            "a": [
              "parameterized"
            ],
            "why": "Prepared statements with bound variables"
          },
          {
            "a": [
              "data"
            ],
            "why": "Literal values passed to database"
          }
        ]
      },
      "win": "You know how to prevent SQL and command injection attacks using parameterized queries and array execution.",
      "nextTasks": [
        "Audit your project code and identify where injection attacks: sqli, command injection, and parameterized queries applies.",
        "Author a unit test or verification script exercising injection attacks: sqli, command injection, and parameterized queries.",
        "Document team architectural conventions regarding injection attacks: sqli, command injection, and parameterized queries."
      ],
      "primarySource": "Industry standards and best practices for Injection Attacks: SQLi, Command Injection, and Parameterized Queries.",
      "quiz": [
        {
          "q": "Why does a parameterized query completely prevent SQL injection attacks?",
          "a": [
            "The database compiles the query syntax before binding user values, ensuring input can only ever be treated as literal data, never executable syntax",
            "It encrypts the database",
            "It deletes quotation marks",
            "It runs queries in C"
          ],
          "c": 0,
          "why": "Parameterized queries separate the query structure from data values at the database protocol level."
        },
        {
          "q": "What is 'OS Command Injection'?",
          "a": [
            "When untrusted user input is passed to a shell execution function (like os.system), allowing attackers to execute arbitrary operating system commands",
            "A computer virus on Windows",
            "A broken motherboard",
            "A database query syntax error"
          ],
          "c": 0,
          "why": "Command injection occurs when unvalidated input reaches a system shell interpreter."
        },
        {
          "q": "How can an engineer prevent OS command injection when executing external CLI utilities in Python?",
          "a": [
            "Use subprocess.run(('cmd', arg1, arg2), shell=False) passing arguments as a discrete list without invoking a shell",
            "Use os.system with quotation marks",
            "Ask the user not to use semicolons",
            "Use eval()"
          ],
          "c": 0,
          "why": "Passing command arguments as an array to subprocess without shell=True bypasses shell interpreters."
        },
        {
          "q": "Do modern Object-Relational Mappers (ORMs like SQLAlchemy or Prisma) protect against SQL injection by default?",
          "a": [
            "Yes; standard ORM query builders use parameterized queries under the hood, unless developers explicitly execute raw concatenated SQL strings",
            "No; ORMs increase SQL injection",
            "ORMs only work on SQLite",
            "ORMs disable databases"
          ],
          "c": 0,
          "why": "Standard ORM query methods parameterize inputs automatically, preventing injection unless raw SQL strings are forced."
        }
      ],
      "next": {
        "title": "Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based",
        "desc": "Defend against malicious client-side script execution."
      }
    },
    {
      "n": 3,
      "id": "cross-site-scripting-xss-stored-reflected-dom",
      "title": "Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based",
      "topic": "XSS Defenses",
      "anim": "Generic",
      "lede": "Client-side compromise: Stored XSS, Reflected XSS, DOM-based XSS, context-aware output encoding, and DOMPurify.",
      "winShort": "You know how to diagnose, exploit, and prevent Stored, Reflected, and DOM-Based XSS attacks.",
      "missionLink": "Mastering cross-site scripting (xss): stored, reflected, and dom-based across modern software engineering",
      "sec1": {
        "title": "Core principles of Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based",
        "content": "<p>While SQL Injection targets the server's database, <strong>Cross-Site Scripting (XSS) targets other users' browsers</strong>. If an attacker can inject malicious JavaScript into your web application, that script executes with the full privileges of the victim: it can read session cookies, steal auth tokens from `localStorage`, log keystrokes, and execute unauthorized actions.</p>",
        "keyIdea": "Client-side compromise: Stored XSS, Reflected XSS, DOM-based XSS, context-aware output encoding, and DOMPurify."
      },
      "predict": {
        "q": "What is 'Cross-Site Scripting' (XSS) in web applications?",
        "a": [
          "A vulnerability where an application injects untrusted user input into an HTML page without proper encoding, allowing attacker JavaScript to execute in victims' browsers",
          "A style sheet bug in CSS",
          "A broken hyperlink between two websites",
          "A technique for writing fast JavaScript"
        ],
        "c": 0,
        "why": "XSS enables attackers to execute arbitrary JavaScript in the victim's browser, stealing session tokens or defacing pages.",
        "prompt": "What is 'Cross-Site Scripting' (XSS) in web applications?",
        "options": [
          "A vulnerability where an application injects untrusted user input into an HTML page without proper encoding, allowing attacker JavaScript to execute in victims' browsers",
          "A style sheet bug in CSS",
          "A broken hyperlink between two websites",
          "A technique for writing fast JavaScript"
        ],
        "answer": 0,
        "explanation": "XSS enables attackers to execute arbitrary JavaScript in the victim's browser, stealing session tokens or defacing pages."
      },
      "sec2": {
        "title": "The Three XSS Variants",
        "content": "<p>The Three Flavors of XSS:</p>"
      },
      "diagram": {
        "title": "The Three XSS Variants",
        "caption": "Stored, Reflected, and DOM-Based",
        "steps": [
          {
            "title": "Stored XSS (Persistent)",
            "lines": [
              "Script saved in database (comments/bios)",
              "Executes for EVERY user who loads page",
              "High severity, widespread impact"
            ]
          },
          {
            "title": "Reflected XSS",
            "lines": [
              "Script reflected in error message or search",
              "Delivered via malicious phishing URL"
            ]
          },
          {
            "title": "DOM-Based XSS",
            "lines": [
              "Client JS writes to unsafe sink (innerHTML)",
              "Executes entirely in the browser"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Stored XSS (Persistent)",
            "lines": [
              "Script saved in database (comments/bios)",
              "Executes for EVERY user who loads page",
              "High severity, widespread impact"
            ]
          },
          {
            "title": "Reflected XSS",
            "lines": [
              "Script reflected in error message or search",
              "Delivered via malicious phishing URL"
            ]
          },
          {
            "title": "DOM-Based XSS",
            "lines": [
              "Client JS writes to unsafe sink (innerHTML)",
              "Executes entirely in the browser"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Automatic Escaping vs Dangerous Inners",
        "content": "<ul><li><strong>1. Stored XSS (Persistent — Most Dangerous):</strong> Malicious script is saved in the database (e.g. a blog comment or user profile bio: <code>&lt;script&gt;stealTokens()&lt;/script&gt;</code>). Every user who views that profile executes the attack!</li><li><strong>2. Reflected XSS:</strong> Malicious script is reflected off the server via query parameters (e.g. `https://bank.com/search?q=<script>...`). Delivered via phishing links.</li><li><strong>3. DOM-Based XSS:</strong> The vulnerability exists entirely on the client side: JavaScript code reads an untrusted source (`location.hash`) and writes it directly to an unsafe sink (`element.innerHTML = hash`).</li></ul><p>The Modern Defenses:</p><ul><li><strong>Context-Aware HTML Escaping:</strong> Modern frontend frameworks (React, Vue, Angular) automatically escape HTML by default when rendering variables: `<div>{userInput}</div>` converts `&lt;` to `&amp;lt;`.</li><li><strong>Sanitizing Rich Text with DOMPurify:</strong> If you must render user HTML, always scrub it with `DOMPurify.sanitize(dirtyHtml)`.</li><li><strong>HttpOnly Cookie Flag:</strong> Marks session cookies so client-side JavaScript <strong>cannot read them</strong>, rendering token-stealing XSS ineffective!</li></ul><pre><code>// Sanitizing User HTML before rendering in React:\nimport DOMPurify from 'dompurify';\n\nfunction SafeUserBio({ rawBioHtml }) {\n    // DOMPurify strips malicious <script>, onload, and onerror handlers!\n    const cleanHtml = DOMPurify.sanitize(rawBioHtml);\n    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;\n}</code></pre><div class=\"callout\"><p><strong>The HttpOnly Shield:</strong> Store sensitive authentication tokens in <code>HttpOnly</code> cookies rather than <code>localStorage</code>. An XSS attacker cannot steal a cookie that JavaScript cannot see.</p></div>"
      },
      "trace": {
        "title": "Automatic Escaping vs Dangerous Inners",
        "caption": "Framework safety boundaries",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Standard React: {userInput}"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Unsafe: innerHTML / dangerouslySetInnerHTML"
            }
          }
        ],
        "code": [
          "# Tracing Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based",
          "def execute_flow():",
          "    # Client-side compromise: Stored XSS, Reflected XSS,...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the XSS sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Cross-Site Scripting allows attackers to run arbitrary JavaScript in browsers, but storing tokens in {1} cookies prevents scripts from stealing session {2}."
        ],
        "blanks": [
          {
            "a": [
              "HttpOnly"
            ],
            "why": "Cookie flag blocking JavaScript access"
          },
          {
            "a": [
              "credentials"
            ],
            "why": "Authentication tokens and cookies"
          }
        ]
      },
      "win": "You know how to diagnose, exploit, and prevent Stored, Reflected, and DOM-Based XSS attacks.",
      "nextTasks": [
        "Audit your project code and identify where cross-site scripting (xss): stored, reflected, and dom-based applies.",
        "Author a unit test or verification script exercising cross-site scripting (xss): stored, reflected, and dom-based.",
        "Document team architectural conventions regarding cross-site scripting (xss): stored, reflected, and dom-based."
      ],
      "primarySource": "Industry standards and best practices for Cross-Site Scripting (XSS): Stored, Reflected, and DOM-Based.",
      "quiz": [
        {
          "q": "Why is storing JWT auth tokens in browser 'localStorage' risky compared to 'HttpOnly' cookies?",
          "a": [
            "Any XSS vulnerability on the site allows malicious JavaScript to read localStorage and steal the JWT instantly, whereas HttpOnly cookies cannot be read by JavaScript",
            "localStorage is slower",
            "localStorage has a 5-byte limit",
            "localStorage deletes tokens on reload"
          ],
          "c": 0,
          "why": "JavaScript has full read access to localStorage, making it vulnerable to extraction via XSS."
        },
        {
          "q": "What open-source JavaScript library is the gold standard for sanitizing HTML to prevent XSS?",
          "a": [
            "DOMPurify",
            "jQuery",
            "React",
            "Lodash"
          ],
          "c": 0,
          "why": "DOMPurify is a fast, heavily audited library that strips malicious tags and attributes from HTML strings."
        },
        {
          "q": "How does React prevent XSS by default when using standard JSX syntax like '<h1>{user_name}</h1>'?",
          "a": [
            "React automatically encodes and escapes special HTML characters (&, <, >, \", ') before inserting strings into the DOM",
            "React deletes user names",
            "React runs on the server only",
            "React bans JavaScript"
          ],
          "c": 0,
          "why": "React treats standard JSX expressions as text strings, escaping all HTML entities automatically."
        },
        {
          "q": "What is an 'Unsafe DOM Sink' in JavaScript web development?",
          "a": [
            "A property or function (like element.innerHTML, document.write, or eval) that interprets strings as executable code or HTML markup",
            "A kitchen sink in an office",
            "A broken CSS file",
            "A slow network socket"
          ],
          "c": 0,
          "why": "DOM sinks parse and execute input as markup or code, creating XSS vulnerabilities when fed unvalidated data."
        }
      ],
      "next": {
        "title": "Cross-Site Request Forgery (CSRF) and SameSite Cookies",
        "desc": "Prevent unauthorized actions executed on behalf of authenticated users."
      }
    },
    {
      "n": 4,
      "id": "csrf-and-samesite-cookies",
      "title": "Cross-Site Request Forgery (CSRF) and SameSite Cookies",
      "topic": "CSRF Defense",
      "anim": "Generic",
      "lede": "Session hijacking: Cross-Site Request Forgery (CSRF), cookie transmission mechanics, Anti-CSRF tokens, and the SameSite cookie attribute.",
      "winShort": "You know how to prevent Cross-Site Request Forgery using SameSite cookie attributes and synchronizer tokens.",
      "missionLink": "Mastering cross-site request forgery (csrf) and samesite cookies across modern software engineering",
      "sec1": {
        "title": "Core principles of Cross-Site Request Forgery (CSRF) and SameSite Cookies",
        "content": "<p>Imagine you are logged into your bank at `bank.com`. In another tab, you visit `evil-site.com`. That malicious site contains a hidden form that automatically submits a POST request to `bank.com/transfer?amount=1000&to=hacker`. Because browsers automatically attach `bank.com` cookies to cross-origin requests by default, <strong>the bank processes the transfer!</strong> This is <strong>CSRF</strong>.</p>",
        "keyIdea": "Session hijacking: Cross-Site Request Forgery (CSRF), cookie transmission mechanics, Anti-CSRF tokens, and the SameSite cookie attribute."
      },
      "predict": {
        "q": "What is 'Cross-Site Request Forgery' (CSRF) in web security?",
        "a": [
          "An attack where a malicious website tricks a victim's browser into sending an authenticated request (with cookies attached) to a target site without the user's consent",
          "A broken CSS style sheet",
          "A tool for making fake digital signatures",
          "A type of SQL injection"
        ],
        "c": 0,
        "why": "CSRF exploits the browser's automatic inclusion of session cookies to forge actions on behalf of authenticated users.",
        "prompt": "What is 'Cross-Site Request Forgery' (CSRF) in web security?",
        "options": [
          "An attack where a malicious website tricks a victim's browser into sending an authenticated request (with cookies attached) to a target site without the user's consent",
          "A broken CSS style sheet",
          "A tool for making fake digital signatures",
          "A type of SQL injection"
        ],
        "answer": 0,
        "explanation": "CSRF exploits the browser's automatic inclusion of session cookies to forge actions on behalf of authenticated users."
      },
      "sec2": {
        "title": "How CSRF Exploits Browsers",
        "content": "<p>The Two Definitive Defenses against CSRF:</p>"
      },
      "diagram": {
        "title": "How CSRF Exploits Browsers",
        "caption": "Automatic cookie attachment on cross-origin requests",
        "steps": [
          {
            "title": "1. Victim Logged In",
            "lines": [
              "User has valid session cookie for bank.com",
              "Session cookie stored in browser"
            ]
          },
          {
            "title": "2. Victim Visits Evil Site",
            "lines": [
              "evil.com sends hidden POST to bank.com/transfer",
              "Browser automatically includes bank.com cookies!"
            ]
          },
          {
            "title": "3. The Defense Gate",
            "lines": [
              "SameSite=Lax blocks cookie transmission!",
              "Request rejected by bank. Attack failed!"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Victim Logged In",
            "lines": [
              "User has valid session cookie for bank.com",
              "Session cookie stored in browser"
            ]
          },
          {
            "title": "2. Victim Visits Evil Site",
            "lines": [
              "evil.com sends hidden POST to bank.com/transfer",
              "Browser automatically includes bank.com cookies!"
            ]
          },
          {
            "title": "3. The Defense Gate",
            "lines": [
              "SameSite=Lax blocks cookie transmission!",
              "Request rejected by bank. Attack failed!"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Cookie Holy Trinity",
        "content": "<ul><li><strong>1. The SameSite Cookie Attribute (Modern Browser Shield):</strong> Setting <code>SameSite=Lax</code> or <code>SameSite=Strict</code> on session cookies instructs the browser <strong>never to attach the cookie on cross-site POST requests</strong>! SameSite=Lax is now the default in Chrome, Firefox, and Safari, eliminating 95% of CSRF risks.</li><li><strong>2. Anti-CSRF Synchronizer Tokens:</strong> The server generates a unique, cryptographically random token tied to the user's session (e.g. `csrf_token = \"a8f92b...\"`). The web app includes this token in forms and custom HTTP headers (`X-CSRF-Token`). Since evil-site.com cannot read the token due to the Same-Origin Policy, forged requests fail verification!</li></ul><pre><code># Setting a Modern Secure Session Cookie in Python (FastAPI):\nresponse.set_cookie(\n    key=\"session_id\",\n    value=user_session_token,\n    httponly=True,   # XSS Shield: JavaScript cannot read this cookie!\n    secure=True,     # Transport Shield: Transmitted ONLY over HTTPS!\n    samesite=\"Lax\"   # CSRF Shield: Blocked on cross-origin POST requests!\n)</code></pre><div class=\"callout\"><p><strong>The Cookie Security Holy Trinity:</strong> Every authentication cookie must have: <code>HttpOnly; Secure; SameSite=Lax</code>. This one-line configuration neutralizes both XSS credential theft and CSRF attacks.</p></div>"
      },
      "trace": {
        "title": "The Cookie Holy Trinity",
        "caption": "Three mandatory flags on every session cookie",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Cross-Site Request Forgery (CSRF) and SameSite Cookies"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "HttpOnly"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Secure"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "SameSite=Lax"
            }
          }
        ],
        "code": [
          "# Tracing Cross-Site Request Forgery (CSRF) and SameSite Cookies",
          "def execute_flow():",
          "    # Session hijacking: Cross-Site Request Forgery (CSR...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the CSRF defense sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "CSRF attacks trick browsers into sending authenticated requests, but setting {1} on cookies and enforcing anti-CSRF {2} prevents unauthorized actions."
        ],
        "blanks": [
          {
            "a": [
              "SameSite=Lax"
            ],
            "why": "Cookie attribute blocking cross-origin requests"
          },
          {
            "a": [
              "tokens"
            ],
            "why": "Random cryptographically signed request validation values"
          }
        ]
      },
      "win": "You know how to prevent Cross-Site Request Forgery using SameSite cookie attributes and synchronizer tokens.",
      "nextTasks": [
        "Audit your project code and identify where cross-site request forgery (csrf) and samesite cookies applies.",
        "Author a unit test or verification script exercising cross-site request forgery (csrf) and samesite cookies.",
        "Document team architectural conventions regarding cross-site request forgery (csrf) and samesite cookies."
      ],
      "primarySource": "Industry standards and best practices for Cross-Site Request Forgery (CSRF) and SameSite Cookies.",
      "quiz": [
        {
          "q": "Why does setting 'SameSite=Lax' on a session cookie prevent CSRF attacks?",
          "a": [
            "Browsers will not include the cookie on cross-site POST requests or iframe submissions initiated by external websites",
            "It deletes the cookie after 5 seconds",
            "It makes the cookie visible to all websites",
            "It turns off the browser"
          ],
          "c": 0,
          "why": "SameSite=Lax blocks the automatic attachment of cookies on cross-origin state-changing POST requests."
        },
        {
          "q": "What happens if a session cookie is configured with 'Secure=True'?",
          "a": [
            "The browser will only transmit the cookie over encrypted HTTPS connections, refusing to send it over plaintext HTTP",
            "The cookie is encrypted with a password",
            "The user must enter a PIN",
            "The cookie lasts forever"
          ],
          "c": 0,
          "why": "The Secure flag ensures cookies are never transmitted over unencrypted HTTP channels."
        },
        {
          "q": "Why is an API that exclusively authenticates requests via an 'Authorization: Bearer <token>' header naturally immune to classic CSRF?",
          "a": [
            "Browsers do not automatically attach custom Authorization headers to cross-origin requests; headers must be explicitly set via JavaScript",
            "Bearer tokens are encrypted",
            "Bearer tokens run in C",
            "Headers are forbidden in browsers"
          ],
          "c": 0,
          "why": "Unlike cookies, custom headers are not automatically attached by browsers across origins."
        },
        {
          "q": "What is an 'Anti-CSRF Token' (Synchronizer Token)?",
          "a": [
            "A unique, unpredictable secret value generated by the server and validated on state-changing requests that external sites cannot access",
            "A coin used for computer games",
            "A password for the database",
            "A hardware device"
          ],
          "c": 0,
          "why": "Synchronizer tokens verify that state-changing requests originated from the genuine application UI."
        }
      ],
      "next": {
        "title": "Broken Access Control and IDOR (Insecure Direct Object References)",
        "desc": "Enforce strict resource-level authorization checks."
      }
    },
    {
      "n": 5,
      "id": "broken-access-control-and-idor",
      "title": "Broken Access Control and IDOR (Insecure Direct Object References)",
      "topic": "Access Control",
      "anim": "Generic",
      "lede": "The #1 web vulnerability: Insecure Direct Object References (IDOR), parameter tampering, horizontal vs vertical privilege escalation, and tenancy checks.",
      "winShort": "You know how to diagnose, exploit, and prevent Broken Access Control and IDOR vulnerabilities.",
      "missionLink": "Mastering broken access control and idor (insecure direct object references) across modern software engineering",
      "sec1": {
        "title": "Core principles of Broken Access Control and IDOR (Insecure Direct Object References)",
        "content": "<p>You log into your medical portal. The URL reads: `https://clinic.com/api/records/8492`. You change the URL to `https://clinic.com/api/records/8493`, hit enter, and <strong>see another patient's confidential medical records</strong>. This is an <strong>Insecure Direct Object Reference (IDOR)</strong>, and it is the single most common vulnerability discovered in enterprise web penetration tests.</p>",
        "keyIdea": "The #1 web vulnerability: Insecure Direct Object References (IDOR), parameter tampering, horizontal vs vertical privilege escalation, and tenancy checks."
      },
      "predict": {
        "q": "What is an 'Insecure Direct Object Reference' (IDOR) vulnerability in an API?",
        "a": [
          "When an endpoint accepts an object ID directly from user input (e.g. /invoices/1042) without verifying that the authenticated user actually owns that object",
          "When an object in Python has no methods",
          "A syntax error in JavaScript",
          "A broken network router"
        ],
        "c": 0,
        "why": "IDOR occurs when users access unauthorized records simply by guessing or tampering with object IDs in URLs.",
        "prompt": "What is an 'Insecure Direct Object Reference' (IDOR) vulnerability in an API?",
        "options": [
          "When an endpoint accepts an object ID directly from user input (e.g. /invoices/1042) without verifying that the authenticated user actually owns that object",
          "When an object in Python has no methods",
          "A syntax error in JavaScript",
          "A broken network router"
        ],
        "answer": 0,
        "explanation": "IDOR occurs when users access unauthorized records simply by guessing or tampering with object IDs in URLs."
      },
      "sec2": {
        "title": "Horizontal vs Vertical Privilege Escalation",
        "content": "<p>Types of Broken Access Control:</p>"
      },
      "diagram": {
        "title": "Horizontal vs Vertical Privilege Escalation",
        "caption": "Two dimensions of broken access control",
        "steps": [
          {
            "title": "Horizontal Escalation (IDOR)",
            "lines": [
              "User A changes /invoices/1 to /invoices/2",
              "Views peer customer's private data",
              "Same permission level, unauthorized scope"
            ]
          },
          {
            "title": "Vertical Escalation",
            "lines": [
              "Regular user calls /api/admin/users/delete",
              "Executes administrative operations",
              "Crosses privilege boundary"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Horizontal Escalation (IDOR)",
            "lines": [
              "User A changes /invoices/1 to /invoices/2",
              "Views peer customer's private data",
              "Same permission level, unauthorized scope"
            ]
          },
          {
            "title": "Vertical Escalation",
            "lines": [
              "Regular user calls /api/admin/users/delete",
              "Executes administrative operations",
              "Crosses privilege boundary"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Mandatory Ownership Check",
        "content": "<ul><li><strong>Horizontal Privilege Escalation (IDOR):</strong> User A accesses records belonging to User B at the same permission level (e.g. Customer viewing another customer's invoice).</li><li><strong>Vertical Privilege Escalation:</strong> A regular user performs actions reserved for administrators (e.g. sending a request to `POST /api/admin/delete_user`).</li><li><strong>Missing Function-Level Access Control:</strong> Hiding a button in the UI, but leaving the underlying API endpoint completely unprotected against direct HTTP requests.</li></ul><pre><code># VULNERABLE CODE (IDOR): \n@app.get(\"/api/invoices/{invoice_id}\")\nasync def get_invoice(invoice_id: int, current_user: User = Depends(get_current_user)):\n    # BUGS: Fetches invoice by ID directly without checking who owns it!\n    return await db.invoices.find(invoice_id)\n\n# SECURE CODE (Enforcing Ownership & Tenant Scoping):\n@app.get(\"/api/invoices/{invoice_id}\")\nasync def get_invoice(invoice_id: int, current_user: User = Depends(get_current_user)):\n    invoice = await db.invoices.find(invoice_id)\n    # Mandatory Authorization Ownership Gate:\n    if not invoice or invoice.tenant_id != current_user.tenant_id:\n        raise HTTPException(status_code=404, detail=\"Invoice not found\")\n    return invoice</code></pre><div class=\"callout\"><p><strong>The 404 Obfuscation Rule:</strong> When unauthorized access is attempted, return <code>404 Not Found</code> rather than <code>403 Forbidden</code>. Returning 403 confirms to an attacker that the target record ID actually exists.</p></div>"
      },
      "trace": {
        "title": "The Mandatory Ownership Check",
        "caption": "Enforcing tenant and user boundaries",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Broken Access Control and IDOR (Insecure Direct Object References)"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Vulnerable Query"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Secure Scoped Query"
            }
          }
        ],
        "code": [
          "# Tracing Broken Access Control and IDOR (Insecure Direct Object References)",
          "def execute_flow():",
          "    # The #1 web vulnerability: Insecure Direct Object R...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the access control sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "IDOR vulnerabilities occur when endpoints expose database IDs without verifying user {1}, allowing horizontal {2} escalation simply by tampering with URLs."
        ],
        "blanks": [
          {
            "a": [
              "ownership"
            ],
            "why": "Verifying that the current user owns the record"
          },
          {
            "a": [
              "privilege"
            ],
            "why": "Unauthorized access expansion"
          }
        ]
      },
      "win": "You know how to diagnose, exploit, and prevent Broken Access Control and IDOR vulnerabilities.",
      "nextTasks": [
        "Audit your project code and identify where broken access control and idor (insecure direct object references) applies.",
        "Author a unit test or verification script exercising broken access control and idor (insecure direct object references).",
        "Document team architectural conventions regarding broken access control and idor (insecure direct object references)."
      ],
      "primarySource": "Industry standards and best practices for Broken Access Control and IDOR (Insecure Direct Object References).",
      "quiz": [
        {
          "q": "Why is hiding an 'Admin Settings' link in the frontend navigation insufficient for security?",
          "a": [
            "Attackers do not rely on UI buttons; they inspect API routes and send direct HTTP requests to /api/admin endpoints using tools like curl",
            "Browsers cannot hide buttons",
            "Users can guess buttons",
            "Buttons are deprecated"
          ],
          "c": 0,
          "why": "Security through obscurity in the UI fails; authorization must be enforced on the server endpoint."
        },
        {
          "q": "Why is using random UUIDv4 identifiers (e.g. /invoices/8f49-2b1a) better than sequential integers (e.g. /invoices/1042)?",
          "a": [
            "UUIDs are cryptographically unpredictable, preventing automated enumeration scripts from scraping sequential records across the database",
            "UUIDs make databases faster",
            "UUIDs use less disk space",
            "UUIDs are required by Python"
          ],
          "c": 0,
          "why": "Unpredictable UUIDs eliminate trivial integer enumeration attacks (though server authorization checks remain mandatory)."
        },
        {
          "q": "What should an API return when an authenticated user attempts to access a record belonging to another customer?",
          "a": [
            "HTTP 404 Not Found (to avoid confirming the existence of the resource to attackers)",
            "HTTP 200 with blank data",
            "HTTP 500 Server Crash",
            "A friendly email"
          ],
          "c": 0,
          "why": "Returning 404 prevents attackers from enumerating valid IDs via 403 versus 404 status differences."
        },
        {
          "q": "What is the single best architectural practice to eliminate IDOR across an entire engineering codebase?",
          "a": [
            "Automatically appending 'WHERE tenant_id = :current_tenant' to every database query in the data access layer",
            "Banning user IDs",
            "Deleting the database",
            "Making all data public"
          ],
          "c": 0,
          "why": "Enforcing tenant scoping systematically in data layer abstractions prevents developers from forgetting checks."
        }
      ],
      "next": {
        "title": "Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses",
        "desc": "Harness browser security headers to lock down web applications."
      }
    },
    {
      "n": 6,
      "id": "security-headers-csp-hsts-cors",
      "title": "Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses",
      "topic": "Security Headers",
      "anim": "Generic",
      "lede": "Browser defense in depth: Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and Cross-Origin Resource Sharing (CORS).",
      "winShort": "You know how to configure CSP, HSTS, CORS, and modern browser security headers.",
      "missionLink": "Mastering security headers (csp, hsts, cors) and modern browser defenses across modern software engineering",
      "sec1": {
        "title": "Core principles of Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses",
        "content": "<p>Modern web browsers are sophisticated security operating systems with powerful built-in defense sandboxes. However, the browser will only activate these defenses if your server explicitly instructs it to do so using <strong>HTTP Security Headers</strong>.</p>",
        "keyIdea": "Browser defense in depth: Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), and Cross-Origin Resource Sharing (CORS)."
      },
      "predict": {
        "q": "What does a 'Content Security Policy' (CSP) header enforce in modern web browsers?",
        "a": [
          "It restricts which external domains and sources a browser is permitted to load scripts, styles, images, and fonts from, neutralizing XSS attacks",
          "It copyright protects web content",
          "It changes the font style of the website",
          "It accelerates internet speed"
        ],
        "c": 0,
        "why": "CSP tells browsers which sources are trusted for scripts and assets, preventing unauthorized code execution.",
        "prompt": "What does a 'Content Security Policy' (CSP) header enforce in modern web browsers?",
        "options": [
          "It restricts which external domains and sources a browser is permitted to load scripts, styles, images, and fonts from, neutralizing XSS attacks",
          "It copyright protects web content",
          "It changes the font style of the website",
          "It accelerates internet speed"
        ],
        "answer": 0,
        "explanation": "CSP tells browsers which sources are trusted for scripts and assets, preventing unauthorized code execution."
      },
      "sec2": {
        "title": "The Core Security Headers Suite",
        "content": "<p>The Four Essential Browser Security Headers:</p>"
      },
      "diagram": {
        "title": "The Core Security Headers Suite",
        "caption": "Instructing browsers to activate protective sandboxes",
        "steps": [
          {
            "title": "Content-Security-Policy (CSP)",
            "lines": [
              "Blocks unauthorized scripts & frames",
              "Neutralizes injected XSS payloads"
            ]
          },
          {
            "title": "Strict-Transport-Security (HSTS)",
            "lines": [
              "Enforces 100% HTTPS connections",
              "Prevents SSL-stripping & man-in-the-middle"
            ]
          },
          {
            "title": "X-Frame-Options: DENY",
            "lines": [
              "Prevents embedding in malicious iframes",
              "Neutralizes Clickjacking attacks"
            ]
          },
          {
            "title": "X-Content-Type-Options: nosniff",
            "lines": [
              "Prevents MIME-type confusion attacks",
              "Blocks executing images as scripts"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Content-Security-Policy (CSP)",
            "lines": [
              "Blocks unauthorized scripts & frames",
              "Neutralizes injected XSS payloads"
            ]
          },
          {
            "title": "Strict-Transport-Security (HSTS)",
            "lines": [
              "Enforces 100% HTTPS connections",
              "Prevents SSL-stripping & man-in-the-middle"
            ]
          },
          {
            "title": "X-Frame-Options: DENY",
            "lines": [
              "Prevents embedding in malicious iframes",
              "Neutralizes Clickjacking attacks"
            ]
          },
          {
            "title": "X-Content-Type-Options: nosniff",
            "lines": [
              "Prevents MIME-type confusion attacks",
              "Blocks executing images as scripts"
            ]
          }
        ]
      },
      "sec3": {
        "title": "CORS vs Same-Origin Policy",
        "content": "<ul><li><strong>1. Content Security Policy (CSP):</strong> Restricts trusted sources of executable code: <code>Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com</code>. Blocks injected inline scripts and rogue third-party tracking scripts!</li><li><strong>2. HTTP Strict Transport Security (HSTS):</strong> Instructs the browser <strong>never to use unencrypted HTTP</strong> for this domain for the next year: <code>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</code>. Prevents SSL-stripping attacks.</li><li><strong>3. Cross-Origin Resource Sharing (CORS):</strong> Governs which external origins are allowed to read API responses in JavaScript. <em>Never use `Access-Control-Allow-Origin: *` with credentials!</em></li><li><strong>4. X-Content-Type-Options:</strong> <code>X-Content-Type-Options: nosniff</code>. Prevents browsers from guessing (MIME-sniffing) file types and executing uploaded images as JavaScript!</li></ul><pre><code># Complete Security Headers Middleware in Python (FastAPI):\n@app.middleware(\"http\")\nasync def add_security_headers(request: Request, call_next):\n    response = await call_next(request)\n    response.headers[\"Content-Security-Policy\"] = \"default-src 'self'; script-src 'self'\"\n    response.headers[\"Strict-Transport-Security\"] = \"max-age=31536000; includeSubDomains\"\n    response.headers[\"X-Content-Type-Options\"] = \"nosniff\"\n    response.headers[\"X-Frame-Options\"] = \"DENY\" # Blocks Clickjacking iframe attacks!\n    return response</code></pre><div class=\"callout\"><p><strong>The HSTS Preload List:</strong> Submitting your domain to the official Chromium HSTS Preload list hardcodes HTTPS into all major browsers, ensuring connections are encrypted from the very first visit.</p></div>"
      },
      "trace": {
        "title": "CORS vs Same-Origin Policy",
        "caption": "Controlling cross-origin API read access",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Default Browser SOP"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Broken CORS: Access-Control-Allow-Origin: *"
            }
          }
        ],
        "code": [
          "# Tracing Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses",
          "def execute_flow():",
          "    # Browser defense in depth: Content Security Policy ...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the security headers sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Content Security Policy neutralizes XSS by restricting allowed script sources, while {1} enforces permanent HTTPS and {2} blocks clickjacking iframe embedding."
        ],
        "blanks": [
          {
            "a": [
              "HSTS"
            ],
            "why": "HTTP Strict Transport Security header"
          },
          {
            "a": [
              "X-Frame-Options"
            ],
            "why": "Header preventing iframe embedding"
          }
        ]
      },
      "win": "You know how to configure CSP, HSTS, CORS, and modern browser security headers.",
      "nextTasks": [
        "Audit your project code and identify where security headers (csp, hsts, cors) and modern browser defenses applies.",
        "Author a unit test or verification script exercising security headers (csp, hsts, cors) and modern browser defenses.",
        "Document team architectural conventions regarding security headers (csp, hsts, cors) and modern browser defenses."
      ],
      "primarySource": "Industry standards and best practices for Security Headers (CSP, HSTS, CORS) and Modern Browser Defenses.",
      "quiz": [
        {
          "q": "What happens if an attacker injects an XSS script into a website protected by a strict 'Content-Security-Policy: default-src 'self'' header?",
          "a": [
            "The browser refuses to execute the inline script or load external attacker code, reporting a CSP violation in the developer console",
            "The browser crashes",
            "The website deletes its code",
            "The script executes anyway"
          ],
          "c": 0,
          "why": "CSP policies instruct browsers to refuse execution of unauthorized scripts, neutralizing XSS."
        },
        {
          "q": "What is an 'SSL-Stripping' attack that HSTS prevents?",
          "a": [
            "An attacker intercepting initial plaintext HTTP requests on public Wi-Fi to downgrade connections before encryption establishes",
            "A computer virus that deletes SSL files",
            "A hardware defect in network cards",
            "A technique for speeding up Wi-Fi"
          ],
          "c": 0,
          "why": "HSTS instructs browsers to refuse unencrypted HTTP, preventing protocol downgrade attacks."
        },
        {
          "q": "What is 'Clickjacking' and how does 'X-Frame-Options: DENY' stop it?",
          "a": [
            "Embedding a target website inside a transparent iframe so clicks hit hidden buttons; DENY tells browsers never to render the site inside an iframe",
            "Stealing a user's mouse",
            "Clicking too fast on a website",
            "A broken hyperlink"
          ],
          "c": 0,
          "why": "X-Frame-Options: DENY prevents third-party sites from framing your UI to trick users into clicking buttons."
        },
        {
          "q": "Why is setting 'Access-Control-Allow-Origin: *' on authenticated private API endpoints dangerous?",
          "a": [
            "It permits any external website on the internet to read sensitive private API responses in client-side JavaScript",
            "It causes hard drives to fill up",
            "It is illegal in Python",
            "It slows down internet speed"
          ],
          "c": 0,
          "why": "Wildcard CORS headers disable the browser's Same-Origin protection, exposing private data to any site."
        }
      ],
      "next": {
        "title": "Secure API Design: Rate Limiting, Input Validation, and JWT Security",
        "desc": "Harden REST and GraphQL APIs against automated exploitation."
      }
    },
    {
      "n": 7,
      "id": "secure-api-design-rate-limiting-jwt",
      "title": "Secure API Design: Rate Limiting, Input Validation, and JWT Security",
      "topic": "API Security",
      "anim": "Generic",
      "lede": "Hardening application programming interfaces: input validation with Pydantic/Zod, rate limiting, and JSON Web Token (JWT) pitfalls.",
      "winShort": "You know how to design secure APIs with schema validation, rate limits, and cryptographic JWT handling.",
      "missionLink": "Mastering secure api design: rate limiting, input validation, and jwt security across modern software engineering",
      "sec1": {
        "title": "Core principles of Secure API Design: Rate Limiting, Input Validation, and JWT Security",
        "content": "<p>Modern web and mobile applications are driven by APIs. If your web frontend has robust security but your underlying REST API accepts unvalidated payloads, lacks rate limits, or misconfigures JWT tokens, <strong>your application is completely wide open</strong>.</p>",
        "keyIdea": "Hardening application programming interfaces: input validation with Pydantic/Zod, rate limiting, and JSON Web Token (JWT) pitfalls."
      },
      "predict": {
        "q": "What common security vulnerability occurs if an application fails to verify the signature of a JSON Web Token (JWT)?",
        "a": [
          "An attacker can forge arbitrary user identity claims (e.g. 'role': 'admin') and the server will blindly accept them",
          "The JWT file becomes too large",
          "The browser refuses to open",
          "The computer restarts"
        ],
        "c": 0,
        "why": "Without cryptographic signature verification, JWT payloads can be modified and forged by anyone.",
        "prompt": "What common security vulnerability occurs if an application fails to verify the signature of a JSON Web Token (JWT)?",
        "options": [
          "An attacker can forge arbitrary user identity claims (e.g. 'role': 'admin') and the server will blindly accept them",
          "The JWT file becomes too large",
          "The browser refuses to open",
          "The computer restarts"
        ],
        "answer": 0,
        "explanation": "Without cryptographic signature verification, JWT payloads can be modified and forged by anyone."
      },
      "sec2": {
        "title": "Secure API Architecture",
        "content": "<p>Three Pillars of <strong>Secure API Design</strong>:</p>"
      },
      "diagram": {
        "title": "Secure API Architecture",
        "caption": "Input validation, rate limiting, and cryptographic auth",
        "steps": [
          {
            "title": "1. Input Validation (Pydantic)",
            "lines": [
              "Strict types, length caps, regex bounds",
              "Rejects malformed payloads at ingress"
            ]
          },
          {
            "title": "2. Redis Rate Limiting",
            "lines": [
              "Throttles brute-force on /login to 5 RPM",
              "Stops automated credential stuffing"
            ]
          },
          {
            "title": "3. Cryptographic JWT Auth",
            "lines": [
              "Verifies signature with explicit HS256",
              "Rejects expired & tampered tokens"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Input Validation (Pydantic)",
            "lines": [
              "Strict types, length caps, regex bounds",
              "Rejects malformed payloads at ingress"
            ]
          },
          {
            "title": "2. Redis Rate Limiting",
            "lines": [
              "Throttles brute-force on /login to 5 RPM",
              "Stops automated credential stuffing"
            ]
          },
          {
            "title": "3. Cryptographic JWT Auth",
            "lines": [
              "Verifies signature with explicit HS256",
              "Rejects expired & tampered tokens"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Infamous 'none' Algorithm Attack",
        "content": "<ul><li><strong>1. Strict Schema Input Validation (Pydantic / Zod):</strong> Never accept raw dictionaries or unvalidated JSON. Enforce types, string length bounds, and regex patterns: <code>username: str = Field(min_length=3, max_length=30, pattern=r\"^[a-zA-Z0-9_]+$\")</code>.</li><li><strong>2. Distributed API Rate Limiting:</strong> Enforce strict per-IP and per-user Token Bucket rate limits in Redis on authentication endpoints (`/login`, `/reset-password`) to defeat brute-force and credential stuffing bots.</li><li><strong>3. JWT Security & The 'None' Algorithm Attack:</strong> Verify the cryptographic signature on every request! Explicitly specify allowed algorithms: <code>jwt.decode(token, SECRET, algorithms=[\"HS256\"])</code> to prevent the infamous 'none' algorithm bypass attack!</li></ul><pre><code># The Secure JWT Verification Pattern in Python:\nALLOWED_ALGORITHMS = [\"HS256\"] # Explicitly forbid 'none'!\n\ndef verify_user_jwt(token: str) -> dict:\n    try:\n        # Cryptographically verifies signature, expiration (exp), and algorithm:\n        payload = jwt.decode(\n            token,\n            JWT_SECRET_KEY,\n            algorithms=ALLOWED_ALGORITHMS,\n            options={\"require\": [\"exp\", \"sub\", \"tenant_id\"]}\n        )\n        return payload\n    except jwt.ExpiredSignatureError:\n        raise HTTPException(401, \"Session expired. Please log in again.\")\n    except jwt.InvalidTokenError:\n        raise HTTPException(401, \"Invalid or tampered authentication token!\")</code></pre><div class=\"callout\"><p><strong>The JWT Rule:</strong> Always enforce token expiration (`exp`) and sign tokens using strong cryptographic secrets. Never transmit sensitive PII in unencrypted JWT payloads.</p></div>"
      },
      "trace": {
        "title": "The Infamous 'none' Algorithm Attack",
        "caption": "The danger of unverified algorithm headers",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Secure API Design: Rate Limiting, Input Validation, and JWT Security"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Vulnerable Parser"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Hardened Parser"
            }
          }
        ],
        "code": [
          "# Tracing Secure API Design: Rate Limiting, Input Validation, and JWT Security",
          "def execute_flow():",
          "    # Hardening application programming interfaces: inpu...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the API security sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Secure APIs validate input schemas strictly, rate limit authentication endpoints to defeat brute force, and enforce cryptographic {1} verification on JSON Web {2}."
        ],
        "blanks": [
          {
            "a": [
              "signature"
            ],
            "why": "Mathematical proof of authenticity"
          },
          {
            "a": [
              "Tokens"
            ],
            "why": "JWT credential standard"
          }
        ]
      },
      "win": "You know how to design secure APIs with schema validation, rate limits, and cryptographic JWT handling.",
      "nextTasks": [
        "Audit your project code and identify where secure api design: rate limiting, input validation, and jwt security applies.",
        "Author a unit test or verification script exercising secure api design: rate limiting, input validation, and jwt security.",
        "Document team architectural conventions regarding secure api design: rate limiting, input validation, and jwt security."
      ],
      "primarySource": "Industry standards and best practices for Secure API Design: Rate Limiting, Input Validation, and JWT Security.",
      "quiz": [
        {
          "q": "What is the infamous 'none' algorithm vulnerability in JWT implementations?",
          "a": [
            "An attacker modifies the JWT header to 'alg': 'none' and strips the signature; vulnerable libraries accept the forged payload without checking cryptographic signatures",
            "A bug where tokens have zero characters",
            "A token that works without a server",
            "A method for encrypting passwords"
          ],
          "c": 0,
          "why": "Insecure parsers honour the 'none' algorithm in the header, bypassing signature checks entirely."
        },
        {
          "q": "Why must sensitive authentication endpoints like '/api/v1/login' enforce strict rate limits?",
          "a": [
            "To prevent automated bots from testing millions of breached username/password combinations (credential stuffing) against user accounts",
            "To make logins slower for real users",
            "To save electricity",
            "It is required by git"
          ],
          "c": 0,
          "why": "Rate limiting blocks automated brute-force and dictionary password attacks."
        },
        {
          "q": "Why is transmitting sensitive information (like Social Security numbers) in standard JWT payloads an anti-pattern?",
          "a": [
            "Standard JWT payloads are only base64-encoded, not encrypted; anyone who intercepts the token can decode and read the plain-text payload",
            "JWTs cannot hold numbers",
            "Payloads are deleted after 1 second",
            "JWTs are only for passwords"
          ],
          "c": 0,
          "why": "Base64 is an encoding, not encryption; standard JWT claims are readable by anyone holding the token."
        },
        {
          "q": "What does Pydantic input validation protect against in API request handlers?",
          "a": [
            "Type confusion bugs, buffer overflows, unexpected JSON keys, and malicious payloads containing dangerous character formats",
            "Database corruption from hard drive failure",
            "Slow internet connections",
            "Monitor refresh rate issues"
          ],
          "c": 0,
          "why": "Pydantic enforces strict type and length contracts before untrusted data reaches business logic."
        }
      ],
      "next": {
        "title": "Penetration Testing and Hardening a Web Application",
        "desc": "Synthesize everything: systematically audit and harden a web application."
      }
    },
    {
      "n": 8,
      "id": "penetration-testing-and-hardening",
      "title": "Penetration Testing and Hardening a Web Application",
      "topic": "Hardening",
      "anim": "Generic",
      "lede": "Synthesizing web security: penetration testing tools (ZAP, Burp Suite), automated vulnerability scanning, and hardening checklists.",
      "winShort": "You have completed the Web Application Security course.",
      "missionLink": "Mastering penetration testing and hardening a web application across modern software engineering",
      "sec1": {
        "title": "Core principles of Penetration Testing and Hardening a Web Application",
        "content": "<p>We have covered the complete landscape of Web Application Security: the OWASP Top 10, SQL and command injection, XSS defenses, CSRF and SameSite cookies, IDOR and broken access control, browser security headers, and secure API design.</p>",
        "keyIdea": "Synthesizing web security: penetration testing tools (ZAP, Burp Suite), automated vulnerability scanning, and hardening checklists."
      },
      "predict": {
        "q": "What is 'Penetration Testing' (Pen Testing) in web application engineering?",
        "a": [
          "A simulated authorized cyberattack against a software system to evaluate security, discover vulnerabilities, and verify defensive controls",
          "Testing if a pen can write on a screen",
          "Measuring internet cable durability",
          "Writing code as fast as possible"
        ],
        "c": 0,
        "why": "Penetration testing simulates real-world attack techniques to find and patch vulnerabilities before adversaries exploit them.",
        "prompt": "What is 'Penetration Testing' (Pen Testing) in web application engineering?",
        "options": [
          "A simulated authorized cyberattack against a software system to evaluate security, discover vulnerabilities, and verify defensive controls",
          "Testing if a pen can write on a screen",
          "Measuring internet cable durability",
          "Writing code as fast as possible"
        ],
        "answer": 0,
        "explanation": "Penetration testing simulates real-world attack techniques to find and patch vulnerabilities before adversaries exploit them."
      },
      "sec2": {
        "title": "The Security Testing Pipeline",
        "content": "<p>Now, we synthesize these into a <strong>Web Application Hardening & Penetration Testing Workflow</strong>:</p>"
      },
      "diagram": {
        "title": "The Security Testing Pipeline",
        "caption": "SAST, DAST, and Manual Penetration Testing",
        "steps": [
          {
            "title": "1. SAST (Static Code Scan)",
            "lines": [
              "Semgrep / Bandit scans source code in CI",
              "Catches hardcoded secrets & unsafe sinks"
            ]
          },
          {
            "title": "2. DAST (Dynamic Web Probe)",
            "lines": [
              "OWASP ZAP probes running staging app",
              "Tests real endpoints for SQLi, XSS, & headers"
            ]
          },
          {
            "title": "3. Manual Pen Testing",
            "lines": [
              "Human ethical hacker probes business logic",
              "Catches subtle IDOR and workflow bypasses"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. SAST (Static Code Scan)",
            "lines": [
              "Semgrep / Bandit scans source code in CI",
              "Catches hardcoded secrets & unsafe sinks"
            ]
          },
          {
            "title": "2. DAST (Dynamic Web Probe)",
            "lines": [
              "OWASP ZAP probes running staging app",
              "Tests real endpoints for SQLi, XSS, & headers"
            ]
          },
          {
            "title": "3. Manual Pen Testing",
            "lines": [
              "Human ethical hacker probes business logic",
              "Catches subtle IDOR and workflow bypasses"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The Battle-Hardened Application",
        "content": "<ul><li><strong>1. Automated DAST Scanning (OWASP ZAP / Burp Suite):</strong> Run automated dynamic application security testing (DAST) in staging to probe for SQLi, XSS, and missing security headers.</li><li><strong>2. Static Analysis Security Testing (SAST):</strong> Integrate tools like Bandit (Python) and Semgrep into CI to catch hardcoded secrets and vulnerable functions in code commits.</li><li><strong>3. The Production Web Hardening Checklist:</strong><ul><li>[x] All SQL queries use parameterized prepared statements.</li><li>[x] User HTML rendered with DOMPurify; session cookies use <code>HttpOnly; Secure; SameSite=Lax</code>.</li><li>[x] Strict resource-level authorization checks on all endpoints (zero IDOR).</li><li>[x] Security headers enforced: CSP, HSTS (max-age=1 year), X-Frame-Options: DENY.</li><li>[x] Rate limiting active on login and password reset routes.</li></ul></li></ul><pre><code># Running an Automated OWASP ZAP Baseline Scan in CI:\n# (GitHub Actions step)\n- name: ZAP Dynamic Security Scan\n  uses: zaproxy/action-baseline@v0.12.0\n  with:\n    target: 'https://staging.company.com'\n    rules_file_name: '.zap/rules.tsv'\n    fail_action: true # Fails CI if High-severity vulnerability discovered!</code></pre><div class=\"callout\"><p><strong>The Continuous Security Mandate:</strong> Security is not a one-time audit; it is a continuous pipeline. Run automated SAST and DAST scans on every release to ensure new code remains hardened.</p></div>"
      },
      "trace": {
        "title": "The Battle-Hardened Application",
        "caption": "Verified defense across all layers",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Penetration Testing and Hardening a Web Application"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Hardened Web Perimeter"
            }
          }
        ],
        "code": [
          "# Tracing Penetration Testing and Hardening a Web Application",
          "def execute_flow():",
          "    # Synthesizing web security: penetration testing too...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the web hardening sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Web application hardening combines static code analysis (SAST) with dynamic vulnerability scanning (DAST) using tools like OWASP {1} to verify {2} controls."
        ],
        "blanks": [
          {
            "a": [
              "ZAP"
            ],
            "why": "Zed Attack Proxy open-source tool"
          },
          {
            "a": [
              "security"
            ],
            "why": "Defensive controls and safeguards"
          }
        ]
      },
      "win": "You have completed the Web Application Security course.",
      "nextTasks": [
        "Audit your project code and identify where penetration testing and hardening a web application applies.",
        "Author a unit test or verification script exercising penetration testing and hardening a web application.",
        "Document team architectural conventions regarding penetration testing and hardening a web application."
      ],
      "primarySource": "Industry standards and best practices for Penetration Testing and Hardening a Web Application.",
      "quiz": [
        {
          "q": "What is the difference between SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing)?",
          "a": [
            "SAST scans source code directly without running the application; DAST tests a running web application by sending real HTTP attack probes",
            "SAST is for hardware; DAST is for software",
            "SAST only runs on Windows",
            "They are identical tools"
          ],
          "c": 0,
          "why": "SAST inspects source code; DAST probes active running web applications from the outside."
        },
        {
          "q": "What popular open-source tool is maintained by OWASP for dynamic vulnerability scanning?",
          "a": [
            "OWASP ZAP (Zed Attack Proxy)",
            "Photoshop",
            "React Native",
            "Flask"
          ],
          "c": 0,
          "why": "OWASP ZAP is the world's most widely used open-source dynamic web vulnerability scanner."
        },
        {
          "q": "Why is automated security scanning in CI/CD pipelines superior to annual manual security audits alone?",
          "a": [
            "CI/CD scanning catches newly introduced vulnerabilities immediately on pull requests before vulnerable code reaches production",
            "Annual audits are illegal",
            "CI/CD scanning eliminates the need for software engineering",
            "It makes servers free"
          ],
          "c": 0,
          "why": "Continuous automated scanning prevents vulnerabilities from slipping into production between manual audits."
        },
        {
          "q": "What is the ultimate mark of an expert web security engineer?",
          "a": [
            "Building web applications that are secure by default: parameterized queries, sanitized DOMs, SameSite cookies, and strict authorization on every endpoint",
            "Using the longest possible passwords",
            "Banning user logins",
            "Writing code in assembly language"
          ],
          "c": 0,
          "why": "Architecting applications that are secure by design neutralizes entire classes of vulnerabilities automatically."
        }
      ],
      "next": {
        "title": "Next Course: Secrets, Credentials & Identity",
        "desc": "Explore how to manage API keys, rotate secrets with HashiCorp Vault, enforce least privilege, and prevent credential leaks."
      }
    }
  ]
};
