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
  <div class="dashboard-list">
    <p v-if="isMoviesLoading">Loading&hellip;</p>

    <p v-else-if="!isMoviesLoading && error">
      <span v-if="searchInput">{{ error }}</span>
    </p>

    <p
      v-else-if="
        !isMoviesLoading &&
        (!movies || !movies.Search || movies.Search.length === 0) &&
        searchInput
      "
    >
      No movies found.
    </p>

    <div v-else>
      <ul class="dashboard-list">
        <DashboardListItem
          v-for="(item, index) in movies?.Search"
          :key="index"
          :item="item"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.dashboard-list {
  border-top-color: var(--accent-500);
  border-top-style: solid;
  border-top-width: 1px;
  margin-bottom: 3.25rem;
}

p {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
}
</style>
