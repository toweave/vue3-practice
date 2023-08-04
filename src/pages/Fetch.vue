<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <h2 :class="$attrs.class">{{ 'Fetch' }}</h2>
  <div>
    <button @click="greet0">greet0</button>
    <button @click="greet1">greet1</button>
    <button @click="greet2">greet2</button>
    <button @click="greet3">greet3</button>
    <button @click="greet4">greet4</button>
  </div>
  <div>
    <button @click="handler0">handler0</button>
    <button @click="handler1">handler1</button>
    <button @click="handler2">handler2</button>
    <button @click="handler3">handler3</button>
    <button @click="handler4">handler4</button>
  </div>
  <div>
    <button :disabled="!queue.is_completed" @click="greet0">Fetch ALL</button>
  </div>
  <div>
    queue :: {{ queue }}
  </div>
</template>

<script lang="ts">
  console.log('Fetch ---')
  import { ref, defineComponent } from 'vue'
  import { fetchSomethingWithTime, fetchSomethingWithTime1, fetchSomethingWithTime2 } from '@/api/repositories'
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
      async greet0(event) {
        const request = this.queue.withUniqueId(fetchSomethingWithTime);
        const res = await request(0);
        console.log('greet res ==', res)
      },
      async greet1(event) {
        const request = this.queue.withUniqueId(fetchSomethingWithTime1);
        const res = await request(1);
        console.log('greet1 res ==', res)
      },
      async greet2(event) {
        const request = this.queue.withUniqueId(fetchSomethingWithTime2);
        const res = await request(2);
        console.log('greet2 res ==', res)
      },
      async greet3(event) {
        const request = this.queue.withUniqueId(fetchSomethingWithTime2);
        const res = await request(3);
        console.log('greet2 res ==', res)
      },
      async greet4(event) {
        const request = this.queue.withUniqueId(fetchSomethingWithTime2);
        const res = await request(4);
        console.log('greet2 res ==', res)
      },
      async handler0(event) {
        // 方法中的 `this` 指向当前活跃的组件实例
        const res = await this.queue.subscribe(fetchSomethingWithTime, 10);
        console.log('handler0 res ==', res)
      },
      async handler1(event) {
        const res = await this.queue.subscribe(fetchSomethingWithTime, 20);
        console.log('handler1 res ==', res)
      },
      async handler2(event) {
        const res = await this.queue.subscribe(fetchSomethingWithTime, 30);
        console.log('handler2 res ==', res)
      },
      async handler3(event) {
        const res = await this.queue.subscribe(fetchSomethingWithTime, 40);
        console.log('handler3 res ==', res)
      },
      async handler4(event) {
        const res = await this.queue.subscribe(fetchSomethingWithTime, 50);
        console.log('handler4 res ==', res)
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
