import { useGet, usePost } from '../axios'
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
 
  
}