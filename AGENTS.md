# Agent notes

- Routes live in `src/routes` (TanStack Start file-based routing); never edit
  `src/routeTree.gen.ts` by hand.
- Colors, gradients and shadows are design tokens in `src/styles.css`. Do not
  hardcode color utilities in components.
- Copy for every section is centralized in `src/components/portfolio/data.ts`
  and translated through `src/lib/i18n.tsx`.
- Background video files are served from `public/media/`.
