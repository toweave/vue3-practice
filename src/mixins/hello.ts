import { ComponentOptions } from 'vue'
const helloMixin: ComponentOptions = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
      console.log(this.$options)
    }
  }
}

export default helloMixin
