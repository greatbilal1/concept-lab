# Mission — Kubernetes & Orchestration

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
