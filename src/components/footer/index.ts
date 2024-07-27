import { SignalWatcher } from "@lit-labs/preact-signals";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
// import { menuSignal } from "../menu/signals";
// import { pageTransitionSignal } from "../page-transition/signals";

@customElement("wd-footer")
export class Footer extends SignalWatcher(LitElement) {



  render() {
    // console.log('footer', menuSignal.value)
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
