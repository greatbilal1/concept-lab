/* ============================================================
   Authentication & Sessions — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "authentication-versus-authorization", file: "lessons/0001-authentication-versus-authorization.html", title: "Authentication versus authorization", topic: "Identity & Password Security", anim: "Lock" },
  { n: 2, id: "password-hashing-salts-and-bcrypt", file: "lessons/0002-password-hashing-salts-and-bcrypt.html", title: "Password hashing, salts, and bcrypt", topic: "Identity & Password Security", anim: "Lock" },
  { n: 3, id: "session-ids-and-cookie-lifecycle", file: "lessons/0003-session-ids-and-cookie-lifecycle.html", title: "Session IDs and cookie lifecycle", topic: "Stateful Session Systems", anim: "Lock" },
  { n: 4, id: "stateful-sessions-and-redis-stores", file: "lessons/0004-stateful-sessions-and-redis-stores.html", title: "Stateful sessions and Redis stores", topic: "Stateful Session Systems", anim: "Lock" },
  { n: 5, id: "stateless-tokens-and-jwt", file: "lessons/0005-stateless-tokens-and-jwt.html", title: "Stateless tokens and JWT", topic: "Stateless Tokens & JWT", anim: "Lock" },
  { n: 6, id: "access-tokens-and-refresh-tokens", file: "lessons/0006-access-tokens-and-refresh-tokens.html", title: "Access tokens and refresh tokens", topic: "Stateless Tokens & JWT", anim: "Lock" },
  { n: 7, id: "oauth-2-and-third-party-login", file: "lessons/0007-oauth-2-and-third-party-login.html", title: "OAuth 2.0 and third-party login", topic: "OAuth & Modern Authentication", anim: "Lock" },
  { n: 8, id: "multi-factor-authentication-and-passkeys", file: "lessons/0008-multi-factor-authentication-and-passkeys.html", title: "Multi-factor authentication and passkeys", topic: "OAuth & Modern Authentication", anim: "Lock" }
];

/* ============================================================
   Authentication & Sessions — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "identity-passwords", title: "Identity & Password Security",
    terms: [
      { term: "Authentication", def: "The process of verifying that an entity is who they claim to be (AuthN: 'Who are you?').", lesson: 1, tags: ["auth"] },
      { term: "Authorization", def: "The process of verifying whether an authenticated entity has permission to perform an action (AuthZ).", lesson: 1, tags: ["auth"] },
      { term: "Salt", def: "A unique random string appended to passwords before hashing to defeat precomputed rainbow table attacks.", lesson: 2, tags: ["crypto"] },
      { term: "bcrypt", def: "A slow, adaptive, memory-hard password hashing function designed to resist brute-force hardware cracking.", lesson: 2, tags: ["crypto"] }
    ]
  },
  {
    id: "stateful-sessions", title: "Stateful Session Systems",
    terms: [
      { term: "Session identifier", def: "A high-entropy random token stored in an HTTP cookie matching a session record in a server database.", lesson: 3, tags: ["sessions"] },
      { term: "Session store", def: "A high-speed fast-access database (often Redis or Memcached) storing active session states.", lesson: 4, tags: ["sessions"] },
      { term: "Session hijacking", def: "An attack where an adversary steals a valid session ID to impersonate an authenticated user.", lesson: 3, tags: ["security"] },
      { term: "CSRF", def: "Cross-Site Request Forgery: an attack forcing an authenticated browser to submit unwanted actions to a trusted site.", lesson: 4, tags: ["security"] }
    ]
  },
  {
    id: "stateless-tokens", title: "Stateless Tokens & JWT",
    terms: [
      { term: "JSON Web Token", def: "A compact, URL-safe means of representing claims (JWT) cryptographically signed between two parties.", lesson: 5, tags: ["jwt"] },
      { term: "Claims", def: "Key-value assertions (like sub, exp, role) encoded in the JSON payload of a JWT.", lesson: 5, tags: ["jwt"] },
      { term: "Access token", def: "A short-lived credential used by an application to access an API on behalf of a user.", lesson: 6, tags: ["tokens"] },
      { term: "Refresh token", def: "A long-lived credential used to obtain a new access token when the current access token expires.", lesson: 6, tags: ["tokens"] }
    ]
  },
  {
    id: "federated-auth", title: "OAuth & Modern Authentication",
    terms: [
      { term: "OAuth 2.0", def: "An open standard authorization framework enabling third-party applications to access user data without passwords.", lesson: 7, tags: ["oauth"] },
      { term: "PKCE", def: "Proof Key for Code Exchange: an extension preventing authorization code interception attacks on public clients.", lesson: 7, tags: ["oauth"] },
      { term: "OpenID Connect", def: "An identity layer (OIDC) on top of OAuth 2.0 providing standardized user identity tokens (ID tokens).", lesson: 7, tags: ["auth"] },
      { term: "MFA", def: "Multi-Factor Authentication: requiring two or more distinct verification factors before granting access.", lesson: 8, tags: ["security"] }
    ]
  }
];
