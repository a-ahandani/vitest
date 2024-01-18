import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { withStyles } from '../../lib/decorators'
import { createStyleSheet } from '../../lib/jss';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';


const styles = {
  '@global :host': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    '& svg': {
      strokeWidth: 'var(--size-1)',
    }
  }
};

const styleSheet = createStyleSheet(styles);
const classes = styleSheet.classes;
@customElement('wd-icon')
@withStyles(styleSheet)
export class Icon extends LitElement {

  @property({ type: String })
  icon = 'menu';
  @property({ type: Number })
  size = 24;
  @property({ type: Number })
  thickness = 1;
  @property({ type: String })
  color = 'currentColor';

  render() {
    return html`
      <i class="${classes.icon}">
        ${unsafeSVG(this.icon)}
      </i>`
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'wd-icon': Icon
  }
}
