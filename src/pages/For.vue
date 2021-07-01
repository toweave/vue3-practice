<template>
  <div>{{ $options.name }}</div>
  <hr />
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input v-model="newTodoText" id="new-todo" placeholder="E.g. Feed the cat" />
    <button>Add</button>
  </form>
  <ul>
    <to-do-item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :title="todo.title"
      @remove="todos.splice(index, 1)"
    ></to-do-item>
  </ul>
  <hr />
  <div>
    <button @click="greet">Greet</button>
  </div>
  <div>
    <button @click="one($event), two($event)">Submit</button>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import ToDoItem from '@/components/ToDoItem.vue'
  export default defineComponent({
    name: 'For',
    components: { ToDoItem },
    props: {
      msg: {
        type: String,
        required: false,
        default: 'Test page'
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    },
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      greet(event: Event) {
        // `methods` 内部的 `this` 指向当前活动实例
        console.log(event?.target)
        console.log(this)
        alert('Hello ' + this?.count + '!')
        // `event` 是原生 DOM event
        if (event) {
          event?.target?.addEventListener(
            'hover',
            () => {
              console.log(70)
            },
            false
          )
        }
      },
      addNewTodo() {
        if (this.newTodoText) {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          })
        }
        this.newTodoText = ''
      },
      one(event: Event) {
        // 第一个事件处理器逻辑...
        console.log('one::', event)
      },
      two(event: Event) {
        // 第二个事件处理器逻辑...
        console.log('two::', event)
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
