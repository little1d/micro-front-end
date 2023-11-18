import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    vue(),
    qiankun('qiankun-vue-micro-app3', {
      useDevMode: true
    })
  ],
  server: {
    port: 5173,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
