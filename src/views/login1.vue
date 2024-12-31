<template>
    <div class="login-register">
        <div class="contain">
            <div class="big-box" :class="{ active: isLogin }">
                <div class="big-contain" key="bigContainLogin" v-if="isLogin">
                    <div class="btitle">账户登录</div>
                    <div class="bform">
                        <input type="text" placeholder="账号" v-model="form.account" >              
                        <input type="password" placeholder="密码" v-model="form.password"  >
                    </div>
                    <HomeView ref="homeView" @code-validated="handleValidation" />
                    <button class="bbutton" @click="login">登录</button>
                </div>
                <div class="big-contain" key="bigContainRegister" v-else>
                    <span class="lab-span">实验室预约系统</span>
                    <img class="lab-image" src="../assets/images/0ba9d3fd711e72289f5568f93b747104_720.jpg" alt="">
                </div>
            </div>
            <div class="small-box" :class="{ active: isLogin }">
                <div class="small-contain" key="smallContainRegister" v-if="isLogin">
                    <div class="stitle">你好，朋友!</div>
                    <p class="scontent">“实验室预约系统，让教学更简单！”</p>
                    <button class="sbutton" @click="changeType">了解更多</button>
                </div>
                <div class="small-contain" key="smallContainLogin" v-else>
                    <div class="stitle">欢迎回来!</div>
                    <p class="scontent">与我们保持联系，请登录你的账户</p>
                    <button class="sbutton" @click="changeType">登录</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup lang="ts">
import HomeView from '../components/HomeView.vue'
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
// import axios from 'axios'
// import { loginApi } from '../apis/login.js';
// import { useUserInfoStore } from '../store/userinfo.store.js'
import { CommonService } from '../services'
const homeView = ref(null); // 创建一个 ref 引用
const router = useRouter();
var isLogin = ref(false)
var existed = ref(false)
var form = reactive({
    password: '',
    account: ''
})
// const useInfoStore = useUserInfoStore()
function changeType() {
    isLogin.value = !isLogin.value
    form.password = ''
    form.account = ''
}


function handleValidation(isValid) {
    if (isValid) {
        alert("验证码验证通过");
        // 执行登录操作
        // loginF()
        router.push("/home");  
    } else {
        alert("验证码验证失败");
        router.push("/")
        // 提示用户验证码错误
    }
}


const login = async () => {
   await CommonService.loginService({
        account: form.account,
        password:form.password
  })

    homeView.value.validateCode();
    form.account = ''
    form.password = ''
}

// const login1 = async () => {
//     try{
//         const res = await loginApi(form)
//         console.log(res);
        
//         console.log(res.data);
//         console.log(res.token);
//         console.log(res.data.role);
        
//         useInfoStore.setAuth(res.token, res.data.role, res.data);
//         // if (res.role === 'sqWf') {
//         //     router.push('/home')
//         // }
//         // if (res.role === 'wewe') {
//         //     router.push('/home')
//         // }
//         homeView.value.validateCode();
// } catch (error) {
//         if (error.response) {
//             // 请求已发送，但服务器响应了状态码
//             console.error("响应错误:", error.response.data);
//         } else if (error.request) {
//             // 请求已发送，但没有收到响应
//             console.error("没有收到响应:", error.request);
//         } else {
//             // 发生错误时的设置
//             console.error("请求错误:", error.message);
//         }
//     }
// }  

// }
</script>

<style scoped>
.login-register {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
}

.contain {
    width: 60%;
    height: 60%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 3px #f0f0f0,
        0 0 6px #f0f0f0;
}

.big-box {
    width: 70%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 30%;
    transform: translateX(0%);
    transition: all 1s;
}

.big-contain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.big-contain .lab-image {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
}
.big-contain .lab-span {
    z-index: 2;
    position: absolute;
    left: 32%;
    top: 10%;
    font-size: 30px;
    font-weight: bolder;
    color: #fff;
    text-align: center;
    /* float: left; */
}
.btitle {
    font-size: 1.5em;
    font-weight: bold;
    color: rgb(57, 167, 176);
}

.bform {
    width: 100%;
    height: 40%;
    padding: 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.bform .errTips {
    display: block;
    width: 50%;
    text-align: left;
    color: red;
    font-size: 0.7em;
    margin-left: 1em;
}

.bform input {
    width: 50%;
    height: 40px;
    border: none;
    outline: none;
    margin-bottom: 10px;
    border-radius: 10px;
    padding-left: 2em;
    background-color: #f0f0f0;
}


.bbutton {
    width: 20%;
    height: 40px;
    border-radius: 24px;
    border: none;
    outline: none;
    background-color: rgb(57, 167, 176);
    color: #fff;
    font-size: 0.9em;
    cursor: pointer;
}

.small-box {
    width: 30%;
    height: 100%;
    background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(0%);
    transition: all 1s;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
}

.small-contain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.stitle {
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
}

.scontent {
    font-size: 0.8em;
    color: #fff;
    text-align: center;
    padding: 2em 4em;
    line-height: 1.7em;
}

.sbutton {
    width: 60%;
    height: 40px;
    border-radius: 24px;
    border: 1px solid #fff;
    outline: none;
    background-color: transparent;
    color: #fff;
    font-size: 0.9em;
    cursor: pointer;
}

.big-box.active {
    left: 0;
    transition: all 0.5s;
}

.small-box.active {
    left: 100%;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    transform: translateX(-100%);
    transition: all 1s;
}
</style>