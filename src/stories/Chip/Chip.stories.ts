import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS } from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import VChip from "@/components/Chip/VChip.vue";
import VLabel from "@/components/Label/VLabel.vue";
import { VARIANT_CHIP_OPTIONS } from "@/components/Chip/VChip.types";
import { computed } from "vue";
import { CloseIcon, DuplicateIcon } from "@/components";

const meta: Meta<typeof VChip> = {
  title: "Примитивы/Чип",
  component: VChip,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VChip>;

export const Basic: Story = {
  name: "Стандартный",
  args: {},
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="s2">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    color: "primary",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="s2">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const Outline: Story = {
  name: "С обводкой",
  args: {
    variant: "outlined",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="s2">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const Rounded: Story = {
  name: "Без округления",
  args: {
    isRounded: false,
    variant: "solid",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="s2">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const Loading: Story = {
  name: "С полным округлением",
  args: {
    isRoundedFull: true,
    variant: "solid",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="s2">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const Small: Story = {
  name: "Маленький размер",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="s2">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const Medium: Story = {
  name: "Средний размер",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="m1">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const Large: Story = {
  name: "Большой размер",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <VLabel :color="textColor" size="m3">Chip</VLabel>
      </VChip>
    `,
  }),
};

export const BasicSlots: Story = {
  name: "Cлоты",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <template #before>before</template>
        <VLabel :color="textColor" size="s2">Chip</VLabel>
        <template #after>after</template>
      </VChip>
    `,
  }),
};

export const BasicSlotsWithIcons: Story = {
  name: "Cлоты с иконками",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_CHIP_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VChip, VLabel, VIcon, CloseIcon, DuplicateIcon },
    setup() {
      const textColor = computed(() =>
        args.variant === "outlined" ? "#000" : "#fff"
      );

      return { args, textColor };
    },
    template: `
      <VChip v-bind="args">
        <template #before>
          <VIcon :color="textColor" style="cursor: pointer">
            <DuplicateIcon />
          </VIcon>
        </template>
        <VLabel :color="textColor" size="s2">Chip</VLabel>
        <template #after>
          <VIcon :color="textColor" style="cursor: pointer">
            <CloseIcon />
          </VIcon>
        </template>
      </VChip>
    `,
  }),
};
