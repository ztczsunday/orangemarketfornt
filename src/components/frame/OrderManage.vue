<template>
  <div>
    <VanTabs v-model="active">
      <VanTab title="全部">
        <OrderCard>
          <span slot="shopName">先辈红茶铺</span>
          <img slot="goodsPicture"
               alt="" class="goodsPicture" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772363621,630429607&fm=26&gp=0.jpg">
          <span slot="amount">1</span>
          <span slot="goodsName">昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮</span>
          <span slot="goodsSKU">精品</span>
          <span slot="price">12</span>
          <span slot="totalPrice">12</span>
        </OrderCard>
      </VanTab>
      <VanTab title="待付款">内容 2</VanTab>
      <VanTab title="待发货">内容 3</VanTab>
      <VanTab title="待收货">内容 4</VanTab>
      <VanTab title="待评价">内容 4</VanTab>
    </VanTabs>
  </div>
</template>

<script>
import OrderCard from "@/components/subcomponents/OrderCard";

export default {
  name: "OrderManage",
  async created() {
    const { $ } = await import("@/util/ajax");
    await this.$store.dispatch('doLogin');
    const result = await $.post('/order');
    this.orderData.information = result.data;
    console.log(result.data);
  },
  data() {
    return {
      active: 0,
      orderData: {
        information: [/* 对象的数组，存储图片的数组 */]
      }
    };
  },
  components: { OrderCard },
  methods: {

  }
}
</script>

<style scoped>
.goodsPicture {
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
}

</style>