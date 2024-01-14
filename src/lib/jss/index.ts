import jss, { Styles } from 'jss';
import preset from 'jss-preset-default';

const toKebabCase = (str: string) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
jss.setup({
    ...preset(),
    createGenerateId: () => {
        let counter = 0;
        return (rule, ...a) => {
            console.log(rule, a);
            return `${toKebabCase(rule.key)}__${counter++}`;
        };
    },
});

export const createStyleSheet = (styles: Partial<Styles<string | number | symbol, any, undefined>>) => jss.createStyleSheet(styles).attach();
