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
      title: 'Tradeoffs',
      description: 'Consistency vs availability',
      content: `Explain choices clearly and justify tradeoffs with CAP and latency goals.`,
      code: `Strong consistency = easier correctness
High availability = better uptime
Pick based on product needs`,
      language: 'text',
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
  ] as InterviewQuestion[],
};
