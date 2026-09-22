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

## Adding articles & case studies

All article and case-study content lives in one file:
**`src/content/posts.js`** — a plain JS array. To add a new one, append an
object to the array:

```js
{
  slug: 'unique-url-slug',           // becomes /articles/unique-url-slug
  type: 'article',                    // or 'case-study'
  category: 'engineering-explainers', // see CATEGORY_LABELS in the same file (articles only)
  explainerGroup: 'basics',           // 'basics' | 'infrastructure' — Built Environment articles only
  section: 'built-environment',       // 'built-environment' | 'social-policy' (case studies only)
  title: 'Article Title',
  kicker: 'One-line teaser shown under the title on cards and the detail page.',
  date: '2026-09-22',                 // YYYY-MM-DD
  author: 'Author Name',              // optional
  summary: 'One-sentence teaser shown on list/preview cards (falls back to kicker if omitted).',
  image: {                            // optional but recommended — shows as the card thumbnail
    url: 'https://images.unsplash.com/photo-xxxx?auto=format&fit=crop&w=1400&q=80',
    alt: 'Description for screen readers',
    caption: 'Shown under the hero image on the full article page, including photo credit if needed.',
  },
  body: [
    'First paragraph.',
    { type: 'heading', text: 'A subheading' },
    'Paragraph under the subheading.',
    // strings become paragraphs; { type: 'heading', text } becomes a subheading
  ],
  takeaway: 'Optional highlighted "Key takeaway" callout shown after the body.',
  references: [
    { text: 'Author. (Year). Title of source.', url: 'https://example.com' },
    // optional — renders as a collapsible, linked citation list
  ],
}
```

- **Articles** (`type: 'article'`) automatically appear on the Articles
  page (filterable by category, shown as a vertical list with images),
  the 3 most recent on the Home page, and get their own page at
  `/articles/<slug>`. Built Environment articles with `explainerGroup`
  set also appear as cards in that page's "Basics" or "Infrastructure"
  section.
- **Case studies** (`type: 'case-study'`) automatically appear on either
  the Built Environment or Social & Policy page depending on `section`,
  and get their own page at `/case-studies/<slug>`.
- An empty `posts` array (the default) shows the original "Coming Soon"
  placeholders everywhere — nothing else needs to change.
- **Images**: find a relevant photo on [Unsplash](https://unsplash.com)
  (free to use) or [Wikimedia Commons](https://commons.wikimedia.org)
  (search for public-domain government/engineering photos — often a
  better topical match, as with the real 1968 USACE photo used for the
  Levees article). Grab the direct image URL and add it as `image.url`.

No new files, routes, or components needed per post. Paste the text to
Claude and it'll add the entry, or edit `src/content/posts.js` directly.

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
