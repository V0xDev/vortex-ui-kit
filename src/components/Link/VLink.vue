<script setup lang="ts">
import { VLink } from "./VLink.types";

withDefaults(defineProps<VLink>(), {
  target: "_self",
  isUnderline: false,
  isHover: false,
});
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="ui-link"
    :class="[{ '--underline': isUnderline }, { '--disabled': isDisabled }]"
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
  </a>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;
@use "@/assets/_extends.scss" as *;

.ui-link {
  width: fit-content;
  display: flex;
  align-items: end;
  gap: map-get($spacing, small_3x);
  color: currentColor;
  text-decoration: none;
  user-select: none;

  &.--underline {
    text-decoration: underline;

    &:hover,
    &:active,
    &:visited {
      color: currentColor;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &.--disabled,
  &:disabled {
    @extend %disabled-styles;
  }
}
</style>
