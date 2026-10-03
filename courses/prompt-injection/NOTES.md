# Notes — Prompt Injection & AI Security

Prompt injection exists because instructions and data share a flat token space. Never trust external text; encapsulate inputs with random nonces, isolate data ingestion in toolless Reader models, and block Markdown image leaks with CSP.