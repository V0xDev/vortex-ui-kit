<script setup lang="ts">
import { VColor } from "@/components/Color/VColor.types";
import { Color } from "@/shared/constants";
import { computed } from "vue";

const props = withDefaults(defineProps<VColor>(), {
  color: "primary",
});

const textColor = computed(() => Color[props.color]);
</script>

<template>
  <div class="ui-color" :class="['--' + color]">{{ textColor }}</div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

.ui-color {
  display: inline-block;
  font-size: map-get($size, large);
  color: map-get($base, contrast);
  padding: map-get($spacing, small_x) map-get($spacing, small);

  &.--primary {
    background-color: map-get($primary, 100);
  }

  &.--success {
    background-color: map-get($success, 100);
  }

  &.--error {
    background-color: map-get($error, 100);
  }

  &.--secondary {
    background-color: map-get($secondary, 100);
  }

  &.--neutral {
    background-color: map-get($neutral, 100);
  }
}
</style>
