import { PersonIcon, VAutocomplete, VIcon } from "@/components";
import { BASE_SIZE_OPTIONS, COLORS_OPTIONS } from "@/shared/constants";
import { useDebouncedField } from "@/shared/hooks/useRefDebounced";
import { SelectOption } from "@/shared/types";
import type { Meta, StoryObj } from "@storybook/vue3";
import { ref, watch } from "vue";

type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

const meta = {
  title: "Примитивы/Input/Поиск с выбором",
  component: VAutocomplete,
  tags: ["autodocs"],
} satisfies GenericMeta<typeof VAutocomplete>;

export default meta;

type Story = StoryObj<typeof VAutocomplete>;

const options: SelectOption<string>[] = [
  {
    key: "1",
    raw: "1",
    display: "Mask",
  },
  {
    key: "2",
    raw: "2",
    display: "Ivan",
  },
  {
    key: "3",
    raw: "3",
    display: "Petr",
  },
  {
    key: "4",
    raw: "4",
    display: "Alana",
  },
];

export const Basic: Story = {
  name: "Стандартный",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    options: options,
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
  },
};

export const NoData: Story = {
  name: "Нет данных",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    options: [],
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
  },
};

export const Disabled: Story = {
  name: "Отключенный",
  args: {
    isRounded: false,
    isStretch: false,
    isDisabled: true,
    placeholder: "Выберите имя",
    options: options,
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
  },
};

export const Loading: Story = {
  name: "Загрузка",
  args: {
    isRounded: false,
    isStretch: false,
    isLoading: true,
    placeholder: "Выберите имя",
    options: options,
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
  },
};

export const WithLabel: Story = {
  name: "С заголовком",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    label: "Имя",
    options: options,
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
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    options: options,
    color: "secondary",
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
  },
};

export const Rounded: Story = {
  name: "С округлением",
  args: {
    isRounded: true,
    isStretch: false,
    placeholder: "Выберите имя",
    options: options,
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
  },
};

export const FullWidth: Story = {
  name: "На всю ширину",
  args: {
    isRounded: false,
    isStretch: true,
    placeholder: "Выберите имя",
    options: options,
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
  },
};

export const Small: Story = {
  name: "Маленький размер",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    options: options,
    size: "s",
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
  },
};

export const Medium: Story = {
  name: "Средний размер",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    options: options,
    size: "m",
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
  },
};

export const Large: Story = {
  name: "Больший размер",
  args: {
    isRounded: false,
    isStretch: false,
    placeholder: "Выберите имя",
    options: options,
    size: "l",
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
  },
};

export const WithSlots: Story = {
  name: "Слоты",
  args: {
    isRounded: false,
    isStretch: true,
    placeholder: "Выберите имя",
    options: options,
    size: "s",
    before: "slot-before",
    icon: "slot-icon",
    default: "slot-default",
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
  },
};

export const WithIcons: Story = {
  name: "Cлоты с иконками",
  args: {
    isRounded: false,
    isStretch: true,
    placeholder: "Выберите имя",
    options: options,
    size: "s",
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
  },
  render: (args) => ({
    components: { VAutocomplete, VIcon, PersonIcon },
    setup() {
      const { value: searchValue, debounced: searchDebouncedValue } =
        useDebouncedField<string>({
          defaultValue: "",
        });

      const autocompleteValue = ref<SelectOption<string>>();

      watch(searchDebouncedValue, (v) => console.log(v));
      watch(autocompleteValue, (v) => console.log(v));

      return { args, searchValue, autocompleteValue };
    },
    template: `
      <VAutocomplete
        v-bind="args"
        v-model="searchValue"
        v-model:select-value="autocompleteValue"
      >
        <template #before>
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
            <VIcon>
              <Person />
            </VIcon>
            Имя
          </div>

        </template>
        <template #default="{ display }">
          <div style="display: flex; align-items: center; margin-bottom: 5px;">
            > {{ display }}
          </div>
        </template>
      </VAutocomplete>
    `,
  }),
};

export const ButtonDelete: Story = {
  name: "Кнопка удалить",
  args: {
    isRounded: false,
    isStretch: true,
    placeholder: "Выберите имя",
    isButtonClear: true,
    options: options,
    size: "s",
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
  },
};
