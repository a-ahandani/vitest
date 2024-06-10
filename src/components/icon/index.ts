import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { useStyles } from "../../lib/helpers/jss";

export interface IconProps {
  /**
   * Icon name
   */
  icon?: string;
  /**
   * Icon size
   */
  size?: number;
  /**
   * Icon thickness
   */
  thickness?: number;
  /**
   * Icon color
   */
  color?: string;
}

const styles = ({ thickness, color }: IconProps) => ({
  "@global :host": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "44px",
    height: "44px",
    "& svg": {
      strokeWidth: thickness,
      stroke: color,
      width: "100%",
      height: "100%",
    },
  },
});

@customElement("wd-icon")
export class Icon extends LitElement implements IconProps {
  @property({ type: String })
  icon = "";
  @property({ type: Number })
  size = 24;
  @property({ type: Number, reflect: true })
  thickness = 1;
  @property({ type: String })
  color = "red";

  render() {
    const { style } = useStyles(
      styles({ thickness: this.thickness, color: this.color, size: this.size }),
    );

    return html`${style} <box-icon type="solid" name="rocket"></box-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "wd-icon": Icon;
  }
}
