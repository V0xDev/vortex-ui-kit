import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|mjs|ts)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/preset-scss",
  ],
  staticDirs: ["../src/static"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
export default config;
