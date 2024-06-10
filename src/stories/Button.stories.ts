import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import type { ButtonProps } from "../components/button";
import "../components/button";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "Example/Button",
  tags: ["autodocs"],
  component: "wd-button",
  args: {
    size: "medium",
    noBorder: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    noBorder: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  render: ({ size, noBorder }: ButtonProps) =>
    html`<wd-button ?noBorder="${noBorder}" size="${ifDefined(size)}">
      Button
    </wd-button>`,
};
