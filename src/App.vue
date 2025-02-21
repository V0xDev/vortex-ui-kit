<script setup lang="ts">
import { ref } from "vue";
import VTable from "./components/Table/VTable.vue";
import VTBody from "./components/Table/VTBody.vue";
import VTCell from "./components/Table/VTCell.vue";
import VTHead from "./components/Table/VTHead.vue";
import VTRow from "./components/Table/VTRow.vue";
import { data } from "./stories/Table/store";

const select = ref();
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VTable>
        <VTHead is-sticky>
          <VTRow
            class="set-style-row"
            is-row-header
            background-color="primary"
            :is-hover="false"
          >
            <VTCell border-color="primary">Header 1</VTCell>
            <VTCell border-color="primary">Header 2</VTCell>
            <VTCell border-color="primary">Header 3</VTCell>
          </VTRow>
        </VTHead>
        <VTBody is-striped background-color="primary">
          <VTRow
            class="set-style-row"
            background-color="primary"
            v-for="item in data"
            :is-select="item.id === select"
            @click="select = item.id"
            :key="item.id"
            is-hover
          >
            <VTCell border-color="primary">{{ item.id }}</VTCell>
            <VTCell border-color="primary">{{ item.title }}</VTCell>
            <VTCell border-color="primary">{{ item.description }}</VTCell>
          </VTRow>
        </VTBody>
      </VTable>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/_index.scss" as *;

.set-style-row {
  display: grid;
  grid-template-columns: 150px 150px 1fr;
}

.info-container__wrapper {
  width: 1000px;
  height: 700px;
}

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
</style>
