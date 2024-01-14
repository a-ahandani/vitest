
import { css, unsafeCSS } from "lit";
import { StyleSheet } from 'jss'
import { TWStyles } from "../tailwind";

export const disableShadow = () => {
    return function <T extends CustomElementConstructor>(constructor: T) {
        return class extends constructor {
            createRenderRoot() {
                return this; // turn off shadow dom to access external styles
            }
        };
    }
}

export const withTailwindStyles = (styles: Array<unknown> = []) => {
    return function <T extends CustomElementConstructor>(constructor: T) {
        return class extends constructor {
            static styles = [...styles, TWStyles];
        };
    }
}

export const withStyles = (styleSheet: StyleSheet<string | number | symbol>) => {
    return function <T extends CustomElementConstructor>(constructor: T) {
        const styleString = styleSheet.toString()
        return class extends constructor {
            static styles = [css`${unsafeCSS(styleString)}`];
        };
    }
}