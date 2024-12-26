import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {}
  },
  server: {
    proxy: {
      '/api': {
        //配置需要代理的路径，意思是代理http://localhost:8080/api/后的所有路由
        target: 'http://localhost:8080/api',
        changeOrigin: true,//允许跨域
        ws: true,//允许websocket代理
        //重写路径，作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
