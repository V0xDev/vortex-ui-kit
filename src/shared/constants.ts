export enum Color {
  "primary" = "#3f51b5",
  "success" = "#0fb345",
  "error" = "#ed2b2b",
  "secondary" = "#ff0089",
  "neutral" = "#707070",
}

export enum Size {
  s = "small",
  m = "medium",
  l = "large",
}

export enum FontSize {
  s1 = "12px",
  s2 = "14px",
  s3 = "16px",
  m1 = "20px",
  m2 = "24px",
  m3 = "28px",
  l1 = "32px",
  l2 = "40px",
  l3 = "48px",
}

export const COLORS_OPTIONS = Object.keys(Color);
export const COLORS_VALUES = Object.values(Color);

export const SIZE_OPTIONS = Object.keys(Size);

export const FONT_SIZE_OPTIONS = Object.keys(FontSize);
export const FONT_SIZE_VALUES = Object.values(FontSize);
