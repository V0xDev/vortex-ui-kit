<script setup lang="ts">
import { VCheckbox } from "@/components/Checkbox/Checkbox.types";

withDefaults(defineProps<VCheckbox>(), {
  variant: "primary",
  size: "s",
});
</script>

<template>
  <div
    class="ui-checkbox"
    :class="['--' + variant, '--' + size, { '--disabled': isDisabled }]"
  >
    <input
      class="checkbox"
      type="checkbox"
      id="checkbox__id"
      :checked="initialValue"
      :indeterminate="isIndeterminate"
    />
    <label class="title" for="checkbox__id">
      <slot />
    </label>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/_variables.scss" as *;

@mixin checkbox-styles($backColor) {
  accent-color: map-get($backColor, 100);

  .title {
    color: map-get($base, main);
  }
}

@mixin set-width($size) {
  .checkbox {
    width: $size * 1.5;
    height: $size * 1.5;
  }

  .title {
    font-size: $size * 1.1;
  }
}

%disabled-styles {
  opacity: 50%;
  cursor: default;
  pointer-events: none;
  user-select: none;
}

.ui-checkbox {
  display: flex;
  gap: map-get($spacing, small_3x);

  .checkbox {
    margin: initial;
  }

  .title {
    margin-top: 3px;
    user-select: none;
  }

  &.--disabled {
    @extend %disabled-styles;
  }

  &.--success {
    @include checkbox-styles($success);
  }

  &.--primary {
    @include checkbox-styles($primary);
  }

  &.--error {
    @include checkbox-styles($error);
  }

  &.--secondary {
    @include checkbox-styles($secondary);
  }

  &.--neutral {
    @include checkbox-styles($neutral);
  }

  &.--s {
    @include set-width(map-get($size, small));
  }

  &.--m {
    @include set-width(map-get($size, medium));
  }

  &.--l {
    @include set-width(map-get($size, large));
  }
}
</style>
