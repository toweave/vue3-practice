import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [vue()],
  server: {
    proxy: {
      // '/go': 'http://localhost:7999/go'
      // 选项写法
      // '/go': {
      //   target: 'http://localhost:7999/',
      //   changeOrigin: true,
      //   rewrite: (path) => {
      //     const test = path.replace(/^\/go/, '')
      //     console.log(22, test)
      //     return test
      //   }
      // }
      // 正则表达式写法
      // '^/go': {
      //   target: 'http://localhost:7999',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/go/, '')
      // }
      // // 使用 proxy 实例
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy 是 'http-proxy' 的实例
      //   }
      // }
    }
  }
})
