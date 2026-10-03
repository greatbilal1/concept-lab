/* ============================================================
   Docker & Containers — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-container-revolution-it-works-on-my-machine", file: "lessons/0001-the-container-revolution-it-works-on-my-machine.html", title: "The Container Revolution: 'It Works on My Machine' No More", topic: "Container Revolution", anim: "Generic" },
  { n: 2, id: "images-union-filesystem-layer-caching", file: "lessons/0002-images-union-filesystem-layer-caching.html", title: "Images and the Union File System: Layer Caching", topic: "Layer Caching", anim: "Generic" },
  { n: 3, id: "production-dockerfiles-multistage-nonroot", file: "lessons/0003-production-dockerfiles-multistage-nonroot.html", title: "Writing Production Dockerfiles: Multi-Stage Builds & Non-Root Users", topic: "Production Dockerfiles", anim: "Generic" },
  { n: 4, id: "container-networking-bridge-dns-ports", file: "lessons/0004-container-networking-bridge-dns-ports.html", title: "Container Networking: Port Mapping, Bridge Networks, and DNS", topic: "Container Networking", anim: "Generic" },
  { n: 5, id: "persistent-storage-bind-mounts-named-volumes", file: "lessons/0005-persistent-storage-bind-mounts-named-volumes.html", title: "Persistent Storage: Bind Mounts vs Named Volumes", topic: "Storage & Volumes", anim: "Generic" },
  { n: 6, id: "multi-container-docker-compose", file: "lessons/0006-multi-container-docker-compose.html", title: "Multi-Container Orchestration with Docker Compose", topic: "Docker Compose", anim: "Generic" },
  { n: 7, id: "container-security-distroless-scanning", file: "lessons/0007-container-security-distroless-scanning.html", title: "Container Security Hardening: Distroless, Capabilities, and Scanning", topic: "Container Hardening", anim: "Generic" },
  { n: 8, id: "packaging-deploying-production-container", file: "lessons/0008-packaging-deploying-production-container.html", title: "Packaging and Deploying a Production Containerized Service", topic: "Container Deployment", anim: "Generic" }
];

/* ============================================================
   Docker & Containers — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "containers-basics", title: "Containers & Layers",
    terms: [
      { term: "Docker Container", def: "A lightweight, standalone, executable package of software including code, runtime, system tools, and libraries.", lesson: 1, tags: ["containers","docker"] },
      { term: "Linux Namespaces", def: "Kernel features providing isolated workspace environments (process, network, mounts) for containers.", lesson: 1, tags: ["kernel","isolation"] },
      { term: "OverlayFS", def: "A Union File System that merges multiple read-only image layers with an active writable container layer.", lesson: 2, tags: ["filesystem","layers"] }
    ]
  },
  {
    id: "dockerfiles", title: "Dockerfiles & Hardening",
    terms: [
      { term: "Multi-Stage Build", def: "A Dockerfile pattern separating build-time compilers from the final lean runtime image to shrink size and CVEs.", lesson: 3, tags: ["dockerfile","builds"] },
      { term: "Non-Root Execution", def: "Running container processes under an unprivileged user (UID 1000) rather than root to limit exploit blast radius.", lesson: 3, tags: ["security","hardening"] },
      { term: "Distroless", def: "Minimal container images containing only the application and runtime, with zero shells, package managers, or OS tools.", lesson: 7, tags: ["security","distroless"] }
    ]
  },
  {
    id: "networking-storage", title: "Networking & Storage",
    terms: [
      { term: "User-Defined Bridge", def: "A private internal virtual network providing automatic container DNS resolution by service name.", lesson: 4, tags: ["networking","dns"] },
      { term: "Named Volume", def: "A Docker-managed persistent storage pool decoupled from container lifecycles, ideal for production databases.", lesson: 5, tags: ["storage","volumes"] },
      { term: "Bind Mount", def: "Mounting a specific host computer directory directly into a container, ideal for local code hot-reloading.", lesson: 5, tags: ["storage","mounts"] }
    ]
  },
  {
    id: "compose-scanning", title: "Compose & Scanning",
    terms: [
      { term: "Docker Compose", def: "A declarative tool for defining and orchestrating multi-container application stacks via compose.yaml.", lesson: 6, tags: ["orchestration","compose"] },
      { term: "Trivy", def: "A leading open-source security scanner detecting vulnerabilities (CVEs) and misconfigurations in container images.", lesson: 7, tags: ["security","trivy"] },
      { term: "Immutable Git SHA Tag", def: "Tagging container images with the exact commit hash (e.g. :a849f2) to guarantee deterministic rollbacks.", lesson: 8, tags: ["devops","deploy"] }
    ]
  }
];
