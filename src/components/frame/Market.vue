<template>
  <div>
    <div class="col-12" style="text-align: center;">
      <code>RouterList:</code>
    </div>
    <div class="col-12" style="text-align: center;">
      <AButton @click="$router.push('/login')">Login</AButton>
      <AButton @click="$router.push('/register')">Register</AButton>
      <AButton @click="$router.push('/goodsinfo')">GoodsInfo</AButton>
      <AButton @click="$router.push('/personalinfo')">PersonalInfo</AButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "Market",
  created() {
  }
}
</script>

<style scoped src="../../assets/css/grid.css"/>
<style scoped>
</style>
