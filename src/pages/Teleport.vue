<template>
  <div>{{ $options.name }}</div>
  <hr />
  <anchored-heading :level="1">Hello world!</anchored-heading>
  <hr />
  <div style="position: relative">
    <h3>Tooltips with Vue 3 Teleport</h3>
    <div>
      <modal-button></modal-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import ModalButton from '@/components/ModalButton.vue'
  export default defineComponent({
    name: 'Teleport',
    components: { ModalButton },
    mixins: [],
    directives: {},
    props: {
      msg: {
        type: String,
        required: false,
        default: 'model  page'
      }
    },
    setup: () => {
      const count = ref('123456798.123456798')
      return { count }
    },
    data() {
      return {
        article: { a: '123', b: '456' },
        noActivated: false,
        x: 0,
        view: 'Grandpa'
      }
    },
    methods: {
      xCoordinate(event: MouseEvent) {
        console.log(52, event)
        this.x = event?.clientX
      }
    },
    mounted() {}
  })
</script>

<style lang="scss" scoped></style>
