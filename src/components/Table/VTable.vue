<script setup lang="ts"></script>

<template>
  <div class="ui-table">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

.ui-table {
  width: 100%;
}
</style>
