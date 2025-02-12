import { ColorMode } from "@/shared/types";

export enum VChipVariant {
  solid = "solid",
  outlined = "outlined",
}

export const VARIANT_CHIP_OPTIONS = Object.keys(VChipVariant);

export type VChipVariantType = keyof typeof VChipVariant;

export interface VChip {
  variant?: VChipVariantType;
  color?: ColorMode;
  isRounded?: boolean;
  isRoundedFull?: boolean;
}
