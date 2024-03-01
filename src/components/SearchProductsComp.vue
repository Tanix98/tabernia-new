<script>
import { ref } from 'vue'

const text = ref('')

const searchProductList = (e) => {
  console.log(e)
  console.log(text)
}

export default {
  name: 'SearchProducts'
}
</script>

<template>
  <div class="my-2 max-w-96 flex flex-nowrap">
    <input
      class="border-black border py-1 px-2 min-w-0"
      type="text"
      v-model="text"
      placeholder="Search"
    />
    <button class="bg-black border text-white py-1 px-2" @click="searchProductList">Search</button>
  </div>
</template>
