<script setup lang="ts">
import { VTabs } from "./VTabs.types";
import { createTabs } from "./VTabs.provide";

const props = defineProps<VTabs>();

const modelValue = defineModel<number | string>({ required: true });

createTabs(modelValue, props.tabProps);
</script>

<template>
  <div class="ui-tabs">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-tabs {
  display: flex;
  justify-content: start;
}
</style>
