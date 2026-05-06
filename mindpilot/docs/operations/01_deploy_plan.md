# Deploy Plan

## Current State

The repository currently contains clean documentation and folders. The app is not scaffolded yet.

## Next Deploy Steps

1. Scaffold Next.js app inside `mindpilot/app`.
2. Add TypeScript, Tailwind CSS, linting, and app router.
3. Add base design tokens.
4. Create initial child operator UX screens.
5. Add Supabase client setup.
6. Add `.env.example`.
7. Push to GitHub.
8. Connect Vercel.
9. Set Vercel project root to `mindpilot/app`.

## Environment Variables

To add later:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ANTHROPIC_API_KEY`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`

## Vercel Settings

- Framework: Next.js
- Root directory: `mindpilot/app`
- Build command: default
- Output directory: default

## Pre-Deploy Gate

Do not deploy with real child data, real chat logs, private PDFs, private diagnostics, or hardcoded API keys.
