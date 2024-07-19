import prettier from 'prettier';
import path, { resolve } from 'path';
import { fileURLToPath, URL } from "node:url";
import { promises as fs } from 'fs';

const generateMenu = (pages) => {
    const srcFolder = resolve(process.cwd(), 'src');

    return {
        name: 'generate-menu',
        async buildStart() {
            const navTemplate = prettier.format(`
            <ul>
                ${Object.keys(pages).map(page => `<li><a href="${pages[page].template}">${pages[page].title}</a></li>`).join('\n')}
            </ul>
        `, { parser: 'html' });
            const content = await navTemplate;

            const menuFilePath = path.join(fileURLToPath(new URL(`${srcFolder}/html/partials/header/menu/generated-menu.html`, import.meta.url)));
            await fs.writeFile(menuFilePath, content);
        }
    };
};
export default generateMenu;