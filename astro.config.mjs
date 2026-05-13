// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lambda-agency.example.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/draft'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
