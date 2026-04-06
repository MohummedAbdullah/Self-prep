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

export const expressData = {
  technicalTerms: [
    {
      term: 'Middleware',
      definition: 'Functions that run in request/response lifecycle.',
      category: 'Core',
      importance: 'high',
    },
    {
      term: 'Router',
      definition: 'Modular route definitions.',
      category: 'Routing',
      importance: 'medium',
    },
    {
      term: 'Error Handling',
      definition: 'Centralized error middleware for consistent responses.',
      category: 'Reliability',
      importance: 'medium',
    },
    {
      term: 'Request Validation',
      definition: 'Validating inputs to protect APIs.',
      category: 'Security',
      importance: 'high',
    },
    {
      term: 'Rate Limiting',
      definition: 'Throttling requests to protect services.',
      category: 'Security',
      importance: 'medium',
    },
    {
      term: 'CORS',
      definition: 'Cross-origin resource sharing rules.',
      category: 'Security',
      importance: 'medium',
    },
    {
      term: 'Idempotency',
      definition: 'Safe replays of requests without side effects.',
      category: 'API',
      importance: 'medium',
    },
    {
      term: 'Helmet',
      definition: 'Security headers middleware for Express.',
      category: 'Security',
      importance: 'medium',
    },
    {
      term: 'CSRF',
      definition: 'Cross-site request forgery protection strategies.',
      category: 'Security',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Routing',
      description: 'Define clear endpoints',
      content: `Use routers to organize resource-based routes.`,
      code: `const router = require("express").Router();

router.get("/users", listUsers);
router.post("/users", createUser);

module.exports = router;`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Router',
          code: `const router = require("express").Router();

router.get("/users", listUsers);
router.post("/users", createUser);

module.exports = router;`,
          language: 'javascript',
        },
        {
          label: 'Versioned Routes',
          code: `app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);`,
          language: 'javascript',
        },
      ],
    },
    {
      title: 'Middleware Chain',
      description: 'Compose logic',
      content: `Authentication, logging, and validation as middleware.`,
      code: `app.use(authenticate);
app.use(logRequests);
app.use("/api", apiRouter);`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Middleware Order',
          code: `app.use(authenticate);
app.use(logRequests);
app.use("/api", apiRouter);`,
          language: 'javascript',
        },
        {
          label: 'Validation',
          code: `app.post("/users", validateUser, createUser);`,
          language: 'javascript',
        },
      ],
    },
    {
      title: 'Error Strategy',
      description: 'Consistent API errors',
      content: `Use error handlers and response shapes.`,
      code: `app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
  });
});`,
      language: 'javascript',
      codeSamples: [
        {
          label: 'Error Handler',
          code: `app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
  });
});`,
          language: 'javascript',
        },
        {
          label: 'Custom Error',
          code: `class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}`,
          language: 'javascript',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is middleware in Express?',
      answer: `A function that can modify request/response or terminate the cycle.`,
      difficulty: 'easy',
    },
    {
      question: 'How do you handle errors?',
      answer: `Use next(err) and centralized error-handling middleware.`,
      difficulty: 'medium',
    },
    {
      question: 'Why separate routers?',
      answer: `For modularity and clearer route organization.`,
      difficulty: 'easy',
    },
    {
      question: 'How would you implement idempotent POST endpoints?',
      answer: `Use idempotency keys and store request results to prevent duplicates.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you secure an Express API in production?',
      answer: `Use HTTPS, CORS config, validation, rate limiting, and secure headers.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you design stateless auth while supporting logout?',
      answer: `Use short-lived access tokens with refresh token revocation.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
