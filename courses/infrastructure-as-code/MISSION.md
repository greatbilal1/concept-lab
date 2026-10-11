# Mission — Infrastructure as Code

## Why this course exists

In the past, system administrators provisioned cloud infrastructure by clicking through web consoles or running unversioned bash scripts. This led to "snowflake servers", configuration drift, untracked changes, and disastrous outages during disasters. Infrastructure as Code (IaC) treats servers, networks, databases, and firewalls as versioned software source code. This course builds a rock-solid mental model of declarative state management, Terraform providers, state locking, module composition, and GitOps delivery pipelines.

## What the learner can do at the end

- Contrast declarative desired-state models with imperative procedural scripts.
- Author robust Terraform configurations using providers, resources, variables, and outputs.
- Master the critical role of Terraform state, remote S3/GCS backends, and distributed DynamoDB state locking.
- Build clean, reusable, parameterized infrastructure modules adhering to the DRY principle.
- Execute the core workflow: `terraform init`, `plan`, `apply`, and `destroy`.
- Detect and remediate configuration drift when external changes occur outside of code.
- Prevent credential leaks in state files and implement Policy-as-Code (Open Policy Agent / Checkov).
- Automate infrastructure deployments within CI/CD pipelines and GitOps workflows safely.

## What this course is NOT

- Not an AWS or Azure cloud architecture overview (covered in Cloud Architecture).
- Not a container orchestration course (covered in Kubernetes & Orchestration).
- Not an Ansible configuration management manual. It focuses on declarative provisioning with Terraform / OpenTofu.

## Success looks like

When tasked with provisioning a multi-region cloud VPC with databases and compute clusters, the learner writes clean, modular, tested IaC manifests that apply predictably without manual console clicks.
