<script setup lang="ts">
import { useMovies } from "@/composables/useMovies";

import MovieFallback from "./MovieFallback.vue";
import MovieHeader from "./MovieHeader.vue";
import MovieInfo from "./MovieInfo.vue";
import MovieLoading from "./MovieLoading.vue";
import MovieSynopsis from "./MovieSynopsis.vue";

const { movie, isMovieLoading } = useMovies();
</script>

<template>
  <div class="movie">
    <MovieLoading v-if="isMovieLoading" />

    <MovieFallback v-else-if="!isMovieLoading && !movie" />

    <template v-else-if="movie">
      <MovieHeader :movie="movie" />

      <div class="movie__content">
        <MovieInfo :movie="movie" />
        <MovieSynopsis :movie="movie" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.movie {
  display: none;
  margin-left: 20rem;
}

.movie__content {
  display: flex;
  padding-bottom: 10rem;
  padding-left: 7.5rem;
  padding-right: 7.5rem;
  padding-top: 2.5rem;
}

@media (min-width: 1024px) {
  .movie {
    display: block;
    flex: 1 1 0%;
  }
}
</style>
