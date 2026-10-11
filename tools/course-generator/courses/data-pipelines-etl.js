"use strict";

module.exports = {
  id: "data-pipelines-etl",
  title: "Data Pipelines & ETL",
  num: 105,
  emoji: "🚰",
  desc: "Extract, transform, and move large datasets efficiently and reliably between systems.",
  mission: `# Mission — Data Pipelines & ETL

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
`,
  notes: `# Notes — Data Pipelines & ETL

## Decisions
- Group into four themes: Ingestion Architecture, Batch & Idempotency, Storage & Orchestration, and Streaming & Quality.
- Ground explanations in distributed commit logs, columnar storage efficiencies, and idempotent pipeline design.
`,
  resources: `# Resources — Data Pipelines & ETL

## Knowledge (primary sources)
- *Designing Data-Intensive Applications* by Martin Kleppmann (O'Reilly).
- *Fundamentals of Data Engineering* by Joe Reis and Matt Housley (O'Reilly).
- Apache Airflow and Apache Kafka Documentation.
- The dbt Viewpoint: Analytics Engineering (getdbt.com).

## Wisdom
- Data will fail. Networks will drop. Schemas will mutate. A great data engineer designs pipelines that embrace failure through idempotency, automated tests, and self-healing retries.
`,
  cheatsheetSections: [
    {
      title: "ETL vs ELT Architecture",
      label: "Ingestion paradigms",
      code: `// Traditional ETL (Compute before load):
Source DB -> Heavy Transform Engine -> Clean Data Warehouse

// Modern Cloud ELT (Load raw, transform in warehouse):
Source DB -> Fast Raw Ingestion -> Cloud Data Lake/Warehouse -> dbt SQL Transforms`,
      lessonN: 1,
      lessonSlug: "etl-vs-elt-and-data-ingestion",
      lessonTitle: "ETL vs ELT Architecture"
    },
    {
      title: "Idempotent Upsert (Merge)",
      label: "Preventing duplicate records",
      code: `MERGE INTO target_users AS target
USING staging_users AS source
ON target.user_id = source.user_id
WHEN MATCHED AND source.updated_at > target.updated_at THEN
  UPDATE SET name = source.name, email = source.email, updated_at = source.updated_at
WHEN NOT MATCHED THEN
  INSERT (user_id, name, email, updated_at)
  VALUES (source.user_id, source.name, source.email, source.updated_at);`,
      lessonN: 4,
      lessonSlug: "idempotent-pipelines-and-deduplication",
      lessonTitle: "Idempotency & Deduplication"
    },
    {
      title: "Airflow DAG Definition",
      label: "Declarative pipeline workflow",
      code: `from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta

with DAG(
    dag_id="daily_user_sync",
    start_date=datetime(2026, 1, 1),
    schedule_interval="@daily",
    catchup=False,
) as dag:
    extract = PythonOperator(task_id="extract_api", python_callable=fetch_users)
    transform = PythonOperator(task_id="clean_data", python_callable=cleanse)
    load = PythonOperator(task_id="load_warehouse", python_callable=upsert_db)

    extract >> transform >> load`,
      lessonN: 6,
      lessonSlug: "pipeline-orchestration-and-dags",
      lessonTitle: "Pipeline Orchestration & DAGs"
    },
    {
      title: "Kafka Event Consumer",
      label: "Streaming distributed log",
      code: `// Producer writes to append-only topic partition
producer.send(topic="orders", key=order.id, value=order.json())

// Consumer group reads with offset tracking
consumer.subscribe(["orders"])
while (true) {
  records = consumer.poll(timeout=100)
  for (record in records) {
    process(record.value)
    consumer.commitSync() // mark checkpoint
  }
}`,
      lessonN: 7,
      lessonSlug: "event-streaming-with-kafka",
      lessonTitle: "Event Streaming with Kafka"
    }
  ],
  glossaryGroups: [
    {
      id: "ingestion-and-patterns",
      title: "Ingestion Architecture & Patterns",
      terms: [
        { term: "ETL", def: "Extract, Transform, Load: a data integration process where raw data is extracted, transformed in a middle tier, and loaded into a destination repository.", lesson: 1, tags: ["etl", "architecture"] },
        { term: "ELT", def: "Extract, Load, Transform: a modern pattern where raw data is loaded directly into a scalable data warehouse or lake, and transformations occur inside the warehouse using SQL.", lesson: 1, tags: ["elt", "warehouse"] },
        { term: "Batch processing", def: "The execution of data jobs over high-volume blocks of accumulated historical data on a periodic schedule (e.g. hourly, nightly).", lesson: 2, tags: ["batch", "processing"] },
        { term: "Stream processing", def: "The continuous, real-time ingestion and computation of unbounded event streams with sub-second latency.", lesson: 2, tags: ["streaming", "events"] }
      ]
    },
    {
      id: "transformations-and-idempotence",
      title: "Transformations & Idempotency",
      terms: [
        { term: "Idempotence", def: "The property where re-running a pipeline task or batch multiple times on the same input produces the exact same final state without duplicates.", lesson: 4, tags: ["reliability", "theory"] },
        { term: "Schema evolution", def: "The ability of data formats and pipelines to handle changes in structure over time (adding, renaming, or deleting columns) without crashing.", lesson: 3, tags: ["schema", "validation"] },
        { term: "Upsert", def: "A database operation that atomically updates an existing record if a matching primary key exists, or inserts a new row if absent.", lesson: 4, tags: ["database", "sql"] },
        { term: "Deduplication", def: "The programmatic removal of duplicate records caused by network retries, at-least-once message delivery, or re-run pipeline batches.", lesson: 4, tags: ["quality"] }
      ]
    },
    {
      id: "storage-and-orchestration",
      title: "Data Storage & Orchestration",
      terms: [
        { term: "Data Warehouse", def: "A centralized, column-oriented database optimized for fast analytical SQL queries over structured historical data (e.g. Snowflake, BigQuery).", lesson: 5, tags: ["storage", "warehouse"] },
        { term: "Data Lake", def: "A centralized storage repository holding vast amounts of raw, semi-structured, and structured data in object stores like S3 in open formats like Parquet.", lesson: 5, tags: ["lake", "storage"] },
        { term: "Columnar format", def: "A storage layout (e.g. Apache Parquet) that organizes data by column rather than row, drastically reducing I/O and boosting analytical compression.", lesson: 5, tags: ["parquet", "performance"] },
        { term: "DAG", def: "Directed Acyclic Graph: a mathematical representation of a pipeline where nodes represent tasks and directed edges represent execution dependencies with no circular loops.", lesson: 6, tags: ["orchestration", "airflow"] }
      ]
    },
    {
      id: "streaming-and-quality",
      title: "Streaming & Data Observability",
      terms: [
        { term: "Apache Kafka", def: "A distributed, partitioned, replicated commit log and event streaming platform capable of handling trillions of events per day.", lesson: 7, tags: ["kafka", "streaming"] },
        { term: "Consumer offset", def: "A sequential integer assigned to each record in a Kafka partition that tracks the consumer group's read progress.", lesson: 7, tags: ["kafka", "offsets"] },
        { term: "Data contract", def: "An agreement between data producers and consumers specifying schema, semantics, SLAs, and quality standards for emitted data.", lesson: 8, tags: ["governance", "contracts"] },
        { term: "Data observability", def: "The degree of visibility into the health of data systems, monitoring freshness, volume, distribution, schema changes, and lineage.", lesson: 8, tags: ["monitoring", "observability"] }
      ]
    }
  ],
  topics: [
    "ETL Architecture & Ingestion Patterns",
    "Batch Processing & Transformations",
    "Data Warehouses & Orchestration",
    "Streaming, Quality & Idempotency"
  ],
  lessons: [
    {
      n: 1,
      id: "etl-vs-elt-and-data-ingestion",
      title: "ETL vs ELT: Architecture & Ingestion Strategies",
      topic: "ETL Architecture & Ingestion Patterns",
      anim: "Flow",
      lede: "Cloud computing flipped the data pipeline paradigm. Discover how modern ELT replaced traditional ETL to unlock unlimited analytical speed.",
      winShort: "Contrast ETL and ELT architectures and select the optimal pattern based on compute and storage trade-offs",
      missionLink: "Build cost-effective data pipelines that leverage modern cloud data warehouse compute",
      sec1: {
        title: "Traditional ETL: The compute bottleneck",
        content: `<p>In the era of on-premise hardware, storage and data warehouse compute were scarce and expensive. To save warehouse disk space, data teams used <b>ETL (Extract, Transform, Load)</b>:</p><ol><li><b>Extract:</b> Pull data from transactional SQL databases or logs.</li><li><b>Transform:</b> A dedicated transformation server (like Informatica or custom scripts) cleaned, aggregated, and formatted the data in memory.</li><li><b>Load:</b> Only the final, summarized aggregate rows were written to the data warehouse.</li></ol><p>The downside? If business requirements changed, raw un-aggregated data was gone forever and had to be extracted from source systems again.</p>`,
        keyIdea: "ETL transforms data on a separate server before loading; ELT loads raw data first and transforms inside the cloud warehouse."
      },
      predict: {
        q: "What enabled the industry-wide shift from ETL to modern ELT?",
        a: [
          "Cheap cloud object storage (S3) and massively parallel processing (MPP) cloud warehouses (Snowflake, BigQuery) that scale compute on demand",
          "The invention of the mouse and graphical user interfaces",
          "Web browsers replacing native desktop applications",
          "A decline in the total volume of data generated worldwide"
        ],
        c: 0,
        why: "Elastic, cheap cloud storage and powerful SQL engines made it practical to store raw data and transform it directly inside the warehouse."
      },
      sec2: {
        title: "Modern ELT: Load raw, transform declaratively",
        content: `<p>In <b>ELT (Extract, Load, Transform)</b>, pipelines extract data and immediately dump the raw, untouched data into a cloud data lake or warehouse staging table. Transformations happen downstream using SQL transformation frameworks like <b>dbt (data build tool)</b>.</p><p>Benefits: raw historical data is preserved forever, ingestion pipelines never break because of schema transformations, and multiple teams can transform the same raw data for different purposes.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Extract (E)", lines: ["Postgres, Stripe API, Kafka", "Incremental CDC ingestion", "Zero transformations"] },
          { title: "Load (L)", lines: ["Dump raw JSON / Parquet", "into S3 / Snowflake raw table", "Preserves historical state"] },
          { title: "Transform (T)", lines: ["SQL models via dbt", "Executed in data warehouse", "Produces clean mart models"] }
        ]
      },
      sec3: {
        title: "Tracing Change Data Capture (CDC) ingestion",
        content: `<p>Trace how Change Data Capture extracts database updates directly from the transaction log without running heavy SELECT queries.</p>`,
      },
      trace: {
        code: [
          "1. Application executes: UPDATE customers SET email = 'ada@oxford.edu' WHERE id = 1",
          "2. Postgres writes commit record to Write-Ahead Log (WAL)",
          "3. Debezium / CDC connector reads WAL stream asynchronously",
          "4. CDC emits JSON event: { op: 'u', before: {...}, after: { email: 'ada@oxford.edu' } }",
          "5. Raw event loaded directly into warehouse raw_events table"
        ],
        steps: [
          { line: 0, vars: { source_operation: "OLTP database update" } },
          { line: 1, vars: { log: "Appended to WAL log with zero query overhead" } },
          { line: 3, vars: { cdc_event: "Extracted without running SELECT queries" } },
          { line: 4, vars: { warehouse_load: "Stored in raw ELT landing table" } }
        ]
      },
      practiceIntro: "Test your understanding of ETL and ELT architectural trade-offs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The modern paradigm that loads raw data prior to transformation is E<0>T.",
          "Capturing database row modifications via the transaction log is Change Data <1>.",
          "The popular open-source tool used for in-warehouse SQL transformations is <2>."
        ],
        blanks: [
          { a: ["L"], why: "ELT loads raw data before transforming." },
          { a: ["Capture", "CDC"], why: "CDC tails database write-ahead logs." },
          { a: ["dbt"], why: "dbt manages SQL transform models." }
        ]
      },
      win: "You can compare ETL vs ELT architectures and recommend the optimal ingestion strategy for scalable data pipelines.",
      nextTasks: [
        "Architect an ELT ingestion pipeline for Shopify orders using cloud object storage as a staging landing zone.",
        "Compare query latency and server CPU impact between running SELECT * vs reading CDC database logs.",
        "Define a dbt transformation model that aggregates daily customer spend from raw tables."
      ],
      primarySource: "Joe Reis & Matt Housley, *Fundamentals of Data Engineering*, Chapter 7: *Ingestion and Ingest-Transform Paradigms*.",
      quiz: [
        {
          q: "What is the primary advantage of ELT over traditional ETL?",
          a: [
            "Raw historical data is preserved permanently in the warehouse, allowing transformations to be recomputed or modified at any time",
            "ELT eliminates the need for any data warehouses entirely",
            "ELT only runs during nighttime hours",
            "ELT requires zero cloud storage"
          ],
          c: 0,
          why: "ELT preserves the raw truth: if transformation logic needs revision, you rerun SQL queries over existing raw data without re-extracting."
        },
        {
          q: "What is Change Data Capture (CDC)?",
          a: [
            "A technique that reads a database's low-level transaction log (like WAL or binlog) to stream inserts, updates, and deletes in real-time",
            "A manual audit conducted by database administrators every month",
            "A backup tool that zips SQL dumps to external USB drives",
            "An antivirus scanner for database records"
          ],
          c: 0,
          why: "CDC streams row-level changes by reading the database transaction log with near-zero load on production OLTP queries."
        },
        {
          q: "When might traditional ETL still be preferred over ELT?",
          a: [
            "When sensitive data (like medical records or credit card numbers) must be masked or scrubbed before entering the cloud warehouse",
            "When dealing with more than 10 gigabytes of data",
            "When using modern cloud platforms like AWS",
            "When the engineering team only knows SQL"
          ],
          c: 0,
          why: "Strict privacy and compliance regulations (HIPAA/PCI) often mandate masking sensitive PII prior to landing in analytics storage."
        },
        {
          q: "Which layer performs the transformation work in a modern cloud ELT architecture?",
          a: [
            "The cloud data warehouse or lakehouse query engine (e.g. Snowflake, BigQuery, Databricks)",
            "The developer's local laptop CPU",
            "The client's mobile web browser",
            "The operational OLTP production database"
          ],
          c: 0,
          why: "ELT pushes the heavy transformation work directly onto the scalable, distributed SQL engines of modern cloud warehouses."
        }
      ]
    },
    {
      n: 2,
      id: "batch-vs-streaming-data",
      title: "Batch vs Streaming: Latency & Boundaries",
      topic: "ETL Architecture & Ingestion Patterns",
      anim: "LayersOrbit",
      lede: "Not every pipeline needs to be real-time. Understand the latency, throughput, cost, and complexity trade-offs between batch and streaming.",
      winShort: "Choose appropriately between batch, micro-batch, and real-time streaming architectures",
      missionLink: "Prevent over-engineering high-cost streaming solutions when batch meets business SLAs",
      sec1: {
        title: "Bounded vs Unbounded data",
        content: `<p>All data pipelines process one of two fundamental data types:</p><ul><li><b>Bounded Data (Batch):</b> A finite dataset with an explicit beginning and end (e.g. all transactions from yesterday, a 10GB log file). Processed in chunks with high throughput.</li><li><b>Unbounded Data (Streaming):</b> An infinite, continuously arriving stream of events with no end (e.g. sensor readings, credit card transactions). Processed event-by-event or in micro-batches with low latency.</li></ul>`,
        keyIdea: "Batch processes bounded chunks with high throughput; streaming processes unbounded events with low latency."
      },
      predict: {
        q: "If an executive dashboard is only reviewed by managers once every Monday morning, which architecture is best?",
        a: [
          "Batch processing: a weekly or nightly batch pipeline is simple, cheap, and robust",
          "Real-time millisecond streaming using a 20-node Kafka cluster",
          "Manual copy-pasting into spreadsheets",
          "Writing a custom C++ network socket server"
        ],
        c: 0,
        why: "Streaming infrastructure introduces high operational complexity and cost; if business decisions are weekly, batch is the optimal choice."
      },
      sec2: {
        title: "The cost and complexity curve",
        content: `<p>Real-time streaming sounds attractive, but latency has an exponential cost curve. Moving from <b>24-hour batch</b> to <b>1-hour micro-batch</b> is relatively simple. Moving to <b>sub-second real-time streaming</b> introduces out-of-order events, late-arriving data, stateful watermarking, and complex distributed debugging.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Batch Processing", lines: ["Latency: Hours / Days", "Throughput: Very High", "Cost & Complexity: Low"] },
          { title: "Micro-batching", lines: ["Latency: 1 to 15 minutes", "Throughput: High", "Cost & Complexity: Moderate"] },
          { title: "Real-time Streaming", lines: ["Latency: Milliseconds", "Throughput: Variable", "Cost & Complexity: High"] }
        ]
      },
      sec3: {
        title: "Tracing late-arriving data in streaming",
        content: `<p>Trace how network delays cause out-of-order streaming events and how watermarks handle them.</p>`,
      },
      trace: {
        code: [
          "Event A created: 12:00:01 (Arrives at 12:00:02) -> Processed in Window 1",
          "Event B created: 12:00:03 (Arrives at 12:00:04) -> Processed in Window 1",
          "Window 1 closes at 12:00:05; watermark emitted",
          "Event C created: 12:00:02 (Mobile phone was offline; arrives at 12:00:10)",
          "Event C rejected or diverted to dead-letter queue as late-arriving data"
        ],
        steps: [
          { line: 0, vars: { in_order: "Event arrives in real-time" } },
          { line: 2, vars: { window_closed: "Aggregation emitted to downstream storage" } },
          { line: 3, vars: { late_event: "Timestamp lags behind the window boundary" } },
          { line: 4, vars: { complexity: "Requires watermarking or side-output handling" } }
        ]
      },
      practiceIntro: "Test your understanding of batch and streaming trade-offs.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Finite data with a clear beginning and end is <0> data.",
          "Continuous infinite data that never stops arriving is <1> data.",
          "In streaming, the threshold tracking how late data can arrive before window closure is a <2>."
        ],
        blanks: [
          { a: ["bounded"], why: "Bounded datasets have defined limits." },
          { a: ["unbounded"], why: "Unbounded streams flow continuously." },
          { a: ["watermark"], why: "Watermarks manage late data in stream processing." }
        ]
      },
      win: "You can evaluate business requirements against the cost/complexity curve to choose between batch, micro-batch, and stream processing.",
      nextTasks: [
        "Evaluate an existing company dashboard and determine its true freshness requirements (hourly vs real-time).",
        "Explain how tumbling, sliding, and session windows aggregate streaming data over time.",
        "Inspect a micro-batch pipeline implemented with Apache Spark Structured Streaming."
      ],
      primarySource: "Martin Kleppmann, *Designing Data-Intensive Applications*, Chapter 11: *Stream Processing*.",
      quiz: [
        {
          q: "What defines an 'unbounded' dataset in data engineering?",
          a: [
            "Data that is continuous and infinite with no defined end, generating events in real time",
            "A dataset that exceeds 1 terabyte in size",
            "A database table with no primary key",
            "A CSV file stored on Google Drive"
          ],
          c: 0,
          why: "Unbounded data represents ongoing continuous streams (like user clicks or financial trades) that never end."
        },
        {
          q: "Why is streaming data architecture significantly more complex to maintain than batch processing?",
          a: [
            "It must handle network latency variations, out-of-order events, stateful aggregations, and late-arriving data",
            "Streaming is written in assembly language",
            "Streaming does not work over standard TCP/IP networks",
            "Streaming requires human approval for every record"
          ],
          c: 0,
          why: "Handling time windows, late data arrival, and distributed consumer recovery makes streaming far more complex."
        },
        {
          q: "Which processing paradigm is typically the most cost-effective for computing monthly financial reports?",
          a: [
            "Batch processing executed once at month-end",
            "Sub-second streaming processing via Apache Flink running 24/7",
            "Micro-batching every 5 seconds",
            "Querying production OLTP databases directly on every page load"
          ],
          c: 0,
          why: "Scheduled batch processing consumes compute resources only during execution, avoiding idle 24/7 streaming costs."
        },
        {
          q: "What is a 'micro-batch' in pipeline terminology?",
          a: [
            "Accumulating incoming streaming events over a brief window (e.g. 10 to 60 seconds) and processing them in small batches",
            "A batch containing only 1 single record",
            "A pipeline that runs on a Raspberry Pi",
            "A database index containing only foreign keys"
          ],
          c: 0,
          why: "Micro-batching strikes a pragmatic balance by collecting small chunks of events over seconds to leverage batch efficiencies."
        }
      ]
    },
    {
      n: 3,
      id: "data-transformations-and-cleaning",
      title: "Data Cleaning, Schema Validation & Transformations",
      topic: "Batch Processing & Transformations",
      anim: "CodePulse",
      lede: "Raw data is messy, corrupted, and untrusted. Learn the standard techniques for data normalization, type casting, and schema validation.",
      winShort: "Build data cleaning transformations, handle null values, and enforce strict schema validation",
      missionLink: "Prevent corrupted, malformed, or missing data from polluting analytical dashboards and ML models",
      sec1: {
        title: "Garbage In, Garbage Out",
        content: `<p>Upstream systems are unreliable. Form fields allow invalid email formats, external APIs return unexpected nulls, and numeric columns arrive formatted as text strings with dollar signs (<code>"$1,240.50"</code>).</p><p>The transformation phase must sanitize raw input through:</p><ul><li><b>Type Casting:</b> Converting raw string representations into exact types (decimals, timestamps, booleans).</li><li><b>Normalization:</b> Trimming whitespace, standardizing ISO date formats (<code>YYYY-MM-DD</code>), and lowercasing strings.</li><li><b>Handling Missing Values:</b> Imputing defaults, isolating invalid records into dead-letter tables, or dropping corrupted rows.</li></ul>`,
        keyIdea: "Data cleaning sanitizes raw strings into typed, validated, and normalized records before analytical consumption."
      },
      predict: {
        q: "What should a robust data pipeline do when it encounters 5 malformed rows inside a batch of 1,000,000 clean rows?",
        a: [
          "Route the 5 malformed rows to a Dead-Letter Queue (DLQ) for inspection while processing the 999,995 clean rows successfully",
          "Crash the entire pipeline immediately and discard all 1,000,000 rows",
          "Silently delete the 5 rows without logging any alert",
          "Replace the malformed data with random fake values"
        ],
        c: 0,
        why: "Dead-letter queues isolate bad records for debugging without stopping the processing of valid business data."
      },
      sec2: {
        title: "Schema validation and contracts",
        content: `<p>To guarantee reliability, modern pipelines validate data against explicit schemas (using JSON Schema, Pydantic, or Great Expectations). If an upstream service drops a required column or changes an integer to a float, schema validators catch the violation at the pipeline boundary.</p>`,
      },
      diagram: {
        boxes: [
          { title: "Raw Input", lines: ["{ id: '101',", "  cost: '$24.99',", "  created: '05/12/26' }"] },
          { title: "Transformation Engine", lines: ["Cast cost -> Decimal(24.99)", "Parse date -> 2026-05-12", "Validate schema: Pydantic"] },
          { title: "Clean Target", lines: ["{ id: 101,", "  cost: 24.99,", "  created: '2026-05-12' }"] }
        ]
      },
      sec3: {
        title: "Tracing schema enforcement with Pydantic",
        content: `<p>Trace how schema validation catches invalid types and isolates corrupted rows.</p>`,
      },
      trace: {
        code: [
          "class UserRecord(BaseModel): id: int; email: EmailStr; active: bool",
          "Raw row 1: { 'id': 1, 'email': 'ada@lovelace.org', 'active': true } -> VALID",
          "Raw row 2: { 'id': 2, 'email': 'not-an-email', 'active': 'yes' }",
          "Validation catches: ValidationError at row 2 ('email' is invalid)",
          "Row 2 redirected to quarantine table: rejected_users_dlq"
        ],
        steps: [
          { line: 0, vars: { schema_contract: "UserRecord definition active" } },
          { line: 1, vars: { row_1: "Successfully validated and parsed" } },
          { line: 3, vars: { error: "Validation failure detected at boundary" } },
          { line: 4, vars: { isolation: "Quarantined in DLQ for analysis" } }
        ]
      },
      practiceIntro: "Test your understanding of data cleaning and schema validation techniques.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The destination where invalid, unparseable records are quarantined is a <0>-Letter Queue.",
          "Standardizing date strings into universal formats like ISO-8601 is called data <1>.",
          "Verifying that a dataset conforms to expected types and constraints is schema <2>."
        ],
        blanks: [
          { a: ["Dead", "Dead-Letter"], why: "Dead-Letter Queues store unprocessable records." },
          { a: ["normalization"], why: "Normalization ensures consistent formats." },
          { a: ["validation"], why: "Validation enforces data contracts." }
        ]
      },
      win: "You can write data transformation steps that clean, cast, and validate data while quarantining malformed records safely.",
      nextTasks: [
        "Write a Python data transformation using Pydantic that parses currency strings into floats.",
        "Implement a pipeline filter that isolates malformed CSV rows into a dead_letter_records.json file.",
        "Configure automated schema validation checks using Great Expectations or Soda SQL."
      ],
      primarySource: "Joe Reis & Matt Housley, *Fundamentals of Data Engineering*, Chapter 8: *Transformation*.",
      quiz: [
        {
          q: "What is the purpose of a Dead-Letter Queue (DLQ) in a data pipeline?",
          a: [
            "To capture and isolate records that fail parsing or schema validation so the rest of the batch can process without interruption",
            "To permanently delete customer records upon GDPR requests",
            "To store old emails sent to deceased customers",
            "To speed up database index rebuilds"
          ],
          c: 0,
          why: "DLQs allow pipelines to continue processing valid data while preserving bad data for troubleshooting."
        },
        {
          q: "Why is storing dates in ISO-8601 format ('YYYY-MM-DDTHH:MM:SSZ') the universal best practice in data pipelines?",
          a: [
            "It is unambiguous, lexicographically sortable, and explicitly includes timezone information (UTC)",
            "It takes up 50% less disk space than any other date format",
            "It is the only format supported by Python",
            "It automatically converts dates into Unix epoch seconds in memory"
          ],
          c: 0,
          why: "ISO-8601 eliminates localization confusion (MM/DD vs DD/MM) and sorts chronologically as plain strings."
        },
        {
          q: "What is schema evolution?",
          a: [
            "The ability of a pipeline and storage layer to gracefully handle changes in fields (e.g. new optional columns) over time",
            "The process of converting SQL databases into NoSQL databases",
            "Upgrading the database server's operating system",
            "Migrating an entire data warehouse from AWS to Azure"
          ],
          c: 0,
          why: "Schema evolution allows upstream systems to add or deprecate fields without breaking downstream consumers."
        },
        {
          q: "What should you do before casting a column of raw string values into numbers?",
          a: [
            "Sanitize the string by stripping currency symbols, commas, and whitespace, and handle nulls",
            "Multiply all string lengths by 100",
            "Convert the entire table into Base64 format",
            "Run a full table vacuum"
          ],
          c: 0,
          why: "Raw strings often contain formatting artifacts ($1,234.50) that cause type casting exceptions unless stripped."
        }
      ]
    },
    {
      n: 4,
      id: "idempotent-pipelines-and-deduplication",
      title: "Idempotency & Deduplication",
      topic: "Batch Processing & Transformations",
      anim: "Code",
      lede: "If a nightly pipeline crashes halfway through, running it again must not create duplicate payments or skewed revenue numbers.",
      winShort: "Design idempotent pipeline tasks and write deduplicating upsert/merge queries",
      missionLink: "Prevent double-counting revenue and corrupting business metrics during pipeline retries",
      sec1: {
        title: "The principle of pipeline idempotency",
        content: `<p>In distributed data engineering, failure is inevitable. Servers run out of memory, network connections drop, and upstream APIs return HTTP 503. The standard response is to <b>retry the failed job</b>.</p><p>However, if your pipeline task simply executes <code>INSERT INTO revenue SELECT * FROM staging</code>, running the job twice doubles every sales record! An <b>idempotent pipeline</b> guarantees that running a task once, twice, or ten times on the same input produces the <i>exact same final state</i>.</p>`,
        keyIdea: "An idempotent data pipeline can be safely retried after a failure without producing duplicate records or state corruption."
      },
      predict: {
        q: "Which SQL command is inherently idempotent when loading data into a partition?",
        a: [
          "INSERT OVERWRITE TABLE daily_sales PARTITION (date='2026-05-12') SELECT ...",
          "INSERT INTO daily_sales SELECT ...",
          "UPDATE daily_sales SET count = count + 1",
          "ALTER TABLE daily_sales ADD COLUMN extra_count INT"
        ],
        c: 0,
        why: "INSERT OVERWRITE replaces the target partition completely, ensuring re-runs cleanly replace previous partial attempts."
      },
      sec2: {
        title: "Idempotent patterns: Overwrite and Merge",
        content: `<p>Two common strategies guarantee idempotency in data pipelines:</p><ul><li><b>Delete-Insert / Overwrite:</b> Partition by date (e.g. <code>2026-05-12</code>). Before loading, wipe that partition or run <code>INSERT OVERWRITE</code>. Any retry cleanly replaces the partition.</li><li><b>Upsert (MERGE):</b> Use a unique primary key (e.g. <code>order_id</code>). Match against existing rows: update if the timestamp is newer, insert if the ID is missing.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Non-Idempotent Run", lines: ["INSERT INTO sales", "Runs twice -> 200 rows", "Duplicates & corrupted totals!"] },
          { title: "Idempotent MERGE", lines: ["MERGE INTO sales USING staging", "ON sales.id = staging.id", "Match: UPDATE | Absent: INSERT"] },
          { title: "Result after 5 runs", lines: ["Exactly 100 rows", "Zero duplicates", "Consistent, trustworthy metrics"] }
        ]
      },
      sec3: {
        title: "Tracing idempotent MERGE execution",
        content: `<p>Trace how a MERGE operation handles updates and avoids duplicate inserts upon retries.</p>`,
      },
      trace: {
        code: [
          "Target table contains: { id: 101, status: 'PENDING' }",
          "Batch run 1 processes: { id: 101, status: 'SHIPPED' }, { id: 102, status: 'NEW' }",
          "MERGE updates id 101 to 'SHIPPED'; inserts id 102 as 'NEW'",
          "Network drops! Orchestrator automatically retries Batch run 1",
          "MERGE re-evaluates: id 101 updated to 'SHIPPED'; id 102 updated to 'NEW'; 0 duplicates added"
        ],
        steps: [
          { line: 0, vars: { initial_state: "1 row in target" } },
          { line: 2, vars: { first_execution: "Target now has 2 rows" } },
          { line: 3, vars: { retry_event: "Identical batch re-executed" } },
          { line: 4, vars: { final_state: "Still exactly 2 rows; zero duplicates created" } }
        ]
      },
      practiceIntro: "Test your mastery of pipeline idempotency and deduplication patterns.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The property where repeated execution produces the same result is <0>.",
          "The atomic SQL statement that combines insert and update is <1>.",
          "Replacing an entire date partition on re-runs is achieved via INSERT <2>."
        ],
        blanks: [
          { a: ["idempotence", "idempotency"], why: "Idempotency prevents duplicate state." },
          { a: ["MERGE"], why: "MERGE executes upsert logic." },
          { a: ["OVERWRITE"], why: "INSERT OVERWRITE replaces partition contents." }
        ]
      },
      win: "You can design self-healing pipelines that can be safely retried without human intervention or data corruption.",
      nextTasks: [
        "Write an idempotent SQL MERGE query that upserts customer updates based on updated_at timestamps.",
        "Implement a partition-overwrite pipeline task in Python/SQL for a daily reporting table.",
        "Explain why UUID generation inside a transformation step breaks pipeline idempotency."
      ],
      primarySource: "Maxime Beauchemin (Creator of Apache Airflow): *Functional Data Engineering — a modern way of thinking about data pipelines*.",
      quiz: [
        {
          q: "Why is a plain 'INSERT INTO table SELECT ...' operation dangerous in a scheduled automated pipeline?",
          a: [
            "If the pipeline job fails halfway and retries, it inserts duplicate rows for every record already written",
            "It locks the database table for 24 hours",
            "It permanently deletes all previous data in the table",
            "It causes an Out-Of-Memory error on the client"
          ],
          c: 0,
          why: "Non-idempotent INSERT statements append duplicate rows whenever a task is retried."
        },
        {
          q: "What does an idempotent pipeline task guarantee?",
          a: [
            "Executing the task multiple times with the same input produces the exact same end state as executing it once",
            "The task executes in under 1 millisecond",
            "The task never uses disk storage",
            "The task runs on all cloud providers simultaneously"
          ],
          c: 0,
          why: "Idempotency guarantees that re-running tasks creates zero duplicate records or unexpected side effects."
        },
        {
          q: "How does the 'INSERT OVERWRITE' pattern achieve idempotency in partitioned data lakes?",
          a: [
            "It atomicaly replaces the specific target partition directory, wiping old data before writing the new results",
            "It encrypts the partition with a new secret key",
            "It converts all strings to uppercase",
            "It prevents any user from querying the table forever"
          ],
          c: 0,
          why: "Replacing the partition contents completely ensures that retries simply overwrite previous partial attempts."
        },
        {
          q: "Why does generating random UUIDs or calling CURRENT_TIMESTAMP() inside a transformation violate idempotency?",
          a: [
            "Every retry produces different values, creating differing outputs for identical historical inputs",
            "UUIDs cannot be indexed in SQL databases",
            "CURRENT_TIMESTAMP() slows down CPU processing",
            "Databases do not support UUID generation"
          ],
          c: 0,
          why: "Non-deterministic functions generate different results on each re-run, breaking deterministic repeatability."
        }
      ]
    },
    {
      n: 5,
      id: "data-warehouses-and-lakehouses",
      title: "Data Warehouses, Data Lakes & Lakehouses",
      topic: "Data Warehouses & Orchestration",
      anim: "Layers",
      lede: "Understand the storage revolution: why columnar formats like Parquet outperform row-based databases for analytics by 100x.",
      winShort: "Contrast row vs columnar storage and explain the architecture of Data Lakes, Warehouses, and Lakehouses",
      missionLink: "Select and optimize analytical storage engines to reduce query runtimes and cloud storage bills",
      sec1: {
        title: "Row-oriented vs Column-oriented storage",
        content: `<p>Transactional databases (PostgreSQL, MySQL) store data <b>by row</b>: row 1 followed by row 2. This is optimal for OLTP: looking up a single user by primary key reads one contiguous block of disk.</p><p>Analytics queries do not look up single rows; they aggregate millions of rows across a few columns: <code>SELECT region, SUM(revenue) FROM orders GROUP BY region</code>. Reading row-oriented data forces the disk to scan every unused column (customer address, notes, email).</p><p><b>Columnar storage (e.g. Apache Parquet)</b> stores all values of column A together, followed by column B. The query engine only reads the <code>region</code> and <code>revenue</code> bytes from disk, achieving 10–100x faster scans and superior compression.</p>`,
        keyIdea: "Row storage is built for single-record lookups; columnar storage is built for aggregating millions of rows across few columns."
      },
      predict: {
        q: "Why do columnar formats like Apache Parquet compress so much better than row-based formats like CSV?",
        a: [
          "Adjacent values in a column share the same data type and often have similar or repeated values, maximizing compression algorithms (Snappy/Gzip)",
          "Parquet deletes all vowels from text strings",
          "Parquet encrypts the data with AES-256",
          "Parquet stores data only on the GPU"
        ],
        c: 0,
        why: "Homogeneous columnar data enables run-length encoding and dictionary encoding that achieves incredible compression ratios."
      },
      sec2: {
        title: "The evolution: Warehouse vs Lake vs Lakehouse",
        content: `<p>Modern data architecture evolved through three generations:</p><ul><li><b>Data Warehouse (Snowflake, BigQuery):</b> Highly structured, proprietary columnar storage, blazingly fast SQL, managed security, higher cost.</li><li><b>Data Lake (AWS S3 + Parquet):</b> Low-cost object storage holding raw, semi-structured files. Historically lacked ACID transactions.</li><li><b>Data Lakehouse (Delta Lake, Apache Iceberg):</b> Brings ACID transactions, schema enforcement, and time travel directly to open Parquet files on object storage.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Row Storage (Postgres)", lines: ["Row 1: [1, 'Alice', 29]", "Row 2: [2, 'Bob', 34]", "Reads entire row from disk"] },
          { title: "Column Storage (Parquet)", lines: ["IDs: [1, 2, ...]", "Names: ['Alice', 'Bob', ...]", "Ages: [29, 34, ...]", "Scans only requested columns!"] },
          { title: "Table Formats (Iceberg/Delta)", lines: ["ACID transactions over S3", "Time travel & snapshots", "Schema evolution on open files"] }
        ]
      },
      sec3: {
        title: "Tracing columnar projection pushdown",
        content: `<p>Trace how a columnar query engine skips reading unneeded columns from storage.</p>`,
      },
      trace: {
        code: [
          "Query: SELECT AVG(age) FROM users; (Table has 50 columns, 100M rows)",
          "Row-based scan: Reads all 50 columns -> 50GB scanned from disk",
          "Columnar scan (Parquet): Reads only 'age' column metadata & byte chunks",
          "Projection pushdown skips 49 columns: Only 400MB scanned from disk",
          "Execution finishes in 0.4 seconds instead of 45 seconds"
        ],
        steps: [
          { line: 0, vars: { query_intent: "Single column aggregated across 100M rows" } },
          { line: 1, vars: { row_penalty: "Disproportionate disk I/O reading unused fields" } },
          { line: 2, vars: { columnar_advantage: "Directly seeks to 'age' column byte offsets" } },
          { line: 4, vars: { efficiency: "99% reduction in bytes scanned" } }
        ]
      },
      practiceIntro: "Test your understanding of analytical storage formats and lakehouse architectures.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The open-source columnar storage format commonly used in data lakes is Apache <0>.",
          "Reading only the columns required by a query is called projection <1>.",
          "Modern table formats like Apache Iceberg add <2> transactions to open data lakes."
        ],
        blanks: [
          { a: ["Parquet"], why: "Parquet is the standard open columnar format." },
          { a: ["pushdown"], why: "Projection pushdown skips unreferenced columns." },
          { a: ["ACID"], why: "ACID guarantees consistency on data lake storage." }
        ]
      },
      win: "You understand how columnar formats optimize analytical workloads and know when to leverage Warehouses, Lakes, and Lakehouses.",
      nextTasks: [
        "Inspect a Parquet file metadata using pyarrow or parquet-tools.",
        "Compare the byte size and query speed of a 1GB CSV file vs its Parquet equivalent.",
        "Explore how table formats like Apache Iceberg manage snapshot metadata and time travel."
      ],
      primarySource: "Martin Kleppmann, *Designing Data-Intensive Applications*, Chapter 3: *Column-Oriented Storage*.",
      quiz: [
        {
          q: "Why is columnar storage vastly superior to row storage for analytical aggregation queries (e.g. SUM, AVG)?",
          a: [
            "The query engine only reads the specific columns referenced in the query from disk, ignoring all other fields",
            "Columnar files can only store numbers, not text",
            "Columnar files automatically execute queries on the client's graphics card",
            "Row storage requires human approval for each query"
          ],
          c: 0,
          why: "Projection pushdown allows the engine to bypass reading irrelevant columns, reducing disk I/O by up to 99%."
        },
        {
          q: "What is Apache Parquet?",
          a: [
            "An open-source, columnar storage file format optimized for fast analytical queries and efficient data compression",
            "A web framework for building Python dashboards",
            "A relational database management system created by Oracle",
            "A message queue protocol"
          ],
          c: 0,
          why: "Parquet is the open industry-standard columnar format for data engineering and big data processing."
        },
        {
          q: "What capability does a modern Data Lakehouse format (like Apache Iceberg or Delta Lake) bring to object storage?",
          a: [
            "ACID transactions, time travel, and schema enforcement over open Parquet files in object stores like S3",
            "The ability to run Node.js code inside S3 buckets",
            "Automatic translation of SQL into HTML webpages",
            "Free unlimited internet bandwidth"
          ],
          c: 0,
          why: "Lakehouse formats bring warehouse-grade ACID guarantees and snapshot metadata directly to open cloud storage."
        },
        {
          q: "What is 'time travel' in a modern data lakehouse or cloud warehouse?",
          a: [
            "The ability to query a table exactly as it existed at a specific timestamp or commit snapshot in the past",
            "A hardware feature that speeds up CPU clocks",
            "Predicting future sales using machine learning algorithms",
            "Synchronizing computer clocks with atomic time servers"
          ],
          c: 0,
          why: "Snapshot-based storage retains immutable historical versions, enabling queries against historical timestamps."
        }
      ]
    },
    {
      n: 6,
      id: "pipeline-orchestration-and-dags",
      title: "Pipeline Orchestration, DAGs & Airflow",
      topic: "Data Warehouses & Orchestration",
      anim: "Flow",
      lede: "Cron jobs fail silently and lack dependency management. Modern pipelines use DAG orchestrators to manage multi-step workflows.",
      winShort: "Author and schedule data workflows using Directed Acyclic Graphs (DAGs) in Apache Airflow",
      missionLink: "Eliminate brittle cron scripts and ensure multi-step pipeline dependencies execute reliably",
      sec1: {
        title: "The limits of Linux cron",
        content: `<p>In simple setups, engineers schedule jobs with cron: <code>0 2 * * * python extract.py</code>, followed by <code>0 3 * * * python transform.py</code>. This approach is brittle and hazardous:</p><ul><li><b>No dependency awareness:</b> If <code>extract.py</code> runs slow and takes 70 minutes, <code>transform.py</code> starts prematurely on half-written data.</li><li><b>No retry state:</b> If step 3 of 10 fails, cron cannot retry only step 3; it either fails silently or requires running the whole job again.</li><li><b>No monitoring:</b> You have zero visibility into task durations, failures, or bottlenecks.</li></ul>`,
        keyIdea: "Cron has no concept of dependencies or state; orchestrators model workflows as Directed Acyclic Graphs (DAGs)."
      },
      predict: {
        q: "Why must a pipeline graph be 'acyclic' (Directed Acyclic Graph)?",
        a: [
          "If it contained a cycle (Task A -> Task B -> Task A), the workflow would enter an infinite loop and could never finish",
          "Cyclic graphs are forbidden by the Linux operating system",
          "Acyclic graphs execute 10 times faster",
          "Cycles cause hard drives to overheat"
        ],
        c: 0,
        why: "An acyclic graph guarantees a clear execution direction with no circular dependencies that would run forever."
      },
      sec2: {
        title: "Core concepts of Apache Airflow",
        content: `<p><b>Apache Airflow</b> is the industry-standard workflow orchestrator. In Airflow, workflows are authored as standard Python code:</p><ul><li><b>DAG:</b> The collection of tasks organized with explicit directional dependencies (e.g. <code>task_a >> task_b</code>).</li><li><b>Operator:</b> The template for a single task (e.g. <code>PythonOperator</code>, <code>BashOperator</code>, <code>PostgresOperator</code>).</li><li><b>Task Instance:</b> An individual run of a task for a specific point in time (execution date).</li><li><b>Scheduler:</b> The background daemon that monitors DAGs and triggers tasks when their upstream dependencies succeed.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Extract Task (A)", lines: ["Pulls Stripe API data", "Writes raw records to S3"] },
          { title: "Transform Tasks (B & C)", lines: ["B: Anonymize PII", "C: Calculate sales metrics", "Run in PARALLEL after A!"] },
          { title: "Load Task (D)", lines: ["Upserts to Snowflake", "Runs only after B & C complete", "A >> [B, C] >> D"] }
        ]
      },
      sec3: {
        title: "Tracing DAG execution with task branching",
        content: `<p>Trace how the Airflow scheduler executes tasks respecting dependency order.</p>`,
      },
      trace: {
        code: [
          "DAG defined: extract >> [transform_orders, transform_users] >> load_analytics",
          "1. Scheduler triggers: 'extract' task moves to RUNNING state",
          "2. 'extract' succeeds with exit code 0",
          "3. Scheduler detects upstream dependencies met for 'transform_orders' and 'transform_users'",
          "4. Both transform tasks launch in PARALLEL across worker nodes",
          "5. Once BOTH finish, scheduler unlocks and runs 'load_analytics'"
        ],
        steps: [
          { line: 0, vars: { dag_structure: "1 root, 2 parallel branches, 1 convergence" } },
          { line: 1, vars: { task_1: "extract finishes successfully" } },
          { line: 3, vars: { parallel_dispatch: "Workers execute independent transforms simultaneously" } },
          { line: 5, vars: { convergence: "Downstream join task executes cleanly" } }
        ]
      },
      practiceIntro: "Test your understanding of workflow orchestration and DAG design.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "A workflow graph without circular loops is a Directed <0> Graph.",
          "The industry-standard open-source Python orchestrator is Apache <1>.",
          "To declare that task A must complete before task B in Airflow, write task_a <2> task_b."
        ],
        blanks: [
          { a: ["Acyclic"], why: "Acyclic means no circular loops." },
          { a: ["Airflow"], why: "Airflow orchestrates data workflows." },
          { a: [">>"], why: "Bitshift operator (>>) sets upstream dependencies." }
        ]
      },
      win: "You can define robust multi-step pipeline DAGs with parallel execution branches, automated retries, and monitoring in Airflow.",
      nextTasks: [
        "Author a Python Airflow DAG that extracts an API, transforms JSON, and loads SQLite with explicit dependencies.",
        "Configure task retries with retries=3 and retry_delay=timedelta(minutes=5).",
        "Inspect the Airflow web UI Grid view to diagnose a failed task instance."
      ],
      primarySource: "Apache Airflow Official Documentation: *Core Concepts: DAGs and Operators* (airflow.apache.org).",
      quiz: [
        {
          q: "What makes a Directed Acyclic Graph (DAG) the ideal model for data pipeline workflows?",
          a: [
            "It defines clear upstream/downstream task dependencies and guarantees that tasks cannot get trapped in infinite circular loops",
            "It automatically optimizes SQL queries inside the database",
            "It converts Python code into WebAssembly",
            "It prevents data from being written to disk"
          ],
          c: 0,
          why: "DAGs enforce clear execution order while preventing circular loops where tasks wait on each other indefinitely."
        },
        {
          q: "How does Apache Airflow handle an individual task failure in a 10-step DAG?",
          a: [
            "It can automatically retry only the failed task (with configurable delays), leaving upstream successful tasks intact",
            "It deletes the entire Airflow database immediately",
            "It crashes the server and sends a physical letter to the admin",
            "It skips all remaining tasks and pretends everything succeeded"
          ],
          c: 0,
          why: "Airflow tracks task instances independently; failed tasks can retry without repeating expensive upstream work."
        },
        {
          q: "What is an Airflow Operator?",
          a: [
            "A template or class that defines a single unit of work (e.g. executing a Python function, running a SQL query, or firing a Bash script)",
            "The human administrator who monitors the server",
            "A mathematical addition symbol",
            "A physical keyboard attached to the server rack"
          ],
          c: 0,
          why: "Operators (like PythonOperator or BashOperator) encapsulate the code that runs when a task executes."
        },
        {
          q: "In modern data engineering, what is the role of an orchestrator like Airflow versus a transformation tool like dbt?",
          a: [
            "Airflow schedules and coordinates end-to-end workflows (extract, fire dbt, run checks, send alerts); dbt executes the SQL transforms inside the warehouse",
            "Airflow is obsolete and has been completely replaced by dbt",
            "dbt schedules the Airflow clusters",
            "Airflow only works with MongoDB"
          ],
          c: 0,
          why: "Orchestrators coordinate broad multi-technology pipelines; dbt specializes in SQL transformations within the warehouse."
        }
      ]
    },
    {
      n: 7,
      id: "event-streaming-with-kafka",
      title: "Event Streaming & Message Brokers with Kafka",
      topic: "Streaming, Quality & Idempotency",
      anim: "Globe",
      lede: "Traditional databases struggle with millions of events per second. Apache Kafka uses distributed append-only commit logs to stream data at massive scale.",
      winShort: "Explain Kafka's partitioned commit log architecture, consumer offsets, and consumer groups",
      missionLink: "Decouple microservices and process high-throughput event streams in real time",
      sec1: {
        title: "The distributed commit log",
        content: `<p>Traditional message queues (RabbitMQ) delete messages once acknowledged by a consumer. This means you cannot replay history or add a new analytics consumer next month.</p><p><b>Apache Kafka</b> is an <b>append-only distributed commit log</b>. Events are permanently written to disk in sequence and retained for days or years. Multiple independent consumers can read the log at their own pace, seeking backward or forward by tracking their <b>offset</b>.</p>`,
        keyIdea: "Kafka stores events in an append-only commit log on disk; messages are not deleted when consumed."
      },
      predict: {
        q: "What happens in Kafka when Consumer Group A finishes reading an event?",
        a: [
          "Consumer Group A advances its committed offset; the event remains in Kafka untouched for Consumer Group B to read",
          "The event is deleted from disk immediately to save space",
          "The event is sent to all internet users",
          "The entire Kafka cluster reboots"
        ],
        c: 0,
        why: "Kafka decouples producers and consumers: messages persist regardless of consumption state."
      },
      sec2: {
        title: "Topics, Partitions, and Consumer Groups",
        content: `<p>To achieve horizontal scalability, Kafka structures data cleanly:</p><ul><li><b>Topic:</b> A category or stream name (e.g. <code>user-clicks</code>).</li><li><b>Partition:</b> A topic is divided into multiple ordered partitions distributed across cluster broker nodes. Partitions enable parallel throughput.</li><li><b>Message Key:</b> Messages with the same key (e.g. <code>user_id</code>) are guaranteed to route to the <i>same partition</i>, preserving strict ordering.</li><li><b>Consumer Group:</b> A group of cooperating worker instances. Each partition is assigned to exactly one consumer within the group.</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Topic: 'orders'", lines: ["Partition 0: [0, 1, 2, 3...]", "Partition 1: [0, 1, 2, 3...]", "Partition 2: [0, 1, 2, 3...]"] },
          { title: "Producers", lines: ["Write events by Key", "Key hash determines partition", "Strict ordering per partition"] },
          { title: "Consumer Group", lines: ["Worker 1 -> Partition 0", "Worker 2 -> Partition 1", "Worker 3 -> Partition 2"] }
        ]
      },
      sec3: {
        title: "Tracing consumer offset replay",
        content: `<p>Trace how a consumer recovers from a software bug by rewinding its offset.</p>`,
      },
      trace: {
        code: [
          "1. A bug in consumer service calculates incorrect sales tax for 3 hours",
          "2. Consumer offset is currently at: 1,500,000",
          "3. Engineers deploy fixed code",
          "4. Consumer group offset is reset backwards: kafka-consumer-groups --reset-offsets --to-offset 1,200,000",
          "5. Consumer replays the 300,000 events, reprocessing them correctly without data loss"
        ],
        steps: [
          { line: 0, vars: { bug_detected: "Incorrect processing logic in production" } },
          { line: 2, vars: { patch: "New code deployed to workers" } },
          { line: 3, vars: { offset_rewind: "Pointer moved back in log" } },
          { line: 4, vars: { recovery: "Events re-read from immutable Kafka storage" } }
        ]
      },
      practiceIntro: "Test your understanding of Apache Kafka architecture and event streaming.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "Kafka organizes messages into ordered, append-only logs called <0>.",
          "The sequential integer identifying a message's position within a partition is its <1>.",
          "A collection of consumers collaborating to read partitions in parallel is a consumer <2>."
        ],
        blanks: [
          { a: ["partitions"], why: "Partitions are ordered logs." },
          { a: ["offset"], why: "Offsets uniquely identify log positions." },
          { a: ["group"], why: "Consumer groups share partition processing." }
        ]
      },
      win: "You understand how Kafka powers real-time event streaming and how partitions, offsets, and consumer groups ensure scalable processing.",
      nextTasks: [
        "Produce and consume messages using a local Kafka Docker container using kafka-console-producer.",
        "Demonstrate message replay by rewinding consumer group offsets using the Kafka CLI.",
        "Explain how message keys guarantee in-order delivery per entity."
      ],
      primarySource: "Jay Kreps, Neha Narkhede, Jun Rao (Creators of Kafka), *Kafka: The Definitive Guide* (O'Reilly).",
      quiz: [
        {
          q: "What fundamental architectural difference distinguishes Kafka from traditional message brokers like RabbitMQ?",
          a: [
            "Kafka uses a persistent, append-only disk commit log where messages are not deleted after consumption, allowing multiple consumers and replays",
            "Kafka runs entirely in browser memory",
            "Kafka does not support network connections",
            "RabbitMQ cannot store text messages"
          ],
          c: 0,
          why: "Kafka's immutable append-only commit log allows messages to be retained and replayed by multiple consumer groups."
        },
        {
          q: "How does Kafka guarantee that all events for a specific user (e.g. user_id = 42) are processed in strict chronological order?",
          a: [
            "By using the user_id as the message key, ensuring all events for that user hash to the exact same partition",
            "By processing only one event per hour globally",
            "By sorting the entire cluster memory every second",
            "By pausing all other producers"
          ],
          c: 0,
          why: "Kafka guarantees ordering within a partition; messages sharing the same key always hash to the same partition."
        },
        {
          q: "What is a Kafka consumer offset?",
          a: [
            "A sequential integer bookmarking the position of the last processed event in a partition for a consumer group",
            "The time delay in milliseconds between message send and receive",
            "The memory address of the Kafka broker process",
            "The secret password required to authenticate to the cluster"
          ],
          c: 0,
          why: "An offset acts as a bookmark indicating which events a consumer has successfully read and committed."
        },
        {
          q: "If a topic has 4 partitions, what is the maximum number of active consumers in a single consumer group that can read data in parallel?",
          a: [
            "4 consumers (1 consumer per partition; any extra consumers remain idle as hot backups)",
            "Unlimited consumers",
            "1 consumer only",
            "16 consumers"
          ],
          c: 0,
          why: "Each partition can only be read by one consumer per group at a time; extra consumers sit idle."
        }
      ]
    },
    {
      n: 8,
      id: "data-quality-monitoring-and-observability",
      title: "Data Quality, Schemas & Observability",
      topic: "Streaming, Quality & Idempotency",
      anim: "LayersOrbit",
      lede: "Silent data corruption is the nightmare of every data team. Implement automated data quality tests, contracts, and observability.",
      winShort: "Implement automated data quality assertions and monitor freshness, volume, and schema drift",
      missionLink: "Catch broken upstream data before executives see corrupted metrics on dashboards",
      sec1: {
        title: "Silent data corruption: The invisible killer",
        content: `<p>When software engineers ship a bug, buttons break or servers return HTTP 500. When data engineers ship a bug, nothing crashes: queries finish successfully, but revenue is quietly calculated as negative or user counts are halved.</p><p>This is <b>silent data corruption</b>. By the time someone notices, executives have made strategic business decisions based on fabricated figures. Modern data teams treat data quality like software unit tests, running automated assertions on every pipeline execution.</p>`,
        keyIdea: "Silent data corruption does not throw errors; automated data quality tests must validate data correctness at every stage."
      },
      predict: {
        q: "What are the five pillars of modern data observability?",
        a: [
          "Freshness, Volume, Schema, Distribution, and Lineage",
          "CPU, RAM, Disk, Network, and Power",
          "HTML, CSS, JavaScript, Webpack, and React",
          "Password, Username, Token, Cookie, and Session"
        ],
        c: 0,
        why: "Data observability tracks whether data arrived on time (freshness), expected row counts (volume), valid types (schema), values (distribution), and dependencies (lineage)."
      },
      sec2: {
        title: "Automated quality checks with dbt & Great Expectations",
        content: `<p>You should never trust data blindly. Frameworks like <b>dbt tests</b> and <b>Great Expectations</b> allow you to define declarative constraints:</p><ul><li><code>unique:</code> Primary keys must have zero duplicate values.</li><li><code>not_null:</code> Critical columns (e.g. <code>customer_id</code>) cannot be empty.</li><li><code>accepted_values:</code> Categorical columns must match approved lists (e.g. <code>['active', 'churned']</code>).</li><li><code>relationships:</code> Foreign keys must exist in parent tables (referential integrity).</li></ul>`,
      },
      diagram: {
        boxes: [
          { title: "Raw Data Load", lines: ["Staging tables updated", "100,000 new rows loaded"] },
          { title: "Automated Quality Gate", lines: ["Test: user_id is unique", "Test: order_total >= 0", "Test: delivery_date is valid"] },
          { title: "Quality Evaluation", lines: ["PASSED -> Publish to Production Mart", "FAILED -> Halt pipeline & trigger PagerDuty!"] }
        ]
      },
      sec3: {
        title: "Tracing a data quality assertion failure",
        content: `<p>Trace how an automated test halts downstream pipeline execution upon detecting anomalous data.</p>`,
      },
      trace: {
        code: [
          "1. Nightly dbt build runs: dbt test --select orders",
          "2. Test evaluates: assert_positive_revenue: SELECT * FROM orders WHERE total < 0",
          "3. Query returns 42 rows with negative totals (Bug in upstream mobile app discount logic!)",
          "4. Test fails with exit code 1; downstream reporting table update is BLOCKED",
          "5. Alert dispatched to Slack #data-alerts; production dashboard remains protected"
        ],
        steps: [
          { line: 0, vars: { check_phase: "Automated data testing in progress" } },
          { line: 2, vars: { violation: "42 rows violated positive revenue assertion" } },
          { line: 3, vars: { gate_closed: "Downstream marts shielded from corrupted data" } },
          { line: 4, vars: { notification: "Engineers alerted to triage before stakeholders notice" } }
        ]
      },
      practiceIntro: "Test your mastery of data quality assertions and data observability.",
      fill: {
        label: "From memory — fill in the core terms",
        lines: [
          "The data observability pillar tracking whether data arrived on schedule is <0>.",
          "Ensuring foreign keys in child tables exist in parent tables is referential <1>.",
          "A formal specification between producers and consumers defining schemas and SLAs is a data <2>."
        ],
        blanks: [
          { a: ["freshness"], why: "Freshness monitors data arrival timing." },
          { a: ["integrity"], why: "Referential integrity verifies relationships." },
          { a: ["contract"], why: "Data contracts establish formal agreements." }
        ]
      },
      win: "You can implement automated data quality gates, define data contracts, and build comprehensive data observability dashboards.",
      nextTasks: [
        "Add unique and not_null schema tests to a dbt model and run dbt test.",
        "Define a Great Expectations test suite asserting that values in a column fall between 0 and 100.",
        "Implement a data lineage graph mapping raw source tables to downstream executive dashboards."
      ],
      primarySource: "Barr Moses, Lior Gavish, Molly Vorwerck, *Data Quality Fundamentals* (O'Reilly).",
      quiz: [
        {
          q: "Why is silent data corruption more dangerous in analytics pipelines than runtime crashes?",
          a: [
            "Because no error is thrown, allowing corrupted or fabricated numbers to spread unnoticed into executive decisions",
            "Because it permanently damages computer RAM",
            "Because it deletes the cloud provider billing history",
            "Because it makes SQL queries run 10 times slower"
          ],
          c: 0,
          why: "Silent failures pass unnoticed through systems, leading to faulty financial reports and compromised business decisions."
        },
        {
          q: "What does the 'freshness' pillar in data observability monitor?",
          a: [
            "Whether data has arrived within expected SLA time boundaries and is not stale",
            "How recently the database operating system was updated",
            "The ambient temperature of the server room",
            "How many lines of comments are in the SQL query"
          ],
          c: 0,
          why: "Freshness monitors whether upstream updates are arriving on schedule or experiencing pipeline delays."
        },
        {
          q: "What is a 'Data Contract'?",
          a: [
            "An explicit agreement between data producers and consumers specifying schema structure, data semantics, and quality guarantees",
            "A legal NDA signed with cloud vendors",
            "A document certifying that all database passwords are changed monthly",
            "A paper contract signed by all company shareholders"
          ],
          c: 0,
          why: "Data contracts establish explicit schemas, quality rules, and change procedures between software teams and data teams."
        },
        {
          q: "What action should an automated pipeline take when a critical data quality assertion (like unique primary key) fails?",
          a: [
            "Halt execution immediately before publishing to production mart tables and alert the engineering team",
            "Silently ignore the test and publish the data anyway",
            "Delete all historical records in the database",
            "Reboot the client's laptop"
          ],
          c: 0,
          why: "Halting the pipeline prevents corrupted records from contaminating user-facing production dashboards."
        }
      ]
    }
  ]
};
