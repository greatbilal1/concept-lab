/* ============================================================
   Data Pipelines & ETL — lesson manifest
   ------------------------------------------------------------
   The single source of truth for this course's order. Every
   lesson page, the course map, the gating logic and the lesson
   hub all read from this list.
   ============================================================ */
window.TeachLessons = [
  { n: 1, id: "etl-vs-elt-and-data-ingestion", file: "lessons/0001-etl-vs-elt-and-data-ingestion.html", title: "ETL vs ELT: Architecture & Ingestion Strategies", topic: "ETL Architecture & Ingestion Patterns", anim: "Flow" },
  { n: 2, id: "batch-vs-streaming-data", file: "lessons/0002-batch-vs-streaming-data.html", title: "Batch vs Streaming: Latency & Boundaries", topic: "ETL Architecture & Ingestion Patterns", anim: "LayersOrbit" },
  { n: 3, id: "data-transformations-and-cleaning", file: "lessons/0003-data-transformations-and-cleaning.html", title: "Data Cleaning, Schema Validation & Transformations", topic: "Batch Processing & Transformations", anim: "CodePulse" },
  { n: 4, id: "idempotent-pipelines-and-deduplication", file: "lessons/0004-idempotent-pipelines-and-deduplication.html", title: "Idempotency & Deduplication", topic: "Batch Processing & Transformations", anim: "Code" },
  { n: 5, id: "data-warehouses-and-lakehouses", file: "lessons/0005-data-warehouses-and-lakehouses.html", title: "Data Warehouses, Data Lakes & Lakehouses", topic: "Data Warehouses & Orchestration", anim: "Layers" },
  { n: 6, id: "pipeline-orchestration-and-dags", file: "lessons/0006-pipeline-orchestration-and-dags.html", title: "Pipeline Orchestration, DAGs & Airflow", topic: "Data Warehouses & Orchestration", anim: "Flow" },
  { n: 7, id: "event-streaming-with-kafka", file: "lessons/0007-event-streaming-with-kafka.html", title: "Event Streaming & Message Brokers with Kafka", topic: "Streaming, Quality & Idempotency", anim: "Globe" },
  { n: 8, id: "data-quality-monitoring-and-observability", file: "lessons/0008-data-quality-monitoring-and-observability.html", title: "Data Quality, Schemas & Observability", topic: "Streaming, Quality & Idempotency", anim: "LayersOrbit" }
];

/* ============================================================
   Data Pipelines & ETL — glossary
   ------------------------------------------------------------
   The vocabulary of this course, grouped into sections.
   ============================================================ */
window.TeachGlossary = [
  {
    id: "ingestion-and-patterns", title: "Ingestion Architecture & Patterns",
    terms: [
      { term: "ETL", def: "Extract, Transform, Load: a data integration process where raw data is extracted, transformed in a middle tier, and loaded into a destination repository.", lesson: 1, tags: ["etl","architecture"] },
      { term: "ELT", def: "Extract, Load, Transform: a modern pattern where raw data is loaded directly into a scalable data warehouse or lake, and transformations occur inside the warehouse using SQL.", lesson: 1, tags: ["elt","warehouse"] },
      { term: "Batch processing", def: "The execution of data jobs over high-volume blocks of accumulated historical data on a periodic schedule (e.g. hourly, nightly).", lesson: 2, tags: ["batch","processing"] },
      { term: "Stream processing", def: "The continuous, real-time ingestion and computation of unbounded event streams with sub-second latency.", lesson: 2, tags: ["streaming","events"] }
    ]
  },
  {
    id: "transformations-and-idempotence", title: "Transformations & Idempotency",
    terms: [
      { term: "Idempotence", def: "The property where re-running a pipeline task or batch multiple times on the same input produces the exact same final state without duplicates.", lesson: 4, tags: ["reliability","theory"] },
      { term: "Schema evolution", def: "The ability of data formats and pipelines to handle changes in structure over time (adding, renaming, or deleting columns) without crashing.", lesson: 3, tags: ["schema","validation"] },
      { term: "Upsert", def: "A database operation that atomically updates an existing record if a matching primary key exists, or inserts a new row if absent.", lesson: 4, tags: ["database","sql"] },
      { term: "Deduplication", def: "The programmatic removal of duplicate records caused by network retries, at-least-once message delivery, or re-run pipeline batches.", lesson: 4, tags: ["quality"] }
    ]
  },
  {
    id: "storage-and-orchestration", title: "Data Storage & Orchestration",
    terms: [
      { term: "Data Warehouse", def: "A centralized, column-oriented database optimized for fast analytical SQL queries over structured historical data (e.g. Snowflake, BigQuery).", lesson: 5, tags: ["storage","warehouse"] },
      { term: "Data Lake", def: "A centralized storage repository holding vast amounts of raw, semi-structured, and structured data in object stores like S3 in open formats like Parquet.", lesson: 5, tags: ["lake","storage"] },
      { term: "Columnar format", def: "A storage layout (e.g. Apache Parquet) that organizes data by column rather than row, drastically reducing I/O and boosting analytical compression.", lesson: 5, tags: ["parquet","performance"] },
      { term: "DAG", def: "Directed Acyclic Graph: a mathematical representation of a pipeline where nodes represent tasks and directed edges represent execution dependencies with no circular loops.", lesson: 6, tags: ["orchestration","airflow"] }
    ]
  },
  {
    id: "streaming-and-quality", title: "Streaming & Data Observability",
    terms: [
      { term: "Apache Kafka", def: "A distributed, partitioned, replicated commit log and event streaming platform capable of handling trillions of events per day.", lesson: 7, tags: ["kafka","streaming"] },
      { term: "Consumer offset", def: "A sequential integer assigned to each record in a Kafka partition that tracks the consumer group's read progress.", lesson: 7, tags: ["kafka","offsets"] },
      { term: "Data contract", def: "An agreement between data producers and consumers specifying schema, semantics, SLAs, and quality standards for emitted data.", lesson: 8, tags: ["governance","contracts"] },
      { term: "Data observability", def: "The degree of visibility into the health of data systems, monitoring freshness, volume, distribution, schema changes, and lineage.", lesson: 8, tags: ["monitoring","observability"] }
    ]
  }
];
