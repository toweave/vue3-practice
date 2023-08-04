<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <h2 :class="$attrs.class">{{ 'About' }}</h2>
</template>

<script lang="ts">
  console.log('about ---')
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'About',
    props: {
      msg: {
        type: String,
        required: false,
        default: 'about page'
      }
    },
    setup: () => {
      console.log('setup about ---')
      const count = ref(0)
      return { count }
    },
    mounted() {
      console.log('about')
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
