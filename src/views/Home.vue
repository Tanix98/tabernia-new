<template>
  <div class="p-3">
    <h1 class="text-3xl font-bold underline">Tabernia</h1>
    <p>Products will go here</p>
    <ExampleForm />
    <ProductsList />
  </div>
</template>

<script>
import ExampleForm from '../components/ExampleForm.vue'
import ProductsList from '../components/ProductsList.vue'

export default {
  components: {
    ExampleForm,
    ProductsList
  }
}
</script>
