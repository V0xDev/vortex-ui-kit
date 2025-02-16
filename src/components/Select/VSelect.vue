<script setup lang="ts" generic="T">
import { computed, shallowRef } from "vue";
import VIcon from "@/components/Icon/VIcon.vue";
import { CloseIcon } from "@/shared/icons";
import ArrowDown from "@/shared/icons/ArrowDown.vue";
import { type VSelect } from "@/components/Select/VSelect.types";
import VLoader from "../Loader/VLoader.vue";
import { SelectOption } from "@/shared/types";

const props = withDefaults(defineProps<VSelect<T>>(), {
  color: "neutral",
  size: "s",
  placeholder: "Выберите значение",
  isRounded: true,
  isStretch: true,
});

const modelValue = defineModel<SelectOption<T>>({ required: true });
const isOpen = defineModel("is-open", { default: false });

const selectOption = (value: SelectOption<T>) => {
  modelValue.value = value;
  isOpen.value = false;
};

const clearSelection = () => {
  modelValue.value = null;
  isOpen.value = false;
};

const onDisplayClick = () => {
  isOpen.value = !isOpen.value;
};

const isValidOptions = computed(
  () => !props.options || props.options.length === 0
);

const isButtonClose = computed(() => props.isButtonClear && modelValue.value);
</script>

<template>
  <div
    class="ui-select"
    :class="[
      '--' + color,
      '--' + size,
      { '--rounded': isRounded },
      { '--stretch': isStretch },
      { '--loading': isLoading },
      { '--disabled': isDisabled },
      { '--open': isOpen },
    ]"
    @click="onDisplayClick"
    @keydown.esc="isOpen = false"
  >
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <label v-if="label" class="--label">{{ label }}</label>
    <div class="ui-select__wrapper">
      <div class="selected-value">
        <span v-if="modelValue" class="--label">
          {{ modelValue.display }}
        </span>
        <span v-else class="--placeholder --label">
          {{ placeholder }}
        </span>
      </div>

      <div class="icons-wrapper">
        <div v-if="$slots.icon" class="--icon">
          <slot name="icon" />
        </div>

        <VIcon
          v-if="isButtonClose"
          class="button-clear"
          @click.stop="clearSelection"
        >
          <CloseIcon />
        </VIcon>

        <VIcon class="button-arrow">
          <ArrowDown />
        </VIcon>
      </div>

      <VLoader v-if="isLoading" position="bottom" />

      <Transition name="slide-fade">
        <ul v-show="isOpen" class="options-list">
          <li v-if="isValidOptions" class="option-item --no-content">
            <slot name="no-content"> Данных пока нет... </slot>
          </li>
          <li
            v-else
            v-for="{ key, display, raw } in options"
            :key="key"
            class="option-item"
            :class="{ '--selected': modelValue?.key === key }"
            @click.stop="selectOption({ key, display, raw })"
          >
            <slot :key="key" :display="display" :raw="raw">
              {{ display }}
            </slot>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;
@use "@/assets/_extends.scss" as *;

@mixin select-style($color, $intensive: 80) {
  .selected-value {
    border: 1px solid map-get($color, $intensive);
  }

  .icons-wrapper {
    .button-clear {
      color: map-get($color, $intensive);
    }

    .button-arrow {
      color: map-get($color, 140);
    }
  }

  .options-list {
    border: 1px solid map-get($color, $intensive);

    .option-item {
      &:hover {
        background-color: map-get($color, 20);
      }

      &.--selected {
        background-color: map-get($color, 40);
      }
    }
  }

  :deep(.ui-linear-spinner) {
    &::after {
      @if $color == $neutral {
        background-color: map-get($neutral, 100);
      } @else {
        background-color: map-get($color, 80);
      }
    }
  }

  &.--open {
    .selected-value {
      box-shadow: 0 0 0 0.2rem map-get($color, 20);
    }
  }
}

@mixin setSize($fontSize, $paddingY, $paddingX) {
  $paddingIcon: 54px;
  $multiplierSpacingSize: 2.5;
  $spacingX: calc(map-get($spacing, $paddingX) / $multiplierSpacingSize);
  $spacingY: map-get($spacing, $paddingY);

  .--label {
    font-size: map-get($size, $fontSize);
  }

  .selected-value {
    padding: $spacingY calc($spacingX + $paddingIcon) $spacingY $spacingX;
  }

  .icons-wrapper {
    right: $spacingX;
  }

  .option-item {
    padding: $spacingY $spacingX;
    font-size: map-get($size, $fontSize);
  }
}

.ui-select {
  position: relative;
  box-sizing: border-box;
  width: fit-content;
  user-select: none;

  .--label {
    display: block;
    margin-bottom: map-get($spacing, small_4x);
  }

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &.--loading,
  &.--disabled {
    pointer-events: none;
    opacity: 0.7;
  }

  .icons-wrapper {
    position: absolute;
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .button-arrow {
    transition: transform 0.2s ease;
  }

  .selected-value {
    @extend %ellipsis;

    width: 100%;
    cursor: pointer;
    text-align: left;

    .--placeholder {
      opacity: 0.7;
    }
  }

  .options-list {
    position: absolute;
    width: 100%;
    top: calc(100% + 5px);
    z-index: 10;
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;

    .option-item {
      @extend %ellipsis;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .--no-content {
      user-select: none;
      background-color: initial;
      pointer-events: none;
    }
  }

  .icons-wrapper {
    cursor: pointer;
  }

  &.--stretch {
    width: 100%;
    max-width: none;
  }

  &.--rounded {
    .selected-value,
    .options-list {
      border-radius: $base-rounded;
    }
  }

  &.--primary {
    @include select-style($primary);
  }

  &.--error {
    @include select-style($error);
  }

  &.--secondary {
    @include select-style($secondary);
  }

  &.--neutral {
    @include select-style($neutral);
  }

  &.--success {
    @include select-style($success);
  }

  &.--s {
    @include setSize(small, small_2x, medium);
  }

  &.--m {
    @include setSize(medium, small_2x, large);
  }

  &.--l {
    @include setSize(large, small_2x, large_x);
  }

  &.--open {
    .options-list {
      display: block;
    }

    .button-arrow {
      transform: rotate(180deg);
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
