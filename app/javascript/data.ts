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

export const javascriptData = {
  technicalTerms: [
    {
      term: 'Closures',
      definition: 'Functions that capture variables from their outer scope even after the outer function returns.',
      category: 'Functions',
      importance: 'high',
    },
    {
      term: 'Event Loop',
      definition: 'The scheduling model that processes the call stack, microtasks, and macrotasks.',
      category: 'Runtime',
      importance: 'high',
    },
    {
      term: 'Prototype Chain',
      definition: 'Property lookup mechanism using linked prototypes.',
      category: 'Objects',
      importance: 'medium',
    },
    {
      term: 'Promises',
      definition: 'Objects representing eventual completion or failure of async operations.',
      category: 'Async',
      importance: 'high',
    },
    {
      term: 'Hoisting',
      definition: 'Variable and function declarations are moved to the top of their scope.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'This Binding',
      definition: 'How function invocation determines the value of this.',
      category: 'Functions',
      importance: 'medium',
    },
    {
      term: 'Modules (ESM)',
      definition: 'Import/export syntax for modular code with static analysis.',
      category: 'Modules',
      importance: 'medium',
    },
    {
      term: 'Call Stack',
      definition: 'The stack of active function calls in the runtime.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Microtask Queue',
      definition: 'Queue for promise callbacks executed before macrotasks.',
      category: 'Runtime',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Execution Contexts',
      description: 'How JS code is created and executed',
      content: `Global scope, function scope, and the call stack. Understand lexical environment and scope chain.`,
      code: `const value = 10;

function outer() {
  const value = 20;
  function inner() {
    return value;
  }
  return inner;
}

const fn = outer();
console.log(fn());`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Closure Example',
          code: `const value = 10;

function outer() {
  const value = 20;
  function inner() {
    return value;
  }
  return inner;
}

const fn = outer();
console.log(fn());`,
          language: 'javascript',
        },
        {
          label: 'Hoisting Pitfall',
          code: `console.log(total);
var total = 5;

function sum(a, b) {
  return a + b;
}`,
          language: 'javascript',
        },
      ],
    },
    {
      title: 'Async Patterns',
      description: 'Callbacks, Promises, and async/await',
      content: `Structure async code to avoid callback chains and handle errors consistently.`,
      code: `function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`).then((res) => res.json());
}

async function load() {
  try {
    const user = await fetchUser(42);
    console.log(user.email);
  } catch (err) {
    console.error(err);
  }
}

load();`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Async/Await',
          code: `function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`).then((res) => res.json());
}

async function load() {
  try {
    const user = await fetchUser(42);
    console.log(user.email);
  } catch (err) {
    console.error(err);
  }
}

load();`,
          language: 'javascript',
        },
        {
          label: 'Promise.all',
          code: `const ids = [1, 2, 3];
const users = await Promise.all(ids.map(fetchUser));
console.log(users.length);`,
          language: 'javascript',
        },
      ],
    },
    {
      title: 'Arrays & Objects',
      description: 'Core data structures in JS',
      content: `Mutation vs immutability and common operations to keep code predictable.`,
      code: `const user = { name: "Ava", role: "dev" };
const updated = { ...user, role: "lead" };`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Immutable Update',
          code: `const user = { name: "Ava", role: "dev" };
const updated = { ...user, role: "lead" };`,
          language: 'javascript',
        },
        {
          label: 'Safe Copy',
          code: `const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
const sorted = [...numbers].sort();`,
          language: 'javascript',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is a closure and why is it useful?',
      answer: `A closure lets a function remember variables from its defining scope.`,
      difficulty: 'easy',
    },
    {
      question: 'Explain the event loop and microtasks.',
      answer: `The event loop processes the call stack, then microtasks, then macrotasks.`,
      difficulty: 'medium',
    },
    {
      question: 'What is the difference between == and ===?',
      answer: `== coerces types before comparison, while === compares type and value.`,
      difficulty: 'easy',
    },
    {
      question: 'How does this binding change across call, apply, and arrow functions?',
      answer: `call/apply set this explicitly, while arrow functions capture this from the outer scope.`,
      difficulty: 'hard',
    },
    {
      question: 'Explain prototypal inheritance and how it differs from classical inheritance.',
      answer: `Objects link to prototypes at runtime instead of class-based instantiation; behavior is shared via the prototype chain.`,
      difficulty: 'hard',
    },
    {
      question: 'Why can awaiting inside a for-loop be a performance issue, and how do you fix it?',
      answer: `It serializes async work; use Promise.all for parallelism when order is not required.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
