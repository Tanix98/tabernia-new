<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderComp.vue'
import Footer from './components/FooterComp.vue'
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-50">
    <Header />
    <RouterView class="grow p-3 pt-20 pb-16" />
    <Footer />
  </div>
</template>
