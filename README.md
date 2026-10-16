# Guenna Ikram — Portfolio

Premium, Apple-inspired personal portfolio built around a full-screen background
video that is scrubbed forward and backward by the page scroll position.

- **Stack**: TanStack Start (React 19) + Vite 7 + Tailwind CSS v4
- **Pages**: home (hero, about, education, experience, skills, 4 featured
  projects, achievements, languages, certificates), `/projects` (full gallery),
  `/contact` (message form + direct links)
- **Languages**: English, Français, العربية (RTL),  Deutsch, Nederlands

## Media

The scroll-driven video and its poster live in `public/media/`:

| File | Use |
| --- | --- |
| `scroll-hero.mp4` | desktop H.264 source, dense keyframes for smooth seeking |
| `scroll-hero-mobile.mp4` | lighter mobile source |
| `scroll-hero.webm` | VP9 fallback |
| `hero-poster.png` | poster / no-video fallback |

Scrubbing logic lives in `src/components/ScrollVideo.tsx`.

## Development

```sh
npm i
npm run dev
```

Build for production:

```sh
npm run build
```
