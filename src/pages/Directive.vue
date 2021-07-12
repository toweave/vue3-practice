<template>
  <div>{{ $options.name }}</div>
  <hr />
  <input v-focus v-model="count" />
  <div>
    <span>{{ count }}</span>
  </div>
  <div>
    <span v-format:4="count"></span>
  </div>
  <div>
    <span v-fixed:4="count"></span>
  </div>
  <pre>teset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2gterte</pre>
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import { MathDecimalMark, MathRound } from '@/utils/math'
  export default defineComponent({
    name: 'Directive',
    components: {},
    mixins: [],
    directives: {
      focus: {
        // 指令的定义
        mounted(el) {
          console.log(17, el)
          el.focus()
        }
      },
      format: {
        // 指令的定义
        mounted(el, instance) {
          console.log(35, instance)
          const { value, arg = 0 } = instance
          el.innerHTML = MathDecimalMark(value, Number(arg))
        },
        updated(el, instance) {
          const { value, arg } = instance
          el.innerHTML = MathDecimalMark(value, Number(arg))
        }
      },
      fixed: {
        // 指令的定义
        mounted(el, instance) {
          console.log(47, instance)
          const { value, arg } = instance
          el.innerHTML = MathRound(value, Number(arg))
        },
        updated(el, instance) {
          const { value, arg } = instance
          el.innerHTML = MathRound(value, Number(arg))
        }
      }
    },
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
