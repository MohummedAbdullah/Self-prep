import type { InterviewQuestion } from "../data/modules";

export interface TechnicalTerm {
  term: string;
  definition: string;
  category: string;
  importance: "high" | "medium" | "low";
}

export interface Topic {
  title: string;
  description: string;
  content: string;
  code?: string;
  language?: string;
  codeSamples?: {
    code: string;
    language?: string;
    filename?: string;
    label?: string;
  }[];
}

export const nodejsData = {
  technicalTerms: [
    {
      term: "REST API",
      definition:
        "Representational State Transfer - an architectural style for designing networked applications using stateless, cacheable communications via HTTP methods.",
      category: "API Design",
      importance: "high",
    },
    {
      term: "OpenAPI Specification",
      definition:
        "A standard, language-agnostic interface description for REST APIs that allows humans and computers to discover and understand capabilities without accessing source code.",
      category: "API Design",
      importance: "high",
    },
    {
      term: "FastAPI",
      definition:
        "A modern, fast (high-performance) Python web framework for building APIs with automatic OpenAPI documentation and validation based on Python type hints.",
      category: "API Frameworks",
      importance: "high",
    },
    {
      term: "Webhooks",
      definition:
        "User-defined HTTP callbacks triggered by specific events, allowing real-time communication between applications without continuous polling.",
      category: "API Integration",
      importance: "high",
    },
    {
      term: "Event Routing",
      definition:
        "The process of directing events from sources to destinations based on rules, filters, or patterns, often used in event-driven architectures.",
      category: "Event-Driven Architecture",
      importance: "medium",
    },
    {
      term: "Connectivity API",
      definition:
        "APIs that manage network connections, device pairing, and data transfer between systems, often used in IoT and telecommunications.",
      category: "API Integration",
      importance: "medium",
    },
    {
      term: "Public API",
      definition:
        "An API that is openly available for use by external developers, often with authentication and rate limiting, providing access to specific services or data.",
      category: "API Design",
      importance: "medium",
    },
    {
      term: "Demand API",
      definition:
        "APIs designed to handle real-time demand forecasting, pricing adjustments, and resource allocation based on current demand patterns.",
      category: "API Integration",
      importance: "medium",
    },
    {
      term: "API Gateway",
      definition:
        "A server that acts as a single entry point for multiple APIs, handling request routing, composition, authentication, and rate limiting.",
      category: "API Architecture",
      importance: "high",
    },
    {
      term: "Idempotency",
      definition:
        "A property where making multiple identical API requests produces the same result as a single request, crucial for reliable operations in distributed systems.",
      category: "API Design",
      importance: "high",
    },
    {
      term: "Event Loop",
      definition:
        "Manages asynchronous callbacks and I/O. V8 executes sync code, libuv provides the loop with 6 phases (timers → poll → check). Microtasks run between every phase.",
      category: "Runtime",
      importance: "high",
    },
    {
      term: "Streams",
      definition: "Process data in chunks to reduce memory usage.",
      category: "I/O",
      importance: "high",
    },
    {
      term: "Clusters",
      definition: "Run multiple worker processes to use multi-core CPUs.",
      category: "Scaling",
      importance: "medium",
    },
    {
      term: "Buffers",
      definition: "Binary data representation in Node.",
      category: "Core",
      importance: "medium",
    },
    {
      term: "libuv",
      definition: "C library providing the event loop and async I/O.",
      category: "Runtime",
      importance: "medium",
    },
    {
      term: "Worker Threads",
      definition: "Multi-threading for CPU-bound tasks.",
      category: "Scaling",
      importance: "medium",
    },
    {
      term: "Backpressure",
      definition: "Managing flow control in streams.",
      category: "I/O",
      importance: "high",
    },
    {
      term: "EventEmitter",
      definition: "Base pattern for async event handling in Node.",
      category: "Core",
      importance: "medium",
    },
    {
      term: "Process Signals",
      definition: "OS-level signals for process control.",
      category: "Runtime",
      importance: "low",
    },
    {
      term: "Connection Pooling",
      definition:
        "Reusing database connections to reduce overhead and latency.",
      category: "Database",
      importance: "high",
    },
    {
      term: "CDN",
      definition:
        "Content Delivery Network - geographically distributed servers for fast content delivery.",
      category: "Infrastructure",
      importance: "high",
    },
    {
      term: "Load Balancer",
      definition:
        "Distributes incoming traffic across multiple servers to prevent overload.",
      category: "Infrastructure",
      importance: "high",
    },
    {
      term: "Redis",
      definition:
        "In-memory data store used for caching, session management, and real-time apps.",
      category: "Caching",
      importance: "high",
    },
    {
      term: "Memcached",
      definition: "High-performance distributed memory caching system.",
      category: "Caching",
      importance: "medium",
    },
    {
      term: "Kubernetes",
      definition:
        "Container orchestration platform for deploying, scaling, and managing containers.",
      category: "DevOps",
      importance: "high",
    },
    {
      term: "Queue",
      definition:
        "Message broker for async task processing (RabbitMQ, Bull, SQS).",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "CloudFlare",
      definition: "CDN, DDoS protection, and reverse proxy service.",
      category: "Infrastructure",
      importance: "medium",
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: "Async I/O",
      description: "Non-blocking architecture",
      content: `Understand callbacks, promises, and async/await for I/O.`,
      code: `import fs from "fs/promises";

async function readConfig() {
  const content = await fs.readFile("config.json", "utf-8");
  return JSON.parse(content);
}`,
      language: "javascript",
      codeSamples: [
        {
          label: "Async File Read",
          code: `import fs from "fs/promises";

async function readConfig() {
  const content = await fs.readFile("config.json", "utf-8");
  return JSON.parse(content);
}`,
          language: "javascript",
        },
        {
          label: "Parallel I/O",
          code: `const [a, b] = await Promise.all([
  fs.readFile("a.txt", "utf-8"),
  fs.readFile("b.txt", "utf-8"),
]);`,
          language: "javascript",
        },
      ],
    },
    {
      title: "Streams & Pipes",
      description: "Efficient data processing",
      content: `Use readable and writable streams for large data.`,
      code: `import fs from "fs";

fs.createReadStream("input.log")
  .pipe(fs.createWriteStream("output.log"));`,
      language: "javascript",
      codeSamples: [
        {
          label: "Pipe",
          code: `import fs from "fs";

fs.createReadStream("input.log")
  .pipe(fs.createWriteStream("output.log"));`,
          language: "javascript",
        },
        {
          label: "Pipeline",
          code: `import { pipeline } from "stream/promises";

await pipeline(
  fs.createReadStream("in.log"),
  fs.createWriteStream("out.log")
);`,
          language: "javascript",
        },
      ],
    },
    {
      title: "Scaling",
      description: "Processes and workers",
      content: `Use clustering or process managers for scale.`,
      code: `import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) cluster.fork();
}`,
      language: "javascript",
      codeSamples: [
        {
          label: "Cluster",
          code: `import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) cluster.fork();
}`,
          language: "javascript",
        },
        {
          label: "Worker Threads",
          code: `import { Worker } from "worker_threads";

const worker = new Worker("./job.js");
worker.on("message", (msg) => console.log(msg));`,
          language: "javascript",
        },
      ],
    },
    {
      title: "REST API Design Principles",
      description: "Understanding RESTful architecture and best practices",
      content: `REST APIs follow six architectural constraints: client-server, stateless, cacheable, uniform interface, layered system, and code-on-demand. The uniform interface includes resource identification, representation manipulation, self-descriptive messages, and hypermedia as the engine of application state (HATEOAS).

Key HTTP methods in REST:
- GET: Retrieve a resource
- POST: Create a new resource
- PUT: Update an entire resource
- PATCH: Partial update of a resource
- DELETE: Remove a resource

HTTP status codes indicate the result of the request:
- 2xx: Success (200 OK, 201 Created)
- 4xx: Client errors (400 Bad Request, 401 Unauthorized, 404 Not Found)
- 5xx: Server errors (500 Internal Server Error)`,
      code: `// Example REST API endpoint in FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users = {}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    return users[user_id]

@app.post("/users")
async def create_user(user: User):
    if user.id in users:
        raise HTTPException(status_code=400, detail="User already exists")
    users[user.id] = user
    return {"message": "User created", "user": user}`,
      language: "python",
      codeSamples: [
        {
          label: "REST API with FastAPI",
          code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users = {}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    return users[user_id]

@app.post("/users")
async def create_user(user: User):
    if user.id in users:
        raise HTTPException(status_code=400, detail="User already exists")
    users[user.id] = user
    return {"message": "User created", "user": user}`,
          language: "python",
        },
      ],
    },
    {
      title: "OpenAPI and API Documentation",
      description: "Using OpenAPI specification for API documentation",
      content: `OpenAPI (formerly Swagger) provides a standard way to describe REST APIs. It allows for:
- Automatic API documentation generation
- Interactive API exploration (Swagger UI)
- Client SDK generation
- API contract testing

Key OpenAPI components:
- Paths: API endpoints with operations
- Parameters: Query, path, header, and body parameters
- Schemas: Data models using JSON Schema
- Security: Authentication and authorization definitions
- Responses: Expected HTTP status codes and response schemas`,
      code: `# OpenAPI 3.0.0 specification example
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string`,
      language: "yaml",
      codeSamples: [
        {
          label: "OpenAPI Specification",
          code: `openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string`,
          language: "yaml",
        },
      ],
    },
    {
      title: "Webhooks and Event-Driven Architecture",
      description: "Implementing webhooks for real-time notifications",
      content: `Webhooks enable real-time communication between services by allowing one system to notify another when specific events occur. Unlike traditional polling, webhooks provide immediate event delivery.

Webhook Architecture:
1. **Event Source**: Generates events (e.g., payment processed, user created)
2. **Webhook Payload**: JSON/XML data containing event details
3. **Webhook Endpoint**: URL where the receiver accepts POST requests
4. **Delivery Reliability**: Retry mechanisms, idempotency, and signature verification

Best Practices:
- Implement signature verification for security
- Use idempotency keys to prevent duplicate processing
- Design for eventual consistency
- Implement retry policies with exponential backoff
- Log all webhook deliveries for debugging`,
      code: `// Example webhook implementation in Node.js/Express
const express = require('express');
const crypto = require('crypto');
const app = express();

// Secret for webhook signature verification
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

// Webhook receiver
app.post('/webhooks/payment', express.raw({type: 'application/json'}), (req, res) => {
    // Verify signature
    const signature = req.headers['x-webhook-signature'];
    const hash = crypto.createHmac('sha256', WEBHOOK_SECRET)
                       .update(req.body)
                       .digest('hex');
    
    if (signature !== hash) {
        return res.status(401).json({error: 'Invalid signature'});
    }

    try {
        const event = JSON.parse(req.body);
        console.log('Received webhook event:', event);
        
        // Process the event (idempotent operation)
        if (event.type === 'payment.completed') {
            // Update order status, send confirmation, etc.
        }
        
        res.status(200).json({received: true});
    } catch (error) {
        res.status(500).json({error: 'Processing failed'});
    }
});`,
      language: "javascript",
      codeSamples: [
        {
          label: "Webhook Implementation",
          code: `const express = require('express');
const crypto = require('crypto');
const app = express();

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

app.post('/webhooks/payment', express.raw({type: 'application/json'}), (req, res) => {
    const signature = req.headers['x-webhook-signature'];
    const hash = crypto.createHmac('sha256', WEBHOOK_SECRET)
                       .update(req.body)
                       .digest('hex');
    
    if (signature !== hash) {
        return res.status(401).json({error: 'Invalid signature'});
    }

    try {
        const event = JSON.parse(req.body);
        console.log('Received webhook event:', event);
        
        if (event.type === 'payment.completed') {
            // Process payment completion
        }
        
        res.status(200).json({received: true});
    } catch (error) {
        res.status(500).json({error: 'Processing failed'});
    }
});`,
          language: "javascript",
        },
      ],
    },
    {
      title: "Event Routing and Message Brokers",
      description: "Managing event flow in distributed systems",
      content: `Event routing is the process of directing events from producers to consumers based on rules, patterns, or topics. It enables decoupled, scalable systems.

**Event Routing Patterns:**
1. **Topic-based Routing**: Events published to topics, consumers subscribe to topics
2. **Content-based Routing**: Events routed based on content attributes
3. **Conditional Routing**: Events filtered using specific conditions

**Message Brokers (Kafka, RabbitMQ, AWS SQS/SNS):**
- Provide reliable event delivery
- Enable message persistence
- Support publish-subscribe patterns
- Handle consumer group management
- Provide exactly-once or at-least-once delivery guarantees

**Event Routing Best Practices:**
- Use dead-letter queues for failed messages
- Implement idempotent consumers
- Use message schemas for validation
- Monitor event throughput and consumer lag`,
      code: `// Example with AWS SNS/SQS event routing
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

const snsClient = new SNSClient({ region: 'us-east-1' });
const sqsClient = new SQSClient({ region: 'us-east-1' });

// Event Publisher
async function publishEvent(topic, event) {
    const command = new PublishCommand({
        TopicArn: topic,
        Message: JSON.stringify(event),
        MessageAttributes: {
            eventType: {
                DataType: 'String',
                StringValue: event.type
            }
        }
    });
    return await snsClient.send(command);
}

// Event Consumer
async function consumeEvents(queueUrl) {
    const command = new ReceiveMessageCommand({
        QueueUrl: queueUrl,
        MaxNumberOfMessages: 10,
        WaitTimeSeconds: 20,
        VisibilityTimeout: 30
    });
    
    const response = await sqsClient.send(command);
    
    for (const message of response.Messages || []) {
        try {
            const event = JSON.parse(message.Body);
            await processEvent(event);
            await deleteMessage(queueUrl, message.ReceiptHandle);
        } catch (error) {
            // Handle error (DLQ or retry)
            console.error('Failed processing event:', error);
        }
    }
}`,
      language: "javascript",
      codeSamples: [
        {
          label: "Event Routing with AWS",
          code: `import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

const snsClient = new SNSClient({ region: 'us-east-1' });
const sqsClient = new SQSClient({ region: 'us-east-1' });

async function publishEvent(topic, event) {
    const command = new PublishCommand({
        TopicArn: topic,
        Message: JSON.stringify(event),
        MessageAttributes: {
            eventType: {
                DataType: 'String',
                StringValue: event.type
            }
        }
    });
    return await snsClient.send(command);
}

async function consumeEvents(queueUrl) {
    const command = new ReceiveMessageCommand({
        QueueUrl: queueUrl,
        MaxNumberOfMessages: 10,
        WaitTimeSeconds: 20,
        VisibilityTimeout: 30
    });
    
    const response = await sqsClient.send(command);
    
    for (const message of response.Messages || []) {
        try {
            const event = JSON.parse(message.Body);
            await processEvent(event);
            await deleteMessage(queueUrl, message.ReceiptHandle);
        } catch (error) {
            console.error('Failed processing event:', error);
        }
    }
}`,
          language: "javascript",
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: "Explain the event loop and microtasks.",
      answer: `The event loop processes the call stack, then microtasks, then macrotasks.
      V8 (Google's open-source JavaScript engine) executes synchronous code on the call stack

      Async APIs are passed to libuv (Node's event loop library)

      libuv manages timers, I/O, and thread pool operations

      The event loop runs 6 phases repeatedly: timers → pending callbacks → poll → check → close

      Microtasks (Promise callbacks) run between EVERY phase

      The poll phase blocks for I/O when no timers are pending, but microtasks run immediately after each phase regardless of I/O state.`,
      difficulty: "hard",
    },
    {
      question: "Why use streams?",
      answer: `Streams handle large data efficiently without loading everything in memory.`,
      difficulty: "easy",
    },
    {
      question: "How would you scale a Node app?",
      answer: `Use clustering, load balancers, and horizontal scaling.`,
      difficulty: "medium",
    },
    {
      question: "Explain backpressure and how to handle it in Node streams.",
      answer: `Backpressure prevents overwhelming consumers; handle with pipe or pause/resume.`,
      difficulty: "hard",
    },
    {
      question: "When would you use worker threads instead of the event loop?",
      answer: `For CPU-bound tasks that block the main thread.`,
      difficulty: "hard",
    },
    {
      question:
        "How do memory leaks happen with EventEmitter, and how do you prevent them?",
      answer: `Too many listeners without cleanup; remove listeners or use once.`,
      difficulty: "hard",
    },
    {
      question: "What is vertical scaling vs horizontal scaling?",
      answer: `**Vertical Scaling (Scale Up):** Adding more power to existing server (more CPU, RAM, storage). Pros: Simpler, no app changes needed. Cons: Limited by hardware capacity, expensive, single point of failure.

**Horizontal Scaling (Scale Out):** Adding more servers to distribute load. Pros: Unlimited scaling, fault tolerance, cost-effective. Cons: Requires load balancer, stateless design, distributed system complexity.

For Node.js, horizontal scaling is preferred using cluster module, PM2, or container orchestration like Kubernetes.`,
      difficulty: "medium",
    },
    {
      question:
        "What do you do when thousands of users trigger the same event simultaneously (download, click, purchase)?",
      answer: `**Immediate mitigation strategies:**
1. **Queue + Rate Limiting** - Use Bull/RabbitMQ to queue requests, process at sustainable rate
2. **Debouncing/Throttling** - Group identical events, process in batches
3. **Caching** - Cache expensive operation results (Redis/CDN)
4. **Idempotency** - Ensure duplicate events have same effect (unique request IDs)
5. **Horizontal Scaling** - Spin up more instances behind load balancer

**For downloads specifically:**
- Use CDN (CloudFlare, CloudFront) to cache static assets
- Implement range requests (partial downloads)
- Use signed URLs with expiration

**For purchases/transactions:**
- Implement optimistic/pessimistic locking
- Use database row-level locks
- Consider eventual consistency where appropriate

**Monitoring:** Set up alerts in Grafana before traffic hits.`,
      difficulty: "hard",
    },
    {
      question: "What is CloudFlare and how does it help with scaling?",
      answer: `CloudFlare is a CDN, reverse proxy, and security service that sits between users and your origin server.

**Scaling benefits:**
1. **Caching** - Serves static assets from edge locations (reduces origin load by 60-90%)
2. **DDoS Protection** - Absorbs attack traffic before it reaches your servers
3. **Load Balancing** - Distributes traffic across multiple origin servers
4. **Auto-scaling** - Handles traffic spikes without provisioning extra servers
5. **Argo Smart Routing** - Routes traffic through least congested paths
6. **Rate Limiting** - Blocks excessive requests from single IPs

**Typical setup:** User → CloudFlare (cache hit? serve) → Origin Server (Node.js) → Database`,
      difficulty: "medium",
    },
    {
      question:
        "How do you handle heavy database calls that slow down your API?",
      answer: `**Multi-layer approach:**

**1. Query Optimization:**
\`\`\`
fetching all data vs only data we need
sql
-- Before optimization: SELECT * FROM orders WHERE user_id = 123
-- Better Approach: SELECT id, amount, status FROM orders WHERE user_id = 123
-- Use EXPLAIN to analyze query plan
\`\`\`

**2. Indexing:**
- Create indexes on WHERE, JOIN, ORDER BY columns
- Composite indexes for multiple columns
- Avoid over-indexing (slows writes)
- Monitor slow query log

**3. Caching Strategy (Redis/Memcached):**
\`\`\`javascript
// Cache-aside pattern
async function getUserOrders(userId) {
  const cacheKey = \`orders:user:\${userId}\`;
  let data = await redis.get(cacheKey);
  
  if (!data) {
    data = await db.query('SELECT * FROM orders WHERE user_id = ?', userId);
    await redis.setex(cacheKey, 300, JSON.stringify(data));
  }
  return JSON.parse(data);
}
\`\`\`

**4. Read/Write Splitting:**
- Primary node handles writes
- Read replicas handle SELECT queries
- Connection pool with different targets

**5. Query Queues:**
- Push heavy queries to Bull/SQS queue
- Process asynchronously, return results via webhook/websocket`,
      difficulty: "hard",
    },
    {
      question: "Explain query optimization, caching, and indexing in detail.",
      answer: `**Query Optimization:**
- Use SELECT only needed columns (not SELECT *)
- Avoid N+1 queries (use JOIN or DataLoader)
- Use batch operations instead of loops
- pagination with keyset (cursor) not OFFSET for large datasets

**Indexing:**
\`\`\`sql
-- Single column
CREATE INDEX idx_users_email ON users(email);

-- Composite (order matters!)
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Partial (only active users)
CREATE INDEX idx_active_users ON users(email) WHERE status = 'active';
\`\`\`

**Indexing Rules:**
- B-tree: equality and range queries
- Hash: exact matches only
- Full-text: text search
- Covering index: includes all queried columns

**Caching Strategies:**
1. **Cache-Aside:** App manages cache (most common)
2. **Write-Through:** Update cache and DB together
3. **Write-Behind:** Update cache, batch DB writes
4. **Write-Around:** Write to DB, read from cache on miss

**Cache Invalidation:**
- TTL (time-to-live)
- Event-based (publish cache clear on update)
- Versioning (include version in cache key)`,
      difficulty: "hard",
    },
    {
      question: "What are read and write instances (database replication)?",
      answer: `**Read/Write Splitting (Primary-Replica Architecture):**

\`\`\`
          ┌─────────────┐
          │  Load       │
          │  Balancer   │
          └──────┬──────┘
                 │
        ┌────────┴────────┐
        │                 │
     WRITES            READS
        │                 │
    ┌───┴───┐        ┌────┴────┐
    │Primary│ ◄───► │Replica 1│
    │(Master)│      │Replica 2│
    └───────┘       │Replica 3│
                    └─────────┘
\`\`\`

**Implementation in Node.js:**
\`\`\`javascript
const dbConfig = {
  master: { host: 'db-master.example.com' },
  slaves: [
    { host: 'db-slave-1.example.com' },
    { host: 'db-slave-2.example.com' }
  ]
};

async function query(sql, isWrite = false) {
  const connection = isWrite 
    ? dbConfig.master 
    : dbConfig.slaves[Math.random() * dbConfig.slaves.length];
  return connection.execute(sql);
}
\`\`\`

**Benefits:**
- Read throughput scales horizontally
- Write bottleneck avoided
- Backup from replica doesn't affect primary

**Challenges:**
- Replication lag (seconds to minutes)
- Stale reads (eventual consistency)
- Connection management complexity

**Tools:** MySQL Replication, PostgreSQL Streaming Replication, AWS Aurora`,
      difficulty: "medium",
    },
    {
      question: "What are message queues and why use them?",
      answer: `**Message Queues** (Bull, RabbitMQ, AWS SQS, Kafka) buffer and distribute asynchronous tasks.

**Architecture:**
\`\`\`
Producer → Queue → Consumer
(API)     (Redis)   (Worker)
\`\`\`

**Node.js with Bull:**
\`\`\`javascript
const Queue = require('bull');
const emailQueue = new Queue('email sending');

// Producer
app.post('/signup', async (req, res) => {
  await emailQueue.add({ to: req.body.email });
  res.json({ message: 'Email queued' });
});

// Consumer
emailQueue.process(async (job) => {
  await sendEmail(job.data.to);
});
\`\`\`

**Use cases:**
1. **Email notifications** - Don't block API response
2. **Image/video processing** - Heavy CPU tasks
3. **Rate limiting external APIs** - Buffer requests
4. **Order processing** - Ensure delivery
5. **Webhook delivery** - Retry on failure

**Benefits:**
- Decouple producers from consumers
- Handle traffic spikes (buffer)
- Retry failed jobs automatically
- Priority queues for urgent tasks
- Job persistence (survives restarts)`,
      difficulty: "medium",
    },
    {
      question: "What is Kubernetes and how does it help with scaling?",
      answer: `**Kubernetes (K8s)** orchestrates containerized applications across a cluster of machines.

**Core concepts for scaling:**
- **Pod** - Smallest deployable unit (1+ containers)
- **Deployment** - Manages pod replicas
- **Service** - Load balancer for pods
- **Horizontal Pod Autoscaler (HPA)** - Auto-scales based on CPU/memory

**Node.js deployment example:**
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nodejs-app
spec:
  replicas: 3  # Start with 3 pods
  template:
    spec:
      containers:
      - name: app
        image: myapp:latest
        resources:
          requests:
            cpu: "250m"
            memory: "512Mi"
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: nodejs-hpa
spec:
  scaleTargetRef:
    kind: Deployment
    name: nodejs-app
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

**Benefits:**
- Auto-scaling based on metrics
- Self-healing (restarts failed pods)
- Rolling updates (zero downtime)
- Service discovery & load balancing
- Multi-cloud portability`,
      difficulty: "hard",
    },
    {
      question: "What is a load balancer and what algorithms does it use?",
      answer: `**Load Balancer** distributes incoming traffic across multiple backend servers.

**Types:**
1. **Layer 4 (Transport)** - Distributes based on IP/port (faster, less intelligence)
2. **Layer 7 (Application)** - Routes based on HTTP headers, cookies, URL (more features)

**Popular Algorithms:**

| Algorithm | How it works | When to use |
|-----------|--------------|-------------|
| Round Robin | Cycles through servers sequentially | Similar server capacity |
| Least Connections | Sends to server with fewest active connections | Long-lived connections (WebSockets) |
| IP Hash | Same client → same server (sticky sessions) | Session affinity needed |
| Weighted Round Robin | Servers get different weights | Unequal server capacities |
| Least Response Time | Fastest response time wins | Performance-sensitive apps |

**Implementation examples:**
- **Software:** Nginx, HAProxy, Traefik
- **Cloud:** AWS ALB/ELB, GCP Cloud Load Balancing
- **Kubernetes:** Ingress Controller

**Nginx config:**
\`\`\`nginx
upstream backend {
  least_conn;  # or round_robin, ip_hash
  server app1:3000 weight=3;
  server app2:3000 weight=1;
  server app3:3000 backup;
}

server {
  listen 80;
  location / {
    proxy_pass http://backend;
  }
}
\`\`\``,
      difficulty: "medium",
    },
    {
      question: "What is a CDN and how does it improve performance?",
      answer: `**CDN (Content Delivery Network)** caches static assets on edge servers worldwide.

**How it works:**
\`\`\`
User in Tokyo → Edge Server (Tokyo) → Origin (US)
              ↑ Cache hit         ↑ Cache miss
\`\`\`

**What to cache:**
- Images, CSS, JS, fonts
- Video/audio files
- API responses (with Cache-Control headers)
- HTML (short TTL)

**Node.js cache headers:**
\`\`\`javascript
// Static assets - long cache
app.use('/static', express.static('public', {
  maxAge: '1y',
  immutable: true
}));

// Dynamic content - short cache
app.get('/api/prices', (req, res) => {
  res.set('Cache-Control', 'public, max-age=60');
  res.json({ price: 100 });
});

// Never cache user-specific data
app.get('/api/profile', (req, res) => {
  res.set('Cache-Control', 'private, no-store');
  res.json({ user: req.user });
});
\`\`\`

**Performance impact:**
- 60-90% bandwidth reduction
- 50-80% latency reduction
- Origin server load reduced by 90%+

**Popular CDNs:** CloudFlare, AWS CloudFront, Fastly, Akamai`,
      difficulty: "medium",
    },
    {
      question: "Redis vs Memcached - when to use which?",
      answer: `**Comparison Table:**

| Feature | Redis | Memcached |
|---------|-------|-----------|
| Data structures | Strings, hashes, lists, sets, sorted sets, bitmaps, hyperloglogs, streams | Only strings (key-value) |
| Persistence | RDB snapshots, AOF logs | None (volatile) |
| Replication | Master-slave, Sentinel, Cluster | No native |
| Max key size | 512MB | 1MB |
| Performance | Very fast | Slightly faster (simpler) |
| Language | Complex C code | Simple C code |
| Threading | Single-threaded (6.0+ optional threaded I/O) | Multi-threaded |

**Choose Redis when:**
- Need data structures (counters, leaderboards, queues)
- Need persistence (session store that survives restart)
- Need replication/high availability
- Complex operations (ZRANGE, intersection, unions)

**Choose Memcached when:**
- Simple key-value caching only
- Need maximum raw speed
- Can tolerate cache loss
- Multi-threaded performance needed

**Node.js examples:**
\`\`\`javascript
// Redis - complex operations
await redis.hset('user:123', 'name', 'Alice');
await redis.hincrby('user:123', 'visits', 1);
await redis.zadd('leaderboard', 100, 'Alice');

// Memcached - simple caching
await memcached.set('user:123', userData, 3600);
const user = await memcached.get('user:123');
\`\`\``,
      difficulty: "medium",
    },
    {
      question: "What is Grafana and why use it before production?",
      answer: `**Grafana** is an open-source analytics and monitoring platform that visualizes metrics from Prometheus, InfluxDB, Elasticsearch, etc.

**Why Grafana BEFORE production:**

1. **Establish Baselines** - Know normal behavior to detect anomalies
2. **Set Alerting Rules** - Configure thresholds before incidents happen
3. **Identify Bottlenecks** - Find slow queries, high memory usage early
4. **Capacity Planning** - Predict when you'll need to scale
5. **Load Testing Validation** - Verify scaling works under stress

**Essential dashboards for Node.js:**

\`\`\`javascript
// Metrics to expose from your Node app
const promClient = require('prom-client');
const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'status_code']
});

const activeConnections = new promClient.Gauge({
  name: 'node_active_connections',
  help: 'Active connection count'
});

// Track event loop lag
let lastCheck = Date.now();
setInterval(() => {
  const lag = Date.now() - lastCheck;
  eventLoopLag.set(lag);
  lastCheck = Date.now();
}, 500);
\`\`\`

**Key metrics to monitor:**
- **Node.js:** Event loop lag, memory usage, GC stats
- **Database:** Query duration, connection pool usage
- **Redis:** Hit/miss ratio, memory usage
- **System:** CPU, memory, disk I/O
- **Business:** Request rate, error rate, latency (p95, p99)

**Alerting examples:**
- P95 latency > 1s for 5 minutes
- Error rate > 1% for 2 minutes
- Event loop lag > 100ms
- Available memory < 20%`,
      difficulty: "hard",
    },
    {
      question: "What is connection pooling and why is it important?",
      answer: `**Connection Pooling** maintains a cache of database connections that can be reused.

**Problem without pooling:**
\`\`\`javascript
// BAD - creates new connection for every request
app.get('/users', async (req, res) => {
  const connection = await mysql.createConnection(config);
  const users = await connection.query('SELECT * FROM users');
  await connection.close(); // Expensive: TCP handshake + auth
  res.json(users);
});
\`\`\`

**Solution with pooling:**
\`\`\`javascript
// GOOD - connections are reused
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'app',
  connectionLimit: 10,    // Max connections
  queueLimit: 100,        // Max queued requests
  waitForConnections: true
});

app.get('/users', async (req, res) => {
  const connection = await pool.getConnection();
  try {
    const users = await connection.query('SELECT * FROM users');
    res.json(users);
  } finally {
    connection.release(); // Returns to pool, doesn't close
  }
});
\`\`\`

**Benefits:**
- **Reduces overhead** - No TCP handshake per request (1-2ms saved)
- **Prevents connection exhaustion** - Limits max connections
- **Manages queueing** - Requests wait for available connection
- **Health checks** - Pool verifies connections before giving them out

**Pool sizing formula:**
\`\`\`
pool_size = (core_count * 2) + effective_spindle_count
// Modern apps: usually 10-50 connections per instance
\`\`\`

**Monitoring pool health:**
\`\`\`javascript
setInterval(() => {
  console.log({
    total: pool._allConnections.length,
    free: pool._freeConnections.length,
    used: pool._acquiringConnections.length,
    queue: pool._connectionQueue.length
  });
}, 5000);
\`\`\``,
      difficulty: "medium",
    },
    {
      question: "What is the difference between REST API and GraphQL?",
      answer: `REST and GraphQL are both API architectures but with different approaches:

**REST API:**
- Uses HTTP methods (GET, POST, PUT, DELETE) for operations
- Returns fixed data structures from endpoints
- Multiple endpoints for different resources
- Built-in HTTP caching
- Simpler to implement and understand

**GraphQL:**
- Single endpoint for all operations
- Clients specify exactly what data they need
- Reduces over-fetching and under-fetching
- Strongly typed schema
- Real-time subscriptions support
- More complex to implement and cache

**When to use which:**
- REST: Simple CRUD operations, public APIs, caching is important
- GraphQL: Complex data requirements, mobile apps, multiple client types, rapid iteration needed`,
      difficulty: "medium",
    },
    {
      question: "What is OpenAPI and why is it important for API development?",
      answer: `OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable format (JSON or YAML).

**Key Benefits:**
1. **Automatic Documentation**: Generates interactive API documentation (Swagger UI)
2. **Client SDK Generation**: Automatically creates client libraries in multiple languages
3. **API Contract Testing**: Ensures implementations match the specification
4. **Design-First Development**: Enables API design before implementation
5. **Integration**: Works with API gateways, testing tools, and validation tools

**Core Components:**
- Paths (endpoints with HTTP methods)
- Parameters (query, path, header, body)
- Schemas (data models using JSON Schema)
- Security (authentication and authorization)
- Responses (status codes and response structures)`,
      difficulty: "medium",
    },
    {
      question:
        "What is the purpose of webhooks and how do they differ from traditional APIs?",
      answer: `Webhooks are user-defined HTTP callbacks that are triggered by specific events, allowing real-time communication between applications.

**Key Differences from Traditional APIs:**

**Webhooks:**
- Event-driven: Server sends data when events occur
- Push-based: Data is pushed to the receiving endpoint
- Asynchronous: Immediate notification of events
- Requires public endpoint from the receiver
- Less control over data timing

**Traditional APIs:**
- Request-response: Client requests data when needed
- Pull-based: Client fetches data as needed
- Synchronous: Immediate response to requests
- Client initiates communication
- Full control over when data is fetched

**Common Webhook Use Cases:**
- Payment processing notifications
- GitHub webhooks for repository events
- Stripe webhooks for payment events
- Slack integration notifications
- Email delivery status updates`,
      difficulty: "medium",
    },
    {
      question:
        "What are the key differences between FastAPI and Express.js for building APIs?",
      answer: `FastAPI and Express.js are both popular for building APIs but have different strengths:

**FastAPI (Python):**
- Built-in OpenAPI documentation
- Automatic validation with Pydantic
- Async/await support natively
- Type hints for better code quality
- Performance similar to Node.js and Go
- Dependency injection system
- Built-in security features (OAuth, JWT)

**Express.js (Node.js):**
- Minimalist and unopinionated
- Huge ecosystem of middleware
- JavaScript/TypeScript support
- Wider community adoption
- More flexible architecture
- Simpler learning curve
- Better for real-time applications (with Socket.IO)

**When to choose:**
- FastAPI: Python ecosystem, automatic docs, type safety, enterprise APIs
- Express.js: JavaScript ecosystem, flexibility, real-time apps, microservices`,
      difficulty: "medium",
    },
    {
      question: "What are the best practices for designing a public API?",
      answer: `Public API design requires careful consideration for developer experience and scalability:

**Versioning:**
- Use version in URL (e.g., /api/v1/users) or headers
- Maintain backward compatibility
- Deprecate old versions with clear timeline

**Authentication & Security:**
- Use OAuth 2.0 or API keys
- Implement rate limiting (e.g., 1000 requests/hour)
- Always use HTTPS
- Validate all input data
- Implement proper error handling

**Documentation:**
- Provide comprehensive OpenAPI documentation
- Include code examples for common languages
- Maintain a developer portal/playground
- Document rate limits and errors

**Developer Experience:**
- Use consistent naming conventions
- Provide predictable error responses
- Include pagination for list endpoints
- Use standard HTTP status codes
- Offer SDKs for popular languages

**Monitoring & Analytics:**
- Log API usage and errors
- Monitor performance and availability
- Collect feedback from developers
- Track deprecated endpoints usage`,
      difficulty: "hard",
    },
    {
      question:
        "What are connectivity APIs and how are they used in modern applications?",
      answer: `Connectivity APIs facilitate network connections, device communication, and data exchange between systems:

**Types of Connectivity APIs:**
1. **Network APIs**: Managing network connections, bandwidth, and routing
2. **Device APIs**: Connecting and controlling IoT devices
3. **Telecommunications APIs**: SMS, voice, and video communications
4. **Bluetooth/WiFi APIs**: Device discovery and pairing
5. **WebSocket APIs**: Real-time bidirectional communication

**Common Use Cases:**
- **IoT Platforms**: Connecting sensors and actuators
- **Telecommunications**: Enabling voice/video calls in apps
- **Smart Home**: Controlling lights, thermostats, and devices
- **Gaming**: Real-time multiplayer connections
- **Edge Computing**: Device-to-cloud communication

**Implementation Considerations:**
- Handle unreliable networks gracefully
- Implement reconnect logic
- Use WebSocket for persistent connections
- Consider offline support with local caching
- Monitor connection status and quality`,
      difficulty: "hard",
    },
    {
      question:
        "Explain event routing and how it works in event-driven architectures.",
      answer: `Event routing is the process of directing events from sources to destinations based on rules, patterns, or content.

**Event Routing Models:**

1. **Topic-based Routing:**
   - Events published to topics
   - Consumers subscribe to topics
   - All subscribers receive all messages in topic
   - Example: Kafka topics, SNS topics

2. **Content-based Routing:**
   - Events routed based on content attributes
   - Rules evaluate event payload
   - Example: RabbitMQ headers exchange, AWS EventBridge

3. **Conditional Routing:**
   - Events filtered using specific conditions
   - Can be based on event type, source, or data
   - Example: AWS EventBridge rules

**Key Components:**
- **Message Broker**: Mediates communication (Kafka, RabbitMQ)
- **Event Producer**: Generates events
- **Event Consumer**: Processes events
- **Routing Rules**: Define how events are distributed

**Benefits:**
- Decoupled components
- Scalable architecture
- Real-time processing
- Fault tolerance
- Event replay capability`,
      difficulty: "hard",
    },
    {
      question:
        "What are demand APIs and how do they handle real-time resource allocation?",
      answer: `Demand APIs are designed to handle real-time demand forecasting, dynamic pricing, and resource allocation based on current patterns:

**Core Functions:**
1. **Real-time Demand Monitoring**: Track current usage patterns
2. **Predictive Analytics**: Forecast future demand using ML/AI
3. **Dynamic Pricing**: Adjust prices based on demand
4. **Resource Allocation**: Scale resources based on demand
5. **Load Balancing**: Distribute requests across resources

**Implementation Strategies:**
- Use time-series databases for demand data
- Implement auto-scaling rules
- Cache frequently accessed resources
- Use edge computing for latency-sensitive operations
- Implement circuit breakers for overload protection

**Common Use Cases:**
- **Ride-Sharing**: Dynamic pricing based on rider demand
- **Cloud Computing**: Auto-scaling based on resource usage
- **E-commerce**: Inventory management during sales
- **Energy Grids**: Load balancing during peak hours
- **Content Delivery**: CDN scaling based on traffic

**Technical Considerations:**
- Handle traffic spikes gracefully
- Implement monitoring and alerting
- Use predictive models for proactive scaling
- Consider cost optimization
- Plan for disaster recovery`,
      difficulty: "hard",
    },
    {
      question:
        "How do you implement idempotency in REST APIs and why is it important?",
      answer: `Idempotency ensures that multiple identical API requests produce the same result as a single request.

**Why Idempotency is Important:**
- Prevents duplicate operations (e.g., double charging)
- Handles network retries safely
- Provides reliable operations in distributed systems
- Improves API resilience

**Implementation Methods:**

1. **Idempotency Key Header:**
   \`\`\`javascript
   POST /api/orders
   Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
   \`\`\`
   - Client generates unique key for each operation
   - Server stores key-result mapping
   - Same key returns cached result

2. **Natural Idempotency:**
   - Using semantic operations (e.g., DELETE existing resource)
   - Updating specific fields (e.g., PUT with full resource)
   - Using conditional requests (e.g., ETags)

3. **Database-Based:**
   - Use database constraints (unique keys)
   - Implement versioning (optimistic locking)
   - Use distributed locks for critical operations

**Best Practices:**
- Store idempotency keys with expiration
- Return stored result for duplicate requests
- Include idempotency in API documentation
- Consider performance impact of key storage`,
      difficulty: "hard",
    },
  ] as InterviewQuestion[],
};
