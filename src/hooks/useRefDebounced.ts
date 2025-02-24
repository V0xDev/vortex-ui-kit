import { refDebounced } from "@vueuse/core";
import { MaybeRefOrGetter, Ref, ref } from "vue";

type UseDebouncedArgs<T> = {
  ms?: MaybeRefOrGetter<number>;
  defaultValue?: T;
};

export function useDebouncedField<T = undefined>(
  args: UseDebouncedArgs<T> = { ms: 750 }
) {
  const value = ref(args.defaultValue) as Ref<T>;
  const debounced = refDebounced<T>(value, args.ms);

  return { value, debounced };
}
