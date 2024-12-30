# lab-reservation

## 实现功能

实现登录和首页两个页面，首页中包括课程管理，申请预约，查看当前预约，公告管理，统计等等，数据记录在数据库，实现前后端分离

------

## 项目部署

### 数据库
 user表结构如下：
~~~
 id char(26) primary key ,
    account char(10) not null unique ,
    password varchar(60) not null ,
    telephone char(11) not null ,
    name varchar(6) not null , /**字符 一个中文三个字节 一个字符*/
    role char(4) not null,/**乱码长度为四个 可以用$*/
    create_time datetime   default current_timestamp,
    update_time datetime  default current_timestamp on update current_timestamp
~~~

### 项目初始化
```
npm install
```



### 运行前端项目
```
npm run dev
```
-------

## 使用到的技术

### 前端：

- html
- css
- vue.js
- echarts
- vue-router
- axios
--------

### 后端：

- node.js
- springboot
- mysql
--------

### problem
- 前后端传数据 出现401未登录 
改正：
老的方法：
vite.config.js
~~~
 define: {
'process.env': {}
 },
  server: {
     proxy: {
       '/api': {
         //配置需要代理的路径，意思是代理http://localhost:8080/api/后的所有路由
         target: 'http://localhost:8080/api',
         changeOrigin: true,//允许跨域
         ws: true,//允许websocket代理
         //重写路径，作用与vue配置pathRewrite作用相同
         rewrite: (path) => path.replace(/^\/api/, "")
       }
     }
   }
~~~
apis/index.ts
~~~
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


// 添加请求拦截器
httpInstanse.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('token');
    console.log(token);
    
    if (token) {
        // console.log(config.headers['Authorization']);
        config.headers.token= token;
       
        
    }
    return config;
});
//配置响应拦截器,async表示异步
export const $http = async (config: AxiosRequestConfig) => {
    const loaingInstance = ElLoading.service();
    try {
        const axiosResponse = await httpInstanse<BkResponse>(config)
        console.log("axiosResponse11111" + axiosResponse.headers['token']); // 查看完整响应数据
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
export default httpInstanse
~~~
login.js
~~~
import { $http } from './index.ts';
export const loginApi = (data) => {
    return $http({
        method: 'POST',
        url: '/login',
        data
    })
}
~~~
.env.dev
~~~
VITE_BASEURL = "/api"
~~~
login1.vue
~~~
const login = async () => {
    try{
        const res = await loginApi(form)
        console.log(res);
        
        console.log(res.data);
        console.log(res.token);
        console.log(res.data.role);
        
        useInfoStore.setAuth(res.token, res.data.role, res.data);
        // if (res.role === 'sqWf') {
        //     router.push('/home')
        // }
        // if (res.role === 'wewe') {
        //     router.push('/home')
        // }
        homeView.value.validateCode();
} catch (error) {
        if (error.response) {
            // 请求已发送，但服务器响应了状态码
            console.error("响应错误:", error.response.data);
        } else if (error.request) {
            // 请求已发送，但没有收到响应
            console.error("没有收到响应:", error.request);
        } else {
            // 发生错误时的设置
            console.error("请求错误:", error.message);
        }
    }
}
~~~
graph.js
~~~
import  httpInstanse  from './index.ts';
export const GraphApi = () => {
    return httpInstanse({
        url: '/admin/graph',
        
    })
}
~~~
graph.vue
~~~
   const second = async () => {
            console.log(sessionStorage.getItem('token'));
            console.log(sessionStorage.getItem('role'));
            const request = await GraphApi();
          console.log(226);
            // const token = localStorage.getItem('authToken');
            try {
                // const jsonString = JSON.stringify(form)
                // console.log(jsonString)
                console.log("11");
                console.log(sessionStorage.getItem('token'));
              //有token
                // const request = await axios.get("/api/admin/graph")
                console.log("请求", request.data);
                console.log(request.headers);
                console.log(request.data.code);
                console.log("22");
                const data = request.data;  // 假设是返回的数据结构
                if (data && data.data) {
                    const { repairLab, useLab, leisureLab } = data.data;

                    if (repairLab !== undefined) {
                        repairLab.value = repairLab || 0;
                        console.log(repairLab);
                    } else {
                        console.error("repairLab 数据不存在");
                    }

                    if (useLab !== undefined) {
                        useLab.value = useLab || 0;
                    } else {
                        console.error("useLab 数据不存在");
                    }

                    if (leisureLab !== undefined) {
                        leisureLab.value = leisureLab || 0;
                    } else {
                        console.error("leisureLab 数据不存在");
                    }

                } else {
                    console.error("返回的数据格式不正确，缺少 data 字段");
                }
               // initCharts();  // 在数据加载后初始化图表
                console.log("44");
            } catch (error) {
                if (error.response) {
                    console.error("响应错误:", error.response.data);
                } else if (error.request) {
                    console.error("没有收到响应:", error.request);
                } else {
                    console.error("请求错误:", error.message);
                }
            }
        };
~~~

**老师指正之后改用新技术**