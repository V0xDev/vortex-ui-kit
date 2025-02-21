<script setup lang="ts"></script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper"></div>
  </div>
</template>

<style lang="scss">
@use "@/assets/_index.scss" as *;
#app,
body,
html,
.info-container {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}

.info-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.info-container__wrapper {
  width: 1000px;
  height: 700px;
}
</style>
