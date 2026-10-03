/* ============================================================
   Cybersecurity Fundamentals — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "thinking-like-an-attacker", file: "lessons/0001-thinking-like-an-attacker.html", title: "Thinking Like an Attacker: The Threat Landscape", topic: "Attacker Mindset", anim: "Generic" },
  { n: 2, id: "the-cia-triad-foundations", file: "lessons/0002-the-cia-triad-foundations.html", title: "The CIA Triad: Confidentiality, Integrity, Availability", topic: "CIA Triad", anim: "Generic" },
  { n: 3, id: "threat-modeling-stride-attack-trees", file: "lessons/0003-threat-modeling-stride-attack-trees.html", title: "Threat Modeling with STRIDE and Attack Trees", topic: "Threat Modeling", anim: "Generic" },
  { n: 4, id: "authentication-vs-authorization-rbac-abac", file: "lessons/0004-authentication-vs-authorization-rbac-abac.html", title: "Authentication vs Authorization and Access Control (RBAC, ABAC)", topic: "Auth & Access", anim: "Generic" },
  { n: 5, id: "cryptography-primitives-hashing-encryption", file: "lessons/0005-cryptography-primitives-hashing-encryption.html", title: "Cryptography Primitives: Hashing, Symmetric & Asymmetric Encryption", topic: "Crypto Primitives", anim: "Generic" },
  { n: 6, id: "network-security-firewalls-tls-zero-trust", file: "lessons/0006-network-security-firewalls-tls-zero-trust.html", title: "Network Security Fundamentals: Firewalls, TLS, and Zero Trust", topic: "Network Security", anim: "Generic" },
  { n: 7, id: "defense-in-depth-layered-security", file: "lessons/0007-defense-in-depth-layered-security.html", title: "Defense in Depth: Layered Security Architecture", topic: "Defense in Depth", anim: "Generic" },
  { n: 8, id: "conducting-comprehensive-security-audit", file: "lessons/0008-conducting-comprehensive-security-audit.html", title: "Conducting a Comprehensive Security Audit", topic: "Security Audit", anim: "Generic" }
];

/* ============================================================
   Cybersecurity Fundamentals — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "fundamentals", title: "Mindset & CIA Triad",
    terms: [
      { term: "Attack Surface", def: "The total sum of all reachable entry points, network interfaces, and API parameters accessible to untrusted users.", lesson: 1, tags: ["security","surface"] },
      { term: "CIA Triad", def: "The foundational security model balancing Confidentiality (privacy), Integrity (accuracy), and Availability (uptime).", lesson: 2, tags: ["foundations","cia"] },
      { term: "Confidentiality", def: "Protecting sensitive information from unauthorized observation and disclosure using encryption and access controls.", lesson: 2, tags: ["privacy","encryption"] }
    ]
  },
  {
    id: "threat-models", title: "STRIDE & Access",
    terms: [
      { term: "STRIDE", def: "Microsoft's threat modeling methodology: Spoofing, Tampering, Repudiation, Information Disclosure, DoS, and Elevation of Privilege.", lesson: 3, tags: ["modeling","stride"] },
      { term: "Authentication", def: "The verification of claimed identity using credentials, passwords, MFA, or cryptographic tokens (AuthN).", lesson: 4, tags: ["auth","identity"] },
      { term: "Authorization", def: "The process of determining whether an authenticated identity has permission to perform a specific action (AuthZ).", lesson: 4, tags: ["auth","permissions"] }
    ]
  },
  {
    id: "crypto", title: "Cryptographic Primitives",
    terms: [
      { term: "Argon2id", def: "The modern memory-hard cryptographic hash algorithm recommended as the gold standard for password storage.", lesson: 5, tags: ["crypto","passwords"] },
      { term: "Symmetric Encryption", def: "A fast cipher family (AES-256-GCM) where the same secret key is used for both encryption and decryption.", lesson: 5, tags: ["crypto","symmetric"] },
      { term: "Asymmetric Cryptography", def: "Public-key cryptography (RSA, ECC, Ed25519) using mathematically linked public and private keypairs.", lesson: 5, tags: ["crypto","asymmetric"] }
    ]
  },
  {
    id: "network-defense", title: "Network & Defense in Depth",
    terms: [
      { term: "Zero Trust", def: "A security model operating on 'never trust, always verify', enforcing authentication and encryption for every interaction.", lesson: 6, tags: ["network","zerotrust"] },
      { term: "Mutual TLS (mTLS)", def: "A protocol where both client and server present X.509 certificates to authenticate each other and encrypt traffic.", lesson: 6, tags: ["network","tls"] },
      { term: "Defense in Depth", def: "Layering independent security controls across network, host, app, and data layers so single failures are contained.", lesson: 7, tags: ["architecture","defense"] }
    ]
  }
];
