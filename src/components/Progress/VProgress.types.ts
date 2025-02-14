import { ColorMode, SizeMode } from "@/shared/types";

export enum VProgressVariant {
  solid = "solid",
  modern = "modern",
}

export const VARIANT_PROGRESS_OPTIONS = Object.keys(VProgressVariant);

export type VProgressType = keyof typeof VProgressVariant;

export interface VProgress {
  maxValue: number;
  variant?: VProgressType;
  size?: SizeMode;
  color?: ColorMode;
  isRounded?: boolean;
  isDisabled?: boolean;
}
