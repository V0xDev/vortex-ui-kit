<script setup lang="ts">
import { Size } from "@/shared/constants";
import { VCard } from "./VCard.types";

withDefaults(defineProps<VCard>(), {
  color: "neutral",
  padding: Size.s1,
  isBoxShadow: false,
  isRounded: false,
  isStretch: true,
});
</script>

<template>
  <div
    class="ui-card"
    :class="[
      '--' + color,
      { '--shadow': isBoxShadow },
      { '--rounded': isRounded },
      { '--stretch': isStretch },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;

@mixin set-color($color) {
  border: 1px solid map-get($color, 20);

  &.--shadow {
    border: none;
    box-shadow: 0px 8px 48px 4px map-get($color, 10);
  }
}

.ui-card {
  box-sizing: border-box;

  width: fit-content;
  height: auto;
  padding: v-bind(padding);
  background-color: transparent;

  &.--stretch {
    width: 100%;
    height: 100%;
  }

  &.--rounded {
    border-radius: $base-rounded;
  }

  &.--primary {
    @include set-color($primary);
  }

  &.--error {
    @include set-color($error);
  }

  &.--secondary {
    @include set-color($secondary);
  }

  &.--neutral {
    @include set-color($neutral);
  }

  &.--success {
    @include set-color($success);
  }
}
</style>
