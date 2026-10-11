# Mission — Data Pipelines & ETL

## Why this course exists

Modern organizations generate data across hundreds of transactional databases, third-party APIs, clickstream events, and IoT sensors. Without reliable data pipelines, this data remains trapped in isolated silos or corrupted by schema mismatches. Extract, Transform, Load (ETL) and Extract, Load, Transform (ELT) pipelines form the nervous system of modern data engineering. This course builds a rigorous understanding of batch vs stream processing, data warehouse architectures, directed acyclic graph (DAG) orchestration, idempotence, and automated data quality checks.

## What the learner can do at the end

- Contrast traditional ETL with modern cloud ELT architectures, choosing the right pattern for cost and performance.
- Differentiate between batch processing (high throughput, periodic) and stream processing (low latency, continuous).
- Cleanse, normalize, and validate raw messy data using schema validation rules.
- Design idempotent pipeline tasks that can safely be retried upon failure without producing duplicate records.
- Understand the roles of operational databases, Data Lakes (S3/Parquet), Data Warehouses (Snowflake/BigQuery), and Lakehouses (Delta/Iceberg).
- Author workflow DAGs using orchestrators like Apache Airflow to schedule and manage multi-step dependencies.
- Process streaming event logs using distributed commit logs like Apache Kafka.
- Implement data quality assertions (Great Expectations / dbt tests) and pipeline observability metrics.

## What this course is NOT

- Not a business intelligence or dashboard charting course.
- Not a machine learning training guide (covered in Machine Learning).
- Not a single-vendor cloud tool tutorial. It focuses on universal data engineering principles and architectures.

## Success looks like

When an upstream production database schema changes or a network partition fails a nightly pipeline run, the learner identifies the point of failure, reruns the DAG without duplicate rows, and verifies data integrity across downstream warehouse tables in under five minutes.
