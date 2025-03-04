import type {Meta, StoryObj} from "@storybook/react";
import {ContactWhatsAppChipButton} from "./ContactWhatsAppChipButton";

const meta: Meta<typeof ContactWhatsAppChipButton> = {
  title: "UI/ContactWhatsAppChipButton",
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
