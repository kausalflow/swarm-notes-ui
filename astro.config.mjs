import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import wikiLinkPlugin from 'remark-wiki-link';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const vaultAbsPath = path.resolve(__dirname, '../vault');

let allFiles = [];
try {
  allFiles = fs.readdirSync(vaultAbsPath, { recursive: true });
} catch (e) {
  console.warn("Could not read vault directory", e);
}

const slugToPath = {};
allFiles.forEach(file => {
  if (typeof file === 'string' && file.endsWith('.md')) {
    const slug = path.basename(file, '.md').toLowerCase();
    slugToPath[slug] = file.replace(/\\/g, '/').replace(/\.md$/, '');
  }
});

let siteConf = { site: 'https://kausalflow.github.io', base: '/' };
try {
  const configPath = path.resolve(__dirname, '../configs/site.json');
  if (fs.existsSync(configPath)) {
    siteConf = Object.assign(siteConf, JSON.parse(fs.readFileSync(configPath, 'utf8')));
  }
} catch (e) {
  console.warn("Could not read site.json", e);
}

const configuredBase = (!siteConf.base || siteConf.base === '/') ? '' : siteConf.base.replace(/\/$/, "");

export default defineConfig({
  site: siteConf.site,
  base: configuredBase || undefined,
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      [wikiLinkPlugin, {
        pathFormat: 'obsidian',
        wikiLinkClassName: 'wiki-link',
        hrefTemplate: (permalink) => {
          const lower = permalink.toLowerCase();
          const mapped = slugToPath[lower] || permalink;
          return `${configuredBase}/${mapped}/`;
        }
      }]
    ]
  }
});
