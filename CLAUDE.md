# Project Notes for Agents

## Stack
- Next.js App Router (customized; use `app/` routing)
- TypeScript
- Tailwind CSS

## Key Conventions
- Module pages live in `app/<module>/page.tsx`
- Module data lives in `app/<module>/data.ts` (except HTML/CSS in `app/data/html-css-data.ts`)
- Shared components in `app/components/`
- Landing page modules list: `app/data/modules.ts`

## Topic Rendering
- `TopicCard` accepts `codeSamples[]` for multiple examples.
- `CodeBlock` supports wrap toggle, copy, title, and optional line numbers.

## Update Flow
1. Add/modify module data in the relevant `data.ts` file.
2. Ensure `TopicCard` receives `codeSamples` from the page.
3. Verify the module appears on `/` via `modules.ts`.

## Running
- Dev server: `npm run dev`

