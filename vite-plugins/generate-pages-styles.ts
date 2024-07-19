
import { promises as fs } from 'fs';
import path from 'path';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer'; // Example PostCSS plugin

// Helper function to recursively find all CSS files
async function findCSSFiles(dir) {
    let cssFiles: string[] = [];
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            cssFiles = cssFiles.concat(await findCSSFiles(fullPath));
        } else if (file.name.endsWith('.css')) {
            cssFiles.push(fullPath);
        }
    }
    return cssFiles;
}

function generatePagesStyles({ htmlFolder = './src/html/partials', output = "./src" } = {}) {
    return {
        name: 'vite-plugin-postcss-concat',
        enforce: 'post',
        apply: 'build',
        async closeBundle() {
            // Find all CSS files recursively
            const cssFilePaths = await findCSSFiles(htmlFolder);

            // Read and process each CSS file with PostCSS
            const processedCSSFiles = await Promise.all(cssFilePaths.map(async (filePath) => {
                const cssContent = await fs.readFile(filePath, 'utf8');
                const result = await postcss([autoprefixer]).process(cssContent, { from: undefined });
                return result.css;
            }));

            // Concatenate processed CSS
            const concatenatedCSS = processedCSSFiles.join('\n');

            // Write the concatenated CSS to a file
            const concatenatedCSSPath = path.join(output, 'pages.css');
            await fs.writeFile(concatenatedCSSPath, concatenatedCSS);

        },
    };
}
export default generatePagesStyles;