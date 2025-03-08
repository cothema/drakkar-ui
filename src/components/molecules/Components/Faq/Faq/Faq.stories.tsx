import type {Meta, StoryObj} from "@storybook/react";
import {Faq} from "./Faq";
import {FaqItem} from "../FaqItem/FaqItem";

const meta: Meta<typeof Faq> = {
  title: "Drakkar UI Molecules/Components/Faq/Faq",
  component: Faq,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Faq>;

export const Default: Story = {
  args: {
    children: (
      <>
        <FaqItem title="What is your refund policy?" counter="1">
          You can request a refund within 30 days of purchase.
        </FaqItem>
        <FaqItem title="How long does shipping take?" counter="2">
          Shipping typically takes 5-7 business days.
        </FaqItem>
      </>
    ),
  },
};
