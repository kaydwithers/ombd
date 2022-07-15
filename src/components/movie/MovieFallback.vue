<template>
  <div class="movie__fallback">
    <h1>
      <strong>Please select a title from the sidebar</strong>
    </h1>
  </div>
</template>

<style scoped>
.movie__fallback {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.movie__fallback h1 {
  color: var(--neutral-400);
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
