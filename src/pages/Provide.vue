<template>
  <div>{{ $options.name }}</div>
  <hr />
  <hr />
  <div>{{ article }}</div>
  <hr />
  <Grandpa></Grandpa>
</template>

<script lang="ts">
  import Grandpa from '@/components/inject/Grandpa.vue'
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Provide',
    components: { Grandpa },
    props: {
      msg: {
        type: String,
        required: false,
        default: 'model  page'
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    },
    data() {
      return {
        article: '123'
      }
    },
    methods: {
      submit(test: any) {
        console.log(43, test)
      },
      handleInputEvent(event: Event) {
        console.log(34, event)
      }
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
