import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { withTailwindStyles } from '../../decorators'

@customElement('my-element')
@withTailwindStyles()
export class MyElement extends LitElement {

  render() {
    return html`
      <div class="p-14 bg-red-500">
        <h1 class=" text-blue-100">
           Hello world!s
        </h1>
      <slot></slot>
      </div>
      `
      
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
