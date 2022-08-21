<script setup lang="ts">
import { useMovies } from "@/composables/useMovies";

import type { MovieInterface } from "@/interfaces/movieInterface";

const { fetchMovie, movie } = useMovies();

defineProps<{
  item: MovieInterface;
}>();

const handleClick = (imdbID: string) => {
  fetchMovie(imdbID);
};
</script>

<template>
  <li
    class="dashboard-list-item"
    :class="{ 'is-active': item.imdbID === movie?.imdbID }"
  >
    <button @click="handleClick(item.imdbID)">
      <div class="image">
        <img
          :src="item.Poster"
          :alt="item.Title"
          onerror="this.style.display='none'"
        />
      </div>

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
.dashboard-list-item {
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
  box-shadow: inset 4px 0px 0px var(--accent-500);
}

.image {
  background-color: var(--neutral-200);
  height: 3rem;
  margin-right: 0.875rem;
  object-fit: cover;
  width: 3rem;
}

img {
  height: 100%;
  margin-right: 0.875rem;
  object-fit: cover;
  width: 100%;
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
