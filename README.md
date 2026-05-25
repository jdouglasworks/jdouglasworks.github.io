# J. Douglas Works — Portfolio Site

Personal portfolio for J. Douglas Works, Cybersecurity Professional. Built with Next.js 16, App Router, TypeScript, and Tailwind CSS 4. Deployed as a static export to GitHub Pages at [jdouglasworks.github.io](https://jdouglasworks.github.io).

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Testing**: Jest + Testing Library, Playwright (E2E)
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev        # starts dev server on localhost:3001 (Turbopack)
npm run build      # static export → out/
npm run preview    # serve the out/ folder locally
```

## Key Commands

| Command               | Description                                               |
| --------------------- | --------------------------------------------------------- |
| `npm run lint`        | ESLint check                                              |
| `npm run format`      | Prettier format                                           |
| `npm run test`        | Jest unit tests                                           |
| `npm run test:e2e`    | Playwright E2E tests                                      |
| `npm run check:drift` | Drift guard (CSP sync, placeholder URLs, assetPath usage) |
| `npm run audit:high`  | npm audit at high severity                                |

## Project Structure

```
src/
  app/                  # Next.js App Router pages
  components/
    home-page/          # Section components (Hero, About, Skills, Experience, FAQ, Team)
    ui/                 # Shared UI primitives
    header/             # Nav with smooth-scroll anchors
    footer/             # Footer with policy links
    cookie-consent/     # GDPR-style consent banner
  lib/
    site.config.ts      # Central identity/SEO config — edit this first
    assetPath.ts        # basePath-aware asset helper
    fonts.ts            # Google Fonts config
  data/
    team/               # Team member JSON
    faqs/               # FAQ JSON (currently unused; FAQ is hardcoded JSX)
public/
  Images/               # webp images
  Svgs/                 # SVG icons
  .well-known/          # security.txt (RFC 9116)
```

## Content To Update

All identity fields flow from `src/lib/site.config.ts`. Section content lives in the corresponding component under `src/components/home-page/`.

| Section           | Component                             | Status            |
| ----------------- | ------------------------------------- | ----------------- |
| Hero              | `home-page/Hero/`                     | ✅                |
| About             | `home-page/Mission/`                  | ✅                |
| Career Highlights | `home-page/Results-2023/`             | ✅                |
| Core Competencies | `home-page/Endowment-Features/`       | ✅                |
| Experience        | `home-page/Our-Programs/`             | 🚧 Placeholders   |
| FAQ               | `home-page/FrequentlyAskedQuestions/` | 🚧 Partial        |
| Contact / Team    | `home-page/TheFreeForCharityTeam/`    | 🚧 Needs headshot |

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/`) which builds and deploys to the `gh-pages` branch. The site deploys at `https://jdouglasworks.github.io` with no basePath required.

## License

Private — all rights reserved.
