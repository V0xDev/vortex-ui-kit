<script setup lang="ts" generic="T">
import { useId } from "vue";
import { VRadioButton } from "./VRadioButton.types";

const { size = "s", color = "neutral" } = defineProps<VRadioButton<T>>();
const customInput = defineModel<T | null>({ required: true, default: null });

const unicId = useId();
</script>

<template>
  <div
    class="ui-radio-button"
    :class="['--' + size, '--' + color, { '--disabled': isDisabled }]"
  >
    <input
      v-model="customInput"
      class="radio-button"
      type="radio"
      :id="unicId"
      :name="groupName"
      :value="value"
    />
    <label :for="unicId">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@mixin radio-styles($color) {
  color: map-get($color, 100);

  .radio-button {
    accent-color: map-get($color, 100);
  }
}

@mixin set-width($custom_size) {
  .radio-button {
    width: map-get($size, $custom_size) * $multiplierSize;
    height: map-get($size, $custom_size) * $multiplierSize;
  }

  font-size: map-get($size, $custom_size);
}

.ui-radio-button {
  user-select: none;
  @include flex-with-gap(row, left, center, map-get($spacing, small_3x));

  .radio-button {
    margin: 0;
  }

  & *:hover:not(.--disabled) {
    cursor: pointer;
  }

  &.--disabled {
    @extend %disabled-styles;
  }

  &.--primary {
    @include radio-styles($primary);
  }

  &.--success {
    @include radio-styles($success);
  }

  &.--error {
    @include radio-styles($error);
  }

  &.--secondary {
    @include radio-styles($secondary);
  }

  &.--neutral {
    @include radio-styles($neutral);
  }

  &.--s {
    @include set-width(small);

    label {
      margin-top: 3px;
    }
  }
  &.--m {
    @include set-width(medium);
  }

  &.--l {
    @include set-width(large);
  }
}
</style>
