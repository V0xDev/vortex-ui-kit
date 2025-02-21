<script setup lang="ts">
import { ColorMode } from "@/shared/types";

interface Props {
  backgroundColor?: ColorMode;
  isStriped?: boolean;
}

withDefaults(defineProps<Props>(), {
  backgroundColor: "neutral",
  isStriped: false,
});
</script>

<template>
  <div
    class="ui-table__body"
    :class="['--' + backgroundColor, { '--striped': isStriped }]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

@mixin setBgColor($color) {
  background-color: map-get($color, 05);

  &.--striped {
    :deep(ui-table__row):not(ui-table__row:hover, ui-table__row.--select) {
      &:nth-child(even):not(:hover, .--selected) > .ui-table__cell {
        background: map-get($color, 20);
      }
    }
  }
}

.ui-table__tbody {
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
