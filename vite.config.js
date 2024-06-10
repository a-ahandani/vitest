import svg from "vite-plugin-svgo";
import injectHTML from 'vite-plugin-html-inject';
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { promises as fs } from 'fs';
import { resolve } from 'path';
import path from 'path';
import prettier from 'prettier';

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



const generateHTMLFiles = () => {
  return {
    name: 'generate-html-files',
    async buildStart() {
      const navTemplate = prettier.format(`
        <!-- Navigation -->
        <wd-menu slot="menu">
          <ul>
            ${Object.keys(pages).map(page => `<li><a href="${pages[page].template}">${pages[page].title}</a></li>`).join('\n')}
          </ul>
        </wd-menu>
      `, { parser: 'html' });
      const content = await navTemplate;

      const menuFilePath = path.join(fileURLToPath(new URL('./html/partials/header/menu/index.html', import.meta.url)));
      await fs.writeFile(menuFilePath, content);
    }
  };
};

const formatHTMLPlugin = () => {
  return {
    name: 'format-html',
    async writeBundle() {
      const pagesDir = resolve(fileURLToPath(new URL('./dist/html/pages', import.meta.url)));
      const files = await fs.readdir(pagesDir);

      for (const file of files) {
        if (file.endsWith('.html')) {
          const filePath = resolve(pagesDir, file);
          let html = await fs.readFile(filePath, 'utf-8');
          html = await prettier.format(html, { parser: 'html' });
          await fs.writeFile(filePath, html);
        }
      }
    },
  };
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
  plugins: [svg(), injectHTML(), generateHTMLFiles(), formatHTMLPlugin()],
});
