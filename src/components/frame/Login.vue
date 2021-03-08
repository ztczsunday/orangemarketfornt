<template>
  <AForm class="login">
    <h3>登录商城</h3>
    <p class="boldYaHei">请使用手机号以及登录凭证登录</p>
    <AFormItem class="a-form-item">
      <a-input v-model="phone" class="input-phone" placeholder="手机号" @input="checkPhone">
        <a-icon slot="prefix" style="color:rgba(0,0,0,.25)" type="user"/>
      </a-input>
    </AFormItem>
    <h4 v-if="phoneErrorCode !== null" style="color: red">{{ phoneErrorCode }}</h4>
    <AFormItem class="a-form-item">
      <a-input-password v-model="password" class="input-password" placeholder="密码或验证码">
        <a-icon slot="prefix" style="color:rgba(0,0,0,.25)" type="lock"/>
      </a-input-password>
    </AFormItem>
    <AFormItem class="a-form-item">
      <ACheckbox>
        10天内自动登录
      </ACheckbox>
      <a-button style="font-feature-settings: 'tnum';" type="link" @click="getVerifyCode">{{ verify }}</a-button>
    </AFormItem>
    <AButton class="submit" type="primary" @click="handleSubmit">
      登录
    </AButton>
    <AButton class="submit" type="default" @click="$router.push('/register')">
      注册
    </AButton>
  </AForm>
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
      phone: null,
      password: null,
      phoneErrorCode: null,
      passwordErrorCode: null,
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
    checkPhone() {
      this.phoneErrorCode = '手机号不符合格式！！！';
    },
    prepareLogin() {
      console.log(this.phone, this.password);
    },
    getVerifyCode() {
      if (this.coldTime === 0) {
        this.coldTime = 60;
      } else {
        this.antMessage.error("现在还不能重新发送验证码哦");
      }
    },
    handleSubmit() {

    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.2;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  display: inline;
  user-select: none;
}

p {
  font-size: 0.9rem;
  user-select: none;
  margin-bottom: 0;
  display: block;
  font-family: 'Microsoft YaHei', serif;
  font-weight: bold;
}

h4 {
  font-size: 0.9rem;
  user-select: none;
  margin-bottom: 0;
  display: block;
}

.a-form-item {
  margin: 0;
}

.login {
  max-width: 300px;
  margin: 60px auto auto;
  position: relative;
  top: 0;
}

.input-phone {
  margin: 4px;
}

.input-password {
  margin: 4px;
}

.submit {
  margin-left: 2%;
  width: 40%;
  margin-right: 2%;
}
</style>