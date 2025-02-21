import { FontSizeMode, HorizontalAlign, VerticalAlign } from "@/shared/types";

export interface VLabel {
  horizontal?: HorizontalAlign;
  vertical?: VerticalAlign;
  size?: FontSizeMode;
  color?: string;
  isBold?: boolean;
}
