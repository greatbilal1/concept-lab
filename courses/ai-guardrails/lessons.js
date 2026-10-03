/* ============================================================
   AI Guardrails & Validation — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-bounded-system-why-guardrails", file: "lessons/0001-the-bounded-system-why-guardrails.html", title: "The Bounded System: Why Models Need Guardrails", topic: "Bounded Systems", anim: "Generic" },
  { n: 2, id: "input-filtering-topicality-jailbreaks", file: "lessons/0002-input-filtering-topicality-jailbreaks.html", title: "Input Filtering: Topicality, Jailbreaks, and PII Scrubbing", topic: "Input Filters", anim: "Generic" },
  { n: 3, id: "output-validation-schemas-hallucination", file: "lessons/0003-output-validation-schemas-hallucination.html", title: "Output Validation: JSON Schemas, Hallucination Checks, and Toxic Language", topic: "Output Validation", anim: "Generic" },
  { n: 4, id: "open-source-guardrails-frameworks", file: "lessons/0004-open-source-guardrails-frameworks.html", title: "Open-Source Guardrails Frameworks: NeMo Guardrails, Guardrails AI", topic: "Guardrail Frameworks", anim: "Generic" },
  { n: 5, id: "content-moderation-multimodal-screening", file: "lessons/0005-content-moderation-multimodal-screening.html", title: "Content Moderation APIs and Multi-Modal Screening", topic: "Moderation APIs", anim: "Generic" },
  { n: 6, id: "allow-lists-deny-lists-action-spaces", file: "lessons/0006-allow-lists-deny-lists-action-spaces.html", title: "Allow-Lists, Deny-Lists, and Constrained Action Spaces", topic: "Action Bounding", anim: "Generic" },
  { n: 7, id: "human-escalation-policy-enforcement", file: "lessons/0007-human-escalation-policy-enforcement.html", title: "Human Escalation and Policy Enforcement Loops", topic: "Human Escalation", anim: "Generic" },
  { n: 8, id: "building-production-guardrail-gateway", file: "lessons/0008-building-production-guardrail-gateway.html", title: "Building a Production AI Guardrail Gateway", topic: "Guardrail Gateway", anim: "Generic" }
];

/* ============================================================
   AI Guardrails & Validation — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "guardrail-core", title: "Guardrails & Perimeter",
    terms: [
      { term: "AI Guardrail", def: "A programmable safety boundary intercepting, inspecting, and modifying inputs and outputs before reaching models or users.", lesson: 1, tags: ["guardrails","security"] },
      { term: "Topicality Filtering", def: "Enforcing semantic boundaries to ensure queries remain within an application's defined business domain.", lesson: 2, tags: ["filtering","topicality"] },
      { term: "Llama Guard", def: "An open-weights safety classifier fine-tuned by Meta to detect safety risks and jailbreaks in prompts.", lesson: 2, tags: ["models","safety"] }
    ]
  },
  {
    id: "validation-output", title: "Validation & Secrets",
    terms: [
      { term: "Output Validation", def: "Egress inspection verifying schema compliance, factual grounding, and secret redaction before delivery.", lesson: 3, tags: ["validation","schemas"] },
      { term: "Credential Leak Scanning", def: "Regex and entropy analysis detecting internal API keys or passwords in generated responses.", lesson: 3, tags: ["security","secrets"] },
      { term: "Self-Healing Schema Loop", def: "Passing broken JSON and parser error messages to a fast model to repair syntax automatically.", lesson: 3, tags: ["patterns","schemas"] }
    ]
  },
  {
    id: "frameworks", title: "Frameworks & Moderation",
    terms: [
      { term: "NeMo Guardrails", def: "NVIDIA's open-source dialog modeling framework using Colang to program conversational rails.", lesson: 4, tags: ["tools","frameworks"] },
      { term: "Guardrails AI", def: "A Python framework providing a Hub of composable validators and automated corrective re-asking.", lesson: 4, tags: ["tools","frameworks"] },
      { term: "OpenAI Moderation API", def: "A free, sub-100ms endpoint classifying text across 11 categories of severe harm.", lesson: 5, tags: ["apis","moderation"] }
    ]
  },
  {
    id: "architecture-ops", title: "Architecture & Operations",
    terms: [
      { term: "Action Allow-List", def: "A security model permitting only explicitly approved tool calls and parameters, blocking all else by default.", lesson: 6, tags: ["security","rbac"] },
      { term: "Human Escalation Protocol", def: "The procedure of gracefully refusing unsafe requests, logging audit trails, and routing to human specialists.", lesson: 7, tags: ["operations","human"] },
      { term: "Guardrail Gateway", def: "A centralized reverse proxy enforcing uniform safety, compliance, and schema validation across all company AI services.", lesson: 8, tags: ["architecture","gateways"] }
    ]
  }
];
