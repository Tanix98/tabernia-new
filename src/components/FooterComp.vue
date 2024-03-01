<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <div class="flex justify-center gap-2 flex-wrap px-3 py-6 bg-gray-500 text-white">
    <p>Copyright <span>©</span> {{ currentYear }} Tabernia.</p>
    <p>All rights reserved.</p>
  </div>
</template>
