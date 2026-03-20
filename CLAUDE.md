# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ActiRec — Svelte 5 web app for managing academic improvement plans at I.E. Oficial Instituto Guatica. Teachers register student improvement plans and generate printable PDF documents.

## Commands

```bash
npm run dev      # Dev server with hot reload
npm run build    # Production build
npm run preview  # Preview production build
npm run deploy   # Build + deploy to GitHub Pages via gh-pages
```

No test framework or linter is configured.

## Tech Stack

- **Svelte 5** (runes: `$state`, `$derived`, `$props`, `$effect`) — JavaScript only, no TypeScript
- **Vite 6** with base path `/actividadesrecuperacion/`
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme` directive in `src/app.css`)
- **@iconify/svelte** (Material Design icons via `mdi:` prefix)
- **SweetAlert2** for dialogs (always use `confirmButtonColor: '#2563eb'`)

## Architecture

- `src/App.svelte` — Root layout with nav, header, tab-based view switching. Lazy-loads views via dynamic `import()`.
- `src/components/FormComponent.svelte` — Main data entry form for improvement plans
- `src/components/DataList.svelte` — Records list with filtering
- `src/lib/data.js` — Static data constants and API fetch functions
- `src/lib/pdf.js` — PDF generation using inline HTML opened in print window
- `src/app.css` — Tailwind theme config and reusable component classes (`.card`, `.btn-primary`, `.btn-danger`, `.field-label`, `.field-input`, `.glass-nav`)

## Code Conventions

- Use Svelte 5 runes syntax (`$state`, `$derived`, `$props`), not legacy `export let` or `$:` reactivity
- camelCase for JS variables, PascalCase for components, kebab-case for CSS classes
- App language is Spanish — UI text, variable names (e.g., `fechaLimite`, `nombresEstudiante`)
- Wrap async operations in try-catch with SweetAlert2 error display
- Component structure: imports → props → state → derived → functions → lifecycle

## External APIs

All data is fetched from `https://app.iedeoccidente.com/`:
- `ig/getEstudiantes.php` — Students list
- `ig/getprofes.php` — Teachers list
- `gs/gsartirec.php` — Submit form (POST)
- `gs/getgsartirec.php` — Get records (GET)
