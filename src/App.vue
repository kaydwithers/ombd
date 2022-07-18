<script setup lang="ts">
import { fetchMovies } from "@/composables/useMovies";

import Dashboard from "@/components/dashboard/index.vue";
import Movie from "@/components/movie/index.vue";

fetchMovies(true);
</script>

<template>
  <main>
    <Dashboard />
    <Movie />
  </main>
</template>

<style scoped>
main {
  display: flex;
}
</style>
