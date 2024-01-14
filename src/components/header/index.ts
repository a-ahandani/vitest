import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { withStyles } from '../../lib/decorators'
import { createStyleSheet } from '../../lib/jss';

const styles = {
  root: {
  },
  container: {
    display: "flex",
    padding: "var(--size-4)",
  }
};

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement('wd-header')
@withStyles(styleSheet)
export class Header extends LitElement {
  render() {
    return html`
      <div class=${classes.container}>
         <slot></slot>
      </div>
      `
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'wd-header': Header
  }
}
