<script setup lang="ts">
import { VTabs } from "./VTabs.types";
import { createTabs } from "./VTabs.provide";

withDefaults(defineProps<VTabs>(), {
  color: "neutral",
  variant: "solid",
  size: "s",
});

const modelValue = defineModel<number | string>({ required: true });

createTabs(modelValue);
</script>

<template>
  <div
    class="ui-tabs"
    :class="[
      '--' + variant,
      '--' + color,
      '--' + size,
      { '--rounded': isRounded },
      { '--stretch': isStretch },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;

@mixin set-variant($backColor) {
  &.--solid {
    :deep(.ui-tab) {
      background-color: map-get($backColor, 40);

      &.--active {
        background-color: map-get($backColor, 60);
        color: map-get($neutral, 140);
      }

      &::after {
        background-color: map-get($backColor, 60);
      }
    }
  }

  &.--modern {
    :deep(.ui-tab) {
      background-color: transparent;

      &.--active {
        color: map-get($neutral, 120);
      }

      &::after {
        background-color: map-get($backColor, 40);
      }
    }
  }
}

@mixin set-color($backColor) {
  :deep(.ui-tab) {
    color: map-get($neutral, 100);

    &.--active::after {
      background-color: map-get($backColor, 140);
    }
  }
}

@mixin set-size($fontSize, $paddingY, $paddingX) {
  :deep(.ui-tab) {
    font-size: map-get($size, $fontSize);
    padding: map-get($spacing, $paddingY) map-get($spacing, $paddingX);
  }
}

.ui-tabs {
  display: flex;
  justify-content: flex-start;
  user-select: none;

  :deep(.--before),
  :deep(.--after) {
    display: flex;
  }

  &.--stretch {
    width: 100%;

    :deep(.ui-tab) {
      flex: 1;
    }
  }

  &.--border {
    border: 1px solid map-get($base, main);
  }

  &.--rounded {
    :deep(.ui-tab) {
      border-radius: $base-rounded;

      &:not(:first-child):not(:last-child) {
        border-radius: initial;
      }

      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }

  &.--primary {
    @include set-variant($primary);
    @include set-color($primary);
  }

  &.--error {
    @include set-variant($error);
    @include set-color($error);
  }

  &.--secondary {
    @include set-variant($secondary);
    @include set-color($secondary);
  }

  &.--neutral {
    @include set-variant($neutral);
    @include set-color($neutral);
  }

  &.--success {
    @include set-variant($success);
    @include set-color($success);
  }

  &.--s {
    @include set-size(small, small_2x, medium);
  }

  &.--m {
    @include set-size(medium, small_2x, large);
  }

  &.--l {
    @include set-size(large, small_2x, large_x);
  }
}
</style>
