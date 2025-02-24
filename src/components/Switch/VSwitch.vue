<script setup lang="ts">
import { VSwitch } from "./VSwitch.types";

withDefaults(defineProps<VSwitch>(), {
  size: "s",
  color: "neutral",
  variant: "rectangular",
});

const modelValue = defineModel<boolean>({ required: true, default: false });
</script>

<template>
  <label
    class="ui-switch"
    :class="[
      '--' + color,
      '--' + size,
      '--' + variant,
      { '--disabled': isDisabled },
    ]"
  >
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>

    <div class="ui-switch__wrapper">
      <input v-model="modelValue" type="checkbox" />
      <span class="ui-switch__slider" />
    </div>

    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </label>
</template>

<style lang="scss" scoped>
$base-size-multiplier: 1.3; // Множитель базового размера
$wrapper-width-ratio: 2.1; // Соотношение ширины обертки к базовому размеру
$slider-size-ratio: 0.7; // Размер слайдера относительно базового размера
$slider-position-offset: 0.2; // Начальное позиционирование слайдера
$slider-active-translation: 1.05; // Смещение слайдера при активации

@mixin switch-colors($color) {
  .ui-switch__wrapper {
    input:checked + .ui-switch__slider {
      background-color: map-get($color, 100);
    }
    input:focus + .ui-switch__slider {
      box-shadow: 0 0 1px map-get($color, 100);
    }
  }
}

@mixin set-size($size-key) {
  $base-size: map-get($size, $size-key) * $base-size-multiplier;
  $slider-size: $base-size * $slider-size-ratio * $multiplierSize;

  .ui-switch__wrapper {
    width: $base-size * $wrapper-width-ratio * $multiplierSize;
    height: $base-size * $multiplierSize;

    .ui-switch__slider:before {
      width: $slider-size;
      height: $slider-size;
      left: $base-size * $slider-position-offset * $multiplierSize;
      transform: translateY(-50%);
      top: 50%;
    }
  }

  input:checked + .ui-switch__slider:before {
    transform: translateX(
        $base-size * $slider-active-translation * $multiplierSize
      )
      translateY(-50%);
  }
}

.ui-switch {
  display: flex;
  gap: map-get($spacing, small_3x);
  cursor: pointer;
  user-select: none;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  &.--disabled {
    @extend %disabled-styles;
    cursor: not-allowed;
  }

  &__wrapper {
    position: relative;
    display: inline-block;
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: map-get($neutral, 60);
    transition: 0.4s;

    &:before {
      position: absolute;
      content: "";
      background-color: map-get($base, contrast);
      transition: 0.4s;
    }
  }

  &.--s {
    @include set-size(small);
  }
  &.--m {
    @include set-size(medium);
  }
  &.--l {
    @include set-size(large);
  }

  &.--rounded {
    .ui-switch__slider {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
  }

  &.--primary {
    @include switch-colors($primary);
  }
  &.--error {
    @include switch-colors($error);
  }
  &.--secondary {
    @include switch-colors($secondary);
  }
  &.--neutral {
    @include switch-colors($neutral);
  }
  &.--success {
    @include switch-colors($success);
  }
}
</style>
