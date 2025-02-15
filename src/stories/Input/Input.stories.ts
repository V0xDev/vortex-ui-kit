import type { Meta, StoryObj } from "@storybook/vue3";
import { COLORS_OPTIONS, BASE_SIZE_OPTIONS } from "@/shared/constants";
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

type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

const meta = {
  title: "Примитивы/Input/Поле",
  component: VInput,
  tags: ["autodocs"],
} satisfies GenericMeta<typeof VInput>;

export default meta;

type Story = StoryObj<typeof VInput>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    modelValue: "",
    isRounded: false,
    isStretch: false,
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    inputParams: {
      placeholder: "Введите логин",
      disabled: true,
    },
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

export const Readonly: Story = {
  name: "Только для чтения",
  args: {
    isRounded: false,
    isStretch: false,
    inputParams: {
      placeholder: "Введите логин",
      readonly: true,
    },
    modelValue: "Elon",
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
    inputParams: {
      placeholder: "Введите логин",
    },
    textParams: {
      size: "s2",
      label: "Логин",
    },
    modelValue: "Elon",
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

export const ChangeType: Story = {
  name: "Измененный тип",
  args: {
    modelValue: "",
    isRounded: false,
    isStretch: false,
    inputParams: {
      type: "password",
      placeholder: "Пароль",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    color: "secondary",
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: true,
    isStretch: false,
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: true,
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    size: "s",
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    size: "m",
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    size: "l",
    inputParams: {
      placeholder: "Введите логин",
    },
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    size: "s",
    inputParams: {
      placeholder: "Введите логин",
    },
    after: "after",
    before: "before",
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
    modelValue: "",
    isRounded: false,
    isStretch: false,
    size: "s",
    color: "success",
    textParams: {
      label: "Логин",
      size: "s2",
    },
    inputParams: {
      placeholder: "Введите логин",
    },
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
    components: { VInput, VIcon, Person },
    setup() {
      return { args };
    },
    template: `
      <VInput
        v-bind="args"
      >
        <template #before>
          <VIcon>
            <Person />
          </VIcon>
        </template>
      </VInput>
    `,
  }),
};

export const WithIconsV2: Story = {
  name: "Пример пароль",
  args: {
    isRounded: false,
    isStretch: false,
    size: "s",
    textParams: {
      label: "Пароль",
      size: "s2",
    },
    inputParams: {
      placeholder: "Введите пароль",
    },
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
    components: { VInput, VIcon, EyeOn, EyeOff },
    setup() {
      const inputType = ref<HTMLInputTypeAttribute>("text");

      const changeType = () => {
        inputType.value = inputType.value === "text" ? "password" : "text";
      };

      const dynamicInputParams = computed(() => ({
        ...args.inputParams,
        type: inputType.value,
      }));

      const passwordValue = ref("qwerty");

      return { args, passwordValue, inputType, changeType, dynamicInputParams };
    },
    template: `
      <VInput
        v-model="passwordValue"
        v-bind="args"
        :inputParams="dynamicInputParams"
      >
        <template #after>
          <VIcon @click="changeType" style="cursor: pointer" width="25px">
            <EyeOn v-if="inputType === 'text'" />
            <EyeOff v-else />
          </VIcon>
        </template>
      </VInput>
    `,
  }),
};

export const WithIconsV3: Story = {
  name: "Пример поиск",
  args: {
    isRounded: false,
    isStretch: false,
    size: "s",
    textParams: {
      label: "Поиск",
      size: "s2",
    },
    inputParams: {
      placeholder: "Введите что нибудь",
    },
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
    components: { VInput, VIcon, Search, VLabel, CloseIcon },
    setup() {
      const { value: searchValue, debounced: searchDebouncedValue } =
        useDebouncedField<string>(700);

      const searchCount = ref<number>(0);
      const fetchFakeIsLoading = ref<boolean>(false);

      let timeoutId: ReturnType<typeof setTimeout> | null = null;

      const callFn = () => {
        console.log("Вызов функции");
      };

      const cleanText = () => {
        searchValue.value = "";
      };

      const dynamicArgsParams = computed<VInputType>(() => ({
        ...args,
        isLoading: fetchFakeIsLoading.value,
      }));

      watch(searchDebouncedValue, () => (searchCount.value += 1));

      const stopWatch = watch(
        searchValue,
        () => {
          fetchFakeIsLoading.value = true;
          if (timeoutId) clearTimeout(timeoutId);

          timeoutId = setTimeout(() => {
            fetchFakeIsLoading.value = false;
            callFn();
          }, toValue(700));
        },
        { flush: "sync" }
      );

      onScopeDispose(() => {
        stopWatch();
        if (timeoutId) clearTimeout(timeoutId);
      });

      return {
        args,
        searchValue,
        dynamicArgsParams,
        searchDebouncedValue,
        searchCount,
        cleanText,
      };
    },
    template: `
      <VInput
        v-model="searchValue"
        v-bind="dynamicArgsParams"
      >
        <template #before>
          <VIcon width="25px">
            <Search />
          </VIcon>
        </template>
        <template #after>
          <VIcon @click="cleanText" style="cursor: pointer" width="25px">
            <CloseIcon />
          </VIcon>
        </template>
      </VInput>
      <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 5px;">
        <VLabel size="s3" label="Задержка установлена ​​на 700 мc для этой демонстрации." />
        <VLabel v-if="searchCount > 0" size="s3">
          Количество обновлений: {{ searchCount }}
        </VLabel>
        <VLabel v-if="searchValue" size="s3">
          Текущее значение: {{ searchValue }}
        </VLabel>
        <VLabel v-if="searchDebouncedValue" size="s3" >
          Дебаунс значение: {{ searchDebouncedValue }}
        </VLabel>
      </div>
    `,
  }),
};
