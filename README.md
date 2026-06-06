# skoolbox-website

Marketing site for [SkoolBox](https://skoolbox.xyz) — the offline-first AI tutor for Nigerian secondary schools.

Built with **Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion**.
Design pulls fonts (Satoshi) from [Zenda.com](https://www.zenda.com/) and colors from the SkoolBox app itself (green / orange).

---

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

> **Node version:** this project is pinned to Next 14 + React 18 so it runs on Node 18+. If you upgrade to Node 20+, you can bump to Next 15/16.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, metadata, body font
│   ├── page.tsx          # Composes the landing page
│   └── globals.css       # Tailwind + Satoshi font import
└── components/
    ├── Header.tsx        # Sticky nav with mobile menu
    ├── Hero.tsx          # Headline + dashboard mockup
    ├── SocialProof.tsx   # School logos bar
    ├── Features.tsx      # 3-col feature grid
    ├── HowItWorks.tsx    # 3-step install flow
    ├── Pricing.tsx       # 3 tiers (Starter / School / District)
    ├── Testimonials.tsx  # 3 cards
    ├── FAQ.tsx           # Accordion
    ├── FinalCTA.tsx      # Email capture
    └── Footer.tsx
```

Brand tokens live in [tailwind.config.ts](./tailwind.config.ts) — edit `primary`, `accent`, etc. to tune the palette.

---

## Deploy to Vercel + attach `skoolbox.xyz`

### 1. Push to GitHub

```bash
git init && git add . && git commit -m "feat: initial landing page"
gh repo create skoolbox-website --public --source=. --push
```

### 2. Import into Vercel

- Go to <https://vercel.com/new>
- Pick the `skoolbox-website` repo
- Framework preset: **Next.js** (auto-detected)
- Build command + output dir: leave defaults (also pinned in [vercel.json](./vercel.json))
- Click **Deploy**

Or via CLI:

```bash
npm i -g vercel
vercel          # link + preview deploy
vercel --prod   # production deploy
```

### 3. Add the domain

In the Vercel dashboard → **Project → Settings → Domains** → add:

- `skoolbox.xyz`
- `www.skoolbox.xyz` (set to redirect to apex)

### 4. DNS records at your registrar

Add these at whoever sells `skoolbox.xyz` (Namecheap, Porkbun, Cloudflare, etc.):

| Type | Host | Value | Notes |
|---|---|---|---|
| `A` | `@` | `76.76.21.21` | Vercel's apex IP |
| `CNAME` | `www` | `cname.vercel-dns.com` | for `www` subdomain |

DNS usually propagates in 5–60 minutes. Vercel auto-provisions a Let's Encrypt SSL cert once propagation completes.

> If your registrar doesn't support apex `A` records, use Vercel's nameservers instead — Vercel's UI will show them under the domain settings.

---

## Customizing copy

All sections are plain TSX with hard-coded strings. To tweak the marketing copy:

- **Headline / subheadline** → [src/components/Hero.tsx](./src/components/Hero.tsx)
- **Pricing tiers** → [src/components/Pricing.tsx](./src/components/Pricing.tsx) — tiers array at top
- **FAQs** → [src/components/FAQ.tsx](./src/components/FAQ.tsx) — `faqs` array
- **Testimonials** → [src/components/Testimonials.tsx](./src/components/Testimonials.tsx)
- **Footer links** → [src/components/Footer.tsx](./src/components/Footer.tsx)

The email capture in `FinalCTA.tsx` is currently a no-op (UI-only). Wire it up to whatever ESP you use (ConvertKit, Resend, Loops, etc.) by replacing the `onSubmit` handler.
