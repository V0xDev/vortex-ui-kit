import VAccordion from "@/components/Accordion/VAccordion.vue";
import { Color, FontSize, Size } from "@/shared/constants";

export type ColorMode = keyof typeof Color;
export type SizeMode = keyof typeof Size;
export type FontSizeMode = keyof typeof FontSize;

export type InstanceVAccordion = InstanceType<typeof VAccordion>;
export type Maybe<T> = T | null;
