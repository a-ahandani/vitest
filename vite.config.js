import svg from "vite-plugin-svgo";
import injectHTML from 'vite-plugin-html-inject';
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import formatHTMLPlugin from './vite-plugins/format-html.ts';
import generateMenu from './vite-plugins/generate-menu.ts';
import generatePagesStyles from './vite-plugins/generate-pages-styles.ts';

export const pages = {
  home: {
    title: 'HOME',
    template: '/src/html/pages/home.html',
  },
  projects: {
    title: 'PROJECTS',
    template: '/src/html/pages/about.html',
  },
  about: {
    title: 'ABOUT',
    template: '/src/html/pages/about.html',
  },
  contact: {
    title: 'CONTACT',
    template: '/src/html/pages/about.html',
  },
}

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: Object.keys(pages).reduce((acc, page) => {
        acc[page] = new URL(pages[page].template, import.meta.url).pathname;
        return acc;
      }, {})
    }
  },
  server: {
    open: '/src/html/pages/home.html'
  },
  plugins: [
    svg(),
    injectHTML(),
    generatePagesStyles(),
    generateMenu(pages),
    formatHTMLPlugin()
  ],
});
