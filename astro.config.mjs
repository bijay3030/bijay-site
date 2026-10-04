// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://bijay3030.github.io/bijay-site/
export default defineConfig({
  site: 'https://bijay3030.github.io',
  base: '/bijay-site',
  markdown: {
    shikiConfig: { theme: 'min-light' },
  },
});
