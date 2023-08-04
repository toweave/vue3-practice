<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <h2 :class="$attrs.class">{{ 'Fetch' }}</h2>
  <div>
    <button @click="greet">greet</button>
    <button @click="greet1">greet1</button>
    <button @click="greet2">greet2</button>
  </div>
  <div>
    <button @click="greet">Fetch ALL</button>
  </div>
  <div>
    queue :: {{ queue }}
  </div>
</template>

<script lang="ts">
  console.log('Fetch ---')
  import { ref, defineComponent } from 'vue'
  import { fetchSomethingWithTime,fetchSomethingWithTime1, fetchSomethingWithTime2 } from '@/api/repositories'
  import { Queue } from '@/utils/queue'
  // const queue = new Queue();
  export default defineComponent({
    name: 'Fetch',
    props: {
      msg: {
        type: String,
        required: false,
        default: 'Fetch page'
      }
    },
    data() {
      return {
        name: 'Vue.js',
        queue: new Queue()
      }
    },
    methods: {
      async greet_bak(event) {
        // 方法中的 `this` 指向当前活跃的组件实例
        console.log(event)
        const fn_id = Date.now();
        this.queue.subscribe(fn_id);
        const t = await fetchSomethingWithTime(null, fn_id)
        console.log('t ==', t)
        this.queue.unsubscribe(t.fn_id);
      },
      async greet(event) {
        // 方法中的 `this` 指向当前活跃的组件实例
        // console.log(event)
        const res = await this.queue.subscribe(fetchSomethingWithTime);
        console.log('greet res ==', res)
      },
      async greet1(event) {
        // 方法中的 `this` 指向当前活跃的组件实例
        // console.log(event)
        const res = await this.queue.subscribe(fetchSomethingWithTime1);
        console.log('greet1 res ==', res)
      },
      async greet2(event) {
        // 方法中的 `this` 指向当前活跃的组件实例
        // console.log(event)
        const res = await this.queue.subscribe(fetchSomethingWithTime2);
        console.log('greet2 res ==', res)
      }
    },
    setup: () => {
      console.log('setup Fetch ---')
      const count = ref(0)
      return { count }
    },
    mounted() {
      console.log('Fetch')
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
