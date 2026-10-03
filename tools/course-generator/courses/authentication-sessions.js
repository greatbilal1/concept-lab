"use strict";

module.exports = {
  id: "authentication-sessions",
  title: "Authentication & Sessions",
  num: 29,
  emoji: "🪪",
  desc: "Passwords, hashing, cookies, tokens and sessions — how a server knows who is asking.",
  mission: `# Mission — Authentication & Sessions

## Why this course exists

Every modern application needs to verify identity and restrict access. Yet security is easy to get subtly, catastrophically wrong: storing plaintext passwords, using fast cryptographic hashes, misconfiguring session cookies, or storing JWT tokens in insecure browser storage. This course teaches how authentication, password hashing, session cookies, JWTs, and OAuth2 actually work so you can secure applications with confidence.

## What the learner can do at the end

- Distinguish clearly between authentication ('Who are you?') and authorization ('What can you do?').
- Hash passwords securely using slow, salted memory-hard algorithms (bcrypt, Argon2).
- Architect stateful session systems using Redis and secure, HTTP-only cookies.
- Dissect and verify stateless JSON Web Tokens (JWT) including signatures and claims.
- Explain the OAuth 2.0 Authorization Code flow with PKCE used for third-party logins.

## What this course is NOT

- Not a vendor-specific tutorial for Auth0, Firebase, or Supabase.
- Not a low-level cryptanalysis course on factoring primes.

## Success looks like

When tasked with implementing login for a new web service, the learner selects the right pattern (sessions vs tokens), configures secure cookie attributes, and salts passwords with bcrypt without security vulnerabilities.
`,
  notes: `# Notes — Authentication & Sessions

## Decisions
- Group into four themes: Identity & Passwords, Stateful Sessions, Stateless Tokens (JWT), and OAuth & MFA.
- Emphasize defensive security standards: slow hashing, HttpOnly cookies, and PKCE.
`,
  resources: `# Resources — Authentication & Sessions

## Knowledge (primary sources)
- OWASP: *Authentication Cheat Sheet* & *Session Management Cheat Sheet* (cheatsheetseries.owasp.org).
- RFC 7519: *JSON Web Token (JWT)*.
- RFC 6749 & RFC 7636: *OAuth 2.0 Authorization Framework and PKCE*.

## Wisdom
- Never roll your own crypto, and never store passwords in plaintext or fast algorithms like MD5 or SHA-256.
`,
  cheatsheetSections: [
    {
      title: "Password Hashing with Bcrypt",
      label: "Salting and slow hashing",
      code: `import bcrypt

# Hash on registration (salt generated automatically)
salt = bcrypt.gensalt(rounds=12)
hashed = bcrypt.hashpw(password.encode(), salt)

# Verify on login
if bcrypt.checkpw(entered_password.encode(), hashed):
    print("Authentication successful")`,
      lessonN: 2,
      lessonSlug: "password-hashing-salts-and-bcrypt",
      lessonTitle: "Password hashing, salts, and bcrypt"
    },
    {
      title: "Secure Session Cookie Setup",
      label: "Defense against XSS and CSRF",
      code: `Set-Cookie: sid=s%3A7a8f9c2e...; 
  HttpOnly;                # Inaccessible to JavaScript (XSS defense)
  Secure;                  # Transmitted only over HTTPS
  SameSite=Lax;            # CSRF defense on top-level navigation
  Path=/;
  Max-Age=86400            # 24 hour lifetime`,
      lessonN: 4,
      lessonSlug: "stateful-sessions-and-redis-stores",
      lessonTitle: "Stateful sessions and Redis stores"
    },
    {
      title: "JWT Structure & Verification",
      label: "Header, Payload, and Signature",
      code: `// JWT Format: header.payload.signature
const [header, payload, sig] = token.split('.');

// Signature Calculation:
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  server_secret
)`,
      lessonN: 5,
      lessonSlug: "stateless-tokens-and-jwt",
      lessonTitle: "Stateless tokens and JWT"
    },
    {
      title: "OAuth 2.0 PKCE Flow",
      label: "Secure third-party authentication",
      code: `1. Client generates code_verifier & code_challenge (SHA-256)
2. Redirects to /authorize?code_challenge=xyz&code_challenge_method=S256
3. User logs in; Authorization Server returns code
4. Client sends code + code_verifier to /token
5. Server verifies hash, issues access token!`,
      lessonN: 7,
      lessonSlug: "oauth-2-and-third-party-login",
      lessonTitle: "OAuth 2.0 and third-party login"
    }
  ],
  glossaryGroups: [
    {
      id: "identity-passwords",
      title: "Identity & Password Security",
      terms: [
        { term: "Authentication", def: "The process of verifying that an entity is who they claim to be (AuthN: 'Who are you?').", lesson: 1, tags: ["auth"] },
        { term: "Authorization", def: "The process of verifying whether an authenticated entity has permission to perform an action (AuthZ).", lesson: 1, tags: ["auth"] },
        { term: "Salt", def: "A unique random string appended to passwords before hashing to defeat precomputed rainbow table attacks.", lesson: 2, tags: ["crypto"] },
        { term: "bcrypt", def: "A slow, adaptive, memory-hard password hashing function designed to resist brute-force hardware cracking.", lesson: 2, tags: ["crypto"] }
      ]
    },
    {
      id: "stateful-sessions",
      title: "Stateful Session Systems",
      terms: [
        { term: "Session identifier", def: "A high-entropy random token stored in an HTTP cookie matching a session record in a server database.", lesson: 3, tags: ["sessions"] },
        { term: "Session store", def: "A high-speed fast-access database (often Redis or Memcached) storing active session states.", lesson: 4, tags: ["sessions"] },
        { term: "Session hijacking", def: "An attack where an adversary steals a valid session ID to impersonate an authenticated user.", lesson: 3, tags: ["security"] },
        { term: "CSRF", def: "Cross-Site Request Forgery: an attack forcing an authenticated browser to submit unwanted actions to a trusted site.", lesson: 4, tags: ["security"] }
      ]
    },
    {
      id: "stateless-tokens",
      title: "Stateless Tokens & JWT",
      terms: [
        { term: "JSON Web Token", def: "A compact, URL-safe means of representing claims (JWT) cryptographically signed between two parties.", lesson: 5, tags: ["jwt"] },
        { term: "Claims", def: "Key-value assertions (like sub, exp, role) encoded in the JSON payload of a JWT.", lesson: 5, tags: ["jwt"] },
        { term: "Access token", def: "A short-lived credential used by an application to access an API on behalf of a user.", lesson: 6, tags: ["tokens"] },
        { term: "Refresh token", def: "A long-lived credential used to obtain a new access token when the current access token expires.", lesson: 6, tags: ["tokens"] }
      ]
    },
    {
      id: "federated-auth",
      title: "OAuth & Modern Authentication",
      terms: [
        { term: "OAuth 2.0", def: "An open standard authorization framework enabling third-party applications to access user data without passwords.", lesson: 7, tags: ["oauth"] },
        { term: "PKCE", def: "Proof Key for Code Exchange: an extension preventing authorization code interception attacks on public clients.", lesson: 7, tags: ["oauth"] },
        { term: "OpenID Connect", def: "An identity layer (OIDC) on top of OAuth 2.0 providing standardized user identity tokens (ID tokens).", lesson: 7, tags: ["auth"] },
        { term: "MFA", def: "Multi-Factor Authentication: requiring two or more distinct verification factors before granting access.", lesson: 8, tags: ["security"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "authentication-versus-authorization",
      title: "Authentication versus authorization",
      topic: "Identity & Password Security",
      anim: "Lock",
      lede: "Who are you versus what can you do? Learn the vital architectural boundary between Authentication (AuthN) and Authorization (AuthZ).",
      winShort: "Differentiate between authentication identity checks and authorization permission models",
      missionLink: "The primary conceptual distinction for all security architectures",
      sec1: {
        title: "AuthN versus AuthZ",
        content: `<p>Security architecture is divided into two distinct gates: <b>Authentication (AuthN)</b> answers <i>'Who are you?'</i>. It verifies proof of identity via passwords, biometric passkeys, or multi-factor codes.</p><p><b>Authorization (AuthZ)</b> answers <i>'What are you allowed to do?'</i>. Once identity is proven, authorization checks whether that user possesses permission to view a document, delete an order, or access an admin panel.</p>`,
        keyIdea: "Authentication proves who you are; authorization decides what you are allowed to do."
      },
      predict: {
        q: "A user logs into an app with valid credentials, but receives '403 Forbidden' when clicking /admin. Is this AuthN or AuthZ?",
        a: [
          "Authorization (AuthZ) failed: identity is proven, but permission to access /admin was denied",
          "Authentication (AuthN) failed: the password was rejected",
          "Neither, it is a database hardware error",
          "Both failed simultaneously"
        ],
        c: 0,
        why: "403 Forbidden means identity is authenticated, but permissions are insufficient for the action."
      },
      sec2: {
        title: "The two-gate security model",
        content: `<p>Observe how requests pass through authentication before being evaluated by authorization policies.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Incoming Request", lines: ["POST /billing/refund", "contains credentials / token"] },
          { title: "Gate 1: AuthN", lines: ["verifies credentials -> user_id: 42", "401 Unauthorized if invalid"] },
          { title: "Gate 2: AuthZ", lines: ["checks: does user 42 have 'refund' role?", "403 Forbidden if not permitted"] }
        ]
      },
      sec3: {
        title: "Tracing status code dispatch",
        content: `<p>Trace how a server distinguishes between missing credentials and insufficient role permissions.</p>`,
      },
      trace: {
        code: [
          "if not request.user:",
          "    return Response(status=401, 'Please log in')",
          "if 'admin' not in request.user.roles:",
          "    return Response(status=403, 'Admin privileges required')"
        ],
        steps: [
          { line: 0, vars: { check_1: "checking identity (AuthN)" } },
          { line: 1, vars: { result_1: "401 Unauthorized returned if unauthenticated" } },
          { line: 2, vars: { check_2: "checking permissions (AuthZ)" } },
          { line: 3, vars: { result_2: "403 Forbidden returned if role is missing" } }
        ]
      },
      practiceIntro: "Test your memory of AuthN versus AuthZ.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The process of proving identity ('Who are you?') is <0>.",
          "The process of checking permissions ('What can you do?') is <1>.",
          "The HTTP status code for missing or invalid identity is <2>."
        ],
        blanks: [
          { a: ["authentication", "AuthN"], why: "Authentication validates credentials." },
          { a: ["authorization", "AuthZ"], why: "Authorization verifies permissions." },
          { a: ["401"], why: "401 Unauthorized signals missing or invalid authentication." }
        ]
      },
      win: "You can clearly separate authentication mechanics from authorization business rules in system designs.",
      nextTasks: [
        "Audit your API handlers to verify they return 401 for unauthenticated and 403 for unauthorized.",
        "Implement a role-based access control (RBAC) check on an admin endpoint.",
        "Explain the difference between 401 and 403 to a colleague."
      ],
      primarySource: "OWASP: *Authentication Cheat Sheet* (cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html).",
      quiz: [
        {
          q: "What is the primary difference between Authentication and Authorization?",
          a: [
            "Authentication validates user identity; Authorization verifies user permissions",
            "Authentication is written in Python; Authorization is written in SQL",
            "Authentication only works on mobile phones; Authorization is for desktop",
            "There is no difference between them"
          ],
          c: 0,
          why: "AuthN establishes identity ('Who?'); AuthZ checks permissions ('Allowed?')."
        },
        {
          q: "What HTTP status code represents an Authorization failure for an authenticated user?",
          a: [
            "403 Forbidden",
            "401 Unauthorized",
            "404 Not Found",
            "500 Internal Server Error"
          ],
          c: 0,
          why: "403 signals that the server understands the user's identity but refuses authorization."
        },
        {
          q: "Which of the following is an example of an Authentication mechanism?",
          a: [
            "Verifying a password hash and checking a TOTP two-factor code",
            "Checking if user.role === 'admin' before deleting an account",
            "Restricting a user to only viewing orders associated with their account ID",
            "Setting a database query limit to 10 rows"
          ],
          c: 0,
          why: "Passwords and TOTP codes prove identity (AuthN); role checks enforce permissions (AuthZ)."
        },
        {
          q: "What is Role-Based Access Control (RBAC)?",
          a: [
            "An authorization model where permissions are assigned to roles (like editor, admin) and roles to users",
            "A hardware device used to cool server processors",
            "A protocol for encrypting fiber optic cables",
            "A password hashing algorithm"
          ],
          c: 0,
          why: "RBAC groups permissions under roles to simplify access management across users."
        }
      ]
    },
    {
      n: 2,
      id: "password-hashing-salts-and-bcrypt",
      title: "Password hashing, salts, and bcrypt",
      topic: "Identity & Password Security",
      anim: "Lock",
      lede: "Never store plaintext passwords. Learn why MD5 and SHA-256 are dangerous for passwords, how random salts defeat rainbow tables, and why slow hashing with bcrypt is mandatory.",
      winShort: "Implement secure password hashing using bcrypt with adaptive work factors",
      missionLink: "Prevents credential database breaches from exposing user passwords",
      sec1: {
        title: "Why fast hashes are fatal for passwords",
        content: `<p>Storing passwords in plaintext is criminal negligence. But hashing them with fast algorithms like MD5 or SHA-256 is almost as bad: modern GPUs can compute billions of SHA-256 hashes per second, cracking short passwords in minutes via brute-force dictionary attacks.</p><p>Password hashing algorithms must be <b>deliberately slow and memory-hard</b> (like <b>bcrypt</b> or <b>Argon2</b>). Furthermore, every password must be combined with a unique, cryptographically random <b>Salt</b> before hashing to defeat precomputed rainbow table databases.</p>`,
        keyIdea: "Password hashes must be slow, salted, and computationally expensive to resist GPU brute forcing."
      },
      predict: {
        q: "Why shouldn't you use SHA-256 to hash passwords in a user database?",
        a: [
          "SHA-256 was designed for fast cryptographic checksums; modern GPUs test billions of guesses per second",
          "SHA-256 was hacked and can be reversed back into plaintext in 1 millisecond",
          "SHA-256 cannot hash strings containing numbers",
          "SHA-256 is only supported on Windows operating systems"
        ],
        c: 0,
        why: "Speed is the enemy of password storage: fast algorithms make offline dictionary attacks trivial."
      },
      sec2: {
        title: "The role of the cryptographic salt",
        content: `<p>Observe how a unique random salt ensures two users with identical passwords have completely different hashes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "User 1 (password123)", lines: ["Salt: 'x8f!a9'", "bcrypt: $2b$12$x8f!a9...78a2"] },
          { title: "User 2 (password123)", lines: ["Salt: 'k2?b14'", "bcrypt: $2b$12$k2?b14...99c4 (completely different!)"] },
          { title: "Rainbow Tables Defeated", lines: ["precomputed dictionary lookups fail", "attacker must crack each salt individually"] }
        ]
      },
      sec3: {
        title: "Tracing bcrypt verification",
        content: `<p>Trace how bcrypt extracts the embedded salt from the stored hash to verify incoming login attempts.</p>`,
      },
      trace: {
        code: [
          "# Stored hash: $2b$12$e8f9a2...xyz",
          "# 1. Extract algorithm (2b), cost factor (12), and salt from stored hash",
          "# 2. Hash incoming candidate password with extracted salt and cost factor",
          "# 3. Compare resulting hash against stored hash in constant time"
        ],
        steps: [
          { line: 0, vars: { stored_hash: "$2b$12$e8f9a2...xyz" } },
          { line: 1, vars: { extracted: "algorithm: 2b, rounds: 12, salt: e8f9a2..." } },
          { line: 2, vars: { computed: "hashes entered password with exact same salt" } },
          { line: 3, vars: { check: "constant-time comparison confirms password match" } }
        ]
      },
      practiceIntro: "Test your recall of password storage principles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A random string added to passwords before hashing is a <0>.",
          "Precomputed tables of hashes used to crack unsalted passwords are <1> tables.",
          "The slow, adaptive password hashing standard is b<2>."
        ],
        blanks: [
          { a: ["salt"], why: "Salts make identical passwords produce distinct hashes." },
          { a: ["rainbow"], why: "Rainbow tables trade storage space for crack speed." },
          { a: ["crypt"], why: "bcrypt is the industry standard adaptive password hasher." }
        ]
      },
      win: "You can store user credentials securely using salted, slow adaptive hashing algorithms.",
      nextTasks: [
        "Hash a test password using bcrypt.hashpw() with a cost factor of 12.",
        "Verify why two hashes of the same password produce completely different output strings.",
        "Benchmark how many milliseconds your server takes to compute one bcrypt hash."
      ],
      primarySource: "IETF RFC 9106: *Argon2 Memory-Hard Function for Password Hashing and Proof-of-Work Applications*.",
      quiz: [
        {
          q: "What is the primary purpose of adding a salt to a password before hashing?",
          a: [
            "To ensure that identical passwords generate completely different hashes and defeat rainbow tables",
            "To encrypt the password so it can be decrypted and emailed to the user later",
            "To reduce the length of the password string to save database storage",
            "To convert the password into a valid JSON object"
          ],
          c: 0,
          why: "Salts defeat precomputed rainbow tables by ensuring uniqueness for every single password."
        },
        {
          q: "What does the 'work factor' or 'cost' in bcrypt control?",
          a: [
            "The number of mathematical hashing rounds (2 to the power cost), allowing hashes to be made slower as hardware improves",
            "The maximum length of allowed passwords in characters",
            "The monetary cost paid to the cloud hosting provider",
            "The number of database connections permitted"
          ],
          c: 0,
          why: "Adaptive cost factors let you scale calculation difficulty to match advancing hardware speeds."
        },
        {
          q: "Why is constant-time comparison (timing-safe comparison) required when verifying hashes?",
          a: [
            "To prevent timing attacks where an attacker deduces characters based on how fast the string comparison returns",
            "To make comparisons execute in zero milliseconds",
            "To keep the computer clock synchronized with GPS satellites",
            "To prevent database deadlocks"
          ],
          c: 0,
          why: "Early-return string comparisons leak byte equality through minute timing variations."
        },
        {
          q: "What should you do if an older database contains passwords hashed with MD5?",
          a: [
            "Upgrade password hashes to bcrypt/Argon2 transparently the next time each user logs in",
            "Reverse all MD5 hashes back into plaintext using a free online tool",
            "Ignore the issue because MD5 is still considered secure",
            "Delete all user accounts permanently"
          ],
          c: 0,
          why: "Transparent re-hashing upon login safely upgrades credentials to modern algorithms."
        }
      ]
    },
    {
      n: 3,
      id: "session-ids-and-cookie-lifecycle",
      title: "Session IDs and cookie lifecycle",
      topic: "Stateful Session Systems",
      anim: "Lock",
      lede: "How does the server remember that you logged in? Explore the stateful session model: generating high-entropy session IDs and managing cookie lifecycles.",
      winShort: "Design stateful session authentication workflows using random session tokens",
      missionLink: "The classic, battle-tested architecture for web application state",
      sec1: {
        title: "The stateful session architecture",
        content: `<p>In a <b>stateful session architecture</b>, the server generates a cryptographically secure random string called a <b>Session ID</b> upon successful login. The server saves this ID in its database alongside user metadata (<code>user_id: 42, role: 'admin'</code>).</p><p>The server then issues a <code>Set-Cookie: sid=a8f9c2...</code> header to the browser. On every future request, the browser includes this cookie. The server looks up the session ID in its store to identify the user.</p>`,
        keyIdea: "A session ID is an opaque pointer to server-side session state stored in a secure cookie."
      },
      predict: {
        q: "What is stored inside a session ID cookie in a stateful architecture?",
        a: [
          "An opaque, high-entropy random identifier that points to server-side database records",
          "The user's actual password and credit card number in plain text",
          "The full SQL database query required to fetch user data",
          "The server private encryption key"
        ],
        c: 0,
        why: "Session IDs contain zero business data: they are purely random opaque handles."
      },
      sec2: {
        title: "Session authentication sequence",
        content: `<p>Follow the full lifecycle from credential submission to authenticated session lookups.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Login (POST /login)", lines: ["verify password hash", "generate cryptographically random session ID"] },
          { title: "2. Save & Issue Cookie", lines: ["save session in Redis / DB", "Set-Cookie: sid=xyz; HttpOnly; Secure"] },
          { title: "3. Subsequent Requests", lines: ["browser sends Cookie: sid=xyz", "server retrieves user session from store"] }
        ]
      },
      sec3: {
        title: "Tracing session revocation on logout",
        content: `<p>Trace how logging out instantly invalidates access by deleting the server-side session record.</p>`,
      },
      trace: {
        code: [
          "# User clicks Logout -> POST /logout",
          "sid = request.cookies['sid']",
          "redis.delete(f'session:{sid}') # session destroyed on server immediately!",
          "response.set_cookie('sid', '', max_age=0) # instructs browser to clear cookie"
        ],
        steps: [
          { line: 0, vars: { action: "user initiates logout" } },
          { line: 2, vars: { revocation: "session destroyed in server store in 1ms" } },
          { line: 3, vars: { browser_cleanup: "cookie expired and removed from client jar" } }
        ]
      },
      practiceIntro: "Test your memory of session mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The random token identifying a user session is a session <0>.",
          "A session architecture where servers store active session records is <1>.",
          "To immediately terminate a session everywhere, delete the record from the server <2>."
        ],
        blanks: [
          { a: ["ID", "identifier"], why: "Session IDs index server session records." },
          { a: ["stateful"], why: "Stateful systems maintain server-side session persistence." },
          { a: ["store", "database"], why: "Deleting the server session record instantly revokes access." }
        ]
      },
      win: "You can implement stateful session authentication with instant revocation and opaque session tokens.",
      nextTasks: [
        "Generate a cryptographically secure random session ID using crypto.randomBytes(32).",
        "Implement a /logout route that destroys the session in the server database.",
        "Verify why predictable session IDs (e.g. sid=1, sid=2) allow catastrophic account takeovers."
      ],
      primarySource: "OWASP: *Session Management Cheat Sheet* (cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html).",
      quiz: [
        {
          q: "Why must session IDs be generated using cryptographically secure random number generators (CSPRNG)?",
          a: [
            "To ensure session IDs are unpredictable, preventing attackers from guessing other users' active sessions",
            "Because pseudorandom generators run too slowly for web servers",
            "To encrypt the user's email address inside the token",
            "Because the HTTP specification forbids numbers in cookies"
          ],
          c: 0,
          why: "Predictable session tokens allow attackers to hijack accounts by simply incrementing IDs."
        },
        {
          q: "What is the primary architectural advantage of stateful sessions over stateless JWT tokens?",
          a: [
            "Instant server-side revocation: deleting the session record immediately invalidates the user access",
            "Stateful sessions eliminate the need for server databases",
            "Stateful sessions work without internet connections",
            "Stateful sessions cannot be read by web servers"
          ],
          c: 0,
          why: "Servers have direct control over sessions; invalidating a session takes effect in 1ms."
        },
        {
          q: "What is 'Session Fixation'?",
          a: [
            "An attack where an attacker forces a victim to use a known session ID before logging in, stealing access",
            "A software bug where sessions never expire",
            "A database backup script failure",
            "A network firewall hardware error"
          ],
          c: 0,
          why: "Session fixation exploits servers that reuse the same session ID across authentication state transitions."
        },
        {
          q: "How do you defend against Session Fixation attacks?",
          a: [
            "Always regenerate and issue a brand new session ID immediately upon successful login",
            "Disable all cookies on the website",
            "Ask users to change their password on every visit",
            "Set cookie expiration to 5 seconds"
          ],
          c: 0,
          why: "Regenerating the session ID upon login destroys any pre-seeded attacker token."
        }
      ]
    },
    {
      n: 4,
      id: "stateful-sessions-and-redis-stores",
      title: "Stateful sessions and Redis stores",
      topic: "Stateful Session Systems",
      anim: "Lock",
      lede: "How do you scale stateful sessions across 50 server instances? Discover centralized in-memory session stores with Redis, and defend against CSRF attacks.",
      winShort: "Architect centralized Redis session stores and configure CSRF defenses",
      missionLink: "Enables horizontal scaling of stateful web applications across server clusters",
      sec1: {
        title: "Scaling sessions horizontally",
        content: `<p>If a server stores sessions in local memory (RAM), load balancing breaks: if a user logs in on Server A, their next request routed to Server B fails with 'unauthenticated'.</p><p>The solution is a <b>centralized in-memory session store</b> using <b>Redis</b>. All application instances share the Redis cluster. When any server receives a request, it performs a sub-millisecond key-value lookup (<code>GET session:a8f9c2</code>) to verify authentication.</p>`,
        keyIdea: "A shared Redis cluster allows multiple stateless application instances to share stateful sessions."
      },
      predict: {
        q: "What happens in a load-balanced cluster if sessions are stored in local server memory instead of Redis?",
        a: [
          "Users are repeatedly logged out whenever their requests are routed to a different server instance",
          "The database permanently crashes",
          "All passwords are deleted from the system",
          "The web servers catch on fire"
        ],
        c: 0,
        why: "Server B has no access to Server A's local RAM, causing sudden session disconnects."
      },
      sec2: {
        title: "Centralized session architecture",
        content: `<p>Observe how multiple backend application containers share a high-performance Redis cache.</p>`,
      },
      diagram: {
        boxes: [
          { title: "App Server 1", lines: ["stateless container", "queries shared Redis"] },
          { title: "App Server 2", lines: ["stateless container", "queries shared Redis"] },
          { title: "Centralized Redis", lines: ["in-memory key-value store", "sub-millisecond session lookup"] }
        ]
      },
      sec3: {
        title: "Tracing a CSRF attack and SameSite defense",
        content: `<p>Trace how SameSite=Lax prevents malicious third-party websites from exploiting session cookies.</p>`,
      },
      trace: {
        code: [
          "# Malicious evil.com contains: <form action='https://bank.com/transfer' method='POST'>",
          "# Victim clicks evil button",
          "# Browser checks bank.com session cookie: SameSite=Lax active!",
          "# Defense: Browser REFUSES to send bank.com cookie on cross-site POST!",
          "# Bank receives unauthenticated request -> 401 Unauthorized (attack defeated)"
        ],
        steps: [
          { line: 0, vars: { attack: "forged cross-site POST initiated from evil.com" } },
          { line: 2, vars: { policy: "SameSite=Lax restricts cross-site cookie attachment" } },
          { line: 3, vars: { defense: "session cookie omitted from cross-origin POST" } },
          { line: 4, vars: { outcome: "bank rejects transfer; user funds safe" } }
        ]
      },
      practiceIntro: "Test your memory of scalable session architectures.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The fast in-memory key-value database widely used for session storage is <0>.",
          "The attack forcing browsers to execute unwanted authenticated actions is <1>.",
          "The modern cookie attribute that defends against CSRF is Same<2>."
        ],
        blanks: [
          { a: ["Redis"], why: "Redis delivers sub-millisecond in-memory session lookups." },
          { a: ["CSRF", "Cross-Site Request Forgery"], why: "CSRF exploits automatic browser cookie transmission." },
          { a: ["Site"], why: "SameSite=Lax or Strict blocks cross-origin cookie transmission." }
        ]
      },
      win: "You can design horizontally scalable session clusters backed by Redis and protected by modern SameSite cookie policies.",
      nextTasks: [
        "Configure session persistence using a local Redis instance.",
        "Verify that your session cookies carry SameSite=Lax or Strict.",
        "Implement an anti-CSRF synchronizer token for sensitive state-changing forms."
      ],
      primarySource: "OWASP: *Cross-Site Request Forgery Prevention Cheat Sheet* (cheatsheetseries.owasp.org).",
      quiz: [
        {
          q: "Why is Redis ideal for storing web application session state?",
          a: [
            "It stores key-value pairs entirely in RAM, providing sub-millisecond reads with automatic TTL expiration",
            "It converts relational tables into HTML files automatically",
            "It is the only database approved by web browser manufacturers",
            "It eliminates the need for computer network switches"
          ],
          c: 0,
          why: "In-memory speed and native key expiration (TTL) make Redis the gold standard session store."
        },
        {
          q: "What is Cross-Site Request Forgery (CSRF)?",
          a: [
            "An attack that tricks a victim's browser into submitting unauthorized commands to a site where they are logged in",
            "An attack that steals passwords by listening to Wi-Fi radio frequencies",
            "An error that happens when a database runs out of disk space",
            "A compiler error in JavaScript functions"
          ],
          c: 0,
          why: "CSRF tricks the browser into automatically sending authenticated cookies to target sites."
        },
        {
          q: "How does 'SameSite=Strict' differ from 'SameSite=Lax'?",
          a: [
            "Strict blocks cookies on ALL cross-site requests, even when following links from external sites; Lax allows top-level link clicks",
            "Strict only works on Windows; Lax works on macOS",
            "Strict encrypts the cookie; Lax sends it in plaintext",
            "There is no difference between Strict and Lax"
          ],
          c: 0,
          why: "Lax permits cookies when users follow external links (GET); Strict suppresses cookies on all cross-origin requests."
        },
        {
          q: "What is an anti-CSRF token?",
          a: [
            "A secret unique token embedded into forms that the server verifies matches the user's session",
            "A password chosen by the user during signup",
            "A digital certificate signed by a Certificate Authority",
            "A cookie that expires after 1 second"
          ],
          c: 0,
          why: "Synchronizer tokens verify that form submissions originated from legitimate application forms."
        }
      ]
    },
    {
      n: 5,
      id: "stateless-tokens-and-jwt",
      title: "Stateless tokens and JWT",
      topic: "Stateless Tokens & JWT",
      anim: "Lock",
      lede: "What if the server never stored sessions at all? Explore JSON Web Tokens (JWT): header, payload, digital signatures, and stateless verification.",
      winShort: "Dissect, decode, and cryptographically verify JSON Web Tokens (JWT)",
      missionLink: "The primary token format for microservices, mobile APIs, and single-page apps",
      sec1: {
        title: "The stateless token idea",
        content: `<p>In a microservice architecture with dozens of services, querying a centralized Redis session store for every HTTP call can become a bottleneck. What if the client stored its own session data, but in a way that <b>the client cannot tamper with</b>?</p><p>This is a <b>JSON Web Token (JWT)</b>. A JWT contains user claims (<code>user_id: 42, role: 'admin'</code>) cryptographically signed by the server's secret key. Any server possessing the secret key can verify the signature and trust the claims without querying any database!</p>`,
        keyIdea: "A JWT encodes claims in a payload protected by a cryptographic signature; verification requires zero database lookups."
      },
      predict: {
        q: "Are the contents of a standard JWT token encrypted so third parties cannot read them?",
        a: [
          "No, standard JWT payloads are merely Base64URL-encoded plaintext; anyone can read the claims!",
          "Yes, all JWT tokens are encrypted with military-grade AES-256",
          "Only the user ID is readable; other fields are encrypted",
          "JWTs can only be read on Linux operating systems"
        ],
        c: 0,
        why: "JWTs are signed for integrity, NOT encrypted for confidentiality; never store passwords inside them."
      },
      sec2: {
        title: "The three parts of a JWT",
        content: `<p>Every JWT is composed of three dot-separated Base64URL-encoded strings.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Header (Base64)", lines: ["{\"alg\": \"HS256\", \"typ\": \"JWT\"}", "declares signing algorithm"] },
          { title: "Payload (Base64)", lines: ["{\"sub\": \"42\", \"exp\": 1790000000}", "user claims & expiration timestamp"] },
          { title: "Signature", lines: ["HMACSHA256(header + '.' + payload, secret)", "guarantees tamper-proof integrity"] }
        ]
      },
      sec3: {
        title: "Tracing signature verification",
        content: `<p>Trace how a server verifies whether a JWT was tampered with by an attacker.</p>`,
      },
      trace: {
        code: [
          "# Incoming token: header.payload.signature",
          "# Attacker changed payload role from 'user' to 'admin'",
          "# Server re-computes: HMACSHA256(header + '.' + payload, SECRET_KEY)",
          "# Comparison: computed signature does NOT match incoming signature!",
          "# Result: Server rejects token -> 401 Unauthorized (tampering detected)"
        ],
        steps: [
          { line: 0, vars: { received_token: "header.payload.signature" } },
          { line: 1, vars: { alteration: "payload claims altered by client" } },
          { line: 2, vars: { recomputation: "server computes expected signature" } },
          { line: 4, vars: { verdict: "signatures do not match; token rejected" } }
        ]
      },
      practiceIntro: "Test your memory of JWT anatomy.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The three parts of a JWT are header, <0>, and signature.",
          "Standard JWTs are encoded using Base64<1>.",
          "The claim specifying when a token expires is the <2> claim."
        ],
        blanks: [
          { a: ["payload"], why: "The payload holds user claims and metadata." },
          { a: ["URL"], why: "Base64URL replaces + and / to be URL-safe." },
          { a: ["exp"], why: "exp specifies expiration Unix timestamp." }
        ]
      },
      win: "You can decode, inspect, and cryptographically verify JSON Web Tokens without security misconfigurations.",
      nextTasks: [
        "Paste a JWT into jwt.io and inspect its decoded header, payload, and signature.",
        "Sign and verify a JWT using jsonwebtoken or PyJWT libraries.",
        "Ensure your verification code explicitly validates the exp expiration timestamp."
      ],
      primarySource: "IETF RFC 7519: *JSON Web Token (JWT)*.",
      quiz: [
        {
          q: "What is the critical difference between encoding (Base64) and encryption in JWTs?",
          a: [
            "Base64 is simple data representation readable by anyone; encryption makes data unreadable without a decryption key",
            "Base64 uses numbers; encryption uses letters",
            "Base64 is only supported on mobile phones",
            "There is no difference between encoding and encryption"
          ],
          c: 0,
          why: "Base64 is reversible by anyone; a JWT signature proves integrity, not confidentiality."
        },
        {
          q: "What vulnerability occurred in older JWT libraries involving 'alg: none'?",
          a: [
            "Attackers changed the algorithm header to 'none', tricking servers into skipping signature verification entirely",
            "The token became infinite in size and crashed the server",
            "The database password was printed to the console",
            "The server operating system rebooted"
          ],
          c: 0,
          why: "Insecure parsers accepted 'alg: none' and accepted unsigned tokens as valid admin tokens."
        },
        {
          q: "Why shouldn't sensitive secrets (like credit card numbers) be stored in a JWT payload?",
          a: [
            "Because standard JWT payloads are unencrypted Base64 text that can be decoded by any client or proxy",
            "Because JWT payloads can only store numbers",
            "Because credit card companies forbid JSON",
            "Because JWT tokens expire after five seconds"
          ],
          c: 0,
          why: "Payloads are fully public; only store non-sensitive identifiers and claims."
        },
        {
          q: "What is the main challenge of purely stateless JWT tokens compared to sessions?",
          a: [
            "Revocation: you cannot easily invalidate a stolen JWT before its expiration time without storing state",
            "JWT tokens cannot be sent over HTTPS connections",
            "JWT tokens only work on Windows servers",
            "JWT tokens require twice as much RAM as sessions"
          ],
          c: 0,
          why: "Statelessness means the server has no record to delete; tokens remain valid until expiration."
        }
      ]
    },
    {
      n: 6,
      id: "access-tokens-and-refresh-tokens",
      title: "Access tokens and refresh tokens",
      topic: "Stateless Tokens & JWT",
      anim: "Lock",
      lede: "How do you revoke a stateless token? Discover the dual-token pattern: combining short-lived access tokens with long-lived, revocable refresh tokens.",
      winShort: "Implement the dual-token pattern with short-lived access tokens and refresh rotation",
      missionLink: "Solves the revocation problem in stateless token architectures",
      sec1: {
        title: "The dual-token architecture",
        content: `<p>Because stateless JWTs cannot be revoked instantly without maintaining a blocklist, setting long expiration times (e.g. 30 days) is a severe security risk if a token is stolen.</p><p>The solution is the <b>dual-token pattern</b>: use a short-lived <b>Access Token</b> (valid for 5–15 minutes) for API calls, paired with a long-lived <b>Refresh Token</b> (valid for 30 days) stored in an HttpOnly cookie. When the access token expires, the client exchanges the refresh token for a new access token.</p>`,
        keyIdea: "Short-lived access tokens minimize breach windows; refresh tokens allow centralized revocation."
      },
      predict: {
        q: "If an access token expires every 10 minutes, what is the maximum window of vulnerability if a token is intercepted?",
        a: ["At most 10 minutes", "30 days", "Infinite time", "Zero seconds"],
        c: 0,
        why: "The attacker can only use the token until its 10-minute exp timestamp passes."
      },
      sec2: {
        title: "The refresh rotation sequence",
        content: `<p>Observe how client and server coordinate silent token refreshes without user disruption.</p>`,
      },
      diagram: {
        boxes: [
          { title: "API Call (with Access Token)", lines: ["Bearer <access_token_jwt>", "server validates signature in 0ms", "returns 401 if expired"] },
          { title: "Refresh Exchange", lines: ["POST /auth/refresh", "sends Refresh Token in HttpOnly cookie", "server checks DB & rotates token"] },
          { title: "New Access Token Issued", lines: ["delivers fresh 15-minute access token", "client resumes API traffic silently"] }
        ]
      },
      sec3: {
        title: "Tracing refresh token rotation",
        content: `<p>Trace how refresh token rotation detects stolen credentials and invalidates the entire family.</p>`,
      },
      trace: {
        code: [
          "# Refresh Token Rotation: Every use invalidates the old token and issues a new one",
          "Attacker steals used Refresh Token #1",
          "Attacker attempts: POST /auth/refresh with Token #1",
          "Server detects Token #1 was ALREADY used! -> BREACH DETECTED!",
          "Server revokes entire token family -> Victim forced to re-authenticate safely"
        ],
        steps: [
          { line: 0, vars: { policy: "Refresh Token Rotation enabled" } },
          { line: 2, vars: { anomaly: "reuse of spent token detected" } },
          { line: 3, vars: { security_trigger: "compromise detected" } },
          { line: 4, vars: { response: "all tokens revoked; attacker locked out" } }
        ]
      },
      practiceIntro: "Test your memory of access and refresh tokens.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The short-lived token sent on every API request is the <0> token.",
          "The long-lived token used to obtain new credentials is the <1> token.",
          "Issuing a brand new refresh token on every exchange is token <2>."
        ],
        blanks: [
          { a: ["access"], why: "Access tokens authorize everyday API calls." },
          { a: ["refresh"], why: "Refresh tokens obtain fresh access tokens." },
          { a: ["rotation"], why: "Refresh token rotation detects credential theft." }
        ]
      },
      win: "You can implement secure token lifecycles combining short access lifetimes with automated refresh rotation.",
      nextTasks: [
        "Implement a 15-minute access token expiration policy in your JWT signer.",
        "Store the refresh token in an HttpOnly, Secure, SameSite=Strict cookie.",
        "Implement refresh token rotation and revoke all tokens if reuse is detected."
      ],
      primarySource: "IETF RFC 6749: *The OAuth 2.0 Authorization Framework*, Section 1.5: 'Refresh Token'.",
      quiz: [
        {
          q: "What is the primary security advantage of short-lived access tokens (e.g. 10 minutes)?",
          a: [
            "If an access token leaks, an attacker only has a very brief window before the token expires uselessly",
            "It saves database storage space on the server",
            "It speeds up mobile internet downloads",
            "It prevents users from uploading files"
          ],
          c: 0,
          why: "Short expirations severely limit the damage window if a bearer token is intercepted."
        },
        {
          q: "Where should refresh tokens be stored on web browsers for maximum security?",
          a: [
            "In an HttpOnly, Secure cookie that JavaScript cannot access or read",
            "In localStorage alongside user analytics data",
            "In a public global window variable",
            "In the URL query parameter string"
          ],
          c: 0,
          why: "HttpOnly cookies protect refresh tokens from being exfiltrated via XSS vulnerabilities."
        },
        {
          q: "How does Refresh Token Rotation detect credential theft?",
          a: [
            "If an already-used refresh token is presented again, the server knows a token was duplicated and revokes the whole family",
            "It checks the user's eye iris scan",
            "It measures the user's typing speed",
            "It queries government credit bureaus"
          ],
          c: 0,
          why: "Single-use refresh tokens mean a duplicate request proves either client or attacker holds a copy."
        },
        {
          q: "How does the client know when it needs to use its refresh token?",
          a: [
            "The API returns status 401 Unauthorized indicating the access token has expired",
            "The browser crashes with a memory warning",
            "The user receives a text message",
            "The operating system closes the browser"
          ],
          c: 0,
          why: "When an API returns 401, client interceptors pause, refresh the token, and replay the call."
        }
      ]
    },
    {
      n: 7,
      id: "oauth-2-and-third-party-login",
      title: "OAuth 2.0 and third-party login",
      topic: "OAuth & Modern Authentication",
      anim: "Lock",
      lede: "How does 'Sign in with Google' or 'Log in with GitHub' work without sharing your password? Master the OAuth 2.0 Authorization Code flow with PKCE.",
      winShort: "Trace and implement the OAuth 2.0 Authorization Code flow with PKCE",
      missionLink: "The global standard for delegated authorization and federated identity",
      sec1: {
        title: "Delegated authorization without password sharing",
        content: `<p>In the early web, if you wanted an app to print your contacts, you had to type your email password directly into that third-party app! This was catastrophic for security.</p><p><b>OAuth 2.0</b> solved this by introducing <b>delegated authorization</b>. The user logs in directly with the identity provider (Google, GitHub), and grants the client app limited permission (scopes). The provider issues an access token to the app without ever revealing the user's password.</p>`,
        keyIdea: "OAuth 2.0 allows users to grant apps scoped access to resources without sharing credentials."
      },
      predict: {
        q: "In an OAuth 2.0 flow, does the third-party client application ever see the user's password?",
        a: [
          "No, the user authenticates directly with the authorization server; the client app only receives a token",
          "Yes, the client app stores the password in its database",
          "Only if the user logs in from a mobile phone",
          "Yes, but it is encrypted in Base64"
        ],
        c: 0,
        why: "OAuth ensures credentials are entered solely on the trusted identity provider's domain."
      },
      sec2: {
        title: "The Authorization Code Flow with PKCE",
        content: `<p>Follow the 5-step flow used by modern web and mobile applications.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Client -> /authorize", lines: ["sends client_id, scopes, and code_challenge", "redirects user browser to Google"] },
          { title: "2. User Approves", lines: ["user logs in at Google & consents", "Google redirects back with authorization code"] },
          { title: "3. Exchange Code (/token)", lines: ["client sends code + code_verifier", "Google verifies PKCE hash & returns access token!"] }
        ]
      },
      sec3: {
        title: "Tracing the PKCE cryptographic verification",
        content: `<p>Trace how Proof Key for Code Exchange (PKCE) prevents intercepted authorization codes from being redeemed.</p>`,
      },
      trace: {
        code: [
          "# Step 1: Client generates random 'code_verifier'",
          "# Step 2: Client computes code_challenge = SHA256(code_verifier)",
          "# Step 3: Client exchanges code + code_verifier at /token",
          "# Step 4: Auth server verifies SHA256(verifier) == challenge",
          "# An attacker who intercepted the code lacks the verifier and is rejected!"
        ],
        steps: [
          { line: 0, vars: { verifier: "high-entropy secret string created locally" } },
          { line: 1, vars: { challenge: "SHA-256 hash sent over public browser redirect" } },
          { line: 3, vars: { verification: "server checks secret matches hash sent in step 2" } },
          { line: 4, vars: { security: "intercepted authorization code is useless without verifier" } }
        ]
      },
      practiceIntro: "Test your memory of OAuth 2.0 components.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The open standard for delegated authorization is OAuth <0>.",
          "The security extension protecting public clients from code interception is <1>.",
          "The identity protocol built on top of OAuth 2.0 is OpenID <2>."
        ],
        blanks: [
          { a: ["2.0", "2"], why: "OAuth 2.0 is the modern authorization standard." },
          { a: ["PKCE"], why: "Proof Key for Code Exchange secures public clients." },
          { a: ["Connect", "OIDC"], why: "OpenID Connect adds user identity profiles to OAuth." }
        ]
      },
      win: "You can implement OAuth 2.0 social logins using the secure Authorization Code flow with PKCE.",
      nextTasks: [
        "Register a developer application on GitHub or Google to obtain a client ID.",
        "Implement a local callback handler that exchanges an authorization code for a token.",
        "Inspect the ID token (OIDC) returned during a Google sign-in flow."
      ],
      primarySource: "IETF RFC 7636: *Proof Key for Code Exchange by OAuth Public Clients (PKCE)*.",
      quiz: [
        {
          q: "What is the primary role of PKCE (Proof Key for Code Exchange) in OAuth 2.0?",
          a: [
            "To prevent attackers from redeeming intercepted authorization codes on public clients that lack client secrets",
            "To encrypt the user's password with public key cryptography",
            "To speed up the network connection to the identity provider",
            "To bypass user consent dialogs"
          ],
          c: 0,
          why: "PKCE binds the authorization code to the original client that created the challenge."
        },
        {
          q: "What is the difference between OAuth 2.0 and OpenID Connect (OIDC)?",
          a: [
            "OAuth 2.0 is for authorization (accessing APIs); OpenID Connect is an identity layer for authentication (signing in)",
            "OAuth is for mobile apps; OIDC is for desktop computers",
            "OAuth uses XML; OIDC uses JSON",
            "There is no difference between them"
          ],
          c: 0,
          why: "OIDC extends OAuth 2.0 by providing an ID token (JWT) containing authenticated user profile details."
        },
        {
          q: "What is an OAuth 'scope'?",
          a: [
            "A parameter specifying the specific permissions requested by the application (e.g. read:user, repo)",
            "The physical geographic country where the user is located",
            "The screen size of the user's smartphone",
            "The speed of the database query"
          ],
          c: 0,
          why: "Scopes limit what data and actions an access token can perform on user resources."
        },
        {
          q: "Why shouldn't single-page apps (SPAs) store a hardcoded 'client_secret' in their frontend code?",
          a: [
            "Frontend JavaScript is public; anyone can open browser DevTools and extract the secret",
            "Because client secrets exceed maximum string length limits in JavaScript",
            "Browsers reject files that contain the word secret",
            "It violates domain registration agreements"
          ],
          c: 0,
          why: "Public clients cannot keep secrets; PKCE was created specifically to eliminate client secrets for SPAs."
        }
      ]
    },
    {
      n: 8,
      id: "multi-factor-authentication-and-passkeys",
      title: "Multi-factor authentication and passkeys",
      topic: "OAuth & Modern Authentication",
      anim: "Lock",
      lede: "Passwords are dying. Explore the modern authentication horizon: Time-based One-Time Passwords (TOTP), SMS vulnerabilities, WebAuthn, and biometric passkeys.",
      winShort: "Implement TOTP two-factor verification and explain FIDO2/WebAuthn passkeys",
      missionLink: "The cutting-edge standard for phishing-resistant web authentication",
      sec1: {
        title: "The three authentication factors",
        content: `<p>Authentication factors are divided into three categories: <b>Something you know</b> (password, PIN), <b>Something you have</b> (authenticator app, hardware YubiKey), and <b>Something you are</b> (biometric fingerprint, Face ID).</p><p>Multi-Factor Authentication (MFA) requires two distinct categories. Passwords alone are vulnerable to phishing and breaches; pairing a password with a <b>Time-based One-Time Password (TOTP)</b> or a cryptographic <b>Passkey (WebAuthn)</b> stops 99% of automated account takeovers.</p>`,
        keyIdea: "MFA requires two different factor types; WebAuthn passkeys eliminate passwords entirely."
      },
      predict: {
        q: "Why is SMS text-message two-factor authentication considered inferior to an Authenticator app (TOTP)?",
        a: [
          "SMS is vulnerable to SIM-swapping attacks and carrier interception; TOTP runs offline on your device",
          "SMS text messages can only be sent on weekdays",
          "SMS uses too much internet bandwidth",
          "Phones cannot receive SMS messages outside their home country"
        ],
        c: 0,
        why: "SIM-swapping allows criminals to divert text messages; TOTP math runs locally on the phone."
      },
      sec2: {
        title: "How TOTP calculates 6-digit codes",
        content: `<p>TOTP (RFC 6238) hashes a shared secret with the current Unix timestamp rounded to 30 seconds.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Shared Secret", lines: ["scanned via QR code at setup", "stored securely on server and phone"] },
          { title: "Current Time Step", lines: ["Math.floor(Date.now() / 30000)", "changes every 30 seconds"] },
          { title: "HMAC Hash -> 6 Digits", lines: ["HMAC-SHA1(secret, timeStep)", "generates matching 6-digit code!"] }
        ]
      },
      sec3: {
        title: "Tracing WebAuthn passkey authentication",
        content: `<p>Trace how a biometric fingerprint unlocks a local private key to sign a server challenge without sending passwords.</p>`,
      },
      trace: {
        code: [
          "Server sends: random cryptographic challenge",
          "Browser prompts: user touches Touch ID / Face ID",
          "Device hardware unlocks private key, signs challenge",
          "Browser sends: signed signature back to server",
          "Server verifies with public key -> Authenticated with zero passwords transmitted!"
        ],
        steps: [
          { line: 0, vars: { challenge: "random nonce from server" } },
          { line: 1, vars: { biometric: "biometrics verify user locally in secure enclave" } },
          { line: 2, vars: { signature: "private key never leaves device hardware" } },
          { line: 4, vars: { verified: "server confirms signature mathematically; phishing impossible" } }
        ]
      },
      practiceIntro: "Test your memory of modern authentication mechanisms.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The algorithm used by Google Authenticator for 30-second codes is <0>.",
          "The W3C standard for browser biometric authentication is Web<1>.",
          "Cryptographic credentials that replace passwords are <2>."
        ],
        blanks: [
          { a: ["TOTP"], why: "TOTP stands for Time-based One-Time Password." },
          { a: ["Authn"], why: "WebAuthn enables passwordless biometric authentication." },
          { a: ["passkeys"], why: "Passkeys use FIDO2/WebAuthn public-key credentials." }
        ]
      },
      win: "You can implement TOTP two-factor authentication and explain the phishing-resistant architecture of WebAuthn passkeys.",
      nextTasks: [
        "Generate a TOTP QR code using a library like speakeasy or pyotp.",
        "Scan the QR code with your phone authenticator app and verify an incoming code.",
        "Test WebAuthn passkey creation in your browser using webauthn.io."
      ],
      primarySource: "IETF RFC 6238: *TOTP: Time-Based One-Time Password Algorithm*.",
      quiz: [
        {
          q: "How does an authenticator app (like Google Authenticator) generate the correct 6-digit code without internet access?",
          a: [
            "It hashes the shared secret with the current Unix timestamp locally on the device",
            "It receives radio broadcasts from cell towers",
            "It guesses random numbers that match the server by luck",
            "The app stores 1 million pre-generated codes in local memory"
          ],
          c: 0,
          why: "Both phone and server know the shared secret and the current 30-second time window."
        },
        {
          q: "Why are WebAuthn passkeys completely immune to phishing attacks?",
          a: [
            "The browser binds the cryptographic signature to the exact domain origin, so fake sites cannot solicit signatures for real sites",
            "Passkeys only work when the user is physically inside their home",
            "Passkeys cannot be used on desktop computers",
            "Passkeys require government clearance to create"
          ],
          c: 0,
          why: "The browser validates the domain origin cryptographically before signing the challenge."
        },
        {
          q: "What does FIDO2 / WebAuthn use to store private keys on consumer devices?",
          a: [
            "Hardware Secure Enclaves or Trusted Platform Modules (TPM) that prevent private keys from being extracted",
            "A plain text file on the desktop",
            "An unencrypted cookie",
            "The browser local history cache"
          ],
          c: 0,
          why: "Hardware secure enclaves isolate private keys so malware cannot export them."
        },
        {
          q: "What happens if a user's clock is 40 seconds off when using TOTP authentication?",
          a: [
            "The generated code may fail unless the server allows a clock drift window (typically +/- 1 step)",
            "The phone battery discharges immediately",
            "The account is permanently deleted",
            "The authenticator app crashes"
          ],
          c: 0,
          why: "TOTP servers usually check the current time step and adjacent steps to tolerate minor clock drift."
        }
      ]
    }
  ]
};
