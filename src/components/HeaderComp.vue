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
    <nav class="flex flex-col sm:flex-row gap-3 flex-wrap items-center p-3 max-w-[78rem]">
      <div class="flex flex-wrap justify-between w-full sm:w-auto">
        <RouterLink to="/"
          ><h1 class="text-2xl font-semibold text-blue-300 hover:text-blue-500 focus:text-blue-500">
            Tabernia
          </h1></RouterLink
        >
        <!-- Hamburger menu button -->
        <div @click="showMenu = !showMenu" class="flex ms-auto sm:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-7 h-7"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Hamburger menu -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-grow text-lg text-right ms-auto sm:ms-0 flex-col mt-2 mb-2 gap-4 sm:flex sm:flex-row sm:items-center sm:mt-0 sm:mb-0"
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
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
