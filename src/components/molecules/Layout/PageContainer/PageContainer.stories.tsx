import type {Meta, StoryObj} from "@storybook/react";
import {PageContainer} from "./PageContainer";

const meta: Meta<typeof PageContainer> = {
  title: "Drakkar UI Molecules/Layout/Page Container",
  component: PageContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

export const Default: Story = {
  args: {
    heading: "Hello World",
    description: "This is a sample description for the Page Container.",
    children: "This is the page content.",
  },
};
