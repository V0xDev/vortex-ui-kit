<script lang="ts" setup>
import { VChip } from "@/components/Chip/VChip.types";

withDefaults(defineProps<VChip>(), {
  color: "neutral",
  variant: "solid",
  isRounded: true,
});
</script>

<template>
  <button
    class="ui-chip"
    :class="[
      '--' + color,
      '--' + variant,
      { '--rounded': isRounded },
      { '--rounded-full': isRoundedFull },
    ]"
  >
    <div v-if="$slots.before" class="--before">
      <slot name="before" />
    </div>
    <div v-if="$slots.default" class="--default">
      <slot name="default" class="label" />
    </div>
    <div v-if="$slots.after" class="--after">
      <slot name="after" />
    </div>
  </button>
</template>

<style scoped lang="scss">
$fullRounded: 18px;

@mixin set-style($color) {
  &.--solid {
    background-color: map-get($color, 100);
  }

  &.--outlined {
    background-color: transparent;
    box-shadow: inset 0px 0px 0px 1px map-get($color, 100);
  }
}

.ui-chip {
  background-color: transparent;
  border: none;

  @include flex-with-gap(row, center, center, $base-size * 2);

  padding: map-get($spacing, small_4x) map-get($spacing, small_3x);

  &.--rounded {
    border-radius: $base-rounded;
  }

  &.--rounded-full {
    border-radius: $fullRounded;
  }

  &.--primary {
    @include set-style($primary);
  }

  &.--error {
    @include set-style($error);
  }

  &.--secondary {
    @include set-style($secondary);
  }

  &.--neutral {
    @include set-style($neutral);
  }

  &.--success {
    @include set-style($success);
  }
}
</style>
