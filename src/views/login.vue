<template>
	<div class="login-register">
		<div class="contain">
			<div class="big-box" :class="{ active: isLogin }">
				<div class="big-contain" key="bigContainLogin" v-if="isLogin">
					<div class="btitle">账户登录</div>
					<div class="bform">
						<input type="text" placeholder="账号" v-model="form.useraccount"
							:class="{ 'input-error': v$.useraccount.$invalid && v$.useraccount.$dirty }">
						<span class="errTips" v-if="v$.useraccount.$invalid && v$.useraccount.$dirty">* 账号填写错误 *</span>
						<input type="password" placeholder="密码" v-model="form.userpwd"
							:class="{ 'input-error': v$.userpwd.$invalid && v$.userpwd.$dirty }">
						<span class="errTips" v-if="v$.userpwd.$invalid && v$.userpwd.$dirty">* 密码填写错误 *</span>
						<!-- <span class="errTips" v-if="!$v.user.password.required"></span> -->
					</div>
					<HomeView ref="homeView" @code-validated="handleValidation" />
					<button class="bbutton" @click="login">登录</button>
				</div>
				<div class="big-contain" key="bigContainRegister" v-else>
					<div class="btitle">创建账户</div>
					<div class="bform">
						<input type="text" placeholder="用户名" v-model="form.username"
							:class="{ 'input-error': v$.username.$invalid && v$.username.$dirty }">

						<!-- <span class="errTips" v-if="v$.username.$invalid && v$.username.$dirty">* 用户名已经存在！ *</span> -->
						<input type="password" placeholder="密码" v-model="form.userpwd"
							:class="{ 'input-error': v$.userpwd.$invalid && v$.userpwd.$dirty }">
						<span class="errTips" v-if="v$.userpwd.$invalid && v$.userpwd.$dirty">
							* 密码填写不能为空 *
						</span>
						<input type="password" placeholder="确认密码" v-model="form.userpwdre"
							:class="{ 'input-error': v$.userpwdre.$invalid && v$.userpwdre.$dirty }">

						<span class="errTips" v-if="v$.userpwdre.$invalid && v$.userpwdre.$dirty">
							* 两次密码不一致 *
						</span>
						<!--这里有问题 一致也弹出错误-->
						<input type="tel" placeholder="手机号码" v-model="form.usertele"
							:class="{ 'input-error': v$.usertele.$invalid && v$.usertele.$dirty }">
						<span class="errTips" v-if="v$.usertele.$invalid && v$.usertele.$dirty">* 手机号码填写错误 *</span>
					</div>
					<button class="bbutton" @click="register">注册</button>
				</div>
			</div>
			<div class="small-box" :class="{ active: isLogin }">
				<div class="small-contain" key="smallContainRegister" v-if="isLogin">
					<div class="stitle">你好，朋友!</div>
					<p class="scontent">“实验室预约系统，让教学更简单！”</p>
					<button class="sbutton" @click="changeType">注册</button>
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
import useVuelidate from "@vuelidate/core"
import { numeric, minLength, maxLength, required, sameAs } from "@vuelidate/validators"
import { regex } from 'vuelidate/lib/validators/common.js'
import axios from 'axios'

const homeView = ref(null); // 创建一个 ref 引用
// import $ from 'jquery'
// import 'jquery-validation'
var phone = regex('telephone', /^1(3|4|5|7|8)\d{9}$/) // 手机号码校验
var isLogin = ref(false)
var teleError = ref(false)
var passwordError = ref(false)
var existed = ref(false)
var accountError = ref(false)
var passwordReError = ref(false)
var form = reactive({
	username: '',
	userpwd: '',
	usertele: '',
	useraccount: '',
	userpwdre: ''
})

var rules = computed(() => {
	return {
		// required: 必填项, maxLength: 最大长度不超过函数参数的值, email: 符合电子邮箱的格式
		// sameAs: 与某项必须一致（参数填formData里面的属性）
		username: { required, maxLength: maxLength(6), minLength: minLength(2) },
		userpwd: {
			required,
			maxLength: maxLength(16)
		},
		useraccount: {
			required,
			maxLength: maxLength(10), minLength: minLength(10)
		},
		userpwdre: {
			required,
			sameAsPassword: sameAs('userpwd')
		},
		usertele: {
			required,
			numeric,
			phone
		}
	};
});

var v$ = useVuelidate(rules, form);

const nameErrors = computed<Array<string>>(() => {
	let errors: Array<string> = [];
	if (v$.value.username.$errors.length) {
		v$.value.username.$errors.forEach((error) => {
			errors.push(error.$message as string);
		})
	}
	return errors;
})


function changeType() {
	isLogin.value = !isLogin.value
	form.username = ''
	form.userpwd = ''
	form.usertele = ''
	form.useraccount = ''
	form.userpwdre = ''
}


function login() {
	// const self = this;
	v$.value.$touch();  // 触发所有字段的校验
	if (form.useraccount != "" && form.userpwd != "") {
		axios({
			method: 'post',
			url: 'http://127.0.0.1:10520/api/user/login',
			data: {
				account: form.useraccount,
				password: form.userpwd
			}
		})
			.then(res => {
				switch (res.data) {
					case 0:
						alert("登陆成功！");
						break;
					case -1:
						accountError.value = true;
						break;
					case 1:
						passwordError.value = true;
						break;
					default:
						alert("未知错误！");
						break;
				}
			})
			.catch(err => {
				console.log(err);
				// alert("请求失败，请稍后再试！");
			})
	} else {
		alert("填写不能为空！");
	}

	// 直接调用子组件的 validateCode 方法进行验证
	homeView.value.validateCode();
}
function handleValidation(isValid) {
	if (isValid) {
		alert("验证码验证通过");
		// 执行登录操作
		// login()
	} else {
		alert("验证码验证失败");
		// 提示用户验证码错误
	}
}
function register() {
	// const self = this;
	v$.value.$touch();  // 触发所有字段的校验
	// if (v$.value.userpwdre.$invalid) {
	// 	alert("密码不一致错误");
	// }
	// alert(form.userpwd+ form.userpwdre);
	if (form.username != "" && form.userpwd != "" && form.usertele != null && form.useraccount != null && form.userpwdre != null) {
		axios({
			method: 'post',
			url: 'http://127.0.0.1:10520/api/user/add',
			data: {
				username: form.username,
				password: form.userpwd,
				telephone: form.usertele,
				account: form.useraccount,
				passwordre: form.userpwdre
			}
		})
			.then(res => {
				switch (res.data) {
					case 0:
						alert("注册成功！");
						login();
						break;
					case -1:
						existed.value = true;
						break;
				}
			})
			.catch(err => {
				console.log(err);
				// alert("请求失败，请稍后再试！");
			})
	} else {
		alert("填写不能为空！");
	}
	
}

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