<script>
export default {
  name: 'ProductsFilterSort',
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
    <label for="sort-menu" class="mr-2">Sort by</label>
    <button @click="toggle" class="bg-amber-950 px-2 py-1 text-white" id="sort-menu">
      Price (low - high)
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
    <div class="flex gap-1 items-center">
      <input type="checkbox" id="in-stock" />
      <label for="in-stock">In stock</label>
    </div>
    <div class="flex gap-1 items-center">
      <input type="checkbox" id="apple" />
      <label for="apple">Apple</label>
    </div>
    <div class="flex gap-1 items-center">
      <input type="checkbox" id="huawei" />
      <label for="huawei">Huawei</label>
    </div>
    <div class="flex gap-1 items-center">
      <input type="checkbox" id="smartphones" />
      <label for="smartphones">Smartphones</label>
    </div>
    <div class="flex gap-1 items-center">
      <input type="checkbox" id="laptops" />
      <label for="laptops">Laptops</label>
    </div>
  </div>
</template>
