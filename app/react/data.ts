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

export const reactData = {
  technicalTerms: [
    {
      term: 'JSX',
      definition: 'A syntax extension that lets you write UI structure in JavaScript.',
      category: 'Core',
      importance: 'high',
    },
    {
      term: 'Hooks',
      definition: 'Functions like useState and useEffect to manage state and lifecycle.',
      category: 'Core',
      importance: 'high',
    },
    {
      term: 'Reconciliation',
      definition: 'How React compares trees and updates the DOM efficiently.',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Context',
      definition: 'A way to pass data without prop drilling.',
      category: 'State',
      importance: 'medium',
    },
    {
      term: 'Memoization',
      definition: 'Avoiding expensive recomputation with useMemo/useCallback.',
      category: 'Performance',
      importance: 'high',
    },
    {
      term: 'React.memo',
      definition: 'Higher-order component that memoizes entire component renders based on props.',
      category: 'Performance',
      importance: 'high',
    },
    {
      term: 'useMemo',
      definition: 'Memoizes computed values; recalculates only when dependencies change.',
      category: 'Performance',
      importance: 'high',
    },
    {
      term: 'useCallback',
      definition: 'Memoizes function references; prevents function recreation on re-renders.',
      category: 'Performance',
      importance: 'high',
    },
    {
      term: 'useEffect',
      definition: 'Runs side effects asynchronously after paint; non-blocking for UI.',
      category: 'Hooks',
      importance: 'high',
    },
    {
      term: 'useLayoutEffect',
      definition: 'Runs side effects synchronously before paint; blocks UI but reads DOM layout.',
      category: 'Hooks',
      importance: 'medium',
    },
    {
      term: 'Suspense',
      definition: 'Coordinating loading states in the component tree.',
      category: 'Rendering',
      importance: 'low',
    },
    {
      term: 'Keys',
      definition: 'Stable identifiers for list items to preserve state.',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Concurrent Rendering',
      definition: 'Rendering work can be paused and resumed to keep the UI responsive.',
      category: 'Rendering',
      importance: 'medium',
    },
    {
      term: 'Strict Mode',
      definition: 'Development-only checks that highlight unsafe patterns.',
      category: 'Tooling',
      importance: 'low',
    },
    {
      term: 'Controlled vs Uncontrolled Components',
      definition: 'Controlled: form state via React; Uncontrolled: DOM handles state with refs.',
      category: 'Forms',
      importance: 'medium',
    },
    {
      term: 'Portals',
      definition: 'Render children outside parent DOM hierarchy, e.g., modals.',
      category: 'Rendering',
      importance: 'low',
    },
    {
      term: 'Error Boundaries',
      definition: 'Catch JS errors in child components; prevent full app crashes.',
      category: 'Error Handling',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Component Design',
      description: 'Reusable, composable UI',
      content: `Split UI into presentational and container components with clear props.`,
      code: `function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Component Example',
          code: `function UserCard({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}`,
          language: 'tsx',
        },
        {
          label: 'Memoized',
          code: `const UserCard = memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'State & Effects',
      description: 'Managing local and shared state',
      content: `Use hooks for state, effects, memoization, and refs.`,
      code: `const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Effect Example',
          code: `const [count, setCount] = useState(0);

useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);`,
          language: 'tsx',
        },
        {
          label: 'Cleanup',
          code: `useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Performance',
      description: 'Avoid unnecessary renders',
      content: `Memoization, stable references, and list keys.`,
      code: `const onSave = useCallback(() => save(data), [data]);

const filtered = useMemo(() => items.filter(f), [items]);`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Memo Hooks',
          code: `const onSave = useCallback(() => save(data), [data]);

const filtered = useMemo(() => items.filter(f), [items]);`,
          language: 'tsx',
        },
        {
          label: 'List Keys',
          code: `{items.map((item) => (
  <Row key={item.id} item={item} />
))}`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Rendering Optimization',
      description: 'React.memo vs useMemo vs useCallback',
      content: `React.memo memoizes entire component (skips re-render if props unchanged). useMemo memoizes calculated values. useCallback memoizes functions to prevent child re-renders.`,
      code: `// React.memo - component level
const Child = React.memo(({ data }) => <div>{data}</div>);

// useMemo - value level
const expensiveValue = useMemo(() => compute(items), [items]);

// useCallback - function level
const handleClick = useCallback(() => process(id), [id]);`,
      language: 'tsx',
      codeSamples: [
        {
          label: 'Comparison',
          code: `// React.memo stops child re-renders
const MemoChild = memo(ChildComponent);

// useMemo caches calculation result
const result = useMemo(() => a + b, [a, b]);

// useCallback caches function reference
const fn = useCallback(() => doSomething(a), [a]);`,
          language: 'tsx',
        },
      ],
    },
    {
      title: 'Effect Timing',
      description: 'useEffect vs useLayoutEffect',
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
      language: 'tsx',
      codeSamples: [
        {
          label: 'When to use each',
          code: `// useLayoutEffect for DOM measurements
useLayoutEffect(() => {
  const width = divRef.current.clientWidth;
  setWidth(width); // prevents flicker
}, []);

// useEffect for everything else
useEffect(() => {
  fetchData().then(setData);
}, []);`,
          language: 'tsx',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What causes a component to re-render?',
      answer: `State changes, parent re-renders, or context updates can trigger renders.`,
      difficulty: 'easy',
    },
    {
      question: 'What is the purpose of the key prop in React lists? What happens if you use index as key?',
      answer: `Keys help React identify which items changed, added, or removed during reconciliation. Using index as key causes issues when list order changes (reordering, insertions, deletions) — React may update wrong components, cause state bugs, or degrade performance. Use stable, unique IDs from your data instead. Only use index for static, never-reordered lists.`,
      difficulty: 'easy',
    },
    {
      question: 'Explain the concept of "lifting state up" in React.',
      answer: `When multiple components share the same data, move that state to their closest common ancestor. The ancestor manages state and passes it down via props along with callbacks to update it. This keeps components in sync and maintains a single source of truth. Often replaced by Context or state management libraries for deeply nested components.`,
      difficulty: 'easy',
    },

    {
      question: 'Why are keys important in lists?',
      answer: `They help React identify elements and avoid re-creating DOM nodes.`,
      difficulty: 'easy',
    },
    {
      question: 'When would you use useMemo or useCallback?',
      answer: `To memoize expensive computations or stable function references.`,
      difficulty: 'medium',
    },
    {
      question: 'What is the difference between useEffect and useLayoutEffect? When would you choose one over the other?',
      answer: `useEffect runs asynchronously after paint (non-blocking), ideal for most side effects like data fetching, subscriptions, or analytics. useLayoutEffect runs synchronously before paint (blocking), useful when you need to read DOM layout (dimensions, scroll positions) and update synchronously to avoid visual flicker. Default to useEffect. Use useLayoutEffect only for DOM measurements that affect next paint (e.g., tooltip positioning, modal centering). Overusing useLayoutEffect can hurt performance.`,
      difficulty: 'medium',
    },
    {
      question: 'Explain the virtual DOM and how reconciliation works in React.',
      answer: `Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new virtual DOM tree, diffs it against the previous one (reconciliation), calculates the minimal set of DOM mutations, and batches updates to the real DOM. This process optimizes performance by avoiding direct, expensive DOM manipulations.`,
      difficulty: 'medium',
    },
    {
      question: 'What are controlled vs uncontrolled components? Give examples.',
      answer: `Controlled components have form state managed by React via useState (value + onChange), giving full control over input behavior. Uncontrolled components let the DOM handle form state, accessed via refs (useRef). Controlled is preferred for validation, dynamic inputs, and consistency. Uncontrolled is simpler for stateless forms or integrating non-React code. Example: controlled <input value={name} onChange={e => setName(e.target.value)} /> vs uncontrolled <input defaultValue="John" ref={inputRef} />.`,
      difficulty: 'medium',
    },
    {
      question: 'What are React portals and when would you use them?',
      answer: `Portals (ReactDOM.createPortal) let you render children outside the parent component's DOM hierarchy, typically to document.body. Used for modals, tooltips, dropdowns, or any overlay that needs to break out of parent CSS constraints (overflow, z-index, clipping). Portal maintains React context and event bubbling despite different DOM position.`,
      difficulty: 'medium',
    },
    {
      question: 'Explain error boundaries in React. What can they catch and what cannot?',
      answer: `Error boundaries are class components implementing componentDidCatch or getDerivedStateFromError. They catch JavaScript errors in child components' render, lifecycle methods, and constructors. Cannot catch: event handlers (use try/catch), async code (setTimeout), server-side rendering, or errors in the error boundary itself. For functional components, use react-error-boundary library.`,
      difficulty: 'medium',
    },
    {
      question: 'What is the difference between shallow rendering and full DOM rendering in React tests?',
      answer: `Shallow rendering (from Enzyme or React Testing Library shallow) renders only one component level deep, ignoring children — good for isolated unit tests. Full DOM rendering (mount with jsdom) renders entire component tree, necessary for testing interactions, lifecycle methods, and DOM APIs. Modern React Testing Library prefers full rendering to simulate real user behavior.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you optimize a React app that re-renders too often?',
      answer: `1. Use React.memo for pure components. 2. useCallback for stable functions passed to children. 3. useMemo for expensive computations. 4. Virtualize long lists (react-window). 5. Code splitting with React.lazy + Suspense. 6. Avoid inline objects/functions in render. 7. Proper key props in lists. 8. Lift state down to avoid unnecessary parent re-renders. 9. Use React DevTools Profiler to identify bottlenecks.`,
      difficulty: 'hard',
    },
    {
      question: 'What is the difference between React.memo, useMemo, and useCallback? How does each affect re-rendering?',
      answer: `React.memo is a HOC that memoizes entire component rendering — component only re-renders if props change (shallow comparison). useMemo memoizes computed values — recalculates only when dependencies change, preventing expensive recalculations on every render. useCallback memoizes function references — prevents function recreation, which stops unnecessary child re-renders when functions are passed as props. Together: React.memo for component skip, useCallback for stable callbacks, useMemo for derived data.`,
      difficulty: 'hard',
    },
    {
      question: 'Explain how React batching works and its impact on state updates.',
      answer: `React batches updates in event handlers to reduce renders; setState calls may be merged.`,
      difficulty: 'hard',
    },
    {
      question: 'What problems can stale closures cause in hooks?',
      answer: `They can capture outdated state; fix by including deps or using refs.`,
      difficulty: 'hard',
    },
    {
      question: 'Why does Strict Mode double-invoke effects in development?',
      answer: `It helps surface side effects and ensures effects are resilient to re-mounting.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
