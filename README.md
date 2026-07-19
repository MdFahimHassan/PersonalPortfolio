# Md. Fahim Hassan — Portfolio

A personal portfolio site for **Md. Fahim Hassan**, a Computer Science & Engineering student at BRAC University. Built as a full-stack [TanStack Start](https://tanstack.com/start) app with a hand-crafted "deep space / terminal" aesthetic — animated starfield background, glassmorphism cards, and a monospace-accented UI — showcasing education, experience, skills, and projects.

**Live site:** _add your deployed URL here_

## Preview

<!-- Replace with an actual screenshot: drag an image into this README on GitHub.com,
     or add it to /public and reference it like: ![Portfolio preview](/public/preview.png) -->
![Portfolio preview](./public/preview.png)

## Tech stack

| Layer       | Choice |
|-------------|--------|
| Framework   | [TanStack Start](https://tanstack.com/start) (SSR) + [TanStack Router](https://tanstack.com/router) (file-based routing) |
| UI          | React 19, Tailwind CSS 4 |
| Data/state  | TanStack Query |
| Icons       | lucide-react |
| Contact form| [EmailJS](https://www.emailjs.com/) (client-side, no backend needed) |
| Build tool  | Vite, bundled via `@lovable.dev/vite-tanstack-config` |
| Runtime target | Nitro (deploys cleanly to Vercel, Cloudflare, Netlify, etc.) |

> This project originated in [Lovable](https://lovable.dev) and was exported to this repo. The Lovable-specific runtime helpers (`src/lib/error-page.ts`, `src/lib/error-capture.ts`) provide a graceful fallback error page for SSR failures and are framework-level, not editor-only — they're kept intentionally.

## Project structure

```
src/
├── assets/            # Static images (profile photo, etc.)
├── components/        # Page sections (Hero, About, Experience, Skills, Projects, Contact, ...)
├── hooks/              # use-typewriter (Hero heading animation)
├── lib/                # SSR error-handling helpers
├── routes/             # File-based routes (__root.tsx = app shell, index.tsx = home page)
├── router.tsx          # Router + QueryClient setup
├── server.ts           # SSR server entry
├── start.ts            # TanStack Start config + error middleware
└── styles.css          # Tailwind theme tokens & global styles
```

## Getting started

### Prerequisites
- Node.js 18+ (or [Bun](https://bun.sh) — this repo ships a `bunfig.toml`)

### Setup

```bash
git clone https://github.com/MdFahimHassan/PersonalPortfolio.git
cd PersonalPortfolio
npm install        # or: bun install
cp .env.example .env
```

Fill in `.env` with your own [EmailJS](https://dashboard.emailjs.com/admin) service ID, template ID, and public key so the contact form can send mail. See [Environment variables](#environment-variables) below.

### Run locally

```bash
npm run dev         # or: bun run dev
```

Opens at `http://localhost:3000` (TanStack Start's dev server) with hot module reload.

### Build & preview a production bundle

```bash
npm run build
npm run preview
```

## Environment variables

| Variable | Description |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public (client-side) key |

These are EmailJS's public/client keys, meant to ship in the browser bundle — but keep your real `.env` out of git (it already is, via `.gitignore`), and restrict allowed origins for your EmailJS service in the EmailJS dashboard so only your deployed domain can send through it.

## Deployment

The app builds via Nitro, so it deploys with zero extra config to most platforms that support Node/SSR output:

- **Vercel** — import the repo at vercel.com/new; framework is auto-detected.
- **Cloudflare / Netlify** — supported via Nitro presets if you need a different target.

Remember to add the same environment variables from `.env.example` in your hosting provider's dashboard.

## License

The code in this repository is licensed under the [MIT License](./LICENSE) — feel free to use it as a reference or starting point for your own portfolio.

This does **not** extend to personal content: my name, bio, photo, resume/CV details, and project descriptions are not licensed for reuse — please swap those out with your own if you fork this.
