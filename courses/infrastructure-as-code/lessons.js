/* ============================================================
   Infrastructure as Code — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-infrastructure-as-code", file: "lessons/0001-why-infrastructure-as-code.html", title: "Why IaC: Declarative vs Imperative", topic: "IaC Philosophy & Declarative Infrastructure", anim: "Layers" },
  { n: 2, id: "terraform-providers-and-resources", file: "lessons/0002-terraform-providers-and-resources.html", title: "Terraform Architecture & Workflow", topic: "Terraform Primitives, Providers & State", anim: "CodePulse" },
  { n: 3, id: "state-management-and-backends", file: "lessons/0003-state-management-and-backends.html", title: "State Management & Backends", topic: "Terraform Primitives, Providers & State", anim: "Flow" },
  { n: 4, id: "variables-outputs-and-locals", file: "lessons/0004-variables-outputs-and-locals.html", title: "Variables, Outputs & Locals", topic: "Modules, Variables & Composition", anim: "LayersOrbit" },
  { n: 5, id: "modules-and-reusable-architecture", file: "lessons/0005-modules-and-reusable-architecture.html", title: "Modules & Reusable Architecture Patterns", topic: "Modules, Variables & Composition", anim: "Bars" },
  { n: 6, id: "state-drift-and-plan-lifecycle", file: "lessons/0006-state-drift-and-plan-lifecycle.html", title: "Plan Lifecycle & Drift Detection", topic: "Drift Detection, CI/CD & Security", anim: "Code" },
  { n: 7, id: "secrets-and-security-in-iac", file: "lessons/0007-secrets-and-security-in-iac.html", title: "Secrets Management, Encryption & Policy-as-Code", topic: "Drift Detection, CI/CD & Security", anim: "CodePulse" },
  { n: 8, id: "iac-in-cicd-and-gitops", file: "lessons/0008-iac-in-cicd-and-gitops.html", title: "IaC in CI/CD & GitOps Pipelines", topic: "Drift Detection, CI/CD & Security", anim: "LayersOrbit" }
];

/* ============================================================
   Infrastructure as Code — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "iac-philosophy", title: "IaC Philosophy & Declarative Systems",
    terms: [
      { term: "Infrastructure as Code", def: "The practice of managing and provisioning computing infrastructure through version-controlled code rather than physical hardware or manual interactive tools.", lesson: 1, tags: ["iac","devops"] },
      { term: "Declarative model", def: "A paradigm where code specifies the desired end-state of a system, and the tooling computes the necessary actions to achieve it.", lesson: 1, tags: ["theory"] },
      { term: "Configuration drift", def: "The divergence between the actual state of live infrastructure and the declared state in version control caused by out-of-band manual edits.", lesson: 1, tags: ["drift","operations"] },
      { term: "Idempotence", def: "The property where executing an operation multiple times produces the identical result with zero unintended side effects.", lesson: 1, tags: ["theory"] }
    ]
  },
  {
    id: "terraform-and-state", title: "Terraform Engine & State Management",
    terms: [
      { term: "Terraform Provider", def: "A plugin that translates Terraform resource declarations into API calls for cloud platforms, SaaS tools, and on-premise hardware.", lesson: 2, tags: ["terraform","providers"] },
      { term: "State file", def: "A JSON file (terraform.tfstate) mapping declared code resources to real-world cloud resource identifiers and tracking metadata.", lesson: 3, tags: ["terraform","state"] },
      { term: "Remote backend", def: "A shared remote storage location (like AWS S3 or Google Cloud Storage) hosting state files for collaborative team access.", lesson: 3, tags: ["backend","state"] },
      { term: "State locking", def: "A concurrency control mechanism (using DynamoDB or GCS locks) preventing multiple engineers or CI runs from modifying state simultaneously.", lesson: 3, tags: ["locking","concurrency"] }
    ]
  },
  {
    id: "modules-and-composition", title: "Variables, Outputs & Modules",
    terms: [
      { term: "Input variable", def: "A parameter passed into a Terraform configuration or module to customize behavior without altering source code.", lesson: 4, tags: ["variables"] },
      { term: "Output value", def: "An exported value from a Terraform configuration or module, exposing resource attributes to callers or state consumers.", lesson: 4, tags: ["outputs"] },
      { term: "Terraform Module", def: "A self-contained directory of Terraform configuration files grouped together to create a reusable infrastructure component.", lesson: 5, tags: ["modules","architecture"] },
      { term: "Data source", def: "A Terraform block that fetches and queries existing information outside of Terraform's managed scope for use in resource definitions.", lesson: 4, tags: ["data"] }
    ]
  },
  {
    id: "security-and-gitops", title: "Security, Drift & GitOps",
    terms: [
      { term: "Execution plan", def: "The detailed preview generated by terraform plan displaying precisely what resources will be created, updated, or destroyed.", lesson: 6, tags: ["plan","workflow"] },
      { term: "Drift detection", def: "The process of querying live cloud APIs to detect unauthorized or manual changes that contradict the declared IaC state.", lesson: 6, tags: ["drift","monitoring"] },
      { term: "Policy as Code", def: "The practice of writing security, compliance, and architectural rules as code (e.g. OPA, Checkov) evaluated before infrastructure is provisioned.", lesson: 7, tags: ["security","policy"] },
      { term: "GitOps", def: "An operational framework that uses Git pull requests as the single source of truth and automated gate for all infrastructure deployments.", lesson: 8, tags: ["gitops","cicd"] }
    ]
  }
];
