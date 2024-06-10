import svg from "vite-plugin-svgo";
import injectHTML from 'vite-plugin-html-inject';
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export const pages = {
  home: {
    title: 'Home',
    template: '/html/pages/home.html',
  },
  about: {
    title: 'About',
    template: '/html/pages/about.html',
  },
}



export default defineConfig({
  // root: 'html/pages',
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
    open: '/html/pages/home.html'
  },
  plugins: [svg(), injectHTML()],
});
