<script setup lang="ts">
import { VTRow } from "./VTable.types";

withDefaults(defineProps<VTRow>(), {
  backgroundColor: "neutral",
  isHover: false,
  isSelect: false,
});
</script>

<template>
  <div
    class="ui-table__row"
    :class="[
      '--' + backgroundColor,
      { '--hover': isHover },
      { '--selected': isSelect },
      { '--is-row-header': isRowHeader },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@mixin setBgColor($color) {
  background: map-get($color, 05);

  &.--is-row-header {
    background: map-get($color, 60);

    :deep(.ui-table__cell) {
      border-color: map-get($color, 120);
    }
  }

  &.--selected,
  &.--hover {
    &:hover {
      cursor: pointer;
    }
  }

  &.--selected {
    background: map-get($color, 40);
  }

  &.--hover:not(&.--selected) {
    &:hover:not(&.--selected) {
      background: map-get($color, 30);
    }
  }
}

.ui-table__row {
  :deep(th),
  :deep(td) {
    padding: 10px;
  }

  &.--primary {
    @include setBgColor($primary);
  }

  &.--error {
    @include setBgColor($error);
  }

  &.--secondary {
    @include setBgColor($secondary);
  }

  &.--neutral {
    @include setBgColor($neutral);
  }

  &.--success {
    @include setBgColor($success);
  }
}
</style>
