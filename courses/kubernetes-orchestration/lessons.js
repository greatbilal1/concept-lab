/* ============================================================
   Kubernetes & Orchestration — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "control-plane-and-worker-nodes", file: "lessons/0001-control-plane-and-worker-nodes.html", title: "Control Plane, etcd & Worker Architecture", topic: "Cluster Architecture & Core Primitives", anim: "Layers" },
  { n: 2, id: "pods-and-container-lifecycle", file: "lessons/0002-pods-and-container-lifecycle.html", title: "Pods & Container Lifecycle Management", topic: "Cluster Architecture & Core Primitives", anim: "LayersOrbit" },
  { n: 3, id: "deployments-and-rolling-updates", file: "lessons/0003-deployments-and-rolling-updates.html", title: "Deployments, ReplicaSets & Rolling Updates", topic: "Workloads & Controllers", anim: "CodePulse" },
  { n: 4, id: "statefulsets-and-daemonsets", file: "lessons/0004-statefulsets-and-daemonsets.html", title: "StatefulSets, DaemonSets & Batch Jobs", topic: "Workloads & Controllers", anim: "Bars" },
  { n: 5, id: "services-and-kube-proxy", file: "lessons/0005-services-and-kube-proxy.html", title: "Services, ClusterIP, NodePort & kube-proxy", topic: "Networking, Services & Ingress", anim: "Globe" },
  { n: 6, id: "ingress-and-network-policies", file: "lessons/0006-ingress-and-network-policies.html", title: "Ingress Controllers & Network Security Policies", topic: "Networking, Services & Ingress", anim: "Flow" },
  { n: 7, id: "configmaps-secrets-and-storage", file: "lessons/0007-configmaps-secrets-and-storage.html", title: "ConfigMaps, Secrets, PVs & PVCs", topic: "Storage, Config & Production Operations", anim: "Code" },
  { n: 8, id: "hpa-probes-and-troubleshooting", file: "lessons/0008-hpa-probes-and-troubleshooting.html", title: "Health Probes, Autoscaling (HPA) & Debugging", topic: "Storage, Config & Production Operations", anim: "CodePulse" }
];

/* ============================================================
   Kubernetes & Orchestration — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "cluster-architecture", title: "Cluster Architecture & Control Plane",
    terms: [
      { term: "kube-apiserver", def: "The central management hub of the control plane that exposes the Kubernetes HTTP REST API and validates all state requests.", lesson: 1, tags: ["control-plane","api"] },
      { term: "etcd", def: "A consistent, highly-available distributed key-value store used as Kubernetes' single source of truth for all cluster state data.", lesson: 1, tags: ["storage","etcd"] },
      { term: "Kubelet", def: "The primary node agent running on every worker machine that registers the node and ensures assigned containers are running and healthy.", lesson: 1, tags: ["node","agent"] },
      { term: "Reconciliation loop", def: "The continuous control loop where controllers compare actual cluster state against declared desired state and execute corrections.", lesson: 1, tags: ["architecture","controllers"] }
    ]
  },
  {
    id: "workloads-and-pods", title: "Pods, Workloads & Controllers",
    terms: [
      { term: "Pod", def: "The smallest deployable computing unit in Kubernetes, representing a shared context of one or more co-located containers with shared storage and IP.", lesson: 2, tags: ["workload","pods"] },
      { term: "Deployment", def: "A higher-level controller that manages declarative creation, scaling, and zero-downtime rolling updates of stateless ReplicaSets and Pods.", lesson: 3, tags: ["controllers","deployments"] },
      { term: "StatefulSet", def: "A workload controller that manages stateful applications requiring unique, persistent identities, stable network hostnames, and ordered storage.", lesson: 4, tags: ["controllers","stateful"] },
      { term: "DaemonSet", def: "A controller ensuring that all (or some) nodes run an exact copy of a Pod (ideal for logging agents and monitoring daemons).", lesson: 4, tags: ["controllers"] }
    ]
  },
  {
    id: "networking-and-services", title: "Networking, Services & Ingress",
    terms: [
      { term: "ClusterIP", def: "The default Kubernetes Service type that exposes a stable internal virtual IP address accessible only from within the cluster.", lesson: 5, tags: ["networking","services"] },
      { term: "Kube-proxy", def: "A network proxy running on each node that maintains network routing rules (iptables or IPVS) to direct Service traffic to target Pods.", lesson: 5, tags: ["networking","proxy"] },
      { term: "Ingress", def: "An API object that manages external HTTP/HTTPS routing and TLS termination into cluster Services via a reverse proxy controller.", lesson: 6, tags: ["networking","ingress"] },
      { term: "NetworkPolicy", def: "A declarative firewall specification controlling how groups of pods are permitted to communicate with each other and network endpoints.", lesson: 6, tags: ["security","networking"] }
    ]
  },
  {
    id: "storage-and-operations", title: "Storage, Config & Operations",
    terms: [
      { term: "ConfigMap", def: "An API object used to store non-confidential configuration data in key-value pairs, injected as environment variables or mounted files.", lesson: 7, tags: ["config"] },
      { term: "Secret", def: "An API object intended to hold sensitive data (passwords, tokens, keys) base64-encoded and mounted securely into pods.", lesson: 7, tags: ["security","secrets"] },
      { term: "PersistentVolumeClaim", def: "A request for storage by a user or workload that binds to an available PersistentVolume of matching capacity and access mode.", lesson: 7, tags: ["storage"] },
      { term: "Liveness Probe", def: "A diagnostic check performed by the kubelet to determine if a container is running; if it fails, the container is restarted.", lesson: 8, tags: ["probes","reliability"] }
    ]
  }
];
