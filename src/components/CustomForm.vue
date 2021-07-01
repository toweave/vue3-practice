<template>
  <form action="" onsubmit="return false">
    <div>{{ creator }}</div>
    <div>
      <input v-model="email" placeholder="edit me" />
      <p>email is: {{ email }}</p>
    </div>
    <div>
      <input v-model="password" placeholder="edit me" />
      <p>email is: {{ password }}</p>
    </div>
    <div>
      <button type="submit" @click="submitForm(email, password)">Subscribe!</button>
    </div>
  </form>

  <div> </div>
</template>

<script lang="ts">
  export interface Article {
    title: string
    author: string
  }
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'CustomForm',
    components: {},
    props: {
      creator: {
        type: String,
        required: false,
        default: 'toweave'
      }
    },
    // emits: ['remove'],
    setup() {
      const count = ref(1000)
      return { count }
    },
    data() {
      return {
        message: '',
        email: '',
        password: ''
      }
    },
    emits: {
      // 没有验证
      click: null,

      // 验证 submit 事件
      submit: ({ email, password }: any) => {
        console.log(54, email, password)
        if (email && password) {
          return true
        } else {
          console.warn('Invalid submit event payload!')
          return false
        }
      }
    },
    methods: {
      submitForm(email: string, password: string) {
        console.log(64, email, password)
        const test = this.$emit('submit', { email, password })
        console.log(67, test)
        // return false
      }
    },
    mounted() {}
  })
</script>

<style scoped></style>
