import { ColorMode, SizeMode } from "@/shared/types";

export interface VButton {
  color?: ColorMode;
  size?: SizeMode;
  isRounded?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isBorder?: boolean;
  isStretch?: boolean;
}
