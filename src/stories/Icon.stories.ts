import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";
import type { IconProps } from "../components/icon";
import "../components/icon";
import { ifDefined } from "lit/directives/if-defined.js";
// import menu from "@tabler/icons/menu.svg";
// import addressBook from "@tabler/icons/address-book.svg";

const meta = {
  title: "Example/Icon",
  tags: ["autodocs"],
  component: "wd-icon",
  args: {
    // icon: addressBook,
    size: 33,
    thickness: 1,
    color: "#000000",
  },
  argTypes: {
    icon: {
      // options: [menu, addressBook],
      control: {
        type: "select",
        labels: {
          // [menu]: "menu",
          // [addressBook]: "address-book",
        },
      },
    },
    size: {
      control: { type: "number" },
    },
    thickness: {
      control: { type: "number" },
    },
    color: {
      control: { type: "color" },
    },
  },
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
  render: ({ icon, size, thickness, color }: IconProps) =>
    html`<wd-icon
      icon="${ifDefined(icon)}"
      thickness="${ifDefined(thickness)}"
      color="${ifDefined(color)}"
      size="${ifDefined(size)}"
    ></wd-icon>`,
};
