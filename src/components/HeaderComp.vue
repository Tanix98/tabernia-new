<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Header',
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<template>
  <header class="z-10 bg-gray-950 text-white fixed w-full">
    <nav class="flex flex-col sm:flex-row gap-3 flex-wrap items-center p-3 max-w-[63rem]">
      <div class="flex flex-wrap justify-between w-full sm:w-auto">
        <RouterLink to="/"
          ><h1 class="text-2xl font-semibold text-blue-300 hover:text-blue-500 focus:text-blue-500">
            Tabernia
          </h1></RouterLink
        >
        <!-- Hamburger menu button -->
        <div @click="showMenu = !showMenu" class="flex ms-auto sm:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-300">
            <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Hamburger menu -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-grow ms-auto sm:ms-0 text-right font-bold flex-col mt-2 mb-2 gap-4 sm:flex sm:flex-row sm:items-center sm:mt-0 sm:mb-0"
      >
        <li class="text-gray-100 hover:text-blue-500">
          <RouterLink to="/" class="hover:underline focus:underline">Store</RouterLink>
        </li>
        <li class="text-gray-100 hover:text-blue-500">
          <RouterLink to="/contact" class="hover:underline focus:underline">Contact us</RouterLink>
        </li>
        <li class="ms-auto">
          <RouterLink to="/checkout" class="text-gray-100 hover:text-blue-500"
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
        </li>
      </ul>
    </nav>
  </header>
</template>
