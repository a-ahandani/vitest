import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";
import { classMap } from "lit/directives/class-map.js";
import { styles } from "./styles";

@customElement("wd-menu")
export class Menu extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;

  handleClick() {
    return () => {
      this.active = !this.active;
    };
  }

  render() {
    const { style, classes } = useStyles(styles());

    return html`${style}
      <div class="${classMap({ [classes.menuActive]: this.active })}">
        <wd-button
          class="${classes.menuButton}"
          @click=${this.handleClick()}
          noBorder
        >
          <wd-icon icon="${'icon'}"></wd-icon>
        </wd-button>
        <div class="${classes.menuList}">
          <div class="${classes.menuBg}"></div>
          <div>
            <slot></slot>
          </div>
        </div>
      </div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-menu": Menu;
  }
}
