// vite.config.ts

import path from 'node:path';
import marko from '@marko/run/vite';
import adapter from '@marko/run-adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/marko-portfolio/', // Base URL for GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  plugins: [
    marko({
      adapter: adapter(),
    }),
  ],
});
