import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS } from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import DuplicateIcon from "@/shared/icons/DuplicateIcon.vue";
import CloseIcon from "@/shared/icons/CloseIcon.vue";
import VChip from "@/components/Chip/VChip.vue";
import VLabel from "@/components/Label/VLabel.vue";
import { VARIANT_CHIP_OPTIONS } from "@/components/Chip/VChip.types";
import { computed, shallowRef, watch } from "vue";
import VSlider from "@/components/Slider/VSlider.vue";

const meta: Meta<typeof VSlider> = {
  title: "Примитивы/Слайдер",
  component: VSlider,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VSlider>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    isStretch: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Default: Story = {
  name: "По умолчанию",
  args: {
    isStretch: false,
    modelValue: 0,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Disabled: Story = {
  name: "Отключенный",
  args: {
    isStretch: false,
    isDisabled: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    isStretch: false,
    color: "primary",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const SliderRound: Story = {
  name: "Округление слайдера",
  args: {
    isStretch: false,
    isSliderRounded: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const ThumbRound: Story = {
  name: "Округление держателя",
  args: {
    isStretch: false,
    isThumbRounded: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const AllSliderRounded: Story = {
  name: "Округление держателя",
  args: {
    isStretch: false,
    isSliderRounded: true,
    isThumbRounded: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    isStretch: false,
    size: "s",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    isStretch: false,
    size: "m",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const Large: Story = {
  name: "Большой размер",
  args: {
    isStretch: false,
    size: "l",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const BasicSlots: Story = {
  name: "Cлоты",
  args: {
    isStretch: false,
    label: "label",
    after: "after",
    before: "before",
    output: "output",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
};

export const SlotsWithValues: Story = {
  name: "Cлоты с данными",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  },
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { VSlider, VLabel },
    setup() {
      const value = shallowRef(0);

      watch(value, (v) => console.log("slider value: ", v));

      return { args, value };
    },
    template: `
      <VSlider v-bind="args" v-model.formatNumber="value" :min="0" :max="1000">
        <template #label="{ minValue }">
          <VLabel :color="textColor" size="s2">Выберите расстояние:</VLabel>
        </template>
        <template #before="{ minValue }">{{ minValue }}</template>
        <template #after="{ maxValue }">{{ maxValue }}</template>
        <template #output="{ value }">Текущее значение: {{ value }}</template>
      </VSlider>
    `,
  }),
};

// export const BasicSlotsWithIcons: Story = {
//   name: "Cлоты с иконками",
//   argTypes: {
//     color: {
//       options: COLORS_OPTIONS,
//       control: { type: "select" },
//     },
//     variant: {
//       options: VARIANT_CHIP_OPTIONS,
//       control: { type: "select" },
//     },
//   },
//   render: (args) => ({
//     components: { VChip, VLabel, VIcon, CloseIcon, DuplicateIcon },
//     setup() {
//       const textColor = computed(() =>
//         args.variant === "outlined" ? "#000" : "#fff"
//       );

//       return { args, textColor };
//     },
//     template: `
//       <VChip v-bind="args">
//         <template #before>
//           <VIcon :color="textColor" style="cursor: pointer">
//             <DuplicateIcon />
//           </VIcon>
//         </template>
//         <VLabel :color="textColor" size="s2">Chip</VLabel>
//         <template #after>
//           <VIcon :color="textColor" style="cursor: pointer">
//             <CloseIcon />
//           </VIcon>
//         </template>
//       </VChip>
//     `,
//   }),
// };
