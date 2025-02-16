import type { Meta, StoryObj } from "@storybook/vue3";
import VAccordion from "@/components/Accordion/VAccordion.vue";

const meta: Meta<typeof VAccordion> = {
  title: "Примитивы/Аккордеон",
  component: VAccordion,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VAccordion>;

export const BasicWithSlots: Story = {
  name: "Аккордеон",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    title: "Текст аккордеона",
    color: "neutral",
    size: "s",
    modelValue: false,
    default: "Содержимое аккордеона 1",
  },
};

export const BasicDefaultState: Story = {
  name: "Значение по умолчанию",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    title: "Текст аккордеона",
    color: "neutral",
    size: "s",
    modelValue: true,
    default: "Содержимое аккордеона 1",
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    title: "Текст аккордеона",
    color: "primary",
    size: "s",
    default: "Содержимое аккордеона 1",
  },
};

export const Small: Story = {
  name: "Маленький размер",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    title: "Текст аккордеона",
    color: "neutral",
    size: "s",
    default: "Содержимое аккордеона 1",
  },
};

export const Middle: Story = {
  name: "Средний размер",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    title: "Текст аккордеона",
    color: "neutral",
    size: "m",
    default: "Содержимое аккордеона 1",
  },
};

export const Large: Story = {
  name: "Большой размер",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    title: "Текст аккордеона",
    color: "neutral",
    size: "l",
    default: "Содержимое аккордеона 1",
  },
};

// export const BasicSlots: Story = {
//   name: "Слоты",
//   decorators: [
//     () => ({
//       template: '<div style="width: 500px;"><story/></div>',
//     }),
//   ],
//   args: {
//     color: "neutral",
//     size: "s",
//   },
// };
