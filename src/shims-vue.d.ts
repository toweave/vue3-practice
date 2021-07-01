declare module 'vue'

declare module 'gsap/all'

declare module '*.vue' {
  import Vue, { DefineComponent, ComponentOptions } from 'vue'
  const component: DefineComponent<{}, {}, any>
  const componentOptions: ComponentOptions<{}, {}, any>
  export { Vue, component, componentOptions }
  // export default componentOptions
}
export declare function fetchUserRepositories(): any
