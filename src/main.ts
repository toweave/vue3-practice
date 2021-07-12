import { createApp, h, VNode, VNodeChildAtom } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import i18nPlugin from '@/plugins/i18n'
import ToDoItem from '@/components/ToDoItem.vue'

const app = createApp(App)

console.log('app::', app)
console.log('router::', router)

app.config.performance = true

const i18nStrings = {
  greetings: {
    hi: 'Hallo!'
  }
}

app.use(i18nPlugin, i18nStrings)

app.component('ToDoItem', ToDoItem)

/** 递归地从子节点获取文本 */
function getChildrenTextContent(children: (VNode | VNodeChildAtom)[]): string {
  console.log(15, children)
  return children
    .map((node: VNode) => {
      return typeof node.children === 'string'
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : ''
    })
    .join('')
}

app.component('anchored-heading', {
  render() {
    // 从 children 的文本内容中创建短横线分隔 (kebab-case) id。
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, '-') // 用短横线替换非单词字符
      .replace(/(^-|-$)/g, '') // 删除前后短横线

    return h('h' + this.level, [
      h(
        'a',
        {
          name: headingId,
          href: '#' + headingId
        },
        this.$slots.default()
      )
    ])
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

app.use(router)
app.mount('#app')
