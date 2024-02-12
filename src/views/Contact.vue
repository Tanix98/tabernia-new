<template>
  <div class="p-3">
    <h1 class="text-4xl font-bold">Contact us</h1>
    <ContactForm />
    <ProductsList />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>
