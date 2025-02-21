import type { Meta, StoryObj } from "@storybook/vue3";
import { BASE_SIZE_OPTIONS, COLORS_OPTIONS } from "@/shared/constants";
import VTextarea from "@/components/Textarea/VTextarea.vue";
import VIcon from "@/components/Icon/VIcon.vue";
import { DuplicateIcon, CloseIcon } from "@/components";

const meta: Meta<typeof VTextarea> = {
  title: "Примитивы/Большой текст",
  component: VTextarea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VTextarea>;

export const Basic: Story = {
  name: "Стандартный",
  args: {
    size: "s",
    placeholder: "Введите текст",
    isStretch: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const Default: Story = {
  name: "По умолчанию",
  args: {
    size: "s",
    placeholder: "Введите текст",
    modelValue: "Elon Mask",
    isStretch: false,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const Disabled: Story = {
  name: "Отключенный",
  args: {
    size: "s",
    placeholder: "Введите текст",
    modelValue: "Elon Mask",
    disabled: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const Readonly: Story = {
  name: "Только чтение",
  args: {
    size: "s",
    placeholder: "Введите текст",
    modelValue: "Elon Mask",
    readonly: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const FullWidth: Story = {
  name: "На всё окно",
  args: {
    isStretch: true,
    size: "s",
    placeholder: "Введите текст",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const ChangeColor: Story = {
  name: "Измененный цвет",
  args: {
    size: "s",
    placeholder: "Введите текст",
    color: "primary",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const Rounded: Story = {
  name: "С округлением",
  args: {
    size: "s",
    placeholder: "Введите текст",
    isRounded: true,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const ChangeBoth: Story = {
  name: "Расширение по vert/hor",
  args: {
    resize: "both",
    isStretch: false,
    size: "s",
    placeholder: "Введите текст",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const ChangeHorizontal: Story = {
  name: "Расширение по горизонтали",
  args: {
    resize: "horizontal",
    isStretch: false,
    size: "s",
    placeholder: "Введите текст",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const ChangeVertical: Story = {
  name: "Расширение по вертикали",
  args: {
    resize: "vertical",
    isStretch: false,
    size: "s",
    placeholder: "Введите текст",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const NoResize: Story = {
  name: "Запретить расширение",
  args: {
    resize: "resize-none",
    isStretch: false,
    size: "s",
    placeholder: "Введите текст",
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const BasicSlots: Story = {
  name: "Cлоты",
  args: {
    size: "s",
    placeholder: "Введите текст",
    before: "before",
    after: "after",
    minHeight: 1,
  },
  argTypes: {
    color: {
      options: COLORS_OPTIONS,
      control: { type: "select" },
    },
    size: {
      control: "select",
      options: BASE_SIZE_OPTIONS,
    },
  },
};

export const WithIcons: Story = {
  name: "Cлоты с иконками",
  args: {
    size: "s",
    placeholder: "Введите текст",
    before: "before",
    after: "after",
    minHeight: 1,
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
    components: { VTextarea, VIcon, CloseIcon, DuplicateIcon },
    setup() {
      return { args };
    },
    template: `
      <VTextarea
        v-bind="args"
      >
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
      </VTextarea>
    `,
  }),
};
