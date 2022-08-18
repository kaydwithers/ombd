<script setup lang="ts">
import { computed } from "vue";

import { fetchMovies, movies, pageIndex } from "@/composables/useMovies";

const totalPages = computed(() => {
  if (movies.value && movies.value.Search) {
    return Math.ceil(Number(movies.value.totalResults) / 10);
  } else {
    return 0;
  }
});

const handleIncrement = (subtract = false) => {
  if (subtract) {
    pageIndex.value -= 1;
  } else {
    pageIndex.value += 1;
  }

  fetchMovies(true);
};
</script>

<template>
  <div v-if="totalPages > 1" class="dashboard-pagination">
    <button :disabled="pageIndex <= 1" @click="handleIncrement(true)">◂</button>

    <p>Page {{ pageIndex }}/{{ totalPages }}</p>

    <button :disabled="pageIndex === totalPages" @click="handleIncrement()">
      ▸
    </button>
  </div>
</template>

<style scoped>
.dashboard-pagination {
  align-items: center;
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1rem;
}

button {
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  color: var(--neutral-400);
  height: 1.75rem;
  width: 1.75rem;
}

button:disabled {
  opacity: 0.5;
}
</style>
