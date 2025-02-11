import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, SIZE_OPTIONS } from "@/shared/constants";
import VIcon from "@/components/Icon/VIcon.vue";
import VInput from "@/components/Input/VInput.vue";
import { HTMLInputTypeAttribute } from "@/components/Input/VInput.types";
import { VInput as VInputType } from "@/components/Input/VInput.types";
import { computed, onScopeDispose, ref, toValue, watch } from "vue";
import EyeOn from "@/shared/icons/EyeOn.vue";
import EyeOff from "@/shared/icons/EyeOff.vue";
import Person from "@/shared/icons/Person.vue";
import Search from "@/shared/icons/Search.vue";
import { useDebouncedField } from "@/shared/hooks/useRefDebounced";
import VLabel from "@/components/Label/VLabel.vue";
import { CloseIcon } from "@/shared/icons";
import VSelect from "@/components/Select/VSelect.vue";
import { SelectOption } from "@/components/Select/VSelect.types";

type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

const meta = {
  title: "Примитивы/Input/Выбор",
  component: VSelect,
  tags: ["autodocs"],
} satisfies GenericMeta<typeof VSelect>;

export default meta;

type Story = StoryObj<typeof VSelect>;

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
      options: SIZE_OPTIONS,
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
      options: SIZE_OPTIONS,
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
      options: SIZE_OPTIONS,
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
      options: SIZE_OPTIONS,
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
      options: SIZE_OPTIONS,
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
    label: "Имя",
    options: options,
    color: "secondary",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
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
    label: "Имя",
    options: options,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
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
    label: "Имя",
    options: options,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
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
    label: "Имя",
    options: options,
    size: "s",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
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
    label: "Имя",
    options: options,
    size: "m",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
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
    label: "Имя",
    options: options,
    size: "l",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      options: SIZE_OPTIONS,
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
      options: SIZE_OPTIONS,
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
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
  render: (args) => ({
    components: { VSelect, VIcon, Person },
    setup() {
      const select = ref<SelectOption<string>>();

      return { args, select };
    },
    template: `
      <VSelect v-bind="args" v-model="select">
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
      </VSelect>
    `,
  }),
};

export const ButtonDelete: Story = {
  name: "Кнопка удалить",
  args: {
    isRounded: false,
    isStretch: true,
    placeholder: "Выберите имя",
    label: "Имя",
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
      options: SIZE_OPTIONS,
      control: { type: "select" },
    },
  },
};
