import jss, { Styles } from "jss";
import preset from "jss-preset-default";
import { TemplateResult, html } from "lit";

const toKebabCase = (str: string) =>
  str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1_$2").toLowerCase();
jss.setup({
  ...preset(),
  createGenerateId: () => {
    let counter = 0;
    return (rule) => {
      return `${toKebabCase(rule.key)}__${counter++}`;
    };
  },
});

export const createStyleSheet = (
  styles: Partial<Styles<string | number | symbol, undefined>>,
) => jss.createStyleSheet(styles).attach();

export const useStyles = (
  jss: Partial<Styles<string | number | symbol, undefined>>,
): { style: TemplateResult; classes: Record<string, string> } => {
  const styleSheet = createStyleSheet(jss);
  const classes = styleSheet.classes;
  const style = html`<style>
    ${styleSheet.toString()}
  </style>`;
  return { style, classes };
};
