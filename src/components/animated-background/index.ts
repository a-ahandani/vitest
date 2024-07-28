import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./styles";

@customElement("wd-animated-background")
export class AnimatedBackground extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;

  render() {
    const { style, classes } = useStyles(styles());

    const classList = classMap({
      [classes.isActive]: this.active,
      [classes.animatedBackground]: true
    });

    return html`${style}
      <div class="${classList}"></div> 
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "wd-animated-background": AnimatedBackground;
  }
}
