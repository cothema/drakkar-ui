import type {Meta, StoryObj} from "@storybook/react";
import {ContactPhoneChipButton} from "./ContactPhoneChipButton";

const meta: Meta<typeof ContactPhoneChipButton> = {
  title: "Drakkar UI Molecules/Chip Button/Contact Phone Chip Button",
  component: ContactPhoneChipButton,
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
    phone: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof ContactPhoneChipButton>;

export const Default: Story = {
  args: {
    phone: "+420 123 456 789",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Contact Support",
    phone: "123-456-789",
  },
};
