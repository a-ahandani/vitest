import { LitElement, PropertyValues, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./styles";
import { menuSignal } from "./signals";

@customElement("wd-menu")
export class Menu extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;


  handleClick() {
    this.active = !this.active;
    menuSignal.value = {
      ...menuSignal.value,
      isMenuOpen: this.active
    };
  }

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('active')) {
      if (this.active) {
        document.body.classList.add('menu-active');
      } else {
        document.body.classList.remove('menu-active');
      }
    }
  }

  render() {
    const { style, classes } = useStyles(styles());
    return html`${style}
      <div class="${classMap({ [classes.menuActive]: this.active })}">
        <wd-hamburger
          class="${classes.menuButton}"
          @click=${this.handleClick}
        >
        </wd-hamburger>
        <div class="${classes.menuList}">
          <wd-animated-background ?active=${this.active}></wd-animated-background>
          <nav class="${classes.navigation}">
            <slot></slot>
          </nav>
        </div>
        
      </div> `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "wd-menu": Menu;
  }
}
