
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
   await useDelete(`labadmin/news/${id}`)
    return id;// 返回删除的id，以便在调用处确认
  }
 
  static deleteNewsBatch = async (ids: string[]) => {
  //   for (const id of ids) {
  //   await useDelete(`admin/news/${id}`);
    // }
    const deletePromises = ids.map(id => useDelete(`labadmin/news/${id}`));
  await Promise.all(deletePromises);
  }
  static updateNews = async (obj: object) => {
    console.log("22");
    const res = await usePatch('labadmin/news', obj)
    console.log("111"+res);
    
  }
 static addNews = async (obj: unknown) => {
    await usePost('labadmin/news',  obj)
  }

}