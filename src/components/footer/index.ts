import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("wd-footer")
export class Footer extends LitElement {
  render() {
    return html`
      <div class="">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-footer": Footer;
  }
}
