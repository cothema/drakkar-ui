import "../src/styles/global.css";
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
