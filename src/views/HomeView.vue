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
  <div class="max-w-[78rem]">
    <h1 class="font-Nunito font-extrabold text-3xl md:ms-72 mb-6">Products</h1>
    <div class="md:flex gap-4">
      <div class="md:fixed">
        <SearchProductsComp />
        <ProductsFilterSortComp />
      </div>
      <ProductsListComp class="md:ms-72" />
    </div>
  </div>
</template>
