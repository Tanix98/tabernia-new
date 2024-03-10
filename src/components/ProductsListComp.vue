<script setup>
import { ref } from 'vue'
import LoadingAnimation from './LoadingAnimationComp.vue'

const products = ref(null)

// Fetch list of products from API
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => (products.value = data))
</script>

<template>
  <div>
    <div class="hidden p-3 w-full bg-white shadow-lg min-h-40">
      <h2 class="font-Nunito font-bold text-2xl">Men's clothing</h2>
      <ul></ul>
    </div>
    <ul v-if="products" class="flex justify-center sm:justify-normal flex-wrap">
      <li
        v-for="product in products"
        :key="product.id"
        class="break-all sm:break-normal flex items-center flex-wrap flex-col"
      >
        <div class="pb-12 relative max-w-72 sm:w-52 overflow-hidden p-2 flex flex-col">
          <router-link :to="{ path: '/product/' + product.id }">
            <div class="p-2 sm:max-w-[19rem] sm:max-h-[19rem] overflow-hidden">
              <img
                :src="product.image"
                :alt="product.title"
                class="hover:scale-105 group-focus:scale-105 transition duration-500 cursor-pointer max-h-64 sm:h-44 md:max-w-44 m-auto object-contain shadow bg-white p-1"
              />
            </div>
            <p class="line-clamp-3">{{ product.title }}</p>
            <h3 class="font-Nunito font-bold">${{ product.price }}</h3>
          </router-link>
        </div>
      </li>
    </ul>
    <div v-if="!products" class="text-center">
      <LoadingAnimation />
    </div>
  </div>
</template>
