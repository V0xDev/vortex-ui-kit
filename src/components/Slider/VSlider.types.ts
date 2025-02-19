import { ColorMode, SizeMode } from "@/shared/types";

export interface VSlider {
  isDisabled?: boolean;
  isSliderRounded?: boolean;
  isThumbRounded?: boolean;
  color?: ColorMode;
  size?: SizeMode;
  isStretch?: boolean;
}
