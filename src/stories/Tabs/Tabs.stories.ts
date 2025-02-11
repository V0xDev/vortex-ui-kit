import type { Meta, StoryObj } from "@storybook/vue3";
import VIcon from "@/components/Icon/VIcon.vue";
import { shallowRef } from "vue";
import { Person, CloseIcon, Search, DuplicateIcon } from "@/shared/icons";
import VTabs from "@/components/Tabs/VTabs.vue";
import VTab from "@/components/Tabs/VTab.vue";

const meta: Meta<typeof VTabs> = {
  title: "Примитивы/Табы",
  component: VTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VTabs>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    tabProps: {
      variant: "neutral",
      size: "s",
    },
  },
  decorators: [
    () => ({
      template:
        '<div style="display: flex; flex-direction: column; gap: 1rem;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
    <VTabs v-bind="args" v-model="tabs">
      <VTab :value="0">Вкладка 1</VTab>
      <VTab :value="1">Вкладка 2</VTab>
      <VTab :value="2">Вкладка 3</VTab>
    </VTabs>
    <span>Выбранное значение: {{tabs}}</span>
    `,
  }),
};

export const Disabled: Story = {
  name: "Отключенный",
  args: {
    tabProps: {
      variant: "primary",
      size: "s",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab is-disabled :value="2">Отключена</VTab>
      </VTabs>
    `,
  }),
};

export const Loading: Story = {
  name: "Загрузка",
  args: {
    tabProps: {
      variant: "neutral",
      size: "s",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab is-loading :value="2">Загрузка</VTab>
      </VTabs>
    `,
  }),
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    tabProps: {
      variant: "success",
      size: "s",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const FullWidth: Story = {
  name: "На всю ширину",
  args: {
    tabProps: {
      variant: "neutral",
      size: "s",
      isStretch: true,
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    tabProps: {
      variant: "neutral",
      size: "s",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    tabProps: {
      variant: "neutral",
      size: "m",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const Large: Story = {
  name: "Больший размер",
  args: {
    tabProps: {
      variant: "neutral",
      size: "l",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">Вкладка 1</VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const WithSlots: Story = {
  name: "Слоты",
  args: {
    tabProps: {
      variant: "neutral",
      size: "s",
    },
  },
  render: (args) => ({
    components: { VTabs, VTab },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">
          <template #before>before</template>
          <template #default> Содержимое </template>
          <template #after>after</template>
        </VTab>
        <VTab :value="1">Вкладка 2</VTab>
        <VTab :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const WithIcons: Story = {
  name: "Cлоты с иконками",
  args: {
    tabProps: {
      variant: "neutral",
      size: "s",
    },
  },
  parameters: {
    deepControls: { enabled: true },
  },
  render: (args) => ({
    components: { VTabs, VTab, VIcon, Person, DuplicateIcon, Search },
    setup() {
      const tabs = shallowRef(0);
      return { args, tabs };
    },
    template: `
      <VTabs v-bind="args" v-model="tabs">
        <VTab :value="0">
          <template #before>
            <VIcon>
              <Person />
            </VIcon>
          </template>
          <template #default> Профиль </template>
        </VTab>
        <VTab :value="1">
          <template #default> Дублировать </template>
          <template #after>
            <VIcon>
              <DuplicateIcon />
            </VIcon>
          </template>
        </VTab>
        <VTab :value="2">
          <template #before>
            <VIcon>
              <Search />
            </VIcon>
          </template>
          <template #default> Найти </template>
        </VTab>
      </VTabs>
    `,
  }),
};
