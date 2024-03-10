<script>
export default {
  name: 'ProductsFilterSortComp',
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    }
  }
}

/**
 * Change to make category checkboxes generate
 * based on the amount of unique categories
 * from api
 */
</script>

<template>
  <div>
    <button @click="toggle" class="flex gap-2 bg-amber-950 px-2 py-1 text-white" id="sort-menu">
      <p>Sort by: Price (low - high)</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
    <ul class="flex flex-col gap-1 max-w-40 mt-1">
      <li v-if="active" class="py-1 px-2 hover:bg-white cursor-pointer">Price (low - high)</li>
      <li v-if="active" class="py-1 px-2 hover:bg-white cursor-pointer">Price (high - low)</li>
      <li v-if="active" class="py-1 px-2 hover:bg-white cursor-pointer">Name (ascending)</li>
      <li v-if="active" class="py-1 px-2 hover:bg-white cursor-pointer">Name (descending)</li>
      <li v-if="active" class="py-1 px-2 hover:bg-white cursor-pointer">Rating</li>
      <li v-if="active" class="py-1 px-2 hover:bg-white cursor-pointer">Discount</li>
    </ul>
    <p>Filter by:</p>
    <ul class="break-all">
      <li class="flex gap-1 items-center">
        <input type="checkbox" id="in-stock" />
        <label for="in-stock">In stock</label>
      </li>
      <li class="flex gap-1 items-center">
        <input type="checkbox" id="apple" />
        <label for="apple">Apple</label>
      </li>
      <li class="flex gap-1 items-center">
        <input type="checkbox" id="huawei" />
        <label for="huawei">Huawei</label>
      </li>
      <li class="flex gap-1 items-center">
        <input type="checkbox" id="smartphones" />
        <label for="smartphones">Smartphones</label>
      </li>
      <li class="flex gap-1 items-center">
        <input type="checkbox" id="laptops" />
        <label for="laptops">Laptops</label>
      </li>
    </ul>
  </div>
</template>
