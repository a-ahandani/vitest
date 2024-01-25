import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { withStyles } from "../../lib/decorators";
import { createStyleSheet } from "../../lib/helpers/jss";
import { classMap } from "lit/directives/class-map.js";

const styles = {
  "@global :host": {},
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "var(--button-padding)",
    textAlign: "center",
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid var(--button-border-color)",
    borderRadius: "5px",
    color: "var(--button-text-color)",
    backgroundColor: "var(--button-background-color)",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "var(--button-hover-background-color)",
      color: "var(--button-hover-text-color)",
    },
  },
  small: {
    fontSize: "var(--button-font-size-small)",
  },
  medium: {
    fontSize: "var(--button-font-size-medium)",
  },
  large: {
    fontSize: "var(--button-font-size-large)",
  },
  noBorder: {
    border: "none",
  },
};

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement("wd-button")
@withStyles(styleSheet)
export class Button extends LitElement {
  @property({ type: String })
  size = "large";

  @property({ type: Boolean })
  noBorder = false;

  render() {
    const variant = {
      [classes.root]: true,
      [classes[this.size]]: true,
      [classes.noBorder]: this.noBorder,
    };
    return html`
      <button class=${classMap(variant)}>
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
