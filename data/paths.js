/* ============================================================
   Concept Lab — learning paths
   ------------------------------------------------------------
   A path is an ordered track through the catalogue. Each step
   references a course id; the renderer resolves the title and
   link, and greys out steps whose course is not live yet.
   ============================================================ */

window.PATHS = [
  {
    id: "python-developer",
    title: "Python Developer",
    emoji: "🐍",
    desc: "From first syntax to shipping clean, tested, packaged Python.",
    steps: ["python-fundamentals", "python-modules-packages", "python-errors-exceptions",
            "python-files-json-data", "python-type-hints", "oop", "testing-fundamentals",
            "unit-integration-testing", "tdd", "git-version-control", "clean-code",
            "refactoring-technical-debt"]
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    emoji: "🛠️",
    desc: "Design data, expose APIs and run services that stay up.",
    steps: ["python-fundamentals", "http", "rest-apis-json", "sql-relational-databases",
            "database-design", "sql-joins", "orms", "backend-architecture", "fastapi",
            "authentication-sessions", "secrets-identity",
            "testing-fundamentals", "docker-containers", "ci-cd", "cybersecurity-fundamentals",
            "distributed-systems", "system-design"]
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    emoji: "🎨",
    desc: "Understand the web platform, then build interfaces with it.",
    steps: ["how-the-internet-works", "http", "html-dom", "css-layout",
            "javascript-fundamentals", "typescript-fundamentals", "browser-events-async",
            "rest-apis-json", "frontend-backend", "react-architecture",
            "web-accessibility", "ui-ux-for-engineers", "web-security"]
  },
  {
    id: "cs-foundations",
    title: "CS Foundations",
    emoji: "🎓",
    desc: "The core ideas every engineer should be able to reason about.",
    steps: ["programming-computational-thinking", "data-structures", "algorithms-problem-solving",
            "big-o-complexity", "oop", "command-line-shell", "git-version-control",
            "sql-relational-databases", "transactions-data-integrity", "separation-of-concerns",
            "design-patterns", "software-architecture-patterns", "testing-fundamentals",
            "distributed-systems", "system-design"]
  },
  {
    id: "devops",
    title: "DevOps & Platform",
    emoji: "⚙️",
    desc: "Automate the path from commit to production.",
    steps: ["command-line-shell", "git-version-control", "docker-containers",
            "kubernetes-orchestration", "infrastructure-as-code", "ci-cd",
            "cloud-architecture", "secrets-identity", "llm-observability",
            "cybersecurity-fundamentals", "distributed-systems"]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    emoji: "📊",
    desc: "Turn raw tables into decisions people trust.",
    steps: ["python-fundamentals", "python-files-json-data", "sql-relational-databases",
            "sql-joins", "database-indexes-performance", "machine-learning",
            "embeddings", "vector-databases", "rag-evaluation"]
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    emoji: "🤖",
    desc: "From the ML loop to language models and production AI systems.",
    steps: ["python-fundamentals", "rest-apis-json", "what-is-ai", "machine-learning",
            "neural-networks", "embeddings", "transformers-attention", "llms",
            "tokens-context", "inference-sampling", "model-selection",
            "first-llm-application", "prompt-engineering", "structured-outputs",
            "function-calling", "rag", "vector-databases", "ai-agents",
            "ai-evaluation", "production-ai-architecture"]
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding Properly",
    emoji: "✨",
    desc: "Work with AI coding agents without losing control of the codebase.",
    steps: ["reading-code", "ai-coding-agents", "prompting-vs-specification",
            "context-engineering", "ai-project-context", "ai-assisted-debugging",
            "ai-assisted-code-review", "ai-generated-architecture",
            "ai-assisted-refactoring", "large-ai-coding-projects",
            "trusting-ai-generated-code"]
  },
  {
    id: "ai-app-builder",
    title: "AI Application Builder",
    emoji: "🚀",
    desc: "Ship AI features that are useful, measured and safe.",
    steps: ["first-llm-application", "prompt-engineering", "structured-outputs",
            "function-calling", "rag", "vector-databases", "ai-memory-context",
            "ai-agents", "multi-agent-systems", "mcp", "ai-evaluation",
            "llm-observability", "hallucination-reliability", "ai-guardrails",
            "ai-cost-latency", "ai-model-routing", "production-ai-architecture",
            "reliable-ai-systems"]
  },
  {
    id: "security-engineer",
    title: "Security Engineer",
    emoji: "🔐",
    desc: "Think like an attacker, defend like an engineer.",
    steps: ["how-the-internet-works", "http", "authentication-sessions",
            "cybersecurity-fundamentals", "web-security", "secrets-identity",
            "prompt-injection", "ai-agent-security", "cloud-architecture"]
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Web Developer",
    emoji: "🥞",
    desc: "Bridge the gap between frontend interfaces and backend infrastructure.",
    steps: ["how-the-internet-works", "html-dom", "css-layout", "javascript-fundamentals",
            "typescript-fundamentals", "react-architecture", "frontend-backend", "nodejs-backend",
            "rest-apis-json", "sql-relational-databases", "authentication-sessions", "docker-containers"]
  },
  {
    id: "software-architect",
    title: "Software Architect",
    emoji: "📐",
    desc: "Design resilient, scalable systems and define engineering standards.",
    steps: ["software-project-structure", "clean-code", "separation-of-concerns", "design-patterns",
            "composition-vs-inheritance", "dependency-injection", "software-architecture-patterns",
            "distributed-systems", "system-design"]
  },
  {
    id: "quality-assurance-sdet",
    title: "Quality Assurance & SDET",
    emoji: "✅",
    desc: "Ensure code reliability through testing, automation, and continuous delivery.",
    steps: ["debugging-code", "reading-code", "testing-fundamentals", "unit-integration-testing",
            "tdd", "ci-cd", "ai-assisted-code-review", "ai-assisted-debugging"]
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    emoji: "🗄️",
    desc: "Build the pipelines and infrastructure that power analytics and machine learning.",
    steps: ["python-files-json-data", "sql-relational-databases", "postgresql",
            "database-indexes-performance", "transactions-data-integrity", "data-pipelines-etl",
            "docker-containers", "distributed-systems"]
  }
];
