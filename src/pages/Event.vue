<template>
  <div>{{ $options.name }}</div>
  <hr />
  <hr />
  <div>{{ article }}</div>
  <CustomForm @submit="submit"></CustomForm>
  <div>{{ transform }}</div>
  <hr />
  <div>{{ isDrag ? '开始拖动' : '未拖动 / 拖动结束' }}</div>
  <hr />
  <div class="drag-box">
    <div
      class="drag-box__handler"
      :style="{ transform: transform }"
      @mousedown="handleMouseDown"
      @dragstart="handleDragStart"
      @drag="handleDrag"
      @dragend="handleDragEnd"
      draggable="true"
      >Drag</div
    >
  </div>
</template>

<script lang="ts">
  import CustomForm from '@/components/CustomForm.vue'
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'Event',
    components: { CustomForm },
    props: {
      msg: {
        type: String,
        required: false,
        default: 'model  page'
      }
    },
    setup: () => {
      const count = ref(0)
      const offsetX = ref(0)
      const offsetY = ref(0)
      const moveX = ref(0)
      const moveY = ref(0)
      const transform = ref(`translate(0px, 0px)`)
      const isDrag = ref(false)
      return { count, transform, isDrag, offsetX, offsetY, moveX, moveY }
    },
    data() {
      return {
        article: {
          title: '中国',
          author: 'liz'
        }
        // transform: `translate(0, 0)`
      }
    },
    methods: {
      handleMouseDown(event: MouseEvent) {
        console.log(38, 'onMouseDown', event)
      },
      handleDragStart(event: MouseEvent) {
        console.log(72, 'onDragStart', event)
        this.isDrag = true
        this.offsetX = event.offsetX
        this.offsetY = event.offsetY
      },
      handleDrag(event: MouseEvent) {
        console.log(75, 'onDrag', event)
        this.isDrag = true
        const moveX:any = event.offsetX - this.offsetX
        const moveY = event.offsetY - this.offsetY
        this.moveX = this.moveX + moveX
        this.moveY = this.moveY + moveY
        this.transform = `translate(${this.moveX}px, ${this.moveY}px)`
      },
      handleDragEnd(event: MouseEvent) {
        console.log(78, 'onDragEnd', event)
        this.isDrag = false
        const moveX = event.offsetX - this.offsetX
        const moveY = event.offsetY - this.offsetY
        this.moveX = this.moveX + moveX
        this.moveY = this.moveY + moveY
        this.transform = `translate(${this.moveX}px, ${this.moveY}px)`
      },
      submit(test: any) {
        console.log(43, test)
      },
      handleInputEvent(event: MouseEvent) {
        console.log(29, event)
        if (event?.type === 'input') {
          console.log('input::', event)
        }
      },
      handleChangeEvent(event: Event) {
        console.log(45, event)
      }
    }
  })
</script>

<style lang="scss" scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
  .drag-box {
    position: relative;
    width: 800px;
    height: 800px;
    background-color: #f9f9f9;
    &__handler {
      position: absolute;
      width: 64px;
      height: 64px;
      background-color: red;
      transform: translate(0, 0);
    }
  }
</style>
