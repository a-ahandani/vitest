import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { useStyles } from '../../lib/helpers/jss';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';


const styles = ({ thickness }: { thickness: number }) => ({
  '@global :host': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    '& svg': {
      strokeWidth: thickness,
    }
  }
});

@customElement('wd-icon')
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
    const { style, classes } = useStyles(styles({ thickness: this.thickness }))
    return html`
      <style>
         ${style}
      </style>
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
