import { Color, Size } from "@/shared/constants";

type ColorMode = keyof typeof Color;
type SizeMode = keyof typeof Size;

export interface VButton {
  variant?: ColorMode;
  size?: SizeMode;
  isRounded?: boolean;
  isLoading?: boolean;
  isBorder?: boolean;
  isStretch?: boolean;
}
