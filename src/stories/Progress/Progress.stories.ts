import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, BASE_SIZE_OPTIONS } from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import VLabel from "@/components/Label/VLabel.vue";
import VProgress from "@/components/Progress/VProgress.vue";
import { VARIANT_PROGRESS_OPTIONS } from "@/components/Progress/VProgress.types";
import { CloseIcon, DuplicateIcon } from "@/components";

const meta: Meta<typeof VProgress> = {
  title: "Примитивы/Прогресс бар",
  component: VProgress,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VProgress>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    modelValue: 10,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    modelValue: 10,
    color: "primary",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
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
    modelValue: 10,
    isRounded: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const ChangeVariant: Story = {
  name: "Другой вариант",
  args: {
    modelValue: 10,
    variant: "modern",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
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
    modelValue: 10,
    size: "s",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
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
    modelValue: 10,
    size: "m",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
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
    modelValue: 10,
    size: "l",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const MaxValue: Story = {
  name: "Максимальное значение",
  args: {
    modelValue: 10,
    maxValue: 200,
    size: "s",
  },
  decorators: [
    () => ({
      template:
        '<div style="display: flex; flex-direction: column; gap: 0.5rem;"><story/></div>',
    }),
  ],
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VProgress },
    setup() {
      return { args };
    },
    template: `
      <VProgress v-bind="args" />
      <span>prop modelValue: {{ args.modelValue }}</span>
      <span>prop MaxValue: {{ args.maxValue }}</span>
    `,
  }),
};

export const Disabled: Story = {
  name: "Отключенный",
  args: {
    modelValue: 10,
    size: "s",
    isDisabled: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
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
    modelValue: 10,
    after: "after",
    before: "before",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
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
    modelValue: 10,
    size: "s",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_PROGRESS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VProgress, VLabel, VIcon, CloseIcon, DuplicateIcon },
    setup() {
      return { args };
    },
    template: `
      <VProgress v-model="switchValue" v-bind="args">
        <template #before>
          <VIcon width="24px">
            <DuplicateIcon />
          </VIcon>
        </template>
        <template #after>
          <VIcon width="24px">
            <CloseIcon />
          </VIcon>
        </template>
      </VProgress>
    `,
  }),
};
