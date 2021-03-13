<template>
  <ARow>
    <ARow :style="{height : '5vw','margin-left':'10px','margin-top':'2px', color : 'grey',fontSize : '3vw'}">
      <ACol :style="{'font-size':'3vw','margin-top':'2vw'}" span="4">
        店铺名
      </ACol>
      <ACol :style="{'font-size': '5vw','font-weight':'bold'}" span="12">
        仙贝红茶铺
      </ACol>
    </ARow>
    <ARow :style="{height : '5vw','margin-left':'10px','margin-top':'2px', color : 'grey',fontSize : '3vw'}">
      <ACol :style="{'font-size':'3vw','margin-top':'1vw'}" span="4">
        简介
      </ACol>
      <ACol :style="{'font-size': '4vw'}" span="18">
        主营：精品红茶、高山红茶、批发红茶、阿萨姆红茶、适合泡奶茶，多买多送
      </ACol>
    </ARow>
    <van-cell :style="{'border-radius' : '25px'}" is-link @click="toShop">
      <div class="CommentsDetail">
        点击进入商店
      </div>
    </van-cell>
  </ARow>

</template>

<script>
export default {
  name: "ShopBlock",
  methods: {
    toShop() {
      this.$router.push({ path: '/Shop' })
    }
  }
}
</script>

<style scoped>

</style>