import { ColorMode, SizeMode } from "@/shared/types";

export interface VRadioButton<T> {
  label: string;
  value: T;
  groupName: string;
  variant?: ColorMode;
  size?: SizeMode;
  isDisabled?: boolean;
}
