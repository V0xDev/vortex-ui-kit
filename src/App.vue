<script setup lang="ts"></script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <div class="btns"></div>
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
