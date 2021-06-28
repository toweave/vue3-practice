<template>
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
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import ToDoItem from '@/components/ToDoItem.vue'
  import func from '../../vue-temp/vue-editor-bridge'
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
      addNewTodo() {
        if (this.newTodoText) {
          this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
          })
        }
        this.newTodoText = ''
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
