<script setup lang="ts">
import { movie } from "@/composables/useMovies";
</script>

<template>
  <div class="movie__header">
    <h1>
      <strong>{{ movie.Title }}</strong>
    </h1>
    <h2>{{ movie.Year }}</h2>
  </div>
</template>

<style scoped>
.movie__header {
  background: linear-gradient(0deg, black 2.92%, rgba(0, 0, 0, 0.6875) 100%),
    white;
  color: white;
  padding-bottom: 3.75rem;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  padding-top: 10rem;
}

h1 {
  font-size: 2.25rem;
}

h2 {
  font-size: 1.5rem;
}
</style>
