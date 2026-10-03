/* ============================================================
   Secrets, Credentials & Identity — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-secrets-crisis-hardcoded-keys", file: "lessons/0001-the-secrets-crisis-hardcoded-keys.html", title: "The Secrets Crisis: Hardcoded Keys and Leaked Credentials", topic: "Secrets Crisis", anim: "Generic" },
  { n: 2, id: "env-vars-vs-secret-managers-vault", file: "lessons/0002-env-vars-vs-secret-managers-vault.html", title: "Environment Variables vs Dedicated Secret Managers", topic: "Secret Managers", anim: "Generic" },
  { n: 3, id: "secret-rotation-ephemeral-credentials", file: "lessons/0003-secret-rotation-ephemeral-credentials.html", title: "Secret Rotation, Expiration, and Ephemeral Credentials", topic: "Ephemeral Credentials", anim: "Generic" },
  { n: 4, id: "principle-least-privilege-scoping-iam", file: "lessons/0004-principle-least-privilege-scoping-iam.html", title: "The Principle of Least Privilege: Scoping IAM Roles", topic: "Least Privilege", anim: "Generic" },
  { n: 5, id: "service-to-service-auth-mtls-oauth2", file: "lessons/0005-service-to-service-auth-mtls-oauth2.html", title: "Service-to-Service Authentication (mTLS, OAuth2 Client Credentials)", topic: "Service Identity", anim: "Generic" },
  { n: 6, id: "workload-identity-federation-irsa", file: "lessons/0006-workload-identity-federation-irsa.html", title: "Workload Identity Federation (IAM Roles for Service Accounts)", topic: "Workload Identity", anim: "Generic" },
  { n: 7, id: "automated-secret-scanning-trufflehog", file: "lessons/0007-automated-secret-scanning-trufflehog.html", title: "Automated Secret Scanning in Git (TruffleHog, Gitleaks)", topic: "Secret Scanning", anim: "Generic" },
  { n: 8, id: "engineering-zero-trust-secret-architecture", file: "lessons/0008-engineering-zero-trust-secret-architecture.html", title: "Engineering a Zero-Trust Secret and Identity Architecture", topic: "Zero-Trust Secrets", anim: "Generic" }
];

/* ============================================================
   Secrets, Credentials & Identity — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "secrets-leaks", title: "Leaks & Storage",
    terms: [
      { term: "Secret Crisis", def: "The widespread security epidemic of committing plaintext API keys and credentials to version control repositories.", lesson: 1, tags: ["secrets","git"] },
      { term: "Secret Manager", def: "A centralized, encrypted service (HashiCorp Vault, AWS Secrets Manager) for storing and rotating credentials.", lesson: 2, tags: ["vault","storage"] },
      { term: "In-Memory Injection", def: "Mounting secrets into ephemeral RAM buffers at runtime, ensuring no credentials touch persistent server disks.", lesson: 2, tags: ["containers","security"] }
    ]
  },
  {
    id: "ephemeral-access", title: "Ephemeral Identity & IAM",
    terms: [
      { term: "Ephemeral Credentials", def: "Temporary access tokens with automated short-term expiration (e.g. 1 hour) that bound risk windows.", lesson: 3, tags: ["tokens","ephemeral"] },
      { term: "Least Privilege", def: "The security principle dictating that identities must be granted only the minimum permissions necessary for their tasks.", lesson: 4, tags: ["iam","governance"] },
      { term: "AWS STS", def: "Security Token Service: an AWS service that generates temporary, scoped security credentials for assumed roles.", lesson: 3, tags: ["aws","sts"] }
    ]
  },
  {
    id: "service-federation", title: "Service Auth & Federation",
    terms: [
      { term: "Mutual TLS (mTLS)", def: "Bidirectional cryptographic authentication using X.509 certificates to secure machine-to-machine traffic.", lesson: 5, tags: ["network","mtls"] },
      { term: "OAuth2 Client Credentials", def: "An automated M2M authentication grant type where services authenticate directly with identity providers.", lesson: 5, tags: ["oauth2","m2m"] },
      { term: "Workload Identity Federation", def: "A keyless mechanism allowing workloads to exchange OIDC identity tokens for temporary cloud credentials.", lesson: 6, tags: ["oidc","federation"] }
    ]
  },
  {
    id: "scanning", title: "Scanning & Architecture",
    terms: [
      { term: "TruffleHog", def: "An open-source secret scanner that analyzes deep git history and verifies discovered keys against live provider APIs.", lesson: 7, tags: ["tools","scanning"] },
      { term: "Gitleaks", def: "A fast, lightweight tool designed to scan git repositories and staged diffs in local pre-commit hooks.", lesson: 7, tags: ["tools","hooks"] },
      { term: "Zero-Trust Secret Architecture", def: "A security paradigm eliminating static keys in favor of keyless OIDC federation, vaults, and least privilege.", lesson: 8, tags: ["architecture","zerotrust"] }
    ]
  }
];
