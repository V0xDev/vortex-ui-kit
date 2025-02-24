<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { VSlider } from "./VSlider.types";

withDefaults(defineProps<VSlider>(), {
  isStretch: true,
  color: "neutral",
  size: "s",
});

const slider = useTemplateRef<HTMLInputElement>("slider");

const [model, modifiers] = defineModel({
  required: true,
  set(value) {
    if (modifiers.formatNumber) {
      return Number(value);
    }

    return value;
  },
});

const min = computed(() => slider.value?.min ?? 0);
const max = computed(() => slider.value?.max ?? 0);

defineExpose({
  min,
  max,
});
</script>

<template>
  <div
    class="ui-slider"
    :class="[
      '--' + size,
      '--' + color,
      { '--stretch': isStretch },
      { '--slider-rounded': isSliderRounded },
      { '--thumb-rounded': isThumbRounded },
      { '--disabled': isDisabled },
    ]"
  >
    <slot name="label" :value="model" :minValue="min" :maxValue="max" />
    <div class="ui-slider__wrapper">
      <slot name="before" :value="model" :minValue="min" :maxValue="max" />
      <input ref="slider" type="range" v-model="model" v-bind="$attrs" />
      <slot name="after" :value="model" :minValue="min" :maxValue="max" />
    </div>
    <slot name="output" :value="model" :minValue="min" :maxValue="max" />
  </div>
</template>

<style lang="scss" scoped>
@mixin setSize($customSize) {
  $multiplyHeight: 1.5;
  $calculateSliderHeight: calc(map-get($size, $customSize) / $multiplyHeight);
  $calculateThumbSize: calc(map-get($size, $customSize) * $multiplyHeight);

  $centeringFactor: 2;
  $thumbOffset: calc(
    (#{$calculateSliderHeight} - #{$calculateThumbSize}) / #{$centeringFactor}
  );

  input {
    height: $calculateSliderHeight;

    &::-webkit-slider-runnable-track {
      height: $calculateSliderHeight;
    }
  }

  input::-webkit-slider-thumb {
    margin-top: $thumbOffset;
    width: $calculateThumbSize;
    height: $calculateThumbSize;
  }
}

@mixin setColor($color) {
  $intensive: 60;

  input {
    &::-webkit-slider-runnable-track {
      background: map-get($color, $intensive);
    }

    &::-moz-range-track {
      background: map-get($color, $intensive);
    }
    &::-moz-range-thumb {
      background: map-get($color, $intensive);
      border-color: darken(map-get($color, $intensive), 10%);
    }

    &::-ms-fill-lower {
      background: map-get($color, $intensive);
    }
    &::-ms-fill-upper {
      background: map-get($color, $intensive);
    }
    &::-ms-thumb {
      background: map-get($color, $intensive);
      border-color: darken(map-get($color, $intensive), 10%);
    }
  }

  input::-webkit-slider-thumb {
    background: map-get($color, 100);
    transition: hover 0.7 ease;

    &:hover {
      background: map-get($color, 120);
    }
  }
}

.ui-slider {
  display: flex;
  flex-direction: column;
  gap: map-get($spacing, small_2x);

  &__wrapper {
    display: flex;
    align-items: center;
    gap: map-get($spacing, small_3x);
  }

  &.--disabled,
  &:disabled {
    @extend %disabled-styles;
  }

  input::-webkit-slider-thumb,
  input[type="range"] {
    -webkit-appearance: none;
  }

  input[type="range"] {
    margin: 0;
    width: min-content;
  }

  &.--stretch input,
  input::-webkit-slider-runnable-track {
    width: 100%;
  }

  &.--slider-rounded input::-webkit-slider-runnable-track {
    border-radius: 4px;
  }

  &.--thumb-rounded input::-webkit-slider-thumb {
    border-radius: 100%;
  }

  &.--s {
    @include setSize(small);
  }

  &.--m {
    @include setSize(medium);
  }

  &.--l {
    @include setSize(large);
  }

  &.--primary {
    @include setColor($primary);
  }
  &.--error {
    @include setColor($error);
  }
  &.--secondary {
    @include setColor($secondary);
  }
  &.--neutral {
    @include setColor($neutral);
  }
  &.--success {
    @include setColor($success);
  }
}
</style>
