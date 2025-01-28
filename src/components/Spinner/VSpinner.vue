<script setup lang="ts">
import { Color } from "@/shared/constants";
import { ColorMode } from "@/shared/types";

type IconProps = {
  size?: string;
  variant?: ColorMode;
};

withDefaults(defineProps<IconProps>(), {
  size: "14px",
  variant: "neutral",
});
</script>

<template>
  <span class="ui-spinner" />
</template>

<style lang="scss" scoped>
@use "@/assets/_variables.scss" as *;

.ui-spinner {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid v-bind(variant);
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
