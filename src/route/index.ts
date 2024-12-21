import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: () => import('../views/login1.vue')
  },
  {
    path: '/index',
    component: () => import('../views/index.vue')
  }
  // {
  //   path: '/',
  //   component: () => import('../views/labManage.vue')
  // }
  // {
  //   path: '/',
  //   component: () => import('../views/equipmentManage.vue')
  // }
 
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
