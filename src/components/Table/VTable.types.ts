import { ColorMode } from "@/shared/types";

export interface VThead {
  borderColor?: ColorMode;
  isSticky?: boolean;
}

export interface VTRow {
  backgroundColor?: ColorMode;
  isRowHeader?: boolean;
  isHover?: boolean;
  isSelect?: boolean;
}

export interface VTCell {
  borderColor?: ColorMode;
  isTruncate?: boolean;
}

export interface VTBody {
  isData?: Array<any>;
  isError?: boolean;
  isLoading?: boolean;
  isStriped?: boolean;
  backgroundColor?: ColorMode;
}
