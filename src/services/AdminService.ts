
import  { useDelete, useGet, usePatch, usePost } from '../axios'
export class AdminCommonService {
    static getGraph2 = async () => {
        const res = await useGet('admin/graph2')
        return res
  }
      static getGraph3 = async () => {
        const res = await useGet('admin/graph3')
        return res
  }
      static getGraph1 = async () => {
        const res = await useGet('admin/graph1')
        return res
    }
 
    static deleteNews = async (id: string) => {
   await useDelete(`admin/news/${id}`)
    return id;// 返回删除的id，以便在调用处确认
  }
 
  static deleteNewsBatch = async (ids: string[]) => {
  //   for (const id of ids) {
  //   await useDelete(`admin/news/${id}`);
    // }
    const deletePromises = ids.map(id => useDelete(`admin/news/${id}`));
  await Promise.all(deletePromises);
  }
  static updateNews = async (obj:object) => {
    await usePatch('admin/news',  obj )
  }
 static addNews = async (obj: unknown) => {
    await usePost('admin/news',  obj)
  }

}