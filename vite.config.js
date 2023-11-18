import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 自动浏览
  server: {
    open: true,
    port: 8088
  },
  plugins: [vue()],
})
