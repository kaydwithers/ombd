<script setup lang="ts">
import { movie } from "@/composables/useMovies";
</script>

<template>
  <div class="movie-synopsis">
    <h4><strong>Synopsis</strong></h4>
    <p>{{ movie.Plot }}</p>
  </div>
</template>

<style scoped>
.movie-synopsis {
  flex: 1 1 0%;
  margin-left: 2.5rem;
}

h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 0.5rem;
}
</style>
