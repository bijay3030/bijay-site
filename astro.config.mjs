// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://bijay3030.github.io/bijay-site/
export default defineConfig({
  site: 'https://bijay3030.github.io',
  base: '/bijay-site',
  integrations: [
    // One canonical URL per page (with trailing slash), stamped with the build date.
    sitemap({ filter: (page) => page.endsWith('/'), lastmod: new Date() }),
  ],
  markdown: {
    shikiConfig: { theme: 'min-light' },
  },
});
