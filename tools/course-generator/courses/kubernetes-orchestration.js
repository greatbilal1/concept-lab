"use strict";

module.exports = {
  id: "kubernetes-orchestration",
  title: "Kubernetes & Orchestration",
  num: 103,
  emoji: "☸️",
  desc: "Deploy, scale, and manage containerized applications securely across clusters.",
  mission: `# Mission — Kubernetes & Orchestration

## Why this course exists

Running a single container on a developer laptop with Docker is simple. But running thousands of containers across a fleet of physical or virtual servers in production requires automated scheduling, self-healing, zero-downtime rolling updates, secret distribution, and dynamic traffic routing. Kubernetes (k8s) has become the undisputed operating system of the cloud. This course builds a rigorous mental model of the Kubernetes control plane, declarative desired-state reconciliation loops, pod networking, services, and cluster reliability.

## What the learner can do at the end

- Explain the roles and failure modes of control plane components (kube-apiserver, etcd, kube-scheduler, kube-controller-manager) and worker nodes (kubelet, kube-proxy, container runtime).
- Write clean declarative YAML manifests for Pods, Deployments, Services, and Ingresses.
- Execute zero-downtime rolling updates and rollbacks using Deployments and ReplicaSets.
- Route intra-cluster and external traffic using Services (ClusterIP, NodePort, LoadBalancer) and Ingress Controllers.
- Manage configuration and credentials securely using ConfigMaps, Secrets, and volume mounts.
- Implement persistent storage using StorageClasses, PersistentVolumes (PVs), and PersistentVolumeClaims (PVCs).
- Configure Liveness, Readiness, and Startup probes to enable automated pod self-healing.
- Scale workloads horizontally with the Horizontal Pod Autoscaler (HPA) based on real-time metrics.

## What this course is NOT

- Not a basic containerization primer (covered in Docker & Containers).
- Not a public cloud provider specific guide (AWS EKS, GCP GKE, or Azure AKS). It focuses on standard, portable upstream Kubernetes.

## Success looks like

When a container deployment fails or enters a CrashLoopBackOff state, the learner diagnoses whether it is a failed probe, an OOMKilled container, an unschedulable resource constraint, or a DNS resolution issue in under three minutes using kubectl primitives.
`,
  notes: `# Notes — Kubernetes & Orchestration

## Decisions
- Group into four themes: Cluster Architecture, Workloads & Controllers, Networking & Ingress, and Storage & Operations.
- Emphasize declarative manifests (GitOps) and the continuous control loop reconciliation philosophy.
`,
  resources: `# Resources — Kubernetes & Orchestration

## Knowledge (primary sources)
- Kubernetes Official Documentation (kubernetes.io/docs).
- *Kubernetes: Up and Running* by Kelsey Hightower, Brendan Burns, and Joe Beda (O'Reilly).
- *Production Kubernetes* by Josh Rosso, Rich Lander, Alexander Brand, and John Harris (O'Reilly).
- CNCF (Cloud Native Computing Foundation) Interactive Landscape.

## Wisdom
- In Kubernetes, you never tell the cluster what imperative steps to take; you declare the desired state, and controllers work tirelessly to reconcile reality with your declaration.
`,
  cheatsheetSections: [
    {
      title: "Essential kubectl Commands",
      label: "Cluster inspection and troubleshooting",
      code: `# Inspect cluster status
kubectl get nodes -o wide
kubectl get pods -A

# Investigate pod failures
kubectl describe pod <pod-name>
kubectl logs <pod-name> --previous
kubectl exec -it <pod-name> -- /bin/sh

# Imperative port-forwarding for debugging
kubectl port-forward svc/my-service 8080:80`,
      lessonN: 1,
      lessonSlug: "control-plane-and-worker-nodes",
      lessonTitle: "Control Plane, etcd & Worker Architecture"
    },
    {
      title: "Deployment Manifest",
      label: "Declarative stateless workload",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
      - name: api
        image: api:v1.2.0
        ports:
        - containerPort: 3000
        resources:
          limits:
            memory: "256Mi"
            cpu: "500m"`,
      lessonN: 3,
      lessonSlug: "deployments-and-rolling-updates",
      lessonTitle: "Deployments, ReplicaSets & Rolling Updates"
    },
    {
      title: "Service & Ingress",
      label: "Internal and external routing",
      code: `apiVersion: v1
kind: Service
metadata:
  name: api-service
spec:
  type: ClusterIP
  selector:
    app: api
  ports:
  - port: 80
    targetPort: 3000
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80`,
      lessonN: 5,
      lessonSlug: "services-and-kube-proxy",
      lessonTitle: "Services, ClusterIP & Ingress"
    },
    {
      title: "Health Probes",
      label: "Automated container self-healing",
      code: `livenessProbe:
  httpGet:
    path: /healthz
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 10
readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  periodSeconds: 5`,
      lessonN: 8,
      lessonSlug: "hpa-probes-and-troubleshooting",
      lessonTitle: "Health Probes & Autoscaling"
    }
  ],
  glossaryGroups: [
    {
      id: "cluster-architecture",
      title: "Cluster Architecture & Control Plane",
      terms: [
        { term: "kube-apiserver", def: "The central management hub of the control plane that exposes the Kubernetes HTTP REST API and validates all state requests.", lesson: 1, tags: ["control-plane", "api"] },
        { term: "etcd", def: "A consistent, highly-available distributed key-value store used as Kubernetes' single source of truth for all cluster state data.", lesson: 1, tags: ["storage", "etcd"] },
        { term: "Kubelet", def: "The primary node agent running on every worker machine that registers the node and ensures assigned containers are running and healthy.", lesson: 1, tags: ["node", "agent"] },
        { term: "Reconciliation loop", def: "The continuous control loop where controllers compare actual cluster state against declared desired state and execute corrections.", lesson: 1, tags: ["architecture", "controllers"] }
      ]
    },
    {
      id: "workloads-and-pods",
      title: "Pods, Workloads & Controllers",
      terms: [
        { term: "Pod", def: "The smallest deployable computing unit in Kubernetes, representing a shared context of one or more co-located containers with shared storage and IP.", lesson: 2, tags: ["workload", "pods"] },
        { term: "Deployment", def: "A higher-level controller that manages declarative creation, scaling, and zero-downtime rolling updates of stateless ReplicaSets and Pods.", lesson: 3, tags: ["controllers", "deployments"] },
        { term: "StatefulSet", def: "A workload controller that manages stateful applications requiring unique, persistent identities, stable network hostnames, and ordered storage.", lesson: 4, tags: ["controllers", "stateful"] },
        { term: "DaemonSet", def: "A controller ensuring that all (or some) nodes run an exact copy of a Pod (ideal for logging agents and monitoring daemons).", lesson: 4, tags: ["controllers"] }
      ]
    },
    {
      id: "networking-and-services",
      title: "Networking, Services & Ingress",
      terms: [
        { term: "ClusterIP", def: "The default Kubernetes Service type that exposes a stable internal virtual IP address accessible only from within the cluster.", lesson: 5, tags: ["networking", "services"] },
        { term: "Kube-proxy", def: "A network proxy running on each node that maintains network routing rules (iptables or IPVS) to direct Service traffic to target Pods.", lesson: 5, tags: ["networking", "proxy"] },
        { term: "Ingress", def: "An API object that manages external HTTP/HTTPS routing and TLS termination into cluster Services via a reverse proxy controller.", lesson: 6, tags: ["networking", "ingress"] },
        { term: "NetworkPolicy", def: "A declarative firewall specification controlling how groups of pods are permitted to communicate with each other and network endpoints.", lesson: 6, tags: ["security", "networking"] }
      ]
    },
    {
      id: "storage-and-operations",
      title: "Storage, Config & Operations",
      terms: [
        { term: "ConfigMap", def: "An API object used to store non-confidential configuration data in key-value pairs, injected as environment variables or mounted files.", lesson: 7, tags: ["config"] },
        { term: "Secret", def: "An API object intended to hold sensitive data (passwords, tokens, keys) base64-encoded and mounted securely into pods.", lesson: 7, tags: ["security", "secrets"] },
        { term: "PersistentVolumeClaim", def: "A request for storage by a user or workload that binds to an available PersistentVolume of matching capacity and access mode.", lesson: 7, tags: ["storage"] },
        { term: "Liveness Probe", def: "A diagnostic check performed by the kubelet to determine if a container is running; if it fails, the container is restarted.", lesson: 8, tags: ["probes", "reliability"] }
      ]
    }
  ],
  topics: [
    "Cluster Architecture & Core Primitives",
    "Workloads & Controllers",
    "Networking, Services & Ingress",
    "Storage, Config & Production Operations"
  ],
  lessons: [
    {
      n: 1,
      id: "control-plane-and-worker-nodes",
      title: "Control Plane, etcd & Worker Architecture",
      topic: "Cluster Architecture & Core Primitives",
      anim: "Layers",
      lede: "Kubernetes splits responsibilities cleanly between the brains of the cluster (Control Plane) and the muscle (Worker Nodes).",
      winShort: "Explain the responsibilities of every control plane and worker component and their interaction via the API server",
      missionLink: "Diagnose cluster outages and master the control-plane reconciliation loop",
      sec1: {
        title: "Brain vs Muscle: The two tiers",
        content: `<p>A Kubernetes cluster consists of two distinct tiers:</p><ul><li><b>Control Plane (The Brains):</b> Manages the cluster. It contains the <code>kube-apiserver</code> (the only component communicating directly with <code>etcd</code>), the <code>kube-scheduler</code> (decides which node hosts each pod), and the <code>kube-controller-manager</code> (runs reconciliation loops).</li><li><b>Worker Nodes (The Muscle):</b> The physical or virtual machines that actually run user containers. Each worker runs a <code>kubelet</code> (the local node manager), <code>kube-proxy</code> (handles network packet routing), and a container runtime (such as <code>containerd</code>).</li></ul>`,
        keyIdea: "No component talks directly to etcd except the kube-apiserver; all other components interact via the REST API."
      },
      predict: {
        q: "What happens to currently running user application containers if the entire control plane temporarily loses network connectivity?",
        a: [
          "Existing containers continue running on worker nodes, but no new deployments, scalings, or rescheduling can occur",
          "All containers across all nodes terminate instantly",
          "Worker nodes automatically elect one node as the new control plane",
          "The container images are wiped from disk"
        ],
        c: 0,
        why: "Worker nodes run containerized workloads independently; control plane outages stop management operations, not active execution."
      },
      sec2: {
        title: "The continuous reconciliation loop",
        content: `<p>Kubernetes operates on a simple principle: <b>Observed State vs. Desired State</b>. Controllers continuously query the API server: <i>"The user asked for 3 replicas, but only 2 are running. Therefore, I will create 1 new pod."</i></p>`,
      },
      diagram: {
        boxes: [
          { title: "Control Plane", lines: ["kube-apiserver (REST gateway)", "etcd (state store)", "kube-scheduler (placement)", "controller-manager"] },
          { title: "Communication", lines: ["TLS bidirectional gRPC / HTTPS", "Worker nodes poll apiserver"] },
          { title: "Worker Node", lines: ["kubelet (monitors pods)", "kube-proxy (iptables routing)", "containerd (OIC runtime)"] }
        ]
      },
      sec3: {
        title: "Tracing a pod creation request",
        content: `<p>Trace the step-by-step path of creating a new pod from kubectl to container start.</p>`,
      },
      trace: {
        code: [
          "1. User executes: kubectl apply -f pod.yaml",
          "2. kube-apiserver authenticates request and writes pod spec to etcd",
          "3. kube-scheduler detects unscheduled pod and selects Node-02 based on resources",
          "4. kube-scheduler updates pod spec: nodeName = 'Node-02'",
          "5. kubelet on Node-02 detects assigned pod and instructs containerd to pull image and run"
        ],
        steps: [
          { line: 0, vars: { action: "kubectl sends POST /api/v1/pods to apiserver" } },
          { line: 1, vars: { etcd_state: "Pod recorded with status 'Pending' and nodeName empty" } },
          { line: 2, vars: { scheduler_decision: "Node-02 chosen (has sufficient CPU/RAM)" } },
          { line: 4, vars: { container_started: "containerd launches container; pod becomes 'Running'" } }
        ]
      },
      practiceIntro: "Test your understanding of Kubernetes cluster components.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The only component that communicates directly with etcd is kube-<0>.",
          "The node agent that receives pod manifests and drives the container runtime is the <1>.",
          "The distributed key-value store holding all cluster state is <2>."
        ],
        blanks: [
          { a: ["apiserver"], why: "kube-apiserver guards access to etcd." },
          { a: ["kubelet"], why: "kubelet runs on every worker node." },
          { a: ["etcd"], why: "etcd is the Raft-based state store." }
        ]
      },
      win: "You can articulate the role of every Kubernetes component and understand the core declarative control loop.",
      nextTasks: [
        "Run kubectl get componentstatuses or inspect system pods in kube-system namespace.",
        "Simulate scheduler decisions by cordoning a worker node with kubectl cordon.",
        "Check kubelet systemd logs on a Linux node using journalctl -u kubelet."
      ],
      primarySource: "Kubernetes Documentation: *Kubernetes Components* (kubernetes.io).",
      quiz: [
        {
          q: "Which control plane component decides which specific worker node a new Pod should run on?",
          a: [
            "kube-scheduler",
            "kubelet",
            "kube-proxy",
            "containerd"
          ],
          c: 0,
          why: "kube-scheduler evaluates node affinity, resource limits, and taints to assign pods to nodes."
        },
        {
          q: "What is etcd in a Kubernetes cluster?",
          a: [
            "A strongly consistent, distributed key-value store that stores the entire state of the cluster",
            "A high-speed caching proxy for frontend HTML files",
            "The container image registry where Docker images are stored",
            "A load balancer distributing external web traffic"
          ],
          c: 0,
          why: "etcd stores all Kubernetes resources, specifications, and statuses reliably across cluster leaders."
        },
        {
          q: "How does the kubelet learn what containers it needs to run on its local node?",
          a: [
            "It continuously watches the kube-apiserver for Pods assigned to its node name",
            "The scheduler connects via SSH to the node and runs docker run commands",
            "Users email YAML files directly to the worker machine",
            "The kube-proxy forwards pod specifications through TCP port 80"
          ],
          c: 0,
          why: "The kubelet watches the apiserver API stream for Pods where spec.nodeName matches its identity."
        },
        {
          q: "What is the core philosophy of Kubernetes controllers (like ReplicaSet controller)?",
          a: [
            "Continuously observe the actual current state, compare it with the desired state, and execute corrections",
            "Execute a single linear bash script when the cluster boots",
            "Wait for a human administrator to manually approve every container restart",
            "Run antivirus scans on all container binaries"
          ],
          c: 0,
          why: "The reconciliation loop constantly works to make observed reality match desired YAML declarations."
        }
      ]
    },
    {
      n: 2,
      id: "pods-and-container-lifecycle",
      title: "Pods & Container Lifecycle Management",
      topic: "Cluster Architecture & Core Primitives",
      anim: "LayersOrbit",
      lede: "You do not run containers directly in Kubernetes; you run Pods. Understand why containers share localhost and volumes.",
      winShort: "Write Pod manifests, use multi-container patterns (sidecars), and diagnose container lifecycle states",
      missionLink: "Diagnose CrashLoopBackOff, OOMKilled, and image pull failures rapidly",
      sec1: {
        title: "Why Pods instead of bare containers?",
        content: `<p>A <b>Pod</b> is the atomic unit of scheduling in Kubernetes. While most pods contain just one container, a pod can host multiple tightly coupled containers that share:</p><ul><li><b>Network namespace:</b> All containers in a pod share the same IP address and port space; they communicate with each other over <code>localhost</code>.</li><li><b>Storage volumes:</b> Containers in the same pod can mount shared volumes to exchange files.</li><li><b>IPC namespace:</b> Shared POSIX shared memory or signals.</li></ul>`,
        keyIdea: "Containers in the same pod share an IP address and communicate with each other over localhost."
      },
      predict: {
        q: "What happens if two containers in the same Pod both attempt to listen on TCP port 8080?",
        a: [
          "One container fails to start with a 'port already in use' error, because they share the same network namespace",
          "Kubernetes automatically assigns container 2 to port 8081",
          "Traffic is automatically load-balanced between both containers",
          "The pod is split into two separate pods automatically"
        ],
        c: 0,
        why: "Because containers in a pod share a single IP and network namespace, port collisions occur on localhost."
      },
      sec2: {
        title: "Init containers and sidecars",
        content: `<p>Pods support two important architectural patterns:</p><ul><li><b>Init Containers:</b> Run sequentially to completion <i>before</i> app containers start (ideal for database migrations, waiting for dependencies, or fetching secrets).</li><li><b>Sidecar Containers:</b> Run in parallel alongside the main application to handle cross-cutting concerns like log shipping (Fluentd) or proxying (Envoy / Istio).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Pod Boundary (10.244.1.45)", lines: ["Shared IP & Network Namespace", "Shared localhost port space"] },
          { title: "App Container", lines: ["Main web application", "Port 3000"] },
          { title: "Sidecar Container", lines: ["Log shipper / Metric exporter", "Reads shared volume / localhost:3000"] }
        ]
      },
      sec3: {
        title: "Tracing common pod failure states",
        content: `<p>Trace how Kubernetes reflects container failure modes in the pod status.</p>`,
      },
      trace: {
        code: [
          "State 1: ImagePullBackOff -> Registry authentication failed or tag does not exist",
          "State 2: CrashLoopBackOff -> Container process exited with non-zero exit code repeatedly",
          "State 3: OOMKilled (Exit Code 137) -> Container consumed more memory than resources.limits.memory",
          "State 4: Pending -> No worker node has enough allocatable CPU/RAM to schedule the pod"
        ],
        steps: [
          { line: 0, vars: { check: "kubectl describe pod reveals failed pull events" } },
          { line: 1, vars: { debug_command: "kubectl logs <pod> --previous shows application fatal crash" } },
          { line: 2, vars: { root_cause: "Linux cgroup memory killer terminated container (128 + 9 = 137)" } },
          { line: 3, vars: { resolution: "Add more worker nodes or adjust resource requests" } }
        ]
      },
      practiceIntro: "Test your understanding of Pod structures and container lifecycles.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Containers in the same pod communicate with each other over <0>.",
          "Containers that must finish executing before app containers launch are <1> containers.",
          "When a container is terminated for exceeding memory limits, its reason is <2>."
        ],
        blanks: [
          { a: ["localhost"], why: "Containers share the pod network namespace." },
          { a: ["init"], why: "initContainers run sequentially prior to application start." },
          { a: ["OOMKilled"], why: "Out-Of-Memory killed indicates memory limit violation." }
        ]
      },
      win: "You can write multi-container pod manifests and diagnose the exact cause of CrashLoopBackOff and OOMKilled errors.",
      nextTasks: [
        "Create a multi-container pod where a sidecar writes HTML to a shared emptyDir volume read by Nginx.",
        "Trigger an intentional CrashLoopBackOff by running a container with exit 1 and inspect kubectl describe pod.",
        "Add an initContainer that uses netcat to wait for a database port before the web server starts."
      ],
      primarySource: "Kubernetes Documentation: *Pods* and *Pod Lifecycle*.",
      quiz: [
        {
          q: "What do all containers within the same Pod share?",
          a: [
            "The same IP address, network namespace, and storage volume mounts",
            "The same root filesystem and disk binaries",
            "The same CPU cores exclusively",
            "The same operating system environment variables"
          ],
          c: 0,
          why: "Pods share network and IPC namespaces and can share volumes, but container filesystems remain isolated."
        },
        {
          q: "What does the pod status 'CrashLoopBackOff' indicate?",
          a: [
            "The container started, crashed with an error, and Kubernetes is waiting with exponential backoff before restarting it",
            "The Docker image could not be downloaded from the registry",
            "The Kubernetes worker node ran out of disk space",
            "The pod was evicted due to high network latency"
          ],
          c: 0,
          why: "CrashLoopBackOff means the application process keeps exiting immediately on startup."
        },
        {
          q: "What does an exit code of 137 on a container signify?",
          a: [
            "The container was killed by the OS (SIGKILL) because it exceeded its allocated memory limit (OOMKilled)",
            "The container successfully completed all tasks and exited cleanly",
            "The YAML syntax of the pod manifest was invalid",
            "The network cable was unplugged from the server"
          ],
          c: 0,
          why: "Exit code 137 corresponds to 128 + 9 (SIGKILL), the standard termination signal for OOMKilled processes."
        },
        {
          q: "When do 'initContainers' run in the pod lifecycle?",
          a: [
            "Sequentially in order, and each must exit successfully before standard application containers start",
            "In parallel with the main application continuously",
            "Only when the pod is shutting down",
            "Whenever an HTTP request fails"
          ],
          c: 0,
          why: "initContainers run to completion one-by-one before any application container is launched."
        }
      ]
    },
    {
      n: 3,
      id: "deployments-and-rolling-updates",
      title: "Deployments, ReplicaSets & Rolling Updates",
      topic: "Workloads & Controllers",
      anim: "CodePulse",
      lede: "Never create standalone Pods in production. Deployments manage ReplicaSets to ensure high availability and zero-downtime rollouts.",
      winShort: "Manage stateless applications using Deployments, execute rolling updates, and perform instant rollbacks",
      missionLink: "Ship code changes to production continuously without dropping a single active customer request",
      sec1: {
        title: "The Deployment hierarchy",
        content: `<p>If you create a naked Pod and its worker node crashes, that pod is dead forever. To achieve high availability and self-healing, Kubernetes provides controller hierarchies:</p><ul><li><b>Deployment:</b> High-level controller representing your application version. Handles updates and rollbacks.</li><li><b>ReplicaSet:</b> Mid-level controller managed by the Deployment that guarantees an exact number of identical pod replicas are running.</li><li><b>Pod:</b> The running workload instances.</li></ul>`,
        keyIdea: "A Deployment manages ReplicaSets; a ReplicaSet manages Pods. Never modify ReplicaSets directly."
      },
      predict: {
        q: "What happens when you update the image tag on a Deployment from v1.0.0 to v2.0.0?",
        a: [
          "The Deployment creates a new ReplicaSet for v2.0.0 and gradually scales it up while scaling down the old v1.0.0 ReplicaSet",
          "All v1.0.0 pods are killed simultaneously, causing 30 seconds of downtime while v2.0.0 downloads",
          "The running containers are live-patched in memory without restarting",
          "The Deployment rejects the change unless the cluster is restarted"
        ],
        c: 0,
        why: "Deployments perform rolling updates by orchestrating two ReplicaSets: scaling up the new while scaling down the old."
      },
      sec2: {
        title: "Rolling update parameters: maxSurge and maxUnavailable",
        content: `<p>You fine-tune rolling update behavior using two properties:</p><ul><li><code>maxSurge:</code> How many extra pods can be created above the desired replica count during the rollout (e.g. <code>25%</code>).</li><li><code>maxUnavailable:</code> How many pods can be unavailable during the update process (e.g. <code>0</code> guarantees no capacity loss).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Deployment Spec", lines: ["replicas: 4", "image: api:v2.0.0", "strategy: RollingUpdate"] },
          { title: "Old ReplicaSet (v1)", lines: ["Scaled down: 4 -> 3 -> 2 -> 0", "Retained for instant rollback"] },
          { title: "New ReplicaSet (v2)", lines: ["Scaled up: 0 -> 1 -> 2 -> 4", "Accepts traffic once ready"] }
        ]
      },
      sec3: {
        title: "Tracing a rollback with kubectl",
        content: `<p>Trace how quickly an erroneous deployment can be reverted using revision history.</p>`,
      },
      trace: {
        code: [
          "1. kubectl set image deployment/web web=app:v2.0.0 # Bad release (crashes)",
          "2. Deployment detects v2 pods failing readiness probes; pauses rollout",
          "3. User checks history: kubectl rollout history deployment/web",
          "4. User triggers instant rollback: kubectl rollout undo deployment/web",
          "5. Deployment scales old v1 ReplicaSet back to 100% capacity"
        ],
        steps: [
          { line: 0, vars: { rollout: "Triggered update to v2.0.0" } },
          { line: 1, vars: { safety: "maxUnavailable protects healthy v1 pods from being killed" } },
          { line: 3, vars: { rollback: "kubectl rollout undo executed" } },
          { line: 4, vars: { status: "Cluster restored to healthy v1.0.0 state in seconds" } }
        ]
      },
      practiceIntro: "Test your mastery of Deployments and zero-downtime rolling updates.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The controller that maintains a fixed number of running Pod replicas is a Replica<0>.",
          "The default update strategy for Kubernetes Deployments is <1>Update.",
          "To revert a failed rollout to the previous working revision, run kubectl rollout <2>."
        ],
        blanks: [
          { a: ["Set"], why: "ReplicaSet manages identical pods." },
          { a: ["Rolling"], why: "RollingUpdate replaces pods gradually." },
          { a: ["undo"], why: "kubectl rollout undo performs rollbacks." }
        ]
      },
      win: "You can write Deployment manifests, tune rolling update concurrency, and perform instant production rollbacks.",
      nextTasks: [
        "Deploy an application with 5 replicas and perform an image update with maxUnavailable: 0.",
        "Observe the rollout progress live using kubectl rollout status deployment/<name>.",
        "Intentionally deploy an invalid image and recover the service using kubectl rollout undo."
      ],
      primarySource: "Kubernetes Documentation: *Deployments* (kubernetes.io).",
      quiz: [
        {
          q: "Why should you manage pods with a Deployment instead of creating bare Pod objects?",
          a: [
            "Deployments automatically replace crashed or evicted pods and support zero-downtime updates and rollbacks",
            "Bare pods cannot communicate over HTTP",
            "Deployments run containers at double CPU clock speed",
            "Bare pods are automatically deleted after 60 minutes"
          ],
          c: 0,
          why: "Deployments provide self-healing, replica guarantees, and declarative update mechanisms."
        },
        {
          q: "What does setting 'maxUnavailable: 0' achieve during a Deployment rolling update?",
          a: [
            "It guarantees that 100% of desired replica capacity remains healthy and available throughout the rollout",
            "It speeds up the deployment process by skipping image downloads",
            "It prevents any new pods from being created",
            "It requires all pods to run on the same worker node"
          ],
          c: 0,
          why: "With maxUnavailable: 0, no old pod is terminated until a new pod has fully launched and passed its readiness probe."
        },
        {
          q: "What happens to the old ReplicaSet when a Deployment completes a rolling update to a new version?",
          a: [
            "It is scaled to 0 replicas but retained in etcd to enable instant rollbacks",
            "It is permanently deleted from the cluster",
            "It is exported to an external tar archive",
            "It continues running alongside the new version indefinitely"
          ],
          c: 0,
          why: "Old ReplicaSets are scaled to zero but preserved so kubectl rollout undo can instantly scale them back up."
        },
        {
          q: "Which command pauses an in-progress deployment rollout?",
          a: [
            "kubectl rollout pause deployment/<name>",
            "kubectl stop deployment/<name>",
            "kubectl freeze deployment/<name>",
            "kubectl sleep deployment/<name>"
          ],
          c: 0,
          why: "kubectl rollout pause allows making multiple changes without triggering intermediate rollouts."
        }
      ]
    },
    {
      n: 4,
      id: "statefulsets-and-daemonsets",
      title: "StatefulSets, DaemonSets & Batch Jobs",
      topic: "Workloads & Controllers",
      anim: "Bars",
      lede: "Not every application is a stateless web server. Learn how to run databases (StatefulSets), node agents (DaemonSets), and one-off tasks (Jobs).",
      winShort: "Choose the correct workload controller (StatefulSet, DaemonSet, Job, CronJob) for specialized workloads",
      missionLink: "Run databases and cluster-wide infrastructure agents predictably and safely",
      sec1: {
        title: "Stateful workloads with StatefulSets",
        content: `<p>Stateless pods are interchangeable cattle: if <code>web-7f89d-abc</code> dies, it is replaced by <code>web-7f89d-xyz</code> with a new random IP and ephemeral storage.</p><p>Databases (PostgreSQL, Kafka, Cassandra) require <b>stable identities</b>. A <b>StatefulSet</b> guarantees:</p><ul><li><b>Stable network IDs:</b> Pods have predictable sequential names: <code>db-0</code>, <code>db-1</code>, <code>db-2</code>.</li><li><b>Dedicated storage:</b> Each pod receives its own dedicated PersistentVolume that reattaches to that exact pod index even after a crash or reschedule.</li><li><b>Ordered deployment and scaling:</b> Pods start and terminate strictly in sequential order (0, then 1, then 2).</li></ul>`,
        keyIdea: "StatefulSets provide stable sequential hostnames and dedicated persistent volume bindings for databases."
      },
      predict: {
        q: "If pod 'db-1' in a StatefulSet crashes and is recreated on another node, what happens to its PersistentVolume?",
        a: [
          "The exact same storage volume is detached from the old node and safely reattached to db-1 on the new node",
          "The volume is formatted and wiped clean for security",
          "A new blank volume is created with zero data",
          "The volume data is merged into db-0"
        ],
        c: 0,
        why: "StatefulSets pair each ordinal index (db-1) with a dedicated volume claim that persists across pod lifecycles."
      },
      sec2: {
        title: "DaemonSets, Jobs, and CronJobs",
        content: `<p>Different operational patterns require specialized controllers:</p><ul><li><b>DaemonSet:</b> Ensures that <i>every node</i> runs an exact replica of a Pod. Perfect for monitoring agents (Datadog, Prometheus node-exporter) and log collectors (Fluentbit).</li><li><b>Job:</b> Runs a pod until completion (exit code 0). Ideal for database migrations or batch data processing.</li><li><b>CronJob:</b> Schedules Jobs to run periodically at fixed intervals using standard cron syntax (e.g. <code>0 2 * * *</code> for nightly backups).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "StatefulSet", lines: ["db-0, db-1, db-2", "Unique persistent volumes", "Databases, Kafka, Zookeeper"] },
          { title: "DaemonSet", lines: ["Runs on Node-1, Node-2, Node-3", "1 pod per worker node", "Log collectors, network agents"] },
          { title: "Job / CronJob", lines: ["Runs to completion (exit 0)", "Scheduled via cron syntax", "Batch processing, migrations"] }
        ]
      },
      sec3: {
        title: "Tracing a database migration Job",
        content: `<p>Trace how a Kubernetes Job runs a container to completion and terminates cleanly.</p>`,
      },
      trace: {
        code: [
          "1. Job manifest applied: schema-migration-v4",
          "2. Job controller launches pod: schema-migration-v4-abc",
          "3. Pod executes SQL migration script: ALTER TABLE users ADD COLUMN...",
          "4. Migration script finishes successfully with exit code 0",
          "5. Pod phase becomes 'Completed'; Job controller marks Job 'Complete'"
        ],
        steps: [
          { line: 1, vars: { controller: "Job controller schedules pod" } },
          { line: 2, vars: { execution: "SQL migration commands execute" } },
          { line: 3, vars: { exit_code: "Exit code 0 detected" } },
          { line: 4, vars: { job_status: "Completed (Container is not restarted)" } }
        ]
      },
      practiceIntro: "Test your understanding of specialized Kubernetes workload controllers.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The controller designed for stateful databases with ordered ordinal hostnames is <0>.",
          "The controller that ensures every single node runs a copy of a pod is a <1>.",
          "A workload that runs to completion and exits rather than restarting is a <2>."
        ],
        blanks: [
          { a: ["StatefulSet"], why: "StatefulSets provide stable identities." },
          { a: ["DaemonSet"], why: "DaemonSets run on every node." },
          { a: ["Job"], why: "Jobs run to completion." }
        ]
      },
      win: "You can select and configure the right workload controller for databases, log forwarders, and batch tasks.",
      nextTasks: [
        "Deploy a 3-node Redis or PostgreSQL cluster using a StatefulSet and Headless Service.",
        "Inspect the DaemonSets running in your cluster using kubectl get daemonsets -A.",
        "Create a CronJob that logs the current timestamp every 5 minutes."
      ],
      primarySource: "Kubernetes Documentation: *StatefulSets* and *DaemonSets*.",
      quiz: [
        {
          q: "Why are databases commonly deployed using StatefulSets rather than Deployments?",
          a: [
            "StatefulSets provide persistent, predictable network identities (db-0, db-1) and dedicated persistent storage per replica",
            "StatefulSets disable memory limits to allow faster SQL execution",
            "StatefulSets can only run on physical bare-metal hardware",
            "Deployments are forbidden from mounting any persistent storage"
          ],
          c: 0,
          why: "StatefulSets maintain stable identity and ensure storage volumes reattach to the exact same ordinal instance."
        },
        {
          q: "What workload controller is best suited for running a log-collection agent like Fluentbit on every cluster node?",
          a: [
            "DaemonSet",
            "Deployment",
            "StatefulSet",
            "CronJob"
          ],
          c: 0,
          why: "DaemonSets guarantee that all existing and newly joined nodes run an instance of the pod."
        },
        {
          q: "How does a Kubernetes Job differ from a Deployment?",
          a: [
            "A Job runs pods until a successful exit code 0 is reached; a Deployment keeps pods running indefinitely",
            "A Job can only run shell scripts",
            "A Job cannot have resource limits",
            "A Job runs exclusively on the control plane"
          ],
          c: 0,
          why: "Deployments restart terminated pods; Jobs terminate cleanly once tasks complete successfully."
        },
        {
          q: "What happens when a new worker node is added to a cluster that has an active DaemonSet?",
          a: [
            "The DaemonSet controller automatically schedules a pod onto the new node without manual intervention",
            "The cluster administrator must restart the entire cluster",
            "The DaemonSet scales down on existing nodes to compensate",
            "The new node remains empty until an image update occurs"
          ],
          c: 0,
          why: "The DaemonSet controller automatically detects new nodes and provisions the required pod immediately."
        }
      ]
    },
    {
      n: 5,
      id: "services-and-kube-proxy",
      title: "Services, ClusterIP, NodePort & kube-proxy",
      topic: "Networking, Services & Ingress",
      anim: "Globe",
      lede: "Pods are ephemeral and their IP addresses change constantly. Services provide stable virtual IPs and load balancing.",
      winShort: "Create ClusterIP, NodePort, and LoadBalancer services and explain kube-proxy packet routing",
      missionLink: "Provide dependable internal and external network routing across dynamic container fleets",
      sec1: {
        title: "The problem of ephemeral Pod IPs",
        content: `<p>Every pod in Kubernetes gets a private IP address. But pods crash, scale up, and roll over constantly—each new pod receives a new IP address. If frontend pods hardcoded backend pod IPs, everything would break within minutes.</p><p>A <b>Service</b> is an abstraction that defines a logical set of Pods (identified by a <b>label selector</b>) and a policy by which to access them. A Service gets a permanent, stable virtual IP (<b>ClusterIP</b>) and a DNS name (e.g. <code>api-service.default.svc.cluster.local</code>) that never changes.</p>`,
        keyIdea: "A Service provides a permanent virtual IP and DNS name that routes traffic across dynamically changing Pod IPs."
      },
      predict: {
        q: "How does a Service know which specific Pods should receive its network traffic?",
        a: [
          "It uses a label selector (e.g. app: api) that matches metadata labels assigned to Pods",
          "It automatically routes traffic to every pod in the entire namespace",
          "The developer must manually enter every pod IP in the Service manifest",
          "Traffic is broadcast to all worker nodes simultaneously"
        ],
        c: 0,
        why: "Services use label selectors to dynamically discover and track matching Pod endpoints."
      },
      sec2: {
        title: "The four Service types",
        content: `<p>Kubernetes provides four Service exposure types:</p><ul><li><b>ClusterIP (Default):</b> Exposes the Service on an internal cluster-only virtual IP. Accessible only from inside the cluster.</li><li><b>NodePort:</b> Exposes the Service on a static high-range port (30000–32767) on <i>every worker node's external IP</i>.</li><li><b>LoadBalancer:</b> Provisions an external cloud load balancer (e.g. AWS NLB, GCP Load Balancer) that routes to the Service.</li><li><b>ExternalName:</b> Maps the Service to a CNAME DNS record outside the cluster.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Service (ClusterIP)", lines: ["Stable VIP: 10.96.0.15", "DNS: backend.default.svc", "Selector: app=backend"] },
          { title: "Endpoints Object", lines: ["Auto-managed by controller", "List of healthy Pod IPs", "10.244.1.5, 10.244.2.8"] },
          { title: "kube-proxy (iptables / IPVS)", lines: ["Intercepts Service VIP packets", "Rewrites destination to a healthy Pod IP", "Balances load evenly"] }
        ]
      },
      sec3: {
        title: "Tracing packet routing via kube-proxy",
        content: `<p>Trace how kube-proxy rewrites network packet destinations using iptables or IPVS.</p>`,
      },
      trace: {
        code: [
          "1. Pod A sends HTTP packet to Service VIP: 10.96.0.15:80",
          "2. Linux kernel iptables rules configured by kube-proxy intercept packet",
          "3. NAT (Network Address Translation) rule randomly selects Pod B IP: 10.244.1.8:3000",
          "4. Packet destination rewritten: 10.244.1.8:3000 and routed across overlay network",
          "5. Pod B processes request and replies back through NAT translation"
        ],
        steps: [
          { line: 0, vars: { source: "Pod A (10.244.2.3)", destination: "Service VIP (10.96.0.15)" } },
          { line: 1, vars: { intercept: "Kernel iptables DNAT rule triggered" } },
          { line: 2, vars: { rewritten_dest: "Target Pod B IP (10.244.1.8)" } },
          { line: 4, vars: { completion: "Direct pod-to-pod packet arrival" } }
        ]
      },
      practiceIntro: "Test your understanding of Kubernetes Services and network routing.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The default internal-only Kubernetes Service type is <0>.",
          "The mechanism used by Services to match target pods is a label <1>.",
          "The node-level network agent configuring iptables/IPVS routing is kube-<2>."
        ],
        blanks: [
          { a: ["ClusterIP"], why: "ClusterIP provides internal routing." },
          { a: ["selector"], why: "Selectors query matching metadata labels." },
          { a: ["proxy"], why: "kube-proxy programs the Linux kernel packet filters." }
        ]
      },
      win: "You can create robust service discovery layers and choose appropriately between ClusterIP, NodePort, and LoadBalancer.",
      nextTasks: [
        "Create a ClusterIP service and query its DNS record from inside a debugging pod using nslookup.",
        "Inspect the active endpoints of a service using kubectl get endpoints <service-name>.",
        "Compare iptables mode vs IPVS mode performance in kube-proxy architecture."
      ],
      primarySource: "Kubernetes Documentation: *Services, Load Balancing, and Networking*.",
      quiz: [
        {
          q: "What is the primary role of a Kubernetes Service?",
          a: [
            "To provide a permanent, stable virtual IP and DNS name that routes traffic to a dynamic group of healthy Pods",
            "To build Docker images from Git repositories",
            "To restart worker nodes when memory is exhausted",
            "To generate SSL certificates automatically"
          ],
          c: 0,
          why: "Services decouple callers from dynamic, changing pod IP addresses."
        },
        {
          q: "Which Service type exposes an application on a high-range static port across every worker node's external IP?",
          a: [
            "NodePort",
            "ClusterIP",
            "InternalPort",
            "DirectPort"
          ],
          c: 0,
          why: "NodePort exposes a port between 30000 and 32767 on all node IPs."
        },
        {
          q: "How does CoreDNS resolve the internal service domain 'users.default.svc.cluster.local'?",
          a: [
            "It returns the stable virtual ClusterIP of the 'users' service in the 'default' namespace",
            "It queries Google Public DNS (8.8.8.8) over the public internet",
            "It returns the IP address of the worker node where the pod was compiled",
            "It returns a random external IP"
          ],
          c: 0,
          why: "In-cluster CoreDNS resolves Service names directly to their stable virtual ClusterIPs."
        },
        {
          q: "What component is responsible for translating a Service's virtual IP into actual Pod IP addresses on a worker node?",
          a: [
            "kube-proxy",
            "kube-scheduler",
            "etcd",
            "containerd"
          ],
          c: 0,
          why: "kube-proxy programs operating system packet filtering rules (iptables/IPVS) on each node to forward traffic to pod IPs."
        }
      ]
    },
    {
      n: 6,
      id: "ingress-and-network-policies",
      title: "Ingress Controllers & Network Security Policies",
      topic: "Networking, Services & Ingress",
      anim: "Flow",
      lede: "Creating a cloud LoadBalancer for every microservice is costly and wasteful. Ingress consolidates traffic behind a single smart reverse proxy.",
      winShort: "Configure Ingress rules for path-based routing and secure inter-pod communication with NetworkPolicies",
      missionLink: "Save cloud infrastructure costs and implement zero-trust network boundaries across microservices",
      sec1: {
        title: "Ingress: One entry point for the cluster",
        content: `<p>If your company operates 20 microservices, creating 20 <code>type: LoadBalancer</code> services incurs 20 separate cloud load balancer bills (hundreds of dollars a month). More importantly, basic cloud load balancers cannot inspect HTTP host headers or URL paths.</p><p>An <b>Ingress</b> object manages external HTTP and HTTPS access to cluster services. An <b>Ingress Controller</b> (such as NGINX Ingress, Traefik, or Envoy) runs as a reverse proxy, inspecting hostnames (e.g. <code>api.example.com</code> vs <code>app.example.com</code>) and paths (<code>/users</code> vs <code>/orders</code>) to route traffic using a single cloud IP address.</p>`,
        keyIdea: "Ingress consolidates external HTTP/HTTPS routing, TLS termination, and path-based routing behind a single entry point."
      },
      predict: {
        q: "What happens if you create an Ingress YAML resource in a cluster where NO Ingress Controller is installed?",
        a: [
          "Nothing happens: the Ingress resource is saved in etcd, but no traffic is routed because no controller is running to configure a proxy",
          "Kubernetes automatically downloads and installs NGINX",
          "The cluster rejects the YAML with an UnknownResource error",
          "The operating system routes traffic using localhost"
        ],
        c: 0,
        why: "Ingress is only a specification; an Ingress Controller must be running to implement the routing rules."
      },
      sec2: {
        title: "Zero-trust with NetworkPolicies",
        content: `<p>By default, Kubernetes uses a <b>flat, open network</b>: any Pod in any namespace can communicate with any other Pod in the cluster. If an attacker compromises a public web pod, they can query internal database pods unrestricted.</p><p>A <b>NetworkPolicy</b> functions as a distributed firewall. You specify <code>ingress</code> (incoming) and <code>egress</code> (outgoing) rules using label selectors, locking down communication to only authorized services.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Public Internet", lines: ["https://example.com/api", "Single external cloud LoadBalancer"] },
          { title: "Ingress Controller", lines: ["TLS termination", "Path / Host routing: /api -> api-svc", "/web -> web-svc"] },
          { title: "NetworkPolicy Firewall", lines: ["Allows Web -> API only", "Blocks Web -> Database directly", "Zero-trust network enforcement"] }
        ]
      },
      sec3: {
        title: "Tracing NetworkPolicy traffic rejection",
        content: `<p>Trace how a CNI network plugin enforces NetworkPolicy isolation rules.</p>`,
      },
      trace: {
        code: [
          "1. Compromised pod 'frontend-abc' attempts TCP connection to 'database-xyz:5432'",
          "2. Node network packet filter evaluates NetworkPolicy on 'database-xyz'",
          "3. Policy ingress allows only pods matching: { role: 'backend' }",
          "4. Packet from { role: 'frontend' } does not match allowed selector",
          "5. Packet is immediately dropped at the kernel level; connection times out"
        ],
        steps: [
          { line: 0, vars: { attack_vector: "Unauthorized lateral movement attempt" } },
          { line: 2, vars: { firewall_rule: "Ingress whitelist: role=backend" } },
          { line: 4, vars: { enforcement: "Packet dropped silently; database safe" } }
        ]
      },
      practiceIntro: "Test your understanding of Ingress routing and NetworkPolicy security.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The reverse proxy software that satisfies Ingress rules is an Ingress <0>.",
          "By default, Kubernetes network communication between pods is completely <1>.",
          "The Kubernetes resource that acts as a declarative firewall between pods is a Network<2>."
        ],
        blanks: [
          { a: ["Controller"], why: "An Ingress Controller implements the proxy." },
          { a: ["open", "unrestricted"], why: "Default pod networking is flat and unrestricted." },
          { a: ["Policy"], why: "NetworkPolicy restricts inter-pod traffic." }
        ]
      },
      win: "You can consolidate web routing with Ingress and secure cluster traffic using zero-trust NetworkPolicies.",
      nextTasks: [
        "Deploy an NGINX Ingress Controller and configure path routing for /v1 and /v2.",
        "Write a default-deny NetworkPolicy that blocks all incoming traffic in a namespace.",
        "Configure automatic TLS certificate generation with cert-manager and Let's Encrypt annotations."
      ],
      primarySource: "Kubernetes Documentation: *Ingress* and *Network Policies*.",
      quiz: [
        {
          q: "What is the difference between an Ingress resource and an Ingress Controller?",
          a: [
            "An Ingress is a declarative specification of routing rules; an Ingress Controller is the running reverse proxy daemon that fulfills them",
            "An Ingress is for Windows nodes; an Ingress Controller is for Linux nodes",
            "An Ingress handles database queries; an Ingress Controller handles HTTP",
            "There is no difference; they are interchangeable terms"
          ],
          c: 0,
          why: "The Ingress resource holds the YAML configuration; the Ingress Controller (e.g. NGINX) executes the actual routing."
        },
        {
          q: "What is the default inter-pod communication policy in a fresh Kubernetes namespace without NetworkPolicies?",
          a: [
            "All pods can communicate with any other pod across all namespaces without restriction",
            "All pods are isolated and can only communicate with localhost",
            "Only pods with the same image name can communicate",
            "Inter-pod communication requires an active VPN"
          ],
          c: 0,
          why: "Kubernetes enforces a flat, non-isolated network model by default until NetworkPolicies are defined."
        },
        {
          q: "Why is an Ingress more cost-effective than using individual LoadBalancer services for 20 microservices?",
          a: [
            "It shares a single public cloud LoadBalancer and IP address, routing via HTTP host and path rules",
            "Ingress runs on free peer-to-peer torrent networks",
            "Ingress avoids encrypting network traffic",
            "Cloud providers do not bill for Ingress traffic"
          ],
          c: 0,
          why: "Ingress consolidates many routes behind a single cloud load balancer, drastically reducing cloud infrastructure fees."
        },
        {
          q: "What must be present in a Kubernetes cluster for NetworkPolicies to actually enforce packet filtering?",
          a: [
            "A Container Network Interface (CNI) plugin that supports NetworkPolicies (e.g. Calico, Cilium)",
            "A hardware Cisco firewall attached to each node",
            "A public domain name registered with GoDaddy",
            "A separate database node"
          ],
          c: 0,
          why: "NetworkPolicies require a network plugin like Calico, Cilium, or Weave that enforces firewall rules at the Linux kernel level."
        }
      ]
    },
    {
      n: 7,
      id: "configmaps-secrets-and-storage",
      title: "ConfigMaps, Secrets, PVs & PVCs",
      topic: "Storage, Config & Production Operations",
      anim: "Code",
      lede: "Never hardcode configuration or passwords in container images. Separate configuration and persistent storage from code.",
      winShort: "Inject configuration and secrets into pods and provision persistent storage with PVCs",
      missionLink: "Keep sensitive credentials secure and preserve critical data across container restarts",
      sec1: {
        title: "Separating configuration from container images",
        content: `<p>The Twelve-Factor App methodology mandates strict separation of config from code. Building separate container images for development, staging, and production is an anti-pattern.</p><p>Kubernetes provides two core configuration primitives:</p><ul><li><b>ConfigMap:</b> Stores non-sensitive key-value pairs (URLs, feature flags, configuration files).</li><li><b>Secret:</b> Stores sensitive data (database passwords, API tokens, TLS private keys).</li></ul><p>Both can be injected into containers as <b>environment variables</b> or mounted as <b>configuration files inside a volume</b>.</p>`,
        keyIdea: "Use ConfigMaps for general configuration and Secrets for sensitive credentials; inject them via environment variables or volumes."
      },
      predict: {
        q: "Are standard Kubernetes Secrets encrypted by default in etcd without additional configuration?",
        a: [
          "No: they are only Base64-encoded strings, not securely encrypted, unless encryption-at-rest is explicitly enabled on the API server",
          "Yes, they are encrypted with military-grade 4096-bit RSA keys by default",
          "Yes, Secrets are completely unreadable even by the root user",
          "Secrets are stored in the computer's CPU registers"
        ],
        c: 0,
        why: "Base64 encoding is an obfuscation format, not encryption. Production clusters must enable encryption-at-rest or use external secret vaults."
      },
      sec2: {
        title: "Persistent storage: PV, PVC, and StorageClass",
        content: `<p>Container filesystems are ephemeral: when a container restarts, modifications are wiped clean. For durable storage, Kubernetes decouples storage consumers from storage providers:</p><ul><li><b>StorageClass:</b> Defines the storage provisioner (e.g. AWS EBS gp3, GCP Persistent Disk, local NVMe).</li><li><b>PersistentVolume (PV):</b> A physical piece of storage in the cluster provisioned by an administrator or dynamically by a StorageClass.</li><li><b>PersistentVolumeClaim (PVC):</b> A request for storage by a user (e.g. <i>"Give me 50GB with ReadWriteOnce access"</i>) that binds to a matching PV.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "StorageClass", lines: ["Provisioner: ebs.csi.aws.com", "Dynamically provisions disks on cloud"] },
          { title: "PersistentVolumeClaim (PVC)", lines: ["Request: 50Gi storage", "Bound to Pod manifest"] },
          { title: "PersistentVolume (PV)", lines: ["Allocated 50Gi Cloud Block Store", "Persists even if pod is destroyed"] }
        ]
      },
      sec3: {
        title: "Tracing volume mounting into a pod",
        content: `<p>Trace how a pod mounts a persistent volume claim and reads configuration files.</p>`,
      },
      trace: {
        code: [
          "1. Pod manifest declares: persistentVolumeClaim: { claimName: 'data-pvc' }",
          "2. Kubernetes attaches storage volume to the assigned worker node",
          "3. Kubelet formats and mounts volume to /var/lib/data inside container",
          "4. Application writes files to /var/lib/data",
          "5. When pod terminates, volume unmounts safely without data loss"
        ],
        steps: [
          { line: 0, vars: { claim: "data-pvc bound and verified" } },
          { line: 1, vars: { node_attach: "Cloud block disk attached to worker node OS" } },
          { line: 2, vars: { container_mount: "Mounted as POSIX filesystem in container" } },
          { line: 4, vars: { persistence: "Data remains on cloud disk ready for next pod" } }
        ]
      },
      practiceIntro: "Test your understanding of Kubernetes configuration and storage primitives.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Non-sensitive configuration is stored in a Config<0>.",
          "A user's request for persistent disk storage is a PersistentVolume<1>.",
          "Values inside standard Kubernetes Secret manifests are encoded in <2>."
        ],
        blanks: [
          { a: ["Map"], why: "ConfigMap holds general configuration." },
          { a: ["Claim"], why: "PVC requests storage." },
          { a: ["base64"], why: "Secrets are base64-encoded by default." }
        ]
      },
      win: "You can decouple configuration from application code and manage persistent disk storage across pod lifecycles.",
      nextTasks: [
        "Create a ConfigMap from a local properties file using kubectl create configmap --from-file.",
        "Mount a Secret as a read-only volume and verify its contents inside the container.",
        "Provision a dynamic PVC with a StorageClass and verify the underlying PV creation."
      ],
      primarySource: "Kubernetes Documentation: *Configuration* and *Persistent Volumes*.",
      quiz: [
        {
          q: "What is the primary difference between a ConfigMap and a Secret?",
          a: [
            "ConfigMaps store plain non-sensitive settings; Secrets are intended for sensitive credentials like passwords and tokens",
            "ConfigMaps only work with Python; Secrets work with any language",
            "ConfigMaps are stored on disk; Secrets are stored on USB drives",
            "There is no difference; they are exact aliases"
          ],
          c: 0,
          why: "ConfigMaps store general configuration; Secrets handle credentials and are obfuscated with base64."
        },
        {
          q: "What is the relationship between a PersistentVolume (PV) and a PersistentVolumeClaim (PVC)?",
          a: [
            "A PV is the actual storage resource; a PVC is a developer's request for storage that binds to a matching PV",
            "A PV is for cloud storage; a PVC is for local laptop storage",
            "A PV is temporary; a PVC is permanent",
            "They are two names for the same Docker container"
          ],
          c: 0,
          why: "PV represents the actual storage; PVC is the claim/request that binds to that storage."
        },
        {
          q: "What does the access mode 'ReadWriteOnce' (RWO) mean on a PersistentVolume?",
          a: [
            "The volume can be mounted as read-write by a single node at a time",
            "The volume can only be written to one single time in its lifetime",
            "Only one user can read the files simultaneously",
            "The volume is erased after one read operation"
          ],
          c: 0,
          why: "ReadWriteOnce restricts mounting to a single cluster node at any given time."
        },
        {
          q: "How can configuration in a ConfigMap be passed to a running container?",
          a: [
            "As individual environment variables or as mounted files inside a directory volume",
            "Only by recompiling the Docker container image",
            "Through HTTP cookies injected into the browser",
            "By editing the Linux kernel source code"
          ],
          c: 0,
          why: "ConfigMaps can be injected as environment variables (env/envFrom) or mounted as files in a volume."
        }
      ]
    },
    {
      n: 8,
      id: "hpa-probes-and-troubleshooting",
      title: "Health Probes, Autoscaling (HPA) & Debugging",
      topic: "Storage, Config & Production Operations",
      anim: "CodePulse",
      lede: "Ensure production resilience: configure automated health checks, scale pod replicas based on traffic, and troubleshoot failures.",
      winShort: "Configure Liveness/Readiness probes, set up the Horizontal Pod Autoscaler, and debug production outages",
      missionLink: "Automate recovery from service deadlocks and scale capacity seamlessly during traffic spikes",
      sec1: {
        title: "The three health probes",
        content: `<p>Kubernetes cannot know if your application is actually working just because its process is running. A node application might be stuck in an infinite loop or locked waiting for a database socket.</p><p>The kubelet uses three distinct probes to manage container health:</p><ul><li><b>Startup Probe:</b> Determines if a slow-starting application has initialized. While running, it disables liveness and readiness checks to prevent premature restarts.</li><li><b>Liveness Probe:</b> Detects deadlocks and fatal states. If it fails, the kubelet kills the container and restarts it according to its <code>restartPolicy</code>.</li><li><b>Readiness Probe:</b> Determines if the container is ready to accept user traffic. If it fails, the pod is removed from Service endpoints; it is <i>not</i> killed.</li></ul>`,
        keyIdea: "Liveness probe failures trigger container restarts; readiness probe failures temporarily remove the pod from service traffic."
      },
      predict: {
        q: "If an overloaded container starts failing its Readiness Probe, what does Kubernetes do?",
        a: [
          "It immediately stops routing Service traffic to that pod until the probe succeeds, giving the container time to recover",
          "It kills and restarts the container immediately",
          "It deletes the deployment",
          "It reboots the worker node"
        ],
        c: 0,
        why: "Readiness probes isolate unhealthy pods from traffic without restarting them, preventing cascading failures."
      },
      sec2: {
        title: "Horizontal Pod Autoscaler (HPA)",
        content: `<p>The <b>Horizontal Pod Autoscaler (HPA)</b> automatically adjusts the number of replica pods in a Deployment based on observed metrics (like average CPU utilization, memory pressure, or custom Prometheus metrics).</p><p>For example, if average CPU exceeds <code>70%</code>, the HPA controller calculates <code>desiredReplicas = ceil[currentReplicas * (currentMetric / targetMetric)]</code> and scales up the Deployment.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Metrics Server", lines: ["Collects CPU / RAM metrics", "from kubelet summary API"] },
          { title: "HPA Controller", lines: ["Monitors target: 70% CPU", "Calculates required replicas", "Scales: 3 -> 8 replicas"] },
          { title: "Deployment Replicas", lines: ["Instantly handles traffic surge", "Scales back down during lulls"] }
        ]
      },
      sec3: {
        title: "Tracing production troubleshooting workflow",
        content: `<p>Trace the systematic diagnostic procedure for an unhealthy pod in production.</p>`,
      },
      trace: {
        code: [
          "1. Step 1: kubectl get pods -n prod -> Check STATUS (CrashLoopBackOff, OOMKilled, Pending)",
          "2. Step 2: kubectl describe pod <name> -n prod -> Check EVENTS at bottom (probe failures, scheduling errors)",
          "3. Step 3: kubectl logs <name> -n prod --previous -> Inspect crash stack trace before container terminated",
          "4. Step 4: kubectl exec -it <name> -n prod -- /bin/sh -> Run connectivity and filesystem diagnostics"
        ],
        steps: [
          { line: 0, vars: { identify_status: "Pod in CrashLoopBackOff" } },
          { line: 1, vars: { check_events: "Liveness probe failed: HTTP 500" } },
          { line: 2, vars: { inspect_logs: "Logs show database connection timeout on /healthz" } },
          { line: 3, vars: { root_cause: "Firewall blocking outbound DB connection identified" } }
        ]
      },
      practiceIntro: "Test your mastery of health probes, autoscaling, and cluster troubleshooting.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The probe that causes a container to be killed and restarted when failing is the <0> probe.",
          "The probe that controls whether a pod receives Service traffic is the <1> probe.",
          "The controller that automatically scales pod replica counts based on CPU is the <2>."
        ],
        blanks: [
          { a: ["liveness"], why: "Liveness probe triggers restarts." },
          { a: ["readiness"], why: "Readiness probe controls traffic flow." },
          { a: ["HPA"], why: "Horizontal Pod Autoscaler adjusts replica counts." }
        ]
      },
      win: "You can configure bulletproof health probes, set up automated autoscaling, and troubleshoot production cluster incidents systematically.",
      nextTasks: [
        "Configure an HTTP liveness and readiness probe on an Express or FastAPI deployment.",
        "Deploy the Kubernetes Metrics Server and test autoscaling using kubectl autoscale deployment.",
        "Practice diagnosing an un-schedulable pod with insufficient memory requests."
      ],
      primarySource: "Kubernetes Documentation: *Configure Liveness, Readiness and Startup Probes*.",
      quiz: [
        {
          q: "What is the critical behavioral difference between a failed Liveness probe and a failed Readiness probe?",
          a: [
            "A failed Liveness probe restarts the container; a failed Readiness probe removes the pod from Service traffic without killing it",
            "A failed Liveness probe reboots the server; a failed Readiness probe sends an email",
            "A failed Liveness probe deletes the database; a failed Readiness probe does nothing",
            "There is no difference; both kill the container immediately"
          ],
          c: 0,
          why: "Liveness handles unrecoverable deadlocks (restart); Readiness handles temporary overload (stop traffic)."
        },
        {
          q: "Why is a Startup probe especially useful for legacy applications with slow boot times (e.g. 90 seconds)?",
          a: [
            "It holds off liveness probe execution until the application is fully initialized, preventing premature crash-restarts during boot",
            "It speeds up CPU execution by 10x during boot",
            "It compiles Java code to native binaries on the fly",
            "It prevents the container from being scheduled on older hardware"
          ],
          c: 0,
          why: "Startup probes protect slow-booting applications from being killed by aggressive liveness probes before they are ready."
        },
        {
          q: "What must be installed in a Kubernetes cluster for the Horizontal Pod Autoscaler (HPA) to scale based on CPU usage?",
          a: [
            "The Kubernetes Metrics Server (or an equivalent metrics provider)",
            "A third-party payment gateway",
            "Docker Desktop Enterprise edition",
            "A dedicated GPU cluster"
          ],
          c: 0,
          why: "The HPA queries the Metrics Server API (metrics.k8s.io) to obtain real-time CPU and memory usage statistics."
        },
        {
          q: "Which kubectl command displays the chronological event history and error messages for a specific pod?",
          a: [
            "kubectl describe pod <pod-name>",
            "kubectl print pod <pod-name>",
            "kubectl events-only <pod-name>",
            "kubectl dump-all <pod-name>"
          ],
          c: 0,
          why: "kubectl describe displays detailed metadata, container statuses, and the recent events log for that resource."
        }
      ]
    }
  ]
};
