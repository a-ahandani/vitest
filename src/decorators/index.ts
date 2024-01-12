
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