# swarm-notes-ui

The static website for Swarm Notes. It renders a Swarm Notes `vault/` (papers, concepts, datasets, open questions and daily discussions written by the [swarm-notes](https://github.com/kausalflow/swarm-notes-package) pipeline) as a searchable Astro site.

It started as an adaptation of the AstroDeck template; see `README.Astrodeck.md` for the original template docs.

## How sites use it

A site repository (for example one created from [swarm-notes-template](https://github.com/kausalflow/swarm-notes-template)) adds this repo as a submodule next to its vault:

```
my-site/
├── configs/site.json   # site URL, base path, GitHub link
├── vault/              # markdown written by the pipeline
└── swarm-notes-ui/     # this repo (git submodule)
```

The build reads `../vault` for content and `../configs/site.json` for deployment settings:

```json
{
  "site": "https://yourusername.github.io",
  "base": "/your-repo-name/",
  "trailingSlash": "always",
  "github_url": "https://github.com/yourusername/your-repo-name"
}
```

## Local development

```bash
# Standalone checkout with no vault next to it: use the sample vault
cp -r fixtures/vault ../vault
npm install
npm run dev
```

`npm run build` writes the static site to `dist/`.

## CI

`.github/workflows/build.yml` builds the site against the small sample vault in `fixtures/vault` on every pull request and push to `main`, and checks that a page was generated for each sample paper.
