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

export const systemdesignData = {
  technicalTerms: [
    {
      term: 'Load Balancing',
      definition: 'Distributes traffic across servers.',
      category: 'Scalability',
      importance: 'high',
    },
    {
      term: 'Caching',
      definition: 'Stores frequently accessed data for speed.',
      category: 'Performance',
      importance: 'high',
    },
    {
      term: 'Serverless Architecture',
      definition: 'Cloud execution model where cloud provider manages infrastructure, automatically scaling and billing only for actual usage.',
      category: 'Compute',
      importance: 'high',
    },
    {
      term: 'FaaS (Function as a Service)',
      definition: 'Serverless compute primitive that runs stateless functions in response to events (e.g., AWS Lambda, Cloud Functions).',
      category: 'Compute',
      importance: 'high',
    },
    {
      term: 'Cold Start',
      definition: 'Latency penalty when a serverless function is invoked after being idle, requiring infrastructure provisioning.',
      category: 'Serverless',
      importance: 'high',
    },
    {
      term: 'Sharding',
      definition: 'Splitting data across partitions.',
      category: 'Databases',
      importance: 'medium',
    },
    {
      term: 'CAP Theorem',
      definition: 'Tradeoffs between consistency, availability, and partition tolerance.',
      category: 'Theory',
      importance: 'medium',
    },
    {
      term: 'Rate Limiting',
      definition: 'Controls request volume to protect services.',
      category: 'Reliability',
      importance: 'medium',
    },
    {
      term: 'Queues',
      definition: 'Asynchronous processing of tasks.',
      category: 'Scalability',
      importance: 'medium',
    },
    {
      term: 'SLA/SLO/SLI',
      definition: 'Reliability metrics and targets.',
      category: 'Operations',
      importance: 'medium',
    },
    {
      term: 'Circuit Breaker',
      definition: 'Prevents cascading failures by stopping calls to failing services.',
      category: 'Reliability',
      importance: 'medium',
    },
    {
      term: 'CQRS',
      definition: 'Separates read and write models to scale independently.',
      category: 'Architecture',
      importance: 'medium',
    },
    {
      term: 'Event-Driven Architecture',
      definition: 'Components communicate via async events, enabling loose coupling and scalability.',
      category: 'Architecture',
      importance: 'high',
    },
    {
      term: 'BaaS (Backend as a Service)',
      definition: 'Pre-built cloud services for auth, databases, storage, eliminating custom backend code.',
      category: 'Serverless',
      importance: 'medium',
    },
    {
      term: 'Warm Start',
      definition: 'Serverless function invocation that reuses an already-initialized execution environment.',
      category: 'Serverless',
      importance: 'medium',
    },
    {
      term: 'Provisioned Concurrency',
      definition: 'Feature to keep serverless functions initialized, eliminating cold starts at a cost.',
      category: 'Serverless',
      importance: 'medium',
    },
    {
      term: 'Microservices vs Serverless',
      definition: 'Microservices are long-running services; serverless is event-triggered, ephemeral, and auto-scales to zero.',
      category: 'Architecture',
      importance: 'high',
    },
    {
      term: 'Infrastructure as Code (IaC)',
      definition: 'Managing infrastructure via config files (Terraform, CDK, Serverless Framework).',
      category: 'DevOps',
      importance: 'high',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Design Process',
      description: 'Clarify requirements and constraints',
      content: `Define scale, latency goals, and data size before designing.`,
      code: `Requirements -> Back-of-the-napkin estimates -> High-level design -> Deep dive -> Bottlenecks`,
      language: 'text',
      codeSamples: [
        {
          label: 'Steps',
          code: `Requirements -> Back-of-the-napkin estimates -> High-level design -> Deep dive -> Bottlenecks`,
          language: 'text',
        },
        {
          label: 'Questions',
          code: `Ask: QPS? data size? latency SLOs? traffic spikes? failure modes?`,
          language: 'text',
        },
      ],
    },
    {
      title: 'Core Components',
      description: 'Compute, storage, cache, queue',
      content: `Choose the right building blocks for reliability.`,
      code: `Client -> Load Balancer -> App Tier -> Cache -> Database -> Queue`,
      language: 'text',
      codeSamples: [
        {
          label: 'Pipeline',
          code: `Client -> Load Balancer -> App Tier -> Cache -> Database -> Queue`,
          language: 'text',
        },
        {
          label: 'Data Flow',
          code: `Write path: API -> DB -> cache invalidate
Read path: API -> cache -> DB`,
          language: 'text',
        },
      ],
    },
    {
      title: 'Serverless Architecture',
      description: 'Event-driven, auto-scaling, pay-per-use compute',
      content: `Serverless shifts infrastructure management to the cloud provider. Functions are stateless, triggered by events (HTTP, queues, file uploads), and scale from 0 to thousands instantly. Best for spiky traffic, background jobs, and APIs. Challenges include cold starts, execution duration limits, and vendor lock-in.`,
      codeSamples: [
        {
          label: 'Serverless API Flow',
          code: `API Gateway -> Lambda (auth) -> DynamoDB -> Lambda (transform) -> SQS -> Worker Lambda`,
          language: 'text',
        },
        {
          label: 'Cold Start Mitigation',
          code: `1. Provisioned Concurrency
2. Smaller deployment packages
3. Keep functions warm with periodic pings
4. Use faster runtimes (Node.js > Python > Java)`,
          language: 'text',
        },
        {
          label: 'Serverless vs Containers',
          code: `Serverless: No server mgmt, scales to zero, <15 min timeout
Containers (ECS/Fargate): More control, predictable latency, stateful workloads`,
          language: 'text',
        },
      ],
    },
    {
      title: 'Event-Driven Serverless Patterns',
      description: 'Queue, fan-out, SAGA, event sourcing',
      content: `Serverless excels at event-driven patterns. Use SQS/SNS for decoupling, Step Functions for workflows, and EventBridge for event routing. This enables graceful failure handling, retries, and dead-letter queues.`,
      codeSamples: [
        {
          label: 'Async Job Processing',
          code: `API -> SQS Queue -> Lambda (compute) -> DynamoDB
Dead-letter queue: failed after 3 retries
DLQ -> Alert Lambda -> SNS -> Pages team`,
          language: 'text',
        },
        {
          label: 'Fan-out Pattern',
          code: `S3 upload -> EventBridge -> Multiple Lambda subscribers:
  - Generate thumbnail
  - Virus scan
  - Update search index`,
          language: 'text',
        },
        {
          label: 'SAGA Pattern',
          code: `Step Functions orchestration:
CreateOrder Lambda -> ProcessPayment Lambda -> ReserveInventory Lambda
Compensation: RefundPayment Lambda on failure`,
          language: 'text',
        },
      ],
    },
    {
      title: 'Tradeoffs',
      description: 'Consistency vs availability & serverless tradeoffs',
      content: `Explain choices clearly and justify tradeoffs with CAP and latency goals. Serverless adds new tradeoffs: cold start latency vs cost, statelessness vs state mgmt, vendor lock-in vs operational simplicity.`,
      code: `Strong consistency = easier correctness
High availability = better uptime
Pick based on product needs`,
      codeSamples: [
        {
          label: 'CAP',
          code: `Strong consistency = easier correctness
High availability = better uptime
Pick based on product needs`,
          language: 'text',
        },
        {
          label: 'Latency',
          code: `Reduce p99 via caching, async queues, and regional read replicas`,
          language: 'text',
        },
        {
          label: 'Serverless Tradeoffs',
          code: `✅ PROS: No ops, auto-scale, pay-per-use, fast deploy
❌ CONS: Cold starts, timeout limits, debugging harder, vendor lock-in`,
          language: 'text',
        },
      ],
    },
    {
      title: 'Multi-Region Serverless',
      description: 'Active-active and failover patterns',
      content: `Serverless simplifies multi-region: API Gateway regional endpoints, DynamoDB global tables, and Route 53 latency routing. Lambda can run in any region automatically.`,
      codeSamples: [
        {
          label: 'Active-Active',
          code: `Route 53 (latency-based) 
  -> Region A: API Gateway + Lambda + DynamoDB Global Table
  -> Region B: API Gateway + Lambda + DynamoDB Global Table
Failover: Health checks route traffic away from degraded region`,
          language: 'text',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'How do you approach a system design interview?',
      answer: `Start with requirements, estimate scale, then design components and tradeoffs.`,
      difficulty: 'easy',
    },
    {
      question: 'What is horizontal scaling?',
      answer: `Adding more machines to handle load instead of upgrading a single machine.`,
      difficulty: 'easy',
    },
    {
      question: 'How does caching improve performance?',
      answer: `It reduces repeated expensive work and lowers latency.`,
      difficulty: 'medium',
    },
    {
      question: 'Design a rate limiter for an API gateway.',
      answer: `Use token bucket or sliding window with Redis to enforce limits across nodes.`,
      difficulty: 'hard',
    },
    {
      question: 'How would you design a multi-region system with failover?',
      answer: `Use active-active or active-passive, global DNS, and replicated data stores.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you ensure idempotency with at-least-once delivery?',
      answer: `Use idempotency keys and deduplication in storage.`,
      difficulty: 'hard',
    },
    {
      question: 'What is serverless architecture and when would you use it?',
      answer: `Serverless runs code without managing servers, scaling automatically. Best for spiky traffic, event-driven workloads, APIs, and background processing. Avoid for long-running, stateful, or ultra-low-latency (sub-10ms) needs due to cold starts.`,
      difficulty: 'medium',
    },
    {
      question: 'How do you handle cold starts in serverless?',
      answer: `Use provisioned concurrency for critical paths, keep functions warm with CloudWatch scheduled pings, optimize package size, prefer faster runtimes (Node.js/Python vs Java/C#), and use Lambda SnapStart for Java.`,
      difficulty: 'hard',
    },
    {
      question: 'Design a serverless image processing pipeline.',
      answer: `S3 upload triggers Lambda for validation → SQS for durability → Processing Lambda (resize/format) → Thumbnail Lambda → CDN. Use dead-letter queues for failures and Step Functions for multi-step workflows with automatic retries.`,
      difficulty: 'hard',
    },
    {
      question: 'Serverless vs Kubernetes: when to choose which?',
      answer: `Serverless: unpredictable traffic, event-driven, low operational overhead, pay-per-use. K8s: predictable high volume, stateful workloads, custom networking, multi-cloud portability, long-running services needing sub-ms latency.`,
      difficulty: 'medium',
    },
    {
      question: 'How do you test serverless applications locally?',
      answer: `Use SAM CLI (AWS), Serverless Framework offline plugin, or LocalStack for AWS emulation. Mock event sources (S3, SQS, API Gateway) and use container-based DBs. End-to-end tests run against staging with real infrastructure.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};