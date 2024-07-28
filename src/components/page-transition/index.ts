import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";
import { styles } from "./styles";
import { pageTransitionSignal } from './signals';
import { SignalWatcher } from "@lit-labs/preact-signals";
import { classMap } from "lit/directives/class-map.js";


@customElement("wd-page-transition")
export class PageTransition extends SignalWatcher(LitElement) {
  @property({ type: Boolean, reflect: true })
  active = false;
  element: HTMLElement | null = null;

  protected firstUpdated() {
    this.element = this.renderRoot.querySelector('#animated-background');
    if (this.element) {
      this.element.addEventListener("transitionend", () => {
        pageTransitionSignal.value = {
          ...pageTransitionSignal.value,
          animating: false
        };
      });
    }
  }


  protected updated(): void {
    const { loading, animating } = pageTransitionSignal.value;
    if (animating) {
      this.element?.classList.add('active');
    }
    if (loading || animating) {
      this.active = true;
    }
    if (!loading && !animating) {
      this.active = false;
    }

  }


  render() {
    const { style, classes } = useStyles(styles());

    const classList = classMap({
      [classes.container]: true,
      active: this.active
    })

    return html`${style}
      <wd-noise color="#ff008c">
          <div
              id="animated-background"
              class="${classList}" >
          </div> 
      </wd-noise>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "wd-page-transition": PageTransition;
  }
}
