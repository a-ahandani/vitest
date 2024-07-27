import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";
import { styles } from "./styles";
import { pageTransitionSignal } from './signals';
import { SignalWatcher } from "@lit-labs/preact-signals";


@customElement("wd-page-transition")
export class PageTransition extends SignalWatcher(LitElement) {
  @property({ type: Boolean, reflect: true })
  active = false;




  render() {
    const { style } = useStyles(styles());
    console.log('page transition--------->', pageTransitionSignal.value.data)
    return html`${style}
      <div>
      </div> 
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "wd-page-transition": PageTransition;
  }
}
