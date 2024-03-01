<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Header'
}
</script>

<template>
  <header class="z-10 bg-gray-950 text-white fixed w-full">
    <nav class="flex gap-3 flex-wrap items-center p-3 max-w-[63rem]">
      <RouterLink to="/"
        ><h1 class="text-2xl font-semibold text-blue-300 hover:text-blue-500 focus:text-blue-500">
          Tabernia
        </h1></RouterLink
      >
      <RouterLink to="/" class="hover:underline focus:underline">Store</RouterLink>
      <RouterLink to="/contact" class="hover:underline focus:underline">Contact us</RouterLink>
      <RouterLink to="/checkout" class="ms-auto hover:text-slate-200 focus:text-slate-200"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="bi bi-cart me-1 w-5 h-5"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      </RouterLink>
    </nav>
  </header>
</template>
