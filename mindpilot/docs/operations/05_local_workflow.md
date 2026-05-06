# Local Workflow

## Policy

Production deploy happens only after an explicit owner request.

Do not enable automatic GitHub to Vercel deployments yet.

## Local Project Folder

```text
C:\Users\USER\Desktop\MindPilot\mindpilot
```

Application folder:

```text
C:\Users\USER\Desktop\MindPilot\mindpilot\app
```

## Daily Local Work

From `mindpilot/app`:

```bash
npm run dev:local
```

Open:

```text
http://127.0.0.1:3000
```

Make changes locally, review in browser, then run:

```bash
npm run build
```

## Git Save Point

From repository root:

```bash
git status
git add mindpilot
git commit -m "Describe the change"
git push origin main
```

GitHub stores the work, but Vercel production does not update automatically.

## Manual Production Deploy

Only after explicit owner request:

```bash
cd C:\Users\USER\Desktop\MindPilot\mindpilot\app
npm run deploy:prod
```

Current production URL:

```text
https://mindpilot-kappa.vercel.app
```

## Pre-Deploy Checklist

- No real child data
- No private diagnostics
- No private PDFs or videos
- No hardcoded API keys
- `npm run build` passes
- Owner explicitly asked to deploy

## Local-First Rule

Every feature should be developed and reviewed locally before deployment. Production is a controlled publishing step, not an automatic side effect of git push.
