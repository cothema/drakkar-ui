import type {Meta, StoryObj} from "@storybook/react";
import {ContactMailChipButton} from "./ContactMailChipButton";

const meta: Meta<typeof ContactMailChipButton> = {
  title: "Drakkar UI Molecules/Components/Chip Button/Contact Mail Chip Button",
  component: ContactMailChipButton,
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
    email: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof ContactMailChipButton>;

export const Default: Story = {
  args: {
    email: "info@cothema.com",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Contact Support",
    email: "support@cothema.com",
  },
};
