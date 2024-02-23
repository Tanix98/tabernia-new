<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <Header />
    <RouterView class="grow p-3 max-w-[1000px] bg-gray-50" />
    <Footer />
  </div>
</template>
