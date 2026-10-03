/* ============================================================
   AI Model Routing & Fallbacks — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-multi-model-spectrum", file: "lessons/0001-the-multi-model-spectrum.html", title: "The Multi-Model Spectrum: Matching Task to Tier", topic: "Model Spectrum", anim: "Generic" },
  { n: 2, id: "semantic-intent-request-routing", file: "lessons/0002-semantic-intent-request-routing.html", title: "Semantic and Intent-Based Request Routing", topic: "Intent Routing", anim: "Generic" },
  { n: 3, id: "complexity-based-cascades", file: "lessons/0003-complexity-based-cascades.html", title: "Complexity-Based Cascades (Fast Tier to Frontier Tier)", topic: "Complexity Cascades", anim: "Generic" },
  { n: 4, id: "provider-fallbacks-circuit-breakers", file: "lessons/0004-provider-fallbacks-circuit-breakers.html", title: "Provider Fallbacks and Circuit Breakers", topic: "Circuit Breakers", anim: "Generic" },
  { n: 5, id: "active-latency-error-routing", file: "lessons/0005-active-latency-error-routing.html", title: "Active Latency and Error Rate Routing", topic: "Adaptive Routing", anim: "Generic" },
  { n: 6, id: "cost-constrained-sla-routing", file: "lessons/0006-cost-constrained-sla-routing.html", title: "Cost-Constrained Optimization and SLA Routing", topic: "SLA Routing", anim: "Generic" },
  { n: 7, id: "enterprise-gateway-proxies-litellm", file: "lessons/0007-enterprise-gateway-proxies-litellm.html", title: "Enterprise Gateway Proxies: LiteLLM, Portkey", topic: "Proxy Gateways", anim: "Generic" },
  { n: 8, id: "building-intelligent-model-router", file: "lessons/0008-building-intelligent-model-router.html", title: "Building an Intelligent Multi-Provider Model Router", topic: "Router Engine", anim: "Generic" }
];

/* ============================================================
   AI Model Routing & Fallbacks — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "spectrum-routing", title: "Spectrum & Routing",
    terms: [
      { term: "Multi-Model Spectrum", def: "Distributing AI workloads across classifier, workhorse, and frontier model tiers based on task complexity.", lesson: 1, tags: ["routing","architecture"] },
      { term: "Semantic Router", def: "An ultra-fast component matching prompt embeddings against domain centroids to route queries in milliseconds.", lesson: 2, tags: ["routing","embeddings"] },
      { term: "Route Centroid", def: "The average embedding vector representing a cluster of sample utterances for a specific domain.", lesson: 2, tags: ["embeddings","math"] }
    ]
  },
  {
    id: "cascades-breakers", title: "Cascades & Resilience",
    terms: [
      { term: "Complexity Cascade", def: "Executing fast models first and escalating to frontier models only when verification checks fail.", lesson: 3, tags: ["cascades","optimization"] },
      { term: "Circuit Breaker", def: "A design pattern that trips to OPEN during provider outages, instantly rerouting traffic without waiting for timeouts.", lesson: 4, tags: ["resilience","patterns"] },
      { term: "EWMA Latency", def: "Exponentially Weighted Moving Average tracking real-time rolling response times to identify fastest endpoints.", lesson: 5, tags: ["metrics","latency"] }
    ]
  },
  {
    id: "business-proxies", title: "Business & Gateways",
    terms: [
      { term: "SLA Routing", def: "Aligning compute spend with customer revenue by routing free users to cheap tiers and VIPs to frontier tiers.", lesson: 6, tags: ["business","saas"] },
      { term: "LiteLLM Proxy", def: "An open-source gateway proxy providing a unified OpenAI-compatible interface to 100+ LLMs with fallbacks.", lesson: 7, tags: ["tools","proxies"] },
      { term: "Virtual API Key", def: "A proxy-managed credential issued to internal teams with hard monthly budget ceilings and spend tracking.", lesson: 7, tags: ["governance","security"] }
    ]
  },
  {
    id: "synthesis", title: "Router Synthesis",
    terms: [
      { term: "Pre-Flight Scoring", def: "Analyzing prompt length, code syntax, and reasoning constraints to predict required intelligence before dispatch.", lesson: 3, tags: ["heuristics","routing"] },
      { term: "Exploration Traffic", def: "Sending a small percentage (10-20%) of requests to slower endpoints to monitor their operational recovery.", lesson: 5, tags: ["telemetry","traffic"] },
      { term: "Intelligent Model Router", def: "An end-to-end engine coordinating semantic routing, complexity cascades, and circuit-breaker failovers.", lesson: 8, tags: ["architecture","systems"] }
    ]
  }
];
