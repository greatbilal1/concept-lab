/* ============================================================
   MCP & Tool-Connected AI Systems — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-m-times-n-integration-problem", file: "lessons/0001-the-m-times-n-integration-problem.html", title: "The M*N Integration Problem: Why AI Needed a Standard Protocol", topic: "The Problem", anim: "Generic" },
  { n: 2, id: "mcp-client-server-architecture", file: "lessons/0002-mcp-client-server-architecture.html", title: "Architecture of the Model Context Protocol (MCP)", topic: "MCP Architecture", anim: "Generic" },
  { n: 3, id: "mcp-core-primitives-resources-prompts-tools", file: "lessons/0003-mcp-core-primitives-resources-prompts-tools.html", title: "MCP Core Primitives: Resources, Prompts, and Tools", topic: "Core Primitives", anim: "Generic" },
  { n: 4, id: "building-your-first-mcp-server", file: "lessons/0004-building-your-first-mcp-server.html", title: "Building Your First MCP Server (FastMCP / Node.js)", topic: "Server Development", anim: "Generic" },
  { n: 5, id: "connecting-mcp-clients-configuration", file: "lessons/0005-connecting-mcp-clients-configuration.html", title: "Connecting MCP Clients (Claude Desktop, Cursor, Copilot)", topic: "Client Config", anim: "Generic" },
  { n: 6, id: "transport-layers-stdio-vs-sse", file: "lessons/0006-transport-layers-stdio-vs-sse.html", title: "Transport Layers: stdio vs Server-Sent Events (SSE)", topic: "Transports", anim: "Generic" },
  { n: 7, id: "mcp-security-authentication-permissions", file: "lessons/0007-mcp-security-authentication-permissions.html", title: "Security, Authentication, and Permission Scoping in MCP", topic: "MCP Security", anim: "Generic" },
  { n: 8, id: "composing-modular-ai-infrastructure", file: "lessons/0008-composing-modular-ai-infrastructure.html", title: "The MCP Ecosystem: Composing Modular AI Infrastructures", topic: "Ecosystem & Composition", anim: "Generic" }
];

/* ============================================================
   MCP & Tool-Connected AI Systems — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "problem", title: "The Protocol & Handshake",
    terms: [
      { term: "Model Context Protocol", def: "An open standard protocol enabling AI applications to securely connect to external tools and data sources.", lesson: 1, tags: ["mcp","protocols"] },
      { term: "M*N Problem", def: "The exponential integration explosion occurring when M distinct clients must connect to N distinct tools with custom glue code.", lesson: 1, tags: ["architecture","standards"] },
      { term: "JSON-RPC 2.0", def: "A remote procedure call protocol encoding requests, responses, and errors in lightweight JSON envelopes.", lesson: 2, tags: ["protocols","json"] }
    ]
  },
  {
    id: "primitives", title: "Core Primitives",
    terms: [
      { term: "Resource", def: "A passive, read-only data entity (file, database row) addressed by a URI and exposed by an MCP server.", lesson: 3, tags: ["mcp","resources"] },
      { term: "Tool", def: "An executable function with JSON Schema parameters that can perform computation or cause real-world side effects.", lesson: 3, tags: ["mcp","tools"] },
      { term: "Prompt Primitive", def: "A pre-engineered slash-command template exposed by an MCP server to guide common user workflows.", lesson: 3, tags: ["mcp","prompts"] }
    ]
  },
  {
    id: "transports", title: "Transports & Development",
    terms: [
      { term: "stdio Transport", def: "An inter-process transport communicating over standard input and output pipes between client and child process.", lesson: 4, tags: ["transports","stdio"] },
      { term: "SSE Transport", def: "A networked transport using Server-Sent Events over HTTP for remote, distributed MCP server deployments.", lesson: 6, tags: ["transports","http"] },
      { term: "FastMCP", def: "A high-level Python library that compiles standard functions and docstrings into an MCP server automatically.", lesson: 4, tags: ["tools","python"] }
    ]
  },
  {
    id: "governance", title: "Security & Architecture",
    terms: [
      { term: "Root Scoping", def: "Constraining an MCP filesystem server strictly to declared directory boundaries to prevent path traversal attacks.", lesson: 7, tags: ["security","filesystem"] },
      { term: "Client Confirmation", def: "A security dialog prompting human authorization before an MCP client executes a server tool action.", lesson: 7, tags: ["security","governance"] },
      { term: "MCP Host", def: "The user-facing AI application (Claude Desktop, Cursor, Copilot) that orchestrates models and connects to MCP servers.", lesson: 2, tags: ["architecture","clients"] }
    ]
  }
];
