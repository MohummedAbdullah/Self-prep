# Full Stack Interview Prep App

## Purpose
A multi-page learning app focused on cracking full stack developer and system architect interviews. Each module provides:
- Overview and core concepts
- Technical terms glossary
- Topic cards with expandable explanations
- Code examples (now supports multiple examples per topic)
- Interview questions with difficulty badges

## Primary Routes (App Router)
- `/` Landing page with module grid
- `/generic` Generic concepts
- `/html-css` HTML & CSS
- `/javascript` JavaScript
- `/typescript` TypeScript
- `/react` React.js
- `/nextjs` Next.js
- `/react-native` React Native
- `/nodejs` Node.js
- `/express` Express.js
- `/laravel` Laravel
- `/python` Python
- `/dotnet` .NET
- `/system-design` System Design

## Structure
- `app/page.tsx` Landing page
- `app/<module>/page.tsx` Module pages
- `app/<module>/data.ts` Module data (terms, topics, questions)
- `app/data/html-css-data.ts` HTML/CSS module data
- `app/data/modules.ts` Module registry for landing page
- `app/components/*` Shared UI components
- `app/globals.css` Global styles

## UI Components
- `ModuleLayout` page shell + sidebar
- `TopicCard` expandable topics with multi-code tabs
- `CodeBlock` syntax highlighting + copy + wrap toggle
- `QuestionAccordion` interview question cards

## Data Shape
Each module data file exports:
- `technicalTerms[]`
- `topics[]` with `codeSamples[]`
- `questions[]`

