import { ElNotification } from 'element-plus'
import  { Progress } from '../../type'
import ProgressVue from './progressVue.vue'
import {h} from 'vue';
export const createProgressNotification = (progress: { progress:Progress }) => {
  const noti = ElNotification({
    title: 'Loading',
    message: h(ProgressVue, progress),
    type: 'success',
    duration: 0
  })

  const close = () => noti.close()
  return { close }
}
