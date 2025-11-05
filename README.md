# Nova University

A premium, Apple-inspired university experience crafted with Next.js 14 and Tailwind CSS. Explore immersive storytelling, glassmorphism accents, parallax research showcases, and cinematic video hero moments.

## ✨ Highlights

- Full-bleed video hero with layered gradients and CTA actions
- Glassmorphism overlays for stats, callouts, and admissions CTA
- Smooth scroll-triggered animations powered by Framer Motion
- Parallax research panels with depth-rich photography
- Tailored typography pairing using Sora + Inter for a tech-luxe aesthetic

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to explore the experience.

## 🧱 Tech Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS with CSS variables for theming
- Framer Motion for animation choreography
- Vercel-ready configuration with remote media support

## 📦 Deployment

```bash
npm run build
npm start
```

To deploy on Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-5ad15ef4
```

## 🖋️ Customization Tips

- Update copy and stats in `src/app/page.tsx`
- Replace imagery/video sources with institution-specific assets (configure domains in `next.config.ts`)
- Extend Tailwind tokens in `src/app/globals.css` for brand colors and effects

Enjoy crafting the future of higher education.
