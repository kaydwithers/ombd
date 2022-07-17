<script setup lang="ts">
import DashboardInput from "./DashboardInput.vue";
import DashboardList from "./DashboardList.vue";
import DashboardPagination from "./DashboardPagination.vue";
</script>

<template>
  <aside>
    <DashboardInput />
    <DashboardList />
    <DashboardPagination />
  </aside>
</template>

<style scoped>
aside {
  box-shadow: 2px 4px 12px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

@media (min-width: 1024px) {
  aside {
    width: 20rem;
  }
}
</style>
