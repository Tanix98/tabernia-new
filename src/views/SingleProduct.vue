<script setup>
import LoadingAnimation from '@/components/LoadingAnimation.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref()

// Fetch single product from API
fetch('https://fakestoreapi.com/products/' + route.params.id)
  .then((response) => response.json())
  .then((data) => (product.value = data))
  .catch((error) => console.log('Error! ' + error))
</script>

<template>
  <div>
    <div v-if="product" class="max-w-[700px]">
      <div class="flex gap-7 m-4">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-[300px] h-[300px] object-contain shadow-lg p-3 mt-2 bg-white"
        />
        <div class="inline-flex flex-col gap-2">
          <h1 class="text-2xl">{{ product.title }}</h1>
          <h2 class="text-lg">${{ product.price }}</h2>
          <button
            class="w-44 p-2 px-4 bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:bg-blue-700"
          >
            Add to cart
          </button>
          <p>
            Category:
            <RouterLink to="/" class="text-sm underline text-gray-600" title="Category">{{
              product.category
            }}</RouterLink>
          </p>
          <hr class="border-1 border-black my-2" />
          <p>Rating: {{ product.rating.rate }} stars</p>
          <p>{{ product.rating.count }} reviews</p>
        </div>
      </div>
      <div>
        <p>
          {{ product.description[0].toUpperCase() + product.description.slice(1) }}
        </p>
      </div>
    </div>
    <div v-if="!product" class="text-center">
      <LoadingAnimation />
    </div>
  </div>
</template>
