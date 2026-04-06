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

export const pythonData = {
  technicalTerms: [
    {
      term: 'List Comprehension',
      definition: 'Concise way to create lists from iterables.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'Decorators',
      definition: 'Functions that wrap other functions to add behavior.',
      category: 'Advanced',
      importance: 'high',
    },
    {
      term: 'Generators',
      definition: 'Lazy iterators created with yield.',
      category: 'Performance',
      importance: 'medium',
    },
    {
      term: 'GIL',
      definition: 'Global Interpreter Lock affecting threading.',
      category: 'Runtime',
      importance: 'medium',
    },
    {
      term: 'Context Managers',
      definition: 'Resource management with with statements.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'Type Hints',
      definition: 'Static typing annotations for readability and tooling.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'Asyncio',
      definition: 'Single-threaded async framework.',
      category: 'Async',
      importance: 'medium',
    },
    {
      term: 'Virtual Environments',
      definition: 'Isolated dependency environments per project.',
      category: 'Tooling',
      importance: 'medium',
    },
    {
      term: 'PEP 484',
      definition: 'Type hinting standard for Python.',
      category: 'Types',
      importance: 'low',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Data Structures',
      description: 'Lists, dicts, sets',
      content: `Know common operations and performance implications.`,
      code: `items = [1, 2, 3]
unique = set(items)
counts = {x: items.count(x) for x in items}`,
      language: 'python',
      codeSamples: [
        {
          label: 'Basics',
          code: `items = [1, 2, 3]
unique = set(items)
counts = {x: items.count(x) for x in items}`,
          language: 'python',
        },
        {
          label: 'Counter',
          code: `from collections import Counter
counts = Counter(items)
print(counts.most_common(1))`,
          language: 'python',
        },
      ],
    },
    {
      title: 'OOP',
      description: 'Classes and inheritance',
      content: `Use dataclasses and type hints for clarity.`,
      code: `from dataclasses import dataclass

@dataclass
class User:
  id: int
  email: str`,
      language: 'python',
      codeSamples: [
        {
          label: 'Dataclass',
          code: `from dataclasses import dataclass

@dataclass
class User:
  id: int
  email: str`,
          language: 'python',
        },
        {
          label: 'Protocol',
          code: `from typing import Protocol

class Cache(Protocol):
  def get(self, key: str) -> str | None: ...`,
          language: 'python',
        },
      ],
    },
    {
      title: 'Web Frameworks',
      description: 'Flask and Django basics',
      content: `Routing, templates, and ORM patterns.`,
      code: `from flask import Flask

app = Flask(__name__)

@app.get("/health")
def health():
  return {"ok": True}`,
      language: 'python',
      codeSamples: [
        {
          label: 'Flask',
          code: `from flask import Flask

app = Flask(__name__)

@app.get("/health")
def health():
  return {"ok": True}`,
          language: 'python',
        },
        {
          label: 'Django URL',
          code: `from django.urls import path

urlpatterns = [
  path("health/", health_view),
]`,
          language: 'python',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is a decorator?',
      answer: `A callable that wraps another function to add behavior.`,
      difficulty: 'medium',
    },
    {
      question: 'How do generators work?',
      answer: `They yield values lazily and maintain state between iterations.`,
      difficulty: 'medium',
    },
    {
      question: 'What is the GIL?',
      answer: `A lock that allows only one thread to execute Python bytecode at a time.`,
      difficulty: 'medium',
    },
    {
      question: 'When would you use asyncio vs threading?',
      answer: `Asyncio for I/O-bound concurrency, threading for blocking I/O with C extensions.`,
      difficulty: 'hard',
    },
    {
      question: 'Explain the difference between shallow and deep copy.',
      answer: `Shallow copy copies references; deep copy recursively copies nested objects.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you avoid blocking the event loop in asyncio?',
      answer: `Use await for I/O and run CPU work in executors.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
