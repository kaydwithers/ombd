<script setup lang="ts">
import { error, isMoviesLoading, movies } from "@/composables/useMovies";

import DashboardItem from "./DashboardItem.vue";
</script>

<template>
  <p v-if="isMoviesLoading">Loading&hellip;</p>

  <p v-else-if="!isMoviesLoading && error">{{ error }}</p>

  <p
    v-else-if="
      !isMoviesLoading && (!movies?.Search || movies?.Search.length === 0)
    "
  >
    Search for a movie above.
  </p>

  <div v-else>
    <ul class="dashboard-list">
      <DashboardItem
        v-for="(item, index) in movies?.Search"
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
