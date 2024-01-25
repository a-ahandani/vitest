import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { withStyles } from "../../lib/decorators";
import { createStyleSheet } from "../../lib/helpers/jss";

const styles = {
  root: {},
  container: {
    display: "flex",
    position: "relative",
    padding: "var(--size-4)",
  },
  menu: {},
  logo: { flex: 1 },
};

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement("wd-header")
@withStyles(styleSheet)
export class Header extends LitElement {
  render() {
    return html`
      <div class=${classes.container}>
        <div class=${classes.logo}>
          <slot name="logo"></slot>
        </div>
        <div class=${classes.menu}>
          <slot name="menu"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-header": Header;
  }
}
