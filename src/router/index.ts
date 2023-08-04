import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Hello from '@/pages/Hello.vue'
import About from '@/pages/About.vue'
import Test from '@/pages/Test.vue'
import SetUp from '@/pages/SetUp.vue'
import For from '@/pages/For.vue'
import Fetch from '@/pages/Fetch.vue'
import Model from '@/pages/Model.vue'
import Component from '@/pages/Component.vue'
import Event from '@/pages/Event.vue'
import Form from '@/pages/Form.vue'
import Slot from '@/pages/Slot.vue'
import Provide from '@/pages/Provide.vue'
import Transition from '@/pages/Transition.vue'
import Template from '@/pages/Template.vue'
import Mixin from '@/pages/Mixin.vue'
import Directive from '@/pages/Directive.vue'
import Teleport from '@/pages/Teleport.vue'
import Plugin from '@/pages/Plugin.vue'
import Reactive from '@/pages/Reactive.vue'
import ECharts from '@/pages/ECharts.vue'
import Box from '@/pages/Box.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Hello },
  { path: '/About', component: About },
  { path: '/SetUp', component: SetUp },
  { path: '/For', component: For },
  { path: '/Fetch', component: Fetch },
  { path: '/Model', component: Model },
  { path: '/Component', component: Component },
  { path: '/Event', component: Event },
  { path: '/Form', component: Form },
  { path: '/Slot', component: Slot },
  { path: '/Provide', component: Provide },
  { path: '/Transition', component: Transition },
  { path: '/Template', component: Template },
  { path: '/Mixin', component: Mixin },
  { path: '/Directive', component: Directive },
  { path: '/Teleport', component: Teleport },
  { path: '/Plugin', component: Plugin },
  { path: '/Reactive', component: Reactive },
  { path: '/ECharts', component: ECharts },
  { path: '/Box', component: Box },
  { path: '/Test', component: Test }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes // `routes: routes` 的缩写
})

export default router
