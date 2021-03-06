<template>
  <div>
    <a-form class="login">
      <h3 style="display: inline">登录商城</h3>
      <p>请使用手机号以及密码登录</p>
      <a-form-item>
        <a-input v-decorator="['账号', { rules: [{ required: true, message: 'Please input your ID!' }] }]"
                 placeholder="手机号">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
        </a-input>
        <a-input
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"
            type="password"
            placeholder="密码">
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="submit">
          登录
        </a-button>
        <a-button type="default" class="submit">
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>
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

.login {
  max-width: 300px;
  margin: auto;
  position: relative;
  top: 62px;
}

.submit {
  margin-left: 2%;
  width: 40%;
  margin-right: 2%;
}
</style>