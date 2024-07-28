import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Color, PerspectiveCamera, Scene, VSMShadowMap, WebGLRenderer } from "three";

import {
  BlendFunction,
  EffectComposer,
  EffectPass,
  RenderPass,
  GridEffect,
  GlitchEffect,
  NoiseEffect,

} from "postprocessing";



@customElement("wd-noise")
export class Noise extends LitElement {
  @property({ type: Boolean, reflect: true })
  active = false;
  @property({ type: String, reflect: false })
  color = '#7dd3fc';
  width: number | undefined;
  height: number | undefined;
  top: number | undefined;
  left: number | undefined;

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `;

  firstUpdated() {

    this.width = this._slottedChildren?.offsetWidth;
    this.height = this._slottedChildren?.offsetHeight;
    this.top = this._slottedChildren?.offsetTop;
    this.left = this._slottedChildren?.offsetLeft;

    this.initThree();


  }


  initThree() {
    // Renderer
    if (!this._slottedChildren) return;

    const renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      antialias: false,
      stencil: false,
      depth: false,
      alpha: true,
      preserveDrawingBuffer: true,
    });

    renderer.setClearColor(new Color(this.color), 1); // the default
    renderer.shadowMap.type = VSMShadowMap;
    renderer.shadowMap.autoUpdate = false;
    renderer.shadowMap.needsUpdate = true;
    renderer.shadowMap.enabled = true;
    renderer.setSize(this.width as number, this.height as number);

    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = `${this.top}px`;
    renderer.domElement.style.zIndex = "-1";

    this._slottedChildren?.append(renderer.domElement);


    const scene = new Scene();
    const camera = new PerspectiveCamera(59, 1, 0.3, 1000);
    camera.position.z = 5;

    // Post Processing

    const noiseEffect = new NoiseEffect({
      premultiply: true,
    });
    const gridEffect = new GridEffect({ scale: 1.6 });
    gridEffect.blendMode.opacity.value = 0.2;
    gridEffect.blendMode.blendFunction = BlendFunction.NORMAL;
    const glitchEffect = new GlitchEffect({
      columns: 1,
      ratio: 0.05,
    });

    noiseEffect.blendMode.opacity.value = 0.8;
    noiseEffect.blendMode.blendFunction = BlendFunction.NORMAL;

    const renderPass = new RenderPass(scene, camera);


    const effectPass = new EffectPass(
      camera,
      glitchEffect,
      noiseEffect,
      // gridEffect,
    );



    const composer = new EffectComposer(renderer);

    composer.addPass(renderPass);
    composer.addPass(effectPass);

    // Resizing

    const onResize = () => {
      const width = this.width as number;
      const height = this.height as number;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      composer.setSize(width, height);
    }

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        this.width = entry.contentRect.width;
        this.height = entry.contentRect.height;
        onResize();
      }
    });

    if (this._slottedChildren) {
      resizeObserver.observe(this._slottedChildren);
    }

    requestAnimationFrame(function render() {
      requestAnimationFrame(render);
      composer.render();
    });

  }
  get _slottedChildren() {
    const slot = this.shadowRoot?.querySelector('slot');
    const children = slot?.assignedElements({ flatten: true })?.[0]
    return children as HTMLElement;
  }

  render() {
    return html`
        <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-noise": Noise;
  }
}
