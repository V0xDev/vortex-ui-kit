<script setup lang="ts">
import { shallowRef, watch } from "vue";
import VSlider from "./components/Slider/VSlider.vue";

const value = shallowRef(0);

watch(value, (v) => console.log(v));
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VSlider v-model.formatNumber="value" :min="0" :max="1000"> </VSlider>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/_index.scss" as *;

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
