import type { Meta, StoryObj } from "@storybook/react";
import { ChipButton } from "./ChipButton";
import {faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";

const meta: Meta<typeof ChipButton> = {
  title: "UI/ChipButton",
  component: ChipButton,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
    faIcon: { control: "text" }, // Cannot directly use FontAwesomeIcon here
  },
};

export default meta;
type Story = StoryObj<typeof ChipButton>;

export const WithIcon: Story = {
  args: {
    title: "Contact Us",
    children: "info@cothema.com",
    faIcon: faEnvelopeOpen,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: "Click me!",
  },
};
