import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://inkfish-yu.github.io',
  build: {
    format: 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
