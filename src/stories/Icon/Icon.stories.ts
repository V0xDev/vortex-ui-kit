import type { Meta, StoryObj } from "@storybook/vue3";
import CloseIcon from "@/shared/icons/CloseIcon.vue";
import DuplicateIcon from "@/shared/icons/DuplicateIcon.vue";
import VIcon from "@/components/Icon/VIcon.vue";

const meta: Meta<typeof VIcon> = {
  title: "Примитивы/Иконки",
  component: VIcon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VIcon>;

export const Duplicate: Story = {
  name: "Дублировать",
  args: {
    color: "#0066d0",
    height: "25px",
    width: "25px",
  },
  render: (args) => ({
    components: { VIcon, DuplicateIcon },
    setup() {
      return { args };
    },
    template: `
      <VIcon v-bind="args">
        <DuplicateIcon  />
      </VIcon>
    `,
  }),
};

export const Close: Story = {
  name: "Закрыть",
  args: {
    color: "#ff0000",
    height: "25px",
    width: "25px",
  },
  render: (args) => ({
    components: { VIcon, CloseIcon },
    setup() {
      return { args };
    },
    template: `
      <VIcon v-bind="args">
        <CloseIcon  />
      </VIcon>
    `,
  }),
};

export const ChangeSize: Story = {
  name: "Измененный размер",
  args: {
    color: "#ff0000",
    height: "40px",
    width: "40px",
  },
  render: (args) => ({
    components: { VIcon, CloseIcon },
    setup() {
      return { args };
    },
    template: `
      <VIcon v-bind="args">
        <CloseIcon  />
      </VIcon>
    `,
  }),
};
