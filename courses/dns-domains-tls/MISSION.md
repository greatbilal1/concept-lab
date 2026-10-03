# Mission — DNS, Domains & TLS

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
