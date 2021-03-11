<template>
  <div>
    <!-- 输入任意文本 -->
    <VanField v-model="text" label="文本" />
    <!-- 输入手机号，调起手机号键盘 -->
    <VanField v-model="tel" type="tel" label="手机号" />
    <!-- 允许输入正整数，调起纯数字键盘 -->
    <VanField v-model="digit" type="digit" label="整数" />
    <!-- 允许输入数字，调起带符号的纯数字键盘 -->
    <VanField v-model="number" type="number" label="数字" />
    <!-- 输入密码 -->
    <VanField v-model="password" type="password" label="密码" />
  </div>
</template>

<script>
export default {
  name: "Register",
  created() {
  },
  destroyed() {
  },
  data() {
    return {
      text: null,
      tel: null,
      digit: null,
      number: null,
      password: null
    }
  },
  computed: {},
  methods: {
    handleSubmit() {

    }
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