# Technical Architecture

## Stack

Planned MVP:

- Next.js latest stable App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase Postgres
- Supabase Auth
- Supabase Row Level Security
- Claude API for mentor dialogue and summaries
- PayPal for MVP payments
- Vercel deploy

## Project Root

Future application root:

```text
mindpilot/app
```

Vercel should be configured to deploy from that folder.

## AI Design

Claude does not create full course content from scratch.

Claude is used for:

- MindScan profile analysis
- Socratic mentor dialogue inside a mission
- Session summaries
- Suggested metric deltas

Course content is prepared, versioned, and stored in the database.

## Guardrails

Use prompt and code together:

- System prompt defines mentor behavior.
- Backend enforces mission step access.
- Backend enforces max two missions per day.
- Backend blocks next mission until reflection is complete.
- Moderation/safety classifier catches high-risk messages.
- Homework-copy requests route to refusal/help-understand flow.

## i18n

Two translation layers:

1. Interface strings
   - Standard app i18n files.

2. Mission content
   - Separate pedagogical versions per language and age branch.
   - This is localization, not simple translation.

MVP content language: Hebrew.
