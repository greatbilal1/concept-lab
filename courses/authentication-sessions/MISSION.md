# Mission — Authentication & Sessions

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
