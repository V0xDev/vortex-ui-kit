<script setup lang="ts">
import { VThead } from "./VTable.types";

withDefaults(defineProps<VThead>(), {
  borderColor: "neutral",
  isSticky: false,
});
</script>

<template>
  <div
    class="ui-table__thead"
    :class="['--' + borderColor, { '--sticky': isSticky }]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

@mixin setStyle($color) {
  background-color: map-get($color, 80);
}

.ui-table__thead {
  &.--sticky {
    position: sticky;
    top: 0;
    z-index: 2;
  }

  :deep(div) {
    user-select: none;
  }

  &.--primary {
    @include setStyle($primary);
  }

  &.--error {
    @include setStyle($error);
  }

  &.--secondary {
    @include setStyle($secondary);
  }

  &.--neutral {
    @include setStyle($neutral);
  }

  &.--success {
    @include setStyle($success);
  }
}
</style>
