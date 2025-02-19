import type { Preview } from "@storybook/vue3";
import "@/static/font.css";
import "@/assets/_index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
