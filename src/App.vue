<script setup lang="ts">
import VChip from "@/components/Chip/VChip.vue";
import VIcon from "./components/Icon/VIcon.vue";
import CloseIcon from "./shared/icons/CloseIcon.vue";
import VLabel from "./components/Label/VLabel.vue";
import { Color, COLORS_OPTIONS } from "./shared/constants";
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VChip
        @click="console.log(1)"
        is-rounded-full
        color="neutral"
        variant="outlined"
      >
        <template #after>
          <VIcon :color="Color.neutral" style="cursor: pointer">
            <CloseIcon />
          </VIcon>
        </template>
        <VLabel :color="Color.neutral" size="s2">Закрыть</VLabel>
      </VChip>
      <VChip is-rounded-full color="primary" variant="solid">
        <VLabel color="#fff" size="s2">Закрыть</VLabel>
      </VChip>
      <VChip color="success" variant="solid">Chip</VChip>
    </div>
  </div>
</template>

<style scoped>
.info-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container__wrapper {
  width: 800px;

  display: flex;
  gap: 1rem;
}
</style>
