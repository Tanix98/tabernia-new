<template>
  <div class="p-3">
    <h1 class="text-4xl font-bold">Our products</h1>
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList.vue'

export default {
  components: {
    ProductsList
  }
}
</script>
