<script setup lang="ts">
import ArrowUp from "@/shared/icons/ArrowUp.vue";
import VButton from "../Button/VButton.vue";
import VIcon from "../Icon/VIcon.vue";
import ArrowDown from "@/shared/icons/ArrowDown.vue";
import { VAccordion } from "@/components/Accordion/VAccordion.type";
import { shallowRef } from "vue";

defineProps<VAccordion>();

const open = shallowRef(false);

defineExpose({
  open,
});
</script>

<template>
  <div class="ui-accordion-item" :class="{ '--active': open }">
    <VButton
      v-bind="buttonProps"
      is-stretch
      class="accordion-button"
      @click="open = !open"
    >
      <template #default> {{ label }} </template>
      <template #after>
        <VIcon>
          <ArrowUp v-if="open" />
          <ArrowDown v-else />
        </VIcon>
      </template>
    </VButton>
    <div v-if="$slots.default" v-show="open" class="accordion-panel">
      <slot name="default" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;

.ui-accordion-item {
  &.--active {
    .accordion-button {
      border-radius: $base-size $base-size 0 0;
    }
  }

  .accordion-button {
    font-weight: 700;
    transition: none;

    &:active {
      transform: none;
    }

    :deep(.--default) {
      flex-grow: 1;
      text-align: start;
    }

    :deep(.--after) {
      display: flex;
    }

    &.--s + .accordion-panel {
      padding: map-get($spacing, small_2x) map-get($spacing, medium);
    }

    &.--m + .accordion-panel {
      padding: map-get($spacing, small_2x) map-get($spacing, large);
    }

    &.--l + .accordion-panel {
      padding: map-get($spacing, small_2x) map-get($spacing, large_x);
    }
  }

  .accordion-panel {
    box-shadow: inset 0px 0px 0px 1px map-get($neutral, 40);
    border-radius: 0px 0px $base-size $base-size;
  }
}
</style>
