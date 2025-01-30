import { ColorMode, SizeMode } from "@/shared/types";

export interface VButton {
  variant?: ColorMode;
  size?: SizeMode;
  isRounded?: boolean;
  isLoading?: boolean;
  isBorder?: boolean;
  isStretch?: boolean;
}
