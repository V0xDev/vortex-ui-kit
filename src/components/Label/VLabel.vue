<script setup lang="ts">
import { VLabel } from "@/components/Label/VLabel.types";

withDefaults(defineProps<VLabel>(), {
  size: "s1",
});
</script>

<template>
  <span class="ui-label" :class="['--' + size]">{{ title }}</span>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

.ui-label {
  color: v-bind(color);

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
