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

export const genericData = {
  technicalTerms: [
    {
      term: 'Big O Notation',
      definition:
        'A way to describe how runtime or memory usage grows as input size increases. It focuses on upper bounds and ignores constants.',
      category: 'Algorithms',
      importance: 'high',
    },
    {
      term: 'Time Complexity',
      definition:
        'The amount of time an algorithm takes to run as a function of input size, often expressed with Big O.',
      category: 'Algorithms',
      importance: 'high',
    },
    {
      term: 'Space Complexity',
      definition:
        'The amount of memory an algorithm uses as input size grows, including auxiliary data structures.',
      category: 'Algorithms',
      importance: 'medium',
    },
    {
      term: 'Recursion',
      definition:
        'A technique where a function calls itself to break a problem into smaller subproblems until a base case is reached.',
      category: 'Programming',
      importance: 'high',
    },
    {
      term: 'Hash Table',
      definition:
        'A data structure that maps keys to values using a hash function for near O(1) lookups on average.',
      category: 'Data Structures',
      importance: 'high',
    },
    {
      term: 'Stack vs Queue',
      definition:
        'A stack is LIFO (last in, first out) while a queue is FIFO (first in, first out).',
      category: 'Data Structures',
      importance: 'medium',
    },
    {
      term: 'SOLID Principles',
      definition:
        'Five design principles (SRP, OCP, LSP, ISP, DIP) that improve maintainability and extensibility in OO systems.',
      category: 'Design',
      importance: 'medium',
    },
    {
      term: 'Normalization',
      definition:
        'A database design technique that reduces redundancy and improves data integrity by organizing tables.',
      category: 'Databases',
      importance: 'medium',
    },
    {
      term: 'Binary Search Tree (BST)',
      definition:
        'A tree where left subtree values are smaller and right subtree values are larger, enabling O(log n) average lookups.',
      category: 'Data Structures',
      importance: 'medium',
    },
    {
      term: 'Hash Collision',
      definition:
        'When two different keys map to the same hash bucket, requiring collision resolution strategies.',
      category: 'Data Structures',
      importance: 'medium',
    },
    {
      term: 'ACID',
      definition:
        'Database transaction guarantees: Atomicity, Consistency, Isolation, and Durability.',
      category: 'Databases',
      importance: 'medium',
    },
    {
      term: 'Concurrency vs Parallelism',
      definition:
        'Concurrency is managing multiple tasks at once; parallelism is executing tasks simultaneously.',
      category: 'Systems',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Big O Cheat Sheet',
      description: 'Common time complexities and when they show up',
      content:
        `Big O describes how runtime scales with input size (n). Knowing common patterns helps you reason about performance quickly.

**Common Complexities:**
- O(1): Constant time (hash map lookup on average)
- O(log n): Binary search, balanced tree operations
- O(n): Linear scan
- O(n log n): Efficient sorts (merge sort, quicksort average)
- O(n^2): Nested loops over the same collection

**Rules of thumb:**
- Loops over n items -> O(n)
- Nested loops over n -> O(n^2)
- Divide and conquer -> O(log n) or O(n log n)`,
      code:
        `// O(n)
for (let i = 0; i < n; i++) {
  sum += arr[i];
}

// O(n^2)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    pairs.push([i, j]);
  }
}

// O(log n) - binary search
let left = 0;
let right = n - 1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) break;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}`,
      language: 'typescript',
    },
    {
      title: 'Arrays vs Linked Lists',
      description: 'Tradeoffs in access speed, insertion, and memory',
      content:
        `Arrays provide O(1) indexed access but inserts/deletes in the middle cost O(n) due to shifting.
Linked lists provide O(1) inserts/deletes when you have the node, but indexed access is O(n).

**Use arrays when:**
- You need random access
- Cache locality matters
- The size does not change often

**Use linked lists when:**
- You do frequent insertions/removals
- You can iterate sequentially`,
      code:
        `// Array insert in the middle (O(n))
const arr = [1, 2, 3, 4];
arr.splice(2, 0, 99); // [1, 2, 99, 3, 4]

// Linked list insertion (O(1) with node reference)
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
const head = new Node(1, new Node(2, new Node(3)));
const node = head.next; // value 2
node.next = new Node(99, node.next);`,
      language: 'javascript',
    },
    {
      title: 'Hash Tables',
      description: 'Fast lookups with hashing and collision handling',
      content:
        `Hash tables map keys to values using a hash function. Collisions are handled by chaining or open addressing.

**Average case:** O(1) insert, delete, lookup
**Worst case:** O(n) if many collisions

**Key points:**
- Choose a good hash function
- Resize when load factor gets high
- Collisions are normal, handle them well`,
      code:
        `// Example: frequency count
const counts = new Map<string, number>();
for (const item of items) {
  counts.set(item, (counts.get(item) ?? 0) + 1);
}

// Lookup
const apples = counts.get('apple') ?? 0;`,
      language: 'typescript',
    },
    {
      title: 'Trees and Traversals',
      description: 'DFS, BFS, and when to use each',
      content:
        `Trees are hierarchical data structures. Traversals help you visit nodes in a specific order.

**DFS (Depth First Search):**
- In-order, pre-order, post-order
- Good for path exploration and recursion

**BFS (Breadth First Search):**
- Level-order traversal
- Good for shortest paths in unweighted graphs`,
      code:
        `// BFS on a tree
const queue = [root];
while (queue.length > 0) {
  const node = queue.shift();
  visit(node);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
}`,
      language: 'typescript',
    },
    {
      title: 'SOLID Principles',
      description: 'Design principles for maintainable code',
      content:
        `SOLID keeps code modular and easier to change.

- **S**ingle Responsibility: one reason to change
- **O**pen/Closed: open for extension, closed for modification
- **L**iskov Substitution: subtypes should be replaceable for base types
- **I**nterface Segregation: small, focused interfaces
- **D**ependency Inversion: depend on abstractions, not concrete types`,
      code:
        `// Dependency Inversion example
interface Notifier {
  send(message: string): void;
}

class EmailNotifier implements Notifier {
  send(message: string) {
    console.log('Email:', message);
  }
}

class AlertService {
  constructor(private notifier: Notifier) {}
  alert(msg: string) {
    this.notifier.send(msg);
  }
}`,
      language: 'typescript',
    },
  ] as Topic[],

  questions: [
    {
      question: 'Explain the difference between a stack and a queue.',
      answer:
        `A stack is LIFO (last in, first out) and a queue is FIFO (first in, first out).

**Stack examples:** call stack, undo history
**Queue examples:** task scheduling, BFS traversal`,
      difficulty: 'easy',
    },
    {
      question: 'What is Big O and why is it important?',
      answer:
        `Big O describes how an algorithm scales with input size. It helps you compare algorithms, predict performance, and avoid bottlenecks as data grows.`,
      difficulty: 'easy',
    },
    {
      question: 'When would you choose a hash table over a balanced tree?',
      answer:
        `Use a hash table when you need fast average-case lookups and do not require sorted order. Use a balanced tree when you need ordered traversal or range queries with reliable O(log n) performance.`,
      difficulty: 'medium',
    },
    {
      question: 'What is the difference between MVC and MVP?',
      answer:
        `Both separate concerns. In MVC, the controller handles user input and updates the model and view. In MVP, the presenter contains UI logic and the view is more passive, which can improve testability.`,
      difficulty: 'medium',
    },
    {
      question: 'Describe a situation where recursion is a bad choice.',
      answer:
        `Recursion can be a poor choice when the depth is large and risks stack overflow, or when an iterative solution is simpler and more memory efficient.`,
      difficulty: 'medium',
    },
    {
      question: 'Design an LRU cache data structure and explain its time complexity.',
      answer:
        `Use a hash map for O(1) key lookup and a doubly linked list to track recency. Gets and puts are O(1).`,
      difficulty: 'hard',
    },
    {
      question: 'Explain the difference between optimistic and pessimistic locking.',
      answer:
        `Optimistic locking assumes minimal conflicts and checks versions on commit; pessimistic locking locks data upfront to prevent conflicts.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
