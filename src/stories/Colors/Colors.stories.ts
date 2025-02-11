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
  name: "Синий",
  args: {
    color: "primary",
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Success: Story = {
  name: "Зеленый",
  args: {
    color: "success",
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Error: Story = {
  name: "Красный",
  args: {
    color: "error",
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Secondary: Story = {
  name: "Розовый",
  args: {
    color: "secondary",
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Neutral: Story = {
  name: "Серый",
  args: {
    color: "neutral",
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};
