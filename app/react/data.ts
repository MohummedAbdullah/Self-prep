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
  ] as Topic[],

  questions: [
    {
      question: 'What causes a component to re-render?',
      answer: `State changes, parent re-renders, or context updates can trigger renders.`,
      difficulty: 'easy',
    },
    {
      question: 'When would you use useMemo or useCallback?',
      answer: `To memoize expensive computations or stable function references.`,
      difficulty: 'medium',
    },
    {
      question: 'Why are keys important in lists?',
      answer: `They help React identify elements and avoid re-creating DOM nodes.`,
      difficulty: 'easy',
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
