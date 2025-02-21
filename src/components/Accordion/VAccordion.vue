<script setup lang="ts">
//TODO: доработать, сделать самостоятельным компонентом,
// добавить проп максимальной ширины, сделать анимацию открывания/закрывания
// добавить before-after слоты внутри title

import VButton from "../Button/VButton.vue";
import { VAccordion } from "@/components/Accordion/VAccordion.types";
import { useTemplateRef } from "vue";
import { onClickOutside } from "@vueuse/core";
import VIcon from "../Icon/VIcon.vue";
import ArrowUp from "../Icons/ArrowUpIcon.vue";
import ArrowDown from "../Icons/ArrowDownIcon.vue";

const props = defineProps<VAccordion>();

const target = useTemplateRef<HTMLElement>("accordionRef");

const modelValue = defineModel({ required: true, default: false });

onClickOutside(target, (_event) => (modelValue.value = false));
</script>

<template>
  <div
    ref="accordionRef"
    class="ui-accordion-item"
    :class="{ '--active': modelValue }"
  >
    <VButton
      v-bind="props"
      is-stretch
      class="accordion-button"
      @click="modelValue = !modelValue"
    >
      <template #default>
        <slot name="title" />
      </template>
      <template #after>
        <VIcon>
          <ArrowUp v-if="modelValue" />
          <ArrowDown v-else />
        </VIcon>
      </template>
    </VButton>
    <div v-if="$slots.default" v-show="modelValue" class="accordion-panel">
      <slot name="default" />
    </div>
    <div v-show="modelValue" class="accordion-panel" v-else>
      Данных пока нет...
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
