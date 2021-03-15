<template>
<div>
  <van-tabs v-model="active">
    <van-tab title="全部">
      <OrderCard>
        <span slot="shopName">先辈红茶铺</span>
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772363621,630429607&fm=26&gp=0.jpg" slot="goodsPicture" class="goodsPicture">
        <span slot="amount">1</span>
        <span slot="goodsName">昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮</span>
        <span slot="goodsSKU">精品</span>
        <span slot="price">12</span>
        <span slot="totalPrice">12</span>
      </OrderCard>
    </van-tab>
    <van-tab title="待付款">内容 2</van-tab>
    <van-tab title="待发货">内容 3</van-tab>
    <van-tab title="待收货">内容 4</van-tab>
    <van-tab title="待评价">内容 4</van-tab>
  </van-tabs>
</div>
</template>

<script>
import OrderCard from "@/components/subcomponents/OrderCard";
export default {
name: "OrderManage",
  data() {
    return {
      active: 0,
    };
  },
  components: {OrderCard}
}
</script>

<style scoped>
.goodsPicture{
  width:auto;
  height:auto;
  max-height: 100%;
  max-width: 100%;
}

</style>