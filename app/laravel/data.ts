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

export const laravelData = {
  technicalTerms: [
    {
      term: 'Eloquent ORM',
      definition: 'ActiveRecord ORM for database access.',
      category: 'Database',
      importance: 'high',
    },
    {
      term: 'Blade',
      definition: 'Templating engine for server-rendered views.',
      category: 'View',
      importance: 'medium',
    },
    {
      term: 'Middleware',
      definition: 'Request filters and auth checks.',
      category: 'Core',
      importance: 'medium',
    },
    {
      term: 'Artisan',
      definition: 'CLI tooling for Laravel.',
      category: 'Tooling',
      importance: 'low',
    },
    {
      term: 'Service Container',
      definition: 'Dependency injection container.',
      category: 'Architecture',
      importance: 'medium',
    },
    {
      term: 'Queues',
      definition: 'Background job processing.',
      category: 'Scalability',
      importance: 'medium',
    },
    {
      term: 'Policies',
      definition: 'Authorization logic for models.',
      category: 'Security',
      importance: 'medium',
    },
    {
      term: 'Migrations',
      definition: 'Version-controlled database schema changes.',
      category: 'Database',
      importance: 'medium',
    },
    {
      term: 'Events & Listeners',
      definition: 'Decouple actions with publish/subscribe patterns.',
      category: 'Architecture',
      importance: 'medium',
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: 'Routing',
      description: 'Define web and API routes',
      content: `Use controller-based routes for maintainability.`,
      code: `Route::get("/users", [UserController::class, "index"]);
Route::post("/users", [UserController::class, "store"]);`,
      language: 'php',
      codeSamples: [
        {
          label: 'Routes',
          code: `Route::get("/users", [UserController::class, "index"]);
Route::post("/users", [UserController::class, "store"]);`,
          language: 'php',
        },
        {
          label: 'Group',
          code: `Route::middleware(["auth"])
  ->prefix("admin")
  ->group(function () {
    Route::get("/dashboard", [AdminController::class, "index"]);
  });`,
          language: 'php',
        },
      ],
    },
    {
      title: 'Eloquent Models',
      description: 'Data access and relationships',
      content: `Define models, relationships, and queries.`,
      code: `class User extends Model {
  public function posts() {
    return $this->hasMany(Post::class);
  }
}

$users = User::with("posts")->get();`,
      language: 'php',
      codeSamples: [
        {
          label: 'Relationships',
          code: `class User extends Model {
  public function posts() {
    return $this->hasMany(Post::class);
  }
}

$users = User::with("posts")->get();`,
          language: 'php',
        },
        {
          label: 'Constraints',
          code: `$users = User::with(["posts" => function ($q) {
  $q->where("published", true);
}])->get();`,
          language: 'php',
        },
      ],
    },
    {
      title: 'Auth & Security',
      description: 'Authentication and authorization',
      content: `Use guards, policies, and validation.`,
      code: `public function update(User $user) {
  $this->authorize("update", $user);
  // update logic
}`,
      language: 'php',
      codeSamples: [
        {
          label: 'Policy',
          code: `public function update(User $user) {
  $this->authorize("update", $user);
  // update logic
}`,
          language: 'php',
        },
        {
          label: 'Request Validation',
          code: `public function store(StoreUserRequest $request) {
  $data = $request->validated();
  User::create($data);
}`,
          language: 'php',
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: 'What is Eloquent?',
      answer: `Laravel ORM that maps tables to models with ActiveRecord patterns.`,
      difficulty: 'easy',
    },
    {
      question: 'How does middleware work?',
      answer: `Middleware runs before or after requests to apply logic such as auth.`,
      difficulty: 'medium',
    },
    {
      question: 'What is Blade?',
      answer: `The templating engine that supports layouts and components.`,
      difficulty: 'easy',
    },
    {
      question: 'How do you handle background jobs and retries?',
      answer: `Use queues with workers, set retry policies, and monitor failed jobs.`,
      difficulty: 'hard',
    },
    {
      question: 'Explain the service container and how Laravel resolves dependencies.',
      answer: `It binds abstractions to implementations and resolves them via constructor injection.`,
      difficulty: 'hard',
    },
    {
      question: 'How do you prevent N+1 queries in Laravel?',
      answer: `Use eager loading with with() and avoid lazy loading in loops.`,
      difficulty: 'hard',
    },
  ] as InterviewQuestion[],
};
