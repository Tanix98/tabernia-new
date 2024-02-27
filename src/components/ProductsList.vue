<script setup>
import { ref } from 'vue'
import SearchProducts from './SearchProducts.vue'
import ProductsFilterSort from './ProductsFilterSort.vue'
import LoadingAnimation from './LoadingAnimation.vue'

const products = ref(null)

// Fetch list of products from API
fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => (products.value = data))
</script>

<template>
  <div>
    <h1 class="text-3xl">Products</h1>
    <SearchProducts />
    <ProductsFilterSort />
    <ul v-if="products" class="flex gap-5 flex-wrap">
      <li
        v-for="product in products"
        :key="product.id"
        class="z-0 group flex items-center flex-wrap flex-col"
      >
        <div class="pb-12 relative w-[200px] overflow-hidden p-2 flex flex-col">
          <router-link :to="{ path: '/product/' + product.id }">
            <div class="p-2 max-w-[300px] max-h-[300px] overflow-hidden">
              <img
                :src="product.image"
                :alt="product.title"
                class="hover:scale-105 group-focus:scale-105 transition duration-500 cursor-pointer h-44 m-auto object-contain shadow bg-white p-1"
              />
            </div>
            <h3 class="font-semibold line-clamp-3">{{ product.title }}</h3>
            <h3 class="">${{ product.price }}</h3>
          </router-link>
          <button
            class="p-2 bg-blue-600 text-white hidden absolute bottom-0 shadow-md w-full hover:bg-blue-700 focus:bg-blue-700 group-hover:block group-focus:block"
          >
            Add to cart
          </button>
        </div>
      </li>
    </ul>
    <div v-if="!products" class="text-center">
      <LoadingAnimation />
    </div>
  </div>
</template>
