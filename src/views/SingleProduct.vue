<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref()

fetch('https://dummyjson.com/products/' + route.params.id)
  .then((response) => response.json())
  .then((data) => (product.value = data))
  .catch((error) => console.log('Error! ' + error))
</script>

<template>
  <div v-if="product" class="p-3">
    <h1 class="text-3xl">{{ product.title }}</h1>
    <h2 class="text-2xl">${{ product.price }}</h2>
    <img :src="product.images[0]" :alt="product.title" />
    <p>{{ product.description }}</p>
  </div>
</template>
