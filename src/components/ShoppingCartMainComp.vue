<script setup>
import { ref } from 'vue'
import LoadingAnimation from './LoadingAnimationComp.vue'

const product = ref()

// Fetch single product from API
fetch('https://fakestoreapi.com/products/1')
  .then((response) => response.json())
  .then((data) => (product.value = data))
  .catch((error) => console.log('Error! ' + error))
</script>

<template>
  <div>
    <div class="" v-if="product">
      <div class="hidden md:flex justify-between text-2xl relative">
        <h2>Product</h2>
        <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Quantity
        </h2>
        <h2>Price</h2>
      </div>
      <hr class="hidden md:block border-1 border-black my-10" />
      <div class="flex flex-row flex-wrap gap-4 md:gap-8 md:flex-col mb-10">
        <div
          class="sm:max-w-72 md:max-w-full bg-white p-4 shadow-md flex flex-col md:flex-row justify-between relative"
        >
          <div class="flex flex-col md:flex-row gap-4 flex-wrap items-center">
            <img :src="product.image" alt="" class="h-64 md:h-32 object-contain shadow-lg p-1" />
            <p class="md:max-w-[180px] line-clamp-5 text-xl md:text-base">
              {{ product.title }}
            </p>
            <p class="block md:hidden text-lg" title="Price">$134</p>
          </div>
          <div
            class="flex items-center self-center my-5 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <button class="h-[2.1875rem] w-[2.1875rem] bg-blue-800 text-white">-</button>
            <p
              class="py-1 h-[2.1875rem] w-[2.1875rem] bg-white text-center align-middle border-b border-t border-black"
              title="Quantity"
            >
              2
            </p>
            <button class="h-[2.1875rem] w-[2.1875rem] bg-blue-800 text-white">+</button>
          </div>
          <div class="flex flex-col items-center md:items-end justify-center">
            <p class="hidden md:block" title="Price">$134</p>
            <button
              class="px-2 py-2 bg-red-700 text-white md:bg-transparent md:p-0 md:text-red-700 md:underline"
            >
              Remove item
            </button>
          </div>
        </div>
        <div
          class="sm:max-w-72 md:max-w-full bg-white p-4 shadow-md flex flex-col md:flex-row justify-between relative"
        >
          <div class="flex flex-col md:flex-row gap-4 flex-wrap items-center">
            <img :src="product.image" alt="" class="h-64 md:h-32 object-contain shadow-lg p-1" />
            <p class="md:max-w-[180px] line-clamp-5 text-xl md:text-base">
              {{ product.title }}
            </p>
            <p class="block md:hidden text-lg" title="Price">$134</p>
          </div>
          <div
            class="flex items-center self-center my-5 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <button class="h-[2.1875rem] w-[2.1875rem] bg-blue-800 text-white">-</button>
            <p
              class="py-1 h-[2.1875rem] w-[2.1875rem] bg-white text-center align-middle border-b border-t border-black"
              title="Quantity"
            >
              2
            </p>
            <button class="h-[2.1875rem] w-[2.1875rem] bg-blue-800 text-white">+</button>
          </div>
          <div class="flex flex-col items-center md:items-end justify-center">
            <p class="hidden md:flex" title="Price">$134</p>
            <button
              class="px-2 py-2 bg-red-700 text-white md:bg-transparent md:p-0 md:text-red-700 md:underline"
            >
              Remove item
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 justify-end">
        <div class="flex justify-between">
          <button
            class="bg-red-700 text-white px-4 py-2 shadow-md hover:bg-red-800 focus:bg-red-800"
          >
            Clear cart
          </button>
          <p class="text-xl">Subtotal: $249.75</p>
        </div>
        <button
          class="bg-green-700 text-white px-5 py-3 text-xl shadow-md ms-auto hover:bg-green-800 focus:bg-green-800"
        >
          Continue to checkout
        </button>
      </div>
    </div>
    <div v-if="!product" class="text-center">
      <LoadingAnimation />
    </div>
  </div>
</template>
