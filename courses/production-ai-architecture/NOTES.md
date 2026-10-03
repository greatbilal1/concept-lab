# Notes — Production AI Architecture

Never run long-running model inference inside synchronous web request threads. Decouple fast streaming from background jobs, enforce multi-tenant vector filtering, and keep application nodes stateless.