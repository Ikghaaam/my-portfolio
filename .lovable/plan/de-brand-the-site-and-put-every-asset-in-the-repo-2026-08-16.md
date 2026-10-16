# De-brand the site and put every asset in the repo

Goal: nothing on the site (or in the code) says "Lovable", and the video/poster files live inside the project code instead of on the Lovable CDN, so a GitHub push contains the whole site.

## 1. Replace the browser-tab icon

The tab currently shows the Lovable logo (your screenshot). I'll generate a simple premium monogram favicon ("BA" on the graphite/gold palette) and install it as `public/favicon.ico` plus a PNG apple-touch icon, wired in the root route.

## 2. Bring the media files into the repo

Today the hero video, mobile video, WebM fallback and poster image are pointer files (`*.asset.json`) that load from the Lovable CDN. I'll download the real binaries into `public/media/` and change the code to reference `/media/...` paths, then delete the pointer files. After that the repo carries all four media files (~8 MB total) and the site works from any host.

The five project screenshots are already real files in `src/assets/` — no change needed.

## 3. Strip Lovable references from code and text

- Remove the Lovable error-reporting module (`src/lib/lovable-error-reporting.ts`) and its use in the root route error boundary; keep a plain `console.error`.
- Clean Lovable mentions in `README.md` and `AGENTS.md` (rewrite README as your own project readme).
- Leave build/config files that need it (`package.json`, `vite.config.ts`, `bunfig.toml`) functional — I'll only remove naming/comments that are cosmetic, since removing the build plugin would break the preview.
- Hide the "Edit with Lovable" badge on the published site (a settings toggle; requires a Pro plan — I'll report if it can't be applied).

## 4. Pushing to GitHub

I can't create or push to a GitHub repo from here — that connection is made from the editor: the **+** menu in the chat box → **GitHub** → **Connect project** → **Create Repository**. Once connected, everything above syncs to your repo automatically, and every later change pushes on its own. Tell me when it's connected if you want me to verify the contents.

## Technical notes

- `public/media/*` is served by literal path, so no bundler import is involved; `ScrollVideo.tsx` codec switching logic stays the same, only the URLs change.
- Removing `lovable-error-reporting` touches only `src/routes/__root.tsx`'s `ErrorComponent`.
- Build + typecheck after the changes, and a scroll check in the preview to confirm the video still scrubs from the new paths.
