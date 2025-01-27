<script lang="ts" setup>
import type { VButton } from "@/components/Button/Button.types";
import VSpinner from "@components/Spinner/VSpinner.vue";

withDefaults(defineProps<VButton>(), {
  variant: "primary",
  size: "s",
  isRounded: true,
});
</script>

<template>
  <button
    class="ui-button"
    :class="[
      '--' + variant,
      '--' + size,
      { '--rounded': isRounded },
      { '--border': isBorder },
      { '--loading': isLoading },
      { '--stretch': isStretch },
    ]"
  >
    <div v-if="isLoading" class="loader-container">
      <VSpinner color="#fff" />
    </div>
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <div v-if="$slots.default" class="--default">
      <slot name="default" class="label" />
    </div>
    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </button>
</template>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;

@mixin button-styles($backColor) {
  background-color: map-get($backColor, 100);
  color: map-get($neutral, 10);

  &:hover {
    background-color: map-get($backColor, 140);
  }
}

%disabled-styles {
  opacity: 50%;
  cursor: default;
  pointer-events: none;
  user-select: none;
}

.ui-button {
  position: relative;
  backface-visibility: hidden;
  border: none;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  @include flex-with-gap(row, center, center, $base-size * 2);

  &.--loading {
    @extend %disabled-styles;

    .--before,
    .--default,
    .--after {
      visibility: hidden;
    }
  }

  &.--stretch {
    width: 100%;
  }

  &.--border {
    border: 1px solid map-get($base, main);
  }

  .loader-container {
    position: absolute;
    width: 100%;
    height: 100%;
    @include flex(row, center, center);
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px) translateZ(0);
  }

  &:disabled {
    @extend %disabled-styles;
  }

  &.--rounded {
    border-radius: $base-rounded;
  }

  &.--primary {
    @include button-styles($primary);
  }

  &.--error {
    @include button-styles($error);
  }

  &.--secondary {
    @include button-styles($secondary);
  }

  &.--neutral {
    @include button-styles($neutral);
  }

  &.--s {
    font-size: map-get($size, small);
    padding: map-get($spacing, small_2x) map-get($spacing, medium);
  }

  &.--m {
    font-size: map-get($size, medium);
    padding: map-get($spacing, small_2x) map-get($spacing, large);
  }

  &.--l {
    font-size: map-get($size, large);
    padding: map-get($spacing, small_2x) map-get($spacing, large_x);
  }
}
</style>
