<script setup lang="ts">
import VLabel from "./components/Label/VLabel.vue";
import VLink from "./components/Link/VLink.vue";
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VLink href="#" target="_blank">
        <template #before>before</template>
        <VLabel color="blue" size="s3">Ссылка</VLabel>
        <template #after>after</template>
      </VLink>
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
  width: 500px;
  height: 500px;
}
</style>
