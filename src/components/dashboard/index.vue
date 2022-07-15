<script setup lang="ts">
import DashboardList from "./DashboardList.vue";
import DashboardPagination from "./DashboardPagination.vue";
import DashboardSearch from "./DashboardSearch.vue";
</script>

<template>
  <div class="dashboard">
    <DashboardSearch />

    <DashboardList />

    <DashboardPagination />
  </div>
</template>

<style scoped>
.dashboard {
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 25vw;
}
</style>
