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

export const nextjsData = {
  technicalTerms: [
    {
      term: "SSR (Server-Side Rendering)",
      definition:
        "Renders a page on the server on every request. In Next.js App Router, any Server Component that fetches dynamic data is SSR by default.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "SSG (Static Site Generation)",
      definition:
        "Pre-renders pages at build time. In App Router, components with no dynamic data or force-static are statically generated.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "ISR (Incremental Static Regeneration)",
      definition:
        "Updates static pages after deployment without a full rebuild. Use `revalidate` export or `next: { revalidate: N }` in fetch options.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "PPR (Partial Prerendering)",
      definition:
        "Next.js 14+ experimental feature combining static shell with dynamic holes using Suspense, served as a single HTTP response.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "Streaming",
      definition:
        "Sends UI in chunks from server to client using React Suspense and HTTP streaming, so users see content before full page loads.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "Hydration",
      definition:
        "Attaching React event listeners to server-rendered HTML on the client. Errors occur when server and client HTML don't match.",
      category: "Rendering",
      importance: "high",
    },
    // App Router / Routing
    {
      term: "App Router",
      definition:
        "Next.js 13+ routing system using the `app/` directory. Supports Server Components, layouts, loading states, and nested routes by default.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "Pages Router",
      definition:
        "Original Next.js routing via `pages/` directory using getStaticProps, getServerSideProps, and getStaticPaths.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "File-based Routing",
      definition:
        "Next.js creates routes from the file system. `app/dashboard/page.tsx` maps to `/dashboard`.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "Dynamic Routes",
      definition:
        "Routes with variable segments using `[param]` folders. Accessed via `params` prop in Server Components or `useParams` hook in Client Components.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "Catch-all Routes",
      definition:
        "Route segments using `[...slug]` that match any depth of path. Optional with `[[...slug]]`.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "Route Groups",
      definition:
        "Folders wrapped in `(parentheses)` that organize routes without affecting URL structure. Used to share layouts across specific routes.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "Parallel Routes",
      definition:
        "Named slots (`@slot`) that render multiple pages simultaneously in the same layout. Useful for dashboards or modals.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "Intercepting Routes",
      definition:
        "Routes using `(.)`, `(..)`, `(..)(..)`, `(...)` conventions to intercept navigation and show content in a modal or overlay.",
      category: "Routing",
      importance: "medium",
    },
    // Server / Client Components
    {
      term: "Server Components",
      definition:
        "Default in App Router. Run only on server, can directly fetch data, access databases, and reduce JS bundle. Cannot use hooks or browser APIs.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "Client Components",
      definition:
        "Opted in with `'use client'` directive. Run in browser, support hooks, event listeners, and browser APIs. Shipped as JS bundle.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "'use client'",
      definition:
        "Directive at top of file that marks a component and all its imports as Client Components. Required for useState, useEffect, event handlers.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "'use server'",
      definition:
        "Directive that marks a function as a Server Action. Can be used inside Server or Client Components to run code exclusively on the server.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "Server Actions",
      definition:
        "Async functions marked with `'use server'` that execute on the server. Used for form submissions and mutations without writing API routes.",
      category: "Architecture",
      importance: "high",
    },
    // Data Fetching
    {
      term: "fetch() with Next.js Extensions",
      definition:
        "Next.js extends native fetch to support `cache: 'force-cache'` (static), `cache: 'no-store'` (dynamic), and `next: { revalidate: N }` (ISR).",
      category: "Data Fetching",
      importance: "high",
    },
    {
      term: "getServerSideProps",
      definition:
        "Pages Router API that runs on the server on every request. Returns props to the page component. Equivalent to dynamic Server Components in App Router.",
      category: "Data Fetching",
      importance: "high",
    },
    {
      term: "getStaticProps",
      definition:
        "Pages Router API that runs at build time to fetch data for static pages. Optionally returns `revalidate` for ISR.",
      category: "Data Fetching",
      importance: "high",
    },
    {
      term: "getStaticPaths",
      definition:
        "Pages Router API used with dynamic static pages to define which paths to pre-render at build time.",
      category: "Data Fetching",
      importance: "high",
    },
    {
      term: "generateStaticParams",
      definition:
        "App Router equivalent of getStaticPaths. Used in Server Components to pre-generate dynamic route paths at build time.",
      category: "Data Fetching",
      importance: "high",
    },
    {
      term: "Request Memoization",
      definition:
        "Next.js automatically deduplicates identical `fetch()` calls made during a single server request render pass.",
      category: "Data Fetching",
      importance: "medium",
    },
    // Layouts & Special Files
    {
      term: "layout.tsx",
      definition:
        "Defines shared UI that wraps child routes. Persists across navigations and does not remount. Root layout is required.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "page.tsx",
      definition:
        "Defines the unique UI for a route segment. Makes the route publicly accessible.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "loading.tsx",
      definition:
        "Automatically wraps `page.tsx` in a Suspense boundary and shows as fallback while the page streams in.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "error.tsx",
      definition:
        "Client Component that acts as an error boundary for a route segment. Receives `error` and `reset` props.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "not-found.tsx",
      definition:
        "Renders when `notFound()` is thrown in a route or when a URL doesn't match any segment.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "template.tsx",
      definition:
        "Similar to layout but creates a new instance on navigation, re-mounting children. Useful for animations or per-route effects.",
      category: "Routing",
      importance: "low",
    },
    {
      term: "middleware.ts",
      definition:
        "Runs before requests are processed. Used for auth, redirects, A/B testing, and request rewriting at the edge.",
      category: "Architecture",
      importance: "high",
    },
    // API & Edge
    {
      term: "Route Handlers",
      definition:
        "App Router equivalent of API Routes (`api/` in pages). Created with `route.ts` files exporting named HTTP methods (GET, POST, etc.).",
      category: "API",
      importance: "high",
    },
    {
      term: "API Routes",
      definition:
        "Pages Router serverless functions under `pages/api/`. Handle HTTP requests and return JSON responses. Run on Node.js runtime.",
      category: "API",
      importance: "high",
    },
    {
      term: "Edge Runtime",
      definition:
        "Lightweight V8-based runtime for middleware and route handlers. Faster cold starts, global distribution, but limited Node.js APIs.",
      category: "Architecture",
      importance: "medium",
    },
    {
      term: "Node.js Runtime",
      definition:
        "Full Node.js environment for API routes and Server Components. Supports all Node APIs but slower cold start than edge.",
      category: "Architecture",
      importance: "medium",
    },
    // Image & Optimization
    {
      term: "next/image",
      definition:
        "Optimized Image component with automatic WebP/AVIF conversion, lazy loading, blur placeholder, and layout shift prevention.",
      category: "Optimization",
      importance: "high",
    },
    {
      term: "next/font",
      definition:
        "Automatically optimizes and self-hosts fonts (Google Fonts or local). Eliminates external network requests and layout shift.",
      category: "Optimization",
      importance: "high",
    },
    {
      term: "next/link",
      definition:
        "Client-side navigation component that prefetches linked pages in the viewport for instant navigation.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "Prefetching",
      definition:
        "Next.js automatically prefetches `<Link>` destinations when they enter the viewport in production builds.",
      category: "Optimization",
      importance: "medium",
    },
    {
      term: "Bundle Analyzer",
      definition:
        "Tool (`@next/bundle-analyzer`) that visualizes JS bundle sizes to identify large dependencies for code splitting.",
      category: "Optimization",
      importance: "medium",
    },
    // Config & Deployment
    {
      term: "next.config.js",
      definition:
        "Next.js configuration file for customizing webpack, redirects, rewrites, headers, image domains, and experimental features.",
      category: "Configuration",
      importance: "high",
    },
    {
      term: "Environment Variables",
      definition:
        "NEXT_PUBLIC_ prefix exposes variables to the browser. Server-only variables (without prefix) stay on the server.",
      category: "Configuration",
      importance: "high",
    },
    {
      term: "Metadata API",
      definition:
        "App Router approach for SEO using exported `metadata` object or `generateMetadata` async function in layout/page files.",
      category: "SEO",
      importance: "high",
    },
    {
      term: "OpenGraph",
      definition:
        "Social sharing metadata configured via Next.js Metadata API. Can generate dynamic OG images using `opengraph-image.tsx`.",
      category: "SEO",
      importance: "medium",
    },
    {
      term: "Turbopack",
      definition:
        "Rust-based bundler (successor to webpack) built into Next.js for significantly faster dev server startup and HMR.",
      category: "Tooling",
      importance: "medium",
    },
    {
      term: "Output Modes",
      definition:
        "Next.js supports `standalone` output (for Docker), `export` (pure static HTML), and default (server-required) deployment modes.",
      category: "Deployment",
      importance: "medium",
    },
    {
      term: "Cookies & Headers",
      definition:
        "Server-side `cookies()` and `headers()` functions from `next/headers` for reading request cookies/headers in Server Components and Actions.",
      category: "API",
      importance: "high",
    },
    {
      term: "redirect() & notFound()",
      definition:
        "Next.js functions that throw special errors to trigger redirects or 404 pages from Server Components and Server Actions.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "useRouter (App Router)",
      definition:
        "Client-side hook from `next/navigation` for programmatic navigation. Provides push, replace, refresh, back methods.",
      category: "Routing",
      importance: "high",
    },
    {
      term: "usePathname",
      definition:
        "Client-side hook from `next/navigation` that returns the current URL pathname. Updates on navigation.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "useSearchParams",
      definition:
        "Client-side hook from `next/navigation` for reading URL query parameters. Must be wrapped in Suspense.",
      category: "Routing",
      importance: "medium",
    },
    {
      term: "revalidatePath / revalidateTag",
      definition:
        "Server-side functions to manually invalidate cached data for a specific path or fetch cache tag, triggering fresh fetches.",
      category: "Data Fetching",
      importance: "high",
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: "App Router vs Pages Router",
      description: "Understanding Next.js routing systems",
      content: `Next.js supports two routing paradigms. The Pages Router (pre-13) uses the pages/ directory with getStaticProps/getServerSideProps. The App Router (13+) uses the app/ directory with Server Components, nested layouts, and streaming by default. New projects should use App Router.`,
      codeSamples: [
        {
          label: "Pages Router",
          code: `// pages/users/[id].tsx
export async function getServerSideProps({ params }) {
  const user = await fetchUser(params.id);
  return { props: { user } };
}

export default function UserPage({ user }) {
  return <h1>{user.name}</h1>;
}`,
          language: "tsx",
        },
        {
          label: "App Router",
          code: `// app/users/[id]/page.tsx
export default async function UserPage({ params }) {
  const user = await fetchUser(params.id); // direct async/await
  return <h1>{user.name}</h1>;
}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Server vs Client Components",
      description: "Choosing between server and client rendering",
      content: `Server Components (default in App Router) run only on the server — they can fetch data directly, access databases, and send zero JS to the client. Client Components ('use client') run in the browser and support hooks, events, and browser APIs. Compose them by passing Server Component output as children to Client Components.`,
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
      language: "tsx",
      codeSamples: [
        {
          label: "Server Component",
          code: `// app/users/page.tsx — no 'use client', runs on server only
export default async function UsersPage() {
  const users = await db.query('SELECT * FROM users'); // direct DB access
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`,
          language: "tsx",
        },
        {
          label: "Client Component",
          code: `'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`,
          language: "tsx",
        },
        {
          label: "Composition Pattern",
          code: `// Pass Server Component as children to Client Component
// app/dashboard/page.tsx (Server)
import ClientWrapper from './ClientWrapper';
import ServerContent from './ServerContent';

export default function Page() {
  return (
    <ClientWrapper>
      <ServerContent /> {/* Rendered on server, passed as prop */}
    </ClientWrapper>
  );
}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Data Fetching Strategies",
      description: "Static, dynamic, and revalidated fetching",
      content: `Next.js extends the native fetch API with caching options. force-cache gives static/build-time data. no-store gives fresh data on every request (SSR). revalidate gives ISR behavior. These options can be set per-fetch or globally via route segment config exports.`,
      codeSamples: [
        {
          label: "Static (SSG)",
          code: `// Cached indefinitely — like getStaticProps
const data = await fetch('https://api.example.com/posts', {
  cache: 'force-cache',
});`,
          language: "tsx",
        },
        {
          label: "Dynamic (SSR)",
          code: `// Never cached — like getServerSideProps
const data = await fetch('https://api.example.com/user', {
  cache: 'no-store',
});`,
          language: "tsx",
        },
        {
          label: "ISR",
          code: `// Revalidate every 60 seconds
const data = await fetch('https://api.example.com/products', {
  next: { revalidate: 60 },
});

// Or set route-level revalidation
export const revalidate = 60;`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Server Actions",
      description: "Mutations without API routes",
      content: `Server Actions are async functions marked with 'use server' that run on the server. They can be called directly from forms or Client Components. They handle mutations, form submissions, and database writes without needing separate API routes.`,
      code: `'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  await db.insert({ name });
  revalidatePath('/users');
  redirect('/users');
}`,
      language: "tsx",
      codeSamples: [
        {
          label: "Server Action",
          code: `'use server';

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string;
  await db.insert({ name });
  revalidatePath('/users');
}`,
          language: "tsx",
        },
        {
          label: "Using in Form",
          code: `// Server Component — no 'use client' needed for basic forms
import { createUser } from './actions';

export default function NewUserForm() {
  return (
    <form action={createUser}>
      <input name="name" />
      <button type="submit">Create</button>
    </form>
  );
}`,
          language: "tsx",
        },
        {
          label: "From Client Component",
          code: `'use client';

import { createUser } from './actions';
import { useTransition } from 'react';

export default function NewUserForm() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => createUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <button disabled={isPending}>
        {isPending ? 'Creating...' : 'Create'}
      </button>
    </form>
  );
}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Layouts & Special Files",
      description: "Nested layouts, loading and error states",
      content: `App Router uses special files to define UI for each route segment. layout.tsx wraps children and persists across navigations. loading.tsx auto-wraps page in Suspense. error.tsx catches render errors. not-found.tsx handles missing routes. These compose to give each segment full control over its UI states.`,
      codeSamples: [
        {
          label: "Root Layout",
          code: `// app/layout.tsx — required, wraps all routes
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,
          language: "tsx",
        },
        {
          label: "loading.tsx",
          code: `// app/users/loading.tsx
// Automatically shown while page.tsx suspends
export default function Loading() {
  return <div className="spinner">Loading users...</div>;
}`,
          language: "tsx",
        },
        {
          label: "error.tsx",
          code: `'use client'; // error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Dynamic Routes & generateStaticParams",
      description: "Handling dynamic URL segments",
      content: `Dynamic routes use [param] folders. For static generation of dynamic pages, export generateStaticParams to define which paths to pre-build. At runtime, params are available as props in Server Components or via useParams() in Client Components.`,
      code: `// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetchAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);
  return <article>{post.content}</article>;
}`,
      language: "tsx",
    },
    {
      title: "Middleware",
      description: "Intercept requests before they reach pages",
      content: `middleware.ts runs at the edge before every matched request. Used for authentication checks, redirects, A/B testing, and request rewriting. It receives a NextRequest and returns a NextResponse. The matcher config controls which paths trigger middleware.`,
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

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*'],
};`,
      language: "tsx",
    },
    {
      title: "Route Handlers (API Routes in App Router)",
      description: "Building API endpoints in App Router",
      content: `Route Handlers replace API Routes in the App Router. Create a route.ts file with exported GET, POST, PUT, DELETE functions. They return a Response or NextResponse object and can be deployed as serverless functions or at the edge.`,
      code: `// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const users = await db.getUsers();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await db.createUser(body);
  return NextResponse.json(user, { status: 201 });
}`,
      language: "tsx",
    },
    {
      title: "Image & Font Optimization",
      description: "next/image and next/font",
      content: `next/image automatically optimizes images: WebP/AVIF conversion, lazy loading, prevents CLS with width/height, and serves from built-in CDN. next/font downloads Google Fonts at build time and self-hosts them, eliminating runtime requests and eliminating font layout shift.`,
      codeSamples: [
        {
          label: "next/image",
          code: `import Image from 'next/image';

export default function Avatar() {
  return (
    <Image
      src="/avatar.png"
      alt="User avatar"
      width={64}
      height={64}
      priority // LCP images should have priority
    />
  );
}`,
          language: "tsx",
        },
        {
          label: "next/font",
          code: `import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html className={inter.className}>
      <body>{children}</body>
    </html>
  );
}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Metadata & SEO",
      description: "App Router Metadata API",
      content: `App Router provides a Metadata API for SEO. Export a static metadata object or async generateMetadata function from any layout or page. Supports title, description, OpenGraph, Twitter cards, robots, and more — all with TypeScript support.`,
      codeSamples: [
        {
          label: "Static Metadata",
          code: `// app/about/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about our company.',
  openGraph: {
    title: 'About Us',
    images: ['/og-about.png'],
  },
};

export default function AboutPage() {
  return <h1>About</h1>;
}`,
          language: "tsx",
        },
        {
          label: "Dynamic Metadata",
          code: `// app/blog/[slug]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.ogImage] },
  };
}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Streaming & Suspense",
      description: "Progressive page loading with React Suspense",
      content: `Streaming sends HTML in chunks from the server, letting users see content before the full page finishes rendering. Wrap slow-loading sections in Suspense with a fallback. loading.tsx automatically does this for full page loads. Use Suspense boundaries manually for nested async components.`,
      code: `// app/dashboard/page.tsx
import { Suspense } from 'react';
import RevenueChart from './RevenueChart';
import RecentOrders from './RecentOrders';

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      {/* Streams in as soon as it resolves */}
      <Suspense fallback={<ChartSkeleton />}>
        <RevenueChart />
      </Suspense>
      <Suspense fallback={<OrdersSkeleton />}>
        <RecentOrders />
      </Suspense>
    </main>
  );
}`,
      language: "tsx",
    },
    {
      title: "Caching in Next.js",
      description: "Four layers of caching explained",
      content: `Next.js has four caching layers: 1) Request Memoization — deduplicates identical fetch calls in a single render. 2) Data Cache — persists fetch results across requests (ISR/static). 3) Full Route Cache — caches rendered HTML on the server. 4) Router Cache — client-side cache of visited route segments. Each has its own invalidation mechanism.`,
      codeSamples: [
        {
          label: "Cache Tags",
          code: `// Tag fetches for granular invalidation
