<script setup lang="ts">
type IconProps = {
  size?: string;
  color?: string;
};

withDefaults(defineProps<IconProps>(), {
  size: "14px",
  color: "#707070",
});
</script>

<template>
  <span class="ui-spinner" />
</template>

<style lang="scss" scoped>
.ui-spinner {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid v-bind(color);
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
