import  { useDelete, useGet, usePatch, usePost } from '../axios'

export class UserCommonService {
    static getNews = async () => {
        const res = await useGet('users/allnews')
        return res
  }
      
  static deleteNews = async (id: string) => {
   await useDelete(`admin/news/${id}`)
    return id;// 返回删除的id，以便在调用处确认
  }
  static updateSelfPassword = async (pwd:string) => {
    await usePatch('password', { password: pwd})
  }
  static updateNews = async (id: string,obj:object) => {
    await usePatch(`news/${id}`,  obj )
  }
 static addNews = async (obj) => {
    await usePost('news',  obj)
  }
}
