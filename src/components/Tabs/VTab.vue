<script setup lang="ts">
import { SlotsType } from "vue";
import VButton from "../Button/VButton.vue";
import { getTabs } from "./VTabs.provide";
import { VTab } from "./VTabs.types";
import { VButtonSlots } from "../Button/VButton.types";

defineProps<VTab>();

const { activeValue, setActive, ...tabs } = getTabs();

defineSlots<VButtonSlots>();
</script>

<template>
  <VButton
    v-bind="{
      ...$props,
      ...tabs,
      ...$attrs,
    }"
    class="ui-tab"
    :class="{ '--active': activeValue === value }"
    @click="setActive(value)"
  >
    <template v-for="name in Object.keys($slots)" #[name]="scope">
      <slot :name="name" v-bind="scope" />
    </template>
  </VButton>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;

@mixin tab-styles($backColor) {
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: map-get($backColor, 40);
    bottom: 0;
    transition: background-color 0.25s ease-out;
  }

  &.--active::after {
    background-color: map-get($backColor, 120);
  }
}

.ui-tab {
  &:has(.ui-button.--stretch) {
    flex: 1;
    box-sizing: border-box;
  }

  :deep(.ui-spinner) {
    border-top-color: map-get($neutral, 80);
  }

  :deep(.--before),
  :deep(.--after) {
    display: flex;
  }

  &.ui-button {
    font-weight: 600;
    color: map-get($neutral, 80);
    background-color: transparent;

    &.--active {
      color: map-get($neutral, 120);
    }

    &.--primary {
      @include tab-styles($primary);
    }

    &.--error {
      @include tab-styles($error);
    }

    &.--secondary {
      @include tab-styles($secondary);
    }

    &.--neutral {
      @include tab-styles($neutral);
    }

    &.--success {
      @include tab-styles($success);
    }

    &:hover {
      background-color: initial;
    }

    &:active {
      transform: none;
    }

    &:not(:first-child):not(:last-child) {
      border-radius: initial;
    }

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
}
</style>
