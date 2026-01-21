# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

Using `db.json` (file-based storage) may work for learning or small demos, but it is **not suitable for real-world applications** due to several limitations:

### 🔹 Performance

* Every read or write operation requires **reading the entire file into memory** and writing it back.
* As data grows, file operations become **slow and inefficient**.

### 🔹 Scalability

* File-based storage cannot handle **large volumes of data**.
* It does not support horizontal or vertical scaling.
* Multiple users accessing the file simultaneously can cause conflicts.

### 🔹 Concurrency Issues

* No built-in mechanism to handle **multiple simultaneous reads/writes**.
* Can easily lead to **data corruption** when multiple requests try to modify the file.

### 🔹 Reliability

* No support for **transactions**, **rollback**, or **crash recovery**.
* If the server crashes during a write operation, data may be lost or corrupted.

### 🔹 Security & Query Limitations

* No authentication or authorization.
* No advanced querying, indexing, or optimization.

✅ Hence, `db.json` is suitable only for **learning, prototyping, or mock APIs**, not production systems.

---

## 2. What are the ideal characteristics of a database system?

A proper database system offers much more than just storage. Ideal characteristics include:

### 🔹 Performance

* Fast data retrieval and updates.
* Uses **indexes, query optimization, and caching**.

### 🔹 Concurrency

* Supports **multiple users accessing data simultaneously** without conflicts.
* Uses locking and isolation mechanisms.

### 🔹 Reliability

* Ensures data is safe even during crashes or failures.
* Supports **backup and recovery mechanisms**.

### 🔹 Data Integrity

* Maintains accuracy and consistency of data.
* Enforces **constraints** like primary keys, foreign keys, unique constraints, etc.

### 🔹 Scalability

* Can handle growing amounts of data and users.
* Supports vertical (more power) and horizontal (more servers) scaling.

### 🔹 Fault Tolerance

* System continues to function even if some components fail.
* Uses replication and redundancy.

✅ A good database ensures data is **fast, safe, consistent, and always available**.

---

## 3. How many types of databases are there? What are their use cases?

Databases are broadly classified into **two main types**:

---

### 🔹 Relational Databases (SQL Databases)

#### Characteristics:

* Data stored in **tables (rows and columns)**
* Uses **structured schema**
* Supports **ACID properties**

#### Examples:

* MySQL
* PostgreSQL
* Oracle
* SQL Server

#### Use Cases:

* Banking systems
* E-commerce applications
* ERP systems
* Applications requiring **strong consistency and relationships**

---

### 🔹 Non-Relational Databases (NoSQL Databases)

#### Characteristics:

* Schema-less or flexible schema
* Designed for **high scalability and performance**
* Handles unstructured or semi-structured data

#### Types & Examples:

* Document DB: MongoDB
* Key-Value Store: Redis
* Column Store: Cassandra
* Graph DB: Neo4j

#### Use Cases:

* Social media platforms
* Real-time analytics
* Big data applications
* Applications with rapidly changing data structures

---
