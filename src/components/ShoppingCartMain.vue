<script setup>
import { ref } from 'vue'
import LoadingAnimation from './LoadingAnimation.vue'

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
      <div class="text-2xl flex justify-between relative">
        <h2>Product</h2>
        <h2 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Quantity
        </h2>
        <h2>Price</h2>
      </div>
      <hr class="border-1 border-black my-10" />
      <div class="flex flex-col gap-6 mb-10">
        <div class="bg-white p-4 shadow-md w-full flex justify-between relative">
          <div class="flex gap-4 flex-wrap items-center">
            <img :src="product.image" alt="" class="h-[130px] object-contain shadow-lg p-1" />
            <p class="max-w-[180px] line-clamp-5">
              {{ product.title }}
            </p>
          </div>
          <div
            class="flex items-center self-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          <div class="flex flex-col items-end justify-center">
            <p title="Price">$134</p>
            <button class="text-red-700 underline">Remove item</button>
          </div>
        </div>
        <div class="bg-white p-4 shadow-md w-full flex justify-between relative">
          <div class="flex gap-4 flex-wrap items-center">
            <img :src="product.image" alt="" class="h-[130px] object-contain shadow-lg p-1" />
            <p class="max-w-[180px] line-clamp-5">
              {{ product.title }}
            </p>
          </div>
          <div
            class="flex items-center self-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          <div class="flex flex-col items-end justify-center">
            <p title="Price">$134</p>
            <button class="text-red-700 underline">Remove item</button>
          </div>
        </div>
        <div class="bg-white p-4 shadow-md w-full flex justify-between relative">
          <div class="flex gap-4 flex-wrap items-center">
            <img :src="product.image" alt="" class="h-[130px] object-contain shadow-lg p-1" />
            <p class="max-w-[180px] line-clamp-5">
              {{ product.title }}
            </p>
          </div>
          <div
            class="flex items-center self-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
          <div class="flex flex-col items-end justify-center">
            <p title="Price">$134</p>
            <button class="text-red-700 underline">Remove item</button>
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
