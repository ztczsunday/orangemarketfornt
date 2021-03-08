<template>
  <div>
    <a-form class="login">
      <h3 style="display: inline">登录商城</h3>
      <p>请使用手机号以及登录凭证登录</p>
      <a-form-item>
        <a-input v-decorator="['账号', { rules: [{ required: true, message: 'Please input your ID!' }] }]"
                 placeholder="手机号">
          <a-icon slot="prefix" style="color:rgba(0,0,0,.25)" type="user"/>
        </a-input>
        <a-input
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"
            placeholder="密码或验证码"
            type="password">
          <a-icon slot="prefix" style="color:rgba(0,0,0,.25)" type="lock"/>
        </a-input>
        <a-checkbox>
          10天自动登录
        </a-checkbox>
        <a-button type="link" @click="getVerifyCode">
          {{ verify }}
        </a-button>
        <a-button class="submit" type="primary" @click="prepareLogin">
          登录
        </a-button>
        <a-button class="submit" type="default">
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  created() {
    this.intervalCode = setInterval(() => {
      if (this.coldTime - 1 > 0) {
        this.coldTime -= 1;
      } else {
        this.coldTime = 0;
      }
    }, 1000);
  },
  destroyed() {
    clearInterval(this.intervalCode);
  },
  data() {
    return {
      intervalCode: null,
      coldTime: 0
    }
  },
  computed: {
    verify() {
      if (this.coldTime === 0) {
        return "发送验证码";
      } else {
        return `请等${this.coldTime}秒再发送`;
      }
    }
  },
  methods: {
    prepareLogin() {

    },
    getVerifyCode() {
      if (this.coldTime === 0) {
        this.coldTime = 60;
      } else {
        this.antMessage.error("现在还不能重新发送验证码哦");
      }
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: auto;
  position: relative;
  top: 0;
}

h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.submit {
  margin-left: 2%;
  width: 40%;
  margin-right: 2%;
}
</style>