import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import cesium from 'vite-plugin-cesium';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cesium-vue/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
