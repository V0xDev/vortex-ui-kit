<script lang="ts" setup>
type IconWrapperProps = {
  height?: string;
  width?: string;
  color?: string;
};

withDefaults(defineProps<IconWrapperProps>(), {
  height: "24px",
  width: "24px",
  color: "currentColor",
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="ui-icon"
    :viewBox="`0 0 24 24`"
  >
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<style scoped lang="scss">
.ui-icon {
  width: v-bind(width);
  height: v-bind(height);
  position: relative;
  display: block;
}
</style>
