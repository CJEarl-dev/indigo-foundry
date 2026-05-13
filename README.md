# Lambda — Agency Template for Astro 6

A modern, fast, SEO-friendly **Astro 6** template for creative and digital agencies. Content-driven, type-safe, and built on Tailwind CSS v4.

**[Live demo →](https://lambda-agency.netlify.app)**

> **Heads up:** this is a structural starter — page structure, content collections, SEO, and placeholder copy are all wired up. The visual design is deliberately minimal so you can either ship it as-is or layer your own styling on top.

---

## Features

- **Astro 6** — latest version, fully typed, static by default
- **11 pre-built pages** — Home, Services, Projects (listing + detail), About, Blog (listing + post), Contact, Privacy, Terms, custom 404
- **Content Collections** — `blog` (MDX) and `projects` (Markdown), schema-validated with Zod
- **Tailwind CSS v4** via the first-party Vite plugin
- **View Transitions** with Astro's `<ClientRouter />`
- **SEO component** — meta tags, Open Graph, Twitter Cards, canonical URLs, and JSON-LD Schema.org
- **Responsive, accessible** — skip-to-content link, semantic HTML, keyboard-friendly navigation, full-screen mobile menu
- **MDX blog** with featured posts, related posts, author cards, tags, categories, and a newsletter CTA
- **Portfolio** with category filtering, project detail pages, galleries, results metrics, prev/next navigation, and dual cover/thumbnail images
- **Contact page** with form, info, FAQ accordion (smooth CSS-only animation)
- **Custom 404 page** with hand-drawn illustration and animated compass
- **Performance-first** — fonts loaded non-blocking, hero LCP image preloaded with responsive `srcset`, images optimized via `astro:assets`, fully static output
- **Zero-config deploy** to Vercel, Netlify, Cloudflare Pages, or any static host

---

## Stack

- [Astro 6.1.8](https://astro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- TypeScript (strict)

---

## Quick start

```bash
npm install
npm run dev
```

The site runs on `http://localhost:4321`.

### Scripts

| Command            | What it does                                  |
| ------------------ | --------------------------------------------- |
| `npm run dev`      | Starts the local dev server                   |
| `npm run build`    | Builds the production site to `./dist/`       |
| `npm run preview`  | Previews the production build locally         |
| `npm run astro`    | Runs any `astro` CLI command (`--help`, etc.) |

---

## Project structure

```
├── public/                 Static assets served as-is
├── src/
│   ├── components/         Reusable UI building blocks
│   │   ├── home/           Home-page sections
│   │   ├── services/       Services-page sections
│   │   ├── projects/       Project listing + card components
│   │   ├── about/          About-page sections
│   │   ├── blog/           Blog listing + post components
│   │   ├── contact/        Contact form + info
│   │   └── ui/             Generic UI primitives (PageHero, etc.)
│   ├── content/
│   │   ├── blog/           MDX blog posts + _images folder
│   │   └── projects/       Markdown project entries + _images folder
│   ├── data/               Typed site config and static content (services, team, testimonials)
│   ├── layouts/            BaseLayout wraps every page
│   ├── images/             Source images (processed by astro:assets)
│   ├── pages/              File-based routes (11 total)
│   ├── styles/             Global CSS
│   └── content.config.ts   Content collection schemas
├── astro.config.mjs
└── tsconfig.json
```

---

## Routes

| Path                 | Source                              | Purpose                     |
| -------------------- | ----------------------------------- | --------------------------- |
| `/`                  | `src/pages/index.astro`             | Home                        |
| `/services`          | `src/pages/services.astro`          | Services                    |
| `/projects`          | `src/pages/projects/index.astro`    | Portfolio listing           |
| `/projects/[slug]`   | `src/pages/projects/[...slug].astro`| Project detail              |
| `/about`             | `src/pages/about.astro`             | About the agency            |
| `/blog`              | `src/pages/blog/index.astro`        | Blog listing                |
| `/blog/[slug]`       | `src/pages/blog/[...slug].astro`    | Post detail                 |
| `/contact`           | `src/pages/contact.astro`           | Contact form + info + FAQ   |
| `/privacy`           | `src/pages/privacy.astro`           | Privacy policy (boilerplate)|
| `/terms`             | `src/pages/terms.astro`             | Terms of service (boilerplate)|
| `/404`               | `src/pages/404.astro`               | Custom not-found page       |

---

## Editing content

### Site-wide config

All agency info lives in `src/data/site.ts`:

```ts
export const site = {
  name: 'Lambda Agency',
  title: 'Lambda — Digital Agency Template',
  description: '...',
  url: 'https://lambda-agency.example.com',
  email: 'hello@lambda-agency.com',
  phone: '+1 (555) 123-4567',
  address: '...',
  coordinates: { lat: 37.7749, lng: -122.4194 },
  social: { x: '...', linkedin: '...', /* ... */ },
  ogImage: '/images/og-default.jpg',
  heroImage: heroDashboard,           // imported from src/images/
  heroImageAlt: 'A preview of our work',
};
```

The `nav` and `footerNav` exports let you customize navigation without touching components.

### Services, team, values, testimonials, logos

- `src/data/services.ts` — list of services + process steps
- `src/data/about.ts` — stats, team members, values, testimonials, client logos

Edit the arrays and the pages re-render automatically.

### Blog posts (MDX)

Add a new file at `src/content/blog/my-post.mdx`:

```mdx
---
title: "My post title"
description: "Short SEO description."
pubDate: 2026-04-22
author: "Alex Rivera"
category: "Engineering"
tags: ["astro", "performance"]
image: "./_images/post-cover.svg"
imageAlt: "Description of the cover image."
featured: false      # set true to appear at the top of /blog
draft: false         # drafts are hidden from /blog
---

Your MDX content here. You can import components, use JSX, and more.
```

Put cover images in `src/content/blog/_images/` and reference them relatively.

### Projects

Add a new file at `src/content/projects/my-project.md`:

```md
---
title: "Project title"
client: "Client name"
category: "Web"        # Web | Branding | SEO | UI/UX | E-commerce
date: 2026-04-22
description: "One-sentence summary."
image: "./_images/project-thumb.jpg"   # 4:5 portrait, used in listings (home + grid)
cover: "./_images/project-hero.jpg"    # 16:9 landscape, used on the project detail page (optional, falls back to image)
gallery:
  - "./_images/gallery-a.jpg"
  - "./_images/gallery-b.jpg"
results:
  - metric: "More demo requests"
    value: "+112%"
  - metric: "Lighthouse"
    value: "98"
website: "https://example.com"
featured: true         # true = appears on home page
order: 1               # lower numbers appear first
---

## The challenge
...
```

**Image proportions:**

- `image` — 4:5 portrait (~1200×1500 px). Used everywhere a project card is shown.
- `cover` — 16:9 landscape (~1920×1080 px). Used as the hero on the project detail page. Optional; if omitted, the detail page falls back to `image`.

---

## Legal pages

`src/pages/privacy.astro` and `src/pages/terms.astro` ship with **placeholder copy** and a standard section outline (acceptance, IP, data collection, liability, contact, etc.). They're styled to match the rest of the site and pull the contact email dynamically from `src/data/site.ts`.

> ⚠️ **The placeholder text is not legal advice.** Replace every section with copy that reflects your actual practices and consult a lawyer in your jurisdiction before publishing.

The `lastUpdated` date sits as a variable at the top of each file — keep it current when you edit.

If you'd rather not ship legal pages at all, delete both files and clear `footerNav.legal` in `src/data/site.ts`:

```ts
legal: [],
```

The footer hides the column automatically when the array is empty.

---

## SEO

Every page passes optional SEO props to `BaseLayout`:

```astro
<BaseLayout
  title="Services"
  description="What we do and how we do it."
  image="/images/og-services.jpg"
>
  ...
</BaseLayout>
```

The `SEO` component (`src/components/SEO.astro`) handles:

- `<title>` and meta description
- Canonical URLs
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- JSON-LD Schema.org (`WebSite` or `Article`)
- Optional `noindex` flag

For blog posts, the layout automatically sets `type="article"` and passes `publishedTime`, `modifiedTime`, and `author`.

---

## Sitemap & robots.txt

A sitemap is generated at build time via [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/). After `npm run build` you'll find:

- `dist/sitemap-index.xml`
- `dist/sitemap-0.xml` (one per 45,000 URLs)

`public/robots.txt` references the sitemap so search engines discover it automatically.

### Before deploying to your real domain

You must update the site URL in **three** places — otherwise the sitemap and canonical URLs will still point to the placeholder domain:

1. **`astro.config.mjs`** — the `site` option:
   ```js
   export default defineConfig({
     site: 'https://your-agency.com',
     // ...
   });
   ```
2. **`public/robots.txt`** — the `Sitemap:` line:
   ```
   Sitemap: https://your-agency.com/sitemap-index.xml
   ```
3. **`src/data/site.ts`** — the `url` property (used by the SEO component as a fallback).

After changing these, re-run `npm run build` to regenerate the sitemap.

---

## Contact form

`src/components/contact/ContactForm.astro` ships as a plain HTML form with `method="POST"` and an empty `action` attribute. Wire it up to whichever service you prefer:

- [Formspree](https://formspree.io) — set `action="https://formspree.io/f/YOUR_ID"`
- [Web3Forms](https://web3forms.com) — free, no account required
- [Resend](https://resend.com) + a server endpoint
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — add `data-netlify="true"` and you're done

---

## Performance

The template is optimized for Lighthouse scores in the high 90s out of the box:

- **Fonts** are loaded asynchronously with the `media="print"` / `onload` swap pattern, so they never block first paint. `font-display: swap` is set on every family.
- **Hero LCP image** is preloaded with a matching responsive `srcset` (`<link rel="preload" imagesrcset>`), so the browser fetches the exact WebP variant `<Image>` will render — no double download.
- **Images** in `src/images/` and content collections (`projects`, `blog`) are processed by `astro:assets` — automatic WebP, responsive `srcset`, and lazy loading on non-LCP images.
- **No client-side framework** — only a few `<script>` tags for the mobile menu and FAQ accordion (~1 KB total).
- **View Transitions** make page navigation feel instant without a SPA.

### Swapping the hero image

The home hero image is imported in `src/data/site.ts` from `src/images/hero-dashboard.png`. To swap it, drop your replacement in `src/images/` and update the import — `astro:assets` will regenerate the WebP variants and srcset on the next build. Keep the source around 1600×900 px and under ~500 KB; everything served to users is the optimized derivative.

### Self-hosted fonts

To eliminate the Google Fonts request entirely, drop the WOFF2 files in `public/fonts/`, declare `@font-face` rules in `src/styles/global.css`, and remove the Google Fonts `<link>` tags from `src/layouts/BaseLayout.astro`.

---

## Deployment

Because the output is fully static, deploy to anywhere that serves HTML:

```bash
npm run build
# dist/ is ready to upload
```

Zero-config adapters exist for every major host. Docs: <https://docs.astro.build/en/guides/deploy/>.

---

## Customization tips

- **Colors, typography, spacing** — Tailwind v4 uses CSS-first configuration. Add `@theme` tokens in `src/styles/global.css`.
- **Fonts** — drop font files in `public/fonts/`, load them via `<link>` in `BaseLayout.astro`, and expose them as Tailwind tokens.
- **Dark mode** — Tailwind v4 supports `@media (prefers-color-scheme)` and class-based toggling out of the box.
- **View transitions** — already enabled globally via `<ClientRouter />`. Add `transition:name` to specific elements for named animations.

---

## Browser support

Evergreen browsers (last 2 versions of Chrome, Firefox, Safari, Edge).

---

## License

This template is sold under a commercial license through Astro Themes. You may use it on unlimited personal and client projects. Redistribution of the source code is not permitted.

---

## Credits

- Placeholder copy and project narratives are fictional.
- Images are SVG placeholders; swap them with your own JPG/PNG/WebP for production.

Built on Astro 6.
