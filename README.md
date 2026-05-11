# 登味浓度测试

移动端优先的娱乐测试网站 MVP。

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts
- html2canvas

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev
npm run build
npm run preflight
npm run typecheck
```

## Production Build

```bash
npm install
npm run preflight
npm run start
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Framework preset: Next.js.
4. Add `NEXT_PUBLIC_SITE_URL` with the final production URL.
5. Deploy and bind the custom domain.

This MVP is a static-first Next.js app. It does not need a purchased server,
database, login system, or backend API for the current feature set.

See [docs/deployment.md](docs/deployment.md) for the production checklist.
