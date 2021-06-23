<template>
  <div class="app__header">app__header</div>
  <div class="app__body">
    <div class="app__left">
      <ul class="app-nav">
        <li
          v-for="item in aliasNavs"
          :key="item.path"
          class="app-nav__li"
          :class="{ 'app-nav__li--current': path === item.path }"
          ><router-link :to="item.path">{{ item.name }}</router-link></li
        >
      </ul>
    </div>
    <div class="app__right">
      <router-view></router-view>
    </div>
  </div>
  <div class="app__footer"></div>
</template>

<script lang="ts">
  export interface Navigation {
    name: string
    path: string
  }

  import { defineComponent } from 'vue'
  // import HelloWorld from '@/components/HelloWorld.vue'
  // const path = computed(() => {
  //   return this.$route.path
  // })
  const navigations: Navigation[] = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/test', name: 'test' }
  ]
  export default defineComponent({
    name: 'App',
    components: {
      // HelloWorld
    },
    data() {
      return {
        navigations: navigations
      }
    },
    computed: {
      path(): string {
        // 我们很快就会看到 `params` 是什么
        return this.$route.path
      },
      aliasNavs(): Navigation[] {
        return this.navigations.map((element: Navigation): Navigation => {
          return {
            path: element.path,
            name: element.name
          }
        })
      }
    }
  })
</script>

<style lang="scss">
  html,
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  .app {
    &__header {
      display: flex;
      flex: none;
      height: 56px;
      padding: 0 1em;
      line-height: 56px;
      border-bottom: 1px solid #f6f6f6;
    }
    &__body {
      display: flex;
      flex-direction: row;
      flex: auto;
      height: auto;
    }
    &__left {
      display: flex;
      flex: none;
      width: 160px;
      line-height: 56px;
      border-right: 1px solid #f6f6f6;
    }
    &__right {
      padding: 1em;
    }
  }
  .app-nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 0.5em 0 0 0;
    &__li {
      height: 2em;
      line-height: 2em;
      list-style-type: none;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background-color: #f9f9f9;
      }
      &--current {
        background-color: #eee;
      }
    }
    a {
      display: block;
      height: 2em;
      padding: 0 1em;
      line-height: 2em;
      text-decoration: none;
    }
  }
</style>
