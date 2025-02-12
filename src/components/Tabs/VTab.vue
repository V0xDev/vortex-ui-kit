<script lang="ts" setup>
import VSpinner from "@components/Spinner/VSpinner.vue";
import { getTabs } from "./VTabs.provide";
import { VTab } from "./VTabs.types";

defineProps<VTab>();

const { activeValue, setActive } = getTabs();
</script>

<template>
  <button
    v-bind="$attrs"
    class="ui-tab"
    :class="[
      { '--active': activeValue === value },
      { '--loading': isLoading },
      { '--disabled': isDisabled },
    ]"
    @click="setActive(value)"
  >
    <div v-if="isLoading" class="loader-container">
      <VSpinner />
    </div>
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <div v-if="$slots.default" class="--default">
      <slot name="default" class="label" />
    </div>
    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </button>
</template>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;
@use "@/assets/_extends.scss" as *;

.ui-tab {
  position: relative;
  backface-visibility: hidden;
  border: none;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  color: map-get($neutral, 80);
  background-color: transparent;
  @include flex-with-gap(row, center, center, $base-size * 2);

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 3px;
    bottom: 0;
    transition: background-color 0.25s ease-out;
  }

  &:hover {
    cursor: pointer;
  }

  &.--disabled,
  &.--loading {
    @extend %disabled-styles;
  }

  .loader-container {
    position: absolute;
    width: 100%;
    height: 100%;
    @include flex(row, center, center);

    :deep(.ui-spinner) {
      border-top-color: map-get($neutral, 80);
    }
  }

  &.--loading {
    .--before,
    .--default,
    .--after {
      visibility: hidden;
    }
  }
}
</style>
