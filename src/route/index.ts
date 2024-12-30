import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
// import { CommonService } from '../services'

// declare module 'vue-router' {
//   interface RouteMeta {
//     roles?: string[]
//   }
// }
const routes: RouteRecordRaw[] = [
    {
    path: '/',
      name:'/',
      component: () => import('../views/login1.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: 'graph',
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
        component: () => import('../views/noticeManage1.vue')
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
      },
      {
        path: '/updatePassword',
        component: () => import('../views/updatePassword.vue')
      },
      {
        path: '/logout',
        redirect: "/"
      }
    ]
  }
 
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
  // 排除，没有声明角色权限的路由
  if (!to.meta.role) {
    return true
  }

  if (to.meta.role != sessionStorage.getItem('role')) {
    alert('无权限')
    return {path:'/'}
  }
  return true
})

export default router

// 教师账号： aaa 密码：123
// 实验室管理员账号：mxt 密码：123
// 超级管理员账号：admin 密码：admin