<!-- src/App.vue -->
<template>
  <router-view />
</template>

<script setup>
// Không cần import gì ở đây nếu chỉ hiển thị router-view
</script>

<style scoped>
.logo {
  height: 6em;
 
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>