<template>
  <input type="text" :value="title" @input="$emit('update:title', $event.target.value)" />
</template>

<script lang="ts">
  export interface Article {
    title: string
    author: string
  }
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    inheritAttrs: false,
    name: 'CustomInput',
    components: {},
    props: {
      title: {
        type: String,
        required: false,
        default: 'toweave'
      }
    },
    emits: ['update:title'],
    setup() {
      const count = ref(1000)
      return { count }
    },
    data() {
      return {
        message: '',
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm(email: string, password: string) {
        console.log(64, email, password)
      }
    },
    mounted() {}
  })
</script>

<style scoped></style>
