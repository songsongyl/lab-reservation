import  { useDelete, useGet, usePatch, usePost } from '../axios'

export class UserCommonService {
    static getNews = async () => {
        const res = await useGet('users/news')
        return res
  }
      
  static deleteNews = async (id) => {
   await useDelete('users/news/id')

  }
  static updateSelfPassword = async (pwd:string) => {
    await usePatch('password', { password: pwd})
  }
  static updateNews = async (id: string,obj:object) => {
    await usePatch('news/id', { id: id,obj })
  }
 static addNews = async (obj) => {
    await usePost('news', { obj})
  }
}
