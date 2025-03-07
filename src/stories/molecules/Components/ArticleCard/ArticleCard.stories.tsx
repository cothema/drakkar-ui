import type {Meta, StoryObj} from "@storybook/react";
import {ArticleCard} from "./ArticleCard";

const meta: Meta<typeof ArticleCard> = {
  title: "Drakkar UI Molecules/Components/Article Card",
  component: ArticleCard,
  tags: ["autodocs"],
  args: {
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus.",
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {};
