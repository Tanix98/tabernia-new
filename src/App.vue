<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <RouterView class="grow p-3" />
    <Footer />
  </div>
</template>
