/* ============================================================
   LLM Observability & Tracing — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "inside-the-llm-black-box", file: "lessons/0001-inside-the-llm-black-box.html", title: "Inside the LLM Black Box: Why Logs Are Not Enough", topic: "Observability Need", anim: "Generic" },
  { n: 2, id: "traces-spans-opentelemetry", file: "lessons/0002-traces-spans-opentelemetry.html", title: "Traces, Spans, and OpenTelemetry for AI (OpenInference)", topic: "OpenTelemetry", anim: "Generic" },
  { n: 3, id: "token-accounting-cost-tracking-quotas", file: "lessons/0003-token-accounting-cost-tracking-quotas.html", title: "Token Accounting, Cost Tracking, and Quotas", topic: "Token Accounting", anim: "Generic" },
  { n: 4, id: "latency-profiling-ttft-throughput", file: "lessons/0004-latency-profiling-ttft-throughput.html", title: "Latency Profiling: TTFT, Generation Speed, and Bottlenecks", topic: "Latency Profiling", anim: "Generic" },
  { n: 5, id: "prompt-logging-and-pii-scrubbing", file: "lessons/0005-prompt-logging-and-pii-scrubbing.html", title: "Prompt and Response Logging with PII Scrubbing", topic: "Privacy Scrubbing", anim: "Generic" },
  { n: 6, id: "error-tracking-fallback-anomaly-alerts", file: "lessons/0006-error-tracking-fallback-anomaly-alerts.html", title: "Error Tracking, Fallback Detection, and Anomaly Alerts", topic: "Alerting & Errors", anim: "Generic" },
  { n: 7, id: "open-source-observability-langfuse-phoenix", file: "lessons/0007-open-source-observability-langfuse-phoenix.html", title: "Open-Source Observability Stacks: Langfuse, Arize Phoenix", topic: "Observability Stacks", anim: "Generic" },
  { n: 8, id: "instrumenting-production-ai-service", file: "lessons/0008-instrumenting-production-ai-service.html", title: "Instrumenting a Production AI Service End-to-End", topic: "Production Instrumentation", anim: "Generic" }
];

/* ============================================================
   LLM Observability & Tracing — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "telemetry-core", title: "Tracing & Spans",
    terms: [
      { term: "LLM Observability", def: "The practice of collecting structured traces, spans, token metrics, and logs to understand internal AI system behavior.", lesson: 1, tags: ["observability","mlops"] },
      { term: "Trace", def: "A hierarchical tree representing the complete end-to-end execution of a request across all services and models.", lesson: 1, tags: ["telemetry","opentelemetry"] },
      { term: "Span", def: "A single timed unit of work (e.g. a tool call, vector query, or model generation) within a trace tree.", lesson: 1, tags: ["telemetry","spans"] }
    ]
  },
  {
    id: "standards-costs", title: "Standards & Accounting",
    terms: [
      { term: "OpenInference", def: "An open semantic convention standardizing OpenTelemetry attribute keys for AI models, prompts, and tokens.", lesson: 2, tags: ["standards","opentelemetry"] },
      { term: "Token Accounting", def: "Tracking prompt and completion tokens per request and tenant to calculate exact financial operating expenses.", lesson: 3, tags: ["economics","billing"] },
      { term: "Pre-Flight Quota Gate", def: "An authorization check verifying remaining tenant budget in Redis before dispatching an API call.", lesson: 3, tags: ["saas","quotas"] }
    ]
  },
  {
    id: "latency-privacy", title: "Latency & Privacy",
    terms: [
      { term: "Inter-Token Latency", def: "The elapsed duration between consecutive emitted tokens during streaming decoding.", lesson: 4, tags: ["latency","metrics"] },
      { term: "PII Scrubbing", def: "Detecting and replacing sensitive personal identifiers with synthetic placeholders before exporting telemetry.", lesson: 5, tags: ["privacy","security"] },
      { term: "Microsoft Presidio", def: "An open-source NLP framework providing customizable analyzer and anonymizer engines for PII redaction.", lesson: 5, tags: ["tools","privacy"] }
    ]
  },
  {
    id: "platforms", title: "Platforms & Alerting",
    terms: [
      { term: "Langfuse", def: "A leading open-source LLM engineering platform providing tracing, prompt management, and evaluation dashboards.", lesson: 7, tags: ["tools","platforms"] },
      { term: "Arize Phoenix", def: "An open-source observability platform specializing in RAG evaluation, embedding drift, and OpenInference tracing.", lesson: 7, tags: ["tools","rag"] },
      { term: "Fallback Detection", def: "Monitoring and alerting whenever execution fails over from primary models to secondary backup providers.", lesson: 6, tags: ["resilience","alerting"] }
    ]
  }
];
