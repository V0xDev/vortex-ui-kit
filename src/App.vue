<script setup lang="ts">
import { shallowRef } from "vue";
import VButton from "./components/Button/VButton.vue";
import VDrawer from "./components/Drawer/VDrawer.vue";

const drawerRight = shallowRef(false);
const drawerLeft = shallowRef(false);
const drawerTop = shallowRef(false);
const drawerBottom = shallowRef(false);
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <div class="btns">
        <VButton @click="drawerRight = true">Right</VButton>
        <VButton @click="drawerLeft = true">Left</VButton>
        <VButton @click="drawerTop = true">Top</VButton>
        <VButton @click="drawerBottom = true">Bottom</VButton>
      </div>

      <VDrawer v-model="drawerRight" position="right" size="300px">
        <h2>Drawer справа</h2>
      </VDrawer>

      <VDrawer v-model="drawerLeft" position="left" size="300px">
        <h2>Drawer слева</h2>
      </VDrawer>

      <VDrawer v-model="drawerTop" position="top" size="40%">
        <h2>Drawer сверху</h2>
      </VDrawer>

      <VDrawer v-model="drawerBottom" position="bottom" size="40%">
        <h2>Drawer снизу</h2>
      </VDrawer>
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

.btns {
  display: flex;
  gap: 0.5rem;
}
</style>
