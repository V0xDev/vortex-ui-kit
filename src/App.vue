<script setup lang="ts">
import { ref, watch } from "vue";
import VAutocomplete from "./components/Autocomplete/VAutocomplete.vue";
import { useDebouncedField } from "./shared/hooks/useRefDebounced";
import { SelectOption } from "./shared/types";

const { value: searchValue, debounced: searchDebouncedValue } =
  useDebouncedField<string>({
    defaultValue: "",
  });

const autocompleteValue = ref<SelectOption<string>>();

const options: SelectOption<string>[] = [];

watch(searchDebouncedValue, (v) => console.log(v));
watch(autocompleteValue, (v) => console.log(v));
</script>

<template>
  <div class="info-container">
    <div class="info-container__wrapper">
      <VAutocomplete
        v-model="searchValue"
        v-model:select-value="autocompleteValue"
        :options="options"
        label="lol"
      >
        <template #default="{ key, display }">
          {{ key }}:{{ display }}
        </template>
      </VAutocomplete>
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
