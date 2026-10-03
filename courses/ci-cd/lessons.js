/* ============================================================
   CI/CD & Automated Deployment — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "philosophy-continuous-delivery", file: "lessons/0001-philosophy-continuous-delivery.html", title: "The Philosophy of Continuous Delivery: Ship Small, Ship Often", topic: "CD Philosophy", anim: "Generic" },
  { n: 2, id: "github-actions-core-concepts", file: "lessons/0002-github-actions-core-concepts.html", title: "GitHub Actions Core Concepts: Workflows, Jobs, and Steps", topic: "GitHub Actions", anim: "Generic" },
  { n: 3, id: "automated-testing-linting-gates", file: "lessons/0003-automated-testing-linting-gates.html", title: "Automated Testing & Linting Gates in CI", topic: "CI Quality Gates", anim: "Generic" },
  { n: 4, id: "matrix-builds-cross-platform-testing", file: "lessons/0004-matrix-builds-cross-platform-testing.html", title: "Matrix Builds and Cross-Platform Testing", topic: "Matrix Builds", anim: "Generic" },
  { n: 5, id: "artifacts-dependency-caching-acceleration", file: "lessons/0005-artifacts-dependency-caching-acceleration.html", title: "Artifacts, Dependency Caching, and Pipeline Acceleration", topic: "Pipeline Acceleration", anim: "Generic" },
  { n: 6, id: "cd-strategies-blue-green-canary", file: "lessons/0006-cd-strategies-blue-green-canary.html", title: "CD Strategies: Blue-Green Deployments and Canary Releases", topic: "Deployment Strategies", anim: "Generic" },
  { n: 7, id: "infrastructure-as-code-iac-gitops", file: "lessons/0007-infrastructure-as-code-iac-gitops.html", title: "Infrastructure as Code (IaC) and GitOps Principles", topic: "IaC & GitOps", anim: "Generic" },
  { n: 8, id: "building-automated-cicd-pipeline", file: "lessons/0008-building-automated-cicd-pipeline.html", title: "Building an End-to-End Automated CI/CD Pipeline", topic: "CI/CD Pipeline", anim: "Generic" }
];

/* ============================================================
   CI/CD & Automated Deployment — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "cd-foundations", title: "Continuous Delivery & Actions",
    terms: [
      { term: "Continuous Delivery", def: "A software engineering discipline where code changes are automatically prepared and safely released to production.", lesson: 1, tags: ["cicd","devops"] },
      { term: "Trunk-Based Development", def: "A branching practice where developers merge short-lived branches into main daily to prevent merge conflicts.", lesson: 1, tags: ["git","branching"] },
      { term: "GitHub Actions", def: "A cloud-native CI/CD automation platform orchestrating workflows, jobs, and steps triggered by repository events.", lesson: 2, tags: ["tools","actions"] }
    ]
  },
  {
    id: "gates-testing", title: "Gates & Matrix",
    terms: [
      { term: "Quality Gate", def: "A mandatory automated check (lint, type, test, scan) that must pass before code can be merged or deployed.", lesson: 3, tags: ["quality","gates"] },
      { term: "Branch Protection Rule", def: "Repository configuration blocking pull request merges until designated status checks pass and approvals are granted.", lesson: 3, tags: ["github","governance"] },
      { term: "Matrix Build", def: "A strategy duplicating a job across combinations of language versions and operating systems in parallel.", lesson: 4, tags: ["testing","matrix"] }
    ]
  },
  {
    id: "optimization-deploy", title: "Optimization & Deployments",
    terms: [
      { term: "Dependency Caching", def: "Reusing downloaded package caches based on lockfile hashes to slash pipeline duration from minutes to seconds.", lesson: 5, tags: ["performance","caching"] },
      { term: "Blue-Green Deployment", def: "Running two identical environments (Blue and Green) and switching router traffic instantly for zero-downtime rollouts.", lesson: 6, tags: ["deploy","bluegreen"] },
      { term: "Canary Release", def: "Incrementally routing a tiny percentage of live traffic to a new version to bound the blast radius of unexpected defects.", lesson: 6, tags: ["deploy","canary"] }
    ]
  },
  {
    id: "iac-gitops", title: "IaC & GitOps",
    terms: [
      { term: "Infrastructure as Code", def: "Provisioning and managing cloud infrastructure using declarative, version-controlled code files (Terraform).", lesson: 7, tags: ["iac","terraform"] },
      { term: "GitOps", def: "A methodology using Git as the single source of truth for infrastructure, with operators (ArgoCD) enforcing state.", lesson: 7, tags: ["gitops","argocd"] },
      { term: "Configuration Drift", def: "When live cloud infrastructure diverges from the declarative code definitions in version control.", lesson: 7, tags: ["drift","cloud"] }
    ]
  }
];
