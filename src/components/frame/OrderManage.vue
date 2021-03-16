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
            <OrderCard :type="item.itemName" :id="item.orderId" :place="orderData.place">
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
      <VanTab title="待付款">
        <ARow v-if="orderData.needPay === 0 && showCard === true" type="flex" justify="center"
              :style="{'color':'black','font-weight': 'bold','height':'50vw','text-align':'center'}">
          <ACol span="24">
            <img src="../../assets/getNothing.png" class="goodsPicture">
          </ACol>
          <ACol>
            无订单记录...
          </ACol>
        </ARow>
        <ARow v-else-if="showCard === true">
          <ARow  v-for="(item,i) in orderData.payList" :key="i">
            <OrderCard :type="item.itemName" :id="item.orderId" :place="orderData.place">
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
      <VanTab title="待发货">
        <ARow v-if="orderData.needPost === 0 && showCard === true" type="flex" justify="center"
              :style="{'color':'black','font-weight': 'bold','height':'50vw','text-align':'center'}">
          <ACol span="24">
            <img src="../../assets/getNothing.png" class="goodsPicture">
          </ACol>
          <ACol>
            无订单记录...
          </ACol>
        </ARow>
        <ARow v-else-if="showCard === true">
          <ARow  v-for="(item,i) in orderData.postList" :key="i">
            <OrderCard :type="item.itemName" :id="item.orderId" :place="orderData.place">
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
      <VanTab title="待收货">
        <ARow v-if="orderData.needRecive === 0 && showCard === true" type="flex" justify="center"
              :style="{'color':'black','font-weight': 'bold','height':'50vw','text-align':'center'}">
          <ACol span="24">
            <img src="../../assets/getNothing.png" class="goodsPicture">
          </ACol>
          <ACol>
            无订单记录...
          </ACol>
        </ARow>
        <ARow v-else-if="showCard === true">
          <ARow  v-for="(item,i) in orderData.reciveeList" :key="i">
            <OrderCard :type="item.itemName" :id="item.orderId" :place="orderData.place">
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
      <VanTab title="待评价">
        <ARow v-if="orderData.needComment === 0 && showCard === true" type="flex" justify="center"
              :style="{'color':'black','font-weight': 'bold','height':'50vw','text-align':'center'}">
          <ACol span="24">
            <img src="../../assets/getNothing.png" class="goodsPicture">
          </ACol>
          <ACol>
            无订单记录...
          </ACol>
        </ARow>
        <ARow v-else-if="showCard === true">
          <ARow  v-for="(item,i) in orderData.commentList" :key="i">
            <OrderCard :type="item.itemName" :id="item.orderId" :place="orderData.place">
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
    console.log(result.data);
  },
  data() {
    return {
      showCard : false,
      active: 0,
      orderData: {
        needPay : 0,
        payList : [],
        needPost : 0,
        postList : [],
        needRecive : 0,
        reciveeList : [],
        needComment:0,
        commentList : [],
        place : "OrderManage",
        information: [{
          orderId :114514,
          shopName : "先辈红茶铺",
          countCommodity : 2,
          commodityName : " 昏睡红茶急速昏睡效力持久仙贝自用多种口味68包包邮 ",
          subName : "精品",
          price : 1145141919810,
          itemName : "待收货",
          subIcon :"https://imgsa.baidu.com/forum/w%3D580/sign=53e4d0b8bede9c82a665f9875c8080d2/a6bd62a98226cffcdfab8b33b4014a90f403eaa2.jpg"
        }]
      }
    };
  },
  components: { OrderCard },
  mounted() {
    this.getView();
    this.showCard = true;
  },
  methods: {
    getView(){
      for(let item of this.orderData.information){
        if(item.itemName === "待付款"){
          this.orderData.needPay++;
          this.orderData.payList.push(item);
        }
        else if(item.itemName === "待发货"){
          this.orderData.needPost++;
          this.orderData.postList.push(item);
        }
        else if(item.itemName === "待收货"){
          this.orderData.needRecive++;
          this.orderData.reciveeList.push(item);
        }
        else if(item.itemName === "待评价"){
          this.orderData.needComment++;
          this.orderData.commentList.push(item);
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