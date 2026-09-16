# Gator Flood Resilience — Website

The public website for the Gator Flood Resilience student organization at
the University of Florida. Built with React + Vite, React Router, and
Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build to dist/
npm run preview  # locally preview the production build
```

## Site structure

| Page | Route | File |
|---|---|---|
| Home | `/` | `src/pages/Home.jsx` |
| About | `/about` | `src/pages/About.jsx` |
| Built Environment | `/built-environment` | `src/pages/BuiltEnvironment.jsx` |
| Social & Policy | `/social-policy` | `src/pages/SocialPolicy.jsx` |
| Maps & Data | `/maps-data` | `src/pages/MapsData.jsx` |
| Articles | `/articles` | `src/pages/Articles.jsx` |
| Get Involved | `/get-involved` | `src/pages/GetInvolved.jsx` |
| Media | `/media` | `src/pages/Media.jsx` |
| Resources | `/resources` | `src/pages/Resources.jsx` |
| Admin (members only, **not password-protected**) | `/admin` | `src/pages/Admin.jsx` |

Shared UI lives in `src/components/`:
- `Header.jsx` / `Footer.jsx` — nav and site chrome
- `PageHeader.jsx` — the colored banner at the top of every inner page
- `Section.jsx` — consistent content-section wrapper (title/subtitle/body)
- `ComingSoon.jsx` — dashed-border placeholder for sections without real
  content yet

Most inner pages are intentionally full of `<ComingSoon />` placeholders —
the structure from the requested site outline is all there; fill it in
with real content (text, images, links) as it's ready. No page needs to
be rebuilt from scratch to add content.

## Brand colors

Defined in `src/index.css` under `@theme`, sampled from the logo (sunset
orange over teal ocean):

- `brand-orange-{50,100,400,500,600,700}` — primary accent (buttons, links, highlights)
- `brand-blue-{50,100,300,500,600,700,900}` — secondary/structural color (nav, footer, headings)
- `cream` — page background

Used as normal Tailwind utilities, e.g. `bg-brand-orange-500`, `text-brand-blue-900`.

## Embedding the flood/hurricane map

The "Maps & Data" page (`src/pages/MapsData.jsx`) is built to embed the
[South Florida Flood & Hurricane Resource Hub](../sfl-flood-hurricane-hub)
once it's deployed publicly. Set an environment variable:

```
VITE_MAP_APP_URL=https://your-deployed-map-url.netlify.app
```

(copy `.env.example` to `.env` for local dev, or set it in your hosting
platform's dashboard) and it'll render as a live embedded iframe instead
of the placeholder card.

## Contact form

`src/pages/GetInvolved.jsx` has a working contact form that opens the
visitor's email client via a `mailto:` link (no backend needed). Update
the `CONTACT_EMAIL` constant at the top of that file with the club's real
address. To collect submissions without relying on the visitor's email
client, swap it for a form service like Formspree or Netlify Forms.

## Instagram

The header, footer, home page, and Media page all link to
https://www.instagram.com/gatorfloodresilience/. A live feed embed isn't
included (Instagram's API requires app review) — the Media page notes
SnapWidget/Elfsight as drop-in options if a live feed is wanted later.

## Deployment (Netlify / Vercel)

Static Vite app — both platforms auto-detect it:

- **Build command:** `npm run build`
- **Publish/output directory:** `dist`
- `public/_redirects` (Netlify) and `vercel.json` (Vercel) are already
  set up so client-side routes like `/about` work on page refresh/direct
  link, not just via in-app navigation.
