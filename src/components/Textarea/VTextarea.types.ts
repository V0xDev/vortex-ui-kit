import { ColorMode, SizeMode } from "@/shared/types";

type VTextAreaResize = "resize-none" | "both" | "vertical" | "horizontal";

export interface VTextarea {
  size?: SizeMode;
  color?: ColorMode;
  resize?: VTextAreaResize;
  maxLength?: number;
  minHeight?: number;
  minWidth?: number;
  isRounded?: boolean;
  isStretch?: boolean;
}
