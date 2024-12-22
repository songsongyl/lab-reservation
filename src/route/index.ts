import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: () => import('../views/login1.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/graph',
    component: () => import('../views/graph.vue')
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
      }
      
    ]
  },
  {
    path: '/noticeManage',
    component: () => import('../views/noticeManage.vue')
  },
  {
    path: '/timetable',
    component: () => import('../views/timetable.vue')
  },

  {
    path: '/appointment',
    component: () => import('../views/appointment.vue')
  },
  {
    path: '/appointmentApply',
    component: () => import('../views/appointmentApply.vue')
  }
 
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

// 教师账号： aaa 密码：123
// 实验室管理员账号：mxt 密码：123
// 超级管理员账号：admin 密码：admin