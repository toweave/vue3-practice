<template>
  <div>{{ $options.name }}</div>
  <hr />
  <div>{{ $translate('greetings.hi') }}</div>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Plugin',
    components: {},
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
