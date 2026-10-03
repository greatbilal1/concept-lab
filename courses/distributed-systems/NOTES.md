# Notes — Distributed Systems & Scalability

Assume networks fail and components die independently. During partitions, choose CP or AP. Use odd-numbered Raft clusters for consensus, consistent hashing for partitioning, and sagas for distributed transactions.