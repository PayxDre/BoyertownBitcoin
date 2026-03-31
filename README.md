# BoyertownBitcoin.com

A grassroots advocacy website to make **Boyertown Borough, PA** the first small town in Pennsylvania to adopt a **Strategic Bitcoin Reserve**.

Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Recharts.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero landing page with stats, momentum highlights, and CTAs |
| `/today` | Boyertown's current financial reality — fund balances, 2026 budget, legal constraints |
| `/benefits` | Deep-dive on why Bitcoin: inflation protection, asymmetric upside, fiscal sovereignty |
| `/precedents` | Real-world examples: Texas SB 21, U.S. Strategic Reserve, Roswell NM |
| `/simulator` | **Interactive Impact Simulator** — adjust allocation %, time horizon, growth scenarios |
| `/action` | Get involved: petition with progress bar, council email generator, share tools |
| `/resources` | Curated links to legal, educational, and custody resources |
| `/about` | About the project, data sources, and full legal disclaimer |

## Features

- Dark-mode immersive design with Bitcoin-themed animations
- Live BTC price ticker with Boyertown allocation calculations
- Animated node-mesh background (canvas)
- Interactive simulator with Recharts visualizations
- "What could this fund?" — maps gains to real 2026 infrastructure projects
- Council email generator with copy-to-clipboard
- Community petition with progress bar
- Social sharing tools
- Fully responsive and accessible
- SEO-optimized with Open Graph and Twitter meta tags

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Icons:** Lucide React

## Data Sources

All financial data comes from official Boyertown Borough records including the 2026 Tax & Expenses Statement. Bitcoin historical data from public market sources.

## Future Enhancements

- **Live BTC price API** — Replace CoinGecko fallback with a dedicated price feed
- **Backend petition system** — Store signatures in a database (e.g., Supabase, PlanetScale)
- **Downloadable fact sheet** — Generate a PDF summary for council meetings
- **Real council member directory** — Auto-populate email addresses
- **Analytics** — Track page views, simulator usage, and petition conversions
- **CMS integration** — Allow non-technical updates to content
- **i18n** — Spanish translation for bilingual outreach
- **Progressive Web App** — Offline support and mobile install prompt

## Deployment

This site is ready to deploy on **Vercel**, **Netlify**, or any platform supporting Next.js:

```bash
# Vercel (recommended)
npx vercel

# Or build and deploy static export
npm run build
```

## Disclaimer

This is a community advocacy project, not financial advice. Bitcoin is volatile and past performance does not guarantee future results. See the [About page](/about) for full disclaimer.

---

Built with care for Boyertown, PA.
