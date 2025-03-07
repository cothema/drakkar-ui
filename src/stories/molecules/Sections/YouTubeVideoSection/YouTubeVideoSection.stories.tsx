import type {Meta, StoryObj} from "@storybook/react";
import {YouTubeVideoSection} from "./YouTubeVideoSection";

const meta: Meta<typeof YouTubeVideoSection> = {
  title: "Drakkar UI Molecules/Sections/YouTube Video Section",
  component: YouTubeVideoSection,
  tags: ["autodocs"],
  args: {
    videoId: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof YouTubeVideoSection>;

export const ExampleVideo: Story = {
  args: {
    videoId: "iGDh6LbQJAU",
  },
};
