<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Test',
    props: {
      msg: {
        type: String,
        required: false,
        default: 'Test page'
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    }
  })
</script>

<style lang="scss" scoped></style>
