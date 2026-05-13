import type { InterviewQuestion } from '../data/modules';

export interface TechnicalTerm {
  term: string;
  definition: string;
  category: string;
  importance: 'high' | 'medium' | 'low';
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
      term: 'Event Loop',
      definition: 'Manages asynchronous callbacks and I/O. V8 executes sync code, libuv provides the loop with 6 phases (timers → poll → check). Microtasks run between every phase.',
      category: 'Runtime',
      importance: 'high',
    },
    {
      term: 'Streams',
      definition: 'Process data in chunks to reduce memory usage.',
      category: 'I/O',
      importance: 'high',
    },
    {
      term: 'Clusters',
      definition: 'Run multiple worker processes to use multi-core CPUs.',
      category: 'Scaling',
      importance: 'medium',
    },
    {
      term: 'Buffers',
      definition: 'Binary data representation in Node.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'libuv',
      definition: 'C library providing the event loop and async I/O.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Worker Threads',
      definition: 'Multi-threading for CPU-bound tasks.',
      category: 'Scaling',
      importance: 'medium',
    },
    {
      term: 'Backpressure',
      definition: 'Managing flow control in streams.',
      category: 'I/O',
      importance: 'high',
    },
    {
      term: 'EventEmitter',
      definition: 'Base pattern for async event handling in Node.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'Process Signals',
      definition: 'OS-level signals for process control.',
      category: 'Runtime',
      importance: 'low',
    },
    {
      term: 'Connection Pooling',
      definition: 'Reusing database connections to reduce overhead and latency.',
      category: 'Database',
      importance: 'high',
    },
    {
      term: 'CDN',
      definition: 'Content Delivery Network - geographically distributed servers for fast content delivery.',
      category: 'Infrastructure',
      importance: 'high',
    },
    {
      term: 'Load Balancer',
      definition: 'Distributes incoming traffic across multiple servers to prevent overload.',
      category: 'Infrastructure',
      importance: 'high',
    },
    {
      term: 'Redis',
      definition: 'In-memory data store used for caching, session management, and real-time apps.',
      category: 'Caching',
      importance: 'high',
    },
    {
      term: 'Memcached',
      definition: 'High-performance distributed memory caching system.',
      category: 'Caching',
      importance: 'medium',
    },
    {
      term: 'Kubernetes',
      definition: 'Container orchestration platform for deploying, scaling, and managing containers.',
      category: 'DevOps',
      importance: 'high',
    },
    {
      term: 'Queue',
      definition: 'Message broker for async task processing (RabbitMQ, Bull, SQS).',
      category: 'Architecture',
      importance: 'high',
    },
    {
      term: 'CloudFlare',
      definition: 'CDN, DDoS protection, and reverse proxy service.',
      category: 'Infrastructure',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Async I/O',
      description: 'Non-blocking architecture',
      content: `Understand callbacks, promises, and async/await for I/O.`,
      code: `import fs from "fs/promises";

async function readConfig() {
  const content = await fs.readFile("config.json", "utf-8");
  return JSON.parse(content);
}`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Async File Read',
          code: `import fs from "fs/promises";

async function readConfig() {
  const content = await fs.readFile("config.json", "utf-8");
  return JSON.parse(content);
}`,
          language: 'javascript',
        },
        {
          label: 'Parallel I/O',
          code: `const [a, b] = await Promise.all([
  fs.readFile("a.txt", "utf-8"),
  fs.readFile("b.txt", "utf-8"),
]);`,
          language: 'javascript',
        },
      ],
    },
    {
      title: 'Streams & Pipes',
      description: 'Efficient data processing',
      content: `Use readable and writable streams for large data.`,
      code: `import fs from "fs";

fs.createReadStream("input.log")
  .pipe(fs.createWriteStream("output.log"));`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Pipe',
          code: `import fs from "fs";

fs.createReadStream("input.log")
  .pipe(fs.createWriteStream("output.log"));`,
          language: 'javascript',
        },
        {
          label: 'Pipeline',
          code: `import { pipeline } from "stream/promises";

await pipeline(
  fs.createReadStream("in.log"),
  fs.createWriteStream("out.log")
);`,
          language: 'javascript',
        },
      ],
    },
    {
      title: 'Scaling',
      description: 'Processes and workers',
      content: `Use clustering or process managers for scale.`,
      code: `import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) cluster.fork();
}`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Cluster',
          code: `import cluster from "cluster";
import os from "os";

if (cluster.isPrimary) {
  const cpuCount = os.cpus().length;
  for (let i = 0; i < cpuCount; i++) cluster.fork();
}`,
          language: 'javascript',
        },
        {
          label: 'Worker Threads',
          code: `import { Worker } from "worker_threads";

const worker = new Worker("./job.js");
worker.on("message", (msg) => console.log(msg));`,
          language: 'javascript',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'Explain the event loop and microtasks.',
      answer: `The event loop processes the call stack, then microtasks, then macrotasks.
      V8 (Google's open-source JavaScript engine) executes synchronous code on the call stack

      Async APIs are passed to libuv (Node's event loop library)

      libuv manages timers, I/O, and thread pool operations

      The event loop runs 6 phases repeatedly: timers → pending callbacks → poll → check → close

      Microtasks (Promise callbacks) run between EVERY phase

      The poll phase blocks for I/O when no timers are pending, but microtasks run immediately after each phase regardless of I/O state.`,
      difficulty: 'hard',
    },
    {
      question: 'Why use streams?',
      answer: `Streams handle large data efficiently without loading everything in memory.`,
      difficulty: 'easy',
    },
    {
      question: 'How would you scale a Node app?',
      answer: `Use clustering, load balancers, and horizontal scaling.`,
      difficulty: 'medium',
    },
    {
      question: 'Explain backpressure and how to handle it in Node streams.',
      answer: `Backpressure prevents overwhelming consumers; handle with pipe or pause/resume.`,
      difficulty: 'hard',
    },
    {
      question: 'When would you use worker threads instead of the event loop?',
      answer: `For CPU-bound tasks that block the main thread.`,
      difficulty: 'hard',
    },
    {
      question: 'How do memory leaks happen with EventEmitter, and how do you prevent them?',
      answer: `Too many listeners without cleanup; remove listeners or use once.`,
      difficulty: 'hard',
    },
    {
      question: 'What is vertical scaling vs horizontal scaling?',
      answer: `**Vertical Scaling (Scale Up):** Adding more power to existing server (more CPU, RAM, storage). Pros: Simpler, no app changes needed. Cons: Limited by hardware capacity, expensive, single point of failure.

**Horizontal Scaling (Scale Out):** Adding more servers to distribute load. Pros: Unlimited scaling, fault tolerance, cost-effective. Cons: Requires load balancer, stateless design, distributed system complexity.

For Node.js, horizontal scaling is preferred using cluster module, PM2, or container orchestration like Kubernetes.`,
      difficulty: 'medium',
    },
    {
      question: 'What do you do when thousands of users trigger the same event simultaneously (download, click, purchase)?',
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
      difficulty: 'hard',
    },
    {
      question: 'What is CloudFlare and how does it help with scaling?',
      answer: `CloudFlare is a CDN, reverse proxy, and security service that sits between users and your origin server.

**Scaling benefits:**
1. **Caching** - Serves static assets from edge locations (reduces origin load by 60-90%)
2. **DDoS Protection** - Absorbs attack traffic before it reaches your servers
3. **Load Balancing** - Distributes traffic across multiple origin servers
4. **Auto-scaling** - Handles traffic spikes without provisioning extra servers
5. **Argo Smart Routing** - Routes traffic through least congested paths
6. **Rate Limiting** - Blocks excessive requests from single IPs

**Typical setup:** User → CloudFlare (cache hit? serve) → Origin Server (Node.js) → Database`,
      difficulty: 'medium',
    },
    {
      question: 'How do you handle heavy database calls that slow down your API?',
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
      difficulty: 'hard',
    },
    {
      question: 'Explain query optimization, caching, and indexing in detail.',
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
      difficulty: 'hard',
    },
    {
      question: 'What are read and write instances (database replication)?',
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
      difficulty: 'medium',
    },
    {
      question: 'What are message queues and why use them?',
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
      difficulty: 'medium',
    },
    {
      question: 'What is Kubernetes and how does it help with scaling?',
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
      difficulty: 'hard',
    },
    {
      question: 'What is a load balancer and what algorithms does it use?',
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
      difficulty: 'medium',
    },
    {
      question: 'What is a CDN and how does it improve performance?',
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
      difficulty: 'medium',
    },
    {
      question: 'Redis vs Memcached - when to use which?',
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
      difficulty: 'medium',
    },
    {
      question: 'What is Grafana and why use it before production?',
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
      difficulty: 'hard',
    },
    {
      question: 'What is connection pooling and why is it important?',
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
      difficulty: 'medium',
    },
  ] as InterviewQuestion[],
};