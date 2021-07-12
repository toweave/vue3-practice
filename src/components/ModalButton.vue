<template>
  <button @click="modalOpen = true"> Open full screen modal! </button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a modal!
        <button @click="modalOpen = false"> Close </button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
  export interface Article {
    title: string
    author: string
  }
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    inheritAttrs: false,
    name: 'ModalButton',
    components: {},
    props: {
      title: {
        type: String,
        required: false,
        default: 'toweave'
      }
    },
    emits: ['update:title'],
    setup() {
      const modalOpen = ref(false)
      return { modalOpen }
    },
    data() {
      return {
        modalOpen: false,
        email: '',
        password: ''
      }
    },
    methods: {
      submitForm(email: string, password: string) {
        console.log(64, email, password)
      }
    },
    mounted() {}
  })
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
</style>
