<script setup lang="ts" generic="T">
import { VCheckbox } from "@/components/Checkbox/VCheckbox.types";

withDefaults(defineProps<VCheckbox>(), {
  color: "primary",
  size: "s",
});

const value = defineModel<T | null>({ required: true, default: null });
</script>

<template>
  <div
    class="ui-checkbox"
    :class="['--' + color, '--' + size, { '--disabled': isDisabled }]"
  >
    <input
      v-model="value"
      class="checkbox"
      type="checkbox"
      id="checkbox__id"
      :indeterminate="isIndeterminate"
    />
    <label for="checkbox__id">
      <slot />
    </label>
  </div>
</template>

<style lang="scss" scoped>
@mixin checkbox-styles($backColor) {
  accent-color: map-get($backColor, 100);

  color: map-get($base, main);
}

@mixin set-width($customSize) {
  .checkbox {
    width: map-get($size, $customSize) * $multiplierSize;
    height: map-get($size, $customSize) * $multiplierSize;
  }

  font-size: map-get($size, $customSize) * $multiplierFontSize;
}

%disabled-styles {
  opacity: 50%;
  cursor: default;
  pointer-events: none;
}

.ui-checkbox {
  display: flex;
  gap: map-get($spacing, small_3x);
  user-select: none;

  .checkbox {
    margin: initial;
  }

  label {
    margin-top: 3px;
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
    @include set-width(small);
  }

  &.--m {
    @include set-width(medium);
  }

  &.--l {
    @include set-width(large);
  }
}
</style>
