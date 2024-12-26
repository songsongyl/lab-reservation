import axios, { Axios, AxiosError,  AxiosRequestConfig } from 'axios';
//import { config } from 'process';
import { ElLoading, ElMessage } from 'element-plus';
export const httpInstanse = axios.create();
export type BkResponse = {
    data: any;
    code: number;
    message: string;
    token?: string;
    role?: string;
};
//设置请求根路径
httpInstanse.defaults.baseURL = "/api";
//  httpInstanse.defaults.baseURL = 'http://localhost:8080/api'
//配置响应拦截器,async表示异步
export const $http = async (config: AxiosRequestConfig) => {
    const loaingInstance = ElLoading.service();
    try {
        const axiosResponse = await httpInstanse<BkResponse>(config)
        const bkResponse = axiosResponse.data
        // 提取响应头中的 token（如果存在）
        const token = axiosResponse.headers['token'] || '' // 响应头中的 token

        // 将 token 放到响应体对象中
        bkResponse.token = token
        // 提取响应头中的 role（如果存在）
        const role = axiosResponse.headers['role'] || '' // 响应头中的 token

        // 将 role 放到响应体对象中
        bkResponse.role = role
        if (bkResponse?.code != 200) {
            let errTitle = 'Error'
            if (bkResponse.code === 401) {
                errTitle = 'UNAUTHORIZED'
                ElMessage.error('未登录')
                //....
            } else if (bkResponse.code === 403) {
                errTitle = 'FORBIDDEN'
                ElMessage.error('无权限')
            } else if (bkResponse.code === 400) {
                errTitle = 'LOGIN_ERROR'
                ElMessage.error('账号密码错误')
            } else if (bkResponse.code === 500) {
                errTitle = 'ServerError'
            } else {
                errTitle = 'Unknown'
            }
            const err = new Error(bkResponse?.message || 'Unknown')
            err.name = errTitle
            throw err
        }
        return bkResponse
    } catch (err) {
        if (err instanceof AxiosError) {
            ElMessage.error('网络错误')
        }
        throw err;
    } finally {
        loaingInstance.close()
    }
}