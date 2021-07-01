<template>
  <div>
    <hr />
    <div>{{ $options.name }}</div>
    <hr />
    <div>{{ aliasTodoLength }}</div>
    <hr />
    <div>{{ aliasUser }}</div>
  </div>
</template>

<script lang="ts">
  export interface Article {
    title: string
    author: string
  }
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    inheritAttrs: false,
    name: 'Grandson',
    components: {},
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
    computed: {
      aliasUser(): string {
        // 我们很快就会看到 `params` 是什么
        return this?.user
      },
      aliasTodoLength(): number {
        return this?.todoLength?.value
      }
    },
    data() {
      return {
        // user: '',
        message: ''
      }
    },
    inject: ['user', 'todoLength'],
    methods: {},
    mounted() {
      console.log(`Injected property: ${this.user}`)
    }
  })
</script>

<style scoped></style>
