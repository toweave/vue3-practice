<template>
  <div @click="handleState">{{ $options.name }}</div>
  <hr />
  <div> {{ state }} </div>

  <div>
    <span>{{ count }}</span>
    <button @click="count++">Increment count</button>
    <button @click="nested.count++">Nested Increment count</button>
  </div>
  <hr />
  <div> {{ original }} </div>
  <div> {{ copy }} </div>
  <div>
    <p v-for="item in 100" :key="item" :id="`item_${item}`"> {{ item }} </p>
  </div>
</template>

<script lang="ts">
  import { ref, reactive, readonly, watchEffect, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Reactive',
    components: {},
    mixins: [],
    directives: {},
    props: {
      msg: {
        type: String,
        required: false,
        default: 'model page'
      }
    },
    setup: () => {
      const count = ref(0)
      // 响应式状态
      const state = reactive({
        count: 0
      })
      console.log(27, count, state)

      watchEffect(
        () => {
          console.log(42, count.value)
        },
        {
          flush: 'post'
        }
      )

      const original = reactive({ count: 0 })

      const copy = readonly(original)
      return {
        count,
        state,
        copy,
        original,
        nested: reactive({
          count
        })
      }
    },
    data() {
      return {
        article: { a: '123', b: '456' },
        noActivated: false,
        x: 0,
        view: 'Grandpa'
      }
    },
    renderTriggered({ key, target, type }) {
      console.log({ key, target, type })
    },
    methods: {
      handleState(event: MouseEvent) {
        console.log(52, event)
        this.count++
        this.state.count++
        this.original.count++
        // this.copy.count++
      }
    },
    mounted() {
      const intersectionObserver = new IntersectionObserver(function (entries) {
        console.log(72, entries)
        // If intersectionRatio is 0, the target is out of view
        // and we do not need to do anything.
        if (entries[0].intersectionRatio <= 0) return
        console.log('Loaded new items')
      })
      const item90 = document.querySelector('#item_90') as HTMLElement
      // start observing
      intersectionObserver.observe(item90)
    }
  })
</script>

<style lang="scss" scoped></style>
