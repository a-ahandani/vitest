import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { withStyles } from '../../lib/decorators'
import { createStyleSheet } from '../../lib/jss';
import { classMap } from 'lit/directives/class-map.js';

const styles = {
  root: {
  },
  menuButton: {
    zIndex: 10,
    position: 'relative',
    display: 'flex',
  },
  menuList: {
    position: 'absolute',
    top: '0',
    right: '0',
    height: 500,
    minWidth: 'calc(var(--scale-fluid-10) * 3.5)',
    '& $menuBg': {
      borderRadius: 'var(--size-2)',
      transition: 'transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
      transform: 'translate(-2px, 2px) scale(1) rotate(1deg)',
      cursor: 'pointer',
      transformOrigin: '100% 0',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      zIndex: 'var(--layer-1)',
      pointerEvents: 'none',
      overflow: 'hidden',
      '&::before, &::after': {
        transition: 'transform 1.5s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: 'translate(130px, 0) rotate(15deg) scale(1.3, 0)',
        transformOrigin: '100% 0',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'var(--color-blue-300)',
        content: '""',
        pointerEvents: 'none',
      },
      '&::after': {
        background: 'var(--color-green-300)',
      },
      '&::before': {
        transitionDelay: '0.05s',
      },
    },
  },
  menuBg: {
  },
  menuActive: {
    '& $menuBg': {
      '--translate': 'calc(var(--container-padding) / 2)',
      transform: 'translate(var(--translate), calc(var(--translate) * -1)) scale(1.1)',

      '&::before, &::after': {
        transform: 'translate(0, 0) rotate(0deg) scale(1.3, 1)',
      },
      '&::after': {
        transitionDelay: '0.05s',
      },
      '&::before': {
        transitionDelay: '0s',
      },
    },
  }

};
const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;

@customElement('wd-menu')
@withStyles(styleSheet)
export class Menu extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;

  handleClick() {
    return () => {
      this.active = !this.active;
    }
  }

  render() {
    return html`
      <div class="${classMap({ [classes.menuActive]: this.active })}">
            <button class="${classes.menuButton}" @click=${this.handleClick()}>
              <svg width="34px" height="34px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M20 12L4 12" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> <path d="M20 17L4 17" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"></path> </g></svg>        
            </button>
      
            <div class="${classes.menuList}">
              <div class="${classes.menuBg}"></div>
              <div>
                <slot></slot>
              </div>
            </div>
      </div>
      `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wd-menu': Menu
  }
}
