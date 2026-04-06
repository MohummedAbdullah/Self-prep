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
      definition: 'Manages asynchronous callbacks and I/O.',
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
      question: 'What is the event loop?',
      answer: `It is the mechanism that handles async operations and callback execution.`,
      difficulty: 'easy',
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
  ] as InterviewQuestion[],
};
