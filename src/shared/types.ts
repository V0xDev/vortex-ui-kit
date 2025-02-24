import { BaseSize, Color, Size } from "@/shared/constants";

export type HorizontalAlign = "left" | "right" | "center";
export type VerticalAlign = "top" | "middle" | "bottom";

type Meta<C> = {
  [key: string]: unknown;
};

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
