import { computed, inject, ModelRef, provide } from "vue";

export type CreateTabsProvidedType = ReturnType<typeof createTabs>;

const TABS_KEY = "$tab-controller";

export function createTabs(tabValue: ModelRef<number | string>) {
  const toProvide = {
    activeValue: computed(() => tabValue.value),
    setActive: (value: string | number) => {
      tabValue.value = value;
    },
  };

  provide(TABS_KEY, toProvide);

  return toProvide;
}

export function getTabs(): CreateTabsProvidedType | never {
  const tabs = inject<CreateTabsProvidedType | undefined>(TABS_KEY);

  if (!tabs) {
    throw new Error(`[provide/inject] no tabs with id: ${TABS_KEY}`);
  }
  return tabs;
}
