import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, SIZE_OPTIONS } from "@/shared/constants";
import VRadioButton from "@/components/RadioButton/VRadioButton.vue";
import { ref } from "vue";

type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

interface SelectRadio {
  name: string;
}

const meta = {
  title: "Примитивы/Input/Радиокнопка/Стандартный",
  component: VRadioButton,
  tags: ["autodocs"],
} satisfies GenericMeta<typeof VRadioButton<SelectRadio>>;

export default meta;

type Story = StoryObj<typeof VRadioButton>;

export const Basic: Story = {
  name: "Возможность выбора",
  args: {
    size: "m",
    groupName: "superName",
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    () => ({
      template:
        '<div style="display: flex; flex-direction: column; gap: 1rem;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { VRadioButton },
    setup() {
      const selectedValue = ref<SelectRadio>(null);
      return { args, selectedValue };
    },
    template: `
      <VRadioButton
        v-bind="args"
        v-model="selectedValue"
        variant="primary"
        label="Радиокнопка 1"
        :value="{ name: 'Elon' }"
      />
      <VRadioButton
        v-bind="args"
        v-model="selectedValue"
        variant="secondary"
        label="Радиокнопка 2"
        :value="{ name: 'Mask' }"
      />
      <span v-if="selectedValue" style="font-weight: bold;">Selected value: {{ selectedValue }}</span>
    `,
  }),
};

export const BasicDefault: Story = {
  name: "Выбор по умолчанию",
  args: {
    size: "m",
    groupName: "superName",
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    () => ({
      template:
        '<div style="display: flex; flex-direction: column; gap: 1rem;"><story/></div>',
    }),
  ],
  render: (args) => ({
    components: { VRadioButton },
    setup() {
      const selectedValue = ref<SelectRadio>({ name: "Elon" });
      return { args, selectedValue };
    },
    template: `
      <VRadioButton
        v-bind="args"
        v-model="selectedValue"
        variant="primary"
        label="Радиокнопка 1"
        :value="{ name: 'Elon' }"
      />
      <VRadioButton
        v-bind="args"
        v-model="selectedValue"
        variant="secondary"
        label="Радиокнопка 2"
        :value="{ name: 'Mask' }"
      />
      <span v-if="selectedValue" style="font-weight: bold;">Selected value: {{ selectedValue }}</span>
    `,
  }),
};

export const BasicDisabled: Story = {
  name: "Отключенный",
  args: {
    label: "Радиокнопка 1",
    isDisabled: true,
    variant: "primary",
    size: "s",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
};

export const ChangeColor: Story = {
  name: "Выбор цвета",
  args: {
    label: "Радиокнопка 1",
    variant: "primary",
    size: "s",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    label: "Радиокнопка 1",
    variant: "error",
    size: "s",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    label: "Радиокнопка 1",
    variant: "secondary",
    size: "m",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
};

export const Large: Story = {
  name: "Большой размер",
  args: {
    label: "Радиокнопка 1",
    variant: "success",
    size: "l",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    variant: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
};
