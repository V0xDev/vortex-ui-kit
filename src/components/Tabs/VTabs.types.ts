import { VButton } from "@/components/Button/VButton.types";

export interface VTab extends VButton {
  value: string | number;
}

export interface VTabs {
  tabProps: Partial<VButton>;
}
