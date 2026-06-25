# NAVER Ventures website

Marketing site for NAVER Ventures, built with [Astro](https://astro.build).
Static output — fast, free to host, and ready to grow into case studies and a
blog later.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Where to edit things

| What | File |
| --- | --- |
| Company name, tagline, **contact email**, **LinkedIn**, nav menu | `src/data/site.ts` |
| Team members (name, role, bio, photo, LinkedIn) | `src/data/team.ts` |
| Portfolio companies (name, sector, stage, link) | `src/data/portfolio.ts` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` variables) |
| Home / About / Team / Portfolio page content | `src/pages/*.astro` |
| Header & footer | `src/components/` |

**Team photos:** drop image files into `public/team/` and set each member's
`photo` to e.g. `/team/jisoo-han.jpg`. Members without a photo show their
initials automatically.

**Logo:** the NAVER VENTURES wordmark in the header/footer is an interim CSS
recreation (`src/components/Logo.astro`). For pixel-perfect brand fidelity, add
the official vector files to `public/` (e.g. `naver-ventures.svg` and a white
`naver-ventures-white.svg`) and replace the markup in `Logo.astro` with an
`<img>`.

**Portfolio logos (homepage showcase):** the rotating spotlight and scrolling
marquee currently render company names as styled text. To use real logos, add
images to `public/logos/` and swap the `.m-logo` / `.spot-logo` text in
`src/pages/index.astro` for `<img>` tags.

## Deploy (recommended: Vercel or Netlify)

Both auto-detect Astro — no config needed.

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com).
3. Build command `npm run build`, output directory `dist` (auto-filled).
4. Add your domain (e.g. `naverventures.com`) in the host's dashboard.

## Adding case studies / a blog later

Astro content collections make this straightforward: add a
`src/content/` collection, write posts in Markdown, and Astro generates the
pages. No re-platforming required.
