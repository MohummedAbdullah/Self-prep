export interface Module {
  id: string;
  name: string;
  description: string;
  path: string;
  icon: string;
  category: 'generic' | 'frontend' | 'backend' | 'fullstack' | 'mobile';
}

export const modules: Module[] = [
  {
    id: 'generic',
    name: 'Generic Concepts',
    description: 'Core programming concepts, data structures, algorithms, and design patterns applicable across all languages and frameworks.',
    path: '/generic',
    icon: '📚',
    category: 'generic',
  },
  {
    id: 'html-css',
    name: 'HTML & CSS',
    description: 'Semantic HTML, CSS fundamentals, Flexbox, Grid, responsive design, and modern styling techniques.',
    path: '/html-css',
    icon: '🎨',
    category: 'frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Core JavaScript concepts, ES6+ features, closures, async programming, prototypes, and modern JS patterns.',
    path: '/javascript',
    icon: '⚡',
    category: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Type systems, interfaces, generics, decorators, type guards, and advanced TypeScript patterns.',
    path: '/typescript',
    icon: '🔷',
    category: 'frontend',
  },
  {
    id: 'react',
    name: 'React.js',
    description: 'Components, hooks, state management, context API, performance optimization, and React patterns.',
    path: '/react',
    icon: '⚛️',
    category: 'frontend',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'SSR, SSG, API routes, middleware, dynamic routing, and Next.js 14+ features with App Router.',
    path: '/nextjs',
    icon: '▲',
    category: 'fullstack',
  },
  {
    id: 'react-native',
    name: 'React Native',
    description: 'Cross-platform mobile development, native modules, navigation, and mobile-specific optimizations.',
    path: '/react-native',
    icon: '📱',
    category: 'mobile',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'Event loop, streams, clustering, child processes, and building scalable server applications.',
    path: '/nodejs',
    icon: '🟢',
    category: 'backend',
  },
  {
    id: 'express',
    name: 'Express.js',
    description: 'Middleware, routing, error handling, authentication, and building RESTful APIs with Express.',
    path: '/express',
    icon: '🚂',
    category: 'backend',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    description: 'PHP framework, Eloquent ORM, Blade templates, authentication, and Laravel best practices.',
    path: '/laravel',
    icon: '🟥',
    category: 'backend',
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Python basics, OOP, decorators, generators, Flask/Django, and data structures in Python.',
    path: '/python',
    icon: '🐍',
    category: 'backend',
  },
  {
    id: 'dotnet',
    name: '.NET',
    description: 'C# fundamentals, .NET Core, Entity Framework, dependency injection, and ASP.NET patterns.',
    path: '/dotnet',
    icon: '🔷',
    category: 'backend',
  },
  {
    id: 'system-design',
    name: 'System Design',
    description: 'Architecture patterns, scalability, microservices, databases, caching, and system design interviews.',
    path: '/system-design',
    icon: '🏗️',
    category: 'generic',
  },
];

export interface SubModule {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  content: string;
  code?: string;
  codeSamples?: {
    code: string;
    language?: string;
    filename?: string;
    label?: string;
  }[];
  questions?: InterviewQuestion[];
}

export interface InterviewQuestion {
  question: string;
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}
