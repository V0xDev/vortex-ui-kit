<script setup lang="ts">
import { computed } from "vue";
import { VProgress } from "./VProgress.types";

const props = withDefaults(defineProps<VProgress>(), {
  maxValue: 100,
  variant: "solid",
  color: "neutral",
  size: "s",
  isRounded: false,
  isDisabled: false,
});

const progress = defineModel<number>({ required: true, default: 0 });

const clampedProgress = computed(() =>
  Math.min(Math.max(progress.value, 0), props.maxValue)
);

const progressPercentage = computed(() =>
  Math.round((clampedProgress.value / props.maxValue) * 100)
);

const displayValue = computed(() => progressPercentage.value + "%");
</script>

<template>
  <div
    class="ui-progress"
    :class="[
      '--' + color,
      '--' + size,
      '--' + variant,
      { '--rounded': isRounded },
      { '--disabled': isDisabled },
    ]"
  >
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <div class="ui-progress__bar">
      <div v-if="$slots.label" class="--label">
        <slot name="label" :value="progressPercentage" />
      </div>
      <span v-else class="ui-progress__label">{{ displayValue }}</span>
      <div
        class="ui-progress__value"
        :value="progressPercentage"
        :style="{
          width: progressPercentage + '%',
        }"
      />
    </div>
    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@/assets/_variables.scss" as *;
@use "@/assets/_mixins.scss" as *;
@use "@/assets/_extends.scss" as *;

$opacityBackValue: 0.9;
$base-size-multiplier: 0.2;

@keyframes barStripe {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 1em 0;
  }
}

@mixin set-color($color) {
  .ui-progress__bar {
    background-color: map-get($neutral, 10);
    box-shadow: inset 0px 0px 0px 1px map-get($neutral, 140);
  }

  &.--solid .ui-progress__value {
    opacity: $opacityBackValue;
    position: absolute;
    top: 0;
    background-color: map-get($color, 100);
    box-shadow: inset 0px 0px 0px 1px map-get($neutral, 140);
  }

  &.--modern .ui-progress__value {
    opacity: $opacityBackValue;
    display: inline-block;
    background-color: map-get($color, 100);
    box-shadow: inset 0px 0px 0px 1px map-get($neutral, 140);
    background-image: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.25) 50%,
      rgba(0, 0, 0, 0.25) 75%,
      transparent 75%,
      transparent
    );
    font-size: 30px;
    background-size: 1em 1em;
    animation: barStripe 1s linear infinite;
  }
}

@mixin set-size($customSize) {
  $progress-bar-height: map-get($size, $customSize) *
    ($multiplierSize + $base-size-multiplier);

  .ui-progress__label,
  .--label {
    font-size: map-get($size, $customSize);
  }

  .ui-progress__bar {
    height: $progress-bar-height;
  }
}

.ui-progress {
  user-select: none;
  display: flex;
  gap: map-get($spacing, small_3x);

  &__bar {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__label {
    color: map-get($neutral, 10);
    -webkit-text-stroke: 0.3px map-get($neutral, 140);
    text-stroke: 0.3px map-get($neutral, 140);
    font-weight: bold;
  }

  &__label,
  .--label {
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__value {
    height: 100%;
    width: 100%;
    transition: width 0.3s ease;
  }

  &.--disabled {
    @extend %disabled-styles;
    cursor: not-allowed;
  }

  &.--rounded &__bar {
    border-radius: $base-rounded;
  }

  &.--rounded &__value {
    border-start-start-radius: $base-rounded;
    border-bottom-left-radius: $base-rounded;

    &[value="100"] {
      border-radius: $base-rounded;
    }
  }

  &.--s {
    @include set-size(small);
  }
  &.--m {
    @include set-size(medium);
  }
  &.--l {
    @include set-size(large);
  }

  &.--primary {
    @include set-color($primary);
  }
  &.--error {
    @include set-color($error);
  }
  &.--secondary {
    @include set-color($secondary);
  }
  &.--neutral {
    @include set-color($neutral);
  }
  &.--success {
    @include set-color($success);
  }
}
</style>
