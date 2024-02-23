<script>
export default {
  name: 'SearchProducts'
}
</script>

<template>
  <div class="my-2 flex flex-nowrap">
    <input class="border-black border py-1 px-2" type="text" v-model="input" placeholder="Search" />
    <button class="bg-black border text-white py-1 px-2">Search</button>
  </div>
</template>
