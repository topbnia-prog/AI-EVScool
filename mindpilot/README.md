# MindPilot

**Think clearly. Command AI.**

MindPilot is a mission-based AI literacy platform for teenagers ages 10-16. It teaches children to manage AI instead of depending on it: ask better questions, verify answers, catch hallucinations, and build independent thinking habits.

## Product Direction

- Buyer: parent or guardian
- User: child operator
- First market: Israel
- MVP child content language: Hebrew
- Internal documentation language: Russian
- Product model: custom SaaS, not a generic LMS
- Learning model: 30-day mission path
- AI model role: Socratic mentor, not answer machine
- Deploy target: Vercel from `mindpilot/app`

## Repository Structure

```text
app/                 Next.js application
assets/              Public design and brand assets
docs/admin/          Admin and parent dashboard specs
docs/course/         30-day course, mission template, metrics
docs/legal/          Safety, privacy, consent, legal requirements
docs/operations/     Launch, deployment, and gap audit
docs/product/        Positioning, product logic, business model
docs/research/       Claims and research validation log
docs/technical/      Architecture, data model, backend guardrails
docs/ux/             Child-facing UX system
```

## Public Data Rule

This package must stay anonymized. Use generic terms such as `operator`, `child`, `parent`, `Pilot Alpha`, or `test learner`. Never commit real names, family relations, private messages, personal diagnostic answers, school details, phone numbers, addresses, or private media.

## Local Development

Run the app from `mindpilot/app`.

```bash
npm install
npm run dev:local
```

Local URL: `http://127.0.0.1:3000`

Before any deploy request, run the full local gate:

```bash
npm run verify
```

This checks TypeScript, package security audit, public privacy/encoding scan, production build, and Playwright desktop/mobile smoke tests.

Deployment is intentionally manual. Only run it after an explicit deploy request:

```bash
npm run deploy:prod
```
