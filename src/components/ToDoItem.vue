<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Hello',
    components: {},
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      }
    },
    emits: ['remove'],
    setup() {
      const count = ref(1000)
      return { count }
    },
    mounted() {
      console.log('hello')
    }
  })
</script>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
