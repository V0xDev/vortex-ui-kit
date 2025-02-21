import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS } from "@/shared/constants";
import VLabel from "@/components/Label/VLabel.vue";
import { shallowRef, watch } from "vue";
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
