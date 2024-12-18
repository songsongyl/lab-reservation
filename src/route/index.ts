import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: () => import('../components/index.vue')
  },
  {
    path: '/yanzhengma',
    component: () => import('../components/yanzhengma.vue')
  }
 
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
