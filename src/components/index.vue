<template>
  <div class="home">
    <el-row>
      <el-col :span="4"
        ><el-input
          placeholder="请输入验证码"
          v-model="formLogin.code"
        ></el-input
      ></el-col>
      <el-col :span="4">
        <div class="login-code" width="100%" @click="refreshCode">
          <!--验证码组件-->
          <dentify :identifyCode="identifyCode"></dentify></div
      ></el-col>
    </el-row>
    <div><el-button @click="submit">提交</el-button></div>
  </div>
</template>

<script>
import dentify from "./dentify.vue";
export default {
  name: "HomeView",
  components: {
    dentify,
  },
  data() {
    return {
      // 表单提交内容
      formLogin: {
        code: "", //验证码输入框
      },
      identifyCodes: "1234567890abcdefjhijklinopqrsduvwxyz", //随机串内容,从这里随机抽几个显示验证码
      identifyCode: "", //验证码图片内容
    };
  },
  mounted() {
    // 初始化验证码
    this.identifyCode = "";
    //参数：（1）随机串内容。（2）验证码显示位数
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 重置验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    //获取验证码的值
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        //通过循环获取字符串内随机几位
        this.identifyCode +=
          this.identifyCodes[this.randomNum(0, this.identifyCodes.length)];
      }
    },
    //随机数字：用于当角标拿字符串的值
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    submit() {
      console.log("验证码:", this.identifyCode);
      console.log("用户输入的验证码:",this.formLogin.code);
      console.log('是否验证通过:',this.identifyCode==this.formLogin.code);
    },
  },
};
</script>


