<template>
  <div class="inline-flex flex-col flex-wrap gap-4 mt-4">
    <div class="flex flex-col gap-3">
      <div class="flex gap-3 flex-wrap">
        <div class="flex flex-col gap-1">
          <label for="userName" class="font-medium">Name</label>
          <input
            ref="el"
            type="text"
            placeholder="Name"
            v-model="userName"
            id="userName"
            class="border-black border-2 p-1"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="userEmail" class="font-medium">Email</label>
          <input
            ref="el"
            type="email"
            placeholder="Email"
            v-model="userEmail"
            id="userEmail"
            class="border-black border-2 p-1"
          />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label for="userMessage" class="font-medium">Message</label>
        <textarea
          ref="el"
          placeholder="Message"
          v-model="userMessage"
          id="userMessage"
          class="border-black border-2 p-1"
          rows="4"
        ></textarea>
      </div>
    </div>
    <div>
      <button
        v-on:click="submitForm"
        v-bind:disabled="userName.length == 0"
        class="bg-blue-900 text-white py-2 px-5 hover:bg-blue-800 cursor-pointer"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const userName = ref('')
    const userEmail = ref('')
    const userMessage = ref('')
    const el = ref()

    const submitForm = () => {
      console.log(
        `Form submitted! Name: ${userName.value}, Email: ${userName.value}, Message: ${userName.value}`
      )
    }

    /*onMounted(() => {
      el.value.focus()
    })*/

    return {
      el,
      userName,
      userEmail,
      userMessage,
      submitForm
    }
  }
}
</script>
