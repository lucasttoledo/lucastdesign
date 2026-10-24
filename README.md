# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Medium articles

The latest four articles are loaded from `/api/medium-feed.xml`. The Vite build fetches the Medium RSS feed and includes it as a static file, avoiding browser CORS restrictions and supporting static hosting.

Locally, `vite.config.js` provides the `/api/medium-feed.xml` development middleware. `api/medium-feed.js` also exposes the feed as a serverless function on Vercel.

## Project case studies

Project cards open `/projetos/<project-slug>` pages. Slugs, case study copy, and gallery images are defined in `src/data.js`; the shared detail layout and image lightbox are in `src/components/ProjectDetail.jsx`. Existing project IDs are also accepted as route aliases.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
