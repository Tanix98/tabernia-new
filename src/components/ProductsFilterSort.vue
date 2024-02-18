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
    <p>Filter / sort:</p>
    <label for="sort-menu" class="mr-2">Sort by</label>
    <button @click="toggle" class="bg-amber-900 px-2 py-1 rounded-lg text-white" id="sort-menu">
      Price (low - high)
    </button>
    <div v-if="active">Price (low - high)</div>
    <div v-if="active">Price (high - low)</div>
    <div v-if="active">Name (ascending)</div>
    <div v-if="active">Name (descending)</div>
    <div v-if="active">Rating</div>
    <div v-if="active">Discount</div>

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
