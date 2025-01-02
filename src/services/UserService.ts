import  { useDelete, useGet, usePatch, usePost } from '../axios'

export class UserCommonService {
    static getNews = async () => {
        const res = await useGet('users/news')
        return res
  }
      
 static updateSelfPassword = async (pwd:string) => {
    await usePatch('users/password', { password: pwd})
  }
}
