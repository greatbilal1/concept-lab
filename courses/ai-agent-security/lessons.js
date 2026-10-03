/* ============================================================
   Securing AI Agents & Tools — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "the-autonomous-blast-radius", file: "lessons/0001-the-autonomous-blast-radius.html", title: "The Autonomous Blast Radius: When Models Can Execute Actions", topic: "Blast Radius", anim: "Generic" },
  { n: 2, id: "tool-sandboxing-containerized-execution", file: "lessons/0002-tool-sandboxing-containerized-execution.html", title: "Tool Sandboxing: Containerized Execution and Ephemeral Filesystems", topic: "Tool Sandboxing", anim: "Generic" },
  { n: 3, id: "scoping-tool-permissions-readonly-db", file: "lessons/0003-scoping-tool-permissions-readonly-db.html", title: "Scoping Tool Permissions: Read-Only Databases and Parameter Allow-Lists", topic: "Permission Scoping", anim: "Generic" },
  { n: 4, id: "network-egress-filtering-ssrf", file: "lessons/0004-network-egress-filtering-ssrf.html", title: "Network Egress Filtering: Preventing SSRF and Exfiltration", topic: "Egress Filtering", anim: "Generic" },
  { n: 5, id: "human-in-the-loop-confirmation-gates", file: "lessons/0005-human-in-the-loop-confirmation-gates.html", title: "Human-in-the-Loop Confirmation Gates for Dangerous Actions", topic: "Human Gates", anim: "Generic" },
  { n: 6, id: "prompt-injection-agentic-loops", file: "lessons/0006-prompt-injection-agentic-loops.html", title: "Prompt Injection in Agentic Loops: Hijacking Trajectories", topic: "Trajectory Hijacking", anim: "Generic" },
  { n: 7, id: "audit-logging-forensic-tracing-agents", file: "lessons/0007-audit-logging-forensic-tracing-agents.html", title: "Audit Logging and Forensic Tracing for Agentic Actions", topic: "Forensic Auditing", anim: "Generic" },
  { n: 8, id: "designing-secure-agent-environment", file: "lessons/0008-designing-secure-agent-environment.html", title: "Designing a Secure Autonomous Agent Environment", topic: "Secure Agent Architecture", anim: "Generic" }
];

/* ============================================================
   Securing AI Agents & Tools — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "blast-radius", title: "Blast Radius & Sandboxing",
    terms: [
      { term: "Autonomous Blast Radius", def: "The maximum potential real-world harm, data loss, or financial cost that can occur if an agent malfunctions.", lesson: 1, tags: ["agents","risk"] },
      { term: "Tool Sandboxing", def: "Isolating tool and code execution inside disposable, unprivileged containers with read-only filesystems.", lesson: 2, tags: ["sandboxing","docker"] },
      { term: "gVisor", def: "Google's open-source application kernel virtualizing Linux system calls in user space for container isolation.", lesson: 2, tags: ["tools","sandboxing"] }
    ]
  },
  {
    id: "permissions-egress", title: "Permissions & Egress",
    terms: [
      { term: "Read-Only Database Role", def: "A database account restricted strictly to SELECT operations, preventing write or delete mutations.", lesson: 3, tags: ["databases","permissions"] },
      { term: "Server-Side Request Forgery", def: "An attack tricking an agent's web tool into fetching internal private IP addresses or cloud metadata (SSRF).", lesson: 4, tags: ["network","ssrf"] },
      { term: "Cloud Metadata IP", def: "The link-local address 169.254.169.254 used by cloud instances to retrieve temporary IAM credentials.", lesson: 4, tags: ["cloud","metadata"] }
    ]
  },
  {
    id: "gates-hijacking", title: "Human Gates & Loops",
    terms: [
      { term: "Confirmation Gate", def: "A security checkpoint pausing autonomous agent execution on high-risk actions until approved by a human.", lesson: 5, tags: ["governance","human"] },
      { term: "Approval Fatigue", def: "The phenomenon where excessive low-value confirmation prompts cause users to approve requests mindlessly.", lesson: 5, tags: ["ux","security"] },
      { term: "Trajectory Hijacking", def: "Corrupting an agent's ReAct loop via malicious instructions embedded in tool observations.", lesson: 6, tags: ["attacks","trajectories"] }
    ]
  },
  {
    id: "auditing", title: "Auditing & Architecture",
    terms: [
      { term: "Goal Invariance Anchor", def: "Re-injecting the immutable root user objective at the top of every turn prompt to resist hijacking.", lesson: 6, tags: ["defense","prompts"] },
      { term: "WORM Storage", def: "Write Once, Read Many storage ensuring audit logs cannot be altered, overwritten, or deleted.", lesson: 7, tags: ["compliance","storage"] },
      { term: "Secure Agent Environment", def: "A multi-layered architecture unifying sandboxes, read-only tools, egress proxies, and human gates.", lesson: 8, tags: ["architecture","systems"] }
    ]
  }
];
