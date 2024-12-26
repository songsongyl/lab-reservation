import { httpInstanse } from "../apis";
import router from "../route";
import { defineStore } from "pinia";
import { reactive, ref } from "vue";
//useWebStore命名规范
export const useUserInfoStore = defineStore('userinfo-store', () => {
    //将token放在浏览器本地存储localstorege中，把token放在请求头部authorization字段中
    const setAuth = (token, role, data) => {
        httpInstanse.defaults.headers.common.Authorization = token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", role);
        sessionStorage.setItem("data", data);
    };
    //判断用户是否登录，从本地存储中读取是否存在token,返回值是布尔类型，true代表已登录
    const authFormLocal = () => {
        const token = sessionStorage.getItem("token");
        //console.log(token);

        if (token) {
            setAuth(token);
            return true;
        }
        return false;

    };
    //将token从请求头部清除，将token从本地浏览器localstorage中移除，强制跳转到登录页面
    const removeAuth = () => {
        delete httpInstanse.defaults.headers.common.Authorization;
        sessionStorage.removeItem("token");
        router.push("/login");
    }
    return {
        setAuth,
        authFormLocal,
        removeAuth
    }
})