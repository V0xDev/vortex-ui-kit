import { ColorMode, SizeMode } from "@/shared/types";

export interface VButton {
  variant?: ColorMode;
  size?: SizeMode;
  isRounded?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isBorder?: boolean;
  isStretch?: boolean;
}

export interface VButtonSlots {
  before?: () => any;
  default?: () => any;
  after?: () => any;
}
