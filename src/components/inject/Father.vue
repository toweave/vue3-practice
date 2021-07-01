<template>
  <div>
    <hr />
    <div>{{ $options.name }}</div>
    <Son></Son>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import Son from '@/components/inject/Son.vue'
  export interface Article {
    title: string
    author: string
  }
  export default defineComponent({
    inheritAttrs: false,
    name: 'Father',
    components: { Son },
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
