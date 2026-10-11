import re
import json

with open("data/news.js", "r") as f:
    content = f.read()

# Match the json array part:
m = re.search(r'window\.NEWS\s*=\s*(\[.*\]);', content, re.DOTALL)
if not m:
    print("Could not parse data/news.js")
    exit(1)

articles = json.loads(m.group(1))

TOPIC_MAP = {
    "Continuous AI Guardrails": {
        "img": "assets/icons/news/guardrails.svg",
        "tag": "AI GUARDRAILS",
        "time": "4 min read"
    },
    "Multi-Agent Collaboration": {
        "img": "assets/icons/news/multi-agent.svg",
        "tag": "MULTI-AGENT SWARMS",
        "time": "5 min read"
    },
    "Vector Index Scaling": {
        "img": "assets/icons/news/vector-search.svg",
        "tag": "VECTOR DATABASES",
        "time": "6 min read"
    },
    "Autonomous Agent State Machines": {
        "img": "assets/icons/news/agent-state.svg",
        "tag": "AGENT ARCHITECTURE",
        "time": "4 min read"
    },
    "Local LLM Inference on Apple Silicon": {
        "img": "assets/icons/news/local-models.svg",
        "tag": "ON-DEVICE INFERENCE",
        "time": "5 min read"
    },
    "DSPy & Compiled Prompting": {
        "img": "assets/icons/news/prompt-engineering.svg",
        "tag": "PROMPT COMPILERS",
        "time": "4 min read"
    },
    "Model Context Protocol (MCP)": {
        "img": "assets/icons/news/mcp-tools.svg",
        "tag": "AGENT PROTOCOLS",
        "time": "3 min read"
    },
    "Indirect Prompt Injection": {
        "img": "assets/icons/news/prompt-injection.svg",
        "tag": "ADVERSARIAL DEFENSE",
        "time": "5 min read"
    },
    "Context Caching vs. Dynamic RAG": {
        "img": "assets/icons/news/context-caching.svg",
        "tag": "CONTEXT CACHING",
        "time": "4 min read"
    },
    "Speculative Decoding": {
        "img": "assets/icons/news/speculative-decoding.svg",
        "tag": "LATENCY OPTIMIZATION",
        "time": "3 min read"
    }
}

for a in articles:
    title = a.get("title", "")
    matched = False
    for key, meta in TOPIC_MAP.items():
        if key in title:
            a["image"] = meta["img"]
            a["category"] = meta["tag"]
            a["readTime"] = meta["time"]
            matched = True
            break
    if not matched:
        a["image"] = "assets/icons/news/guardrails.svg"
        a["category"] = "AI ENGINEERING"
        a["readTime"] = "4 min read"

with open("data/news.js", "w") as f:
    f.write("/* ============================================================\n")
    f.write("   Concept Lab — AI News (100 Articles)\n")
    f.write("   Curated by Bilal Fleifel\n")
    f.write("   ============================================================ */\n\n")
    f.write("window.NEWS = ")
    json.dump(articles, f, indent=2)
    f.write(";\n")

print(f"Successfully updated {len(articles)} articles with topic SVGs and metadata.")
