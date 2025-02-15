import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, BASE_SIZE_OPTIONS } from "@/shared/constants";
import VRadioButton from "@/components/RadioButton/VRadioButton.vue";
import { ref } from "vue";
import { GenericMeta } from "@/shared/types";

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
    color: {
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
        color="primary"
        label="Радиокнопка 1"
        :value="{ name: 'Elon' }"
      />
      <VRadioButton
        v-bind="args"
        v-model="selectedValue"
        color="secondary"
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
    color: {
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
        color="primary"
        label="Радиокнопка 1"
        :value="{ name: 'Elon' }"
      />
      <VRadioButton
        v-bind="args"
        v-model="selectedValue"
        color="secondary"
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
    color: "primary",
    size: "s",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
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
    color: "primary",
    size: "s",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
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
    color: "error",
    size: "s",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
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
    color: "secondary",
    size: "m",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
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
    color: "success",
    size: "l",
    value: "option1",
    groupName: "superName",
    modelValue: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: BASE_SIZE_OPTIONS,
      control: { type: "select" },
    },
    modelValue: {
      table: {
        disable: true,
      },
    },
  },
};
