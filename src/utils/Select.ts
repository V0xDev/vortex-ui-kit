import { SelectOption } from "@/shared/types";

export function transformToOptions<T>(
  arr: T[] | undefined,
  keyField: string,
  displayField: string
): SelectOption<T>[] {
  if (!arr) {
    return [];
  }
  return arr.map(
    (x: any): SelectOption<T> => ({
      key: x[keyField],
      display: x[displayField],
      raw: x,
    })
  );
}
