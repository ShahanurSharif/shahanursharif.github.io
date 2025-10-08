<template>
  <div id="app" class="app">
    <a href="#main" class="skip-link">Skip to main content</a>
    <router-view />
  </div>
</template>

<script setup lang="ts">
// Dark theme is the default and only theme
</script>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--cyan);
  color: var(--ink);
  padding: 8px 16px;
  text-decoration: none;
  font-weight: 600;
  z-index: 1000;
}

.skip-link:focus {
  top: 0;
}
</style>
