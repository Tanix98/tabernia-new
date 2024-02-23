<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Header'
}
</script>

<template>
  <header class="p-3 bg-gray-950 text-white">
    <div>
      <nav class="flex gap-3 items-end">
        <RouterLink to="/"
          ><h1 class="text-2xl font-semibold hover:text-slate-200">Tabernia</h1></RouterLink
        >
        <RouterLink to="/" class="hover:text-slate-200">Store</RouterLink>
        <RouterLink to="/contact" class="hover:text-slate-200">Contact us</RouterLink>
      </nav>
    </div>
  </header>
</template>
