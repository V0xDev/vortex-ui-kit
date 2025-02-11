import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, COLORS_VALUES } from "@/shared/constants";
import VCheckbox from "@/components/Checkbox/VCheckbox.vue";
import { GenericMeta } from "@/shared/types";

const meta = {
  title: "Примитивы/Чекбокс/Стандартный",
  component: VCheckbox,
} satisfies GenericMeta<typeof VCheckbox>;

export default meta;

type Story = StoryObj<typeof VCheckbox>;

export const Basic: Story = {
  name: "Чекбокс",
  args: {
    default: "Label",
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

export const BasicDefaultState: Story = {
  name: "Значение по умолчанию",
  args: {
    default: "Label",
    color: "primary",
    modelValue: true,
  },
  argTypes: {
    color: {
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
    color: "primary",
    isIndeterminate: true,
  },
  argTypes: {
    color: {
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
    color: "primary",
    modelValue: true,
    isDisabled: true,
  },
  argTypes: {
    color: {
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
    color: "error",
    size: "s",
    modelValue: true,
  },
  argTypes: {
    color: {
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
    color: "success",
    size: "m",
    modelValue: true,
  },
  argTypes: {
    color: {
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
    color: "neutral",
    size: "l",
    modelValue: true,
  },
  argTypes: {
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: COLORS_VALUES,
    },
  },
};
