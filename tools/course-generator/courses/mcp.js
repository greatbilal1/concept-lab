"use strict";

module.exports = {
  "id": "mcp",
  "title": "MCP & Tool-Connected AI Systems",
  "num": 80,
  "emoji": "🔌",
  "desc": "A standard protocol for exposing tools and data to models — servers, clients, resources and prompts.",
  "topics": [
    "MCP",
    "Model Context Protocol",
    "JSON-RPC 2.0",
    "Resources",
    "Prompts",
    "Tools",
    "FastMCP",
    "Client Config",
    "stdio vs SSE",
    "MCP Security"
  ],
  "mission": "# Mission — MCP & Tool-Connected AI Systems\n\nMaster the open standard connecting AI models to tools and enterprise data. Understand the M*N integration crisis, explore the JSON-RPC 2.0 client-host-server architecture, master the three core primitives (Resources, Prompts, Tools), author servers using FastMCP in Python, connect desktop clients (Claude, Cursor), navigate stdio vs SSE transports, enforce root scoping and least-privilege security, and compose modular multi-server AI platforms.",
  "notes": "# Notes — MCP & Tool-Connected AI Systems\n\nMCP is the Language Server Protocol (LSP) of the AI era. Decouple data and tools from specific model vendors using open, standardized protocol interfaces.",
  "resources": "# Resources — MCP & Tool-Connected AI Systems\n\n- Anthropic, *Model Context Protocol Specification (modelcontextprotocol.io)*\n- FastMCP Python Library (github.com/jlowin/fastmcp)\n- Model Context Protocol Official Servers Repository (github.com/modelcontextprotocol/servers)",
  "glossaryGroups": [
    {
      "id": "problem",
      "title": "The Protocol & Handshake",
      "terms": [
        {
          "term": "Model Context Protocol",
          "def": "An open standard protocol enabling AI applications to securely connect to external tools and data sources.",
          "lesson": 1,
          "tags": [
            "mcp",
            "protocols"
          ]
        },
        {
          "term": "M*N Problem",
          "def": "The exponential integration explosion occurring when M distinct clients must connect to N distinct tools with custom glue code.",
          "lesson": 1,
          "tags": [
            "architecture",
            "standards"
          ]
        },
        {
          "term": "JSON-RPC 2.0",
          "def": "A remote procedure call protocol encoding requests, responses, and errors in lightweight JSON envelopes.",
          "lesson": 2,
          "tags": [
            "protocols",
            "json"
          ]
        }
      ]
    },
    {
      "id": "primitives",
      "title": "Core Primitives",
      "terms": [
        {
          "term": "Resource",
          "def": "A passive, read-only data entity (file, database row) addressed by a URI and exposed by an MCP server.",
          "lesson": 3,
          "tags": [
            "mcp",
            "resources"
          ]
        },
        {
          "term": "Tool",
          "def": "An executable function with JSON Schema parameters that can perform computation or cause real-world side effects.",
          "lesson": 3,
          "tags": [
            "mcp",
            "tools"
          ]
        },
        {
          "term": "Prompt Primitive",
          "def": "A pre-engineered slash-command template exposed by an MCP server to guide common user workflows.",
          "lesson": 3,
          "tags": [
            "mcp",
            "prompts"
          ]
        }
      ]
    },
    {
      "id": "transports",
      "title": "Transports & Development",
      "terms": [
        {
          "term": "stdio Transport",
          "def": "An inter-process transport communicating over standard input and output pipes between client and child process.",
          "lesson": 4,
          "tags": [
            "transports",
            "stdio"
          ]
        },
        {
          "term": "SSE Transport",
          "def": "A networked transport using Server-Sent Events over HTTP for remote, distributed MCP server deployments.",
          "lesson": 6,
          "tags": [
            "transports",
            "http"
          ]
        },
        {
          "term": "FastMCP",
          "def": "A high-level Python library that compiles standard functions and docstrings into an MCP server automatically.",
          "lesson": 4,
          "tags": [
            "tools",
            "python"
          ]
        }
      ]
    },
    {
      "id": "governance",
      "title": "Security & Architecture",
      "terms": [
        {
          "term": "Root Scoping",
          "def": "Constraining an MCP filesystem server strictly to declared directory boundaries to prevent path traversal attacks.",
          "lesson": 7,
          "tags": [
            "security",
            "filesystem"
          ]
        },
        {
          "term": "Client Confirmation",
          "def": "A security dialog prompting human authorization before an MCP client executes a server tool action.",
          "lesson": 7,
          "tags": [
            "security",
            "governance"
          ]
        },
        {
          "term": "MCP Host",
          "def": "The user-facing AI application (Claude Desktop, Cursor, Copilot) that orchestrates models and connects to MCP servers.",
          "lesson": 2,
          "tags": [
            "architecture",
            "clients"
          ]
        }
      ]
    }
  ],
  "cheatsheetSections": [
    {
      "title": "Minimal FastMCP Server (Python)",
      "label": "Instant local tool server",
      "code": "from mcp.server.fastmcp import FastMCP\n\nmcp = FastMCP(\"MyTools\")\n\n@mcp.tool()\ndef fetch_weather(city: str) -> str:\n    \"\"\"Get current weather conditions for a city.\"\"\"\n    return f\"Weather in {city}: 22C, Sunny\"\n\nif __name__ == \"__main__\":\n    mcp.run(transport=\"stdio\")",
      "lessonN": 4,
      "lessonSlug": "building-your-first-mcp-server",
      "lessonTitle": "Building Your First MCP Server (FastMCP / Node.js)"
    },
    {
      "title": "Claude Desktop Client Configuration",
      "label": "claude_desktop_config.json setup",
      "code": "{\n  \"mcpServers\": {\n    \"my-tools\": {\n      \"command\": \"/Users/alice/.venv/bin/python\",\n      \"args\": [\"/Users/alice/projects/server.py\"],\n      \"env\": {\"API_KEY\": \"secret_value\"}\n    }\n  }\n}",
      "lessonN": 5,
      "lessonSlug": "connecting-mcp-clients-configuration",
      "lessonTitle": "Connecting MCP Clients (Claude Desktop, Cursor, Copilot)"
    },
    {
      "title": "Testing with MCP Inspector",
      "label": "Local browser testing harness",
      "code": "# Run official inspector to debug your server over stdio:\nnpx @modelcontextprotocol/inspector python /path/to/server.py\n# Opens interactive UI on http://localhost:5173",
      "lessonN": 4,
      "lessonSlug": "building-your-first-mcp-server",
      "lessonTitle": "Building Your First MCP Server (FastMCP / Node.js)"
    },
    {
      "title": "Filesystem Root Scoping Check",
      "label": "Path traversal defense",
      "code": "def check_root_security(requested_path, allowed_root):\n    real_path = os.path.realpath(requested_path)\n    if not real_path.startswith(os.path.realpath(allowed_root)):\n        raise PermissionError('Access denied: Outside allowed root!')",
      "lessonN": 7,
      "lessonSlug": "mcp-security-authentication-permissions",
      "lessonTitle": "Security, Authentication, and Permission Scoping in MCP"
    }
  ],
  "lessons": [
    {
      "n": 1,
      "id": "the-m-times-n-integration-problem",
      "title": "The M*N Integration Problem: Why AI Needed a Standard Protocol",
      "topic": "The Problem",
      "anim": "Generic",
      "lede": "Why the AI industry faced an integration crisis: connecting M models to N enterprise data sources without bespoke glue code.",
      "winShort": "You understand the integration problem and why MCP has become the universal standard for AI tools.",
      "missionLink": "Mastering the m*n integration problem: why ai needed a standard protocol across modern software engineering",
      "sec1": {
        "title": "Core principles of The M*N Integration Problem: Why AI Needed a Standard Protocol",
        "content": "<p>Before 2024, the AI industry was trapped in an exponential integration nightmare. If you had 5 AI assistants (ChatGPT, Claude Desktop, Cursor, VS Code Copilot, local Ollama) and you wanted them to access 10 enterprise data sources (PostgreSQL, GitHub, Slack, Jira, local files), developers had to build <strong>$5 \\times 10 = 50$ custom integrations</strong>!</p>",
        "keyIdea": "Why the AI industry faced an integration crisis: connecting M models to N enterprise data sources without bespoke glue code."
      },
      "predict": {
        "q": "What was the 'M*N integration problem' in AI tool and data integration before MCP?",
        "a": [
          "Every AI client had to build custom, bespoke integrations for every single database, SaaS tool, and API separately (M clients * N tools)",
          "Models could not multiply numbers",
          "Computer screens could not display M colors",
          "Network bandwidth was too low"
        ],
        "c": 0,
        "why": "Without an open standard, connecting M clients to N tools required M*N custom integrations; a standard protocol reduces this to M+N.",
        "prompt": "What was the 'M*N integration problem' in AI tool and data integration before MCP?",
        "options": [
          "Every AI client had to build custom, bespoke integrations for every single database, SaaS tool, and API separately (M clients * N tools)",
          "Models could not multiply numbers",
          "Computer screens could not display M colors",
          "Network bandwidth was too low"
        ],
        "answer": 0,
        "explanation": "Without an open standard, connecting M clients to N tools required M*N custom integrations; a standard protocol reduces this to M+N."
      },
      "sec2": {
        "title": "The M*N Integration Crisis",
        "content": "<p>Every AI provider invented their own proprietary tool schema format. If a database company built an integration for OpenAI, it didn't work in Claude or Cursor without being rewritten.</p>"
      },
      "diagram": {
        "title": "The M*N Integration Crisis",
        "caption": "Fragile custom adapters vs standardized protocol",
        "steps": [
          {
            "title": "M * N Chaos (Before MCP)",
            "lines": [
              "Every client builds custom connectors",
              "5 clients x 10 tools = 50 custom adapters",
              "Fragile, high maintenance, zero interoperability"
            ]
          },
          {
            "title": "M + N Standard (With MCP)",
            "lines": [
              "Universal Model Context Protocol",
              "Write 1 server -> Works in ALL clients instantly",
              "Standardized like HTTP and LSP"
            ]
          }
        ],
        "boxes": [
          {
            "title": "M * N Chaos (Before MCP)",
            "lines": [
              "Every client builds custom connectors",
              "5 clients x 10 tools = 50 custom adapters",
              "Fragile, high maintenance, zero interoperability"
            ]
          },
          {
            "title": "M + N Standard (With MCP)",
            "lines": [
              "Universal Model Context Protocol",
              "Write 1 server -> Works in ALL clients instantly",
              "Standardized like HTTP and LSP"
            ]
          }
        ]
      },
      "sec3": {
        "title": "The LSP Analogy",
        "content": "<p>In November 2024, Anthropic open-sourced the <strong>Model Context Protocol (MCP)</strong> to solve this crisis:</p><ul><li><strong>The Open Standard:</strong> MCP is an open standard protocol (like HTTP or LSP) that standardizes how AI applications connect to external data sources and tools.</li><li><strong>From $M \\times N$ to $M + N$:</strong> A tool author builds an <strong>MCP Server</strong> once (e.g. `postgres-mcp`). It instantly works across every compliant <strong>MCP Client</strong> (Claude Desktop, Cursor, Copilot, Zed)!</li><li><strong>Universal Interoperability:</strong> Just as the Language Server Protocol (LSP) revolutionized IDE language support, MCP standardizes AI context and tool connectivity.</li></ul><pre><code># The M*N vs M+N Architectural Transformation:\n# BEFORE MCP (M * N Chaos):\n#   Client 1 -> [Custom Glue Code] -> PostgreSQL\n#   Client 2 -> [Custom Glue Code] -> PostgreSQL\n#   Client 1 -> [Custom Glue Code] -> GitHub\n#   Client 2 -> [Custom Glue Code] -> GitHub (50 fragile custom adapters!)\n#\n# AFTER MCP (M + N Clean Protocol):\n#   All Clients (Claude, Cursor, Copilot) speak MCP Client Protocol\n#   All Tools (PostgreSQL, GitHub, Slack) speak MCP Server Protocol\n#   Zero bespoke glue code required!</code></pre><div class=\"callout\"><p><strong>The Industry Standard:</strong> MCP is supported by Anthropic, GitHub, Zed, Sourcegraph, and a vast open-source ecosystem, establishing itself as the universal standard for tool-connected AI.</p></div>"
      },
      "trace": {
        "title": "The LSP Analogy",
        "caption": "How open protocols transform software",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The M*N Integration Problem: Why AI Needed a Standard Protocol"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Language Server Protocol (LSP)"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Model Context Protocol (MCP)"
            }
          }
        ],
        "code": [
          "# Tracing The M*N Integration Problem: Why AI Needed a Standard Protocol",
          "def execute_flow():",
          "    # Why the AI industry faced an integration crisis: c...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the MCP problem sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "The Model Context Protocol solves the M*N integration crisis by establishing an open standard connecting AI {1} to data {2} without custom glue code."
        ],
        "blanks": [
          {
            "a": [
              "clients"
            ],
            "why": "AI interfaces like Claude Desktop or Cursor"
          },
          {
            "a": [
              "servers"
            ],
            "why": "External tool and data providers"
          }
        ]
      },
      "win": "You understand the integration problem and why MCP has become the universal standard for AI tools.",
      "nextTasks": [
        "Audit your project code and identify where the m*n integration problem: why ai needed a standard protocol applies.",
        "Author a unit test or verification script exercising the m*n integration problem: why ai needed a standard protocol.",
        "Document team architectural conventions regarding the m*n integration problem: why ai needed a standard protocol."
      ],
      "primarySource": "Industry standards and best practices for The M*N Integration Problem: Why AI Needed a Standard Protocol.",
      "quiz": [
        {
          "q": "What open protocol from software engineering inspired the architectural philosophy of MCP?",
          "a": [
            "Language Server Protocol (LSP), which standardized compiler tooling across text editors",
            "FTP file transfer protocol",
            "Bluetooth audio protocol",
            "SMTP email protocol"
          ],
          "c": 0,
          "why": "LSP standardized editor-to-language communication; MCP standardizes client-to-tool communication."
        },
        {
          "q": "What happens when an engineer builds an MCP Server for an internal database?",
          "a": [
            "Any MCP-compliant client (Claude, Cursor, Copilot, CLI agents) can connect to and query that database immediately",
            "The database is deleted",
            "The database becomes public to the internet",
            "The server runs only on Windows"
          ],
          "c": 0,
          "why": "Protocol compliance guarantees instant plug-and-play interoperability across all clients."
        },
        {
          "q": "Who originally created and open-sourced the Model Context Protocol in late 2024?",
          "a": [
            "Anthropic",
            "Microsoft",
            "Google",
            "Oracle"
          ],
          "c": 0,
          "why": "Anthropic open-sourced the specification and SDKs in November 2024 to establish an industry standard."
        },
        {
          "q": "Why is an open protocol superior to proprietary plugin stores for tool integration?",
          "a": [
            "It prevents vendor lock-in, enables private on-premise tools, and ensures tools work across diverse competing AI interfaces",
            "Plugins are illegal",
            "Protocols use zero electricity",
            "Open protocols cannot be inspected"
          ],
          "c": 0,
          "why": "Open protocols foster open ecosystems without platform gatekeepers or vendor lock-in."
        }
      ],
      "next": {
        "title": "Architecture of the Model Context Protocol (MCP)",
        "desc": "Explore the client-server architecture, JSON-RPC 2.0, and message flow."
      }
    },
    {
      "n": 2,
      "id": "mcp-client-server-architecture",
      "title": "Architecture of the Model Context Protocol (MCP)",
      "topic": "MCP Architecture",
      "anim": "Generic",
      "lede": "Inside MCP: Client-Host-Server architecture, JSON-RPC 2.0 communication, and capability negotiation.",
      "winShort": "You understand the client-host-server architecture and JSON-RPC protocol of MCP.",
      "missionLink": "Mastering architecture of the model context protocol (mcp) across modern software engineering",
      "sec1": {
        "title": "Core principles of Architecture of the Model Context Protocol (MCP)",
        "content": "<p>The Model Context Protocol is built on a clean, decoupled <strong>Client-Server Architecture</strong> using the established <strong>JSON-RPC 2.0</strong> specification for bi-directional message exchange.</p>",
        "keyIdea": "Inside MCP: Client-Host-Server architecture, JSON-RPC 2.0 communication, and capability negotiation."
      },
      "predict": {
        "q": "What standard messaging protocol powers the communication between MCP Clients and MCP Servers?",
        "a": [
          "JSON-RPC 2.0",
          "SOAP XML",
          "Binary Protobuf",
          "Raw plain text without format"
        ],
        "c": 0,
        "why": "MCP uses JSON-RPC 2.0 as its foundational transport format for requests, responses, and notifications.",
        "prompt": "What standard messaging protocol powers the communication between MCP Clients and MCP Servers?",
        "options": [
          "JSON-RPC 2.0",
          "SOAP XML",
          "Binary Protobuf",
          "Raw plain text without format"
        ],
        "answer": 0,
        "explanation": "MCP uses JSON-RPC 2.0 as its foundational transport format for requests, responses, and notifications."
      },
      "sec2": {
        "title": "The MCP Architecture Triad",
        "content": "<p>The three core participants in an MCP system:</p>"
      },
      "diagram": {
        "title": "The MCP Architecture Triad",
        "caption": "Host, Client, and Server separation",
        "steps": [
          {
            "title": "1. MCP Host (Application)",
            "lines": [
              "Claude Desktop, Cursor, Copilot",
              "Coordinates LLM reasoning & UI"
            ]
          },
          {
            "title": "2. MCP Client (Adapter)",
            "lines": [
              "Internal protocol client",
              "Connects to servers via stdio / SSE"
            ]
          },
          {
            "title": "3. MCP Server (Data & Tools)",
            "lines": [
              "Exposes PostgreSQL, GitHub, Filesystem",
              "Lightweight program, zero LLM needed!"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. MCP Host (Application)",
            "lines": [
              "Claude Desktop, Cursor, Copilot",
              "Coordinates LLM reasoning & UI"
            ]
          },
          {
            "title": "2. MCP Client (Adapter)",
            "lines": [
              "Internal protocol client",
              "Connects to servers via stdio / SSE"
            ]
          },
          {
            "title": "3. MCP Server (Data & Tools)",
            "lines": [
              "Exposes PostgreSQL, GitHub, Filesystem",
              "Lightweight program, zero LLM needed!"
            ]
          }
        ]
      },
      "sec3": {
        "title": "JSON-RPC 2.0 Message Structure",
        "content": "<ul><li><strong>1. The MCP Host (The AI Application):</strong> The user-facing program (e.g. Claude Desktop, Cursor, VS Code, or an autonomous CLI agent) that orchestrates language models and UI interactions.</li><li><strong>2. The MCP Client:</strong> A protocol adapter living inside the Host that establishes 1-to-1 connections with individual MCP servers, handles capability negotiation, and manages security permissions.</li><li><strong>3. The MCP Server:</strong> A lightweight program that exposes external data, local files, or tools. It does not run an LLM; it is an ordinary software service that speaks JSON-RPC!</li></ul><pre><code># The MCP JSON-RPC 2.0 Handshake (Client -> Server):\n# Request:\n{\n  \"jsonrpc\": \"2.0\",\n  \"id\": 1,\n  \"method\": \"initialize\",\n  \"params\": {\n    \"protocolVersion\": \"2024-11-05\",\n    \"capabilities\": {\"roots\": {\"listChanged\": true}},\n    \"clientInfo\": {\"name\": \"ClaudeDesktop\", \"version\": \"1.0.0\"}\n  }\n}\n# Server responds with its declared capabilities: [tools, resources, prompts]!</code></pre><p>During the <code>initialize</code> handshake, the client and server negotiate protocol versions and capabilities, establishing a secure, standardized communication channel.</p><div class=\"callout\"><p><strong>The Independence Seam:</strong> An MCP server does not need an internet connection or an API key; it can run locally on your laptop communicating via standard I/O (stdio).</p></div>"
      },
      "trace": {
        "title": "JSON-RPC 2.0 Message Structure",
        "caption": "Standardized request and response envelopes",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Architecture of the Model Context Protocol (MCP)"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Request Envelope"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Response Envelope"
            }
          }
        ],
        "code": [
          "# Tracing Architecture of the Model Context Protocol (MCP)",
          "def execute_flow():",
          "    # Inside MCP: Client-Host-Server architecture, JSON-...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the MCP architecture sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "MCP uses {1} message envelopes over a client-server architecture where lightweight servers expose tools to AI host {2}."
        ],
        "blanks": [
          {
            "a": [
              "JSON-RPC 2.0"
            ],
            "why": "Standardized remote procedure call format"
          },
          {
            "a": [
              "applications"
            ],
            "why": "Clients like Claude Desktop or Cursor"
          }
        ]
      },
      "win": "You understand the client-host-server architecture and JSON-RPC protocol of MCP.",
      "nextTasks": [
        "Audit your project code and identify where architecture of the model context protocol (mcp) applies.",
        "Author a unit test or verification script exercising architecture of the model context protocol (mcp).",
        "Document team architectural conventions regarding architecture of the model context protocol (mcp)."
      ],
      "primarySource": "Industry standards and best practices for Architecture of the Model Context Protocol (MCP).",
      "quiz": [
        {
          "q": "Does an MCP Server contain a Large Language Model inside it?",
          "a": [
            "No; an MCP Server is a standard software program that exposes tools and data; the LLM lives in the client host application",
            "Yes; every MCP server has a 70B model inside",
            "Yes; an MCP server is an AI model",
            "It only contains neural networks"
          ],
          "c": 0,
          "why": "MCP servers are deterministic software programs that provide data and actions to external models."
        },
        {
          "q": "What is the purpose of the 'initialize' method in the MCP specification?",
          "a": [
            "To establish protocol version parity, negotiate supported capabilities, and exchange client/server metadata",
            "To format the hard drive",
            "To start training an LLM",
            "To buy cloud credits"
          ],
          "c": 0,
          "why": "Initialization negotiates capabilities and protocol versions between client and server."
        },
        {
          "q": "Can a single MCP Host connect to multiple MCP Servers simultaneously?",
          "a": [
            "Yes; an application like Claude Desktop can connect to dozens of independent MCP servers (GitHub, Postgres, Slack) concurrently",
            "No; only 1 server connection is permitted",
            "Only on Linux",
            "Only if servers share code"
          ],
          "c": 0,
          "why": "MCP clients aggregate tools and resources across multiple independent servers simultaneously."
        },
        {
          "q": "What happens if an MCP Server crashes while handling a request?",
          "a": [
            "The client receives a connection error or process exit signal and can restart the server or report failure to the user",
            "The host computer shuts down",
            "The database is deleted",
            "The internet disconnects"
          ],
          "c": 0,
          "why": "Client-server isolation prevents server crashes from crashing the host application."
        }
      ],
      "next": {
        "title": "MCP Core Primitives: Resources, Prompts, and Tools",
        "desc": "Master the three core primitives that MCP servers expose."
      }
    },
    {
      "n": 3,
      "id": "mcp-core-primitives-resources-prompts-tools",
      "title": "MCP Core Primitives: Resources, Prompts, and Tools",
      "topic": "Core Primitives",
      "anim": "Generic",
      "lede": "The three foundational MCP primitives: Resources (passive data), Prompts (templates), and Tools (executable actions).",
      "winShort": "You understand the three core primitives of the Model Context Protocol: Resources, Prompts, and Tools.",
      "missionLink": "Mastering mcp core primitives: resources, prompts, and tools across modern software engineering",
      "sec1": {
        "title": "Core principles of MCP Core Primitives: Resources, Prompts, and Tools",
        "content": "<p>The Model Context Protocol categorizes everything an AI might need into three clear, foundational <strong>Primitives</strong>:</p>",
        "keyIdea": "The three foundational MCP primitives: Resources (passive data), Prompts (templates), and Tools (executable actions)."
      },
      "predict": {
        "q": "What is the difference between an MCP 'Resource' and an MCP 'Tool'?",
        "a": [
          "A Resource is passive read-only data (like a file or database row); a Tool is an executable action that can take arguments and alter state",
          "A Resource is a piece of hardware; a Tool is software",
          "Resources are only for images; Tools are only for text",
          "There is no difference"
        ],
        "c": 0,
        "why": "Resources provide passive read-only context (like GET); Tools provide executable actions with side effects (like POST).",
        "prompt": "What is the difference between an MCP 'Resource' and an MCP 'Tool'?",
        "options": [
          "A Resource is passive read-only data (like a file or database row); a Tool is an executable action that can take arguments and alter state",
          "A Resource is a piece of hardware; a Tool is software",
          "Resources are only for images; Tools are only for text",
          "There is no difference"
        ],
        "answer": 0,
        "explanation": "Resources provide passive read-only context (like GET); Tools provide executable actions with side effects (like POST)."
      },
      "sec2": {
        "title": "The Three MCP Primitives",
        "content": "<ul><li><strong>1. Resources (Passive Context - Like GET):</strong> Data that the model or user can read into context. Identified by standardized URIs: <code>file:///workspace/src/auth.py</code>, <code>postgres://db/users/schema</code>. Resources are safe, read-only data representations (text, JSON, or binary data like images).</li><li><strong>2. Tools (Executable Actions - Like POST):</strong> Functions that the model can invoke to perform computation, execute commands, or cause real-world side effects: `create_pull_request`, `restart_server`, `execute_query`. Tools take JSON Schema arguments and return results.</li><li><strong>3. Prompts (Reusable Workflows):</strong> Pre-engineered prompt templates with arguments exposed by the server for users to trigger common workflows (e.g. <em>'Review Pull Request'</em>, <em>'Debug Database Slow Query'</em>).</li></ul>"
      },
      "diagram": {
        "title": "The Three MCP Primitives",
        "caption": "Resources vs Prompts vs Tools",
        "steps": [
          {
            "title": "1. Resources (Passive Data)",
            "lines": [
              "Identified by URIs (postgres://, file://)",
              "Read-only context, zero side effects",
              "Equivalent to HTTP GET"
            ]
          },
          {
            "title": "2. Tools (Active Actions)",
            "lines": [
              "Executable functions with arguments",
              "Can alter state, execute commands, write DB",
              "Equivalent to HTTP POST"
            ]
          },
          {
            "title": "3. Prompts (Templates)",
            "lines": [
              "Pre-engineered user slash-commands",
              "Workflows packaged by server author"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Resources (Passive Data)",
            "lines": [
              "Identified by URIs (postgres://, file://)",
              "Read-only context, zero side effects",
              "Equivalent to HTTP GET"
            ]
          },
          {
            "title": "2. Tools (Active Actions)",
            "lines": [
              "Executable functions with arguments",
              "Can alter state, execute commands, write DB",
              "Equivalent to HTTP POST"
            ]
          },
          {
            "title": "3. Prompts (Templates)",
            "lines": [
              "Pre-engineered user slash-commands",
              "Workflows packaged by server author"
            ]
          }
        ]
      },
      "sec3": {
        "title": "URI Addressing for Resources",
        "content": "<pre><code># The Three MCP Primitives in JSON-RPC:\n# 1. Resource:  resources/read  -> uri: \"postgres://tables/users/schema\"\n#    Output:    Raw SQL DDL text (Passive read-only context)\n#\n# 2. Tool:      tools/call      -> name: \"execute_sql_query\", args: {\"query\": \"SELECT 1\"}\n#    Output:    JSON query results (Executable computational action)\n#\n# 3. Prompt:    prompts/get     -> name: \"audit_security\", args: {\"target\": \"auth.py\"}\n#    Output:    Pre-engineered system prompt + user instructions</code></pre><div class=\"callout\"><p><strong>The REST Analogy:</strong> Think of <strong>Resources</strong> as GET endpoints (idempotent, safe), and <strong>Tools</strong> as POST/DELETE endpoints (mutating, executable).</p></div>"
      },
      "trace": {
        "title": "URI Addressing for Resources",
        "caption": "Standardized data locators",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "MCP Core Primitives: Resources, Prompts, and Tools"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "File Resource"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Database Resource"
            }
          }
        ],
        "code": [
          "# Tracing MCP Core Primitives: Resources, Prompts, and Tools",
          "def execute_flow():",
          "    # The three foundational MCP primitives: Resources (...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the MCP primitives sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "MCP servers expose three primitives: passive read-only {1}, interactive workflow {2}, and executable action {3}."
        ],
        "blanks": [
          {
            "a": [
              "resources"
            ],
            "why": "URI-addressable passive data"
          },
          {
            "a": [
              "prompts"
            ],
            "why": "Reusable templates and workflows"
          },
          {
            "a": [
              "tools"
            ],
            "why": "Executable functions with side effects"
          }
        ]
      },
      "win": "You understand the three core primitives of the Model Context Protocol: Resources, Prompts, and Tools.",
      "nextTasks": [
        "Audit your project code and identify where mcp core primitives: resources, prompts, and tools applies.",
        "Author a unit test or verification script exercising mcp core primitives: resources, prompts, and tools.",
        "Document team architectural conventions regarding mcp core primitives: resources, prompts, and tools."
      ],
      "primarySource": "Industry standards and best practices for MCP Core Primitives: Resources, Prompts, and Tools.",
      "quiz": [
        {
          "q": "What format is used to identify and address MCP Resources?",
          "a": [
            "Standardized URIs with schemes like file:///, postgres://, or git://",
            "Phone numbers",
            "Postal addresses",
            "IPv4 addresses only"
          ],
          "c": 0,
          "why": "MCP uses URI strings to locate and identify passive resources uniformly."
        },
        {
          "q": "Can an MCP Resource be updated dynamically by the server when underlying data changes?",
          "a": [
            "Yes; servers can send a 'notifications/resources/updated' event to notify the client that resource data changed",
            "No; resources are frozen forever",
            "Only in Python 2",
            "Only on Sundays"
          ],
          "c": 0,
          "why": "MCP supports push notifications to alert clients when underlying resources mutate."
        },
        {
          "q": "What is an MCP 'Prompt' primitive used for in applications like Claude Desktop?",
          "a": [
            "Exposing pre-built slash-command templates (e.g. /review-pr) that guide users through common multi-step tasks",
            "Setting the computer volume",
            "Printing documents",
            "Changing the screen resolution"
          ],
          "c": 0,
          "why": "Prompts allow servers to package recommended instructions and workflows for users."
        },
        {
          "q": "Why does separating Resources from Tools improve security?",
          "a": [
            "Clients know that reading a Resource is safe and read-only, while executing a Tool may have state-mutating side effects",
            "It makes Python run faster",
            "It encrypts the hard drive",
            "Tools use no memory"
          ],
          "c": 0,
          "why": "Separating passive context from active execution allows enforcing different security policies on tools."
        }
      ],
      "next": {
        "title": "Building Your First MCP Server (FastMCP / Node.js)",
        "desc": "Write a working MCP server using FastMCP or the TypeScript SDK."
      }
    },
    {
      "n": 4,
      "id": "building-your-first-mcp-server",
      "title": "Building Your First MCP Server (FastMCP / Node.js)",
      "topic": "Server Development",
      "anim": "Generic",
      "lede": "Authoring an MCP server from scratch: using FastMCP in Python, defining tools, handling arguments, and stdio execution.",
      "winShort": "You know how to author and run a functional MCP server using FastMCP.",
      "missionLink": "Mastering building your first mcp server (fastmcp / node.js) across modern software engineering",
      "sec1": {
        "title": "Core principles of Building Your First MCP Server (FastMCP / Node.js)",
        "content": "<p>Writing raw JSON-RPC string parsers by hand is tedious. The developer ecosystem created <strong>FastMCP</strong> (in Python) and the official <strong>@modelcontextprotocol/sdk</strong> (in TypeScript), making server development feel like writing a standard web API.</p>",
        "keyIdea": "Authoring an MCP server from scratch: using FastMCP in Python, defining tools, handling arguments, and stdio execution."
      },
      "predict": {
        "q": "How does FastMCP (in Python) turn a standard Python function into an MCP-compliant tool?",
        "a": [
          "Using the @mcp.tool() decorator, which automatically extracts docstrings and parameter type hints into an MCP tool schema",
          "By converting Python into C++",
          "By registering the function with Google",
          "By compiling the script into a binary executable"
        ],
        "c": 0,
        "why": "FastMCP uses function decorators and type hints to generate MCP schemas automatically.",
        "prompt": "How does FastMCP (in Python) turn a standard Python function into an MCP-compliant tool?",
        "options": [
          "Using the @mcp.tool() decorator, which automatically extracts docstrings and parameter type hints into an MCP tool schema",
          "By converting Python into C++",
          "By registering the function with Google",
          "By compiling the script into a binary executable"
        ],
        "answer": 0,
        "explanation": "FastMCP uses function decorators and type hints to generate MCP schemas automatically."
      },
      "sec2": {
        "title": "FastMCP Server Pipeline",
        "content": "<p>A Complete FastMCP Server in 15 Lines of Python:</p>"
      },
      "diagram": {
        "title": "FastMCP Server Pipeline",
        "caption": "From decorated Python function to active MCP server",
        "steps": [
          {
            "title": "@mcp.tool() Decorator",
            "lines": [
              "Extracts docstring as tool description",
              "Compiles Pydantic type hints to JSON Schema"
            ]
          },
          {
            "title": "stdio Transport Loop",
            "lines": [
              "Reads JSON-RPC request from stdin",
              "Executes get_system_metrics()",
              "Writes JSON-RPC response to stdout"
            ]
          }
        ],
        "boxes": [
          {
            "title": "@mcp.tool() Decorator",
            "lines": [
              "Extracts docstring as tool description",
              "Compiles Pydantic type hints to JSON Schema"
            ]
          },
          {
            "title": "stdio Transport Loop",
            "lines": [
              "Reads JSON-RPC request from stdin",
              "Executes get_system_metrics()",
              "Writes JSON-RPC response to stdout"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Testing with the MCP Inspector",
        "content": "<pre><code># server.py — An MCP Server for System Diagnostics\nfrom mcp.server.fastmcp import FastMCP\nimport psutil\n\n# 1. Initialize FastMCP Server instance\nmcp = FastMCP(\"SystemMonitor\")\n\n# 2. Expose a Tool using @mcp.tool()\n@mcp.tool()\ndef get_system_metrics() -> dict:\n    \"\"\"Retrieve current CPU usage percentage and memory utilization.\"\"\"\n    return {\n        \"cpu_percent\": psutil.cpu_percent(interval=1),\n        \"memory_used_gb\": round(psutil.virtual_memory().used / (1024**3), 2),\n        \"memory_percent\": psutil.virtual_memory().percent\n    }\n\n# 3. Run with stdio transport\nif __name__ == \"__main__\":\n    mcp.run(transport=\"stdio\")</code></pre><p>That is the entire server! FastMCP inspects the function signature, generates the JSON Schema for parameters and returns, handles the JSON-RPC initialization handshake, and serves requests over standard input/output (`stdio`).</p><div class=\"callout\"><p><strong>The stdio Transport:</strong> When running locally, the client launches your script as a subprocess (`python server.py`) and communicates by sending JSON lines over stdin and reading responses from stdout.</p></div>"
      },
      "trace": {
        "title": "Testing with the MCP Inspector",
        "caption": "Debugging servers locally in browser",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Building Your First MCP Server (FastMCP / Node.js)"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "npx @modelcontextprotocol/inspector"
            }
          }
        ],
        "code": [
          "# Tracing Building Your First MCP Server (FastMCP / Node.js)",
          "def execute_flow():",
          "    # Authoring an MCP server from scratch: using FastMC...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the MCP server development sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "FastMCP authoring uses the @mcp.tool() decorator to compile Python functions and docstrings into an MCP tool served over {1} transport."
        ],
        "blanks": [
          {
            "a": [
              "stdio"
            ],
            "why": "Standard input and output communication"
          },
          {
            "a": [
              "Python"
            ],
            "why": "The programming language used by FastMCP"
          }
        ]
      },
      "win": "You know how to author and run a functional MCP server using FastMCP.",
      "nextTasks": [
        "Audit your project code and identify where building your first mcp server (fastmcp / node.js) applies.",
        "Author a unit test or verification script exercising building your first mcp server (fastmcp / node.js).",
        "Document team architectural conventions regarding building your first mcp server (fastmcp / node.js)."
      ],
      "primarySource": "Industry standards and best practices for Building Your First MCP Server (FastMCP / Node.js).",
      "quiz": [
        {
          "q": "What transport mechanism is most commonly used for local desktop MCP servers (like Claude Desktop)?",
          "a": [
            "stdio (standard input and standard output pipes between processes)",
            "HTTP/3 over public internet",
            "Email attachments",
            "USB serial cables"
          ],
          "c": 0,
          "why": "stdio provides fast, secure local inter-process communication without opening network ports."
        },
        {
          "q": "What official developer tool allows engineers to test and debug MCP servers in a web browser interface?",
          "a": [
            "The MCP Inspector (npx @modelcontextprotocol/inspector)",
            "Photoshop",
            "Git bash",
            "Chrome DevTools only"
          ],
          "c": 0,
          "why": "The MCP Inspector is the official browser-based test harness for inspecting MCP servers."
        },
        {
          "q": "Why must an MCP server communicating over stdio NEVER print stray debug messages using plain print()?",
          "a": [
            "Stray text on stdout corrupts the JSON-RPC message stream; all logging must be written to stderr or via protocol log events",
            "print() is illegal in Python",
            "stdout is encrypted",
            "It causes hard drives to overheat"
          ],
          "c": 0,
          "why": "stdout is reserved strictly for JSON-RPC messages; stray prints break the client's JSON parser."
        },
        {
          "q": "What programming languages have official or prominent community MCP SDKs?",
          "a": [
            "TypeScript/Node.js, Python, Kotlin, and Go",
            "Only assembly language",
            "Only PHP 4",
            "Only Fortran"
          ],
          "c": 0,
          "why": "Official SDKs exist in TypeScript and Python, with community implementations across Go, Kotlin, and Rust."
        }
      ],
      "next": {
        "title": "Connecting MCP Clients (Claude Desktop, Cursor, Copilot)",
        "desc": "Configure client configuration files to connect to your MCP servers."
      }
    },
    {
      "n": 5,
      "id": "connecting-mcp-clients-configuration",
      "title": "Connecting MCP Clients (Claude Desktop, Cursor, Copilot)",
      "topic": "Client Config",
      "anim": "Generic",
      "lede": "Configuring MCP clients: editing claude_desktop_config.json, environment variables, command paths, and tool discovery.",
      "winShort": "You know how to configure and connect MCP clients to local servers.",
      "missionLink": "Mastering connecting mcp clients (claude desktop, cursor, copilot) across modern software engineering",
      "sec1": {
        "title": "Core principles of Connecting MCP Clients (Claude Desktop, Cursor, Copilot)",
        "content": "<p>Once you build an MCP server, how do you actually plug it into an AI client like Claude Desktop, Cursor, or VS Code? You declare it in the client's <strong>JSON configuration file</strong>.</p>",
        "keyIdea": "Configuring MCP clients: editing claude_desktop_config.json, environment variables, command paths, and tool discovery."
      },
      "predict": {
        "q": "Where are MCP servers configured in Claude Desktop?",
        "a": [
          "In the claude_desktop_config.json configuration file located in the application support directory",
          "In the computer's BIOS settings",
          "In the user's browser history",
          "In the macOS trash can"
        ],
        "c": 0,
        "why": "Clients read server definitions from JSON configuration files specifying executable commands and arguments.",
        "prompt": "Where are MCP servers configured in Claude Desktop?",
        "options": [
          "In the claude_desktop_config.json configuration file located in the application support directory",
          "In the computer's BIOS settings",
          "In the user's browser history",
          "In the macOS trash can"
        ],
        "answer": 0,
        "explanation": "Clients read server definitions from JSON configuration files specifying executable commands and arguments."
      },
      "sec2": {
        "title": "Client Configuration Anatomy",
        "content": "<p>In Claude Desktop, the configuration file is located at:</p>"
      },
      "diagram": {
        "title": "Client Configuration Anatomy",
        "caption": "Configuring child processes in claude_desktop_config.json",
        "steps": [
          {
            "title": "Server Identifier",
            "lines": [
              "'system-monitor', 'github'",
              "Unique key naming the server in the client UI"
            ]
          },
          {
            "title": "Command & Args",
            "lines": [
              "command: '/path/to/python'",
              "args: ['/path/to/server.py'] (Absolute paths!)"
            ]
          },
          {
            "title": "Environment Secrets",
            "lines": [
              "env: { GITHUB_TOKEN: '...' }",
              "Injected directly into server process environment"
            ]
          }
        ],
        "boxes": [
          {
            "title": "Server Identifier",
            "lines": [
              "'system-monitor', 'github'",
              "Unique key naming the server in the client UI"
            ]
          },
          {
            "title": "Command & Args",
            "lines": [
              "command: '/path/to/python'",
              "args: ['/path/to/server.py'] (Absolute paths!)"
            ]
          },
          {
            "title": "Environment Secrets",
            "lines": [
              "env: { GITHUB_TOKEN: '...' }",
              "Injected directly into server process environment"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Automatic Tool Discovery",
        "content": "<ul><li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li><li><strong>Windows:</strong> <code>%APPDATA%\\Claude\\claude_desktop_config.json</code></li></ul><p>The configuration specifies the executable command, arguments, and environment variables for each server:</p><pre><code>// claude_desktop_config.json Example:\n{\n  \"mcpServers\": {\n    \"system-monitor\": {\n      \"command\": \"/Users/alice/.venv/bin/python\",\n      \"args\": [\"/Users/alice/projects/mcp-servers/monitor.py\"],\n      \"env\": {\n        \"MONITOR_INTERVAL\": \"1\"\n      }\n    },\n    \"github\": {\n      \"command\": \"npx\",\n      \"args\": [\"-y\", \"@modelcontextprotocol/server-github\"],\n      \"env\": {\n        \"GITHUB_PERSONAL_ACCESS_TOKEN\": \"ghp_12345...\"\n      }\n    }\n  }\n}</code></pre><p>When Claude Desktop launches, it spawns each declared server as a child subprocess, completes the initialization handshake, and displays the tools in the UI (marked with a hammer icon!). The user can now ask questions, and Claude invokes your local server tools seamlessly!</p><div class=\"callout\"><p><strong>The Absolute Path Rule:</strong> Always use <strong>absolute paths</strong> to your Python interpreter (e.g. inside your virtual environment). Relative paths will fail because GUI applications run with minimal default system PATHs.</p></div>"
      },
      "trace": {
        "title": "Automatic Tool Discovery",
        "caption": "Client UI integration",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Connecting MCP Clients (Claude Desktop, Cursor, Copilot)"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Client Launches"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Tools Discovered"
            }
          }
        ],
        "code": [
          "# Tracing Connecting MCP Clients (Claude Desktop, Cursor, Copilot)",
          "def execute_flow():",
          "    # Configuring MCP clients: editing claude_desktop_co...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the client configuration sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "Clients connect to local MCP servers by declaring the executable command and absolute file paths in their {1} configuration {2}."
        ],
        "blanks": [
          {
            "a": [
              "JSON"
            ],
            "why": "JavaScript Object Notation file format"
          },
          {
            "a": [
              "file"
            ],
            "why": "Configuration document on disk"
          }
        ]
      },
      "win": "You know how to configure and connect MCP clients to local servers.",
      "nextTasks": [
        "Audit your project code and identify where connecting mcp clients (claude desktop, cursor, copilot) applies.",
        "Author a unit test or verification script exercising connecting mcp clients (claude desktop, cursor, copilot).",
        "Document team architectural conventions regarding connecting mcp clients (claude desktop, cursor, copilot)."
      ],
      "primarySource": "Industry standards and best practices for Connecting MCP Clients (Claude Desktop, Cursor, Copilot).",
      "quiz": [
        {
          "q": "Why must you use absolute paths (e.g. /Users/name/.venv/bin/python) in MCP client configuration files?",
          "a": [
            "GUI desktop applications do not inherit your terminal shell's activated virtualenv PATH, causing generic 'python' commands to fail",
            "Relative paths are forbidden by JSON",
            "Absolute paths make the code run faster",
            "It encrypts the configuration"
          ],
          "c": 0,
          "why": "Desktop GUI applications execute with basic system PATHs; absolute paths ensure the correct interpreter is invoked."
        },
        {
          "q": "What visual icon indicates that tools are active and available in Claude Desktop?",
          "a": [
            "A hammer icon in the bottom corner of the prompt box",
            "A green light on the keyboard",
            "A smiley face emoji",
            "A pop-up warning window"
          ],
          "c": 0,
          "why": "Claude Desktop displays a hammer icon showing active MCP tool integrations."
        },
        {
          "q": "How does an MCP client pass sensitive API keys (like GitHub tokens) to an MCP server?",
          "a": [
            "Through the 'env' dictionary in the server configuration, injecting them as environment variables into the server process",
            "By posting them to Twitter",
            "In the URL query string",
            "By printing them in chat"
          ],
          "c": 0,
          "why": "The env block safely injects credentials into the subprocess without exposing them to the model context."
        },
        {
          "q": "What happens if an error exists in the syntax of claude_desktop_config.json?",
          "a": [
            "The client fails to parse the file and will not load any MCP servers, displaying an error in the developer logs",
            "The computer hard drive is formatted",
            "The operating system restarts",
            "The file is deleted automatically"
          ],
          "c": 0,
          "why": "Syntax errors in configuration JSON cause the parser to fail safely without loading servers."
        }
      ],
      "next": {
        "title": "Transport Layers: stdio vs Server-Sent Events (SSE)",
        "desc": "Understand local subprocess vs remote HTTP networking transports."
      }
    },
    {
      "n": 6,
      "id": "transport-layers-stdio-vs-sse",
      "title": "Transport Layers: stdio vs Server-Sent Events (SSE)",
      "topic": "Transports",
      "anim": "Generic",
      "lede": "Transport protocols: local standard I/O (stdio) vs remote HTTP Server-Sent Events (SSE) for distributed deployments.",
      "winShort": "You understand the architectural differences and trade-offs between stdio and SSE transport layers.",
      "missionLink": "Mastering transport layers: stdio vs server-sent events (sse) across modern software engineering",
      "sec1": {
        "title": "Core principles of Transport Layers: stdio vs Server-Sent Events (SSE)",
        "content": "<p>The Model Context Protocol defines a clean separation between the <strong>message format</strong> (JSON-RPC 2.0) and the <strong>transport mechanism</strong> that delivers those bytes. The MCP specification defines two official transport standards:</p>",
        "keyIdea": "Transport protocols: local standard I/O (stdio) vs remote HTTP Server-Sent Events (SSE) for distributed deployments."
      },
      "predict": {
        "q": "When should an MCP architecture use the HTTP with Server-Sent Events (SSE) transport instead of the default stdio transport?",
        "a": [
          "When the MCP Server runs on a remote cloud server or separate host machine across a network from the client",
          "When the client runs on a laptop",
          "When the server has no internet access",
          "stdio is obsolete and should never be used"
        ],
        "c": 0,
        "why": "SSE enables distributed networking across machines; stdio is strictly for local same-machine subprocesses.",
        "prompt": "When should an MCP architecture use the HTTP with Server-Sent Events (SSE) transport instead of the default stdio transport?",
        "options": [
          "When the MCP Server runs on a remote cloud server or separate host machine across a network from the client",
          "When the client runs on a laptop",
          "When the server has no internet access",
          "stdio is obsolete and should never be used"
        ],
        "answer": 0,
        "explanation": "SSE enables distributed networking across machines; stdio is strictly for local same-machine subprocesses."
      },
      "sec2": {
        "title": "stdio vs SSE Transport Comparison",
        "content": "<ul><li><strong>1. `stdio` (Standard Input/Output):</strong> The client launches the server as a local child subprocess on the same machine. Messages are exchanged over stdin/stdout pipes. <em>Best for:</em> Desktop apps, local development, extreme speed, zero network ports, maximum security.</li><li><strong>2. `SSE` (Server-Sent Events over HTTP):</strong> The server runs as a standalone HTTP web server (often in a Docker container or cloud Kubernetes cluster). The client connects over HTTP: the server streams events via an SSE endpoint (`/sse`), and the client sends requests via HTTP POST (`/messages`). <em>Best for:</em> Enterprise shared microservices, cloud deployments, and multi-user systems.</li></ul>"
      },
      "diagram": {
        "title": "stdio vs SSE Transport Comparison",
        "caption": "Local inter-process pipes vs remote HTTP streaming",
        "steps": [
          {
            "title": "stdio Transport (Local Pipes)",
            "lines": [
              "Client launches child process directly",
              "stdin / stdout pipe communication",
              "Ultra-fast, zero ports, 100% private to laptop"
            ]
          },
          {
            "title": "SSE Transport (Remote HTTP)",
            "lines": [
              "Runs as independent web service",
              "text/event-stream + HTTP POST endpoints",
              "Distributed across cloud networks & VPCs"
            ]
          }
        ],
        "boxes": [
          {
            "title": "stdio Transport (Local Pipes)",
            "lines": [
              "Client launches child process directly",
              "stdin / stdout pipe communication",
              "Ultra-fast, zero ports, 100% private to laptop"
            ]
          },
          {
            "title": "SSE Transport (Remote HTTP)",
            "lines": [
              "Runs as independent web service",
              "text/event-stream + HTTP POST endpoints",
              "Distributed across cloud networks & VPCs"
            ]
          }
        ]
      },
      "sec3": {
        "title": "SSE Communication Flow",
        "content": "<pre><code># The Transport Architecture Comparison:\n# STDIO (Local Subprocess):\n# [Client Host] === stdin/stdout pipes ===> [Local Server Process]\n# (Fast, secure, same machine, zero open network ports!)\n#\n# SSE (Remote HTTP Network):\n# [Client Host] --- HTTP POST (/messages) ---> [Remote Web Server]\n# [Client Host] <--- text/event-stream (/sse) - [Remote Web Server]\n# (Networked, distributed, cross-machine, cloud-hosted!)</code></pre><div class=\"callout\"><p><strong>The Transport Rule:</strong> Use `stdio` for personal tools and desktop IDEs. Use `SSE` when hosting a shared enterprise tool (like internal corporate databases) across a remote network.</p></div>"
      },
      "trace": {
        "title": "SSE Communication Flow",
        "caption": "Bi-directional HTTP transport",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Transport Layers: stdio vs Server-Sent Events (SSE)"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Client connects to /sse"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Client sends HTTP POST"
            }
          }
        ],
        "code": [
          "# Tracing Transport Layers: stdio vs Server-Sent Events (SSE)",
          "def execute_flow():",
          "    # Transport protocols: local standard I/O (stdio) vs...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the transport layers sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "While stdio transport connects local subprocesses over standard I/O pipes, {1} transport enables distributed networking across remote {2} servers."
        ],
        "blanks": [
          {
            "a": [
              "SSE"
            ],
            "why": "Server-Sent Events over HTTP"
          },
          {
            "a": [
              "cloud"
            ],
            "why": "Remote hosted web infrastructure"
          }
        ]
      },
      "win": "You understand the architectural differences and trade-offs between stdio and SSE transport layers.",
      "nextTasks": [
        "Audit your project code and identify where transport layers: stdio vs server-sent events (sse) applies.",
        "Author a unit test or verification script exercising transport layers: stdio vs server-sent events (sse).",
        "Document team architectural conventions regarding transport layers: stdio vs server-sent events (sse)."
      ],
      "primarySource": "Industry standards and best practices for Transport Layers: stdio vs Server-Sent Events (SSE).",
      "quiz": [
        {
          "q": "What two HTTP endpoints are typically provided by an MCP server running on SSE transport?",
          "a": [
            "An SSE streaming endpoint (e.g. /sse) for server-to-client events, and an HTTP POST endpoint (e.g. /messages) for client requests",
            "A login page and a logout page",
            "An image gallery and a video player",
            "An FTP server and a DNS server"
          ],
          "c": 0,
          "why": "SSE streams responses to the client, while POST delivers client requests to the server."
        },
        {
          "q": "Why is stdio transport considered naturally more secure for local desktop tools?",
          "a": [
            "It does not bind to any network ports or IP addresses, making it completely inaccessible to external network attackers",
            "It encrypts the computer screen",
            "It runs without a CPU",
            "It deletes all network cards"
          ],
          "c": 0,
          "why": "stdio uses local OS process pipes, eliminating network exposure and port sniffing."
        },
        {
          "q": "What happens if a network interruption drops an active SSE transport connection?",
          "a": [
            "The client attempts to reconnect using standard HTTP/SSE reconnection protocols and resumes event streaming",
            "The computer hard drive is formatted",
            "The database is deleted",
            "The server must be reinstalled"
          ],
          "c": 0,
          "why": "SSE includes built-in HTTP reconnection semantics to recover from transient network drops."
        },
        {
          "q": "How does Docker facilitate deploying remote MCP servers with SSE transport?",
          "a": [
            "It packages the server, dependencies, and environment into a portable container that can be deployed to AWS or Kubernetes",
            "It turns off the internet",
            "It converts Python to HTML",
            "It makes servers run on batteries"
          ],
          "c": 0,
          "why": "Containers package dependencies and expose clean HTTP/SSE endpoints for remote deployment."
        }
      ],
      "next": {
        "title": "Security, Authentication, and Permission Scoping in MCP",
        "desc": "Implement authentication, access controls, and least-privilege scoping in MCP."
      }
    },
    {
      "n": 7,
      "id": "mcp-security-authentication-permissions",
      "title": "Security, Authentication, and Permission Scoping in MCP",
      "topic": "MCP Security",
      "anim": "Generic",
      "lede": "Securing tool-connected systems: OAuth2 authentication, permission scoping, read-only roots, and human-in-the-loop approval.",
      "winShort": "You know how to enforce permissions, root scoping, and security boundaries in MCP architectures.",
      "missionLink": "Mastering security, authentication, and permission scoping in mcp across modern software engineering",
      "sec1": {
        "title": "Core principles of Security, Authentication, and Permission Scoping in MCP",
        "content": "<p>Connecting an AI model to an MCP server gives that model <strong>real-world power</strong> over your files, databases, and APIs. If you connect an MCP server with a tool <code>delete_database_table()</code>, you must ensure that malicious prompt injections cannot trick the model into executing catastrophic commands.</p>",
        "keyIdea": "Securing tool-connected systems: OAuth2 authentication, permission scoping, read-only roots, and human-in-the-loop approval."
      },
      "predict": {
        "q": "Why is human-in-the-loop confirmation particularly critical in MCP client applications?",
        "a": [
          "MCP servers can expose powerful local tools (like editing files or deleting database rows); clients must prompt users before executing destructive actions",
          "Models refuse to run tools without human applause",
          "Computers run out of RAM during tool calls",
          "It is required by the US Constitution"
        ],
        "c": 0,
        "why": "Clients act as the security boundary, prompting humans for explicit authorization before executing destructive server tools.",
        "prompt": "Why is human-in-the-loop confirmation particularly critical in MCP client applications?",
        "options": [
          "MCP servers can expose powerful local tools (like editing files or deleting database rows); clients must prompt users before executing destructive actions",
          "Models refuse to run tools without human applause",
          "Computers run out of RAM during tool calls",
          "It is required by the US Constitution"
        ],
        "answer": 0,
        "explanation": "Clients act as the security boundary, prompting humans for explicit authorization before executing destructive server tools."
      },
      "sec2": {
        "title": "The Three MCP Security Tiers",
        "content": "<p>The three security boundaries in the Model Context Protocol:</p>"
      },
      "diagram": {
        "title": "The Three MCP Security Tiers",
        "caption": "Client gates, root boundaries, and network auth",
        "steps": [
          {
            "title": "1. Client Confirmation Gate",
            "lines": [
              "Prompts user: 'Allow tool call?'",
              "Human must authorize sensitive actions"
            ]
          },
          {
            "title": "2. Filesystem Root Scoping",
            "lines": [
              "Constrained strictly to project folder",
              "Blocks directory traversal (../etc/passwd)"
            ]
          },
          {
            "title": "3. Remote Network Auth",
            "lines": [
              "OAuth2 / Bearer token on SSE",
              "Guarantees tenant isolation in cloud"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. Client Confirmation Gate",
            "lines": [
              "Prompts user: 'Allow tool call?'",
              "Human must authorize sensitive actions"
            ]
          },
          {
            "title": "2. Filesystem Root Scoping",
            "lines": [
              "Constrained strictly to project folder",
              "Blocks directory traversal (../etc/passwd)"
            ]
          },
          {
            "title": "3. Remote Network Auth",
            "lines": [
              "OAuth2 / Bearer token on SSE",
              "Guarantees tenant isolation in cloud"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Directory Traversal Protection",
        "content": "<ul><li><strong>1. Client-Side Confirmation Prompts:</strong> The MCP client (e.g. Claude Desktop or Cursor) acts as the security guardian. When a tool is invoked, the client displays an explicit prompt: <em>'The agent wants to execute `edit_file` on `src/auth.py`. Allow once or Always allow?'</em></li><li><strong>2. Roots and File Scoping:</strong> In file servers, clients declare explicit <code>roots</code>: <em>'You are permitted to access ONLY `/Users/alice/projects/billing/`; all other directories are strictly forbidden.'</em></li><li><strong>3. Remote Authentication (OAuth2 / Bearer Tokens):</strong> When using remote SSE servers, secure the endpoints using industry-standard Bearer tokens or OAuth2 workflows to verify client identity.</li></ul><pre><code># Secure Root Scoping in MCP Filesystem Server:\n# The server enforces that all paths must reside within approved roots:\ndef validate_path(requested_path: str, approved_roots: list[str]):\n    resolved = os.path.realpath(requested_path)\n    if not any(resolved.startswith(root) for root in approved_roots):\n        raise PermissionError(f\"Access denied: Path '{resolved}' is outside approved project roots!\")\n    return resolved</code></pre><div class=\"callout\"><p><strong>The Golden Security Rule:</strong> Never run an unvetted third-party MCP server with root privileges on your machine. Inspect what tools a server exposes before adding it to your configuration!</p></div>"
      },
      "trace": {
        "title": "Directory Traversal Protection",
        "caption": "Enforcing canonical path resolution",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "Security, Authentication, and Permission Scoping in MCP"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "Malicious Tool Call"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "Root Validation Defense"
            }
          }
        ],
        "code": [
          "# Tracing Security, Authentication, and Permission Scoping in MCP",
          "def execute_flow():",
          "    # Securing tool-connected systems: OAuth2 authentica...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the MCP security sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "MCP clients enforce security through human {1} dialogs, while servers protect filesystems by scoping access to approved {2} directories."
        ],
        "blanks": [
          {
            "a": [
              "confirmation"
            ],
            "why": "Manual approval prompts"
          },
          {
            "a": [
              "root"
            ],
            "why": "Top-level authorized folders"
          }
        ]
      },
      "win": "You know how to enforce permissions, root scoping, and security boundaries in MCP architectures.",
      "nextTasks": [
        "Audit your project code and identify where security, authentication, and permission scoping in mcp applies.",
        "Author a unit test or verification script exercising security, authentication, and permission scoping in mcp.",
        "Document team architectural conventions regarding security, authentication, and permission scoping in mcp."
      ],
      "primarySource": "Industry standards and best practices for Security, Authentication, and Permission Scoping in MCP.",
      "quiz": [
        {
          "q": "What is a 'Path Traversal' attack and how does an MCP filesystem server prevent it?",
          "a": [
            "An attacker uses '../' sequences to escape the project directory; servers resolve canonical real paths to ensure files stay inside approved roots",
            "An attack that renames folders",
            "A bug in the keyboard",
            "A compiler error"
          ],
          "c": 0,
          "why": "Resolving canonical paths ensures requests cannot break out of designated directory roots."
        },
        {
          "q": "Why does Claude Desktop ask 'Allow this action?' before executing certain MCP tools?",
          "a": [
            "It enforces human-in-the-loop authorization to ensure users are aware of and approve actions that access external data or modify files",
            "It has forgotten the user's name",
            "It is testing the user's patience",
            "To reduce battery usage"
          ],
          "c": 0,
          "why": "Confirmation dialogs provide user agency and prevent unintended automated side effects."
        },
        {
          "q": "What authentication header is standard when connecting an MCP client to a remote SSE server across the web?",
          "a": [
            "Authorization: Bearer <token>",
            "Content-Type: text/plain",
            "User-Agent: Mozilla",
            "Host: localhost"
          ],
          "c": 0,
          "why": "Standard Bearer token authorization validates client identity over HTTP."
        },
        {
          "q": "Why should you never add an untrusted, unvetted MCP server to your desktop configuration?",
          "a": [
            "Local MCP servers execute code as child processes on your laptop with your user permissions, creating severe security risks if malicious",
            "It makes your screen black",
            "It turns off the internet",
            "It deletes your browser history"
          ],
          "c": 0,
          "why": "Local servers run with the user's permissions and must be audited for safety before installation."
        }
      ],
      "next": {
        "title": "The MCP Ecosystem: Composing Modular AI Infrastructures",
        "desc": "Compose multiple MCP servers into a cohesive, enterprise AI infrastructure."
      }
    },
    {
      "n": 8,
      "id": "composing-modular-ai-infrastructure",
      "title": "The MCP Ecosystem: Composing Modular AI Infrastructures",
      "topic": "Ecosystem & Composition",
      "anim": "Generic",
      "lede": "Composing production systems: aggregating specialized MCP servers (PostgreSQL, GitHub, Slack) into a modular AI platform.",
      "winShort": "You have completed the MCP & Tool-Connected AI Systems course.",
      "missionLink": "Mastering the mcp ecosystem: composing modular ai infrastructures across modern software engineering",
      "sec1": {
        "title": "Core principles of The MCP Ecosystem: Composing Modular AI Infrastructures",
        "content": "<p>We have explored the full architecture of the Model Context Protocol: from the $M \\times N$ integration crisis to JSON-RPC 2.0 communication, core primitives (Resources, Prompts, Tools), FastMCP server authoring, client configuration, transport layers, and security governance.</p>",
        "keyIdea": "Composing production systems: aggregating specialized MCP servers (PostgreSQL, GitHub, Slack) into a modular AI platform."
      },
      "predict": {
        "q": "What is the ultimate architectural promise of the Model Context Protocol ecosystem?",
        "a": [
          "A modular, plug-and-play AI infrastructure where models dynamically discover and connect to external tools and enterprise knowledge seamlessly",
          "A single giant company owning all AI software",
          "Eliminating all programming languages",
          "Replacing computer monitors with VR glasses"
        ],
        "c": 0,
        "why": "MCP creates an open, interoperable ecosystem where models connect to modular tools and data sources dynamically.",
        "prompt": "What is the ultimate architectural promise of the Model Context Protocol ecosystem?",
        "options": [
          "A modular, plug-and-play AI infrastructure where models dynamically discover and connect to external tools and enterprise knowledge seamlessly",
          "A single giant company owning all AI software",
          "Eliminating all programming languages",
          "Replacing computer monitors with VR glasses"
        ],
        "answer": 0,
        "explanation": "MCP creates an open, interoperable ecosystem where models connect to modular tools and data sources dynamically."
      },
      "sec2": {
        "title": "The Composed MCP Platform",
        "content": "<p>The true power of MCP emerges when you <strong>compose multiple specialized servers together</strong>:</p>"
      },
      "diagram": {
        "title": "The Composed MCP Platform",
        "caption": "Aggregating modular servers into a unified assistant",
        "steps": [
          {
            "title": "1. AI Host Client",
            "lines": [
              "Claude Desktop / Cursor / Agent",
              "Aggregates tools from all connected servers"
            ]
          },
          {
            "title": "2. PostgreSQL Server",
            "lines": [
              "Exposes schema resources & query tools",
              "Direct database access"
            ]
          },
          {
            "title": "3. GitHub Server",
            "lines": [
              "Exposes issues, PRs, & diff tools",
              "Code repository management"
            ]
          },
          {
            "title": "4. Filesystem Server",
            "lines": [
              "Exposes project file editing tools",
              "Local development execution"
            ]
          }
        ],
        "boxes": [
          {
            "title": "1. AI Host Client",
            "lines": [
              "Claude Desktop / Cursor / Agent",
              "Aggregates tools from all connected servers"
            ]
          },
          {
            "title": "2. PostgreSQL Server",
            "lines": [
              "Exposes schema resources & query tools",
              "Direct database access"
            ]
          },
          {
            "title": "3. GitHub Server",
            "lines": [
              "Exposes issues, PRs, & diff tools",
              "Code repository management"
            ]
          },
          {
            "title": "4. Filesystem Server",
            "lines": [
              "Exposes project file editing tools",
              "Local development execution"
            ]
          }
        ]
      },
      "sec3": {
        "title": "Multi-Server Autonomous Execution",
        "content": "<ul><li><strong>The Developer Assistant Stack:</strong> Connect Claude Desktop or Cursor to three servers simultaneously: (1) `filesystem-mcp` (code editing), (2) `github-mcp` (pull requests & issues), and (3) `postgres-mcp` (database inspection).</li><li><strong>Autonomous Workflow Synthesis:</strong> The user says: <em>'Investigate why user #42 cannot log in, fix the bug in the auth service, and open a GitHub PR with the patch.'</em></li><li><strong>Coordinated Multi-Tool Execution:</strong> The model queries the database via `postgres-mcp`, reads `src/auth.py` via `filesystem-mcp`, applies the fix, and opens the PR via `github-mcp`—all through a single unified protocol!</li></ul><pre><code># The Composed Enterprise MCP Platform:\n# [Claude / Cursor / Autonomous Agent]\n#         |       |        |\n#    (MCP)v  (MCP)v   (MCP)v\n# [PostgreSQL] [GitHub] [Internal Jira / Wiki]\n# Zero custom integration code! Complete modularity!</code></pre><div class=\"callout\"><p><strong>The Final Takeaway:</strong> MCP represents the open, standardized foundation of the AI era. You are now equipped to build, connect, and deploy tool-connected AI systems at enterprise scale.</p></div>"
      },
      "trace": {
        "title": "Multi-Server Autonomous Execution",
        "caption": "Solving complex end-to-end user workflows",
        "steps": [
          {
            "line": 1,
            "vars": {
              "phase": "Initialize",
              "concept": "The MCP Ecosystem: Composing Modular AI Infrastructures"
            }
          },
          {
            "line": 2,
            "vars": {
              "phase": "Execution",
              "state": "Active"
            }
          },
          {
            "line": 4,
            "vars": {
              "phase": "Result",
              "status": "Success"
            }
          },
          {
            "line": 1,
            "vars": {
              "step": "1. Query Database"
            }
          },
          {
            "line": 2,
            "vars": {
              "step": "2. Edit Code"
            }
          },
          {
            "line": 3,
            "vars": {
              "step": "3. Open PR"
            }
          }
        ],
        "code": [
          "# Tracing The MCP Ecosystem: Composing Modular AI Infrastructures",
          "def execute_flow():",
          "    # Composing production systems: aggregating speciali...",
          "    return True"
        ]
      },
      "practiceIntro": "Complete the MCP ecosystem sentence",
      "fill": {
        "label": "From memory — fill in the core terms",
        "lines": [
          "The MCP ecosystem enables composing modular AI infrastructures where models connect to multiple specialized {1} through a single open {2}."
        ],
        "blanks": [
          {
            "a": [
              "servers"
            ],
            "why": "Data and tool providers"
          },
          {
            "a": [
              "protocol"
            ],
            "why": "Standard communication agreement"
          }
        ]
      },
      "win": "You have completed the MCP & Tool-Connected AI Systems course.",
      "nextTasks": [
        "Audit your project code and identify where the mcp ecosystem: composing modular ai infrastructures applies.",
        "Author a unit test or verification script exercising the mcp ecosystem: composing modular ai infrastructures.",
        "Document team architectural conventions regarding the mcp ecosystem: composing modular ai infrastructures."
      ],
      "primarySource": "Industry standards and best practices for The MCP Ecosystem: Composing Modular AI Infrastructures.",
      "quiz": [
        {
          "q": "What happens when an engineer adds a new MCP server to their client configuration while three other servers are already active?",
          "a": [
            "The client aggregates the new server's tools alongside the existing tools, immediately expanding the model's capabilities",
            "The client crashes",
            "The other three servers are deleted",
            "The computer restarts"
          ],
          "c": 0,
          "why": "MCP clients support dynamic aggregation across arbitrary numbers of independent servers."
        },
        {
          "q": "Where can developers discover official and open-source MCP servers created by the community?",
          "a": [
            "In the official Model Context Protocol GitHub repositories (modelcontextprotocol/servers) and open registry indexes",
            "In the newspaper",
            "In physical computer stores",
            "On television commercials"
          ],
          "c": 0,
          "why": "The modelcontextprotocol organization maintains an open catalog of official reference servers."
        },
        {
          "q": "How does MCP protect enterprises from vendor lock-in with a single AI model company?",
          "a": [
            "Because all tools are built to an open standard, the enterprise can swap out the AI client or model without rewriting any tool servers",
            "It makes software run for free",
            "It turns off the cloud",
            "It deletes all proprietary software"
          ],
          "c": 0,
          "why": "Standardized protocols decouple tool implementations from specific client applications and model vendors."
        },
        {
          "q": "What is the ultimate vision of tool-connected AI systems built on MCP?",
          "a": [
            "AI agents that safely, seamlessly, and securely interact with the entire digital world of databases, code, APIs, and enterprise services",
            "A world without human workers",
            "Computers that run without power",
            "Software that never changes"
          ],
          "c": 0,
          "why": "Universal tool standards bridge neural reasoning to the complete universe of real-world software and data."
        }
      ],
      "next": {
        "title": "Next Level: AI Operations, Evaluation & Observability",
        "desc": "Learn how to measure, trace, and evaluate production AI systems with rigorous engineering metrics."
      }
    }
  ]
};
