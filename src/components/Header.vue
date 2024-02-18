<script>
import SearchProducts from './SearchProducts.vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'Header'
}
</script>

<template>
  <header class="p-3 bg-blue-700 text-white">
    <div>
      <nav class="flex gap-3 items-end">
        <RouterLink to="/"
          ><h1 class="text-2xl font-semibold hover:text-slate-200">Tabernia</h1></RouterLink
        >
        <RouterLink to="/contact" class="hover:text-slate-200">Contact</RouterLink>
        <SearchProducts />
      </nav>
    </div>
  </header>
</template>
