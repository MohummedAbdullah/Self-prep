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

export const nextjsData = {
  technicalTerms: [
    {
      term: 'App Router',
      definition: 'File-system based routing using the app directory.',
      category: 'Routing',
      importance: 'high',
    },
    {
      term: 'Server Components',
      definition: 'Components that render on the server by default.',
      category: 'Rendering',
      importance: 'high',
    },
    {
      term: 'Route Handlers',
      definition: 'API endpoints defined with route files.',
      category: 'API',
      importance: 'medium',
    },
    {
      term: 'Caching',
      definition: 'Built-in caching and revalidation controls.',
      category: 'Performance',
      importance: 'medium',
    },
    {
      term: 'Streaming',
      definition: 'Progressive rendering of UI with suspense boundaries.',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Middleware',
      definition: 'Edge runtime request interception and rewriting.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Static Export',
      definition: 'Pre-rendered output without a server.',
      category: 'Deployment',
      importance: 'low',
    },
    {
      term: 'Route Segment Config',
      definition: 'Per-segment rendering and caching configuration.',
      category: 'Routing',
      importance: 'medium',
    },
    {
      term: 'Dynamic Rendering',
      definition: 'Switches between static and dynamic rendering based on usage.',
      category: 'Rendering',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Routing & Layouts',
      description: 'Building nested routes',
      content: `Use folder segments with page and layout files to compose UI.`,
      code: `// app/dashboard/layout.tsx
export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Layout File',
          code: `// app/dashboard/layout.tsx
export default function Layout({ children }) {
  return <div className="layout">{children}</div>;
}`,
          language: 'tsx',
        },
        {
          label: 'Dynamic Route',
          code: `// app/posts/[id]/page.tsx
export default function Page({ params }) {
  return <h1>{params.id}</h1>;
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Data Fetching',
      description: 'Fetching on the server',
      content: `Prefer server components and route handlers for data access.`,
      code: `export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Server Fetch',
          code: `export default async function Page() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}`,
          language: 'tsx',
        },
        {
          label: 'Route Handler',
          code: `// app/api/posts/route.ts
export async function GET() {
  return Response.json({ ok: true });
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Rendering Modes',
      description: 'SSR, SSG, and streaming',
      content: `Choose the right rendering strategy per page for performance.`,
      code: `export const revalidate = 60;

export default function Page() {
  return <h1>Cached for 60s</h1>;
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Revalidate',
          code: `export const revalidate = 60;

export default function Page() {
  return <h1>Cached for 60s</h1>;
}`,
          language: 'tsx',
        },
        {
          label: 'Force Dynamic',
          code: `export const dynamic = "force-dynamic";

export default function Page() {
  return <h1>Always dynamic</h1>;
}`,
          language: 'tsx',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is the difference between server and client components?',
      answer: `Server components render on the server; client components run in the browser.`,
      difficulty: 'medium',
    },
    {
      question: 'How do you create an API endpoint?',
      answer: `Add a route file under app with HTTP method handlers.`,
      difficulty: 'easy',
    },
    {
      question: 'What is revalidation?',
      answer: `A way to refresh cached data at a set interval or on demand.`,
      difficulty: 'medium',
    },
    {
      question: 'How does streaming improve perceived performance?',
      answer: `It allows partial UI to render while data loads, reducing TTFB and time to first content.`,
      difficulty: 'hard',
    },
    {
      question: 'When should you opt into client components, and what are the tradeoffs?',
      answer: `Use client components for interactivity; tradeoff is more JS shipped to the browser.`,
      difficulty: 'hard',
    },
    {
      question: 'How do route segment configs affect caching and rendering?',
      answer: `They can force dynamic rendering or override cache behavior for a segment.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
