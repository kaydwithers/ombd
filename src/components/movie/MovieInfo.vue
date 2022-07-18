<script setup lang="ts">
import type { MovieInterface } from "@/interfaces/movieInterface";

const props = defineProps<{
  movie: MovieInterface;
}>();

const getFormattedActors = () => {
  return props.movie?.Actors.split(",");
};
</script>

<template>
  <div class="movie-info">
    <img
      :src="movie.Poster"
      :alt="movie.Title"
      onerror="this.style.display='none'"
    />

    <div class="summary">
      <div class="language">
        <h5><strong>Language</strong></h5>
        <p>{{ movie.Language }}</p>
      </div>

      <div class="duration">
        <h5><strong>Duration</strong></h5>
        <p>{{ movie.Runtime }}</p>
      </div>

      <div class="cast">
        <h5><strong>Cast</strong></h5>
        <p v-for="(actor, index) in getFormattedActors()" :key="index">
          {{ actor }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-info {
  width: 12rem;
}

img {
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
}

.summary {
  border-color: var(--neutral-400);
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-wrap: wrap;
}

.duration,
.language,
.cast {
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
}

.duration,
.language {
  flex: 1 1 0%;
}

.language {
  border-right-color: var(--neutral-400);
  border-right-style: solid;
  border-right-width: 1px;
}

.cast {
  border-top-color: var(--neutral-400);
  border-top-style: solid;
  border-top-width: 1px;
  width: 100%;
}

h5 {
  color: var(--neutral-600);
  font-size: 0.75rem;
  text-transform: uppercase;
}

p {
  font-size: 0.875rem;
}
</style>
