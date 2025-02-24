<script setup lang="ts">
import { VTCell } from "./VTable.types";

withDefaults(defineProps<VTCell>(), {
  borderColor: "neutral",
  isTruncate: true,
});
</script>

<template>
  <div
    class="ui-table__cell"
    :class="['--' + borderColor, { '--truncate': isTruncate }]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@mixin setBorderColor($color) {
  border: 1px solid map-get($color, 60);
}

.ui-table__cell {
  padding: 10px;
  background: inherit;

  &.--truncate {
    @extend %ellipsis;
  }

  &.--primary {
    @include setBorderColor($primary);
  }

  &.--error {
    @include setBorderColor($error);
  }

  &.--secondary {
    @include setBorderColor($secondary);
  }

  &.--neutral {
    @include setBorderColor($neutral);
  }

  &.--success {
    @include setBorderColor($success);
  }
}
</style>
