<template>
  <div>
    <!-- 个人信息区域 -->

    <!-- 收藏区域 -->
    <van-grid :column-num="2">
      <van-grid-item icon="star-o" text="收藏"/>
      <van-grid-item icon="clock-o" text="历史"/>
    </van-grid>
    <!-- 信息区域 -->
    <van-cell-group>
      <van-cell is-link title="消息通知"/>
      <van-cell is-link title="用户反馈"/>
    </van-cell-group>
  </div>
</template>

<script>

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