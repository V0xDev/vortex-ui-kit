<script setup lang="ts">
import { ref } from "vue";
import VTable from "./components/Table/VTable.vue";
import VTbody from "./components/Table/VTBody.vue";
import VTCell from "./components/Table/VTCell.vue";
import VTHead from "./components/Table/VTHead.vue";
import VTRow from "./components/Table/VTRow.vue";
import { items } from "./components/Table/data";

const select = ref(false);
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VTable columns-grid="100px 200px 1fr">
        <VTHead is-sticky>
          <VTRow is-row-header background-color="primary" :is-hover="false">
            <VTCell border-color="primary">Header 1</VTCell>
            <VTCell border-color="primary">Header 2</VTCell>
            <VTCell border-color="primary">Header 3</VTCell>
          </VTRow>
        </VTHead>
        <VTbody is-striped>
          <VTRow
            background-color="primary"
            v-for="item in items"
            :key="item.id"
            is-hover
          >
            <VTCell border-color="primary">{{ item.title }}</VTCell>
            <VTCell border-color="primary">{{ item.description }}</VTCell>
            <VTCell border-color="primary">{{ item.brand }}</VTCell>
          </VTRow>
        </VTbody>
      </VTable>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/_index.scss" as *;

:deep(.ui-table__row) {
  grid-template-columns: v-bind(columnsGrid);
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

.info-container__wrapper {
  width: 1000px;
  height: 700px;
}
</style>
