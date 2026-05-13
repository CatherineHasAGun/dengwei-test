# Production Deployment

## Current Recommendation

Use Vercel for the MVP.

This project is currently a static-first Next.js app. It does not need a
purchased server, database, login service, or custom backend for the existing
feature set.

## Preflight

Run this before every production deploy:

```bash
npm install
npm run preflight
```

The preflight script runs:

```bash
npm run typecheck
npm run build
```

## Vercel Steps

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Next.js.
4. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
5. Deploy.
6. Bind the custom domain.
7. Re-run a quick smoke test on mobile and desktop.

## GitHub Pages Steps

GitHub Pages can only host static files, so this project uses a dedicated
static export build for Pages.

1. Commit and push the GitHub Pages workflow and static export config.
2. Merge the changes into `master`.
3. Open the repository on GitHub.
4. Go to Settings -> Pages.
5. Set Source to GitHub Actions.
6. Run the "Deploy GitHub Pages" workflow, or push to `master`.
7. Visit `https://catherinehasagun.github.io/dengwei-test/`.

The GitHub Pages build command is:

```bash
npm run build:github-pages
```

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

This value is used by SEO metadata, `robots.txt`, and `sitemap.xml`.

## Domain And Server Notes

- If using Vercel with an international domain, no self-managed server is
  required.
- If hosting on a mainland China cloud provider for better mainland access,
  plan for ICP filing before public launch.
- If adding login, database, rankings, or paid features later, reassess the
  backend and hosting architecture.

## Smoke Test Checklist

- Home page loads.
- Start test button opens `/test`.
- 18 questions can be completed.
- Loading page redirects to `/result`.
- Result score, type, radar chart, and dimension breakdown render.
- Share copy buttons work.
- `/poster` renders a result card.
- Save result card generates an image preview and download.
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, and `icon.svg` are
  available.
