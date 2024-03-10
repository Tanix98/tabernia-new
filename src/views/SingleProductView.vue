<script setup>
import LoadingAnimation from '@/components/LoadingAnimationComp.vue'
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
  <div class="max-w-[43rem]">
    <div v-if="product">
      <div class="flex flex-col sm:flex-row gap-7 mb-4 sm:m-4">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-[28rem] m-auto sm:m-0 sm:w-[19rem] sm:h-[19rem] object-contain shadow-lg p-3 mt-2 bg-white"
        />
        <div class="sm:max-w-96 inline-flex flex-col gap-2">
          <h1 class="font-Nunito font-extrabold text-3xl">${{ product.price }}</h1>
          <h2 class="font-Nunito font-semibold text-lg">{{ product.title }}</h2>
          <button
            class="mt-2 sm:mt-0 sm:w-full p-2 px-4 bg-blue-600 text-white shadow-md hover:bg-blue-700 focus:bg-blue-700"
          >
            Add to cart
          </button>
          <div class="block sm:hidden my-2">
            <h3 class="font-Nunito font-bold text-2xl">Description</h3>
            <p>
              {{ product.description[0].toUpperCase() + product.description.slice(1) }}
            </p>
          </div>
          <p>
            Category:
            <RouterLink to="/" class="text-sm underline text-gray-600" title="Category">{{
              product.category
            }}</RouterLink>
          </p>
          <hr class="border-1 border-black my-1" />
          <p>Rating: {{ product.rating.rate }} stars</p>
          <p>{{ product.rating.count }} reviews</p>
        </div>
      </div>
      <div class="hidden sm:block mt-8">
        <h3 class="font-Nunito font-bold text-2xl">Description</h3>
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
