# Deploy Plan

## Current State

The repository contains clean documentation and a minimal deployable Next.js app.

Production deployment is already working through Vercel CLI.

Current production URL:

- `https://mindpilot-kappa.vercel.app`

Deployment URL:

- `https://mindpilot-h18g9tvqt-c88ntyngdb-9105s-projects.vercel.app`

Vercel project:

- `c88ntyngdb-9105s-projects/mindpilot`

## Next Deploy Steps

1. Add GitHub Login Connection inside Vercel account settings.
2. Connect Vercel project to GitHub repository `topbnia-prog/AI-EVScool`.
3. Confirm project root is `mindpilot/app`.
4. Add Supabase client setup.
5. Add Claude and PayPal environment variables when accounts are ready.
6. Replace shell page with real operator dashboard.

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

## Manual Deploy Command

From `mindpilot/app`:

```bash
npx vercel --prod --yes
```

## Git Integration Status

CLI command attempted:

```bash
npx vercel git connect https://github.com/topbnia-prog/AI-EVScool.git
```

Current blocker:

```text
You need to add a Login Connection to your GitHub account first.
```

Resolution:

- Open Vercel account settings.
- Add GitHub as a Login Connection / Git provider.
- Then rerun the `vercel git connect` command or connect the repo from the Vercel dashboard.

## Pre-Deploy Gate

Do not deploy with real child data, real chat logs, private PDFs, private diagnostics, or hardcoded API keys.
