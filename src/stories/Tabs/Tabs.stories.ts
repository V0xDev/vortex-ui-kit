import type { Meta, StoryObj } from "@storybook/vue3";
import VIcon from "@/components/Icon/VIcon.vue";
import { shallowRef } from "vue";
import { Person, Search, DuplicateIcon } from "@/components/Icons";
import VTabs from "@/components/Tabs/VTabs.vue";
import VTab from "@/components/Tabs/VTab.vue";
import { COLORS_OPTIONS, BASE_SIZE_OPTIONS } from "@/shared/constants";
import { VARIANT_TABS_OPTIONS } from "@/components/Tabs/VTabs.types";

const meta: Meta<typeof VTabs> = {
  title: "Примитивы/Табы",
  component: VTabs,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VTabs>;

export const Basic: Story = {
  name: "Стандартный",
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    <span>Выбранное значение: {{tabs}}</span>
    `,
  }),
};

export const Change: Story = {
  name: "Другой вариант",
  args: {
    variant: "modern",
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    <span>Выбранное значение: {{tabs}}</span>
    `,
  }),
};

export const Rounded: Story = {
  name: "С закруглением",
  args: {
    isRounded: true,
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    <span>Выбранное значение: {{tabs}}</span>
    `,
  }),
};

export const Disabled: Story = {
  name: "Отключенный",
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
        <VTab is-disabled :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const Loading: Story = {
  name: "Загрузка",
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
        <VTab is-loading :value="2">Вкладка 3</VTab>
      </VTabs>
    `,
  }),
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    color: "primary",
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    isStretch: true,
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    size: "s",
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    size: "m",
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
    size: "l",
  },
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
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
  argTypes: {
    variant: {
      options: VARIANT_TABS_OPTIONS,
      control: { type: "select" },
    },
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
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
