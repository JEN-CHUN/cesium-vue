import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import cesium from 'vite-plugin-cesium'; // 引入插件
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cesium-vue/',
  plugins: [vue(),cesium()],
  build: {
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
