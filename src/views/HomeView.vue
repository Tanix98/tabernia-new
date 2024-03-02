<script>
import SearchProductsComp from '@/components/SearchProductsComp.vue'
import ProductsFilterSortComp from '@/components/ProductsFilterSortComp.vue'
import ProductsListComp from '@/components/ProductsListComp.vue'

export default {
  components: {
    SearchProductsComp,
    ProductsFilterSortComp,
    ProductsListComp
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-semibold lg:ms-72 mb-6">Products</h1>
    <div class="lg:flex gap-4">
      <div class="lg:fixed">
        <SearchProductsComp />
        <ProductsFilterSortComp />
      </div>
      <ProductsListComp class="lg:ms-72" />
    </div>
  </div>
</template>
