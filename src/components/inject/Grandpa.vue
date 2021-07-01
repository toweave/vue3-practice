<template>
  <div>
    <div>{{ $options.name }}</div>
    <div v-for="(item, index) in todos" :key="index">{{ item }}</div>
    <Father></Father>
  </div>
</template>

<script lang="ts">
  import Father from '@/components/inject/Father.vue'
  export interface Article {
    title: string
    author: string
  }
  import { ref, defineComponent, computed } from 'vue'
  export default defineComponent({
    inheritAttrs: false,
    name: 'Grandpa',
    components: { Father },
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
        message: '',
        todos: ['Feed a cat', 'Buy tickets']
      }
    },
    provide() {
      return {
        user: 'John Doe',
        todoLength: computed(() => this.todos.length)
      }
    },
    methods: {},
    mounted() {
      setInterval(() => {
        this.todos.push(`hello ${this.todos.length}`)
      }, 2000)
    }
  })
</script>

<style scoped></style>
