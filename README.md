# Personal 3D Portfolio

This is a static Next.js portfolio. The production build exports a complete website to `out/`, including the root `app-ads.txt` file and `.nojekyll` marker.

## Local development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The build runs Next.js static export and copies `app-ads.txt` to `out/app-ads.txt`.

## GitHub Pages

The workflow at `.github/workflows/pages.yml` builds and deploys the site when changes are pushed to `master`. It sets the repository name as the Pages base path, which supports project sites such as `https://<owner>.github.io/<repository>/`. In the repository settings, enable GitHub Pages with **GitHub Actions** as the deployment source.

`app-ads.txt` is available at the root of the published site. For a project site, the URL includes the repository path (for example, `/personal-3d-portfolio/app-ads.txt`). A custom domain serves it at `/app-ads.txt` on that domain.

For a custom domain, set `GITHUB_PAGES_BASE_PATH` to an empty value in the Pages workflow and configure the domain in the repository's Pages settings.
