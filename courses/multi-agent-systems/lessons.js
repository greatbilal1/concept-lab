/* ============================================================
   Multi-Agent Systems — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "why-single-agents-fail", file: "lessons/0001-why-single-agents-fail.html", title: "Why Single Agents Fail on Complex Systems", topic: "Single Agent Limits", anim: "Generic" },
  { n: 2, id: "multi-agent-topologies-router-supervisor-swarm", file: "lessons/0002-multi-agent-topologies-router-supervisor-swarm.html", title: "Multi-Agent Topologies: Router, Hierarchical, and Swarm", topic: "Topologies", anim: "Generic" },
  { n: 3, id: "role-definition-and-specialization", file: "lessons/0003-role-definition-and-specialization.html", title: "Role Definition and Agent Specialization", topic: "Specialization", anim: "Generic" },
  { n: 4, id: "agent-handoffs-communication-protocols", file: "lessons/0004-agent-handoffs-communication-protocols.html", title: "Agent Handoffs and Communication Protocols", topic: "Agent Handoffs", anim: "Generic" },
  { n: 5, id: "shared-state-blackboard-isolated-state", file: "lessons/0005-shared-state-blackboard-isolated-state.html", title: "Shared State, Blackboard Architecture, and Isolated State", topic: "Shared State", anim: "Generic" },
  { n: 6, id: "conflict-resolution-voting-consensus", file: "lessons/0006-conflict-resolution-voting-consensus.html", title: "Conflict Resolution, Voting, and Consensus Mechanisms", topic: "Consensus", anim: "Generic" },
  { n: 7, id: "coordination-overhead-cost-multiplication", file: "lessons/0007-coordination-overhead-cost-multiplication.html", title: "Coordination Overhead and Cost Multiplication", topic: "Coordination Costs", anim: "Generic" },
  { n: 8, id: "orchestrating-swarms-langgraph-autogen", file: "lessons/0008-orchestrating-swarms-langgraph-autogen.html", title: "Orchestrating Multi-Agent Swarms with LangGraph and AutoGen", topic: "Frameworks & Swarms", anim: "Generic" }
];

/* ============================================================
   Multi-Agent Systems — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "topologies", title: "Topologies & Architecture",
    terms: [
      { term: "Multi-Agent System", def: "An architecture distributing complex tasks across multiple specialized agents with distinct roles and tools.", lesson: 1, tags: ["agents","multi-agent"] },
      { term: "Supervisor Topology", def: "A hierarchical architecture where a central manager agent plans, delegates to workers, and reviews outputs.", lesson: 2, tags: ["architecture","hierarchical"] },
      { term: "Swarm Topology", def: "A decentralized peer-to-peer architecture where agents coordinate directly via dynamic handoffs.", lesson: 2, tags: ["architecture","swarms"] }
    ]
  },
  {
    id: "specialization", title: "Specialization & Handoffs",
    terms: [
      { term: "Tool Interference", def: "A failure mode where an agent with an overloaded tool registry confuses functions or argument schemas.", lesson: 1, tags: ["tools","pitfalls"] },
      { term: "Structured Handoff", def: "Transferring state between agents using strictly-typed data contracts rather than noisy chat transcripts.", lesson: 4, tags: ["protocols","handoffs"] },
      { term: "Telephone Game", def: "The degradation and loss of critical constraints as information is repeatedly summarized across agent hops.", lesson: 4, tags: ["communication","pitfalls"] }
    ]
  },
  {
    id: "state-consensus", title: "State & Consensus",
    terms: [
      { term: "Blackboard Pattern", def: "A shared central memory workspace where multiple agents read state and post discoveries asynchronously.", lesson: 5, tags: ["memory","patterns"] },
      { term: "Multi-Agent Debate", def: "A consensus technique where agents cross-examine and critique each other's reasoning to eliminate errors.", lesson: 6, tags: ["consensus","reasoning"] },
      { term: "Arbitrator Agent", def: "A designated lead agent that evaluates conflicting arguments from specialist agents and makes binding decisions.", lesson: 6, tags: ["governance","consensus"] }
    ]
  },
  {
    id: "orchestration", title: "Orchestration & Economics",
    terms: [
      { term: "Coordination Tax", def: "The multiplicative increase in token costs and latency resulting from multi-agent communication overhead.", lesson: 7, tags: ["economics","latency"] },
      { term: "LangGraph", def: "A state machine orchestration framework that models multi-agent systems as cyclic directed graphs with checkpoints.", lesson: 8, tags: ["frameworks","tools"] },
      { term: "Conditional Edge", def: "A graph transition rule that inspects state variables to dynamically determine which agent node executes next.", lesson: 8, tags: ["langgraph","routing"] }
    ]
  }
];
