# Notes — Securing AI Agents & Tools

Assume every agent will eventually be hijacked by prompt injection. Limit its tools and permissions so a complete hijack causes zero damage. Sandbox code execution, enforce read-only database roles, block SSRF metadata IPs, and gate high-risk actions with human confirmation.