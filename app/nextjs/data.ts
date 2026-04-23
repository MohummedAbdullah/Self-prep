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
      term: 'Pages Router',
      definition: 'Legacy routing using pages directory with getServerSideProps/getStaticProps.',
      category: 'Routing',
      importance: 'medium',
    },
    {
      term: 'Server Components',
      definition: 'Components that render on the server by default, zero JavaScript bundle size.',
      category: 'Rendering',
      importance: 'high',
    },
    {
      term: 'Client Components',
      definition: 'Components that render on the client with interactivity and useState/useEffect.',
      category: 'Rendering',
      importance: 'high',
    },
    {
      term: 'Route Handlers',
      definition: 'API endpoints defined with route files (app/api/route.ts).',
      category: 'API',
      importance: 'medium',
    },
    {
      term: 'Caching',
      definition: 'Built-in caching and revalidation controls (Data Cache, Full Route Cache, Router Cache).',
      category: 'Performance',
      importance: 'high',
    },
    {
      term: 'Streaming',
      definition: 'Progressive rendering of UI with suspense boundaries and loading.tsx.',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Middleware',
      definition: 'Edge runtime request interception, rewriting, and authentication.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Static Export',
      definition: 'Pre-rendered output without a server (output: "export").',
      category: 'Deployment',
      importance: 'low',
    },
    {
      term: 'Route Segment Config',
      definition: 'Per-segment rendering and caching configuration (dynamic, revalidate, runtime).',
      category: 'Routing',
      importance: 'medium',
    },
    {
      term: 'Dynamic Rendering',
      definition: 'Switches between static and dynamic rendering based on usage.',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Partial Prerendering (PPR)',
      definition: 'Combines static and dynamic rendering in same page using suspense boundaries.',
      category: 'Rendering',
      importance: 'low',
    },
    {
      term: 'Server Actions',
      definition: 'Functions that run on server, called from client components for mutations.',
      category: 'Data Mutation',
      importance: 'high',
    },
    {
      term: 'ISR (Incremental Static Regeneration)',
      definition: 'Update static pages after build without full rebuild (Pages Router).',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Turbopack',
      definition: 'Next.js native Rust-based bundler for faster development.',
      category: 'Tooling',
      importance: 'low',
    },
    {
      term: 'Edge Runtime',
      definition: 'V8-based lightweight runtime for middleware and edge functions.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Metadata API',
      definition: 'Generate meta tags, titles, and SEO with generateMetadata or export metadata.',
      category: 'SEO',
      importance: 'medium',
    },
    {
      term: 'Parallel Routes',
      definition: 'Render multiple pages simultaneously with @folder convention.',
      category: 'Routing',
      importance: 'low',
    },
    {
      term: 'Intercepting Routes',
      definition: 'Load content from one route within another route (e.g., modal on photo click).',
      category: 'Routing',
      importance: 'low',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Routing & Layouts',
      description: 'Building nested routes',
      content: `Use folder segments with page and layout files to compose UI. Layouts persist across routes and can be nested.`,
      code: `// app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <nav>Sidebar</nav>
      <main>{children}</main>
    </div>
  );
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
export default async function Page({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return <h1>{post.title}</h1>;
}`,
          language: 'tsx',
        },
        {
          label: 'Loading UI',
          code: `// app/dashboard/loading.tsx
export default function Loading() {
  return <div>Loading dashboard...</div>;
}`,
          language: 'tsx',
        },
        {
          label: 'Error Boundary',
          code: `// app/dashboard/error.tsx
'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Server vs Client Components',
      description: 'When to use each and their limitations',
      content: `Server components render on server, have zero JS bundle, can be async, and directly access backend. Client components hydrate in browser, can use hooks and event listeners, but increase bundle size.`,
      code: `// Server Component (default)
export default async function ServerPage() {
  const data = await db.query();
  return <div>{data}</div>;
}

// Client Component
'use client';
import { useState } from 'react';
export default function ClientCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Server Component',
          code: `// app/page.tsx (Server Component)
export default async function Page() {
  const data = await fetch('https://api.example.com/posts').then(r => r.json());
  return <div>{data.map(post => <Post key={post.id} {...post} />)}</div>;
}`,
          language: 'tsx',
        },
        {
          label: 'Client Component',
          code: `// app/components/Counter.tsx
'use client';
import { useState } from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}`,
          language: 'tsx',
        },
        {
          label: 'Composition Pattern',
          code: `// app/page.tsx (Server)
import ClientButton from './ClientButton';
export default async function Page() {
  const data = await getData(); // Server-only
  return (
    <div>
      {data.map(item => <ServerItem item={item} />)}
      <ClientButton /> {/* Interactivity */}
    </div>
  );
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Data Fetching & Caching',
      description: 'Fetch, cache, and revalidate strategies',
      content: `Fetch in server components with extended fetch options. Use cache: 'force-cache' (default), 'no-store', or next.revalidate. Configure segment-level caching with route segment config.`,
      code: `// Default caching (static)
const data = await fetch('https://api.example.com/posts');

// Dynamic (no cache)
const data = await fetch('https://api.example.com/posts', { cache: 'no-store' });

// Revalidate every 60 seconds
const data = await fetch('https://api.example.com/posts', { next: { revalidate: 60 } });`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Server Fetch',
          code: `// app/posts/page.tsx
export default async function Page() {
  const res = await fetch("https://api.example.com/posts", {
    next: { revalidate: 3600 } // ISR-style
  });
  const posts = await res.json();
  return <pre>{JSON.stringify(posts, null, 2)}</pre>;
}`,
          language: 'tsx',
        },
        {
          label: 'Route Handler',
          code: `// app/api/posts/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const post = await db.post.findUnique({ where: { id } });
  return Response.json(post);
}`,
          language: 'tsx',
        },
        {
          label: 'Route Segment Config',
          code: `// app/posts/page.tsx
