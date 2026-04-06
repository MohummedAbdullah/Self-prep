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

export const dotnetData = {
  technicalTerms: [
    {
      term: 'CLR',
      definition: 'Common Language Runtime that manages execution.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'LINQ',
      definition: 'Language-integrated query for collections.',
      category: 'Core',
      importance: 'high',
    },
    {
      term: 'Dependency Injection',
      definition: 'Pattern for decoupling services.',
      category: 'Architecture',
      importance: 'high',
    },
    {
      term: 'Middleware',
      definition: 'Pipeline for handling HTTP requests.',
      category: 'Web',
      importance: 'medium',
    },
    {
      term: 'Task Parallel Library',
      definition: 'Async and parallel patterns in .NET.',
      category: 'Concurrency',
      importance: 'medium',
    },
    {
      term: 'Kestrel',
      definition: 'Cross-platform web server for ASP.NET Core.',
      category: 'Web',
      importance: 'medium',
    },
    {
      term: 'Entity Framework',
      definition: 'ORM for database access.',
      category: 'Database',
      importance: 'medium',
    },
    {
      term: 'Async Streams',
      definition: 'Async iteration with IAsyncEnumerable.',
      category: 'Concurrency',
      importance: 'medium',
    },
    {
      term: 'IHostedService',
      definition: 'Background services in ASP.NET Core.',
      category: 'Hosting',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'C# Basics',
      description: 'Types, generics, and async',
      content: `Understand tasks, await, and exception handling.`,
      code: `public async Task<string> GetNameAsync() {
  await Task.Delay(10);
  return "Ava";
}`,
      language: 'csharp',
      codeSamples: [
        {
          label: 'Async Task',
          code: `public async Task<string> GetNameAsync() {
  await Task.Delay(10);
  return "Ava";
}`,
          language: 'csharp',
        },
        {
          label: 'Async Streams',
          code: `public async IAsyncEnumerable<int> Stream() {
  for (var i = 0; i < 3; i++) {
    yield return i;
    await Task.Delay(10);
  }
}`,
          language: 'csharp',
        },
      ],
    },
    {
      title: 'ASP.NET Core',
      description: 'Building APIs and web apps',
      content: `Controllers, minimal APIs, and routing.`,
      code: `app.MapGet("/health", () => Results.Ok(new { ok = true }));`,
      language: 'csharp',
      codeSamples: [
        {
          label: 'Minimal API',
          code: `app.MapGet("/health", () => Results.Ok(new { ok = true }));`,
          language: 'csharp',
        },
        {
          label: 'DI in Handler',
          code: `app.MapGet("/time", (IClock clock) => clock.Now);`,
          language: 'csharp',
        },
      ],
    },
    {
      title: 'DI & Configuration',
      description: 'Structured app setup',
      content: `Service lifetimes, options, and config sources.`,
      code: `builder.Services.AddSingleton<IClock, SystemClock>();`,
      language: 'csharp',
      codeSamples: [
        {
          label: 'Register',
          code: `builder.Services.AddSingleton<IClock, SystemClock>();`,
          language: 'csharp',
        },
        {
          label: 'Options',
          code: `builder.Services.Configure<MailOptions>(builder.Configuration.GetSection("Mail"));`,
          language: 'csharp',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is LINQ used for?',
      answer: `Querying collections with a fluent or query syntax.`,
      difficulty: 'easy',
    },
    {
      question: 'Explain dependency injection.',
      answer: `It provides dependencies from a container to reduce coupling.`,
      difficulty: 'medium',
    },
    {
      question: 'What is middleware in ASP.NET Core?',
      answer: `Components that handle requests in a pipeline.`,
      difficulty: 'easy',
    },
    {
      question: 'How does async/await work under the hood in .NET?',
      answer: `It uses state machines to resume execution without blocking threads.`,
      difficulty: 'hard',
    },
    {
      question: 'How would you optimize EF Core queries for performance?',
      answer: `Use projection, AsNoTracking, indexes, and avoid N+1 queries.`,
      difficulty: 'hard',
    },
    {
      question: 'What causes thread pool starvation and how do you mitigate it?',
      answer: `Blocking async calls or long-running tasks; use async all the way and dedicated threads when needed.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
