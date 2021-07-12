// plugins/i18n.js
import { App } from 'vue'
export default {
  install: (app: App, options: any) => {
    console.log('options::', options)
    // Plugin code goes here
    app.config.globalProperties.$translate = (key: string) => {
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }

    app.provide('i18n', options)

    app.directive('my-directive', {
      mounted(el, binding, vnode, oldVnode) {
        // some logic ...
      }
    })

    app.mixin({
      created() {
        // some logic ...
      }
    })
  }
}
