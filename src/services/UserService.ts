import  { useDelete, useGet, usePatch, usePost } from '../axios'

export class UserCommonService {
    static getNews = async () => {
        const res = await useGet('users/allnews')
        return res
  }
      
 static updateSelfPassword = async (pwd:string) => {
    await usePatch('password', { password: pwd})
  }
}
