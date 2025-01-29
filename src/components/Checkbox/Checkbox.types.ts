import { ColorMode, SizeMode } from "@/shared/types";

export interface VCheckbox {
  variant?: ColorMode;
  size?: SizeMode;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  initialValue?: boolean;
}
