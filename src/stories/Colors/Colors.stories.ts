import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, COLORS_VALUES } from "@/shared/constants";
import VColor from "@/components/Color/VColor.vue";

const meta: Meta<typeof VColor> = {
  title: "Примитивы/Цвета",
  component: VColor,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VColor>;

export const Primary: Story = {
  name: "Primary",
  args: {
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};
