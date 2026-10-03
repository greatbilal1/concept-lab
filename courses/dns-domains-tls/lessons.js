/* ============================================================
   DNS, Domains & TLS — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "how-domain-names-work", file: "lessons/0001-how-domain-names-work.html", title: "How domain names work", topic: "Domain Names & Resolution", anim: "GlobeNodes" },
  { n: 2, id: "the-dns-resolution-hierarchy", file: "lessons/0002-the-dns-resolution-hierarchy.html", title: "The DNS resolution hierarchy", topic: "Domain Names & Resolution", anim: "GlobeNodes" },
  { n: 3, id: "record-types-a-cname-mx-and-txt", file: "lessons/0003-record-types-a-cname-mx-and-txt.html", title: "Record types: A, CNAME, MX, and TXT", topic: "DNS Records & Propagation", anim: "GlobeNodes" },
  { n: 4, id: "ttl-caching-and-propagation", file: "lessons/0004-ttl-caching-and-propagation.html", title: "TTL, caching, and propagation", topic: "DNS Records & Propagation", anim: "GlobeNodes" },
  { n: 5, id: "symmetric-and-asymmetric-encryption", file: "lessons/0005-symmetric-and-asymmetric-encryption.html", title: "Symmetric and asymmetric encryption", topic: "Encryption & Certificates", anim: "GlobeNodes" },
  { n: 6, id: "certificates-and-certificate-authorities", file: "lessons/0006-certificates-and-certificate-authorities.html", title: "Certificates and Certificate Authorities", topic: "Encryption & Certificates", anim: "GlobeNodes" },
  { n: 7, id: "the-tls-handshake-step-by-step", file: "lessons/0007-the-tls-handshake-step-by-step.html", title: "The TLS handshake step-by-step", topic: "TLS Handshake & HTTPS", anim: "GlobeNodes" },
  { n: 8, id: "https-and-browser-security-indicators", file: "lessons/0008-https-and-browser-security-indicators.html", title: "HTTPS and browser security indicators", topic: "TLS Handshake & HTTPS", anim: "GlobeNodes" }
];

/* ============================================================
   DNS, Domains & TLS — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "domain-system", title: "Domain Names & Resolution",
    terms: [
      { term: "DNS", def: "Domain Name System: a globally distributed hierarchical database translating names into IP addresses.", lesson: 1, tags: ["dns"] },
      { term: "FQDN", def: "Fully Qualified Domain Name: an absolute domain name specifying its exact location in the DNS tree (e.g. www.example.com.).", lesson: 1, tags: ["dns"] },
      { term: "Recursive resolver", def: "A DNS server that performs iterative queries across root, TLD, and authoritative servers on behalf of a client.", lesson: 2, tags: ["dns"] },
      { term: "Authoritative nameserver", def: "The designated DNS server holding the original definitive records for a specific domain zone.", lesson: 2, tags: ["dns"] }
    ]
  },
  {
    id: "dns-records", title: "DNS Records & Propagation",
    terms: [
      { term: "A record", def: "An Address record mapping a domain name directly to an IPv4 32-bit address.", lesson: 3, tags: ["records"] },
      { term: "CNAME record", def: "Canonical Name record: an alias mapping one domain name to another domain name.", lesson: 3, tags: ["records"] },
      { term: "Time to Live", def: "The duration in seconds (TTL) that a DNS record may be cached before re-querying authoritative servers.", lesson: 4, tags: ["caching"] },
      { term: "Zone file", def: "A text file containing the mappings of domain names to IP addresses and resource records for a zone.", lesson: 3, tags: ["dns"] }
    ]
  },
  {
    id: "cryptography", title: "Encryption & Certificates",
    terms: [
      { term: "Asymmetric encryption", def: "Cryptography using a mathematically linked public and private key pair for secure key exchange.", lesson: 5, tags: ["crypto"] },
      { term: "Symmetric encryption", def: "High-performance cryptography using a single shared secret key for encrypting and decrypting data.", lesson: 5, tags: ["crypto"] },
      { term: "Certificate Authority", def: "A trusted entity (CA) that cryptographically signs and issues digital certificates verifying domain ownership.", lesson: 6, tags: ["security"] },
      { term: "X.509 Certificate", def: "The international standard format for public key certificates binding public keys to identities.", lesson: 6, tags: ["certificates"] }
    ]
  },
  {
    id: "tls-handshake", title: "TLS Handshake & HTTPS",
    terms: [
      { term: "TLS", def: "Transport Layer Security: cryptographic protocol providing confidentiality, integrity, and authentication over TCP.", lesson: 7, tags: ["security"] },
      { term: "TLS Handshake", def: "The initial negotiation where client and server verify identity and establish symmetric encryption keys.", lesson: 7, tags: ["tls"] },
      { term: "HSTS", def: "HTTP Strict Transport Security: a header instructing browsers to automatically upgrade all requests to HTTPS.", lesson: 8, tags: ["security"] },
      { term: "Mixed content", def: "A security warning occurring when an HTTPS web page loads subresources (images, scripts) over insecure HTTP.", lesson: 8, tags: ["security"] }
    ]
  }
];