export const dynamic = 'force-dynamic'; // Always dynamic
export const revalidate = 0; // Disable cache
export const fetchCache = 'force-no-store'; // No fetch cache`,
          language: 'tsx',
        },
        {
          label: 'Server Action Mutation',
          code: `// app/actions.ts
'use server';
export async function createPost(formData: FormData) {
  const title = formData.get('title');
  await db.post.create({ data: { title } });
  revalidatePath('/posts'); // Clear cache
  redirect('/posts');
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Rendering Modes',
      description: 'SSR, SSG, ISR, and streaming',
      content: `Static (SSG): at build time, fastest. Dynamic (SSR): at request time. ISR: static with revalidation. Streaming: progressive rendering with Suspense.`,
      code: `// Static (build time) - default
export default function Page() { return <div>Static</div>; }

// Dynamic (request time)
export const dynamic = 'force-dynamic';

// ISR (revalidate every 60s)
export const revalidate = 60;`,
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
        {
          label: 'Streaming with Suspense',
          code: `import { Suspense } from 'react';
import { SlowComponent } from './SlowComponent';

export default function Page() {
  return (
    <div>
      <h1>Instant content</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Middleware & Edge',
      description: 'Request interception and edge computing',
      content: `Middleware runs on Edge Runtime before request completes. Use for auth, redirects, rewrites, geolocation, and A/B testing.`,
      code: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: '/dashboard/:path*' };`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Auth Middleware',
          code: `// middleware.ts
import { NextResponse } from 'next/server';
export function middleware(req: NextRequest) {
  const isAuth = req.cookies.has('session');
  if (!isAuth && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}`,
          language: 'tsx',
        },
        {
          label: 'Geo Redirect',
          code: `// middleware.ts
export function middleware(req: NextRequest) {
  const country = req.geo?.country || 'US';
  if (country === 'GB') {
    return NextResponse.rewrite(new URL('/uk', req.url));
  }
  return NextResponse.next();
}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Metadata & SEO',
      description: 'Dynamic metadata and Open Graph tags',
      content: `Use static export metadata or generateMetadata function for dynamic SEO. Supports title, description, Open Graph, Twitter cards, and robots.`,
      code: `// app/posts/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Static Metadata',
          code: `// app/page.tsx
export const metadata = {
  title: 'My App',
  description: 'Best app ever',
  openGraph: { title: 'My App', type: 'website' },
};`,
          language: 'tsx',
        },
        {
          label: 'Dynamic Metadata',
          code: `// app/products/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return { title: product.name, description: product.description };
}`,
          language: 'tsx',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is the difference between server and client components?',
      answer: `Server components render on the server with zero JavaScript bundle size, can be async, and directly access backend resources. Client components render on the client, hydrate in browser, can use hooks (useState, useEffect) and event listeners, but increase bundle size and have slower initial load.`,
      difficulty: 'medium',
    },
    {
      question: 'How do you create an API endpoint?',
      answer: `Add a route file under app/api with HTTP method handlers (GET, POST, etc.). Example: app/api/users/route.ts exports async function GET() { return Response.json(data); }`,
      difficulty: 'easy',
    },
    {
      question: 'What is revalidation?',
      answer: `A way to refresh cached data at a set interval (time-based revalidation) or on-demand (revalidateTag/revalidatePath). Used with fetch { next: { revalidate: 60 } } or route segment config export const revalidate = 60.`,
      difficulty: 'medium',
    },
    {
      question: 'How does streaming improve perceived performance?',
      answer: `It allows partial UI to render while data loads, reducing TTFB (Time To First Byte) and time to first content.`,
      difficulty: 'hard',
    },
    {
      question: 'When should you opt into client components, and what are the tradeoffs?',
      answer: `Use client components for interactivity (onClick, onChange), browser APIs (localStorage, geolocation), React hooks, or event listeners. Tradeoffs: larger bundle size, slower hydration, worse SEO for that component, and cannot use server-only features.`,
      difficulty: 'hard',
    },
    {
      question: 'How do route segment configs affect caching and rendering?',
      answer: `They can force dynamic rendering (export const dynamic = 'force-dynamic'), override cache behavior (export const fetchCache = 'force-no-store'), or set revalidation intervals (export const revalidate = 60). Applied per segment, overriding parent configs.`,
      difficulty: 'hard',
    },

    // New detailed questions
    {
      question: 'Explain the different caching mechanisms in Next.js App Router (Data Cache, Full Route Cache, Router Cache).',
      answer: `Data Cache: persists fetch data across requests (controlled by fetch options). Full Route Cache: caches entire page output at build time (static) or on revalidate (ISR). Router Cache: client-side in-memory cache of RSC payload (duration: session or 30s). Clear with router.refresh() or revalidatePath/Tag.`,
      difficulty: 'hard',
    },
    {
      question: 'What are Server Actions and when would you use them instead of API routes?',
      answer: `Server Actions are async functions marked with 'use server' that run on the server, called directly from client components without creating API endpoints. Use for mutations (forms, button clicks) that need server access. Better than API routes for same-origin mutations (no manual fetch, progressive enhancement, built-in pending states). API routes still better for public APIs, cross-origin requests, or complex validation.`,
      difficulty: 'hard',
    },
    {
      question: 'How does Partial Prerendering (PPR) work and what problem does it solve?',
      answer: `PPR combines static and dynamic rendering in the same page using Suspense boundaries. Static shell prerenders immediately, dynamic content streams in. Solves the problem of pages being fully static (stale data) or fully dynamic (slow TTFB). Enables fast initial load with fresh data where needed.`,
      difficulty: 'hard',
    },
    {
      question: 'What is the difference between loading.tsx, error.tsx, and Suspense for streaming?',
      answer: `loading.tsx: instant fallback UI for entire route segment (page-level streaming). error.tsx: client component error boundary for segment, catches runtime errors. Suspense: granular component-level streaming with custom fallback. Use loading.tsx for route-wide, Suspense for component-level control.`,
      difficulty: 'medium',
    },
    {
      question: 'How do you handle authentication in Next.js 14+ App Router?',
      answer: `Common patterns: 1. Middleware for route protection (checks session cookie, redirects). 2. Server component auth checks (redirect if no user). 3. Server Actions for login/logout. 4. Layout-level protection with parent layout checking auth. 5. Popular solutions: NextAuth.js (Auth.js), Clerk, Supabase Auth. Avoid client-only auth for security.`,
      difficulty: 'hard',
    },
    {
      question: 'What is the purpose of parallel and intercepting routes?',
      answer: `Parallel routes (@folder convention) render multiple pages simultaneously in same layout, useful for dashboards with independent sections. Intercepting routes (/(..) folder naming) load content from one route within another route's context, perfect for modals - click photo opens modal showing photo page while URL changes but underlying page remains.`,
      difficulty: 'medium',
    },
    {
      question: 'How does image optimization work in Next.js?',
      answer: `Next.js Image component automatically optimizes images: lazy loading, responsive sizes, WebP/AVIF conversion, and on-demand resizing via built-in Image Optimization API. Requires next.config.js remotePatterns for external domains. Reduces CLS with built-in aspect ratio handling.`,
      difficulty: 'medium',
    },
    {
      question: 'Explain the difference between SSR, SSG, and ISR in Next.js.',
      answer: `SSR (Server-Side Rendering): renders at request time via dynamic = 'force-dynamic', always fresh but slower TTFB. SSG (Static Site Generation): renders at build time, fastest but data may be stale. ISR (Incremental Static Regeneration): SSG with revalidation - serves stale while regenerating in background via revalidate option. Choose based on data freshness needs and traffic patterns.`,
      difficulty: 'medium',
    },
    {
      question: 'What are the limitations of Server Components?',
      answer: `Cannot: use useState, useEffect, or any client hooks; use browser APIs (localStorage, window); add event listeners (onClick); use Context providers (but can consume client Context). Workaround: use 'use client' directive or pass client components as children/props. Also cannot use async/await in client components that import them.`,
      difficulty: 'medium',
    },
    {
      question: 'How do you handle forms in Next.js 14+?',
      answer: `Three approaches: 1. Server Actions with useTransition and useFormStatus (recommended). 2. Client form with API route (fetch POST). 3. Traditional onSubmit + useState. Server Actions provide progressive enhancement, built-in pending states, and automatic revalidation. Example: <form action={createPost}> with 'use server' in action.`,
      difficulty: 'hard',
    },
    {
      question: 'What is the Edge Runtime and when should you use it?',
      answer: `Edge Runtime is V8-based lightweight runtime for middleware, Edge API routes, and Server Components. Pros: low latency globally, cold starts < 1ms. Cons: limited Node.js APIs (no fs, crypto, or native modules), 1-4MB bundle limit, 50ms execution limit. Use for: middleware (auth, geo), rewrites, lightweight APIs. Use Node.js runtime for heavy compute, database drivers, file system.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
