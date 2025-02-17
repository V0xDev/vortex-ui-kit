<script setup lang="ts">
withDefaults(
  defineProps<{
    position?: "right" | "left" | "top" | "bottom";
    size?: string;
  }>(),
  { size: "400px", position: "right" }
);

const isOpen = defineModel<boolean>({ required: true });
</script>

<template>
  <Teleport to=".drawers">
    <div class="ui-drawer" :class="{ '--open': isOpen }">
      <div class="ui-drawer__overlay" @click="isOpen = false" />
      <div class="ui-drawer__content" :class="['--' + position]">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.ui-drawer {
  visibility: hidden;
  transition: visibility 0.3s linear 0.3s;
  pointer-events: none;

  &.--open {
    visibility: visible;
    transition: visibility 0s linear;
    pointer-events: auto;
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &.--open &__overlay {
    opacity: 1;
    pointer-events: auto;
  }

  &.--open &__content {
    transform: translateX(0);
  }

  &__content {
    position: fixed;
    background: white;
    z-index: 15;
    width: 100%;
    transition: transform 0.3s ease;
    pointer-events: auto;

    &.--right,
    &.--left {
      top: 0;
      height: 100%;
      max-width: v-bind(size);
    }

    &.--right {
      right: 0;
      transform: translateX(100%);
    }

    &.--left {
      left: 0;
      transform: translateX(-100%);
    }

    &.--top,
    &.--bottom {
      left: 0;
      right: 0;
      max-height: v-bind(size);
    }

    &.--top {
      top: 0;
      transform: translateY(-100%);
    }

    &.--bottom {
      bottom: 0;
      transform: translateY(100%);
    }
  }
}
</style>
