<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <input v-model.lazy="message" @input="hanldeInputEvent" @change="hanldeChangeEvent" placeholder="edit me" />
  <p>Message is: {{ message }}</p>
  <div>
    <select v-model="selected" placeholder="select one" style="width: 120px" multiple>
      <!-- <option value="">Please select one</option> -->
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <input v-model.number="age" type="number" />
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Model ',
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
        selected: ['A', 'B']
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
