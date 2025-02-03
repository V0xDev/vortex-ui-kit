import type { Meta, StoryObj } from "@storybook/vue3";
import VAccordion from "@/components/Accordion/VAccordion.vue";
import { COLORS_OPTIONS, SIZE_OPTIONS } from "@/shared/constants";
import { onMounted, ref } from "vue";
import { InstanceVAccordion, Maybe } from "@/shared/types";

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
    label: "Текст аккордеона",
    buttonProps: {
      variant: "primary",
      size: "s",
    },
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
    label: "Текст аккордеона",
    buttonProps: {
      variant: "primary",
      size: "s",
    },
  },
  render: (args) => ({
    components: { VAccordion },
    setup() {
      const VAccordionRef = ref<Maybe<InstanceVAccordion>>(null);
      onMounted(() => {
        VAccordionRef.value.open = true;
      });
      return { args, VAccordionRef };
    },
    template: `
      <VAccordion v-bind="args" ref="VAccordionRef">
        <template #default>Содержимое аккордеона 1</template>
      </VAccordion>
    `,
  }),
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    label: "Текст аккордеона",
    buttonProps: {
      variant: "success",
      size: "s",
    },
    default: "Содержимое аккордеона 1",
  },
};

export const ChangeSize: Story = {
  name: "Измененный размер",
  decorators: [
    () => ({
      template: '<div style="width: 500px;"><story/></div>',
    }),
  ],
  args: {
    label: "Текст аккордеона",
    buttonProps: {
      variant: "primary",
      size: "l",
    },
    default: "Содержимое аккордеона 1",
  },
};
