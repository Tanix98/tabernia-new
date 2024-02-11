<template>
    <div>
        <input ref="el" type="text" placeholder="Name" v-model="userName"/>
        <div>
            <button 
            v-on:click="submitForm"
            v-bind:disabled="userName.length == 0"
            >Submit</button>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue'

    export default {
        setup() {
            const userName= ref('')
            const el = ref()

            const submitForm = () => {
                console.log(`Form submitted! User name = ${userName.value}`);
            }

            onMounted(() => {
                el.value.focus()
            })

            return {
                el,
                userName,
                submitForm,
            }
        },
    }
</script>