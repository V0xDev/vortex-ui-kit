import type { Meta, StoryObj } from "@storybook/vue3";
import VButton from "@/components/Button/VButton.vue";
import { Color, COLORS_OPTIONS, Size, SIZE_OPTIONS } from "@/shared/constants";

const meta: Meta<typeof VButton> = {
  title: "Примитивы/Кнопки",
  component: VButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VButton>;

export const Basic: Story = {
  name: "Базовая кнопка",
  args: {
    default: "Click Me!!",
    isLoading: false,
    variant: "primary",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Outline: Story = {
  name: "Кнопка с обводкой",
  args: {
    default: "Click Me!!",
    isLoading: false,
    variant: "primary",
    size: "s",
    isRounded: false,
    isBorder: true,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Rounded: Story = {
  name: "Кнопка с округлением",
  args: {
    default: "Click Me!!",
    isLoading: false,
    variant: "primary",
    size: "s",
    isRounded: true,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Loading: Story = {
  name: "Кнопка с загрузкой",
  args: {
    default: "Click Me!!",
    isLoading: true,
    variant: "primary",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    default: "Click Me!!",
    isLoading: false,
    variant: "error",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    default: "Click Me!!",
    isLoading: false,
    variant: "secondary",
    size: "m",
    isRounded: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Large: Story = {
  name: "Большой размер",
  args: {
    default: "Click Me!!",
    isLoading: false,
    variant: "neutral",
    size: "l",
    isRounded: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};
