import { createApp } from 'vue'
import './style.css'
import axios from 'axios'
import App from './App.vue'
import router from './route'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../public/reset.css'
import process from 'process'
window.process = process

// 创建 Vue 应用实例
const app = createApp(App)

// 使用路由、ElementPlus 插件和配置全局 axios
app.config.globalProperties.$axios = axios

// 使用 ElementPlus 插件
app.use(router).use(ElementPlus)

// 挂载到 #app 元素
app.mount('#app')
