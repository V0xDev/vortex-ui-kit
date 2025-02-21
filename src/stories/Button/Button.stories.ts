import type { Meta, StoryObj } from "@storybook/vue3";
import VButton from "@/components/Button/VButton.vue";
import { COLORS_OPTIONS, BASE_SIZE_OPTIONS } from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import { CloseIcon, DuplicateIcon } from "@/components";

const meta: Meta<typeof VButton> = {
  title: "Примитивы/Кнопки",
  component: VButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VButton | typeof HTMLButtonElement>;

export const Basic: Story = {
  name: "Кнопка",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const BasicDisabled: Story = {
  name: "Отключенная",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: false,
    disabled: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Outline: Story = {
  name: "С обводкой",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: false,
    isBorder: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Rounded: Story = {
  name: "С округлением",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Loading: Story = {
  name: "С загрузкой",
  args: {
    default: "Click Me!!",
    isLoading: true,
    color: "primary",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const FullWidth: Story = {
  name: "На всю ширину",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: false,
    isStretch: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "error",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "secondary",
    size: "m",
    isRounded: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Large: Story = {
  name: "Большой размер",
  args: {
    default: "Click Me!!",
    isLoading: false,
    color: "neutral",
    size: "l",
    isRounded: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const BasicSlots: Story = {
  name: "Cлоты",
  args: {
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: false,
    before: "Before",
    default: "Click Me!!",
    after: "After",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const BasicSlotsWithIcons: Story = {
  name: "Cлоты с иконками",
  args: {
    isLoading: false,
    color: "primary",
    size: "s",
    isRounded: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VButton, VIcon, CloseIcon, DuplicateIcon },
    setup() {
      return { args };
    },
    template: `
      <VButton v-bind="args">
        <template #after>
          <VIcon v-bind="args">
            <CloseIcon  />
          </VIcon>
        </template>
        <template #default>Click Me!!</template>
        <template #before>
          <VIcon v-bind="args">
            <DuplicateIcon  />
          </VIcon>
        </template>
      </VButton>
    `,
  }),
};
