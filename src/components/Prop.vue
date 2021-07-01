<template>
  <div>
    <div>{{ creator }}</div>
    <div>
      <input v-model="creator" type="text" />
    </div>
  </div>

  <div>
    <ul>
      <li>{{ article.title }}</li>
      <li>{{ article.author }}</li>
    </ul>
    <div>
      <input v-model="article.author" type="text" />
    </div>
  </div>
</template>

<script lang="ts">
  export interface Article {
    title: string
    author: string
  }
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Prop',
    components: {},
    props: {
      creator: {
        type: String,
        required: false,
        default: 'toweave'
      },
      article: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    // emits: ['remove'],
    setup() {
      const count = ref(1000)
      return { count }
    },
    mounted() {}
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
