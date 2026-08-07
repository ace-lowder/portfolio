# Ace Lowder Portfolio

Personal software engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Local setup

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```

## Project structure

- `src/content/projects.ts` defines project cards and their case studies
- `src/content/case-studies` contains the written case-study content
- `src/assets/case-studies` contains replaceable covers and editable diagrams
- `public/ace-lowder-resume.pdf` is the resume served by the download button

The production build is written to `dist` for static hosting.
