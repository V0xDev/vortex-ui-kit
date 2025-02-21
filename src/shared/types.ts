import VAccordion from "@/components/Accordion/VAccordion.vue";
import { BaseSize, Color, Size } from "@/shared/constants";
import { Meta } from "@storybook/vue3/*";

export type HorizontalAlign = "left" | "right" | "center";
export type VerticalAlign = "top" | "middle" | "bottom";

export type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

export type ColorMode = keyof typeof Color;
export type VTabsVariant = keyof typeof Color;
export type SizeMode = keyof typeof BaseSize;
export type FontSizeMode = keyof typeof Size;

export type Maybe<T> = T | null;

export type SelectOption<T> = {
  key: number | string;
  display: string;
  raw: T;
};

export interface VSelectBase<T> {
  options: SelectOption<T>[];
  placeholder?: string;
  label?: string;
  color?: ColorMode;
  size?: SizeMode;
  isButtonClear?: boolean;
  isRounded?: boolean;
  isStretch?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}
