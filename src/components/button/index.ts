import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { withStyles } from "../../lib/decorators";
import { createStyleSheet } from "../../lib/helpers/jss";

const styles = {
  root: {
    display: "inline-block",
    padding: "var(--button-padding)",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid var(--button-border-color)",
    borderRadius: 5,
    color: "var(--button-text-color)",
    backgroundColor: "transparent",
    transition: "background-color 0.3s, color 0.3s",
  },
};

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement("wd-button")
@withStyles(styleSheet)
export class Button extends LitElement {
  render() {
    return html`
      <button class=${classes.root}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-button": Button;
  }
}
