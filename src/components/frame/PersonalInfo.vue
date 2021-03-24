<template>
  <div>
    <!-- 个人信息区域 -->
    <VanCard
        :title="userInfo.username"
        :desc="userInfo.userSignature"
        :thumb="userInfo.userSelfie"
    />
    <!-- 收藏区域 -->
    <VanGrid :border="false" :column-num="4" style="height: 70px">
      <VanGridItem icon="star-o" style="height: 70px" text="收藏" @click="$router.push('/Favorite')"/>
      <VanGridItem icon="clock-o" style="height: 70px" text="历史记录" @click="$router.push('/History')"/>
      <VanGridItem icon="logistics" style="height: 70px" text="待收货" @click="$router.push('')"/>
      <VanGridItem icon="comment-o" style="height: 70px" text="待评价" @click="$router.push('')"/>
    </VanGrid>
    <!-- 信息区域 -->
    <VanCellGroup>
      <VanCell is-link title="用户反馈"/>
      <VanCell is-link title="我的商铺" @click="$router.push('/ShopManage')"/>
      <ARow style="border: 10px solid #F5F5F5;"/>
      <VanCell title="退出登录" style="text-align: center" @click="logOut"/>
    </VanCellGroup>
  </div>
</template>

<script>
import '@/assets/css/grid.css';

export default {
  name: "PersonalInfo",
  async created() {
    const { $ } = await import("@/util/ajax");
    const result = await $.get('/userInfo');
    if (result.data.success) {
      this.userInfo = result.data.information;
    }
  },
  data() {
    return {
      userInfo: {
        userAlipayAccount: "支付宝",
        userEmail: "邮箱",
        userGender: "男",
        userLicense: "身份证",
        userSelfie: "",
        userSignature: "いいね！",
        userTelephone: "15770742170",
        username: "15770742170"
      }
    }
  },
  methods: {
    async logOut() {
      const { $ } = await import("@/util/ajax");
      this.$cookies.remove("username");
      this.$cookies.remove("password");
      await $.get("/logout");
      await this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
</style>