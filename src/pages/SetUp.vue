<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <div>{{ counter }}</div>
  <div>{{ repositories }}</div>
  <div>test :: {{ test }}</div>
  <div>twiceTheCounter :: {{ twiceTheCounter }}</div>
  <button @click="handleCounter"> + </button>
</template>

<script lang="ts">
  import { ref, defineComponent, onMounted, computed, watch } from 'vue'
  import repository from '@/api/repositories'
  console.log(8, repository)

  const counter = ref(0)
  const twiceTheCounter = computed(() => counter.value * 2)

  counter.value++
  console.log(17, counter.value) // 1
  console.log(18, twiceTheCounter.value) // 2

  export default defineComponent({
    name: 'SetUp',
    props: {
      msg: {
        type: String,
        required: false,
        default: 'SetUp page'
      },
      user: {
        type: Array,
        required: false,
        default: []
      }
    },
    setup(props) {
      const counter = ref(0)
      console.log(counter) // { value: 0 }
      console.log(counter.value) // 0

      const repositories: any = ref([])
      const getUserRepositories = async () => {
        repositories.value = await repository.fetchUserRepositories(props.user)
        console.log(50, repositories.value)
      }
      watch(counter, (newValue, oldValue) => {
        console.log('The new counter value is: ' + counter.value)
      })
      onMounted(getUserRepositories) // 在 `mounted` 时调用 `getUserRepositories`
      return { counter, repositories, getUserRepositories }
    },
    data() {
      return {
        test: counter,
        twiceTheCounter: twiceTheCounter
      }
    },
    methods: {
      handleCounter(): void {
        console.log(41, this.counter)
        console.log(54, this.repositories)
        console.log(62, typeof this.repositories)
        this.repositories.forEach((element: any) => {
          console.log('element::', element)
        })
        // console.log(55, this.getUserRepositories())
        this.counter++
        this.test++
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
