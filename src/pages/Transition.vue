<template>
  <div>{{ $options.name }}</div>
  <hr />
  <div>{{ article }}</div>
  <hr />
  <div id="demo">
    Push this button to do something you shouldn't be doing:<br />

    <div :class="{ shake: noActivated }">
      <button @click="noActivated = !noActivated">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>
  </div>

  <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
    <h3>Move your mouse across the screen...</h3>
    <p>x: {{ x }}</p>
  </div>

  <div class="container">
    <div class="unit">
      <div class="ball ball1"></div>
      <div class="ball-shadow"></div>
    </div>
    <div class="unit">
      <div class="ball ball2"></div>
      <div class="ball-shadow"></div>
    </div>
  </div>
  <div class="overlay"></div>

  <div>
    <input v-model="view" type="radio" value="Grandpa" id="a" /><label for="a">A</label>
    <input v-model="view" type="radio" value="CustomInput" id="b" /><label for="b">B</label>
    <div>{{ view }}</div>
    <div>
      <div>
        <transition name="component-fade" mode="out-in">
          <keep-alive>
            <component :is="view"></component>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Grandpa from '@/components/inject/Grandpa.vue'
  import CustomInput from '@/components/CustomInput.vue'
  import { gsap, Power4, Circ } from 'gsap/all'
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Transition',
    components: {
      Grandpa,
      CustomInput
    },
    props: {
      msg: {
        type: String,
        required: false,
        default: 'model  page'
      }
    },
    setup: () => {
      const count = ref(0)
      return { count }
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
      const ball1: HTMLElement = document.querySelector('.ball1') as HTMLElement

      const ball2: HTMLElement = document.querySelector('.ball2') as HTMLElement
      console.log(window)
      console.log(ball1, ball2)
      gsap.from(ball1, {
        duration: 0.8,
        y: 220,
        repeat: -1,
        yoyo: true,
        ease: Power4.easeOut
      })
      gsap.from(ball2, {
        duration: 0.8,
        y: 225,
        repeat: -1,
        yoyo: true,
        ease: Circ.easeOut
      })
      // gsap.fromTo(
      //   ball2,
      //   {
      //     duration: 0.8,
      //     scaleY: 1
      //   },
      //   {
      //     scaleY: 1.1,
      //     repeat: -1,
      //     yoyo: true,
      //     ease: Circ.easeOut
      //   }
      // )
    }
  })
</script>

<style lang="scss" scoped>
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
