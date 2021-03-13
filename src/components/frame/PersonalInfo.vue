<template>
  <div>
    <!-- 个人信息区域 -->
    <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    />
    <!-- 收藏区域 -->
    <VanGrid :border="false" :column-num="4" style="height: 70px">
      <VanGridItem icon="star-o" style="height: 70px" text="收藏" @click="$router.push('')"/>
      <VanGridItem icon="clock-o" style="height: 70px" text="历史记录" @click="$router.push('/history')"/>
      <VanGridItem icon="logistics" style="height: 70px" text="待收货" @click="$router.push('')"/>
      <VanGridItem icon="comment-o" style="height: 70px" text="待评价" @click="$router.push('')"/>
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