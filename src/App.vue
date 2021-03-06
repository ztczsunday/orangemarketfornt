<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/frame/Login";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #F5F5F5;
}
</style>
