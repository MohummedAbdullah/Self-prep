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

export const reactData = {
  technicalTerms: [
    {
      term: "ISR (Incremental Static Regeneration)",
      definition:
        "Next.js feature that updates static pages after deployment without full rebuild, by revalidating in background.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "HOC (Higher-Order Component)",
      definition:
        "A function that takes a component and returns an enhanced component. Used for code reuse, logic abstraction.",
      category: "Patterns",
      importance: "high",
    },

    {
      term: "Arrow Function",
      definition:
        "ES6 concise function syntax with lexical this binding. Cannot be used as constructors or have arguments object.",
      category: "JavaScript",
      importance: "high",
    },
    {
      term: "Normal Function",
      definition:
        "Traditional function declaration/expression with own this binding. Can be used as constructors with new keyword.",
      category: "JavaScript",
      importance: "high",
    },
    {
      term: "Optimizing",
      definition: `Fix unnecessary re-renders. Code splitting. Optimize state management. Virtualize long lists. 
          Avoid heavy work in render. Optimize images and assets. Use production build. Analyze performance properly.
          Reduce bundle size. Server-side or static rendering
        `,
      category: "Optimizing",
      importance: "high",
    },
    {
      term: "useContext",
      definition:
        "Hook that consumes context values from nearest Context.Provider, triggering re-renders on context changes.",
      category: "Hooks",
      importance: "high",
    },
    {
      term: "React Query",
      definition:
        "A data-fetching library that manages server state, caching, and synchronization.",
      category: "Data Fetching",
      importance: "high",
    },
    {
      term: "Query Key",
      definition:
        "Unique identifier used by React Query to cache and refetch data.",
      category: "React Query",
      importance: "high",
    },
    {
      term: "Memoization",
      definition: "Avoiding expensive recomputation with useMemo/useCallback.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "React.memo",
      definition:
        "Higher-order component that memoizes entire component renders based on props.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "useMemo",
      definition:
        "Memoizes computed values; recalculates only when dependencies change.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "useCallback",
      definition:
        "Memoizes function references; prevents function recreation on re-renders.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "useEffect",
      definition:
        "Runs side effects asynchronously after paint; non-blocking for UI.",
      category: "Hooks",
      importance: "high",
    },
    {
      term: "Mutation",
      definition:
        "React Query operation used for creating/updating/deleting data.",
      category: "React Query",
      importance: "high",
    },
    {
      term: "Cache Invalidation",
      definition: "Marking cached data as stale to trigger refetching.",
      category: "React Query",
      importance: "high",
    },
    {
      term: "Optimistic Updates",
      definition: "Updating UI before server response for better UX.",
      category: "React Query",
      importance: "high",
    },
    {
      term: "Debouncing",
      definition: "Delaying function execution until after a specified delay.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "Throttling",
      definition: "Limiting function execution to once per interval.",
      category: "Performance",
      importance: "medium",
    },
    {
      term: "useDebounce",
      definition: "Custom hook to debounce changing values.",
      category: "Hooks",
      importance: "high",
    },
    {
      term: "Inertia.js",
      definition:
        "A library that connects Laravel backend with React frontend without building APIs.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "Server-side Props",
      definition: "Data passed from Laravel controllers to React via Inertia.",
      category: "Inertia",
      importance: "high",
    },
    {
      term: "Partial Reload",
      definition: "Inertia feature to reload only specific data.",
      category: "Inertia",
      importance: "medium",
    },
    {
      term: "Form Handling (useForm)",
      definition: "Inertia hook for managing form state and submission.",
      category: "Inertia",
      importance: "high",
    },
    {
      term: "SSR (Server Side Rendering)",
      definition:
        "Rendering React components on server before sending to client.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "CSR (Client Side Rendering)",
      definition: "Rendering happens entirely in browser using JavaScript.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "Fiber",
      definition:
        "React’s internal reconciliation engine that enables incremental rendering and prioritization.",
      category: "Rendering",
      importance: "high",
    },
    {
      term: "Hydration",
      definition:
        "Attaching event listeners to server-rendered HTML on the client.",
      category: "SSR",
      importance: "high",
    },
    {
      term: "Server Components",
      definition:
        "Components that render on the server and send serialized output to the client.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "Client Components",
      definition:
        "Components that run in the browser and support interactivity.",
      category: "Architecture",
      importance: "high",
    },
    {
      term: "Code Splitting",
      definition:
        "Splitting bundles into smaller chunks loaded on demand using dynamic import.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "Lazy Loading",
      definition:
        "Loading components only when needed using React.lazy and Suspense.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "Refs",
      definition:
        "Mutable references that persist across renders without causing re-renders.",
      category: "Core",
      importance: "high",
    },

    {
      term: "Custom Hooks",
      definition: "Reusable logic extracted into functions using React hooks.",
      category: "Hooks",
      importance: "high",
    },
    {
      term: "Stale Closure",
      definition:
        "When a function captures outdated state due to missing dependencies.",
      category: "Hooks",
      importance: "high",
    },
    {
      term: "Batching",
      definition: "Grouping multiple state updates into a single render.",
      category: "Performance",
      importance: "high",
    },
    {
      term: "Transition",
      definition:
        "A non-urgent state update using startTransition to keep UI responsive.",
      category: "Concurrent",
      importance: "high",
    },
    {
      term: "useTransition",
      definition: "Hook to manage deferred UI updates.",
      category: "Concurrent",
      importance: "high",
    },
    {
      term: "JSX",
      definition:
        "A syntax extension that lets you write UI structure in JavaScript.",
      category: "Core",
      importance: "high",
    },
    {
      term: "Hooks",
      definition:
        "Functions like useState and useEffect to manage state and lifecycle.",
      category: "Core",
      importance: "high",
    },
    {
      term: "Reconciliation",
      definition: "How React compares trees and updates the DOM efficiently.",
      category: "Rendering",
      importance: "medium",
    },
    {
      term: "Context",
      definition: "A way to pass data without prop drilling.",
      category: "State",
      importance: "medium",
    },
    {
      term: "ForwardRef",
      definition: "Allows passing refs to child components.",
      category: "Core",
      importance: "medium",
    },
    {
      term: "useSyncExternalStore",
      definition:
        "Hook that subscribes to external stores (Redux, Zustand) with concurrency safety. Required for concurrent rendering.",
      category: "Hooks",
      importance: "medium",
    },
    {
      term: "Event Delegation",
      definition:
        "React attaches events at root instead of individual nodes for performance.",
      category: "Rendering",
      importance: "medium",
    },
    {
      term: "useDeferredValue",
      definition:
        "Delays updating a value to keep UI responsive during expensive renders. Returns deferred version that may lag behind.",
      category: "Concurrent",
      importance: "medium",
    },
    {
      term: "useId",
      definition:
        "Hook that generates stable unique IDs for accessibility attributes (aria-describedby) across server/client.",
      category: "Hooks",
      importance: "medium",
    },
    {
      term: "Prop Drilling",
      definition: "Passing props through many layers unnecessarily.",
      category: "State",
      importance: "medium",
    },
    {
      term: "Derived State",
      definition: "State computed from props or other state.",
      category: "State",
      importance: "medium",
    },
    {
      term: "useLayoutEffect",
      definition:
        "Runs side effects synchronously before paint; blocks UI but reads DOM layout.",
      category: "Hooks",
      importance: "medium",
    },
    {
      term: "useOptimistic",
      definition:
        "Hook that allows optimistic UI updates - shows expected result immediately while async operation completes.",
      category: "Hooks",
      importance: "medium",
    },
    {
      term: "Keys",
      definition: "Stable identifiers for list items to preserve state.",
      category: "Rendering",
      importance: "medium",
    },
    {
      term: "Concurrent Rendering",
      definition:
        "Rendering work can be paused and resumed to keep the UI responsive.",
      category: "Rendering",
      importance: "medium",
    },
    {
      term: "Controlled vs Uncontrolled Components",
      definition:
        "Controlled: form state via React; Uncontrolled: DOM handles state with refs.",
      category: "Forms",
      importance: "medium",
    },
    {
      term: "Error Boundaries",
      definition:
        "Catch JS errors in child components; prevent full app crashes.",
      category: "Error Handling",
      importance: "medium",
    },
    {
      term: "Suspense",
      definition: "Coordinating loading states in the component tree.",
      category: "Rendering",
      importance: "low",
    },
    {
      term: "Strict Mode",
      definition: "Development-only checks that highlight unsafe patterns.",
      category: "Tooling",
      importance: "low",
    },
    {
      term: "Portals",
      definition: "Render children outside parent DOM hierarchy, e.g., modals.",
      category: "Rendering",
      importance: "low",
    },
    {
      term: "useInsertionEffect",
      definition:
        "Synchronous hook that runs before DOM mutations, specifically for CSS-in-JS libraries to inject styles.",
      category: "Hooks",
      importance: "low",
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: "React Query Basics",
      description: "Server state management",
      content: `React Query handles fetching, caching, and updating server data efficiently.`,
      code: `const { data, isLoading } = useQuery({
      queryKey: ['users'],
      queryFn: fetchUsers,
    });`,
      language: "tsx",
    },
    {
      title: "Mutations & Optimistic Updates",
      description: "Updating server data",
      content: `Mutations handle POST/PUT/DELETE with optional optimistic updates.`,
      code: `const mutation = useMutation({
      mutationFn: addUser,
      onSuccess: () => queryClient.invalidateQueries(['users']),
    });`,
      language: "tsx",
    },
    {
      title: "Debouncing Input",
      description: "Improve performance in search",
      content: `Debouncing prevents excessive API calls.`,
      code: `function useDebounce(value, delay) {
      const [debounced, setDebounced] = useState(value);
    
      useEffect(() => {
        const timer = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timer);
      }, [value]);
    
      return debounced;
    }`,
      language: "tsx",
    },
    {
      title: "React + Laravel (Inertia)",
      description: "Full-stack without APIs",
      content: `Inertia allows React frontend with Laravel backend seamlessly.`,
      code: `// Laravel Controller
    return Inertia::render('Users', {
      users: User::all()
    });`,
      language: "php",
    },
    {
      title: "Inertia Form Handling",
      description: "Handling forms without API",
      content: `useForm simplifies form handling and submission.`,
      code: `const { data, setData, post } = useForm({
      name: '',
    });
    
    post('/users');`,
      language: "tsx",
    },
    {
      title: "Custom Hooks",
      description: "Reusable logic abstraction",
      content: `Custom hooks allow extracting reusable logic without affecting component hierarchy.`,
      code: `function useCounter() {
      const [count, setCount] = useState(0);
      const increment = () => setCount(c => c + 1);
      return { count, increment };
    }`,
      language: "tsx",
    },
    {
      title: "Code Splitting & Lazy Loading",
      description: "Improve bundle performance",
      content: `Split code using React.lazy and Suspense to reduce initial load time.`,
      code: `const Dashboard = React.lazy(() => import('./Dashboard'));
    
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>`,
      language: "tsx",
    },
    {
      title: "Refs & DOM Manipulation",
      description: "Access DOM without re-render",
      content: `Refs store mutable values and access DOM nodes directly.`,
      code: `const inputRef = useRef<HTMLInputElement>(null);
    
    const focus = () => inputRef.current?.focus();`,
      language: "tsx",
    },
    {
      title: "State Management Patterns",
      description: "Managing complex state",
      content: `Use reducer pattern when state logic is complex.`,
      code: `function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        default:
          return state;
      }
    }
    
    const [state, dispatch] = useReducer(reducer, { count: 0 });`,
      language: "tsx",
    },
    {
      title: "Concurrent Features",
      description: "Non-blocking UI updates",
      content: `React allows prioritizing updates for better UX.`,
      code: `const [isPending, startTransition] = useTransition();
    
    startTransition(() => {
      setList(heavyComputation());
    });`,
      language: "tsx",
    },
    {
      title: "Server vs Client Components",
      description: "Modern React architecture",
      content: `Server components reduce bundle size and move logic to server.`,
    },
    {
      title: "Component Design",
      description: "Reusable, composable UI",
      content: `Split UI into presentational and container components with clear props.`,
      code: `function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}`,
      language: "tsx",
      codeSamples: [
        {
          label: "Component Example",
          code: `function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}`,
          language: "tsx",
        },
        {
          label: "Memoized",
          code: `const UserCard = memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});`,
          language: "tsx",
        },
      ],
    },
    {
      title: "State & Effects",
      description: "Managing local and shared state",
      content: `Use hooks for state, effects, memoization, and refs.`,
      code: `const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
      language: "tsx",
      codeSamples: [
        {
          label: "Effect Example",
          code: `const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
          language: "tsx",
        },
        {
          label: "Cleanup",
          code: `useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Performance",
      description: "Avoid unnecessary renders",
      content: `Memoization, stable references, and list keys.`,
      code: `const onSave = useCallback(() => save(data), [data]);

const filtered = useMemo(() => items.filter(f), [items]);`,
      language: "tsx",
      codeSamples: [
        {
          label: "Memo Hooks",
          code: `const onSave = useCallback(() => save(data), [data]);

const filtered = useMemo(() => items.filter(f), [items]);`,
          language: "tsx",
        },
        {
          label: "List Keys",
          code: `{items.map((item) => (
  <Row key={item.id} item={item} />
))}`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Rendering Optimization",
      description: "React.memo vs useMemo vs useCallback",
      content: `React.memo memoizes entire component (skips re-render if props unchanged). useMemo memoizes calculated values. useCallback memoizes functions to prevent child re-renders.`,
      code: `// React.memo - component level
const Child = React.memo(({ data }) => <div>{data}</div>);

// useMemo - value level
const expensiveValue = useMemo(() => compute(items), [items]);

// useCallback - function level
const handleClick = useCallback(() => process(id), [id]);`,
      language: "tsx",
      codeSamples: [
        {
          label: "Comparison",
          code: `// React.memo stops child re-renders
const MemoChild = memo(ChildComponent);

// useMemo caches calculation result
const result = useMemo(() => a + b, [a, b]);

// useCallback caches function reference
const fn = useCallback(() => doSomething(a), [a]);`,
          language: "tsx",
        },
      ],
    },
    {
      title: "Effect Timing",
      description: "useEffect vs useLayoutEffect",
      content: `useEffect runs after paint (asynchronous, non-blocking UI). useLayoutEffect runs before paint (synchronous, blocks UI but reads DOM layout). Default to useEffect unless measuring DOM.`,
      code: `// useEffect - no layout thrashing
useEffect(() => {
  console.log('After paint');
}, [deps]);

// useLayoutEffect - measure DOM before paint
useLayoutEffect(() => {
  const height = ref.current.offsetHeight;
  setHeight(height);
}, []);`,
      language: "tsx",
      codeSamples: [
        {
          label: "When to use each",
          code: `// useLayoutEffect for DOM measurements
useLayoutEffect(() => {
  const width = divRef.current.clientWidth;
  setWidth(width); // prevents flicker
}, []);

// useEffect for everything else
useEffect(() => {
  fetchData().then(setData);
}, []);`,
          language: "tsx",
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: "What is useInsertionEffect and when should you use it?",
      answer:
        "useInsertionEffect runs synchronously before DOM mutations, specifically for CSS-in-JS libraries. It injects styles before layout effect runs, preventing FOUC (Flash of Unstyled Content). Rarely used in app code; primarily for library authors (styled-components, Emotion).",
      difficulty: "hard",
    },
    {
      question: "How does useOptimistic work and when would you use it?",
      answer:
        "useOptimistic allows optimistic UI updates - shows expected result immediately while async operation completes. Takes current state and update function. Returns optimistic state and function to trigger update. Used for likes, comments, form submissions where you want instant feedback before server confirms.",
      difficulty: "hard",
    },
    {
      question:
        "What problem does useSyncExternalStore solve and when would you use it?",
      answer:
        "useSyncExternalStore subscribes to external stores with concurrency safety. Required for React 18 concurrent rendering to avoid tearing (inconsistent UI). Used by Redux, Zustand, and other external state libraries. Prefer over useSubscription for external non-React state.",
      difficulty: "hard",
    },
    {
      question:
        "What is the difference between useDeferredValue and useTransition?",
      answer:
        "useDeferredValue defers a specific value (like search input). useTransition wraps state update in startTransition. useDeferredValue for values from outside (props, external stores). useTransition for state updates inside component. Both keep UI responsive but different APIs.",
      difficulty: "hard",
    },
    {
      question: "What are common mistakes with useEffect dependencies?",
      answer: `Missing dependencies cause stale closures. Over-specifying causes unnecessary runs. Functions and objects should be memoized.`,
      difficulty: "hard",
    },
    {
      question: "What is startTransition and when should you use it?",
      answer: `It marks updates as non-urgent, allowing React to keep UI responsive during heavy updates.`,
      difficulty: "hard",
    },
    {
      question: "What are race conditions in React and how do you handle them?",
      answer: `Race conditions occur when multiple async calls resolve out of order. Use abort controllers or track latest request.`,
      difficulty: "hard",
    },
    {
      question: "Explain controlled component performance issues.",
      answer: `Frequent re-renders on each keystroke can degrade performance. Optimize using debouncing or splitting components.`,
      difficulty: "hard",
    },
    {
      question: "How would you design a scalable React app?",
      answer: `Use modular architecture, custom hooks, proper state management, lazy loading, and separation of concerns.`,
      difficulty: "hard",
    },
    {
      question:
        "What is the difference between shallow rendering and full DOM rendering in React tests?",
      answer: `Shallow rendering (from Enzyme or React Testing Library shallow) renders only one component level deep, ignoring children — good for isolated unit tests. Full DOM rendering (mount with jsdom) renders entire component tree, necessary for testing interactions, lifecycle methods, and DOM APIs. Modern React Testing Library prefers full rendering to simulate real user behavior.`,
      difficulty: "hard",
    },
    {
      question: "How do you optimize a React app that re-renders too often?",
      answer: `1. Use React.memo for pure components. 2. useCallback for stable functions passed to children. 3. useMemo for expensive computations. 4. Virtualize long lists (react-window). 5. Code splitting with React.lazy + Suspense. 6. Avoid inline objects/functions in render. 7. Proper key props in lists. 8. Lift state down to avoid unnecessary parent re-renders. 9. Use React DevTools Profiler to identify bottlenecks.`,
      difficulty: "hard",
    },
    {
      question:
        "What is the difference between React.memo, useMemo, and useCallback? How does each affect re-rendering?",
      answer: `React.memo is a HOC that memoizes entire component rendering — component only re-renders if props change (shallow comparison). useMemo memoizes computed values — recalculates only when dependencies change, preventing expensive recalculations on every render. useCallback memoizes function references — prevents function recreation, which stops unnecessary child re-renders when functions are passed as props. Together: React.memo for component skip, useCallback for stable callbacks, useMemo for derived data.`,
      difficulty: "hard",
    },
    {
      question:
        "Explain how React batching works and its impact on state updates.",
      answer: `React batches updates in event handlers to reduce renders; setState calls may be merged.`,
      difficulty: "hard",
    },
    {
      question: "What problems can stale closures cause in hooks?",
      answer: `They can capture outdated state; fix by including deps or using refs.`,
      difficulty: "hard",
    },
    {
      question: "Why does Strict Mode double-invoke effects in development?",
      answer: `It helps surface side effects and ensures effects are resilient to re-mounting.`,
      difficulty: "hard",
    },
    {
      question: "What is React Fiber and why was it introduced?",
      answer: `Fiber is React’s reconciliation algorithm that allows incremental rendering, prioritization, and interruption of rendering work. It improves performance and enables concurrent features.`,
      difficulty: "hard",
    },
    {
      question: "How do you debug performance issues in React?",
      answer: `Use React DevTools Profiler, check re-render causes, memoize components, and analyze dependency arrays.`,
      difficulty: "hard",
    },
    {
      question: "Explain stale time and cache time in React Query.",
      answer: `staleTime defines freshness duration. cacheTime defines how long unused data stays in cache.`,
      difficulty: "hard",
    },
    {
      question: "How would you structure a React + Laravel app?",
      answer: `Use Laravel for backend logic, Inertia for routing, React for UI, and shared props for data.`,
      difficulty: "hard",
    },
    {
      question: "What are optimistic updates?",
      answer: `UI updates before server response to improve UX. If request fails, rollback is required.`,
      difficulty: "hard",
    },
    {
      question:
        "When would you use an arrow function vs a normal function in a React component?",
      answer:
        "Use arrow functions for: event handlers (auto-binding this), callbacks, array methods, preserving this in nested functions. Use normal functions for: methods that need prototype sharing, constructors, dynamic this binding, or when you need arguments object. Arrow functions are preferred for inline handlers.",
      difficulty: "medium",
    },
    {
      question:
        "What is ISR (Incremental Static Regeneration) and how does it differ from traditional SSG?",
      answer:
        "ISR allows static pages to be updated after deployment without full rebuild. Pages are regenerated in background when revalidation time expires. Unlike traditional SSG (build-time only), ISR serves stale data while regenerating, enabling fresh content without rebuilding entire site.",
      difficulty: "medium",
    },
    {
      question:
        "What is a Higher-Order Component (HOC) and provide an example use case?",
      answer:
        "HOC is a function that takes a component and returns an enhanced component. Used for cross-cutting concerns like authentication, logging, or data fetching. Example: withAuth(Component) that checks user auth before rendering protected component.",
      difficulty: "medium",
    },
    {
      question:
        "What is the difference between a Higher-Order Component (HOC) and a Higher-Order Function (HOF)?",
      answer:
        "HOC specifically works with React components (takes component, returns component). HOF is general JavaScript function that takes/returns functions (map, filter, debounce). HOCs are a specialized application of HOFs in React context.",
      difficulty: "medium",
    },
    {
      question:
        "When would you use useId instead of Math.random() or custom ID generators?",
      answer:
        "useId generates stable unique IDs that are consistent between server and client, preventing hydration mismatches. Use for accessibility (aria-labelledby, htmlFor). Unlike Math.random(), useId works with SSR and avoids ID mismatches during hydration.",
      difficulty: "medium",
    },
    {
      question:
        "How does useContext work and what are its performance implications?",
      answer:
        "useContext consumes value from nearest Context.Provider. Triggers re-renders on ALL consumers when context value changes, regardless of memoization. Split contexts by usage patterns to avoid unnecessary re-renders. Not optimized for frequent updates; consider state management for dynamic data.",
      difficulty: "medium",
    },
    {
      question:
        "What is the difference between useEffect and useLayoutEffect? When would you choose one over the other?",
      answer: `useEffect runs asynchronously after paint (non-blocking), ideal for most side effects like data fetching, subscriptions, or analytics. useLayoutEffect runs synchronously before paint (blocking), useful when you need to read DOM layout (dimensions, scroll positions) and update synchronously to avoid visual flicker. Default to useEffect. Use useLayoutEffect only for DOM measurements that affect next paint (e.g., tooltip positioning, modal centering). Overusing useLayoutEffect can hurt performance.`,
      difficulty: "medium",
    },
    {
      question:
        "Explain the virtual DOM and how reconciliation works in React.",
      answer: `Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new virtual DOM tree, diffs it against the previous one (reconciliation), calculates the minimal set of DOM mutations, and batches updates to the real DOM. This process optimizes performance by avoiding direct, expensive DOM manipulations.`,
      difficulty: "medium",
    },
    {
      question:
        "What are controlled vs uncontrolled components? Give examples.",
      answer: `Controlled components have form state managed by React via useState (value + onChange), giving full control over input behavior. Uncontrolled components let the DOM handle form state, accessed via refs (useRef). Controlled is preferred for validation, dynamic inputs, and consistency. Uncontrolled is simpler for stateless forms or integrating non-React code. Example: controlled <input value={name} onChange={e => setName(e.target.value)} /> vs uncontrolled <input defaultValue="John" ref={inputRef} />.`,
      difficulty: "medium",
    },
    {
      question: "What are React portals and when would you use them?",
      answer: `Portals (ReactDOM.createPortal) let you render children outside the parent component's DOM hierarchy, typically to document.body. Used for modals, tooltips, dropdowns, or any overlay that needs to break out of parent CSS constraints (overflow, z-index, clipping). Portal maintains React context and event bubbling despite different DOM position.`,
      difficulty: "medium",
    },
    {
      question:
        "Explain error boundaries in React. What can they catch and what cannot?",
      answer: `Error boundaries are class components implementing componentDidCatch or getDerivedStateFromError. They catch JavaScript errors in child components' render, lifecycle methods, and constructors. Cannot catch: event handlers (use try/catch), async code (setTimeout), server-side rendering, or errors in the error boundary itself. For functional components, use react-error-boundary library.`,
      difficulty: "medium",
    },
    {
      question: "What is the difference between useRef and useState?",
      answer: `useState triggers re-renders when updated. useRef does not trigger re-renders and is used for mutable values or DOM references.`,
      difficulty: "medium",
    },
    {
      question: "Explain how useReducer differs from useState.",
      answer: `useReducer is better for complex state logic and multiple state transitions. It uses a reducer function similar to Redux.`,
      difficulty: "medium",
    },
    {
      question: "How does React handle events differently from the DOM?",
      answer: `React uses synthetic events and event delegation for better performance and cross-browser compatibility.`,
      difficulty: "medium",
    },
    {
      question: "What is hydration in React?",
      answer: `Hydration attaches event listeners to server-rendered HTML instead of re-rendering it.`,
      difficulty: "medium",
    },
    {
      question: "What is the difference between CSR and SSR?",
      answer: `CSR renders on client after JS loads. SSR renders HTML on server and improves SEO and initial load time.`,
      difficulty: "medium",
    },

    {
      question: "Why should you avoid inline functions in JSX?",
      answer: `They create new references on each render, potentially causing unnecessary re-renders in child components.`,
      difficulty: "medium",
    },
    {
      question: "How do you prevent unnecessary API calls in React?",
      answer: `Use proper dependency arrays, debounce inputs, cache responses, and use libraries like React Query.`,
      difficulty: "medium",
    },
    {
      question: "What are advantages of using Inertia with React?",
      answer: `No API layer, faster development, shared routing, simpler architecture.`,
      difficulty: "medium",
    },
    {
      question: "What problems does React Query solve?",
      answer: `Caching, deduplication, background refetching, pagination, and syncing server state.`,
      difficulty: "medium",
    },
    {
      question: "What is React Query and why use it instead of useEffect?",
      answer: `React Query manages server state with caching, background updates, and avoids manual state handling. useEffect requires manual loading, error, and caching logic.`,
      difficulty: "medium",
    },
    {
      question: "What is the difference between server state and client state?",
      answer: `Client state is local UI state (forms, toggles). Server state comes from APIs and needs caching, syncing, and refetching.`,
      difficulty: "medium",
    },
    {
      question: "Explain queryKey in React Query.",
      answer: `queryKey uniquely identifies cached data. Changing the key triggers refetch.`,
      difficulty: "medium",
    },
    {
      question: "Difference between debouncing and throttling?",
      answer: `Debouncing waits for inactivity. Throttling limits execution frequency.`,
      difficulty: "medium",
    },
    {
      question: "How many types of state exist in React?",
      answer: `1. Local state (useState)
    2. Global state (Context/Redux)
    3. Server state (React Query)
    4. URL state (query params)
    5. Form state`,
      difficulty: "medium",
    },
    {
      question: "What is Inertia.js and how is it different from REST APIs?",
      answer: `Inertia removes need for APIs by directly connecting backend to frontend via server responses.`,
      difficulty: "medium",
    },
    {
      question: "How do you prevent excessive API calls in search?",
      answer: `Use debouncing, React Query caching, and query enabling/disabling.`,
      difficulty: "medium",
    },
    {
      question: "What is partial reload in Inertia?",
      answer: `Reload only specific props instead of full page data.`,
      difficulty: "medium",
    },
    {
      question: "When would you use useMemo or useCallback?",
      answer: `To memoize expensive computations or stable function references.`,
      difficulty: "medium",
    },

    {
      question: "How does form submission work in Inertia?",
      answer: `Forms are submitted using useForm hook which sends data to backend routes without page reload.`,
      difficulty: "easy",
    },
    {
      question: "What causes a component to re-render?",
      answer: `State changes, parent re-renders, or context updates can trigger renders.`,
      difficulty: "easy",
    },
    {
      question:
        "What is the purpose of the key prop in React lists? What happens if you use index as key?",
      answer: `Keys help React identify which items changed, added, or removed during reconciliation. Using index as key causes issues when list order changes (reordering, insertions, deletions) — React may update wrong components, cause state bugs, or degrade performance. Use stable, unique IDs from your data instead. Only use index for static, never-reordered lists.`,
      difficulty: "easy",
    },
    {
      question: 'Explain the concept of "lifting state up" in React.',
      answer: `When multiple components share the same data, move that state to their closest common ancestor. The ancestor manages state and passes it down via props along with callbacks to update it. This keeps components in sync and maintains a single source of truth. Often replaced by Context or state management libraries for deeply nested components.`,
      difficulty: "easy",
    },
    {
      question:
        "What are the differences between arrow functions and normal functions in React?",
      answer:
        "Arrow functions: lexical this binding (inherits from parent scope), cannot be constructors, no arguments object, concise syntax. Normal functions: own this binding (depends on call), can be constructors with new, have arguments object. In React, arrow functions preserve this in event handlers automatically.",
      difficulty: "easy",
    },
    {
      question: "Why are keys important in lists?",
      answer: `They help React identify elements and avoid re-creating DOM nodes.`,
      difficulty: "easy",
    },
    {
      question: "What is prop drilling and how do you avoid it?",
      answer: `Prop drilling is passing props deeply through components. Avoid using Context API or state management libraries.`,
      difficulty: "easy",
    },
    {
      question: "What is debouncing and when would you use it?",
      answer: `Debouncing delays execution until user stops typing. Used in search inputs and API calls.`,
      difficulty: "easy",
    },
  ] as InterviewQuestion[],
};
