/* ============================================================
   Local Models vs Cloud Models — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "running-models-locally-ollama-vllm", file: "lessons/0001-running-models-locally-ollama-vllm.html", title: "Running Models Locally: Ollama, vLLM, and llama.cpp", topic: "Local Runtimes", anim: "Generic" },
  { n: 2, id: "hardware-requirements-vram-unified-memory", file: "lessons/0002-hardware-requirements-vram-unified-memory.html", title: "Hardware Requirements: VRAM, Unified Memory, and Quantization", topic: "Hardware Math", anim: "Generic" },
  { n: 3, id: "quantization-explained-gguf-awq", file: "lessons/0003-quantization-explained-gguf-awq.html", title: "Quantization Explained: FP16, INT8, INT4 (GGUF, AWQ, EXL2)", topic: "Quantization", anim: "Generic" },
  { n: 4, id: "privacy-compliance-data-sovereignty", file: "lessons/0004-privacy-compliance-data-sovereignty.html", title: "Privacy, Compliance, and Data Sovereignty (GDPR, HIPAA)", topic: "Data Sovereignty", anim: "Generic" },
  { n: 5, id: "latency-and-offline-capabilities", file: "lessons/0005-latency-and-offline-capabilities.html", title: "Latency and Offline Capabilities", topic: "Offline Operations", anim: "Generic" },
  { n: 6, id: "tco-cloud-bills-vs-hardware-costs", file: "lessons/0006-tco-cloud-bills-vs-hardware-costs.html", title: "Total Cost of Ownership: Cloud API Bills vs Local Hardware Costs", topic: "TCO Analysis", anim: "Generic" },
  { n: 7, id: "hybrid-architectures-local-cloud", file: "lessons/0007-hybrid-architectures-local-cloud.html", title: "Hybrid Architectures: Local Drafting, Cloud Reasoning", topic: "Hybrid Systems", anim: "Generic" },
  { n: 8, id: "deploying-private-models-cloud-gpus", file: "lessons/0008-deploying-private-models-cloud-gpus.html", title: "Deploying Private Open-Source Models to Cloud GPUs", topic: "Private Cloud Deployment", anim: "Generic" }
];

/* ============================================================
   Local Models vs Cloud Models — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "runtimes", title: "Runtimes & Hardware",
    terms: [
      { term: "llama.cpp", def: "A pure C/C++ inference engine supporting state-of-the-art quantization across Apple Silicon and NVIDIA hardware.", lesson: 1, tags: ["runtimes","c++"] },
      { term: "Ollama", def: "A developer-friendly CLI and local REST server packaging llama.cpp into a simple Docker-like interface.", lesson: 1, tags: ["tools","local-ai"] },
      { term: "vLLM", def: "A high-throughput LLM serving engine utilizing PagedAttention to eliminate KV-cache memory fragmentation.", lesson: 1, tags: ["serving","mlops"] }
    ]
  },
  {
    id: "memory", title: "Memory & Quantization",
    terms: [
      { term: "Unified Memory", def: "An architecture (Apple Silicon) where CPU and GPU dynamically share a single high-bandwidth memory pool.", lesson: 2, tags: ["hardware","apple"] },
      { term: "GGUF", def: "A universal single-file container format used by llama.cpp to bundle weights, metadata, and tokenizers.", lesson: 3, tags: ["formats","quantization"] },
      { term: "AWQ", def: "Activation-aware Weight Quantization — protecting the salient 1% of weights from quantization to preserve accuracy.", lesson: 3, tags: ["quantization","algorithms"] }
    ]
  },
  {
    id: "compliance", title: "Compliance & Economics",
    terms: [
      { term: "Air-Gapping", def: "Physical network isolation of computing hardware from the public internet for absolute data security.", lesson: 4, tags: ["security","compliance"] },
      { term: "Total Cost of Ownership", def: "A comprehensive financial model incorporating hardware CapEx, power, cooling, and DevOps engineering payroll.", lesson: 6, tags: ["economics","finance"] },
      { term: "Data Sovereignty", def: "Legal requirements dictating that digital data remains stored and processed within specific national borders.", lesson: 4, tags: ["legal","compliance"] }
    ]
  },
  {
    id: "architectures", title: "Hybrid & Cloud Deployment",
    terms: [
      { term: "Hybrid Architecture", def: "A system routing queries dynamically between fast, private local models and powerful cloud frontier models.", lesson: 7, tags: ["architecture","hybrid"] },
      { term: "Scale-to-Zero", def: "Serverless cloud infrastructure that dynamically terminates GPU containers when idle to eliminate wasted costs.", lesson: 8, tags: ["cloud","serverless"] },
      { term: "Tensor Parallelism", def: "Sharding individual weight matrices across multiple GPUs in a node to execute forward passes in parallel.", lesson: 8, tags: ["distributed","gpu"] }
    ]
  }
];
