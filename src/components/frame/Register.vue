<template>
  <div @submit="handleSubmit">
    <!-- 输入任意文本 -->
    <VanField v-model="username.value" :error-message="checkUserName"
              label="用户名"
              placeholder="请输入用户名"
              @change="username.hide = false"
    />
    <!-- 输入手机号，调起手机号键盘 -->
    <VanField v-model="tel.value" :error-message="checkTel"
              label="手机号" placeholder="请输入手机号"
              type="tel"
              @change="tel.hide = false"
    />
    <!-- 短信验证码 -->
    <van-field
        v-model="verify.value"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
    >
      <template #button>
        <van-button size="small" type="primary" @click="submitVerify">发送验证码</van-button>
      </template>
    </van-field>
    <!-- 输入密码 -->
    <VanField v-model="password.value" label="密码" placeholder="8~16位，且不能包含空格" type="password"/>
    <!-- 确认密码 -->
    <VanField v-model="assurePassword.value" :error-message="checkPassword"
              label="确认密码" placeholder="必须与输入密码一样"
              type="password"
              @change="assurePassword.hide = false; password.hide = false;"/>
    <VanGoodsAction>
      <VanGoodsActionButton text="重置" type="warning" @click="reset"/>
      <VanGoodsActionButton text="提交" type="danger" @click="handleSubmit"/>
    </VanGoodsAction>
  </div>
</template>

<script>
import '@/assets/css/grid.css'

export default {
  name: "Register",
  created() {
  },
  destroyed() {
  },
  data() {
    return {
      tel: {
        value: "",
        hide: true
      },
      verify: {
        value: "",
        hide: true
      },
      password: {
        value: "",
        hide: true
      },
      username: {
        value: "",
        hide: true
      },
      assurePassword: {
        value: "",
        hide: true
      }
    }
  },
  computed: {
    checkUserName() {
      if (this.username.hide) {
        return "";
      } else {
        return this.username.value === '' ? '用户名不能为空' : ''
      }
    },
    checkPassword() {
      if (this.password.hide) {
        return "";
      } else if (this.password !== this.assurePassword) {
        return "请您确认两次输入密码都是一样的";
      } else if (this.password.value === "") {
        return "必须填写密码和确认密码"
      } else if (
          this.password.value.length < 8 ||
          this.password.value.length > 16 ||
          this.password.value.includes(' ')) {
        return "密码的长度必须在8~16位，同时不能包含空格";
      } else {
        return "";
      }
    },
    checkTel() {
      if (this.tel.hide) {
        return "";
      } else if (!(/^1[34578]\d{9}$/.test(this.tel.value))) {
        return "不是完整的11位手机号或者正确的手机号前七位";
      } else {
        return "";
      }
    }
  },
  methods: {
    handleSubmit() {
    },
    reset() {
      const resetValue = input => {
        input.value = "";
        input.hide = true;
      };
      resetValue(this.tel);
      resetValue(this.verify);
      resetValue(this.username);
      resetValue(this.password);
      resetValue(this.assurePassword);
    },
    submitVerify() {

    },
  }
}
</script>

<style scoped>
h3 {
  font-size: 1.75rem;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  display: inline;
  user-select: none;
}
</style>