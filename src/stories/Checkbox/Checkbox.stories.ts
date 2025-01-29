import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, COLORS_VALUES } from "@/shared/constants";
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";

const meta: Meta<typeof VCheckbox> = {
  title: "Примитивы/Чекбокс/Стандартный",
  component: VCheckbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VCheckbox>;

export const Basic: Story = {
  name: "Чекбокс",
  args: {
    default: "Label",
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

export const BasicDefaultState: Story = {
  name: "Значение по умолчанию",
  args: {
    default: "Label",
    variant: "primary",
    initialValue: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const BasicIndeterminate: Story = {
  name: "Indeterminate",
  args: {
    default: "Label",
    variant: "primary",
    isIndeterminate: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const BasicDisabled: Story = {
  name: "Отключенный",
  args: {
    default: "Label",
    variant: "primary",
    initialValue: true,
    isDisabled: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    default: "Label",
    variant: "error",
    size: "s",
    initialValue: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    default: "Label",
    variant: "secondary",
    size: "m",
    initialValue: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};

export const Large: Story = {
  name: "Большой размер",
  args: {
    default: "Label",
    variant: "neutral",
    size: "l",
    initialValue: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};
