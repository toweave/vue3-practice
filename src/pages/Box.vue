<template>
  <div>{{ $options.name }}</div>
  <hr />
  <h1>{{ msg }}</h1>
  <div>
    <div id="boxOuter" class="box__outer" :class="{ 'box__outer--beyond': isBeyondParentBox }">
      <!-- <div class="box__inner" style="height: 72px"></div> -->
      <div id="boxInner" class="box__inner"> {{ isBeyondParentBox }} {{ textContect }} </div>
    </div>
  </div>

  <hr />
  <input type="texteara" v-model="textContect" />
  <hr />
</template>

<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Box',
    props: {
      msg: {
        type: String,
        required: false,
        default: 'Box page'
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
    },
    data() {
      return {
        isBeyondParentBox: false,
        textContect: '我爱中华人民共和国, 我爱中华人民共和国'
      }
    },
    mounted() {
      this.createObserver()
    },
    methods: {
      createObserver() {
        const boxOuter = document.querySelector('#boxOuter') as HTMLElement
        let options = {
          root: boxOuter,
          rootMargin: '0px',
          threshold: 1.0
        }
        const intersectionObserver = new IntersectionObserver((entries) => {
          console.log(72, entries)
          // If intersectionRatio is 0, the target is out of view
          // and we do not need to do anything.
          if (entries[0].intersectionRatio === 1) {
            console.log('inner box 被 outer box 包含')
            this.isBeyondParentBox = false
          } else {
            console.log('inner box 超出 outer box')
            this.isBeyondParentBox = true
          }
        }, options)
        const boxInner = document.querySelector('#boxInner') as HTMLElement
        // start observing
        intersectionObserver.observe(boxInner)
      }
    }
  })
</script>

<style lang="scss" scoped>
  .box {
    &__outer {
      box-sizing: content-box;
      position: relative;
      width: 300px;
      height: 72px;
      border: 1px solid #f00;
      background-color: #ddd;
      overflow: hidden;
      &--beyond:after {
        content: '...';
        display: inline-block;
        width: 24px;
        height: 24px;
        position: absolute;
        right: 0;
        bottom: 0;
        background-color: #ddd;
      }
    }
    &__inner {
      box-sizing: content-box;
      width: 300px;
      line-height: 24px;
      //   border: 1px solid #00f;
    }
  }
</style>
