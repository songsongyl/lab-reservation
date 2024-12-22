import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  //   {
  //     path: '/',
  //     component: () => import('../views/login1.vue')
  // },
  {
    path: '/',
    component: () => import('../views/index.vue')
  },
  {
    path: '/messageManage',
    component: () => import('../views/messageManage.vue'),
    children: [
      {
        path: 'labManage',
        component: () => import('../views/labManage.vue')
      },
      {
        path: 'equipmentManage',
        component: () => import('../views/equipmentManage.vue')
      },
      {
        path: 'noticeManage',
        component: () => import('../views/noticeManage.vue')
      }
    ]
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
