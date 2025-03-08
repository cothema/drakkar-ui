import type {Meta, StoryObj} from "@storybook/react";
import {FaqItem} from "./FaqItem";

const meta: Meta<typeof FaqItem> = {
  title: "Drakkar UI Molecules/Components/Faq/Faq Item",
  component: FaqItem,
  tags: ["autodocs"],
  argTypes: {
    title: {control: "text"},
    counter: {control: "text"},
    children: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof FaqItem>;

export const Example1: Story = {
  args: {
    title: "What is the return policy?",
    counter: "1",
    children: "You can return your order within 30 days of purchase.",
  },
};

export const Example2: Story = {
  args: {
    title: "How do I track my order?",
    counter: "2",
    children: "You can track your order using the tracking link sent to your email.",
  },
};
