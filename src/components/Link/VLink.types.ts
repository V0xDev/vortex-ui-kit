export type Target = "_self" | "_blank";

export interface VLink {
  href: string;
  target?: Target;
  isDisabled?: boolean;
  isUnderline?: boolean;
}
