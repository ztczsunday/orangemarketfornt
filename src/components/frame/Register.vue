<template>
  <AForm class="register">
    <h3>快速注册</h3>
    <hr/>
  </AForm>
</template>

<script>
export default {
  name: "Register",
  created() {
  },
  destroyed() {
  },
  data() {
    return {}
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

.register {
  max-width: 300px;
  margin: 40px auto auto;
  position: relative;
  top: 0;
}
</style>