import type { Meta, StoryObj } from "@storybook/vue3";
import {
  Color,
  COLORS_OPTIONS,
  SIZE_OPTIONS,
  SIZE_VALUES,
} from "@/shared/constants";
import VLabel from "@/components/Label/VLabel.vue";

const meta: Meta<typeof VLabel> = {
  title: "Примитивы/Текст",
  component: VLabel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VLabel>;

export const Basic: Story = {
  name: "Стандартный текст",
  args: {
    size: "s1",
    label: "Текст размера s1",
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZE_OPTIONS,
      mapping: SIZE_VALUES,
    },
  },
};

export const ChangeSize: Story = {
  name: "Измененный размер",
  args: {
    size: "s3",
    label: "Можно выбрать любой размер (пропс size)",
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZE_OPTIONS,
      mapping: SIZE_VALUES,
    },
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    size: "s3",
    label: "Можно выбрать любой цвет (пропс color)",
    color: "#0066d0",
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZE_OPTIONS,
      mapping: SIZE_VALUES,
    },
  },
};

export const ChangeColorV2: Story = {
  name: "Цвет из Enum",
  args: {
    size: "s3",
    label: "Можно выбрать любой цвет (пропс color) подставив enum",
    color: "#0066d0",
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZE_OPTIONS,
      mapping: SIZE_VALUES,
    },
    color: {
      control: "select",
      options: COLORS_OPTIONS,
      mapping: Color,
    },
  },
};
