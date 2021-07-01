<template>
  <div>{{ $options.name }}</div>
  <hr />
  <ToDoItem title="123456789"></ToDoItem>
  <hr />
  <div>{{ article }}</div>
  <Prop :article="article" creator="456"></Prop>
</template>

<script lang="ts">
  import Prop from '@/components/Prop.vue'
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Model ',
    components: { Prop },
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
        message: '',
        age: null,
        selected: ['A', 'B'],
        article: {
          title: '中国',
          author: 'liz'
        }
      }
    },
    methods: {
      hanldeInputEvent(event: Event) {
        console.log(29, event)
        if (event?.type === 'input') {
          console.log('input::', event)
        }
      },
      hanldeChangeEvent(event: Event) {
        console.log(45, event)
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
