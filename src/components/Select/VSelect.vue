<script setup lang="ts" generic="T">
import { ref, computed, useId } from "vue";
import VIcon from "@/components/Icon/VIcon.vue";
import { CloseIcon } from "@/shared/icons";
import ArrowDown from "@/shared/icons/ArrowDown.vue";
import {
  SelectOption,
  VSelectEmits,
  type VSelect,
} from "@/components/Select/VSelect.types";
import VLoader from "../Loader/VLoader.vue";

const props = withDefaults(defineProps<VSelect<T>>(), {
  variant: "neutral",
  size: "m",
  maxWidth: "400px",
  isRounded: true,
  isStretch: true,
});

const emits = defineEmits<VSelectEmits>();

const modelValue = defineModel<SelectOption<T>>();
const isOpen = ref(false);
const unicId = useId();

const selectOption = (value: SelectOption<T>) => {
  modelValue.value = value;
  isOpen.value = false;
  emits("is-open", isOpen.value);
};

const clearSelection = () => {
  modelValue.value = null;
  isOpen.value = false;
  emits("is-open", isOpen.value);
};

const onDisplayClick = () => {
  isOpen.value = !isOpen.value;
  emits("is-open", isOpen.value);
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
      '--' + variant,
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
    <label v-if="label" class="--label" :for="unicId">{{ label }}</label>
    <div class="--wrapper">
      <div class="selected-value" :id="unicId">
        <template v-if="modelValue">
          <span class="--label">
            {{ modelValue.display }}
          </span>
        </template>
        <template v-else>
          <span class="--placeholder --label">
            {{ placeholder }}
          </span>
        </template>
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
            Данных пока нет...
          </li>
          <li
            v-else
            v-for="{ key, display, raw } in options"
            :key="key"
            class="option-item"
            :class="{ '--selected': modelValue?.key === key }"
            @click.stop="selectOption({ key, display, raw })"
          >
            <template v-if="$slots.default">
              <slot name="default" :key="key" :display="display" :raw="raw" />
            </template>
            <template v-else>
              {{ display }}
            </template>
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

  .--wrapper {
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
