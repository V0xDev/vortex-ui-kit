<script setup lang="ts"></script>

<template>
  <div class="ui-table">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-table {
  width: 100%;
  height: 100%;

  min-height: 250px;
  overflow: auto;

  display: flex;
  flex-direction: column;
}
</style>
