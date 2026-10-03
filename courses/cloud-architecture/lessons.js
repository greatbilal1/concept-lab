/* ============================================================
   Cloud Architecture — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "mental-model-cloud-shared-responsibility", file: "lessons/0001-mental-model-cloud-shared-responsibility.html", title: "The Mental Model of Cloud: Elasticity and Shared Responsibility", topic: "Cloud Foundations", anim: "Generic" },
  { n: 2, id: "virtual-private-clouds-subnets-routing", file: "lessons/0002-virtual-private-clouds-subnets-routing.html", title: "Virtual Private Clouds (VPC): Subnets, Gateways, and Route Tables", topic: "VPC Networking", anim: "Generic" },
  { n: 3, id: "compute-paradigms-vms-serverless-k8s", file: "lessons/0003-compute-paradigms-vms-serverless-k8s.html", title: "Compute Paradigms: Virtual Machines, Serverless, and Kubernetes", topic: "Compute Paradigms", anim: "Generic" },
  { n: 4, id: "cloud-storage-hierarchy-s3-ebs-efs", file: "lessons/0004-cloud-storage-hierarchy-s3-ebs-efs.html", title: "Cloud Storage Hierarchy: Object, Block, and File Storage", topic: "Storage Hierarchy", anim: "Generic" },
  { n: 5, id: "enterprise-iam-identity-federation", file: "lessons/0005-enterprise-iam-identity-federation.html", title: "IAM and Identity Federation at Enterprise Scale", topic: "Enterprise IAM", anim: "Generic" },
  { n: 6, id: "global-traffic-management-cdn-dns-alb", file: "lessons/0006-global-traffic-management-cdn-dns-alb.html", title: "Global Traffic Management: CDN, Anycast DNS, and Load Balancers", topic: "Global Traffic", anim: "Generic" },
  { n: 7, id: "disaster-recovery-rpo-rto-multi-region", file: "lessons/0007-disaster-recovery-rpo-rto-multi-region.html", title: "Disaster Recovery, Multi-Region Replication, and RPO/RTO", topic: "Disaster Recovery", anim: "Generic" },
  { n: 8, id: "architecting-highly-available-cloud", file: "lessons/0008-architecting-highly-available-cloud.html", title: "Architecting a Highly Available, Fault-Tolerant Cloud Infrastructure", topic: "Cloud Architecture", anim: "Generic" }
];

/* ============================================================
   Cloud Architecture — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "cloud-foundations", title: "Foundations & VPC",
    terms: [
      { term: "Shared Responsibility Model", def: "A security model where the cloud provider secures the infrastructure, while the customer secures data and access.", lesson: 1, tags: ["cloud","security"] },
      { term: "Virtual Private Cloud", def: "A logically isolated virtual network dedicated to a cloud account (VPC) with custom IP addressing.", lesson: 2, tags: ["networking","vpc"] },
      { term: "NAT Gateway", def: "A managed service allowing private subnet instances to make outbound internet connections while blocking inbound access.", lesson: 2, tags: ["networking","nat"] }
    ]
  },
  {
    id: "compute-storage", title: "Compute & Storage",
    terms: [
      { term: "Serverless Computing", def: "A cloud execution model where the provider manages server infrastructure, scaling code dynamically from zero.", lesson: 3, tags: ["compute","serverless"] },
      { term: "Amazon S3", def: "An infinitely scalable, HTTP-accessible object storage service offering 11 nines of data durability.", lesson: 4, tags: ["storage","s3"] },
      { term: "Amazon EBS", def: "High-performance block storage volumes attached directly to single virtual machines for databases.", lesson: 4, tags: ["storage","ebs"] }
    ]
  },
  {
    id: "iam-traffic", title: "IAM & Global Traffic",
    terms: [
      { term: "Service Control Policy", def: "An organizational guardrail (SCP) in AWS restricting maximum permissions across member accounts.", lesson: 5, tags: ["iam","governance"] },
      { term: "Content Delivery Network", def: "A globally distributed network of edge proxy servers caching content close to users (CDN).", lesson: 6, tags: ["networking","cdn"] },
      { term: "Application Load Balancer", def: "A Layer 7 load balancer (ALB) inspecting HTTP/HTTPS headers and URLs to route requests to healthy compute pods.", lesson: 6, tags: ["networking","alb"] }
    ]
  },
  {
    id: "dr-resilience", title: "Disaster Recovery",
    terms: [
      { term: "RPO", def: "Recovery Point Objective: the maximum acceptable backward time delta of lost data during an outage.", lesson: 7, tags: ["dr","metrics"] },
      { term: "RTO", def: "Recovery Time Objective: the maximum acceptable duration of service downtime before restoration.", lesson: 7, tags: ["dr","metrics"] },
      { term: "Multi-AZ Deployment", def: "Architecting systems redundantly across multiple physical Availability Zones for automated disaster survival.", lesson: 8, tags: ["architecture","resilience"] }
    ]
  }
];
