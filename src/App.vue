<script setup lang="ts">
import { ref, shallowRef, watch } from "vue";
import { SelectOption } from "./components/Select/VSelect.types";
import VSelect from "./components/Select/VSelect.vue";

const select = ref<SelectOption<string>>();
const isOpen = shallowRef(false); // обязательно ставить значение т.к в child указано значение по умолчанию

const options: SelectOption<string>[] = [
  {
    key: "1",
    raw: "1",
    display: "Mask",
  },
  {
    key: "2",
    raw: "2",
    display: "Ivan",
  },
  {
    key: "3",
    raw: "3",
    display: "Petr",
  },
  {
    key: "4",
    raw: "4",
    display: "Alana",
  },
];

watch(isOpen, (v) => console.log(v));
watch(select, (v) => console.log(v));
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VSelect
        :options="options"
        v-model="select"
        v-model:is-open="isOpen"
      ></VSelect>
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
