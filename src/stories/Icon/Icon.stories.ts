import type { Meta, StoryObj } from "@storybook/vue3";
import VIcon from "@/components/icon/VIcon.vue";
import CloseIcon from "@/shared/icons/CloseIcon.vue";
import DuplicateIcon from "@/shared/icons/DuplicateIcon.vue";

const meta: Meta<typeof VIcon> = {
  title: "Примитивы/Иконки",
  component: VIcon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VIcon>;

export const Duplicate: Story = {
  args: {
    color: "#0066d0",
    height: "40px",
    width: "40px",
  },
  name: "Иконка дублировать",
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
  args: {
    color: "#ff0000",
    height: "40px",
    width: "40px",
  },
  name: "Иконка закрыть",
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
