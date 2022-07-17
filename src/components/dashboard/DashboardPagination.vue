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

const incrementHandler = (subtract = false) => {
  if (subtract) {
    pageIndex.value -= 1;
  } else {
    pageIndex.value += 1;
  }

  fetchMovies(true);
};
</script>

<template>
  <section v-if="totalPages > 1">
    <button :disabled="pageIndex <= 1" @click="incrementHandler(true)">
      ◂
    </button>

    <p>Page {{ pageIndex }}/{{ totalPages }}</p>

    <button :disabled="pageIndex === totalPages" @click="incrementHandler()">
      ▸
    </button>
  </section>
</template>

<style scoped>
section {
  align-items: center;
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
