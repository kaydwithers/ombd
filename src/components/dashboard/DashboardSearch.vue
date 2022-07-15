<script setup lang="ts">
import { resetData, fetchMovies, searchInput } from "@/composables/useMovies";

import IconSearch from "@/components/icons/IconSearch.vue";
import IconX from "@/components/icons/IconX.vue";

const clearInputHandler = () => {
  resetData();
};

const searchHandler = () => {
  fetchMovies();
};
</script>

<template>
  <div class="dashboard-search">
    <div class="dashboard-search__input">
      <input
        v-model="searchInput"
        placeholder="Search here"
        type="text"
        @input="searchHandler"
      />

      <div class="icon">
        <button v-if="searchInput" @click="clearInputHandler">
          <IconX aria-hidden="true" />
        </button>

        <IconSearch v-else aria-hidden="true" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-search {
  display: flex;
  padding-bottom: 2.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2.5rem;
}

.dashboard-search__input {
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
}

input {
  border-color: var(--neutral-400);
  border-style: solid;
  border-radius: 0.5rem;
  border-width: 1px;
  padding-bottom: 0.875rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.875rem;
  width: 100%;
}

.icon {
  align-items: center;
  bottom: 0;
  display: flex;
  margin-right: 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
}

.icon svg {
  color: var(--neutral-400);
  height: 1.5rem;
  width: 1.5rem;
}

button {
  display: flex;
}
</style>
