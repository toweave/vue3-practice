import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ToDoItem from '@/components/ToDoItem.vue'

const app = createApp(App)

console.log('app::', app)
console.log('router::', router)

app.component('ToDoItem', ToDoItem)

app.use(router)
app.mount('#app')
