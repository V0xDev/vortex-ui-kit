import type { Meta, StoryObj } from "@storybook/vue3";
import VIcon from "@/components/Icon/VIcon.vue";
import {
  ArrowDown,
  ArrowUp,
  CloseIcon,
  DuplicateIcon,
  Person,
  EyeOff,
  EyeOn,
  Search,
} from "@/components/Icons";

const meta: Meta<typeof VIcon> = {
  title: "Примитивы/Иконки",
  component: VIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        story:
          "Для использования иконок используется <b>враппер -> VIcon</b>, саму иконку поместить в <b>default-slot</b>",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof VIcon>;

const Icons = {
  DuplicateIcon,
  CloseIcon,
  ArrowDown,
  ArrowUp,
  Person,
  EyeOff,
  EyeOn,
  Search,
};

export const Basic: Story = {
  name: "Все иконки",
  args: {
    height: "25px",
    width: "25px",
  },
  decorators: [
    () => ({
      template: '<div style="display: flex; gap: 1rem;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { VIcon, ...Icons },
    setup() {
      const arrIcons = Object.keys(Icons).map((key) => ({
        name: key,
        component: Icons[key],
      }));

      return { args, arrIcons };
    },
    template: `
      <div
        style="display: flex; align-items: center; flex-direction: column; gap: 0.5rem;"
        v-for="icon in arrIcons">
          <VIcon style="background: #fdfdfd; box-shadow: 0px 0px 1px 1px #e4e4e4; padding: 0.7rem; border-radius: 4px;" v-bind="args">
            <component :is="icon.component" />
          </VIcon>
          <span>{{ icon.name }}</span>
      </div>
    `,
  }),
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
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
