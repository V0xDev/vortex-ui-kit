import type { Meta, StoryObj } from "@storybook/vue3";
import {
  COLORS_OPTIONS,
  BASE_SIZE_OPTIONS,
  SIZE_OPTIONS,
  SIZE_VALUES,
  Size,
} from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import DuplicateIcon from "@/shared/icons/DuplicateIcon.vue";
import CloseIcon from "@/shared/icons/CloseIcon.vue";
import VLabel from "@/components/Label/VLabel.vue";
import { computed, shallowRef, watch } from "vue";
import VSwitch from "@/components/Switch/VSwitch.vue";
import { VARIANT_SWITCH_OPTIONS } from "@/components/Switch/VSwitch.types";
import VCard from "@/components/Card/VCard.vue";

const meta: Meta<typeof VCard> = {
  title: "Примитивы/Карточка",
  component: VCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VCard>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    isStretch: false,
    default: "Контейнер",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};

export const FullWidth: Story = {
  name: "На всю ширину",
  args: {
    isStretch: true,
    default: "Контейнер",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};

export const Shadow: Story = {
  name: "С тенью",
  args: {
    isStretch: false,
    isBoxShadow: true,
    default: "Контейнер",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    isStretch: false,
    color: "success",
    default: "Контейнер",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};

export const Rounded: Story = {
  name: "С округлением",
  args: {
    isStretch: false,
    isRounded: true,
    default: "Контейнер",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};

export const Small: Story = {
  name: "Отступ внутри",
  args: {
    isStretch: false,
    padding: Size.l1,
    default: "Контейнер",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};

export const BasicSlots: Story = {
  name: "Cлоты",
  args: {
    isStretch: false,
    default: "Слот по умолчанию",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    padding: {
      control: "select",
      options: SIZE_VALUES,
    },
  },
};
