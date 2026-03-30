# Crazy Chameleon Craft Studio

A warm, one-page handcrafted brand website built with Next.js, TypeScript, Tailwind CSS, and the App Router. It is designed to be simple to publish now and easy to expand later with galleries, custom request flows, or ecommerce features.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run start
```

## Deploy to Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. Vercel will detect Next.js automatically.
4. Click deploy.

No backend, environment variables, or database setup are required for version 1.

## Edit these first

If you are new to the project, these are the best places to start:

- `app/page.tsx`
  Update the homepage text, section content, gallery items, and contact placeholders.
- `app/globals.css`
  Update the colour palette in the `:root` variables.
- `public/logo-placeholder.svg`
  Replace this placeholder with your real logo.
- `public/hero-showcase.svg`
  Replace the hero artwork with your own photo or branded image.
- `public/gallery-pottery.svg`
  Replace with a real pottery image.
- `public/gallery-mosaic.svg`
  Replace with a real mosaic image.
- `public/gallery-painting.svg`
  Replace with a real painting image.
- `public/gallery-pewter.svg`
  Replace with a real pewter image.

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
public/
  gallery-mosaic.svg
  gallery-painting.svg
  gallery-pewter.svg
  gallery-pottery.svg
  hero-showcase.svg
  logo-placeholder.svg
next.config.ts
package.json
postcss.config.mjs
tsconfig.json
```

## Notes for future upgrades

This version is intentionally simple. It is already structured so you can later add:

- dedicated gallery pages
- product pages
- custom request forms
- email form handling
- ecommerce checkout
- CMS content editing

## Beginner editing tips

- Search for comments in `app/page.tsx` to find places where logo, images, story text, social links, and contact details should be replaced.
- If you swap in your own images, keep the same filenames to avoid changing the code.
- If you want a different look quickly, start by changing the colours in `app/globals.css`.
