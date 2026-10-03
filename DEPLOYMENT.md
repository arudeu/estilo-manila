# Frontend deployment (Netlify or Cloudflare Pages, free)

1. Push this folder to its own GitHub repo.
2. **Netlify:** Add new site > Import from Git. `netlify.toml` already sets build command (`npm run build`), publish dir (`build`), Node 20, and disables source maps.
   **Cloudflare Pages:** build command `npm run build`, output directory `build`, env var `NODE_VERSION=20`.
3. Add the environment variable (must be `https`, and include `/b4`):
   `REACT_APP_API_BASE_URL = https://YOUR-SERVICE.onrender.com/b4`
4. Deploy, then put the resulting site URL into the backend's `CORS_ORIGINS` on Render.
5. `REACT_APP_API_BASE_URL` is read at build time: changing it needs a redeploy.

Local dev: `.env` points to `http://localhost:3004/b4` (see `.env.example`).

## What was changed
- `public/_redirects` so refreshing on `/cart`, `/login`, etc. doesn't 404.
- `netlify.toml` build config.
- `.env` now targets localhost instead of the old EC2 server; `.env.example` added.
- Hero/site JPEGs resized to max 2200px and recompressed (16.9 MB -> 2.0 MB, same filenames).
- Registration now shows an error toast on failure (e.g. email already registered) instead of failing silently.
- The pre-built `build/` folder was left out; Netlify builds it for you.
