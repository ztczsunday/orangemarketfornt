<template>
  <div>
    <VanTabs v-model="active">
      <VanTab title="全部">
        <ARow v-if="orderData.information.length === 0 && showCard === true" type="flex" justify="center"
              :style="{'color':'black','font-weight': 'bold','height':'50vw','text-align':'center'}">
          <ACol span="24">
            <img src="../../assets/getNothing.png" class="goodsPicture">
          </ACol>
          <ACol>
            无订单记录...
          </ACol>
        </ARow>
        <ARow v-else-if="showCard === true">
          <ARow  v-for="(item,i) in orderData.information" :key="i">
            <OrderCard>
              <span slot="shopName">{{item.shopName}}</span>
              <img slot="goodsPicture"
                   class="goodsPicture"
                   :src="item.subIcon">
              <span slot="amount">{{item.countCommodity}}</span>
              <span slot="goodsName">{{item.commodityName}}</span>
              <span slot="goodsSKU">{{item.subName}}</span>
              <span slot="price">{{item.price}}</span>
              <span slot="totalPrice">{{item.price * item.countCommodity}}</span>
              <span slot="status">订单{{item.itemName}}</span>
            </OrderCard>
          </ARow>
        </ARow>
      </VanTab>
      <VanTab title="待付款">内容 2</VanTab>
      <VanTab title="待发货">内容 3</VanTab>
      <VanTab title="待收货">内容 4</VanTab>
      <VanTab title="待评价">内容 5</VanTab>
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
    // this.orderData.information = result.data.information;
    this.showCard = true;
    console.log(result.data);
  },
  data() {
    return {
      showCard : false,
      active: 0,
      orderData: {
        needPay : 0,
        needPost : 0,
        needRecive:0,
        needComment:0,
        information: [{
          shopName : "先辈红茶铺",
          countCommodity : 2,
          commodityName : " 昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮 ",
          subName : "精品",
          price : 1145141919810,
          itemName : "已完成",
          subIcon :"https://imgsa.baidu.com/forum/w%3D580/sign=53e4d0b8bede9c82a665f9875c8080d2/a6bd62a98226cffcdfab8b33b4014a90f403eaa2.jpg"
        }]
      }
    };
  },
  components: { OrderCard },
  mounted() {

  },
  methods: {
    getView(){
      for(let item of this.orderData.information){
        if(item.itemName === "待付款"){
          this.orderData.needPay++;
        }
        else if(item.itemName === "待发货"){
          this.orderData.needPost++;
        }
        else if(item.itemName === "待收货"){
          this.orderData.needRecive++;
        }
        else if(item.itemName === "待评价"){
          this.orderData.needComment++;
        }
      }
    }

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