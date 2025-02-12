import { ColorMode, SizeMode } from "@/shared/types";

export enum VSwitchVariant {
  rectangular = "rectangular",
  rounded = "rounded",
}

export const VARIANT_SWITCH_OPTIONS = Object.keys(VSwitchVariant);

export type VSwitchVariantType = keyof typeof VSwitchVariant;

export interface VSwitch {
  color?: ColorMode;
  variant?: VSwitchVariantType;
  size?: SizeMode;
  isDisabled?: boolean;
}
