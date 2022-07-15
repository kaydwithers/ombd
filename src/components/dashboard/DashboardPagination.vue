<script setup lang="ts">
import { computed } from "vue";

import { fetchMovies, movies, pageIndex } from "@/composables/useMovies";

const totalPages = computed(() => {
  return Math.round(Number(movies.value?.totalResults) / 10);
});

const increment = (subtract = false) => {
  if (subtract) {
    pageIndex.value -= 1;
  } else {
    pageIndex.value += 1;
  }

  fetchMovies();
};
</script>

<template>
  <div
    v-if="movies?.Search && movies?.Search.length"
    class="dashboard-pagination"
  >
    <button class="arrow" :disabled="pageIndex <= 1" @click="increment(true)">
      ◂
    </button>

    <p>Page {{ pageIndex }}/{{ totalPages }}</p>

    <button
      class="arrow"
      :disabled="pageIndex === totalPages"
      @click="increment()"
    >
      ▸
    </button>
  </div>
</template>

<style scoped>
.dashboard-pagination {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding-bottom: 1rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1rem;
}

.arrow {
  border-radius: 0.25rem;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  color: var(--neutral-400);
  height: 1.75rem;
  width: 1.75rem;
}
</style>
