# Notes — Cloud Architecture

Databases belong in private subnets with zero public internet routing. High availability requires multi-AZ redundancy across load balancers, compute pods, and databases. S3 lifecycle rules slash storage costs by 80%.