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

export const typescriptData = {
  technicalTerms: [
    {
      term: 'Type Inference',
      definition: 'The compiler determines types based on usage without explicit annotations.',
      category: 'Types',
      importance: 'high',
    },
    {
      term: 'Generics',
      definition: 'Type parameters that make components reusable with different types.',
      category: 'Types',
      importance: 'high',
    },
    {
      term: 'Type Guards',
      definition: 'Runtime checks that narrow types in control flow.',
      category: 'Safety',
      importance: 'medium',
    },
    {
      term: 'Discriminated Unions',
      definition: 'Union types distinguished by a common literal field.',
      category: 'Types',
      importance: 'medium',
    },
    {
      term: 'Utility Types',
      definition: 'Mapped helpers like Partial, Pick, and Record.',
      category: 'Types',
      importance: 'medium',
    },
    {
      term: 'Structural Typing',
      definition: 'Compatibility is based on shape rather than nominal types.',
      category: 'Types',
      importance: 'medium',
    },
    {
      term: 'Declaration Merging',
      definition: 'Interfaces can merge multiple declarations into one.',
      category: 'Types',
      importance: 'low',
    },
    {
      term: 'Mapped Types',
      definition: 'Types built by transforming properties of existing types.',
      category: 'Types',
      importance: 'medium',
    },
    {
      term: 'Conditional Types',
      definition: 'Types that resolve based on a condition.',
      category: 'Types',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Type Modeling',
      description: 'Designing clean interfaces',
      content: `Use interfaces, type aliases, and utility types to model domain data.`,
      code: `type User = {
  id: string;
  email: string;
  roles: string[];
};

type UserPreview = Pick<User, "id" | "email">;

const preview: UserPreview = { id: "1", email: "a@b.com" };`,
      language: 'typescript',
      codeSamples: [
        {
          label: 'Pick/Record',
          code: `type User = {
  id: string;
  email: string;
  roles: string[];
};

type UserPreview = Pick<User, "id" | "email">;

const preview: UserPreview = { id: "1", email: "a@b.com" };`,
          language: 'typescript',
        },
        {
          label: 'Extending Types',
          code: `interface Base { id: string; }
interface Admin extends Base { permissions: string[]; }`,
          language: 'typescript',
        },
      ],
    },
    {
      title: 'Generics in Practice',
      description: 'Reusable functions and components',
      content: `Use constraints and defaults to keep APIs safe and ergonomic.`,
      code: `function first<T>(items: T[]): T | undefined {
  return items[0];
}

const value = first<number>([1, 2, 3]);`,
      language: 'typescript',
      codeSamples: [
        {
          label: 'Generic Function',
          code: `function first<T>(items: T[]): T | undefined {
  return items[0];
}

const value = first<number>([1, 2, 3]);`,
          language: 'typescript',
        },
        {
          label: 'Constraints',
          code: `function byId<T extends { id: string }>(items: T[]) {
  return new Map(items.map((i) => [i.id, i]));
}`,
          language: 'typescript',
        },
      ],
    },
    {
      title: 'Config & Tooling',
      description: 'tsconfig and build strategy',
      content: `Targets, module settings, and strictness options for predictable builds.`,
      code: `{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext"
  }
}`,
      language: 'json',
      codeSamples: [
        {
          label: 'Strict Mode',
          code: `{
  "compilerOptions": {
    "strict": true,
    "target": "ES2022",
    "module": "ESNext"
  }
}`,
          language: 'json',
        },
        {
          label: 'Path Aliases',
          code: `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}`,
          language: 'json',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is the difference between interface and type?',
      answer: `Interfaces are extendable and mergeable, types are flexible for unions.`,
      difficulty: 'medium',
    },
    {
      question: 'How do type guards work?',
      answer: `They use runtime checks like typeof or instanceof to narrow types.`,
      difficulty: 'medium',
    },
    {
      question: 'Why use generics?',
      answer: `They preserve type information across reusable code.`,
      difficulty: 'easy',
    },
    {
      question: 'Explain covariance and contravariance in function types.',
      answer: `Return types are covariant, parameters are contravariant under strictFunctionTypes.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you model a state machine with discriminated unions?',
      answer: `Use a common literal field and union members to narrow in switch statements.`,
      difficulty: 'hard',
    },
    {
      question: 'What are distributive conditional types and when do they appear?',
      answer: `Conditional types distribute over unions, producing a union of results; appears when the checked type is a bare type parameter.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
