"use strict";

module.exports = {
  id: "infrastructure-as-code",
  title: "Infrastructure as Code",
  num: 104,
  emoji: "🏗️",
  desc: "Define, provision, and version cloud infrastructure predictably and reliably.",
  mission: `# Mission — Infrastructure as Code

## Why this course exists

In the past, system administrators provisioned cloud infrastructure by clicking through web consoles or running unversioned bash scripts. This led to "snowflake servers", configuration drift, untracked changes, and disastrous outages during disasters. Infrastructure as Code (IaC) treats servers, networks, databases, and firewalls as versioned software source code. This course builds a rock-solid mental model of declarative state management, Terraform providers, state locking, module composition, and GitOps delivery pipelines.

## What the learner can do at the end

- Contrast declarative desired-state models with imperative procedural scripts.
- Author robust Terraform configurations using providers, resources, variables, and outputs.
- Master the critical role of Terraform state, remote S3/GCS backends, and distributed DynamoDB state locking.
- Build clean, reusable, parameterized infrastructure modules adhering to the DRY principle.
- Execute the core workflow: \`terraform init\`, \`plan\`, \`apply\`, and \`destroy\`.
- Detect and remediate configuration drift when external changes occur outside of code.
- Prevent credential leaks in state files and implement Policy-as-Code (Open Policy Agent / Checkov).
- Automate infrastructure deployments within CI/CD pipelines and GitOps workflows safely.

## What this course is NOT

- Not an AWS or Azure cloud architecture overview (covered in Cloud Architecture).
- Not a container orchestration course (covered in Kubernetes & Orchestration).
- Not an Ansible configuration management manual. It focuses on declarative provisioning with Terraform / OpenTofu.

## Success looks like

When tasked with provisioning a multi-region cloud VPC with databases and compute clusters, the learner writes clean, modular, tested IaC manifests that apply predictably without manual console clicks.
`,
  notes: `# Notes — Infrastructure as Code

## Decisions
- Group into four themes: IaC Philosophy, Core Terraform & State, Reusable Modules, and Security & CI/CD.
- Ground explanations in Terraform/OpenTofu mechanics, state reconciliation, and dependency graph resolution.
`,
  resources: `# Resources — Infrastructure as Code

## Knowledge (primary sources)
- Official Terraform Documentation (developer.hashicorp.com/terraform).
- *Terraform: Up & Running* by Yevgeniy Brikman (O'Reilly).
- OpenTofu Manifesto and Architecture (opentofu.org).
- Checkov & Open Policy Agent (OPA) Documentation.

## Wisdom
- The web console is read-only. If an infrastructure change is not recorded in Git and applied via IaC, it does not exist.
`,
  cheatsheetSections: [
    {
      title: "Core CLI Workflow",
      label: "Lifecycle commands",
      code: `# Initialize providers and backend
terraform init

# Preview changes against current state
terraform plan -out=tfplan

# Apply verified execution plan
terraform apply tfplan

# Inspect current managed state
terraform state list
terraform show`,
      lessonN: 2,
      lessonSlug: "terraform-providers-and-resources",
      lessonTitle: "Terraform Architecture & Workflow"
    },
    {
      title: "Remote State & Locking",
      label: "Backend configuration",
      code: `terraform {
  required_version = ">= 1.5.0"
  backend "s3" {
    bucket         = "corp-tf-state-prod"
    key            = "vpc/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks" # State locking
    encrypt        = true
  }
}`,
      lessonN: 3,
      lessonSlug: "state-management-and-backends",
      lessonTitle: "State Management & Backends"
    },
    {
      title: "Resource & Variables",
      label: "Declarative resource block",
      code: `variable "environment" {
  type        = string
  description = "Target deployment environment"
  default     = "production"
}

resource "aws_s3_bucket" "data_lake" {
  bucket = "company-data-\${var.environment}"
  tags = {
    Environment = var.environment
    ManagedBy   = "Terraform"
  }
}

output "bucket_arn" {
  value       = aws_s3_bucket.data_lake.arn
  description = "The Amazon Resource Name of the bucket"
}`,
      lessonN: 4,
      lessonSlug: "variables-outputs-and-locals",
      lessonTitle: "Variables, Outputs & Locals"
    },
    {
      title: "Module Instantiation",
      label: "Reusable infrastructure block",
      code: `module "vpc" {
  source = "./modules/vpc"

  cidr_block   = "10.0.0.0/16"
  subnet_count = 3
  environment  = "prod"
}

output "vpc_id" {
  value = module.vpc.id
}`,
      lessonN: 5,
      lessonSlug: "modules-and-reusable-architecture",
      lessonTitle: "Modules & Reusable Architecture"
    }
  ],
  glossaryGroups: [
    {
      id: "iac-philosophy",
      title: "IaC Philosophy & Declarative Systems",
      terms: [
        { term: "Infrastructure as Code", def: "The practice of managing and provisioning computing infrastructure through version-controlled code rather than physical hardware or manual interactive tools.", lesson: 1, tags: ["iac", "devops"] },
        { term: "Declarative model", def: "A paradigm where code specifies the desired end-state of a system, and the tooling computes the necessary actions to achieve it.", lesson: 1, tags: ["theory"] },
        { term: "Configuration drift", def: "The divergence between the actual state of live infrastructure and the declared state in version control caused by out-of-band manual edits.", lesson: 1, tags: ["drift", "operations"] },
        { term: "Idempotence", def: "The property where executing an operation multiple times produces the identical result with zero unintended side effects.", lesson: 1, tags: ["theory"] }
      ]
    },
    {
      id: "terraform-and-state",
      title: "Terraform Engine & State Management",
      terms: [
        { term: "Terraform Provider", def: "A plugin that translates Terraform resource declarations into API calls for cloud platforms, SaaS tools, and on-premise hardware.", lesson: 2, tags: ["terraform", "providers"] },
        { term: "State file", def: "A JSON file (terraform.tfstate) mapping declared code resources to real-world cloud resource identifiers and tracking metadata.", lesson: 3, tags: ["terraform", "state"] },
        { term: "Remote backend", def: "A shared remote storage location (like AWS S3 or Google Cloud Storage) hosting state files for collaborative team access.", lesson: 3, tags: ["backend", "state"] },
        { term: "State locking", def: "A concurrency control mechanism (using DynamoDB or GCS locks) preventing multiple engineers or CI runs from modifying state simultaneously.", lesson: 3, tags: ["locking", "concurrency"] }
      ]
    },
    {
      id: "modules-and-composition",
      title: "Variables, Outputs & Modules",
      terms: [
        { term: "Input variable", def: "A parameter passed into a Terraform configuration or module to customize behavior without altering source code.", lesson: 4, tags: ["variables"] },
        { term: "Output value", def: "An exported value from a Terraform configuration or module, exposing resource attributes to callers or state consumers.", lesson: 4, tags: ["outputs"] },
        { term: "Terraform Module", def: "A self-contained directory of Terraform configuration files grouped together to create a reusable infrastructure component.", lesson: 5, tags: ["modules", "architecture"] },
        { term: "Data source", def: "A Terraform block that fetches and queries existing information outside of Terraform's managed scope for use in resource definitions.", lesson: 4, tags: ["data"] }
      ]
    },
    {
      id: "security-and-gitops",
      title: "Security, Drift & GitOps",
      terms: [
        { term: "Execution plan", def: "The detailed preview generated by terraform plan displaying precisely what resources will be created, updated, or destroyed.", lesson: 6, tags: ["plan", "workflow"] },
        { term: "Drift detection", def: "The process of querying live cloud APIs to detect unauthorized or manual changes that contradict the declared IaC state.", lesson: 6, tags: ["drift", "monitoring"] },
        { term: "Policy as Code", def: "The practice of writing security, compliance, and architectural rules as code (e.g. OPA, Checkov) evaluated before infrastructure is provisioned.", lesson: 7, tags: ["security", "policy"] },
        { term: "GitOps", def: "An operational framework that uses Git pull requests as the single source of truth and automated gate for all infrastructure deployments.", lesson: 8, tags: ["gitops", "cicd"] }
      ]
    }
  ],
  topics: [
    "IaC Philosophy & Declarative Infrastructure",
    "Terraform Primitives, Providers & State",
    "Modules, Variables & Composition",
    "Drift Detection, CI/CD & Security"
  ],
  lessons: [
    {
      n: 1,
      id: "why-infrastructure-as-code",
      title: "Why IaC: Declarative vs Imperative",
      topic: "IaC Philosophy & Declarative Infrastructure",
      anim: "Layers",
      lede: "Manual cloud configuration creates untracked drift and outages. Learn how declarative code brings software engineering rigor to infrastructure.",
      winShort: "Contrast declarative vs imperative models and explain the consequences of configuration drift",
      missionLink: "Prevent undocumented snowflake infrastructure and catastrophic cloud misconfigurations",
      sec1: {
        title: "The failure of manual infrastructure",
        content: `<p>When an engineer provisions a cloud database by clicking through an AWS or Azure web dashboard, zero record of that action is stored in version control. Who made the change? Why was that subnet chosen? What was the previous setting?</p><p>This produces <b>snowflake servers</b>: unique systems that nobody understands and nobody dares touch. <b>Infrastructure as Code (IaC)</b> models all infrastructure as declarative source code stored in Git, reviewed via Pull Requests, and applied predictably.</p>`,
        keyIdea: "IaC replaces manual console clicks with version-controlled, auditable, reproducible source code."
      },
      predict: {
        q: "What is the key difference between imperative (Bash/Python scripts) and declarative (Terraform/OpenTofu) infrastructure management?",
        a: [
          "Imperative describes HOW to make changes step-by-step; declarative describes WHAT the desired end-state should look like",
          "Imperative is faster than declarative in all cloud providers",
          "Declarative only works with Linux servers",
          "Imperative tools store state in etcd automatically"
        ],
        c: 0,
        why: "Declarative code specifies the goal (e.g., '3 servers with tag prod'), and the engine resolves what API calls to make."
      },
      sec2: {
        title: "Idempotence and configuration drift",
        content: `<p>A hallmark of quality IaC tools is <b>idempotence</b>: running <code>terraform apply</code> ten times in a row without code changes produces zero modifications after the first run.</p><p>When an administrator makes emergency manual edits directly in the web console, <b>configuration drift</b> occurs: the live cloud reality diverges from Git code. IaC tools detect this drift during the planning phase.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Git Repository", lines: ["vpc.tf, db.tf, ec2.tf", "Single source of truth", "Peer reviewed via Pull Request"] },
          { title: "IaC Engine (Terraform)", lines: ["Calculates Delta: Desired vs Live", "Executes minimal API calls", "Idempotent execution"] },
          { title: "Cloud Provider (AWS/GCP)", lines: ["VPC, Subnets, Gateways", "Live state matches code exactly", "Zero manual clicks"] }
        ]
      },
      sec3: {
        title: "Tracing declarative delta computation",
        content: `<p>Trace how a declarative engine computes only the necessary changes between live state and desired state.</p>`,
      },
      trace: {
        code: [
          "# Declared Code: server_count = 5",
          "# Current Live Cloud State: 3 servers exist",
          "1. Engine queries cloud API: Discovers servers 1, 2, 3",
          "2. Engine compares: Desired (5) - Current (3) = Delta (+2 servers)",
          "3. Plan output: +2 to add, ~0 to change, -0 to destroy",
          "4. Apply executed: Only 2 new servers are launched"
        ],
        steps: [
          { line: 0, vars: { desired_state: "5 servers" } },
          { line: 1, vars: { observed_state: "3 servers" } },
          { line: 2, vars: { calculated_diff: "+2 resources needed" } },
          { line: 4, vars: { result: "Desired state achieved without recreating existing 3 servers" } }
        ]
      },
      practiceIntro: "Test your understanding of IaC concepts and declarative paradigms.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A paradigm that defines WHAT the end state should be is <0>.",
          "An operation that produces the same result regardless of how many times it runs is <1>.",
          "The divergence between code and live cloud state is called configuration <2>."
        ],
        blanks: [
          { a: ["declarative"], why: "Declarative defines desired outcome." },
          { a: ["idempotent"], why: "Idempotence guarantees safe re-runs." },
          { a: ["drift"], why: "Configuration drift represents state divergence." }
        ]
      },
      win: "You can explain the necessity of IaC, contrast declarative vs imperative approaches, and identify configuration drift.",
      nextTasks: [
        "Audit your cloud environment for unmanaged resources created through the web console.",
        "Compare an imperative AWS CLI script with an equivalent declarative Terraform block.",
        "Explain why clickops (manual console clicks) is banned in high-reliability engineering teams."
      ],
      primarySource: "Yevgeniy Brikman, *Terraform: Up & Running*, Chapter 1: *Why Terraform*.",
      quiz: [
        {
          q: "What is the primary risk of managing cloud infrastructure through web consoles ('ClickOps')?",
          a: [
            "Changes are untracked, unversioned, impossible to reproduce identically, and prone to human error",
            "Web consoles cost 20% more in cloud billing fees",
            "Web consoles only work during business hours",
            "Web consoles do not support multi-factor authentication"
          ],
          c: 0,
          why: "Manual console changes bypass code review, documentation, and automated testing, causing drift and outages."
        },
        {
          q: "What does it mean for an infrastructure tool to be 'idempotent'?",
          a: [
            "Applying the configuration multiple times leaves the system in the exact same state without duplicate resources",
            "The tool executes commands in reverse chronological order",
            "The tool only provisions resources on local computers",
            "The configuration can only be applied once in a lifetime"
          ],
          c: 0,
          why: "Idempotence ensures that reapplying unchanged code causes zero unintended side effects or duplicate resources."
        },
        {
          q: "What is configuration drift?",
          a: [
            "When the live state of cloud infrastructure diverges from the state declared in version-controlled code",
            "When a laptop moves between different physical Wi-Fi networks",
            "When cloud servers migrate to newer CPU architectures",
            "When Git branch names are renamed"
          ],
          c: 0,
          why: "Drift happens when manual out-of-band changes or outages alter real-world resources without updating code."
        },
        {
          q: "Why is a declarative model preferred over an imperative shell script for complex infrastructure?",
          a: [
            "Declarative tools calculate the delta and handle dependencies, retries, and deletions automatically",
            "Shell scripts are illegal in production data centers",
            "Declarative tools do not require network access",
            "Declarative code runs entirely on the client browser"
          ],
          c: 0,
          why: "Declarative systems relieve the engineer of writing complex state checks, error recovery, and ordering logic."
        }
      ]
    },
    {
      n: 2,
      id: "terraform-providers-and-resources",
      title: "Terraform Architecture & Workflow",
      topic: "Terraform Primitives, Providers & State",
      anim: "CodePulse",
      lede: "Terraform connects to hundreds of clouds via plugins called providers. Learn the core syntax and CLI lifecycle.",
      winShort: "Write provider and resource blocks in HCL and navigate the init, plan, apply, and destroy workflow",
      missionLink: "Provision cloud infrastructure cleanly using the industry-standard HashiCorp Configuration Language (HCL)",
      sec1: {
        title: "The Terraform architecture: Core + Plugins",
        content: `<p>Terraform is divided into two parts:</p><ul><li><b>Terraform Core:</b> The open-source engine that parses HCL code, builds the directed acyclic graph (DAG) of resource dependencies, and computes plans.</li><li><b>Providers (Plugins):</b> Independent binary executables (e.g. AWS, GCP, Azure, GitHub, Cloudflare, Kubernetes) that translate Terraform resource requests into real REST API calls.</li></ul><p>When you run <code>terraform init</code>, Terraform inspects your provider requirements and downloads the matching provider binaries.</p>`,
        keyIdea: "Terraform Core calculates dependencies and plans; Providers make the actual vendor-specific API calls."
      },
      predict: {
        q: "What happens if you run 'terraform plan' in a directory before running 'terraform init'?",
        a: [
          "It fails with an error stating that providers and backend are not initialized",
          "It automatically downloads all providers silently",
          "It runs the plan against local mock servers",
          "It deletes the current directory"
        ],
        c: 0,
        why: "terraform init is mandatory to download provider plugins and configure the backend before running plans."
      },
      sec2: {
        title: "The four core workflow commands",
        content: `<p>Mastering Terraform requires mastering the four primary lifecycle commands:</p><ul><li><code>terraform init:</code> Downloads provider plugins and initializes the state backend.</li><li><code>terraform plan:</code> Compares code against live state and displays a non-destructive preview of changes.</li><li><code>terraform apply:</code> Prompts for confirmation and executes the changes against cloud APIs.</li><li><code>terraform destroy:</code> Safely tears down and deletes all resources tracked by the state file.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "1. terraform init", lines: ["Downloads plugins (AWS, Azure)", "Configures state storage"] },
          { title: "2. terraform plan", lines: ["Refreshes live state", "Computes additions / changes", "Zero infrastructure mutations"] },
          { title: "3. terraform apply", lines: ["Executes cloud API calls", "Updates terraform.tfstate", "Live resources created"] }
        ]
      },
      sec3: {
        title: "Tracing HCL resource declaration and dependency",
        content: `<p>Trace how Terraform automatically infers dependencies when one resource references another.</p>`,
      },
      trace: {
        code: [
          "resource 'aws_vpc' 'main' { cidr_block = '10.0.0.0/16' }",
          "resource 'aws_subnet' 'web' {",
          "  vpc_id     = aws_vpc.main.id # Implicit dependency!",
          "  cidr_block = '10.0.1.0/24'",
          "}"
        ],
        steps: [
          { line: 0, vars: { resource_1: "aws_vpc.main defined" } },
          { line: 2, vars: { dependency: "aws_subnet.web references aws_vpc.main.id" } },
          { line: 3, vars: { dag_graph: "Terraform enforces creation order: VPC created first, then Subnet" } }
        ]
      },
      practiceIntro: "Test your mastery of Terraform architecture, providers, and workflow commands.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The plugin that talks to a specific cloud provider's API is a <0>.",
          "The command that downloads provider binaries and configures the backend is terraform <1>.",
          "The command that previews changes without making any cloud modifications is terraform <2>."
        ],
        blanks: [
          { a: ["provider"], why: "Providers translate HCL to API calls." },
          { a: ["init"], why: "terraform init sets up dependencies." },
          { a: ["plan"], why: "terraform plan generates a non-destructive diff." }
        ]
      },
      win: "You understand Terraform's plugin architecture and can execute the standard init, plan, and apply lifecycle.",
      nextTasks: [
        "Initialize a project with the local provider (local_file) and create a test file using terraform apply.",
        "Inspect the hidden .terraform directory created after running terraform init.",
        "Generate a dependency graph image using terraform graph | dot -Tpng > graph.png."
      ],
      primarySource: "HashiCorp Terraform Documentation: *The Core Workflow*.",
      quiz: [
        {
          q: "What is the function of a Terraform Provider?",
          a: [
            "It is a plugin that translates Terraform configuration blocks into REST API calls for a specific service or cloud",
            "It provides free electricity to cloud data centers",
            "It encrypts Git commits before pushing to GitHub",
            "It runs automated unit tests inside Docker containers"
          ],
          c: 0,
          why: "Providers bridge Terraform Core with cloud vendor APIs like AWS, GCP, Azure, and Datadog."
        },
        {
          q: "Why is 'terraform plan' an essential step before running 'terraform apply'?",
          a: [
            "It allows engineers to review the exact resources to be created, modified, or destroyed before any mutations occur",
            "It converts HCL into Python scripts",
            "It benchmarks CPU performance on the local machine",
            "It deletes old backup files from S3"
          ],
          c: 0,
          why: "terraform plan generates a safe, non-destructive preview of proposed infrastructure changes."
        },
        {
          q: "How does Terraform determine the order in which to create resources?",
          a: [
            "It builds a Directed Acyclic Graph (DAG) by tracing references between resources",
            "It creates resources in strict top-to-bottom order as written in the .tf file",
            "It creates all resources simultaneously in parallel without ordering",
            "It sorts resources alphabetically by resource name"
          ],
          c: 0,
          why: "Terraform parses property references (e.g. subnet referencing vpc.id) to construct an execution dependency graph."
        },
        {
          q: "What does 'terraform destroy' do?",
          a: [
            "It terminates and removes all cloud resources tracked in the current state file",
            "It formats the local computer's hard drive",
            "It deletes the Git commit history",
            "It cancels your cloud provider billing account"
          ],
          c: 0,
          why: "terraform destroy cleanly tears down all infrastructure provisioned by the current configuration."
        }
      ]
    },
    {
      n: 3,
      id: "state-management-and-backends",
      title: "State Management & Backends",
      topic: "Terraform Primitives, Providers & State",
      anim: "Flow",
      lede: "Terraform's state file is the single source of truth mapping your code to real-world cloud resources. Learn how to protect and lock it.",
      winShort: "Configure remote backends with state locking and manage state safely across collaborative engineering teams",
      missionLink: "Prevent corrupted state files and concurrent apply race conditions in multi-engineer teams",
      sec1: {
        title: "Why Terraform needs state",
        content: `<p>When you declare <code>resource "aws_instance" "web"</code>, Terraform must record that this code block corresponds to the real-world cloud ID <code>i-0a8b9c1d2e3f</code> in AWS.</p><p>This mapping is stored in the <b>Terraform State file</b> (<code>terraform.tfstate</code>). The state file also caches metadata, resource dependencies, and sensitive output values. If you lose the state file, Terraform forgets what it owns and attempts to create duplicate resources on the next apply.</p>`,
        keyIdea: "The state file maps declarative code identifiers to real-world cloud IDs; without state, Terraform cannot manage existing resources."
      },
      predict: {
        q: "Why should you NEVER commit 'terraform.tfstate' to a public Git repository?",
        a: [
          "The state file often contains sensitive plaintext secrets (database passwords, private keys, API tokens)",
          "Git cannot store files that end in .tfstate",
          "Committing it automatically deletes the cloud resources",
          "GitHub bans accounts that store JSON files"
        ],
        c: 0,
        why: "Terraform state stores raw resource properties in plaintext, meaning secrets and credentials would be exposed in Git history."
      },
      sec2: {
        title: "Remote backends and state locking",
        content: `<p>By default, Terraform stores state on your local laptop disk (<code>local backend</code>). In a team, this is disastrous: changes made by engineer A are unknown to engineer B.</p><p>A <b>remote backend</b> (e.g. AWS S3, Google Cloud Storage, Terraform Cloud) stores the state in a central, encrypted bucket. To prevent two engineers from running <code>terraform apply</code> at the same second (which corrupts state), backends provide <b>state locking</b> (e.g. via DynamoDB).</p>`,
      },
      diagram: {
        boxes: [
          { title: "Engineer A / CI Pipeline", lines: ["terraform apply", "Acquires lock in DynamoDB", "Executes changes safely"] },
          { title: "DynamoDB Lock Table", lines: ["LockID: state-prod", "Blocks Engineer B with error:", "'Error acquiring state lock'"] },
          { title: "Encrypted S3 Bucket", lines: ["terraform.tfstate (versioned)", "Single source of truth", "Encrypted with KMS"] }
        ]
      },
      sec3: {
        title: "Tracing state locking contention",
        content: `<p>Trace how state locking prevents race conditions between simultaneous deployments.</p>`,
      },
      trace: {
        code: [
          "1. CI Runner 1 executes: terraform apply",
          "2. Runner 1 writes lock entry to DynamoDB: { LockID: 'vpc/prod', Info: 'Runner-1' }",
          "3. Engineer runs: terraform apply locally",
          "4. Local apply queries DynamoDB: Lock already held by Runner-1",
          "5. Local apply immediately halts with: 'Error: Error acquiring the state lock'",
          "6. Runner 1 finishes, releases DynamoDB lock; state remains uncorrupted"
        ],
        steps: [
          { line: 0, vars: { runner_1: "Acquiring state lock" } },
          { line: 1, vars: { lock_status: "LOCKED by Runner-1" } },
          { line: 3, vars: { contention: "Second process blocked" } },
          { line: 5, vars: { safety: "Race condition successfully averted" } }
        ]
      },
      practiceIntro: "Test your understanding of Terraform state files and remote backend architecture.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The file that maps HCL code to real-world cloud resource IDs is terraform.<0>.",
          "A shared storage location for team state is called a remote <1>.",
          "The feature that prevents concurrent apply executions from corrupting state is state <2>."
        ],
        blanks: [
          { a: ["tfstate"], why: "terraform.tfstate is the state file." },
          { a: ["backend"], why: "Backends store state files centrally." },
          { a: ["locking"], why: "State locking prevents concurrent race conditions." }
        ]
      },
      win: "You can configure remote backends with S3 and DynamoDB locking, protect sensitive state data, and prevent state corruption.",
      nextTasks: [
        "Configure an S3 remote backend with server-side KMS encryption and versioning.",
        "Create a DynamoDB table with primary key LockID to enable state locking.",
        "Inspect the contents of a state file using terraform state show <resource_name>."
      ],
      primarySource: "HashiCorp Terraform Documentation: *Backend Type: s3* and *State Locking*.",
      quiz: [
        {
          q: "What is the primary role of the Terraform state file?",
          a: [
            "It records the mapping between code resource declarations and real cloud resource identifiers",
            "It compiles HCL code into C++ binaries",
            "It acts as a load balancer for web traffic",
            "It monitors server CPU usage in real time"
          ],
          c: 0,
          why: "State is the critical bridge that allows Terraform to track which real-world cloud objects correspond to your code."
        },
        {
          q: "What danger occurs when multiple engineers run 'terraform apply' simultaneously without state locking?",
          a: [
            "Race conditions cause write conflicts that corrupt the state file or provision duplicate resources",
            "The cloud provider doubles the server bill",
            "The local computer crashes",
            "The code is automatically deleted from Git"
          ],
          c: 0,
          why: "Without locking, overlapping state writes overwrite each other, causing catastrophic state corruption."
        },
        {
          q: "Why must state files stored in remote object storage (like S3) be encrypted at rest?",
          a: [
            "Because Terraform state files contain plaintext secrets, passwords, and sensitive environment keys",
            "Because S3 requires all files to be encrypted by federal law",
            "Because unencrypted state files cannot be parsed by Terraform",
            "Because encryption makes state downloads 10 times faster"
          ],
          c: 0,
          why: "State files frequently hold database passwords and private keys in raw JSON; encryption is mandatory."
        },
        {
          q: "Which command lists all resources currently tracked in the state file without inspecting cloud consoles?",
          a: [
            "terraform state list",
            "terraform list all",
            "terraform resources",
            "terraform dump"
          ],
          c: 0,
          why: "terraform state list outputs every resource address tracked in the active state."
        }
      ]
    },
    {
      n: 4,
      id: "variables-outputs-and-locals",
      title: "Variables, Outputs & Locals",
      topic: "Modules, Variables & Composition",
      anim: "LayersOrbit",
      lede: "Hardcoded values make code brittle. Use input variables for parameterization, local values for DRY logic, and outputs for exports.",
      winShort: "Parameterize Terraform code with typed input variables, compute locals, and export resource attributes via outputs",
      missionLink: "Write flexible, parameterized configurations that deploy across dev, staging, and production effortlessly",
      sec1: {
        title: "Input variables: Parameterizing code",
        content: `<p>Hardcoding values like <code>region = "us-east-1"</code> or <code>instance_type = "t3.micro"</code> makes configurations rigid and impossible to reuse across environments. <b>Input variables</b> act as function parameters for your infrastructure.</p><p>A variable declaration specifies its <code>type</code> (string, number, bool, list, map), a <code>description</code>, an optional <code>default</code>, and optional <code>validation</code> blocks with custom error messages.</p>`,
        keyIdea: "Input variables parameterize infrastructure; always declare explicit types and descriptions."
      },
      predict: {
        q: "If a variable has no 'default' value specified and is not passed via CLI or tfvars file, what does Terraform do during 'terraform apply'?",
        a: [
          "It interactively prompts the user in the terminal to enter a value before proceeding",
          "It assigns the value to null automatically",
          "It crashes immediately with a SyntaxError",
          "It picks a random string"
        ],
        c: 0,
        why: "Variables without defaults become required inputs; Terraform prompts the operator interactively if omitted."
      },
      sec2: {
        title: "Locals and Output values",
        content: `<p>Two other primitives round out configuration flexibility:</p><ul><li><b>Locals (<code>local.name</code>):</b> Named expressions used to eliminate repetition (DRY) and compute complex values (e.g. combining environment and project name into standard tag conventions).</li><li><b>Outputs (<code>output.name</code>):</b> Exposes values to the terminal user, other modules, or external tools via <code>terraform output</code> (e.g. database endpoint or load balancer DNS).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Input Variables", lines: ["var.environment ('prod')", "var.db_instance_class", "Configured via .tfvars or CLI"] },
          { title: "Locals Block", lines: ["local.name_prefix = '\${var.project}-\${var.env}'", "Common tagging logic", "Internal calculations"] },
          { title: "Output Values", lines: ["output 'lb_dns' { value = aws_lb.main.dns_name }", "Exposed to CI/CD & users"] }
        ]
      },
      sec3: {
        title: "Tracing variable precedence order",
        content: `<p>Trace which value wins when variables are defined in multiple locations.</p>`,
      },
      trace: {
        code: [
          "1. Default in variable block: 'dev'",
          "2. Environment variable: TF_VAR_environment='staging'",
          "3. terraform.tfvars file: environment='prod'",
          "4. Command line flag: -var='environment=hotfix' -> HIGHEST PRECEDENCE",
          "Result: Variable evaluated as 'hotfix'"
        ],
        steps: [
          { line: 0, vars: { lowest_priority: "default in declaration" } },
          { line: 1, vars: { mid_priority_1: "TF_VAR_* environment variable" } },
          { line: 2, vars: { mid_priority_2: "terraform.tfvars file" } },
          { line: 3, vars: { highest_priority: "Direct CLI -var flag overrides all previous settings" } }
        ]
      },
      practiceIntro: "Test your understanding of variables, locals, and outputs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Input variables are referenced in HCL using the prefix <0>.",
          "Internal intermediate calculated expressions are defined in a <1> block.",
          "Values exported from a Terraform configuration are declared with the <2> block."
        ],
        blanks: [
          { a: ["var"], why: "var.name accesses input variables." },
          { a: ["locals"], why: "locals define reusable expressions." },
          { a: ["output"], why: "output blocks export data." }
        ]
      },
      win: "You can parameterize infrastructure with typed variables, use locals to avoid repetition, and export outputs cleanly.",
      nextTasks: [
        "Create a terraform.tfvars file to customize variable values for a staging environment.",
        "Add a custom validation block to an input variable ensuring an S3 bucket name is lowercase.",
        "Retrieve output values programmatically using terraform output -json."
      ],
      primarySource: "HashiCorp Terraform Documentation: *Input Variables*, *Local Values*, and *Outputs*.",
      quiz: [
        {
          q: "What is the primary difference between an input variable and a local value in Terraform?",
          a: [
            "Variables can be customized by callers/operators; locals are internal constants and computed expressions defined within the code",
            "Variables can only be strings; locals can be any type",
            "Variables are stored on disk; locals are stored in RAM",
            "Variables run on the cloud; locals run on your laptop"
          ],
          c: 0,
          why: "Variables serve as parameters for external inputs, while locals define internal DRY expressions."
        },
        {
          q: "Which source has the HIGHEST precedence when setting Terraform variable values?",
          a: [
            "Command line -var or -var-file flags",
            "The default argument in the variable block",
            "The terraform.tfvars file",
            "Environment variables prefixed with TF_VAR_"
          ],
          c: 0,
          why: "Direct command-line arguments override all file and environment-based defaults."
        },
        {
          q: "What does setting 'sensitive = true' on an output block achieve?",
          a: [
            "It prevents Terraform from displaying the value in plaintext terminal logs during plan and apply",
            "It automatically encrypts the database with AES-256",
            "It deletes the variable from the state file",
            "It requires biometric authentication to view"
          ],
          c: 0,
          why: "sensitive = true redacts the output in stdout logs (note: it still exists in the state file)."
        },
        {
          q: "How do you define an input variable that accepts a list of string IP addresses?",
          a: [
            "type = list(string)",
            "type = array<string>",
            "type = string[]",
            "type = ListOfString"
          ],
          c: 0,
          why: "HCL uses list(type) syntax for collections of homogeneous elements."
        }
      ]
    },
    {
      n: 5,
      id: "modules-and-reusable-architecture",
      title: "Modules & Reusable Architecture Patterns",
      topic: "Modules, Variables & Composition",
      anim: "Bars",
      lede: "Do not copy-paste 300 lines of VPC code across 10 repositories. Package infrastructure into clean, reusable modules.",
      winShort: "Author reusable Terraform modules with inputs, outputs, and semantic versioning",
      missionLink: "Standardize cloud infrastructure architecture across enterprise development teams",
      sec1: {
        title: "What is a Terraform Module?",
        content: `<p>Any directory containing <code>.tf</code> files is technically a module (the <b>root module</b>). When you organize code into subdirectories and call them using a <code>module "name" { source = "..." }</code> block, you create a <b>reusable child module</b>.</p><p>Modules function like functions in programming languages: they accept input variables as arguments, provision resources internally, and return output values to the caller.</p>`,
        keyIdea: "Modules package related resources into standardized, reusable infrastructure building blocks."
      },
      predict: {
        q: "Can a root module directly access an internal resource attribute of a child module (e.g. module.vpc.aws_subnet.main.id)?",
        a: [
          "No: child module internals are private; the child module must explicitly export the attribute via an output block",
          "Yes, all child resources are globally accessible everywhere in Terraform",
          "Yes, using the global:: prefix",
          "Only if both modules share the same file name"
        ],
        c: 0,
        why: "Modules enforce encapsulation: child module resources are private unless explicitly exported as outputs."
      },
      sec2: {
        title: "Module sources: Local vs Remote vs Registry",
        content: `<p>The <code>source</code> argument specifies where Terraform fetches the module code:</p><ul><li><b>Local paths:</b> <code>source = "./modules/database"</code> (great for mono-repos).</li><li><b>Public Registry:</b> <code>source = "terraform-aws-modules/vpc/aws"</code> with <code>version = "5.0.0"</code>.</li><li><b>Private Git:</b> <code>source = "git::https://github.com/corp/tf-modules.git?ref=v1.2.0"</code>.</li></ul><p>Always pin remote module sources to a specific <b>tag or version</b> to prevent unexpected breaking changes during deployment.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Root Module (main.tf)", lines: ["module 'network' {", "  source = './modules/vpc'", "  cidr = '10.0.0.0/16'", "}"] },
          { title: "Child Module (/modules/vpc)", lines: ["variables.tf (inputs)", "main.tf (aws_vpc, subnets)", "outputs.tf (vpc_id, subnet_ids)"] },
          { title: "Root Output", lines: ["output 'network_id' {", "  value = module.network.vpc_id", "}"] }
        ]
      },
      sec3: {
        title: "Tracing module instantiation and graph resolution",
        content: `<p>Trace how Terraform prefixes module resource names inside the unified state graph.</p>`,
      },
      trace: {
        code: [
          "module 'prod_db' { source = './modules/rds'; db_name = 'prod' }",
          "module 'staging_db' { source = './modules/rds'; db_name = 'staging' }",
          "State address 1: module.prod_db.aws_db_instance.main",
          "State address 2: module.staging_db.aws_db_instance.main"
        ],
        steps: [
          { line: 0, vars: { module_1: "Instantiated with name prod_db" } },
          { line: 1, vars: { module_2: "Instantiated with name staging_db" } },
          { line: 2, vars: { state_isolation: "Resources scoped under module namespace" } },
          { line: 3, vars: { safety: "Zero naming collisions despite identical internal resource names" } }
        ]
      },
      practiceIntro: "Test your mastery of Terraform module design and composition.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The required argument in a module block pointing to its location is <0>.",
          "To expose a value from a child module to the parent module, use an <1> block.",
          "Locking a module to a specific release tag is called version <2>."
        ],
        blanks: [
          { a: ["source"], why: "source specifies module path or URL." },
          { a: ["output"], why: "outputs act as module return values." },
          { a: ["pinning"], why: "Version pinning prevents breaking changes." }
        ]
      },
      win: "You can design and publish clean, encapsulated, versioned infrastructure modules for team-wide reuse.",
      nextTasks: [
        "Create a reusable /modules/s3-static-site module that provisions a bucket with website hosting.",
        "Refactor an existing monolithic configuration into separate network and compute modules.",
        "Reference a public Terraform Registry module with explicit version pinning."
      ],
      primarySource: "HashiCorp Terraform Documentation: *Modules Overview* and *Module Development*.",
      quiz: [
        {
          q: "Why is version pinning (e.g. version = \"5.1.0\") critical when using remote Terraform modules?",
          a: [
            "It prevents upstream authors from introducing breaking API changes or unintended resource destructions unexpectedly",
            "It makes the module download 5 times faster",
            "It is required by the Git specification",
            "It encrypts the module source code"
          ],
          c: 0,
          why: "Pinning guarantees that your build remains deterministic and immune to unexpected upstream changes."
        },
        {
          q: "How does a parent module access a value computed inside a child module?",
          a: [
            "The child module must declare an output block, accessed as module.<name>.<output_name>",
            "The parent module reads the child's local variables directly",
            "The child module writes the value to an operating system environment variable",
            "The parent module executes a regex search over the child's .tf files"
          ],
          c: 0,
          why: "Child modules encapsulate resources; outputs are the only public API contract exposed to callers."
        },
        {
          q: "What command must be run whenever you add a new module block to your configuration?",
          a: [
            "terraform init",
            "terraform validate",
            "terraform refresh",
            "terraform restart"
          ],
          c: 0,
          why: "terraform init must be run to detect and download newly added child modules."
        },
        {
          q: "What is a standard layout for a standalone Terraform module?",
          a: [
            "main.tf (resources), variables.tf (inputs), outputs.tf (exports), and README.md",
            "index.html, styles.css, and app.js",
            "A single giant script.sh file",
            "A Dockerfile and package.json"
          ],
          c: 0,
          why: "Standard convention divides module logic into main.tf, variables.tf, and outputs.tf."
        }
      ]
    },
    {
      n: 6,
      id: "state-drift-and-plan-lifecycle",
      title: "Plan Lifecycle & Drift Detection",
      topic: "Drift Detection, CI/CD & Security",
      anim: "Code",
      lede: "What happens when an engineer modifies a security group manually in the cloud console? Learn how Terraform detects and reconciles drift.",
      winShort: "Detect infrastructure drift with terraform plan and safely reconcile discrepancies without downtime",
      missionLink: "Maintain 100% fidelity between your Git codebase and live cloud deployments",
      sec1: {
        title: "The three-way merge: Code vs State vs Reality",
        content: `<p>Whenever you execute <code>terraform plan</code>, Terraform performs a sophisticated three-way reconciliation:</p><ul><li><b>Code:</b> What your HCL manifests declare.</li><li><b>State:</b> What Terraform previously recorded in <code>terraform.tfstate</code>.</li><li><b>Reality:</b> The actual live resources queried right now via cloud APIs.</li></ul><p>First, Terraform runs a <b>refresh</b> step, querying cloud APIs to update its in-memory view of Reality. It compares Reality to Code and calculates the exact surgical steps required to restore compliance.</p>`,
        keyIdea: "Terraform plan refreshes live reality, compares it to declared code, and computes the restorative plan."
      },
      predict: {
        q: "If an engineer manually deletes a cloud EC2 instance directly from the AWS console, what will 'terraform plan' propose?",
        a: [
          "It detects the instance is missing in reality and plans to create a brand new instance to restore desired state",
          "It removes the instance from the HCL code automatically",
          "It crashes with a MissingResourceException",
          "It deletes the entire VPC"
        ],
        c: 0,
        why: "Terraform's job is to enforce desired state: if an object is missing in reality, it plans to recreate it."
      },
      sec2: {
        title: "Importing existing resources into Terraform",
        content: `<p>What if you have existing cloud resources created before you adopted Terraform? You use the <code>import</code> block (or <code>terraform import</code> command).</p><p>Importing attaches an existing cloud resource ID (e.g. <code>i-0123456789abcdef0</code>) to a declared resource block in your code, recording it in the state file without recreating it.</p>`,
      },
      diagram: {
        boxes: [
          { title: "1. Code (HCL)", lines: ["aws_security_group 'web'", "port: 443 only"] },
          { title: "2. Live Cloud Reality", lines: ["Port 443 + Port 22 (SSH)", "Manual rogue rule added in console!"] },
          { title: "3. Drift Plan Output", lines: ["~ aws_security_group.web", "- ingress rule: port 22 (destroy)", "Restores declared security posture"] }
        ]
      },
      sec3: {
        title: "Tracing drift detection and remediation",
        content: `<p>Trace how running terraform apply eliminates unauthorized console changes.</p>`,
      },
      trace: {
        code: [
          "1. Rogue admin opens port 22 to 0.0.0.0/0 in AWS web console",
          "2. Scheduled daily CI job runs: terraform plan -detailed-exitcode",
          "3. Plan detects drift: exit code 2 (drift detected)",
          "4. CI triggers alert: Slack message sent to security team",
          "5. terraform apply runs: Rogue port 22 rule revoked; security restored"
        ],
        steps: [
          { line: 0, vars: { drift_introduced: "Out-of-band console change" } },
          { line: 2, vars: { detection: "Cloud API refresh discovers untracked port 22 rule" } },
          { line: 4, vars: { remediation: "Apply brings reality back into 100% compliance with Git" } }
        ]
      },
      practiceIntro: "Test your understanding of drift detection, plan lifecycles, and resource importing.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Updating the in-memory state by querying live cloud APIs is called a state <0>.",
          "Bringing existing unmanaged cloud resources under Terraform control is resource <1>.",
          "The CLI flag that makes plan return exit code 2 when drift is found is -detailed-exit<2>."
        ],
        blanks: [
          { a: ["refresh"], why: "refresh syncs state with live reality." },
          { a: ["import"], why: "import binds existing resources." },
          { a: ["code"], why: "-detailed-exitcode enables CI drift detection." }
        ]
      },
      win: "You can detect unauthorized cloud modifications, audit drift, and import legacy resources into IaC safely.",
      nextTasks: [
        "Manually change a tag on an S3 bucket in the cloud console and run terraform plan to observe drift.",
        "Import an existing unmanaged resource into your configuration using the modern import block.",
        "Set up a scheduled cron job that runs terraform plan -detailed-exitcode to alert on drift."
      ],
      primarySource: "HashiCorp Terraform Documentation: *Detecting Drift* and *Import*.",
      quiz: [
        {
          q: "What does 'terraform plan -detailed-exitcode' return when configuration drift is detected?",
          a: [
            "Exit code 2 (indicating differences exist between code and reality)",
            "Exit code 0",
            "Exit code 1",
            "Exit code 137"
          ],
          c: 0,
          why: "Exit code 0 means no changes; 1 means error; 2 means diff/drift detected (useful for automated CI alerts)."
        },
        {
          q: "How does modern Terraform (v1.5+) import existing resources into management?",
          a: [
            "Using the declarative 'import' block specifying the resource address and cloud ID",
            "By uploading screenshots of the AWS console to Terraform Cloud",
            "By rebooting the cloud provider's regional datacenter",
            "By writing raw JSON directly into the binary provider file"
          ],
          c: 0,
          why: "Terraform 1.5+ introduced the declarative import { to = ... id = ... } syntax."
        },
        {
          q: "If an engineer modifies a server's tags in the cloud console, and code has no tags declared, what does apply do?",
          a: [
            "It strips away the manual tags in the cloud to make reality match the empty code declaration",
            "It updates the local .tf file to add the tags",
            "It leaves the tags alone forever",
            "It creates a second server with no tags"
          ],
          c: 0,
          why: "Terraform enforces code: if the code does not declare those tags, it removes them to restore code conformity."
        },
        {
          q: "Why is automated scheduled drift detection recommended in production enterprise environments?",
          a: [
            "To catch accidental manual console edits or emergency hotfixes that were never committed to Git",
            "To speed up database query performance",
            "To check if engineers are logged into their laptops",
            "To automatically generate invoices for clients"
          ],
          c: 0,
          why: "Automated drift detection ensures emergency hotfixes or accidental changes are identified and committed."
        }
      ]
    },
    {
      n: 7,
      id: "secrets-and-security-in-iac",
      title: "Secrets Management, Encryption & Policy-as-Code",
      topic: "Drift Detection, CI/CD & Security",
      anim: "CodePulse",
      lede: "Never commit database passwords or private keys in .tf files. Master secrets injection and Policy-as-Code guardrails.",
      winShort: "Keep credentials out of source code and state files, and enforce guardrails using Policy-as-Code",
      missionLink: "Prevent leaked credentials and block insecure cloud configurations before deployment",
      sec1: {
        title: "The rule of secrets in IaC",
        content: `<p>Hardcoding API tokens, database master passwords, or private keys directly in <code>.tf</code> files is one of the most common causes of enterprise security breaches.</p><p>Best practices for credentials in IaC:</p><ul><li><b>Dynamic retrieval:</b> Query secrets at runtime from a dedicated secrets manager (HashiCorp Vault, AWS Secrets Manager, Doppler).</li><li><b>Ephemeral credentials:</b> Use short-lived OIDC (OpenID Connect) tokens in CI/CD rather than permanent IAM user access keys.</li><li><b>Sensitive markings:</b> Mark variables and outputs with <code>sensitive = true</code> to prevent logging to stdout.</li></ul>`,
        keyIdea: "Never store credentials in code; retrieve them dynamically from secret stores or inject via short-lived OIDC."
      },
      predict: {
        q: "What tool scans Terraform files locally or in CI/CD to detect misconfigurations like public S3 buckets or unencrypted EBS volumes?",
        a: [
          "Static analysis and Policy-as-Code linters like Checkov, tfsec, and Trivy",
          "The npm package manager",
          "Google Chrome developer tools",
          "The Linux bash kernel"
        ],
        c: 0,
        why: "Tools like Checkov and tfsec scan HCL code to detect compliance violations before provisioning."
      },
      sec2: {
        title: "Policy as Code: Guardrails before apply",
        content: `<p>How do you prevent a junior engineer from accidentally creating a public S3 bucket or opening port 0.0.0.0/0 to the world? Relying on human peer review is fallible.</p><p><b>Policy as Code</b> (using Open Policy Agent / Rego or HashiCorp Sentinel) evaluates rules against the <code>terraform plan</code> JSON output. If a policy is violated (e.g. <i>"All storage volumes must be encrypted with KMS"</i>), the CI pipeline automatically fails and blocks <code>terraform apply</code>.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Terraform Plan JSON", lines: ["terraform plan -out=tfplan", "terraform show -json tfplan > plan.json"] },
          { title: "Policy-as-Code Engine", lines: ["Checkov / OPA Rego / Sentinel", "Evaluates: 'Is S3 bucket public?'", "Evaluates: 'Is encryption enabled?'"] },
          { title: "Enforcement Gate", lines: ["PASSED -> Run terraform apply", "FAILED -> Block pull request in CI!"] }
        ]
      },
      sec3: {
        title: "Tracing Policy-as-Code pre-deployment rejection",
        content: `<p>Trace how automated policy enforcement halts an insecure deployment in CI.</p>`,
      },
      trace: {
        code: [
          "1. Engineer writes: resource 'aws_s3_bucket' 'data' { acl = 'public-read' }",
          "2. Pull Request triggers CI pipeline: checkov -d .",
          "3. Checkov rule CKV_AWS_20 evaluates: 'Ensure S3 bucket is not publicly readable'",
          "4. Violation detected: FAILED at resource aws_s3_bucket.data",
          "5. CI pipeline exits with code 1; Pull Request merge is blocked"
        ],
        steps: [
          { line: 0, vars: { commit: "Insecure S3 bucket declaration committed" } },
          { line: 2, vars: { scan: "Checkov scans static HCL syntax" } },
          { line: 3, vars: { check_result: "Critical security violation flagged" } },
          { line: 4, vars: { prevention: "Deployment aborted before cloud infrastructure is ever created" } }
        ]
      },
      practiceIntro: "Test your understanding of secrets handling and Policy-as-Code security.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The practice of writing security and compliance rules as code is Policy as <0>.",
          "A popular open-source static security scanner for Terraform is <1>.",
          "To authenticate CI pipelines to AWS without permanent secret keys, use <2> Connect."
        ],
        blanks: [
          { a: ["Code"], why: "Policy as Code automates compliance." },
          { a: ["Checkov", "tfsec", "Trivy"], why: "Checkov/tfsec scan IaC for security risks." },
          { a: ["OpenID", "OIDC"], why: "OpenID Connect enables short-lived credentials." }
        ]
      },
      win: "You can prevent credential leaks, inject secrets dynamically, and enforce automated Policy-as-Code security guardrails.",
      nextTasks: [
        "Run checkov or tfsec on a local Terraform directory and resolve any identified security warnings.",
        "Configure OIDC authentication between GitHub Actions and your cloud provider.",
        "Verify that a sensitive variable is redacted from stdout during terraform apply."
      ],
      primarySource: "Bridgecrew / Checkov Documentation: *Policy as Code for Infrastructure*.",
      quiz: [
        {
          q: "Why is authenticating CI/CD runners via OIDC (OpenID Connect) superior to storing static IAM access keys in GitHub Secrets?",
          a: [
            "OIDC exchanges short-lived, temporary credentials that expire automatically, eliminating permanent secret leak risks",
            "OIDC makes deployments 20 times faster",
            "Static IAM keys are forbidden by all cloud providers",
            "OIDC allows bypassing Terraform state locking"
          ],
          c: 0,
          why: "OIDC generates temporary tokens on the fly, eliminating long-lived credentials that could be stolen."
        },
        {
          q: "What is the primary objective of Policy as Code (e.g. Checkov, OPA, Sentinel)?",
          a: [
            "To automatically validate security, compliance, and architectural rules before cloud resources are provisioned",
            "To translate English text prompts into Terraform code",
            "To compress state files on disk",
            "To automatically pay monthly cloud hosting bills"
          ],
          c: 0,
          why: "Policy as Code provides automated, non-negotiable security guardrails inside the development pipeline."
        },
        {
          q: "Even if an output is marked 'sensitive = true', where can the plaintext value still be discovered?",
          a: [
            "Inside the raw JSON terraform.tfstate file",
            "In public Google search results",
            "In the local computer's browser history",
            "It is completely erased from all storage permanently"
          ],
          c: 0,
          why: "sensitive = true only redacts console output; the state file still contains the raw value."
        },
        {
          q: "Which of the following is a recommended approach for supplying database passwords to Terraform?",
          a: [
            "Querying an external secrets manager like AWS Secrets Manager or Vault dynamically via data sources",
            "Hardcoding the password directly in main.tf",
            "Committing a passwords.txt file to the public Git repository",
            "Writing the password on a piece of paper"
          ],
          c: 0,
          why: "Dynamic secrets management keeps credentials out of source code entirely."
        }
      ]
    },
    {
      n: 8,
      id: "iac-in-cicd-and-gitops",
      title: "IaC in CI/CD & GitOps Pipelines",
      topic: "Drift Detection, CI/CD & Security",
      anim: "LayersOrbit",
      lede: "Never run 'terraform apply' from a developer laptop in production. Automate delivery through GitOps pipelines.",
      winShort: "Design an automated GitOps CI/CD pipeline for Terraform with automated planning, reviews, and applies",
      missionLink: "Eliminate human operational errors and deploy infrastructure reliably across environments",
      sec1: {
        title: "The danger of laptop applies",
        content: `<p>Running <code>terraform apply</code> directly from an engineer's laptop introduces massive operational risks: local differences in Terraform versions, uncommitted local edits, personal cloud credential leaks, and zero peer visibility.</p><p>In a mature <b>GitOps pipeline</b>, the only entity permitted to execute <code>terraform apply</code> is the automated CI/CD pipeline (e.g. GitHub Actions, GitLab CI, Atlantis, or Spacelift). Humans open Pull Requests; machines test, plan, and apply.</p>`,
        keyIdea: "All production infrastructure changes must flow through version control and be executed by automated CI/CD pipelines."
      },
      predict: {
        q: "In an automated CI/CD pipeline, when should 'terraform plan' vs 'terraform apply' be executed?",
        a: [
          "Plan runs automatically on Pull Request creation to generate a review comment; Apply runs automatically only after merge to main",
          "Apply runs on Pull Request creation; Plan runs after merge",
          "Both plan and apply run continuously every 5 seconds",
          "Neither: humans must always run apply from their laptops"
        ],
        c: 0,
        why: "Planning on PRs allows human review of the diff; applying on merge executes the approved change into production."
      },
      sec2: {
        title: "The standard GitOps workflow for IaC",
        content: `<p>A production GitOps pipeline follows strict stages:</p><ol><li><b>Branch & Edit:</b> Engineer creates a branch and edits <code>.tf</code> files.</li><li><b>Validation:</b> CI runs <code>terraform fmt -check</code>, <code>terraform validate</code>, and <code>checkov</code>.</li><li><b>Plan generation:</b> CI runs <code>terraform plan</code> and posts the diff as a comment on the Pull Request.</li><li><b>Peer Review:</b> Tech lead approves the PR after inspecting the exact plan.</li><li><b>Merge & Apply:</b> Merging to <code>main</code> triggers the CI runner to execute <code>terraform apply</code>.</li></ol>`,
      },
      diagram: {
        boxes: [
          { title: "1. Pull Request", lines: ["git push branch", "fmt, validate, checkov", "terraform plan posted to PR"] },
          { title: "2. Peer Review", lines: ["Engineers inspect plan diff", "Senior sign-off approved", "Merged to main branch"] },
          { title: "3. CI Apply Runner", lines: ["Runs in isolated container", "terraform apply executes", "Updates prod cloud safely"] }
        ]
      },
      sec3: {
        title: "Tracing automated plan output commenting",
        content: `<p>Trace how modern tools like Atlantis or GitHub Actions post live plan diffs onto Pull Requests.</p>`,
      },
      trace: {
        code: [
          "1. PR #42 opened: 'Add read replica for Postgres'",
          "2. GitHub Action executes: terraform plan -no-color > plan.txt",
          "3. Action posts markdown comment to PR #42:",
          "   'Plan: 1 to add, 0 to change, 0 to destroy. Click to inspect...'",
          "4. Reviewer approves; PR merged; CI runner applies changes"
        ],
        steps: [
          { line: 0, vars: { trigger: "Pull Request opened" } },
          { line: 1, vars: { ci_execution: "Non-destructive plan generated in runner" } },
          { line: 2, vars: { pr_feedback: "Transparent diff posted for team inspection" } },
          { line: 4, vars: { pipeline_complete: "Controlled, auditable deployment executed" } }
        ]
      },
      practiceIntro: "Test your mastery of GitOps pipelines and automated IaC delivery.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The operational model where Git is the single source of truth is called Git<0>.",
          "The command that checks whether all HCL files follow standard formatting is terraform <1> -check.",
          "In CI/CD, terraform plan runs on pull requests, while terraform apply runs on <2>."
        ],
        blanks: [
          { a: ["Ops"], why: "GitOps drives operations via Git." },
          { a: ["fmt"], why: "terraform fmt enforces canonical indentation." },
          { a: ["merge"], why: "Apply triggers upon merging to the release branch." }
        ]
      },
      win: "You can design and maintain production-grade GitOps pipelines for automated, peer-reviewed infrastructure delivery.",
      nextTasks: [
        "Write a GitHub Actions workflow that executes terraform fmt, validate, and plan on pull requests.",
        "Implement branch protection rules requiring at least one peer approval before merging to main.",
        "Explore specialized IaC automation tools like Atlantis or Spacelift for PR-driven applies."
      ],
      primarySource: "HashiCorp Guide: *Automating Terraform with GitHub Actions*.",
      quiz: [
        {
          q: "Why should developers be forbidden from running 'terraform apply' from their local laptops in production?",
          a: [
            "It bypasses peer review, risks using out-of-date local state, leaks credentials, and lacks audit trails",
            "Laptops do not have enough battery power to run Terraform",
            "Terraform only compiles on Linux server CPUs",
            "Applying from laptops cancels cloud service level agreements (SLAs)"
          ],
          c: 0,
          why: "Centralized CI/CD ensures code review, consistent versions, audit logs, and locked-down credentials."
        },
        {
          q: "What is the role of 'terraform fmt -check' in a CI validation pipeline?",
          a: [
            "It checks whether all code conforms to canonical Terraform formatting standards without modifying the files",
            "It checks if the database is running",
            "It formats the hard drive of the runner",
            "It validates whether cloud billing credentials are valid"
          ],
          c: 0,
          why: "terraform fmt -check returns a non-zero exit code if any file has non-canonical formatting, enforcing clean style."
        },
        {
          q: "How does GitOps improve auditability for compliance standards like SOC2 or ISO 27001?",
          a: [
            "Every infrastructure modification is linked to a specific Git commit, Pull Request, author, and reviewer",
            "It encrypts all employee emails automatically",
            "It eliminates the need for any internal company passwords",
            "It runs automated background checks on all developers"
          ],
          c: 0,
          why: "Git history and PR reviews provide an immutable audit trail of who changed what, when, and why."
        },
        {
          q: "What tool allows teams to run 'terraform plan' and 'terraform apply' directly from Pull Request comments?",
          a: [
            "Atlantis",
            "Vim",
            "NPM",
            "Webpack"
          ],
          c: 0,
          why: "Atlantis is an open-source self-hosted pull-request automation server for Terraform."
        }
      ]
    }
  ]
};
