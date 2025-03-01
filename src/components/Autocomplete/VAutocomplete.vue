<script setup lang="ts" generic="T">
import { computed, useTemplateRef } from "vue";
import VIcon from "@/components/Icon/VIcon.vue";
import { CloseIcon } from "@/components/Icons";
import ArrowDown from "@/components/Icons/ArrowDown.vue";
import VLoader from "../Loader/VLoader.vue";
import { SelectOption } from "@/shared/types";
import { VAutocomplete } from "./VAutocomplete.types";
import { onClickOutside } from "@vueuse/core";

const props = withDefaults(defineProps<VAutocomplete<T>>(), {
  color: "neutral",
  size: "s",
  placeholder: "Выберите значение",
  isRounded: true,
  isStretch: true,
});

const target = useTemplateRef<HTMLElement>("autocompleteRef");

const modelValue = defineModel<string>({ required: true });
const selectValue = defineModel<SelectOption<T>>("select-value");
const isOpen = defineModel<boolean>("is-open", { default: false });

const selectOption = (value: SelectOption<T>) => {
  modelValue.value = value.display;
  selectValue.value = value;
  isOpen.value = false;
};

const clearSelection = () => {
  modelValue.value = "";
  selectValue.value = null;
  isOpen.value = false;
};

const onDisplayClick = () => {
  isOpen.value = !isOpen.value;
};

const isValidOptions = computed(
  () => !props.options || props.options.length === 0
);

const isButtonClose = computed(() => props.isButtonClear && modelValue.value);

onClickOutside(target, (_event) => (isOpen.value = false));
</script>

<template>
  <div
    ref="autocompleteRef"
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
    @keydown.esc="isOpen = false"
  >
    <div v-if="$slots.before" class="--before --label">
      <slot name="before" />
    </div>
    <label v-if="label" class="--label">{{ label }}</label>
    <div @click="onDisplayClick" class="ui-select__wrapper">
      <input
        v-bind="$attrs"
        class="selected-value"
        v-model="modelValue"
        :placeholder="placeholder"
      />

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
            :class="{ '--selected': modelValue === display }"
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
  $spacingX: map-get($spacing, small_2x);
  $spacingY: map-get($spacing, small_3x);

  .selected-value {
    font-size: map-get($size, $fontSize);
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

  .selected-value {
    @extend %ellipsis;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    text-align: left;

    &::placeholder {
      opacity: 0.7;
    }
  }

  .--label {
    display: block;
    margin-bottom: map-get($spacing, small_4x);
  }

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

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