const data = await fetch('https://api.example.com/products', {
  next: { tags: ['products'] },
});

// In Server Action or Route Handler:
import { revalidateTag } from 'next/cache';
revalidateTag('products'); // invalidates all fetches tagged 'products'`,
          language: "tsx",
        },
        {
          label: "Opt out of cache",
          code: `// Dynamic route segment — opts out of Full Route Cache
export const dynamic = 'force-dynamic';

// Or use no-store on individual fetch
const data = await fetch(url, { cache: 'no-store' });`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Parallel & Intercepting Routes",
      description: "Advanced routing patterns",
      content: `Parallel routes render multiple pages simultaneously in one layout using named slots (@folder). Useful for split-view dashboards. Intercepting routes show a different view (e.g., modal) when navigating within the app, but the full page on direct URL access — perfect for photo galleries and detail modals.`,
      codeSamples: [
        {
          label: "Parallel Routes",
          code: `// app/dashboard/layout.tsx
export default function Layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode; // @analytics slot
  team: React.ReactNode;      // @team slot
}) {
  return (
    <main>
      {children}
      <aside>{analytics}</aside>
      <aside>{team}</aside>
    </main>
  );
}`,
          language: "tsx",
        },
        {
          label: "Intercepting Route Structure",
          code: `// app/photos/page.tsx          — full photo grid
// app/photos/[id]/page.tsx     — full photo detail page
// app/@modal/(.)photos/[id]/page.tsx  — intercepted as modal

// (.) matches same level, (..) parent, (...) root`,
          language: "tsx",
        },
      ],
    },
  ] as Topic[],

  questions: [
    // Hard questions
    {
      question:
        "What is Partial Prerendering (PPR) and how does it differ from SSG and SSR?",
      answer:
        "PPR (Next.js 14+ experimental) combines static and dynamic rendering in a single request. The static shell (layout, non-dynamic content) is prerendered at build time and served instantly. Dynamic holes are wrapped in Suspense and stream in after. Unlike SSG (fully static) or SSR (fully dynamic per request), PPR serves one HTTP response with the best of both: fast static shell + fresh dynamic content.",
      difficulty: "hard",
    },
    {
      question:
        "Explain the four caching layers in Next.js App Router and how to opt out of each.",
      answer:
        "1) Request Memoization: deduplicates fetch() calls in a single render pass — opt out by using AbortController. 2) Data Cache: persists fetch results across requests — opt out with cache: 'no-store'. 3) Full Route Cache: caches rendered server HTML — opt out with export const dynamic = 'force-dynamic' or using cookies()/headers(). 4) Router Cache: client-side cache of visited routes — opt out by calling router.refresh() or revalidatePath().",
      difficulty: "hard",
    },
    {
      question:
        "How do Server Actions work under the hood and how do they handle security?",
      answer:
        "Server Actions compile to POST endpoint calls with a unique action ID. Next.js automatically creates secure API endpoints that are only callable from your own app. They use encrypted IDs to prevent direct invocation. You should still validate and authenticate inside the action because the generated endpoint is technically accessible. Use libraries like zod for input validation and check user session before any mutation.",
      difficulty: "hard",
    },
    {
      question:
        "What is the difference between revalidatePath and revalidateTag, and when would you use each?",
      answer:
        "revalidatePath('/users') purges the Full Route Cache for a specific URL path and re-fetches data associated with that route. revalidateTag('users') purges all fetch() calls tagged with that cache tag, regardless of which page they're on. Use revalidateTag for granular data-level invalidation across multiple routes, and revalidatePath when you want to refresh a specific page after a mutation.",
      difficulty: "hard",
    },
    {
      question:
        "How does Next.js prevent hydration mismatches and what causes them?",
      answer:
        "Hydration mismatches occur when server-rendered HTML differs from the React tree during client hydration. Common causes: using typeof window, Math.random(), new Date(), or browser-only APIs in components that also run on the server. Fixes: use useEffect for browser-only code, the 'use client' directive, suppressHydrationWarning for intentional differences (like timestamps), or the useId hook for stable IDs instead of random ones.",
      difficulty: "hard",
    },
    {
      question:
        "Explain how middleware works in Next.js and what its limitations are.",
      answer:
        "Middleware runs at the edge before a request hits the cache or server. It receives a NextRequest and can return a redirect, rewrite, or pass through with modified headers/cookies. Limitations: runs on the Edge Runtime (no Node.js APIs like fs or prisma), cannot access the database directly (use tokens/JWTs for auth checks), has a 1MB code size limit, and runs on every matched request so must be kept fast. For heavy logic, use Route Handlers instead.",
      difficulty: "hard",
    },
    {
      question:
        "How would you implement authentication in a Next.js App Router application?",
      answer:
        "Use middleware to check a session cookie/JWT on protected routes and redirect unauthenticated users to login. Store session in an httpOnly cookie (using a library like iron-session or next-auth). In Server Components, read cookies() to get session data for personalization. In Server Actions, validate the session before mutations. For OAuth, next-auth v5 (Auth.js) integrates natively with App Router and provides session helpers for both server and client.",
      difficulty: "hard",
    },
    {
      question:
        "What is the Server Component composition pattern and why can't you import a Client Component at the top of a Server Component tree?",
      answer:
        "You can import Client Components into Server Components, but once you cross the 'use client' boundary, everything imported inside that Client Component also becomes client-side. The pattern to mix them is passing Server Components as children props to Client Components — children are evaluated by the Server Component parent, so they stay on the server. This avoids adding unnecessary JS to the bundle.",
      difficulty: "hard",
    },
    {
      question:
        "How does Next.js handle request memoization and how does it differ from the Data Cache?",
      answer:
        "Request Memoization deduplicates identical fetch() calls (same URL + options) made during a single server render pass — it's per-request and cleared after the request completes. The Data Cache persists across multiple requests and deployments (like a server-side cache) — it stores fetch results until explicitly revalidated. Memoization prevents duplicate network calls within one render; Data Cache prevents re-fetching across requests.",
      difficulty: "hard",
    },
    {
      question:
        "What are parallel routes and intercepting routes? Give a real-world example of using both together.",
      answer:
        "Parallel routes (@slot folders) render multiple independent pages in one layout simultaneously. Intercepting routes ((.) syntax) show a different UI when navigating within the app vs. loading the URL directly. Together: a photo gallery uses intercepting routes to show a modal when clicking a photo from the grid (url is /photos/1 but shows modal overlay), but navigating directly to /photos/1 shows the full detail page. Combine with @modal parallel slot for the modal to live in the root layout.",
      difficulty: "hard",
    },
    {
      question: "How do you handle optimistic updates with Server Actions?",
      answer:
        "Use the useOptimistic hook (React 19 / Next.js 14+) combined with Server Actions. useOptimistic takes the current state and an update function, returning optimistic state and a trigger function. Call the trigger before the Server Action to update UI immediately, then let the Server Action confirm or revert. Wrap in startTransition to mark the action as non-urgent.",
      difficulty: "hard",
    },
    {
      question: 'Explain the event loop and microtasks.',
      answer: `The event loop processes the call stack, then microtasks, then macrotasks.
      V8( Google's open-source JavaScript engine) executes synchronous code on the call stack

      Async APIs are passed to libuv (Node's event loop library)

      libuv manages timers, I/O, and thread pool operations

      The event loop runs 6 phases repeatedly: timers → pending callbacks → poll → check → close

      Microtasks (Promise callbacks) run between EVERY phase

      The poll phase blocks for I/O when no timers are pending, but microtasks run immediately after each phase regardless of I/O state.`,
      difficulty: 'hard',
    },
    {
      question:
        "What is the difference between dynamic = 'force-dynamic' and cache: 'no-store' in Next.js?",
      answer:
        "cache: 'no-store' on an individual fetch opts that specific request out of the Data Cache, fetching fresh on every request. export const dynamic = 'force-dynamic' is a route segment config that opts the entire route out of static generation and the Full Route Cache, making Next.js treat the whole page as SSR. force-dynamic also implies no-store for all fetches in that route. Use no-store for selective freshness; force-dynamic when the entire page must be dynamic.",
      difficulty: "hard",
    },
    // Medium questions
    {
      question:
        "What is the difference between useRouter from next/router and next/navigation?",
      answer:
        "next/router is for the Pages Router and provides the full router object including query, pathname, and imperative navigation. next/navigation is for the App Router and splits into separate hooks: useRouter (push, replace, refresh, back), usePathname (current path), useSearchParams (query params), and useParams (dynamic route params). Never mix them — using next/router in App Router causes errors.",
      difficulty: "medium",
    },
    {
      question:
        "What is generateStaticParams and how does it replace getStaticPaths?",
      answer:
        "generateStaticParams is an async function exported from a dynamic route's page.tsx in App Router. It returns an array of param objects that Next.js uses to pre-generate static pages at build time. Unlike getStaticPaths, it runs in Server Components, supports nested layouts generating params independently, and doesn't require a fallback key — unspecified paths return 404 by default or use dynamicParams export to control behavior.",
      difficulty: "medium",
    },
    {
      question: "How does next/image prevent Cumulative Layout Shift (CLS)?",
      answer:
        "next/image requires width and height props (or uses fill with a positioned parent), which lets the browser reserve space for the image before it loads, preventing layout shift. It also generates a low-quality placeholder blur (blurDataURL) to fill the space while loading. The component sets aspect-ratio in CSS based on the provided dimensions.",
      difficulty: "medium",
    },
    {
      question: "What is the purpose of Route Groups in Next.js App Router?",
      answer:
        "Route Groups use (parentheses) folder naming to organize routes without affecting URLs. They let you apply different layouts to different sections of the same URL depth — e.g., (auth)/login and (marketing)/home can have separate layouts without auth/ or marketing/ appearing in URLs. Also useful for grouping related routes for code organization.",
      difficulty: "medium",
    },
    {
      question:
        "What is the difference between layout.tsx and template.tsx in Next.js?",
      answer:
        "layout.tsx persists across navigations between child routes — it doesn't remount, preserving state and scroll position. template.tsx creates a new instance on every navigation, remounting the component and resetting its state. Use layouts for persistent UI (nav, sidebar). Use templates when you need effects to re-run on navigation, like page transition animations or useEffect per-route analytics.",
      difficulty: "medium",
    },
    {
      question:
        "How do environment variables work in Next.js and how do you expose them to the browser?",
      answer:
        "Variables in .env.local are only available server-side by default. To expose a variable to the browser (client-side bundle), prefix it with NEXT_PUBLIC_ (e.g., NEXT_PUBLIC_API_URL). Never put secrets in NEXT_PUBLIC_ variables — they're embedded in the JS bundle. Server-only variables can be safely used in Server Components, Route Handlers, and middleware.",
      difficulty: "medium",
    },
    {
      question:
        "What is the Metadata API in Next.js App Router and how does generateMetadata work?",
      answer:
        "App Router replaces next/head with a typed Metadata API. Export a static metadata object or async generateMetadata function from any layout or page. generateMetadata receives params and searchParams, can fetch data, and returns a Metadata object. Next.js merges metadata from parent to child layouts, so root layout metadata applies site-wide and pages can override specific fields.",
      difficulty: "medium",
    },
    {
      question:
        "What is streaming in Next.js and how does it improve performance?",
      answer:
        "Streaming uses HTTP chunked transfer and React Suspense to send HTML progressively from server to client. Instead of waiting for all data before sending HTML, Next.js sends the static shell immediately and streams in dynamic sections as they resolve. Users see content faster (lower TTFB for interactive parts), and time-to-first-byte for the initial shell is near-instant. loading.tsx automates this for full pages.",
      difficulty: "medium",
    },
    {
      question: "How do cookies() and headers() work in Next.js App Router?",
      answer:
        "cookies() and headers() are async functions from next/headers available in Server Components, Server Actions, and Route Handlers. They give read access to the incoming request's cookies and headers. cookies() also allows setting/deleting cookies inside Server Actions. Using these functions makes a route dynamic (opts out of static caching) since they depend on runtime request data.",
      difficulty: "medium",
    },
    {
      question:
        "What is the difference between redirect() and notFound() in Next.js?",
      answer:
        "redirect(url) throws a special error that Next.js catches to send a 307 (temporary) or 308 (permanent) HTTP redirect response. notFound() throws an error that triggers the nearest not-found.tsx boundary and returns a 404 status. Both work inside Server Components, Server Actions, and Route Handlers. Neither should be wrapped in try/catch since they work by throwing.",
      difficulty: "medium",
    },
    {
      question: "What is ISR and when would you choose it over SSG or SSR?",
      answer:
        "ISR (Incremental Static Regeneration) pre-renders pages statically and updates them in the background after a revalidation interval. Choose ISR when content changes periodically (product catalogs, blog posts) but doesn't need to be real-time. Choose SSG for content that never changes (docs, marketing). Choose SSR when data must be fresh on every request (personalized dashboards, live prices). ISR gives the best of SSG performance with occasional freshness.",
      difficulty: "medium",
    },
    {
      question:
        "How does next/link prefetching work and how can you disable it?",
      answer:
        "In production, next/link automatically prefetches the linked route when the link enters the viewport — downloading the route's JS chunks and pre-rendering its static parts. This makes navigation feel instant. Disable with prefetch={false} on the Link component. In development, prefetching is off by default. Prefetching respects data-saver and connection quality hints.",
      difficulty: "medium",
    },
    {
      question:
        "What is Turbopack and how does it differ from webpack in Next.js?",
      answer:
        "Turbopack is a Rust-based bundler built into Next.js (stable for dev in Next.js 14+, production in Next.js 15+). It uses incremental computation to only rebuild changed files, giving significantly faster HMR and cold starts compared to webpack. It's not a drop-in replacement for all webpack configurations — some custom webpack plugins may not be compatible yet. Enable with next dev --turbopack.",
      difficulty: "medium",
    },
    {
      question:
        "What is the Edge Runtime and when should you use it over Node.js runtime?",
      answer:
        "The Edge Runtime is a lightweight V8-based environment with a subset of Web APIs (no Node.js APIs like fs, crypto, or ORMs). It starts faster and runs geographically closer to users. Use for middleware, lightweight API responses, auth token validation, and redirects. Use Node.js runtime for database queries, file system access, heavy npm packages (Prisma, sharp), and anything needing full Node.js APIs.",
      difficulty: "medium",
    },
    {
      question: "How do you handle loading and error states in App Router?",
      answer:
        "Use loading.tsx to auto-wrap the page in Suspense — shown while the page's async Server Component resolves. Use error.tsx (must be 'use client') as an error boundary — receives error object and reset function. Use not-found.tsx for 404 states triggered by notFound(). These are colocated with their route segments and can be nested, so each section of a page can have independent loading and error UI.",
      difficulty: "medium",
    },
    // Easy questions
    {
      question:
        "What is Next.js and what problems does it solve compared to plain React?",
      answer:
        "Next.js is a React framework that adds file-based routing, server-side rendering (SSR), static site generation (SSG), API routes, image/font optimization, and TypeScript support out of the box. Plain React only handles the UI layer — you'd manually configure routing (React Router), bundling (webpack/Vite), SSR, and performance features. Next.js provides a full production-ready stack with conventions that reduce setup and boilerplate.",
      difficulty: "easy",
    },
    {
      question:
        "What is the difference between SSR, SSG, and ISR in simple terms?",
      answer:
        "SSG builds the page once at deploy time — fast but content doesn't update until next deployment. SSR builds the page on every request — always fresh but slower. ISR builds the page at deploy time and automatically rebuilds it in the background after a set time — a balance of speed and freshness. Choose SSG for blogs, SSR for dashboards with user-specific data, ISR for content that changes occasionally like product pages.",
      difficulty: "easy",
    },
    {
      question: "How does file-based routing work in Next.js?",
      answer:
        "In App Router, folders inside app/ define URL segments. A page.tsx file makes a route accessible. For example, app/blog/[slug]/page.tsx creates the route /blog/:slug. Special files like layout.tsx, loading.tsx, and error.tsx handle shared UI, loading states, and errors for that segment. No router configuration needed — the file structure is the routing configuration.",
      difficulty: "easy",
    },
    {
      question: "What does 'use client' do in Next.js?",
      answer:
        "'use client' is a directive placed at the top of a file that marks it and all its imports as Client Components. This tells Next.js to include the component in the browser JavaScript bundle and enables React hooks (useState, useEffect), event handlers, and browser APIs. Without it, components are Server Components by default — rendered only on the server with no client JS sent.",
      difficulty: "easy",
    },
    {
      question:
        "What is the difference between the app/ directory and the pages/ directory in Next.js?",
      answer:
        "The pages/ directory is the original Next.js routing system using getStaticProps, getServerSideProps, and file-based routes. The app/ directory (Next.js 13+) is the new App Router with Server Components by default, nested layouts, streaming, and Server Actions. Both can coexist in the same project during migration. New projects should use app/.",
      difficulty: "easy",
    },
    {
      question:
        "When would you use a Route Handler instead of a Server Action?",
      answer:
        "Use Route Handlers (route.ts) when you need a proper HTTP API endpoint that external clients, mobile apps, or third-party services need to call. Use Server Actions for mutations triggered from your own Next.js UI (forms, buttons) — they're simpler, automatically typed, and don't need a separate fetch call. Server Actions are for your own app; Route Handlers are for public APIs.",
      difficulty: "easy",
    },
    {
      question: "How do you navigate programmatically in Next.js App Router?",
      answer:
        "Import useRouter from next/navigation in a Client Component. Call router.push('/path') to navigate, router.replace('/path') to navigate without adding to history, router.back() to go back, and router.refresh() to re-fetch server data for the current route without a full page reload. For non-component navigation (Server Actions), use redirect() from next/navigation.",
      difficulty: "easy",
    },
    {
      question: "What is the purpose of layout.tsx in Next.js App Router?",
      answer:
        "layout.tsx defines shared UI that wraps all pages within a route segment and its children. It persists across navigations between child routes — the layout doesn't remount, preserving scroll position and state. The root app/layout.tsx is required and must include <html> and <body> tags. Nested layouts stack on top of each other, letting you have different chrome for different sections of your app.",
      difficulty: "easy",
    },
    {
      question: "How do you add SEO metadata in Next.js App Router?",
      answer:
        "Export a metadata object or generateMetadata function from any page.tsx or layout.tsx. The metadata object supports title, description, openGraph, twitter, robots, and more. For dynamic routes, use the async generateMetadata function which receives params and can fetch data. Next.js automatically generates the appropriate <meta> tags — no need to manually use <head> or next/head.",
      difficulty: "easy",
    },
    {
      question:
        "What is the difference between next/link and a regular HTML <a> tag?",
      answer:
        "next/link provides client-side navigation — when clicked, it updates the URL and swaps the page content without a full browser reload, preserving React state and scroll position where appropriate. It also prefetches linked pages in production. A regular <a> tag causes a full page reload, losing all React state. Always use next/link for internal navigation in Next.js.",
      difficulty: "easy",
    },
  ] as InterviewQuestion[],
};
