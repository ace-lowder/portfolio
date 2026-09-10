# Ace Lowder Portfolio

[> View the live portfolio](https://acelowder.com/)

This repo contains my portfolio site, a static React app with seven case studies covering production products, client work, and personal tools. Built with TypeScript, Vite, and Tailwind CSS, the site keeps project stories, links, visuals, and case-study copy easy to update without a backend or environment variables.

## Develop locally

You need Git, Node.js 22.12 or newer, and npm.

```bash
git clone https://github.com/ace-lowder/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open `http://localhost:5173`. The portfolio has no backend or environment variables.

## Commands

- `npm run dev` starts the local app
- `npm run lint` checks the code
- `npm run build` creates the production build in `dist`
- `npm run preview` serves the production build locally

## Project content

- `src/content/projects.ts` defines project cards and metadata
- `src/content/case-studies` contains the case-study copy
- `src/assets/case-studies` contains card images, covers, and diagrams
- `public/ace-lowder-resume.pdf` is the downloadable resume
