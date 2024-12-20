import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: () => import('../views/login1.vue')
  }
 
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
