import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { withStyles } from "../../lib/decorators";
import { createStyleSheet } from "../../lib/helpers/jss";

const styles = {
  container: {
    padding: "var(--container-padding)",
    margin: "var(--container-margin)",
  },
};

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement("wd-container")
@withStyles(styleSheet)
export class Container extends LitElement {

  render() {
    return html`
      <div 
      class=${classes.container}>
        <wd-page-transition></wd-page-transition>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-container": Container;
  }
}
