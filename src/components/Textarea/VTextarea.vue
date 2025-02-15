<script setup lang="ts">
import { useId } from "vue";
import { VTextarea } from "./VTextarea.types";

withDefaults(defineProps<VTextarea>(), {
  size: "l",
  color: "neutral",
  resize: "both",
  isStretch: false,
});

const modelValue = defineModel<string>({ required: true, default: "" });

const unicId = useId();

defineExpose({
  unicId,
});
</script>

<template>
  <div
    class="ui-textarea"
    :class="[
      '--' + color,
      '--' + size,
      '--' + resize,
      { '--stretch': isStretch },
      { '--rounded': isRounded },
    ]"
  >
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <textarea
      v-bind="$attrs"
      v-model="modelValue"
      :maxlength="maxLength"
      :id="unicId"
      :name="unicId"
      :rows="minHeight"
      :cols="minWidth"
    />
    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;
@use "@/assets/_extends.scss" as *;

@mixin set-styles($color) {
  textarea {
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

    &:disabled {
      user-select: none;
      @extend %disabled-styles;
    }

    &[readonly] {
      @extend %disabled-styles;
      pointer-events: stroke;
    }
  }
}

@mixin set-size($fontSize) {
  textarea {
    font-size: map-get($size, $fontSize);
  }
}

@mixin set-resize($value) {
  textarea {
    resize: $value;
  }
}

.ui-textarea {
  display: flex;
  align-items: end;
  gap: map-get($spacing, small_3x);

  &,
  textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    max-width: 100%;
    max-height: 100%;
  }

  &.--rounded,
  &.--rounded textarea {
    border-radius: $base-rounded;
  }

  &.--resize-none {
    @include set-resize(none);
  }

  &.--both {
    @include set-resize(both);
  }

  &.--vertical {
    @include set-resize(vertical);
  }

  &.--horizontal {
    @include set-resize(horizontal);
  }

  &.--stretch,
  textarea {
    width: 100%;
    height: 100%;
  }

  &.--primary {
    @include set-styles($primary);
  }

  &.--error {
    @include set-styles($error);
  }

  &.--secondary {
    @include set-styles($secondary);
  }

  &.--neutral {
    @include set-styles($neutral);
  }

  &.--success {
    @include set-styles($success);
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
}
</style>
