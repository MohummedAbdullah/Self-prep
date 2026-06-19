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

export const javascriptData = {
  technicalTerms: [
    {
      term: "Closures",
      definition:
        "Functions that capture variables from their outer scope even after the outer function returns.",
      category: "Functions",
      importance: "high",
    },
    {
      term: "Event Loop",
      definition:
        "The scheduling model that processes the call stack, microtasks, and macrotasks.",
      category: "Runtime",
      importance: "high",
    },
    {
      term: "Prototype Chain",
      definition: "Property lookup mechanism using linked prototypes.",
      category: "Objects",
      importance: "medium",
    },
    {
      term: "Promises",
      definition:
        "Objects representing eventual completion or failure of async operations.",
      category: "Async",
      importance: "high",
    },
    {
      term: "Hoisting",
      definition:
        "Variable and function declarations are moved to the top of their scope.",
      category: "Core",
      importance: "medium",
    },
    {
      term: "This Binding",
      definition: "How function invocation determines the value of this.",
      category: "Functions",
      importance: "medium",
    },
    {
      term: "Modules (ESM)",
      definition: "Import/export syntax for modular code with static analysis.",
      category: "Modules",
      importance: "medium",
    },
    {
      term: "Call Stack",
      definition: "The stack of active function calls in the runtime.",
      category: "Runtime",
      importance: "medium",
    },
    {
      term: "Microtask Queue",
      definition: "Queue for promise callbacks executed before macrotasks.",
      category: "Runtime",
      importance: "medium",
    },
    {
      term: "REST API",
      definition:
        "Representational State Transfer - an architectural style for designing networked applications using stateless, cacheable communications via HTTP methods.",
      category: "API Design",
      importance: "high",
    },
    {
      term: "OpenAPI Specification",
      definition:
        "A standard, language-agnostic interface description for REST APIs that allows humans and computers to discover and understand capabilities without accessing source code.",
      category: "API Design",
      importance: "high",
    },
    {
      term: "FastAPI",
      definition:
        "A modern, fast (high-performance) Python web framework for building APIs with automatic OpenAPI documentation and validation based on Python type hints.",
      category: "API Frameworks",
      importance: "high",
    },
    {
      term: "Webhooks",
      definition:
        "User-defined HTTP callbacks triggered by specific events, allowing real-time communication between applications without continuous polling.",
      category: "API Integration",
      importance: "high",
    },
    {
      term: "Event Routing",
      definition:
        "The process of directing events from sources to destinations based on rules, filters, or patterns, often used in event-driven architectures.",
      category: "Event-Driven Architecture",
      importance: "medium",
    },
    {
      term: "Connectivity API",
      definition:
        "APIs that manage network connections, device pairing, and data transfer between systems, often used in IoT and telecommunications.",
      category: "API Integration",
      importance: "medium",
    },
    {
      term: "Public API",
      definition:
        "An API that is openly available for use by external developers, often with authentication and rate limiting, providing access to specific services or data.",
      category: "API Design",
      importance: "medium",
    },
    {
      term: "Demand API",
      definition:
        "APIs designed to handle real-time demand forecasting, pricing adjustments, and resource allocation based on current demand patterns.",
      category: "API Integration",
      importance: "medium",
    },
    {
      term: "API Gateway",
      definition:
        "A server that acts as a single entry point for multiple APIs, handling request routing, composition, authentication, and rate limiting.",
      category: "API Architecture",
      importance: "high",
    },
    {
      term: "Idempotency",
      definition:
        "A property where making multiple identical API requests produces the same result as a single request, crucial for reliable operations in distributed systems.",
      category: "API Design",
      importance: "high",
    },
  ] as TechnicalTerm[],

  topics: [
    {
      title: "Execution Contexts",
      description: "How JS code is created and executed",
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
      language: "javascript",
      codeSamples: [
        {
          label: "Closure Example",
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
          language: "javascript",
        },
        {
          label: "Hoisting Pitfall",
          code: `console.log(total);
var total = 5;

function sum(a, b) {
  return a + b;
}`,
          language: "javascript",
        },
      ],
    },
    {
      title: "Async Patterns",
      description: "Callbacks, Promises, and async/await",
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
      language: "javascript",
      codeSamples: [
        {
          label: "Async/Await",
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
          language: "javascript",
        },
        {
          label: "Promise.all",
          code: `const ids = [1, 2, 3];
const users = await Promise.all(ids.map(fetchUser));
console.log(users.length);`,
          language: "javascript",
        },
      ],
    },
    {
      title: "Arrays & Objects",
      description: "Core data structures in JS",
      content: `Mutation vs immutability and common operations to keep code predictable.`,
      code: `const user = { name: "Ava", role: "dev" };
const updated = { ...user, role: "lead" };`,
      language: "javascript",
      codeSamples: [
        {
          label: "Immutable Update",
          code: `const user = { name: "Ava", role: "dev" };
const updated = { ...user, role: "lead" };`,
          language: "javascript",
        },
        {
          label: "Safe Copy",
          code: `const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
const sorted = [...numbers].sort();`,
          language: "javascript",
        },
      ],
    },
    {
      title: "REST API Design Principles",
      description: "Understanding RESTful architecture and best practices",
      content: `REST APIs follow six architectural constraints: client-server, stateless, cacheable, uniform interface, layered system, and code-on-demand. The uniform interface includes resource identification, representation manipulation, self-descriptive messages, and hypermedia as the engine of application state (HATEOAS).

Key HTTP methods in REST:
- GET: Retrieve a resource
- POST: Create a new resource
- PUT: Update an entire resource
- PATCH: Partial update of a resource
- DELETE: Remove a resource

HTTP status codes indicate the result of the request:
- 2xx: Success (200 OK, 201 Created)
- 4xx: Client errors (400 Bad Request, 401 Unauthorized, 404 Not Found)
- 5xx: Server errors (500 Internal Server Error)`,
      code: `// Example REST API endpoint in FastAPI
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users = {}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    return users[user_id]

@app.post("/users")
async def create_user(user: User):
    if user.id in users:
        raise HTTPException(status_code=400, detail="User already exists")
    users[user.id] = user
    return {"message": "User created", "user": user}`,
      language: "python",
      codeSamples: [
        {
          label: "REST API with FastAPI",
          code: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    id: int
    name: str
    email: str

users = {}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    if user_id not in users:
        raise HTTPException(status_code=404, detail="User not found")
    return users[user_id]

@app.post("/users")
async def create_user(user: User):
    if user.id in users:
        raise HTTPException(status_code=400, detail="User already exists")
    users[user.id] = user
    return {"message": "User created", "user": user}`,
          language: "python",
        },
      ],
    },
    {
      title: "OpenAPI and API Documentation",
      description: "Using OpenAPI specification for API documentation",
      content: `OpenAPI (formerly Swagger) provides a standard way to describe REST APIs. It allows for:
- Automatic API documentation generation
- Interactive API exploration (Swagger UI)
- Client SDK generation
- API contract testing

Key OpenAPI components:
- Paths: API endpoints with operations
- Parameters: Query, path, header, and body parameters
- Schemas: Data models using JSON Schema
- Security: Authentication and authorization definitions
- Responses: Expected HTTP status codes and response schemas`,
      code: `# OpenAPI 3.0.0 specification example
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string`,
      language: "yaml",
      codeSamples: [
        {
          label: "OpenAPI Specification",
          code: `openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: integer
        name:
          type: string
        email:
          type: string`,
          language: "yaml",
        },
      ],
    },
    {
      title: "Webhooks and Event-Driven Architecture",
      description: "Implementing webhooks for real-time notifications",
      content: `Webhooks enable real-time communication between services by allowing one system to notify another when specific events occur. Unlike traditional polling, webhooks provide immediate event delivery.

Webhook Architecture:
1. **Event Source**: Generates events (e.g., payment processed, user created)
2. **Webhook Payload**: JSON/XML data containing event details
3. **Webhook Endpoint**: URL where the receiver accepts POST requests
4. **Delivery Reliability**: Retry mechanisms, idempotency, and signature verification

Best Practices:
- Implement signature verification for security
- Use idempotency keys to prevent duplicate processing
- Design for eventual consistency
- Implement retry policies with exponential backoff
- Log all webhook deliveries for debugging`,
      code: `// Example webhook implementation in Node.js/Express
const express = require('express');
const crypto = require('crypto');
const app = express();

// Secret for webhook signature verification
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

// Webhook receiver
app.post('/webhooks/payment', express.raw({type: 'application/json'}), (req, res) => {
    // Verify signature
    const signature = req.headers['x-webhook-signature'];
    const hash = crypto.createHmac('sha256', WEBHOOK_SECRET)
                       .update(req.body)
                       .digest('hex');
    
    if (signature !== hash) {
        return res.status(401).json({error: 'Invalid signature'});
    }

    try {
        const event = JSON.parse(req.body);
        console.log('Received webhook event:', event);
        
        // Process the event (idempotent operation)
        if (event.type === 'payment.completed') {
            // Update order status, send confirmation, etc.
        }
        
        res.status(200).json({received: true});
    } catch (error) {
        res.status(500).json({error: 'Processing failed'});
    }
});`,
      language: "javascript",
      codeSamples: [
        {
          label: "Webhook Implementation",
          code: `const express = require('express');
const crypto = require('crypto');
const app = express();

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

app.post('/webhooks/payment', express.raw({type: 'application/json'}), (req, res) => {
    const signature = req.headers['x-webhook-signature'];
    const hash = crypto.createHmac('sha256', WEBHOOK_SECRET)
                       .update(req.body)
                       .digest('hex');
    
    if (signature !== hash) {
        return res.status(401).json({error: 'Invalid signature'});
    }

    try {
        const event = JSON.parse(req.body);
        console.log('Received webhook event:', event);
        
        if (event.type === 'payment.completed') {
            // Process payment completion
        }
        
        res.status(200).json({received: true});
    } catch (error) {
        res.status(500).json({error: 'Processing failed'});
    }
});`,
          language: "javascript",
        },
      ],
    },
    {
      title: "Event Routing and Message Brokers",
      description: "Managing event flow in distributed systems",
      content: `Event routing is the process of directing events from producers to consumers based on rules, patterns, or topics. It enables decoupled, scalable systems.

**Event Routing Patterns:**
1. **Topic-based Routing**: Events published to topics, consumers subscribe to topics
2. **Content-based Routing**: Events routed based on content attributes
3. **Conditional Routing**: Events filtered using specific conditions

**Message Brokers (Kafka, RabbitMQ, AWS SQS/SNS):**
- Provide reliable event delivery
- Enable message persistence
- Support publish-subscribe patterns
- Handle consumer group management
- Provide exactly-once or at-least-once delivery guarantees

**Event Routing Best Practices:**
- Use dead-letter queues for failed messages
- Implement idempotent consumers
- Use message schemas for validation
- Monitor event throughput and consumer lag`,
      code: `// Example with AWS SNS/SQS event routing
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

const snsClient = new SNSClient({ region: 'us-east-1' });
const sqsClient = new SQSClient({ region: 'us-east-1' });

// Event Publisher
async function publishEvent(topic, event) {
    const command = new PublishCommand({
        TopicArn: topic,
        Message: JSON.stringify(event),
        MessageAttributes: {
            eventType: {
                DataType: 'String',
                StringValue: event.type
            }
        }
    });
    return await snsClient.send(command);
}

// Event Consumer
async function consumeEvents(queueUrl) {
    const command = new ReceiveMessageCommand({
        QueueUrl: queueUrl,
        MaxNumberOfMessages: 10,
        WaitTimeSeconds: 20,
        VisibilityTimeout: 30
    });
    
    const response = await sqsClient.send(command);
    
    for (const message of response.Messages || []) {
        try {
            const event = JSON.parse(message.Body);
            await processEvent(event);
            await deleteMessage(queueUrl, message.ReceiptHandle);
        } catch (error) {
            // Handle error (DLQ or retry)
            console.error('Failed processing event:', error);
        }
    }
}`,
      language: "javascript",
      codeSamples: [
        {
          label: "Event Routing with AWS",
          code: `import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { SQSClient, ReceiveMessageCommand } from '@aws-sdk/client-sqs';

const snsClient = new SNSClient({ region: 'us-east-1' });
const sqsClient = new SQSClient({ region: 'us-east-1' });

async function publishEvent(topic, event) {
    const command = new PublishCommand({
        TopicArn: topic,
        Message: JSON.stringify(event),
        MessageAttributes: {
            eventType: {
                DataType: 'String',
                StringValue: event.type
            }
        }
    });
    return await snsClient.send(command);
}

async function consumeEvents(queueUrl) {
    const command = new ReceiveMessageCommand({
        QueueUrl: queueUrl,
        MaxNumberOfMessages: 10,
        WaitTimeSeconds: 20,
        VisibilityTimeout: 30
    });
    
    const response = await sqsClient.send(command);
    
    for (const message of response.Messages || []) {
        try {
            const event = JSON.parse(message.Body);
            await processEvent(event);
            await deleteMessage(queueUrl, message.ReceiptHandle);
        } catch (error) {
            console.error('Failed processing event:', error);
        }
    }
}`,
          language: "javascript",
        },
      ],
    },
  ] as Topic[],

  questions: [
    {
      question: "what are template strings and when to use it?",
      answer: `Template strings (template literals) are a feature in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed by backticks (\`) instead of single or double quotes.

        **Key Features:**

        1. **String Interpolation:**
        - Embed expressions inside strings using \`\${expression}\`
        - No need for concatenation with + operator
        \`\`\javascript
        const name = "Alice";
        const greeting = \`Hello, \${name}!\`; // "Hello, Alice!"
        \`\`\`

        2. **Multi-line Strings:**
        - Preserve line breaks and whitespace without needing \n
        \`\`\javascript
        const message = \`This is a multi-line
        string that preserves formatting.\`;
        \`\`\`

        3. **Tagged Templates:**
        - Custom processing of template literals with a function
        \`\`\javascript
        function tag(strings, ...values) {
          // Custom processing logic
        }

        tag\`Hello, \${name}!\`;
        \`\`\`

        **When to Use Template Strings:**
        - When you need to include variables or expressions in strings
        - For multi-line strings without concatenation
        - When you want to create more readable and maintainable string templates
        - For complex string formatting with tagged templates`,
      difficulty: "medium",
    },
    {
      question: "What is a closure and why is it useful?",
      answer: `A closure lets a function remember variables from its defining scope.`,
      difficulty: "easy",
    },
    {
      question: "Explain the event loop and microtasks.",
      answer: `The event loop processes the call stack, then microtasks, then macrotasks.
      V8( Google's open-source JavaScript engine) executes synchronous code on the call stack

      Async APIs are passed to libuv (Node's event loop library)

      libuv manages timers, I/O, and thread pool operations

      The event loop runs 6 phases repeatedly: timers → pending callbacks → poll → check → close

      Microtasks (Promise callbacks) run between EVERY phase

      The poll phase blocks for I/O when no timers are pending, but microtasks run immediately after each phase regardless of I/O state.`,
      difficulty: "hard",
    },
    {
      question:
        "What is key differnce between ternary operation and if else statement?",
      answer: `Ternary is an expression that returns a value, while if-else is a statement that executes code blocks.`,
      difficulty: "medium",
    },
    {
      question: "What is the difference between == and ===?",
      answer: `== coerces types before comparison, while === compares type and value.`,
      difficulty: "easy",
    },
    {
      question: "Render a <p> element without using JSX",
      answer: `here adding p in inverted commas enforce it:
      const paragraph = React.createElement('p' , {}, 'This is a paragraph.');
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(paragraph);`,
      difficulty: "hard",
    },
    {
      question:
        "How does this binding change across call, apply, and arrow functions?",
      answer: `call/apply set this explicitly, while arrow functions capture this from the outer scope.`,
      difficulty: "hard",
    },
    {
      question:
        "Explain prototypal inheritance and how it differs from classical inheritance.",
      answer: `Objects link to prototypes at runtime instead of class-based instantiation; behavior is shared via the prototype chain.`,
      difficulty: "hard",
    },
    {
      question:
        "Why can awaiting inside a for-loop be a performance issue, and how do you fix it?",
      answer: `It serializes async work; use Promise.all for parallelism when order is not required.`,
      difficulty: "hard",
    },
    {
      question: "What is the difference between REST API and GraphQL?",
      answer: `REST and GraphQL are both API architectures but with different approaches:

**REST API:**
- Uses HTTP methods (GET, POST, PUT, DELETE) for operations
- Returns fixed data structures from endpoints
- Multiple endpoints for different resources
- Built-in HTTP caching
- Simpler to implement and understand

**GraphQL:**
- Single endpoint for all operations
- Clients specify exactly what data they need
- Reduces over-fetching and under-fetching
- Strongly typed schema
- Real-time subscriptions support
- More complex to implement and cache

**When to use which:**
- REST: Simple CRUD operations, public APIs, caching is important
- GraphQL: Complex data requirements, mobile apps, multiple client types, rapid iteration needed`,
      difficulty: "medium",
    },
    {
      question: "What is OpenAPI and why is it important for API development?",
      answer: `OpenAPI (formerly Swagger) is a specification for describing REST APIs in a machine-readable format (JSON or YAML).

**Key Benefits:**
1. **Automatic Documentation**: Generates interactive API documentation (Swagger UI)
2. **Client SDK Generation**: Automatically creates client libraries in multiple languages
3. **API Contract Testing**: Ensures implementations match the specification
4. **Design-First Development**: Enables API design before implementation
5. **Integration**: Works with API gateways, testing tools, and validation tools

**Core Components:**
- Paths (endpoints with HTTP methods)
- Parameters (query, path, header, body)
- Schemas (data models using JSON Schema)
- Security (authentication and authorization)
- Responses (status codes and response structures)`,
      difficulty: "medium",
    },
    {
      question:
        "What is the purpose of webhooks and how do they differ from traditional APIs?",
      answer: `Webhooks are user-defined HTTP callbacks that are triggered by specific events, allowing real-time communication between applications.

**Key Differences from Traditional APIs:**

**Webhooks:**
- Event-driven: Server sends data when events occur
- Push-based: Data is pushed to the receiving endpoint
- Asynchronous: Immediate notification of events
- Requires public endpoint from the receiver
- Less control over data timing

**Traditional APIs:**
- Request-response: Client requests data when needed
- Pull-based: Client fetches data as needed
- Synchronous: Immediate response to requests
- Client initiates communication
- Full control over when data is fetched

**Common Webhook Use Cases:**
- Payment processing notifications
- GitHub webhooks for repository events
- Stripe webhooks for payment events
- Slack integration notifications
- Email delivery status updates`,
      difficulty: "medium",
    },
    {
      question:
        "What are the key differences between FastAPI and Express.js for building APIs?",
      answer: `FastAPI and Express.js are both popular for building APIs but have different strengths:

**FastAPI (Python):**
- Built-in OpenAPI documentation
- Automatic validation with Pydantic
- Async/await support natively
- Type hints for better code quality
- Performance similar to Node.js and Go
- Dependency injection system
- Built-in security features (OAuth, JWT)

**Express.js (Node.js):**
- Minimalist and unopinionated
- Huge ecosystem of middleware
- JavaScript/TypeScript support
- Wider community adoption
- More flexible architecture
- Simpler learning curve
- Better for real-time applications (with Socket.IO)

**When to choose:**
- FastAPI: Python ecosystem, automatic docs, type safety, enterprise APIs
- Express.js: JavaScript ecosystem, flexibility, real-time apps, microservices`,
      difficulty: "medium",
    },
    {
      question: "What are the best practices for designing a public API?",
      answer: `Public API design requires careful consideration for developer experience and scalability:

**Versioning:**
- Use version in URL (e.g., /api/v1/users) or headers
- Maintain backward compatibility
- Deprecate old versions with clear timeline

**Authentication & Security:**
- Use OAuth 2.0 or API keys
- Implement rate limiting (e.g., 1000 requests/hour)
- Always use HTTPS
- Validate all input data
- Implement proper error handling

**Documentation:**
- Provide comprehensive OpenAPI documentation
- Include code examples for common languages
- Maintain a developer portal/playground
- Document rate limits and errors

**Developer Experience:**
- Use consistent naming conventions
- Provide predictable error responses
- Include pagination for list endpoints
- Use standard HTTP status codes
- Offer SDKs for popular languages

**Monitoring & Analytics:**
- Log API usage and errors
- Monitor performance and availability
- Collect feedback from developers
- Track deprecated endpoints usage`,
      difficulty: "hard",
    },
    {
      question:
        "What are connectivity APIs and how are they used in modern applications?",
      answer: `Connectivity APIs facilitate network connections, device communication, and data exchange between systems:

**Types of Connectivity APIs:**
1. **Network APIs**: Managing network connections, bandwidth, and routing
2. **Device APIs**: Connecting and controlling IoT devices
3. **Telecommunications APIs**: SMS, voice, and video communications
4. **Bluetooth/WiFi APIs**: Device discovery and pairing
5. **WebSocket APIs**: Real-time bidirectional communication

**Common Use Cases:**
- **IoT Platforms**: Connecting sensors and actuators
- **Telecommunications**: Enabling voice/video calls in apps
- **Smart Home**: Controlling lights, thermostats, and devices
- **Gaming**: Real-time multiplayer connections
- **Edge Computing**: Device-to-cloud communication

**Implementation Considerations:**
- Handle unreliable networks gracefully
- Implement reconnect logic
- Use WebSocket for persistent connections
- Consider offline support with local caching
- Monitor connection status and quality`,
      difficulty: "hard",
    },
    {
      question:
        "Explain event routing and how it works in event-driven architectures.",
      answer: `Event routing is the process of directing events from sources to destinations based on rules, patterns, or content.

**Event Routing Models:**

1. **Topic-based Routing:**
   - Events published to topics
   - Consumers subscribe to topics
   - All subscribers receive all messages in topic
   - Example: Kafka topics, SNS topics

2. **Content-based Routing:**
   - Events routed based on content attributes
   - Rules evaluate event payload
   - Example: RabbitMQ headers exchange, AWS EventBridge

3. **Conditional Routing:**
   - Events filtered using specific conditions
   - Can be based on event type, source, or data
   - Example: AWS EventBridge rules

**Key Components:**
- **Message Broker**: Mediates communication (Kafka, RabbitMQ)
- **Event Producer**: Generates events
- **Event Consumer**: Processes events
- **Routing Rules**: Define how events are distributed

**Benefits:**
- Decoupled components
- Scalable architecture
- Real-time processing
- Fault tolerance
- Event replay capability`,
      difficulty: "hard",
    },
    {
      question:
        "What are demand APIs and how do they handle real-time resource allocation?",
      answer: `Demand APIs are designed to handle real-time demand forecasting, dynamic pricing, and resource allocation based on current patterns:

**Core Functions:**
1. **Real-time Demand Monitoring**: Track current usage patterns
2. **Predictive Analytics**: Forecast future demand using ML/AI
3. **Dynamic Pricing**: Adjust prices based on demand
4. **Resource Allocation**: Scale resources based on demand
5. **Load Balancing**: Distribute requests across resources

**Implementation Strategies:**
- Use time-series databases for demand data
- Implement auto-scaling rules
- Cache frequently accessed resources
- Use edge computing for latency-sensitive operations
- Implement circuit breakers for overload protection

**Common Use Cases:**
- **Ride-Sharing**: Dynamic pricing based on rider demand
- **Cloud Computing**: Auto-scaling based on resource usage
- **E-commerce**: Inventory management during sales
- **Energy Grids**: Load balancing during peak hours
- **Content Delivery**: CDN scaling based on traffic

**Technical Considerations:**
- Handle traffic spikes gracefully
- Implement monitoring and alerting
- Use predictive models for proactive scaling
- Consider cost optimization
- Plan for disaster recovery`,
      difficulty: "hard",
    },
    {
      question:
        "How do you implement idempotency in REST APIs and why is it important?",
      answer: `Idempotency ensures that multiple identical API requests produce the same result as a single request.

**Why Idempotency is Important:**
- Prevents duplicate operations (e.g., double charging)
- Handles network retries safely
- Provides reliable operations in distributed systems
- Improves API resilience

**Implementation Methods:**

1. **Idempotency Key Header:**
   \`\`\`javascript
   POST /api/orders
   Idempotency-Key: 123e4567-e89b-12d3-a456-426614174000
   \`\`\`
   - Client generates unique key for each operation
   - Server stores key-result mapping
   - Same key returns cached result

2. **Natural Idempotency:**
   - Using semantic operations (e.g., DELETE existing resource)
   - Updating specific fields (e.g., PUT with full resource)
   - Using conditional requests (e.g., ETags)

3. **Database-Based:**
   - Use database constraints (unique keys)
   - Implement versioning (optimistic locking)
   - Use distributed locks for critical operations

**Best Practices:**
- Store idempotency keys with expiration
- Return stored result for duplicate requests
- Include idempotency in API documentation
- Consider performance impact of key storage`,
      difficulty: "hard",
    },
  ] as InterviewQuestion[],
};
