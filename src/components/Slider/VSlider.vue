<script setup lang="ts">
import { ColorMode, SizeMode } from "@/shared/types";
import { computed, useTemplateRef } from "vue";

withDefaults(
  defineProps<{
    isSliderRounded?: boolean;
    isThumbRounded?: boolean;
    color?: ColorMode;
    size?: SizeMode;
    isStretch?: boolean;
  }>(),
  {
    isStretch: true,
    color: "neutral",
    size: "s",
  }
);

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
    ]"
  >
    <input ref="slider" type="range" v-model="model" v-bind="$attrs" />
    <div class="thumb"></div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

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

    &:hover {
      background: map-get($color, 120);
    }

    &::after {
      content: "12";
      color: red;
    }
  }
}

.ui-slider {
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;
  }

  input[type="range"] {
    height: 15px;
    width: 100%;
    background: #ccc;
    border-radius: 16px;
  }

  /* Track: webkit browsers */
  input[type="range"]::-webkit-slider-runnable-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
  }

  /* Track: Mozilla Firefox */
  input[type="range"]::-moz-range-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
  }

  /* Thumb: webkit */
  input[type="range"]::-webkit-slider-thumb {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #f50;
  }

  /* Thumb: Firefox */
  input[type="range"]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #f50;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    // border-radius: 16px;
  }

  /* Track: Mozilla Firefox */
  input[type="range"]::-moz-range-track {
    // border-radius: 16px;
  }

  input[type="range"]::-webkit-slider-thumb {
    // border-radius: 50%;
  }

  input[type="range"]::-moz-range-thumb {
    // border-radius: 50%;
  }

  /* Thumb: webkit */
  input[type="range"]::-webkit-slider-thumb {
    /*  ...  */
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px #f50;
  }

  /* Thumb: Firefox */
  input[type="range"]::-moz-range-thumb {
    /*  ...  */
    /*  slider progress trick  */
    box-shadow: -407px 0 0 400px #f50;
  }

  input[type="range"] {
    /*  ...  */
    /*  slider progress trick  */
    overflow: hidden;
    border-radius: 16px;
  }

  .thumb {
    color: red;
  }
}
</style>
