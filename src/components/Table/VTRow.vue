<script setup lang="ts">
import { ColorMode } from "@/shared/types";

interface Props {
  backgroundColor?: ColorMode;
  isRowHeader?: boolean;
  isHover?: boolean;
  isSelect?: boolean;
}

withDefaults(defineProps<Props>(), {
  backgroundColor: "neutral",
  isHover: true,
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
@use "sass:map";
@use "@/assets/_variables.scss" as *;

@mixin setBgColor($color) {
  background: map-get($color, 05);

  &.--is-row-header {
    background: map-get($color, 60);

    :deep(.ui-table__cell) {
      border-color: map-get($color, 120);
    }
  }

  &.--select,
  &.--hover {
    &:hover {
      cursor: pointer;
    }
  }

  &.--select {
    background: map-get($color, 40);
  }

  &.--hover:not(&.--select) {
    &:hover:not(&.--select) {
      background: map-get($color, 30);
    }
  }
}

.ui-table__row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

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
