<template>
  <div>{{ $options.name }}</div>
  <hr />
  <div ref="root">This is a root element</div>
  <hr />
  <div v-for="(item, i) in list" :key="i">
    <div :ref="(el) => domElement(el, i)"> {{ item }} - {{ i }} </div>
  </div>
</template>

<script lang="ts">
  import helloMixin from '@/mixins/hello'
  import { ref, reactive, onBeforeUpdate, watchEffect, onMounted, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Mixin',
    components: {},
    mixins: [helloMixin],
    props: {
      msg: {
        type: String,
        required: false,
        default: 'model  page'
      }
    },
    setup: () => {
      const count = ref(0)
      const root = ref(null)

      const list = reactive([1, 2, 3])
      const test: HTMLElement[] = []
      const divs = ref(test)
      //   HTMLElement

      // 确保在每次更新之前重置ref
      onBeforeUpdate(() => {
        divs.value = []
      })

      onMounted(() => {
        // DOM元素将在初始渲染后分配给ref
        console.log(39, root.value) // <div>This is a root element</div>
      })

      watchEffect(
        () => {
          // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
          console.log(44, root.value) // => null
        },
        {
          flush: 'post'
        }
      )
      return { count, root, list, divs }
    },
    data() {
      return {
        article: '123',
        noActivated: false,
        x: 0,
        view: 'Grandpa'
      }
    },
    methods: {
      domElement(el: HTMLElement, i: number) {
        console.log(60, el, i)
        if (el) {
          this.divs[i] = el
        }
      },
      submit(test: any) {
        console.log(43, test)
      },
      handleInputEvent(event: Event) {
        console.log(34, event)
      },
      xCoordinate(event: MouseEvent) {
        console.log(52, event)
        this.x = event?.clientX
      }
    },
    mounted() {
      console.log(71, this.divs)
    }
  })
</script>

<style lang="scss" scoped>
  button {
    background: #d93419;
    border-radius: 4px;
    display: inline-block;
    border: none;
    padding: 0.75rem 1rem;
    margin: 20px 10px 0 0;
    text-decoration: none;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  .movearea {
    position: relative;
    // top: 0;
    // left: 0;
    // width: 100vw;
    // height: 100vh;
    padding: 6vmin;
    transition: 0.2s background-color ease;
  }

  .container {
    position: relative;
    width: 500px;
    margin: 10px auto;
    border: 1px solid #333;
    height: 280px;
    background: #111;
    overflow: hidden;
  }

  .unit {
    float: left;
    width: 249px;
    height: 280px;
    background-color: #222426; // Old browsers
    // @include filter-gradient(#222426, #111111, horizontal); // IE6-9 fallback on horizontal gradient
    // @include background-image(radial-gradient(center, ellipse cover, #222426 0%, #111111 100%));
    &:first-child {
      border-right: 1px solid #333;
    }
  }

  .overlay {
    position: absolute;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/grain.png');
    top: 10px;
    width: 500px;
    height: 280px;
    left: 50%;
    margin-left: -250px;
    z-index: 1000;
    opacity: 0.11;
    animation: filmgrain 0.4s steps(3) infinite;
  }

  .ball {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #959595; // Old browsers
    // @include filter-gradient(#959595, #494949, horizontal); // IE6-9 fallback on horizontal gradient
    // @include background-image(radial-gradient(center, ellipse cover, #959595 0%, #4e4e4e 79%, #494949 100%));
    transform: translateZ(0);
    margin: 30px auto;
    position: relative;
    z-index: 300;
  }

  .ball-shadow {
    position: absolute;
    width: 50px;
    height: 5px;
    border-radius: 50%;
    background: #000;
    top: 276px;
    margin-left: 100px;
    z-index: 2;
    opacity: 0;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
    animation: boom 1.6s 0.7s ease-in-out infinite;
  }

  @keyframes boom {
    50% {
      opacity: 0.8;
    }
  }

  @keyframes filmgrain {
    100% {
      background-position: 200% 0%;
    }
  }
  // ----component----
  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .component-fade-enter-from,
  .component-fade-leave-to {
    opacity: 0;
  }

  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
</style>
