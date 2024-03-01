<script>
export default {
  props: {
    productId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      products: [],
      isLoading: true
    }
  },
  async mounted() {
    try {
      // Fetch data from the API
      const response = await fetch(`https://fakestoreapi.com/products/${this.productId}`)
      this.products = await response.json()
      this.isLoading = false
    } catch (error) {
      console.error('Error fetching product data: ', error)
    }
  }
}
</script>
