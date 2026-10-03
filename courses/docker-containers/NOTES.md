# Notes — Docker & Containers

Order Dockerfile instructions from least-to-most frequently changing. Never run production containers as root. Use multi-stage builds to eliminate compilers, and deploy immutable git SHA tags.