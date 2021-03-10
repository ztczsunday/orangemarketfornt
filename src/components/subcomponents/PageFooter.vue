<template>
  <VanTabbar v-model="active">
    <VanTabbarItem icon="home-o" @click="$router.push('/')">商城主页</VanTabbarItem>
    <VanTabbarItem icon="friends-o" @click="$router.push('/')">标签</VanTabbarItem>
    <VanTabbarItem icon="setting-o" @click="$router.push('/')">标签</VanTabbarItem>
  </VanTabbar>
</template>

<script>
export default {
  name: "PageFoot",
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>