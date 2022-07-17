<script setup lang="ts">
import {
  error,
  isMoviesLoading,
  movies,
  searchInput,
} from "@/composables/useMovies";

import DashboardListItem from "./DashboardListItem.vue";
</script>

<template>
  <p v-if="isMoviesLoading">Loading&hellip;</p>

  <p v-else-if="!isMoviesLoading && error">{{ error }}</p>

  <p
    v-else-if="
      !isMoviesLoading &&
      (!movies?.Search || movies?.Search.length === 0) &&
      searchInput
    "
  >
    No movies found.
  </p>

  <div v-else>
    <ul v-if="movies" class="dashboard-list">
      <DashboardListItem
        v-for="(item, index) in movies.Search"
        :key="index"
        :item="item"
      />
    </ul>
  </div>
</template>

<style scoped>
p {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>
