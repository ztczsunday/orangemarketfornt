<template>
  <div>
    <VanTabs v-model="active">
      <VanTab title="全部">
        <ARow v-if="orderData.information.length === 0">
          无订单记录
        </ARow>
        <ARow v-else>
          <ARow  v-for="(item,i) in orderData.information" :key="i">
            <OrderCard>
              <span slot="shopName">{{item.shopName}}</span>
              <img slot="goodsPicture"
                   alt="" class="goodsPicture" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3772363621,630429607&fm=26&gp=0.jpg">
              <span slot="amount">{{item.countCommodity}}</span>
              <span slot="goodsName">{{item.commodityName}}</span>
              <span slot="goodsSKU">{{item.subName}}</span>
              <span slot="price">{{item.price}}</span>
              <span slot="totalPrice">{{item.price * item.countCommodity}}</span>
            </OrderCard>
          </ARow>
        </ARow>
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
    const result = await $.post('/order');
    this.orderData.information = result.data.information;
    console.log(result.data);
  },
  data() {
    return {
      active: 0,
      orderData: {
        information: [{
          shopName : "先辈红茶铺",
          countCommodity : 2,
          commodityName : " 昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮 ",
          subName : "精品",
          price : 1145141919810
        }]
      }
    };
  },
  components: { OrderCard },
  methods: {

  },
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