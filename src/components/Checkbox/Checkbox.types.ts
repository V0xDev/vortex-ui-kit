import { Color, Size } from "@/shared/constants";

type ColorMode = keyof typeof Color;
type SizeMode = keyof typeof Size;

export interface VCheckbox {
  variant?: ColorMode;
  size?: SizeMode;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  initialValue?: boolean;
}
