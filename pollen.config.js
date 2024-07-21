import { defineConfig } from 'pollen-css/utils';


const COLORS = {
    purple: "#9d27f7",
}

function adjustColor(color, factor) {
    const rgb = color.match(/\w\w/g).map((c) => parseInt(c, 16) / 255);
    const adjust = (x) => (factor > 1 ? x + (1 - x) * (factor - 1) : x * factor);
    const newRgb = rgb.map(adjust).map((x) => Math.round(x * 255).toString(16).padStart(2, '0'));
    return `#${newRgb.join('')}`;
}

function generateColorPalette(colorName, baseColor) {
    const factors = {
        50: 1.75,
        100: 1.60,
        200: 1.50,
        300: 1.35,
        400: 1.20,
        500: 1.0,
        600: 0.85,
        700: 0.70,
        800: 0.60,
        900: 0.50,
        950: 0.35
    };

    const palette = {};
    for (const [key, factor] of Object.entries(factors)) {
        palette[`${colorName}-${key}`] = adjustColor(baseColor, factor);
    }

    // Ensure the base color is set exactly for the key 500
    palette[`${colorName}-500`] = baseColor;

    return palette;
}

const generateColorPalettes = () => {
    let palettes = {}
    for (const [colorName, baseColor] of Object.entries(COLORS)) {
        palettes = {
            ...palettes,
            ...generateColorPalette(colorName, baseColor)
        };
    }
    return palettes;
}


export default defineConfig((pollen) => ({
    output: {
        css: './src/styles/variables.css',
        // json: './pollen.json'
    },
    modules: {
        scale: true,
        width: true,
        color: {
            ...pollen.color,
            ...generateColorPalettes()
        },
    }
}));