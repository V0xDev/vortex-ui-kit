import { ColorMode, SizeMode } from "@/shared/types";

export interface VCheckbox {
  color?: ColorMode;
  size?: SizeMode;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
}
