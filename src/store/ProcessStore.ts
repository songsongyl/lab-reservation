import type { Process, StudentAttach } from '../type'
import {shallowRef} from 'vue'
const processesS = shallowRef<Process[]>()
const studentProcessesS = shallowRef<StudentAttach[]>()
const store = { processesS, studentProcessesS }
export const useProcessStore = () => {
  return store
}
