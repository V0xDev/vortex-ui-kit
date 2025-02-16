import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, BASE_SIZE_OPTIONS } from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import DuplicateIcon from "@/shared/icons/DuplicateIcon.vue";
import CloseIcon from "@/shared/icons/CloseIcon.vue";
import VLabel from "@/components/Label/VLabel.vue";
import { shallowRef, watch } from "vue";
import VSwitch from "@/components/Switch/VSwitch.vue";
import { VARIANT_SWITCH_OPTIONS } from "@/components/Switch/VSwitch.types";

const meta: Meta<typeof VSwitch> = {
  title: "Примитивы/Input/Переключатель",
  component: VSwitch,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VSwitch>;

export const Basic: Story = {
  name: "Стандартный",
  args: {},
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    modelValue: true,
    color: "primary",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    variant: "rounded",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    size: "s",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    size: "m",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    size: "l",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    after: "after",
    before: "before",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
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
    size: "s",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    variant: {
      options: VARIANT_SWITCH_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VSwitch, VLabel, VIcon, CloseIcon, DuplicateIcon },
    setup() {
      const switchValue = shallowRef(true);

      watch(switchValue, (v) => console.log(v));

      return { args, switchValue };
    },
    template: `
      <VSwitch v-model="switchValue" v-bind="args">
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
      </VSwitch>
    `,
  }),
};
