<script setup>
import { ref } from 'vue'
const products = ref(null)
fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => (products.value = data.products))
console.log(products)
</script>

<template>
  <div>
    <div class="card-body">
      <div v-if="products">
        <h2 class="text-2xl">Products</h2>
        <ul>
          <li v-for="product in products" :key="product.id" class="bg-teal-500 m-2 p-2">
            {{ product.title }}
          </li>
        </ul>
      </div>
      <div v-if="!products" class="text-center">
        <div class="spinner-border spinnder-border-sm"></div>
      </div>
    </div>
  </div>
</template>
