<template>
  <hr />
  <div>{{ $options.name }}</div>
  <Grandson></Grandson>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import Grandson from '@/components/inject/Grandson.vue'
  export interface Article {
    title: string
    author: string
  }
  export default defineComponent({
    inheritAttrs: false,
    name: 'Son',
    components: { Grandson },
    props: {
      title: {
        type: String,
        required: false,
        default: 'toweave'
      }
    },
    setup() {
      const count = ref(1000)
      return { count }
    },
    data() {
      return {
        message: ''
      }
    },
    methods: {},
    mounted() {}
  })
</script>

<style scoped></style>
