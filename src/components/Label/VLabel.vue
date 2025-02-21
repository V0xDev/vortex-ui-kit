<script setup lang="ts">
import { VLabel } from "@/components/Label/VLabel.types";

withDefaults(defineProps<VLabel>(), {
  size: "s1",
  horizontal: "left",
  vertical: "top",
  isBold: false,
});
</script>

<template>
  <span
    class="ui-label"
    :class="[
      '--' + size,
      '--' + horizontal,
      '--' + vertical,
      { '--bold': isBold },
    ]"
  >
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <div v-if="$slots.default" class="--default">
      <slot name="default" />
    </div>
    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </span>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

.ui-label {
  display: flex;
  color: v-bind(color);

  &.--bold {
    font-weight: bold;
  }

  &.--left {
    justify-content: left;
  }
  &.--center {
    justify-content: center;
  }
  &.--right {
    justify-content: right;
  }

  &.--top {
    align-items: start;
  }

  &.--middle {
    align-items: center;
  }

  &.--bottom {
    align-items: end;
  }

  &.--s1 {
    font-size: map-get($font-size, s1);
  }

  &.--s2 {
    font-size: map-get($font-size, s2);
  }

  &.--s3 {
    font-size: map-get($font-size, s3);
  }

  &.--m1 {
    font-size: map-get($font-size, m1);
  }

  &.--m2 {
    font-size: map-get($font-size, m2);
  }

  &.--m3 {
    font-size: map-get($font-size, m3);
  }

  &.--l1 {
    font-size: map-get($font-size, l1);
  }

  &.--l2 {
    font-size: map-get($font-size, l2);
  }

  &.--l3 {
    font-size: map-get($font-size, l3);
  }
}
</style>
