import type { Meta, StoryObj } from "@storybook/vue3";
import VLink from "@/components/Link/VLink.vue";
import VLabel from "@/components/Label/VLabel.vue";
import VIcon from "@/components/Icon/VIcon.vue";
import CloseIcon from "@/components/Icons/CloseIcon.vue";
import DuplicateIcon from "@/components/Icons/DuplicateIcon.vue";

const meta: Meta<typeof VLink> = {
  title: "Примитивы/Ссылки",
  component: VLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VLink>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    href: "#",
    default: "Ссылка",
  },
};

export const ShowNewWindow: Story = {
  name: "Открыть в новом окне",
  args: {
    href: "#",
    target: "_blank",
    default: "Ссылка",
  },
};

export const Underline: Story = {
  name: "С подчеркиванием",
  args: {
    href: "#",
    isUnderline: true,
    default: "Ссылка",
  },
};

export const Disabled: Story = {
  name: "Отключенная",
  args: {
    href: "#",
    isDisabled: true,
    default: "Ссылка",
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  render: (args) => ({
    components: { VLink, VLabel },
    setup() {
      return { args };
    },
    template: `
      <VLink href="#" target="_blank">
        <VLabel color="blue" size="s3">Ссылка</VLabel>
      </VLink>
    `,
  }),
};

export const BasicClots: Story = {
  name: "Слоты",
  render: (args) => ({
    components: { VLink, VLabel },
    setup() {
      return { args };
    },
    template: `
      <VLink href="#" target="_blank">
        <template #before>before</template>
        <VLabel color="blue" size="s3">Ссылка</VLabel>
        <template #after>after</template>
      </VLink>
    `,
  }),
};

export const BasicSlotsWithIcons: Story = {
  name: "Cлоты с иконками",
  render: (args) => ({
    components: { VLink, VLabel, VIcon, CloseIcon, DuplicateIcon },
    setup() {
      return { args };
    },
    template: `
      <VLink href="#" target="_blank">
        <template #before>
          <VIcon>
            <CloseIcon  />
          </VIcon>
        </template>
        <VLabel color="blue" size="s3">Ссылка</VLabel>
        <template #after>
          <VIcon>
            <DuplicateIcon  />
          </VIcon>
        </template>
      </VLink>
    `,
  }),
};
