<script setup lang="ts">
import { shallowRef } from "vue";
import VTextarea from "./components/Textarea/VTextarea.vue";
import VInput from "./components/Input/VInput.vue";

const value = shallowRef("");
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <!-- <VTextarea
        v-model="value"
        placeholder="фыв"
        color="primary"
        readonly
        is-stretch
        is-rounded
      >
        <template #before> before </template>
        <template #after> after </template>
      </VTextarea> -->
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
  height: 300px;
}
</style>
