<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-3">
    <div>
      <nav class="flex gap-3">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">Product single</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
