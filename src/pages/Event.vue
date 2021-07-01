<template>
  <div>{{ $options.name }}</div>
  <hr />
  <hr />
  <div>{{ article }}</div>
  <CustomForm @submit="submit"></CustomForm>
</template>

<script lang="ts">
  import CustomForm from '@/components/CustomForm.vue'
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Event',
    components: { CustomForm },
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
      },
      submit(test: any) {
        console.log(43, test)
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
