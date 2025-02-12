import { ColorMode, SizeMode } from "@/shared/types";

export enum VTabsVariant {
  solid = "solid",
  modern = "modern",
}

export const VARIANT_TABS_OPTIONS = Object.keys(VTabsVariant);

export type VTabsVariantType = keyof typeof VTabsVariant;

export interface VTab {
  value: string | number;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export interface VTabs {
  variant?: VTabsVariantType;
  color?: ColorMode;
  size?: SizeMode;
  isRounded?: boolean;
  isStretch?: boolean;
}
