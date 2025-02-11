import { ColorMode, SizeMode } from "@/shared/types";

export interface VRadioButton<T> {
  label: string;
  value: T;
  groupName: string;
  color?: ColorMode;
  size?: SizeMode;
  isDisabled?: boolean;
}
