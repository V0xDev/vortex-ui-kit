<script setup lang="ts">
import VTab from "@/components/Tabs/VTab.vue";
import VTabs from "./components/Tabs/VTabs.vue";
import { shallowRef, watch } from "vue";

const tabs1 = shallowRef(0);

watch(tabs1, (v) => console.log("tabs1: ", v));
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VTabs v-model="tabs1" :tab-props="{ color: 'primary' }">
        <VTab :value="0">Страница 1</VTab>
        <VTab :value="1">Страница 2</VTab>
        <VTab is-disabled :value="2">Страница 3</VTab>
      </VTabs>
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
</style>
