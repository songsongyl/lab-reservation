import axios, { useGet, usePost } from '../axios'
import router from '../route'
import { ADMIN, USER } from '../services/Const'
import { useProcessStore } from '../store/ProcessStore'
import { useUserStore } from '../store/UserStore'
import type { Process, ResultVO, User } from '../type'
// import { StoreCache } from './Decorators'
import {Ref} from 'vue'
const userStore = useUserStore()
const processStore = useProcessStore()

export class CommonService {
  // login
  static loginService = async (user: User) => {
    const resp = await axios.post<ResultVO<User>>('login', user)
    const us = resp.data.data
    const token = resp.headers.token
    console.log(token);
    console.log(us);
    const role = resp.headers.role
    console.log(role);
    //role为空
    if (!us || !token || !role) {
      throw '登录错误'
    }
    console.log("1111");
    
    sessionStorage.setItem('token', token)
    userStore.setUserSessionStorage(us, role)
    
    router.push({ path:'/home'})
  }

  //
  static updateSelfPassword = async (pwd: string) => {
    await usePost('passwords', { password: pwd })
  }

    // 加缓存，不为空再发请求
  
  // @StoreCache(processStore.processesS)
  // static async listProcessesService() {
  //   const data = await useGet<Process[]>('processes')
  //   return data as unknown as Ref<Process[]>
  // }

  static getRole() {
    return sessionStorage.getItem('role')
  }
}
