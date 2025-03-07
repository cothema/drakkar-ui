import type {Meta, StoryObj} from "@storybook/react";
import {ContactWhatsAppChipButton} from "./ContactWhatsAppChipButton";

const meta: Meta<typeof ContactWhatsAppChipButton> = {
  title: "Drakkar UI Molecules/Components/Chip Button/Contact WhatsApp Chip Button",
  component: ContactWhatsAppChipButton,
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof ContactWhatsAppChipButton>;

export const WithTitle: Story = {
  args: {
    title: "Contact Us",
  },
};
