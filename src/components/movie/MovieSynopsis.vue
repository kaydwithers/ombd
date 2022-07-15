<script setup lang="ts">
import type { MovieInterface } from "@/interfaces/movieInterface";

defineProps<{
  movie: MovieInterface;
}>();
</script>

<template>
  <div class="movie__synopsis">
    <h4><strong>Synopsis</strong></h4>
    <p>{{ movie?.Plot }}</p>
  </div>
</template>

<style scoped>
.movie__synopsis {
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
