/* ============================================================
   How the Internet Works — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "a-network-of-networks", file: "lessons/0001-a-network-of-networks.html", title: "A network of networks", topic: "The Physical & Network Layer", anim: "Globe" },
  { n: 2, id: "ip-addresses-and-subnets", file: "lessons/0002-ip-addresses-and-subnets.html", title: "IP addresses and subnets", topic: "The Physical & Network Layer", anim: "Globe" },
  { n: 3, id: "packets-and-packet-switching", file: "lessons/0003-packets-and-packet-switching.html", title: "Packets and packet switching", topic: "Packets & Routing", anim: "Globe" },
  { n: 4, id: "routing-and-hops-across-the-globe", file: "lessons/0004-routing-and-hops-across-the-globe.html", title: "Routing and hops across the globe", topic: "Packets & Routing", anim: "Globe" },
  { n: 5, id: "tcp-versus-udp", file: "lessons/0005-tcp-versus-udp.html", title: "TCP versus UDP", topic: "Transport Layer & Protocols", anim: "Globe" },
  { n: 6, id: "ports-and-sockets", file: "lessons/0006-ports-and-sockets.html", title: "Ports and sockets", topic: "Transport Layer & Protocols", anim: "Globe" },
  { n: 7, id: "the-client-server-model", file: "lessons/0007-the-client-server-model.html", title: "The client-server model", topic: "Global Infrastructure & Clients", anim: "Globe" },
  { n: 8, id: "the-physical-infrastructure", file: "lessons/0008-the-physical-infrastructure.html", title: "The physical infrastructure", topic: "Global Infrastructure & Clients", anim: "Globe" }
];

/* ============================================================
   How the Internet Works — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "network-layer", title: "The Physical & Network Layer",
    terms: [
      { term: "Internet Protocol", def: "The foundational layer-3 protocol defining addressing and packet routing across network boundaries.", lesson: 2, tags: ["protocols"] },
      { term: "IPv4", def: "A 32-bit numerical IP address format expressed as four dot-separated octets (e.g. 192.168.1.1).", lesson: 2, tags: ["networking"] },
      { term: "CIDR notation", def: "A compact notation (e.g. /24) indicating the count of leading bits used for the subnet network prefix.", lesson: 2, tags: ["addressing"] },
      { term: "Packet", def: "A formatted unit of network data containing a header with routing metadata and a data payload.", lesson: 3, tags: ["packets"] }
    ]
  },
  {
    id: "packet-switching", title: "Packets & Routing",
    terms: [
      { term: "Packet switching", def: "A communications method grouping data into independent packets routed dynamically across network links.", lesson: 3, tags: ["networking"] },
      { term: "Router", def: "A specialized network device that forwards data packets between disparate computer networks based on IP tables.", lesson: 4, tags: ["hardware"] },
      { term: "Latency", def: "The time elapsed for a data packet to travel from origin to destination across network hops.", lesson: 4, tags: ["performance"] },
      { term: "Traceroute", def: "A diagnostic tool reporting the list of intermediate router hops traversed by packets to reach a host.", lesson: 4, tags: ["tools"] }
    ]
  },
  {
    id: "transport-layer", title: "Transport Layer & Protocols",
    terms: [
      { term: "Transmission Control Protocol", def: "A connection-oriented transport protocol (TCP) guaranteeing in-order, error-checked delivery.", lesson: 5, tags: ["protocols"] },
      { term: "User Datagram Protocol", def: "A lightweight, connectionless transport protocol (UDP) prioritizing speed over guaranteed delivery.", lesson: 5, tags: ["protocols"] },
      { term: "Three-way handshake", def: "The SYN, SYN-ACK, ACK sequence used to establish a synchronized TCP connection.", lesson: 5, tags: ["tcp"] },
      { term: "Port", def: "A 16-bit numerical identifier (0–65535) multiplexing multiple network services on a single IP address.", lesson: 6, tags: ["transport"] }
    ]
  },
  {
    id: "global-mesh", title: "Global Infrastructure & Clients",
    terms: [
      { term: "Socket", def: "The programmatic endpoint of a bidirectional communication channel defined by an IP and port pair.", lesson: 6, tags: ["sockets"] },
      { term: "NAT", def: "Network Address Translation: mapping multiple private local IP addresses to a single public IP address.", lesson: 7, tags: ["networking"] },
      { term: "Submarine cable", def: "Undersea fiber optic cables laid across ocean floors carrying global internet data between continents.", lesson: 8, tags: ["infrastructure"] },
      { term: "Internet Exchange Point", def: "A physical data center (IXP) where autonomous ISPs connect to exchange routing traffic directly.", lesson: 8, tags: ["infrastructure"] }
    ]
  }
];
