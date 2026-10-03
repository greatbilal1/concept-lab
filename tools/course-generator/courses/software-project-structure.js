"use strict";

module.exports = {
  id: "software-project-structure",
  title: "How Software Projects Are Structured",
  num: 20,
  emoji: "🗃️",
  desc: "Layout, entry points, configuration and dependency files — the conventions that make a repo navigable.",
  mission: `# Mission — How Software Projects Are Structured

## Why this course exists

Beginners often write all their code in a single sprawling file or an unstructured dumping ground of scripts. As projects grow, this causes circular imports, configuration confusion, leaked secrets, and broken deployments. This course teaches the industry-standard conventions of project anatomy: where source code lives, how dependencies are locked, how configuration is isolated, and how tests are organized.

## What the learner can do at the end

- Structure a multi-package repository using clean, standard source layouts.
- Isolate runtime configuration from codebase logic using environment variables and configuration files.
- Pin and manage third-party dependencies using manifests and lockfiles for reproducible builds.
- Organize test suites with separate unit, integration, and test fixture hierarchies.
- Maintain immaculate git repository hygiene with comprehensive .gitignore configurations.

## What this course is NOT

- Not a framework-specific boilerplate generator.
- Not a monorepo management course. It focuses on standalone, production-grade project repositories.

## Success looks like

When starting a new service or auditing an existing codebase, the learner produces an industry-standard layout with distinct src/, tests/, config/, and documentation layers in under five minutes.
`,
  notes: `# Notes — How Software Projects Are Structured

## Decisions
- Structure into four themes: Anatomy, Source Layout, Configuration, and Hygiene.
- Cover universal conventions applicable to Python, Node.js, Go, and Rust.
`,
  resources: `# Resources — How Software Projects Are Structured

## Knowledge (primary sources)
- *The Twelve-Factor App* by Adam Wiggins (12factor.net) — Foundational principles for codebase configuration and dependency isolation.
- *Standard Python Project Layout* (packaging.python.org/en/latest/tutorials/packaging-projects/).

## Wisdom
- A well-structured project tells you where to find things before you read a single line of code.
`,
  cheatsheetSections: [
    {
      title: "Standard Repository Layout",
      label: "Canonical project hierarchy",
      code: `my-project/
├── src/my_app/       # application source code
├── tests/            # automated test suite
├── docs/             # documentation and architectural guides
├── pyproject.toml    # dependency manifest and build config
├── .gitignore        # ignored build artifacts and caches
└── README.md         # onboarding and usage instructions`,
      lessonN: 1,
      lessonSlug: "anatomy-of-a-repository",
      lessonTitle: "Anatomy of a repository"
    },
    {
      title: "Dependency Management",
      label: "Manifests versus lockfiles",
      code: `# Manifest (pyproject.toml / package.json)
# Defines abstract requirements: "requests >= 2.28"

# Lockfile (poetry.lock / package-lock.json)
# Records exact pinned hash: "requests == 2.31.0" with sha256`,
      lessonN: 4,
      lessonSlug: "managing-project-dependencies",
      lessonTitle: "Managing project dependencies"
    },
    {
      title: "Config & Secrets",
      label: "Twelve-factor configuration",
      code: `# .env (local only, gitignored)
DATABASE_URL="postgres://user:pass@localhost:5432/app"
API_KEY="secret-token-xyz"

# .env.example (committed to git)
DATABASE_URL="postgres://localhost:5432/app"
API_KEY="your-api-key-here"`,
      lessonN: 3,
      lessonSlug: "configuration-and-environment-files",
      lessonTitle: "Configuration and environment files"
    },
    {
      title: "Ignore Hygiene",
      label: "Keeping repos clean",
      code: `# Standard .gitignore entries:
__pycache__/
*.pyc
node_modules/
dist/
build/
.env`,
      lessonN: 8,
      lessonSlug: "build-artifacts-and-git-ignore-hygiene",
      lessonTitle: "Build artifacts and gitignore hygiene"
    }
  ],
  glossaryGroups: [
    {
      id: "anatomy",
      title: "Anatomy of a Repository",
      terms: [
        { term: "Root directory", def: "The top-level folder of a repository containing project metadata, configuration, and source directories.", lesson: 1, tags: ["structure"] },
        { term: "Src layout", def: "A directory structure where application code is nested inside a dedicated src/ folder to avoid import pollution.", lesson: 2, tags: ["packaging"] },
        { term: "Package", def: "A directory containing an __init__.py file or namespace configuration that allows its modules to be imported.", lesson: 2, tags: ["architecture"] },
        { term: "Manifest", def: "A metadata file defining project name, author, dependencies, and build requirements.", lesson: 1, tags: ["config"] }
      ]
    },
    {
      id: "configuration",
      title: "Configuration & Secrets",
      terms: [
        { term: "Twelve-Factor App", def: "A methodology for building modern cloud applications that emphasizes strict separation of config from code.", lesson: 3, tags: ["architecture"] },
        { term: "Environment file", def: "A plain-text file (.env) containing key-value pairs loaded into environment variables during local development.", lesson: 3, tags: ["security"] },
        { term: "Lockfile", def: "A machine-generated file recording exact dependency versions and cryptographic hashes for reproducible builds.", lesson: 4, tags: ["dependencies"] },
        { term: "Virtual environment", def: "An isolated directory tree containing a specific interpreter and independent package dependencies.", lesson: 4, tags: ["environment"] }
      ]
    },
    {
      id: "entry-points",
      title: "Entry Points & Testing",
      terms: [
        { term: "Entry point", def: "The script or callable function configured as the starting execution point of an application or CLI.", lesson: 5, tags: ["runtime"] },
        { term: "Test fixture", def: "A fixed baseline of data or mock objects used to execute automated tests consistently.", lesson: 6, tags: ["testing"] },
        { term: "Integration test", def: "A test verifying that multiple modules, database queries, or external services interact correctly together.", lesson: 6, tags: ["testing"] },
        { term: "Mock", def: "A simulated object that mimics the behavior of a real external dependency in controlled ways.", lesson: 6, tags: ["testing"] }
      ]
    },
    {
      id: "hygiene",
      title: "Builds, Tests & Hygiene",
      terms: [
        { term: "Build artifact", def: "Compiled binaries, bundled assets, or distribution archives generated by build processes.", lesson: 8, tags: ["build"] },
        { term: "Gitignore", def: "A configuration file instructing git to untrack and ignore specified build artifacts, caches, and secrets.", lesson: 8, tags: ["git"] },
        { term: "Changelog", def: "A curated, chronologically ordered record of notable changes made in each release of a project.", lesson: 7, tags: ["documentation"] },
        { term: "Onboarding doc", def: "A guide (typically README.md) providing exact prerequisites and commands to run the project from scratch.", lesson: 7, tags: ["documentation"] }
      ]
    }
  ],
  lessons: [
    {
      n: 1,
      id: "anatomy-of-a-repository",
      title: "Anatomy of a repository",
      topic: "Anatomy of a Repository",
      anim: "LayersOrbit",
      lede: "A clean repository speaks to you before you read any code. Learn the universal layout conventions of professional software projects.",
      winShort: "Identify the standard files and directories in any production repository",
      missionLink: "Provides structural orientation for all project navigation",
      sec1: {
        title: "The standard project anatomy",
        content: `<p>Every professional software repository separates concerns into dedicated top-level directories: source code (<code>src/</code> or <code>app/</code>), automated tests (<code>tests/</code>), documentation (<code>docs/</code>), and project configuration.</p><p>The root directory is reserved for metadata files that govern the project: <code>README.md</code> (how to run it), <code>LICENSE</code> (legal permissions), <code>.gitignore</code> (what not to commit), and the dependency manifest.</p>`,
        keyIdea: "A project root contains metadata and configuration; source code and tests live in dedicated subdirectories."
      },
      predict: {
        q: "Where should temporary cache files and virtual environments live in a git repository?",
        a: [
          "Committed directly into the src/ folder alongside business code",
          "In the local filesystem, but excluded from git via .gitignore",
          "In the tests/ directory as test fixtures",
          "Uploaded as public attachments to GitHub releases"
        ],
        c: 1,
        why: "Caches and virtual environments are machine-specific and must never be tracked in git history."
      },
      sec2: {
        title: "The four primary top-level folders",
        content: `<p>Understand the strict separation between code, tests, documentation, and tooling.</p>`,
      },
      diagram: {
        boxes: [
          { title: "src/", lines: ["production code only", "no tests, no caches"] },
          { title: "tests/", lines: ["unit & integration tests", "fixtures and test data"] },
          { title: "docs/", lines: ["architectural diagrams", "API specifications"] },
          { title: "config / root", lines: ["manifests, license, README", "gitignore, CI pipelines"] }
        ]
      },
      sec3: {
        title: "Tracing root directory inspection",
        content: `<p>Trace how an engineer navigates a freshly cloned repository to understand its stack and instructions.</p>`,
      },
      trace: {
        code: [
          "ls -la              # inspect root: README, pyproject.toml, src/, tests/",
          "cat README.md       # read prerequisites and setup command",
          "cat pyproject.toml  # check declared dependencies and python versions",
          "pytest tests/       # verify test suite passes on clean clone"
        ],
        steps: [
          { line: 0, vars: { structure: "standard src-layout repository" } },
          { line: 1, vars: { instructions: "install dependencies with poetry" } },
          { line: 2, vars: { dependencies: "FastAPI, SQLAlchemy, Pydantic" } },
          { line: 3, vars: { result: "all 42 automated tests pass" } }
        ]
      },
      practiceIntro: "Test your memory of canonical repository layout.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Production application code belongs in the <0> folder.",
          "Automated verification test suites belong in the <1> folder.",
          "The file that guides new developers through onboarding is <2>.md."
        ],
        blanks: [
          { a: ["src", "src/"], why: "src/ houses the isolated application package." },
          { a: ["tests", "tests/"], why: "tests/ isolates test code from shipping production code." },
          { a: ["README"], why: "README.md is the primary landing page of any repository." }
        ]
      },
      win: "You can survey any repository layout and immediately know where configuration, source code, and tests belong.",
      nextTasks: [
        "Audit the root directory of a personal project and move clutter into proper subdirectories.",
        "Ensure your project has a clean README.md with explicit setup commands.",
        "Verify that test files are not mixed in the same directory as production source code."
      ],
      primarySource: "Packaging Python Projects: *Project Structure Conventions* (packaging.python.org).",
      quiz: [
        {
          q: "Why is mixing test files directly inside the production source directory considered an antipattern?",
          a: [
            "It risks shipping test code, mock credentials, and fixtures into production releases",
            "It prevents the compiler from converting code to machine binaries",
            "It automatically disables git version control tracking",
            "It causes text editors to display syntax errors"
          ],
          c: 0,
          why: "Separating tests ensures production bundles contain only what is required to run."
        },
        {
          q: "What is the primary role of the README.md file in a repository?",
          a: [
            "To provide project purpose, prerequisites, installation steps, and usage commands",
            "To store encrypted production database connection passwords",
            "To configure operating system kernel network buffers",
            "To list every single git commit hash in project history"
          ],
          c: 0,
          why: "README.md is the front door of the repository for onboarding and documentation."
        },
        {
          q: "Which file declares legal usage, distribution, and modification terms for software?",
          a: [
            "LICENSE",
            "package.json",
            "CONTRIBUTING.md",
            ".gitignore"
          ],
          c: 0,
          why: "The LICENSE file specifies intellectual property and open-source permissions."
        },
        {
          q: "Where should architectural decision records and guides be kept in a repository?",
          a: [
            "Inside a dedicated docs/ directory",
            "In inline comments on line 1 of every file",
            "Inside the hidden .git directory",
            "In temporary text files on the developer desktop"
          ],
          c: 0,
          why: "A docs/ directory provides a centralized home for architectural specifications."
        }
      ]
    },
    {
      n: 2,
      id: "source-layouts-and-packages",
      title: "Source layouts and packages",
      topic: "Anatomy of a Repository",
      anim: "LayersOrbit",
      lede: "Flat layout versus src-layout: why nesting your code under src/ protects you from accidental import bugs and broken packaging.",
      winShort: "Implement a robust src-layout package structure for modern applications",
      missionLink: "Prevents insidious import masking and packaging failures",
      sec1: {
        title: "The problem with flat layouts",
        content: `<p>In a flat layout, your package directory sits directly in the project root alongside <code>setup.py</code> or <code>package.json</code>. When you run tests from the root, the interpreter imports your local uninstalled source files directly from the working directory.</p><p>This causes bugs that pass locally but fail in production: you test against raw local files, not the packaged and installed artifact. The <b>src-layout</b> forces tests to import the properly installed package.</p>`,
        keyIdea: "The src-layout guarantees that tests execute against the installed package rather than local working directory files."
      },
      predict: {
        q: "What subtle bug can occur when running tests against a flat root layout?",
        a: [
          "Tests might import files from the local directory that were accidentally omitted from the install package",
          "The CPU will execute the tests at half speed",
          "The git commit history will be overwritten with random bytes",
          "The computer network interface card will be disabled"
        ],
        c: 0,
        why: "Flat layouts mask missing files in package manifests because local files are always importable from cwd."
      },
      sec2: {
        title: "Comparing layout patterns",
        content: `<p>Contrast the vulnerability of flat layouts with the isolation provided by src-layout.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Flat Layout (Fragile)", lines: ["root/my_package/", "root/tests/", "import my_package uses local folder"] },
          { title: "src-layout (Robust)", lines: ["root/src/my_package/", "root/tests/", "import my_package tests installed build"] }
        ]
      },
      sec3: {
        title: "Tracing package import resolution",
        content: `<p>Trace how Python resolves imports when executing from a src-layout project.</p>`,
      },
      trace: {
        code: [
          "# Running: pytest tests/test_core.py",
          "# Working directory is /repo",
          "# 'src' is NOT in sys.path by default",
          "# Interpreter must import installed package from site-packages / venv",
          "import my_package   # succeeds only if package installed cleanly"
        ],
        steps: [
          { line: 1, vars: { cwd: "/repo" } },
          { line: 2, vars: { local_check: "no my_package directly in /repo" } },
          { line: 3, vars: { resolution: "imports installed distribution artifact" } }
        ]
      },
      practiceIntro: "Test your understanding of source package layouts.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Placing packages inside a dedicated src directory is called the <0> layout.",
          "In Python, a folder becomes a regular package by including an __<1>__.py file.",
          "Installing an editable local development package is done with pip install <2> ."
        ],
        blanks: [
          { a: ["src", "src-layout"], why: "src-layout nests source packages under src/." },
          { a: ["init"], why: "__init__.py initializes a Python package namespace." },
          { a: ["-e"], why: "-e installs a package in editable mode linked to source." }
        ]
      },
      win: "You can structure package namespaces cleanly under src/ to avoid local import pollution.",
      nextTasks: [
        "Inspect an existing project and verify whether it uses flat layout or src-layout.",
        "Organize your code under a src/<package_name>/ hierarchy.",
        "Run your test suite with the package installed in editable mode."
      ],
      primarySource: "Hynek Schlawack, *Testing & Packaging: The src-layout* (hynek.me/articles/testing-packaging).",
      quiz: [
        {
          q: "What is the primary benefit of using a src/ layout in software repositories?",
          a: [
            "It prevents local directory files from silently masking packaging and import errors during testing",
            "It makes Python scripts execute without needing an interpreter installed",
            "It automatically optimizes database queries for high traffic",
            "It compresses image files to save disk storage space"
          ],
          c: 0,
          why: "src-layout ensures you test the real installed distribution artifact rather than working directory files."
        },
        {
          q: "What role does __init__.py play in Python package folders?",
          a: [
            "It marks the directory as an importable Python package namespace and runs initialization",
            "It tells the operating system to treat the folder as hidden",
            "It compiles all Python files in the folder into machine code",
            "It encrypts the source code to protect intellectual property"
          ],
          c: 0,
          why: "__init__.py signals to Python that the folder should be treated as an importable module."
        },
        {
          q: "What does 'pip install -e .' do in a development environment?",
          a: [
            "Installs the local package in editable mode, linking changes directly to the virtualenv",
            "Exports the package to the public PyPI repository immediately",
            "Deletes all test files and logs from the repository",
            "Converts the project into a mobile application"
          ],
          c: 0,
          why: "Editable mode installs symlinks so code changes reflect immediately without reinstallation."
        },
        {
          q: "Where should top-level CLI commands and executables be registered?",
          a: [
            "In the project manifest under project.scripts or package.json bin",
            "In temporary shell history files",
            "Inside the database schema migration folder",
            "In the root .gitignore file"
          ],
          c: 0,
          why: "Manifests define CLI entry points so the package installer creates proper command wrappers."
        }
      ]
    },
    {
      n: 3,
      id: "configuration-and-environment-files",
      title: "Configuration and environment files",
      topic: "Configuration & Secrets",
      anim: "LayersOrbit",
      lede: "Code is identical across environments; configuration varies. Master the Twelve-Factor principle of keeping secrets and runtime configs strictly in the environment.",
      winShort: "Separate runtime configuration and secrets from source code using environment variables",
      missionLink: "Prevents catastrophic secret leaks and configuration drift",
      sec1: {
        title: "The Twelve-Factor config rule",
        content: `<p>A litmus test for clean configuration: <i>Could your entire codebase be made open source tomorrow without leaking a single secret or database credential?</i></p><p>If the answer is no, you have hardcoded configuration in your code. The Twelve-Factor App methodology mandates that all configuration that varies between deploys (staging, production, development) must be stored in <b>environment variables</b>.</p>`,
        keyIdea: "Never commit credentials or environment-specific URLs into version control; inject them via the environment."
      },
      predict: {
        q: "Why should .env files containing API keys never be committed to git?",
        a: [
          "Git will permanently record the secrets in history, exposing them to anyone with repo access",
          "Git cannot process files that begin with a period",
          "The file will automatically delete all git branches",
          "The operating system will revoke your user account permissions"
        ],
        c: 0,
        why: "Git history is immutable: once a secret is committed, it is compromised even if deleted in a later commit."
      },
      sec2: {
        title: "The .env and .env.example pattern",
        content: `<p>Use a committed template (.env.example) to document required keys, paired with an untracked local file (.env) for real values.</p>`,
      },
      diagram: {
        boxes: [
          { title: ".env.example (Committed)", lines: ["DB_HOST=localhost", "API_KEY=your_key_here", "documents required variables"] },
          { title: ".env (Gitignored)", lines: ["DB_HOST=db.internal.net", "API_KEY=sk_live_99812", "local development values only"] },
          { title: "Production (Injected)", lines: ["Kubernetes / Docker secrets", "Cloud environment manager"] }
        ]
      },
      sec3: {
        title: "Tracing configuration loading",
        content: `<p>Trace how an application loads configuration from the environment with sensible fallback defaults.</p>`,
      },
      trace: {
        code: [
          "import os",
          "PORT = int(os.environ.get('PORT', 8080))",
          "DB_URL = os.environ['DATABASE_URL'] # raises KeyError if missing",
          "# Config loaded safely without hardcoded secrets"
        ],
        steps: [
          { line: 0, vars: { module: "os loaded" } },
          { line: 1, vars: { port: "8080 (fallback default)" } },
          { line: 2, vars: { db_url: "postgres://prod-db:5432/app" } }
        ]
      },
      practiceIntro: "Test your memory of environment configuration principles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Configuration that varies between deploys belongs in <0> variables.",
          "The committed template showing required environment keys is .env.<1>.",
          "The methodology defining cloud application architecture rules is <2>-Factor."
        ],
        blanks: [
          { a: ["environment"], why: "Environment variables keep config separate from code." },
          { a: ["example", "sample"], why: ".env.example documents keys without exposing secrets." },
          { a: ["Twelve", "12"], why: "The Twelve-Factor App defines configuration best practices." }
        ]
      },
      win: "You can architect applications whose source code contains zero hardcoded credentials or environment assumptions.",
      nextTasks: [
        "Audit your repo for hardcoded passwords or API keys using git grep.",
        "Add .env to your root .gitignore file immediately.",
        "Create a .env.example file listing all required configuration keys."
      ],
      primarySource: "Adam Wiggins, *The Twelve-Factor App* — Factor III: 'Config: Store config in the environment' (12factor.net/config).",
      quiz: [
        {
          q: "What is the primary rule of Factor III in the Twelve-Factor App methodology?",
          a: [
            "Store all configuration that varies across deploys in environment variables",
            "Hardcode database credentials directly inside the main application file",
            "Store passwords in plain text JSON files committed to git",
            "Recompile the application binary for every different server"
          ],
          c: 0,
          why: "Environment variables decouple code from deployment targets and prevent credential leaks."
        },
        {
          q: "What should you do if an API secret key is accidentally committed to a public repository?",
          a: [
            "Revoke and rotate the secret immediately at the provider, then rewrite git history",
            "Add a comment in the next commit asking people not to use the key",
            "Rename the file and delete the repository locally",
            "Turn off your computer and wait for the secret to expire"
          ],
          c: 0,
          why: "Committed secrets must be considered compromised instantly; revocation is the only safe response."
        },
        {
          q: "What is the purpose of committing a '.env.example' file?",
          a: [
            "To document all required environment variable names with placeholder dummy values",
            "To automatically log into production servers during CI runs",
            "To encrypt source code before deployment to servers",
            "To increase local download speeds for team members"
          ],
          c: 0,
          why: ".env.example serves as a contract showing developers what keys must be supplied locally."
        },
        {
          q: "How should an application handle a missing mandatory configuration variable on boot?",
          a: [
            "Fail fast immediately with a clear diagnostic error message during startup",
            "Silently invent a random database connection string and continue running",
            "Print a warning to a hidden file and continue in an infected state",
            "Format the hard drive to prevent security breaches"
          ],
          c: 0,
          why: "Failing fast on startup prevents the system from running with invalid or missing dependencies."
        }
      ]
    },
    {
      n: 4,
      id: "managing-project-dependencies",
      title: "Managing project dependencies",
      topic: "Configuration & Secrets",
      anim: "LayersOrbit",
      lede: "Dependencies change under your feet unless locked down. Learn the difference between abstract manifests and concrete lockfiles for reproducible builds.",
      winShort: "Differentiate manifests and lockfiles to achieve 100% reproducible builds",
      missionLink: "Eliminates 'works on my machine' dependency failures",
      sec1: {
        title: "Manifests versus lockfiles",
        content: `<p>A dependency management system has two distinct jobs handled by two separate files. The <b>manifest</b> (e.g. <code>pyproject.toml</code> or <code>package.json</code>) defines your abstract requirements: <i>'I need FastAPI version 0.100 or newer.'</i></p><p>The <b>lockfile</b> (e.g. <code>poetry.lock</code> or <code>package-lock.json</code>) records the concrete, exact resolution: <i>'FastAPI 0.104.1 with sha256 checksum abc... and Pydantic 2.4.2.'</i></p>`,
        keyIdea: "Manifests declare what you want; lockfiles record the exact cryptographic resolution of what was installed."
      },
      predict: {
        q: "Should the lockfile (poetry.lock, package-lock.json) be committed to version control for an application?",
        a: [
          "Yes, committing the lockfile ensures identical builds across all machines and CI",
          "No, lockfiles should always be added to .gitignore",
          "Only if the project has more than 50 dependencies",
          "Lockfiles are only generated on Windows operating systems"
        ],
        c: 0,
        why: "Committing lockfiles guarantees that every developer and CI runner installs identical package versions."
      },
      sec2: {
        title: "The dependency lifecycle",
        content: `<p>Understand how dependency tools resolve abstract ranges into pinned, verifiable packages.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Developer declares", lines: ["requests >= 2.28", "inside manifest file"] },
          { title: "Resolver computes", lines: ["solves dependency graph", "writes exact hashes to lockfile"] },
          { title: "CI / Production installs", lines: ["installs from lockfile only", "identical bytes everywhere"] }
        ]
      },
      sec3: {
        title: "Tracing lockfile verification",
        content: `<p>Trace how a package manager validates downloaded packages against cryptographic hashes in the lockfile.</p>`,
      },
      trace: {
        code: [
          "# package.json declares 'express': '^4.18.0'",
          "# package-lock.json pins 'express': '4.18.2' (integrity: sha512-xyz...)",
          "npm ci              # clean install from lockfile only",
          "# Verification: downloaded archive matches sha512 hash exactly"
        ],
        steps: [
          { line: 0, vars: { abstract_spec: "^4.18.0" } },
          { line: 1, vars: { pinned_spec: "4.18.2 with sha512 hash" } },
          { line: 2, vars: { mode: "deterministic CI install" } },
          { line: 3, vars: { status: "integrity verified; build reproducible" } }
        ]
      },
      practiceIntro: "Confirm your understanding of dependency files.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A human-edited file declaring dependency requirements is a <0>.",
          "A machine-generated file recording exact pinned versions is a <1>.",
          "An isolated environment for project dependencies is a <2> environment."
        ],
        blanks: [
          { a: ["manifest"], why: "Manifests define high-level dependency constraints." },
          { a: ["lockfile"], why: "Lockfiles record exact pinned versions and hashes." },
          { a: ["virtual"], why: "Virtual environments prevent dependency collisions across projects." }
        ]
      },
      win: "You can configure dependency specifications that guarantee deterministic, identical builds across any machine.",
      nextTasks: [
        "Inspect the lockfile in your project and observe the pinned version numbers and hashes.",
        "Run a clean install using npm ci or poetry install --sync.",
        "Verify that your lockfile is committed to git version control."
      ],
      primarySource: "Yehuda Katz, *Clarifying the Roles of the .lock File* (yehudakatz.com).",
      quiz: [
        {
          q: "What is the main danger of omitting lockfiles from version control in application projects?",
          a: [
            "Different developers and CI servers will resolve different dependency versions, causing unpredictable failures",
            "The computer will run out of hard drive space during compilation",
            "Git will refuse to push commits to remote repositories",
            "All source code comments will be automatically deleted"
          ],
          c: 0,
          why: "Without lockfiles, a new package release can silently break builds on other machines."
        },
        {
          q: "What is the difference between 'npm install' and 'npm ci'?",
          a: [
            "'npm ci' installs strictly from package-lock.json without modifying it; 'npm install' may update the lockfile",
            "'npm ci' compiles C++ binaries; 'npm install' only installs JavaScript",
            "'npm ci' only works when disconnected from the internet",
            "There is no difference between npm install and npm ci"
          ],
          c: 0,
          why: "npm ci guarantees reproducible, non-mutating installs for continuous integration."
        },
        {
          q: "Why do lockfiles include cryptographic hash checksums for each package?",
          a: [
            "To verify that the downloaded package bytes have not been tampered with or corrupted",
            "To encrypt the package files so developers cannot read them",
            "To speed up the internet download speed of npm servers",
            "To convert package source code into WebAssembly binaries"
          ],
          c: 0,
          why: "Integrity hashes guard against man-in-the-middle attacks and altered upstream packages."
        },
        {
          q: "What is a virtual environment in Python or Node.js tooling?",
          a: [
            "An isolated folder containing dependencies specific to a single project",
            "A cloud virtual machine running in an Amazon Web Services data center",
            "A web browser emulator used for testing visual CSS layout",
            "A simulated CPU architecture that interprets machine code"
          ],
          c: 0,
          why: "Virtual environments prevent conflicting package versions from interfering across projects."
        }
      ]
    },
    {
      n: 5,
      id: "entry-points-and-executables",
      title: "Entry points and executables",
      topic: "Entry Points & Testing",
      anim: "LayersOrbit",
      lede: "How does a package become a runnable command? Learn how executable entry points, shebangs, and package manifests expose CLI tools and daemon runners.",
      winShort: "Configure executable entry points and CLI binaries in package manifests",
      missionLink: "Exposes application capabilities cleanly to users and operators",
      sec1: {
        title: "Exposing runnable commands",
        content: `<p>A library is imported by other code; an application is executed by humans or operating systems. To turn a module into an executable command, package managers provide <b>entry point bindings</b>.</p><p>In Python, <code>project.scripts</code> in <code>pyproject.toml</code> maps a command name to a specific Python function. When installed, pip generates an executable script wrapper in your virtualenv's <code>bin/</code> directory that launches your code seamlessly.</p>`,
        keyIdea: "Entry point specifications allow package managers to generate portable CLI executable wrappers automatically."
      },
      predict: {
        q: "What happens when you specify 'my-tool = my_package.cli:main' in pyproject.toml and install the package?",
        a: [
          "The package installer generates an executable binary script named 'my-tool' in bin/",
          "The compiler deletes all other executable files from your system",
          "Your code is translated into compiled C programming code",
          "The command my-tool is registered directly in the computer BIOS"
        ],
        c: 0,
        why: "Package managers automatically generate shim executables that invoke the specified function."
      },
      sec2: {
        title: "CLI mapping architecture",
        content: `<p>Understand how package manifests bridge terminal shell commands to internal module functions.</p>`,
      },
      diagram: {
        boxes: [
          { title: "User runs 'app-cli'", lines: ["shell finds wrapper in bin/", "invokes Python interpreter"] },
          { title: "Shim Wrapper", lines: ["imports package namespace", "executes registered callable"] },
          { title: "my_app.cli:main()", lines: ["parses arguments (argparse/click)", "executes business command"] }
        ]
      },
      sec3: {
        title: "Tracing CLI execution",
        content: `<p>Trace how command-line arguments are parsed and routed to application logic.</p>`,
      },
      trace: {
        code: [
          "# Command: app-cli --format=json users",
          "args = parser.parse_args()",
          "if args.command == 'users':",
          "    data = fetch_users()",
          "    print(json_dumps(data))"
        ],
        steps: [
          { line: 0, vars: { input: "['--format=json', 'users']" } },
          { line: 1, vars: { parsed: "{format: 'json', command: 'users'}" } },
          { line: 2, vars: { route: "match command 'users'" } },
          { line: 3, vars: { output: "[{\"id\": 1, \"name\": \"Ada\"}]" } }
        ]
      },
      practiceIntro: "Test your knowledge of executable entry point mechanics.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "In pyproject.toml, CLI commands are defined under [project.<0>].",
          "In package.json, CLI binary commands are declared under the <1> field.",
          "The directory where virtualenv binary wrappers live is <2>/."
        ],
        blanks: [
          { a: ["scripts"], why: "[project.scripts] maps console command names to callable functions." },
          { a: ["bin"], why: "The 'bin' field in package.json registers executable command names." },
          { a: ["bin"], why: "The bin/ folder holds executable wrapper scripts." }
        ]
      },
      win: "You can expose command-line utilities and server runners through clean package entry point manifests.",
      nextTasks: [
        "Register a simple CLI entry point in your package manifest.",
        "Install the package in editable mode and run the command from your terminal.",
        "Inspect the wrapper script generated inside your virtual environment's bin/ folder."
      ],
      primarySource: "Python Packaging User Guide: *Entry Points and Console Scripts* (packaging.python.org).",
      quiz: [
        {
          q: "What is the primary advantage of console_scripts entry points over manual shell scripts?",
          a: [
            "They automatically generate platform-appropriate executables for Windows, macOS, and Linux",
            "They run without needing any CPU processor instructions",
            "They bypass operating system file permission checks",
            "They encrypt the python code so it cannot be inspected"
          ],
          c: 0,
          why: "Package managers build correct executable shims for the host operating system automatically."
        },
        {
          q: "What signature must a function have to serve as a console entry point?",
          a: [
            "It should take no required arguments and return an integer exit code or None",
            "It must accept exactly twenty string parameters",
            "It must be written in assembly machine code",
            "It must return an active database connection object"
          ],
          c: 0,
          why: "Entry points are called with no arguments; sys.argv is inspected internally."
        },
        {
          q: "Where does Node.js place symlinks for executables declared in package.json bin?",
          a: [
            "node_modules/.bin/",
            "/usr/local/system32/",
            "/tmp/binaries/",
            "src/executables/"
          ],
          c: 0,
          why: "npm creates symlinks in node_modules/.bin so commands can be executed via npx or npm scripts."
        },
        {
          q: "What happens if an entry point function raises an unhandled exception?",
          a: [
            "The interpreter prints a traceback and exits with a non-zero exit code",
            "The computer hardware reboots immediately",
            "The operating system deletes the package permanently",
            "The function silently restarts in an infinite loop"
          ],
          c: 0,
          why: "Unhandled exceptions terminate the process with non-zero exit status, signaling failure."
        }
      ]
    },
    {
      n: 6,
      id: "testing-and-fixtures-directory-patterns",
      title: "Testing and fixture directories",
      topic: "Entry Points & Testing",
      anim: "LayersOrbit",
      lede: "Tests are code too, and need architecture. Learn how to structure unit, integration, and end-to-end tests alongside reusable fixtures.",
      winShort: "Design a scalable test directory hierarchy with shared fixtures and mock data",
      missionLink: "Prevents messy test duplication and slow, brittle test suites",
      sec1: {
        title: "Separating test layers",
        content: `<p>A healthy test suite contains tests of different speeds and scopes. Mixing unit tests (which run in milliseconds in memory) with slow database integration tests creates a suite nobody wants to run.</p><p>Organize your <code>tests/</code> directory into clear subfolders: <code>unit/</code> for isolated function checks, <code>integration/</code> for database and API contracts, and <code>fixtures/</code> for static test payloads and mock responses.</p>`,
        keyIdea: "Separate fast unit tests from slow integration tests so developers can get instant feedback."
      },
      predict: {
        q: "Why should unit tests avoid connecting to real external databases?",
        a: [
          "External I/O makes unit tests slow and introduces flaky network failure dependencies",
          "Databases do not support automated testing queries",
          "Unit tests cannot run SQL statements",
          "Operating systems forbid tests from opening network sockets"
        ],
        c: 0,
        why: "Unit tests must be fast and 100% deterministic; external I/O introduces latency and flakiness."
      },
      sec2: {
        title: "The tests/ directory tree",
        content: `<p>Examine the canonical structure of a multi-tiered automated test suite.</p>`,
      },
      diagram: {
        boxes: [
          { title: "tests/unit/", lines: ["pure logic tests", "zero network, zero disk I/O"] },
          { title: "tests/integration/", lines: ["database queries", "HTTP API endpoints"] },
          { title: "tests/fixtures/", lines: ["sample JSON payloads", "conftest.py shared fixtures"] }
        ]
      },
      sec3: {
        title: "Tracing fixture injection",
        content: `<p>Trace how a test framework injects a shared database session fixture into a test function.</p>`,
      },
      trace: {
        code: [
          "# tests/conftest.py defines fixture: db_session",
          "def test_create_user(db_session):",
          "    user = create_user(db_session, 'Ada')",
          "    assert user.id is not None",
          "# db_session automatically rolls back transaction after test"
        ],
        steps: [
          { line: 0, vars: { fixture: "injected by pytest" } },
          { line: 1, vars: { test: "executes against clean isolated transaction" } },
          { line: 2, vars: { assertion: "verified user created" } },
          { line: 3, vars: { teardown: "transaction rolled back; database clean" } }
        ]
      },
      practiceIntro: "Test your recall of automated test directory organization.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Fast in-memory tests of isolated functions are <0> tests.",
          "Tests verifying collaboration between real services are <1> tests.",
          "Reusable baseline test data and mock objects are called <2>."
        ],
        blanks: [
          { a: ["unit"], why: "Unit tests test single units of logic in isolation." },
          { a: ["integration"], why: "Integration tests verify real component boundaries." },
          { a: ["fixtures"], why: "Fixtures provide consistent baseline environments for tests." }
        ]
      },
      win: "You can structure clean, multi-layered test suites that provide fast developer feedback and reliable integration verification.",
      nextTasks: [
        "Separate your test folder into unit/ and integration/ subdirectories.",
        "Move duplicate test setup data into a shared conftest.py or fixtures module.",
        "Configure your test runner to run unit tests separately from integration tests."
      ],
      primarySource: "pytest Documentation: *Fixtures: a prerequisite to clean testing* (docs.pytest.org).",
      quiz: [
        {
          q: "What is the primary role of a 'conftest.py' file in pytest suites?",
          a: [
            "To declare shared fixtures, plugins, and hooks accessible to all test files in the directory",
            "To store production user passwords",
            "To compile Python into native C machine code",
            "To format test files with code style rules"
          ],
          c: 0,
          why: "conftest.py defines fixtures and plugins automatically discovered across test hierarchies."
        },
        {
          q: "Why is transaction rollback used in database integration fixtures?",
          a: [
            "It resets the database to a clean state after each test without slow re-creation of tables",
            "It saves hard drive electricity consumption",
            "It prevents database queries from being logged",
            "It automatically optimizes SQL indexing performance"
          ],
          c: 0,
          why: "Rolling back transactions ensures each test runs against an isolated, identical database state."
        },
        {
          q: "What belongs in a 'tests/fixtures/' directory?",
          a: [
            "Static sample files like JSON payloads, mock CSVs, or test certificates",
            "The production database backup dumps",
            "Executable compiler binary tools",
            "The core application source code packages"
          ],
          c: 0,
          why: "fixtures/ stores static sample data files required to simulate real inputs during tests."
        },
        {
          q: "Why should unit tests execute in under a few seconds across the entire suite?",
          a: [
            "To encourage developers to run tests constantly during active editing loops",
            "Because cloud servers disconnect if tests run longer than 5 seconds",
            "To avoid overheating the computer CPU processor",
            "Because modern programming languages cannot run long tests"
          ],
          c: 0,
          why: "Fast test suites enable tight test-driven feedback loops without breaking flow."
        }
      ]
    },
    {
      n: 7,
      id: "documentation-and-meta-files",
      title: "Documentation and meta files",
      topic: "Builds, Tests & Hygiene",
      anim: "LayersOrbit",
      lede: "Code tells you how; documentation tells you why. Learn the roles of CHANGELOG, CONTRIBUTING, ADRs, and documentation folders in a production codebase.",
      winShort: "Author comprehensive project meta files that guide contributors and record architecture decisions",
      missionLink: "Ensures projects remain maintainable over years of team evolution",
      sec1: {
        title: "The living documentation set",
        content: `<p>A healthy project maintains four critical meta-documentation files: <code>README.md</code> (how to use it), <code>CONTRIBUTING.md</code> (how to develop and test it), <code>CHANGELOG.md</code> (what changed in each release), and <b>Architecture Decision Records (ADRs)</b> (why key technical choices were made).</p><p>ADRs are particularly vital: they record context, considered alternatives, and the rationale behind major decisions so future engineers do not undo decisions without understanding why they were made.</p>`,
        keyIdea: "Documenting 'why' via ADRs prevents future engineers from repeating past mistakes."
      },
      predict: {
        q: "What is an Architecture Decision Record (ADR)?",
        a: [
          "A short document capturing an important architectural decision, its context, and consequences",
          "A legal copyright agreement signed by all company shareholders",
          "A spreadsheet tracking employee billable working hours",
          "A list of database passwords used in production servers"
        ],
        c: 0,
        why: "ADRs capture the rationale behind technical choices for future reference."
      },
      sec2: {
        title: "The meta-documentation quartet",
        content: `<p>Learn the distinct responsibilities of the four primary project meta files.</p>`,
      },
      diagram: {
        boxes: [
          { title: "README.md", lines: ["purpose, quickstart", "onboarding in 5 minutes"] },
          { title: "CONTRIBUTING.md", lines: ["code standards, branching", "how to run test suites"] },
          { title: "CHANGELOG.md", lines: ["version history (Keep a Changelog)", "breaking changes, fixes"] },
          { title: "docs/adr/", lines: ["Architecture Decision Records", "records context and trade-offs"] }
        ]
      },
      sec3: {
        title: "Tracing an Architecture Decision Record",
        content: `<p>Trace the structure of an ADR documenting the choice of PostgreSQL over MongoDB.</p>`,
      },
      trace: {
        code: [
          "# docs/adr/0002-choose-postgresql.md",
          "## Context: Need ACID transactions for billing data",
          "## Decision: Use PostgreSQL with SQLAlchemy",
          "## Consequences: Strong consistency; requires relational migrations"
        ],
        steps: [
          { line: 0, vars: { doc: "ADR 0002" } },
          { line: 1, vars: { context: "financial transaction integrity requirement" } },
          { line: 2, vars: { decision: "PostgreSQL chosen over document stores" } },
          { line: 3, vars: { trade_offs: "ACID guarantees gained; migration discipline required" } }
        ]
      },
      practiceIntro: "Test your memory of repository documentation files.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A chronological list of changes per release is the <0>.md.",
          "Guidelines for developers submitting pull requests live in <1>.md.",
          "A document explaining an architectural technical choice is an <2>."
        ],
        blanks: [
          { a: ["CHANGELOG"], why: "CHANGELOG records updates, fixes, and breaking changes." },
          { a: ["CONTRIBUTING"], why: "CONTRIBUTING.md outlines development standards and PR guidelines." },
          { a: ["ADR"], why: "ADR stands for Architecture Decision Record." }
        ]
      },
      win: "You can establish maintainable documentation systems that preserve architectural knowledge over time.",
      nextTasks: [
        "Create a CONTRIBUTING.md file detailing how to install dependencies and run tests.",
        "Write your first ADR documenting a major technical choice in your current project.",
        "Adopt the 'Keep a Changelog' standard for your release notes."
      ],
      primarySource: "Michael Nygard, *Documenting Architecture Decisions* (cognitect.com/blog).",
      quiz: [
        {
          q: "Why are Architecture Decision Records (ADRs) committed directly to the git repository?",
          a: [
            "So architectural history stays versioned alongside the exact code it documents",
            "Because cloud servers cannot read files stored outside of git",
            "To prevent competitors from reading technical specifications",
            "To compress the repository file size on disk"
          ],
          c: 0,
          why: "Keeping ADRs in the repo ensures architectural context travels with the code."
        },
        {
          q: "What is the primary content of a CONTRIBUTING.md file?",
          a: [
            "Instructions on local development setup, coding standards, and how to submit pull requests",
            "A list of all financial investors in the company",
            "Customer credit card billing receipt logs",
            "The complete source code of the application"
          ],
          c: 0,
          why: "CONTRIBUTING.md guides external and internal developers on how to collaborate safely."
        },
        {
          q: "What should every entry in a CHANGELOG.md explicitly highlight for users?",
          a: [
            "Breaking changes that require user action when upgrading",
            "The personal computer serial numbers of developers",
            "The internal compiler optimization flags used in builds",
            "The office weather when the version was released"
          ],
          c: 0,
          why: "Highlighting breaking changes prevents unexpected failures during software updates."
        },
        {
          q: "What are the three core sections of a standard ADR?",
          a: [
            "Context, Decision, and Consequences",
            "Header, Body, and Footer",
            "Username, Password, and Database Name",
            "Input, Processing, and Output"
          ],
          c: 0,
          why: "Context explains the problem, Decision states the choice, and Consequences notes the trade-offs."
        }
      ]
    },
    {
      n: 8,
      id: "build-artifacts-and-git-ignore-hygiene",
      title: "Build artifacts and gitignore hygiene",
      topic: "Builds, Tests & Hygiene",
      anim: "LayersOrbit",
      lede: "Never commit generated files. Learn how to craft bulletproof .gitignore files that keep compiled binaries, cache dirs, and secrets out of your repository forever.",
      winShort: "Configure comprehensive .gitignore rules and audit repositories for accidental artifacts",
      missionLink: "Maintains pristine repository history and eliminates merge pollution",
      sec1: {
        title: "Source code versus generated artifacts",
        content: `<p>A git repository should contain <i>only the human-authored source files</i> needed to build the project. It should never contain generated artifacts: compiled binaries, transpiled JavaScript bundles, database dumps, OS thumbnails (<code>.DS_Store</code>), or virtual environments.</p><p>Committing generated files pollutes git history with massive diffs, creates endless merge conflicts, and risks committing machine-specific compiled code that breaks on other architectures.</p>`,
        keyIdea: "If a file can be generated from other files, it must never be committed to git."
      },
      predict: {
        q: "What problem arises when node_modules or .venv is committed to git?",
        a: [
          "Repo size explodes by hundreds of megabytes and binaries fail on different operating systems",
          "The computer compiler will permanently refuse to run",
          "The git repository will automatically convert into a mercurial repository",
          "All files will be converted into read-only binary images"
        ],
        c: 0,
        why: "Dependencies are huge and platform-specific; committing them bloats repos and breaks cross-platform use."
      },
      sec2: {
        title: "Anatomy of a comprehensive .gitignore",
        content: `<p>Categorize ignored files into three essential buckets: Build Artifacts, Dependency Caches, and Environment Secrets.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Build Output", lines: ["dist/, build/, *.pyc", "*.class, *.o, *.so"] },
          { title: "Dependency Caches", lines: ["node_modules/, .venv/", "__pycache__/, .pytest_cache/"] },
          { title: "Secrets & OS", lines: [".env, secrets.json", ".DS_Store, Thumbs.db"] }
        ]
      },
      sec3: {
        title: "Tracing untracked cleanup",
        content: `<p>Trace how git status and git clean detect and remove generated clutter from working trees.</p>`,
      },
      trace: {
        code: [
          "# .gitignore contains: dist/ and __pycache__/",
          "git status --ignored     # lists ignored artifacts without cluttering main status",
          "git check-ignore -v dist/bundle.js  # proves why file is ignored",
          "git clean -fdX           # removes all gitignored generated files safely"
        ],
        steps: [
          { line: 0, vars: { rules: "dist/ and __pycache__/ ignored" } },
          { line: 1, vars: { status: "clean working tree; no accidental commits" } },
          { line: 2, vars: { audit: "matched rule on line 4 of .gitignore" } },
          { line: 3, vars: { cleanup: "all temporary build artifacts purged" } }
        ]
      },
      practiceIntro: "Confirm your understanding of gitignore rules.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The configuration file listing untracked file patterns is .<0>.",
          "The command to test which rule is ignoring a specific file is git check-<1>.",
          "The directory holding compiled distribution wheels is often <2>/."
        ],
        blanks: [
          { a: ["gitignore"], why: ".gitignore tells git which patterns to exclude." },
          { a: ["ignore"], why: "git check-ignore -v <path> shows which rule matched." },
          { a: ["dist", "build"], why: "dist/ holds generated distribution packages." }
        ]
      },
      win: "You can keep repositories lightweight, clean, and free of accidental build artifacts or leaked secrets.",
      nextTasks: [
        "Audit your current git status with git status --ignored.",
        "Verify that .env, build directories, and cache folders are in your .gitignore.",
        "Use git check-ignore -v to test an ignored path."
      ],
      primarySource: "GitHub Documentation: *Ignoring Files* (docs.github.com/en/get-started/getting-started-with-git/ignoring-files).",
      quiz: [
        {
          q: "What is the primary rule for deciding whether a file belongs in .gitignore?",
          a: [
            "If the file is generated by a compiler, build tool, or runtime, it must be ignored",
            "If the file is larger than 10 lines of code, it should be ignored",
            "If the file was written by a junior developer, it should be ignored",
            "If the file has a .txt extension, it must be ignored"
          ],
          c: 0,
          why: "Only human-authored source files belong in git; generated files belong in .gitignore."
        },
        {
          q: "What does 'git check-ignore -v filename' do?",
          a: [
            "Displays the exact line in .gitignore that is causing the file to be ignored",
            "Forces git to track the file even if it is in .gitignore",
            "Deletes the file from disk permanently",
            "Encrypts the file before committing"
          ],
          c: 0,
          why: "check-ignore -v is the primary diagnostic tool for debugging .gitignore rules."
        },
        {
          q: "What happens if a file is already tracked in git before being added to .gitignore?",
          a: [
            "Git continues tracking changes to the file until it is explicitly untracked with 'git rm --cached'",
            "Git deletes the file from disk automatically",
            "The repository corrupts and cannot be opened",
            "Git hides the file from the filesystem"
          ],
          c: 0,
          why: ".gitignore only prevents untracked files from being staged; existing tracked files must be removed from the index."
        },
        {
          q: "Why are macOS .DS_Store files annoying in shared repositories?",
          a: [
            "They are machine-specific desktop metadata files that cause unnecessary clutter and diffs",
            "They install computer viruses on Windows machines",
            "They corrupt Python bytecode compilers",
            "They prevent git push commands from running"
          ],
          c: 0,
          why: ".DS_Store files are OS-specific window display settings that have zero value in source code."
        }
      ]
    }
  ]
};
