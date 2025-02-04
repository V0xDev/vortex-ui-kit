<script setup lang="ts" generic="T">
import { computed } from "vue";
import { VInput } from "./VInput.types";
import VLabel from "../Label/VLabel.vue";
import VLoader from "@/components/Loader/VLoader.vue";

const props = withDefaults(defineProps<VInput>(), {
  size: "s",
  variant: "neutral",
  isStretch: true,
  isRounded: true,
});

const mergedProps = computed<VInput["inputParams"] | VInput>(() => ({
  type: "text",
  ...props.inputParams,
}));

const inputValue = defineModel<T | null>({ required: true, default: null });

const isValidTextParamsProps = computed(
  () => props.textParams && props.textParams.label
);

defineExpose({
  inputValue,
});
</script>

<template>
  <div
    class="ui-input"
    :class="[
      '--' + props.size,
      '--' + props.variant,
      { '--stretch': isStretch },
      { '--rounded': isRounded },
    ]"
  >
    <div v-if="isValidTextParamsProps" class="--label">
      <VLabel v-bind="props.textParams" />
    </div>
    <div class="--wrapper">
      <div v-if="$slots.before" class="--before">
        <slot name="before" />
      </div>
      <input v-bind="mergedProps" v-model="inputValue" />
      <div v-if="$slots.after" class="--after">
        <slot name="after" />
      </div>
      <VLoader v-if="isLoading" position="bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;

$iconMargin: 5px;
$inputPadding: 33px;

@mixin input-styles($color) {
  input {
    border: 1px solid map-get($color, 80);

    @if $color == $error {
      color: map-get($error, 100);
      background-color: map-get($error, 10);
    }

    &::placeholder {
      @if $color == $error {
        color: map-get($error, 80);
      } @else {
        color: map-get($neutral, 80);
      }
      opacity: 0.8;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem map-get($color, 20);
    }

    &:disabled,
    &[readonly] {
      background-color: map-get($color, 10);
    }
  }

  :deep(.ui-icon) {
    color: map-get($color, 100);
  }

  :deep(.ui-linear-spinner) {
    &::after {
      @if $color == $neutral {
        background-color: map-get($neutral, 100);
      } @else {
        background-color: map-get($color, 80);
      }
    }
  }
}

.ui-input {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  &.--rounded input {
    border-radius: $base-rounded;
  }

  &.--stretch input,
  &.--stretch .--wrapper {
    width: 100%;
  }

  input {
    line-height: inherit;
    margin: 0;
    border: none;
    color: map-get($neutral, 140);
    line-height: 1.5;
    padding: map-get($spacing, small_3x) map-get($spacing, small_3x);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .--label {
    display: block;
    margin-bottom: map-get($spacing, small_4x);
  }

  .--wrapper {
    width: fit-content;
    position: relative;
    @include flex-with-gap(row, left, center, $base-size * 2);

    &:has(.ui-icon) {
      gap: normal;
    }

    :deep(.--after),
    :deep(.--before) {
      .ui-icon {
        top: 0;
        height: 100%;
        position: absolute;
        user-select: none;
      }
    }

    &:has(.--after .ui-icon) input {
      padding-right: $inputPadding;
    }

    &:has(.--before .ui-icon) input {
      padding-left: $inputPadding;
    }

    :deep(.--after) {
      .ui-icon {
        right: 0;
        margin-right: $iconMargin;
      }
    }

    :deep(.--before) {
      .ui-icon {
        margin-left: $iconMargin;
      }
    }
  }

  &.--primary {
    @include input-styles($primary);
  }

  &.--error {
    @include input-styles($error);
  }

  &.--secondary {
    @include input-styles($secondary);
  }

  &.--neutral {
    @include input-styles($neutral);
  }

  &.--success {
    @include input-styles($success);
  }

  &.--s input {
    font-size: map-get($size, small);
  }

  &.--m input {
    font-size: map-get($size, medium);
  }

  &.--l input {
    font-size: map-get($size, large);
  }
}
</style>
