import axios, { useGet, usePost } from '../axios'
// import { ADMIN, USER } from '../services/Const'
import { useProcessStore } from '../store/ProcessStore'
import type { Process, ResultVO, User } from '../type'
// import { StoreCache } from './Decorators'

// const processStore = useProcessStore()

export class UserCommonService {
    static getGraph = async () => {
        const res = await useGet('admin/graph')
        return res
    }
  //
  static updateSelfPassword = async (pwd: string) => {
    await usePost('passwords', { password: pwd })
  }
  
}
