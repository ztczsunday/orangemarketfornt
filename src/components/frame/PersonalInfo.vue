<template>
  <div>
    <!-- 个人信息区域 -->

    <!-- 收藏区域 -->
    <VanGrid :border="false" :column-num="4" style="height: 70px">
      <VanGridItem icon="star-o" text="收藏" style="height: 70px" @click="$router.push('')"/>
      <VanGridItem icon="clock-o" text="历史记录" style="height: 70px" @click="$router.push('/history')"/>
      <VanGridItem icon="logistics" text="待收货" style="height: 70px" @click="$router.push('')"/>
      <VanGridItem icon="comment-o" text="待评价" style="height: 70px" @click="$router.push('')"/>
    </VanGrid>
    <!-- 信息区域 -->
    <VanCellGroup>
      <VanCell is-link title="用户反馈"/>
    </VanCellGroup>
  </div>
</template>

<script>
import '@/assets/css/grid.css';

export default {
  name: "PersonalInfo",
  data() {
    return {
      userData: {},
      userInfo: {},
      nameshow: false
    }
  }
}
</script>

<style scoped>
</style>