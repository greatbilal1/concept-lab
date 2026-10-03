# Notes — Structured Outputs & JSON

Never parse raw LLM text with regex in production. Use constrained decoding with strict Pydantic schemas and self-healing repair loops to guarantee type-safe integration.