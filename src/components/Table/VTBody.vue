<script setup lang="ts">
import VSpinner from "../Spinner/VSpinner.vue";
import { VTBody } from "./VTable.types";

withDefaults(defineProps<VTBody>(), {
  isError: false,
  isLoading: false,
  backgroundColor: "neutral",
  isStriped: false,
});
</script>

<template>
  <div
    class="ui-table__body"
    :class="['--' + backgroundColor, { '--striped': isStriped }]"
  >
    <slot v-if="isData?.length === 0" name="no-data">
      <div class="ui-table__no-data">
        <span class="ui-table__no-data_label">Данных пока нет</span>
      </div>
    </slot>
    <slot v-else-if="isError" name="error">
      <div class="ui-table__error">
        <span class="ui-table__error_label">Ошибка загрузки данных...</span>
      </div>
    </slot>
    <slot v-else-if="isLoading" name="loading">
      <div class="ui-table__loading">
        <VSpinner size="30px" />
      </div>
    </slot>
    <slot v-else />
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;

@mixin setBgColor($color) {
  background-color: map-get($color, 05);

  &.--striped {
    :deep(.ui-table__row):not(:hover, .--selected):nth-child(even) {
      background: map-get($color, 20);
    }
  }

  .ui-table__loading :deep(.ui-spinner) {
    border-top: 3px solid map-get($color, 40);
  }

  .ui-table__no-data {
    &_label {
      color: map-get($color, 80);
      font-weight: bold;
    }
  }
}

.ui-table__no-data,
.ui-table__loading,
.ui-table__error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.ui-table__error {
  &_label {
    color: map-get($error, 80);
    font-weight: bold;
  }
}

.ui-table__body {
  position: relative;
  flex: 1;

  &.--primary {
    @include setBgColor($primary);
  }

  &.--error {
    @include setBgColor($error);
  }

  &.--secondary {
    @include setBgColor($secondary);
  }

  &.--neutral {
    @include setBgColor($neutral);
  }

  &.--success {
    @include setBgColor($success);
  }
}
</style>
