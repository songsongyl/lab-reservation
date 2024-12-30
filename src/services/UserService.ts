import  { useGet, usePost } from '../axios'
// import { ADMIN, USER } from '../services/Const'

// import { StoreCache } from './Decorators'

// const processStore = useProcessStore()

export class UserCommonService {
    static getNews = async () => {
        const res = await useGet('users/news')
        return res
  }
      
  
  static updateSelfPassword = async (pwd: string) => {
    await usePost('passwords', { password: pwd })
  }
  
}
