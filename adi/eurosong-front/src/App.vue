<script setup>
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav>
      <RouterLink to="/">Home</RouterLink>&nbsp;
      <RouterLink to="/artists">Artists</RouterLink>&nbsp;
      <RouterLink to="/songs">Songs</RouterLink>&nbsp;
      <RouterLink to="/ranking">Ranking</RouterLink>&nbsp;
      <RouterLink to="/voting">Voting</RouterLink>&nbsp;
    </nav>

    <RouterView />
  </div>
</template>
