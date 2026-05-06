# Deploy Plan

## Current State

The repository contains clean documentation and a minimal deployable Next.js app.

Production deployment is already working through Vercel CLI.

Deployment policy: deploy to the internet only after an explicit owner request. Do not enable automatic GitHub deployments.

Current production URL:

- `https://mindpilot-kappa.vercel.app`

Deployment URL:

- `https://mindpilot-h18g9tvqt-c88ntyngdb-9105s-projects.vercel.app`

Vercel project:

- `c88ntyngdb-9105s-projects/mindpilot`

## Next App Steps

1. Work locally in `mindpilot/app`.
2. Run local development server.
3. Review changes in the browser.
4. Run production build locally.
5. Commit and push to GitHub.
6. Deploy manually only when requested.
7. Add Supabase client setup when accounts are ready.
8. Add Claude and PayPal environment variables when accounts are ready.
9. Replace shell page with real operator dashboard.

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
npm run deploy:prod
```

Equivalent raw command:

```bash
npx vercel --prod --yes
```

## Local Development

From `mindpilot/app`:

```bash
npm run dev:local
```

Open:

```text
http://127.0.0.1:3000
```

Before deploy:

```bash
npm run build
```

## Git Integration Policy

Do not connect GitHub automatic deployments for now.

Reason:

- The owner wants to make local changes first.
- Production should update only after explicit deployment request.
- This avoids accidental public changes while the product and legal docs are still evolving.

## Pre-Deploy Gate

Do not deploy with real child data, real chat logs, private PDFs, private diagnostics, or hardcoded API keys.
