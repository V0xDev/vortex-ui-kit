import { ColorMode, SizeMode } from "@/shared/types";

export type SelectOption<T> = {
  key: number | string;
  display: string;
  raw: T;
};

export interface VSelect<T> {
  options: SelectOption<T>[];
  placeholder?: string;
  label?: string;
  color?: ColorMode;
  size?: SizeMode;
  maxWidth?: string;
  isButtonClear?: boolean;
  isRounded?: boolean;
  isStretch?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}
