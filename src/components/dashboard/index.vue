<script setup lang="ts">
import DashboardInput from "./DashboardInput.vue";
import DashboardList from "./DashboardList.vue";
import DashboardPagination from "./DashboardPagination.vue";
</script>

<template>
  <aside class="dashboard">
    <DashboardInput />
    <DashboardList />
    <DashboardPagination />
  </aside>
</template>

<style scoped>
.dashboard {
  background-color: white;
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  width: 100%;
}

@media (min-width: 1024px) {
  .dashboard {
    width: 20rem;
  }
}
</style>
