"use strict";

module.exports = {
  id: "dns-domains-tls",
  title: "DNS, Domains & TLS",
  num: 23,
  emoji: "🔐",
  desc: "How a name becomes an address, and how a connection becomes private — DNS resolution and the TLS handshake.",
  mission: `# Mission — DNS, Domains & TLS

## Why this course exists

The security and accessibility of the modern web depend on two foundational systems: Domain Name System (DNS) turns human-readable names into IP addresses, and Transport Layer Security (TLS) turns plaintext streams into eavesdrop-proof encrypted channels. When domains fail to resolve, certificates expire, or mixed content warnings trigger, developers without these foundations cannot troubleshoot. This course makes DNS hierarchies, record types, and cryptographic handshakes crystal clear.

## What the learner can do at the end

- Trace recursive DNS queries from root nameservers down to authoritative records.
- Configure and debug common DNS records (A, AAAA, CNAME, MX, TXT) and understand TTL dynamics.
- Explain the role of public key cryptography, symmetric session ciphers, and digital signatures.
- Understand the Certificate Authority (CA) chain of trust and automated certificate issuance via ACME.
- Step through the TLS handshake and diagnose HTTPS security warnings and certificate errors.

## What this course is NOT

- Not a mathematical cryptanalysis course on number theory.
- Not a registrar business review.

## Success looks like

When a custom domain fails to load or shows an invalid certificate warning, the learner uses dig, openssl s_client, and curl in the terminal to identify whether the issue is a stale DNS cache, mismatched CN/SAN, or missing intermediate certificate in under three minutes.
`,
  notes: `# Notes — DNS, Domains & TLS

## Decisions
- Group into four themes: Domain Names & Resolution, DNS Records & Propagation, Encryption & Certificates, and TLS Handshake & HTTPS.
- Use command-line diagnostic tools (dig, openssl) to anchor theoretical concepts.
`,
  resources: `# Resources — DNS, Domains & TLS

## Knowledge (primary sources)
- *Bulletproof TLS and PKI* by Ivan Ristić (Feisty Duck) — The definitive reference on SSL/TLS implementation and PKI.
- *DNS and BIND* by Liu and Albitz (O'Reilly) — Classical authority on domain name architecture.
- IETF RFC 1034 & 1035: *Domain Names — Concepts and Facilities*.
- IETF RFC 8446: *The Transport Layer Security (TLS) Protocol Version 1.3*.

## Wisdom
- DNS is the distributed phonebook of the internet; TLS is the cryptographic seal on the envelope.
`,
  cheatsheetSections: [
    {
      title: "DNS Query Tools",
      label: "Inspecting domain resolution",
      code: `dig example.com A             # query A record
dig example.com +trace        # trace recursive resolution from root
dig @8.8.8.8 example.com TXT  # query specific DNS resolver
nslookup example.com          # simple lookup`,
      lessonN: 2,
      lessonSlug: "the-dns-resolution-hierarchy",
      lessonTitle: "The DNS resolution hierarchy"
    },
    {
      title: "Core DNS Record Types",
      label: "Record syntax and usage",
      code: `A       example.com.      300 IN A     93.184.216.34
AAAA    example.com.      300 IN AAAA  2606:2800:220:1:248:1893:25c8:1946
CNAME   www.example.com.  300 IN CNAME example.com.
MX      example.com.      300 IN MX    10 mail.example.com.
TXT     example.com.      300 IN TXT   "v=spf1 include:_spf.google.com ~all"`,
      lessonN: 3,
      lessonSlug: "record-types-a-cname-mx-and-txt",
      lessonTitle: "Record types: A, CNAME, MX, and TXT"
    },
    {
      title: "TLS Diagnostic Tools",
      label: "Inspecting certificates and handshakes",
      code: `# Inspect remote TLS certificate chain
openssl s_client -connect example.com:443 -servername example.com

# View local certificate details
openssl x509 -in cert.pem -text -noout`,
      lessonN: 7,
      lessonSlug: "the-tls-handshake-step-by-step",
      lessonTitle: "The TLS handshake step-by-step"
    },
    {
      title: "Security Headers",
      label: "Enforcing HTTPS",
      code: `# HTTP Strict Transport Security (HSTS)
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`,
      lessonN: 8,
      lessonSlug: "https-and-browser-security-indicators",
      lessonTitle: "HTTPS and browser security indicators"
    }
  ],
  glossaryGroups: [
    {
      id: "domain-system",
      title: "Domain Names & Resolution",
      terms: [
        { term: "DNS", def: "Domain Name System: a globally distributed hierarchical database translating names into IP addresses.", lesson: 1, tags: ["dns"] },
        { term: "FQDN", def: "Fully Qualified Domain Name: an absolute domain name specifying its exact location in the DNS tree (e.g. www.example.com.).", lesson: 1, tags: ["dns"] },
        { term: "Recursive resolver", def: "A DNS server that performs iterative queries across root, TLD, and authoritative servers on behalf of a client.", lesson: 2, tags: ["dns"] },
        { term: "Authoritative nameserver", def: "The designated DNS server holding the original definitive records for a specific domain zone.", lesson: 2, tags: ["dns"] }
      ]
    },
    {
      id: "dns-records",
      title: "DNS Records & Propagation",
      terms: [
        { term: "A record", def: "An Address record mapping a domain name directly to an IPv4 32-bit address.", lesson: 3, tags: ["records"] },
        { term: "CNAME record", def: "Canonical Name record: an alias mapping one domain name to another domain name.", lesson: 3, tags: ["records"] },
        { term: "Time to Live", def: "The duration in seconds (TTL) that a DNS record may be cached before re-querying authoritative servers.", lesson: 4, tags: ["caching"] },
        { term: "Zone file", def: "A text file containing the mappings of domain names to IP addresses and resource records for a zone.", lesson: 3, tags: ["dns"] }
      ]
    },
    {
      id: "cryptography",
      title: "Encryption & Certificates",
      terms: [
        { term: "Asymmetric encryption", def: "Cryptography using a mathematically linked public and private key pair for secure key exchange.", lesson: 5, tags: ["crypto"] },
        { term: "Symmetric encryption", def: "High-performance cryptography using a single shared secret key for encrypting and decrypting data.", lesson: 5, tags: ["crypto"] },
        { term: "Certificate Authority", def: "A trusted entity (CA) that cryptographically signs and issues digital certificates verifying domain ownership.", lesson: 6, tags: ["security"] },
        { term: "X.509 Certificate", def: "The international standard format for public key certificates binding public keys to identities.", lesson: 6, tags: ["certificates"] }
      ]
    },
    {
      id: "tls-handshake",
      title: "TLS Handshake & HTTPS",
      terms: [
        { term: "TLS", def: "Transport Layer Security: cryptographic protocol providing confidentiality, integrity, and authentication over TCP.", lesson: 7, tags: ["security"] },
        { term: "TLS Handshake", def: "The initial negotiation where client and server verify identity and establish symmetric encryption keys.", lesson: 7, tags: ["tls"] },
        { term: "HSTS", def: "HTTP Strict Transport Security: a header instructing browsers to automatically upgrade all requests to HTTPS.", lesson: 8, tags: ["security"] },
        { term: "Mixed content", def: "A security warning occurring when an HTTPS web page loads subresources (images, scripts) over insecure HTTP.", lesson: 8, tags: ["security"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "how-domain-names-work",
      title: "How domain names work",
      topic: "Domain Names & Resolution",
      anim: "GlobeNodes",
      lede: "Computers talk in numbers; humans think in words. Discover the distributed tree hierarchy that turns human names into network coordinates.",
      winShort: "Explain the domain name tree structure from root dot to top-level domains",
      missionLink: "The starting point for understanding all internet identity",
      sec1: {
        title: "The inverted tree of names",
        content: `<p>A domain name like <code>blog.example.com</code> is not a flat string. It is a hierarchical path read from right to left, rooted at an invisible trailing dot: <code>blog.example.com.</code></p><p>At the top sits the <b>Root Zone</b> (<code>.</code>), managed by ICANN. Below the root are <b>Top-Level Domains (TLDs)</b> like <code>.com</code>, <code>.org</code>, and country codes like <code>.uk</code>. Below TLDs are <b>Second-Level Domains (SLDs)</b> like <code>example</code>, followed by subdomains like <code>blog</code>.</p>`,
        keyIdea: "Domain names are hierarchical trees read from right to left, starting at the root dot."
      },
      predict: {
        q: "What is the true technical root of the domain 'github.com'?",
        a: [
          "The invisible trailing root dot (github.com.)",
          "The 'git' prefix",
          "The .com top-level domain",
          "The world wide web (www)"
        ],
        c: 0,
        why: "Every Fully Qualified Domain Name (FQDN) is officially rooted at the trailing dot representing the DNS root."
      },
      sec2: {
        title: "The domain name hierarchy",
        content: `<p>Observe the administrative levels that divide authority across the global domain name tree.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Root ( . )", lines: ["13 root server clusters", "operated by 12 organizations"] },
          { title: "Top-Level Domain (.com)", lines: ["TLD registry (e.g. Verisign)", "manages all .com domains"] },
          { title: "Second-Level (example)", lines: ["domain registrant (you)", "authoritative nameservers"] },
          { title: "Subdomain (api)", lines: ["delegated prefix", "points to specific server"] }
        ]
      },
      sec3: {
        title: "Tracing domain label splitting",
        content: `<p>Trace how a resolver parses the labels of a domain from right to left.</p>`,
      },
      trace: {
        code: [
          "fqdn = 'api.staging.example.com.'",
          "labels = fqdn.strip('.').split('.').reverse()",
          "# Resolution order: com -> example -> staging -> api"
        ],
        steps: [
          { line: 0, vars: { fqdn: "api.staging.example.com." } },
          { line: 1, vars: { parsed_labels: "['com', 'example', 'staging', 'api']" } },
          { line: 2, vars: { hierarchy: "query delegates downward step by step" } }
        ]
      },
      practiceIntro: "Test your memory of domain hierarchy labels.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The invisible symbol at the absolute root of the DNS tree is a <0>.",
          "A domain suffix like .com or .org is a <1>-Level Domain.",
          "The non-profit organization coordinating global root DNS is <2>."
        ],
        blanks: [
          { a: [".", "dot"], why: "The root zone is designated by a dot." },
          { a: ["Top", "TLD"], why: "Top-Level Domains sit directly beneath the root." },
          { a: ["ICANN"], why: "ICANN oversees global IP allocations and root DNS management." }
        ]
      },
      win: "You can dissect any domain name into its constituent labels and identify the administrative hierarchy responsible for it.",
      nextTasks: [
        "Notice the trailing dot when running dig example.com..",
        "List three country-code TLDs (ccTLDs) and three generic TLDs (gTLDs).",
        "Look up who operates the .com registry (Verisign)."
      ],
      primarySource: "IETF RFC 1034: *Domain Names — Concepts and Facilities*, Section 3: 'Domain Name Space and Resource Records'.",
      quiz: [
        {
          q: "Why are domain names resolved from right to left rather than left to right?",
          a: [
            "Because the hierarchy delegates from the broadest scope (TLD) to the specific host (subdomain)",
            "Because internet cables only transmit letters in reverse order",
            "To make domain names harder for automated scripts to guess",
            "Because original DNS servers were programmed in Arabic"
          ],
          c: 0,
          why: "Right-to-left resolution mirrors the hierarchical delegation tree from root to leaf."
        },
        {
          q: "What is a registrar in the domain name ecosystem?",
          a: [
            "An accredited commercial company that sells domain name registrations to end users",
            "The physical computer chip inside an internet router",
            "A web browser that translates domain names into bookmarks",
            "A government agency that taxes website traffic"
          ],
          c: 0,
          why: "Registrars (like Namecheap or Cloudflare) register domains with top-level registries on your behalf."
        },
        {
          q: "What is an FQDN?",
          a: [
            "A Fully Qualified Domain Name specifying an unambiguous position in the DNS tree",
            "A Fast Query Data Network used by financial banks",
            "A Fiber Quantum Distribution Node for transoceanic cables",
            "A File Quality Diagnostic Number in operating systems"
          ],
          c: 0,
          why: "An FQDN includes all domain labels up to the root, leaving zero ambiguity."
        },
        {
          q: "Who operates the 13 root nameserver IP addresses?",
          a: [
            "12 independent global organizations including NASA, ICANN, and universities using Anycast",
            "A single computer server located in Silicon Valley",
            "The United Nations security council",
            "Every consumer Wi-Fi router on earth"
          ],
          c: 0,
          why: "13 logical IP addresses are served by hundreds of distributed Anycast nodes across 12 institutions."
        }
      ]
    },
    {
      n: 2,
      id: "the-dns-resolution-hierarchy",
      title: "The DNS resolution hierarchy",
      topic: "Domain Names & Resolution",
      anim: "GlobeNodes",
      lede: "When you type a URL, how does your computer find the right IP in 20 milliseconds? Follow a recursive resolver as it walks the global DNS hierarchy.",
      winShort: "Trace the four steps of recursive DNS resolution from root to authoritative server",
      missionLink: "Explains how billions of lookups execute without crashing central servers",
      sec1: {
        title: "The four actors of DNS resolution",
        content: `<p>A DNS lookup involves four distinct servers collaborating in sequence: the <b>DNS Recurser</b> (your ISP or 8.8.8.8), the <b>Root Server</b>, the <b>TLD Server</b>, and the <b>Authoritative Nameserver</b>.</p><p>The recurser does the legwork: it asks the root <i>'Where is .com?'</i>, asks the .com TLD <i>'Where is example.com?'</i>, and finally asks example.com's authoritative server <i>'What is the IP of api.example.com?'</i></p>`,
        keyIdea: "Recursive resolvers do the iterative detective work of querying root, TLD, and authoritative servers."
      },
      predict: {
        q: "Which server holds the definitive, final source-of-truth IP address for a domain?",
        a: [
          "The domain authoritative nameserver",
          "Your home Wi-Fi router cache",
          "The root DNS server",
          "Your local operating system browser history"
        ],
        c: 0,
        why: "Authoritative nameservers are the designated source of truth for records in that zone."
      },
      sec2: {
        title: "The recursive lookup sequence",
        content: `<p>Visualise the four iterative hops made by a recursive resolver to answer a query.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Client -> Resolver", lines: ["'What is api.example.com?'", "resolver checks local cache"] },
          { title: "2. Resolver -> Root", lines: ["'Where is .com?'", "Root replies: Ask Verisign TLD"] },
          { title: "3. Resolver -> TLD", lines: ["'Where is example.com?'", "TLD replies: Ask ns1.cloudflare.com"] },
          { title: "4. Resolver -> Auth", lines: ["'What is api.example.com?'", "Auth replies: 93.184.216.34 (200 OK)"] }
        ]
      },
      sec3: {
        title: "Tracing resolution with dig +trace",
        content: `<p>Trace the live output of dig +trace following the resolution path down the global tree.</p>`,
      },
      trace: {
        code: [
          "# dig +trace example.com",
          "1. .                    NS   a.root-servers.net",
          "2. com.                 NS   a.gtld-servers.net",
          "3. example.com.         NS   a.iana-servers.net",
          "4. example.com.         A    93.184.216.34"
        ],
        steps: [
          { line: 1, vars: { queried: "root server ( . )" } },
          { line: 2, vars: { queried: "TLD registry (.com)" } },
          { line: 3, vars: { queried: "authoritative nameserver" } },
          { line: 4, vars: { result: "A record IP address delivered to client" } }
        ]
      },
      practiceIntro: "Test your recall of DNS resolution actors.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The server that performs queries on behalf of client devices is a <0> resolver.",
          "The server holding the master records for a domain is the <1> nameserver.",
          "The terminal diagnostic tool used to trace DNS lookups is <2>."
        ],
        blanks: [
          { a: ["recursive"], why: "Recursive resolvers query the hierarchy iteratively." },
          { a: ["authoritative"], why: "Authoritative nameservers hold definitive zone records." },
          { a: ["dig"], why: "dig (Domain Information Groper) is the standard DNS test utility." }
        ]
      },
      win: "You can trace recursive DNS queries step-by-step and diagnose which nameserver layer is failing during an outage.",
      nextTasks: [
        "Run dig +trace yourfavoriteblog.com and observe the 4 delegation layers.",
        "Test an explicit resolver query using dig @1.1.1.1 example.com.",
        "Compare query time between a cached response and an uncached query."
      ],
      primarySource: "IETF RFC 1035: *Domain Names — Implementation and Specification*.",
      quiz: [
        {
          q: "What is the difference between a recursive resolver and an authoritative nameserver?",
          a: [
            "A resolver queries the hierarchy on behalf of users; an authoritative server holds the definitive records",
            "A resolver is written in C; an authoritative server is written in JavaScript",
            "A resolver only works for IPv6; an authoritative server only works for IPv4",
            "There is no difference between the two"
          ],
          c: 0,
          why: "Resolvers investigate; authoritative nameservers answer with definitive zone truth."
        },
        {
          q: "What does 'dig +trace' show that a normal 'dig' command does not?",
          a: [
            "The full iterative query delegation path from root servers down to authoritative servers",
            "The physical GPS coordinates of the website headquarters",
            "The server internal database schema passwords",
            "The user personal browsing history"
          ],
          c: 0,
          why: "+trace disables resolver caching and forces an iterative walkthrough from the root."
        },
        {
          q: "Why do public recursive resolvers like 1.1.1.1 or 8.8.8.8 exist?",
          a: [
            "To provide fast, cached, secure DNS lookups independent of local ISP resolvers",
            "To replace web servers and host HTML websites directly",
            "To assign home Wi-Fi passwords to neighborhood users",
            "To mine cryptocurrency using idle network packets"
          ],
          c: 0,
          why: "Public resolvers offer high-performance global caching and privacy protections."
        },
        {
          q: "What happens if all authoritative nameservers for a domain go offline?",
          a: [
            "Once cached TTL expires, resolvers can no longer resolve the domain and lookups fail (SERVFAIL)",
            "The domain automatically gets deleted from the registrar",
            "The website continues running normally without any interruption forever",
            "All computers on the internet crash"
          ],
          c: 0,
          why: "Without authoritative servers, resolvers cannot refresh records once cache TTL expires."
        }
      ]
    },
    {
      n: 3,
      id: "record-types-a-cname-mx-and-txt",
      title: "Record types: A, CNAME, MX, and TXT",
      topic: "DNS Records & Propagation",
      anim: "GlobeNodes",
      lede: "A zone file is a phonebook with different entry types. Learn when to use A, AAAA, CNAME, MX, and TXT records without breaking email or apex domains.",
      winShort: "Configure standard DNS record types accurately and avoid the CNAME apex restriction",
      missionLink: "Essential for deploying web services, configuring custom domains, and setting up email",
      sec1: {
        title: "The core DNS vocabulary",
        content: `<p>A domain zone file is a list of resource records. Each record has a type: <b>A</b> maps a name to an IPv4 address, <b>AAAA</b> maps to an IPv6 address, <b>CNAME</b> aliases one name to another, <b>MX</b> routes email to mail servers, and <b>TXT</b> stores arbitrary text for domain verification and security.</p><p>A critical rule: <b>A CNAME record cannot exist at the root apex domain (e.g. example.com)</b> because RFC 1034 forbids CNAMEs from coexisting with other records like MX or NS.</p>`,
        keyIdea: "A points to IPv4; CNAME aliases to another domain; CNAME cannot live at the zone apex."
      },
      predict: {
        q: "Why can you not set a CNAME record on the apex domain 'example.com'?",
        a: [
          "RFC 1034 forbids CNAME from coexisting with mandatory NS and SOA records at the apex",
          "CNAME records only work on mobile smartphone web browsers",
          "Domain registrars charge extra fees for apex CNAME records",
          "Apex domains can only be registered using IPv6 addresses"
        ],
        c: 0,
        why: "A CNAME replaces all records for a node; at the apex, SOA and NS are mandatory."
      },
      sec2: {
        title: "The five essential record types",
        content: `<p>Understand the parameters and purpose of the primary DNS record types.</p>`,
      },
      diagram: {
        boxes: [
          { title: "A / AAAA", lines: ["domain -> IP address", "A: 93.184.216.34 | AAAA: 2606:..."] },
          { title: "CNAME", lines: ["domain -> another domain", "www.example.com -> example.com"] },
          { title: "MX", lines: ["mail exchanger", "includes priority: 10 mail.example.com"] },
          { title: "TXT", lines: ["domain verification", "SPF, DKIM, Google site verification"] }
        ]
      },
      sec3: {
        title: "Tracing CNAME resolution",
        content: `<p>Trace how a CNAME query requires the resolver to execute a second lookup for the canonical target.</p>`,
      },
      trace: {
        code: [
          "# Query: www.example.com",
          "1. www.example.com  IN CNAME example.com.",
          "# Resolver follows alias to canonical target:",
          "2. example.com.      IN A     93.184.216.34",
          "# Final answer delivered: 93.184.216.34"
        ],
        steps: [
          { line: 0, vars: { query: "www.example.com" } },
          { line: 1, vars: { cname_alias: "points to example.com." } },
          { line: 2, vars: { second_query: "resolves A record for example.com." } },
          { line: 4, vars: { delivered_ip: "93.184.216.34" } }
        ]
      },
      practiceIntro: "Test your recall of DNS record types.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The record mapping a hostname to an IPv4 address is an <0> record.",
          "The record mapping an alias name to another hostname is a <1> record.",
          "The record defining mail delivery servers and priorities is an <2> record."
        ],
        blanks: [
          { a: ["A"], why: "A records map to 32-bit IPv4 addresses." },
          { a: ["CNAME"], why: "CNAME aliases one domain name to another canonical name." },
          { a: ["MX"], why: "MX designates Mail Exchanger servers." }
        ]
      },
      win: "You can configure zone files with correct record types for web hosting, CDNs, and email routing.",
      nextTasks: [
        "Query the MX records of your email provider using dig example.com MX.",
        "Inspect the TXT records on google.com to view their SPF email policy.",
        "Check how modern DNS providers solve the apex CNAME issue using ALIAS/ANAME flattening."
      ],
      primarySource: "IETF RFC 1035: *Resource Record Definitions*.",
      quiz: [
        {
          q: "What is the primary purpose of TXT records today?",
          a: [
            "Storing domain verification tokens and email authentication policies like SPF and DKIM",
            "Storing the full HTML source code of the website homepage",
            "Translating domain names into mobile telephone numbers",
            "Encrypting website database connections with TLS"
          ],
          c: 0,
          why: "TXT records hold machine-readable metadata for domain ownership, SPF, and DMARC."
        },
        {
          q: "What does the priority number in an MX record indicate?",
          a: [
            "The order in which mail servers should be attempted (lower numbers tried first)",
            "The maximum email attachment size allowed in megabytes",
            "The price paid for the domain registration in dollars",
            "The physical distance from the mail server to the user"
          ],
          c: 0,
          why: "Mail clients attempt the lowest numerical priority MX server first, falling back to higher values."
        },
        {
          q: "What is a CNAME record?",
          a: [
            "An alias that redirects queries for one domain name to another domain name",
            "A cryptographic certificate used to secure passwords",
            "An address record pointing directly to an IPv6 address",
            "A record that restricts web traffic to specific countries"
          ],
          c: 0,
          why: "CNAME (Canonical Name) aliases a hostname to another target hostname."
        },
        {
          q: "How do modern DNS providers (like Cloudflare or AWS Route 53) allow CNAME-like behavior at the apex?",
          a: [
            "Through CNAME flattening / ALIAS records that dynamically resolve and return A records at query time",
            "By violating international law and ignoring the DNS standards",
            "By converting the domain name into an email address",
            "By forcing all users to browse via proxy VPNs"
          ],
          c: 0,
          why: "CNAME flattening dynamically resolves the target and serves synthesized A records at the apex."
        }
      ]
    },
    {
      n: 4,
      id: "ttl-caching-and-propagation",
      title: "TTL, caching, and propagation",
      topic: "DNS Records & Propagation",
      anim: "GlobeNodes",
      lede: "Why does changing a DNS record take minutes or hours to take effect? Master Time to Live (TTL), resolver caching, and how to plan zero-downtime migrations.",
      winShort: "Calculate DNS cache expiration and plan zero-downtime DNS migrations using TTL",
      missionLink: "Prevents downtime and broken deployments during server transitions",
      sec1: {
        title: "The economics of DNS caching",
        content: `<p>If every browser query hit authoritative servers directly, the internet's DNS infrastructure would collapse under billions of queries per second. DNS works because <b>almost every answer is aggressively cached</b>.</p><p>Every record carries a <b>TTL (Time to Live)</b> in seconds. A resolver caches the answer for that duration. During that window, any changes you make to your records on your authoritative nameserver are completely invisible to cached clients.</p>`,
        keyIdea: "A DNS record update will not be visible to cached clients until its previous TTL expires."
      },
      predict: {
        q: "If your A record has TTL=86400 (24 hours), and you change the IP at noon, when will all clients see the change?",
        a: [
          "Instantly within 5 seconds",
          "Gradually over the next 24 hours as individual resolver caches expire",
          "Never, unless users reboot their computers",
          "Only at midnight UTC"
        ],
        c: 1,
        why: "Any resolver that cached the record right before noon will retain the old IP for up to 24 hours."
      },
      sec2: {
        title: "The zero-downtime migration protocol",
        content: `<p>How to safely migrate an IP address without downtime by pre-lowering TTL values.</p>`,
      },
      diagram: {
        boxes: [
          { title: "T - 48 Hours", lines: ["lower TTL from 86400 to 300 (5m)", "wait for old 24h caches to clear"] },
          { title: "T = 0 (Migration)", lines: ["switch A record to new server IP", "clients switch within 5 minutes"] },
          { title: "T + 24 Hours", lines: ["verify stability", "raise TTL back to 86400 to reduce load"] }
        ]
      },
      sec3: {
        title: "Tracing TTL decrement in dig",
        content: `<p>Trace how a cached DNS record's TTL counts down on successive terminal lookups.</p>`,
      },
      trace: {
        code: [
          "# Query 1 at 12:00:00 -> returns TTL 300",
          "api.example.com.     300 IN A 93.184.216.34",
          "# Query 2 at 12:02:00 (120s later) -> returns TTL 180",
          "api.example.com.     180 IN A 93.184.216.34",
          "# Query 3 at 12:05:01 (expired) -> resolver queries auth server again (refreshes to 300)"
        ],
        steps: [
          { line: 0, vars: { initial_ttl: "300 seconds (5 min)" } },
          { line: 2, vars: { cache_remaining: "180 seconds left" } },
          { line: 4, vars: { expired: "cache refreshed from authoritative server" } }
        ]
      },
      practiceIntro: "Test your understanding of DNS caching dynamics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The lifetime of a DNS cache entry in seconds is the <0>.",
          "Caching the absence of a record is <1> caching.",
          "The delay while global DNS resolvers refresh old cached records is <2>."
        ],
        blanks: [
          { a: ["TTL"], why: "TTL stands for Time to Live." },
          { a: ["negative"], why: "Negative caching stores NXDOMAIN results to prevent repeated queries." },
          { a: ["propagation"], why: "Propagation describes the gradual worldwide cache refresh process." }
        ]
      },
      win: "You can schedule and execute DNS migrations without service disruption by managing TTL lifecycles.",
      nextTasks: [
        "Run dig multiple times on a domain and watch the TTL number decrease.",
        "Check the TTL of your company or personal domain.",
        "Document the steps you would take to migrate an API server with zero downtime."
      ],
      primarySource: "IETF RFC 2308: *Negative Caching of DNS Queries (DNS NCACHE)*.",
      quiz: [
        {
          q: "What does a TTL of 300 mean on a DNS record?",
          a: [
            "Resolvers and clients can cache the answer for 300 seconds (5 minutes) before re-querying",
            "The server will shut down in 300 seconds",
            "The website allows only 300 concurrent visitors",
            "The record costs $3.00 per month"
          ],
          c: 0,
          why: "TTL defines cache freshness duration in seconds."
        },
        {
          q: "Why shouldn't you keep TTL set to 60 seconds permanently in production?",
          a: [
            "Very short TTLs flood authoritative nameservers with high query volume and add lookup latency",
            "Short TTLs cause computers to overheat",
            "Short TTLs are illegal under ICANN regulations",
            "Short TTLs disable HTTPS encryption"
          ],
          c: 0,
          why: "Low TTL sacrifices caching efficiency, increasing server load and client query delays."
        },
        {
          q: "What is 'negative caching' in DNS resolution?",
          a: [
            "Caching the fact that a domain does NOT exist (NXDOMAIN) to prevent query spam",
            "Deleting the root nameservers from operating system memory",
            "Refusing to cache records that contain numbers",
            "Subtracting latency from network connection packets"
          ],
          c: 0,
          why: "Negative caching prevents clients from hammering authoritative servers for non-existent names."
        },
        {
          q: "What should you do 48 hours before migrating a server to a new IP address?",
          a: [
            "Lower the DNS record's TTL to a short duration like 300 seconds",
            "Delete all DNS records immediately",
            "Email all website users asking them to flush their local DNS",
            "Turn off the production web server"
          ],
          c: 0,
          why: "Lowering TTL ahead of time ensures that when you switch the IP, clients discover it within 5 minutes."
        }
      ]
    },
    {
      n: 5,
      id: "symmetric-and-asymmetric-encryption",
      title: "Symmetric and asymmetric encryption",
      topic: "Encryption & Certificates",
      anim: "GlobeNodes",
      lede: "How do two strangers on the internet create a secret conversation in plain sight of eavesdroppers? Discover the mathematics of public and private keys.",
      winShort: "Explain the complementary roles of asymmetric key exchange and symmetric bulk ciphers",
      missionLink: "The cryptographic cornerstone of all internet security and privacy",
      sec1: {
        title: "The problem of key exchange",
        content: `<p>If Alice and Bob want to send secret messages, they can use <b>symmetric encryption</b> (like AES-256): the same secret key encrypts and decrypts the data. It is blazing fast and mathematically unbreakable.</p><p>But how do Alice and Bob agree on the secret key if Eve is eavesdropping on the network cable? Sending the key in plaintext destroys security. This is the central problem solved by <b>asymmetric cryptography</b>.</p>`,
        keyIdea: "Symmetric encryption is fast but requires a shared key; asymmetric encryption solves key sharing."
      },
      predict: {
        q: "In asymmetric cryptography (public-key cryptography), which key can be shared openly with the public?",
        a: [
          "The public key can be shared openly; the private key must be kept secret",
          "The private key can be shared openly; the public key must be kept secret",
          "Both keys must be kept strictly secret",
          "Neither key can ever be transmitted over the internet"
        ],
        c: 0,
        why: "Anyone can encrypt with your public key, but only your private key can decrypt the message."
      },
      sec2: {
        title: "The hybrid encryption model",
        content: `<p>Modern systems use hybrid encryption: asymmetric cryptography negotiates a session key, which symmetric ciphers use to encrypt bulk data.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Asymmetric (Slow)", lines: ["RSA or Elliptic Curves (ECDHE)", "authenticates & exchanges shared secret"] },
          { title: "Ephemeral Secret", lines: ["both sides compute identical key", "never transmitted across wire"] },
          { title: "Symmetric (Blazing Fast)", lines: ["AES-GCM or ChaCha20", "encrypts bulk application payload"] }
        ]
      },
      sec3: {
        title: "Tracing the Diffie-Hellman key exchange",
        content: `<p>Trace how Diffie-Hellman calculates a shared secret over a public wire without ever transmitting the secret.</p>`,
      },
      trace: {
        code: [
          "# Alice has private key 'a'; sends public g^a mod p",
          "# Bob has private key 'b'; sends public g^b mod p",
          "# Alice computes (g^b)^a mod p",
          "# Bob computes (g^a)^b mod p",
          "# Both independently arrive at identical shared secret g^(ab) mod p!"
        ],
        steps: [
          { line: 0, vars: { alice_private: "kept secret by Alice" } },
          { line: 1, vars: { bob_private: "kept secret by Bob" } },
          { line: 2, vars: { math: "mathematical properties of discrete logarithms" } },
          { line: 4, vars: { shared_secret: "identical symmetric key derived on both ends" } }
        ]
      },
      practiceIntro: "Test your memory of cryptographic primitives.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Encryption using the same key to encrypt and decrypt is <0>.",
          "Encryption using a public and private key pair is <1>.",
          "The fast symmetric cipher used in almost all HTTPS sessions is <2>."
        ],
        blanks: [
          { a: ["symmetric"], why: "Symmetric encryption uses a single shared key." },
          { a: ["asymmetric"], why: "Asymmetric encryption uses public/private key pairs." },
          { a: ["AES", "AES-256", "AES-GCM"], why: "Advanced Encryption Standard (AES) is the gold standard bulk cipher." }
        ]
      },
      win: "You can articulate how hybrid cryptosystems combine asymmetric key exchange with symmetric ciphers to protect web communications.",
      nextTasks: [
        "Generate an asymmetric RSA or Ed25519 key pair using ssh-keygen.",
        "Inspect the public key (.pub) and verify it can be shared openly.",
        "Explain why your private key must never leave your machine."
      ],
      primarySource: "Whitfield Diffie and Martin Hellman, *New Directions in Cryptography* (IEEE Transactions on Information Theory, 1976).",
      quiz: [
        {
          q: "Why doesn't HTTPS use asymmetric public-key cryptography to encrypt the entire web session?",
          a: [
            "Asymmetric math is thousands of times slower and computationally expensive compared to symmetric ciphers",
            "Asymmetric encryption can only encrypt text containing English letters",
            "Public keys expire after transmitting 1 megabyte of data",
            "Web browsers do not support public keys"
          ],
          c: 0,
          why: "Asymmetric encryption is computationally heavy; it is used only to negotiate a fast symmetric key."
        },
        {
          q: "If someone intercepts your public key while you browse the web, can they decrypt your messages?",
          a: [
            "No, messages encrypted with a public key can only be decrypted by the matching private key",
            "Yes, possessing the public key allows anyone to decrypt the message",
            "Only if they have an administrator password",
            "Yes, if they use a supercomputer for 5 minutes"
          ],
          c: 0,
          why: "One-way mathematical trapdoor: public keys encrypt; only the private key decrypts."
        },
        {
          q: "What property does 'Forward Secrecy' (PFS) provide in modern TLS?",
          a: [
            "Compromise of the server private key in the future cannot decrypt past recorded sessions",
            "The website automatically loads in the background before you type the URL",
            "The client can browse without using an IP address",
            "All passwords are encrypted with biological fingerprints"
          ],
          c: 0,
          why: "Ephemeral keys generated per-session ensure that past sessions remain secure even if keys leak later."
        },
        {
          q: "Which cipher algorithm is the industry standard for high-performance symmetric encryption?",
          a: [
            "AES (Advanced Encryption Standard)",
            "MD5 (Message Digest 5)",
            "ROT13 (Rotate by 13)",
            "Base64 Encoding"
          ],
          c: 0,
          why: "AES is hardware-accelerated on modern CPUs and provides military-grade security."
        }
      ]
    },
    {
      n: 6,
      id: "certificates-and-certificate-authorities",
      title: "Certificates and Certificate Authorities",
      topic: "Encryption & Certificates",
      anim: "GlobeNodes",
      lede: "How do you know you are really talking to your bank and not an impostor on the coffee shop Wi-Fi? Learn about the X.509 chain of trust and Let's Encrypt.",
      winShort: "Explain X.509 certificate chains, Certificate Authorities, and automated ACME issuance",
      missionLink: "Prevents Man-in-the-Middle attacks and validates digital identity",
      sec1: {
        title: "The Man-in-the-Middle problem",
        content: `<p>Encryption alone is not enough. If you connect to <code>bank.com</code>, an attacker on your local network could impersonate the bank, generate their own public key, and encrypt the connection with you while forwarding traffic to the bank. This is a <b>Man-in-the-Middle (MitM)</b> attack.</p><p>To prevent impersonation, the internet relies on <b>Digital Certificates</b> issued by trusted <b>Certificate Authorities (CAs)</b>. A certificate binds a domain name to a specific public key, backed by the cryptographic digital signature of a CA.</p>`,
        keyIdea: "A certificate is a cryptographically signed identity card proving that a public key belongs to a domain."
      },
      predict: {
        q: "What happens if a website presents a self-signed certificate not trusted by any Certificate Authority?",
        a: [
          "The browser displays a prominent security warning screen blocking access",
          "The computer automatically reboots",
          "The website loads normally without any indication of a problem",
          "The web server deletes the certificate file"
        ],
        c: 0,
        why: "Browsers only trust certificates signed by CAs installed in the operating system root trust store."
      },
      sec2: {
        title: "The certificate chain of trust",
        content: `<p>Every certificate is validated upwards through intermediate certificates to a Root CA pre-installed in your OS.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Root CA (in OS Trust Store)", lines: ["DigiCert / ISRG Root X1", "self-signed, immutable trust anchor"] },
          { title: "Intermediate CA", lines: ["Let's Encrypt R3", "signed by Root CA, signs leaf certs"] },
          { title: "Leaf Certificate (example.com)", lines: ["signed by Intermediate CA", "contains public key and domain SANs"] }
        ]
      },
      sec3: {
        title: "Tracing ACME automated issuance",
        content: `<p>Trace how Let's Encrypt issues free certificates in seconds using automated HTTP-01 challenges.</p>`,
      },
      trace: {
        code: [
          "Certbot -> Requests certificate for 'api.example.com'",
          "Let's Encrypt CA -> Challenges: 'Place secret token at /.well-known/acme-challenge/xyz'",
          "Certbot -> Writes token to web server root",
          "Let's Encrypt CA -> Fetches http://api.example.com/.well-known/acme-challenge/xyz",
          "CA validates token -> Issues signed X.509 certificate!"
        ],
        steps: [
          { line: 0, vars: { request: "certificate for api.example.com" } },
          { line: 1, vars: { challenge: "HTTP-01 domain ownership proof" } },
          { line: 3, vars: { verification: "CA verified server control over domain" } },
          { line: 4, vars: { issued: "signed certificate delivered in 3 seconds" } }
        ]
      },
      practiceIntro: "Test your recall of Public Key Infrastructure (PKI) components.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A trusted third party that signs digital certificates is a Certificate <0>.",
          "The standard digital certificate format used in TLS is X.<1>.",
          "The automated protocol used by Let's Encrypt to issue free certificates is <2>."
        ],
        blanks: [
          { a: ["Authority", "CA"], why: "Certificate Authorities act as identity verifiers." },
          { a: ["509"], why: "X.509 is the international standard for public key certificates." },
          { a: ["ACME"], why: "Automated Certificate Management Environment (ACME) powers Let's Encrypt." }
        ]
      },
      win: "You can explain the complete certificate chain of trust and troubleshoot invalid certificate warnings on production servers.",
      nextTasks: [
        "View the certificate chain for a website by clicking the padlock in your browser address bar.",
        "Inspect the Root CAs trusted by your operating system in Keychain Access or /etc/ssl/certs.",
        "Automate certificate renewal using Certbot or Caddy server."
      ],
      primarySource: "Ivan Ristić, *Bulletproof TLS and PKI*, Chapter 3: 'Public Key Infrastructure (PKI)'.",
      quiz: [
        {
          q: "What is the primary role of a Certificate Authority (CA)?",
          a: [
            "To verify that an applicant controls a domain and cryptographically sign their public key certificate",
            "To charge credit cards on behalf of internet websites",
            "To store backups of website source code in secure data centers",
            "To provide broadband internet connections to businesses"
          ],
          c: 0,
          why: "CAs verify domain ownership and issue signed certificates asserting that identity."
        },
        {
          q: "Why do Certificate Authorities use Intermediate certificates instead of signing directly with the Root CA?",
          a: [
            "To keep the Root CA private key offline in an air-gapped safe, protecting it from compromise",
            "Because Root certificates are only compatible with Windows operating systems",
            "To make TLS handshakes run twice as fast",
            "Because international laws forbid using root keys"
          ],
          c: 0,
          why: "Intermediate certificates can be revoked easily if breached without replacing root trust stores."
        },
        {
          q: "What field inside an X.509 certificate lists all the domain names the certificate is valid for?",
          a: [
            "Subject Alternative Name (SAN)",
            "User-Agent",
            "Content-Type",
            "HTTP Host Header"
          ],
          c: 0,
          why: "The SAN extension lists all valid hostnames (including wildcards like *.example.com)."
        },
        {
          q: "What does the ACME protocol automate?",
          a: [
            "Domain ownership verification, certificate issuance, and automated renewals",
            "The physical installation of fiber optic cables under streets",
            "The creation of database tables and schema migrations",
            "The compilation of C++ source code into binary executables"
          ],
          c: 0,
          why: "ACME (RFC 8555) automated the entire manual certificate issuance process for the web."
        }
      ]
    },
    {
      n: 7,
      id: "the-tls-handshake-step-by-step",
      title: "The TLS handshake step-by-step",
      topic: "TLS Handshake & HTTPS",
      anim: "GlobeNodes",
      lede: "What happens in the first 50 milliseconds of an HTTPS connection? Follow the ClientHello, certificate verification, and key derivation of TLS 1.3.",
      winShort: "Trace the TLS 1.3 handshake sequence and inspect live connections with openssl s_client",
      missionLink: "Demystifies the handshake mechanics behind modern encrypted connections",
      sec1: {
        title: "The 1-RTT handshake",
        content: `<p>In older TLS 1.2, establishing an encrypted connection required two full round-trips (2-RTT) of back-and-forth negotiation before any application data could travel. Modern <b>TLS 1.3</b> streamlined this into a blazing fast <b>1-RTT handshake</b>.</p><p>In the very first message (<code>ClientHello</code>), the client sends its supported cipher suites and guesses the key exchange algorithm by sending its public key share immediately.</p>`,
        keyIdea: "TLS 1.3 establishes an authenticated, encrypted channel in a single round-trip."
      },
      predict: {
        q: "How many round trips are required to complete a full TLS 1.3 handshake before sending HTTP data?",
        a: ["1 Round Trip (1-RTT)", "5 Round Trips", "0 Round Trips", "10 Round Trips"],
        c: 0,
        why: "TLS 1.3 combines key exchange with the initial greeting, finishing the handshake in 1-RTT."
      },
      sec2: {
        title: "The TLS 1.3 handshake exchange",
        content: `<p>Follow the streamlined two-flight message exchange of TLS 1.3.</p>`,
      },
      diagram: {
        boxes: [
          { title: "ClientHello (->)", lines: ["supported ciphers, SNI (domain)", "client Diffie-Hellman public key share"] },
          { title: "ServerHello & Cert (<-)", lines: ["chosen cipher, server key share", "X.509 cert chain + digital signature"] },
          { title: "Encrypted Traffic", lines: ["both compute symmetric session key", "HTTP GET / sent under AES-GCM encryption"] }
        ]
      },
      sec3: {
        title: "Tracing a handshake with openssl s_client",
        content: `<p>Trace the terminal output of openssl establishing a live TLS 1.3 session.</p>`,
      },
      trace: {
        code: [
          "# openssl s_client -connect example.com:443 -tls1_3",
          "CONNECTED(00000003)",
          "depth=2 C = US, O = Internet Security Research Group, CN = ISRG Root X1",
          "Certificate chain verified: OK",
          "New, TLSv1.3, Cipher is TLS_AES_256_GCM_SHA384"
        ],
        steps: [
          { line: 0, vars: { command: "initiating TLS 1.3 connection" } },
          { line: 2, vars: { trust_root: "ISRG Root X1 verified from local OS store" } },
          { line: 3, vars: { validity: "certificate signatures valid" } },
          { line: 4, vars: { cipher: "symmetric encryption active via AES-256-GCM" } }
        ]
      },
      practiceIntro: "Test your recall of handshake phases.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The first message sent by the client is the Client<0>.",
          "The extension specifying the target domain name is <1>.",
          "The number of round trips required by TLS 1.3 is <2>-RTT."
        ],
        blanks: [
          { a: ["Hello"], why: "ClientHello initiates the TLS negotiation." },
          { a: ["SNI", "Server Name Indication"], why: "SNI tells the server which certificate to present." },
          { a: ["1", "one"], why: "TLS 1.3 completes in one round-trip." }
        ]
      },
      win: "You can explain and debug every message of the TLS handshake and test live server certificates using openssl.",
      nextTasks: [
        "Connect to a secure website using openssl s_client -connect example.com:443.",
        "Inspect the negotiated TLS version and cipher suite in the output.",
        "Verify why SNI is required when multiple domains share an IP address."
      ],
      primarySource: "IETF RFC 8446: *The Transport Layer Security (TLS) Protocol Version 1.3*.",
      quiz: [
        {
          q: "What is Server Name Indication (SNI) in the TLS ClientHello?",
          a: [
            "An extension telling the server which specific hostname the client wishes to connect to, before encryption begins",
            "A header that lists the user real personal name",
            "A setting that turns off password authentication",
            "A tool that measures internet download speeds"
          ],
          c: 0,
          why: "SNI allows servers hosting multiple HTTPS sites on one IP to present the correct certificate."
        },
        {
          q: "What major legacy ciphers did TLS 1.3 completely remove to improve security?",
          a: [
            "Weak RSA static key exchange, RC4, MD5, and SHA-1",
            "AES-GCM and ChaCha20",
            "Elliptic Curve Diffie-Hellman",
            "TCP and UDP protocol headers"
          ],
          c: 0,
          why: "TLS 1.3 removed legacy broken ciphers, mandating Forward Secrecy and authenticated encryption."
        },
        {
          q: "What verifies that the server holds the private key matching its certificate?",
          a: [
            "The server signs the handshake transcript using its private key, verified by the client with the public key",
            "The server emails a confirmation link to the client",
            "The user types an administrator password into the terminal",
            "The operating system checks the computer serial number"
          ],
          c: 0,
          why: "Digital signatures mathematically prove possession of the private key corresponding to the certificate."
        },
        {
          q: "What is 0-RTT Early Data in TLS 1.3?",
          a: [
            "A feature allowing clients reconnecting to a known server to send encrypted HTTP data in the very first packet",
            "A method to browse the web without an internet connection",
            "A protocol that eliminates physical fiber optic cables",
            "An operating system setting that disables firewalls"
          ],
          c: 0,
          why: "0-RTT allows resuming previous sessions instantly, though with replay attack trade-offs."
        }
      ]
    },
    {
      n: 8,
      id: "https-and-browser-security-indicators",
      title: "HTTPS and browser security indicators",
      topic: "TLS Handshake & HTTPS",
      anim: "GlobeNodes",
      lede: "What does the browser padlock really mean? Learn how browsers enforce HSTS, diagnose mixed content errors, and understand the limits of HTTPS protection.",
      winShort: "Enforce HTTPS using HSTS headers and resolve mixed content security vulnerabilities",
      missionLink: "Secures end-user browser experiences and eliminates security warnings",
      sec1: {
        title: "What HTTPS protects and what it does not",
        content: `<p>HTTPS is HTTP running inside an encrypted TLS channel. It provides three guarantees: <b>Confidentiality</b> (eavesdroppers cannot read traffic), <b>Integrity</b> (traffic cannot be tampered with), and <b>Authentication</b> (you are communicating with the genuine server).</p><p>However, HTTPS does <i>not</i> mean a website is trustworthy or ethical; it only means the connection between you and that server is secure. A malicious phishing site can have a valid HTTPS padlock.</p>`,
        keyIdea: "HTTPS guarantees confidentiality and authenticity with the server, not that the server is trustworthy."
      },
      predict: {
        q: "What causes a 'Mixed Content' warning on an HTTPS web page?",
        a: [
          "The HTTPS page attempts to load subresources (like an image or script) over insecure HTTP",
          "The website contains both English and Spanish text",
          "The server is running both Python and JavaScript code",
          "The user is using both Wi-Fi and Bluetooth simultaneously"
        ],
        c: 0,
        why: "Loading insecure HTTP subresources into an encrypted page destroys integrity and triggers mixed content blocks."
      },
      sec2: {
        title: "Defensive HTTPS headers",
        content: `<p>Learn the standard security headers that enforce modern HTTPS policies across browsers.</p>`,
      },
      diagram: {
        boxes: [
          { title: "HSTS Header", lines: ["Strict-Transport-Security: max-age=63072000", "forces browser to use HTTPS always"] },
          { title: "Upgrade Insecure", lines: ["Content-Security-Policy: upgrade-insecure-requests", "rewrites http:// to https:// automatically"] },
          { title: "Mixed Content Block", lines: ["active content (scripts) blocked immediately", "passive content (images) warned"] }
        ]
      },
      sec3: {
        title: "Tracing HSTS browser enforcement",
        content: `<p>Trace how a browser with an active HSTS cache automatically redirects HTTP to HTTPS internally.</p>`,
      },
      trace: {
        code: [
          "# User types: http://bank.com in browser address bar",
          "# Browser checks internal HSTS preload list",
          "# HSTS Match! Browser transforms URL internally to https://bank.com",
          "# Insecure plaintext HTTP packet is NEVER sent over the local network"
        ],
        steps: [
          { line: 0, vars: { user_input: "insecure http:// link clicked" } },
          { line: 1, vars: { hsts_cache: "domain matched max-age policy" } },
          { line: 2, vars: { internal_redirect: "redirect 307 internal synthetic" } },
          { line: 3, vars: { security: "connection launched over port 443 with zero plaintext exposure" } }
        ]
      },
      practiceIntro: "Test your memory of browser HTTPS security concepts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The header that forces browsers to only connect over HTTPS is <0>.",
          "Loading insecure HTTP resources inside an HTTPS page creates <1> content.",
          "The browser address bar icon signaling a valid TLS connection is the <2>."
        ],
        blanks: [
          { a: ["HSTS", "Strict-Transport-Security"], why: "HSTS prevents SSL-stripping downgrade attacks." },
          { a: ["mixed"], why: "Mixed content mixes secure HTTPS with insecure HTTP." },
          { a: ["padlock", "lock"], why: "The padlock icon confirms an authenticated, encrypted TLS session." }
        ]
      },
      win: "You can configure HSTS headers, eliminate mixed content vulnerabilities, and maintain bulletproof HTTPS security.",
      nextTasks: [
        "Audit your website using the free SSL Labs test (ssllabs.com/ssltest).",
        "Add the Strict-Transport-Security header to your web server configuration.",
        "Check browser DevTools Console for mixed content warnings."
      ],
      primarySource: "IETF RFC 6797: *HTTP Strict Transport Security (HSTS)*.",
      quiz: [
        {
          q: "What does the Strict-Transport-Security (HSTS) header prevent?",
          a: [
            "SSL-stripping downgrade attacks where an attacker forces connections to downgrade to plaintext HTTP",
            "Computers from running out of disk space",
            "Web browsers from displaying advertisements",
            "Server databases from experiencing SQL injection"
          ],
          c: 0,
          why: "HSTS instructs the browser to never connect over insecure HTTP, even if the user clicks an http:// link."
        },
        {
          q: "Does seeing a green padlock in the browser mean a website is safe from fraud or scams?",
          a: [
            "No, it only means traffic is encrypted with that server; criminals can easily obtain valid certificates",
            "Yes, Certificate Authorities verify that website owners are honest and ethical",
            "Yes, the padlock proves the company has government clearance",
            "Yes, fraudulent websites cannot obtain HTTPS certificates"
          ],
          c: 0,
          why: "Certificates verify domain control, not intent or business integrity; phishing sites use HTTPS too."
        },
        {
          q: "Why do modern web browsers completely block active mixed content (like scripts)?",
          a: [
            "An attacker on the network could tamper with the insecure script and hijack the entire encrypted page",
            "Insecure scripts use too much battery electricity",
            "Browsers charge a fee to execute insecure scripts",
            "Active mixed content breaks user keyboard shortcuts"
          ],
          c: 0,
          why: "Insecure JavaScript running in a secure DOM completely destroys all confidentiality and integrity guarantees."
        },
        {
          q: "What is HSTS Preloading?",
          a: [
            "Hardcoding a domain directly into browser source code so it is NEVER requested over HTTP from the very first visit",
            "Downloading all website images before the user opens the browser",
            "Pre-compiling JavaScript before running the browser",
            "Pre-registering domain names with ICANN for free"
          ],
          c: 0,
          why: "HSTS preloading protects even the very first connection attempt from being intercepted."
        }
      ]
    }
  ]
};
