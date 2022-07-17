<script setup lang="ts">
import DashboardInput from "./DashboardInput.vue";
import DashboardList from "./DashboardList.vue";
import DashboardPagination from "./DashboardPagination.vue";
</script>

<template>
  <div class="dashboard">
    <DashboardInput />
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
  width: 70vw;
}

@media (min-width: 1024px) {
  .dashboard {
    width: 25vw;
  }
}
</style>
