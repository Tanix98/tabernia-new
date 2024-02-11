<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/product">Product single</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
