# Notes — Vector Databases & Semantic Search

Default to pgvector if you already use PostgreSQL. Use HNSW for sub-second latency, and always combine vector search with BM25 keyword matching for hybrid enterprise resilience.