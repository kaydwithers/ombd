<script setup lang="ts">
import { fetchMovie, movie } from "@/composables/useMovies";

import type { MovieInterface } from "@/interfaces/movieInterface";

defineProps<{
  item: MovieInterface;
}>();

const clickHandler = (imdbID: string) => {
  fetchMovie(imdbID);
};
</script>

<template>
  <li
    class="dashboard-item"
    :class="{ 'is-active': item.imdbID === movie?.imdbID }"
  >
    <button @click="clickHandler(item.imdbID)">
      <img :src="item.Poster" :alt="item.Title" />

      <div class="content">
        <h4>
          <strong>{{ item.Title }}</strong>
        </h4>
        <p>{{ item.Year }}</p>
      </div>
    </button>
  </li>
</template>

<style scoped>
.dashboard-item {
  border-bottom-color: var(--neutral-400);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

button {
  display: flex;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  text-align: left;
  width: 100%;
}

.is-active button {
  background: linear-gradient(
    270deg,
    rgba(0, 78, 196, 0.17) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 4px 1px 0px var(--accent-500);
}

img {
  height: 3rem;
  margin-right: 0.875rem;
  object-fit: cover;
  width: 3rem;
}

.content {
  flex: 1 1 0%;
}

h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>
