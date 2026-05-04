import type { InterviewQuestion } from '../data/modules';
import type { Difficulty } from '../lib/rank';

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
  difficulty?: Difficulty;
  code?: string;
  language?: string;
  codeSamples?: {
    code: string;
    language?: string;
    filename?: string;
    label?: string;
  }[];
}

export const webFundamentalsData: {
  technicalTerms: TechnicalTerm[];
  topics: Topic[];
  questions: InterviewQuestion[];
} = {
  technicalTerms: [
    {
      term: 'HTTP Methods',
      definition:
        'Verbs that describe what you want to do with a resource (e.g., GET, POST, PUT, PATCH, DELETE). They impact caching, idempotency, and how intermediaries treat requests.',
      category: 'HTTP',
      importance: 'high',
    },
    {
      term: 'HTTP Status Codes',
      definition:
        '3-digit codes that describe the outcome of a request (2xx success, 3xx redirects, 4xx client errors, 5xx server errors). Useful for debugging and API design.',
      category: 'HTTP',
      importance: 'high',
    },
    {
      term: 'CORS (Cross-Origin Resource Sharing)',
      definition:
        'Browser security mechanism that controls whether a web page can call APIs from a different origin. Enforced by browsers and driven by response headers.',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'Preflight Request',
      definition:
        'An OPTIONS request the browser sends before some cross-origin requests to check permissions (methods/headers). If the server does not allow it, the real request is blocked.',
      category: 'CORS',
      importance: 'high',
    },
    {
      term: 'OAuth 2.0',
      definition:
        'Authorization framework for delegated access (scopes, access tokens). It is not authentication by itself.',
      category: 'Auth',
      importance: 'high',
    },
    {
      term: 'OIDC (OpenID Connect)',
      definition:
        'Authentication layer on top of OAuth 2.0 that standardizes identity (ID token, userinfo).',
      category: 'Auth',
      importance: 'high',
    },
    {
      term: 'JWT (JSON Web Token)',
      definition:
        'A compact token format (header.payload.signature) often used as a bearer access token. Typically stateless, but revocation/rotation must be designed.',
      category: 'Auth',
      importance: 'high',
    },
    {
      term: 'Session vs JWT',
      definition:
        'Sessions usually store auth state server-side (cookie holds session id). JWT is commonly self-contained and validated by signature. Tradeoffs include revocation, storage, and complexity.',
      category: 'Auth',
      importance: 'high',
    },
    {
      term: 'Cookies',
      definition:
        'Small pieces of data stored by the browser and sent with requests. Important flags: HttpOnly, Secure, SameSite. Used for sessions and CSRF mitigation patterns.',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'Hashing vs Encryption',
      definition:
        'Hashing is one-way (good for passwords with salt). Encryption is reversible (protects data confidentiality).',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'Salting',
      definition:
        'Adding a per-password random value before hashing to prevent rainbow table attacks and make identical passwords hash differently.',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'WebSockets',
      definition:
        'A persistent, bidirectional connection over TCP established via an HTTP upgrade. Used for realtime updates (chat, dashboards).',
      category: 'Realtime',
      importance: 'high',
    },
    {
      term: 'Socket.IO',
      definition:
        'A higher-level realtime library (not “just WebSockets”) that can provide fallbacks, rooms, and reconnection semantics depending on environment.',
      category: 'Realtime',
      importance: 'medium',
    },
    {
      term: 'Rate Limiting',
      definition:
        'Restricting request volume per client/key (token bucket, leaky bucket, fixed window). Helps protect APIs and control costs.',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'DDoS Protection',
      definition:
        'Strategies to absorb/mitigate volumetric and application-layer attacks (WAF, rate limiting, bot detection, caching, upstream protection).',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'SQL vs NoSQL',
      definition:
        'SQL databases provide relational modeling and strong transactional guarantees; NoSQL systems trade strict relations/joins for flexible schemas and scalable patterns depending on the store type.',
      category: 'Databases',
      importance: 'high',
    },
    {
      term: 'ACID Transactions',
      definition:
        'Atomicity, Consistency, Isolation, Durability: properties of transactions that help keep data correct under failures and concurrency.',
      category: 'Databases',
      importance: 'high',
    },
    {
      term: 'Redis',
      definition:
        'In-memory data store used for caching, rate limiting counters, queues, pub/sub, and ephemeral state. Persistence and eviction need careful configuration.',
      category: 'Storage',
      importance: 'medium',
    },
    {
      term: 'Indexing',
      definition:
        'Data structures that speed up reads by trading extra storage and write cost. Common types: B-tree, hash, composite, partial, and covering indexes.',
      category: 'Databases',
      importance: 'high',
    },
    {
      term: 'Normalization vs Denormalization',
      definition:
        'Normalization reduces redundancy and improves integrity; denormalization can improve read performance at the cost of write complexity and potential inconsistency.',
      category: 'Databases',
      importance: 'high',
    },
    {
      term: 'Partitioning vs Sharding',
      definition:
        'Partitioning splits data within a database instance; sharding splits data across multiple nodes. Both require careful key choice and query patterns.',
      category: 'Databases',
      importance: 'high',
    },
    {
      term: 'Async vs Sync Operations',
      definition:
        'Synchronous blocks the current flow until completion; asynchronous allows concurrency and better utilization, but adds ordering/error-handling complexity.',
      category: 'Concurrency',
      importance: 'medium',
    },
  ],

  topics: [
    {
      title: 'CORS Errors (Why They Happen)',
      description: 'Root causes when frontend and API origins differ',
      difficulty: 'hard',
      content: `CORS is a browser-enforced security policy. You will see CORS errors when your frontend origin differs from your API origin (different scheme/host/port) and the server response is missing the required CORS headers.

Common causes:
- Backend does not set Access-Control-Allow-Origin for the requesting origin
- Preflight OPTIONS request is blocked or not handled (returns 404/500 or missing headers)
- CDN / load balancer / proxy strips headers (CloudFront, ALB, NGINX misconfig)
- Credentials mode mismatch (cookies/Authorization + allow-origin='*' will not work with credentials)

Debug checklist:
1) Confirm the actual request Origin header from the browser
2) Inspect the preflight OPTIONS request in the Network tab
3) Verify the response includes allow-origin, allow-methods, allow-headers, and allow-credentials (when needed)
4) If using a proxy/CDN, confirm headers are forwarded and cached correctly`,
    },
    {
      title: 'Preflight Requests & Permissions',
      description: 'OPTIONS requests and what triggers them',
      difficulty: 'medium',
      content: `A preflight is an OPTIONS request the browser sends before some cross-origin requests. It typically happens when:
- Method is not simple (PUT/PATCH/DELETE)
- You send custom headers (e.g., Authorization)
- Content-Type is not one of the “simple” types

If preflight fails, your actual request never reaches the server code you expect.

Fix strategy:
- Handle OPTIONS at the edge (NGINX/ALB/app) and respond with correct CORS headers
- Keep allowed headers/methods in sync with what your frontend sends
- When using cookies, enable credentials and set explicit origin (not '*')`,
    },
    {
      title: 'CDN / Load Balancer CORS Gotchas',
      description: 'CloudFront, ALB, NGINX header forwarding and caching',
      difficulty: 'hard',
      content: `When deploying behind a CDN or load balancer, CORS can break even if the app server is correct:
- CDN may cache a response with one allow-origin and serve it to another origin
- Proxy may drop Access-Control-* headers
- You may need to forward the Origin header and vary cache by Origin
- ALB/NGINX rules might not route OPTIONS correctly

If you cannot verify in the deployment environment, ask DevOps to confirm:
- Origin header forwarding
- Response headers preserved
- Caching/Vary configuration
- OPTIONS routing and timeouts`,
    },
    {
      title: 'Browser Cache Pitfalls',
      description: 'When “it should work” but doesn’t',
      difficulty: 'easy',
      content: `After updating CORS config, the browser or CDN cache can still serve stale responses. Try:
- Hard refresh
- Disable cache in DevTools
- Clear site data
- Confirm response headers updated in Network tab`,
    },
    {
      title: 'Authentication: OAuth, OIDC, JWT, Sessions, Cookies',
      description: 'What to use and why',
      difficulty: 'hard',
      content: `Key distinctions:
- OAuth 2.0 is authorization (access to APIs)
- OIDC adds authentication (identity) on top of OAuth
- Sessions typically keep state server-side; cookie stores a session identifier
- JWTs are signed tokens; can be stateless, but revocation and rotation must be designed

Interview-ready tradeoffs:
- Sessions: easy revocation, server storage, works well with cookies
- JWT: easier distribution across services, but harder revocation; risk if stored insecurely

Security basics:
- Prefer HttpOnly + Secure cookies for session identifiers
- Use SameSite appropriately; handle CSRF for cookie-based auth`,
    },
    {
      title: 'Passwords: Hashing, Salting, Modern Standards',
      description: 'Do not encrypt passwords',
      difficulty: 'medium',
      content: `Passwords should be hashed with a slow password hashing algorithm and a unique salt per password.

Conceptually:
- Hashing is one-way; encryption is reversible
- Salts prevent precomputed attacks and duplicate hash fingerprints

In interviews: say “use a modern password hashing function with per-user salts and proper parameters” and mention rotation and breach response.`,
    },
    {
      title: 'Realtime: WebSockets vs Socket.IO',
      description: 'Choosing the right realtime approach',
      difficulty: 'medium',
      content: `WebSockets provide a persistent bidirectional channel after an HTTP upgrade.

Socket.IO is a framework that can add:
- automatic reconnection
- rooms/namespaces
- fallbacks depending on environment

Operational gotchas:
- Ensure proxies support WebSocket upgrade
- Configure idle timeouts (LB/CDN) for long-lived connections
- Consider backpressure and message fanout strategy`,
    },
    {
      title: 'Rate Limiting & DDoS Protection',
      description: 'Protecting APIs and services',
      difficulty: 'hard',
      content: `Rate limiting is usually done per key/IP/user and can be implemented at:
- Edge (CDN/WAF)
- Load balancer / ingress (NGINX)
- App layer (per route)

DDoS protection typically combines:
- WAF rules + bot management
- caching
- upstream DDoS mitigation service
- layered limits and fast failure`,
    },
    {
      title: 'Databases: SQL vs NoSQL + Tradeoffs',
      description: 'Modeling and scalability considerations',
      difficulty: 'hard',
      content: `SQL:
- Relational modeling, joins, mature transactions
- Great for strong consistency and complex querying

NoSQL:
- Different categories: document, key-value, wide-column, graph
- Often optimized for horizontal scaling and flexible schemas

Tradeoffs depend on query patterns, consistency requirements, and operational complexity.`,
    },
    {
      title: 'Transactions, ACID, and Isolation',
      description: 'Correctness under concurrency',
      difficulty: 'hard',
      content: `ACID:
- Atomicity: all-or-nothing
- Consistency: invariants preserved
- Isolation: concurrent transactions do not corrupt results
- Durability: committed data survives failures

Isolation levels matter (dirty reads, non-repeatable reads, phantom reads).`,
    },
    {
      title: 'Indexing Strategies & Query Optimization',
      description: 'Make queries fast without guessing',
      difficulty: 'hard',
      content: `Index choices:
- B-tree indexes for range queries and sorting
- Composite indexes when filtering on multiple columns
- Covering indexes to avoid table lookups

Optimization process:
1) Understand the query and access pattern
2) Use the database’s explain plan
3) Add/adjust indexes
4) Validate performance and write overhead`,
    },
    {
      title: 'Normalization vs Denormalization',
      description: 'Correctness vs performance',
      difficulty: 'medium',
      content: `Normalization reduces duplication and update anomalies.
Denormalization speeds reads (fewer joins, precomputed views) but increases write complexity and consistency risks.`,
    },
    {
      title: 'Partitioning & Sharding',
      description: 'Scaling data beyond one box',
      difficulty: 'hard',
      content: `Partitioning splits data by ranges/hashes within a DB to improve performance/management.
Sharding splits data across multiple nodes. Requires:
- shard key choice
- query routing
- cross-shard operations strategy
- rebalancing plan`,
    },
    {
      title: 'Async vs Sync Operations',
      description: 'Throughput, latency, and correctness',
      difficulty: 'easy',
      content: `Async improves concurrency and throughput but introduces:
- ordering concerns
- retries/idempotency
- error propagation complexity

Sync is simpler but can block threads/resources under load.`,
    },
  ],

  questions: [
    {
      difficulty: 'hard',
      question: 'Why do CORS errors happen, and why do they only show up in browsers?',
      answer:
        'CORS is enforced by browsers to prevent a webpage from making unauthorized cross-origin requests. The server may still receive the request, but the browser blocks access to the response unless the server includes the required Access-Control-* headers. Non-browser clients (curl, Postman) do not enforce CORS.',
    },
    {
      difficulty: 'hard',
      question: 'What triggers a CORS preflight request?',
      answer:
        'Preflight (OPTIONS) is triggered for requests that are not “simple”, such as using methods like PUT/PATCH/DELETE, sending custom headers like Authorization, or using certain Content-Type values. The browser checks permissions before sending the actual request.',
    },
    {
      difficulty: 'hard',
      question: 'Why can CloudFront/ALB/NGINX cause CORS to “randomly” fail?',
      answer:
        'Intermediaries can cache responses incorrectly (not varying by Origin), strip or fail to forward CORS headers, or not route OPTIONS properly. This leads to missing/incorrect CORS headers at the browser even if the app server is configured correctly.',
    },
    {
      difficulty: 'medium',
      question: 'JWT vs session cookies: how do you choose?',
      answer:
        'Sessions (cookie + server-side state) make revocation simpler and centralize auth decisions; JWTs can be easier for distributed services but require careful handling for revocation, rotation, and secure storage. Choose based on operational needs and security posture.',
    },
    {
      difficulty: 'medium',
      question: 'What cookie flags matter for security?',
      answer:
        'HttpOnly reduces XSS token theft, Secure ensures cookies are only sent over HTTPS, and SameSite helps mitigate CSRF by restricting cross-site sending behavior. You must choose SameSite settings based on your app flows.',
    },
    {
      difficulty: 'hard',
      question: 'How do you optimize a slow SQL query?',
      answer:
        'Start with the query and access patterns, use EXPLAIN/EXPLAIN ANALYZE to understand the plan, add or adjust appropriate indexes, and re-check. Also consider reducing scanned rows, avoiding functions on indexed columns, and ensuring statistics are up to date.',
    },
    {
      difficulty: 'easy',
      question: 'What is the difference between hashing and encryption?',
      answer:
        'Hashing is one-way and used for integrity (and password storage with salts). Encryption is reversible and used for confidentiality. Passwords should be hashed with a modern password hashing function, not encrypted.',
    },
    {
      difficulty: 'medium',
      question: 'WebSockets vs HTTP polling: what changes operationally?',
      answer:
        'WebSockets create long-lived connections and need proxy support for upgrades, idle timeout configuration, and backpressure considerations. Polling is simpler but can be inefficient at scale and adds latency.',
    },
  ],
};

