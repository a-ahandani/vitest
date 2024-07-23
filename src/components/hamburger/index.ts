import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";
import { styles } from "./styles";




export interface HamburgerProps {

}


@customElement("wd-hamburger")
export class Hamburger extends LitElement implements HamburgerProps {
  render() {
    const { style, classes } = useStyles(styles());

    return html`${style}
      <div class="${classes.burgerIcon} ${classes.extraLarge}">
        <input type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-hamburger": Hamburger;
  }
}
