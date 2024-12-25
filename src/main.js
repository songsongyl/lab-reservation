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
// const cors = require('cors');
// 使用路由、ElementPlus 插件和配置全局 axios
app.config.globalProperties.$axios = axios

// 使用 ElementPlus 插件
app.use(router).use(ElementPlus)
// app.use(cors({
//     origin: 'http://localhost:8080', // 允许来自该地址的请求
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'], // 如果需要添加其他 headers，也可以在此配置
// }));
// 挂载到 #app 元素
app.mount('#app')
