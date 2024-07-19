import { resolve } from 'path';
import { fileURLToPath, URL } from "node:url";
import { promises as fs } from 'fs';
import prettier from 'prettier';

const formatHTMLPlugin = () => {
    const srcFolder = resolve(process.cwd(), 'src');
    return {
        name: 'format-html',
        async writeBundle() {
            const pagesDir = resolve(fileURLToPath(new URL(`${srcFolder}/html/pages`, import.meta.url)));
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
export default formatHTMLPlugin;