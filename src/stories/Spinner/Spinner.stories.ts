import type { Meta, StoryObj } from "@storybook/vue3";
import VSpinner from "@/components/Spinner/VSpinner.vue";
import { Color, COLORS_OPTIONS } from "@/shared/constants";

const meta: Meta<typeof VSpinner> = {
  title: "Примитивы/Спиннер",
  component: VSpinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VSpinner>;

export const Basic: Story = {
  name: "Спиннер",
  args: {
    size: "25px",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: Color,
    },
  },
};

export const BasicChangeSize: Story = {
  name: "Измененный размер",
  args: {
    size: "40px",
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: Color,
    },
  },
};
