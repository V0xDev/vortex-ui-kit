<script setup lang="ts">
import { ref } from "vue";
import VInput from "./components/Input/VInput.vue";
import { CloseIcon } from "./shared/icons";
import VIcon from "./components/Icon/VIcon.vue";

const selectedValue = ref("sadsdas");
</script>

<template>
  <div class="info-container">
    <div style="width: 500px">
      <VInput
        :variant="'neutral'"
        :text-params="{ label: 'Логин', size: 'm1' }"
        :input-params="{
          placeholder: 'Введите имя',
        }"
        v-model="selectedValue"
      >
        <template #after>
          <VIcon style="cursor: pointer" width="25px">
            <CloseIcon />
          </VIcon>
        </template>
      </VInput>
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
