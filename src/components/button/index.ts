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
    border: "1px solid var(--button-color)",
    borderRadius: "var(--button-border-radius)",
    color: "var(--button-color)",
    backgroundColor: "var(--button-background-color)",
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "var(--button-alternative-color)",
      color: "var(--button-color)",
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

export interface ButtonProps {
  /**
   * Remove border
   */
  noBorder?: boolean;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
}

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement("wd-button")
@withStyles(styleSheet)
export class Button extends LitElement implements ButtonProps {
  @property({ type: String })
  size: "small" | "medium" | "large" = "large";

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
