import VAccordion from "@/components/Accordion/VAccordion.vue";
import { BaseSize, Color, Size } from "@/shared/constants";
import { Meta } from "@storybook/vue3/*";

export type GenericMeta<C> = Omit<Meta<C>, "component"> & {
  component: Record<keyof C, unknown>;
};

export type ColorMode = keyof typeof Color;
export type VTabsVariant = keyof typeof Color;
export type SizeMode = keyof typeof BaseSize;
export type FontSizeMode = keyof typeof Size;

export type Maybe<T> = T | null;
