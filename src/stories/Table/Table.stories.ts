import VTable from "@/components/Table/VTable.vue";
import VTBody from "@/components/Table/VTBody.vue";
import VTCell from "@/components/Table/VTCell.vue";
import VTHead from "@/components/Table/VTHead.vue";
import VTRow from "@/components/Table/VTRow.vue";
import { COLORS_OPTIONS } from "@/shared/constants";
import { data } from "@/stories/Table/store";
import type { Meta, StoryObj } from "@storybook/vue3";

type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

const meta = {
  title: "Примитивы/Таблица",
  component: VTable,
  tags: ["autodocs"],
} satisfies GenericMeta<typeof VTable>;

export default meta;

type Story = StoryObj<typeof VTable>;

const setRowColumns = "display: grid; grid-template-columns: 150px 150px 1fr;";

export const Basic: Story = {
  name: "Стандартная",
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { data, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const StickyHeader: Story = {
  name: "С липким заголовком",
  decorators: [
    () => ({
      template: '<div style="height: 250px; overflow: auto;"><story/></div>',
    }),
  ],
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { data, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead isSticky>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const Striped: Story = {
  name: "Полосатая",
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { data, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="data" is-striped>
          <VTRow v-for="item in data" :key="item.id" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const SelectableRows: Story = {
  name: "С выделением строк",
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { data, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :isSelect="item.id === 1" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const NoHover: Story = {
  name: "Без ховера",
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { data, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :isHover="false" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const ErrorState: Story = {
  name: "С ошибкой",
  decorators: [
    () => ({
      template: '<div style="height: 250px; overflow: auto;"><story/></div>',
    }),
  ],
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { setRowColumns, data };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody is-error :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :isHover="false" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const LoadingState: Story = {
  name: "Загрузка",
  decorators: [
    () => ({
      template: '<div style="height: 250px; overflow: auto;"><story/></div>',
    }),
  ],
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { setRowColumns, data };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody is-loading :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :isHover="false" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const NoData: Story = {
  name: "Нет данных",
  decorators: [
    () => ({
      template: '<div style="height: 250px; overflow: auto;"><story/></div>',
    }),
  ],
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="[]" :is-data="data">
          <VTRow v-for="item in data" :key="item.id" :isHover="false" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const CustomColors: Story = {
  args: {
    color: "primary",
  } as any,
  name: "Кастомные цвета",
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
  } as any,

  render: (args) => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      return { data, setRowColumns, args };
    },
    template: `
      <VTable>
        <VTHead :borderColor="args.color">
          <VTRow is-row-header :backgroundColor="args.color" :style="setRowColumns">
            <VTCell :borderColor="args.color">ID</VTCell>
            <VTCell :borderColor="args.color">Название</VTCell>
            <VTCell :borderColor="args.color">Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="data" :backgroundColor="args.color">
          <VTRow v-for="item in data" :key="item.id" :backgroundColor="args.color" :style="setRowColumns">
            <VTCell :borderColor="args.color">{{ item.id }}</VTCell>
            <VTCell :borderColor="args.color">{{ item.title }}</VTCell>
            <VTCell :borderColor="args.color">{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const TruncateText: Story = {
  name: "С усечением текста",
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      const longDescription =
        "Очень длинное описание, которое не помещается в ячейку и должно быть усечено.";
      const dataWithLongText = data.map((item) => ({
        ...item,
        description: longDescription,
      }));
      return { dataWithLongText, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="dataWithLongText">
          <VTRow v-for="item in dataWithLongText" :key="item.id" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell isTruncate>{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};

export const NoTruncateText: Story = {
  name: "Без усечения текста",
  render: () => ({
    components: { VTable, VTHead, VTRow, VTCell, VTBody },
    setup() {
      const longDescription =
        "Очень длинное описание, которое не помещается в ячейку и должно быть усечено.";
      const dataWithLongText = data.map((item) => ({
        ...item,
        description: longDescription,
      }));
      return { dataWithLongText, setRowColumns };
    },
    template: `
      <VTable>
        <VTHead>
          <VTRow is-row-header :style="setRowColumns">
            <VTCell>ID</VTCell>
            <VTCell>Название</VTCell>
            <VTCell>Описание</VTCell>
          </VTRow>
        </VTHead>
        <VTBody :is-data="dataWithLongText">
          <VTRow v-for="item in dataWithLongText" :key="item.id" :style="setRowColumns">
            <VTCell>{{ item.id }}</VTCell>
            <VTCell>{{ item.title }}</VTCell>
            <VTCell :isTruncate="false">{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    `,
  }),
};
