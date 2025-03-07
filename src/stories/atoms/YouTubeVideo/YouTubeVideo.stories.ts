import type {Meta, StoryObj} from "@storybook/react";
import {YouTubeVideo} from "./YouTubeVideo";

const meta: Meta<typeof YouTubeVideo> = {
  title: "Drakkar UI Atoms/YouTube Video",
  component: YouTubeVideo,
  tags: ["autodocs"],
  args: {
    videoId: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof YouTubeVideo>;

export const ExampleVideo: Story = {
  args: {
    videoId: "iGDh6LbQJAU",
  },
};
