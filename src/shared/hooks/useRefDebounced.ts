import { refDebounced } from "@vueuse/core";
import { MaybeRefOrGetter, ref } from "vue";

export function useDebouncedField<T>(ms: MaybeRefOrGetter<number> = 800) {
  const value = ref<T>();
  const debounced = refDebounced<T>(value, ms);

  return { value, debounced };
}
